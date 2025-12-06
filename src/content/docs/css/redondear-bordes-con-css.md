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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3TIFRJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeHDLVEje40lM6Vnf61a8Sr3i%2BtqXg3FmsYmNHYiHWMAiEAletNH6PkNcYwn1P%2BVNH2HMSIz01FSIKumEj7EyZnB9Qq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN8atyNn5OQYlk8w6yrcA5t6KWxdbKRwXEe9K%2BroNzbLS%2FX9BjCMJd%2FHV9eu0VrUB%2FBeVIt0ZhGiPM8aMXLYAGs1rPmNAMhLtr%2ByNM4amLP5GbENnG3hlCPyWluwM4F1DJHppYqWxEelQJuemvhrA4mbAU8JTg3HfK9d%2FVSJXojyf%2FLijttBYko8%2FtuNGjrZMqJtzSMpBw1a9rNoK0L9bqOgU%2B3YGPnGGxSmYbg6BVCARwh2%2FVX%2F7UKdU1nbBUb9zAdeBIhRvvdhN6Y6R%2FHT0FQbGDDiKNfaI8o6WfnNKSjtGsUEQbT%2FXiWea9D5AkjoQ3Nk34%2Bi7kCDpGROFvwgqKf%2Fyekqe8E3RMjriTH%2B9vYFnwk%2Bhgl9ZLJQTtoJ0TlJbhNtu94t4yD8upf%2FQi8HBWfr9Uisa2YkjoGu0eRnH6c5hkRbr0xgQ5C29d07rOEwm05ggPHQsl88qxnODzsOHFGOgL5fT0WTOtqn2yZHcWnDhtE1%2BwO4KNJ23KdZb7A1JNqJrjFlsfqaIkGUNLmPl4UreWHYbvxvT1Z2Tq63W489Za9LewRXh3tv2ZWp2%2B7Mdh7uuu9WWRsHOcI6jX8MJzrcUAd3UyQJiHV4qLOQk8k0B5cOkGjcEDZPlzaubHy7L1z41fFks4srxxJUMMCnzskGOqUBfPGIuvK89A4ok2QJSuOY%2BOPfa0GOP1r9goapHsLlEdwJ%2B2ycz%2BrcIqH%2F8QFMDgaHqmFuxYY1mI6i0aynowodxIZK6A5e%2Fz3l%2Fn%2B3iqICeHWOqpcNVpoQNvf4T%2FE5jygt%2Fl44LaBFeB3Mou6UjvEolj0pMIDGHXS7y4UeqGb6GtHSIK9MOc6nqQi1be7xylg0b70orR9GFQ1HWi50odAjHT%2FTxAF8&X-Amz-Signature=9a7887c62e73981aa3cfe02d2ee375f69eaaa6ad92f3f208f27734f12716fb45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ST3TIFRJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDeHDLVEje40lM6Vnf61a8Sr3i%2BtqXg3FmsYmNHYiHWMAiEAletNH6PkNcYwn1P%2BVNH2HMSIz01FSIKumEj7EyZnB9Qq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDN8atyNn5OQYlk8w6yrcA5t6KWxdbKRwXEe9K%2BroNzbLS%2FX9BjCMJd%2FHV9eu0VrUB%2FBeVIt0ZhGiPM8aMXLYAGs1rPmNAMhLtr%2ByNM4amLP5GbENnG3hlCPyWluwM4F1DJHppYqWxEelQJuemvhrA4mbAU8JTg3HfK9d%2FVSJXojyf%2FLijttBYko8%2FtuNGjrZMqJtzSMpBw1a9rNoK0L9bqOgU%2B3YGPnGGxSmYbg6BVCARwh2%2FVX%2F7UKdU1nbBUb9zAdeBIhRvvdhN6Y6R%2FHT0FQbGDDiKNfaI8o6WfnNKSjtGsUEQbT%2FXiWea9D5AkjoQ3Nk34%2Bi7kCDpGROFvwgqKf%2Fyekqe8E3RMjriTH%2B9vYFnwk%2Bhgl9ZLJQTtoJ0TlJbhNtu94t4yD8upf%2FQi8HBWfr9Uisa2YkjoGu0eRnH6c5hkRbr0xgQ5C29d07rOEwm05ggPHQsl88qxnODzsOHFGOgL5fT0WTOtqn2yZHcWnDhtE1%2BwO4KNJ23KdZb7A1JNqJrjFlsfqaIkGUNLmPl4UreWHYbvxvT1Z2Tq63W489Za9LewRXh3tv2ZWp2%2B7Mdh7uuu9WWRsHOcI6jX8MJzrcUAd3UyQJiHV4qLOQk8k0B5cOkGjcEDZPlzaubHy7L1z41fFks4srxxJUMMCnzskGOqUBfPGIuvK89A4ok2QJSuOY%2BOPfa0GOP1r9goapHsLlEdwJ%2B2ycz%2BrcIqH%2F8QFMDgaHqmFuxYY1mI6i0aynowodxIZK6A5e%2Fz3l%2Fn%2B3iqICeHWOqpcNVpoQNvf4T%2FE5jygt%2Fl44LaBFeB3Mou6UjvEolj0pMIDGHXS7y4UeqGb6GtHSIK9MOc6nqQi1be7xylg0b70orR9GFQ1HWi50odAjHT%2FTxAF8&X-Amz-Signature=1f95ef1ef6775f372035eed08463d08aeca79e3fd1ed066c8c05bfc5a1d1cf70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
