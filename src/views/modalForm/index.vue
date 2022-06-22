<template>
        <el-button
         type="primary" @click="open">打开表单</el-button>
        
        <m-modal-form isScroll v-model:visible="visible" title="编辑用户" :options="options" :onChange="onChange" :onSuccess="onSuccess">
            <template #footer="{ form }">
                <el-button type="primary" @click="cancel(form)">取消</el-button>
                <el-button type="primary" @click="confirm(form)">确认</el-button>
            </template>
            <!-- 上传文件按钮 -->
            <template #uploadArea>
                <el-button size="default">Click to upload</el-button>
            </template>
            <!-- 上传文件提示 -->
            <template #uploadTip>
                <div style="color: #ccc; font-size: 12px;">
                    jpg/png files with a size less than 500kb
                </div>
            </template>
        </m-modal-form>
</template>

<script setup lang='ts'>
import { ElMessage, FormInstance } from 'element-plus';
import { ref } from 'vue'
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
        prop: "password",
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
        prop: "job",
        placeholder: "默认职位",
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
        attrs: {
            style: {
                width: "100%",
            }
        }
    },
    {
        type: 'checkbox-group',
        value: [],
        prop: "like",
        label: '爱好',
        rules: [{
            required: true,
            message: '爱好不能为空',
            trigger: 'change'
        }],
        children: [{
            type: 'checkbox',
            label: "足球",
            value: '1'
        }, {
            type: 'checkbox',
            label: "篮球",
            value: '2'
        }, {
            type: 'checkbox',
            label: "乒乓球",
            value: '3'
        }]
    },
    {
        type: 'radio-group',
        value: '',
        prop: "gender",
        label: '性别',
        rules: [{
            required: true,
            message: '性别不能为空',
            trigger: 'change'
        }],
        children: [{
            type: 'radio',
            label: "男",
            value: 'male'
        }, {
            type: 'radio',
            label: "女",
            value: 'female'
        },
        {
            type: 'radio',
            label: "保密",
            value: 'null'
        }]
    },
    {
        type: "upload",
        label: "上传",
        prop: "pic",
        uploadAttrs: {
            action: "https://jsonplaceholder.typicode.com/posts/",
            multiple: true,
            limit: 3
        },
        rules: [
            {
                required: true,
                message: "上传文件不能为空",
                trigger: 'blur'
            }
        ]
    },
    {
        type: "editor",
        value: "",
        prop: "desc",
        placeholder: "请输入描述",
        label: "描述",
        rules: [
            {
                required: true,
                message: "描述不能为空",
                trigger: "blur"
            }
        ]
    }
]
let visible = ref<boolean>(false)
const open = () => {
    visible.value = true
}
const onChange= (val:any)=>{
    console.log("change",val)
}

const onSuccess= (val:any)=>{
    console.log("success",val)
}
//取消
let cancel = (form: FormInstance) => {

}
//确认
let confirm = (form: FormInstance) => {
    let validate = form.validate()
    let model = form.getFormData()
    console.log(model)
    validate((valid: any) => {
        if (valid) {
            ElMessage.success("成功")
        } else {
            ElMessage.error("失败")
        }
    })
}


</script>

<style scoped lang='scss'>
</style>