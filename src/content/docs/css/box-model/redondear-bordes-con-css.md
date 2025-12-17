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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3DB5WTE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMBwJKaMUBmf5YVMaznFHUjeHsXRfV6zMbZGcPVvtuNAiEA2qZE66JAQ6sEGTwM0T00UhQWmnZ8AsWdgG9trFRJCRkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJ4AwYQ9JnvGaTgLryrcAyEJ89rMYav2Ho6ZV3pK7oPyhDv07WpYq7f6%2Flphmf3onT5eIeYwVxRjjGYQLwAAL4PXWH%2FYo08vLFtphBxjSVIURZ9lURTwnYjj%2BWwaVxY3BqqMrV1gNJoGAvVRaJs2kla8vUMHQvPqUIPSKfgh4LaOF1moNxEFUFjfpUHQiEhpsKYhRJENXPpNz58F2Hfp1A57LRJlOA0ObDlNzg%2FrAEUij8skstLoxLQnt0nYsfJb94DudVibO3SRvCzc1vPlA8Ah9uKH4S8syqmVpKP100sJOQ7Z2E1KLAIM6oj9dQfEJET95tKAID1WYqDcknQ6pDH5Flp2yJrl58JBkw29SFu3WzZ4tiRR7uPpUhD8RoVC4KzKXtOe0Ot19A0jhpK7qySwwdx5cohbAopghG%2Bvt8THWXLworjvsABUSt%2FjZP5WGVuYt44%2Fl36cJDf3jBMQagzZ06DSBcvJxiaS0wqLkqqQ52KWAXymVgDIZ5iSGM7tumJ0gqo1iBOplrpeAy4f1Y7gFHidF2MniVM4lMVvEm7fuBb9vNSef2oUzYxmWH7m%2ByTG2dnyxlU%2Bnl9rq0CmCnbUvR1Y1ti2tGYs%2B8%2FdfBBWAWG8j%2FEB5FM%2FcnKNkSyiWFYvODVCUl7t7IMPMI3RicoGOqUBoMbqnwOja5HjAUrgoN9LN4SnQ4U3xIybCbYKTfxcfv6mBnuza6PiDmytPJBm25qrRGF%2FaRE8kTrlX6%2FYY%2BMG8b2qv9Ai0WGGMLrOOYP4m2L%2Bhw7Ya95cfEr4H4Q0dmrdqmlk0KBMzzjF6cg%2FAGyZ1T1v7PnIgw6FwXTuMqCpyteIfVtjHqGm786PsqGCfrJVxRWE3EhZbErFDRi2gnBpWMHOh1rD&X-Amz-Signature=a971b22ed971764ee8d8e49fd4820a9b17df296999bcc3ad35728298d814d388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3DB5WTE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMBwJKaMUBmf5YVMaznFHUjeHsXRfV6zMbZGcPVvtuNAiEA2qZE66JAQ6sEGTwM0T00UhQWmnZ8AsWdgG9trFRJCRkq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJ4AwYQ9JnvGaTgLryrcAyEJ89rMYav2Ho6ZV3pK7oPyhDv07WpYq7f6%2Flphmf3onT5eIeYwVxRjjGYQLwAAL4PXWH%2FYo08vLFtphBxjSVIURZ9lURTwnYjj%2BWwaVxY3BqqMrV1gNJoGAvVRaJs2kla8vUMHQvPqUIPSKfgh4LaOF1moNxEFUFjfpUHQiEhpsKYhRJENXPpNz58F2Hfp1A57LRJlOA0ObDlNzg%2FrAEUij8skstLoxLQnt0nYsfJb94DudVibO3SRvCzc1vPlA8Ah9uKH4S8syqmVpKP100sJOQ7Z2E1KLAIM6oj9dQfEJET95tKAID1WYqDcknQ6pDH5Flp2yJrl58JBkw29SFu3WzZ4tiRR7uPpUhD8RoVC4KzKXtOe0Ot19A0jhpK7qySwwdx5cohbAopghG%2Bvt8THWXLworjvsABUSt%2FjZP5WGVuYt44%2Fl36cJDf3jBMQagzZ06DSBcvJxiaS0wqLkqqQ52KWAXymVgDIZ5iSGM7tumJ0gqo1iBOplrpeAy4f1Y7gFHidF2MniVM4lMVvEm7fuBb9vNSef2oUzYxmWH7m%2ByTG2dnyxlU%2Bnl9rq0CmCnbUvR1Y1ti2tGYs%2B8%2FdfBBWAWG8j%2FEB5FM%2FcnKNkSyiWFYvODVCUl7t7IMPMI3RicoGOqUBoMbqnwOja5HjAUrgoN9LN4SnQ4U3xIybCbYKTfxcfv6mBnuza6PiDmytPJBm25qrRGF%2FaRE8kTrlX6%2FYY%2BMG8b2qv9Ai0WGGMLrOOYP4m2L%2Bhw7Ya95cfEr4H4Q0dmrdqmlk0KBMzzjF6cg%2FAGyZ1T1v7PnIgw6FwXTuMqCpyteIfVtjHqGm786PsqGCfrJVxRWE3EhZbErFDRi2gnBpWMHOh1rD&X-Amz-Signature=0e9cf57255a87bd1b8eecc6e59529244be42e06be009d7ba6dce30c1d812651f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
