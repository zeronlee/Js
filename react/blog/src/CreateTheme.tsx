//atlaskit/theme
//1.theme.provider
//2.theme.consumer
import React from 'react';
import color from 'color';
import { createTheme } from '@atlaskit/theme';
console.log(color);
type ThemeProps = any;
interface ThemeTokens {
    backgroundColor?: string;
    textColor?: string;
}

const DisplayThemeColors = () => (
    <Theme.Consumer>
        {(tokens: Record<string, keyof ThemeTokens>) =>
            Object.keys(tokens).map(k => (
            <div
            key={k}
            className={JSON.stringify(tokens)}
            style={{
            backgroundColor: `${tokens[k]}`,
            color: `${color(tokens[k]).negate()}`,
            display: 'inline-block',
            marginBottom: 10,
            marginRight: 10,
            padding: 10,
        }}
            >
            {k}
            </div>
            ))
        }
    </Theme.Consumer>
);

const Theme = createTheme<ThemeTokens, ThemeProps>(() => ({
    backgroundColor: '#333',
    textColor: '#eee',
}));
export default () => (
    <React.Fragment>
        <DisplayThemeColors />
        <Theme.Provider
            value={t => ({ ...t({}), backgroundColor: '#cde4cb' })}
        >
            <DisplayThemeColors />
        </Theme.Provider>
    </React.Fragment>
);
