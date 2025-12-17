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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG6WYN5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEICMCRfBayCkKQs58pjsOuSfQZv4sEkSIsi4lPXScWAIhANhq2grMRaV2qYZTHO6hYLP3MqU37m%2BthZPw4dwKwmjmKv8DCHYQABoMNjM3NDIzMTgzODA1IgyeBYoPtypFc3EEFvEq3APNE0R43SlCbTzkINZJQ%2BKOJfwX5gPncvLZEXt%2Fb7pxb2WsR1%2FhEE2HxLD1G%2B2ap%2BKDgHWf6xjDZGEyLYgiaa%2FqHaMTHCq8KWvfdG3JB0WNdHBi81l65r0Iukz%2FlgAEMjwaUO4dAdY5Kw4BoLFGPjD5nAZjtoaQgzAVw%2FTMTe4HORlWeN1vuZdH8kCbMyS0D7n%2BPPKYbQpBDOiEEz2%2FXT18GIn2WJgzEGY1RtHlCGYHbhKjhjuZT875K5esr7j2z7RFmCnN9xkpSlkQ25IBUV3G%2FcZdJWvvH1tNmrjC52%2Bgjtc2yori3%2FXC7nJxF3fBuXhNTcBtWaOIRtXD18rlyNSdU0W3QWQ5bBkcVFoL6QdAL3E7YHny39S1Sw5xJM1xWuPFZmdnSPtVyr4u7WC%2BDHCmxAZM7cWMRbx4%2FeEo972INXu3Mb9jaVIj9lvQtyFaM0V2HpYbWLuXv4uOmGQ8VxC7%2BZHQicFTbYQPyudimN%2B%2F%2BGJzQW0947C%2BpzaYe2asJ5giPsCLxcwkgFIlXeClSU1ItABX%2FurFwl7ASn77dvZGAndbBRO043LRIgvQTcxBpFABDGg%2FAcEbWjht8IDzAGAFWKtycYWzlAmFAJtsbd5vTRLQ2RB4Hc475hsFBDCn6YjKBjqkAWdZjt4EAXMBRhrAq50PXHCxPzp30e8A1HRhBzfEZshQ1mQ%2FobCchznNIjOD4PKHxSY5t20jiEzyjLiiBg3DK%2BfJk1sUOucKjgrh4moq6NnzqG%2BnUfWdyTjbJ3tcjns8Cp5eyZ0uabCm5vMLP%2BDNz42ZESDSgCNTcEdIb1CmhF5%2FRQzpBb1ahB2En3NM%2F2MH2uvolod4P0wNSA5GIbdbqKL5fo%2BG&X-Amz-Signature=89fac2560641566fbe7d60ffe111d72c59e4b02c60ab16a1221eba19cdb79e1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBG6WYN5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEICMCRfBayCkKQs58pjsOuSfQZv4sEkSIsi4lPXScWAIhANhq2grMRaV2qYZTHO6hYLP3MqU37m%2BthZPw4dwKwmjmKv8DCHYQABoMNjM3NDIzMTgzODA1IgyeBYoPtypFc3EEFvEq3APNE0R43SlCbTzkINZJQ%2BKOJfwX5gPncvLZEXt%2Fb7pxb2WsR1%2FhEE2HxLD1G%2B2ap%2BKDgHWf6xjDZGEyLYgiaa%2FqHaMTHCq8KWvfdG3JB0WNdHBi81l65r0Iukz%2FlgAEMjwaUO4dAdY5Kw4BoLFGPjD5nAZjtoaQgzAVw%2FTMTe4HORlWeN1vuZdH8kCbMyS0D7n%2BPPKYbQpBDOiEEz2%2FXT18GIn2WJgzEGY1RtHlCGYHbhKjhjuZT875K5esr7j2z7RFmCnN9xkpSlkQ25IBUV3G%2FcZdJWvvH1tNmrjC52%2Bgjtc2yori3%2FXC7nJxF3fBuXhNTcBtWaOIRtXD18rlyNSdU0W3QWQ5bBkcVFoL6QdAL3E7YHny39S1Sw5xJM1xWuPFZmdnSPtVyr4u7WC%2BDHCmxAZM7cWMRbx4%2FeEo972INXu3Mb9jaVIj9lvQtyFaM0V2HpYbWLuXv4uOmGQ8VxC7%2BZHQicFTbYQPyudimN%2B%2F%2BGJzQW0947C%2BpzaYe2asJ5giPsCLxcwkgFIlXeClSU1ItABX%2FurFwl7ASn77dvZGAndbBRO043LRIgvQTcxBpFABDGg%2FAcEbWjht8IDzAGAFWKtycYWzlAmFAJtsbd5vTRLQ2RB4Hc475hsFBDCn6YjKBjqkAWdZjt4EAXMBRhrAq50PXHCxPzp30e8A1HRhBzfEZshQ1mQ%2FobCchznNIjOD4PKHxSY5t20jiEzyjLiiBg3DK%2BfJk1sUOucKjgrh4moq6NnzqG%2BnUfWdyTjbJ3tcjns8Cp5eyZ0uabCm5vMLP%2BDNz42ZESDSgCNTcEdIb1CmhF5%2FRQzpBb1ahB2En3NM%2F2MH2uvolod4P0wNSA5GIbdbqKL5fo%2BG&X-Amz-Signature=8c74ade212fd333ffc1f3e5a2eb9862b7c0e40aacd493a346b6a03f234ee7034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
