//把驼峰转换为横杆
export const toLine = (value: string) => {
    return value.replace(/(A-Z)g/,'-$1').toLocaleLowerCase()
}