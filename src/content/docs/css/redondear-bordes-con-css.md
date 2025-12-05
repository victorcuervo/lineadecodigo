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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBJIKIT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZTGYrCnr3PtQeSWLI%2Bf54FZST%2FXMMdEEIK3VX8LBFPAiEAh2ToJ2%2Bgk7BqQKxPSYGxOHsRODg0KAakIzZJ2yGVMYIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGqvSBrv%2FVYGlYN9VircA9nY9mlNoxGQ7PinXajRr0qq1z6TK8DQjp2lg1z3Db5UPA0mi%2F90rE67o3aH2%2BSfbZR42ua%2BxuTeLRlIJodW4EQAq4kKQogihTg8rYzzu1eYkTPLMErQrUetxyZV6scpLlyCr4BqChku5rC2OpoIPFrSAATVjyP1s1sYUMM5l7iZ0pQvNU85cJuRevDijjQXh7pbc%2Bl54Pr59icO67KplEmMC6g3BTkfcapfPLwjEUd0DEHFgMAMmbrus%2Bi2Qkh8JrmFblHQlyAab2XbjJ1LRrN41jWeOJK5ZL7jUZUaYU2O2UtGD40SPPgGjgqOUPxhfx3S3FByF4uh7h8fylMHyhq%2BItbMep4%2FfaHTV1jqKeMSnMNLOUaVcChfFpkhgHu6y%2B6kGPQOlZLkz0XNvX%2BZyMQOAt6%2FM4IjSPY07C4hE6M8ZDQa1ke3jv6GnbxyQ6CV5K3V25kT90W0F2u%2By0%2BEFZV5PL1eHWVrfizevIn%2FN8tyBJxWRPKo5J1naJh7JPWqWCXPX89q46RvPzl2zbXh4TtFcJpNLlRncuUKxmfvgvDQ9jr7Iy4cJMAzUSMYavEZRVC07jrpe3ndoIPLl06tGTfu06cZEjtC0oVICIFJ2StvRTTka0XsRSORblF%2FMJf4y8kGOqUBib7otPcSDMokV%2Bt46WrDd8CKR%2F8zOwQPm9l39F2%2F0jSvOPw%2Foikw0vqYVcPIYC7uPXWbTfbCblxr1BEQOVv6yuiWeTWzyAoXMZJVHt%2FdYLiGvevnxZlXaIEWJ8YaGijg%2BNrX%2Fw7dhm%2BlD2yaRiLAeeSk2pONwbVabjmx%2Fp11%2B27LWDip%2F0b2vmxdCCjbj7dppT4RuB7o7%2FTrHSNR1l%2Fdvf%2FWJX68&X-Amz-Signature=772f3340ae0a71a1e1a81d969cc44587f3a1d3886f055576e3d11254ede2991d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBJIKIT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZTGYrCnr3PtQeSWLI%2Bf54FZST%2FXMMdEEIK3VX8LBFPAiEAh2ToJ2%2Bgk7BqQKxPSYGxOHsRODg0KAakIzZJ2yGVMYIq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDGqvSBrv%2FVYGlYN9VircA9nY9mlNoxGQ7PinXajRr0qq1z6TK8DQjp2lg1z3Db5UPA0mi%2F90rE67o3aH2%2BSfbZR42ua%2BxuTeLRlIJodW4EQAq4kKQogihTg8rYzzu1eYkTPLMErQrUetxyZV6scpLlyCr4BqChku5rC2OpoIPFrSAATVjyP1s1sYUMM5l7iZ0pQvNU85cJuRevDijjQXh7pbc%2Bl54Pr59icO67KplEmMC6g3BTkfcapfPLwjEUd0DEHFgMAMmbrus%2Bi2Qkh8JrmFblHQlyAab2XbjJ1LRrN41jWeOJK5ZL7jUZUaYU2O2UtGD40SPPgGjgqOUPxhfx3S3FByF4uh7h8fylMHyhq%2BItbMep4%2FfaHTV1jqKeMSnMNLOUaVcChfFpkhgHu6y%2B6kGPQOlZLkz0XNvX%2BZyMQOAt6%2FM4IjSPY07C4hE6M8ZDQa1ke3jv6GnbxyQ6CV5K3V25kT90W0F2u%2By0%2BEFZV5PL1eHWVrfizevIn%2FN8tyBJxWRPKo5J1naJh7JPWqWCXPX89q46RvPzl2zbXh4TtFcJpNLlRncuUKxmfvgvDQ9jr7Iy4cJMAzUSMYavEZRVC07jrpe3ndoIPLl06tGTfu06cZEjtC0oVICIFJ2StvRTTka0XsRSORblF%2FMJf4y8kGOqUBib7otPcSDMokV%2Bt46WrDd8CKR%2F8zOwQPm9l39F2%2F0jSvOPw%2Foikw0vqYVcPIYC7uPXWbTfbCblxr1BEQOVv6yuiWeTWzyAoXMZJVHt%2FdYLiGvevnxZlXaIEWJ8YaGijg%2BNrX%2Fw7dhm%2BlD2yaRiLAeeSk2pONwbVabjmx%2Fp11%2B27LWDip%2F0b2vmxdCCjbj7dppT4RuB7o7%2FTrHSNR1l%2Fdvf%2FWJX68&X-Amz-Signature=d8ddb30347bdcf019b88503bbb9bc4fad4c835f8c32feeb6538ae1d7d04133c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
