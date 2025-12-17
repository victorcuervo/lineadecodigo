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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVQQGIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWkM6ByMovYYnPTNnGXx0F61W2J1pyJaOlALaKc63cHAiEAs6bO4gju5ml3F5qXbNL3eIdLi8ZUe1gr7BTZmbwEn7oq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFEbq7m6Fov5Mmp5ECrcA3TmEEChglIfoluXLXnaVNiu90TBd4dhmvmgo3pVsvBj8c3nqtKBhbBQoe8lrf5EWKDgxWDAxcQZxqvw8yLXBcUVi5VX1cfB33L6qQ4jeZ%2F0Rlh3sEGKIen5oSALa0yk29HRUIaWIwFm7lh%2BlU9c9wAhfllirry96hzwt%2FE024768wQMpgVx%2FeDAeplOId8x3MrlaI8CXaYhgMcdhPW45yGH6sI3q0gOxDP2kfQibXPvDl6YEFlo8nC5b6vz%2FsyzD97VhtUSFAmpqJzSoYi2s29xCeTYybaGXFT4jz5ptKTiU4S64GhAZZF1KaZbGaQHzTQ8w2RpuUyNteD2Tvg7%2B2SyFjDz4MvEhZfWLAMlSH9neUXwCA5HIjEK%2FwPuu8Q%2BFUcXyFafI7wYxMv8paYcE%2FkShsK6Dwddd0MgNoYSEQAG%2FBCTYfhkDZ1grqcpo2m3MoXIAWS9tZwxovR%2BwtOdKbu0cD%2BWuvEEiUpOPmHR4Z9PbChteHKBGqcVc2cDUWPGlMrm7D1ekgbUgBfiOwT%2Btn9D9IchaOfRfgzF13w1lx4RBS3CeaqPyPk4P8noj4NoH6BWbdhHIuZn84wmg3%2Bj11tCt2NlPvc9addiTlzwvbxfxa0l7Bna2el7d1UnMO63icoGOqUBLirLQ5xbkdqukZZPDqy%2F1Eeyf4CsNAVOImsMMNMnvgLzIHE4EWCQ2zrTMnegHIE%2BH4tH%2FkWSI381Cposlm5H%2BsEYKDnOfTHga9cwo%2FI5H9eNLa5n8i5ceBiXrLMHo5JbjuZ%2FJJFuSU4SxoFVxP003%2FgdF4VFt6attwQSzwSsIuhQCEV7daKf8pNGR1AJWTdSKd%2FAMG3FagRh%2B1tWRzos%2Bi2upXT8&X-Amz-Signature=8d87d95d33d6cf5ff5861cc24ddf8e489bc8e37ed857606d84be0561705ba52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVQQGIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWkM6ByMovYYnPTNnGXx0F61W2J1pyJaOlALaKc63cHAiEAs6bO4gju5ml3F5qXbNL3eIdLi8ZUe1gr7BTZmbwEn7oq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFEbq7m6Fov5Mmp5ECrcA3TmEEChglIfoluXLXnaVNiu90TBd4dhmvmgo3pVsvBj8c3nqtKBhbBQoe8lrf5EWKDgxWDAxcQZxqvw8yLXBcUVi5VX1cfB33L6qQ4jeZ%2F0Rlh3sEGKIen5oSALa0yk29HRUIaWIwFm7lh%2BlU9c9wAhfllirry96hzwt%2FE024768wQMpgVx%2FeDAeplOId8x3MrlaI8CXaYhgMcdhPW45yGH6sI3q0gOxDP2kfQibXPvDl6YEFlo8nC5b6vz%2FsyzD97VhtUSFAmpqJzSoYi2s29xCeTYybaGXFT4jz5ptKTiU4S64GhAZZF1KaZbGaQHzTQ8w2RpuUyNteD2Tvg7%2B2SyFjDz4MvEhZfWLAMlSH9neUXwCA5HIjEK%2FwPuu8Q%2BFUcXyFafI7wYxMv8paYcE%2FkShsK6Dwddd0MgNoYSEQAG%2FBCTYfhkDZ1grqcpo2m3MoXIAWS9tZwxovR%2BwtOdKbu0cD%2BWuvEEiUpOPmHR4Z9PbChteHKBGqcVc2cDUWPGlMrm7D1ekgbUgBfiOwT%2Btn9D9IchaOfRfgzF13w1lx4RBS3CeaqPyPk4P8noj4NoH6BWbdhHIuZn84wmg3%2Bj11tCt2NlPvc9addiTlzwvbxfxa0l7Bna2el7d1UnMO63icoGOqUBLirLQ5xbkdqukZZPDqy%2F1Eeyf4CsNAVOImsMMNMnvgLzIHE4EWCQ2zrTMnegHIE%2BH4tH%2FkWSI381Cposlm5H%2BsEYKDnOfTHga9cwo%2FI5H9eNLa5n8i5ceBiXrLMHo5JbjuZ%2FJJFuSU4SxoFVxP003%2FgdF4VFt6attwQSzwSsIuhQCEV7daKf8pNGR1AJWTdSKd%2FAMG3FagRh%2B1tWRzos%2Bi2upXT8&X-Amz-Signature=6e2dbb55c32f74f7d497c8bb9c09a515f00d89dee8459d7631a2dd698ff6a202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
