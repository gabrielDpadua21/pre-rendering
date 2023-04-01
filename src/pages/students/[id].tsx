
export async function getStaticPaths() {
    const resp = await fetch('http://localhost:3000/api/courses/ids')
    const ids = await resp.json()

    const paths = ids.map((id: number) => { return { params: { id: `${id}` } }})

    return {
        fallback: false,
        paths
    }
}

export async function getStaticProps(context: any) {
    const resp = await fetch(`http://localhost:3000/api/students/${context.params.id}`)
    const student = await resp.json()
    return {
        props: {
            student
        }
    }
}

const Students = (props: any) => {
    const { student } = props;
    return (
        <>
            <div className='static'>
                <h1>
                    Students Details
                </h1>
                <ul>
                    <li>{student.id}</li>
                    <li>{student.name}</li>
                    <li>{student.email}</li>
                </ul>
            </div>
        </>
    )
}

export default Students