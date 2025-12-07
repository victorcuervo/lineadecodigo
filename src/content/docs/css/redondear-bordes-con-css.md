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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SUHBIHP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqcNowJ2mQCdb4mfNNdtdLt3PDrPeA3xEhzTHeXVLCVwIhAMwqDXwOSx4XVML3bMgAOtmyEVzr0b%2FtDvVBsVQUhBxhKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKcLJXKdS7NB4IKNsq3AOYHFEe39ub0KcwC0QGx3ct5TR5xQiHshl5KkuIdSx9PqYk4%2ButVy7hj09iXqfVajLWvu3ib5hw32iQbmBx7E6hSdbLKDcMgwIFnbvs5XqTu6gD6AWI02WbByOkVNTijZ3aScscBcLvSjsj2fGLcedM0wsUKcOjL5bMmXfKGEGBsZpIiHNS%2F89r3tYIoVcLieKY73EeHwJRaYIxOeeh0Z08i7C8SU49yY6ckePhLUoaZMBVNwLgwM9UuTpU0x1lTCL2661xCFJaz%2F8FCNDfwH3bzCKskeUJKB3VKOIdQD50K9rrmR69LnIaxUDzs8NMl4QjXIWsdAXChbZDBy7MgEhLAqcJTyEDMJvJKcj%2FQLZtBkhKBLQ%2BxlRPbKNkgE%2FrfYdtD9mUEHSQE3Y1gXUY%2BEZX2F86jEfwBs4fPq0pv6NIR5V6E6WtiusvE6HGaiv8UyM4PqloF%2FUX8E44ds4ZJfFrXPqLzyZAfoCfB41ozIx0VgQcXoc78f7O%2FO7q0wb2GOzpDVJ0rC4IbyigI%2Fv3E%2BsoEJZol4FhnaaqMWUtsg4MoFf6x%2FBjM8cJn4Qb9%2FGiPEYKAsYz8XdagQY3e2kNdj81y%2F%2BWIHEZRaOGyMjXnawvH5aqN2DnFikyzNLdTDCg%2FdLJBjqkAZlDMTgSrGVjVKkN7Cebr%2FAWZ5uw05OeHf2Sx1tipcaoAjY5bKd3aeaVmtsgklhm0iMsJuMzYy2IqrsZOkkCe3eAmgulN4XRwXe3pxRZX7%2FvSz98b6Wja3dt04WhrqzqoSg0bRIxUa3iJmBg8goVxYBwBrDUPu8nC3%2FiQLhoW4OgpVbjR67o0983hyV0Xbx8EUGAF8mNM%2FGr9UmhpNl1c%2BsxKcHV&X-Amz-Signature=c944a19c3543290e8661c51663c8d36d569772268ca4ddffe0b8d7585dd347ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SUHBIHP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqcNowJ2mQCdb4mfNNdtdLt3PDrPeA3xEhzTHeXVLCVwIhAMwqDXwOSx4XVML3bMgAOtmyEVzr0b%2FtDvVBsVQUhBxhKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKcLJXKdS7NB4IKNsq3AOYHFEe39ub0KcwC0QGx3ct5TR5xQiHshl5KkuIdSx9PqYk4%2ButVy7hj09iXqfVajLWvu3ib5hw32iQbmBx7E6hSdbLKDcMgwIFnbvs5XqTu6gD6AWI02WbByOkVNTijZ3aScscBcLvSjsj2fGLcedM0wsUKcOjL5bMmXfKGEGBsZpIiHNS%2F89r3tYIoVcLieKY73EeHwJRaYIxOeeh0Z08i7C8SU49yY6ckePhLUoaZMBVNwLgwM9UuTpU0x1lTCL2661xCFJaz%2F8FCNDfwH3bzCKskeUJKB3VKOIdQD50K9rrmR69LnIaxUDzs8NMl4QjXIWsdAXChbZDBy7MgEhLAqcJTyEDMJvJKcj%2FQLZtBkhKBLQ%2BxlRPbKNkgE%2FrfYdtD9mUEHSQE3Y1gXUY%2BEZX2F86jEfwBs4fPq0pv6NIR5V6E6WtiusvE6HGaiv8UyM4PqloF%2FUX8E44ds4ZJfFrXPqLzyZAfoCfB41ozIx0VgQcXoc78f7O%2FO7q0wb2GOzpDVJ0rC4IbyigI%2Fv3E%2BsoEJZol4FhnaaqMWUtsg4MoFf6x%2FBjM8cJn4Qb9%2FGiPEYKAsYz8XdagQY3e2kNdj81y%2F%2BWIHEZRaOGyMjXnawvH5aqN2DnFikyzNLdTDCg%2FdLJBjqkAZlDMTgSrGVjVKkN7Cebr%2FAWZ5uw05OeHf2Sx1tipcaoAjY5bKd3aeaVmtsgklhm0iMsJuMzYy2IqrsZOkkCe3eAmgulN4XRwXe3pxRZX7%2FvSz98b6Wja3dt04WhrqzqoSg0bRIxUa3iJmBg8goVxYBwBrDUPu8nC3%2FiQLhoW4OgpVbjR67o0983hyV0Xbx8EUGAF8mNM%2FGr9UmhpNl1c%2BsxKcHV&X-Amz-Signature=4dd8908790ce2ad1892fa45f04c7b05c59bcc02c74e1a36c2e555ab045b2da17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
