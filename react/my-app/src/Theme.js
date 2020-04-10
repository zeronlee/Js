// @flow
import React, { Component } from 'react';
import Button from '@atlaskit/button';
import { AtlaskitThemeProvider } from '@atlaskit/theme';
import App from './App';
// import CreateCompontTheme from "./CreateCompontTheme";
// TODO 创建主题
// 更改AtlaskitThemeProvider 增加自定义颜色 默认用法无法更改
// const Theme = createTheme();
import { Reset, ResetTheme } from '@atlaskit/theme';
console.log(ResetTheme.Provider);

interface Props {}
type State = { themeMode: 'light' | 'dark' };

export default class extends Component<Props, State> {
    state: State = { themeMode: 'light' };

    switchTheme = () => {
        const { themeMode } = this.state;
        this.setState({
            themeMode: themeMode === 'light' ? 'dark' : 'light',
        });
    };

    render() {
        const { themeMode } = this.state;
        console.log(themeMode)
        return (
//ThemeProvider
            <AtlaskitThemeProvider mode={themeMode}>
                <App/>
                <div style={{ padding: 8 }}>
                    <Button onClick={this.switchTheme}>Switch theme ({themeMode})</Button>
                    <p>This is the old theming API</p>
                </div>
            </AtlaskitThemeProvider>
//ResetTheme
/*            <ResetTheme.Provider
                value={t => (

                        { ...t({}), backgroundColor: '#fffbe5', textColor: '#000' })}
            >
                <Reset style={{ padding: 10 }}>

                    You can also theme a reset.</Reset>

            </ResetTheme.Provider>*/
//createTheme
            //1.react和ts的结合

//主题组件
//            <CreateCompontTheme />
        );
    }
}
