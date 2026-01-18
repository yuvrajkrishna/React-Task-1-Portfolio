const Nav = () => {
    return React.createElement(
      'div',
      { className: 'nav' },
  
      React.createElement(
        'div',
        { className: 'left' },
        React.createElement('img', {
          src: '/logo.png',
          className: 'logo',
          alt: 'logo'
        }),
        React.createElement('h4', null, 'About Me'),
        React.createElement('h4', null, 'Portfolio'),
        React.createElement('h4', null, 'Services'),
        React.createElement('h4', null, 'Blog')
      ),
  
      React.createElement(
        'div',
        { className: 'right' },
        React.createElement('h4', null, 'Book a Call'),
        React.createElement('i', { className: 'ri-arrow-right-up-long-line' })
      )
    );
  };
  
  export default Nav;