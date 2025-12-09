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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UU4TOGS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICP%2FZjLIDLoWg%2F2mLIklARIPiS9OmatjlKVevbB0ydGnAiBJGOw%2B1P33Ol%2Bn6K64LLJA5lcvLOB7%2FdnkTmq76QleKiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMniXFleTBZ%2BVaAlkmKtwDukQdR13qi3Zu3xvhZEbHDoErIzmauGGgMO4oYR4HNcOPhEHuedWtbdqz1rEy5GZ4UqEnfyul9TkUcXKDNnNjpwC%2F4O8RxYWU7X8%2F%2FwvIyIBaIox5XkZstMHsleSJhYt1lNeXv5BL%2FD1SaZ2Sk15bFsMRUKhl6Vj2J8Ay9B8m2oNz8%2Bh2YZEhb%2BIGnEfyFatg8EP9T63xDvj2xPp5KPTtJXoWEWmBQAp5%2FNZjWpJPZausA5eiNv%2BcdkxIplRx8dt%2BNUelvSKXfwe8zXw8V4fnayG0KvCaasFhKaFmppl8hZ6FG%2BdLsGvK%2B7r9Q16%2BwpaYVTfyfFagiWp5M%2FDwNt61LQUbDxNMs8qpCsI8AiuyseGEuSOxv2oQ1%2BXpFmeDoXye90DJ5uohh5745itpc1Ty0aJs7ywmZVE4d%2B0J1kL9QgnFKChjMhc2upVo9FukUlVlQoJzGitI%2FrwGD8vjmkKT7SE%2BF%2BQq6hG2NClZ6rrWwLzQnsR0rb6ZTPeN0M9zNZ5FFbJX2OtYZ79n9b5GshpDZQIYsLTey%2BJGktxewce0jsrAvjBB07Fh655o4q%2F4NzVRpJevwagzOXvy5Lj%2BoG4TzARWZ3X6jZOhhvziFqRDJGd4jdwfIe4SXp8CSfww2eXeyQY6pgH5xvmKbSAb5H0fzSRaUPwNUVv5aoObpMjNc6clHOu7TsObQzywORBTJhDl18hKGcsEmoIfmqm%2B2NBtySWyILv48Z22Z%2Bh4T7ioBLso%2B%2Bw7MzPG5qjb%2BUrqxKqx6rtB2jNOOA%2BYODRrC7CUp4YexL7WtQjbFQqrCkwR%2BPEVJe8FNEmbXeA1k2Bhx8vYwVg9FAjejGdk9pbaf68EkA%2BWTgbMDkUmBlod&X-Amz-Signature=c9320085b07883a9c977117334e0f3a88d1b973d0169de59bc14c7bedf7cc5ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UU4TOGS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICP%2FZjLIDLoWg%2F2mLIklARIPiS9OmatjlKVevbB0ydGnAiBJGOw%2B1P33Ol%2Bn6K64LLJA5lcvLOB7%2FdnkTmq76QleKiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMniXFleTBZ%2BVaAlkmKtwDukQdR13qi3Zu3xvhZEbHDoErIzmauGGgMO4oYR4HNcOPhEHuedWtbdqz1rEy5GZ4UqEnfyul9TkUcXKDNnNjpwC%2F4O8RxYWU7X8%2F%2FwvIyIBaIox5XkZstMHsleSJhYt1lNeXv5BL%2FD1SaZ2Sk15bFsMRUKhl6Vj2J8Ay9B8m2oNz8%2Bh2YZEhb%2BIGnEfyFatg8EP9T63xDvj2xPp5KPTtJXoWEWmBQAp5%2FNZjWpJPZausA5eiNv%2BcdkxIplRx8dt%2BNUelvSKXfwe8zXw8V4fnayG0KvCaasFhKaFmppl8hZ6FG%2BdLsGvK%2B7r9Q16%2BwpaYVTfyfFagiWp5M%2FDwNt61LQUbDxNMs8qpCsI8AiuyseGEuSOxv2oQ1%2BXpFmeDoXye90DJ5uohh5745itpc1Ty0aJs7ywmZVE4d%2B0J1kL9QgnFKChjMhc2upVo9FukUlVlQoJzGitI%2FrwGD8vjmkKT7SE%2BF%2BQq6hG2NClZ6rrWwLzQnsR0rb6ZTPeN0M9zNZ5FFbJX2OtYZ79n9b5GshpDZQIYsLTey%2BJGktxewce0jsrAvjBB07Fh655o4q%2F4NzVRpJevwagzOXvy5Lj%2BoG4TzARWZ3X6jZOhhvziFqRDJGd4jdwfIe4SXp8CSfww2eXeyQY6pgH5xvmKbSAb5H0fzSRaUPwNUVv5aoObpMjNc6clHOu7TsObQzywORBTJhDl18hKGcsEmoIfmqm%2B2NBtySWyILv48Z22Z%2Bh4T7ioBLso%2B%2Bw7MzPG5qjb%2BUrqxKqx6rtB2jNOOA%2BYODRrC7CUp4YexL7WtQjbFQqrCkwR%2BPEVJe8FNEmbXeA1k2Bhx8vYwVg9FAjejGdk9pbaf68EkA%2BWTgbMDkUmBlod&X-Amz-Signature=fbfe2245dc2bf98fe2ed26786391729c544918b819fac8ef443f306ba2365347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
