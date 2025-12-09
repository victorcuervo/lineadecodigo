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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665IEU2VZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDpTtVL7kB%2FNOW95g2p7wa0afqJM3a%2B4sovE6quSRxAgIgUYro1KAytYwRTC46jjmNld43lorBOCodyta2Jyy%2F0HMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgLuOUL%2BlJqbmr5tCrcA3uZsELXSZUtix0FXSV6DnwWi3hl4cZE1OEZq3R4Df%2FIASHzFciCbOR8EzTSNuXyEJc%2BbelO8X1vKXTfkNppKwMrh709%2BqX42v%2B6OfMAo5vnSPFUzFoXhqgb0e7t2OfIGNh%2FvHMHq7wF%2FZLl%2BReg48DqOCil%2BVXl6pRBu4heiu3qT63ZYSU6fSvoq8qc%2BiiL9E4DhC3vW0rwVwZxG7GKGOVvuoWzeJ24kadwFjJwo%2F%2FphrygI2ZY2O9n%2F1bDW0xA51AP9PdmOZ2vrdnePiGPzYJx1A6WHFvyCFkp8XAnNh9BXzgfxzM3YpcoXVWWp0dOsWUO8PJlfuHG2Ni66r1ZnjdoPMrZ5xPSlLelJ3RiTzRdfgwtotphZiwPLqdK6IIjf%2FEKv4zdhyZ3DVj3wfjFbDyH9GQFiKcPHu4AIkNwpd3EU2HSgup0YbNHZj8l3gLvSel%2BW5Oc8%2FfpPBVaS9cpeGu7N25CkPPVBW1Al1OiiZAxMpahtnclNQ5GSjHh5tzbzXPt6vvMZ7bQMFt7Xi2yakRJ214krmjvsPzbWlYHa3M2LtJ6N31qY6TjfhTTJ%2BVBPTXN10zDNaVq4pTMNqYGmKJ6RGXKbT%2BTX%2FGZn5AjoCfN9o%2FrgxtofnDkbWnNMKHD38kGOqUBRKQNxQwEqY7jTSae4zFEd%2Bs9FBj4S1MHEIY5sAN0sq50ZLNbtec8kefOzUOB%2BNw18W62IdGNaDPbmvaPGgmo67Esp%2BcWF49NdCL%2Fd9aYXQZR2TIxJBHnkSLoZjKCusEhLcjHgq8L3qCFac8Lp1pbzuJKRtJ6NKpFSgVG3B93zi4m77h%2BBZetTR1q%2BVF9uzHN02aLX0ykYO2rpcGvkwHjW%2BQNmhyp&X-Amz-Signature=661fe698f499d735f87635ae9de093cbd603a22e383220640e12e271ca1be9d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665IEU2VZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDpTtVL7kB%2FNOW95g2p7wa0afqJM3a%2B4sovE6quSRxAgIgUYro1KAytYwRTC46jjmNld43lorBOCodyta2Jyy%2F0HMqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgLuOUL%2BlJqbmr5tCrcA3uZsELXSZUtix0FXSV6DnwWi3hl4cZE1OEZq3R4Df%2FIASHzFciCbOR8EzTSNuXyEJc%2BbelO8X1vKXTfkNppKwMrh709%2BqX42v%2B6OfMAo5vnSPFUzFoXhqgb0e7t2OfIGNh%2FvHMHq7wF%2FZLl%2BReg48DqOCil%2BVXl6pRBu4heiu3qT63ZYSU6fSvoq8qc%2BiiL9E4DhC3vW0rwVwZxG7GKGOVvuoWzeJ24kadwFjJwo%2F%2FphrygI2ZY2O9n%2F1bDW0xA51AP9PdmOZ2vrdnePiGPzYJx1A6WHFvyCFkp8XAnNh9BXzgfxzM3YpcoXVWWp0dOsWUO8PJlfuHG2Ni66r1ZnjdoPMrZ5xPSlLelJ3RiTzRdfgwtotphZiwPLqdK6IIjf%2FEKv4zdhyZ3DVj3wfjFbDyH9GQFiKcPHu4AIkNwpd3EU2HSgup0YbNHZj8l3gLvSel%2BW5Oc8%2FfpPBVaS9cpeGu7N25CkPPVBW1Al1OiiZAxMpahtnclNQ5GSjHh5tzbzXPt6vvMZ7bQMFt7Xi2yakRJ214krmjvsPzbWlYHa3M2LtJ6N31qY6TjfhTTJ%2BVBPTXN10zDNaVq4pTMNqYGmKJ6RGXKbT%2BTX%2FGZn5AjoCfN9o%2FrgxtofnDkbWnNMKHD38kGOqUBRKQNxQwEqY7jTSae4zFEd%2Bs9FBj4S1MHEIY5sAN0sq50ZLNbtec8kefOzUOB%2BNw18W62IdGNaDPbmvaPGgmo67Esp%2BcWF49NdCL%2Fd9aYXQZR2TIxJBHnkSLoZjKCusEhLcjHgq8L3qCFac8Lp1pbzuJKRtJ6NKpFSgVG3B93zi4m77h%2BBZetTR1q%2BVF9uzHN02aLX0ykYO2rpcGvkwHjW%2BQNmhyp&X-Amz-Signature=b53c9d41ec6c316dd65123ac8ce992eabf38abe25d219d414ab07aba913714f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
