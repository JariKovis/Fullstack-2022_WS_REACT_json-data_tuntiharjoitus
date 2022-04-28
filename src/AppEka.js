import './App.css';

function App() {

    const quotes = [
        {
            quote: "Life isn’t about getting and having, it’s about giving and being.",
            author: "Kevin Kruse",
        },
        {
            quote: "Whatever the mind of man can conceive and believe, it can achieve.",
            author: "Napoleon Hill",
        },
        {
            quote: "Strive not to be a success, but rather to be of value.",
            author: "Albert Einstein",
        },
        {
            quote:
                "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
            author: "Robert Frost",
        },
        {
            quote: "I attribute my success to this: I never gave or took any excuse.",
            author: "Florence Nightingale",
        },
    ];

    const QuoteArray = (props) => {
        const { data } = props;

        return (
            <div>
                <ul>
                    {data.map((item) => (
                        <li>
                            {item.quote} ( {item.author} )
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
    return (
        <div>
            <h1>Toinen React-sovellukseni!</h1>

            <QuoteArray data={quotes} />
        </div>
    );
}

export default App;
