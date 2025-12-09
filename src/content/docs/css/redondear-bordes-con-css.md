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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPI254KH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaEtw3Sdxbr0YPbYg9WgK%2B8%2FmpB3fwCrKz1MMUAGe7EAiBi56kclIeq69ApUiyrME%2BCmkDKlobnWYMGMntHmMoeUCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXA67TsrbtCkwS%2FNKtwDCeaLVYLw2JdTSyHF4uEnAZAwYhM6ZFhW7aewpaFKBl5geSX6OWnRyNvoxq%2BD%2FBu8Cl9w37ydhE7mG1GxZjEpfQPXLH8dBm3KzqKH9jVjMfiDClzVKDxzs7sHxQRkHrnALoZW3vuCuavW9IumOObqPTOf7PrBDOYlXoVSDm7GSEZJdg8fLR%2B%2Fw8f0%2F6PzyDBYr6C0S%2F%2BP5lfweYqQsOa%2FKM6QyXtqvSy9jBOSb6WGvc%2FnYCIKYVlq5co%2FclO57VASNs5UlJN%2FMq0wrDcYPVCe6svZcI70yrmI%2FJIwt0Meug%2FIy5kq4IsMdbTKF9sDLQAvakb4s8BIJVoyakbniK8SeJgSrDh%2FojRikz26O12wsqskayy7Vf45mhR9UhYCshZrXJRyJp%2FYS3K%2F0q9N4SFI41U6tmUT8Uv%2BKaiqltOnY3rYttLm94xh%2Bm88mqiXTSyFDwGF2s0QxIklJkp4O%2B%2F43Kl6kdrfAERA9m0lBh7WAGAr45vf%2FFXwkgd8ifCHKkNnpDKsdjgfmISNsnpOSO7oEfdnjIcCbu5OKZa8YiE7BeRin0YLek7TM4sd7XLqTTbu7AcoOhCAzFLNkFs6tsGgGKqCq3017GlpSCfDGFoc%2FMEFN7ERsTANEcOmFnww26TfyQY6pgGFpzjhH%2BuKEWrxLvyEaemQBVw3kT%2Bb7wRCbQomvsg9o3B5fZ9856GJmBPc3VuMCL1Wbzh09rCqqMBfo8wEdrttRCoHbpj%2Fe3StClmi1PMIzxNe4VY%2Fmq8wQNb2BOrdaA%2BhpOx6w5WzDBHZbApc2lLwSbSfn2mnnq0%2B349KpfdbD3tJnJiZWLvEyvGxMWKtCuGdGNbvrc2PvyXWOq1mtiXfgYZwkXyE&X-Amz-Signature=019ada37386f8e45f6568b119b7723038b4cc02e19e2cc5ccf2ad8cb737d29e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPI254KH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGaEtw3Sdxbr0YPbYg9WgK%2B8%2FmpB3fwCrKz1MMUAGe7EAiBi56kclIeq69ApUiyrME%2BCmkDKlobnWYMGMntHmMoeUCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyXA67TsrbtCkwS%2FNKtwDCeaLVYLw2JdTSyHF4uEnAZAwYhM6ZFhW7aewpaFKBl5geSX6OWnRyNvoxq%2BD%2FBu8Cl9w37ydhE7mG1GxZjEpfQPXLH8dBm3KzqKH9jVjMfiDClzVKDxzs7sHxQRkHrnALoZW3vuCuavW9IumOObqPTOf7PrBDOYlXoVSDm7GSEZJdg8fLR%2B%2Fw8f0%2F6PzyDBYr6C0S%2F%2BP5lfweYqQsOa%2FKM6QyXtqvSy9jBOSb6WGvc%2FnYCIKYVlq5co%2FclO57VASNs5UlJN%2FMq0wrDcYPVCe6svZcI70yrmI%2FJIwt0Meug%2FIy5kq4IsMdbTKF9sDLQAvakb4s8BIJVoyakbniK8SeJgSrDh%2FojRikz26O12wsqskayy7Vf45mhR9UhYCshZrXJRyJp%2FYS3K%2F0q9N4SFI41U6tmUT8Uv%2BKaiqltOnY3rYttLm94xh%2Bm88mqiXTSyFDwGF2s0QxIklJkp4O%2B%2F43Kl6kdrfAERA9m0lBh7WAGAr45vf%2FFXwkgd8ifCHKkNnpDKsdjgfmISNsnpOSO7oEfdnjIcCbu5OKZa8YiE7BeRin0YLek7TM4sd7XLqTTbu7AcoOhCAzFLNkFs6tsGgGKqCq3017GlpSCfDGFoc%2FMEFN7ERsTANEcOmFnww26TfyQY6pgGFpzjhH%2BuKEWrxLvyEaemQBVw3kT%2Bb7wRCbQomvsg9o3B5fZ9856GJmBPc3VuMCL1Wbzh09rCqqMBfo8wEdrttRCoHbpj%2Fe3StClmi1PMIzxNe4VY%2Fmq8wQNb2BOrdaA%2BhpOx6w5WzDBHZbApc2lLwSbSfn2mnnq0%2B349KpfdbD3tJnJiZWLvEyvGxMWKtCuGdGNbvrc2PvyXWOq1mtiXfgYZwkXyE&X-Amz-Signature=55d5d4c73e582a7ad2511397324f92ac41c25620849a4a689b2577798f8dad04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
