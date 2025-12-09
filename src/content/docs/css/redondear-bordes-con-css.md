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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEKLSLF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3WLcqltinL%2BzCYreVcBnJialvrkji3WeV4xmmMcexlgIhAIhwscby0ZAF516HMk6u1LTOq%2B%2FaXV20Ob%2FvvsD06ZWiKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWHsbXyn2Uctf4Aqgq3AMBo7S%2BoklZqYQcmtLK2a4LWbH6Aa%2BO4Cn8qzSOuqVojn7q87ReT2McOP5U6lY94%2BMuumyG9zyf6%2BYhfKVi28VFFzlGDIZSFCRQD3s%2BRP%2B%2F%2BDSrrDL7LgqnkI3PPPDUgXQ%2FtjgPc5u8QM0Jb1ntQZ8Me%2FJySlpOd1LT%2BVWilPaYmUGMztBafVXgtn4hjxwx9%2FfND34%2BloLVtnVpQeolXLKcge%2FhQEKEde4IriewpwYnJwW%2FOAuVHsdp9xIzI5zWmcOJh2KkuTN%2BM8o%2Bz3RXUhKoQk0pxKcWZZ6JHiq8VkAsj5jXUovurjaChLwPmZJUyRXLoio8xVgIlG5KMbVWLSct20SMMxcJ1AiIRlKgFwNsy%2F5SxZSp%2BLL0Av3izs2YmgDQiPRl0YmTingmuAE6VwQdQ8cFOkatnXaur2TBlRrQ9kVBNPOwi8ojoQeon2mguKpQAiijZNtZG9IsY7sTkEYTxGJTZpqPmpNjzekP8wxt31we%2BllQdyWycceyoXzYwHYyrjjFYnBywmAq8MsqkoR2xhZdjdH%2F9IB6xWgwW%2BTE2I4ssT%2BuajnT7Bb2YCsdHfavjqPGB8IfesBtWoLgUoffiKvo4n7%2B0nQ9MQ38CfRYU%2BQSj0Rm4pxwq9J24jCywt3JBjqkAe%2Bcy%2BDgMIYAkwVr3XXn%2FkhzmU86c6EINZwuRTsAGb8VN4Pmhh4zjCKJu3NaIxANhMPLfQMMOWHuNnmGNgvzk4y8wr37BESIVqn%2Bcm2gmmqkcCkbHMFq2yMwGULYBgbB3XuNt8KRj5dKlOQmOWx37%2BgptS1iwoim97%2FdB36i4FsTZ4e6tt4jmaWevB82esWmxFjFaGNkUMTomHjbu0BuzFM4Gdzl&X-Amz-Signature=e93feff6a3a4dcbf34ab024947d14e6ba7dfbc455e142a326493bce7120a8c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UEKLSLF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3WLcqltinL%2BzCYreVcBnJialvrkji3WeV4xmmMcexlgIhAIhwscby0ZAF516HMk6u1LTOq%2B%2FaXV20Ob%2FvvsD06ZWiKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWHsbXyn2Uctf4Aqgq3AMBo7S%2BoklZqYQcmtLK2a4LWbH6Aa%2BO4Cn8qzSOuqVojn7q87ReT2McOP5U6lY94%2BMuumyG9zyf6%2BYhfKVi28VFFzlGDIZSFCRQD3s%2BRP%2B%2F%2BDSrrDL7LgqnkI3PPPDUgXQ%2FtjgPc5u8QM0Jb1ntQZ8Me%2FJySlpOd1LT%2BVWilPaYmUGMztBafVXgtn4hjxwx9%2FfND34%2BloLVtnVpQeolXLKcge%2FhQEKEde4IriewpwYnJwW%2FOAuVHsdp9xIzI5zWmcOJh2KkuTN%2BM8o%2Bz3RXUhKoQk0pxKcWZZ6JHiq8VkAsj5jXUovurjaChLwPmZJUyRXLoio8xVgIlG5KMbVWLSct20SMMxcJ1AiIRlKgFwNsy%2F5SxZSp%2BLL0Av3izs2YmgDQiPRl0YmTingmuAE6VwQdQ8cFOkatnXaur2TBlRrQ9kVBNPOwi8ojoQeon2mguKpQAiijZNtZG9IsY7sTkEYTxGJTZpqPmpNjzekP8wxt31we%2BllQdyWycceyoXzYwHYyrjjFYnBywmAq8MsqkoR2xhZdjdH%2F9IB6xWgwW%2BTE2I4ssT%2BuajnT7Bb2YCsdHfavjqPGB8IfesBtWoLgUoffiKvo4n7%2B0nQ9MQ38CfRYU%2BQSj0Rm4pxwq9J24jCywt3JBjqkAe%2Bcy%2BDgMIYAkwVr3XXn%2FkhzmU86c6EINZwuRTsAGb8VN4Pmhh4zjCKJu3NaIxANhMPLfQMMOWHuNnmGNgvzk4y8wr37BESIVqn%2Bcm2gmmqkcCkbHMFq2yMwGULYBgbB3XuNt8KRj5dKlOQmOWx37%2BgptS1iwoim97%2FdB36i4FsTZ4e6tt4jmaWevB82esWmxFjFaGNkUMTomHjbu0BuzFM4Gdzl&X-Amz-Signature=e413a5d6d16e9443090548b7d0314939c9e8e7be8e97026151792aa0f8519b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
