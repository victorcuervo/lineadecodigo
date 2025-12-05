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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWSEMOT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCil%2BcTqNtFw9uBeks90WMQx6C8V5v1rl%2BTwKSva6spaQIhAPmwSBZ%2FM4VHqR6N8bG0y6xEVnQnEYatmWgcD9n5VT%2BuKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRSuXRh9JDxFfmJV8q3APsNNapCrlenqkp%2F%2BpoLS5v7PVoBcL9MG61sHnNBrbDYT4pdxzYPcbTKa6K0jYx1KUgRHf0Lw2UTkJ5C3%2FPJgUJujY3AZwLkX9vfNTfuGRs10itM%2FAbqFeOpu5jdEye8mF08GMlHTIOOYAVCby1XE1s3csqb1rg%2Bar6ntcXYd9F2Wf%2BcrDvfYRZNUfKB1QZAYUlrju0Mk1hcuMslQcXGM5T6c2frgo%2BSmh3ggVRAFt1Gd5oDq%2FG9%2BPJ92lL3uDtYRSBugIbZaZBU071BJrJOeYfDY67oBFsSFhgpsjuKf%2BSnI5%2FhSW9gotMnk0yX2qx1NgxZgw%2FlQBUIAbkLGScdG4%2FW5z4ynZZbxOSxWrO%2BZKXbUDptbR9vIFct1J1u5rikqODsuIwWUo72PZCNc%2Bt21y5aQSLUVZznEcnKGkj9SjrinKWRCGNavNChraV21iNzFuNNIUYMr2LwPrB00zcRP0MLvmx0mCTN%2FOHluEGEbzLyKdld7GdD%2BIIEVwjw9JWVtyMoj1WwtwII8Nt9pHOkv2NZYLfjScm47Q7GD27udhxc95%2Bk%2BZg5a3bG6NjRVyH2eyfcDL6tWyIPwqLJmG%2BCH%2BfHVFOfOPwT6ZAgbsn4rCmQw9kZdm12f%2FKkQqEYTDwmM3JBjqkAXFQXZBTdLzCFQ3VCGlfvM%2BTERqSJ%2FrdSDi2I2aot7q48zyEUqW%2FfVSX3UY3MVZbhwICSYFMX4iLiEfiIC2KQFivyasXev3xYf6qab%2BLxpuZ2cx2Oy8SclbvdZFJe9TgMCN8Ui9icjpAbBGYBy%2BD9FFP%2FH%2BwqACXvOiqpYtZnF2XD0J38OMaXBvgY%2Fi8%2FE1V0CxZPcoWIrdKLUDJnheEFLERpNk7&X-Amz-Signature=0f7f87f67949614c696d12e4cffd0b6e1d17f5694a27b20e391d2b86c44c9339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUWSEMOT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCil%2BcTqNtFw9uBeks90WMQx6C8V5v1rl%2BTwKSva6spaQIhAPmwSBZ%2FM4VHqR6N8bG0y6xEVnQnEYatmWgcD9n5VT%2BuKv8DCGYQABoMNjM3NDIzMTgzODA1IgwRSuXRh9JDxFfmJV8q3APsNNapCrlenqkp%2F%2BpoLS5v7PVoBcL9MG61sHnNBrbDYT4pdxzYPcbTKa6K0jYx1KUgRHf0Lw2UTkJ5C3%2FPJgUJujY3AZwLkX9vfNTfuGRs10itM%2FAbqFeOpu5jdEye8mF08GMlHTIOOYAVCby1XE1s3csqb1rg%2Bar6ntcXYd9F2Wf%2BcrDvfYRZNUfKB1QZAYUlrju0Mk1hcuMslQcXGM5T6c2frgo%2BSmh3ggVRAFt1Gd5oDq%2FG9%2BPJ92lL3uDtYRSBugIbZaZBU071BJrJOeYfDY67oBFsSFhgpsjuKf%2BSnI5%2FhSW9gotMnk0yX2qx1NgxZgw%2FlQBUIAbkLGScdG4%2FW5z4ynZZbxOSxWrO%2BZKXbUDptbR9vIFct1J1u5rikqODsuIwWUo72PZCNc%2Bt21y5aQSLUVZznEcnKGkj9SjrinKWRCGNavNChraV21iNzFuNNIUYMr2LwPrB00zcRP0MLvmx0mCTN%2FOHluEGEbzLyKdld7GdD%2BIIEVwjw9JWVtyMoj1WwtwII8Nt9pHOkv2NZYLfjScm47Q7GD27udhxc95%2Bk%2BZg5a3bG6NjRVyH2eyfcDL6tWyIPwqLJmG%2BCH%2BfHVFOfOPwT6ZAgbsn4rCmQw9kZdm12f%2FKkQqEYTDwmM3JBjqkAXFQXZBTdLzCFQ3VCGlfvM%2BTERqSJ%2FrdSDi2I2aot7q48zyEUqW%2FfVSX3UY3MVZbhwICSYFMX4iLiEfiIC2KQFivyasXev3xYf6qab%2BLxpuZ2cx2Oy8SclbvdZFJe9TgMCN8Ui9icjpAbBGYBy%2BD9FFP%2FH%2BwqACXvOiqpYtZnF2XD0J38OMaXBvgY%2Fi8%2FE1V0CxZPcoWIrdKLUDJnheEFLERpNk7&X-Amz-Signature=1a5e6f50589c99531187f179d41f08617c5b8d7fa80e80f181608f4dee3107ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
