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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOBXMYGM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCl2%2FizsVl0sdTpf%2FnGqbST1pU7V2wIH86%2FRAp474i%2FFAIgE5T8GrHE7SxpYGvafl8P0XuCrhk3cPUxALtKw4FnnJkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPrYgH50Gcfg1dFWIyrcA%2FFdQY2nQk6BebBRVzLlodKJP2124uK7oazqObKsULyQLvS398R2ZefaaMJZs9GymC9rCsA0pfDtzrek3Z1YYZ3TezNgIRnW7OhsvD9GVqF6RPVLmpT%2BeIMDBF8rsnva6rIDbduTR%2F8nOfAZqJ74UyiDe%2BWjcEXWVlR8ykrxaomeUYzpT%2FedS14D%2FpTdQ41G3HCT3LgYxviD7BBA3nYvSvweKPkDxyhCu7Cpg5sesYNt1gpUid9pUZOfhauSejrvl%2FOCl6%2BNfNPsckofK0aNHDxWOLKhW2quTKPgkc%2B2g0%2FGmxgZu5buJIws2TnoY6XWUf6j2Lz1kvXj5oVTY%2B7gvlNx%2FouOP9tJO4pvnaRY2%2FYr7PEMQWGqQ0Ca3k24LYmE3RbD0AdJ9uIWPhWqUS%2BV3nMe71ERx%2BtJt0%2F9fxnV4x80xgVjLLTZ2VkgmFvnVjcn40Q8lL3byHBUyf5Qum45OODpljWbdbfOK8oBsu1Ds%2BUibtyOSIZ6FhJR0o0v7ShpFFMA2bL53AzN15S0mYaWrauIDWId0aSC1T%2B3JiUy8%2BzAqAWZx6sn3hRZce6vviDRiY32tqj53b8zMCWlKW3d%2FcXzsBvoOu2l5zY6m2pzVQSHTPMohnpTKfu7yVXqMMGhxskGOqUBWJ2xWhg2zek2AKR%2FWy1lACC0e8bS2XmZ5xahLySbnyDlBRzsk0VokJp5As1cC81lKnWimKpJHEuZWlzDIGzCZmNA9S9QU3KEZ%2FOAy9ktCJxzOFkt4mkPjosPgTkfKJeQmzp451wquNvb7fjnCh5BErfhIkYSHijFdys%2Bdr2CJcmt6vUAUGENQ9kfc%2FehIclH4IeqotY2TK4mIGz2Ol0QJkK72w7l&X-Amz-Signature=914b60004292c9e3a9eb96e67e0d26bcae81c3acfbdb82bbeaecafbbf42150e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOBXMYGM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T141735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCl2%2FizsVl0sdTpf%2FnGqbST1pU7V2wIH86%2FRAp474i%2FFAIgE5T8GrHE7SxpYGvafl8P0XuCrhk3cPUxALtKw4FnnJkq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDPrYgH50Gcfg1dFWIyrcA%2FFdQY2nQk6BebBRVzLlodKJP2124uK7oazqObKsULyQLvS398R2ZefaaMJZs9GymC9rCsA0pfDtzrek3Z1YYZ3TezNgIRnW7OhsvD9GVqF6RPVLmpT%2BeIMDBF8rsnva6rIDbduTR%2F8nOfAZqJ74UyiDe%2BWjcEXWVlR8ykrxaomeUYzpT%2FedS14D%2FpTdQ41G3HCT3LgYxviD7BBA3nYvSvweKPkDxyhCu7Cpg5sesYNt1gpUid9pUZOfhauSejrvl%2FOCl6%2BNfNPsckofK0aNHDxWOLKhW2quTKPgkc%2B2g0%2FGmxgZu5buJIws2TnoY6XWUf6j2Lz1kvXj5oVTY%2B7gvlNx%2FouOP9tJO4pvnaRY2%2FYr7PEMQWGqQ0Ca3k24LYmE3RbD0AdJ9uIWPhWqUS%2BV3nMe71ERx%2BtJt0%2F9fxnV4x80xgVjLLTZ2VkgmFvnVjcn40Q8lL3byHBUyf5Qum45OODpljWbdbfOK8oBsu1Ds%2BUibtyOSIZ6FhJR0o0v7ShpFFMA2bL53AzN15S0mYaWrauIDWId0aSC1T%2B3JiUy8%2BzAqAWZx6sn3hRZce6vviDRiY32tqj53b8zMCWlKW3d%2FcXzsBvoOu2l5zY6m2pzVQSHTPMohnpTKfu7yVXqMMGhxskGOqUBWJ2xWhg2zek2AKR%2FWy1lACC0e8bS2XmZ5xahLySbnyDlBRzsk0VokJp5As1cC81lKnWimKpJHEuZWlzDIGzCZmNA9S9QU3KEZ%2FOAy9ktCJxzOFkt4mkPjosPgTkfKJeQmzp451wquNvb7fjnCh5BErfhIkYSHijFdys%2Bdr2CJcmt6vUAUGENQ9kfc%2FehIclH4IeqotY2TK4mIGz2Ol0QJkK72w7l&X-Amz-Signature=1a257abb9835273439f972d076aa912e1c6c1f1ab0f72007fce8da336ffeae1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
