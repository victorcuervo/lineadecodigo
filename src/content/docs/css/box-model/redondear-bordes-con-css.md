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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLFZXSC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChoj6wagceIxMxsS5W8j8ap1G1gGzmNbAPaxeKmjNx2AiAG5XdhbaKJWx0q%2FgCEBT%2F3ozzjPSnzdznAu8C8WnWN7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEapWfzP3JWswjcLmKtwDPXQqfYiEyBzitl55rwFpbwF9qbunH8OL5E%2FCc5bcUj2djCykzhyguW27HWfx9uxtTqjL0mcI06Ri56bph76ym4SlnCPVsl9H7LuFH63QHDSAvYr9Fqo8AgnwjUruP6ny0yLsONHF4eyQ3hGoTOGfYEBbw69spy2GHtSYVotXwXR%2BFswXIKfCCP84D7SFki%2BIY04Vk9fUuHe7EcYbhYq0lfVK8nvV3ot7iiZimrT1rYcKN2LjrBOgwUM78lraSZDlqgPLl%2B2f4XzfeoKv%2Fy7rOW5BEwtR9co6MhBmosDUS7km1ZcG%2BnnxmuQSpX2EZsx7tecFWiwyQ6BItAP8hQerl7mCqxU1LxtKcVwnrpkg6Hxdicx3ZOISI8gLOSJKrxEfWq95REFywtCDmT0G%2BG3T%2B6P%2FLE8Kd1Oz5yMs1CdEgTJghwYgmmLw1lhwHQtE29eEUdwnCn8v%2FHXF%2BSPJ78g8%2BKpBblAzbvnbTGO0zr%2B7F7MWw6XK9crx8EOw90pQVfy80gCGoHqiDSo6p3yv0uCVT3WvqCDkbfX%2FNgODHnTwP0SIwZZdmzE6rzz8KWxEGAbN4REIrAMv72STd9sjedrv1%2FIqRwypJYHdz8SOK0TdRNd5l3TeK58x6F06rHkw8Z6LygY6pgG4M2TcUegPgkVUClVSjkKn541NuguQP9iYkpQ%2Ftqx4fGiQySEUBNbSCN%2Fo9hTHpEOuldU%2FyzbB%2Bhqiv5DBVJqyVBGO9Do6LWDZ16SBXzErlL8a43wUMPuaVOyCt8lyNSdy0k0NYzi34ubYlpMH7pOuykMW6z4zQJABTrGxtIRUgnZyBUGO62g4MumDRqRJC6v52Gnltc7%2FLk6nOWii1nRwXLK9S7N7&X-Amz-Signature=01ca11a2c2d4958c6959f5f2561882fb3bfa38df16601a7ae696b7e7d7f7c64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLFZXSC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChoj6wagceIxMxsS5W8j8ap1G1gGzmNbAPaxeKmjNx2AiAG5XdhbaKJWx0q%2FgCEBT%2F3ozzjPSnzdznAu8C8WnWN7yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEapWfzP3JWswjcLmKtwDPXQqfYiEyBzitl55rwFpbwF9qbunH8OL5E%2FCc5bcUj2djCykzhyguW27HWfx9uxtTqjL0mcI06Ri56bph76ym4SlnCPVsl9H7LuFH63QHDSAvYr9Fqo8AgnwjUruP6ny0yLsONHF4eyQ3hGoTOGfYEBbw69spy2GHtSYVotXwXR%2BFswXIKfCCP84D7SFki%2BIY04Vk9fUuHe7EcYbhYq0lfVK8nvV3ot7iiZimrT1rYcKN2LjrBOgwUM78lraSZDlqgPLl%2B2f4XzfeoKv%2Fy7rOW5BEwtR9co6MhBmosDUS7km1ZcG%2BnnxmuQSpX2EZsx7tecFWiwyQ6BItAP8hQerl7mCqxU1LxtKcVwnrpkg6Hxdicx3ZOISI8gLOSJKrxEfWq95REFywtCDmT0G%2BG3T%2B6P%2FLE8Kd1Oz5yMs1CdEgTJghwYgmmLw1lhwHQtE29eEUdwnCn8v%2FHXF%2BSPJ78g8%2BKpBblAzbvnbTGO0zr%2B7F7MWw6XK9crx8EOw90pQVfy80gCGoHqiDSo6p3yv0uCVT3WvqCDkbfX%2FNgODHnTwP0SIwZZdmzE6rzz8KWxEGAbN4REIrAMv72STd9sjedrv1%2FIqRwypJYHdz8SOK0TdRNd5l3TeK58x6F06rHkw8Z6LygY6pgG4M2TcUegPgkVUClVSjkKn541NuguQP9iYkpQ%2Ftqx4fGiQySEUBNbSCN%2Fo9hTHpEOuldU%2FyzbB%2Bhqiv5DBVJqyVBGO9Do6LWDZ16SBXzErlL8a43wUMPuaVOyCt8lyNSdy0k0NYzi34ubYlpMH7pOuykMW6z4zQJABTrGxtIRUgnZyBUGO62g4MumDRqRJC6v52Gnltc7%2FLk6nOWii1nRwXLK9S7N7&X-Amz-Signature=4c58d7ec466441eb253d6536ad19da304abd60e32e6112a21164fb98fad3dddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
