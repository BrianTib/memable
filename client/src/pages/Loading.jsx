import styles from './Loading.module.css';

export default function Loading() {
    return (
        <div className="relative h-full flex items-center justify-center">
            <h1 className="text-4xl">Loading...</h1>
            <div id={styles.loading}>
                <img src="/images/pepe-running.gif" alt="Pepe running while things load"></img>
            </div>
        </div>
    );
}
