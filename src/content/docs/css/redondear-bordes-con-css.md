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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXMUCYQ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlN%2FOhhi697G8S%2FXG%2B4gIrg3cvvEsHH7IiQ99O0dZmGAiBm4EUT3g7qss3ZClqIzRoPwTbkRQgHxGZrLFFs9WrLUiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtLYxR5GEnSGuoVhRKtwDrBPsl6CmlMseqUOUfGOA9Cx7zQ0XxI%2BDO9m9ZfGhYLmLh%2BO9n1SQmVVJSLN%2FqgtaZnu9Jd7cSP7OWxsr6SkJam%2BYCHAIOlqDzXUaYZ5ZqWHxP3rFjk3nj0MWCtAumHE9j5r7D4okSWe8KF%2BE2KjnNnambvRL3pIPlZZ12JTk8%2FoONedQNQxn9nhjFi1QLCqTyvigZ1FT%2F94us3SWAKa9C7NAz70Ouz%2B6HH6%2BuqIH1DW3OUIPFfj5TqDVPbevBwJP6yp5YdJzK0cw7hVMXQjPGINP3P9Z55Zn1ksoTC7K1OUAy0DFillcwBdUvTHytgIB5PjJUkE%2FcsuYO%2FbQsGRbbcoMAyc0tEIweSd80v8Q4cOpcqdR4AhcxDNp9iR2qBiixQhPvYJwwVaWXJMMuMIHJs1%2F0dpB%2BEINDNRPvZLkcDhDtUqfgrIYgEE0xxv2uyHtxsRzbMUGe1LWwYfcfkrr%2BrwHFz7zCgiM2C5MPw03AraFCB47CFcr1mx5MFSgPM7nW1rVaEQMehger0cspoNiT6kaU%2BHFOBpIbyejRp%2BUFl9v2H%2Fp9pXIy5o4vblDmkyf%2BJYgQSCtSsLOfvPaJ8tb9Px7uv1jCLOa4zVQNvrqNoivsJoxN25LlPis1U0w04%2FbyQY6pgEJHWg0Q4mCv3ncaSFCC%2BMW6oztturGb1I4g7qQaIxF2IKDpOsULI9eJ6SE%2BRJRSc5AOr2qIT%2FgGMRRA8tyDgBLjkiLAXBppblbJiJwo8klxMptMt4ac9sNicIftyLfRhG8DLyh3t2fvS8J%2BHrafQkSslwYMNnh%2BTxeoi4%2FW2jjcQy1IQRTFKsW3DNEAFYZCHjlIgET3I4XP6NGUXWWYpuV6V2NiyoO&X-Amz-Signature=1f26244a5aec360ed40aceafb97aa772e274dc9217cfe640d07305949379cb20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXMUCYQ5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlN%2FOhhi697G8S%2FXG%2B4gIrg3cvvEsHH7IiQ99O0dZmGAiBm4EUT3g7qss3ZClqIzRoPwTbkRQgHxGZrLFFs9WrLUiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtLYxR5GEnSGuoVhRKtwDrBPsl6CmlMseqUOUfGOA9Cx7zQ0XxI%2BDO9m9ZfGhYLmLh%2BO9n1SQmVVJSLN%2FqgtaZnu9Jd7cSP7OWxsr6SkJam%2BYCHAIOlqDzXUaYZ5ZqWHxP3rFjk3nj0MWCtAumHE9j5r7D4okSWe8KF%2BE2KjnNnambvRL3pIPlZZ12JTk8%2FoONedQNQxn9nhjFi1QLCqTyvigZ1FT%2F94us3SWAKa9C7NAz70Ouz%2B6HH6%2BuqIH1DW3OUIPFfj5TqDVPbevBwJP6yp5YdJzK0cw7hVMXQjPGINP3P9Z55Zn1ksoTC7K1OUAy0DFillcwBdUvTHytgIB5PjJUkE%2FcsuYO%2FbQsGRbbcoMAyc0tEIweSd80v8Q4cOpcqdR4AhcxDNp9iR2qBiixQhPvYJwwVaWXJMMuMIHJs1%2F0dpB%2BEINDNRPvZLkcDhDtUqfgrIYgEE0xxv2uyHtxsRzbMUGe1LWwYfcfkrr%2BrwHFz7zCgiM2C5MPw03AraFCB47CFcr1mx5MFSgPM7nW1rVaEQMehger0cspoNiT6kaU%2BHFOBpIbyejRp%2BUFl9v2H%2Fp9pXIy5o4vblDmkyf%2BJYgQSCtSsLOfvPaJ8tb9Px7uv1jCLOa4zVQNvrqNoivsJoxN25LlPis1U0w04%2FbyQY6pgEJHWg0Q4mCv3ncaSFCC%2BMW6oztturGb1I4g7qQaIxF2IKDpOsULI9eJ6SE%2BRJRSc5AOr2qIT%2FgGMRRA8tyDgBLjkiLAXBppblbJiJwo8klxMptMt4ac9sNicIftyLfRhG8DLyh3t2fvS8J%2BHrafQkSslwYMNnh%2BTxeoi4%2FW2jjcQy1IQRTFKsW3DNEAFYZCHjlIgET3I4XP6NGUXWWYpuV6V2NiyoO&X-Amz-Signature=ac2de43a6ecaf3f6a1b875f9b21ff4bd75dd84c5d90d550c9d21764a6494dbee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
