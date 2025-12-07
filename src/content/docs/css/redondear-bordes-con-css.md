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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CK4ZTM5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfVa%2BxyTVxnTmQfT01YNa9QBR9xZiUzHN9mzdhYIwXLAiEA6iOPIeoo%2BKU3ZzI5q%2FCb2xVlHDuXYWVqwXMYnFj0kBsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjIZtlSl%2FabLXQooCrcA%2Bq5L2raG5qAy%2BqCCk%2Fd0GcdfvNWGyFgxjwrt9FCUq%2FTC46x%2BKrgqYVVqZFwtLckkf8MLc%2FWoQdWzPXBs1v5FCplkkVNuveNwb3tjVbkJPzOorics3MyohElflrOcd2DGqueneg5P4629j%2FaHYf566hLAY4lDM4n7P7fBwpm%2FLDqJqTN0kFbrSMOwKTbU5sCEpA9FET28YKEZMdbMSsZk0QPaPBFB0pDs0HMxZsPFwLAWvt0fF07eCNUyGvZy3mtk9ZUZjlIn49fKwG0QYxQdTV3tQ%2F7uFWVTQZXwiAxPZ0yY1CZxeiTPK%2BJnvWIdQAVYOWK8hGuN0NCtAkss07MeizAneUOzwuPEvrWsb7JYsxI6Rtb4INcJqdUc5pwTZJUkAM86tEl0KT0OeqwPthyQ409n9GQhM%2Btd%2FCtpl5BbQTSYJiHdiyxEtqoqMwLdRzwwAL3dzlPjq1eXtgvqXp7dJjhZpl3F2qqAyRFcdIJ4O05mmrxuSYoAMHDGHpTkBHBUUFPRVJLFrjdh55G%2FceRcS58gA%2BeOVIYI3aUIEr099Hmb6wNZAFZC24pRBJC03Ll1dRuVBpCWjubU8%2BKqZbFSRsM1XG8%2Fv1s7blVeivoBzqYBWcc7rZK1SYMr%2BnqMI3%2B0skGOqUBnJwqlrdZ16gVXnPgCtf9b0fjYLJ%2BS3B5QDcmCV48k7g1YZSjfJiTMRMpi6jXeE71s4CHB97ihiHNdXxbCK2wNDRfJob5w1zxx5zPZk5ONOrgNTuiFtwNVMXcKy8bVC8DwSLiGbA6SX0K9lZITOGK0akuYLYRxJBvmfYgyE3TfYwcqwQZOY0Yl6cSUf9e0K%2Flbttti8MVT0asUa7i%2BaJo57enVT7P&X-Amz-Signature=618f2c9e6dfd26dd34497f7237e20d5b0d6f78d5b42e9ace3465e0773c28fe83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CK4ZTM5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEfVa%2BxyTVxnTmQfT01YNa9QBR9xZiUzHN9mzdhYIwXLAiEA6iOPIeoo%2BKU3ZzI5q%2FCb2xVlHDuXYWVqwXMYnFj0kBsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJjIZtlSl%2FabLXQooCrcA%2Bq5L2raG5qAy%2BqCCk%2Fd0GcdfvNWGyFgxjwrt9FCUq%2FTC46x%2BKrgqYVVqZFwtLckkf8MLc%2FWoQdWzPXBs1v5FCplkkVNuveNwb3tjVbkJPzOorics3MyohElflrOcd2DGqueneg5P4629j%2FaHYf566hLAY4lDM4n7P7fBwpm%2FLDqJqTN0kFbrSMOwKTbU5sCEpA9FET28YKEZMdbMSsZk0QPaPBFB0pDs0HMxZsPFwLAWvt0fF07eCNUyGvZy3mtk9ZUZjlIn49fKwG0QYxQdTV3tQ%2F7uFWVTQZXwiAxPZ0yY1CZxeiTPK%2BJnvWIdQAVYOWK8hGuN0NCtAkss07MeizAneUOzwuPEvrWsb7JYsxI6Rtb4INcJqdUc5pwTZJUkAM86tEl0KT0OeqwPthyQ409n9GQhM%2Btd%2FCtpl5BbQTSYJiHdiyxEtqoqMwLdRzwwAL3dzlPjq1eXtgvqXp7dJjhZpl3F2qqAyRFcdIJ4O05mmrxuSYoAMHDGHpTkBHBUUFPRVJLFrjdh55G%2FceRcS58gA%2BeOVIYI3aUIEr099Hmb6wNZAFZC24pRBJC03Ll1dRuVBpCWjubU8%2BKqZbFSRsM1XG8%2Fv1s7blVeivoBzqYBWcc7rZK1SYMr%2BnqMI3%2B0skGOqUBnJwqlrdZ16gVXnPgCtf9b0fjYLJ%2BS3B5QDcmCV48k7g1YZSjfJiTMRMpi6jXeE71s4CHB97ihiHNdXxbCK2wNDRfJob5w1zxx5zPZk5ONOrgNTuiFtwNVMXcKy8bVC8DwSLiGbA6SX0K9lZITOGK0akuYLYRxJBvmfYgyE3TfYwcqwQZOY0Yl6cSUf9e0K%2Flbttti8MVT0asUa7i%2BaJo57enVT7P&X-Amz-Signature=15fe0ef7fd0349c7821b1e297729ce3fddf41260ea738b2a1718585f1895f751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
