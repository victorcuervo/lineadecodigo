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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QPPYLUH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLmy4T5EwFGy7BW2pUEKdkqMqfLJHrNMzt5Y1AfnQjyAiEAk4mVTKeE3Xo19J2k3cpuME7LYVis9H3rkp4XhgZPggkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc2j2nHIrBTDSk7FircAwmhlmpsdrF4C2TWtUO661vplP1tn%2BGlYcF%2FyT3aW1bgiHUKXOeQO%2B4lx1W7xLUgBnGXCuU6s7etsNRlL%2FSALrOP4MWgJFdMj3Rtu4oUUd2FrqQ4ZWckL2JUP%2ByqWoDWJW9gtnOBz2E%2Bg4Cx1niaakdghHUK7t5kigLv0yp6mof9Sl1XICWMjoYmL%2BAwjF9UcLJg6NjTPfqMoHhkWfonN4w1unr%2FzkxbuooiKmHCSYknEgGuM5FGZlV8hjfLJTqIJTA65%2FwNZVY1y15SAb3ZzIYjZ4t4wNG1zuTgwhFsH9pX%2BLkUvwh4SUPr6Rm%2BVYlpCD8ikm6f3%2F6z%2FyLr2edNqOvlpcccZiencrxLLFqutVVaeFT%2BxdoA9MWt%2BVqKtNXfPF3T5xxTpS7pxSvyywAtuLwoJddWN1GfF5gXsZ8eWTgoJpMQMv%2Fh2d5hb5il5A2oJWouV2vTol2H%2BlbYRROATMVkAvczenlsDv%2FOp6eraNy%2BFrV2%2FxBRRsJrHY7X%2BEDNsFaTgD%2BFESstGGgiYq4uY9emaFnwAoYKBCazGgBf%2Fplsv9TLSBH6ZiZRuORL9nKqppovmOslGuJRvy%2FsI1v6xXg6PP6kp%2BiCPzA60STJCgAVft3ZN0oYttx0%2FQDSMLL%2B0skGOqUB4e4MUNkhwZOuYc4rnb4ciaq%2BfiDeOpWTQA08NFq7GwkoweJBEAakkoZlxuD1de8rbA6hOUbYDyuK8AuwM9yEth6jB5n0d9eCNLyRoJBuCy7EDRsMr5LfqF%2FRLQS8PqK5xAaxuynPMn12lOW%2Bk0eFdbfeRsnUwE7vMzFip5Uq6pbtsk7vEWgbhWBBOUqMlTWrsj2jB5j2z2APsO1oc2W5TfkUsESt&X-Amz-Signature=e7f1b8a42cd1715fbb5eb2e2360906783c8930ed869f27bb0806c41d3eb930cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QPPYLUH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLmy4T5EwFGy7BW2pUEKdkqMqfLJHrNMzt5Y1AfnQjyAiEAk4mVTKeE3Xo19J2k3cpuME7LYVis9H3rkp4XhgZPggkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBc2j2nHIrBTDSk7FircAwmhlmpsdrF4C2TWtUO661vplP1tn%2BGlYcF%2FyT3aW1bgiHUKXOeQO%2B4lx1W7xLUgBnGXCuU6s7etsNRlL%2FSALrOP4MWgJFdMj3Rtu4oUUd2FrqQ4ZWckL2JUP%2ByqWoDWJW9gtnOBz2E%2Bg4Cx1niaakdghHUK7t5kigLv0yp6mof9Sl1XICWMjoYmL%2BAwjF9UcLJg6NjTPfqMoHhkWfonN4w1unr%2FzkxbuooiKmHCSYknEgGuM5FGZlV8hjfLJTqIJTA65%2FwNZVY1y15SAb3ZzIYjZ4t4wNG1zuTgwhFsH9pX%2BLkUvwh4SUPr6Rm%2BVYlpCD8ikm6f3%2F6z%2FyLr2edNqOvlpcccZiencrxLLFqutVVaeFT%2BxdoA9MWt%2BVqKtNXfPF3T5xxTpS7pxSvyywAtuLwoJddWN1GfF5gXsZ8eWTgoJpMQMv%2Fh2d5hb5il5A2oJWouV2vTol2H%2BlbYRROATMVkAvczenlsDv%2FOp6eraNy%2BFrV2%2FxBRRsJrHY7X%2BEDNsFaTgD%2BFESstGGgiYq4uY9emaFnwAoYKBCazGgBf%2Fplsv9TLSBH6ZiZRuORL9nKqppovmOslGuJRvy%2FsI1v6xXg6PP6kp%2BiCPzA60STJCgAVft3ZN0oYttx0%2FQDSMLL%2B0skGOqUB4e4MUNkhwZOuYc4rnb4ciaq%2BfiDeOpWTQA08NFq7GwkoweJBEAakkoZlxuD1de8rbA6hOUbYDyuK8AuwM9yEth6jB5n0d9eCNLyRoJBuCy7EDRsMr5LfqF%2FRLQS8PqK5xAaxuynPMn12lOW%2Bk0eFdbfeRsnUwE7vMzFip5Uq6pbtsk7vEWgbhWBBOUqMlTWrsj2jB5j2z2APsO1oc2W5TfkUsESt&X-Amz-Signature=f58c06bd8d9790f8dedbafe6948ee6485089c497cc6c541647090957652a8573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
