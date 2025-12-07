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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFB52IA6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXken%2Ba14ypTwtmmPswHMCouCFFtFs8pLtzmCOunyAvAiEA5i065c4Qtc9UUqN6JtOj%2FF1h0yr0h%2BWepQMBsSTEcSMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9iSf%2FOWpcNeI50XCrcAxiT%2Bem5Ou8CafBU3u7S3pKuLiVe2tci8Q2KFpm7kKCnYjOb5wNiXu9VAVfc47VbNkih4fQ%2BD7VvdZqWpA0D%2BU8O3eoEJ0jc1Iheu7JP%2Fm1XQI5eznMJBnqOsNU%2BqWVxaxYktYLajCjoV7eAvGBN2haVX8zaLxbFXvtb72BkIvgfuMXmMbvxIoP6zCJI5sixIcu4PCDG1TO80yO8fVswfU6GIclemTiB0hrGAjQrAIW9VeFF3wrHA12eR%2F2fXz2Plw8hpzQB4FwgXSOATNVCYf5Te%2FnxxOosGLg8EMKKiVgSZsYl8dfzO2%2FJckaM5bXS9FwdRg3%2FT6Tu9peYMdHoFbfIqr0MIuh80BPrtBZf8mWB7NVbktiO%2BbDeW%2BgTkbirP6ehgkR7ICW0pbNG7cxBZZjfFj4mLXAkPNR%2FD2%2F%2FjgTQKQTsbly1CdlzNAu3b0q7f526wIg9uMdGPgnycwldtzwCam%2Ftg6M6VZ8OMb7MfruuGIbbolDsTIUvtQE91vcacghZMhHHOfuHaE%2FLyjGUCkdG8bW6o3To3KfujDeBfKYuQYOM%2FdbGOqivvHt0O6qXHBw%2FXiKQHh7q5IL6%2B%2FqlxfamLrHl4c6KeGHfi3DEVjRuvP%2BnHlcrlgr%2BTBIpMOOE2MkGOqUBISs2Bj0PRQ%2Bf6ywD970D2MWYt5kssYSjfiASrf4gGI%2FvfyV8QTq9Qw8t3VVv6U8sfqMVjs%2FscjWAW4zDRB1BIrFR%2FJz%2Fbyx%2FlWE%2Bdzem6MVIRvmJYZyql%2Bh4I6X%2BdpRRCbWYpGiE9EtPK50xkYmITjZnMmby0keLXCyPwd1QeEa%2BO2wERavc2nx5sE5iC5ZKMaMNuPx6Dkn78yd1iWcAY8WnooAx&X-Amz-Signature=a05171a6f9929576d7881de85a5efc060db5730de19465f36d0663c9ce9b0512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFB52IA6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXken%2Ba14ypTwtmmPswHMCouCFFtFs8pLtzmCOunyAvAiEA5i065c4Qtc9UUqN6JtOj%2FF1h0yr0h%2BWepQMBsSTEcSMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9iSf%2FOWpcNeI50XCrcAxiT%2Bem5Ou8CafBU3u7S3pKuLiVe2tci8Q2KFpm7kKCnYjOb5wNiXu9VAVfc47VbNkih4fQ%2BD7VvdZqWpA0D%2BU8O3eoEJ0jc1Iheu7JP%2Fm1XQI5eznMJBnqOsNU%2BqWVxaxYktYLajCjoV7eAvGBN2haVX8zaLxbFXvtb72BkIvgfuMXmMbvxIoP6zCJI5sixIcu4PCDG1TO80yO8fVswfU6GIclemTiB0hrGAjQrAIW9VeFF3wrHA12eR%2F2fXz2Plw8hpzQB4FwgXSOATNVCYf5Te%2FnxxOosGLg8EMKKiVgSZsYl8dfzO2%2FJckaM5bXS9FwdRg3%2FT6Tu9peYMdHoFbfIqr0MIuh80BPrtBZf8mWB7NVbktiO%2BbDeW%2BgTkbirP6ehgkR7ICW0pbNG7cxBZZjfFj4mLXAkPNR%2FD2%2F%2FjgTQKQTsbly1CdlzNAu3b0q7f526wIg9uMdGPgnycwldtzwCam%2Ftg6M6VZ8OMb7MfruuGIbbolDsTIUvtQE91vcacghZMhHHOfuHaE%2FLyjGUCkdG8bW6o3To3KfujDeBfKYuQYOM%2FdbGOqivvHt0O6qXHBw%2FXiKQHh7q5IL6%2B%2FqlxfamLrHl4c6KeGHfi3DEVjRuvP%2BnHlcrlgr%2BTBIpMOOE2MkGOqUBISs2Bj0PRQ%2Bf6ywD970D2MWYt5kssYSjfiASrf4gGI%2FvfyV8QTq9Qw8t3VVv6U8sfqMVjs%2FscjWAW4zDRB1BIrFR%2FJz%2Fbyx%2FlWE%2Bdzem6MVIRvmJYZyql%2Bh4I6X%2BdpRRCbWYpGiE9EtPK50xkYmITjZnMmby0keLXCyPwd1QeEa%2BO2wERavc2nx5sE5iC5ZKMaMNuPx6Dkn78yd1iWcAY8WnooAx&X-Amz-Signature=a531b4449e95de44d801f689217b871e446db9dc33ce9c3ea68bae13fc3754a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
