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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZB2CYD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCPMjvVkYO6Zj1D2wHvbsHF%2B7wmSts94rAJd6ugwuaUbwIgEjKgjYcV7NpJIkYRX5013hp8H0Nae8h6Jo24Bk6ElyQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEWtdWJRyloyIUUtyCrcA1I7BB9lWXEnViDPp1pazBSOKapXhcH5wpzlQNWwf%2ByzucwgEf2gmzeo07ENcJXICF0NQK46%2BYLqe%2FJ66Vqg2FKZ8DsFuCsMXw6EqL0yIRKJ1OnEL6D4cqB0trcXB2vzX8pL3tQOJcuFqj3LcO2eiLil6o3Te16Am8HQGgJmdxry9QSWsIVaY4Ctz7Jq7XxvXlMrVSRoSlExFfWhjM3blqap5vQwhGyezPU4NSqRk1b%2BEFKqruVEiHpoMP%2BSkC%2BUWpTBoA7%2B9bq24jxS8KE64xPKTcTL3NziC4WWz1OJ8t4dGEVsUpZwHvd9BcePuhvfYccRO2wIDSWuvZkN9rTYkqfUABAEIs%2BoBqBWc%2B0XReZps0rcu1%2FZhK8HrhfMmiOsKuVueVR5jogJ%2FoBK%2B0ZFe3wpXaSqMYJOJlsHH1I%2FrnwihnkI%2FA6OBlnJmlWuO%2FwFYdgJdk0pOy6DCiW4nNF0U9ipJ4RkPhqtuQV2xa51rEGOSMhM2dKL2qCQZcE5FAp%2F0dh7%2F5%2FMPqFvLM5ry4uHb4hKjEcXRep6PlKpFqf8lhlSgpd7gbbo0nbp4aQlDG3OWsEsTaycKWQXTBjUU%2FSAJCT0%2FpYSkG2rFkyPRpRhr0Wb7bdsHQx5b7KINPYJMMDnxMkGOqUBJ2yYsb%2FQEAv7wAw4Fcw1ddy9ZLJW2b14mIlauKgQc6wmckbr89x3EZT6RKcGUmjPrRJ37d6gi2e%2BYW%2FCREe3t1bqaQIustaq%2F%2F26NswqNfVTLUfhj00px514gnx0nLSIhHJr6TajtS6EjgcqebJ19l6xpFv5fKOaUcOYcRRrZ8uFHmtq60P%2BGotY8lcoY52zcrZV53r16Eov6GGUyb%2BNkTOS%2BEFS&X-Amz-Signature=b13b379510dee63606d65724bcb71fb4b71f2fc2e1e1dfa26d974f2eea4126e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VZB2CYD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCPMjvVkYO6Zj1D2wHvbsHF%2B7wmSts94rAJd6ugwuaUbwIgEjKgjYcV7NpJIkYRX5013hp8H0Nae8h6Jo24Bk6ElyQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEWtdWJRyloyIUUtyCrcA1I7BB9lWXEnViDPp1pazBSOKapXhcH5wpzlQNWwf%2ByzucwgEf2gmzeo07ENcJXICF0NQK46%2BYLqe%2FJ66Vqg2FKZ8DsFuCsMXw6EqL0yIRKJ1OnEL6D4cqB0trcXB2vzX8pL3tQOJcuFqj3LcO2eiLil6o3Te16Am8HQGgJmdxry9QSWsIVaY4Ctz7Jq7XxvXlMrVSRoSlExFfWhjM3blqap5vQwhGyezPU4NSqRk1b%2BEFKqruVEiHpoMP%2BSkC%2BUWpTBoA7%2B9bq24jxS8KE64xPKTcTL3NziC4WWz1OJ8t4dGEVsUpZwHvd9BcePuhvfYccRO2wIDSWuvZkN9rTYkqfUABAEIs%2BoBqBWc%2B0XReZps0rcu1%2FZhK8HrhfMmiOsKuVueVR5jogJ%2FoBK%2B0ZFe3wpXaSqMYJOJlsHH1I%2FrnwihnkI%2FA6OBlnJmlWuO%2FwFYdgJdk0pOy6DCiW4nNF0U9ipJ4RkPhqtuQV2xa51rEGOSMhM2dKL2qCQZcE5FAp%2F0dh7%2F5%2FMPqFvLM5ry4uHb4hKjEcXRep6PlKpFqf8lhlSgpd7gbbo0nbp4aQlDG3OWsEsTaycKWQXTBjUU%2FSAJCT0%2FpYSkG2rFkyPRpRhr0Wb7bdsHQx5b7KINPYJMMDnxMkGOqUBJ2yYsb%2FQEAv7wAw4Fcw1ddy9ZLJW2b14mIlauKgQc6wmckbr89x3EZT6RKcGUmjPrRJ37d6gi2e%2BYW%2FCREe3t1bqaQIustaq%2F%2F26NswqNfVTLUfhj00px514gnx0nLSIhHJr6TajtS6EjgcqebJ19l6xpFv5fKOaUcOYcRRrZ8uFHmtq60P%2BGotY8lcoY52zcrZV53r16Eov6GGUyb%2BNkTOS%2BEFS&X-Amz-Signature=48ae6e28485a89127b8a9ffb592709aa3781896bc29030240fc7d45f4e0510e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
