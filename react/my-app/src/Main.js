import React,{Component} from "react";
import CreateCompontTheme from "./CreateCompontTheme";

export default class MainPage extends Component {
    render () {
        return (
            <div>
                <h2>This is main content</h2>
                <CreateCompontTheme />
            </div>
        )
    }
}
