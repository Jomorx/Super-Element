<template>
    <m-form label-width="100px" :options="options"></m-form>
</template>

<script setup lang='ts'>
import { FormOptions } from '../../components/form/src/types/type';

const options: FormOptions[] = [
    {
        type: "input",
        value: "",
        label: "用户名",
        prop: "username",
        rules: [
            {
                required: true,
                message: "用户名不能为空",
                trigger: "blur"
            },
            {
                min: 2,
                max: 6,
                message: "用户名在2-6之间",
                trigger: "blur"
            }
        ],
        attrs: {
            clearable: true
        }
    },
    {
        type: "input",
        value: "",
        placeholder: "password",
        prop: "role",
        label: "密码",
        rules: [
            {
                required: true,
                message: "密码不能为空",
                trigger: "blur"
            }, {
                min: 6,
                max: 15,
                message: "密码在6-15位之间",
                trigger: "blur"
            }
        ],
        attrs: {
            showPassword: true,
            clearable: true
        }
    }, {
        type: "select",
        value: "",
        prop: "password",
        // placeholder:"默认职位",
        label: "职位",
        rules: [
            {
                required: true,
                message: "职位不能为空",
                trigger: "blur"
            },

        ], children: [{
            type: 'option',
            label: '经理',
            value: '1'
        }, {
            type: 'option',
            label: '主管',
            value: '2'
        }, {
            type: 'option',
            label: '员工',
            value: '3'
        }],
        attrs:{
            style:{
                width:"100%",
            }
        }
    },
    {
        type:'checkbox-group',
        value:[],
        prop:"like",
        label:'爱好',
        rules:[{
            required:true,
            message:'爱好不能为空',
            trigger:'blur'
        }],
        children:[{
            type:'checkbox',
            label:"足球",
            value:'1'
        },{
            type:'checkbox',
            label:"篮球",
            value:'2'
        },{
            type:'checkbox',
            label:"乒乓球",
            value:'3'
        }]
    },
    {
        type:'radio-group',
        value:'',
        prop:"gender",
        label:'性别',
        rules:[{
            required:true,
            message:'性别不能为空',
            trigger:'blur'
        }],
        children:[{
            type:'radio',
            label:"男",
            value:'male'
        },{
            type:'radio',
            label:"女",
            value:'female'
        },
        {
            type:'radio',
            label:"保密",
            value:'null'
        }]
    },{
        type:"upload",
        label:"上传",
        prop:"pic"
    }
]
</script>

<style scoped lang='scss'>
</style>