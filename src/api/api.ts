import { Get, Post } from "../util/request";

/**
 * 获取城市列表
 */
export const cityListApi = () => Get({ url: "city/list" });
/**
 * 筛选房源数据
 */
export const filterHouseApi = (params:any) =>
  Get({ url: `house/filtrate/${params.cityId}`, params });
