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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDHAPXPP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPdoTPLvd9dsQsjB3HelgBRK%2Bkh6mdXpPZfQf2mJJyXAiBwmqfbLs4TYMsSGLeAaYkEV%2FdcDIoGzLA2RIcg0tbiFCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuo%2FE8U7MFiFBW8BdKtwDyAQ5mlDyFOrTQgWupZdUgjNexNn6WmWIQgaaAsgwbdY8ZlLB5q3MocvkOKMkuXRHB1wD8HDEIjTxrdK73xHcBVyn8tiAcZwiat%2FWyXVDHyw%2Fdgq8GF94e%2FV0Dg0ik%2BuF32uLTEU9rCbP1aCWfwCJ6bwp0hhPhHlP7JwBLC3LziicOXPuxBjBeT6pfkQGJCymrwBgrUYGCJS8rjLZzrKg9u2mgXvif3JQgv3xuIXfBMWztbfWNoQFUV34FEx09BgrdNSPB30wE2LFxJOkFLfUtcA%2FRGLayTCZbNVq20TLgetrTFAavlgm4E6Ycms4CI%2F80DIfcda%2BpQz4I%2Bu8AqKZt5WkpzlUezD8XMLKEF6HjVMh8jNsKFugZ8g470hAjlFhafhf5xf4Y%2FDW4OmSnUvzTKfeBpWG3X%2Bg9u8nS3cI9IbQ%2FsvfKGLYeNuVmhbkUlridClkZyLnN3onT4Tc4FP5vK37q%2B%2FchYWUmTeRD1irBhRBC3o9pAWmw29dog5a8JWf2VjvAOdQ2KFRKhh7UmSeFK844oVsWw98Mf3xX%2FBPdwVtM%2FUqD4F8Xc7SoT0BPPRzMHbp1kWo8NzYEEn69R2BqfVms5G8TT7cIFM8P%2BtZj9HKOaEMnKVUAA2rpnUw4IfcyQY6pgFKM86YGUWD7F%2Bp%2Fcxmm1vyAYnpYhMTBdcoBsh68t9vm23j%2F2owscMJlqr4JesjsgdBMLk3AkJS%2FkurW%2Ffv5%2B5im3gtpquH9j%2FCGqSiakVgr9F2NvVvu4N0HPwc69NV65s%2Fzx0QxEdlSPPlrvDcHDBl%2F41ULpephnvH4A7KlDRwkbCKZDzI2ejulzq7S%2BzkUkv1LxskdnMBK7GlI2T8s3M%2BKx7P70j9&X-Amz-Signature=5209ecae1cd1f8210705152d13a0d8b7d15ac0fb4a3955b303b51baad1150f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDHAPXPP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPdoTPLvd9dsQsjB3HelgBRK%2Bkh6mdXpPZfQf2mJJyXAiBwmqfbLs4TYMsSGLeAaYkEV%2FdcDIoGzLA2RIcg0tbiFCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuo%2FE8U7MFiFBW8BdKtwDyAQ5mlDyFOrTQgWupZdUgjNexNn6WmWIQgaaAsgwbdY8ZlLB5q3MocvkOKMkuXRHB1wD8HDEIjTxrdK73xHcBVyn8tiAcZwiat%2FWyXVDHyw%2Fdgq8GF94e%2FV0Dg0ik%2BuF32uLTEU9rCbP1aCWfwCJ6bwp0hhPhHlP7JwBLC3LziicOXPuxBjBeT6pfkQGJCymrwBgrUYGCJS8rjLZzrKg9u2mgXvif3JQgv3xuIXfBMWztbfWNoQFUV34FEx09BgrdNSPB30wE2LFxJOkFLfUtcA%2FRGLayTCZbNVq20TLgetrTFAavlgm4E6Ycms4CI%2F80DIfcda%2BpQz4I%2Bu8AqKZt5WkpzlUezD8XMLKEF6HjVMh8jNsKFugZ8g470hAjlFhafhf5xf4Y%2FDW4OmSnUvzTKfeBpWG3X%2Bg9u8nS3cI9IbQ%2FsvfKGLYeNuVmhbkUlridClkZyLnN3onT4Tc4FP5vK37q%2B%2FchYWUmTeRD1irBhRBC3o9pAWmw29dog5a8JWf2VjvAOdQ2KFRKhh7UmSeFK844oVsWw98Mf3xX%2FBPdwVtM%2FUqD4F8Xc7SoT0BPPRzMHbp1kWo8NzYEEn69R2BqfVms5G8TT7cIFM8P%2BtZj9HKOaEMnKVUAA2rpnUw4IfcyQY6pgFKM86YGUWD7F%2Bp%2Fcxmm1vyAYnpYhMTBdcoBsh68t9vm23j%2F2owscMJlqr4JesjsgdBMLk3AkJS%2FkurW%2Ffv5%2B5im3gtpquH9j%2FCGqSiakVgr9F2NvVvu4N0HPwc69NV65s%2Fzx0QxEdlSPPlrvDcHDBl%2F41ULpephnvH4A7KlDRwkbCKZDzI2ejulzq7S%2BzkUkv1LxskdnMBK7GlI2T8s3M%2BKx7P70j9&X-Amz-Signature=7d0471576ad4fb387672b40c98091fa5c99c8f340e4a0bf4f7af62027050fe99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
