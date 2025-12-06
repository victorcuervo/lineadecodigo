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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YZ76MK3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGag6VL3%2Fq7VDsTzXa7OWcL8BjTINWolwQRyKLUH7Z7eAiB7QvM1Nu71jxHvr5SFXR%2FOaTo53lRpqO79O5rxTPzsTCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTYmaaOrdC8fS0S03KtwDEHf58bbvK0IpCInMwu720CXYfz%2BdxwpcaWf1KAvuJpqXrxX88WT%2BQueG2yOkCL3RwjFHtldsjF9KpW6Mo0bKN8OcMFv%2Fb9i%2FMiV7ei5HmEURtmS7tvfP74Ll39DzDKy20O%2FrIEEV9nPK34acPLX%2BXq8go2GawQi10U8ik3DhNZtTMLV49OXhA7XkUfO0DYkWD5OkkZ4O0ZxZxefsKgXhVa%2Fe1foVjwuy9WfVwGrDUE7zH5UeqGwHPPCJtmVgAUcyTMxKr5IkntvjgL%2F1Nk4hjbcljaD9Nq9rwyklF%2FjOe%2B5EcBn5tsBGWrE%2BcJ4ZWNV7pekZTEXa7NeUGj%2BSvlOc3NPKoM9WtbeZaKCusYDNp3e1nn5zaXTvLjljtEEFqu0%2BscII1RnarTBH8dmBDF4nwaax4Q7m0fx7z8RhfctHyNzERFrdFXV9aG9tij7qrmUqwImfOrGG%2FAqw8L4lPytVDuBgWt%2FPfn0k44TUdinRn1RMxtxfoh8XJpw1FXoNKelDX4bR4Lz0YU4wV5uNQkwqlXHufKZO4ZVKtdCSEXA2fxTDgP6z2eFrmYcWA5G%2BF%2FYb9UIpb6LE2LO01kg4qMSOfLy8cVNqCJ9V8JPw1drnO%2FkqDNsC2HyJKO2QFKgww8nRyQY6pgEc8gn7iMYSa8fsITdSvxTQOtGpHU4QKPvCFW4jQD1pTV1cY%2FnQ%2B90puLe8myE0tXqrFWpMQR1vbqL5fHVZoJKD%2FOo2hEPIAtZ5xJTwcVfBdF8VUV4MZGqRs9bq7%2F%2Be3wClHcteBInCfdr5AaaSSraT7mQl93daawXVJlYSjNd%2FLAJgK0NqQAxLhw6VZLMaWDjK0UlKY2UbmZ63o9vIDegzsDhqqk7S&X-Amz-Signature=7fd49230423ad01d3aaeaf88966eaa26e72ad206c00b18f2a1871334749cb505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YZ76MK3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGag6VL3%2Fq7VDsTzXa7OWcL8BjTINWolwQRyKLUH7Z7eAiB7QvM1Nu71jxHvr5SFXR%2FOaTo53lRpqO79O5rxTPzsTCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMTYmaaOrdC8fS0S03KtwDEHf58bbvK0IpCInMwu720CXYfz%2BdxwpcaWf1KAvuJpqXrxX88WT%2BQueG2yOkCL3RwjFHtldsjF9KpW6Mo0bKN8OcMFv%2Fb9i%2FMiV7ei5HmEURtmS7tvfP74Ll39DzDKy20O%2FrIEEV9nPK34acPLX%2BXq8go2GawQi10U8ik3DhNZtTMLV49OXhA7XkUfO0DYkWD5OkkZ4O0ZxZxefsKgXhVa%2Fe1foVjwuy9WfVwGrDUE7zH5UeqGwHPPCJtmVgAUcyTMxKr5IkntvjgL%2F1Nk4hjbcljaD9Nq9rwyklF%2FjOe%2B5EcBn5tsBGWrE%2BcJ4ZWNV7pekZTEXa7NeUGj%2BSvlOc3NPKoM9WtbeZaKCusYDNp3e1nn5zaXTvLjljtEEFqu0%2BscII1RnarTBH8dmBDF4nwaax4Q7m0fx7z8RhfctHyNzERFrdFXV9aG9tij7qrmUqwImfOrGG%2FAqw8L4lPytVDuBgWt%2FPfn0k44TUdinRn1RMxtxfoh8XJpw1FXoNKelDX4bR4Lz0YU4wV5uNQkwqlXHufKZO4ZVKtdCSEXA2fxTDgP6z2eFrmYcWA5G%2BF%2FYb9UIpb6LE2LO01kg4qMSOfLy8cVNqCJ9V8JPw1drnO%2FkqDNsC2HyJKO2QFKgww8nRyQY6pgEc8gn7iMYSa8fsITdSvxTQOtGpHU4QKPvCFW4jQD1pTV1cY%2FnQ%2B90puLe8myE0tXqrFWpMQR1vbqL5fHVZoJKD%2FOo2hEPIAtZ5xJTwcVfBdF8VUV4MZGqRs9bq7%2F%2Be3wClHcteBInCfdr5AaaSSraT7mQl93daawXVJlYSjNd%2FLAJgK0NqQAxLhw6VZLMaWDjK0UlKY2UbmZ63o9vIDegzsDhqqk7S&X-Amz-Signature=de4d5305be122b81721ec464bb1a9fda42ff282274d2b0a40f36df21ed7a9fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
