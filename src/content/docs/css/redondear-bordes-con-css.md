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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHCR4ESI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICid2jmNk%2FddKMYfvVEqvK9KDPXlMKngPHuaL%2B6IwyR9AiBQDWJbr2wX%2B3Xn5KJbao6wO9W3rOrkof1R6MjM47suhCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrrte0hRrWfzXLf7eKtwDxabWxNkwg8zt8W5d2%2Fum%2FpLhkKxJVI8j5rQSFtwBjYerXqQRMaZhlXxSlYHbEom6XDjvSV6tw%2B3pKCB3nHFOKapB2nuKgAJOqAqjgHoUfOfGRcUsB6ppcoNlsciod%2BuOJnlnQiwVufTrhA3lfeQbtGh0cUwWzhLqSgAFgF9lnpUQUv87UoZsz%2B%2BbjvlcUndxHq3GhNcE%2BEWumz1F42hqrdcnwo5XvXp9vMifux7XcB0%2BjCxa7m89%2BQ1C7f8hVgoXCC50srvYnRe%2Bm5t0Uq4xLSOAw677fq1gu6GTQz7p5H3x9d5yTZB%2FgQgjjwvrub6JaTzptisHvbfSvIfmYNoYJEkp%2Bh%2BiuxcDxlJCC3tPEkM%2FjaCx5scWOlejhzWjabhlOExhC3TLGJD9Fhv5VMWMmIg1ZB5vflXjjVpxYDS0ep%2FqQkSsrnN7dowFrMSxrhniGeLXwF6WzzoJoA3AmyCLVx7ADelOnVS1bC%2BKf3vsi%2FP%2FzH45jBddLnDNvfTehgQIfrjQN9tsMDRR%2BMxJ9JwS9HINIh9MJDY8kaqtSC%2BZV4GwoEXa6fzGMcesWAyMXlMGmTFTWqh60Voe7V2HSbOm2oylUQoIwmsBdBzYKmXO7hWHENkWeyRTLeEvf5owvIbcyQY6pgFHLY8XjXFLBOwiQyymvJrJfdJOtTrAWIJN4bF8QhD8lDJ9mM85bJXylwDyULLuAzZOE41efrXKCQU52cZqGOdn%2Fy5Iyku4wPzAquEhxqsjx1O7ximlliOSg0d04FRnYtHYqcwhuIJ%2BVmKfjF9rgCiJPHNnpY%2FvYrVx9rNBIcjLk6Xz9pRRQPXZlRm7bsZs2SVKgMMWDpRyHnlHbxaBKhrZNKAzAiy9&X-Amz-Signature=769c8e7929721705e870979fa06043e508793f6bc8e5827db8a2ab64f609c9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHCR4ESI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICid2jmNk%2FddKMYfvVEqvK9KDPXlMKngPHuaL%2B6IwyR9AiBQDWJbr2wX%2B3Xn5KJbao6wO9W3rOrkof1R6MjM47suhCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrrte0hRrWfzXLf7eKtwDxabWxNkwg8zt8W5d2%2Fum%2FpLhkKxJVI8j5rQSFtwBjYerXqQRMaZhlXxSlYHbEom6XDjvSV6tw%2B3pKCB3nHFOKapB2nuKgAJOqAqjgHoUfOfGRcUsB6ppcoNlsciod%2BuOJnlnQiwVufTrhA3lfeQbtGh0cUwWzhLqSgAFgF9lnpUQUv87UoZsz%2B%2BbjvlcUndxHq3GhNcE%2BEWumz1F42hqrdcnwo5XvXp9vMifux7XcB0%2BjCxa7m89%2BQ1C7f8hVgoXCC50srvYnRe%2Bm5t0Uq4xLSOAw677fq1gu6GTQz7p5H3x9d5yTZB%2FgQgjjwvrub6JaTzptisHvbfSvIfmYNoYJEkp%2Bh%2BiuxcDxlJCC3tPEkM%2FjaCx5scWOlejhzWjabhlOExhC3TLGJD9Fhv5VMWMmIg1ZB5vflXjjVpxYDS0ep%2FqQkSsrnN7dowFrMSxrhniGeLXwF6WzzoJoA3AmyCLVx7ADelOnVS1bC%2BKf3vsi%2FP%2FzH45jBddLnDNvfTehgQIfrjQN9tsMDRR%2BMxJ9JwS9HINIh9MJDY8kaqtSC%2BZV4GwoEXa6fzGMcesWAyMXlMGmTFTWqh60Voe7V2HSbOm2oylUQoIwmsBdBzYKmXO7hWHENkWeyRTLeEvf5owvIbcyQY6pgFHLY8XjXFLBOwiQyymvJrJfdJOtTrAWIJN4bF8QhD8lDJ9mM85bJXylwDyULLuAzZOE41efrXKCQU52cZqGOdn%2Fy5Iyku4wPzAquEhxqsjx1O7ximlliOSg0d04FRnYtHYqcwhuIJ%2BVmKfjF9rgCiJPHNnpY%2FvYrVx9rNBIcjLk6Xz9pRRQPXZlRm7bsZs2SVKgMMWDpRyHnlHbxaBKhrZNKAzAiy9&X-Amz-Signature=89b7ce47741f70524d8274a0d989466f6a3d8dc44a429c412a9ecdd43ab6e4ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
