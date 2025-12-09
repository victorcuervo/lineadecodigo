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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PQ6MJEE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComAuyDWCe0Jz4WHpIVhZyGR%2F8kVRsH0evOp%2B7hTn%2B1AIgLISJGcAlHvtwTX5xoQPJiiCultE1xuS4%2BiW84qwf%2BGMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYCIe5U1SMjUEeOnircA2pfWAvHol4DrzLOcL2t3VxwnAFjWfHXsK07LhbGqUGgA6%2B8U0Ov8DcUGtl9YpUlaqfmb3qRQpu%2FM9RVKpvB9FryJMvlMXuZmTNs7Jn9%2FlHsIs2lRMT64X%2FrAePyb%2BL2ealzbCn40zXSXp8KIpp%2BwW7vU0%2FY0mWyhOKLUPWDB7mzmYPi9Nz1F0eh73uz8amepDmjPKUAhRS1ILcfNdE889XCD8va9KH3w%2FcSEPkozPln22QdIyfAWSwebsy5uh4NSL7CnoIbeCo8mFS2L0KHVa%2FxLka3SAIF6xAwe%2BsbHry49i%2BQ%2BQuNGMtG00%2BTKkebgVuB8DrS3V04apEoB7CllxfY7xGeMPNoWHSwSXUzWILFuN6cp%2BGzgKZCM%2FaQd85F80jylBYKSU3z7vwwuuDNQVxKJOzpB7WySWwM1KenaKtRBa%2FCbO3Hhi2mse6JzBklnoRhuJ8sTcOYAMwn5kxIg32J9QdgUzq2%2BIGXD7HViXRECQwbjrWhZ2W6L3sDFsuhook9%2FYH9XuGX26br%2BE4A4AL6sWcHqBq4utB5Xf9ew7a%2FZBlL18TL21zMexii7eGOmSE51I5qlyVIPEsK2GBrqqUO8%2BK6fsOd%2FjGtt8t%2BgLTo%2BgWai%2FBGQaUR2njIMMDE38kGOqUBrXhEUrJbopcX02iQR5qXQE5RVqDF2jBiufqqTw1U9jg3TZ%2B5c0sORvzpp7LqKFk8FnAlK4g%2Bie5WUmycH6750rqz0B8vIIf8KAeeQ%2BvSDfbs5xRNUz2fg2%2Fg5F2ehwLbndWz%2B3%2FVfEbMWUoSbOhXviE1kuHYE9DuO0Opt4scVouFedM4qdsUlljmVeDPZGjFvqY4daSMuYQA6i8ttJLbdzdUmbKC&X-Amz-Signature=513bcc47314ebe65c70cf993d829fc88d5728b1ac98749599386dca941c35f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PQ6MJEE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQComAuyDWCe0Jz4WHpIVhZyGR%2F8kVRsH0evOp%2B7hTn%2B1AIgLISJGcAlHvtwTX5xoQPJiiCultE1xuS4%2BiW84qwf%2BGMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYCIe5U1SMjUEeOnircA2pfWAvHol4DrzLOcL2t3VxwnAFjWfHXsK07LhbGqUGgA6%2B8U0Ov8DcUGtl9YpUlaqfmb3qRQpu%2FM9RVKpvB9FryJMvlMXuZmTNs7Jn9%2FlHsIs2lRMT64X%2FrAePyb%2BL2ealzbCn40zXSXp8KIpp%2BwW7vU0%2FY0mWyhOKLUPWDB7mzmYPi9Nz1F0eh73uz8amepDmjPKUAhRS1ILcfNdE889XCD8va9KH3w%2FcSEPkozPln22QdIyfAWSwebsy5uh4NSL7CnoIbeCo8mFS2L0KHVa%2FxLka3SAIF6xAwe%2BsbHry49i%2BQ%2BQuNGMtG00%2BTKkebgVuB8DrS3V04apEoB7CllxfY7xGeMPNoWHSwSXUzWILFuN6cp%2BGzgKZCM%2FaQd85F80jylBYKSU3z7vwwuuDNQVxKJOzpB7WySWwM1KenaKtRBa%2FCbO3Hhi2mse6JzBklnoRhuJ8sTcOYAMwn5kxIg32J9QdgUzq2%2BIGXD7HViXRECQwbjrWhZ2W6L3sDFsuhook9%2FYH9XuGX26br%2BE4A4AL6sWcHqBq4utB5Xf9ew7a%2FZBlL18TL21zMexii7eGOmSE51I5qlyVIPEsK2GBrqqUO8%2BK6fsOd%2FjGtt8t%2BgLTo%2BgWai%2FBGQaUR2njIMMDE38kGOqUBrXhEUrJbopcX02iQR5qXQE5RVqDF2jBiufqqTw1U9jg3TZ%2B5c0sORvzpp7LqKFk8FnAlK4g%2Bie5WUmycH6750rqz0B8vIIf8KAeeQ%2BvSDfbs5xRNUz2fg2%2Fg5F2ehwLbndWz%2B3%2FVfEbMWUoSbOhXviE1kuHYE9DuO0Opt4scVouFedM4qdsUlljmVeDPZGjFvqY4daSMuYQA6i8ttJLbdzdUmbKC&X-Amz-Signature=4251986eeefcc39a043163ffa2f18eadd93ce7b000c75f019f8d455916b86eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
