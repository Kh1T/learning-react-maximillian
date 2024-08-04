

export default function Tab({children , button}) {
    return (
        <>
            <menu>
                {button}
            </menu>
            {children}
        </>
    )
}