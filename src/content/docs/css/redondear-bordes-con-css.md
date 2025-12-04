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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZL3QUOY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJvx%2FEARPZToXYd19a6%2Fda2AQn4g%2BzLffNt5iDf3DbHAiEA0c0ao1j0RjtqtKW7CpLrj6zQQ5xWuDxhKZ0aLeIUF%2FEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIMSvNZNwprW%2BHVPXyrcA4YSO7BdTrNN65kL20RQrFB3YuKZ65j6KGQuqIY8ZvJL9ATE4oo0w00gFJlOqn1M%2FamhqQVPVVeV6id%2Ff8DG3xYHoU%2FXBiJHfSMvxpvtqippdfkoapaIOZvdrcmtLyUZkwi8X%2BzUYQwzjVlcL9FQCOetDqm83ek%2B3cM4y6ZxcVJgCnTczfpnUkNDR8BpTWCHQM22hKZC3JJP9F9Z1peVOI4k%2FRzrrgQFVKaqmsP0sZ3NXeJLNl6atclrlnuBbAu%2F%2F78ct0WO665huP8Z6adK3jj7bmwD9%2B3Sad89LbBHDIZ9gz1d5n7XzVOztWMl5%2BzY7xz9zXRYNLHWmK5CcX%2Bt4MlARw%2BRXV1DoI0CA3xMsjRw3gfaQ%2FqIC46xhA5V9QtvK6yYbmUb9ooPqFK4KXkzxra6DdrP8vx4XMeU0OvpSSRM2TiFR37y8k3X7JgsRjadeATqNbOlgr60sD%2F6DvwE0NYZpswfr0lvXn4nDurd1KyLyHs%2FQU1DDnNnbZNZvWm%2F423KrgbGoPr%2FV6VgA7Mz3z0GKlCZpbrpg32OHpn15E1ze%2BNQwM2o9ZCkfVG1kACIGP%2BQmQPTVxiT3uNes6bROh9QoT87E6oib5N%2FHOotRpFGvbfpDjpg7o9I5zZSMNnbxskGOqUBPy423aH7e242QSwMu8YcgGOYSlNwpjDHKicYd30FPETPWkn59o24jz1S9SgxBw6KTnvkzSxHf7IprV9LFwe4Y%2FupmgwbzPWbS7wvpwxIJw%2BCIMo0HHEO20NEwuokNrKP30yrLVQcD1Z5Rad2y%2F8T7CL4xQNLY2xIsnHjhqABeJkzBCSfBe2gDLrcHQ3I4voV%2BPrhGy22QhkF9hMOTO24jDJPY0Bg&X-Amz-Signature=ec9e3abcd5479e4f33bb2c92dbbbb4885ab00bc5f8d21fb2af64729ccbcfb2b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZL3QUOY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJvx%2FEARPZToXYd19a6%2Fda2AQn4g%2BzLffNt5iDf3DbHAiEA0c0ao1j0RjtqtKW7CpLrj6zQQ5xWuDxhKZ0aLeIUF%2FEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDIMSvNZNwprW%2BHVPXyrcA4YSO7BdTrNN65kL20RQrFB3YuKZ65j6KGQuqIY8ZvJL9ATE4oo0w00gFJlOqn1M%2FamhqQVPVVeV6id%2Ff8DG3xYHoU%2FXBiJHfSMvxpvtqippdfkoapaIOZvdrcmtLyUZkwi8X%2BzUYQwzjVlcL9FQCOetDqm83ek%2B3cM4y6ZxcVJgCnTczfpnUkNDR8BpTWCHQM22hKZC3JJP9F9Z1peVOI4k%2FRzrrgQFVKaqmsP0sZ3NXeJLNl6atclrlnuBbAu%2F%2F78ct0WO665huP8Z6adK3jj7bmwD9%2B3Sad89LbBHDIZ9gz1d5n7XzVOztWMl5%2BzY7xz9zXRYNLHWmK5CcX%2Bt4MlARw%2BRXV1DoI0CA3xMsjRw3gfaQ%2FqIC46xhA5V9QtvK6yYbmUb9ooPqFK4KXkzxra6DdrP8vx4XMeU0OvpSSRM2TiFR37y8k3X7JgsRjadeATqNbOlgr60sD%2F6DvwE0NYZpswfr0lvXn4nDurd1KyLyHs%2FQU1DDnNnbZNZvWm%2F423KrgbGoPr%2FV6VgA7Mz3z0GKlCZpbrpg32OHpn15E1ze%2BNQwM2o9ZCkfVG1kACIGP%2BQmQPTVxiT3uNes6bROh9QoT87E6oib5N%2FHOotRpFGvbfpDjpg7o9I5zZSMNnbxskGOqUBPy423aH7e242QSwMu8YcgGOYSlNwpjDHKicYd30FPETPWkn59o24jz1S9SgxBw6KTnvkzSxHf7IprV9LFwe4Y%2FupmgwbzPWbS7wvpwxIJw%2BCIMo0HHEO20NEwuokNrKP30yrLVQcD1Z5Rad2y%2F8T7CL4xQNLY2xIsnHjhqABeJkzBCSfBe2gDLrcHQ3I4voV%2BPrhGy22QhkF9hMOTO24jDJPY0Bg&X-Amz-Signature=b3ac8051d060e1a6bf7d3f80455f62d02a59b552b860e9e32b7cf312f28ed8ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
