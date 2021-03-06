import React from 'react'
import WorkDetails from 'components/WorkDetails'
import {withRouter} from 'next/router'

const text = <div>
  <div><a href="https://careers.bridestory.com/" rel="noopener noreferrer" target="_blank">
    https://careers.bridestory.com/
  </a></div>
  <p>Bridestory was Awesome. Great friends, Excellent team. Alluring work ambience.</p>
  <p>
    My time in Bridestory cannot be describe by only one creation.
    But this one have a special place in my heart.
  </p>
  <p>Being in Bridestory is like celebrating love.</p>
  <br />
  <p>
    Made with <a target="_blank" rel="noopener noreferrer" href="https://jekyllrb.com/">Jekyll.</a> and a custom CMS running on PHP, MySql, and nginx.
  </p>
  <p>Fuelled by love...</p>
</div>

export default withRouter(({router}) => {

  const id = router.pathname.replace(/\/$/,'').split('/').pop();
  return <WorkDetails id={id} text={text} />

})
