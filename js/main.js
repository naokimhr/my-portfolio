import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "Work Example1",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/koifish001.jpg",
      'comment': ""
    }
  },
  {
    'title': "Work Example2",
    'image': {
      'desc': "example screenshot of a project involving chemistry",
      'src': "images/example2.png",
      'comment': ""
    }
  },
  {
    'title': "Work Example3",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example2.png",
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
           https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
