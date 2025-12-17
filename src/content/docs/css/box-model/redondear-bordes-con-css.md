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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJ4ZCFK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8HsyEnSgADzybNDj0wXDtdOcWEsC1X7I6rN4vXk0%2FmAiEAmIqLMyLnUd1ccT1y4Jb2uOpNlto1zXFBl4KP9pCb93Eq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDA%2BPjRHsXRBDV9wqeSrcAydeRTFtqtYbaqKcuZOFoBUpbMuImOTm%2BzMUJpuyfob0G3z%2BZT%2B1dNcwuWxb%2Fpio6yMQutETtv2quiqJeABmdG2TySM1F0inmzyhCWFJEiebWszSGeuFUSEcHvAeb5kwjc1Wi5v9ROT85ELJz3qhGnTrfLfLdtn13%2FdiOw5nDhfhM7az%2B7l5p5Ks6lZMhb0iTy0OtwOsWM1VvQH11eZ1kx3jdlqucRj7aOm%2BUd2L5OEvFGUECdHRdp5UeW5iVX48yh4yzYY1nfrUPVLpIUBJ%2BWQfL3G2n49Frd9nhut1iLiZ89tcfjcK2H5aAvL6PmvwDJM8tL2cR80HIXFer9%2BGDF9rnSzG8Lgwp1nbSuy5BAVqxMfzkVtmju0w%2F%2F2xD7Tq%2F4zKBnGjRjSQaI0%2FbVW0MKweUXk6grbThZ03ALd9fB7h8H5OFzC9mW9iwVPToP1%2F0NmfaJyVWYzmfBTd9Pg1LUqChfIuQzTHww3xPgFm1ha5bDFB5Trl3zds05bNXQOd61ZWw0gPQSz4cZFRwG1T9gkJDZYJad0JXqDsSd7LeridZDZXPATLxeiJTUwvFz2Xz237OFA2WC7H0luxMUkuL8BuTmzIrGX2jTAWq5wNwbzF3KMoMToQ1epAFrlwMOrgisoGOqUBCHHhPoYeQIDqPHWfO7EFF3A5dCMsEXSLAYk%2B3ATsFFKb6dvZGK%2FepFpZBKj%2BDulokuoTk7ae1jRfMc%2FBw%2FjoZvAAqWO60jU21mczDeSnFfYV9mqnuUneIuF0pSMIHcfR7hZEEazkjwdiOUaJjy8tKOXOrzhD%2BtrNh%2BNoLlgWpyrnYdDjI%2BoVqM8ZaSvAeKYRD3F5d%2BFc5UHle%2FBGlI3HHCBnOjYO&X-Amz-Signature=6deb1d3c21a59ccc3637fdadf2f1cbc0c8ea308088bbc0b8020bf1681d1daf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDJ4ZCFK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8HsyEnSgADzybNDj0wXDtdOcWEsC1X7I6rN4vXk0%2FmAiEAmIqLMyLnUd1ccT1y4Jb2uOpNlto1zXFBl4KP9pCb93Eq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDA%2BPjRHsXRBDV9wqeSrcAydeRTFtqtYbaqKcuZOFoBUpbMuImOTm%2BzMUJpuyfob0G3z%2BZT%2B1dNcwuWxb%2Fpio6yMQutETtv2quiqJeABmdG2TySM1F0inmzyhCWFJEiebWszSGeuFUSEcHvAeb5kwjc1Wi5v9ROT85ELJz3qhGnTrfLfLdtn13%2FdiOw5nDhfhM7az%2B7l5p5Ks6lZMhb0iTy0OtwOsWM1VvQH11eZ1kx3jdlqucRj7aOm%2BUd2L5OEvFGUECdHRdp5UeW5iVX48yh4yzYY1nfrUPVLpIUBJ%2BWQfL3G2n49Frd9nhut1iLiZ89tcfjcK2H5aAvL6PmvwDJM8tL2cR80HIXFer9%2BGDF9rnSzG8Lgwp1nbSuy5BAVqxMfzkVtmju0w%2F%2F2xD7Tq%2F4zKBnGjRjSQaI0%2FbVW0MKweUXk6grbThZ03ALd9fB7h8H5OFzC9mW9iwVPToP1%2F0NmfaJyVWYzmfBTd9Pg1LUqChfIuQzTHww3xPgFm1ha5bDFB5Trl3zds05bNXQOd61ZWw0gPQSz4cZFRwG1T9gkJDZYJad0JXqDsSd7LeridZDZXPATLxeiJTUwvFz2Xz237OFA2WC7H0luxMUkuL8BuTmzIrGX2jTAWq5wNwbzF3KMoMToQ1epAFrlwMOrgisoGOqUBCHHhPoYeQIDqPHWfO7EFF3A5dCMsEXSLAYk%2B3ATsFFKb6dvZGK%2FepFpZBKj%2BDulokuoTk7ae1jRfMc%2FBw%2FjoZvAAqWO60jU21mczDeSnFfYV9mqnuUneIuF0pSMIHcfR7hZEEazkjwdiOUaJjy8tKOXOrzhD%2BtrNh%2BNoLlgWpyrnYdDjI%2BoVqM8ZaSvAeKYRD3F5d%2BFc5UHle%2FBGlI3HHCBnOjYO&X-Amz-Signature=e8564293bb51ce02d17c501d944da5d31ef7e652d249e9660ba858211d5d7ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
