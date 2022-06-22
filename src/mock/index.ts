import Mock from "mockjs";
const Random = Mock.Random;

interface DataList {
  data: string;
  name: string;
  address: string;
}

// 列表数据 100 条
const dataList: DataList[] = [];
for (let i = 0; i < 100; i++) {
  const template = {
    date: Random.date("yyyy-MM-dd"),
    name: Random.name(),
    address: Random.province(true),
  };
  dataList.push(template);
}

// 分页接口
Mock.mock("/api/list", "post", (params: any) => {
  let info = JSON.parse(params.body);
  let [index, size, total] = [info.current, info.pageSize, dataList.length];
  let len = total / size;
  let totalPages = len - parseInt(String(len));
  let newDataList = dataList.slice(index * size, (index + 1) * size);

  return {
    code: "200",
    message: "success",
    data: {
      current: index,
      pageSize: size,
      rows: newDataList,
      total: total,
      totalPages: totalPages,
    },
  };
});