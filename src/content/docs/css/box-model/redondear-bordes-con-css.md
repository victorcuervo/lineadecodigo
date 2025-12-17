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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665II5HHNK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDehsrXVkj3YZXh9qH%2FlPuRN9jcnZb9ZE89rVuqPBGUoQIgb6%2BJfS8Yoa977WU1t8yShdr5buAoR2Y3R%2BVQeT5Kc0Iq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLwszTSpqsKZrAe%2FfSrcA468mpS14uIgG%2B6nlGbKr1gB1lU1DIByRa%2BmIqNs8qAPryH2MKhdUSLDEv0ofp%2B%2BH%2Fipp4oekrSnxFS1mnDZk5NrqtS0zCwcQ%2Fnl9xDdIVHwSUbqt7G%2BvZxgBnqW9EnsFM%2BF%2FZhkeOP5U4rENjn5tcwr833Z%2FliWL4nB%2BvFXlvLTO1zm%2FEYIVWIWHs0SMbXSlH7lgYICYor2HwwTA2shFh0ogaQVNLvOg3VsxlcboFiwU0OKY2BV7lbMMRrIWyW8xu%2FIqkFs031NCx15U6MdTHaVthm8AGNvGSwYNUbHOhjA47ljKbF5xJ5dtdQyQY%2B5%2B6F47RZEcNXbUqBtwVvUvhRcivifGnfUxkLNEjVNJ1LMjqG3MVQL8VA3zNTGvzpco9tN0GIOHom3BRS3XuYL%2B94xkNx9YjEBjnSXUKhNcC2kCngCehZ%2B6Yfff6ANG2P1yDd%2BFqEZdeVYR7%2BlE20xxeV5sEOR20bSGHkbzapOO1R4X5c00fCC924cYb0Z%2FypjdoT9M3EET2YnIVwjoUzp7nZ%2F47mejym4pGentp5nRHnccgafdAs8C9GR0G7HMCCZN%2BDLnN40QM3JInR1LyHl1QhAUtpoJdMrxy0CHyzTj2ldDry5GI1mgG4WRC5iMIvSicoGOqUBJ%2BM6%2B9eWjZeTAUqKy4MUyB%2FJUkSPxiVgMFg48yfDPl0DCzDHwDP91%2BqYvroezcY4QvOcj2ukIVHeaCqPNNXqTvEIc%2FNDPAjkEo4UzI2tWU94x3Hc6WLq6g8Qt%2FiOE%2FFi1jDCdIiBV8GoyyqzSoGl40qSQbi12Oz%2BJFFzGYklRRYKJO%2FeH%2BRbd5IKXcUYUnzRvF4tKFLEtHk5%2FBLCztqHfZyYJmXS&X-Amz-Signature=0279ed2f1eedaf3406a4920966fdd730f6c19b1193be9b4f9b3fa9c4b8c91d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665II5HHNK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDehsrXVkj3YZXh9qH%2FlPuRN9jcnZb9ZE89rVuqPBGUoQIgb6%2BJfS8Yoa977WU1t8yShdr5buAoR2Y3R%2BVQeT5Kc0Iq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDLwszTSpqsKZrAe%2FfSrcA468mpS14uIgG%2B6nlGbKr1gB1lU1DIByRa%2BmIqNs8qAPryH2MKhdUSLDEv0ofp%2B%2BH%2Fipp4oekrSnxFS1mnDZk5NrqtS0zCwcQ%2Fnl9xDdIVHwSUbqt7G%2BvZxgBnqW9EnsFM%2BF%2FZhkeOP5U4rENjn5tcwr833Z%2FliWL4nB%2BvFXlvLTO1zm%2FEYIVWIWHs0SMbXSlH7lgYICYor2HwwTA2shFh0ogaQVNLvOg3VsxlcboFiwU0OKY2BV7lbMMRrIWyW8xu%2FIqkFs031NCx15U6MdTHaVthm8AGNvGSwYNUbHOhjA47ljKbF5xJ5dtdQyQY%2B5%2B6F47RZEcNXbUqBtwVvUvhRcivifGnfUxkLNEjVNJ1LMjqG3MVQL8VA3zNTGvzpco9tN0GIOHom3BRS3XuYL%2B94xkNx9YjEBjnSXUKhNcC2kCngCehZ%2B6Yfff6ANG2P1yDd%2BFqEZdeVYR7%2BlE20xxeV5sEOR20bSGHkbzapOO1R4X5c00fCC924cYb0Z%2FypjdoT9M3EET2YnIVwjoUzp7nZ%2F47mejym4pGentp5nRHnccgafdAs8C9GR0G7HMCCZN%2BDLnN40QM3JInR1LyHl1QhAUtpoJdMrxy0CHyzTj2ldDry5GI1mgG4WRC5iMIvSicoGOqUBJ%2BM6%2B9eWjZeTAUqKy4MUyB%2FJUkSPxiVgMFg48yfDPl0DCzDHwDP91%2BqYvroezcY4QvOcj2ukIVHeaCqPNNXqTvEIc%2FNDPAjkEo4UzI2tWU94x3Hc6WLq6g8Qt%2FiOE%2FFi1jDCdIiBV8GoyyqzSoGl40qSQbi12Oz%2BJFFzGYklRRYKJO%2FeH%2BRbd5IKXcUYUnzRvF4tKFLEtHk5%2FBLCztqHfZyYJmXS&X-Amz-Signature=2c970ec5a9d5f03bedfe3d1c77c4f67f03cc3a6e0e7d1e82f9ff24f1f74e58af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
