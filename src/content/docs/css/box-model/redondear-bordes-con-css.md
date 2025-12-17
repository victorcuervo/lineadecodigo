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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBW7BJNO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJVGjHUtV%2FKJ5S2%2F%2BPms%2BZmSncfhSZA8wG0ixrkOqm1AiAA5Ef7OEQ8kz1of%2FAlwhYdma0xn2i1DsnhjAkqHHSBQir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMhpB9q0UvmQav5QQPKtwDIpjVnsKgP%2Bdya4ZLkvdH6WqpYHl1s1MOkFNeLo%2FdoZGmOTfW6WkYwq4ZGddrezMIjWA0C6xJoM2pZcrFE1xuNWTKeSs9MmYLGVsC83uim7mzu%2BPoPwwCL2%2BCk%2Bis8KHiJpuxU7NfFEfyP%2BEL2IUCEZMp2%2FgA1xrwR3pNbnOSiXQEj8XnS9bqxVTFpohP6fXghXJQ8t%2Bnx2%2Fs57lzN7Xuw2OvFg5FNsXabkI6Ue7db7Hiy3gm0K%2F405Ryp0vGWCeazI3dAOrzhFC1OhwlL3z5BLwXJhERHx0v5W1SyHNQ8EwwJisaffwdAVDL%2BPXOhplDk01NXC9PyxdRKuPSb9VHZMnHakyzXiIt5LNKxwcC9KppVORO5YTAuPDfVkBnemJVsC27ledIg0ffD5Y5chsxth5Z6qRvEbIoMOH%2BqWYeRjyiN%2FUpiErCJeJvAwpOHZwzjzM5hVIC3ocyxWT0w9irHKrCsjGUc6URaQHvStjDFfHXCWKO5CJYMglSOrYB41KgMHcNO2uoy6y46cTdeSmcAv2dlxJkxJlWLoKCnWVOolXibGzweFyMcpVi3Uy5kL7HBQ3d9W6ow3BgDt0VoD%2BColebKvLdw%2FHs82Hw6dbwTW%2F1cD5VMGuc%2BwaJZeMw3YOJygY6pgFBdacET9LzvjP5enH68IvbDtn7I2CfSSLB7jr2kI5V4F2z812UWLeU9gvPxJSZ5FJmTN%2FJif1qyEGT28ofrB3fJFWRHm6U%2BVxeM0SHpOF8G0FuOCj8yMXtZ5eakt54HmsssokVz7gXp6xTbUJpZtY7MN1PEML1pJ2CMefn2CWC8ziWrGG2FHBVagFvJ9TvTgsB4gr0bl6jOkqqOqYOOqBR6xUcWosZ&X-Amz-Signature=976f97e4966ad971b14a5f209b23c52e49f6f32bacef612548362ff3e799b1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBW7BJNO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDJVGjHUtV%2FKJ5S2%2F%2BPms%2BZmSncfhSZA8wG0ixrkOqm1AiAA5Ef7OEQ8kz1of%2FAlwhYdma0xn2i1DsnhjAkqHHSBQir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMhpB9q0UvmQav5QQPKtwDIpjVnsKgP%2Bdya4ZLkvdH6WqpYHl1s1MOkFNeLo%2FdoZGmOTfW6WkYwq4ZGddrezMIjWA0C6xJoM2pZcrFE1xuNWTKeSs9MmYLGVsC83uim7mzu%2BPoPwwCL2%2BCk%2Bis8KHiJpuxU7NfFEfyP%2BEL2IUCEZMp2%2FgA1xrwR3pNbnOSiXQEj8XnS9bqxVTFpohP6fXghXJQ8t%2Bnx2%2Fs57lzN7Xuw2OvFg5FNsXabkI6Ue7db7Hiy3gm0K%2F405Ryp0vGWCeazI3dAOrzhFC1OhwlL3z5BLwXJhERHx0v5W1SyHNQ8EwwJisaffwdAVDL%2BPXOhplDk01NXC9PyxdRKuPSb9VHZMnHakyzXiIt5LNKxwcC9KppVORO5YTAuPDfVkBnemJVsC27ledIg0ffD5Y5chsxth5Z6qRvEbIoMOH%2BqWYeRjyiN%2FUpiErCJeJvAwpOHZwzjzM5hVIC3ocyxWT0w9irHKrCsjGUc6URaQHvStjDFfHXCWKO5CJYMglSOrYB41KgMHcNO2uoy6y46cTdeSmcAv2dlxJkxJlWLoKCnWVOolXibGzweFyMcpVi3Uy5kL7HBQ3d9W6ow3BgDt0VoD%2BColebKvLdw%2FHs82Hw6dbwTW%2F1cD5VMGuc%2BwaJZeMw3YOJygY6pgFBdacET9LzvjP5enH68IvbDtn7I2CfSSLB7jr2kI5V4F2z812UWLeU9gvPxJSZ5FJmTN%2FJif1qyEGT28ofrB3fJFWRHm6U%2BVxeM0SHpOF8G0FuOCj8yMXtZ5eakt54HmsssokVz7gXp6xTbUJpZtY7MN1PEML1pJ2CMefn2CWC8ziWrGG2FHBVagFvJ9TvTgsB4gr0bl6jOkqqOqYOOqBR6xUcWosZ&X-Amz-Signature=cd6e7861b7330fbc4f4cc531c2ffbf168a58d9e9f9e4d4df28cd1c7016e9bb3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
