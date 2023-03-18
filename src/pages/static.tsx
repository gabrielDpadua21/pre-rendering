import Static_one from "@/components/static_one"

export function getStaticProps() {
    return {
        props: {
            number: Math.floor(Math.random() * 10) + 1
        },
        revalidate: 30
    }
}


export default function Static(props: any) {
    return (
        <>
          <div className="static">
            <Static_one/>
          </div>
          <div className="static">
            <h1>
                Static #02
            </h1>
            <h2>
                Random number integer: {props.number}
            </h2>
          </div>
        </>
    )
}