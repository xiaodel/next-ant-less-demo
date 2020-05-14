import {Button, Table} from "antd";
import Link from "next/link";
import classnames from "classnames";
import Meta from "../../components/Meta";
import Header from "../../components/Header";
import HouseMainList from "../../components/HouseMainList";
import {cityListApi, filterHouseApi} from "../../api/api";
import styles from "./index.less";
import {Component} from "react";

export default class Index extends Component<any> {
    meta = {
        title: "乐猪租房-成都租房",
        meta: [
            {
                keywords:
                    "成都租房,成都合租,成都整租,成都民宿,成都公寓,成都短租,成都租房,租房成都,成都租房网,成都租房免中介费,成都租房网",
            },
            {
                description:
                    "成都租房,成都合租,成都整租,成都民宿,成都公寓,成都短租,成都租房,租房成都,成都租房网,成都租房免中介费,成都租房网",
            },
            {
                name: "viewport",
                content: "initial-scale=1.2, width=device-width",
            },
        ],
    };

    static async getInitialProps({req}) {
        let cityList = await cityListApi();
        let houseList = await filterHouseApi({cityId: 1});
        return {
            cityList,
            houseList,
        };
    }

    render() {
        let {cityList, houseList} = this.props;
        let {list} = houseList;
        let dataSource = cityList.map((v, index) => ({
            key: index,
            title: v.name,
            domain: v.domain,
            code: v.code,
        }));

        const columns = [
            {
                key: "title",
                title: "Title",
                dataIndex: "title",
            },
            {
                key: "domain",
                title: "Domain",
                dataIndex: "domain",
            },
            {
                key: "code",
                title: "Code",
                dataIndex: "code",
            },
        ];

        return (
            <>
                <Meta {...this.meta}></Meta>
                <Header></Header>

                <div className={styles.name}>Welcome to js!</div>
                <Table
                    dataSource={dataSource}
                    columns={columns}
                    title={() => "城市列表"}
                ></Table>
                <ul>
                    {list.map((v) => (
                        <li className={styles.houseItem} key={v.id}>
                            <Link href={`/room/${v.id}.html`}>
                                <a>
                                    <HouseMainList {...v} />
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
