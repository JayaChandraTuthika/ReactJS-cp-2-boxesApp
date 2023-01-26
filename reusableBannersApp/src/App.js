import BannerCardItem from './components/BannerCardItem'
import './App.css'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
    align: '',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
    align: '',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
    align: 'center',
  },
]

const App = () => (
  <ul className="list-container">
    {bannerCardsList.map(eachItem => (
      <BannerCardItem
        key={eachItem.id}
        headerText={eachItem.headerText}
        description={eachItem.description}
        cls={eachItem.className}
        align={eachItem.align}
      />
    ))}
  </ul>
)

export default App
