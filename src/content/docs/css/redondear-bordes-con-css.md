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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRUF5E2N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRMe37tyoAgbxRW10NQCDnpW%2Fzh6orOnzqj1xrbtuNgwIhAKpIN3j5O5FBbyUQ941V2rqb%2FFKHrlJV%2BPvbqeeyPQv9Kv8DCGgQABoMNjM3NDIzMTgzODA1Igx7C9xMs%2F3AZmLjPHMq3AOZHVrh5CW4lrS0q4aGETsFIXnbGArar6X%2FtaL3lQvY7%2BerMLI3pGGU8NRWYSne1LJNFyQ9UHH%2BI7Ht%2F6ifN7uKZwHJP5MDfAt4CVAViXszRlLjgEeonQahVyq5qgV9DWlnuXtXNDBivs7YxsducsaYIj4l%2BPxSLDKCkZQK1byZF8l0UqLGJlR0fNgLuUoC3m3W6S5o2udm2vBfgZ6M%2FCfkvBMh9e0ABjb10PX9WXyTB2lukwEP%2B4ZlHpC1%2FQgHg%2BsuMsRlhph5yKPBrnxk5cY3Nv6%2FaA8sPApRugkg6ZlMNerB4KnkPx8IumjNq0ztAI8FvSHs%2FPE6QDD46Yimnb7UwIA8NdAk2VPcoWLP0O6pE7Pf1XC%2Fcma0%2F6YpKaMMafAwQRNledKyH0ytuoHfKVH4SHwBFiiF8VTSGfRVjKEje4A8%2FMWWPjk%2Bo4AFA%2FT31rb4Uvbfo5elC8yhviV%2B7OmlESJZehNrldE4vyrNHa%2BMPpquBPJqbO6k0bWGhHKSfnRsRxw9nNfcXK6qmo71FUPmEQ00VNscS%2BsTmrSsNEM5x%2FBM9Ez%2FEFdr4cXc%2FNavF%2BN5CpRYH%2FGiAHA3FM30JqCjt7NbbDHKGJsudpAM6uvZGQst%2BVwuhuEztjaf5jD9xc3JBjqkAdEiuKjQty3DXKK0SMigsCnBXJv%2B0dDiHJLL%2B4M308r0GSxgU7kbi4%2FU%2FRIr0AN5xH19HwFzltgQOfOK3Jey2liV8sdnCUrNAGgTgeAjwtDUzMw7EDMymbUdDmp8LCHfFZhbW7bgU1VkHFMuIXuDV58sETSj8Vj6W7A1Z3%2B%2BsqfbUJHTtY%2FEisXlc9gXr1aTwCm9EXoZTSBJtXrs%2FFSUMtMwfd06&X-Amz-Signature=57eccdea9f05f16ffbb44f16f62b927bb4ab7504e79f9373c3c26651658f5c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRUF5E2N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRMe37tyoAgbxRW10NQCDnpW%2Fzh6orOnzqj1xrbtuNgwIhAKpIN3j5O5FBbyUQ941V2rqb%2FFKHrlJV%2BPvbqeeyPQv9Kv8DCGgQABoMNjM3NDIzMTgzODA1Igx7C9xMs%2F3AZmLjPHMq3AOZHVrh5CW4lrS0q4aGETsFIXnbGArar6X%2FtaL3lQvY7%2BerMLI3pGGU8NRWYSne1LJNFyQ9UHH%2BI7Ht%2F6ifN7uKZwHJP5MDfAt4CVAViXszRlLjgEeonQahVyq5qgV9DWlnuXtXNDBivs7YxsducsaYIj4l%2BPxSLDKCkZQK1byZF8l0UqLGJlR0fNgLuUoC3m3W6S5o2udm2vBfgZ6M%2FCfkvBMh9e0ABjb10PX9WXyTB2lukwEP%2B4ZlHpC1%2FQgHg%2BsuMsRlhph5yKPBrnxk5cY3Nv6%2FaA8sPApRugkg6ZlMNerB4KnkPx8IumjNq0ztAI8FvSHs%2FPE6QDD46Yimnb7UwIA8NdAk2VPcoWLP0O6pE7Pf1XC%2Fcma0%2F6YpKaMMafAwQRNledKyH0ytuoHfKVH4SHwBFiiF8VTSGfRVjKEje4A8%2FMWWPjk%2Bo4AFA%2FT31rb4Uvbfo5elC8yhviV%2B7OmlESJZehNrldE4vyrNHa%2BMPpquBPJqbO6k0bWGhHKSfnRsRxw9nNfcXK6qmo71FUPmEQ00VNscS%2BsTmrSsNEM5x%2FBM9Ez%2FEFdr4cXc%2FNavF%2BN5CpRYH%2FGiAHA3FM30JqCjt7NbbDHKGJsudpAM6uvZGQst%2BVwuhuEztjaf5jD9xc3JBjqkAdEiuKjQty3DXKK0SMigsCnBXJv%2B0dDiHJLL%2B4M308r0GSxgU7kbi4%2FU%2FRIr0AN5xH19HwFzltgQOfOK3Jey2liV8sdnCUrNAGgTgeAjwtDUzMw7EDMymbUdDmp8LCHfFZhbW7bgU1VkHFMuIXuDV58sETSj8Vj6W7A1Z3%2B%2BsqfbUJHTtY%2FEisXlc9gXr1aTwCm9EXoZTSBJtXrs%2FFSUMtMwfd06&X-Amz-Signature=e8b534295baa10cc9cf9cd1908b3d630267442e8048e6613041b2675e47e972b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
