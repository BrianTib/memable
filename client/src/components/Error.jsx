import styles from './Error.module.css';

export default function Error({ message }) {
    return (
        <div className="h-full flex flex-col items-center px-5 justify-center gap-10">
            <h1 className="text-3xl md:text-4xl">
                {message || 'Something went horribly wrong... Mind trying again?'}
            </h1>
            <div id={styles.pepeCrying}>
                <img src="/images/pepe-crying.webp" alt="Pepe crying"></img>
            </div>
        </div>
    );
}
