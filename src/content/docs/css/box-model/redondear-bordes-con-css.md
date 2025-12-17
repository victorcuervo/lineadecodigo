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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV2OJV77%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf6v6RvfIwHpmJbUvf%2F%2F85o3vT0e0I%2B6bKAjdyD3Ww6gIgBDS7WNIzuim4BnJVfskm5imwsOsxwcUGHyk4HLUCEQ0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD71OElsKS73%2B2HaUSrcA6oHNdM37NofYlifp7HwXK7SoOZmLWuLylOYWUPRj2MjCuGDl5%2FxKDQQuGXVjwan5hUWC6SRHT1NJWPceB2bRWC6ibnt8%2FSfFvf7Cw671ure%2BCw5qG%2BLvEtC7WvZvV0QzGuD7XvOcwIg1llrdbUOI3SKz7NiYv95IadkWEHmxrTiXP2668zt2xMm1V%2Bt%2FdQWF9wYLe6khzA51%2FYnDf%2FI5l8BDkRB7fsiDloiARmQKmkwUhYyxki%2FpscxTF%2BNNGWcTeDv24C69gxvm8pM5Nr3ZIrD0GJG8IVzXcwbimAiz%2FkexcbhgWSqAgXx7VugwmkzAiPaZLmHFd3Nq7H0gr8OPuOkOQf3C2SrhktnF2OBrTAOKzs1uoYNDLbMJ2TqY8E1UusvW9nQBl35XLfeA1M%2FVtGwP6VmlxiUftV%2BahFHt4iCJE5ROnjyvcp815lw6m0QLKU7IedfiwFYJEF3YKh80Q0F8tlh97K%2B8EaHhaBtaMvxHpsWTEx7Kx03dVODIVeCWpW%2FoGCVv4iJANGt55c83Mo7wePuUkTrvYQhnpH6fA9kcKlzeYlYYZmcLBbYTskYDzh6w2RCq0PxCP5hl4t0gCw7Qhzfz29IX5w8cSLtiKs0neyYpl7uRZdHXIMwMJKPisoGOqUB7oiUskAkCS4H%2FLLqiWC%2BchPYaw0AD%2F4kn8nnoOUq6w2Ozc3rf4x1nUnbnrrgTZKM%2B9xWnXXW%2FGG9b7ZX9ikCcj1BC8ui4YWsPLYMhd3kHtqTnwraa8UDfqeVKRMvNVf2N9QYtuq%2BA1AumNtlrysd1h%2F4iTAZo3yE45hYLMqevG05y9XEKjw14lGnVjBT5VfVKwN6bVfkqq%2F0fkijZR363tYwWJBk&X-Amz-Signature=8b5c8d9cbcc47356c13007be0ea0927ed8e3d8cb96d855c33c0b6951d32035d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV2OJV77%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDf6v6RvfIwHpmJbUvf%2F%2F85o3vT0e0I%2B6bKAjdyD3Ww6gIgBDS7WNIzuim4BnJVfskm5imwsOsxwcUGHyk4HLUCEQ0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDD71OElsKS73%2B2HaUSrcA6oHNdM37NofYlifp7HwXK7SoOZmLWuLylOYWUPRj2MjCuGDl5%2FxKDQQuGXVjwan5hUWC6SRHT1NJWPceB2bRWC6ibnt8%2FSfFvf7Cw671ure%2BCw5qG%2BLvEtC7WvZvV0QzGuD7XvOcwIg1llrdbUOI3SKz7NiYv95IadkWEHmxrTiXP2668zt2xMm1V%2Bt%2FdQWF9wYLe6khzA51%2FYnDf%2FI5l8BDkRB7fsiDloiARmQKmkwUhYyxki%2FpscxTF%2BNNGWcTeDv24C69gxvm8pM5Nr3ZIrD0GJG8IVzXcwbimAiz%2FkexcbhgWSqAgXx7VugwmkzAiPaZLmHFd3Nq7H0gr8OPuOkOQf3C2SrhktnF2OBrTAOKzs1uoYNDLbMJ2TqY8E1UusvW9nQBl35XLfeA1M%2FVtGwP6VmlxiUftV%2BahFHt4iCJE5ROnjyvcp815lw6m0QLKU7IedfiwFYJEF3YKh80Q0F8tlh97K%2B8EaHhaBtaMvxHpsWTEx7Kx03dVODIVeCWpW%2FoGCVv4iJANGt55c83Mo7wePuUkTrvYQhnpH6fA9kcKlzeYlYYZmcLBbYTskYDzh6w2RCq0PxCP5hl4t0gCw7Qhzfz29IX5w8cSLtiKs0neyYpl7uRZdHXIMwMJKPisoGOqUB7oiUskAkCS4H%2FLLqiWC%2BchPYaw0AD%2F4kn8nnoOUq6w2Ozc3rf4x1nUnbnrrgTZKM%2B9xWnXXW%2FGG9b7ZX9ikCcj1BC8ui4YWsPLYMhd3kHtqTnwraa8UDfqeVKRMvNVf2N9QYtuq%2BA1AumNtlrysd1h%2F4iTAZo3yE45hYLMqevG05y9XEKjw14lGnVjBT5VfVKwN6bVfkqq%2F0fkijZR363tYwWJBk&X-Amz-Signature=6f69675c8e4ee5dd9b9d9448d1320534ada2a5a091458ec034f2eabf576f9770&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
