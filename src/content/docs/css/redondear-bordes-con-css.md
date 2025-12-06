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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYI62QP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICa7nKwuenENUcqpSWAPogitBeZTd0%2F%2FHQyYD3oDGYBwAiEAlS1WYuuit0PHwahk16Ge7lsXu4RWyD2hKmW3jpNZcs4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAdqfbIqmNCEGVaKOircAzDKXlIsuEgSQjkm%2BCHkY8P1xl4MChK6HsBk3GZNxfVXxNJF7LmeeDHNjoXPgFp%2FXSJpDQayiLb%2B0K20RjWNHrLa6XW6IQo4mQ2DbxC5s2rpGZRObI4aFISIXWXTm6981LoV26Fy8P%2BnFThulA2dh0YwYpTC2X8FuPOK3CwZdbUqOZvfmWogMhbst7PCUs%2ButNpzNuivbJnBG4bKYr9iNnGjaWnMiU5y%2BX6aPAwSKK%2BR%2Bc7L8bGlajvxCOPEtS5c2dAkObePxNZGL77wE2%2FIpvnDMaZDXatWsPrehFK%2Fbi2l%2FxFhOFBjuhwWtlbYiwqjZPvqUU8kzSqL4PGsdBkhcWrPzieS7TAiZ7JiZ8C6eiFh4MaPE8S25%2BNQtRS2XTMEKw7fyFeNhLGj92KvC7%2B6aNzMdnqHmfnEZIaDi84B9tEAIUoR4Q0AedYK%2BgA9e%2BpcA1vvt%2BK5y7tf1BakDQ9Nw%2BUSUM%2BGuIQMkILVUEEKOC5in%2Fv04wEc3IMWwQ4jpJlnhV1DwwrfDFYtuNhKI0QzUhFZsfqVglK4S4RtOF4ntPxld%2FFkZHMPMz0eP%2BQD6crQarkMbcuWwwZutDzG6pzBc77%2Bb5jh%2BWkuZhFXxPsBDM0wKeamx3EaVo%2F9Ld4yMI2K0MkGOqUBERVm6wQLEAqjT%2FywWXxy1NLUtH6467VmqqMR3I0d1Db67pbnKg7fgC5MtBOT6%2B%2F1l178qSJSC6%2FiJpFj8EidWCiFVze199%2FMvDSVMTKJ6na8KWN561hw4ewMuuSVhBWfURy71qTU%2Fa5k3ydUgTGHd%2Fd%2BdpkZjVQc7sfx7uVdccx9nxieq9QuOJWP62YuJqXibFaYk90aNE7iuCr%2BTt9PIyTK%2BTLR&X-Amz-Signature=df3454d3de9e0536ecdb64c0679820ae5a4ef04b60cf3334b2c96ec00807c58a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTYI62QP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICa7nKwuenENUcqpSWAPogitBeZTd0%2F%2FHQyYD3oDGYBwAiEAlS1WYuuit0PHwahk16Ge7lsXu4RWyD2hKmW3jpNZcs4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAdqfbIqmNCEGVaKOircAzDKXlIsuEgSQjkm%2BCHkY8P1xl4MChK6HsBk3GZNxfVXxNJF7LmeeDHNjoXPgFp%2FXSJpDQayiLb%2B0K20RjWNHrLa6XW6IQo4mQ2DbxC5s2rpGZRObI4aFISIXWXTm6981LoV26Fy8P%2BnFThulA2dh0YwYpTC2X8FuPOK3CwZdbUqOZvfmWogMhbst7PCUs%2ButNpzNuivbJnBG4bKYr9iNnGjaWnMiU5y%2BX6aPAwSKK%2BR%2Bc7L8bGlajvxCOPEtS5c2dAkObePxNZGL77wE2%2FIpvnDMaZDXatWsPrehFK%2Fbi2l%2FxFhOFBjuhwWtlbYiwqjZPvqUU8kzSqL4PGsdBkhcWrPzieS7TAiZ7JiZ8C6eiFh4MaPE8S25%2BNQtRS2XTMEKw7fyFeNhLGj92KvC7%2B6aNzMdnqHmfnEZIaDi84B9tEAIUoR4Q0AedYK%2BgA9e%2BpcA1vvt%2BK5y7tf1BakDQ9Nw%2BUSUM%2BGuIQMkILVUEEKOC5in%2Fv04wEc3IMWwQ4jpJlnhV1DwwrfDFYtuNhKI0QzUhFZsfqVglK4S4RtOF4ntPxld%2FFkZHMPMz0eP%2BQD6crQarkMbcuWwwZutDzG6pzBc77%2Bb5jh%2BWkuZhFXxPsBDM0wKeamx3EaVo%2F9Ld4yMI2K0MkGOqUBERVm6wQLEAqjT%2FywWXxy1NLUtH6467VmqqMR3I0d1Db67pbnKg7fgC5MtBOT6%2B%2F1l178qSJSC6%2FiJpFj8EidWCiFVze199%2FMvDSVMTKJ6na8KWN561hw4ewMuuSVhBWfURy71qTU%2Fa5k3ydUgTGHd%2Fd%2BdpkZjVQc7sfx7uVdccx9nxieq9QuOJWP62YuJqXibFaYk90aNE7iuCr%2BTt9PIyTK%2BTLR&X-Amz-Signature=549d42ac2c3f42ca8d5526f004d3efc99e3788a47ba9aa0c32e7745635450406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
