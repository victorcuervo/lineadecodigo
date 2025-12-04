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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGRQ2LUH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHcDQFCjoIZUeq3mNH15gNd%2FSAYLun625%2F%2BUSwWAOFxyAiEA7M%2B2gI0HrL%2Fwa4mJZTP0fon4QTG0l0goanAiUL2F8Fsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIyUjMDQhrnTknc2ICrcA%2BihsCVoYyTOupXG7hDbMwZqt9PHPhfCZW6Tv1f27KNqEmTW%2Fs5hZlHn%2FEZpkWc0W9I6AgAyAdtaQ5UAXWjSJVq7GyHXgtrD%2F7cAb4cvtUIXndab4hhSwrRrCr%2FISaJ0oy7hm3X9kvreR%2FFqx1OHM6hhh3LbnIvfgcEz7%2BWFhrUmwogaY3YNayEcdB6LRY%2BbGJalBHUBe7qMgHezs3mMXEG6T1bNUpDHKWeiDNxhw9NgljiiqQT2cpQD2aLkzUzTy9MBQ%2BcRx%2BldT44odY4T8YVAltlRGfOlaeFmZF3oGLhQaC0Sj%2BZGOAMHBilUCxLC4nEn%2B%2BOfR7PaizgUmwTOIMrs8LQ9kBUdIdnyJ%2FgElpUNGwgirqvvYo%2BFaw%2FySZTxgVJRJLNjJSRb2IRu00BH%2BYlonHPU4eFdviJ4muZ%2BK0yLQoVnzrRWfaAILGhdb%2Bbuw5MBVz8I90fKQ%2FYDOtF5LtqE4lh7jTE0RNPTWMTGCq%2FNqPihsrwyTV9LShEieMOeM0pfXLsSL5%2BcpoFPWhw9hV8kWHZ1SpnTceTueh7hYMQZGxUy3IS5FHjaauMJWmETfEY2nPHy5P4iktkD3zZmkWsIlU8YTXBQ%2FDaPcHpg8bfluWu2mNcdD%2Fy6zCGpMMK%2BxskGOqUBo5a5W8Fw1fma%2FirS6%2F0QuC7WBamGBm1aHWCzjeSM74hH63dU4EgE6ZtZxbMYuaMwPatdAQFJIoOuKiPOqte6kZR9jJ5GB4%2F5lkjuulSD1Uhjyy8V3bWmYPDaeQXdlf81YQVWJcKeiOikToXl%2BIYcwsBHoeyMIcJGj%2BcVV%2BYlhTmqqUue7owktvueFkwXDWwLedteM2GttKreUPdbhPYK6iLzi7j%2F&X-Amz-Signature=8ef680e8b0e2b20751e6e96ef21bfe9dff692a2f9ebf7e3ff44e9e76d42be359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGRQ2LUH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHcDQFCjoIZUeq3mNH15gNd%2FSAYLun625%2F%2BUSwWAOFxyAiEA7M%2B2gI0HrL%2Fwa4mJZTP0fon4QTG0l0goanAiUL2F8Fsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIyUjMDQhrnTknc2ICrcA%2BihsCVoYyTOupXG7hDbMwZqt9PHPhfCZW6Tv1f27KNqEmTW%2Fs5hZlHn%2FEZpkWc0W9I6AgAyAdtaQ5UAXWjSJVq7GyHXgtrD%2F7cAb4cvtUIXndab4hhSwrRrCr%2FISaJ0oy7hm3X9kvreR%2FFqx1OHM6hhh3LbnIvfgcEz7%2BWFhrUmwogaY3YNayEcdB6LRY%2BbGJalBHUBe7qMgHezs3mMXEG6T1bNUpDHKWeiDNxhw9NgljiiqQT2cpQD2aLkzUzTy9MBQ%2BcRx%2BldT44odY4T8YVAltlRGfOlaeFmZF3oGLhQaC0Sj%2BZGOAMHBilUCxLC4nEn%2B%2BOfR7PaizgUmwTOIMrs8LQ9kBUdIdnyJ%2FgElpUNGwgirqvvYo%2BFaw%2FySZTxgVJRJLNjJSRb2IRu00BH%2BYlonHPU4eFdviJ4muZ%2BK0yLQoVnzrRWfaAILGhdb%2Bbuw5MBVz8I90fKQ%2FYDOtF5LtqE4lh7jTE0RNPTWMTGCq%2FNqPihsrwyTV9LShEieMOeM0pfXLsSL5%2BcpoFPWhw9hV8kWHZ1SpnTceTueh7hYMQZGxUy3IS5FHjaauMJWmETfEY2nPHy5P4iktkD3zZmkWsIlU8YTXBQ%2FDaPcHpg8bfluWu2mNcdD%2Fy6zCGpMMK%2BxskGOqUBo5a5W8Fw1fma%2FirS6%2F0QuC7WBamGBm1aHWCzjeSM74hH63dU4EgE6ZtZxbMYuaMwPatdAQFJIoOuKiPOqte6kZR9jJ5GB4%2F5lkjuulSD1Uhjyy8V3bWmYPDaeQXdlf81YQVWJcKeiOikToXl%2BIYcwsBHoeyMIcJGj%2BcVV%2BYlhTmqqUue7owktvueFkwXDWwLedteM2GttKreUPdbhPYK6iLzi7j%2F&X-Amz-Signature=b0ccde73218a87c5a4767e6d7e699c7df16384e01bd731248c7826fed89f0389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
