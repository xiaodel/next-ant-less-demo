import styles from "./house.less";

export default (props) => {
  return (
    <div className={styles.mainItem}>
      <div className={styles.left}>
        <img className={styles.coverImage} src={props.coverPic}></img>
      </div>
      <div className={styles.right}>
        <div className='money'>{`${props.price}元/月`}</div>
        <div>{props.name}</div>
        <div>{props.traffic}</div>
      </div>
    </div>
  );
};
