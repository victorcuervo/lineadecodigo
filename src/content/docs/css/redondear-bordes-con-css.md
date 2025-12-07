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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUATVC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcMXILFEMZMVCtf3fsP2CCPpwWa4kfO5hJifvi6SinyAiEArq9W6vh30KOWyZZF88YRAQEqe3nlenQKZoQd7zqvApkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxytZiOVD594BDSsircA8qJU983Ffy8k3A5cGhP%2F3vz7OLr9FyYC7105b%2BLEiL4DqEz3Wj4bDlxSc2cNgXyO4FZZ6dLMuSKhc%2B5mDljspB8C1JsUNQsXRsdHLpaWfkmAsxhcsduAQg15R7BNgOzftG51ZQ39R0GpoxlXGp4CjcWlbf2PUDhIriQBbur%2Fgm9N5X5GK0%2BNRxXfLX9PCjQysD9421kmbCgr4e3v91puKW%2F4guXzaKJqJGY%2BPBVyICL4qo5OpnRtTB7D6VO2cfgJhnnXGpLojb6K4ZDMwTWIBoMJADuBdly4ef2AHtLb17vz54Kc2PCJipyPuiWidqITYZHEuD%2FKS9oUBP6mcF7T3kS7EPPCYKZwJW7%2FzVqTz%2FjxghXkDTRB4J%2B0Yu1Kqw%2FzBGzE3A0IIDpt5j7kgUb0W7A7eR8ositnPdABJRei9VSDe0DExaN43RcDcgBvOkTTAA35E3tRP%2FMfVDY1IqGNQszOv%2BKYMF0Y0LdIe4qppUQUG7yQsjSET69vpZwIlOeNcHrpkdzcnHZ5hP0XT890gzdDtXnj0p6PYlyWjlnZ%2FmBf7KZrUVa2bkB08oUwGRl%2BckjGj1n5aYSfXHJbSWcjOrjO6XOJZ4CZUaTffJ%2B%2FT%2B8GGz2EVWsvpCDKiN2MPac1MkGOqUB5ZHz%2Btj7aS2si1tfJ88%2FPakHU8AOwBpXDE5hHv%2F1rv8MXA%2BoPm7k40uX%2BQh4g7%2Bp32pjINCGEx4nTJnxgbMmyZYKGxptywf7qpNQGbS8%2B%2BP22UWxRf9zCDSH91Ptw4zxtwRySJpa5PtnevjQ5GHDkOH3SQfTzKrFKIiyExIEBvUc6ScK9KxDiE6yfLFISUEHQWy2XyDBnvayUQA9rqRSrM79zJNu&X-Amz-Signature=1c2be8966e50bb1d6fd4247dc3146f57feaa9a0d20061ed26c63e495aa83793b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XGUATVC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEcMXILFEMZMVCtf3fsP2CCPpwWa4kfO5hJifvi6SinyAiEArq9W6vh30KOWyZZF88YRAQEqe3nlenQKZoQd7zqvApkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxytZiOVD594BDSsircA8qJU983Ffy8k3A5cGhP%2F3vz7OLr9FyYC7105b%2BLEiL4DqEz3Wj4bDlxSc2cNgXyO4FZZ6dLMuSKhc%2B5mDljspB8C1JsUNQsXRsdHLpaWfkmAsxhcsduAQg15R7BNgOzftG51ZQ39R0GpoxlXGp4CjcWlbf2PUDhIriQBbur%2Fgm9N5X5GK0%2BNRxXfLX9PCjQysD9421kmbCgr4e3v91puKW%2F4guXzaKJqJGY%2BPBVyICL4qo5OpnRtTB7D6VO2cfgJhnnXGpLojb6K4ZDMwTWIBoMJADuBdly4ef2AHtLb17vz54Kc2PCJipyPuiWidqITYZHEuD%2FKS9oUBP6mcF7T3kS7EPPCYKZwJW7%2FzVqTz%2FjxghXkDTRB4J%2B0Yu1Kqw%2FzBGzE3A0IIDpt5j7kgUb0W7A7eR8ositnPdABJRei9VSDe0DExaN43RcDcgBvOkTTAA35E3tRP%2FMfVDY1IqGNQszOv%2BKYMF0Y0LdIe4qppUQUG7yQsjSET69vpZwIlOeNcHrpkdzcnHZ5hP0XT890gzdDtXnj0p6PYlyWjlnZ%2FmBf7KZrUVa2bkB08oUwGRl%2BckjGj1n5aYSfXHJbSWcjOrjO6XOJZ4CZUaTffJ%2B%2FT%2B8GGz2EVWsvpCDKiN2MPac1MkGOqUB5ZHz%2Btj7aS2si1tfJ88%2FPakHU8AOwBpXDE5hHv%2F1rv8MXA%2BoPm7k40uX%2BQh4g7%2Bp32pjINCGEx4nTJnxgbMmyZYKGxptywf7qpNQGbS8%2B%2BP22UWxRf9zCDSH91Ptw4zxtwRySJpa5PtnevjQ5GHDkOH3SQfTzKrFKIiyExIEBvUc6ScK9KxDiE6yfLFISUEHQWy2XyDBnvayUQA9rqRSrM79zJNu&X-Amz-Signature=9f8dd09946286413721c280021b144e8f10ee5df343220b5893af00db257c13e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
