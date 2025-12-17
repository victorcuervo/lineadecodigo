---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEY6G6C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg77GgiOa60mz%2BOT3xtgZYrX1V%2F%2FsYp47RSvE8ROargAiEA6kuKc2WIO65P%2Fb2ZSEClEVtUwB66v%2BSAeHQhe7sBVnIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDz2W5Q9Rem%2FpBwPNircA6Sl7B34tH2mzIiGg2NqDexR9Iyq%2BYoMQ2LVQmjzquerVuZUvQTET2dsloZ96W%2BSAqzC36qfnXeguEuzHgAPn3PMeJ2c%2BkHpNH5g5uApIYYpa9OIwgM6ZTwGazFdnKaJTXfUzIIUYsY4dyoYpGyeRryYItsJKjPGFoBsAkATmP3vrrWxQvipyp2QFuuMgcpBUy65nK%2BPr0YK%2BqbPiSSxPWTNYoXJqwwSWjef3xJvnGXT1rPnyr%2BOthXseAfag7hfxgex%2F3yDR7xMeui6NU9CDwtrN4n%2F7iQiQioHp4jQK3ajv7%2FF5Sl0iubi%2BNVdLaAz4YgMbxi9wTfv3AV7Wf%2FIpGn9shrLPAquD0pZJzwQk8kYO8ZN21NdXNIePNMIQ8JW%2B%2FruHzdX3zM56qu6N9NHcZFqMpCkldeKfHfON2cYTy%2B7bAjUYVmdx62tEieH%2FQsrfM2omFNgoFDWzlwmF7fsSEe1g1Jszc5wbL%2FERsR8RVLkhsCrFQPBCg7OR0mkz5C0hV0sP4egQwljDEz%2FqnOlx4cXrMaMBSVkGyyVZma%2FBDerJkmKFXIynlm%2FlQUMTOcgtUP37rVRzSdk1fM%2Feu3r0S6JsVd7pRqdAH%2BUg0%2BAsLpbQojlAA4YIiraqqnRMNTFisoGOqUB5qvIkbwnh7DsApExGMPnZjnxJC7Ed7zKKJKgGYNzUIdhINdmN8xVB8rMJC1W1snmAVNGtq6VeC7fcdYRDWo2teFL5xyLzUpHr8AeSZTI65b82IZXCoBbUtczlGm%2Buf2czYOAbY38UoO1pV21iwD7GqNak1phhLzZeen3iWS3y1BnSlWGOi5aXIb1BEpUAotHuJImAEqazn6uorxbdAZRCdSri%2FHL&X-Amz-Signature=f7c399d63a8151504c60b4c53983d24c3cf76dbeaa5717b78528822fe2111344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFEY6G6C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg77GgiOa60mz%2BOT3xtgZYrX1V%2F%2FsYp47RSvE8ROargAiEA6kuKc2WIO65P%2Fb2ZSEClEVtUwB66v%2BSAeHQhe7sBVnIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDDz2W5Q9Rem%2FpBwPNircA6Sl7B34tH2mzIiGg2NqDexR9Iyq%2BYoMQ2LVQmjzquerVuZUvQTET2dsloZ96W%2BSAqzC36qfnXeguEuzHgAPn3PMeJ2c%2BkHpNH5g5uApIYYpa9OIwgM6ZTwGazFdnKaJTXfUzIIUYsY4dyoYpGyeRryYItsJKjPGFoBsAkATmP3vrrWxQvipyp2QFuuMgcpBUy65nK%2BPr0YK%2BqbPiSSxPWTNYoXJqwwSWjef3xJvnGXT1rPnyr%2BOthXseAfag7hfxgex%2F3yDR7xMeui6NU9CDwtrN4n%2F7iQiQioHp4jQK3ajv7%2FF5Sl0iubi%2BNVdLaAz4YgMbxi9wTfv3AV7Wf%2FIpGn9shrLPAquD0pZJzwQk8kYO8ZN21NdXNIePNMIQ8JW%2B%2FruHzdX3zM56qu6N9NHcZFqMpCkldeKfHfON2cYTy%2B7bAjUYVmdx62tEieH%2FQsrfM2omFNgoFDWzlwmF7fsSEe1g1Jszc5wbL%2FERsR8RVLkhsCrFQPBCg7OR0mkz5C0hV0sP4egQwljDEz%2FqnOlx4cXrMaMBSVkGyyVZma%2FBDerJkmKFXIynlm%2FlQUMTOcgtUP37rVRzSdk1fM%2Feu3r0S6JsVd7pRqdAH%2BUg0%2BAsLpbQojlAA4YIiraqqnRMNTFisoGOqUB5qvIkbwnh7DsApExGMPnZjnxJC7Ed7zKKJKgGYNzUIdhINdmN8xVB8rMJC1W1snmAVNGtq6VeC7fcdYRDWo2teFL5xyLzUpHr8AeSZTI65b82IZXCoBbUtczlGm%2Buf2czYOAbY38UoO1pV21iwD7GqNak1phhLzZeen3iWS3y1BnSlWGOi5aXIb1BEpUAotHuJImAEqazn6uorxbdAZRCdSri%2FHL&X-Amz-Signature=a051c3c7cf8c208a15237299f07835a3fd938097c509c78ea61af035913060de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
