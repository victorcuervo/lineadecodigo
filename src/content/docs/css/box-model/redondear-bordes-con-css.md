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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466554CYAXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCKJAGK3%2FIv6Wf9sjFBNeHLPKxwncWlk%2B60SkGklT54gIgQFeceHp9jj21OEcvmBL12tyvHvUHObiEcq7P1reVmb8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG09WplHJ2Y3eZqbCircAy9RTW94JjJKGuV4fqk79fWGeV7whnbucQeo3QvfLDczuemh0sk%2B5RW2C7zEwKwQrJKGI7m21dbhSb8KsRe9MMw6yJE%2FZpEB7aS9%2Bo1zQ6P23GsKZGuQubqyAjfE281ngPJ6Fkj%2FT2GViYM6l4SoBKSGeZQdJsEdYEyj5b%2FfZYTIKu9UQBupe5IuHbtOCZawxXzvXNSmGTqzUCS%2BKewxaR5CX%2B%2Bi9C3%2Fkra7mA6H5xxUVQkyBdB2YGWHjSsmAAQknJohqkuH1EsV3mOlz354AFHw1gY3BFM4w2gfONzfJUSUDZAoF%2BpIoCWYO7Pff1XDUd2IeBet1nvdm7RlvM5zs3fdkeH0Y86ZIq8jhLSRURi%2FJzn7GKnx2lu9iZbRhLIXEseRv7LPmtziuA5bg4g4yEdnuXGCJeXv1wbY2J9Vyz1nAYNmd1vqi7Hyv2Czn1QwTKStJhVmUB1Qaf7F4hts2BYexUrl5aJCtq6qU0WITw3PjOdZ0U2BskmZegeGjuaM6yxBQ9S85zTpMmGH450l%2BJeErPiIVKyqEUP5acyiwe68g%2FrPCDxQcnk71%2B2nlcYGAKTZbY3t%2Fyl5IzS7%2B6dsWw21CVMfKRqfNHovlmHjPi%2FM1pKA4c14Oby5IDRIMKGqisoGOqUBMym1WMdGlgz7M1bc2BNeF5MMG98GEoLJQ0gmEqk5RbiIlzjq1c7JrttKg8C0BZH4gVYrpTuGgcGvxpkYkJsgVFUzVm4Ehitm7p%2BymFZ5SbhnTxIUTch7A%2BZ0EbOFMSWXK0yFV7OIYTcvy4Os74YHilLN1ov6wgrLk6dHEU4uDgmH%2F3jXjn6jWMGzX21uue%2FTUlc6d7g98qleGDPG%2FqoV2shUySx3&X-Amz-Signature=85ec4e3013b3eee1ed6aad73a4d5643491d53d9667cd041380625c1066ff61b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466554CYAXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCKJAGK3%2FIv6Wf9sjFBNeHLPKxwncWlk%2B60SkGklT54gIgQFeceHp9jj21OEcvmBL12tyvHvUHObiEcq7P1reVmb8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDG09WplHJ2Y3eZqbCircAy9RTW94JjJKGuV4fqk79fWGeV7whnbucQeo3QvfLDczuemh0sk%2B5RW2C7zEwKwQrJKGI7m21dbhSb8KsRe9MMw6yJE%2FZpEB7aS9%2Bo1zQ6P23GsKZGuQubqyAjfE281ngPJ6Fkj%2FT2GViYM6l4SoBKSGeZQdJsEdYEyj5b%2FfZYTIKu9UQBupe5IuHbtOCZawxXzvXNSmGTqzUCS%2BKewxaR5CX%2B%2Bi9C3%2Fkra7mA6H5xxUVQkyBdB2YGWHjSsmAAQknJohqkuH1EsV3mOlz354AFHw1gY3BFM4w2gfONzfJUSUDZAoF%2BpIoCWYO7Pff1XDUd2IeBet1nvdm7RlvM5zs3fdkeH0Y86ZIq8jhLSRURi%2FJzn7GKnx2lu9iZbRhLIXEseRv7LPmtziuA5bg4g4yEdnuXGCJeXv1wbY2J9Vyz1nAYNmd1vqi7Hyv2Czn1QwTKStJhVmUB1Qaf7F4hts2BYexUrl5aJCtq6qU0WITw3PjOdZ0U2BskmZegeGjuaM6yxBQ9S85zTpMmGH450l%2BJeErPiIVKyqEUP5acyiwe68g%2FrPCDxQcnk71%2B2nlcYGAKTZbY3t%2Fyl5IzS7%2B6dsWw21CVMfKRqfNHovlmHjPi%2FM1pKA4c14Oby5IDRIMKGqisoGOqUBMym1WMdGlgz7M1bc2BNeF5MMG98GEoLJQ0gmEqk5RbiIlzjq1c7JrttKg8C0BZH4gVYrpTuGgcGvxpkYkJsgVFUzVm4Ehitm7p%2BymFZ5SbhnTxIUTch7A%2BZ0EbOFMSWXK0yFV7OIYTcvy4Os74YHilLN1ov6wgrLk6dHEU4uDgmH%2F3jXjn6jWMGzX21uue%2FTUlc6d7g98qleGDPG%2FqoV2shUySx3&X-Amz-Signature=18b48c8ba92b0d57be8aa28ba1e801d47e1858d677f7da7247e5fb4e445718b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
