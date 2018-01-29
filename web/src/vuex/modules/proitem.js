import Vue from 'vue';
import http from '../../public/js/http';
import { formatDate } from '../../public/js/common';
export default {
    namespaced: true,
    state: {
        vm: {
            visible: false,
            searchVisible: false,
            original:[]
        },
        proitemList: [],
        queryModel: {
            type: 1,
            prName: ""
        },
        formModel: {
            type:"",
            prName: "",
            prDescribe: ""
        },
        filterPoritem:[]
    },
    mutations: {
        getList(state, params) {
            http.get({
                url: '/proitems',
                data:{
                   type:state.queryModel.type 
                },
                success: data => {
                    state.proitemList = data;
                    state.vm.original = data;
                },
                error: msg => {
                    Vue.$vux.toast.text(msg, 'top');
                }
            })
        },
        getProitem(state, proitemId) {
            http.get({
                url: "/proitem",
                data: {
                    proitemId: proitemId
                },
                success: data => {
                    state.formModel = data;
                },
                error: msg => {
                    Vue.$vux.toast.text(msg, 'top');
                }
            })
        },
        getProitemSearch(state, params) {
            console.log(state.queryModel);
            http.post({
                url: '/proitemSearch',
                data: state.queryModel,
                type: 'json',
                success: data => {
                    state.proitemList = data;
                    state.vm.searchVisible = false;
                },
                error: msg => {
                    Vue.$vux.toast.text(msg, 'top');
                }
            })
        },
        clear(state, params) {
            for (const key in state.formModel) {
                state.formModel[key] = "";
            }
        },
        add(state, params) {
            if (!state.formModel.prName) {
                Vue.$vux.toast.text('名称不能为空！', 'top');
                return false;
            } else if (!state.formModel.prDescribe) {
                Vue.$vux.toast.text('描述不能为空！', 'top');
                return false;
            }
            http.post({
                url: '/addProitem',
                type: 'json',
                data: state.formModel,
                success: data => {
                    Vue.$vux.toast.text('添加成功', 'top');
                    this.commit('common/proitem/clear');
                    this.commit({
                        type: 'common/proitem/getList'
                    });
                },
                error: msg => {
                    Vue.$vux.toast.text(msg, 'top');;
                }
            })
        },
        edit(state, params) {
            if (!state.formModel.prName) {
                Vue.$vux.toast.text('名称不能为空！', 'top');
                return false;
            } else if (!state.formModel.prDescribe) {
                Vue.$vux.toast.text('描述不能为空！', 'top');
                return false;
            }
            http.post({
                url: '/updateProitem',
                type: 'json',
                data: state.formModel,
                success: data => {
                    Vue.$vux.toast.text('修改成功', 'top');
                    this.commit({
                        type: 'common/proitem/getList'
                    });
                },
                error: msg => {
                    Vue.$vux.toast.text(msg, 'top');
                }
            })
        },
        delete(state, params) {
            http.get({
                url: '/deleteProitem',
                data: {
                    id: params.id
                },
                success: data => {
                    Vue.$vux.toast.text('删除成功', 'top');
                    this.commit({
                        type: 'common/proitem/getList'
                    });
                },
                error: msg => {
                    Vue.$vux.toast.text(msg, 'top');
                }
            })
        }
    }
}