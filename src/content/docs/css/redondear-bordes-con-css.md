---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGB4T3IC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFiA4lrVGIfH8opziXAxi0wRrHvxjVIE3MHKAavjHnOFAiEAoagr1Y1SxK3oX1rE5aMFmKMAS20U%2FIU%2FlrqBCGjtSZQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGp%2Fp7CT1QAXN0Xw4CrcA3abwr4K50uQoDZIqLakz11%2FLSrpEJYClkomCIB2gMzjlURVUOBFTK7QN84sAJQjx%2FMMoVbaBjez5riMxn1cmnY0jk08%2BBF8p3c1EqT8ZLIirGfI%2FahDTN4wBTvnnJagf4DoXOri1Yq8gKhZc%2BC%2FEAFEfoGB%2FBhggxhqeAOOmm1R6mrv%2BPYx8XYS3y7jgwp1%2BsVI203tqS5FpcUH4%2ByxFOCzwQ6Sc3G252DnOkZTXeMeu2UXxEIC6t%2BSOdqQyuXR6sSqKQ%2BJnxq5k0tJT%2FWdHdPqeSnBJNmtKEtv1TkLaPuqcXwVV2RcQUiVcj%2BaxF9Mk8NY57lYMNUApqbDVRAGidtdVcJn5q4Pr6xDWrJHh9lPz0lfEf5QvIjkyNTQ%2Fkbf85vSszhkrndPB8CDmvwDFNuTHo4mD9iqyBtJiwIjgmYjbJ6B6HOXeVFA821nXKJVNGDBHooGxgoqqaU%2BzIrGhKtopNUAcrRrXIPc3sTqhdE8Xs3QBpQsQQHF4txLjwT0WzNEdgzt%2B%2BAHtkOsKdRx6z9ZIRmwNi0lXKxwJRhab4sDxaD4XtBOdAD%2FI3CE%2FyQDKlBmEKiOsV2BXlOxIo9TUCiV7cPrhSQunDKSLGYVBOeQ1utRYShrMW4o%2BxomMMiqxckGOqUB49p1NFyLWEv9CpbJ4PYhaspW%2F%2FEzWn6GSyHJZO7HV4sUbDhyIkZ6aJUn3mHRJLxGdWuZmLqvOpD7yeW%2B%2B50BeQD34JiN3QyUxmVeqXZfNE5bYszN4H4gH5Rf1akCLSbSJDl2KXILtPgPNvEhGIhoSg4yFrJezURa2eYSp8Nvc1%2FDWDDThP6W0GZLYzBvrn%2FUGLGi9Q7Vik%2BGb0krEyLRg%2Bc3AORe&X-Amz-Signature=3812afb67c84ba9288db49cf1d74b5b574d9d18fdb7c0d70048cd60f3d37e25a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGB4T3IC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFiA4lrVGIfH8opziXAxi0wRrHvxjVIE3MHKAavjHnOFAiEAoagr1Y1SxK3oX1rE5aMFmKMAS20U%2FIU%2FlrqBCGjtSZQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGp%2Fp7CT1QAXN0Xw4CrcA3abwr4K50uQoDZIqLakz11%2FLSrpEJYClkomCIB2gMzjlURVUOBFTK7QN84sAJQjx%2FMMoVbaBjez5riMxn1cmnY0jk08%2BBF8p3c1EqT8ZLIirGfI%2FahDTN4wBTvnnJagf4DoXOri1Yq8gKhZc%2BC%2FEAFEfoGB%2FBhggxhqeAOOmm1R6mrv%2BPYx8XYS3y7jgwp1%2BsVI203tqS5FpcUH4%2ByxFOCzwQ6Sc3G252DnOkZTXeMeu2UXxEIC6t%2BSOdqQyuXR6sSqKQ%2BJnxq5k0tJT%2FWdHdPqeSnBJNmtKEtv1TkLaPuqcXwVV2RcQUiVcj%2BaxF9Mk8NY57lYMNUApqbDVRAGidtdVcJn5q4Pr6xDWrJHh9lPz0lfEf5QvIjkyNTQ%2Fkbf85vSszhkrndPB8CDmvwDFNuTHo4mD9iqyBtJiwIjgmYjbJ6B6HOXeVFA821nXKJVNGDBHooGxgoqqaU%2BzIrGhKtopNUAcrRrXIPc3sTqhdE8Xs3QBpQsQQHF4txLjwT0WzNEdgzt%2B%2BAHtkOsKdRx6z9ZIRmwNi0lXKxwJRhab4sDxaD4XtBOdAD%2FI3CE%2FyQDKlBmEKiOsV2BXlOxIo9TUCiV7cPrhSQunDKSLGYVBOeQ1utRYShrMW4o%2BxomMMiqxckGOqUB49p1NFyLWEv9CpbJ4PYhaspW%2F%2FEzWn6GSyHJZO7HV4sUbDhyIkZ6aJUn3mHRJLxGdWuZmLqvOpD7yeW%2B%2B50BeQD34JiN3QyUxmVeqXZfNE5bYszN4H4gH5Rf1akCLSbSJDl2KXILtPgPNvEhGIhoSg4yFrJezURa2eYSp8Nvc1%2FDWDDThP6W0GZLYzBvrn%2FUGLGi9Q7Vik%2BGb0krEyLRg%2Bc3AORe&X-Amz-Signature=fd3622ec5db713a907967c17db5770446b93da817b81ede0cb0734e2a461d3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
