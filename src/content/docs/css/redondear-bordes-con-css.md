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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K5KC5Q2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8p%2BxKwdpLYcHxYZIaOoRVVdTYFNiYYgUox6TI3RSzfAiEA79zrzMigktEo%2B1sTYnf50KDCtZlM7Lh8Z5ZVs79H3DEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAIMrls7yLkFeQ3zlircA4Z6RClNHvJHAz3V49IdBLjbFDoVpCb8gKbfXXHnsgCc1RCqTUNVM%2Fssu6TrlC%2BHpb2OkOs0wAOVstpCLPL3AQVYBKmD1n8eubIMDPC2k4US4f6R5fvPPUrsuLrNGsuIG5GWZcTchQ2KBuwAO2VHaqY4URg%2B1LKLFly0Apz8RVALnd6McfiOJGlj9FQDOGTa6vav4UmP4AD9CB4Q57OnO7sKPp%2FuwrHVaVtyHMO6dNkrDoy%2BohazhTKau4qoiyOJs%2BUPsFb3pPH%2BfNCGl5kNblhXrL2M%2Fi8%2BXWmlpUfOjo6am7EEzGmjtCBYq9GYdhk%2FLMb0IDXuQkhOkrMLPltn83dgSgC4yHcSxk%2FLMuccND%2BKENKaONLTmiHUj8H2ZtkhmJeLhMBuNRk%2FnO1Py%2FbpcK%2FTN8YQcWLMXxc87IlQN%2BdNVr%2F%2Bj8d2AFG6LYP20WHJL7Aj8OTh2KqXk0mJi7U4oB19ccOxXmvYtHiMmEdNTdViozLSntCfjC4tIiLD5trQQM78YeZgFmGRJHXB79D4f0lho9s4xoFfFSYiUvtY5%2F65VBc4TgaquPOzECeObKwAE%2BwWY9ldZ%2BBOj2Y4OMTomtVDykfV1KVgrWYZXbebRhRZRWUMxyieN1ZZt5bBMMGMyMkGOqUBRdIv37yv4HxWJd%2FokGm1FpfaTsdqFPJRMk0lhRDLZPi78jk1a0hk4R3gsuG6xVd55zL5hV1Zsd%2Bye77hNX6ue%2BEAGx8MXZGfnN10AmBvCNKaLIZqYzjy7gDjW8d2z0Dio5hKH9gGHmeOlmvmvDP4EgkTOf6zltPJFmBqRwFCcpKbAU6d7T4wPuDC3CreCCuj4ZEIJrG8q7SfGrnVSCJtTkZetqw7&X-Amz-Signature=cc2855d3cc96ff968fe3ec48fa32e6dace5d72a2079505dac36d3c04c1df8d09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K5KC5Q2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T235644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG8p%2BxKwdpLYcHxYZIaOoRVVdTYFNiYYgUox6TI3RSzfAiEA79zrzMigktEo%2B1sTYnf50KDCtZlM7Lh8Z5ZVs79H3DEq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAIMrls7yLkFeQ3zlircA4Z6RClNHvJHAz3V49IdBLjbFDoVpCb8gKbfXXHnsgCc1RCqTUNVM%2Fssu6TrlC%2BHpb2OkOs0wAOVstpCLPL3AQVYBKmD1n8eubIMDPC2k4US4f6R5fvPPUrsuLrNGsuIG5GWZcTchQ2KBuwAO2VHaqY4URg%2B1LKLFly0Apz8RVALnd6McfiOJGlj9FQDOGTa6vav4UmP4AD9CB4Q57OnO7sKPp%2FuwrHVaVtyHMO6dNkrDoy%2BohazhTKau4qoiyOJs%2BUPsFb3pPH%2BfNCGl5kNblhXrL2M%2Fi8%2BXWmlpUfOjo6am7EEzGmjtCBYq9GYdhk%2FLMb0IDXuQkhOkrMLPltn83dgSgC4yHcSxk%2FLMuccND%2BKENKaONLTmiHUj8H2ZtkhmJeLhMBuNRk%2FnO1Py%2FbpcK%2FTN8YQcWLMXxc87IlQN%2BdNVr%2F%2Bj8d2AFG6LYP20WHJL7Aj8OTh2KqXk0mJi7U4oB19ccOxXmvYtHiMmEdNTdViozLSntCfjC4tIiLD5trQQM78YeZgFmGRJHXB79D4f0lho9s4xoFfFSYiUvtY5%2F65VBc4TgaquPOzECeObKwAE%2BwWY9ldZ%2BBOj2Y4OMTomtVDykfV1KVgrWYZXbebRhRZRWUMxyieN1ZZt5bBMMGMyMkGOqUBRdIv37yv4HxWJd%2FokGm1FpfaTsdqFPJRMk0lhRDLZPi78jk1a0hk4R3gsuG6xVd55zL5hV1Zsd%2Bye77hNX6ue%2BEAGx8MXZGfnN10AmBvCNKaLIZqYzjy7gDjW8d2z0Dio5hKH9gGHmeOlmvmvDP4EgkTOf6zltPJFmBqRwFCcpKbAU6d7T4wPuDC3CreCCuj4ZEIJrG8q7SfGrnVSCJtTkZetqw7&X-Amz-Signature=011f521097769a629b33439c25f4ab0a808111e6db25041b049b73e3fbbd6d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
