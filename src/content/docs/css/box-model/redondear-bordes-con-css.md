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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMAJDUS7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5SkzAQ1HtfP7EhfwWH%2BcYWDvCdIlqD1OcN5fSfTR0fgIhAN2bl3Q00KBomhpy1tSRZsZ2%2BKKALtqNF55hN31hzDQbKv8DCHEQABoMNjM3NDIzMTgzODA1IgzmTDIqRZAeEJRvJJYq3APoEWa%2B0K0YIOOQIK9fJMftTzXsfLBOecpVsvbFTKes1yuErTYFak4aMUN4DteeJWxoEE7hfjJrlDHUXhzMqkKsb9Q%2B4JVF57IMpKCStMhxtFsfppjr7eh8FeGpRQQR%2FItfUljodLlzNVhL5X17tFWEuJvUFUtpzWa50t4k81dfuBMBYhhlBWsw%2Fb6QKd3VQJLK%2FprMdwRaYzLaf1HicM80cDOvBvvKSMqnx1CrFV%2FD256oiK%2BDVrHdIdl9Vnn5Npsdbn4AzsmINYZf05%2FPRSV3uFnaKRkFQOBNAoA%2BaNfJfA7yIddrnvBwJ1IVOMNJIG%2FEg5PRySOmwsyfCII%2F66DKt1am0QYsARm7VDR4EXYQ%2Bv9obNih6iN4ZQfK9DtDflbFZWtx8ZCcA4%2Brj8uDUYR0iT2FAxegySl3YkK1LewMSmfj1L1hQ9T0vzZ4EiovaGoN7b5XuSzA1r0N8%2FfVSg4zYS64kIczj4lmEJ4E%2Bi3%2B6zCIe%2FoNZXIzNoFrU7FBiGXCX5VWlhVt9%2FWwIifSZ5a9wCve8zxnZwIgCj6WfagZmlfDwX3S%2B%2FF0W4jk6xRmztw4Ow2Oowhcy5N6sTWVszEK6JtZ%2B7aPSokF1mOyyU9Qf81pno%2FwX41LTwatiTCw34fKBjqkAa7%2FwyMCfR27HujYc4mTUFyhC0nBLEHUeJ48lNv1kI9RD2tJPdV2NKEzzoYHv97ftNLdSa41OsWtxn6IQ3%2F0EbgdaO0K4j4VBvb4uWjdHTenGZ1%2B8jKKXu%2FVo%2FeY6dTBILiiODkcgSNE8026RT%2F6Dz9nf3YJmLQ2vqvMgUC2%2FT4qs5Mle2tOTzN%2Fv0oQ5ILTcyExm3Aa9rGOSNb7uWYEE%2BUmBaZj&X-Amz-Signature=d82841342e9042e0f34e414b35c1ddda3fe73b287fc385b3908d679abcd2b5d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMAJDUS7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5SkzAQ1HtfP7EhfwWH%2BcYWDvCdIlqD1OcN5fSfTR0fgIhAN2bl3Q00KBomhpy1tSRZsZ2%2BKKALtqNF55hN31hzDQbKv8DCHEQABoMNjM3NDIzMTgzODA1IgzmTDIqRZAeEJRvJJYq3APoEWa%2B0K0YIOOQIK9fJMftTzXsfLBOecpVsvbFTKes1yuErTYFak4aMUN4DteeJWxoEE7hfjJrlDHUXhzMqkKsb9Q%2B4JVF57IMpKCStMhxtFsfppjr7eh8FeGpRQQR%2FItfUljodLlzNVhL5X17tFWEuJvUFUtpzWa50t4k81dfuBMBYhhlBWsw%2Fb6QKd3VQJLK%2FprMdwRaYzLaf1HicM80cDOvBvvKSMqnx1CrFV%2FD256oiK%2BDVrHdIdl9Vnn5Npsdbn4AzsmINYZf05%2FPRSV3uFnaKRkFQOBNAoA%2BaNfJfA7yIddrnvBwJ1IVOMNJIG%2FEg5PRySOmwsyfCII%2F66DKt1am0QYsARm7VDR4EXYQ%2Bv9obNih6iN4ZQfK9DtDflbFZWtx8ZCcA4%2Brj8uDUYR0iT2FAxegySl3YkK1LewMSmfj1L1hQ9T0vzZ4EiovaGoN7b5XuSzA1r0N8%2FfVSg4zYS64kIczj4lmEJ4E%2Bi3%2B6zCIe%2FoNZXIzNoFrU7FBiGXCX5VWlhVt9%2FWwIifSZ5a9wCve8zxnZwIgCj6WfagZmlfDwX3S%2B%2FF0W4jk6xRmztw4Ow2Oowhcy5N6sTWVszEK6JtZ%2B7aPSokF1mOyyU9Qf81pno%2FwX41LTwatiTCw34fKBjqkAa7%2FwyMCfR27HujYc4mTUFyhC0nBLEHUeJ48lNv1kI9RD2tJPdV2NKEzzoYHv97ftNLdSa41OsWtxn6IQ3%2F0EbgdaO0K4j4VBvb4uWjdHTenGZ1%2B8jKKXu%2FVo%2FeY6dTBILiiODkcgSNE8026RT%2F6Dz9nf3YJmLQ2vqvMgUC2%2FT4qs5Mle2tOTzN%2Fv0oQ5ILTcyExm3Aa9rGOSNb7uWYEE%2BUmBaZj&X-Amz-Signature=4721235c7da808bea04016110db599085e3bdbf33d4f13eb480dbb570c9501bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
