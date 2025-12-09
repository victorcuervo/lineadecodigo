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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCOROQO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2FI4QIZRc8WOblA929ogrTOF%2BkXxdUDlG%2Fs08kA6Z7QIhAN%2B3NiGcxbnPFYiLPIeCbin43rV9JnFOz%2Fbmx0P8fhFTKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ8VbQVOjxiR4H9K4q3APA6mEYqag3DaS2oYMPvQIMgZJ75d7TGFTLf8v4%2FiSlIoc4X2JdsHaa%2FrPGfPgHL31RCaxLnUiwm%2B847bNbFi7FLqDJ0HzJvd1eJ3O0K6a%2F7Uo%2FyB2GJjdwkpBNTIxTHu2W6pwJPJ1rRZrEhIR1Ac%2FtQ7wS6TGptxn0Sx6F2cZttB5LIRKvg8nd7qLvNwOWWPtQ%2BzFo5vrrN2lXOV15y2LK6G46brxNSGuFDrVyF5pfIUlL1dwF1mwFCUcbbOhBHe87FdNXiJmh%2BaoOkHIfRTad7nvq%2BUiiIQbok5CQh1JZLkOxdESsGXYtwTJr49CttkfL5xAxaOlt%2BdOQdleKdSgPL3xIs3Y9T2JJDVOiBWPyq2lBp3S%2BtiMDKXF%2BfrYSD%2F0qd%2BS%2BpHkAkCb32PLY9nCCC%2BjyXjyW6vBbXh7%2FWuPRSQMv1GRJT0NrMdl7p7Vy4eYSePOuOK1uAokQn%2Bpk2Ci2OWE7NZDsmikPu4lz%2FjuGfyHSEw%2BczH1OF%2BgPvXVcaijeE1aoxYGqUO6aGiU0%2F2yE422WLBppdP0QZVa%2BZ5kG4Q2yrLMokzgWlGlEB9QSxbBmoRt1tMsbBcvLhk2JsM%2FBXXO29GC4AJTVUwm2FQHngHQmqPuIxqDxm9k%2FZjCHxN%2FJBjqkAX%2BSei3Bx9iOZaN7UOG5jp%2BMFc9oP4e%2FsM08U1GspAn4uksQPNeniOtCn8gIzM8OPQOolMtZpLknW5ewYgwEZ4cmpDfwIXKR%2F0%2FRIo2RhVGEfQYgpR6P7TmYKWNf9S4ZAc9W7TfpNZQUp%2BaOa84qro1Jx9t2%2BIIBG61LjWtx4S%2BycN5bHXZ58uOzH1gqQE91pHPptV35FURaW4HNxyG3AOUazUWV&X-Amz-Signature=36b67475161e51f5895e072bfb718528cec9e94b79d8bcb9ecad7cb6dc2669b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCOROQO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T092550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2FI4QIZRc8WOblA929ogrTOF%2BkXxdUDlG%2Fs08kA6Z7QIhAN%2B3NiGcxbnPFYiLPIeCbin43rV9JnFOz%2Fbmx0P8fhFTKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ8VbQVOjxiR4H9K4q3APA6mEYqag3DaS2oYMPvQIMgZJ75d7TGFTLf8v4%2FiSlIoc4X2JdsHaa%2FrPGfPgHL31RCaxLnUiwm%2B847bNbFi7FLqDJ0HzJvd1eJ3O0K6a%2F7Uo%2FyB2GJjdwkpBNTIxTHu2W6pwJPJ1rRZrEhIR1Ac%2FtQ7wS6TGptxn0Sx6F2cZttB5LIRKvg8nd7qLvNwOWWPtQ%2BzFo5vrrN2lXOV15y2LK6G46brxNSGuFDrVyF5pfIUlL1dwF1mwFCUcbbOhBHe87FdNXiJmh%2BaoOkHIfRTad7nvq%2BUiiIQbok5CQh1JZLkOxdESsGXYtwTJr49CttkfL5xAxaOlt%2BdOQdleKdSgPL3xIs3Y9T2JJDVOiBWPyq2lBp3S%2BtiMDKXF%2BfrYSD%2F0qd%2BS%2BpHkAkCb32PLY9nCCC%2BjyXjyW6vBbXh7%2FWuPRSQMv1GRJT0NrMdl7p7Vy4eYSePOuOK1uAokQn%2Bpk2Ci2OWE7NZDsmikPu4lz%2FjuGfyHSEw%2BczH1OF%2BgPvXVcaijeE1aoxYGqUO6aGiU0%2F2yE422WLBppdP0QZVa%2BZ5kG4Q2yrLMokzgWlGlEB9QSxbBmoRt1tMsbBcvLhk2JsM%2FBXXO29GC4AJTVUwm2FQHngHQmqPuIxqDxm9k%2FZjCHxN%2FJBjqkAX%2BSei3Bx9iOZaN7UOG5jp%2BMFc9oP4e%2FsM08U1GspAn4uksQPNeniOtCn8gIzM8OPQOolMtZpLknW5ewYgwEZ4cmpDfwIXKR%2F0%2FRIo2RhVGEfQYgpR6P7TmYKWNf9S4ZAc9W7TfpNZQUp%2BaOa84qro1Jx9t2%2BIIBG61LjWtx4S%2BycN5bHXZ58uOzH1gqQE91pHPptV35FURaW4HNxyG3AOUazUWV&X-Amz-Signature=7553c79ff4fcc6be12a9337835d81b41b7da5d1a023bacd387048212d142362f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
