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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWZVEZE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BtM6WGvtzB00b5wAxDqqaVZY%2BskLNdZPvk2rRZhh4ZAiEAw86DkI2jU%2BBCw%2Fophs%2FBFr40Atpc7mCuKfrQYCCLRjgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOpoYDUwE0tmisbI6CrcAxzV9dUHfleYx7a%2BSGyqCyi2Pp0voEPE%2Bdx04ijmTiaR2fX3zLNUZbsHt7umlYMzIPJuNhcr4YuFNKHnhXAvXkhVLvpNuzUQJK5MIzji%2BFnYDBVon6LFJeLrbsS%2FVJvTaw6qvoTo8AuCcCN1xFr%2BShHbVXeB5IRMI6609scL11XsyK1XeGQB95VfsQdWrvgD87vahpWVu0v%2F4%2BBGlW%2BEXqE1aOMdQpEvh%2Btq%2B1AxExcRGVZPN8Ki46Lj20P7DETCTVszjvQm9LOMLQb0HUKn3P9f7KWnhB9sQq3ryNAPFWKPWSx%2Bmd2Trz7DsEs6Qkt6ducIUlR3Ps0NkaPliqIK0tZIOGQv791hag5mamULGgQC1n9QugDnKmU79BthuetrFbXNnUjN7Rtr1pCcIY5nl%2ByiNiooeNrZKfsPxEh4D2bJslEbyufnwsWZLpy%2FubRY0LF21XDtBxZ1Zui5Ai4lbMC%2BajWdY1%2FEgMZqnA1vcNIWLuoGipuX5jripn12DFfgcLExQjyARAfrS3OPoVGHqDJQhPmtUX3R1uy%2B4sOZwlpCTt%2Bhh3lwdPnRsLBxCczQZix2V3v2w3Id%2BLd%2F7R4PhkVyOEekoPuUtWfQhE%2BiaURqcGYpXnaqlnP6yUYKMP7py8kGOqUB0ho4VX8vDrtdyFTy10MwYy7Yx6ou0gZyi4EpQFb58e98XqPK4L%2FlyLOm4QM0sO2RTALFCOmHuuIPxvMUMqff5M%2FyNCOENADGrqWsg1vUexjKCQstBpqqOyfxFxtlZtXFsqEtwbbO5Q8I4%2BWjU11xgPL0flKrohTQR58PFLvfjND77flcJs4vimaBlpV4I3pms5WFe26i4mZwaehW4Mc2%2F2sE5Rx7&X-Amz-Signature=9b8fde224fff7f6c4c65cf65c364459ce782486a600c1081b8116026c36867a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQWZVEZE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BtM6WGvtzB00b5wAxDqqaVZY%2BskLNdZPvk2rRZhh4ZAiEAw86DkI2jU%2BBCw%2Fophs%2FBFr40Atpc7mCuKfrQYCCLRjgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOpoYDUwE0tmisbI6CrcAxzV9dUHfleYx7a%2BSGyqCyi2Pp0voEPE%2Bdx04ijmTiaR2fX3zLNUZbsHt7umlYMzIPJuNhcr4YuFNKHnhXAvXkhVLvpNuzUQJK5MIzji%2BFnYDBVon6LFJeLrbsS%2FVJvTaw6qvoTo8AuCcCN1xFr%2BShHbVXeB5IRMI6609scL11XsyK1XeGQB95VfsQdWrvgD87vahpWVu0v%2F4%2BBGlW%2BEXqE1aOMdQpEvh%2Btq%2B1AxExcRGVZPN8Ki46Lj20P7DETCTVszjvQm9LOMLQb0HUKn3P9f7KWnhB9sQq3ryNAPFWKPWSx%2Bmd2Trz7DsEs6Qkt6ducIUlR3Ps0NkaPliqIK0tZIOGQv791hag5mamULGgQC1n9QugDnKmU79BthuetrFbXNnUjN7Rtr1pCcIY5nl%2ByiNiooeNrZKfsPxEh4D2bJslEbyufnwsWZLpy%2FubRY0LF21XDtBxZ1Zui5Ai4lbMC%2BajWdY1%2FEgMZqnA1vcNIWLuoGipuX5jripn12DFfgcLExQjyARAfrS3OPoVGHqDJQhPmtUX3R1uy%2B4sOZwlpCTt%2Bhh3lwdPnRsLBxCczQZix2V3v2w3Id%2BLd%2F7R4PhkVyOEekoPuUtWfQhE%2BiaURqcGYpXnaqlnP6yUYKMP7py8kGOqUB0ho4VX8vDrtdyFTy10MwYy7Yx6ou0gZyi4EpQFb58e98XqPK4L%2FlyLOm4QM0sO2RTALFCOmHuuIPxvMUMqff5M%2FyNCOENADGrqWsg1vUexjKCQstBpqqOyfxFxtlZtXFsqEtwbbO5Q8I4%2BWjU11xgPL0flKrohTQR58PFLvfjND77flcJs4vimaBlpV4I3pms5WFe26i4mZwaehW4Mc2%2F2sE5Rx7&X-Amz-Signature=3179e3b5ab12451b338b375b9a63b6e03804d7b2104b12b882bea433ad20850a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
