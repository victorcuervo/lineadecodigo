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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBP4W6L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwltw0hFeMcAmc4T8itab3WYW4Ogn4wblc%2FldVcodghAIgP1%2BbnBJdWDaWBBPDXluzo8EsPjub2MonQaH23kT5Nusq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBuSXZYVF1H8AVv8IyrcAyaliHYKKbADt3Pc%2FjB%2Fhp56m4yCf0ir96VK%2B0iYLOcrslUrlWnh9dzmTOXrkvBtvhzzpvw4xv%2FPupxgoJdJ0EboyIEVUloS%2FDi9Oh8Qt3Pr3cDu2u0%2BjaTmzpmXeJlkGF90InaEqiTlfGAKek3HhU5Gvygp3hqvIQ%2FQYKgm4D1s25jOBckmIMJ4KgU46OdaNcnUCNO%2BrkRwPqBrwSZkMXJnkzSPenHNnHNW8rH%2BKzuT7sjv00CHK8%2Fl4uKl3RuPGxUmR5DMw16A7Nh%2B5jWrM9fiVckbDbLgHqP%2Fh9EDrCgmzDVE8OaaQ03CU6kBPSWl9gNRJemApg7iCn9W%2FTnaIKXQ48Vg8QiJxuMMSrsL0KZ%2FwxhesUn3CcRngC9P3J49EsJgGSgtwWNDfj%2F4ujLiucR8ut%2BqAetfIFCFPZcpIe%2BSfH%2FIDwuuCuCeAbuo5by0jYpxu31Beffaaj%2BSD2ie5WvzTuHGZBATzlDKp3GvJ1K%2Bpo6ld9nZQYL8ZLVzlmPAZTqUC%2F7uMUXjRPLP%2BCXsaZXv73ad8VpTk9jdrATVyP0X4%2FZuW%2FxK%2BzfU%2F5u%2BlZ3vrNzpq131DbSzgu5dYeftEJixzmDjDyF03%2Fb8b14GMc7R4bVGlAugYrAKo6%2BMMKrpiMoGOqUBtm5YRdudfc5REtQqw2UQxgzHSeTr0%2BVtE4thp%2BSuIErARubWa16lSQRjeCkJSgMY051dqET%2FkSU0PY4IYM28NUxwffK5IKXzRu22QCpz5d%2B1bkMIHmCnPBqQATu0W0hEnrciV05MdmuwJY3UMnIQE7g6glcCzTq8JOQeUcAeWFrFTpbSwcRl6tI%2FFusabY3ZJ3AVyYWdy9PYssyRBy%2B%2BtCt8RLZF&X-Amz-Signature=1c4d2a13bc32a1836b55ec320a100aa9006c5b98848a416791031147a7a07b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBP4W6L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwltw0hFeMcAmc4T8itab3WYW4Ogn4wblc%2FldVcodghAIgP1%2BbnBJdWDaWBBPDXluzo8EsPjub2MonQaH23kT5Nusq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDBuSXZYVF1H8AVv8IyrcAyaliHYKKbADt3Pc%2FjB%2Fhp56m4yCf0ir96VK%2B0iYLOcrslUrlWnh9dzmTOXrkvBtvhzzpvw4xv%2FPupxgoJdJ0EboyIEVUloS%2FDi9Oh8Qt3Pr3cDu2u0%2BjaTmzpmXeJlkGF90InaEqiTlfGAKek3HhU5Gvygp3hqvIQ%2FQYKgm4D1s25jOBckmIMJ4KgU46OdaNcnUCNO%2BrkRwPqBrwSZkMXJnkzSPenHNnHNW8rH%2BKzuT7sjv00CHK8%2Fl4uKl3RuPGxUmR5DMw16A7Nh%2B5jWrM9fiVckbDbLgHqP%2Fh9EDrCgmzDVE8OaaQ03CU6kBPSWl9gNRJemApg7iCn9W%2FTnaIKXQ48Vg8QiJxuMMSrsL0KZ%2FwxhesUn3CcRngC9P3J49EsJgGSgtwWNDfj%2F4ujLiucR8ut%2BqAetfIFCFPZcpIe%2BSfH%2FIDwuuCuCeAbuo5by0jYpxu31Beffaaj%2BSD2ie5WvzTuHGZBATzlDKp3GvJ1K%2Bpo6ld9nZQYL8ZLVzlmPAZTqUC%2F7uMUXjRPLP%2BCXsaZXv73ad8VpTk9jdrATVyP0X4%2FZuW%2FxK%2BzfU%2F5u%2BlZ3vrNzpq131DbSzgu5dYeftEJixzmDjDyF03%2Fb8b14GMc7R4bVGlAugYrAKo6%2BMMKrpiMoGOqUBtm5YRdudfc5REtQqw2UQxgzHSeTr0%2BVtE4thp%2BSuIErARubWa16lSQRjeCkJSgMY051dqET%2FkSU0PY4IYM28NUxwffK5IKXzRu22QCpz5d%2B1bkMIHmCnPBqQATu0W0hEnrciV05MdmuwJY3UMnIQE7g6glcCzTq8JOQeUcAeWFrFTpbSwcRl6tI%2FFusabY3ZJ3AVyYWdy9PYssyRBy%2B%2BtCt8RLZF&X-Amz-Signature=beb237e9e4e92cb2d17e7e25c4b27b8b6853633ff8618397a98ebeedacf71f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
