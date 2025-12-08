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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLU4Y7AJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCymXNOXo65Ux5MKYH0vEJd3U2i8gOZferMIpSjdelAKAIgNUwfp4KuYp93WFrnLRSlYwhiQSXEmkpQUuau%2FqktG5UqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN84O1Q1dSH%2FxSmpGCrcA7faCvQkdq0pPpS%2BxmoypBVMn0KaHFgvTVWOq%2BAHvlgLwm2y%2BMknoTqpLssnjS0WHteMsrGsql7jwPc5MIWRFBqYyku01Pe0SaeF6j8kNp8bis%2Be5SaVkua5NK65H3%2FGyivXiAzBfpS0Psvcw%2BQL26aURiU5PniGDynxTXsEg%2FcUCsCpIqWcCUheiqN9DrKrGSHK9wtbc%2BOnqJFpxI3vx%2FBoqhZrqNIVk5vtkPfcEWmhEAuj9hvhKQmt6iemrKTkP4h0xpLmksA6PBO4RPzHkiDOGRyFVWSyqlwhbsRv23htwWtFhR3rtcR1lltZJfhwFYqbZL8bAYnwE45lz10mtYhBAIiAR3F0gkUN2zGZEpSpjG7%2Fv47pKmZowBJpO4iO2cDymygKIbmusEx1Xiuer0CGraYk3B4rqLsFhQ1jE170icgx%2BsJal2x7H2gQuswosWnMyszLGID9IrQyf2XCuADxlTt1w6ZJs0GRqotyvD3Z2fqG31KdXXfnvghRUTu0%2BR0iR5lhV9GJTsvhpCEm811FuzDBr8OxwdOSTJY4naGLdIkIFFfvFLTUwIK0DKZxxgUHKWwxVRLy4o29yEN216ZlF9QHTXtDJIk86fF0BG1qaXaTOk%2F74UzGyLc%2BMLSA3ckGOqUB26YfEjwiHfX85OytQ02piATaE1SlULUaz7NaPgjNK6jpYCpukPn91%2FiYK8tyPsfGPqF%2F3W9lyOASLHor%2BhgkjrLrc9WaiGRtDe0M29M%2FkvgFUiNuvuvX%2Fo2dquOKkfmCJYARirfbz910%2BFjAV0%2FEvWW%2FUCwoflembasAxkRUVBBfm5Q4nClSVvBhtdiUNDVgokDlxRpDCUQeECHWF76G%2Fdpm3Ye1&X-Amz-Signature=8b8fa2ed4886342642db2f0875f13c7126ec55ea7ec2dccbcf68b574ed883dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLU4Y7AJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCymXNOXo65Ux5MKYH0vEJd3U2i8gOZferMIpSjdelAKAIgNUwfp4KuYp93WFrnLRSlYwhiQSXEmkpQUuau%2FqktG5UqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN84O1Q1dSH%2FxSmpGCrcA7faCvQkdq0pPpS%2BxmoypBVMn0KaHFgvTVWOq%2BAHvlgLwm2y%2BMknoTqpLssnjS0WHteMsrGsql7jwPc5MIWRFBqYyku01Pe0SaeF6j8kNp8bis%2Be5SaVkua5NK65H3%2FGyivXiAzBfpS0Psvcw%2BQL26aURiU5PniGDynxTXsEg%2FcUCsCpIqWcCUheiqN9DrKrGSHK9wtbc%2BOnqJFpxI3vx%2FBoqhZrqNIVk5vtkPfcEWmhEAuj9hvhKQmt6iemrKTkP4h0xpLmksA6PBO4RPzHkiDOGRyFVWSyqlwhbsRv23htwWtFhR3rtcR1lltZJfhwFYqbZL8bAYnwE45lz10mtYhBAIiAR3F0gkUN2zGZEpSpjG7%2Fv47pKmZowBJpO4iO2cDymygKIbmusEx1Xiuer0CGraYk3B4rqLsFhQ1jE170icgx%2BsJal2x7H2gQuswosWnMyszLGID9IrQyf2XCuADxlTt1w6ZJs0GRqotyvD3Z2fqG31KdXXfnvghRUTu0%2BR0iR5lhV9GJTsvhpCEm811FuzDBr8OxwdOSTJY4naGLdIkIFFfvFLTUwIK0DKZxxgUHKWwxVRLy4o29yEN216ZlF9QHTXtDJIk86fF0BG1qaXaTOk%2F74UzGyLc%2BMLSA3ckGOqUB26YfEjwiHfX85OytQ02piATaE1SlULUaz7NaPgjNK6jpYCpukPn91%2FiYK8tyPsfGPqF%2F3W9lyOASLHor%2BhgkjrLrc9WaiGRtDe0M29M%2FkvgFUiNuvuvX%2Fo2dquOKkfmCJYARirfbz910%2BFjAV0%2FEvWW%2FUCwoflembasAxkRUVBBfm5Q4nClSVvBhtdiUNDVgokDlxRpDCUQeECHWF76G%2Fdpm3Ye1&X-Amz-Signature=4c53b2602883cfa570de96ed676676afc22a5f1d160eec2777e012a8c826568e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
