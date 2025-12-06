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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF3TJVMB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUryQyOWB2E6wo7u%2BTwakcdSHWl45MX60MkqBL7gzT7AiBs6WhD9%2B1SzFS8dRFKvabFdUTo8aWZg05aRE%2FTKtNYVyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMpifI%2BZS5Ij%2FdTeosKtwD54qoLePZrIS9qyvL%2FyQRYzizHcTyqAmmfcqOl773sibE62XcxK35KDY8Z5KWkdGDv7bnNyUdrufmeUXlT0TVIS52ys8LxLF4jaw6FtSmZ8Qv%2BLLoqb4xUjAH4Km%2BQX%2FINZISy3EcIO6HMsC2G9CbVTRwYS5extXyP0Z8hdmoKrUUYarSU4NG7vKwi0SXyPgh5w%2B0DShKsOZR7eW4Ui6%2FOocSNG6pZ0FDGkNRX1Nun7j66Wy520SZxtxtyaygAdQlhlcV9aG3ZvRwIHg2KixZ%2BHiAOiByX8hcBXzPE0%2BRpw2k0sXANcLmG9xYe57aMQtf3wbGIxDgz1eVWplIAB8d1tIs08toqaM2MKDWN0lV%2BP4gSUceBxqWeUU8WNNth6zCO93R1lkxCPV0GcelFqB7p69v2dIXMSBWe81vvvNj9GyVp%2B3FnphzXEGlvWVsMTpsp20sig1V%2FywOjrMog6geKhF4uTJ%2BZUpn31WSp1Nn5%2Bk9XVnNt1k7RNUWPXjzW6sYlghaP5To4bJSdbHetLv14qIVBKWz4L5ectE%2FQhAg%2FHNbKi2I7mQ9G3aFY6%2BGPBew13IPHNhY8mO5nhBfHhOBpwxH3Eoue0nqRS6FQa1yY2g5tFCbfXvbhCvHw6MwgsXRyQY6pgGcLy3%2BOowBeszr2COrUGKRdLOTrBUm7TasVQ5A2WiTGSYS8OZgQ3mZ1mb4lOAORn4do7gyGgywyPyYJU0MvCK6VN3j2Zy0YhPvhQIx1hf%2FIAat%2BIcfNi8OGu2rSzy%2Be4GNq0ApOyjFWRGHOO8anAWzcKnNFKSZT9zKZRsIyQ5X0pQ5PEi3De0P%2FdEmwWnsAgy13iqIO9jfd8YEZ12xdHh3epPbtPKJ&X-Amz-Signature=fbf2564eeeaef9679fd69bad3b1ba944f00f13f06a3a02a0497cb5863e96d22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF3TJVMB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUryQyOWB2E6wo7u%2BTwakcdSHWl45MX60MkqBL7gzT7AiBs6WhD9%2B1SzFS8dRFKvabFdUTo8aWZg05aRE%2FTKtNYVyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMpifI%2BZS5Ij%2FdTeosKtwD54qoLePZrIS9qyvL%2FyQRYzizHcTyqAmmfcqOl773sibE62XcxK35KDY8Z5KWkdGDv7bnNyUdrufmeUXlT0TVIS52ys8LxLF4jaw6FtSmZ8Qv%2BLLoqb4xUjAH4Km%2BQX%2FINZISy3EcIO6HMsC2G9CbVTRwYS5extXyP0Z8hdmoKrUUYarSU4NG7vKwi0SXyPgh5w%2B0DShKsOZR7eW4Ui6%2FOocSNG6pZ0FDGkNRX1Nun7j66Wy520SZxtxtyaygAdQlhlcV9aG3ZvRwIHg2KixZ%2BHiAOiByX8hcBXzPE0%2BRpw2k0sXANcLmG9xYe57aMQtf3wbGIxDgz1eVWplIAB8d1tIs08toqaM2MKDWN0lV%2BP4gSUceBxqWeUU8WNNth6zCO93R1lkxCPV0GcelFqB7p69v2dIXMSBWe81vvvNj9GyVp%2B3FnphzXEGlvWVsMTpsp20sig1V%2FywOjrMog6geKhF4uTJ%2BZUpn31WSp1Nn5%2Bk9XVnNt1k7RNUWPXjzW6sYlghaP5To4bJSdbHetLv14qIVBKWz4L5ectE%2FQhAg%2FHNbKi2I7mQ9G3aFY6%2BGPBew13IPHNhY8mO5nhBfHhOBpwxH3Eoue0nqRS6FQa1yY2g5tFCbfXvbhCvHw6MwgsXRyQY6pgGcLy3%2BOowBeszr2COrUGKRdLOTrBUm7TasVQ5A2WiTGSYS8OZgQ3mZ1mb4lOAORn4do7gyGgywyPyYJU0MvCK6VN3j2Zy0YhPvhQIx1hf%2FIAat%2BIcfNi8OGu2rSzy%2Be4GNq0ApOyjFWRGHOO8anAWzcKnNFKSZT9zKZRsIyQ5X0pQ5PEi3De0P%2FdEmwWnsAgy13iqIO9jfd8YEZ12xdHh3epPbtPKJ&X-Amz-Signature=34a3e49013f861d073c4fada09b0faeefbae60f5104ece7cdcd56327a40bb18f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
