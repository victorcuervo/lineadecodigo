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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROPI7A4A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVtFDKGrXQLHDmmsgiIcQm0CsD7Niw1H%2BwSQQhe%2FYnSAiBmXU9Phd0S2qx5CcD995ijcIjvAjvUdpbt6xsQdfXaLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9LhwZokd5Z%2FGL1zPKtwD6EaRbL7n6clWh52sSxd9%2BqbABdgom1wDufKuoF1epeKJWQAsDKpY2Z1t%2FUBnbx%2Fi8FA6FA7vWRb6vq4WJbaTCpOFWCcp7qk97CSgtGNHX6QRCWBHCyJi4gmIjm6vsT37Z4e7D4%2FM%2F%2BPkXe%2F9vPrffZMN73WClu3gLmiKy8DnLgNfsv%2B67xglF0IzH%2BnhTnTJj9YMaz05ayqWxaG2cxnsiz%2F2FOmaT1WYJBOcb5jp6myksjqit%2B69N9qJnRiHVjT23eF%2FhJSdj3IJ5OMGXwocbOhdlsn0u%2BuDgk7ZOgSmz6VqrejO30QZ4RhKtk9IQPIgagJPeN56zeaYLI5T63jD04GUIO2towzkY%2BXrbC1KJHv8yPSJpKGhlhTQpSu9oGfU%2Fnuk6d3o5g0K6%2FvhisYfMDj4dkiTWNWSZ4PIKmysL0gyY1dtXMwgVh2GUZ96yAtbjVrstNttdbI5WtPIehWQfpzCdfSps06AIXEcZJZ0QHyxMiXr3OHwRyU5Aj3auPBXfcDtHyuydKRPxA9n7OS9bp6ku5xGN7NTi8edytC3a98vuudpEBUUjMSc3IkQyHbIYw0H7VlghdvTJ1WEvLZuKR2pIw5FSpCD2Byrbw6WSZhmUV15GzxSS6bHhi4wxabQyQY6pgEasCgkx3sb9dpqoFeBc9vtK1%2BaA64Z%2BdRzJKDn2tqB%2FQbxvu6vVHgqmRZugQ087BLjC3clEh49EbVR%2FX6EmP3mvZp75MSWZqG3LP4t5x7qk%2FlpWBtnquzgxW43AnRB2iIObImwJ2Jt%2Fgv1xsELPAB%2FfCiJFBfp8nCTbfPxVUM%2F5MUXNyCacARDpf5UlARkuKD6EFHAJCkjIHOb1mHmSOKyahKyEfSm&X-Amz-Signature=1d000c1391b5b2d5c567269509c36453051f0feec2cc0095fcce78be4ffdfe2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROPI7A4A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVtFDKGrXQLHDmmsgiIcQm0CsD7Niw1H%2BwSQQhe%2FYnSAiBmXU9Phd0S2qx5CcD995ijcIjvAjvUdpbt6xsQdfXaLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9LhwZokd5Z%2FGL1zPKtwD6EaRbL7n6clWh52sSxd9%2BqbABdgom1wDufKuoF1epeKJWQAsDKpY2Z1t%2FUBnbx%2Fi8FA6FA7vWRb6vq4WJbaTCpOFWCcp7qk97CSgtGNHX6QRCWBHCyJi4gmIjm6vsT37Z4e7D4%2FM%2F%2BPkXe%2F9vPrffZMN73WClu3gLmiKy8DnLgNfsv%2B67xglF0IzH%2BnhTnTJj9YMaz05ayqWxaG2cxnsiz%2F2FOmaT1WYJBOcb5jp6myksjqit%2B69N9qJnRiHVjT23eF%2FhJSdj3IJ5OMGXwocbOhdlsn0u%2BuDgk7ZOgSmz6VqrejO30QZ4RhKtk9IQPIgagJPeN56zeaYLI5T63jD04GUIO2towzkY%2BXrbC1KJHv8yPSJpKGhlhTQpSu9oGfU%2Fnuk6d3o5g0K6%2FvhisYfMDj4dkiTWNWSZ4PIKmysL0gyY1dtXMwgVh2GUZ96yAtbjVrstNttdbI5WtPIehWQfpzCdfSps06AIXEcZJZ0QHyxMiXr3OHwRyU5Aj3auPBXfcDtHyuydKRPxA9n7OS9bp6ku5xGN7NTi8edytC3a98vuudpEBUUjMSc3IkQyHbIYw0H7VlghdvTJ1WEvLZuKR2pIw5FSpCD2Byrbw6WSZhmUV15GzxSS6bHhi4wxabQyQY6pgEasCgkx3sb9dpqoFeBc9vtK1%2BaA64Z%2BdRzJKDn2tqB%2FQbxvu6vVHgqmRZugQ087BLjC3clEh49EbVR%2FX6EmP3mvZp75MSWZqG3LP4t5x7qk%2FlpWBtnquzgxW43AnRB2iIObImwJ2Jt%2Fgv1xsELPAB%2FfCiJFBfp8nCTbfPxVUM%2F5MUXNyCacARDpf5UlARkuKD6EFHAJCkjIHOb1mHmSOKyahKyEfSm&X-Amz-Signature=bdcff686d9303c9b478d889bfd7145f43e06262b592adecbe38ab83f40e04856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
