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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSECXJZU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnWCc3fq6YaONDS9LSFXd5TKvWE0K1S%2FiEVj9NFAy%2FIAiEAuvVGsllhwebu%2BZ61couQmSG1rgoM9jOmR1Alfewy0OgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhb5CXkPYlzB48i%2FyrcAy42Y%2Bw9AeB2WFXnI7XzeFRDxszgq1bLLmsGaWolSyNZcLXNO7UkJN1h0yUN0MtLdDTatHy%2BviSpXuc3YEDiexw3jJfTlPWVMiwO9WbFxotI6bnEB9tioKrOA6g1BOSRFG1pVMHvhJNtlA3BadzuabD48T%2FgqHgajmX1csWE1FEx5kovGQ1NCs%2FV4jM%2Fo26npDA5uUv3LqMVqudz7GRveRjBp8zFj4mXRrbEyaXzwwCP6RLmuBzkcHw0qU8DGub8qubtZpRmTYNVBzb1vj%2BFjPUOQoVRH1tDjIIEvHff2BXSjV8nVnz7uGfDywXEEGEiFX4CdMm268HXIKn4KuZD3qUMwwc4YdTn7nhKke0%2FWSlefd5PoFGvBnX7meIqn163IC9EkAbOuyTGCpyYufatQZQHG3c%2FP1ZPPRulAPy4QhBFjkTmu%2FnTgU3n5arGrgX%2FvqW0V4E90dMC9unPtAMWQHesW2Xf6vM%2FpKd4q7akFpAnOoFjAeUtpA3FVi8LpCvizkJd%2B9tN%2BYoTP5hUFRLNB9wUxpFoffHh%2FafqEUwqQcCxl4%2BHDMwQjlBD9ITcSmhg%2FZqF2IOlOSCZiNPbfHNHIEaCIa6BhZf3cMwdAmIUIysj7OP9WnqHvB%2BOa3O7MI3%2B0skGOqUBoRXDuLLCGkB2%2B29S6dLSDOsLLLSj1gtNMj3XnMHScxBfNMj3OsdFaKcXEUBavigGk0zBQLhjY00vomrS%2BNg%2FZlmz7Qk0IOrfvQUsiMUoVnDY7HXwGYfADYieVxr6SkvuStnD6gYSrmw6ra7O87yKjuT0NpBDDGyDE%2Bj%2FZwmmFtUabgbTnDVn6kSLWQr33d7%2B%2FWmXybA7ZpwLJaCzMovw4Ih42yNs&X-Amz-Signature=5963ab34ac145dfaf5d0b27dca2dab43fe0cdb50bf25818eeeadea3c4803ffff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSECXJZU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnWCc3fq6YaONDS9LSFXd5TKvWE0K1S%2FiEVj9NFAy%2FIAiEAuvVGsllhwebu%2BZ61couQmSG1rgoM9jOmR1Alfewy0OgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhb5CXkPYlzB48i%2FyrcAy42Y%2Bw9AeB2WFXnI7XzeFRDxszgq1bLLmsGaWolSyNZcLXNO7UkJN1h0yUN0MtLdDTatHy%2BviSpXuc3YEDiexw3jJfTlPWVMiwO9WbFxotI6bnEB9tioKrOA6g1BOSRFG1pVMHvhJNtlA3BadzuabD48T%2FgqHgajmX1csWE1FEx5kovGQ1NCs%2FV4jM%2Fo26npDA5uUv3LqMVqudz7GRveRjBp8zFj4mXRrbEyaXzwwCP6RLmuBzkcHw0qU8DGub8qubtZpRmTYNVBzb1vj%2BFjPUOQoVRH1tDjIIEvHff2BXSjV8nVnz7uGfDywXEEGEiFX4CdMm268HXIKn4KuZD3qUMwwc4YdTn7nhKke0%2FWSlefd5PoFGvBnX7meIqn163IC9EkAbOuyTGCpyYufatQZQHG3c%2FP1ZPPRulAPy4QhBFjkTmu%2FnTgU3n5arGrgX%2FvqW0V4E90dMC9unPtAMWQHesW2Xf6vM%2FpKd4q7akFpAnOoFjAeUtpA3FVi8LpCvizkJd%2B9tN%2BYoTP5hUFRLNB9wUxpFoffHh%2FafqEUwqQcCxl4%2BHDMwQjlBD9ITcSmhg%2FZqF2IOlOSCZiNPbfHNHIEaCIa6BhZf3cMwdAmIUIysj7OP9WnqHvB%2BOa3O7MI3%2B0skGOqUBoRXDuLLCGkB2%2B29S6dLSDOsLLLSj1gtNMj3XnMHScxBfNMj3OsdFaKcXEUBavigGk0zBQLhjY00vomrS%2BNg%2FZlmz7Qk0IOrfvQUsiMUoVnDY7HXwGYfADYieVxr6SkvuStnD6gYSrmw6ra7O87yKjuT0NpBDDGyDE%2Bj%2FZwmmFtUabgbTnDVn6kSLWQr33d7%2B%2FWmXybA7ZpwLJaCzMovw4Ih42yNs&X-Amz-Signature=f732f3cdd94dc772254b8d1d618f5781d88d6da8c0809bd18b96172aa4946bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
