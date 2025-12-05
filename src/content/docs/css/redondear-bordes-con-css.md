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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXEHHEZC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0hLzHIBC7njihfgnyN8j%2B6dQEC3FGwOrZ2rRNshN57AiAmXc665SnnAYciu61tj%2BhAFKV6VzvTPqWRdj4FjLkDEir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM9HMgBUwYOL6Mr1OsKtwDFndNMjTjg3x0z%2BYo93PrgkEg5FQz7Besbu6%2FSTdemMzc9ZiAnEBKQfEYNe9%2FczzzJxwTwnc3wQyFkSdA9BLAfZycBNY8Ewu%2FiIHJJQOfPV%2Brybjgw1oodMl7KSZhCSlOmugmRiGicIj7jQ%2Br1VSJYARHp348UXND%2BfOxeU0H8OPpckZDz2RLLoBvVDmIZf2Qra5spUS5aaeAf7H9XKkQLXtPypCricZ4KcDdg%2BeLEcb%2FCeJcMTzsvzSgaU8Jr0zRcuLtmWzDSEl5Qj9pdssBvhXkTCBc9f49PL5MKMw2lKj8UnbwNE6qnAG66ViP6jTcN1fjwjki8o8cAIwUINZtA2wPtkuxrFAG4iSpD%2BtEwqMpPSmp12sQwkqAcLPLjRsm%2Byecfv0ASf5pCpnKKSFAQDQtpa6eZgLABooRURGwSbcidB2KzU9X%2BHeMbj%2F465QoeC5ZhB%2Fl4F9WNKrGJIETW3Rdd4d6c6LwgxWdMLmFw1IIs%2Bllqv%2F7wl%2BRMTw%2FTVoHciJZ%2Ft424x2ThmkyqIZvTqRb4FN5kVQIQ96Ah8joQjzRd6RvQdoNGvehUf3qgY%2F2AUtpdz4Bxfcv17k53edpsCRqTq%2BfAAUseVn0pL%2BezZQsYNT0FvyAGptuyBcw8IvIyQY6pgFJVggTGFdUP4v3xsu6rbmw1hUPy5gom1TgDnW%2FVC3uqe5vgZ4DFr%2BAJ9o3OnxoriaKNgnJiwy%2Foe88EmtdrICXRKmOtJu6rK%2FUNsHYsZbZ%2BdZ6de0PhC6ONFImXhG633GX6VT%2FVrKllN9%2FQy%2BFvknVuC4axuT4tXlNZW6Se%2F75PYnie2w1laLWRLa9crT7eHKmZyxQxttAbt7Ov%2Bdpb%2BlqdTOigqNW&X-Amz-Signature=49e6207b3aa1ec578400cf95d87caa85070ada8080cf3e53eeb0b513595587a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXEHHEZC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T023514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0hLzHIBC7njihfgnyN8j%2B6dQEC3FGwOrZ2rRNshN57AiAmXc665SnnAYciu61tj%2BhAFKV6VzvTPqWRdj4FjLkDEir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM9HMgBUwYOL6Mr1OsKtwDFndNMjTjg3x0z%2BYo93PrgkEg5FQz7Besbu6%2FSTdemMzc9ZiAnEBKQfEYNe9%2FczzzJxwTwnc3wQyFkSdA9BLAfZycBNY8Ewu%2FiIHJJQOfPV%2Brybjgw1oodMl7KSZhCSlOmugmRiGicIj7jQ%2Br1VSJYARHp348UXND%2BfOxeU0H8OPpckZDz2RLLoBvVDmIZf2Qra5spUS5aaeAf7H9XKkQLXtPypCricZ4KcDdg%2BeLEcb%2FCeJcMTzsvzSgaU8Jr0zRcuLtmWzDSEl5Qj9pdssBvhXkTCBc9f49PL5MKMw2lKj8UnbwNE6qnAG66ViP6jTcN1fjwjki8o8cAIwUINZtA2wPtkuxrFAG4iSpD%2BtEwqMpPSmp12sQwkqAcLPLjRsm%2Byecfv0ASf5pCpnKKSFAQDQtpa6eZgLABooRURGwSbcidB2KzU9X%2BHeMbj%2F465QoeC5ZhB%2Fl4F9WNKrGJIETW3Rdd4d6c6LwgxWdMLmFw1IIs%2Bllqv%2F7wl%2BRMTw%2FTVoHciJZ%2Ft424x2ThmkyqIZvTqRb4FN5kVQIQ96Ah8joQjzRd6RvQdoNGvehUf3qgY%2F2AUtpdz4Bxfcv17k53edpsCRqTq%2BfAAUseVn0pL%2BezZQsYNT0FvyAGptuyBcw8IvIyQY6pgFJVggTGFdUP4v3xsu6rbmw1hUPy5gom1TgDnW%2FVC3uqe5vgZ4DFr%2BAJ9o3OnxoriaKNgnJiwy%2Foe88EmtdrICXRKmOtJu6rK%2FUNsHYsZbZ%2BdZ6de0PhC6ONFImXhG633GX6VT%2FVrKllN9%2FQy%2BFvknVuC4axuT4tXlNZW6Se%2F75PYnie2w1laLWRLa9crT7eHKmZyxQxttAbt7Ov%2Bdpb%2BlqdTOigqNW&X-Amz-Signature=d3af4e568e8fbe82bf40365eba770cf7191e280ea0ac12be2f14a27e1371cb1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
