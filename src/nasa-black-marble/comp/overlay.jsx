import styles from "../style/overlay.module.css";

export default function Overlay() {
  return (
    <>
      <section className={styles.overlay_wrapper}>
        <div className={styles.intro}>
          <div className={styles.bigScreen}>
            <div className={styles.streetMap}></div>
            <div className={styles.basicMap}></div>
            <div className={styles.outdoorMap}></div>
            <div className={styles.darkMonoChromeMap}></div>
            <div className={styles.physicalMap}></div>
            <div className={styles.whiteMonoChromeMap}></div>
            <div className={styles.winterMap}></div>
          </div>
          <div className={styles.smallScreen}>
            <div className={styles.streetMap_m}></div>
            <div className={styles.basicMap_m}></div>
            <div className={styles.outdoorMap_m}></div>
            <div className={styles.darkMonoChromeMap_m}></div>
            <div className={styles.physicalMap_m}></div>
            <div className={styles.whiteMonoChromeMap_m}></div>
            <div className={styles.winterMap_m}></div>
          </div>
        </div>
      </section>
    </>
  );
}
