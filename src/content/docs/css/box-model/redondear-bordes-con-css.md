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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2G7OWN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDISLa5uvKDFlAynUW%2BAYEbg8D63gPam3E3jx0%2FWz%2F1GQIgavZr0kqY%2FwxJLZ2CRCY2stPXMcfUgSu67eWzjy1%2BDIEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHAaRDPJrQnW%2FH6gLCrcA6b4mm1bfeiNGBie62OUd4TCQuVRcfPuM09C7%2BZU6NxmOURoVqd8M2x7ZV9yFGZgXaKZDqUrNeOThOROuFb88ZaQhFwX3izN3%2BFDgcvenIIP5%2Fv2A0DkbPEK4snEzI08ORGeT0h8W09kjRMwNHO7EI86DBlzBFRRrOXCZMUSExc6qzUeoKGqZsc8w8jTgnvKfCH8E9ayMsgKuLa0lvY6XNvh%2FG1Y6KamYw%2F4COJwGl0OvFfl6bdgNcQQJwXCh7K4yvZOvULXS5e7xg98iOxlPni26cqwZvVYjH%2FuojZ1rgkwvmOdkExg%2BchFOj%2FY8filbCMih9W1RLYrLjSEnuIgk5tDT1zZezIyzb0snYQ632xXzwhVxgD7W3xR0l0MKW5Dy1RmCukOD0kfCbFW8vuYpH3C1ohwtNpOACesAzQzXy3X37qgIys%2B%2FKIJiVni25DGlX%2F%2BhM%2FguipSPfvVadj8WRE9nqp%2FEJw8LvRBAqiRoeENs%2F9%2FYK7zOViitAXMF4DZderiOqEnBehInDpIR5zcvXjafJIkT%2BxJ0NcXh%2FWR0SldlicFOqhXrO6Z26ZMssOxEGv%2FOqcqymVDSv%2FFwDUTr1k%2BmdtumbjCcwLszW8gKS%2F486ggH4A9lFSV0TjTMJXfh8oGOqUBgAXUOCwpL5NFXonJcuDldkroNyWHw1iZeruYi8sOWdGAAZLCmy6qqwWWkhb%2F26q%2F26fNilH88%2B8V6p1hmM%2BqMBpNg9Tm7LQhNIp8pp8V%2BejZ%2FL70E2EvRSJy7EG%2FUCCmqcFQe%2BdK4ThUfzVEkRf%2FG0BxRnqCToFN6v9GGj0w1RFe2%2FNd8fy%2B7gTL49qECX4s7bUBlBj820lbbLtUXsZTjv8rMCVs&X-Amz-Signature=0d5d11c810ffc297e044ab5ca905fe92a9aa6731e173943efb51c4f4711f4674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665T2G7OWN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDISLa5uvKDFlAynUW%2BAYEbg8D63gPam3E3jx0%2FWz%2F1GQIgavZr0kqY%2FwxJLZ2CRCY2stPXMcfUgSu67eWzjy1%2BDIEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDHAaRDPJrQnW%2FH6gLCrcA6b4mm1bfeiNGBie62OUd4TCQuVRcfPuM09C7%2BZU6NxmOURoVqd8M2x7ZV9yFGZgXaKZDqUrNeOThOROuFb88ZaQhFwX3izN3%2BFDgcvenIIP5%2Fv2A0DkbPEK4snEzI08ORGeT0h8W09kjRMwNHO7EI86DBlzBFRRrOXCZMUSExc6qzUeoKGqZsc8w8jTgnvKfCH8E9ayMsgKuLa0lvY6XNvh%2FG1Y6KamYw%2F4COJwGl0OvFfl6bdgNcQQJwXCh7K4yvZOvULXS5e7xg98iOxlPni26cqwZvVYjH%2FuojZ1rgkwvmOdkExg%2BchFOj%2FY8filbCMih9W1RLYrLjSEnuIgk5tDT1zZezIyzb0snYQ632xXzwhVxgD7W3xR0l0MKW5Dy1RmCukOD0kfCbFW8vuYpH3C1ohwtNpOACesAzQzXy3X37qgIys%2B%2FKIJiVni25DGlX%2F%2BhM%2FguipSPfvVadj8WRE9nqp%2FEJw8LvRBAqiRoeENs%2F9%2FYK7zOViitAXMF4DZderiOqEnBehInDpIR5zcvXjafJIkT%2BxJ0NcXh%2FWR0SldlicFOqhXrO6Z26ZMssOxEGv%2FOqcqymVDSv%2FFwDUTr1k%2BmdtumbjCcwLszW8gKS%2F486ggH4A9lFSV0TjTMJXfh8oGOqUBgAXUOCwpL5NFXonJcuDldkroNyWHw1iZeruYi8sOWdGAAZLCmy6qqwWWkhb%2F26q%2F26fNilH88%2B8V6p1hmM%2BqMBpNg9Tm7LQhNIp8pp8V%2BejZ%2FL70E2EvRSJy7EG%2FUCCmqcFQe%2BdK4ThUfzVEkRf%2FG0BxRnqCToFN6v9GGj0w1RFe2%2FNd8fy%2B7gTL49qECX4s7bUBlBj820lbbLtUXsZTjv8rMCVs&X-Amz-Signature=d05d0a3e47aaefa3c62c4f5108e653876edcc5e6c33390b7dd668cdbbb2bf8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
