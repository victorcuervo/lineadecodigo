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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDGVTZ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIxM34P4MPtk%2B0d7Kv7DWIIN2oyzExIfgbR2aVqL9uJAIgURxUk3SvXRoIqNktGoBgNHPY%2FhElPrshUyBgpkw3PYYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKIrqApP0vk8Wt1cGSrcA%2FNarMvr4YC4dZ0Tcjc6rD0Q%2BUx2UlBzObPACWKwDFUetUdZCFyYDEHVWQeyJZpDmf9%2BnCJ4BvQScZCETOgTikLAKT84dwvzQdLmejs55tYsnzWgeYk0tQB%2F0Ip3k1FxEvV2fYgkRAq0Uy%2F8oc2U13H9s%2B0kQWceLeI1fWKLO%2BHYgKjZ0%2Bvq9YqJXmtUH7fQNKZaXWASHqH2VPLwad3gMJfffC0BFRLvk4U6qSsOv8LqFlZxa9yybG61UUtkNafx8Si4kEyCiLAw8Yp9f730zrszjjzl4sJn0Wy38ymf2KTqf1dVrGHSECJHSeJ8UyPtP7Y%2BaxEyFCkYFAfG7Rj8UbWxaMRKbzCncOGb19x5U0Uu72nYNn2YTnsH7o87FO5pCZVxiL9oFWDuEr%2FI0ZXv6NgCB1YtN0eUog63ZK3NJqQ8G2%2Bi6Yimfe8uJGxRnBRae37Zja8dFvgiS3D9xCn4miPLGHgnyYg6402CxZJUaPeT1HaUknNjsxgi6XVC4YDuoycKNR5vXji7WqD31lyt%2BLKTzoItVRgS3PtN%2FLofxuGwTmdHMDpxSoM%2FiUfH%2BMTfzdL%2BWkoHjQ89tzExdLI7rYAhBifsnQt5yCBuOdCU1NZkOsmD66bdXcrSyvXZMOOOisoGOqUBRBMNczXx7CdNExQsgbJNxKOzlL0VKCfQ6LeC3UAjSm3AV2yLgDtPWgPk40FkAVHSTTPsT9b%2FG1j%2Fape9gbPCZKnoOrZTN%2BTYuzHtVQin2%2BlBeoCpe15S0hI9mnnYHRWcz0Dj3k699wUWft8bLohHjFAN3kMuRSpW0%2FlHAlEaRRmjfK%2F73xk12zK8S%2BCt2A4A%2Fm8xVyTyJdZS%2BLhRuneHgPDTrqHV&X-Amz-Signature=c2ad0faf81ef3fc7f5411ec187194fdd5a2d9303ea9b176eaef1e8ad9a05116a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHDGVTZ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIxM34P4MPtk%2B0d7Kv7DWIIN2oyzExIfgbR2aVqL9uJAIgURxUk3SvXRoIqNktGoBgNHPY%2FhElPrshUyBgpkw3PYYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKIrqApP0vk8Wt1cGSrcA%2FNarMvr4YC4dZ0Tcjc6rD0Q%2BUx2UlBzObPACWKwDFUetUdZCFyYDEHVWQeyJZpDmf9%2BnCJ4BvQScZCETOgTikLAKT84dwvzQdLmejs55tYsnzWgeYk0tQB%2F0Ip3k1FxEvV2fYgkRAq0Uy%2F8oc2U13H9s%2B0kQWceLeI1fWKLO%2BHYgKjZ0%2Bvq9YqJXmtUH7fQNKZaXWASHqH2VPLwad3gMJfffC0BFRLvk4U6qSsOv8LqFlZxa9yybG61UUtkNafx8Si4kEyCiLAw8Yp9f730zrszjjzl4sJn0Wy38ymf2KTqf1dVrGHSECJHSeJ8UyPtP7Y%2BaxEyFCkYFAfG7Rj8UbWxaMRKbzCncOGb19x5U0Uu72nYNn2YTnsH7o87FO5pCZVxiL9oFWDuEr%2FI0ZXv6NgCB1YtN0eUog63ZK3NJqQ8G2%2Bi6Yimfe8uJGxRnBRae37Zja8dFvgiS3D9xCn4miPLGHgnyYg6402CxZJUaPeT1HaUknNjsxgi6XVC4YDuoycKNR5vXji7WqD31lyt%2BLKTzoItVRgS3PtN%2FLofxuGwTmdHMDpxSoM%2FiUfH%2BMTfzdL%2BWkoHjQ89tzExdLI7rYAhBifsnQt5yCBuOdCU1NZkOsmD66bdXcrSyvXZMOOOisoGOqUBRBMNczXx7CdNExQsgbJNxKOzlL0VKCfQ6LeC3UAjSm3AV2yLgDtPWgPk40FkAVHSTTPsT9b%2FG1j%2Fape9gbPCZKnoOrZTN%2BTYuzHtVQin2%2BlBeoCpe15S0hI9mnnYHRWcz0Dj3k699wUWft8bLohHjFAN3kMuRSpW0%2FlHAlEaRRmjfK%2F73xk12zK8S%2BCt2A4A%2Fm8xVyTyJdZS%2BLhRuneHgPDTrqHV&X-Amz-Signature=4b492d798fbc619aa4bb56d9f62398c194c20f2ac7da725eb57a1caa48da1673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
