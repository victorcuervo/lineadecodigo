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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJQPPDT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWCRceM7uB%2BsfmlGaWfFV2%2BBgbnyh4fClw%2FRjN6ITowAIhAPQUbbglobWCV7UQHYY3BI0bmnYYxFnWZ%2BEkwvRQY8ROKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6M1zIVrSDJaFR68sq3AO1NejsK4wpZgnGsa7STP3PIR%2BzXUL%2BxpWqyxxKCaYO8Y3onXFg%2BHJayVsDms5T2R0jPn3c1Lavt%2Bpayzq0qg8Q9QmNXLNqkF8NtG2siwxlBBXhW%2F1C64TfmeGuA56rp6t6CqsOCQsLd%2BsAnTWAvtZf71SFlyNew2pXK%2BMSJYH%2FqrDMeJ9saunELB8BMYNDf7jFLHt4ZZC2xrdUWTTLlUFMGeHXm5LTY65CKoO8i%2F81oWE9atI6XTTOrs9Qj2%2FgkIV3f%2FHfJ4bRxLs6OclJD%2BJomkYve7o5cFnLyaH0%2FGxJtYNuzDoMurrzVOiIevMMd5b8qCJoYbbb4k5gP4r8GbaOLfcf4HMITDthqcAGjq7XlEbQ0eT9QnTGCvAXr2J5nm2PI8ScPvC%2FS9hCyfV3rHWx2G%2B%2F5SJWLfz%2Fbs0GGFoIXskf2m1lqU2ruf93%2Fg92PE0RXUAcEwQsstgXt%2BVcCLChUEawD6FmcmbYn3YgetP1CX2ZGGUYdCCemWypNbVLTlfsT0O0FexP3lyJ6jzWgCBK8QkVxl5pTbhwqm1Mdn9vYHYvhsKuMEmcRGWWs6YObc0PA37ebzcJDuZMtu3LADbd6lIJoTvhG1Mnggi1xXV4l4TYG6IRbOLhyMm8hzC87dnJBjqkAVPQBT1yQqiJQ44%2F5yO1FPe16Z6jrg2x1WmOJQuvdNZ%2FXGHxBAZeqUM78pdZVOVsR%2BqkCheq0PTY3HX%2F2RL6vt%2Fom8DB1n5VNZF5ymMy9DHnoknNAFCplFSrUpYf71TFUjkytUIfeGd2fYXuGRy7kv%2FtjiQYXbdFV20ktL1tPSXX2Hh7PdL27QWS8na1865U7eig261CgBnl4rJ6jDFoxG8Zohoc&X-Amz-Signature=7f1c9463f4680071bb16a2a533823d3c350e02046a3adfeaf67e4722adf52a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YJQPPDT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWCRceM7uB%2BsfmlGaWfFV2%2BBgbnyh4fClw%2FRjN6ITowAIhAPQUbbglobWCV7UQHYY3BI0bmnYYxFnWZ%2BEkwvRQY8ROKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6M1zIVrSDJaFR68sq3AO1NejsK4wpZgnGsa7STP3PIR%2BzXUL%2BxpWqyxxKCaYO8Y3onXFg%2BHJayVsDms5T2R0jPn3c1Lavt%2Bpayzq0qg8Q9QmNXLNqkF8NtG2siwxlBBXhW%2F1C64TfmeGuA56rp6t6CqsOCQsLd%2BsAnTWAvtZf71SFlyNew2pXK%2BMSJYH%2FqrDMeJ9saunELB8BMYNDf7jFLHt4ZZC2xrdUWTTLlUFMGeHXm5LTY65CKoO8i%2F81oWE9atI6XTTOrs9Qj2%2FgkIV3f%2FHfJ4bRxLs6OclJD%2BJomkYve7o5cFnLyaH0%2FGxJtYNuzDoMurrzVOiIevMMd5b8qCJoYbbb4k5gP4r8GbaOLfcf4HMITDthqcAGjq7XlEbQ0eT9QnTGCvAXr2J5nm2PI8ScPvC%2FS9hCyfV3rHWx2G%2B%2F5SJWLfz%2Fbs0GGFoIXskf2m1lqU2ruf93%2Fg92PE0RXUAcEwQsstgXt%2BVcCLChUEawD6FmcmbYn3YgetP1CX2ZGGUYdCCemWypNbVLTlfsT0O0FexP3lyJ6jzWgCBK8QkVxl5pTbhwqm1Mdn9vYHYvhsKuMEmcRGWWs6YObc0PA37ebzcJDuZMtu3LADbd6lIJoTvhG1Mnggi1xXV4l4TYG6IRbOLhyMm8hzC87dnJBjqkAVPQBT1yQqiJQ44%2F5yO1FPe16Z6jrg2x1WmOJQuvdNZ%2FXGHxBAZeqUM78pdZVOVsR%2BqkCheq0PTY3HX%2F2RL6vt%2Fom8DB1n5VNZF5ymMy9DHnoknNAFCplFSrUpYf71TFUjkytUIfeGd2fYXuGRy7kv%2FtjiQYXbdFV20ktL1tPSXX2Hh7PdL27QWS8na1865U7eig261CgBnl4rJ6jDFoxG8Zohoc&X-Amz-Signature=735d591f4d2d90d4d2ef616c8297cdb1485ba20b5b90f3a966847708e40a79e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
