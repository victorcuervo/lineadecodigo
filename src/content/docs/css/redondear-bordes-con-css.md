---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3D7ECQE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGWUaL9fq45qL0PatFV9V0h4sfYGFFi343q1Nv0Das0sAiA6JQVTDQSfXtirGVygV6w8onthPpVg7lZjf4y4IpfrPir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMPPHIWKoJPnEyMehbKtwD6mC%2FZuROTdSHFAA5PKW2mBJRoK9pLP63rM4hf8thTZc5yW6imTK6zxYo7Uk%2BSLxDZjyRzzde%2F%2FuVjOVUbBWms7i8eXpbyM1W2Km1K9SiBDt8tBkL2oGwuQzKTZUsu%2BcATC9JqROKh5TvcM9JK5Rore%2FNtJVpM1FSQIwqbU9btJyYA8GL6lCyGw52yF7G8y78B5Y2Dz2wokLfDuHPUwARypMuMnVrvbNvdoI0V8xLNtt7COFTYPCSTCagVvPCLev6B0I7lHJybprQ5n8CHryGdRJcs0pQWih0vf%2BdD3iRm171FxPFoym7b9zkrWJW1LOW0UT2riHIjMB0GryauMUpm1GsksSwiK27I7mLbvMjMr1anbxEOjBieubz9BP0Gu0xatZAQgit0hl1vp0sWbjF35K1Aoic%2BKgiWg0bSqF%2FFUSPM2P6faNgfJqWcvxg86j4ikYxUjMVPp%2BGSbGBx7ZBiiqi5LoBn%2Bx7KBd1SJt8pEQvDCUCpoiqq0u7dJwEDx7LxarMhrEqoutmv6eti1%2B2VL4oUZ3aRpfLQjjEHjhbNdbpgIFeKDE%2BNVr2ykGzpZAawmXJX4241pMASE8cigMLcFRpzKf%2FI%2FBxpaMBIJueV5ZaGKE43Xeww8nwTggw44PGyQY6pgF7p9Yip3gJZKYDu6XDqDs8vnTOCXJCgNvCkp4Ese7ykoDDaBTnIx6cYFFFVHVQ6it8NXTQPTb9kBBwNWoINuifrN8kJDMI2FD4XH3BZE4mxZVIwF16xcB%2BTv85ynOtjHdgyq%2BlSWQa4v%2BJ0oAQ7jPoPIMeSzbFQtDA84baNsks05B46jOHmbwXShnMTKhFlmbRKjQ%2B5yMai9uyh3jKib%2FrfPne0ocC&X-Amz-Signature=317b40a868e069dce251f142ce4b6998fd736c629ade68b1d07625243af2d393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3D7ECQE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIGWUaL9fq45qL0PatFV9V0h4sfYGFFi343q1Nv0Das0sAiA6JQVTDQSfXtirGVygV6w8onthPpVg7lZjf4y4IpfrPir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMPPHIWKoJPnEyMehbKtwD6mC%2FZuROTdSHFAA5PKW2mBJRoK9pLP63rM4hf8thTZc5yW6imTK6zxYo7Uk%2BSLxDZjyRzzde%2F%2FuVjOVUbBWms7i8eXpbyM1W2Km1K9SiBDt8tBkL2oGwuQzKTZUsu%2BcATC9JqROKh5TvcM9JK5Rore%2FNtJVpM1FSQIwqbU9btJyYA8GL6lCyGw52yF7G8y78B5Y2Dz2wokLfDuHPUwARypMuMnVrvbNvdoI0V8xLNtt7COFTYPCSTCagVvPCLev6B0I7lHJybprQ5n8CHryGdRJcs0pQWih0vf%2BdD3iRm171FxPFoym7b9zkrWJW1LOW0UT2riHIjMB0GryauMUpm1GsksSwiK27I7mLbvMjMr1anbxEOjBieubz9BP0Gu0xatZAQgit0hl1vp0sWbjF35K1Aoic%2BKgiWg0bSqF%2FFUSPM2P6faNgfJqWcvxg86j4ikYxUjMVPp%2BGSbGBx7ZBiiqi5LoBn%2Bx7KBd1SJt8pEQvDCUCpoiqq0u7dJwEDx7LxarMhrEqoutmv6eti1%2B2VL4oUZ3aRpfLQjjEHjhbNdbpgIFeKDE%2BNVr2ykGzpZAawmXJX4241pMASE8cigMLcFRpzKf%2FI%2FBxpaMBIJueV5ZaGKE43Xeww8nwTggw44PGyQY6pgF7p9Yip3gJZKYDu6XDqDs8vnTOCXJCgNvCkp4Ese7ykoDDaBTnIx6cYFFFVHVQ6it8NXTQPTb9kBBwNWoINuifrN8kJDMI2FD4XH3BZE4mxZVIwF16xcB%2BTv85ynOtjHdgyq%2BlSWQa4v%2BJ0oAQ7jPoPIMeSzbFQtDA84baNsks05B46jOHmbwXShnMTKhFlmbRKjQ%2B5yMai9uyh3jKib%2FrfPne0ocC&X-Amz-Signature=e7c5264137f40cfae5d335713e462b8bbd6059c52952292e43f5f8ec0f9c6020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
