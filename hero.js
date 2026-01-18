const Hero = () => {
    return React.createElement("div",
        {className:'hero'},
        React.createElement('div',
            {className:'left'},
            React.createElement('h4',null,"Product designer"),
            React.createElement('div',{className:'line'}," "),
            React.createElement('h4',null,"2026")
        ),

        React.createElement('div',
            {className:'right'},
            React.createElement('div',
                {className:'top'},
                React.createElement('div',
                    {className:"ttop"},
                    React.createElement('p',null,"200+"),
                    React.createElement('p',null,"50+"),
                ),
                React.createElement('div',
                    {className:"tbottom"},
                    React.createElement('p',null,"Project Completed"),
                    React.createElement('p',null,"Startups Raised"),
                )
            ),
            React.createElement('div',
                {className:"center"},
                React.createElement("h1",null,"HELLO"),
                React.createElement("h5",null,"— I'm Yuvraj , a design wizard"),
            ),
            React.createElement('div',
                {className:"bottom"},
                React.createElement("h6",null,"scroll down"),
                React.createElement('i',
                    {className:"ri-arrow-down-line"}
                )
            )

        ),
        React.createElement('img', {
            src: '/hero.png',
            className: 'heropic',
            alt: 'logo'
          })

    )
}

export default Hero;