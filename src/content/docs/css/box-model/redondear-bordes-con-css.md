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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666VXUA3J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoR561CUUpNHAJTCBRy5Zj11ikOotNSAfHexoDar3uwAiAn1OjhPkcyp1rSBtYM%2BCbG9cDm6j6cO7t1yOC7k7A5xCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMBtJ33xe7PFOPGuK0KtwD7JZIjykh5t1Zuik3mgyulaOuC6k46oCHf2qF3Y%2FyLhzHFsNTM2QZdMFAtlfJgnDIj9EOx5CnIoyjYNWlDalaRNgfqR8kgsT%2FBc3HCMyjzSQGUR90eq%2F26kogWGCmz5VddE%2BhPVEekyb8XAlygWW%2BNM%2FpAmUI4jr44Wf6DdxDz%2BM4UVRaKyumXZNiBWrRvtgDWXAZwRvJKQb06mEAAyotBG1RB7HrRseC0eu9xkV1b4nHRbNDUadUnjxQLrTSg392XC8BRvmNTtkLV7RBO4qUORuzS%2BjLYgRlaQSFejMtTCBRuxdJfl0UI6TxgvpCoSn1eSZ1YE9Y8YNql0DquKck0Jq7paZhMF6SrV86XU8g9tpsHePDWGBgDBFhb56jg10iLr2C3IHPYM1n8MjhZkpVfZ%2F3q3ShzlmccG7YbMRYAYFTHa%2BtWfrjKd7Du4%2FEo4RJ6%2FGoUuK%2FeZEdbh7L4wjUPxAyOtZOeh7t%2FF%2Bcmr56nS5cOByeQZ2Tv7mljNjZYaDSDjaeRuk5JBldqTxeyHxxn6lEtHi%2FkTWEOwo79roEeW7zj1dP3aYxqOkIQECeujZ6tyzKxMyUl8iMJeUEnh0zdOw%2Fcv9BDcsslHz%2B14%2FFWItVuW%2BZXexDPEzIJWUwnt%2BHygY6pgGrpo%2F9UexT71jimGPsNmIXEyotbyrTi2KkmqyXkqxz3RTg7BWnF%2BkWAGeVWS6Uroh6tnpTg8%2FJoxbi4SsIUhvLxFLgeq8b4Zdfh4ezJgQYffgLF3MY5jHpw2oIxiQHqowTBUKtZCpi%2BQZJfokintJrqIWlFeqUAzPiImkqrpQcHoOPCJ1pWYhOVAgVCy53gNTk0M%2FhEEagm2eYpLmgf3p%2FjX27cKfn&X-Amz-Signature=e6a92f365cdc2b383b9c9fb0975a4a231050aaeb97c7f9d504cfb695acc91435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666VXUA3J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFoR561CUUpNHAJTCBRy5Zj11ikOotNSAfHexoDar3uwAiAn1OjhPkcyp1rSBtYM%2BCbG9cDm6j6cO7t1yOC7k7A5xCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMBtJ33xe7PFOPGuK0KtwD7JZIjykh5t1Zuik3mgyulaOuC6k46oCHf2qF3Y%2FyLhzHFsNTM2QZdMFAtlfJgnDIj9EOx5CnIoyjYNWlDalaRNgfqR8kgsT%2FBc3HCMyjzSQGUR90eq%2F26kogWGCmz5VddE%2BhPVEekyb8XAlygWW%2BNM%2FpAmUI4jr44Wf6DdxDz%2BM4UVRaKyumXZNiBWrRvtgDWXAZwRvJKQb06mEAAyotBG1RB7HrRseC0eu9xkV1b4nHRbNDUadUnjxQLrTSg392XC8BRvmNTtkLV7RBO4qUORuzS%2BjLYgRlaQSFejMtTCBRuxdJfl0UI6TxgvpCoSn1eSZ1YE9Y8YNql0DquKck0Jq7paZhMF6SrV86XU8g9tpsHePDWGBgDBFhb56jg10iLr2C3IHPYM1n8MjhZkpVfZ%2F3q3ShzlmccG7YbMRYAYFTHa%2BtWfrjKd7Du4%2FEo4RJ6%2FGoUuK%2FeZEdbh7L4wjUPxAyOtZOeh7t%2FF%2Bcmr56nS5cOByeQZ2Tv7mljNjZYaDSDjaeRuk5JBldqTxeyHxxn6lEtHi%2FkTWEOwo79roEeW7zj1dP3aYxqOkIQECeujZ6tyzKxMyUl8iMJeUEnh0zdOw%2Fcv9BDcsslHz%2B14%2FFWItVuW%2BZXexDPEzIJWUwnt%2BHygY6pgGrpo%2F9UexT71jimGPsNmIXEyotbyrTi2KkmqyXkqxz3RTg7BWnF%2BkWAGeVWS6Uroh6tnpTg8%2FJoxbi4SsIUhvLxFLgeq8b4Zdfh4ezJgQYffgLF3MY5jHpw2oIxiQHqowTBUKtZCpi%2BQZJfokintJrqIWlFeqUAzPiImkqrpQcHoOPCJ1pWYhOVAgVCy53gNTk0M%2FhEEagm2eYpLmgf3p%2FjX27cKfn&X-Amz-Signature=5d85bf0c4c256c320ce2ad45decea4c06cfff4179ddcc2c159d7acebd90d0ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
