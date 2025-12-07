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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUX2RGYI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FY6f5UDkPTrS7NnVk6IXGD%2Fy6bIbQEUjgHIsln3wpZAiAjm13%2FNGsudMHiesvotRb4xLXbnzJdaV8UI0ZwCqwn8SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4gdnoRd%2FAwUFDhTOKtwDNDd12vuwm22PVixuOB1LXtJa8kD%2Bcz5qoi6z5L8CI6x%2BUDiUL1HOEZWmM%2BCEohU7GglRoV%2F%2BL3wukLaRKdKZoMRU312mwTJodhzDfbsmlntM%2FrruwiZwfUgtE%2Fqc9PpyaNUlJZE%2BvfrdJGrO3Wfv0eT7JeKnpYxY6MDlrujVXMSVC%2FFv6E%2Bt8KgPWUlBfLPUCrk70IjCJylAo7llAdTNYo5GcA%2F7WOmalQuPdQVSR8eQs48y1us1a2NITBVgTZdC4hL8slnLPliBAMaQvEWpejXRZwIY1duvmuO6HS2tLhGJL3fysORWQyhcKhhFwgZ52H%2BNpn29AbMsVmQ8WuQ%2Bx9V14hj%2BVE1HeJU%2BKhzJo7eJwhCyMXcUmaexffcxkGzFV40gKLN8AUqoeR5S4%2FkR1WPiDP9ByVBlg74K%2BqlFnxxDo3hH7u%2F1I6MzBwtSStKy2UFkCQIZTPcQ5y7CNn3V%2FNN%2Bstm6eMJx9A%2BJ1eIjsVoh02D5GbLeT5EzuMIObkrnwhCeDo4UeLWZlq7%2FRYGj2YBvDat8ud2O6MZJMLN1TlBXOyj1FIDXbivQSBkd7fNmbnnnEBwni4ke6nCjP9Ws9tm94J8ZMKbQbKiVGLKxHBC2gfmnkWLbBIuqkDswrv7SyQY6pgGOKOAkbBRmUWEsUr6r6zin%2BuDY5vZjFAtr1lz5LoZdMZlgsPD7Y1s46K4aMrT1Z5R5U8DbNphagaqDQNkfJxMLtnYpCcIK1lDuB23dOWM30GNs%2BmfRS76to1lkNGwLFTdNEKp4Ap306Mmk%2F65W6ZyRQ0%2Bk%2BvUio9ATWLDLDX08iz3nD8cP2q3f7dvGHJf73OCfLo7Tb16Bs1Hi0q6dcXrUpb536Q%2FH&X-Amz-Signature=3f771bbfb5a6c5e268fff103098fd4f5a8e4d11ce73d90de9a14ef0565cee8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUX2RGYI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FY6f5UDkPTrS7NnVk6IXGD%2Fy6bIbQEUjgHIsln3wpZAiAjm13%2FNGsudMHiesvotRb4xLXbnzJdaV8UI0ZwCqwn8SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4gdnoRd%2FAwUFDhTOKtwDNDd12vuwm22PVixuOB1LXtJa8kD%2Bcz5qoi6z5L8CI6x%2BUDiUL1HOEZWmM%2BCEohU7GglRoV%2F%2BL3wukLaRKdKZoMRU312mwTJodhzDfbsmlntM%2FrruwiZwfUgtE%2Fqc9PpyaNUlJZE%2BvfrdJGrO3Wfv0eT7JeKnpYxY6MDlrujVXMSVC%2FFv6E%2Bt8KgPWUlBfLPUCrk70IjCJylAo7llAdTNYo5GcA%2F7WOmalQuPdQVSR8eQs48y1us1a2NITBVgTZdC4hL8slnLPliBAMaQvEWpejXRZwIY1duvmuO6HS2tLhGJL3fysORWQyhcKhhFwgZ52H%2BNpn29AbMsVmQ8WuQ%2Bx9V14hj%2BVE1HeJU%2BKhzJo7eJwhCyMXcUmaexffcxkGzFV40gKLN8AUqoeR5S4%2FkR1WPiDP9ByVBlg74K%2BqlFnxxDo3hH7u%2F1I6MzBwtSStKy2UFkCQIZTPcQ5y7CNn3V%2FNN%2Bstm6eMJx9A%2BJ1eIjsVoh02D5GbLeT5EzuMIObkrnwhCeDo4UeLWZlq7%2FRYGj2YBvDat8ud2O6MZJMLN1TlBXOyj1FIDXbivQSBkd7fNmbnnnEBwni4ke6nCjP9Ws9tm94J8ZMKbQbKiVGLKxHBC2gfmnkWLbBIuqkDswrv7SyQY6pgGOKOAkbBRmUWEsUr6r6zin%2BuDY5vZjFAtr1lz5LoZdMZlgsPD7Y1s46K4aMrT1Z5R5U8DbNphagaqDQNkfJxMLtnYpCcIK1lDuB23dOWM30GNs%2BmfRS76to1lkNGwLFTdNEKp4Ap306Mmk%2F65W6ZyRQ0%2Bk%2BvUio9ATWLDLDX08iz3nD8cP2q3f7dvGHJf73OCfLo7Tb16Bs1Hi0q6dcXrUpb536Q%2FH&X-Amz-Signature=7e42274a3174c1ebafd07f269447f6f9893c9d247004104d798f437c33c35977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
