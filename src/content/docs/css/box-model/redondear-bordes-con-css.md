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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCZ5EGT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLG7%2B1EhM9hoHqEbeH9ZCxDpytVfw%2BWl8H459Z5n7YqAiEAkWL%2FaPrStqDFDKL9RQKFUy8FJdVbsUZUFHcforU668kq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKIQpzAjN1jzHj%2BGSircA8SXA8THG8s%2BXbW1o3zx0H%2Fw4tLzdgnlYnnsksvjFE%2FtocP107RwWFVGWnTR7L%2Fnw52RAu9SvFPRbff1TKzHfX4tHPKLh0rqhmymiaNtRxcFuE0VNjnVl4L6bfOryn8q2cUeinCmzzML9zvxTilE%2B9sGFSQy7nJ0uizupnIQRuu21XmEnkdWDhFm8uam0YoQteBfzFaBFwDsigSa6BZcs8L8vIPMTgnA7h03XFOdQHdAGwUi%2FPtC0dbbkyPOnn%2BI4F3c7VUwu6YUOSJciGtUf83l6XBq0hqqMr0IGuK%2FAZAsh%2Fz%2FM%2FaIFqYjWKhybhQq4v8pvOmVFjoneq%2BjtZFJxGEsAomm%2Bp0vDe%2Fv5q%2FqxABmq7eKL5PmQGJmRsCXAMHyldMGsXntlmhUphWiowCZqFf8NQICCx3ygKg6aWOzUAC4SX%2BrhV16UUZ8Z6MMdZFDr4D9mREq%2BPoEjaCoTzEpxCcu8WtpwW0hL4rP4CDUM98xJhP%2BOZ0Kl8NUndesIkELL6Hbf3NAiJxilus9uelYjT%2BM5JVkhKeqR9%2Fc%2F77kb0Z%2Fy1KM4yUl325TCOEGsa%2Bh7q6LgO6OwjEevVBofI6CRXyKXsCitDckCueZM5D0rg3Ot5U4Ix4f%2Bdvs8rMWMMadicoGOqUBYBPXz63jKIo0Og72wTUqeODoI0MqnPa7HdHhqtIL2L1nXCtarrIZeB%2BxhrzT7enGzVWWdSi7fBKG08BRWqQihtYMGliml6ikntJHeFNV2Y7xnds2yS1zFsNbcadP%2FogWFX%2BIrcIfZZ9dqq%2FzNF2iGBN39sXGHB%2FZ2kqGvxAu09X57GNt9fa4FzIlDjVPve%2F%2FZyTmv6hiHnQAKUHnx2WdS4JniY9c&X-Amz-Signature=08af645945a12f9e869f35e12552ddc6dc9e9f2ed4f50b5ab33b747ebff3423b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCZ5EGT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLG7%2B1EhM9hoHqEbeH9ZCxDpytVfw%2BWl8H459Z5n7YqAiEAkWL%2FaPrStqDFDKL9RQKFUy8FJdVbsUZUFHcforU668kq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKIQpzAjN1jzHj%2BGSircA8SXA8THG8s%2BXbW1o3zx0H%2Fw4tLzdgnlYnnsksvjFE%2FtocP107RwWFVGWnTR7L%2Fnw52RAu9SvFPRbff1TKzHfX4tHPKLh0rqhmymiaNtRxcFuE0VNjnVl4L6bfOryn8q2cUeinCmzzML9zvxTilE%2B9sGFSQy7nJ0uizupnIQRuu21XmEnkdWDhFm8uam0YoQteBfzFaBFwDsigSa6BZcs8L8vIPMTgnA7h03XFOdQHdAGwUi%2FPtC0dbbkyPOnn%2BI4F3c7VUwu6YUOSJciGtUf83l6XBq0hqqMr0IGuK%2FAZAsh%2Fz%2FM%2FaIFqYjWKhybhQq4v8pvOmVFjoneq%2BjtZFJxGEsAomm%2Bp0vDe%2Fv5q%2FqxABmq7eKL5PmQGJmRsCXAMHyldMGsXntlmhUphWiowCZqFf8NQICCx3ygKg6aWOzUAC4SX%2BrhV16UUZ8Z6MMdZFDr4D9mREq%2BPoEjaCoTzEpxCcu8WtpwW0hL4rP4CDUM98xJhP%2BOZ0Kl8NUndesIkELL6Hbf3NAiJxilus9uelYjT%2BM5JVkhKeqR9%2Fc%2F77kb0Z%2Fy1KM4yUl325TCOEGsa%2Bh7q6LgO6OwjEevVBofI6CRXyKXsCitDckCueZM5D0rg3Ot5U4Ix4f%2Bdvs8rMWMMadicoGOqUBYBPXz63jKIo0Og72wTUqeODoI0MqnPa7HdHhqtIL2L1nXCtarrIZeB%2BxhrzT7enGzVWWdSi7fBKG08BRWqQihtYMGliml6ikntJHeFNV2Y7xnds2yS1zFsNbcadP%2FogWFX%2BIrcIfZZ9dqq%2FzNF2iGBN39sXGHB%2FZ2kqGvxAu09X57GNt9fa4FzIlDjVPve%2F%2FZyTmv6hiHnQAKUHnx2WdS4JniY9c&X-Amz-Signature=7091152b103fa6093d280c4602701b42d429073ee24ff822090807a1b112529a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
