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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROZQ56PV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCy2gsww1ldHjJTkxFFyK4ceU6TPj1oKW2rvu4UqGAgfQIgV2Tezmy31Y0nbHQV1voZm%2B2ppAa4j%2Bljc%2BMCKh3P1KQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPcVA5mJ1UfSstGJUCrcAxJ3BuBHC8gl3dqj%2FnE4VJboJ44d8jezr17U6QqDDDGtE2uNCTBbdfDw1p6VkFjQqqNaLHjzxlU6OpmjwI3pP0GzQ6rdpG%2Bl5yHIiBvtppbHa8XKZQlLJWoD9UHchc0fNWrusk0b9kXIC%2Bkq5JFNVBF3EGr%2BgorMxjjAaVZ9LDpRU96P488gtXIZIdID83udIIN9HKVKwhUPifISDzZUpymeoOkiH72yQVteZw%2FAiI1qdY%2BkWLoj4zfGMnZhZfT%2BCXbtnVfFvRIQsvrwPxsKbgG5Vpa3upXkTa86R3oqVO3kdO3iz5YWwa%2FamISOsvJdSox6UpyGGFjRyNCg4B31lNHD4lAfvTDvfBhSjoffj%2BGAmfykH%2BP3OUIa5v9qUXgZ1y0RZdcAcg9pA%2FRaGdEKpXmoyeCsQclj%2FuJ6%2BhuINLFqQhIGJ9YPceWNHKVLkDrDPAKu6a26WjTTGBmb692ERmN1Mxpv9Fg4IOB6SVOuIT4183HlOMEji6mcj9pFmZvrUDWpidNq0F1p0qODkkiZYbjgVrSqfhdtNaVekNjAWSCFV3nhZC0mcw8wInWvnrP2O9Vja9VLVX%2BNkwPZ145Y9ALGU8XVAsHPBGCDDss3te8dWmhSijRo9oQFDd6wMKK1w8kGOqUBsex1SAqUZ4DWy1nUEhqe1jyPVu4%2FcAAB%2FEsVvibMaellSFjfqbcAAR034DecZfYL6QR%2FLfSuXfkt%2FOZgrGNaZrTMHeW9ZLXWHkh6TwKij4pnrBfBRgONqmbuUexMGJBwpGQ3iVEIOb8ScdbxGll40vuDMPgJYgzJvpAq3nVFZFSqd3aEgEoFVeObhLf3O5CqSIwlX%2FU7QQnKE2edUic%2Fko8vFlif&X-Amz-Signature=fe27ff215b6eb9ee1a344d26e284365194ae55e521dcb1b1eecf4469b4f62bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROZQ56PV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCy2gsww1ldHjJTkxFFyK4ceU6TPj1oKW2rvu4UqGAgfQIgV2Tezmy31Y0nbHQV1voZm%2B2ppAa4j%2Bljc%2BMCKh3P1KQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPcVA5mJ1UfSstGJUCrcAxJ3BuBHC8gl3dqj%2FnE4VJboJ44d8jezr17U6QqDDDGtE2uNCTBbdfDw1p6VkFjQqqNaLHjzxlU6OpmjwI3pP0GzQ6rdpG%2Bl5yHIiBvtppbHa8XKZQlLJWoD9UHchc0fNWrusk0b9kXIC%2Bkq5JFNVBF3EGr%2BgorMxjjAaVZ9LDpRU96P488gtXIZIdID83udIIN9HKVKwhUPifISDzZUpymeoOkiH72yQVteZw%2FAiI1qdY%2BkWLoj4zfGMnZhZfT%2BCXbtnVfFvRIQsvrwPxsKbgG5Vpa3upXkTa86R3oqVO3kdO3iz5YWwa%2FamISOsvJdSox6UpyGGFjRyNCg4B31lNHD4lAfvTDvfBhSjoffj%2BGAmfykH%2BP3OUIa5v9qUXgZ1y0RZdcAcg9pA%2FRaGdEKpXmoyeCsQclj%2FuJ6%2BhuINLFqQhIGJ9YPceWNHKVLkDrDPAKu6a26WjTTGBmb692ERmN1Mxpv9Fg4IOB6SVOuIT4183HlOMEji6mcj9pFmZvrUDWpidNq0F1p0qODkkiZYbjgVrSqfhdtNaVekNjAWSCFV3nhZC0mcw8wInWvnrP2O9Vja9VLVX%2BNkwPZ145Y9ALGU8XVAsHPBGCDDss3te8dWmhSijRo9oQFDd6wMKK1w8kGOqUBsex1SAqUZ4DWy1nUEhqe1jyPVu4%2FcAAB%2FEsVvibMaellSFjfqbcAAR034DecZfYL6QR%2FLfSuXfkt%2FOZgrGNaZrTMHeW9ZLXWHkh6TwKij4pnrBfBRgONqmbuUexMGJBwpGQ3iVEIOb8ScdbxGll40vuDMPgJYgzJvpAq3nVFZFSqd3aEgEoFVeObhLf3O5CqSIwlX%2FU7QQnKE2edUic%2Fko8vFlif&X-Amz-Signature=025d4979b513dd9400db227f474a8e5f0ef240483ee5e7375e0b496cc35d0f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
