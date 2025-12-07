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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPMJCYN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeh7ftuqKBkeiTapcd3JwVyW%2FB7ktH8EJq1QzipQTYZQIhAIvyPfPh%2FLWiXi%2FutTAUYtT0tlZwaQCM3guFC14i1warKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9th9CqQjIgBPEZMUq3AOqfTFBcstOHrJ9qeSK9GoQr0R4Lru6dekyTlqdovNJUYjkpsKW5ge0qNKS7pBx3A1PwDYjrF4N8Fku6oqR9A2sROTTRZzgnY7de%2BcDo9fP6m%2BPuuujZL8sjxNFoNcIc8lSQ%2BZwwhk05D3UW1%2BaH9Gi0fXGrKkNkxWzed9XjQQovNgAK1inid80ghXxVFW%2BqVpW4WWBfYvzQVdq1TTHEOryAuKWA31S%2Bk%2FC8diTp%2BiAVG55kXbT6jwu9eq7VMFidpIPioUVq21xXsRaFZo2h2t4f92obd6pQ1VVWJjK%2BOgV0ismFMmL%2BUh5g3axOZVv7PSpxkLXKVFn0WZTr%2Bv4BCM2K1rKEZbGT6t0AbvZ3VRMKRPCVwCS7pd9%2Bu5qhtmDjUY6aWnS%2Ff78Ta5OGh%2BOAIiFBsEiikJUmIDfH%2BFRsMAzbWKPW7XophM4tGN%2FXW0ocWGuoLPymFgh1qIvkI8jUPipQag4fRpRURIGBbhq70t2N4qUotOXLFgJOom0yzAJ9S0muf5aPFsXtGydHFMs%2FhFmGUqPzHe1KQm9YdSwMMglI5S23x3psDBY%2FHpFM%2FGHBJg8T7JGPHSxfY8H5Rvqla8OGPk6WCJAthrPP9ER2heVFQ5S2eWPPFXaNuw9%2BTCYmdXJBjqkAXCJ5JXR8LeFdVJk%2FUu7VKGS8FkSSRj0jYwf41NCO0324iRwku1Kk13WjNxULT%2BbDhOV9Ar9Ht0qlS8h50S3VHZESWrc9dmr1238ioJhdOhHYxbnJfOK%2FU%2FGtBtYVEfXEfWJLWBcBckt17t2Uh93k0rLzHPt6e%2F2BDK8pgvYqeKpUkR5hJPeQBIkLRa42QVs6CSxRM0lcyQCE0%2Fo9JilRQmMoGFY&X-Amz-Signature=537a340cb42916b4e274e6bb1018741e04475b2e00b2bbeb9caabb6c92c73c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OPMJCYN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T110620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeh7ftuqKBkeiTapcd3JwVyW%2FB7ktH8EJq1QzipQTYZQIhAIvyPfPh%2FLWiXi%2FutTAUYtT0tlZwaQCM3guFC14i1warKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9th9CqQjIgBPEZMUq3AOqfTFBcstOHrJ9qeSK9GoQr0R4Lru6dekyTlqdovNJUYjkpsKW5ge0qNKS7pBx3A1PwDYjrF4N8Fku6oqR9A2sROTTRZzgnY7de%2BcDo9fP6m%2BPuuujZL8sjxNFoNcIc8lSQ%2BZwwhk05D3UW1%2BaH9Gi0fXGrKkNkxWzed9XjQQovNgAK1inid80ghXxVFW%2BqVpW4WWBfYvzQVdq1TTHEOryAuKWA31S%2Bk%2FC8diTp%2BiAVG55kXbT6jwu9eq7VMFidpIPioUVq21xXsRaFZo2h2t4f92obd6pQ1VVWJjK%2BOgV0ismFMmL%2BUh5g3axOZVv7PSpxkLXKVFn0WZTr%2Bv4BCM2K1rKEZbGT6t0AbvZ3VRMKRPCVwCS7pd9%2Bu5qhtmDjUY6aWnS%2Ff78Ta5OGh%2BOAIiFBsEiikJUmIDfH%2BFRsMAzbWKPW7XophM4tGN%2FXW0ocWGuoLPymFgh1qIvkI8jUPipQag4fRpRURIGBbhq70t2N4qUotOXLFgJOom0yzAJ9S0muf5aPFsXtGydHFMs%2FhFmGUqPzHe1KQm9YdSwMMglI5S23x3psDBY%2FHpFM%2FGHBJg8T7JGPHSxfY8H5Rvqla8OGPk6WCJAthrPP9ER2heVFQ5S2eWPPFXaNuw9%2BTCYmdXJBjqkAXCJ5JXR8LeFdVJk%2FUu7VKGS8FkSSRj0jYwf41NCO0324iRwku1Kk13WjNxULT%2BbDhOV9Ar9Ht0qlS8h50S3VHZESWrc9dmr1238ioJhdOhHYxbnJfOK%2FU%2FGtBtYVEfXEfWJLWBcBckt17t2Uh93k0rLzHPt6e%2F2BDK8pgvYqeKpUkR5hJPeQBIkLRa42QVs6CSxRM0lcyQCE0%2Fo9JilRQmMoGFY&X-Amz-Signature=851d2024b7c77f56e5396c16b1d77869b763ff08ce0b6f88cde72135f0954989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
