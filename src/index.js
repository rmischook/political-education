import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Section extends React.Component {
 
	constructor(props) {
	    super(props);
	    this.state = {
	      title: props.title,
	      subtitle: props.subtitle,
	      sectionItems: props.sectionItems,	      
	    };
	}

	renderItems() {
		return this.state.sectionItems.map((sectionItem) => (
			    sectionItem.render()
			 ));
	}

  	render() {

    	return (
      		 <div className="section">
      		 <h1>| {this.state.title}</h1>
      		 <p className="subtitle">{this.state.subtitle}</p>

      		 {this.renderItems()}
      		 
      		 </div>
    	);
  	}
}

class SectionItem extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      title: props.title,
	      imgUrl: props.imgUrl,
	    };
	}

  	render() {
    	return (
      		 <div className="section-item">
      		 <img alt="item image" src={this.state.imgUrl} />
      		 {this.state.title}
      		 </div>
    	);
  	}
}

class Banner extends React.Component {
	render() {
		return (
			<div>
				<div className="top-banner wide">
        			<img alt="banner" src={"pol-ed/assets/momentum.png"} />
      			</div>
      			<img alt="banner" className="wide" src={"pol-ed/assets/pol-ed-banner.png"} />
      		</div>
		);
	}
}
 
class Site extends React.Component {
	render() {
		return (
			<div>
				<Banner /> 
				
				<Section title="Featured" subtitle="Events and resources that we are featuring this week." 
				  sectionItems={[new SectionItem({title:"Reclaiming Work", imageUrl:"https://novaramedia.com/wp-content/uploads/2018/12/novaramedia-opengraph-1200x630.png"}),
				                 new SectionItem({title:"Searching For Socialism", imageUrl:""})]} />
				
				<Section title="Topics" sectionItems={[]} />
				<Section title="Podcasts and Videos" subtitle="Socialist multimedia from around the Web" sectionItems={[]}/>
				<Section title="Books" subtitle="Take a deeper dive..." sectionItems={[]} />
				<Section title="Alternative Media" subtitle="News and current events with a socialist slant" sectionItems={[]} />



      		</div>
		);
	}
}

// ========================================

ReactDOM.render(
  <Site />,
  document.getElementById('root')
);



