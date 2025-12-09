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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEOBFUI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbhQawvlPm7PjxnssbyWpTlZY5TfJgYGPy3PrYDxO1EwIgaQkoVzJBahXLNZ%2FGkewLuut0CGZ3iKPY5rpd7VH0SOgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYZIKaqhJlMD%2F9uISrcA1DUErXAZyuVc3Fq0mz204VyAUn1z81pzcWYoo8sM9%2FicdLvpBkdZoFvDjw5mt8bNiiWQCYBCG3O2Y2HrjU73VRdb0PMaU%2F5H2ThmkjIYJi5IzhvMygc1OSQXSOT5xmSvxDXtxw8ITLUYwqHkXxEfS0e5hqzjdPL%2By%2FMGzKwK6wmcn1QO0R0t29CsSp%2Bkstz8CB0v4gvXCvwiu68Plvv%2FMmh%2BEEvcBae%2FnqJGGj9FcT6vCeJj%2F5dH59x6VH9oOsabGo0hyg60KVQD14uZ6VRhAL5yBtq%2B5n8RC%2BbJnwlhT9CoS5tr72hEFeob5wZpD3D%2FFRmoBnmMeIDIS5lptCTpcKyHRoAOTZuEUoCuUKQ3V5%2B%2F83NvyLOsBRFC8ndClM0oN1PoN0kvR1cmIFmDfv7Q1Oj7KVMYQJgsNKajyceK7tQW1CXbteeZ9TrILQ3RZeOZeEhAeGm0N7nMOjT0rQQqZ0QUYnM3w0HK44pRy%2BvCkdBll6g4SIDh4nISbSO%2BSVNg99JKqRm15SxDETKFqaIIdpCD5wtDxD%2BAjpbnG7JF297BmLbINVdS6qbORMm%2B1v8ALkkICkrUq7rhYOMx52A%2Fwp7XPB5okWwvIJmAXYoETT2Y2aGVXfJihrDQpFPMK%2BH38kGOqUBSW34ETNHbHJ5O4QqbLXhcuHYXQzvIj6QJsYrow5lLWfJwDa%2FfYuBpfWEKy7D6JlxGtJSVrlwP3cKTZIqOzR3avcYfS1uae%2BUPso0PpbBbfNNiZQT4wlPRY1CbdIEYabS5b1Oywsw1vdV%2B2HjJHNbvgPhbV%2FEGbm79Hg0%2BNUyDNj%2FBe8FQtGBTDKA8ONeLOb4i1kVQOhiM7T%2Ff31XeWwsbbRa3fzx&X-Amz-Signature=58c46e7935ac2d71fd2c28dac728f7fba13d8b7c3c84546d49d1c27df4439ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKEOBFUI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbhQawvlPm7PjxnssbyWpTlZY5TfJgYGPy3PrYDxO1EwIgaQkoVzJBahXLNZ%2FGkewLuut0CGZ3iKPY5rpd7VH0SOgqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPYZIKaqhJlMD%2F9uISrcA1DUErXAZyuVc3Fq0mz204VyAUn1z81pzcWYoo8sM9%2FicdLvpBkdZoFvDjw5mt8bNiiWQCYBCG3O2Y2HrjU73VRdb0PMaU%2F5H2ThmkjIYJi5IzhvMygc1OSQXSOT5xmSvxDXtxw8ITLUYwqHkXxEfS0e5hqzjdPL%2By%2FMGzKwK6wmcn1QO0R0t29CsSp%2Bkstz8CB0v4gvXCvwiu68Plvv%2FMmh%2BEEvcBae%2FnqJGGj9FcT6vCeJj%2F5dH59x6VH9oOsabGo0hyg60KVQD14uZ6VRhAL5yBtq%2B5n8RC%2BbJnwlhT9CoS5tr72hEFeob5wZpD3D%2FFRmoBnmMeIDIS5lptCTpcKyHRoAOTZuEUoCuUKQ3V5%2B%2F83NvyLOsBRFC8ndClM0oN1PoN0kvR1cmIFmDfv7Q1Oj7KVMYQJgsNKajyceK7tQW1CXbteeZ9TrILQ3RZeOZeEhAeGm0N7nMOjT0rQQqZ0QUYnM3w0HK44pRy%2BvCkdBll6g4SIDh4nISbSO%2BSVNg99JKqRm15SxDETKFqaIIdpCD5wtDxD%2BAjpbnG7JF297BmLbINVdS6qbORMm%2B1v8ALkkICkrUq7rhYOMx52A%2Fwp7XPB5okWwvIJmAXYoETT2Y2aGVXfJihrDQpFPMK%2BH38kGOqUBSW34ETNHbHJ5O4QqbLXhcuHYXQzvIj6QJsYrow5lLWfJwDa%2FfYuBpfWEKy7D6JlxGtJSVrlwP3cKTZIqOzR3avcYfS1uae%2BUPso0PpbBbfNNiZQT4wlPRY1CbdIEYabS5b1Oywsw1vdV%2B2HjJHNbvgPhbV%2FEGbm79Hg0%2BNUyDNj%2FBe8FQtGBTDKA8ONeLOb4i1kVQOhiM7T%2Ff31XeWwsbbRa3fzx&X-Amz-Signature=4d4af8a9b089bfbbbbf7d6793a162dd6c1727c9d10dbce2e3451a534ef569fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
