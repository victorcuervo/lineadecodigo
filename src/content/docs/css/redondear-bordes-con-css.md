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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WTMZC4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB1JFzkXM0VCmNtXdmkSAk5SdOwmGIKr1Zv4gZfSjXKAiAG2sq7eTPd3GUuv4B2p8fu3yczvm5%2FuL4tb6HhcPSl%2BCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0H4LAzrNM%2Fw9lkeKtwDt4xS%2FvwbLbjmC6V%2FCSOcFWRcY1T4qezejTqeBFkk6Q6hK41duWhXjaGK8XcA3pRtDCZLqwRFeSLiDacSTH6mD2DX4WWbnpKpOrMzMGoBgcE3vLB5aHruqhq33uetHczHNrEK32QL1p%2Ba5chWaNHNb0jOkZtMVoeE0ZLemUlxiYwO%2BMF%2BB7N%2B%2BaWZCtX5U9OPDA13JXI5cDCPf7QS6WYapyzjsRDcpY7dzrLu9q3CManB5kywC1r1n4lqwskWBFic%2BRKYEvdZPae7TetGjr1h%2FFoAXDYLF%2BILlMYdKd4Z8tQoTaO%2Bb%2BeAlqrXowqfOCYalZQEjATgFExau3ksNxUufDaGSQx0jv0sG2ucu1Qxqz4kLj4ACK3IxAM%2FAuxwGkknEk0JnHGA6y5nZlybQA8X6CXGV2XWCUJhXyiAa1IVw5lYnhKQ4g0RWbZfak8Z0%2B2rJSQE%2Bhzptg3R4PmlRiRSlnk6nh8AzOtZ5QCIvEwBxdjECaVH59LuPGKJhlOVeEBxs6MUt5ZymxYcUYSvQ%2FdE62DuKvEmQhiIGR%2FvvyaEzT6%2FNvVUb8hmDfyGKHhS0wNY5t%2Fz%2BxqSkz5NlQeL6HOpkLgvaIXPo50mfiAj4SJQJhW2OJTOGigqqhKR8ekw78bXyQY6pgE8sjpQetO0f%2BbBy3kxp%2BZOoUxOQp18luVbJBKxzrKVJVov9P4b4Axa7%2B9uQJGwl2VNMranCaNS3qLgCsLaHXJVXDGxw6%2Fkc6NgwTRT9LBf7u4nwjfqS6RiFDnA6RFzwzuyzPhaSRv8zSvIhuR1eeR58rXtf%2BgS8JCBmSPUNJciTyFGEgjjJKYt8WoTQlGTVIDuYBxQ1IgHauFCJCR0Ij5jfRpJpK4T&X-Amz-Signature=1e331fe05745d55af240c7dfa638efeed7211b35c983c905589636aa67d93589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WTMZC4V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB1JFzkXM0VCmNtXdmkSAk5SdOwmGIKr1Zv4gZfSjXKAiAG2sq7eTPd3GUuv4B2p8fu3yczvm5%2FuL4tb6HhcPSl%2BCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO0H4LAzrNM%2Fw9lkeKtwDt4xS%2FvwbLbjmC6V%2FCSOcFWRcY1T4qezejTqeBFkk6Q6hK41duWhXjaGK8XcA3pRtDCZLqwRFeSLiDacSTH6mD2DX4WWbnpKpOrMzMGoBgcE3vLB5aHruqhq33uetHczHNrEK32QL1p%2Ba5chWaNHNb0jOkZtMVoeE0ZLemUlxiYwO%2BMF%2BB7N%2B%2BaWZCtX5U9OPDA13JXI5cDCPf7QS6WYapyzjsRDcpY7dzrLu9q3CManB5kywC1r1n4lqwskWBFic%2BRKYEvdZPae7TetGjr1h%2FFoAXDYLF%2BILlMYdKd4Z8tQoTaO%2Bb%2BeAlqrXowqfOCYalZQEjATgFExau3ksNxUufDaGSQx0jv0sG2ucu1Qxqz4kLj4ACK3IxAM%2FAuxwGkknEk0JnHGA6y5nZlybQA8X6CXGV2XWCUJhXyiAa1IVw5lYnhKQ4g0RWbZfak8Z0%2B2rJSQE%2Bhzptg3R4PmlRiRSlnk6nh8AzOtZ5QCIvEwBxdjECaVH59LuPGKJhlOVeEBxs6MUt5ZymxYcUYSvQ%2FdE62DuKvEmQhiIGR%2FvvyaEzT6%2FNvVUb8hmDfyGKHhS0wNY5t%2Fz%2BxqSkz5NlQeL6HOpkLgvaIXPo50mfiAj4SJQJhW2OJTOGigqqhKR8ekw78bXyQY6pgE8sjpQetO0f%2BbBy3kxp%2BZOoUxOQp18luVbJBKxzrKVJVov9P4b4Axa7%2B9uQJGwl2VNMranCaNS3qLgCsLaHXJVXDGxw6%2Fkc6NgwTRT9LBf7u4nwjfqS6RiFDnA6RFzwzuyzPhaSRv8zSvIhuR1eeR58rXtf%2BgS8JCBmSPUNJciTyFGEgjjJKYt8WoTQlGTVIDuYBxQ1IgHauFCJCR0Ij5jfRpJpK4T&X-Amz-Signature=26550c167222b6012d7e132b236fdd1776bada696872b7704ef42af1a44e6253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
