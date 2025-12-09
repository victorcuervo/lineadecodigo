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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGKJFBW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNBMl5DgZhh8JTGAGLIqwFi25Vr%2FnMoBHLT3CRe%2Fin7wIhAOPPJIZTlrAQ76mTxh66LwtszMify0h5q0QB5TpAvWB0KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdmkduH7%2BP3WvdG9oq3AMo5gU7EiDdlnU9TTxXWOK954xJpoMCwLJFaOQeCrCY1f0CKWjCYXBBqZUabfJcWYPn%2BaT3y%2FvvqFDvsbx3icMQHtl%2FqPrc4VrFhvK47eSrtHS0cn5Kfj0JDVgoD2FciODqtv8YtII40qEygMfoym8JoS%2BiwDFJV261sOLuyAHZmpEdB%2Fj4k0MO786sx6VmLrjUHBQOxypFG8p17YjZ6EdGc6FDvhpzxJyp%2B3if90H9CxhMetYo7kAfEmp%2BUhLt2%2BGNEkiDody3fyhA%2BvXWo%2FgWvs4bQQgRbhcFVIIZG%2BmqAyq7VlEs61Ww2%2FH9Dd4FKROXY4p3Yt3Ta4Rmsb8PRylqaswNovXsDu0MfC4BKBbtX1s2Ew9p8W2pyCaS57W3CDAsKJ7xWGu8tgMEvb1Fneb9LswvLyBMG1MRlA0bWaMqokL5EhlZ3eBiN2U9JNu4NnhNdNrkio0EcyYT0kVcNK0MhlUhfOrPO2fY1evR7kEqSWHMRekiVtVCAXhVDra91vD2YI52gfcOVSM%2B4FV9yj4diA6bXIB98OBCZmLE6w7QR%2BIiIYSMb01jvTj8iw%2BmBfR0nQSUk7GhGgSM9Vtwla9olRyHK%2F0a1xveMbxFjYNBivSxch05ViWeYfibrzChw9%2FJBjqkAetspAK5H2Z9sCG94dfqGBBse95%2FqAWQHdsjCR2y9dtmV7spCwd1Fy9Ylxs65vh1F57nwQygkilkw5wzrxKWHDEA1nmxoq8OWdc1buPiSPRwGvL9IzwPlc6UPAcY97MB%2F%2FV4y3CbNdD6KJT6DJOdGVX%2BCgVF4YYH%2BeybxchV9T4SubT%2BOzZg1OLeirnqaL3tYHWGU7MkgHLxvHHVA2Q7KV0aaAw8&X-Amz-Signature=61a54924fd7c557c3b9d71cc7567409f667716de22a2ded6eff23b7f2728efa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGKJFBW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNBMl5DgZhh8JTGAGLIqwFi25Vr%2FnMoBHLT3CRe%2Fin7wIhAOPPJIZTlrAQ76mTxh66LwtszMify0h5q0QB5TpAvWB0KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdmkduH7%2BP3WvdG9oq3AMo5gU7EiDdlnU9TTxXWOK954xJpoMCwLJFaOQeCrCY1f0CKWjCYXBBqZUabfJcWYPn%2BaT3y%2FvvqFDvsbx3icMQHtl%2FqPrc4VrFhvK47eSrtHS0cn5Kfj0JDVgoD2FciODqtv8YtII40qEygMfoym8JoS%2BiwDFJV261sOLuyAHZmpEdB%2Fj4k0MO786sx6VmLrjUHBQOxypFG8p17YjZ6EdGc6FDvhpzxJyp%2B3if90H9CxhMetYo7kAfEmp%2BUhLt2%2BGNEkiDody3fyhA%2BvXWo%2FgWvs4bQQgRbhcFVIIZG%2BmqAyq7VlEs61Ww2%2FH9Dd4FKROXY4p3Yt3Ta4Rmsb8PRylqaswNovXsDu0MfC4BKBbtX1s2Ew9p8W2pyCaS57W3CDAsKJ7xWGu8tgMEvb1Fneb9LswvLyBMG1MRlA0bWaMqokL5EhlZ3eBiN2U9JNu4NnhNdNrkio0EcyYT0kVcNK0MhlUhfOrPO2fY1evR7kEqSWHMRekiVtVCAXhVDra91vD2YI52gfcOVSM%2B4FV9yj4diA6bXIB98OBCZmLE6w7QR%2BIiIYSMb01jvTj8iw%2BmBfR0nQSUk7GhGgSM9Vtwla9olRyHK%2F0a1xveMbxFjYNBivSxch05ViWeYfibrzChw9%2FJBjqkAetspAK5H2Z9sCG94dfqGBBse95%2FqAWQHdsjCR2y9dtmV7spCwd1Fy9Ylxs65vh1F57nwQygkilkw5wzrxKWHDEA1nmxoq8OWdc1buPiSPRwGvL9IzwPlc6UPAcY97MB%2F%2FV4y3CbNdD6KJT6DJOdGVX%2BCgVF4YYH%2BeybxchV9T4SubT%2BOzZg1OLeirnqaL3tYHWGU7MkgHLxvHHVA2Q7KV0aaAw8&X-Amz-Signature=1d65345555ec9dcf95dbc3a15756ee22608ae5754dd88e1cd3918ba15e630754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
