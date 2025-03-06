import clsx from "clsx";

function App() {
    return (
        <div
            id=''
            className={ clsx([
                'container',
            ]) }
        >

            {/* HEADER */}
            <header>
                <div className="flex flex-col items-center justify-center pt-128 gap-16">
                    <h1 className='font-playwrite text-accent text-4xl'>Antoine Souesme</h1>
                    <p className="text-text text-lg">Site en cours de construction</p>
                </div>
            </header>

        </div>
    );
}

export default App;
