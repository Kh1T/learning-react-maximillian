export default function MealPage({params}) {
    return <main>
        <h1>This is meal</h1>
        <p>{params.slug}</p>
    </main>
}