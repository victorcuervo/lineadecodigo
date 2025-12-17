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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QSOWTZ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHDZdMVW1oSDTEsIOlsAKZ9nxxuyUj4BSufcgaQKY7nAiEAlNMZHDLp0ZQ%2B2%2FjfmnQ1udxhDJFWQfP3QmtPo0mteVMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOuu9xxY%2BftdX6gTpSrcA3SSmmzsz%2BOHXN8rG4TxLR5LsZ9fILf2i0d930X1xcbmQrSFmlQMnqu%2BRZSC0IaxIckZt4GvTKtw%2BUEAjFYjdh43gYc1pe%2BRpwJE8O%2BTea6YOvr1TKa0ueLZULPc2Zm5GyUpWqQ7VpliPonwZz8LPbxbYvO03aUF%2BSTgiUZlvfbxhb1wv7%2BnzrkQm2HGK%2Fhc2%2F6%2FpT1TF3vaRJ98eEBN7fCaslLq6K3D23zyt6rtRC5vQave%2FH7wSsVytkMJL%2FwTD9M0lgleqmBejJAvRjPm441dgzzennfL38Qvohy1FY0aSkMRHd0ypoBEfo8B%2Ba9qaYiVaTlTFiDoOtjAZCsge0OJbr1lPZpFjie8SAXhiimxhlKFTjIRAPJX%2FpjZ%2Bbti3QjiyxVZ5JIye6ldOm3bXo9wZ%2BEkBZHZkkl516FE4SdUfLtVSWLgWBMR2CA%2F5he8tk%2FHW3MV0PwQ4sY%2Bnnd%2BeoQRf7UmhQTVuE5Acxw7NZljbXFLHsmNPxMpRMe336vL04xkZhfMl65nb5jd8LDLeiBmqtIhIVO3WDkn2%2FkuUUqNgGIlSad%2B6iJTO4v9EiG27uUn2mqGG%2B%2BTnqTb7r9UuEirpjniSy%2FmejlA1i2RR51rniRc4klgN9wKwPFDMI7qiMoGOqUBcRMGsC1oKMWk4eCySAlwowz6j%2F5K1ZY8w4trlkYV22WEAauXD7zpNPVeXKRzO0LTwck%2BNCcSfFhXYfImwkIegJ7IFK04SFIDS7oN75MpchMNRmsJwM35Wz89HPhf59Za2%2Fyy3lFqmj5SIoisVxL9rcjqxQ5hNVw0GNbrqSqGRD%2BeWMFEZAYQmxaZ7aSY4B6mHJBNVHfpRbaCKNQUW%2BvxB0Otxzo8&X-Amz-Signature=4fa0de4c569f450fb1f45df02dda2956d4e01975391d7bc7a9a303ee621711da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QSOWTZ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHDZdMVW1oSDTEsIOlsAKZ9nxxuyUj4BSufcgaQKY7nAiEAlNMZHDLp0ZQ%2B2%2FjfmnQ1udxhDJFWQfP3QmtPo0mteVMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOuu9xxY%2BftdX6gTpSrcA3SSmmzsz%2BOHXN8rG4TxLR5LsZ9fILf2i0d930X1xcbmQrSFmlQMnqu%2BRZSC0IaxIckZt4GvTKtw%2BUEAjFYjdh43gYc1pe%2BRpwJE8O%2BTea6YOvr1TKa0ueLZULPc2Zm5GyUpWqQ7VpliPonwZz8LPbxbYvO03aUF%2BSTgiUZlvfbxhb1wv7%2BnzrkQm2HGK%2Fhc2%2F6%2FpT1TF3vaRJ98eEBN7fCaslLq6K3D23zyt6rtRC5vQave%2FH7wSsVytkMJL%2FwTD9M0lgleqmBejJAvRjPm441dgzzennfL38Qvohy1FY0aSkMRHd0ypoBEfo8B%2Ba9qaYiVaTlTFiDoOtjAZCsge0OJbr1lPZpFjie8SAXhiimxhlKFTjIRAPJX%2FpjZ%2Bbti3QjiyxVZ5JIye6ldOm3bXo9wZ%2BEkBZHZkkl516FE4SdUfLtVSWLgWBMR2CA%2F5he8tk%2FHW3MV0PwQ4sY%2Bnnd%2BeoQRf7UmhQTVuE5Acxw7NZljbXFLHsmNPxMpRMe336vL04xkZhfMl65nb5jd8LDLeiBmqtIhIVO3WDkn2%2FkuUUqNgGIlSad%2B6iJTO4v9EiG27uUn2mqGG%2B%2BTnqTb7r9UuEirpjniSy%2FmejlA1i2RR51rniRc4klgN9wKwPFDMI7qiMoGOqUBcRMGsC1oKMWk4eCySAlwowz6j%2F5K1ZY8w4trlkYV22WEAauXD7zpNPVeXKRzO0LTwck%2BNCcSfFhXYfImwkIegJ7IFK04SFIDS7oN75MpchMNRmsJwM35Wz89HPhf59Za2%2Fyy3lFqmj5SIoisVxL9rcjqxQ5hNVw0GNbrqSqGRD%2BeWMFEZAYQmxaZ7aSY4B6mHJBNVHfpRbaCKNQUW%2BvxB0Otxzo8&X-Amz-Signature=9d6701d59b5f01a4f967b52377659f00ff2f9c7d88e45917157b5efad82f96c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
