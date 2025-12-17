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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5CGMNAJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6duu0UW7Z9fBuMhtig56bpoXybc1Hkc1Wcl46XKyUEAIgCmXcTkGj%2F7K7repfR6ky8A63Mrqdw2USokaXjqBuVDkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOD5zmmM53osr3qe8yrcAxp%2F0pysyFDHx%2Fpq152ysWTsGxzi%2FzrtG1F6RuS75oSHNkTgHKlUGI4qJaC264p0nJz5cJ1d1joOuz0sbYS%2B%2FSzgYXGXrIOmiiPVFVQJx2rSixU2BH7EMlxdBcK5PzHWsi8DBthYJ7kSyB8LOsrGqUZF9yLqBgxjwXJsAzJ%2B0rwdrlHyW053fSmzIymNR9dyczs0J8hd%2F317FJT68epqR5rLmzQ72zctLUbXmK7gheyslOabos%2F4PhrdDUncDivYV%2FUL7d9WIzpY0XwuJtqnX9GcTMYspIwGDnDrTaSzX%2F7gfWMD9FNtC4h89nassMSCbF15SgqoxJTMGPZQHTm5RxW2894L4zwFCVj%2FfQP21eZQOdxXi1MEIzVuNgtbZO2xHUkoXjtLGBZPrjWDky2FXQEkMEjl1ha6hUJFDn%2FuZIaPnCZfzj0c5k4Ehpn0tn2Yrd%2BcSe72ekX%2Fnq%2F%2F9On1ch05yDR33FiJP5GDmrQdST%2FobDGKfEUo0EItw26BoBKSaUsWPPXFPUq0vN8nB13jJ%2BW71kD7kQL7e%2Bjj7nY4n0P31r3loh6m1ttI5GxNWMsaZ%2FMNojfOWD7e3OKmg8Cw6jBTYFBr6kyjqh%2FP45dLopgsQ2alTjNnPf%2FLrxPZMOOdicoGOqUBhUX7tgHeKbPeqZrLvOJX5JbGfwqRJBbdHlijgHLoDEOu3iAbbJYDu5M9YyP4kB51OZldcqnz41yICXZABACVpYjOtx2DzQ3wAPsDgk77Qhi1ppolrdzPUTzjhiFFqYY2o5VxSXZnWnJErvX9mH4gUNUeR4HF5y7P702JRDPpPCgGgVaasnluWlCxY7lB0X4Bq3UKaUF8drx8uI4m2INJkV2sIDWE&X-Amz-Signature=3371bb19674a15a5796a8848f96d1a40afb9b18244d2e71d5b8a42941acc8e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5CGMNAJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6duu0UW7Z9fBuMhtig56bpoXybc1Hkc1Wcl46XKyUEAIgCmXcTkGj%2F7K7repfR6ky8A63Mrqdw2USokaXjqBuVDkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDOD5zmmM53osr3qe8yrcAxp%2F0pysyFDHx%2Fpq152ysWTsGxzi%2FzrtG1F6RuS75oSHNkTgHKlUGI4qJaC264p0nJz5cJ1d1joOuz0sbYS%2B%2FSzgYXGXrIOmiiPVFVQJx2rSixU2BH7EMlxdBcK5PzHWsi8DBthYJ7kSyB8LOsrGqUZF9yLqBgxjwXJsAzJ%2B0rwdrlHyW053fSmzIymNR9dyczs0J8hd%2F317FJT68epqR5rLmzQ72zctLUbXmK7gheyslOabos%2F4PhrdDUncDivYV%2FUL7d9WIzpY0XwuJtqnX9GcTMYspIwGDnDrTaSzX%2F7gfWMD9FNtC4h89nassMSCbF15SgqoxJTMGPZQHTm5RxW2894L4zwFCVj%2FfQP21eZQOdxXi1MEIzVuNgtbZO2xHUkoXjtLGBZPrjWDky2FXQEkMEjl1ha6hUJFDn%2FuZIaPnCZfzj0c5k4Ehpn0tn2Yrd%2BcSe72ekX%2Fnq%2F%2F9On1ch05yDR33FiJP5GDmrQdST%2FobDGKfEUo0EItw26BoBKSaUsWPPXFPUq0vN8nB13jJ%2BW71kD7kQL7e%2Bjj7nY4n0P31r3loh6m1ttI5GxNWMsaZ%2FMNojfOWD7e3OKmg8Cw6jBTYFBr6kyjqh%2FP45dLopgsQ2alTjNnPf%2FLrxPZMOOdicoGOqUBhUX7tgHeKbPeqZrLvOJX5JbGfwqRJBbdHlijgHLoDEOu3iAbbJYDu5M9YyP4kB51OZldcqnz41yICXZABACVpYjOtx2DzQ3wAPsDgk77Qhi1ppolrdzPUTzjhiFFqYY2o5VxSXZnWnJErvX9mH4gUNUeR4HF5y7P702JRDPpPCgGgVaasnluWlCxY7lB0X4Bq3UKaUF8drx8uI4m2INJkV2sIDWE&X-Amz-Signature=0ed42607bf0c59568468c419609312c090ab25558207f0c2ee4a45ff2943be65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
