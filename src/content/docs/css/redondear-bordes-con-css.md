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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YICEYUSP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4Q2QGC6thW6LPb9YVApTgLO77i4ESnb5gWLN%2BHWErIAiBlXua2iqdND4fsC%2BxDhK0FJDHu%2F2Eyaxr5Wj1oLo9MUCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMsTiFzFqmOC7YdOOnKtwDYUPMQUHjvKGJTQ4XBio8Hv8YbU1qmF1M5QF%2BTTRUqAzz8L1u2mojKpNfOq0DsNZwNN1WsD%2B5AQNdMKLC6cNAhFVObgIvKq1afc4SP4rmAvTJvy7%2FwxVwV1zBaaXhBGdy8s976yikUcVhJ1XcVCrdptvCHW1qyBm6aFZC28FX7m56k5S2TqW8R5sqvzUNxkVvGvOZ0coKGfQEcAW5F2P6Z2otwMIL57kZtATlDhGAugrQGaDZXwqQIqMoBEvn3C0A7lVzXhLb5TiHapWxvVIBWaDNz1tDGbiaoHg%2BDHMm7MJ8JKG0JnqMV9iv9ZkniFAE8QZE1q2g7CAevDh19o5D84QJtQyzIoc3cWelAEeEPl0iUhaUYIsymZVKBRr4eTr9OyKBieMCYu%2Bd55SsKtbJ%2Bw%2BCqi5okrPousD0DA2o2CgVfbbO6tg41ZAs9PmzbxI539BfKR89ablI2NBSx%2FO8sKYtLxit2KQLaroOY1pvSnUJv0PjBJlW9Zs6BWYhE0lAP5EWUOkp9SB9owo1foyWTsdeAXhQ%2BtsT%2FPnnTk3of5HFlYKOMTINT6u%2BVw2KWIH6wuPJjeLmt8gslN5SFmvV2CdRH61aRQZ3lOxqPDhgT0LdaDaItOLGKAyYsi8wssbNyQY6pgGkhffkBUP2yV%2FJ03lnk99EroEX4OO1fs44vrSlFp%2BUiVxUjt38LspW5fRj%2F%2BHQsaocz8OGdzwAgXN%2FkfeG72m3BDkj2L5Yql25m21LPPxUc6%2FAPU%2BpsvoA00JdRR4q4xybB6nAoTb5dZK5pWcw5bgOx4Gu%2FBPGlZEOMnjHjT8AWsC20gM156ihYkJ1qLNlSS3WJ3jDZHv0AivKUi8rlUJiidkT1wsg&X-Amz-Signature=faab74ad91d9b75d3d14a4f08dea359ea32ad2c7576dfd287d30e374297f2139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YICEYUSP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4Q2QGC6thW6LPb9YVApTgLO77i4ESnb5gWLN%2BHWErIAiBlXua2iqdND4fsC%2BxDhK0FJDHu%2F2Eyaxr5Wj1oLo9MUCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMsTiFzFqmOC7YdOOnKtwDYUPMQUHjvKGJTQ4XBio8Hv8YbU1qmF1M5QF%2BTTRUqAzz8L1u2mojKpNfOq0DsNZwNN1WsD%2B5AQNdMKLC6cNAhFVObgIvKq1afc4SP4rmAvTJvy7%2FwxVwV1zBaaXhBGdy8s976yikUcVhJ1XcVCrdptvCHW1qyBm6aFZC28FX7m56k5S2TqW8R5sqvzUNxkVvGvOZ0coKGfQEcAW5F2P6Z2otwMIL57kZtATlDhGAugrQGaDZXwqQIqMoBEvn3C0A7lVzXhLb5TiHapWxvVIBWaDNz1tDGbiaoHg%2BDHMm7MJ8JKG0JnqMV9iv9ZkniFAE8QZE1q2g7CAevDh19o5D84QJtQyzIoc3cWelAEeEPl0iUhaUYIsymZVKBRr4eTr9OyKBieMCYu%2Bd55SsKtbJ%2Bw%2BCqi5okrPousD0DA2o2CgVfbbO6tg41ZAs9PmzbxI539BfKR89ablI2NBSx%2FO8sKYtLxit2KQLaroOY1pvSnUJv0PjBJlW9Zs6BWYhE0lAP5EWUOkp9SB9owo1foyWTsdeAXhQ%2BtsT%2FPnnTk3of5HFlYKOMTINT6u%2BVw2KWIH6wuPJjeLmt8gslN5SFmvV2CdRH61aRQZ3lOxqPDhgT0LdaDaItOLGKAyYsi8wssbNyQY6pgGkhffkBUP2yV%2FJ03lnk99EroEX4OO1fs44vrSlFp%2BUiVxUjt38LspW5fRj%2F%2BHQsaocz8OGdzwAgXN%2FkfeG72m3BDkj2L5Yql25m21LPPxUc6%2FAPU%2BpsvoA00JdRR4q4xybB6nAoTb5dZK5pWcw5bgOx4Gu%2FBPGlZEOMnjHjT8AWsC20gM156ihYkJ1qLNlSS3WJ3jDZHv0AivKUi8rlUJiidkT1wsg&X-Amz-Signature=df4574f43dd335f9ca2630539f2984a98a81560465455debdba959fd2a795036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
