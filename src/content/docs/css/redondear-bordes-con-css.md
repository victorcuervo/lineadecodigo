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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGWYNDP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZBrameFsuFGdPuTNwVhZxK%2BOEi4MSDcKo1Q5bCa3kYwIhAIxkc5zFspTE4oIXFEnfENJIntzzJ8F7lT8tTZxRfodfKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6JQaCL4RV1gnxfpIq3ANexGaQ%2FQULld6z03C2GQwA4BH7EBjOWvRtUJ6fue6XLvDGd%2FTGg9ktudWURPeRUvlPqoyUlbqJSK%2BaaSQanFNALj8KIrxpUCWGgnV2uAjSE8msxVEsnrnbSRHFmQe0uOlF%2FbuoJ4PLqnioHd%2BRA3yC3vhTop38a0WaVWAgxxlJr8QVeqZDYj7hbwDkKw49cks2QmjCKD74LWGX8IhREdiTvGaEJJtLDxO7Fjas36V%2B4cTAtOjC%2Bbgh1Q8g2tYXEbUQIxBjXpPtWxcRfBU1J%2BLMKRQXwUNC%2FOsFRpXR7%2FIn08RCrMYigoE15b3LZLBAQ1rf1QLGhMMT62tLFyGjpxnVkHp9%2BLhG4StNvQr0zfuzt%2FAN0epJ60tmoQ8nQMu2FG04SYud2e0Up2xAj7rCLSLRhHUoTK9mh%2BmkYy5OUJ2ktg2p3onIP4GDqEjeK7ZqneueSgygg3d1pbMoM0bOkCszPhjTXw4u6J0FOmF4jWoGT7BqOKUkDmBuSCQJAranXUI2EWoIEou%2BE8k2biHQ6KyG0%2F17WOUmSKiwvmMc9e6b04pGfa0NBc0%2BM5muJ%2F%2B3j0gid21uYlPqmBhQ9c1pfssgZ74Xu22ElhM1Cv6j1nJuOuaoKeZhuhUnWCvIpzC8kNvJBjqkASftqh8%2F4jALRB9Q4aDvbZk3GMsFRfv6XeRAxK5mXsWHNRg1jEfrAXIVKXAFK8LEQHYDQkR1JjRejN0sKZ4eq%2FPX9qlxk%2BqFFpLr71ibtyO8q3VhS%2FLyqx8ySvRnFaoImJXPECNQwUlMomJArNHUIs4kfG1ZtQz127mCFd5CKFV0qRzRqI%2BsHgI5JdKGRR91Y1BQqmx4cYe%2FUM5X0C89EU35Y3SJ&X-Amz-Signature=0f60eebf23dac0dad270c9bb20af07b507571f99f3bb46eecce12d3f19bd5d65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKGWYNDP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T135336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZBrameFsuFGdPuTNwVhZxK%2BOEi4MSDcKo1Q5bCa3kYwIhAIxkc5zFspTE4oIXFEnfENJIntzzJ8F7lT8tTZxRfodfKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6JQaCL4RV1gnxfpIq3ANexGaQ%2FQULld6z03C2GQwA4BH7EBjOWvRtUJ6fue6XLvDGd%2FTGg9ktudWURPeRUvlPqoyUlbqJSK%2BaaSQanFNALj8KIrxpUCWGgnV2uAjSE8msxVEsnrnbSRHFmQe0uOlF%2FbuoJ4PLqnioHd%2BRA3yC3vhTop38a0WaVWAgxxlJr8QVeqZDYj7hbwDkKw49cks2QmjCKD74LWGX8IhREdiTvGaEJJtLDxO7Fjas36V%2B4cTAtOjC%2Bbgh1Q8g2tYXEbUQIxBjXpPtWxcRfBU1J%2BLMKRQXwUNC%2FOsFRpXR7%2FIn08RCrMYigoE15b3LZLBAQ1rf1QLGhMMT62tLFyGjpxnVkHp9%2BLhG4StNvQr0zfuzt%2FAN0epJ60tmoQ8nQMu2FG04SYud2e0Up2xAj7rCLSLRhHUoTK9mh%2BmkYy5OUJ2ktg2p3onIP4GDqEjeK7ZqneueSgygg3d1pbMoM0bOkCszPhjTXw4u6J0FOmF4jWoGT7BqOKUkDmBuSCQJAranXUI2EWoIEou%2BE8k2biHQ6KyG0%2F17WOUmSKiwvmMc9e6b04pGfa0NBc0%2BM5muJ%2F%2B3j0gid21uYlPqmBhQ9c1pfssgZ74Xu22ElhM1Cv6j1nJuOuaoKeZhuhUnWCvIpzC8kNvJBjqkASftqh8%2F4jALRB9Q4aDvbZk3GMsFRfv6XeRAxK5mXsWHNRg1jEfrAXIVKXAFK8LEQHYDQkR1JjRejN0sKZ4eq%2FPX9qlxk%2BqFFpLr71ibtyO8q3VhS%2FLyqx8ySvRnFaoImJXPECNQwUlMomJArNHUIs4kfG1ZtQz127mCFd5CKFV0qRzRqI%2BsHgI5JdKGRR91Y1BQqmx4cYe%2FUM5X0C89EU35Y3SJ&X-Amz-Signature=6058bcf5d56e01065f12ba5a2a7ba055b88205a392cd65eb484f06048e1a3ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
