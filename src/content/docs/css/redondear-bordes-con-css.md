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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636VD2AHS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWQRs9aCrgC%2FpCi9TkySgPabiQfnUSyEyQlTDBx2eGsQIhAL4HFJQVfaCf8a7EWsibkMuD2T3B%2FUzr5Pm8VvftZgJcKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRtSj25rMPjCQL4%2FQq3AOVfojhcOdPN9iNlaR8Hpyk2bSq7RUGJLsp6HAxrQ6800jTvJX14DxC4w28CkpKazWyttpnhu6HuuYaFLxV%2FyUFv7dWWnu9Mq59om6ig19TfdeY%2FVQ1BRqh%2F7szLcu32rhBG4Mi32iyAwlXO%2FyM8BO9F5vUV0kbM8nTcCfyviARzeJQSoT3rD7bFzYj0xbD5321asgesgICdtVFT0ow%2FZwigoOOo7wi7nabqITwte7PwfCov%2B99w2Y01HxtMd7zxMsqM0J6j%2FZGZ27m8sNqUSyB9KZw8wiJIdyJtCQ1r4%2F8j9zEb8C1p79KTCGWXCQg7dEYwvphx7SNp9NLYT0v8VIY0XStfpCOLwFCkUXNlBJMRebuUXYCuSusl2miWLNhqjsXzzrVYoCppv4EjPW8EZ2B54a2cRez6J3X%2F7UJjvUmLEE%2Fn%2BAXFZzb5ApkU3VrGPWHMkgfVFJdGbPaFj74rYEhkudETmC%2BOa5H1YTzMF1dAeBnx1HPUYhGQ%2BM9qIe9vdIw5Dw9S5uSTEzv7EdJESpHD%2FGghYfs2ARf8UgAofqdyBXggzVI4gxeGyVrHj%2BxiZwDaSBYS07UyphByEApLXFuGA36I9PksP6yqP%2F8NzuARsClQ8fj2vr1AgZcBTCt3dzJBjqkAYEbX0C02KbgNAxAKADd9mbtd4MLj1w3S3gXqMlgzWLO3qMG6Og%2BF3i9%2FAdtFN6NENg2uJQoS5HGOV34TlhgjDUyXMFJO6FVDoqzF9%2BJqv%2FCEkFB6YREgNAgroD3Kcx7mPIXemCYaq%2Fw7pmfu8br5do95%2B2aU%2Fc2TiQ6k418xgPgjaMXESorzH8axIMtP3O2FdlVlJNVC50iQaGHaEWu2p4rS5HW&X-Amz-Signature=e32806d8f4c6000767a4ffe360cf86e0500fe16605de82a51a9ededca2956d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636VD2AHS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWQRs9aCrgC%2FpCi9TkySgPabiQfnUSyEyQlTDBx2eGsQIhAL4HFJQVfaCf8a7EWsibkMuD2T3B%2FUzr5Pm8VvftZgJcKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRtSj25rMPjCQL4%2FQq3AOVfojhcOdPN9iNlaR8Hpyk2bSq7RUGJLsp6HAxrQ6800jTvJX14DxC4w28CkpKazWyttpnhu6HuuYaFLxV%2FyUFv7dWWnu9Mq59om6ig19TfdeY%2FVQ1BRqh%2F7szLcu32rhBG4Mi32iyAwlXO%2FyM8BO9F5vUV0kbM8nTcCfyviARzeJQSoT3rD7bFzYj0xbD5321asgesgICdtVFT0ow%2FZwigoOOo7wi7nabqITwte7PwfCov%2B99w2Y01HxtMd7zxMsqM0J6j%2FZGZ27m8sNqUSyB9KZw8wiJIdyJtCQ1r4%2F8j9zEb8C1p79KTCGWXCQg7dEYwvphx7SNp9NLYT0v8VIY0XStfpCOLwFCkUXNlBJMRebuUXYCuSusl2miWLNhqjsXzzrVYoCppv4EjPW8EZ2B54a2cRez6J3X%2F7UJjvUmLEE%2Fn%2BAXFZzb5ApkU3VrGPWHMkgfVFJdGbPaFj74rYEhkudETmC%2BOa5H1YTzMF1dAeBnx1HPUYhGQ%2BM9qIe9vdIw5Dw9S5uSTEzv7EdJESpHD%2FGghYfs2ARf8UgAofqdyBXggzVI4gxeGyVrHj%2BxiZwDaSBYS07UyphByEApLXFuGA36I9PksP6yqP%2F8NzuARsClQ8fj2vr1AgZcBTCt3dzJBjqkAYEbX0C02KbgNAxAKADd9mbtd4MLj1w3S3gXqMlgzWLO3qMG6Og%2BF3i9%2FAdtFN6NENg2uJQoS5HGOV34TlhgjDUyXMFJO6FVDoqzF9%2BJqv%2FCEkFB6YREgNAgroD3Kcx7mPIXemCYaq%2Fw7pmfu8br5do95%2B2aU%2Fc2TiQ6k418xgPgjaMXESorzH8axIMtP3O2FdlVlJNVC50iQaGHaEWu2p4rS5HW&X-Amz-Signature=67d5f62f852ef0918b8f4602716f94d85380048635a1e5cd210441640705fbdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
