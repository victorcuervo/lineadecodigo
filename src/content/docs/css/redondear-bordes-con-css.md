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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJK2ZOF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7D6aw3Fl%2FQ%2BTIUMc77r989pRWH7RbXtGoFUFpyIgstgIgDHCE9rpzpL8RzDHuYRo0rkb0%2BAHRwZFSDvXkRoI%2FM8Qq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKa6Ypc9uYSEV3au8CrcA4hcujx6i0pXfYRr7S5gqZEqOTOWkHhkXPESjuWCgF7l6fmRhQRRx8R%2B201YHHnrZHfAvFx0c8PBfELzKvrIIdeUXi%2FOS%2BDnM9IrYLfEu15CovOv%2F1rR8PQMiWX9BNT7ltVMOernrbFYMYGDJHQJgFQtQmI%2FQs%2FEOAI2%2BUKtjkKVWBc%2BIsW1WZge8Y%2FWAAoejh%2BJ8yht6B65IcNskbDF6WD%2F5XRWq%2FIAzTNojGvWPQZ34CUzQmsQlU%2BcOo%2FevE%2F7s8BGpSUUGzdZY8WTxcWzrGYR2Bi9TwfC0iTlG3M8FxttB41X9PXTmJWtD6eDtuU4hxAGkO%2BVdYcYUhI6tgw%2FZ8%2FjFPjSox7nDDuei7ea6%2Bi0%2FOnpL2sYU2tX0JSYqkkHhScnnlDqsB9X0BV%2BAfMHaZLJkzf3MPeuc0fAmrR%2FULsiIXGddbp9P3VLU%2BixjWRun9epHo0CwNjDDaicdB7ZMobTZeyxyPTreRcvSA88%2B6engu1zRZfWauxFUCw2FTaVOHiegGWZFZb1pIIOpJaLYZamEqdR4qTMOCj6DBaBUPowEljqHtX0y7Dz0Z%2FNbfUaZUi6ysWI4I4NCVE%2F7YGl2C6iVbp96h%2FgpL9smNl5kszSBp5cEYKY%2BthXQX8KMOXFzckGOqUBCI5QI26sYnAjytJA0gmm6mOB0slTXLHySHRA%2BG%2B0UBwovO3Rdwbp1BFYAswpsOMJfbPC1%2B8qmIf5pABPUO3ph32SuqKFEeC0sHOqZM3wMvWFtFN2tFZkBWtcQLssDcZVPCRhGP8KQDqgE8Przz%2FeNz6uPAbN8s6HfI%2B5VcnOAMxjpK2OuWrKjKJA98u1ro74tBCw6%2FmogpLflK%2FZ5pJFC2SkuwCo&X-Amz-Signature=0db1944a8faf4032afeb5aaae99fb4bb736d60f36ed7e4880582f90f53e90f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJK2ZOF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7D6aw3Fl%2FQ%2BTIUMc77r989pRWH7RbXtGoFUFpyIgstgIgDHCE9rpzpL8RzDHuYRo0rkb0%2BAHRwZFSDvXkRoI%2FM8Qq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDKa6Ypc9uYSEV3au8CrcA4hcujx6i0pXfYRr7S5gqZEqOTOWkHhkXPESjuWCgF7l6fmRhQRRx8R%2B201YHHnrZHfAvFx0c8PBfELzKvrIIdeUXi%2FOS%2BDnM9IrYLfEu15CovOv%2F1rR8PQMiWX9BNT7ltVMOernrbFYMYGDJHQJgFQtQmI%2FQs%2FEOAI2%2BUKtjkKVWBc%2BIsW1WZge8Y%2FWAAoejh%2BJ8yht6B65IcNskbDF6WD%2F5XRWq%2FIAzTNojGvWPQZ34CUzQmsQlU%2BcOo%2FevE%2F7s8BGpSUUGzdZY8WTxcWzrGYR2Bi9TwfC0iTlG3M8FxttB41X9PXTmJWtD6eDtuU4hxAGkO%2BVdYcYUhI6tgw%2FZ8%2FjFPjSox7nDDuei7ea6%2Bi0%2FOnpL2sYU2tX0JSYqkkHhScnnlDqsB9X0BV%2BAfMHaZLJkzf3MPeuc0fAmrR%2FULsiIXGddbp9P3VLU%2BixjWRun9epHo0CwNjDDaicdB7ZMobTZeyxyPTreRcvSA88%2B6engu1zRZfWauxFUCw2FTaVOHiegGWZFZb1pIIOpJaLYZamEqdR4qTMOCj6DBaBUPowEljqHtX0y7Dz0Z%2FNbfUaZUi6ysWI4I4NCVE%2F7YGl2C6iVbp96h%2FgpL9smNl5kszSBp5cEYKY%2BthXQX8KMOXFzckGOqUBCI5QI26sYnAjytJA0gmm6mOB0slTXLHySHRA%2BG%2B0UBwovO3Rdwbp1BFYAswpsOMJfbPC1%2B8qmIf5pABPUO3ph32SuqKFEeC0sHOqZM3wMvWFtFN2tFZkBWtcQLssDcZVPCRhGP8KQDqgE8Przz%2FeNz6uPAbN8s6HfI%2B5VcnOAMxjpK2OuWrKjKJA98u1ro74tBCw6%2FmogpLflK%2FZ5pJFC2SkuwCo&X-Amz-Signature=2bb843a98095548374f45cbcd76e21a16ba01987fc10f4a88ba49d197fb1920d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
