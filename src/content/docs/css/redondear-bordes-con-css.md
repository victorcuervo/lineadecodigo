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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRZPAHS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfl%2Bk7Fh8%2B5%2FWe0r63ZpBSdHXMumYiELm%2Fo8TIwn9iKQIhALv2yodXMh%2FQcpb1K%2BavFREy6hDKJYp5oB85ETfibYIaKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyflJA9XmVDfpMBd4Uq3AOj%2FxltGuwrX6%2B8j1tvE6h95PH6okg7ZO0VQS%2BgeQfuiKdojHHbI3WkP7u%2B%2FEWTW0r%2FElDjwHl9lxB%2FGy%2Fb%2BuJJvnqApqbB0gaGB4OhdFXE8r7TEMv9hfn5lZOx7e%2BYSXMychRKP%2BRz4d%2F%2FRI4KA2xloavfPCEgy7y93oyEp0TrBQq1pIQMRvnBOlQ9IClYxeI9NdEx0uPupYNZ8fiukRWZwHuboSsZ0YIJHBx7oJQCFX2jpOMfSF7qd573oB6Mb8C2tDWZBTzvCdOGhePsEoJmD%2Bd1Z7ZjfKLvc0oXZ%2FYFpr5vSmID0icyQFHBy9rSe5iydoMqMvPqbqSqdo1jAc07NgQEoc9xBdfh%2BCdSSVE%2FQuapfOzbZptPIzFGzyqfM4dPzVTX7gspEBcZ7SUApbu4NEECdnp7ihOfDuIK0jj66nYSdNIzPOanLkyXaQYoCfJTLmvv%2BGbsgJk1XMfAHxddvN2EEG5O6g6XvVO94cJkz9ODbOLcQauBr9yw9ArfbhXqK2OKgRLbxk7u7SNN4%2FmCRm8jMAZCg%2FcsV7DCQObcD88RNkkwT5sEpZWKK3wazoiJ4qUYk4zs1ROswDc3BUF2kVSktI1kTLTt8RpeAwbnK5crA5cpSZF4880VCjC8gN3JBjqkAVm%2BNdJP2wt3X0b8edK80ueWAmHO9K%2FizyQTNfDBGnpeK723V8wYn3rydTo6ewQwEkCnJBa0sdQ337mMDhhZwqjT10Bj7GPdnpL%2BwHKGGN1KOWgFmHJSvF2tzHU2ULddA3TI5C7Cjxu%2Bmp0ZsVTCBQW50o4nqSBSirHfKGIeyWJ83v31uvtbbuCmdgqgfj6YfLM4PlvQWemwrlbOvTDqMNJracZI&X-Amz-Signature=d0c20886faf00d9f31f667d5f949086e746c6f61e11971020246ed62746a7f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZRZPAHS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfl%2Bk7Fh8%2B5%2FWe0r63ZpBSdHXMumYiELm%2Fo8TIwn9iKQIhALv2yodXMh%2FQcpb1K%2BavFREy6hDKJYp5oB85ETfibYIaKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyflJA9XmVDfpMBd4Uq3AOj%2FxltGuwrX6%2B8j1tvE6h95PH6okg7ZO0VQS%2BgeQfuiKdojHHbI3WkP7u%2B%2FEWTW0r%2FElDjwHl9lxB%2FGy%2Fb%2BuJJvnqApqbB0gaGB4OhdFXE8r7TEMv9hfn5lZOx7e%2BYSXMychRKP%2BRz4d%2F%2FRI4KA2xloavfPCEgy7y93oyEp0TrBQq1pIQMRvnBOlQ9IClYxeI9NdEx0uPupYNZ8fiukRWZwHuboSsZ0YIJHBx7oJQCFX2jpOMfSF7qd573oB6Mb8C2tDWZBTzvCdOGhePsEoJmD%2Bd1Z7ZjfKLvc0oXZ%2FYFpr5vSmID0icyQFHBy9rSe5iydoMqMvPqbqSqdo1jAc07NgQEoc9xBdfh%2BCdSSVE%2FQuapfOzbZptPIzFGzyqfM4dPzVTX7gspEBcZ7SUApbu4NEECdnp7ihOfDuIK0jj66nYSdNIzPOanLkyXaQYoCfJTLmvv%2BGbsgJk1XMfAHxddvN2EEG5O6g6XvVO94cJkz9ODbOLcQauBr9yw9ArfbhXqK2OKgRLbxk7u7SNN4%2FmCRm8jMAZCg%2FcsV7DCQObcD88RNkkwT5sEpZWKK3wazoiJ4qUYk4zs1ROswDc3BUF2kVSktI1kTLTt8RpeAwbnK5crA5cpSZF4880VCjC8gN3JBjqkAVm%2BNdJP2wt3X0b8edK80ueWAmHO9K%2FizyQTNfDBGnpeK723V8wYn3rydTo6ewQwEkCnJBa0sdQ337mMDhhZwqjT10Bj7GPdnpL%2BwHKGGN1KOWgFmHJSvF2tzHU2ULddA3TI5C7Cjxu%2Bmp0ZsVTCBQW50o4nqSBSirHfKGIeyWJ83v31uvtbbuCmdgqgfj6YfLM4PlvQWemwrlbOvTDqMNJracZI&X-Amz-Signature=2940e66b53361dd5ca86fca44c4c0c025b21bfd0a87ec909374b2899f0c1ce1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
