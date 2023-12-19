// function Beer(props) {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <p>{props.desc}</p>
//         </div>
//     );
// }

function Beer({ title, desc}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
    );
}

export default Beer;
