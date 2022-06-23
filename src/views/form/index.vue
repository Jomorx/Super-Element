<template>
    <se-form
    ref="form" label-width="100px" :options="options" @on-change="handleChange" @before-upload="handleBeforeUpload"
        @on-preview="handlePreview" @on-remove="handleRemove" @before-remove="beforeRemove" @on-exceed="handleExceed"
        @on-success="handleSuccess">
        <template #uploadArea>
            <el-button size="default">Click to upload</el-button>
        </template>
        <template #uploadTip>
            <div style="color: #ccc; font-size: 12px;">
                jpg/png files with a size less than 500kb
            </div>
        </template>
        <template #action="scope">
            <el-button type="primary" @click="submitForm(scope)">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
        </template>
    </se-form>
</template>

<script setup lang='ts'>
import { ElMessage, ElMessageBox } from 'element-plus';
import { FormOptions, Scope } from '../../components/form/src/types/type';
import {ref} from 'vue'
let form = ref()
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
            trigger: 'blur'
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
            trigger: 'blur'
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
    }, {
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
        placeholder:"请输入描述",
        label: "描述",
        rules: [
            {
                required:true,
                message:"描述不能为空",
                trigger:"blur"
            }
        ]
    }
]
const handlePreview = (val: any) => {
    console.log("handlePreview")
}
const handleRemove = (val: any) => {
    console.log("handleRemove")
}
const beforeRemove = (val: any) => {
    console.log("beforeRemove")
    return ElMessageBox.confirm(
        `Cancel the transfert of ${val.uploadFile.name} ?`
    ).then(
        () => true,
        () => false
    )
}
const handleExceed = (val: any) => {
    ElMessage.warning(
        `The limit is 3, you selected ${val.files.length} files this time, add up to ${val.files.length + val.fileList.length
        } totally`
    )
    console.log("handleExceed")
}
const handleSuccess = (val: any) => {
    console.log("success")
    console.log(val)
}
const handleChange = (val: any) => {
    console.log(val)
}
const handleBeforeUpload = (val: any) => {
    console.log(val)
}
const submitForm = (scope: Scope) => {
    scope.form.validate((valid) => {
        if (valid) {
            console.log(scope.model)
            ElMessage.success("提交成功")

        } else {
            ElMessage.error("表单有误,请检查")
        }
    })
}
const resetForm = () => {
    form.value.resetFields()
}
</script>

<style scoped lang='scss'>
</style>