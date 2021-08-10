import './index.scss';

export const App: React.FunctionComponent<any> = () => {
    console.log();
    return <div className="App">
        Hello World! {process.env.NODE_ENV}
    </div>
}