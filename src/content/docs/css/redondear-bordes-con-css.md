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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNAACR37%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzesMhh1oGsQfNPuHyp2IJra3cbjdnd1bpoB9YfdWjVAiADqvP0euH7VXjOX4rwnTJ7rk5N9pyHIybipvHCfLMC2iqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcAekgZ7np%2FFcZiL0KtwDyDbF2%2FbUc%2Fbfvh%2BU%2B7uyMNPXgmWScTGE2k27swsV%2B7xgDbx%2BjgI7j0cfWGy98YV3k%2F2nHFsvUQuY2X1w7XewjaogNQMzYDJNS9ZIsLMEaj09CYwhU0V4iQPGCAoEPQctPdpf06xnVzP%2BgmuCDeVwLNDtTb97ZpJE57NIJ4PcQwVcf6jbJMqWOE6g1Nu64ftQV6ifG45ripbYk%2F3UnIwAaSL9CwJRqmSQNRlMQuoWAB9Df%2BpQjrH2rUKWwWdVmPg68knWG37IGsOoNeDb%2FRv2nAE0vvZLiD1GquYxf1V%2BLzd6mU2ItCmfAjQsB7DHm8MzRwCax2W8tA29wk2H1Y5U4CBwU4O1vGJuHeS8Z5IbGZo8H4LQR%2Bh0A98926dLs%2BEwoU13dbIQijXivDKWfhs7QQ7zJG7bbsyNQsXCbrxWE43YQiDtxxZU5I6%2FZc4amp39Xdkzqfllj%2BjywBEgeqbFV8GlQAjEgKQ1ZZhJpFgqSPP9H0OgbLwlH2wT9CJgnILm2euSsTzF%2FCGDjSlk9GTQXao38KbQ4jwjNiUpJgMaO3CCBl7Yqja489bDQH4hXYiMeJe4cvCvCAQOWLyx%2BER%2B1uqFGcFg%2FXfKmCs0dJam3i%2FCIYYXQzklmRR6yX8w7%2BXeyQY6pgEksnhtJqIfnOtqlASrSrR62BSHC1x1KpKvq37bCKEEeuc2d8l0S5drYo8hfSuxYOtxeo%2BZCmaZN7aw6aXmQ5AggY41n12ye%2Fhuck29MI11hEFgbpAClLOazOsO6V06QbdPD9Zy%2B6cEkZcADuIebqUgusZMmkrBLn7HgIxd783oXJVEP0eTWGwPYYoLPO9gckBnm0D8aQU7fyHFIxF0c5aMN8IeMgVu&X-Amz-Signature=db730f5168a4f09be7bf8a565b180efaee7bfc8d199a3105b04baf088e21c0d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNAACR37%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAzesMhh1oGsQfNPuHyp2IJra3cbjdnd1bpoB9YfdWjVAiADqvP0euH7VXjOX4rwnTJ7rk5N9pyHIybipvHCfLMC2iqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcAekgZ7np%2FFcZiL0KtwDyDbF2%2FbUc%2Fbfvh%2BU%2B7uyMNPXgmWScTGE2k27swsV%2B7xgDbx%2BjgI7j0cfWGy98YV3k%2F2nHFsvUQuY2X1w7XewjaogNQMzYDJNS9ZIsLMEaj09CYwhU0V4iQPGCAoEPQctPdpf06xnVzP%2BgmuCDeVwLNDtTb97ZpJE57NIJ4PcQwVcf6jbJMqWOE6g1Nu64ftQV6ifG45ripbYk%2F3UnIwAaSL9CwJRqmSQNRlMQuoWAB9Df%2BpQjrH2rUKWwWdVmPg68knWG37IGsOoNeDb%2FRv2nAE0vvZLiD1GquYxf1V%2BLzd6mU2ItCmfAjQsB7DHm8MzRwCax2W8tA29wk2H1Y5U4CBwU4O1vGJuHeS8Z5IbGZo8H4LQR%2Bh0A98926dLs%2BEwoU13dbIQijXivDKWfhs7QQ7zJG7bbsyNQsXCbrxWE43YQiDtxxZU5I6%2FZc4amp39Xdkzqfllj%2BjywBEgeqbFV8GlQAjEgKQ1ZZhJpFgqSPP9H0OgbLwlH2wT9CJgnILm2euSsTzF%2FCGDjSlk9GTQXao38KbQ4jwjNiUpJgMaO3CCBl7Yqja489bDQH4hXYiMeJe4cvCvCAQOWLyx%2BER%2B1uqFGcFg%2FXfKmCs0dJam3i%2FCIYYXQzklmRR6yX8w7%2BXeyQY6pgEksnhtJqIfnOtqlASrSrR62BSHC1x1KpKvq37bCKEEeuc2d8l0S5drYo8hfSuxYOtxeo%2BZCmaZN7aw6aXmQ5AggY41n12ye%2Fhuck29MI11hEFgbpAClLOazOsO6V06QbdPD9Zy%2B6cEkZcADuIebqUgusZMmkrBLn7HgIxd783oXJVEP0eTWGwPYYoLPO9gckBnm0D8aQU7fyHFIxF0c5aMN8IeMgVu&X-Amz-Signature=b7e1209c209fb73b69686591b126de0b5526c0b7bf2ae574835982bf3225cf44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
