// ***** main script

const teamMembers = [
    {
        'name': 'Wayne Bernett',
        'role': 'Founder & CEO',
        'img': 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'img': 'angela-caroll-chief-editor.jpg'
    },
    {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'img': 'walter-gordon-office-manager.jpg'
    },
    {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'img': 'angela-lopez-social-media-manager.jpg'
    },
    {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'img': 'scott-estrada-developer.jpg'
    },
    {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'img': 'barbara-ramos-graphic-designer.jpg'
    },
];

for (let i = 0; i < teamMembers.length; i++) {

    addCard(teamMembers[i].name, teamMembers[i].role, teamMembers[i].img);

}


// ***** functions

function addCard(name, role, img) {

    const cardContainer = document.querySelector('#team .team-container');
    cardContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img src="img/${img}" alt="${name}"/>
        </div>
        <div class="card-text">
            <h3>${name}</h3>
            <p>${role}</p>
        </div>
    </div>
    `

}