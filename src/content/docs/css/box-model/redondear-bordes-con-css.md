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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UN7Y277%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjBaom59Up7hb2BycLBHz2lT0HbEaJNVWIU0cDkqcf6wIhAMurIFguMRsSXmGg2g284Db5JlTRKf99gnUVE%2FDrokiLKv8DCHMQABoMNjM3NDIzMTgzODA1Igz%2BoaFIJeH%2FN6fHcjUq3AMVQwiHyji4AjJgoJGwJ6NvynR%2FVbPKJy9A%2Fat3ucePzCl%2BZIzsBmoATzYOqou4Teyi824d5O2yahwUSnoNrXbTcHO6%2F9o2l47DbvHqOxSFCva9fu3n2Jk6T%2BCn1ZGrvF%2Bu8qxnjbI4m1COc0Do3V9w8sCaOZAKMNA3W3se7WznuGL28EXJA%2Bnd8rHnR3q%2BuO3M3AG9sRhXnRDSgjgyap9e9IeR3K7FmyiEw9BgCaTQUXgLQ%2BlgC8%2FQ1EoKajmMtuqf3HDiQlZochx2D97vgcPNGcGmcz2bAU65vQ5K9UMOEFxysH8zVkNyqdbLfDJS%2F4wyjFx33o3fuVpeYUkJgg%2FGs2squWr8nG3hui%2F3xuQgFNZuLfrAHhM28O%2FdPwQf2XuxuA6S4xCFZ2pXh5m4Pvh%2FgBupTe0rEQRV5aoBJfxYQCQVnXTGBjdYuIenIKpJ5J1OHoUBOXjdFfR3Pwbs9c9%2BgTejwjNIicnYa%2BIkwFN6JnCeVSTyF4zsNPOEiRMuQgT7x3maP5WZdUzp5QIIbDFbReYSsdNN%2F1T2m5rLTVoVH80%2FLVWws7HJTSH7RvrDJYekfrUGdRr2KLaMfQhFZYEU64yH47vA1Y4uku%2BmLpTYJF4MwFeZO0ouU2V0nzDPlYjKBjqkAUSoe54KMPAQYQ0TdFQDf7fWJZUqwP%2B7kW9aiZh44By72rhNwhVCRPSquvseHP4x2PmcDCOos23o14hgdhCmSnZfG5bRYF1EBAAg6xhBhUabdr2QNCQS8QCksilOvARbNJT3jgocfH%2Bi2g9e3FXtz%2B6HxhSiEdDfAZWoG8V9HsFUvO0dCUNfCejkLsWCzEDV6%2Bj8U6Z9wpSwUpnCnKsY6pOK1hJL&X-Amz-Signature=b8fca5e21a762a651faff015fd00bd11b81d4a0d657f73b9c29bf21612881196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UN7Y277%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjBaom59Up7hb2BycLBHz2lT0HbEaJNVWIU0cDkqcf6wIhAMurIFguMRsSXmGg2g284Db5JlTRKf99gnUVE%2FDrokiLKv8DCHMQABoMNjM3NDIzMTgzODA1Igz%2BoaFIJeH%2FN6fHcjUq3AMVQwiHyji4AjJgoJGwJ6NvynR%2FVbPKJy9A%2Fat3ucePzCl%2BZIzsBmoATzYOqou4Teyi824d5O2yahwUSnoNrXbTcHO6%2F9o2l47DbvHqOxSFCva9fu3n2Jk6T%2BCn1ZGrvF%2Bu8qxnjbI4m1COc0Do3V9w8sCaOZAKMNA3W3se7WznuGL28EXJA%2Bnd8rHnR3q%2BuO3M3AG9sRhXnRDSgjgyap9e9IeR3K7FmyiEw9BgCaTQUXgLQ%2BlgC8%2FQ1EoKajmMtuqf3HDiQlZochx2D97vgcPNGcGmcz2bAU65vQ5K9UMOEFxysH8zVkNyqdbLfDJS%2F4wyjFx33o3fuVpeYUkJgg%2FGs2squWr8nG3hui%2F3xuQgFNZuLfrAHhM28O%2FdPwQf2XuxuA6S4xCFZ2pXh5m4Pvh%2FgBupTe0rEQRV5aoBJfxYQCQVnXTGBjdYuIenIKpJ5J1OHoUBOXjdFfR3Pwbs9c9%2BgTejwjNIicnYa%2BIkwFN6JnCeVSTyF4zsNPOEiRMuQgT7x3maP5WZdUzp5QIIbDFbReYSsdNN%2F1T2m5rLTVoVH80%2FLVWws7HJTSH7RvrDJYekfrUGdRr2KLaMfQhFZYEU64yH47vA1Y4uku%2BmLpTYJF4MwFeZO0ouU2V0nzDPlYjKBjqkAUSoe54KMPAQYQ0TdFQDf7fWJZUqwP%2B7kW9aiZh44By72rhNwhVCRPSquvseHP4x2PmcDCOos23o14hgdhCmSnZfG5bRYF1EBAAg6xhBhUabdr2QNCQS8QCksilOvARbNJT3jgocfH%2Bi2g9e3FXtz%2B6HxhSiEdDfAZWoG8V9HsFUvO0dCUNfCejkLsWCzEDV6%2Bj8U6Z9wpSwUpnCnKsY6pOK1hJL&X-Amz-Signature=2cab432f1f617a47d61c10a18954fdef6ce4999d27344ce4490a1e11360940db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
