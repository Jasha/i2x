import React from 'react';
import { Link } from 'react-router';
import { PageHeader, Well } from 'react-bootstrap';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className="container">
        <PageHeader>Sorry, the page not found</PageHeader>
        <Well bsSize="large">
          Return to the <Link to={'/'}>homepage</Link>.
        </Well>
      </div>
    );
  }
}

ErrorPage.propTypes = {
};

export default ErrorPage;
