tailwind.config = {
    theme: {
      extend: {
        colors: {
          headerDarkGray: '#282828',
          headerYellowBorder: '#FFB800',
          headerbgRed: '#F40404',
          headerDescription: '#6C6C6C',
          aboutBg: '#F0F0F0',
          footerpart: '#1F1F1F',
          blackTransparent: 'rgba(0, 0, 0, 0.6);',
          whiteTransparent: 'rgba(255, 255, 255, 0.6);',
        },
        maxWidth: {
        'headerContainer': '1140px',
        },
        fontFamily: {
        'pop': ['Poppins',],
        },
        backgroundImage: {
        'headBannerimg': "url('./img/banner.avif')",
        'slideimg': "url('./img/sliderimg.avif')",
        'serviceimg': "url('./img/Services.avif')",
        'blogimg1': "url('./img/blogimg1.avif')",
        'blogimg2': "url('./img/blogimg2.avif')",
        'blogimg3': "url('./img/blogimg3.avif')",
      },
    }
  }
}