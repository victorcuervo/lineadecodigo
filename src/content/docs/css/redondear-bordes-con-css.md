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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWNHEBBP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2XcDTOG6dLhUXbpEhiOLcay9cG45zISf2X6QfIKu0FAIhAN9H7u5A9FFJKXaFH%2FfMR%2F9WJsYRv%2F8fxQl6Xh9MetgNKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJna4wCe%2F1vcnscRkq3AOId%2FSBJ2t6Y7Bf%2F6H6f1fm2g8tww1OMp42m1VvNMEF4esWG2p1rTyJEkktfDIWBBgt2F1FeuFbO7ER6XWlPfhdGgz4cf7czvFkxltRMv1zbIbBmfqxqRYxEBl%2F%2FwYBW7GoRVzUCtcpvs6P36vezS5tTMq%2FnHmRfDvHsPxggRtzfa5L0DKcaBBppoSxckVoGPL758bbkPWrBVdaRopni2E5b6t4K%2BHaOA0NdbWsjnTVFGZdQNNxDBh87GP5QouIuWWuhpQKC%2FbvKf6tBES9bxh4NNDXa2UmMziTWfLyFSv6YzHLvVhuVhuk4tLRaXGzLheuC50uSJbXnUotTMzT6U6dRdHFJTXBUBl5Rap2X%2BwjpLJOEJ6FtZiu3rp7VTkGYLE1tjTNQQFoL7q01jiqucbMWRrLEdTpqc7A9fwN4APYdJODMeiUIN3%2F%2B0tUhA2NgfeTodOu8hEDP9nSkahvhn3FIdNPej1u%2BuOarsd1oe5GZEojToLOfpySj313pnxeX7mvie1Pf3kzyzoWwWi0AEgFTEX5%2BejqUCdqIozaq9OtuXIw%2FFdodpEhNKP8HZ0jBS96%2FhB48g%2BIzk7w4iaQExUIByWdO335Eb4a2aeUQwicWLt2lvkS%2BFfeonr3bTCf7tjJBjqkAb%2FbKMjvpXdz23bxepA4ywyhdrkvHP6ulQslLUTMJ99Ifi5BuZg8fVNZzVu%2Bt2dvdzSElz14RAezdMwzXUd7vQ0KaI8LJJB81NiiylM72JDNicWDDfd7k4N%2FZHb7cLr%2BUVPNJE77g1gugq83ZXsSNn2HKajizTevx4WWd0UiRmJzUl%2FIvliMTYYFhuO%2FLicEJ2%2FK3YiULGHpaMnU1RyUrhch2OXy&X-Amz-Signature=988504282b810468e9bfbe6303f83066a28df69ba2cdafdebd27b4d22766f908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWNHEBBP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2XcDTOG6dLhUXbpEhiOLcay9cG45zISf2X6QfIKu0FAIhAN9H7u5A9FFJKXaFH%2FfMR%2F9WJsYRv%2F8fxQl6Xh9MetgNKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJna4wCe%2F1vcnscRkq3AOId%2FSBJ2t6Y7Bf%2F6H6f1fm2g8tww1OMp42m1VvNMEF4esWG2p1rTyJEkktfDIWBBgt2F1FeuFbO7ER6XWlPfhdGgz4cf7czvFkxltRMv1zbIbBmfqxqRYxEBl%2F%2FwYBW7GoRVzUCtcpvs6P36vezS5tTMq%2FnHmRfDvHsPxggRtzfa5L0DKcaBBppoSxckVoGPL758bbkPWrBVdaRopni2E5b6t4K%2BHaOA0NdbWsjnTVFGZdQNNxDBh87GP5QouIuWWuhpQKC%2FbvKf6tBES9bxh4NNDXa2UmMziTWfLyFSv6YzHLvVhuVhuk4tLRaXGzLheuC50uSJbXnUotTMzT6U6dRdHFJTXBUBl5Rap2X%2BwjpLJOEJ6FtZiu3rp7VTkGYLE1tjTNQQFoL7q01jiqucbMWRrLEdTpqc7A9fwN4APYdJODMeiUIN3%2F%2B0tUhA2NgfeTodOu8hEDP9nSkahvhn3FIdNPej1u%2BuOarsd1oe5GZEojToLOfpySj313pnxeX7mvie1Pf3kzyzoWwWi0AEgFTEX5%2BejqUCdqIozaq9OtuXIw%2FFdodpEhNKP8HZ0jBS96%2FhB48g%2BIzk7w4iaQExUIByWdO335Eb4a2aeUQwicWLt2lvkS%2BFfeonr3bTCf7tjJBjqkAb%2FbKMjvpXdz23bxepA4ywyhdrkvHP6ulQslLUTMJ99Ifi5BuZg8fVNZzVu%2Bt2dvdzSElz14RAezdMwzXUd7vQ0KaI8LJJB81NiiylM72JDNicWDDfd7k4N%2FZHb7cLr%2BUVPNJE77g1gugq83ZXsSNn2HKajizTevx4WWd0UiRmJzUl%2FIvliMTYYFhuO%2FLicEJ2%2FK3YiULGHpaMnU1RyUrhch2OXy&X-Amz-Signature=dbcbd3cb10dfe54d879ce51c7509be7146dbd41dd041d1ed6a0693837a63c977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
