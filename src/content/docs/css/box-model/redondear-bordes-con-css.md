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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KC3RMXX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDijpNjFejmKUAoXwJ8oFTGCwkkkryV3HLT7XVTfetoZgIhALq%2FHShFb2pKx7oGkADSIdeC%2Bpb0bEYmf%2BOO%2BEw3V7%2FKKv8DCHIQABoMNjM3NDIzMTgzODA1IgwALg%2Fj3omh6sW73b4q3AO27j3qmkoEQl5alio3qK%2Fj5W9CB8JTNEFbYz5qROcW61SdfAceRQJZy3ZG0DKA2BNdKt9bVzYQgsxhVP12qnDGNrKsIzWkph6kn9uIR4jYyCbUAoXct%2BkeR2NIhaS%2FZB5vNKKLFp7jMy5ZM0tn%2F%2FuwVtBEHerD9gNpy41xQlguVe%2BHWi36KgpUqRqZpoQFxizf4PDMjyhC2f%2FUx%2BMTUSAZ4e3TGaxCzNYDsP0%2F3P%2BDgR83DgCzqx0AFOT0E6pLP%2F2ML5Ic65Mwf8cZkUE0k2JMYoMHpsb8gtHV2EzZfnTUgOBl9ppRIrGaGlRo2Jb0h1GDExWTphtwcx%2BRqj975uOfsnTU%2BP41TJ0bl7hhmwWE6ru2WPjlWKJQ6OiBYogakG0RVUE27DHtI%2FaOuSnmoW1VVLs205sbm3sjiuYSRvFkZEmObzi5UydhSMDuzqAjDAqKiVJYz%2BxP7gRs69ifSA5pqQinGGsWjEC5MdIEp2KkNZEpVjWWRNRj4merTezjsIgini%2B8uMvais484fnjoxj5NyDLlDTJskQ3ZSi3O7GF90WPgdZLyGZYQN0vDYbyMD9eXQq8kmB4NcfjJs1Q2j%2FZN%2B6CTr4kAivE7HtnWyYgzwqQMBltk4YNSGvqBTCr%2BofKBjqkAVc6VU6UVDzxJSQd5R9ww5Wvku4BAT%2FJz1%2BtPwKQyDrIKZrumREjsLiMcVgjMXYT1U%2B7vXjK6%2BRjbGtxBmeLaiR6cqlo1BLyRniLndl0CVDD1e1XrTepty5%2BQ8GKrVZJRLymEJgoaZwhYETvofpVifXLV0iRpXNmbl%2FULOIUXwt9EvgkwR7hAwExU8rYQQnOQeKDkOLIej1KZBB%2BRs66Ge3MXKAp&X-Amz-Signature=b0d676aba8a4de7595eabade8fffc47a5a694e628f44e7c10caba2af31baaffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KC3RMXX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDijpNjFejmKUAoXwJ8oFTGCwkkkryV3HLT7XVTfetoZgIhALq%2FHShFb2pKx7oGkADSIdeC%2Bpb0bEYmf%2BOO%2BEw3V7%2FKKv8DCHIQABoMNjM3NDIzMTgzODA1IgwALg%2Fj3omh6sW73b4q3AO27j3qmkoEQl5alio3qK%2Fj5W9CB8JTNEFbYz5qROcW61SdfAceRQJZy3ZG0DKA2BNdKt9bVzYQgsxhVP12qnDGNrKsIzWkph6kn9uIR4jYyCbUAoXct%2BkeR2NIhaS%2FZB5vNKKLFp7jMy5ZM0tn%2F%2FuwVtBEHerD9gNpy41xQlguVe%2BHWi36KgpUqRqZpoQFxizf4PDMjyhC2f%2FUx%2BMTUSAZ4e3TGaxCzNYDsP0%2F3P%2BDgR83DgCzqx0AFOT0E6pLP%2F2ML5Ic65Mwf8cZkUE0k2JMYoMHpsb8gtHV2EzZfnTUgOBl9ppRIrGaGlRo2Jb0h1GDExWTphtwcx%2BRqj975uOfsnTU%2BP41TJ0bl7hhmwWE6ru2WPjlWKJQ6OiBYogakG0RVUE27DHtI%2FaOuSnmoW1VVLs205sbm3sjiuYSRvFkZEmObzi5UydhSMDuzqAjDAqKiVJYz%2BxP7gRs69ifSA5pqQinGGsWjEC5MdIEp2KkNZEpVjWWRNRj4merTezjsIgini%2B8uMvais484fnjoxj5NyDLlDTJskQ3ZSi3O7GF90WPgdZLyGZYQN0vDYbyMD9eXQq8kmB4NcfjJs1Q2j%2FZN%2B6CTr4kAivE7HtnWyYgzwqQMBltk4YNSGvqBTCr%2BofKBjqkAVc6VU6UVDzxJSQd5R9ww5Wvku4BAT%2FJz1%2BtPwKQyDrIKZrumREjsLiMcVgjMXYT1U%2B7vXjK6%2BRjbGtxBmeLaiR6cqlo1BLyRniLndl0CVDD1e1XrTepty5%2BQ8GKrVZJRLymEJgoaZwhYETvofpVifXLV0iRpXNmbl%2FULOIUXwt9EvgkwR7hAwExU8rYQQnOQeKDkOLIej1KZBB%2BRs66Ge3MXKAp&X-Amz-Signature=79ecf43ca92b2fe394bbaf985653c064d4f60bf2bc97da59e2a92dfc75c7a399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
