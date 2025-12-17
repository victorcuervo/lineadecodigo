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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNFWL4R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5hfrvuRW27dC0PRU7MqItRwYhyuF3jEpCIPPKeArFsAiEAv400C%2B7PSI5CjbtYEwQXIZOv1glt0XT7lmxyNg%2B33E4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgP%2BNr8rD9YX8UaKCrcA03vgcZT7n%2FrtJ4rFBlaALP7NSBaMRdAq%2FE6zl9e82txHKpqLs%2BoCcyaFzJsBzKQb3V5d%2FgSbZu52Zejc3u5XyDLPQqsfi4ubnkpblLuFsylPJ1NwwUnAFZQriSRbe8JrAgfEEdif%2FK8u6HfOAHaTywOItfte3oASDwryjjKEsLBB7qDCP614vlVBxSafGzq2PNVmnZn0zicN6Vrvanlz%2BjEigfiZeS%2Fg5SwfRU%2Fpdf0VLQcwZBSREY5elOhYHfDeisr8fMF69aauMFS%2BYwvLUAOMu3C9CKW1%2FL1x%2FXNQqP8tqd9T6%2Bk2ssZGhSKmvFgj8VSqsAGXET38335SvBq0P8c5vL3xAmQUpHwzBiaVJmERt2fFraCDbmOayYxT0b0pX3J8JgwHwkYHeNIk%2B10Pgy1IH5%2BcObiBpDzxCfXufqYfaHSVJ5tVCP8vvstMD5cwXRG%2BRaK5McvY2PE6%2BnwFDdwXilQyv3%2FdAt3p6rdFD1yNi5bgIXsnYYFGBMCL8QFRDIFI3u85qDbHDO8%2BGGGVkyWs7bxbsD%2BwpSta9IkZ9pn%2FVxUhGo6qdrOgXQ4aUlU8mlk0Q6JkQUdDU9HtTdEa08VHPK0%2FwVmT8LmkKJT9BosG7uxhR3voo%2FRtCFrMNCLjMoGOqUBFhp8P1Gzd9u7LAzw0CQmYPXRNxWJmHiwxZcfJfTb6sUERJXBJSTfWwkCvYb%2BgK7nTwg8kqUgUKwEw2AN%2B9XgZbS1WnriG1Zfz1ES5ZW7R2k6lj9hja8ol3qnPmTRtMWyfF4EQxl7HioMn07MdvKYfl9jkidNNdGwZEFPvpr91HR70gXe5qs3aj38Ip7h8WHhV27%2BEUwSBP%2BN6m%2Fk6AbbloJY85ZB&X-Amz-Signature=de34f239d2cf995b075fec72fd6f25411f98a1e6b2ae33ac2d3d45d7c10d06e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNFWL4R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE5hfrvuRW27dC0PRU7MqItRwYhyuF3jEpCIPPKeArFsAiEAv400C%2B7PSI5CjbtYEwQXIZOv1glt0XT7lmxyNg%2B33E4qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgP%2BNr8rD9YX8UaKCrcA03vgcZT7n%2FrtJ4rFBlaALP7NSBaMRdAq%2FE6zl9e82txHKpqLs%2BoCcyaFzJsBzKQb3V5d%2FgSbZu52Zejc3u5XyDLPQqsfi4ubnkpblLuFsylPJ1NwwUnAFZQriSRbe8JrAgfEEdif%2FK8u6HfOAHaTywOItfte3oASDwryjjKEsLBB7qDCP614vlVBxSafGzq2PNVmnZn0zicN6Vrvanlz%2BjEigfiZeS%2Fg5SwfRU%2Fpdf0VLQcwZBSREY5elOhYHfDeisr8fMF69aauMFS%2BYwvLUAOMu3C9CKW1%2FL1x%2FXNQqP8tqd9T6%2Bk2ssZGhSKmvFgj8VSqsAGXET38335SvBq0P8c5vL3xAmQUpHwzBiaVJmERt2fFraCDbmOayYxT0b0pX3J8JgwHwkYHeNIk%2B10Pgy1IH5%2BcObiBpDzxCfXufqYfaHSVJ5tVCP8vvstMD5cwXRG%2BRaK5McvY2PE6%2BnwFDdwXilQyv3%2FdAt3p6rdFD1yNi5bgIXsnYYFGBMCL8QFRDIFI3u85qDbHDO8%2BGGGVkyWs7bxbsD%2BwpSta9IkZ9pn%2FVxUhGo6qdrOgXQ4aUlU8mlk0Q6JkQUdDU9HtTdEa08VHPK0%2FwVmT8LmkKJT9BosG7uxhR3voo%2FRtCFrMNCLjMoGOqUBFhp8P1Gzd9u7LAzw0CQmYPXRNxWJmHiwxZcfJfTb6sUERJXBJSTfWwkCvYb%2BgK7nTwg8kqUgUKwEw2AN%2B9XgZbS1WnriG1Zfz1ES5ZW7R2k6lj9hja8ol3qnPmTRtMWyfF4EQxl7HioMn07MdvKYfl9jkidNNdGwZEFPvpr91HR70gXe5qs3aj38Ip7h8WHhV27%2BEUwSBP%2BN6m%2Fk6AbbloJY85ZB&X-Amz-Signature=bed471564fb23547eafce031dfbb22bc3a21f0352df7af7de27249066b8df6a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
