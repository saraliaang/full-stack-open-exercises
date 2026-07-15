export default function PersonForm({newName, nameChange, addPerson, newNumber, numberChange}) {
    return (
        <>
            <form onSubmit={addPerson}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={nameChange}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={numberChange}
                    />
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
        </>
    )
}