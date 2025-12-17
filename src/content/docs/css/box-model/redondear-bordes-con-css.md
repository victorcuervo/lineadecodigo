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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466325X43Q4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7qnG4MtLCzJ%2BpOYpLM4gC5%2FdR1j6dv%2B5%2BetUDkFXYbAIgflzRII2BQKXWL2PbzrFpfrLpuKinhUB7zeOVJl%2FtzqMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHyTRD9to98PjGlq5ircA%2BCecY2CFmdGsrGYU0jWFWKifbvu0Ddilhd7762Ex1a8g0WkAzuepwMcxTyvjPbZmiPU3zOcDUvllXaT0X0QvbU1Ur2Jh6hjHmgmGvjyMYNYrJYpHriyO44wGaQXDHby855fjivMMUlSkgvrUOpHm1IBcZaXSCwiDnj1gYkYLgh%2BoAc6RQWPfCid6ksAQ1lbGTVGdqyLB5K8lx1m87LKPlIzOxwLl%2Bu7r%2BrAMAq5kwpVDJEg8Xhe83ObnisGdufgbtYfCoiyZYWaKeG3hb1bx4QzRIyOAD9px5IZrYswL0HHCbH62cPfIKTz%2B%2FVehhQvCdp1U7z3sg9SEE70HutJU%2FGWE5y%2FlWN2m6bd4gD7cHNRrlPAqngUChxe9Jr67SGSgx7R0V5zSSWu9OkTgFLnpSD6uaqkk9cH3TzTM106ufvLOyR7xMcILMnWYMpoSiP08mBBvdnmt0OYWlSXqNxHSPm%2FwAEhyrhjl%2B2JoKAFzZUqMu7a4r4MT9HianBzlUe9CAivhXWypHmUZc6KV5zh8nFccGe4mHUFZgsBb5A7nxN6NtjSXivaq8fF1isR4GBVvzbYkwJb7A6Q7MAfCuaL7%2BUt0iMk6oYHrpZ%2FdDkSYQLavKmpd5zbAbxAH5ZzMMDhisoGOqUBPRHc9H9hjtOP906hgNpw12oPbNKgU0ZKrZGasMP8Cz%2B65LzaJ27UmBD1oufptlnchcDtQu3amRv%2F6J8aA7VjiewQFuzY4B8wxwXpCuRk%2BOk718uc0nu1q%2BvfY3UHsvCwYsVCL03yU0rRrOtKuo0XzQxmoK7du1Ij14yO88OrqEiC4hRUszW5hDQTPMqftcAGMjl4uUSRtf6ZjZwgcBPZIq1K89eG&X-Amz-Signature=44d7e2b4b8c0efef2bbb64a2010774f08cfec2c7ce95f4bc2ee2bc3eda47105e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466325X43Q4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7qnG4MtLCzJ%2BpOYpLM4gC5%2FdR1j6dv%2B5%2BetUDkFXYbAIgflzRII2BQKXWL2PbzrFpfrLpuKinhUB7zeOVJl%2FtzqMq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHyTRD9to98PjGlq5ircA%2BCecY2CFmdGsrGYU0jWFWKifbvu0Ddilhd7762Ex1a8g0WkAzuepwMcxTyvjPbZmiPU3zOcDUvllXaT0X0QvbU1Ur2Jh6hjHmgmGvjyMYNYrJYpHriyO44wGaQXDHby855fjivMMUlSkgvrUOpHm1IBcZaXSCwiDnj1gYkYLgh%2BoAc6RQWPfCid6ksAQ1lbGTVGdqyLB5K8lx1m87LKPlIzOxwLl%2Bu7r%2BrAMAq5kwpVDJEg8Xhe83ObnisGdufgbtYfCoiyZYWaKeG3hb1bx4QzRIyOAD9px5IZrYswL0HHCbH62cPfIKTz%2B%2FVehhQvCdp1U7z3sg9SEE70HutJU%2FGWE5y%2FlWN2m6bd4gD7cHNRrlPAqngUChxe9Jr67SGSgx7R0V5zSSWu9OkTgFLnpSD6uaqkk9cH3TzTM106ufvLOyR7xMcILMnWYMpoSiP08mBBvdnmt0OYWlSXqNxHSPm%2FwAEhyrhjl%2B2JoKAFzZUqMu7a4r4MT9HianBzlUe9CAivhXWypHmUZc6KV5zh8nFccGe4mHUFZgsBb5A7nxN6NtjSXivaq8fF1isR4GBVvzbYkwJb7A6Q7MAfCuaL7%2BUt0iMk6oYHrpZ%2FdDkSYQLavKmpd5zbAbxAH5ZzMMDhisoGOqUBPRHc9H9hjtOP906hgNpw12oPbNKgU0ZKrZGasMP8Cz%2B65LzaJ27UmBD1oufptlnchcDtQu3amRv%2F6J8aA7VjiewQFuzY4B8wxwXpCuRk%2BOk718uc0nu1q%2BvfY3UHsvCwYsVCL03yU0rRrOtKuo0XzQxmoK7du1Ij14yO88OrqEiC4hRUszW5hDQTPMqftcAGMjl4uUSRtf6ZjZwgcBPZIq1K89eG&X-Amz-Signature=1af07d31a223f43fdb7353b0b8f9aaed3c6454c8cffdc5884852db6abe3a0d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
