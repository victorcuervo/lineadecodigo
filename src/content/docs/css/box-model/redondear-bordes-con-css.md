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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSLS4WF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDatCnukTdt4RRwZhR3LxOh2xMRhvA4yQlOiuR8K30IwIgNp7UyfF2D%2Bb7br0QTN5PWrOFvGb8xnpoDsWZkKE0ih8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb1lueBQ3Fp4KsXoircA1KYDqMfR0VPltaJ6KmHxeFqGL%2BnhaX7LW7ZuCyu%2BCNhd0MdjHm0U0z8qBaqOK8nSa2eeSmvmYS7%2BPZYcnoyrUmZgGChRFZt0EWlWGv%2BO3U4og5EN0i0%2F8pzgER0P5dQpeDv4oM7WAu1HJfwTul%2FVsg0zLogrI%2BtAlHUDD6snoUu%2BJXdX0CIabp2fDGLPXzunmpF7MK415QvF5JUKHPE0iKLXExdgN4A7fdbBzCNjMtvbJO%2BQzZEdBOtdqsmbv1kcJzDP1veuKm35x%2BMXWyp306FCButhR3SKJGZU9MLuE%2Bwo7b80Skdp5Az9nH6Wwl8tpRuDVfZIaMZ5QfCsKHbID21Qf3mEDzsa47XyGgE7IOHJvDwrdmJtuk8V1z0TqbZF91PcQaOgv1O0xB6zHrQsPlWyGAcLJb5NIVt3I4QZxkJZSd1ieQDtAEe%2BdTAQL%2FnI4QPn5mCUWf4Fh7pJ0qiThBe6yklHUhnprJsRhkG7atpQlqIZgAHhZJTNz36TetqsjuTcVWfpwJTD%2Bi0V4ge8bwqaRK%2FPAb%2BeXotS0d9XVqTun87LXcaiLeckqCasq0TBIfzBlEb78PJUZeB6AJowthiPWK5VIbbA1t%2B%2FH7QCYAGVmmbydNhZ%2B3prNI7MMOujMoGOqUB9U238rZ4fvHt5bwbxTQiAE0Z21wnKrG0JIm%2Fi0MbgcAYayqulY1sgedi1%2BJFeePxtGOuFRCkIWED8RBjVlbU1BTUASu0DZSft2qixb1wdB6zIM9wR7XWHYdRH6Jerr7BOWAg1IhiNbtb6bW2fZU1MSJJS5EYaLvjosoj7Lb1jJ9I2%2BYknP%2B5LtmInBkDA1ZGMDNcFHvVjnRb9FYxpLljtubdRqct&X-Amz-Signature=0ea111a6fa050eb0029413200e9b4254a00a2773ca6fb4e82cfaba1b9b792c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSSLS4WF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDatCnukTdt4RRwZhR3LxOh2xMRhvA4yQlOiuR8K30IwIgNp7UyfF2D%2Bb7br0QTN5PWrOFvGb8xnpoDsWZkKE0ih8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNb1lueBQ3Fp4KsXoircA1KYDqMfR0VPltaJ6KmHxeFqGL%2BnhaX7LW7ZuCyu%2BCNhd0MdjHm0U0z8qBaqOK8nSa2eeSmvmYS7%2BPZYcnoyrUmZgGChRFZt0EWlWGv%2BO3U4og5EN0i0%2F8pzgER0P5dQpeDv4oM7WAu1HJfwTul%2FVsg0zLogrI%2BtAlHUDD6snoUu%2BJXdX0CIabp2fDGLPXzunmpF7MK415QvF5JUKHPE0iKLXExdgN4A7fdbBzCNjMtvbJO%2BQzZEdBOtdqsmbv1kcJzDP1veuKm35x%2BMXWyp306FCButhR3SKJGZU9MLuE%2Bwo7b80Skdp5Az9nH6Wwl8tpRuDVfZIaMZ5QfCsKHbID21Qf3mEDzsa47XyGgE7IOHJvDwrdmJtuk8V1z0TqbZF91PcQaOgv1O0xB6zHrQsPlWyGAcLJb5NIVt3I4QZxkJZSd1ieQDtAEe%2BdTAQL%2FnI4QPn5mCUWf4Fh7pJ0qiThBe6yklHUhnprJsRhkG7atpQlqIZgAHhZJTNz36TetqsjuTcVWfpwJTD%2Bi0V4ge8bwqaRK%2FPAb%2BeXotS0d9XVqTun87LXcaiLeckqCasq0TBIfzBlEb78PJUZeB6AJowthiPWK5VIbbA1t%2B%2FH7QCYAGVmmbydNhZ%2B3prNI7MMOujMoGOqUB9U238rZ4fvHt5bwbxTQiAE0Z21wnKrG0JIm%2Fi0MbgcAYayqulY1sgedi1%2BJFeePxtGOuFRCkIWED8RBjVlbU1BTUASu0DZSft2qixb1wdB6zIM9wR7XWHYdRH6Jerr7BOWAg1IhiNbtb6bW2fZU1MSJJS5EYaLvjosoj7Lb1jJ9I2%2BYknP%2B5LtmInBkDA1ZGMDNcFHvVjnRb9FYxpLljtubdRqct&X-Amz-Signature=34b52f4d3a3d45a508571a15f560b9d04f5e3db933a30b6d740e94fc2b51a674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
