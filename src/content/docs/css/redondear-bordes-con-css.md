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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AO43OR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9tg2fpuSdICMbcNV5v4d%2F1TfzKtwJnA6o87RNYGRNOAiBVBU7Uhf%2BSxOCQPBpgvZ%2FDDNVQckYihvqjFvbwgjy5aiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjgGaDSFMf5nG7NtjKtwDYc2NMrZBH6T0LL7jIGpyZlm7PB0iBTTnqOhrVvNqkwhlnplZyNU6sWuMJSEOG2H9KgI8C4bqU21T8Yiw3LI2RqFv6eKDPuIrITsMzzJvmmn%2FNwIbC6%2BlqVZVJLk0uOFIQCTxEQ53hk2qpmljiLPLW4Sz1gztiX3%2F3N%2BjRWvX4tB7s9DDOWV439pCyEi1Zs%2B1u4GoZqXB6DdjiOLCkuaqm2AQ4p%2FEZve4wUidst8fk82MequMPb0Qb9Hr6YSDnQeYMxqgJixAMSyfIfcsbq7Mwq%2F4VegxFfwiod6Kz5ObrBmutn7qZN7vZwiUDLc77SQlVlvmCQUHtLnPGdz7XEhSOlocQCea9dNuViL7MCY7gTD4Xwn6jlnJF4YcPYMXpazc1iVPqPCnvvAfvWaZrmbYSY9f1AWK8m%2Fp9XFF0%2B%2Bf2fT6LYeNOSKXPp2DtArYxfS2noNf9To%2FtcA9gzewiC8dLixGfz%2Bqu5G9lMuBR9sMXra6pT7n3CPu5MGSNin548n4STCiNR7KUzjPTqFwtOhHH4%2BahyFkwOzkCd6Z08F2s47oF84mz5FF4%2BAjNBkX5Ffy8Raorh%2Fj%2BwdMb0ROhZR5cPacZUEP1YX49Tmbc1AZWvSRWxrS8AA6RVVFS5Mw2v3SyQY6pgGL%2F3Pq%2FYba8YeRvg1jTFoVZBTCuhUjc2v%2BS4fpRTg%2FXVDgjMB5IIaqaZ8BGzr5Jq%2BJEritTWWQWkgHDbYBYD4SDjfQ%2F88tT%2FEowSm8EQcgMJIrDNilvXYdXMh8n0YG3i7cB%2BMKTlDMkikLJYn4ktc764pqvv9fht5opqg%2Flc0Tdi4fM70XLFaf8VqPRiaqr9j0ZKHAYJgjx9EOkHlbHHAKhrTx4jdt&X-Amz-Signature=1f771da02dadb5c82e32dd28d5b728fd093ba7404ea016707bb91817972a1b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AO43OR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC9tg2fpuSdICMbcNV5v4d%2F1TfzKtwJnA6o87RNYGRNOAiBVBU7Uhf%2BSxOCQPBpgvZ%2FDDNVQckYihvqjFvbwgjy5aiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjgGaDSFMf5nG7NtjKtwDYc2NMrZBH6T0LL7jIGpyZlm7PB0iBTTnqOhrVvNqkwhlnplZyNU6sWuMJSEOG2H9KgI8C4bqU21T8Yiw3LI2RqFv6eKDPuIrITsMzzJvmmn%2FNwIbC6%2BlqVZVJLk0uOFIQCTxEQ53hk2qpmljiLPLW4Sz1gztiX3%2F3N%2BjRWvX4tB7s9DDOWV439pCyEi1Zs%2B1u4GoZqXB6DdjiOLCkuaqm2AQ4p%2FEZve4wUidst8fk82MequMPb0Qb9Hr6YSDnQeYMxqgJixAMSyfIfcsbq7Mwq%2F4VegxFfwiod6Kz5ObrBmutn7qZN7vZwiUDLc77SQlVlvmCQUHtLnPGdz7XEhSOlocQCea9dNuViL7MCY7gTD4Xwn6jlnJF4YcPYMXpazc1iVPqPCnvvAfvWaZrmbYSY9f1AWK8m%2Fp9XFF0%2B%2Bf2fT6LYeNOSKXPp2DtArYxfS2noNf9To%2FtcA9gzewiC8dLixGfz%2Bqu5G9lMuBR9sMXra6pT7n3CPu5MGSNin548n4STCiNR7KUzjPTqFwtOhHH4%2BahyFkwOzkCd6Z08F2s47oF84mz5FF4%2BAjNBkX5Ffy8Raorh%2Fj%2BwdMb0ROhZR5cPacZUEP1YX49Tmbc1AZWvSRWxrS8AA6RVVFS5Mw2v3SyQY6pgGL%2F3Pq%2FYba8YeRvg1jTFoVZBTCuhUjc2v%2BS4fpRTg%2FXVDgjMB5IIaqaZ8BGzr5Jq%2BJEritTWWQWkgHDbYBYD4SDjfQ%2F88tT%2FEowSm8EQcgMJIrDNilvXYdXMh8n0YG3i7cB%2BMKTlDMkikLJYn4ktc764pqvv9fht5opqg%2Flc0Tdi4fM70XLFaf8VqPRiaqr9j0ZKHAYJgjx9EOkHlbHHAKhrTx4jdt&X-Amz-Signature=259eb762cc8dc80c822d1a3ee15addb15ad0e4a367767fa3699bd0a146cb18b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
