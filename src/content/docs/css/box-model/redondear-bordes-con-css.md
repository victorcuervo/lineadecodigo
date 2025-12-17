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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE7GPZOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxKEidEo3c54MZqL86n7NLRTAivfL4HGyURfu%2Fl1T9ogIhANcUnHFtpeZ35CYU19B9ib32j3Nq9wg6ub%2FZAVQH5oQNKv8DCHoQABoMNjM3NDIzMTgzODA1Igy6ADlJexCzhgbA8swq3ANAD93iHxXRvobvKtX8pcg%2BTJZXu05OjTecgmQ4GIainxCYZEXg2doDYi6kXxiN4TjBTT%2BJKbqTNArdBedyiPF3vr1Yw%2BGuVgUbD2raTf0337ujeXHGUKnoCBjnWECTXAns6xzJ0XxpPBWaVDcjxcHS0q3HRt49My7uk1VRatARMedQGNyA0vskY4PRbll0RtavonYQNXpvvaT9Z5s8v09ySKE7mlRQLGrplXetzDRO8IHjONnhyhaJWeRYSV3%2BT1e1bmi0iOQjmBAyggq2kfBxgQnHxnmTLyzg3E%2FFuR0EshPOklR2coM8t2N3nNHqWsS1qY3cuxaXzqv8fwMkunuFP90t5toxpEz5Tiid%2F5fq412w7srEsc0W%2BqL0%2B1zq%2FDIgWoJUjQAjUZigCG8OvMPklMQnAOOKV39CnhXKom8nu0wn5GZCUoVAW%2FBVK7q%2Ba9l2looRWvPM%2Fet6Cbz1kj7Izqi5D9DHw1jt6trRWruS7VuKTp3kCnrFq8frzEIJmRf%2BmSKYxuF0GJDvm8F%2FTCNKhcaaj3T79rEzg5e%2BoP87zb%2B%2FRofq7Z%2F%2B3jClLW1aU3XuFsVEyiNRwixyiMHyJ1Fix%2BfwG7Vr8VvOcx72OLx%2Fd7mJsjHVBa1jCCf90jDe0onKBjqkAWNM1f9CY6vcdZuXPWIJEs6EYa1UbD5gDDGPW5omEkaysCKO1NMN2s7O%2FEZl2pJZkBTv2S4u9yEWtDE3%2FeACgSUhTXyPb7x8xUBGy9IauW%2BIglQXGIMwCzWvBbhQ69FzbNnLAr5j7sYYqDidE6X%2B%2B2hlbxAKH3Tf4wEzYRMG6WFJqlFTn3hcy41Bdw9vqrBaVNtVhAhRr97sMbKbmRJyZRN4nHhn&X-Amz-Signature=7d566fc5a8eb59e78f48218840fd92cc858342542622e8350401a208ac85ca0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE7GPZOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxKEidEo3c54MZqL86n7NLRTAivfL4HGyURfu%2Fl1T9ogIhANcUnHFtpeZ35CYU19B9ib32j3Nq9wg6ub%2FZAVQH5oQNKv8DCHoQABoMNjM3NDIzMTgzODA1Igy6ADlJexCzhgbA8swq3ANAD93iHxXRvobvKtX8pcg%2BTJZXu05OjTecgmQ4GIainxCYZEXg2doDYi6kXxiN4TjBTT%2BJKbqTNArdBedyiPF3vr1Yw%2BGuVgUbD2raTf0337ujeXHGUKnoCBjnWECTXAns6xzJ0XxpPBWaVDcjxcHS0q3HRt49My7uk1VRatARMedQGNyA0vskY4PRbll0RtavonYQNXpvvaT9Z5s8v09ySKE7mlRQLGrplXetzDRO8IHjONnhyhaJWeRYSV3%2BT1e1bmi0iOQjmBAyggq2kfBxgQnHxnmTLyzg3E%2FFuR0EshPOklR2coM8t2N3nNHqWsS1qY3cuxaXzqv8fwMkunuFP90t5toxpEz5Tiid%2F5fq412w7srEsc0W%2BqL0%2B1zq%2FDIgWoJUjQAjUZigCG8OvMPklMQnAOOKV39CnhXKom8nu0wn5GZCUoVAW%2FBVK7q%2Ba9l2looRWvPM%2Fet6Cbz1kj7Izqi5D9DHw1jt6trRWruS7VuKTp3kCnrFq8frzEIJmRf%2BmSKYxuF0GJDvm8F%2FTCNKhcaaj3T79rEzg5e%2BoP87zb%2B%2FRofq7Z%2F%2B3jClLW1aU3XuFsVEyiNRwixyiMHyJ1Fix%2BfwG7Vr8VvOcx72OLx%2Fd7mJsjHVBa1jCCf90jDe0onKBjqkAWNM1f9CY6vcdZuXPWIJEs6EYa1UbD5gDDGPW5omEkaysCKO1NMN2s7O%2FEZl2pJZkBTv2S4u9yEWtDE3%2FeACgSUhTXyPb7x8xUBGy9IauW%2BIglQXGIMwCzWvBbhQ69FzbNnLAr5j7sYYqDidE6X%2B%2B2hlbxAKH3Tf4wEzYRMG6WFJqlFTn3hcy41Bdw9vqrBaVNtVhAhRr97sMbKbmRJyZRN4nHhn&X-Amz-Signature=da5391a52290a1f3ac3ce2b2bd797ad070bdafc38cf7dcbb7c3837b6c653faf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
