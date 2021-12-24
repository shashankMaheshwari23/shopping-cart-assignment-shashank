import React from "react"
export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError : false
        }
    }
    static getDerivedStateFromError(){
        return {hasError:true}
    }
    componentDidCatch(error){
        console.log(error)
    }
    render(){
        return(
            <>
            {this.state.hasError?<div>Something went wrong...</div>:this.props.children}
            </>
        )
    }
}