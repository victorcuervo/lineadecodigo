---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5AH5E4F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCORN5aww%2B6Xd9AZ7yhnYjRjV8dxY4oWZfDdPQ7R4hHggIgA83jVdv7N61XQMfMHIjcu22P6ozESZsgm43ZFvcwsDUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMT%2FvgB1AjPpNDdqJCrcAywcPIqdqrb1MNZ5%2F%2Bl%2BBQ98mDSrPo83%2BFiWBHXfDj8g9CDUjod9MHL0KhJwVIdeZg82RC%2F0hmMRGxWQKknAeY%2B0e9KSnhXAcUWYDqqLvhvVq5Vp1p3cZa7wHl%2B1IfCXBfORzIMvQcDc3gNiEM3bJjIdM62fufOSkjSVd0ZOZYHW73p32TmUGolWe1IWF8MZ376nDk9BW8FsfiJz3swbWYbHQr3kzYKo4N58DkcPgUfpy1KQx6%2BdomppHx6cGeh7JZrE2pEQ41ZXP41pp5AgqJ08w4H6kZ98QS780QV9HsbvLoVEQy1PH%2FGBVXE7IsZEUI2Mv3Kv%2F6NsFkZFgi%2Bqr35Nuz8LVwH%2BNVJcW1WdKJvvrnUJFyBNRj9VfOCscKMpPIVWYSwr%2FxL9b%2BZ2feoo4N3IDOYM7jzyNSGBD5WqGoB0Kff57n0W%2FM4XMOgRm3gOed%2Bn1iBbFQts16wTAbf4K73O4IxbQQoLdjVRV26e3IgsNFA4cpOyz07ojjsu4veNoU27t1qnvX25vyoIZzXsnYWbtJ0plu1WUjGh80LyNA%2BTA%2FgJTqRCW5hWZW%2Bpa1cqUZw4O9JcuN%2BkvFhtv2nIIhd9oN51QRMqp0s34BgzWryr7Lp7ber60XsbI4mZMNf4wskGOqUBUd5E%2F6xFWv80h%2FSseCFH7UQTgzfuV4U%2FDfX5d4xmZOLFBSEVAu%2F8KtrtyLKS6VRxw0xiDHaoJlWX%2FVgdr%2F15HyWxPNbMMgFGa852FwbJVv9J6Dih64CNev5dMvJH0wsC5xJaSn0riATUFxzNq90Q9VlVEQQipDJWT%2F%2BP7daDUO2lLut5%2FjXnpsGjSUqmLUsrHbeKt9SlFqPPaqbYJpkh3zCX%2FKcV&X-Amz-Signature=05a1e2c88943e6158fe6204553407b918c1379b6b691fe9cfde36d226241adec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5AH5E4F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCORN5aww%2B6Xd9AZ7yhnYjRjV8dxY4oWZfDdPQ7R4hHggIgA83jVdv7N61XQMfMHIjcu22P6ozESZsgm43ZFvcwsDUq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMT%2FvgB1AjPpNDdqJCrcAywcPIqdqrb1MNZ5%2F%2Bl%2BBQ98mDSrPo83%2BFiWBHXfDj8g9CDUjod9MHL0KhJwVIdeZg82RC%2F0hmMRGxWQKknAeY%2B0e9KSnhXAcUWYDqqLvhvVq5Vp1p3cZa7wHl%2B1IfCXBfORzIMvQcDc3gNiEM3bJjIdM62fufOSkjSVd0ZOZYHW73p32TmUGolWe1IWF8MZ376nDk9BW8FsfiJz3swbWYbHQr3kzYKo4N58DkcPgUfpy1KQx6%2BdomppHx6cGeh7JZrE2pEQ41ZXP41pp5AgqJ08w4H6kZ98QS780QV9HsbvLoVEQy1PH%2FGBVXE7IsZEUI2Mv3Kv%2F6NsFkZFgi%2Bqr35Nuz8LVwH%2BNVJcW1WdKJvvrnUJFyBNRj9VfOCscKMpPIVWYSwr%2FxL9b%2BZ2feoo4N3IDOYM7jzyNSGBD5WqGoB0Kff57n0W%2FM4XMOgRm3gOed%2Bn1iBbFQts16wTAbf4K73O4IxbQQoLdjVRV26e3IgsNFA4cpOyz07ojjsu4veNoU27t1qnvX25vyoIZzXsnYWbtJ0plu1WUjGh80LyNA%2BTA%2FgJTqRCW5hWZW%2Bpa1cqUZw4O9JcuN%2BkvFhtv2nIIhd9oN51QRMqp0s34BgzWryr7Lp7ber60XsbI4mZMNf4wskGOqUBUd5E%2F6xFWv80h%2FSseCFH7UQTgzfuV4U%2FDfX5d4xmZOLFBSEVAu%2F8KtrtyLKS6VRxw0xiDHaoJlWX%2FVgdr%2F15HyWxPNbMMgFGa852FwbJVv9J6Dih64CNev5dMvJH0wsC5xJaSn0riATUFxzNq90Q9VlVEQQipDJWT%2F%2BP7daDUO2lLut5%2FjXnpsGjSUqmLUsrHbeKt9SlFqPPaqbYJpkh3zCX%2FKcV&X-Amz-Signature=1744c1cde370718001ea63d84f0739a34a9d0c60a1ce53990013a91c8ef584e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
