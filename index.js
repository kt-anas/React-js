// first line React js
// ReactDOM .render 
// ReactDOM.render(<h1>Hello everyone hello world </h1>, document.getElementById("root"))
// ReactDOM.render(<ul><li>thing 1</li><li>thing2</li></ul>,document.getElementById("root"))


// function MainContnt(){
//     return(
//         <div>
//             <h1> React js king </h1>
//             <h>hello ther js is somthing in world</h>
//         </div>    
//     )
//  }
// ReactDOM.render(
//    <div>
//       <MainContnt/>
//    </div>
//    ,document.getElementById("root")
// )  
 


// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className  = "header"
// document.getElementById("root").append(h1)
 


// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className  = "header"
//  console.log(h1)
// const element = <h1 className = "header">This is JSX</h1>
//     console.log(element)
// ReactDOM.render(element, document.getElementById("root"))



// JSX

// const page= (
// <div>
//     <h1>header</h1>
//         <h1 className = "header">
//              This is JSX
//          </h1>
//         <p>This is a paragrapch</p>
//  </div>
// )
// ReactDOM.render(
//     page,
//     document.getElementById("root")

// )

function tempro(){
    return (
        <div>
            <h1>
                About React js is fram work
            </h1>
            <ul>
                <li>
                    was first about React
                </li>
                <li>
                    Was originally created by Jordan Walk
                </li>
            </ul>
        </div>
    )
}

ReactDOM.render(tempro(),document.getElementById("root"))