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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q73AMEXW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyn1MFIC%2FZN6OhhklFO3EICx7Cj9XMpKnzKNaLaTVKWAiEAn2z33g5Rqtv%2BRntCe55g80GYhxZkZwOhuenT5iPP5kIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGA6HcYFj9g4cQKryrcA6Hn3kJC4PALW3rLhp9lQ40VZ5N%2F5OwpwO0uGBkpv0IT1hWTINv%2BdozosMxF7GL1HHRNGir6uCGbvbCRrh50wd0bceTet4Lg1GfSBjUWl4xCICUL0aNtpl3l5Fj0RkTG5Rws58mWbpfHgh9B0uJJyoEGwQ3fHEmTC%2FOY1yU4Y2GRksojJBcgoEzKrpTo9aMP03KM9gShvoklsK0M07Y1CNH8d7bGj99j%2B4ecdUeIXj71JIBqAePFF8SY7%2FcM1%2BSt2g6ZPMSDsiLUk2MzVrDSyui6h%2B08Axq1hnsTqldgYuSUUmw7O5NaFH9bnnqy0E6XJ3hw1yZQGXTMNBJbifSb5SlQ3rMGWgONpJAP2dZvKhnu%2FU8w1NUQoXqGuy7mBvx%2BBKkLT2vNnp1gr%2BaT2sM3nEXBrmYVe2Nw33Czq8PahHa8wLzlGnbS8xqYH0iDQGcJ6ROgqTDeMIWPnq0H5fCd%2BvnHQpXt6r%2FURuQPEShKn3nAudTu3dIHGvAis2vtvsdtnRYQ5zwr1E78OaCkKIDMNGhs3VPNR%2Bk1xtCxB8FUgW79CyGK1gxXmoRwMwWs21pjpdZ3si7pkFASxNe5YxNBhRbTmzH2NccdqRjZGWm1uHWZiXzkWkiiPJ8raOocMMTt2ckGOqUBDRtvfnYffm58hLOxOI0kPkQrg9ZS0lWUz8fa%2BFZeI9s2SEbG3nIeb228Nor3feuPifwXwwtu6C4Edx3jNYe4CxFqAc4aLH8Fdy3pB7dfXpNak7oV1psmpTI2fEyKK2DvfnW67hxQROUyI5EpbxCsvEFa3beV9SNbMsx5BRhtE6iDM296wdBwwtPKtos2FdAoyRQn3FtGmo9EnF%2BW%2BuQ36sK%2BSGZd&X-Amz-Signature=e8c9a6d317088365e12f39589738a72416eae390b605a3fea82c581d23d16086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q73AMEXW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHyn1MFIC%2FZN6OhhklFO3EICx7Cj9XMpKnzKNaLaTVKWAiEAn2z33g5Rqtv%2BRntCe55g80GYhxZkZwOhuenT5iPP5kIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHGA6HcYFj9g4cQKryrcA6Hn3kJC4PALW3rLhp9lQ40VZ5N%2F5OwpwO0uGBkpv0IT1hWTINv%2BdozosMxF7GL1HHRNGir6uCGbvbCRrh50wd0bceTet4Lg1GfSBjUWl4xCICUL0aNtpl3l5Fj0RkTG5Rws58mWbpfHgh9B0uJJyoEGwQ3fHEmTC%2FOY1yU4Y2GRksojJBcgoEzKrpTo9aMP03KM9gShvoklsK0M07Y1CNH8d7bGj99j%2B4ecdUeIXj71JIBqAePFF8SY7%2FcM1%2BSt2g6ZPMSDsiLUk2MzVrDSyui6h%2B08Axq1hnsTqldgYuSUUmw7O5NaFH9bnnqy0E6XJ3hw1yZQGXTMNBJbifSb5SlQ3rMGWgONpJAP2dZvKhnu%2FU8w1NUQoXqGuy7mBvx%2BBKkLT2vNnp1gr%2BaT2sM3nEXBrmYVe2Nw33Czq8PahHa8wLzlGnbS8xqYH0iDQGcJ6ROgqTDeMIWPnq0H5fCd%2BvnHQpXt6r%2FURuQPEShKn3nAudTu3dIHGvAis2vtvsdtnRYQ5zwr1E78OaCkKIDMNGhs3VPNR%2Bk1xtCxB8FUgW79CyGK1gxXmoRwMwWs21pjpdZ3si7pkFASxNe5YxNBhRbTmzH2NccdqRjZGWm1uHWZiXzkWkiiPJ8raOocMMTt2ckGOqUBDRtvfnYffm58hLOxOI0kPkQrg9ZS0lWUz8fa%2BFZeI9s2SEbG3nIeb228Nor3feuPifwXwwtu6C4Edx3jNYe4CxFqAc4aLH8Fdy3pB7dfXpNak7oV1psmpTI2fEyKK2DvfnW67hxQROUyI5EpbxCsvEFa3beV9SNbMsx5BRhtE6iDM296wdBwwtPKtos2FdAoyRQn3FtGmo9EnF%2BW%2BuQ36sK%2BSGZd&X-Amz-Signature=18343266b430ea4bb331f9b5a77b79926c71c108b11615d47b934d864b29f8a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
