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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627U2JPYW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkKBfxMzhfRGVjdg75h%2Fa5TkWDUQvsF4lKTAedrbv2IAiBCA026NDD9TG188CGIf1MCtjFNKEXdMipDZimBQL4Ymir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMbF8krzyyEbUzmKVaKtwD5iCK7kok364LZUjJ0E6jr%2FkB7jUys0srAMdoVwrIsTT7keeh88O5lFEoT%2F2YB6y8pHQZNumi%2FKpZeS9wWIC2hJwv4sQYPZEZjnrOGmLrT8Nzp44ZrxdtM%2BbJ1P1mX81JfcMil9DvOj4ZtcTYtXvzrUVggF1W2zgXudABzwdxUJ1rm8Nv3TIPjMxKJpg0g4ulD1VJzgi2bfdWFkj%2FT7o4Yk1H0U6YfFLjW4ek108xSUruhpJc5xp7a2VMjRjIkcOTS8rxpdTF5%2BDVDNcmC%2F5bx6M8Otds1FT5Ia%2BmDOXWPzQMqH0G%2FyGAWmd8Hg2muC2dXJzNHnJ%2BfDRT5QOMmfVkGLFxlR22cnIj0xlJ1lw7ZMsBw%2Fu0yQRkjEzuHcVYivXlDlZpDRdD8zukXPVR20qoM5QBQBjGaCeJAAhTjza21JARgE0lXJwu2UYgxg%2Bs9RCzQNc2VFB6jv%2Bswm9TKaqCMd2qBrS3aX8nlKqp659h0WpCxCrw4EK3a2L1iiHKFQMGWNt1jpgIdcQMLbtG%2Brkef66kCbUo9XOd%2BMbP%2Bl5NodKKK3gLIhb3sx%2FUHxVDBxnJKLsr5%2BVZp8JsYXEA%2FvTfJaM3HEgGp9ugpwgl1BFx4pHAS9Yx3I4k62hvceEwgafQyQY6pgHvqo1QD4UJtPbe8s3ase5%2BQbOMIkayVgYYvCLXCgpmIeZtLWq9JkqCgJE4oSSzV9ZFMbIPc%2FMQRROk9Nrpd2jgUtyoD%2FdqzqOsAbr3mB6J6Bi2h3KZwxi%2BBcp0%2FCHfm0OtqYIkJj0C5LztAkNNtYL3JZFSppov%2FDufMW2nWJbDqRYeoV7A30tf%2FMkIxmvdTbQLklFyI8NE%2BBp3aobv3cLtYB5zRs9v&X-Amz-Signature=39d6d77ffc0fa38d71d46db07896f5f194a8bc35a38e71a0104b7e1b409d51fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627U2JPYW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T142657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkKBfxMzhfRGVjdg75h%2Fa5TkWDUQvsF4lKTAedrbv2IAiBCA026NDD9TG188CGIf1MCtjFNKEXdMipDZimBQL4Ymir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMbF8krzyyEbUzmKVaKtwD5iCK7kok364LZUjJ0E6jr%2FkB7jUys0srAMdoVwrIsTT7keeh88O5lFEoT%2F2YB6y8pHQZNumi%2FKpZeS9wWIC2hJwv4sQYPZEZjnrOGmLrT8Nzp44ZrxdtM%2BbJ1P1mX81JfcMil9DvOj4ZtcTYtXvzrUVggF1W2zgXudABzwdxUJ1rm8Nv3TIPjMxKJpg0g4ulD1VJzgi2bfdWFkj%2FT7o4Yk1H0U6YfFLjW4ek108xSUruhpJc5xp7a2VMjRjIkcOTS8rxpdTF5%2BDVDNcmC%2F5bx6M8Otds1FT5Ia%2BmDOXWPzQMqH0G%2FyGAWmd8Hg2muC2dXJzNHnJ%2BfDRT5QOMmfVkGLFxlR22cnIj0xlJ1lw7ZMsBw%2Fu0yQRkjEzuHcVYivXlDlZpDRdD8zukXPVR20qoM5QBQBjGaCeJAAhTjza21JARgE0lXJwu2UYgxg%2Bs9RCzQNc2VFB6jv%2Bswm9TKaqCMd2qBrS3aX8nlKqp659h0WpCxCrw4EK3a2L1iiHKFQMGWNt1jpgIdcQMLbtG%2Brkef66kCbUo9XOd%2BMbP%2Bl5NodKKK3gLIhb3sx%2FUHxVDBxnJKLsr5%2BVZp8JsYXEA%2FvTfJaM3HEgGp9ugpwgl1BFx4pHAS9Yx3I4k62hvceEwgafQyQY6pgHvqo1QD4UJtPbe8s3ase5%2BQbOMIkayVgYYvCLXCgpmIeZtLWq9JkqCgJE4oSSzV9ZFMbIPc%2FMQRROk9Nrpd2jgUtyoD%2FdqzqOsAbr3mB6J6Bi2h3KZwxi%2BBcp0%2FCHfm0OtqYIkJj0C5LztAkNNtYL3JZFSppov%2FDufMW2nWJbDqRYeoV7A30tf%2FMkIxmvdTbQLklFyI8NE%2BBp3aobv3cLtYB5zRs9v&X-Amz-Signature=8034f22eb168fb210e5442b93ef59e4990fee06309a5e664d11c307598816d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
