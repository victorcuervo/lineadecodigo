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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYRT7DH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZhqd7TOh2YOO4Oks6gdPehK7dNvxz9dSxshCGlttz0wIgbg6acLR1ovGDphbcq70lkEGKuJz5GioGWIjsZLOMY5Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDI9FdI3u2DJ13tiCUCrcA9lSVXBwv43eReixJZAKHJjYGed8J2HSLOxcv7TRYJKuOqQ7qk231gLqWbWJYb7DT2kHJ73LNrVqAGlfnV1XVIJKI1MJV5akLOuTENpyVF3UTKoxNzY3WQMKE8eUeYTALYs1%2Fmqbn%2BfJHtrU%2B1Jw9Sm1vL81iv5pIT5pYylA2hKGbajiK%2Fe6%2BgsAz6fFH20a1cHfyyluKfb4dmvWgqxwF%2BS6d4cVZg3RNWjTE0vTqS%2F737UdTjwEbsLN187R7amkfaGliRRfBkS05nxif7snvqp9C8KZ8I4o0SsynZ6TvdtxXKgrOMclVA3K%2BG3Ao0lybnLpSsKITNZLqqC4dliFHOU2qt7rqcFX%2BqnON2EreTIIuektHPKsqYa98H1XEgrIkOJ%2F3tax0CPwB%2BFLajLjC4NKPxdRs0SwWshl7gQjVyxvux4ziEmFZgLiNNKOPODZSaDP3iOCrM1i3FzTgbnbrnReOsOD%2Fhuhp6nWnEzxXp7t0p9dqfIqtX1Me%2BgLTQkDxSLH4IvItAi8WIc9qQnBCIySBRjqsY7yhxrs8fVwzRR0wy84RrG4f9fa5DSFIsaQYxIZ0yX6h8ClWCHJgIhvR%2B0IcO1imOlsAeMGz0KBfyfSZFCyc4RkS1S%2B5Md8MM37h8oGOqUBR3VRwutaBHSkH%2BxWaA%2F4kQg3ap2z0HwOKM4lbLo4pJ%2FZ52rjsMZCAwKCm30TYD%2FwTF3kiUnldhz9xR%2FeH9XVW5cxwRn2s652%2Fa3M68rle%2F88slz%2BAXleC19186lsNLpTp75%2F5%2FGQp8pn44d8DDsFYUf8kMJRn6V2ynJQoEs5zn7fu5XpivpTpKkPdfMxy%2BaLZqNTtktuJw31pAFoE%2Bm7Yqa7%2B0mL&X-Amz-Signature=3b20385a1b3597a5e78946c940af778a5e4d358079c0041c4f6fe786235be8c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAYRT7DH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZhqd7TOh2YOO4Oks6gdPehK7dNvxz9dSxshCGlttz0wIgbg6acLR1ovGDphbcq70lkEGKuJz5GioGWIjsZLOMY5Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDI9FdI3u2DJ13tiCUCrcA9lSVXBwv43eReixJZAKHJjYGed8J2HSLOxcv7TRYJKuOqQ7qk231gLqWbWJYb7DT2kHJ73LNrVqAGlfnV1XVIJKI1MJV5akLOuTENpyVF3UTKoxNzY3WQMKE8eUeYTALYs1%2Fmqbn%2BfJHtrU%2B1Jw9Sm1vL81iv5pIT5pYylA2hKGbajiK%2Fe6%2BgsAz6fFH20a1cHfyyluKfb4dmvWgqxwF%2BS6d4cVZg3RNWjTE0vTqS%2F737UdTjwEbsLN187R7amkfaGliRRfBkS05nxif7snvqp9C8KZ8I4o0SsynZ6TvdtxXKgrOMclVA3K%2BG3Ao0lybnLpSsKITNZLqqC4dliFHOU2qt7rqcFX%2BqnON2EreTIIuektHPKsqYa98H1XEgrIkOJ%2F3tax0CPwB%2BFLajLjC4NKPxdRs0SwWshl7gQjVyxvux4ziEmFZgLiNNKOPODZSaDP3iOCrM1i3FzTgbnbrnReOsOD%2Fhuhp6nWnEzxXp7t0p9dqfIqtX1Me%2BgLTQkDxSLH4IvItAi8WIc9qQnBCIySBRjqsY7yhxrs8fVwzRR0wy84RrG4f9fa5DSFIsaQYxIZ0yX6h8ClWCHJgIhvR%2B0IcO1imOlsAeMGz0KBfyfSZFCyc4RkS1S%2B5Md8MM37h8oGOqUBR3VRwutaBHSkH%2BxWaA%2F4kQg3ap2z0HwOKM4lbLo4pJ%2FZ52rjsMZCAwKCm30TYD%2FwTF3kiUnldhz9xR%2FeH9XVW5cxwRn2s652%2Fa3M68rle%2F88slz%2BAXleC19186lsNLpTp75%2F5%2FGQp8pn44d8DDsFYUf8kMJRn6V2ynJQoEs5zn7fu5XpivpTpKkPdfMxy%2BaLZqNTtktuJw31pAFoE%2Bm7Yqa7%2B0mL&X-Amz-Signature=d4716fc40ab8b30ad883373d5f5e117ba8719298f17166bafd5fc1f5800636a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
