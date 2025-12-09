---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPR2S46X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnhNLSJado6QF6yn1fDYs2kxPeBZ1MXApWOEbsT35bAAiEAtWi6%2BX%2FZTtV7a3dQ1Bb7kdU3I4DVSm6Yc9yV3tDrmusqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0DqBkY0LJIpzuYiSrcA7H5jtF1IY6xPFhSg2bWuECpAuEnQmFyaoPmcE1TTkqCScnO8w5sM14UqD3RdEMj2QalmUnGcBjat45nnfLy6hDmwxvwVGZdk1xl2bDE3uhW8lG54vhGUNCd1C0IrlfRHhmL5iv6wa5JmX31pquQNvKoMMJi2fMy7sj%2BsGh4WhxeWc7SFOCkGiDV1D7oUoK3yhG6h0Wl%2B0tEOEwdcIQd07%2FaMFXQvi6WcMhObVKaUy3rOE2XjP3v%2BUx%2FW5aLY%2FCusRwLpqGZZA8iC2NFs%2FFJ%2B8g1IbfUCaD8bsVtl0ww5qCFzB4q2x32Hpe5OrNP53FCt%2BMfydfwlv7Wg9RqXazyDC%2BqkwQur5pFyfNvRd6PdZ54rUg2AcCwesUjxIoLgiBoyBMg1UIpoMVKYnpqZ4VaOBj5I4JgTa%2FxllQ18F%2BVyZacrrsj4c7O7zWL%2FqvfjX99%2BcNvKJnWUhheKa%2BW%2FCyMiN74csygmH8sv%2Fge9XclSL%2F4U2430WhPMeYHTlWdzUzLJuoIczwvMdFh4fKdrLCjhha%2FcYidGa1jm14XMGQTCLs7K7FHe0ryhxvu97Zsy2whKiCOVaPgTXxUwAqvd6flKfW9zUS%2BkYXYqOtGgjDP9VbuDBd%2FchQyFEtEYZmVMMjJ3skGOqUBAkg9FFOe8rXLLRfuP8aJxNlr1RyiTQCV7sRhc2TC1ig2V%2F2fN60ZymcI91q1b6Fia2Na7rIo0tiTPerz8q%2BxXZbb8HuHCWRMQrbcqMrw3qikkg41mLIHKxZOWMpMFFLN7ENn0%2FD6FiyqQtndR%2BUPeN%2FcT0C8loDx06JTBI30nqywsv%2B2AUr2JjmowAM5fp6CLTxyyktGuCMetv6mTM1h%2F1vKJw4b&X-Amz-Signature=c068b02e331be9ce374d4f23cb207b2f51ad31b1f2a98590c1ffa9f8795c564e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPR2S46X%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T050526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDnhNLSJado6QF6yn1fDYs2kxPeBZ1MXApWOEbsT35bAAiEAtWi6%2BX%2FZTtV7a3dQ1Bb7kdU3I4DVSm6Yc9yV3tDrmusqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ0DqBkY0LJIpzuYiSrcA7H5jtF1IY6xPFhSg2bWuECpAuEnQmFyaoPmcE1TTkqCScnO8w5sM14UqD3RdEMj2QalmUnGcBjat45nnfLy6hDmwxvwVGZdk1xl2bDE3uhW8lG54vhGUNCd1C0IrlfRHhmL5iv6wa5JmX31pquQNvKoMMJi2fMy7sj%2BsGh4WhxeWc7SFOCkGiDV1D7oUoK3yhG6h0Wl%2B0tEOEwdcIQd07%2FaMFXQvi6WcMhObVKaUy3rOE2XjP3v%2BUx%2FW5aLY%2FCusRwLpqGZZA8iC2NFs%2FFJ%2B8g1IbfUCaD8bsVtl0ww5qCFzB4q2x32Hpe5OrNP53FCt%2BMfydfwlv7Wg9RqXazyDC%2BqkwQur5pFyfNvRd6PdZ54rUg2AcCwesUjxIoLgiBoyBMg1UIpoMVKYnpqZ4VaOBj5I4JgTa%2FxllQ18F%2BVyZacrrsj4c7O7zWL%2FqvfjX99%2BcNvKJnWUhheKa%2BW%2FCyMiN74csygmH8sv%2Fge9XclSL%2F4U2430WhPMeYHTlWdzUzLJuoIczwvMdFh4fKdrLCjhha%2FcYidGa1jm14XMGQTCLs7K7FHe0ryhxvu97Zsy2whKiCOVaPgTXxUwAqvd6flKfW9zUS%2BkYXYqOtGgjDP9VbuDBd%2FchQyFEtEYZmVMMjJ3skGOqUBAkg9FFOe8rXLLRfuP8aJxNlr1RyiTQCV7sRhc2TC1ig2V%2F2fN60ZymcI91q1b6Fia2Na7rIo0tiTPerz8q%2BxXZbb8HuHCWRMQrbcqMrw3qikkg41mLIHKxZOWMpMFFLN7ENn0%2FD6FiyqQtndR%2BUPeN%2FcT0C8loDx06JTBI30nqywsv%2B2AUr2JjmowAM5fp6CLTxyyktGuCMetv6mTM1h%2F1vKJw4b&X-Amz-Signature=003a361342d26b26ee1aa1a4337dffaa8f52c6c41b73dc3510badca50d3e6e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```text
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
