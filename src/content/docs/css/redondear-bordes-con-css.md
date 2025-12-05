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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URM6DHA4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyjtzOktLKFNT%2BWJ5URghI2wjHm9ojixgR6gnSXjjabQIhAK%2FPlaRZ5bPZgyiFKDq4eH10XO5FQKbgUn4PiJerjqeWKv8DCF8QABoMNjM3NDIzMTgzODA1IgwXb0cvjzbx8a3TtVIq3APZT4vze0hHhcAa439aYrKsm7wItPIY2Zmp%2Frg6ng37jjcO%2FYfxUrcldPIBOKlX4JYLygQtERsj1uwUFAA72WRuJWbrRU2IL%2B93oKMVb2MuPMsPFSKzYyOAiiOW6Xgp%2FOZ78tQvWB9m8l7Q5S4UWoYgxu7i9anjf%2BSpX3hU8Aqp0CEPOEvztuAQrNkKs8ygJLahzvEM2ySdDpUC%2FSdu5lXjh9zsmDdvFjeFdfHi4Nkv%2FAIdauv5HikcEKaPzytK81w6%2BLqfTyNDvSMUN61cCKAf551cajISj5bIP5mER80wPPggomIyhuNbGGnfzGuqjjfZGUraGbxqcYiF6MTk5956jpXrFKow05SNoI%2BMhSHBBTK4nW4%2Bqcms7VxMDqlMufagc4fG%2BEf6uONJPSdrhO%2F3SeNcoC5Uz0CWRxHGBZdbRLoIX4cAWtWSYJtdthsqK2ap%2BIAGRqwX%2BnSaFQShJN3UglwLUPxmmZburNexvkzKodhgEZ%2Bx%2FSUiCZ%2B5cSJ7aueJtJj%2Fr%2BB4kxwtQHE2PN3cAxXygCCXNeE3Cggki3xkT%2F2DtsbFFQaXysOipI45c%2F%2F%2FJ33kT7BS94QDu2QURmFzmwDL0AzGTB4r92AmPdknM%2FDageTOXjxs2rwSeTDyysvJBjqkAbOa%2FMnF%2FXJczCC565KTVzh6m2KanRCZSYHKfGra3Xu7NKlv5tQQ23GvprvjvIr7SX%2F1%2B6iNmmSDfLGvvy97dC3h%2BRTUqpxiEW%2Fv17P%2BExyBjl49mB2tu8jJUBBbxgSzWZMlde%2BflS7oE%2FehqqSdKdvkIgCuRFravwPq7EORV5ZI4TLryb6RlN%2B%2FlR%2BPjfWW9TjcOiG00ENAoXtDAwlz%2BpzzySlY&X-Amz-Signature=d9bf8c0f6c289f32021575c389a19a3d26b9f2caff694314c9639a0a112f82d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URM6DHA4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyjtzOktLKFNT%2BWJ5URghI2wjHm9ojixgR6gnSXjjabQIhAK%2FPlaRZ5bPZgyiFKDq4eH10XO5FQKbgUn4PiJerjqeWKv8DCF8QABoMNjM3NDIzMTgzODA1IgwXb0cvjzbx8a3TtVIq3APZT4vze0hHhcAa439aYrKsm7wItPIY2Zmp%2Frg6ng37jjcO%2FYfxUrcldPIBOKlX4JYLygQtERsj1uwUFAA72WRuJWbrRU2IL%2B93oKMVb2MuPMsPFSKzYyOAiiOW6Xgp%2FOZ78tQvWB9m8l7Q5S4UWoYgxu7i9anjf%2BSpX3hU8Aqp0CEPOEvztuAQrNkKs8ygJLahzvEM2ySdDpUC%2FSdu5lXjh9zsmDdvFjeFdfHi4Nkv%2FAIdauv5HikcEKaPzytK81w6%2BLqfTyNDvSMUN61cCKAf551cajISj5bIP5mER80wPPggomIyhuNbGGnfzGuqjjfZGUraGbxqcYiF6MTk5956jpXrFKow05SNoI%2BMhSHBBTK4nW4%2Bqcms7VxMDqlMufagc4fG%2BEf6uONJPSdrhO%2F3SeNcoC5Uz0CWRxHGBZdbRLoIX4cAWtWSYJtdthsqK2ap%2BIAGRqwX%2BnSaFQShJN3UglwLUPxmmZburNexvkzKodhgEZ%2Bx%2FSUiCZ%2B5cSJ7aueJtJj%2Fr%2BB4kxwtQHE2PN3cAxXygCCXNeE3Cggki3xkT%2F2DtsbFFQaXysOipI45c%2F%2F%2FJ33kT7BS94QDu2QURmFzmwDL0AzGTB4r92AmPdknM%2FDageTOXjxs2rwSeTDyysvJBjqkAbOa%2FMnF%2FXJczCC565KTVzh6m2KanRCZSYHKfGra3Xu7NKlv5tQQ23GvprvjvIr7SX%2F1%2B6iNmmSDfLGvvy97dC3h%2BRTUqpxiEW%2Fv17P%2BExyBjl49mB2tu8jJUBBbxgSzWZMlde%2BflS7oE%2FehqqSdKdvkIgCuRFravwPq7EORV5ZI4TLryb6RlN%2B%2FlR%2BPjfWW9TjcOiG00ENAoXtDAwlz%2BpzzySlY&X-Amz-Signature=beaea3dbea163870e7f4c36775e9831ce99ed3d67033054fbdb4fb079a600d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
