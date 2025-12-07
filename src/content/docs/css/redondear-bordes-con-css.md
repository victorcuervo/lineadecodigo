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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYLJ3R3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIfhBfUFKcP9AXE5pKRq8wHMzKQO3FBv9IB%2BSrFeaPUAiAhDucQfUr%2FhN4dPNtUXurnLqKi%2FzwQYzLnd67y9P1vjyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW90qIUyM127soiX7KtwDop8R1ai5yXHc91cZss2mxZLfXevghRPgu8BBN4A3I0vEx5%2F9SG4UzeDn%2Bl5xRxp8lO3X%2FQnGuRXtIpAnPw1oai0VVNLIJJOzJqxzOxa4O%2Fw7gg07TYwBdau2RIanIiqjDvC3jAS29E6RJVI%2BNBYny2JYYQVh9BKy%2FjyFfW6zbRj6grqCWwjAVd3K5jh%2FZUD5hFux%2B%2FqHP1gtpZGljF1rLSI6TWAZKWsF4ArD1WuP1tIDo6OQSEp4DQALRKmx%2B9hqaPr8WGSdZWLDaLi0A2dvpTBjZR8SeGDLHJHsLJ%2FYFKo02tCA3wD7zzOpFZDSfMHjfU7b05WZGn43bgV6tDRI7EbWl0%2BbeQwPnmZ16eE4t9NTcD%2FT43m3UtXkrLyxOl7MlWEgyJhkC24F205plY44JAyc34gJzVY4UIMxSogXCiMWJXdR52EdA4r3EZ5RMFsI6V8LNl2oaxKc8uOozyrlaORjMJ6ibxZkb9B7ZoCFYcSYiNePmEEt7HC5JFl3gP%2Fqz02j8lESLn7bpiC4ROcmV4yuGTbj%2FdWXiHZsrO5vQ1y4O86PYIRn%2BIK0XcCm8hzdrWi493P2tSTEbEquGqzf%2FqygVgN6QPO%2BTWXFuyGgKnujOM%2FOsjM%2BBgZBlyMwqZfUyQY6pgEcEo%2FCvD6FCKHNoIP84x1KBQ4%2Blbua8DaXWFv7eTztLpu2NbHxlekOtkkn%2FD7HTieek9LvBFHhyPy%2BTYYEkILpSOncviNbP7%2BEWUnAK5krsWiId6eCQ4orRueQ7y7EM5oRySTPicSb18LxoBcVVySrHMMpzne%2FFtckzcwNYg%2Fh68fAaKaEHivlk8XsYcEiF5x3KpeLTPBDrQE3uesOBbqF6MQYIdQv&X-Amz-Signature=a93109bc0b0f80defd8b55727ceba99877ef7e81100cf0661e8c433b8dc86c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYLJ3R3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T085400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIfhBfUFKcP9AXE5pKRq8wHMzKQO3FBv9IB%2BSrFeaPUAiAhDucQfUr%2FhN4dPNtUXurnLqKi%2FzwQYzLnd67y9P1vjyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW90qIUyM127soiX7KtwDop8R1ai5yXHc91cZss2mxZLfXevghRPgu8BBN4A3I0vEx5%2F9SG4UzeDn%2Bl5xRxp8lO3X%2FQnGuRXtIpAnPw1oai0VVNLIJJOzJqxzOxa4O%2Fw7gg07TYwBdau2RIanIiqjDvC3jAS29E6RJVI%2BNBYny2JYYQVh9BKy%2FjyFfW6zbRj6grqCWwjAVd3K5jh%2FZUD5hFux%2B%2FqHP1gtpZGljF1rLSI6TWAZKWsF4ArD1WuP1tIDo6OQSEp4DQALRKmx%2B9hqaPr8WGSdZWLDaLi0A2dvpTBjZR8SeGDLHJHsLJ%2FYFKo02tCA3wD7zzOpFZDSfMHjfU7b05WZGn43bgV6tDRI7EbWl0%2BbeQwPnmZ16eE4t9NTcD%2FT43m3UtXkrLyxOl7MlWEgyJhkC24F205plY44JAyc34gJzVY4UIMxSogXCiMWJXdR52EdA4r3EZ5RMFsI6V8LNl2oaxKc8uOozyrlaORjMJ6ibxZkb9B7ZoCFYcSYiNePmEEt7HC5JFl3gP%2Fqz02j8lESLn7bpiC4ROcmV4yuGTbj%2FdWXiHZsrO5vQ1y4O86PYIRn%2BIK0XcCm8hzdrWi493P2tSTEbEquGqzf%2FqygVgN6QPO%2BTWXFuyGgKnujOM%2FOsjM%2BBgZBlyMwqZfUyQY6pgEcEo%2FCvD6FCKHNoIP84x1KBQ4%2Blbua8DaXWFv7eTztLpu2NbHxlekOtkkn%2FD7HTieek9LvBFHhyPy%2BTYYEkILpSOncviNbP7%2BEWUnAK5krsWiId6eCQ4orRueQ7y7EM5oRySTPicSb18LxoBcVVySrHMMpzne%2FFtckzcwNYg%2Fh68fAaKaEHivlk8XsYcEiF5x3KpeLTPBDrQE3uesOBbqF6MQYIdQv&X-Amz-Signature=21d6489afc509e8de4eeb376e3c57bbbde28c209cc5b166d9cb74698202acce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
