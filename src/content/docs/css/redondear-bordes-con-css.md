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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5BCOR5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsKio7ak37fqjNf0gnhKDR1diyHZC%2BEGhYpgH95g7RYQIgOPV07yDvRrYjjuwrAY93Lz78mg5Wqcud3WO4lkoiJBkqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeJMXZJ7rgp7eR7DCrcA4aM0zdYEka2mzFj5SUHsDi1elV%2FM4CO3w6r6Qa8LjfwJ7zmvf2mjSI5O9csQloU7tXJ9H5RNH61Apik7kQF7dfbdyR1oWJVQZCH7qUWZ7e4WmZNESp%2Fs2zi7qvYx1%2FWZPaWL7BB5v4LLJHwI2V8xNzWE5C282lIBs%2BebUim1YUS5t1195lNt4a25mjj8m6qJOR6Tg787ZE8eqFV%2BDg6GpqKZlAA8jqkfhBbJ%2FisX4TQFx80VfoDmHV8zjq62%2B6oJcq6Z0yjmBly7TVjLl0FC6mQgqZLG0uyny5FplsbXYCep7V9Iwm9qDtHwTKNa1Fd%2Fa0U4o9%2F9znHqkAgKbm2NhD%2Fy9gGf7eYgLYiVr7PfK%2F%2FypHzEq2XedpgzZohGoZraleIhBxqfYhcFCqmUYAFeRIvIbNuHgMZou44MZ%2BYHnJdDTUzc5h4rs9oTcG0Z2QSSRT8iCEr8O9j3zMZG867bNH1JTrFKEJTo23VZadrCXofFnI7RDTP7xFhsFyE%2BuABsvMnyhgdkF3wtyLMLevog7HhNXlxIiHMYm3JJ1wkIBIBIy9UiVcW1WKGLUc1qX%2FsDNhwBQu3N6LEHY%2Bxauv5vNatwQzcX%2BmTf7KmANxQy2W%2BkyS0b%2BHHfI%2BRRT6lMOvG18kGOqUBM6ZFcYoXqJ6HpwUtUogd1h%2Bjh6qqYZ56quAmcrJ05XNz%2Bf4trzvXf%2FDWTHV9xurvsE0AEcJKuqdVV8RaBfBPMMYZFq%2FFca9XaYb1IJEMboMwe4CJY0Aerr73JVPj%2FDqWVmuYvQ%2BATm7AM23bs8gnaDdqvSL8oS7bXF43DSNmsbJHUGHMT%2FS5sDHt7Q9EnSP11x7PTixntaCs5Z2d9pH5mXGUKA8q&X-Amz-Signature=e71237ddaae61797e02cf97c07a8d9d9ed600e967c49bac60e1be83a7bed71a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5BCOR5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsKio7ak37fqjNf0gnhKDR1diyHZC%2BEGhYpgH95g7RYQIgOPV07yDvRrYjjuwrAY93Lz78mg5Wqcud3WO4lkoiJBkqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeJMXZJ7rgp7eR7DCrcA4aM0zdYEka2mzFj5SUHsDi1elV%2FM4CO3w6r6Qa8LjfwJ7zmvf2mjSI5O9csQloU7tXJ9H5RNH61Apik7kQF7dfbdyR1oWJVQZCH7qUWZ7e4WmZNESp%2Fs2zi7qvYx1%2FWZPaWL7BB5v4LLJHwI2V8xNzWE5C282lIBs%2BebUim1YUS5t1195lNt4a25mjj8m6qJOR6Tg787ZE8eqFV%2BDg6GpqKZlAA8jqkfhBbJ%2FisX4TQFx80VfoDmHV8zjq62%2B6oJcq6Z0yjmBly7TVjLl0FC6mQgqZLG0uyny5FplsbXYCep7V9Iwm9qDtHwTKNa1Fd%2Fa0U4o9%2F9znHqkAgKbm2NhD%2Fy9gGf7eYgLYiVr7PfK%2F%2FypHzEq2XedpgzZohGoZraleIhBxqfYhcFCqmUYAFeRIvIbNuHgMZou44MZ%2BYHnJdDTUzc5h4rs9oTcG0Z2QSSRT8iCEr8O9j3zMZG867bNH1JTrFKEJTo23VZadrCXofFnI7RDTP7xFhsFyE%2BuABsvMnyhgdkF3wtyLMLevog7HhNXlxIiHMYm3JJ1wkIBIBIy9UiVcW1WKGLUc1qX%2FsDNhwBQu3N6LEHY%2Bxauv5vNatwQzcX%2BmTf7KmANxQy2W%2BkyS0b%2BHHfI%2BRRT6lMOvG18kGOqUBM6ZFcYoXqJ6HpwUtUogd1h%2Bjh6qqYZ56quAmcrJ05XNz%2Bf4trzvXf%2FDWTHV9xurvsE0AEcJKuqdVV8RaBfBPMMYZFq%2FFca9XaYb1IJEMboMwe4CJY0Aerr73JVPj%2FDqWVmuYvQ%2BATm7AM23bs8gnaDdqvSL8oS7bXF43DSNmsbJHUGHMT%2FS5sDHt7Q9EnSP11x7PTixntaCs5Z2d9pH5mXGUKA8q&X-Amz-Signature=fdfb7ad0cb3425b914677cbc8a573bd88194262e7721f6fec6c649992df85118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
