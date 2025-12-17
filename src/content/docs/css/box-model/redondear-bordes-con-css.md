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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOOVS2D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCHJeFdAo%2BPPGEz3Y%2FbDK%2Fps7DMbcRAGDyBpQ%2BuFUCyAiB92TOwAMNNEN1rkuGzWQvKPD5shHxHqcqhoXZ6foZmDiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9K3Ua9J5GupaDzC8KtwD1PBk51dH5bcm1gDlbeMsvdoZmyac4kmmIEwlh6E%2BbFrPHz1f1tANa9uSQLzJ%2FJx4TuCja64B840aUbb4uZgPzR%2FizAh5JPnFWc3V9IgeHbG9uYLXp9ceL2gKi%2BQvW3pS0aqgCc9w1v4u63sYnvFBAz5P1TChlOpC2jZkIf24W0YwTRxyYRdmLI2x4oOk2SQOCOzv7CrWv3PcUzB51PIfUAFDi6VlyKmSqxihN7dRjfezMdY1nmLnDoM%2BSDsKVYbujwODjDMiH4VZsIes88EdloFiGNoRlP8Kxuh9bvscp63Mcnitxbyk9MG397FLNrysQ22%2BjZ26fkgk1zeUWml02hPPz2AfCV9I4XbafpM%2FcySLFu2uAF5mYPPuD%2FicV19VnyJzz7QFlWta4pcAzcK4ZN52%2FGVDM94fO0h7BIZvgeCZ3DTuG2pZRq6KsTiz7NtzwTwy683SSJRG%2BzTFC0Zs27JjX3GnMc7nZX3krkFaTPaI%2FAQUGTyA4FKxOOuasYbYZRL6CnDynQz0Y2fl5iXNdziDpNuns9ZktBmJTYbfHs93D831D41oqYy6LuELxZiXjnuSqI2vIuvnunsJHhPB%2FCOooBsoCrbQRkPbGwfH8cBWxU21EVF8TowZY%2FQwkYCLygY6pgGdF%2FeJTSbW9fuy1KUlHWBtzj6c9pvrXf4MgBwUi28j254MVydYDODXyYGvUGi098g5XvX6Y52WodBS4QXKQFV2uRr6uWj9w1%2B%2FuLZGSwLTkP5V08vzkHO6jHAA%2FKf4wtgjQIPnxvjJC6XMhvWFGg8U6q3I%2F9dm8oEKelFz0IEvg%2B4PzI%2FzGYQzK9VRGFNy6BmACK6BaMtJ%2Bh63d3tnf7YdItbsqceH&X-Amz-Signature=6fe88f31dcb0ca01f5709310beeefb26845de67cf86fd4bfd2c35eead19513a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOOVS2D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCHJeFdAo%2BPPGEz3Y%2FbDK%2Fps7DMbcRAGDyBpQ%2BuFUCyAiB92TOwAMNNEN1rkuGzWQvKPD5shHxHqcqhoXZ6foZmDiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9K3Ua9J5GupaDzC8KtwD1PBk51dH5bcm1gDlbeMsvdoZmyac4kmmIEwlh6E%2BbFrPHz1f1tANa9uSQLzJ%2FJx4TuCja64B840aUbb4uZgPzR%2FizAh5JPnFWc3V9IgeHbG9uYLXp9ceL2gKi%2BQvW3pS0aqgCc9w1v4u63sYnvFBAz5P1TChlOpC2jZkIf24W0YwTRxyYRdmLI2x4oOk2SQOCOzv7CrWv3PcUzB51PIfUAFDi6VlyKmSqxihN7dRjfezMdY1nmLnDoM%2BSDsKVYbujwODjDMiH4VZsIes88EdloFiGNoRlP8Kxuh9bvscp63Mcnitxbyk9MG397FLNrysQ22%2BjZ26fkgk1zeUWml02hPPz2AfCV9I4XbafpM%2FcySLFu2uAF5mYPPuD%2FicV19VnyJzz7QFlWta4pcAzcK4ZN52%2FGVDM94fO0h7BIZvgeCZ3DTuG2pZRq6KsTiz7NtzwTwy683SSJRG%2BzTFC0Zs27JjX3GnMc7nZX3krkFaTPaI%2FAQUGTyA4FKxOOuasYbYZRL6CnDynQz0Y2fl5iXNdziDpNuns9ZktBmJTYbfHs93D831D41oqYy6LuELxZiXjnuSqI2vIuvnunsJHhPB%2FCOooBsoCrbQRkPbGwfH8cBWxU21EVF8TowZY%2FQwkYCLygY6pgGdF%2FeJTSbW9fuy1KUlHWBtzj6c9pvrXf4MgBwUi28j254MVydYDODXyYGvUGi098g5XvX6Y52WodBS4QXKQFV2uRr6uWj9w1%2B%2FuLZGSwLTkP5V08vzkHO6jHAA%2FKf4wtgjQIPnxvjJC6XMhvWFGg8U6q3I%2F9dm8oEKelFz0IEvg%2B4PzI%2FzGYQzK9VRGFNy6BmACK6BaMtJ%2Bh63d3tnf7YdItbsqceH&X-Amz-Signature=7a9f74f767294a4b513956634f7a996580d0d0e1b4ab944a52c13afe6d64e8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
