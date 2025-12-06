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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZAL623C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9SJnF8%2Fjrplcd36zcvqNXAgS9gN2a%2FruvrfDWnMZ4UAIhAKDsHhn4c726aPHk0gazgUFfOJfEIN6B994RxwcWGJcDKv8DCG0QABoMNjM3NDIzMTgzODA1IgyTJfPD5vdauv6%2Fg7sq3APoKo3akl4CeqpyTFpKsYSYGzLyD5dypAIegCe%2FrIAvdoEElG3iqIBjxZt%2FkaQ8GF9bVIf07gw4vL7yzgb4g3T8oKQNh%2B1d3G%2BUuMDbWBSYWQFJLx29IkFA2WH2TgxI6PWEfGx0vSlBtlVjmxe387ZIPcppENenxWR3UeP10AmzMvZ%2Fd3l%2B9LkvaWzMMLA0nLg8bKkbkH%2BTeaCMS5FKm7lbiZvONHJgIuc0vWpErD1BMSc2mzWrbjmGlHXkhDSrqrpegesXXz2jcORQNyc2uP9y92AYGuK0o4mw3y6tOBmBR5RSskG3IMtYG8zalViKEpYKtt0xpSl10iA%2Fy3s0iraT0GaweNm6HD2QZM%2FsTTbITk7g6YSWeYw4qBGD7bFahQV%2Bw2SOYuoZgkLZwfGcFbKjDATauQ99%2FpxHf5rs6thzLLRxPWpNjZwpvOffgCIf20toclhuEJ%2F3aIIvRD%2FP2eDaYAFQ3%2FnHgrA7PRlVB7YlKYlCgTW5JW9%2BCmRn8cX3%2BYSuB7hQVZ8TxSGpEIujg0DFyFtE7%2FWqSXT%2B9acWIIUx3JyLH5x%2Bo3PWKpbI0LkfbgDfOOj8l%2FLy6hkjgB8czYV7gltEkE6W%2B8UmvTYB5eBW%2FwR5XmjVswjbPp6mgTCJ3s7JBjqkAXn%2FoV4IGDLIjr%2FAWjXf%2FstnNK0lsjrlgjyNo%2BGwX65s%2Brtrmyz0DLPnahTv0VOQfJchODMHkLlE6bKPVCyhXIySLvTAWLdMiRbFlvzuioP95%2BVIwoeNMb8mboBoV%2BfC4DbvT7QuSF1%2BAE9tgpYXzotuaYyTxjNfHBmzBmVDwcuchpPMwdYptecbboLZZCdvSOjZDMG8DkYupTj5jBDuoZ9aPWjy&X-Amz-Signature=423668784a3bba47c035c774732b1cb3bd10497e9a44099614d556f7453d1fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZAL623C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9SJnF8%2Fjrplcd36zcvqNXAgS9gN2a%2FruvrfDWnMZ4UAIhAKDsHhn4c726aPHk0gazgUFfOJfEIN6B994RxwcWGJcDKv8DCG0QABoMNjM3NDIzMTgzODA1IgyTJfPD5vdauv6%2Fg7sq3APoKo3akl4CeqpyTFpKsYSYGzLyD5dypAIegCe%2FrIAvdoEElG3iqIBjxZt%2FkaQ8GF9bVIf07gw4vL7yzgb4g3T8oKQNh%2B1d3G%2BUuMDbWBSYWQFJLx29IkFA2WH2TgxI6PWEfGx0vSlBtlVjmxe387ZIPcppENenxWR3UeP10AmzMvZ%2Fd3l%2B9LkvaWzMMLA0nLg8bKkbkH%2BTeaCMS5FKm7lbiZvONHJgIuc0vWpErD1BMSc2mzWrbjmGlHXkhDSrqrpegesXXz2jcORQNyc2uP9y92AYGuK0o4mw3y6tOBmBR5RSskG3IMtYG8zalViKEpYKtt0xpSl10iA%2Fy3s0iraT0GaweNm6HD2QZM%2FsTTbITk7g6YSWeYw4qBGD7bFahQV%2Bw2SOYuoZgkLZwfGcFbKjDATauQ99%2FpxHf5rs6thzLLRxPWpNjZwpvOffgCIf20toclhuEJ%2F3aIIvRD%2FP2eDaYAFQ3%2FnHgrA7PRlVB7YlKYlCgTW5JW9%2BCmRn8cX3%2BYSuB7hQVZ8TxSGpEIujg0DFyFtE7%2FWqSXT%2B9acWIIUx3JyLH5x%2Bo3PWKpbI0LkfbgDfOOj8l%2FLy6hkjgB8czYV7gltEkE6W%2B8UmvTYB5eBW%2FwR5XmjVswjbPp6mgTCJ3s7JBjqkAXn%2FoV4IGDLIjr%2FAWjXf%2FstnNK0lsjrlgjyNo%2BGwX65s%2Brtrmyz0DLPnahTv0VOQfJchODMHkLlE6bKPVCyhXIySLvTAWLdMiRbFlvzuioP95%2BVIwoeNMb8mboBoV%2BfC4DbvT7QuSF1%2BAE9tgpYXzotuaYyTxjNfHBmzBmVDwcuchpPMwdYptecbboLZZCdvSOjZDMG8DkYupTj5jBDuoZ9aPWjy&X-Amz-Signature=d0789c151f250c5aa29e70d807675784dfd8068b42ceef8fe32e6b3099259808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
