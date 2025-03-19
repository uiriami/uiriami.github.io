// Lista de notas manualmente (o podrías generarla dinámicamente con un backend)
const notes = [
    { title: "Nota 1", url: "notes/nota1.html" },
    { title: "Nota 2", url: "notes/nota2.html" }
];

const notesList = document.getElementById("notes-list");

notes.forEach(note => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = note.url;
    a.textContent = note.title;
    li.appendChild(a);
    notesList.appendChild(li);
});
