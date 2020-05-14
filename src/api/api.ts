import {Get, Post} from "../util/request";

/**
 * 获取城市列表
 */
export const cityListApi = () => Get({url: "city/list"});


interface filterHouseQuery {
    cityId: number;
    brandId?: number;
    pageNum?: number;
    teamId?: number;
    location?: string;
    commuter?: string;
    fame?: string | number;
    community?: number;
    pageSize?: number;

    [names: string]: any;
}

/**
 * 筛选房源数据
 */
export const filterHouseApi = (params: filterHouseQuery) =>
    Get({url: `house/filtrate/${params.cityId}`, params});
