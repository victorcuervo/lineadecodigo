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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MH6C7PJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPIeAxGPhpZO0g%2FUzpYp48SHP0z3JLX5vuytv5lUOqYAiEAjLo25BoAAfb5nj%2F%2FI2KIw5K2riM%2Bkb0S3Zs2jfUXkdQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFHCYj83zhHwUxsR6CrcAzjLSlLsmR5ZKDO8aiTySANU%2F91RxCPOUFxWWKRtCHPKVnK0SBSSLrJpQwvMiilPZQ3DZsbs%2FuooDzJoyUdCTUbEs4c%2BF42uPCaekqTRa66b6kgHZvZKc3dQmqbAqtZC%2BrMiOR7TRAphKjFDYXIi9MueegiJ0ThnEq2ouxwjerzC3b%2FF1qx3dtsIFRUfDVVU3Iv1YZPNmm5O%2BLY6DpYvalxPpdnaPqseWIrEo9w%2BjpmN8hVSsbY8tXJ2Acn3EcGQcPGjuCCzhDTOJXVWrYuCaACGjiIFA3O8mfclt7jdBkPb1dGrzONcleS%2F47Yj64Sexd99cw5ERVNgeuFfiFJz0p%2B0%2FakRxGBpECXxjCxUQsXbQxghS341cJ%2Ba8%2F4M%2FgcGmVqfjqAOsOdNbUUOMqVl7KOMumwQu2SugJoITdMRWMKNss5Z8r0F9cbnzfHrPOwp7YykqWFkBv4jkZpDgH71ixfhrGEIBtF8rShE1perigr17nLcVilSnB7MkNNeBFBzp7Mki1uy%2FXG37h%2BXlbxj3A0sMtgPBF0PXD3R8ZRSgTOtsLTJZZkoVLPUCQLr7%2Bvdpnsm6Pj4lYKX2cMbJ8vkLxSyNCSKVVHNgMgNAQcnwrzFLytjLpI3FQl5aHkkMNf8zskGOqUBIl5IhR9wAkdcn9dqM%2F1XvWRFBc362WURocpILrvXsAHyVEW%2B%2BTZlAYpWIomYx1mcF%2ByGokw2%2Ber7sR49MjnL7t3npkHZL8OztC8YYDT9kBnHNm7fo7ymBlpNy70HKeUjHdUJBoyfonjZNwyLNgJRIUNEkBlxde%2FR3wjEXntkdtonUKDVuK5n%2Bs5uGT77aRJ4j0u6AGcYnYY1rEYTKtzcjmZQ0f9g&X-Amz-Signature=f4d5573e6482ecd2f362c0ef6800bc213aca5119976705b65a5aabe67bb755ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MH6C7PJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPIeAxGPhpZO0g%2FUzpYp48SHP0z3JLX5vuytv5lUOqYAiEAjLo25BoAAfb5nj%2F%2FI2KIw5K2riM%2Bkb0S3Zs2jfUXkdQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFHCYj83zhHwUxsR6CrcAzjLSlLsmR5ZKDO8aiTySANU%2F91RxCPOUFxWWKRtCHPKVnK0SBSSLrJpQwvMiilPZQ3DZsbs%2FuooDzJoyUdCTUbEs4c%2BF42uPCaekqTRa66b6kgHZvZKc3dQmqbAqtZC%2BrMiOR7TRAphKjFDYXIi9MueegiJ0ThnEq2ouxwjerzC3b%2FF1qx3dtsIFRUfDVVU3Iv1YZPNmm5O%2BLY6DpYvalxPpdnaPqseWIrEo9w%2BjpmN8hVSsbY8tXJ2Acn3EcGQcPGjuCCzhDTOJXVWrYuCaACGjiIFA3O8mfclt7jdBkPb1dGrzONcleS%2F47Yj64Sexd99cw5ERVNgeuFfiFJz0p%2B0%2FakRxGBpECXxjCxUQsXbQxghS341cJ%2Ba8%2F4M%2FgcGmVqfjqAOsOdNbUUOMqVl7KOMumwQu2SugJoITdMRWMKNss5Z8r0F9cbnzfHrPOwp7YykqWFkBv4jkZpDgH71ixfhrGEIBtF8rShE1perigr17nLcVilSnB7MkNNeBFBzp7Mki1uy%2FXG37h%2BXlbxj3A0sMtgPBF0PXD3R8ZRSgTOtsLTJZZkoVLPUCQLr7%2Bvdpnsm6Pj4lYKX2cMbJ8vkLxSyNCSKVVHNgMgNAQcnwrzFLytjLpI3FQl5aHkkMNf8zskGOqUBIl5IhR9wAkdcn9dqM%2F1XvWRFBc362WURocpILrvXsAHyVEW%2B%2BTZlAYpWIomYx1mcF%2ByGokw2%2Ber7sR49MjnL7t3npkHZL8OztC8YYDT9kBnHNm7fo7ymBlpNy70HKeUjHdUJBoyfonjZNwyLNgJRIUNEkBlxde%2FR3wjEXntkdtonUKDVuK5n%2Bs5uGT77aRJ4j0u6AGcYnYY1rEYTKtzcjmZQ0f9g&X-Amz-Signature=1bcc90e8b19ab52f0b8a518dd2c550a6157f36d407483fa040aca2cd7abef073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
