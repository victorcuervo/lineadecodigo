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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AYX2JP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhpaTi9YEC3pRSrsBbz0FZr5HMhRyvZmqfshvVfzMJaAiAWKaZA1D37EyFMkQIBnQ%2BKfm5TXFlZ73paGezp%2Fdoi7iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2f%2F9luTZy2PRi0dOKtwDiL4EbXLmlFuhEtTufbvSBPgfb7pckfKqPnpTbN%2FD7gSNzM86v16HYAvG6d5aSCOCc8flJhRiqmgGPjfP5jINrjfdxItMcyLDkty3%2F0zLNPio%2FSarTnZoVaq8k%2FXMsNcKC6e4%2BkiRbolJ9WnQHliyhfzIDcvL6i2KNBC7wRCxWZfsi37bUisFbuxVscTb8qZJXChSNyEvlV4GUcMQskGzZ%2FDvfW0azmvaCml9jbh3AwFInPh4LNdly4LebNjy6C%2FYfx%2F7GBEWGQ%2BuQ5On%2FnhmI%2BLCvGFZLksUCtrxFCG89US5GwV2xIHzo0BzKaYt%2F32eG6eojWSEeu%2B3lxJsXUvs2eLgad5a8KwIKWdnElw0InG18CW%2B5AbTEcGWYXvCbCs3ZDS%2FqURqgk3NfwJWLhjn%2BxRWbuzVWOS1euMBXkRHJfQc64lDZrBfS%2BvTXbzr0djVmPoH4d23mgs6tVHEkKUW%2Flkhj7sRTv%2BW9clkTSq9SZlBunNIOpYz8i5Ye9c0MjETiPxPkL7ua3iME%2Fyqte8Ix6xnTxddvHpsgF5HNvrGtYlkO%2F3Wl630WE%2FVFHYKvF%2FfxYZOo6KTXw2T7%2BLVxvoV27NfvosIQi0KPGmcZFvIXQHR8u0FQxLJhkAZxtUwma%2BMygY6pgFIsV7QNB2E0Qu5NZl5VOFUqsYWmq%2FH48w9op9UQrZqC8zNq2bSN0pq3F5qLNs84J1AFeOWCQlKEBZtI9byqeXFYoIjZgkOgTLLRVCpYuALtB29AZSZY3tIOe34sTb%2BHs%2ByWw%2BbS3KHxSF3vdWIx%2FbbgodFL0Fkv3cB4RjH%2BzbJ%2FQ0NAtrfgx51nSNLOJNdJ01lfxnbCpejOaWVP1TpnG76bX12LbMe&X-Amz-Signature=b0a21e5aa8b1f8d3a2d013e75077c9495a87f96c1c95bfc8d157c1cad6d67b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AYX2JP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhpaTi9YEC3pRSrsBbz0FZr5HMhRyvZmqfshvVfzMJaAiAWKaZA1D37EyFMkQIBnQ%2BKfm5TXFlZ73paGezp%2Fdoi7iqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2f%2F9luTZy2PRi0dOKtwDiL4EbXLmlFuhEtTufbvSBPgfb7pckfKqPnpTbN%2FD7gSNzM86v16HYAvG6d5aSCOCc8flJhRiqmgGPjfP5jINrjfdxItMcyLDkty3%2F0zLNPio%2FSarTnZoVaq8k%2FXMsNcKC6e4%2BkiRbolJ9WnQHliyhfzIDcvL6i2KNBC7wRCxWZfsi37bUisFbuxVscTb8qZJXChSNyEvlV4GUcMQskGzZ%2FDvfW0azmvaCml9jbh3AwFInPh4LNdly4LebNjy6C%2FYfx%2F7GBEWGQ%2BuQ5On%2FnhmI%2BLCvGFZLksUCtrxFCG89US5GwV2xIHzo0BzKaYt%2F32eG6eojWSEeu%2B3lxJsXUvs2eLgad5a8KwIKWdnElw0InG18CW%2B5AbTEcGWYXvCbCs3ZDS%2FqURqgk3NfwJWLhjn%2BxRWbuzVWOS1euMBXkRHJfQc64lDZrBfS%2BvTXbzr0djVmPoH4d23mgs6tVHEkKUW%2Flkhj7sRTv%2BW9clkTSq9SZlBunNIOpYz8i5Ye9c0MjETiPxPkL7ua3iME%2Fyqte8Ix6xnTxddvHpsgF5HNvrGtYlkO%2F3Wl630WE%2FVFHYKvF%2FfxYZOo6KTXw2T7%2BLVxvoV27NfvosIQi0KPGmcZFvIXQHR8u0FQxLJhkAZxtUwma%2BMygY6pgFIsV7QNB2E0Qu5NZl5VOFUqsYWmq%2FH48w9op9UQrZqC8zNq2bSN0pq3F5qLNs84J1AFeOWCQlKEBZtI9byqeXFYoIjZgkOgTLLRVCpYuALtB29AZSZY3tIOe34sTb%2BHs%2ByWw%2BbS3KHxSF3vdWIx%2FbbgodFL0Fkv3cB4RjH%2BzbJ%2FQ0NAtrfgx51nSNLOJNdJ01lfxnbCpejOaWVP1TpnG76bX12LbMe&X-Amz-Signature=6f8d1d5ffa441933270cd713f362ce4df589ea24938508c8778848b562512fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
