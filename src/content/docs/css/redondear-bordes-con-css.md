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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z26U3XD3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdGKlyKkrGOPo4gbXC%2B3y3Lu%2BAWFx6Xi3kdIgZJEPc6QIgP6NxXqkqbqWniyhK%2BkrJ1GK6tRszNE9NuK40Mq6GXcwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCVHYl2hX3ZHvTtgircA1ACMN%2FQAm3zR8LR%2FrRU2OOAlV%2BbZnr23Gph1kTXZo8sHYICx5WJUADxbiMCW9eJ1jFtgiNCgQjagnK5WHn%2BAfWO9FcJdsJt1kpm6illPpympjAd9eSidx2j26ejVo5DLqEta7wHfxJQba6aYZPf300ou5zKYAUIbkCdBwu4VqMM30FjaFQy3B3%2FKW3E5YIvGIAjO6v3DdJsFQGEo5bvg0xqwNPT4TVqmawhMVG5vuyMoLJRrgVJZiHUx6js12J1thkjCl1MjS1WyHrEZDLZet763jUJAAi6a2vfwj3uGIShjVygr9zI2TPs1UUsLQUz2G%2BV%2BZrKKaIOPmnxTeE8Nu6cQ%2BV04eoZlzC%2FChx%2Bx6MijjHgE%2FNE959Q37DkmfdUZN%2BB4DEavpDYtYPqywFWziaIj3rt12mhw1w3s%2FnClbLkyd1dl%2FkUEMoogiTdcbe32NcS4zKuzu%2Bd57cRoZ%2FaI9xkryaYQ5acWulVHnBZ6yzUIF7nW%2BB0EUricM8nP9pUTPBteGpXERyvKl%2BljpgCXBr2RBgAeraByw9A9dBXKNfvwCb011ieJe%2FvY76qfwdigTVgR5eTR1ZoyR7X97d9BUma9tCDPl4PE6NQKvzs9LhYpHh0GpVkTZLz9dGjMMLQ2ckGOqUB1ci6UlDlunnpRuXwyZYNIIM893JTx9qQioLWVlU65r8OiB%2BGfeLsWkYHMCeZCKvoT5zhh95TkEJBpywti5lotJD7vs2goSY9d3ZbQ8dSdr4UkWe0%2BP0Xv8rD6gvGnVlQAAHvakpjN3hhNOKOjohrKvWJA4vocoNTKWkaekjbKZHFsisPRfkfmSLNzEKHZu%2Fr9nA2cLqLC1%2BsQewRxqXWR8kyrHkl&X-Amz-Signature=349bf8c16a1a3171fb7f5db314315288f9ed981dd6df4bebe7af4e4dbb961b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z26U3XD3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdGKlyKkrGOPo4gbXC%2B3y3Lu%2BAWFx6Xi3kdIgZJEPc6QIgP6NxXqkqbqWniyhK%2BkrJ1GK6tRszNE9NuK40Mq6GXcwqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCVHYl2hX3ZHvTtgircA1ACMN%2FQAm3zR8LR%2FrRU2OOAlV%2BbZnr23Gph1kTXZo8sHYICx5WJUADxbiMCW9eJ1jFtgiNCgQjagnK5WHn%2BAfWO9FcJdsJt1kpm6illPpympjAd9eSidx2j26ejVo5DLqEta7wHfxJQba6aYZPf300ou5zKYAUIbkCdBwu4VqMM30FjaFQy3B3%2FKW3E5YIvGIAjO6v3DdJsFQGEo5bvg0xqwNPT4TVqmawhMVG5vuyMoLJRrgVJZiHUx6js12J1thkjCl1MjS1WyHrEZDLZet763jUJAAi6a2vfwj3uGIShjVygr9zI2TPs1UUsLQUz2G%2BV%2BZrKKaIOPmnxTeE8Nu6cQ%2BV04eoZlzC%2FChx%2Bx6MijjHgE%2FNE959Q37DkmfdUZN%2BB4DEavpDYtYPqywFWziaIj3rt12mhw1w3s%2FnClbLkyd1dl%2FkUEMoogiTdcbe32NcS4zKuzu%2Bd57cRoZ%2FaI9xkryaYQ5acWulVHnBZ6yzUIF7nW%2BB0EUricM8nP9pUTPBteGpXERyvKl%2BljpgCXBr2RBgAeraByw9A9dBXKNfvwCb011ieJe%2FvY76qfwdigTVgR5eTR1ZoyR7X97d9BUma9tCDPl4PE6NQKvzs9LhYpHh0GpVkTZLz9dGjMMLQ2ckGOqUB1ci6UlDlunnpRuXwyZYNIIM893JTx9qQioLWVlU65r8OiB%2BGfeLsWkYHMCeZCKvoT5zhh95TkEJBpywti5lotJD7vs2goSY9d3ZbQ8dSdr4UkWe0%2BP0Xv8rD6gvGnVlQAAHvakpjN3hhNOKOjohrKvWJA4vocoNTKWkaekjbKZHFsisPRfkfmSLNzEKHZu%2Fr9nA2cLqLC1%2BsQewRxqXWR8kyrHkl&X-Amz-Signature=694043f0d35a4be92ee04bd9c39b5c6dd174d4e7c0ca6e19f83636af0425990a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
