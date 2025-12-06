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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF3GZ7F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk%2B18OYm1t4WezObNq4k0sBgkB1d5u5bESY6j9FqWzYwIhAKX9gwKj1ImBgzLyyCvPeDuRYrYAFeY1Lw5bcj1H57n3KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywW%2BSrDoJUCsRHGIUq3AO4jYHq4VosApoVPBIeGtuKq68JjxAAlvGgCwEMufvnopJxVYQXw0D0KqWSBp0wGdnazC3wBItP0qVtBLAfqsV%2FK3tw8Ub2qR04%2FN6%2BTG50l0%2BYdI4N77aPrrbweSVLKPCf%2Ba9YrwjCYlrjOnKFm%2Fhx3cmJmwxL%2FOS0iNsPz4kPads%2BNoE%2BRWbFSbS9u2mdssozkV8bFl0BPVc%2BQjE1OuY7CGTQ0L1dtvVch5lAuhb6P9HouNIW%2BasCmOpoHgOclBh911dSMNwQe%2F%2BCdZYx995LZG5%2F5eyiakTzQpEAn3XAmZBJbYUrxYtA5Nd8DgsD2aa3kf0w5ZkxRyba6%2FS%2B9rCDVXnh%2Bo%2Bjf2ft68rh09ze2y7CVvOnBiqJZ4IF%2FOMalWxfKGhPDVP%2BE8LpXKwu6lD%2Bnu0VFEqnK40oGyAj5EGI6Wjmud8B20fVe%2BhPx4IEy7fBWaW%2BtLDHckkUw2vWhZu%2FI7fVGkmEdQoE503Q5194%2FM1LQRFIfoJublpRyQryGmGlDxgzyyECTLSCMSK2CDzv%2BUonV%2BxSUJOC7DTqm8y5SvXwItcEus7CR7te%2FkSeSpqkhXJlnRbq8BkjxQ0PhsVKmmFxCryHiyxoQWpRaIml5PeL2gPIWvADBjd9oDCt%2FtLJBjqkAa0Yb0TovmtFb5QBN0vJQ1oEz2RTN05Xapz8rFrFeHu19UEMKAVEogd1dFnAG1Kb8P%2F3B286ds94TKQ5qc90d4LtaTdGA9lviRfkIB53J56gEzi3ruLqn1zJmukdxDMmBkToQ2vL8S1l5HAk9AJsbwamMmPTaPkLrqT4ap1Ie3EAJyCGPzHarfIVqb86GJtknlmMYd%2FEtBumAdJp%2Fa2pDvx1pCdn&X-Amz-Signature=f8fba94a1a24627524378fa8ee6b6ba5c29937a550cdc9a66dd929b14f496f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IF3GZ7F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk%2B18OYm1t4WezObNq4k0sBgkB1d5u5bESY6j9FqWzYwIhAKX9gwKj1ImBgzLyyCvPeDuRYrYAFeY1Lw5bcj1H57n3KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgywW%2BSrDoJUCsRHGIUq3AO4jYHq4VosApoVPBIeGtuKq68JjxAAlvGgCwEMufvnopJxVYQXw0D0KqWSBp0wGdnazC3wBItP0qVtBLAfqsV%2FK3tw8Ub2qR04%2FN6%2BTG50l0%2BYdI4N77aPrrbweSVLKPCf%2Ba9YrwjCYlrjOnKFm%2Fhx3cmJmwxL%2FOS0iNsPz4kPads%2BNoE%2BRWbFSbS9u2mdssozkV8bFl0BPVc%2BQjE1OuY7CGTQ0L1dtvVch5lAuhb6P9HouNIW%2BasCmOpoHgOclBh911dSMNwQe%2F%2BCdZYx995LZG5%2F5eyiakTzQpEAn3XAmZBJbYUrxYtA5Nd8DgsD2aa3kf0w5ZkxRyba6%2FS%2B9rCDVXnh%2Bo%2Bjf2ft68rh09ze2y7CVvOnBiqJZ4IF%2FOMalWxfKGhPDVP%2BE8LpXKwu6lD%2Bnu0VFEqnK40oGyAj5EGI6Wjmud8B20fVe%2BhPx4IEy7fBWaW%2BtLDHckkUw2vWhZu%2FI7fVGkmEdQoE503Q5194%2FM1LQRFIfoJublpRyQryGmGlDxgzyyECTLSCMSK2CDzv%2BUonV%2BxSUJOC7DTqm8y5SvXwItcEus7CR7te%2FkSeSpqkhXJlnRbq8BkjxQ0PhsVKmmFxCryHiyxoQWpRaIml5PeL2gPIWvADBjd9oDCt%2FtLJBjqkAa0Yb0TovmtFb5QBN0vJQ1oEz2RTN05Xapz8rFrFeHu19UEMKAVEogd1dFnAG1Kb8P%2F3B286ds94TKQ5qc90d4LtaTdGA9lviRfkIB53J56gEzi3ruLqn1zJmukdxDMmBkToQ2vL8S1l5HAk9AJsbwamMmPTaPkLrqT4ap1Ie3EAJyCGPzHarfIVqb86GJtknlmMYd%2FEtBumAdJp%2Fa2pDvx1pCdn&X-Amz-Signature=b4efbb29ebd46dc42fc43552504e9da5b20863b8b9c61fe9b4bb7320f64960cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
