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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VA5SDP5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPXvDxuxTGxu7Z2dbC2F6ExM1tkf7t%2BkeMbC4LwEKlLAiAMrVIuf44rsP7hNepMwuve8UMqc9PARV%2B45B2Up0He0yqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyoCav%2Fu69zWMmzAqKtwD7CRZc%2F1%2FaEjUciyTwx%2FHhGUhHx5Dw9nzfHQUQWQdlVCKQpbbInR%2FlGf1Tj4odVMDpcJJCpnM0ICBegrbY2RYGrukZsnE4dDTay4PuUfxRxfU6BHAdZ4adG9qW56PFTL0ltkKhD0uAUNSVyZqrrkiKGrtVc2vVfsTavj11gsvXGNaCtTkfFziI0ERRiZHPQqrXV6aJLA3JVSCi6%2BrcF6KsF8AWs1VD2Y%2FHZsjtur6u%2B9G9z5YeJQKL1itx6DdDbsK7U6ae6GQiQHR%2B8pGq4%2FK2vJzL%2Bxp9Gd0jhaegpGkVbbieRehii6%2FRtyXI67aEt49zakbOhxw6qHcxWrCsnuN%2FGlFCFCMcB%2Bq9PLFPPmdtFzTu4QiI6xQ4LxOtTEew2tUxCtLmleLYuYqbvFgDuyugbrgBmCJSjAOKDuhrHhha5VRtn8EKsTaTHaA0OMUfHqWkto7oYy20COfX%2Fwqw8QZFVFPo2SmZHUJXrtSx%2FMRLkU5cS5VmY2iVBKRGZy7r9vAfL4OUltRffsTfWQsvZKyvLxY3qbnUB9KQXZhc5ZcQoqf5ucwrIDGKOjcSkLD6etu51Gmw3S56g43y2IM6v4G4EhhdcCHhwtzWoqtUivNyHC1KuOYUnfzPgtF484w5O%2FYyQY6pgFIdxrj0BgyUITusVjxijX1dvNLlFME9BZldJccuvT9MaDr3v3OSfohDKS%2BrrvqxFSJGXW3jcR4M99csJ1qNQ2bBX1Y9GZ%2F8zchF47V1FJyVUKQpkbtd6gilcqt3lBmaiIFq2DDQLHb7RkC2pDbtAaZY6w5vAw8FuhmozsGpmJJzWTVq0D4QWLvck36i82Ng5c4KMRTnBk%2Bija2UKi6Jt9eJcPYwI4b&X-Amz-Signature=c0b605f7993310fb1bb7d3588c4bca3d7f539c0e825b9d8daaa5364c1f99efd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VA5SDP5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPXvDxuxTGxu7Z2dbC2F6ExM1tkf7t%2BkeMbC4LwEKlLAiAMrVIuf44rsP7hNepMwuve8UMqc9PARV%2B45B2Up0He0yqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyoCav%2Fu69zWMmzAqKtwD7CRZc%2F1%2FaEjUciyTwx%2FHhGUhHx5Dw9nzfHQUQWQdlVCKQpbbInR%2FlGf1Tj4odVMDpcJJCpnM0ICBegrbY2RYGrukZsnE4dDTay4PuUfxRxfU6BHAdZ4adG9qW56PFTL0ltkKhD0uAUNSVyZqrrkiKGrtVc2vVfsTavj11gsvXGNaCtTkfFziI0ERRiZHPQqrXV6aJLA3JVSCi6%2BrcF6KsF8AWs1VD2Y%2FHZsjtur6u%2B9G9z5YeJQKL1itx6DdDbsK7U6ae6GQiQHR%2B8pGq4%2FK2vJzL%2Bxp9Gd0jhaegpGkVbbieRehii6%2FRtyXI67aEt49zakbOhxw6qHcxWrCsnuN%2FGlFCFCMcB%2Bq9PLFPPmdtFzTu4QiI6xQ4LxOtTEew2tUxCtLmleLYuYqbvFgDuyugbrgBmCJSjAOKDuhrHhha5VRtn8EKsTaTHaA0OMUfHqWkto7oYy20COfX%2Fwqw8QZFVFPo2SmZHUJXrtSx%2FMRLkU5cS5VmY2iVBKRGZy7r9vAfL4OUltRffsTfWQsvZKyvLxY3qbnUB9KQXZhc5ZcQoqf5ucwrIDGKOjcSkLD6etu51Gmw3S56g43y2IM6v4G4EhhdcCHhwtzWoqtUivNyHC1KuOYUnfzPgtF484w5O%2FYyQY6pgFIdxrj0BgyUITusVjxijX1dvNLlFME9BZldJccuvT9MaDr3v3OSfohDKS%2BrrvqxFSJGXW3jcR4M99csJ1qNQ2bBX1Y9GZ%2F8zchF47V1FJyVUKQpkbtd6gilcqt3lBmaiIFq2DDQLHb7RkC2pDbtAaZY6w5vAw8FuhmozsGpmJJzWTVq0D4QWLvck36i82Ng5c4KMRTnBk%2Bija2UKi6Jt9eJcPYwI4b&X-Amz-Signature=a6f0e3ec1b17f1d95eb133a27197c91acbdbc18bd40ae08b5eca56078fdd8fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
