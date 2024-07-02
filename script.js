import cards from './cards_en.js'

const button = document.getElementById('main-button')
const cardOneSelection = document.getElementById('card-one')
const cardTwoSelection = document.getElementById('card-two')
const cardThreeSelection = document.getElementById('card-three')
const cardFourSelection = document.getElementById('card-four')
const cardFiveSelection = document.getElementById('card-five')
const arrowLeft = document.getElementById('left-arrow')
const arrowRight = document.getElementById('right-arrow')
const closeIcon = document.getElementById('close-icon')
const smokeVideo = document.getElementById('smoke-video')
let currentCard
let currentIndex

button.addEventListener('click', () => {
  changeClass()
})

cardOneSelection.addEventListener('click', () => {
  cardOneSelection.classList.add('clicked')
  currentCard = 'one'
  currentIndex = 0
  displayCard(currentCard)
})

cardTwoSelection.addEventListener('click', () => {
  cardTwoSelection.classList.add('clicked')
  currentCard = 'two'
  currentIndex = 1
  displayCard(currentCard)
})

cardThreeSelection.addEventListener('click', () => {
  cardThreeSelection.classList.add('clicked')
  currentCard = 'three'
  currentIndex = 2
  displayCard(currentCard)
})

cardFourSelection.addEventListener('click', () => {
  cardFourSelection.classList.add('clicked')
  currentCard = 'four'
  currentIndex = 3
  displayCard(currentCard)
})

cardFiveSelection.addEventListener('click', () => {
  cardFiveSelection.classList.add('clicked')
  currentCard = 'five'
  currentIndex = 4
  displayCard(currentCard)
})

function adjustForMobile() {
  const header = document.getElementById('header-title')

  if (window.innerWidth <= 1100) {
    header.src = './assets/debunkmobile_title.png'
  } else {
    header.src = './assets/header_desktop.svg'
  }
}

window.onload = adjustForMobile
window.onresize = adjustForMobile

closeIcon.addEventListener('click', () => {
  const contentSection = document.getElementById('content-section')
  const previousMenu = document.getElementById('menu-section')

  contentSection.classList.remove('active')
  previousMenu.classList.remove('inactive')
  contentSection.style.display = 'none'

  resetToMyth()
})

function resetToMyth() {
  let updateCategory = document.getElementById('category-text')
  let updateCard = document.getElementById('card-image-front')
  const categorySnippet = document.getElementById('category-snippet')

  const cardIndex = cardIndexMapping[currentCard]

  if (cardIndex !== undefined) {
    const cardDetails = cards[cardIndex][currentCard].find(
      (card) => card.category === 'MYTH'
    )

    if (cardDetails) {
      // Remove previous category classes
      categories.forEach((category) => {
        categorySnippet.classList.remove(category.toLowerCase())
      })

      // Add MYTH category class
      categorySnippet.classList.add('myth')

      // Update the content and image
      updateCard.src = cardDetails.src
      updateCategory.innerHTML = 'MYTH'
      categorySnippet.innerHTML = cardDetails.content

      // Remove any existing <h2> element
      const existingH2 = categorySnippet.querySelector('h2')
      if (existingH2) {
        existingH2.remove()
      }
    }
  }
}

const categories = ['MYTH', 'FACT', 'TESTIMONY']

const categoryIcons = {
  MYTH: './assets/myth-icon.png',
  FACT: './assets/fact-icon.png',
  TESTIMONY: './assets/testimony-icon.png',
}

const cardIndexMapping = {
  one: 0,
  two: 1,
  three: 2,
  four: 3,
  five: 4,
}

arrowLeft.addEventListener('click', () => {
  let currentCategory = document.getElementById('category-text').innerHTML // MYTH, FACT, TESTIMONY
  let updateCategory = document.getElementById('category-text')
  let updateCard = document.getElementById('card-image-front')
  const categorySnippet = document.getElementById('category-snippet')

  let categoryIndex = categories.indexOf(currentCategory)

  if (categoryIndex === 2) {
    categoryIndex = 0
  } else {
    categoryIndex++
  }

  const cardIndex = cardIndexMapping[currentCard]

  currentCategory = categories[categoryIndex]
  changeNav(currentCategory)

  if (cardIndex !== undefined) {
    const cardDetails = cards[cardIndex][currentCard].find(
      (card) => card.category === currentCategory
    )

    if (cardDetails) {
      // Remove previous category classes
      categories.forEach((category) => {
        categorySnippet.classList.remove(category.toLowerCase())
      })

      // Add new category class
      categorySnippet.classList.add(currentCategory.toLowerCase())

      // Update the content and image
      updateCard.src = cardDetails.src
      updateCategory.innerHTML = currentCategory
      categorySnippet.innerHTML = cardDetails.content

      // Check if an <h2> element already exists and remove it if it does
      const existingH2 = categorySnippet.querySelector('h2')
      if (existingH2) {
        existingH2.remove()
      }

      // Add <h2> element if the category is FACT
      if (currentCategory === 'FACT') {
        const h3Element = document.createElement('h3')
        h3Element.innerText = cardDetails.header
        categorySnippet.prepend(h3Element)
      }

      console.log(currentCategory)
    }
  }
})

arrowRight.addEventListener('click', () => {
  let currentCategory = document.getElementById('category-text').innerHTML // MYTH, FACT, TESTIMONY
  let updateCategory = document.getElementById('category-text')
  let updateCard = document.getElementById('card-image-front')
  const categorySnippet = document.getElementById('category-snippet')

  let categoryIndex = categories.indexOf(currentCategory)

  if (categoryIndex === 0) {
    categoryIndex = 2
  } else {
    categoryIndex--
  }

  currentCategory = categories[categoryIndex]
  changeNav(currentCategory)

  const cardIndex = cardIndexMapping[currentCard]

  if (cardIndex !== undefined) {
    const cardDetails = cards[cardIndex][currentCard].find(
      (card) => card.category === currentCategory
    )

    if (cardDetails) {
      // Remove previous category classes
      categories.forEach((category) => {
        categorySnippet.classList.remove(category.toLowerCase())
      })

      // Add new category class
      categorySnippet.classList.add(currentCategory.toLowerCase())

      // Update the content and image
      updateCard.src = cardDetails.src
      updateCategory.innerHTML = currentCategory
      categorySnippet.innerHTML = cardDetails.content

      // Check if an <h2> element already exists and remove it if it does
      const existingH2 = categorySnippet.querySelector('h2')
      if (existingH2) {
        existingH2.remove()
      }

      // Add <h2> element if the category is FACT
      if (currentCategory === 'FACT') {
        const h3Element = document.createElement('h3')
        h3Element.innerText = cardDetails.header
        categorySnippet.prepend(h3Element)
      }

      console.log(currentCategory)
    }
  }
})

function changeClass() {
  const element = document.getElementById('main-section')
  const secondary = document.getElementById('menu-section')
  const background = document.getElementById('background')

  element.classList.toggle('inactive')
  secondary.classList.toggle('active')
  background.classList.toggle('secondary-background')
}

function changeNav(currentCategory) {
  const currentLeft = document.getElementById('left-arrow-text')
  const currentRight = document.getElementById('right-arrow-text')
  const categoryIconLeft = document.getElementById('category-icon-left')
  const categoryIconRight = document.getElementById('category-icon-right')

  console.log(currentCategory)

  switch (currentCategory) {
    case 'MYTH':
      currentLeft.innerHTML = 'FACT'
      currentRight.innerHTML = 'TESTIMONY'
      categoryIconLeft.src = categoryIcons.FACT
      categoryIconRight.src = categoryIcons.TESTIMONY
      break
    case 'FACT':
      currentLeft.innerHTML = 'TESTIMONY'
      currentRight.innerHTML = 'MYTH'
      categoryIconLeft.src = categoryIcons.TESTIMONY
      categoryIconRight.src = categoryIcons.MYTH
      break
    case 'TESTIMONY':
      currentLeft.innerHTML = 'MYTH'
      currentRight.innerHTML = 'FACT'
      categoryIconLeft.src = categoryIcons.MYTH
      categoryIconRight.src = categoryIcons.FACT
      break
    default:
      break
  }
}

function displayCard(currentCard) {
  const previousMenu = document.getElementById('menu-section')
  const content = document.getElementById('content-section')
  const card = document.getElementById('card-content')
  const cardImage = document.getElementById('card-image-front')
  const closeButton = document.getElementById('exit-section')

  const cardIndex = {
    one: 0,
    two: 1,
    three: 2,
    four: 3,
    five: 4,
  }[currentCard]

  if (cardIndex !== undefined) {
    cardImage.src = cards[cardIndex][currentCard][0].src
  }

  if (content.style.display === 'none') {
    content.style.display = ''
  }

  previousMenu.classList.remove('active')
  closeButton.classList.toggle('active')
  closeButton.classList.remove('inactive')
  previousMenu.classList.add('inactive')
  content.classList.toggle('active')
  card.classList.remove('inactive')
  card.classList.toggle('active')

  displayContent(currentCard)
}

function displayContent(currentCard) {
  const infoContent = document.getElementById('info-content')
  const infoBodyText = document.getElementById('body-info-text')
  let initialText = document.getElementById('category-snippet')

  const cardMapping = {
    one: { index: 0, key: 'one' },
    two: { index: 1, key: 'two' },
    three: { index: 2, key: 'three' },
    four: { index: 3, key: 'four' },
    five: { index: 4, key: 'five' },
  }

  const cardIndex = cardMapping[currentCard]

  console.log('currentCard:', currentCard)
  console.log('cardIndex:', cardIndex)

  if (cardIndex !== undefined) {
    const cardContent = cards[cardIndex.index][cardIndex.key][0].content
    console.log('cardContent:', cardContent)
    initialText.innerHTML = cardContent
  } else {
    console.error('Invalid currentCard value:', currentCard)
  }

  setTimeout(() => {
    infoBodyText.classList.add('active')
    infoContent.classList.add('active')
    infoContent.classList.add('once-shown')
    infoContent.classList.remove('inactive')
    infoBodyText.classList.remove('inactive')
    closeIcon.classList.remove('inactive')
    closeIcon.classList.add('active')
  }, 2000)
}
