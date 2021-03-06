import React from 'react'
import WorkDetails from 'components/WorkDetails'
import {withRouter} from 'next/router'

const text = <div>
  <div><a target="_blank" rel="noopener noreferrer" href="https://ambervideo.co/">https://ambervideo.co/</a></div>
  <p>A platform to detect fake videos.</p>
  <p>Wait.. What!? that's a thing..</p>
  <p>Like, that's a THING...</p>
  <br />
  <p>In an age where video, as one the most important media, gets abused with fake contents.
  They created a tool to detect just that.</p>
  <p>What a noble task...</p>
  <br />
  <p>Shamir asked me to work with Roderick for this, so I helped Roderick on the frontend and it's API.</p>
  <br />
  <p>Techs used on my side of the job:{' '}
    <a href="https://expressjs.com/" rel="noopener noreferrer" target="_blank">ExpressJS</a>,&nbsp;
    <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">ReactJS</a>,&nbsp;
    <a href="https://www.mongodb.com/" rel="noopener noreferrer" target="_blank">MongoDB</a>,&nbsp;
    <a href="https://www.rabbitmq.com/" rel="noopener noreferrer" target="_blank">RabbitMQ</a>,&nbsp;
    <a href="https://aws.amazon.com/s3/" rel="noopener noreferrer" target="_blank">AWS-S3</a>,&nbsp;
    and <a href="https://aws.amazon.com/elasticbeanstalk/" rel="noopener noreferrer" target="_blank">Elastic&nbsp;Beanstalk</a>.
  </p>
</div>;

export default withRouter(({router}) => {

  const id = router.pathname.replace(/\/$/,'').split('/').pop();
  return <WorkDetails id={id} text={text} />

})
