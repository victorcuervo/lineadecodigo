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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAWHJ4ZM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw0I06KJsTC2bO13XkpELsUNKrat%2B4avFkSqbS1ZbQfAiEA%2BO6n080fMZF4B0fDzwl9WZCYPC0TgGfnz70Gw3Z1N%2BAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCZjMM2ppn66guiISCrcA3j7hPcGxl0J5ZY4g0Km1wcRbf9toNmAFvVicsxcF0Uolttm%2FiBLPXrTj3lTOFhJ%2FWE5QREpOXfL49mGF0kX6yRey23A5YR3N7gQM60Tl%2BBUIosW90C1i1APVpOdFLOCbcDyr%2FknbMwZSNfvZJS%2B2Xo2CsJfuD7AxL2AiWHrScFLV4paYOMI%2FYtfeymVHCd5v4vfPAQx%2BUJuIfKoxdq%2ByUryJTeDZsHlTeQotvOBTejo7iIOfmNcay3tr%2F68HXZ%2Bes4Qipp0omahR78sHlhvVbNNrs7JSeiA%2BUtzau7Z9jWom%2BbbpW%2BmjhIRqibgwTmATO%2FIw8Mv8HZnKVf8BQiwwmj30IX6TlYBNYFHwk8SY9Mp70ysFoJ8TdVakiBn0GNuCTKXAv%2FkMwVnal2biCa3o4C2LXiZRr7C2uIXFWgxlBiRE6OA%2FXe3a8AddvsQfM%2BzEYoMbJTW8%2FUrZPGNFSEa%2BrYHwxmu3y%2BQXGdBx8QgY%2BUvLxyVNbcXYbDcv8IeZUsmLviZiJuH9m%2BR4lOhm8G09W%2BMjceKiru4zIu5bGwwMu%2BbzKvBdKSr2sv8TDMEmvGtZVOuSgVKNfMdh9vEd23UVjWnxw8LDHbjEEwlYsRl2xlRsGBsmb8lqK1NJVybMNLozckGOqUBTO%2BYpCHxouKuldkcIZ2jdmz0WKbBA3FiEqVui0DartUrxxIhyTBAps3SYlo8gKtmr1t58HsOSJ28G78H6ledqQ2TQE%2ByAOWNLNuSM1KK6Sn7WOytAU%2B4dQVP2XBMCSk9RclhVWYYnZyqvMrjJ8LyhMRkQ9YfVtuaN9f%2BTeYKSrI7%2F6AcV0YEYFnXnHvi%2FbHc%2FIwNw1CwVxHr6eBP6L%2FKNjxHO8Oc&X-Amz-Signature=3b254c57d4ede7d44920c94264097510fe47371b82064ef1272bf01b9936430c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAWHJ4ZM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICw0I06KJsTC2bO13XkpELsUNKrat%2B4avFkSqbS1ZbQfAiEA%2BO6n080fMZF4B0fDzwl9WZCYPC0TgGfnz70Gw3Z1N%2BAq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCZjMM2ppn66guiISCrcA3j7hPcGxl0J5ZY4g0Km1wcRbf9toNmAFvVicsxcF0Uolttm%2FiBLPXrTj3lTOFhJ%2FWE5QREpOXfL49mGF0kX6yRey23A5YR3N7gQM60Tl%2BBUIosW90C1i1APVpOdFLOCbcDyr%2FknbMwZSNfvZJS%2B2Xo2CsJfuD7AxL2AiWHrScFLV4paYOMI%2FYtfeymVHCd5v4vfPAQx%2BUJuIfKoxdq%2ByUryJTeDZsHlTeQotvOBTejo7iIOfmNcay3tr%2F68HXZ%2Bes4Qipp0omahR78sHlhvVbNNrs7JSeiA%2BUtzau7Z9jWom%2BbbpW%2BmjhIRqibgwTmATO%2FIw8Mv8HZnKVf8BQiwwmj30IX6TlYBNYFHwk8SY9Mp70ysFoJ8TdVakiBn0GNuCTKXAv%2FkMwVnal2biCa3o4C2LXiZRr7C2uIXFWgxlBiRE6OA%2FXe3a8AddvsQfM%2BzEYoMbJTW8%2FUrZPGNFSEa%2BrYHwxmu3y%2BQXGdBx8QgY%2BUvLxyVNbcXYbDcv8IeZUsmLviZiJuH9m%2BR4lOhm8G09W%2BMjceKiru4zIu5bGwwMu%2BbzKvBdKSr2sv8TDMEmvGtZVOuSgVKNfMdh9vEd23UVjWnxw8LDHbjEEwlYsRl2xlRsGBsmb8lqK1NJVybMNLozckGOqUBTO%2BYpCHxouKuldkcIZ2jdmz0WKbBA3FiEqVui0DartUrxxIhyTBAps3SYlo8gKtmr1t58HsOSJ28G78H6ledqQ2TQE%2ByAOWNLNuSM1KK6Sn7WOytAU%2B4dQVP2XBMCSk9RclhVWYYnZyqvMrjJ8LyhMRkQ9YfVtuaN9f%2BTeYKSrI7%2F6AcV0YEYFnXnHvi%2FbHc%2FIwNw1CwVxHr6eBP6L%2FKNjxHO8Oc&X-Amz-Signature=fd1392cf026b150f7d227578a40c9919b1ac336090afb07ca6f1618981abe978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
