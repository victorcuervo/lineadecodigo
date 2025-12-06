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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOFUCWV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2iGZDTdJNh840JaAOVvcJnjBoQvt5dczTMyqOsps67wIgQS28BDPwK%2BuhiNW3lee2qcNpFFj8YGjTd6Uf3fn3fAAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCrl395YvkQtbRWBUyrcAzc5A0aZSl4GgvPWRj%2B6ha6WOsO6T8O7uBGsyklVaD%2Fn9RY0Ie3qpHwpSSfQ5yMJAuAGB4A3u3ONuUlM9NL5xYq2qpSA4u%2BUdMPXK8Sy%2FrANiDHuSDoN5VuIAIediizvfEN1h6VsLPpbFZ4h9tVqpPK2yI1zVYpYbXLL8hPzNYoZfsUYYnlEiREvchJmRR2TlzZp0uwnJKhClH5wJMQH5qAgOsJp1HkWavzF7xIOZTDjO4IU%2FAzSFqk1%2B%2BSwlaQYBlyBYBivl5Bk7vFks5doR5UPhklg3foqID5WX0ehTA0J0TNJz9edNqadJYNcjQzweKOu5qIcMAx48h%2BSkSaA0yBW3JJToYGXHWismByg11VrtBkcxO5a7SlV2a7pPteiz4ASrrPV1UIl%2BpQ%2FdgrTJT05%2FMpnIiYo4Kqo562dhok1069c5P34vv1sVmqrszn9e8virEB%2B49OZ2UW0wJnIrajLfGmzNgtgYNh%2Fy79gMtrSVI01WyZJWbcskXnQnx1PAVV%2BRUXpcMbQl6pIIIFgUIuhFTbiiNVeKjAnCrmZY64aQEs1qooAquFXst1qozu2y7q5KmRjDO%2BitSbsuQS%2BDS9ipXZOCOYXBittFYvK5xK5gVAL5GIqGxDBu9vAMKOm0MkGOqUBLy%2BUrXFv1ubTXdSQHup4gZ4pwlEfKMgYh%2Bs4le0EGQDgydNO73A%2B7Jb6WVVTbGVGQgH7WinLBEkh58V86QCr7Fjh3SgHCYCugV7WIYom1wY4auZVU8Tx0pl6gAPeQQ%2FnjmTe7XqcQTd55QbfMmBO9gV%2BpD5Q0i%2BoPIAL8SalEic%2FyH%2FPE0hXc0KFPkCVuhQIXHzBDqF%2FGBoah%2BBuzUEXVMyuNAK9&X-Amz-Signature=3ecb9283495e27a1d2b5001e4763650587cb756bfdfb37443d52befbe8483f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZOFUCWV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2iGZDTdJNh840JaAOVvcJnjBoQvt5dczTMyqOsps67wIgQS28BDPwK%2BuhiNW3lee2qcNpFFj8YGjTd6Uf3fn3fAAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCrl395YvkQtbRWBUyrcAzc5A0aZSl4GgvPWRj%2B6ha6WOsO6T8O7uBGsyklVaD%2Fn9RY0Ie3qpHwpSSfQ5yMJAuAGB4A3u3ONuUlM9NL5xYq2qpSA4u%2BUdMPXK8Sy%2FrANiDHuSDoN5VuIAIediizvfEN1h6VsLPpbFZ4h9tVqpPK2yI1zVYpYbXLL8hPzNYoZfsUYYnlEiREvchJmRR2TlzZp0uwnJKhClH5wJMQH5qAgOsJp1HkWavzF7xIOZTDjO4IU%2FAzSFqk1%2B%2BSwlaQYBlyBYBivl5Bk7vFks5doR5UPhklg3foqID5WX0ehTA0J0TNJz9edNqadJYNcjQzweKOu5qIcMAx48h%2BSkSaA0yBW3JJToYGXHWismByg11VrtBkcxO5a7SlV2a7pPteiz4ASrrPV1UIl%2BpQ%2FdgrTJT05%2FMpnIiYo4Kqo562dhok1069c5P34vv1sVmqrszn9e8virEB%2B49OZ2UW0wJnIrajLfGmzNgtgYNh%2Fy79gMtrSVI01WyZJWbcskXnQnx1PAVV%2BRUXpcMbQl6pIIIFgUIuhFTbiiNVeKjAnCrmZY64aQEs1qooAquFXst1qozu2y7q5KmRjDO%2BitSbsuQS%2BDS9ipXZOCOYXBittFYvK5xK5gVAL5GIqGxDBu9vAMKOm0MkGOqUBLy%2BUrXFv1ubTXdSQHup4gZ4pwlEfKMgYh%2Bs4le0EGQDgydNO73A%2B7Jb6WVVTbGVGQgH7WinLBEkh58V86QCr7Fjh3SgHCYCugV7WIYom1wY4auZVU8Tx0pl6gAPeQQ%2FnjmTe7XqcQTd55QbfMmBO9gV%2BpD5Q0i%2BoPIAL8SalEic%2FyH%2FPE0hXc0KFPkCVuhQIXHzBDqF%2FGBoah%2BBuzUEXVMyuNAK9&X-Amz-Signature=65824f0c8fc44c3c96831511f61ba752196486cbf781a225f8d107fc641307b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
