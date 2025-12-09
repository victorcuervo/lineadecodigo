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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJCQZWBJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq%2FTwbx6WIJ8AJbfEbRMP6fmCG8Gq%2F%2BiaHA6Jvu6QFoAiEAw49l8Ho6zNk%2FcUkNULa9qR4fXv2V0bA%2BHAzFt%2F6qdfoqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvdB6K8K2sM616UpircA5S9RG%2FjZuRmlhvaXL7T9Po8zPR8wR2mOsoRehFdNWg%2FMK8jQ9Cd4whaWmSOTlpAsNxmoPVDfGTvghNuCP75VQb1kPqmE7bpHPCYhmnUItSIVcp4cskMX4w5RMneuwKQlPEyh4xcQvlWhBfFeOMnlLzGkpEpqySASxvJNy3PKIyU4YNPpUI1W2t%2F9YpG8jFRHvHrKO%2BXfqd8Lz5K%2FgR7kUAjtmKxkRYHFA6xUIm9JF19vN7GnMbgyrY4Baq86BnCykZIsyRRRiwqtoClxsQ%2Bls7TAAW0kChbennHTgzk91Pq%2F0AZtn0Xx5xbi%2B6TWCntd2qWk9TZ%2BkOEBXo63g4qfS%2BPaet7jrGs7BWEpZ%2Bj64MMb4OnY7uOmNSULKnIkvLPGVx%2B2FvIWA%2BHPLTGDKULFqVi00UQ2nyY4ZcDQE7bRislTnXbZqsV6zF8lLQRqQeVvIvwHhBN7v2hCYzgX558F1GaPVxIz%2FKdB3%2Ff2cElE3LjuLQm1jqMbXG70MdkXodINlcUKtU7AKa1EyLZEZZXTOL7eMRDPP39u%2BiRrzXN3cxtSwgDQ2BNS0dmncWXgIQGOaU9ED%2FHCN3YC329k87ScpJev%2B8yaAd5pslqzGhIFcbBknUaBPMPUbedzKVXMLiH38kGOqUBYy%2F7w1F6a24kAA77Ji7Qv6NIxWy980mZno0O1AmptNOTbfiC6WRlV%2By3gBjzPfBvI6TGJnCUXT4ZLlxI0QUZKQMI3B%2Bowzq%2Fzboqiyx6kBRKTOIAsuIXmEm7HpkEBAVmtVhiFD5UvNUEfK2Zzb9AgqM%2BtZQCTnoJslOSNXwKv0yx8XM2N8dib0JyVZQ4yxx0CeBms6F3RIn77WBJnoZikWrPklj1&X-Amz-Signature=88146685f48975512fdb614cf5ed76ba7f2bfb71570340c9a34308168e4e3f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJCQZWBJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T071707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGq%2FTwbx6WIJ8AJbfEbRMP6fmCG8Gq%2F%2BiaHA6Jvu6QFoAiEAw49l8Ho6zNk%2FcUkNULa9qR4fXv2V0bA%2BHAzFt%2F6qdfoqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvdB6K8K2sM616UpircA5S9RG%2FjZuRmlhvaXL7T9Po8zPR8wR2mOsoRehFdNWg%2FMK8jQ9Cd4whaWmSOTlpAsNxmoPVDfGTvghNuCP75VQb1kPqmE7bpHPCYhmnUItSIVcp4cskMX4w5RMneuwKQlPEyh4xcQvlWhBfFeOMnlLzGkpEpqySASxvJNy3PKIyU4YNPpUI1W2t%2F9YpG8jFRHvHrKO%2BXfqd8Lz5K%2FgR7kUAjtmKxkRYHFA6xUIm9JF19vN7GnMbgyrY4Baq86BnCykZIsyRRRiwqtoClxsQ%2Bls7TAAW0kChbennHTgzk91Pq%2F0AZtn0Xx5xbi%2B6TWCntd2qWk9TZ%2BkOEBXo63g4qfS%2BPaet7jrGs7BWEpZ%2Bj64MMb4OnY7uOmNSULKnIkvLPGVx%2B2FvIWA%2BHPLTGDKULFqVi00UQ2nyY4ZcDQE7bRislTnXbZqsV6zF8lLQRqQeVvIvwHhBN7v2hCYzgX558F1GaPVxIz%2FKdB3%2Ff2cElE3LjuLQm1jqMbXG70MdkXodINlcUKtU7AKa1EyLZEZZXTOL7eMRDPP39u%2BiRrzXN3cxtSwgDQ2BNS0dmncWXgIQGOaU9ED%2FHCN3YC329k87ScpJev%2B8yaAd5pslqzGhIFcbBknUaBPMPUbedzKVXMLiH38kGOqUBYy%2F7w1F6a24kAA77Ji7Qv6NIxWy980mZno0O1AmptNOTbfiC6WRlV%2By3gBjzPfBvI6TGJnCUXT4ZLlxI0QUZKQMI3B%2Bowzq%2Fzboqiyx6kBRKTOIAsuIXmEm7HpkEBAVmtVhiFD5UvNUEfK2Zzb9AgqM%2BtZQCTnoJslOSNXwKv0yx8XM2N8dib0JyVZQ4yxx0CeBms6F3RIn77WBJnoZikWrPklj1&X-Amz-Signature=e3c2701cc3a193e76075ab7ce61f9c4121f118c9bab09eaa61ee399567ee273d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
