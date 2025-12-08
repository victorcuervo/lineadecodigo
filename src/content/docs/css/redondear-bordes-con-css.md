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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTEMSSS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZa8ar0ZBGQVsJq2ugXvPTcNDP6WndvTxP8tvU0SnEAwIgbUJf0hjzXcbqsTBv6CVuNoKgUgiZSJRuxWzAVzcAvpYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXZFcqtwiVD6oiCXSrcA0kHkHqFBEBPEWHxZD5xJko7PppEddpht3NSfjNxfgZfNlpE4IGsTkpuaA5DP8gPYp0QA05wVkj7jSP0Ztk9%2Brja%2B6pvmUnzEh%2B7fuHIfbUxJKZQwtGlT3YhNQgiBY3DBVtgBljWW8F9R2uWhJMLK%2BsTQuC55QCZFuvnNNq3qmZdBrjR7RU4WqkUgLkQT2OsEZYMzZP8hZ%2Bd0StdaOKc%2Fnwdeie9DwLb5BADo0js0QjlBgxfmPr0yoE7kuoHE2m3GQPC4gN3jPOmMCpt1OA5lioEqvcqmItCohm9%2FcUg6vZaXC2%2BVRgYn%2B4duiIcw1o0HxcCmaw8wudO8OU9L%2BulV2hA2AhctOCCEzRZT52OGPXOw0wMyvFabRZWiJ29E99nWK5obT3b1hbMmrGeMJuzVaXErN36lXqkuWsxhTgq6hFoMyVu3Tnhi3gZkO9tIUwdRQfv1gFNo%2BahNYy4uII2IIXO4L%2FthTop86lLYIyJJMr43bVx4Szzo%2F9aXwwlHb1MMwP11LSwverdLmm%2FzXesnJvVvHvBQU1qIxaw5eQwo0Zk88WN2zWRoyh1W5ZSqaMTbRCzasKwxlnx%2FNos9kOpW6r%2BppJbnl0P%2B6RKuzOwxAGvjlKS1rUpYvWIsYS6MMaH3MkGOqUB7Z1v7NG%2FYcyWwioH36hyljFtwV%2Frmy799YYPZsjqP653QrVa6SaKP040jrqYSBfIdh9Bt77kHXzfK%2BCuN6MZGuA147bN9lPR2jpk0p5k6R9QfnY03K%2FV64fNraTTgor4GdWteqdtZfz6%2BBBzEFUirKjNOoY4Ylo4zTw8ysDOKZ0FR7sP%2F95Dt%2Fi8yX%2FKYreOKcg5ueC21XSbeFNxeSuX2ZDw8lUo&X-Amz-Signature=c6f8d8913f87de657c34ea640458faf1cf8ef51724d6b3f2102cc43f18e1775f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTEMSSS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZa8ar0ZBGQVsJq2ugXvPTcNDP6WndvTxP8tvU0SnEAwIgbUJf0hjzXcbqsTBv6CVuNoKgUgiZSJRuxWzAVzcAvpYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMXZFcqtwiVD6oiCXSrcA0kHkHqFBEBPEWHxZD5xJko7PppEddpht3NSfjNxfgZfNlpE4IGsTkpuaA5DP8gPYp0QA05wVkj7jSP0Ztk9%2Brja%2B6pvmUnzEh%2B7fuHIfbUxJKZQwtGlT3YhNQgiBY3DBVtgBljWW8F9R2uWhJMLK%2BsTQuC55QCZFuvnNNq3qmZdBrjR7RU4WqkUgLkQT2OsEZYMzZP8hZ%2Bd0StdaOKc%2Fnwdeie9DwLb5BADo0js0QjlBgxfmPr0yoE7kuoHE2m3GQPC4gN3jPOmMCpt1OA5lioEqvcqmItCohm9%2FcUg6vZaXC2%2BVRgYn%2B4duiIcw1o0HxcCmaw8wudO8OU9L%2BulV2hA2AhctOCCEzRZT52OGPXOw0wMyvFabRZWiJ29E99nWK5obT3b1hbMmrGeMJuzVaXErN36lXqkuWsxhTgq6hFoMyVu3Tnhi3gZkO9tIUwdRQfv1gFNo%2BahNYy4uII2IIXO4L%2FthTop86lLYIyJJMr43bVx4Szzo%2F9aXwwlHb1MMwP11LSwverdLmm%2FzXesnJvVvHvBQU1qIxaw5eQwo0Zk88WN2zWRoyh1W5ZSqaMTbRCzasKwxlnx%2FNos9kOpW6r%2BppJbnl0P%2B6RKuzOwxAGvjlKS1rUpYvWIsYS6MMaH3MkGOqUB7Z1v7NG%2FYcyWwioH36hyljFtwV%2Frmy799YYPZsjqP653QrVa6SaKP040jrqYSBfIdh9Bt77kHXzfK%2BCuN6MZGuA147bN9lPR2jpk0p5k6R9QfnY03K%2FV64fNraTTgor4GdWteqdtZfz6%2BBBzEFUirKjNOoY4Ylo4zTw8ysDOKZ0FR7sP%2F95Dt%2Fi8yX%2FKYreOKcg5ueC21XSbeFNxeSuX2ZDw8lUo&X-Amz-Signature=5fb4c96e289ce4b8e922acc33a2f6a5f47334cdc1677cd13a9966ecf134e0e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
