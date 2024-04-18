
const doc = {
    bombButton: document.getElementById('bombButton'),
    New_game_button: document.getElementById('New_game_button'),
    opponentTable: document.getElementById('opponentTable'),
    playerTable: document.getElementById('playerTable')
}

function NewGame() {
    doc.New_game_button.addEventListener('click', () => {
        console.log('New game begins')
        clearTable()
        var fillTable = new Array(10).fill(null).map(() => new Array(10).fill(null))
        generateTables(fillTable)
    })
}

function generateTables(fillTable) {
    console.log('Table generating getting started')

    fillTable.forEach(row => {
        var tr = document.createElement('tr')
        row.forEach(col => {
            var td = document.createElement('td')
            var button = document.createElement('button')
            button.type = "button"
            button.classList.add("bombButton")
            td.appendChild(button)
            tr.appendChild(td)
        })
        doc.opponentTable.appendChild(tr)
        console.log('Opponent table-rows are generated')
    })

    fillTable.forEach(row => {
        var tr = document.createElement('tr')
        row.forEach(col => {
            var td = document.createElement('td')
            tr.appendChild(td)
        })
        doc.playerTable.appendChild(tr)
        console.log('Player table-rows are generated')
    })

}

function clearTable() {
    while (doc.opponentTable.firstChild) {
        doc.opponentTable.removeChild(doc.opponentTable.firstChild)
        doc.playerTable.removeChild(doc.playerTable.firstChild)
    }
    console.log('table cleared')
}

NewGame()