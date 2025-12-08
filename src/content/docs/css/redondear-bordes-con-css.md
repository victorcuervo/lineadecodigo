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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEW2GIKR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSCMvCQWRBSz%2FgtaX26tvwD5L8cWFAAMCFPFE4loXsKgIhAM4PUig%2BgELYSj831OzgGzA8uZQHttyAk1spARDcYGtUKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rqwEaqTpY7LAMcIq3APy%2BwEKK%2Blf8kKdKeOAPfs%2FTRN7xPEtwJ9ksuAGxYfBFNWI8EXdVTkdXjOqxYD5aTPxBiJ4uymrH%2BQFFiOZjn5lal7gh6OlfyahDivkuC7seOxCX%2FzHzim7%2Fmvw12yyMq%2B1ciqFKYvx5V%2FGR739Mw%2FGusIcH7eoufOuc%2BSWFlMCrDiEK11fehRig%2BlrSr2THMJ%2Buit1VRfcyKe68B389%2FTYeVbOTaBXCaPfpqTERxX8Y4syOcDCQ1N1wKfkmPsfyxhGtE7LUDLSKSof3oQHs60P%2BG6sqMZ%2FT8Jh%2BlMcPWUcVuFf823rDqs%2BOMwv7DhYrD8pPLhRxPDv%2Fq87ZWXlSFL5P%2FNDOb%2BetNl4ShwEBTkmhZ79VKm6xus1vEOzpwjsuAGY%2FbXHSt9jeRHHgQl6crYZ5uVYhReDV8ZpJ4DufmUdTlptfyeMGtli19QxKhp4jEPw35Si%2BHaYe0GCyun94oyIfmT1KgovThv%2FURg9Lf3a%2FsH5vUbo7m9J3pW2djDxvYvfRnKQtNGbtogwLHh8Y6vkGu9%2FDdPqXt1G1SUPmqI9Htz919n%2BZb8dbJxglSjwe67ZTmnC7UuTaJTHGCRmU9IIw7UXCU2C5wPGYQ3CCfqeGBillEwXnrctRha7STDDhtzJBjqkAatTKtyqMY3ruR%2FQCP7WqcNEEOr9hdMSxfSyFMO8%2FwQwx41Zpx%2FdJbGoGbS%2FVVEaz83SPdrl9lUhKo%2FW68XC5PDCQOZ9rwRRlPbtntE%2F57TFiO2jqL26wfieh1KDqQGulKFbPt4ycSBI7HAnhn1TfP5LuBoweYHZBWU8BAIEadNa71DBnILToY%2B%2FcEDIS%2FGm0t1T9PnSqTuzOSNiH5ueAyyduLht&X-Amz-Signature=e37de6e05ac5ab6672e014dcd741586f32411c034a6ef9bca1b3e89641277738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEW2GIKR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSCMvCQWRBSz%2FgtaX26tvwD5L8cWFAAMCFPFE4loXsKgIhAM4PUig%2BgELYSj831OzgGzA8uZQHttyAk1spARDcYGtUKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0rqwEaqTpY7LAMcIq3APy%2BwEKK%2Blf8kKdKeOAPfs%2FTRN7xPEtwJ9ksuAGxYfBFNWI8EXdVTkdXjOqxYD5aTPxBiJ4uymrH%2BQFFiOZjn5lal7gh6OlfyahDivkuC7seOxCX%2FzHzim7%2Fmvw12yyMq%2B1ciqFKYvx5V%2FGR739Mw%2FGusIcH7eoufOuc%2BSWFlMCrDiEK11fehRig%2BlrSr2THMJ%2Buit1VRfcyKe68B389%2FTYeVbOTaBXCaPfpqTERxX8Y4syOcDCQ1N1wKfkmPsfyxhGtE7LUDLSKSof3oQHs60P%2BG6sqMZ%2FT8Jh%2BlMcPWUcVuFf823rDqs%2BOMwv7DhYrD8pPLhRxPDv%2Fq87ZWXlSFL5P%2FNDOb%2BetNl4ShwEBTkmhZ79VKm6xus1vEOzpwjsuAGY%2FbXHSt9jeRHHgQl6crYZ5uVYhReDV8ZpJ4DufmUdTlptfyeMGtli19QxKhp4jEPw35Si%2BHaYe0GCyun94oyIfmT1KgovThv%2FURg9Lf3a%2FsH5vUbo7m9J3pW2djDxvYvfRnKQtNGbtogwLHh8Y6vkGu9%2FDdPqXt1G1SUPmqI9Htz919n%2BZb8dbJxglSjwe67ZTmnC7UuTaJTHGCRmU9IIw7UXCU2C5wPGYQ3CCfqeGBillEwXnrctRha7STDDhtzJBjqkAatTKtyqMY3ruR%2FQCP7WqcNEEOr9hdMSxfSyFMO8%2FwQwx41Zpx%2FdJbGoGbS%2FVVEaz83SPdrl9lUhKo%2FW68XC5PDCQOZ9rwRRlPbtntE%2F57TFiO2jqL26wfieh1KDqQGulKFbPt4ycSBI7HAnhn1TfP5LuBoweYHZBWU8BAIEadNa71DBnILToY%2B%2FcEDIS%2FGm0t1T9PnSqTuzOSNiH5ueAyyduLht&X-Amz-Signature=99ca9ed7e6394a33422fc80b54c2db80351ff35f25b0d4fd8bfabb2bd91e8d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
