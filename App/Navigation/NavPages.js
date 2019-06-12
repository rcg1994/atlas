import Home from '../Pages/Home'
import Components from '../Pages/Components'
import About from '../Pages/About'
import LibraryButtons from '../Pages/Library/Buttons'

// 底部导航对应的页面
const TabPages = {
  Home: {
    screen: Home
  },
  Components: {
    screen: Components
  },
  About: {
    screen: About
  }
}

// 应用页面
const AppPages = {
  LibraryButtons: {
    screen: LibraryButtons
  }
}

export { TabPages, AppPages }
