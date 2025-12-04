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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3FXP5H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGxbOw1HhQraASDNLjcLqKETT%2Fe04w4svNAst27jmswAiBQykrmgFoHGwtzUiUsXsT1KjBD%2FnjCVJKYv%2FBtd0nyrCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMgmqGgRR4sOlOer2dKtwD66lzZ4xtzMuwaRzoT9bJkQSnLIvJAAOwUUAwr2Rw%2FYgSSY5oaaCMOUhK5o4u%2BZ3dXh3BDMvIhb45OK8bDN1LGhbkOe0RNz1BsH230cmIS7Ka9J7GBLXNgnr0l1DIPOgwtPMlryjbgtbuMazFwsf2nFJfKLI%2FITG4HsLTBq21TwTDvjrKDD82KZCdWSM31J8W3TBIoQMfhG7%2F%2BBbL9eyPe9ZzmbYBRkUWqwa5SZssWuTueA5EVXkX69TunwY%2BPVPIx9aTt%2B8zm40xapltWK20BS7idFBhw4fyRP4nkM1KcB6LhFTcreI3r2mVpdVUal4yT4AtIIaIrp1SXZyiCUo1B7jxJVoIkRDgvVUP4%2BrwmdGI3pAfvNiuJkMDz3%2FxlRtuUxgwafAbUWfFqSsiF24Nw8nyWbTKx0SnhWni29CUIhKvkZKpACSKzleGnleBbrEiaLLqMwN%2BXBFddFuFNaB1uc0EX9ayqDOhsFQ%2BrPsOG2bEvsnuWygGyZLaJa%2BYc5RQQ82B%2BQKG%2FgJGmz%2FvxSH7pnIBNCZAn9X4sX0ID23cLjmCdNb3AlQmYcXwIaD2ViqiUUpnvv6FPpv1SyL9jsAxulmvZ5lwGd5emeDbzQ0G6EpXiKm35wEw%2Bahb%2FGUwyYzIyQY6pgHnihlLe1%2B8C9DWdYF8i%2FkA1YTVMnlA7XSjiMDD%2B8pUbGsCAmBtTuoZ6%2BtdBxu1Eh0QGGKVyzbNLqpvKjeoopnUJHQLGQ9CO5sHpaRpJrMTnQ6aZEY1078aT956DdS5puWV09HEu60Tl9KuMiozZ3wOirJ7qhQOmiA1Gghqsy1gT6rYFTUv2nKeX1%2FyILbmDp10NYAcmx99RndxmcatnbAu8KR9j37Z&X-Amz-Signature=cd2ece657dd746f787c391a8fabd9dfc0a65b6d810180d7d799185e556a9d139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM3FXP5H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGxbOw1HhQraASDNLjcLqKETT%2Fe04w4svNAst27jmswAiBQykrmgFoHGwtzUiUsXsT1KjBD%2FnjCVJKYv%2FBtd0nyrCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMgmqGgRR4sOlOer2dKtwD66lzZ4xtzMuwaRzoT9bJkQSnLIvJAAOwUUAwr2Rw%2FYgSSY5oaaCMOUhK5o4u%2BZ3dXh3BDMvIhb45OK8bDN1LGhbkOe0RNz1BsH230cmIS7Ka9J7GBLXNgnr0l1DIPOgwtPMlryjbgtbuMazFwsf2nFJfKLI%2FITG4HsLTBq21TwTDvjrKDD82KZCdWSM31J8W3TBIoQMfhG7%2F%2BBbL9eyPe9ZzmbYBRkUWqwa5SZssWuTueA5EVXkX69TunwY%2BPVPIx9aTt%2B8zm40xapltWK20BS7idFBhw4fyRP4nkM1KcB6LhFTcreI3r2mVpdVUal4yT4AtIIaIrp1SXZyiCUo1B7jxJVoIkRDgvVUP4%2BrwmdGI3pAfvNiuJkMDz3%2FxlRtuUxgwafAbUWfFqSsiF24Nw8nyWbTKx0SnhWni29CUIhKvkZKpACSKzleGnleBbrEiaLLqMwN%2BXBFddFuFNaB1uc0EX9ayqDOhsFQ%2BrPsOG2bEvsnuWygGyZLaJa%2BYc5RQQ82B%2BQKG%2FgJGmz%2FvxSH7pnIBNCZAn9X4sX0ID23cLjmCdNb3AlQmYcXwIaD2ViqiUUpnvv6FPpv1SyL9jsAxulmvZ5lwGd5emeDbzQ0G6EpXiKm35wEw%2Bahb%2FGUwyYzIyQY6pgHnihlLe1%2B8C9DWdYF8i%2FkA1YTVMnlA7XSjiMDD%2B8pUbGsCAmBtTuoZ6%2BtdBxu1Eh0QGGKVyzbNLqpvKjeoopnUJHQLGQ9CO5sHpaRpJrMTnQ6aZEY1078aT956DdS5puWV09HEu60Tl9KuMiozZ3wOirJ7qhQOmiA1Gghqsy1gT6rYFTUv2nKeX1%2FyILbmDp10NYAcmx99RndxmcatnbAu8KR9j37Z&X-Amz-Signature=6c16794f7a4f586d26b1ba0b6e412be70fe3f3cb16d8fc222f62d3d89df99a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
