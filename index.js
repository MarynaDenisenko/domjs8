const containerElem = document.querySelector('.container');
const modalElem = document.querySelector('.modal');
const modalContainer = document.querySelector('.innerModal');
modalElem.onclick = (e) => {
    console.log(e)
    modalElem.classList.remove('modal_active');
}

const renderCard = (condidate) => {
    const cardElem = document.createElement('div');
    cardElem.className = 'card';
    cardElem.onclick = () => {
        modalContainer.innerHTML = Object
            .entries(condidate)
            .map(([key, value]) => `<p>${key}: ${value}</p>`)
            .join(', ');
        modalElem.classList.add('modal_active')
        cardElem.classList.toggle('active');
    };

    const nameElem = document.createElement('p');
    nameElem.innerText = 'Name: ' + condidate.name;
    cardElem.append(nameElem);

    const emailElem = document.createElement('p');
    emailElem.innerText = 'Email: ' + condidate.email;
    cardElem.append(emailElem);

    return cardElem;
}

const renderCards = (condidates) => {
    const cardsCollection = condidates.map(renderCard)
    containerElem.append(...cardsCollection)
}

renderCards(condidateArr)
