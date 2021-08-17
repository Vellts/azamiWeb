import { Switch, Route} from 'react-router-dom'
import home from './components/renders/home.jsx'
import premium from './components/renders/premium.jsx'
import commands from './components/renders/commands.jsx'

const App = () => {
	return (
		<>
			<Switch>
				<Route exact strict path="/" component={<home />} />
				<Route path="/terms-condition/" component={<premium />} />
				<Route path="/privacy/" component={<premium />} />
				<Route path="/commands/" component={<commands />} />
				<Route path="/premium/" component={<premium />} />
				<Route path="*" component={<premium />} />
			</Switch>
		</>
	);
}

export default App

/*export default () => {

  	return (
		<>
			<Switch>
				<Route exact strict path="/" component={<home />} path="/" />
				<Route path="/terms-condition/" component={<premium />} />
				<Route path="/privacy/" component={<premium />} />
				<Route path="/commands/" component={<commands />} />
				<Route path="/premium/" component={<premium />} />
				<Route path="*" component={<premium />} />
			</Switch>
			<div id='modals' />
		</>
	);
}*/