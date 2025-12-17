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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SPIUKF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY58Icuc6ugY0ocVOEfiW0liJK5q4tj3IPLIPHfMlmsAiEAgD20aL89lvIBTYE2LTcU6mziUJ3qNI1I68jp65OlhxIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDP%2B2Ne397tmWEqFHtircA4sRBlRmGoLCEiz%2F01OxW59MXb%2BLufzm0xqGv3fJ1WeisS%2FL0vOpUWPk%2B3kFI4qf8%2FpVxn2AZZHmfxaUbs7PfFhvXhNn%2FWDWf3HHVxMsPHT%2FqFOP298WRbS8jXm1IJnzunv7qAI4tOPeAaZ%2FS8BwHIRkW8UelnekuVZ%2BisvArJouWTyqnWHJy1F5L8QR0ckEynAXrMMXviGpaJuRlF2q6YJRpJUEqZNZOvPjFoOj6YCV6cJMHwfTrUbkos7dazhxJj11Dww1cQ4xdJDDy1phAMX6RG6p3Gi8V%2Btud7ThxwYTHLHI9oqfy3pdB94Ludnm39v7rWgp8IzUnjSaS1dcmQY61yAHrdX3%2BO19v5O%2FBXTB6S3jB2L0mjz5TDiNvsktPkMptf1mZJuQPPeFP3OClf%2FbKBRsjg7mwTsyoYtl7eRWqga%2BRlxmjAaEhg7o76eg8csIKOMVDaTXDF8%2Fi3znw%2B5cLYRVCZlNi8JvEu0RbLRs%2FqckND4d0H%2FehQ3eXEb0oyxA6rLxRctAlwvH88bcxCD06owhT6sQzKVM1PUWTHL2y8PYU7e%2FtWdFFBm3JZzy91YWOsR82AOUyHxdWxqDwGsgGWpps0Polp1yBlGHBdDaUe8Odc%2FBe51lTmsiMPLFisoGOqUBgcFy8ei3yOXp7mnxuUoGhY40qAIOhJENWnipDenx7MwdaMA0NE2w%2BOlkMwnuPw3QzGU5fv5K00S8Y%2BcDDkZgi20RPhtIdlwlAXI%2FnnRlfLcSF0b9U7gCk1NvlezyI0HJRgsFIVQrNqG%2F2lIphsQUE2r06XCyFLNPvLo9EC810d67F1JQThf5MnlChHO5nJrdqDIGtenCtyWIm5sVVBEfxdRrcsTy&X-Amz-Signature=88232cc4336a2761c9277ddb3c1a5f78e6c788ee9acd5b686c3f001d9453c2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4SPIUKF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFY58Icuc6ugY0ocVOEfiW0liJK5q4tj3IPLIPHfMlmsAiEAgD20aL89lvIBTYE2LTcU6mziUJ3qNI1I68jp65OlhxIq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDP%2B2Ne397tmWEqFHtircA4sRBlRmGoLCEiz%2F01OxW59MXb%2BLufzm0xqGv3fJ1WeisS%2FL0vOpUWPk%2B3kFI4qf8%2FpVxn2AZZHmfxaUbs7PfFhvXhNn%2FWDWf3HHVxMsPHT%2FqFOP298WRbS8jXm1IJnzunv7qAI4tOPeAaZ%2FS8BwHIRkW8UelnekuVZ%2BisvArJouWTyqnWHJy1F5L8QR0ckEynAXrMMXviGpaJuRlF2q6YJRpJUEqZNZOvPjFoOj6YCV6cJMHwfTrUbkos7dazhxJj11Dww1cQ4xdJDDy1phAMX6RG6p3Gi8V%2Btud7ThxwYTHLHI9oqfy3pdB94Ludnm39v7rWgp8IzUnjSaS1dcmQY61yAHrdX3%2BO19v5O%2FBXTB6S3jB2L0mjz5TDiNvsktPkMptf1mZJuQPPeFP3OClf%2FbKBRsjg7mwTsyoYtl7eRWqga%2BRlxmjAaEhg7o76eg8csIKOMVDaTXDF8%2Fi3znw%2B5cLYRVCZlNi8JvEu0RbLRs%2FqckND4d0H%2FehQ3eXEb0oyxA6rLxRctAlwvH88bcxCD06owhT6sQzKVM1PUWTHL2y8PYU7e%2FtWdFFBm3JZzy91YWOsR82AOUyHxdWxqDwGsgGWpps0Polp1yBlGHBdDaUe8Odc%2FBe51lTmsiMPLFisoGOqUBgcFy8ei3yOXp7mnxuUoGhY40qAIOhJENWnipDenx7MwdaMA0NE2w%2BOlkMwnuPw3QzGU5fv5K00S8Y%2BcDDkZgi20RPhtIdlwlAXI%2FnnRlfLcSF0b9U7gCk1NvlezyI0HJRgsFIVQrNqG%2F2lIphsQUE2r06XCyFLNPvLo9EC810d67F1JQThf5MnlChHO5nJrdqDIGtenCtyWIm5sVVBEfxdRrcsTy&X-Amz-Signature=e065c8b59cfb20fb1dfd6f0d8a8621a876a43f5684cacd300e5d9ff4da3868d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
