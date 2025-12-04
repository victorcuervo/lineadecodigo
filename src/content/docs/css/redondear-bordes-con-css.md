---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIY3OVY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHytheNW4FbFJR4EvXxOuIk%2Fw3M43ndhnekYoe0Iuy86AiA8HlCftc0T0vvalmsf9y1XWChlbpCcCu7EWNyuLtr6Wyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMUbAjYMLe80qxjyPKKtwDFrnoxtR6sIi07ysclmM62NpSdrm%2Bp6OgtGpuu78rpzKnWNzNoCoTtASnfYWf%2FuLKKgj6RmuAbdlJQxbgtSterdiWccW%2B6PwFmOu1WVvdowHyunIO2fg81FQJr4feFpmZDBfd90EwDL0AqoTriarugc4EWskEv90RMIv8NdS22S6vZeAxEVlWSMDgZZ%2BWPUhUZ%2BaGN0lVChIJ5uzczRCjC2jwKH3AJC%2BOXNO5PHaPcOJNpQ%2BI8qpH3HzM5jLo2qbiiJA1JO%2F2qLCLrjBIKLlrUpRMYSzEAPmosoO5mHa2feynhOwUxs39FhvMG8%2BZgyCMlRUqlDGaWnC3sbftuZCGPTIE6g5W%2BcjxfPo%2FhpcpxxvaoJxpRZDzMrI17C%2BIvtb9%2F3lpFRVRQEYVhuYD6IvC0olIbgkg4eYAqhE49j15RBozCE76Nzwy4yqNxhd0GNQBIT6p7BEe4IjK9bEzNeq0qtflpfA%2Bl2dqccEqUQJJ3ln1Namar5fba4NfzCS9AUSdoRR%2Flkwx72mePbCpWU3yoD9xvhpLX9ouOOCGS8MYK6iQqaR1%2F6ONv%2F3UkPYtBKWGO3tQS9Dumlao%2FVz2Cn5pXKRdSJ%2FaIRNOP0e7L9SnIVoDqTxmmkOG0X69gdMwv%2BfEyQY6pgEApVyIxVMN1gYhapNp07AdM%2BEdPO4JKvodvoglPMMlSLLW4%2B9JWuDQpWkLmcFZiR%2Fj93YQgxK4gmXRC91yu8Be%2BcFApIPEJ%2FrSxvs8Pyv8IcQKwI%2BG6JgLMlAJzPHgsbTjfTXXWNMLNnAgRSZOKfSvsJTpfLCtQts55bsIDwn5dFC8uOwGVzUfIxd%2FU1kDTwOHEnwEx1jRgmMcL0BKMCKRG1VXIirS&X-Amz-Signature=301f805dc04d60ac86c5f37822b20940cf34798bf5dcb9e3b1a631b6d5c5af95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFIY3OVY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIHytheNW4FbFJR4EvXxOuIk%2Fw3M43ndhnekYoe0Iuy86AiA8HlCftc0T0vvalmsf9y1XWChlbpCcCu7EWNyuLtr6Wyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMUbAjYMLe80qxjyPKKtwDFrnoxtR6sIi07ysclmM62NpSdrm%2Bp6OgtGpuu78rpzKnWNzNoCoTtASnfYWf%2FuLKKgj6RmuAbdlJQxbgtSterdiWccW%2B6PwFmOu1WVvdowHyunIO2fg81FQJr4feFpmZDBfd90EwDL0AqoTriarugc4EWskEv90RMIv8NdS22S6vZeAxEVlWSMDgZZ%2BWPUhUZ%2BaGN0lVChIJ5uzczRCjC2jwKH3AJC%2BOXNO5PHaPcOJNpQ%2BI8qpH3HzM5jLo2qbiiJA1JO%2F2qLCLrjBIKLlrUpRMYSzEAPmosoO5mHa2feynhOwUxs39FhvMG8%2BZgyCMlRUqlDGaWnC3sbftuZCGPTIE6g5W%2BcjxfPo%2FhpcpxxvaoJxpRZDzMrI17C%2BIvtb9%2F3lpFRVRQEYVhuYD6IvC0olIbgkg4eYAqhE49j15RBozCE76Nzwy4yqNxhd0GNQBIT6p7BEe4IjK9bEzNeq0qtflpfA%2Bl2dqccEqUQJJ3ln1Namar5fba4NfzCS9AUSdoRR%2Flkwx72mePbCpWU3yoD9xvhpLX9ouOOCGS8MYK6iQqaR1%2F6ONv%2F3UkPYtBKWGO3tQS9Dumlao%2FVz2Cn5pXKRdSJ%2FaIRNOP0e7L9SnIVoDqTxmmkOG0X69gdMwv%2BfEyQY6pgEApVyIxVMN1gYhapNp07AdM%2BEdPO4JKvodvoglPMMlSLLW4%2B9JWuDQpWkLmcFZiR%2Fj93YQgxK4gmXRC91yu8Be%2BcFApIPEJ%2FrSxvs8Pyv8IcQKwI%2BG6JgLMlAJzPHgsbTjfTXXWNMLNnAgRSZOKfSvsJTpfLCtQts55bsIDwn5dFC8uOwGVzUfIxd%2FU1kDTwOHEnwEx1jRgmMcL0BKMCKRG1VXIirS&X-Amz-Signature=9f0397ab8f5e8451d07399646a758ccf34de9bd398a2ede254cc91acefbe97a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
