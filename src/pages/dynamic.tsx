export function getServerSideProps() {
    console.log('[server] generate.....');
    return {
        props: {
            number: Math.random()
        }
    };
}


export default function Dynamic(props: any) {
    return (
        <>
            <div className="static">
                <h1>
                    Dinamic #01
                </h1>
                <h2>
                    {props.number}
                </h2>
            </div>
        </>
    )
}