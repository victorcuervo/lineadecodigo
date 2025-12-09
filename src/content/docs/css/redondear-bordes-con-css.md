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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5HP2PX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeUhEB2lyTWTKuZEgXXiDQHmXJ%2BVbgf51gA4%2FgFmU7PAIgJdyU5fhLqM%2FkUOMzi1g1%2BR0CANHokrkchu1x9eVGomkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxjEiPagwtfRxt3bSrcAyVb3V%2BTzjWMAJH%2Fe%2F%2FuqQWwfZKE3isL1xUXENAPnJUDO6dQTreqatYWvmUWCa7PJoEc1%2BnMxypOMFfw%2FYtIwPn07r1g4UbRdB3hcIRbHTactW9AdhVfZBdbITW7MbVxar7TMhPtYN%2BAi3bb6%2FxFnRghfaYmm4itdLfLujpchoGT81ld14IOLSK23rNxWgsS8%2FagthDntJnG6GzfmQQ7ofJjTcCrzSGx3SWV%2Fddu7jkCl29kTyxbkkrg%2FnRoksqwcyIpvqhsLUczw5j19wjPIhO1H%2BGIaezo2oKI2yGkWhwJ%2F%2BP6Dk6zHs%2FyVPdrIWCspBTH7jcqla5GtiejrPH2lB0H35d1SP6E4JVbde3seyY78lH7Mu1NNDJmPmrOnkFJrv1ZzNd0VjpgEhm%2B%2FsByyeWhb8PvRFngx%2BAJqXx2jNkwnTQxExN29ozLiA9xBECr4QyUhGNI3xQMWYeZTZjoZ4a9X65yQAw0wFO0C7PLbAIiLlcW%2B%2BTO057l7T5LxMJMHLPOQlwYEfHm0z1N2VVby%2BaAxf9m4S9EhlrdJXFxoExpXOdiT0iPAKqXKlX%2FSxKDgznJ6ioFnOTOYymDrTQW2pRsb2LvF3mApcPUyRQavJHWJiIyphG5B3qDMgdhMKjD38kGOqUBpAKGle49q7tGWNSBXFMZF68vMSqIW1sWBN%2FXTy3XBsl2DqI0Do%2Bhf%2B67INX5U%2BTsVAPHvxYNN5zI5BEECE6MfyvlDGRxsl14l%2FaJd%2Fkb0eKqa7Vfzb4yXA8ifs0aG9KKWzAKcQqkq2Ki%2BxgYNOVOqFfbN5LSB1bndiQw52nZmp98A%2FscbVyPftRC4KBlV78xMF6RYS2V6gb7MwiyFyJ23viOZTtV&X-Amz-Signature=e3c59ddd170435c5c69874123db16d959fd752af50422a13c9d5835eff324310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ5HP2PX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeUhEB2lyTWTKuZEgXXiDQHmXJ%2BVbgf51gA4%2FgFmU7PAIgJdyU5fhLqM%2FkUOMzi1g1%2BR0CANHokrkchu1x9eVGomkqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLxjEiPagwtfRxt3bSrcAyVb3V%2BTzjWMAJH%2Fe%2F%2FuqQWwfZKE3isL1xUXENAPnJUDO6dQTreqatYWvmUWCa7PJoEc1%2BnMxypOMFfw%2FYtIwPn07r1g4UbRdB3hcIRbHTactW9AdhVfZBdbITW7MbVxar7TMhPtYN%2BAi3bb6%2FxFnRghfaYmm4itdLfLujpchoGT81ld14IOLSK23rNxWgsS8%2FagthDntJnG6GzfmQQ7ofJjTcCrzSGx3SWV%2Fddu7jkCl29kTyxbkkrg%2FnRoksqwcyIpvqhsLUczw5j19wjPIhO1H%2BGIaezo2oKI2yGkWhwJ%2F%2BP6Dk6zHs%2FyVPdrIWCspBTH7jcqla5GtiejrPH2lB0H35d1SP6E4JVbde3seyY78lH7Mu1NNDJmPmrOnkFJrv1ZzNd0VjpgEhm%2B%2FsByyeWhb8PvRFngx%2BAJqXx2jNkwnTQxExN29ozLiA9xBECr4QyUhGNI3xQMWYeZTZjoZ4a9X65yQAw0wFO0C7PLbAIiLlcW%2B%2BTO057l7T5LxMJMHLPOQlwYEfHm0z1N2VVby%2BaAxf9m4S9EhlrdJXFxoExpXOdiT0iPAKqXKlX%2FSxKDgznJ6ioFnOTOYymDrTQW2pRsb2LvF3mApcPUyRQavJHWJiIyphG5B3qDMgdhMKjD38kGOqUBpAKGle49q7tGWNSBXFMZF68vMSqIW1sWBN%2FXTy3XBsl2DqI0Do%2Bhf%2B67INX5U%2BTsVAPHvxYNN5zI5BEECE6MfyvlDGRxsl14l%2FaJd%2Fkb0eKqa7Vfzb4yXA8ifs0aG9KKWzAKcQqkq2Ki%2BxgYNOVOqFfbN5LSB1bndiQw52nZmp98A%2FscbVyPftRC4KBlV78xMF6RYS2V6gb7MwiyFyJ23viOZTtV&X-Amz-Signature=abcf3b8c7b736f229f151470922f55d112745484c1aceebefd7215c895314034&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
