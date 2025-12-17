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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCPJCJVH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIkj%2BqnQ8t3wU9EkmZuZ9KKWlk6pyA3f7k7c%2FY8GM13AiA7cqQoeHidZkI10d2KMyRWSYnAX5hIYNnn22YAIH9w6Sr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM9YUq6eVP6zVCbWgyKtwDgI7T0EPxBEurtneWXuMOx6DfjNDnofR7PCyyXH5ZUbiGSAxnDopQllNNEhtNtcMP30Ic4J10CWzQZld4RNeJAegEcib1JF4Jimik7Wq%2BWVBMI04GQg2ltD4GGKWLyFX60R9ODy0JvNKpEGGHmRzusLkhE8Qip5hpVxX4EjZ234wfgQxqVtJuDwHTK7H7PeDWhFqP8ZDOBbOHubzPkwUrGs5p4%2FrgxwRhh4MSChl0SCU7CGDwqqnYnmetbfP%2Bkdz1YeJ97Ugfajx1WWs9ZcyjqE65w0yMom4ETPyLXKlxGkQrkZ4LzYR733Fi6E2wf%2BGnaUNf87wpgGIylRAb6SU42YWLkPgAHfRJJEZHo35rKwSsZAAbDerwP6NNuyXgaPn4YV2hFv4lkc5lcJqvc08avFWToHQT0HI6%2BYH%2BtPCRZ8CqCY9IdPUb5qu22fqcvDUyTLiK5CiNc3iUU3Rzmk76MUk6ei5%2B5Wd2QyMdjNmFpWa%2BbKzdTUte36NDhNjjgiFh0o3KC0r8l8aGUUYK3HCqlH%2Br621Euoz0syweB6zq1t9mClDPIaYL3buPIVSRNw2F7rCiuE6pJwytLuZtBy522eq95YFBC2YaEpy0o5qBIwxV5u3%2BIDLrwFqfDKIw0aqKygY6pgEv56eYrfdZ62SkDaagOu8zDEAZ1wU5TheuiUNjOMFcB9UHPYVMl1EAl%2BCrTg3NQToMqT9WachXcHmyr4IL7%2BoJt42DwXKt7Ey48MrOhmmoM2tEbRj2OAm4ehOw2jenAApIIkGCha3JSkOlqomt%2BPSUJmBNGnrVRH%2FyW4cHXAsjTKcNaJOdlZQy%2FixJWy3CQ8yzMzaIgl3y9ERgckIkgEr4jami8%2Biv&X-Amz-Signature=51d438f2ef549ae1656e4b06bee5b8bc645779201f953ee965961422d632ae62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCPJCJVH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIkj%2BqnQ8t3wU9EkmZuZ9KKWlk6pyA3f7k7c%2FY8GM13AiA7cqQoeHidZkI10d2KMyRWSYnAX5hIYNnn22YAIH9w6Sr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM9YUq6eVP6zVCbWgyKtwDgI7T0EPxBEurtneWXuMOx6DfjNDnofR7PCyyXH5ZUbiGSAxnDopQllNNEhtNtcMP30Ic4J10CWzQZld4RNeJAegEcib1JF4Jimik7Wq%2BWVBMI04GQg2ltD4GGKWLyFX60R9ODy0JvNKpEGGHmRzusLkhE8Qip5hpVxX4EjZ234wfgQxqVtJuDwHTK7H7PeDWhFqP8ZDOBbOHubzPkwUrGs5p4%2FrgxwRhh4MSChl0SCU7CGDwqqnYnmetbfP%2Bkdz1YeJ97Ugfajx1WWs9ZcyjqE65w0yMom4ETPyLXKlxGkQrkZ4LzYR733Fi6E2wf%2BGnaUNf87wpgGIylRAb6SU42YWLkPgAHfRJJEZHo35rKwSsZAAbDerwP6NNuyXgaPn4YV2hFv4lkc5lcJqvc08avFWToHQT0HI6%2BYH%2BtPCRZ8CqCY9IdPUb5qu22fqcvDUyTLiK5CiNc3iUU3Rzmk76MUk6ei5%2B5Wd2QyMdjNmFpWa%2BbKzdTUte36NDhNjjgiFh0o3KC0r8l8aGUUYK3HCqlH%2Br621Euoz0syweB6zq1t9mClDPIaYL3buPIVSRNw2F7rCiuE6pJwytLuZtBy522eq95YFBC2YaEpy0o5qBIwxV5u3%2BIDLrwFqfDKIw0aqKygY6pgEv56eYrfdZ62SkDaagOu8zDEAZ1wU5TheuiUNjOMFcB9UHPYVMl1EAl%2BCrTg3NQToMqT9WachXcHmyr4IL7%2BoJt42DwXKt7Ey48MrOhmmoM2tEbRj2OAm4ehOw2jenAApIIkGCha3JSkOlqomt%2BPSUJmBNGnrVRH%2FyW4cHXAsjTKcNaJOdlZQy%2FixJWy3CQ8yzMzaIgl3y9ERgckIkgEr4jami8%2Biv&X-Amz-Signature=ad613ced02ffe7c4fdf135ca69c98e73a8f8f53686b65e0ae9268f45b77b65fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
