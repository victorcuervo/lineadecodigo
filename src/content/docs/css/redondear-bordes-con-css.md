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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UJ3CBTW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWuQWtFcoxwWnuUwZ6vtIG82%2FGUPtaU3Wdvw%2FeWDk7qAiEAoqGb8wfeShmiPa9KUj2dXO7UoMLWDV0Czyd5QxnWBIkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG43Xu6kA48Vqw51%2ByrcA3O2qQEHj1ZftMBTRofCzl4XiowgH0z2Pz%2FR13WZRZ66MQ7SlNlBEvt0rnc5B7frRPTn5oS%2F9xZPRBo4ufosWtxIU2k7oUm%2BaRimMcnJsbHgRY7JPV5MaZOUevKEV6LSMsZJNBDUykjcpSq4%2Bn%2FjEq97BMXm2UAcVfZ%2BJEqC8746TfLLf%2BIWINQLvQLviSxeZxssMWAENxUs6InjbrJAnW8mutHsggIVEpA3aqpeXc1QOqC1krfSavgjzGdMktoqEV9PLNyYWu%2Fgd712rpajsOElR%2FNfer0D87jCyABnc9RtfSBBQ63NjX3r4Dv19tf1Ihi%2FQ%2FmOWWqNoFXEn2zJyHAvykl5em85q4D99zdNueY0vwZWxKOlrrFeuhUB2gPFP3aEuV6gqJvYRNa9Gacf%2BvbR5Ev%2FKVT%2Fdt1I4SWS3MQk4wwgoJakXx0zPIyHQqcNWkOR%2BaeVsmLUf7uiDbZEHhsEd7pgbTb6yA0YMjthp9AS%2BsbPPIa8ftx8PYUFheMYMeKd2y5EOKK0T0VeGKTMyjCXGmkwHRmgGPFYagC0Iv2qokWxoSJL0dsPu%2FngST5s41BqVr2c%2FPz64Bd5jg32SF%2B44FHLaXZ45QJryzEU6Jjsr0vAhoD%2BPk4EhKcCMMLP2ckGOqUBmdGcowMD0TVmkXp7Bjv4OSDuRm8Kf2x5msLyZGMcw8SNEJTMDdcwlQMh91DCcaPlNry%2F4vX1X4yjZ63Zd%2FaDS1hQ9ac9YtQHazd3OYQSmkFcNLrd9zpqMvsjs78OXGj9JSa7zTBnOjTG9gnXNLmP5SASAHMonY6p9AvA0hxK7sx00Nq7j%2B1oudGXStL8C5mqrTlPx11z4Ff8eWSYs2rxIqyEetO5&X-Amz-Signature=8b6104dcae6ef68e4b9a724f8fd393c483fb2529db4e8ce73acf222171ed350f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UJ3CBTW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWuQWtFcoxwWnuUwZ6vtIG82%2FGUPtaU3Wdvw%2FeWDk7qAiEAoqGb8wfeShmiPa9KUj2dXO7UoMLWDV0Czyd5QxnWBIkqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG43Xu6kA48Vqw51%2ByrcA3O2qQEHj1ZftMBTRofCzl4XiowgH0z2Pz%2FR13WZRZ66MQ7SlNlBEvt0rnc5B7frRPTn5oS%2F9xZPRBo4ufosWtxIU2k7oUm%2BaRimMcnJsbHgRY7JPV5MaZOUevKEV6LSMsZJNBDUykjcpSq4%2Bn%2FjEq97BMXm2UAcVfZ%2BJEqC8746TfLLf%2BIWINQLvQLviSxeZxssMWAENxUs6InjbrJAnW8mutHsggIVEpA3aqpeXc1QOqC1krfSavgjzGdMktoqEV9PLNyYWu%2Fgd712rpajsOElR%2FNfer0D87jCyABnc9RtfSBBQ63NjX3r4Dv19tf1Ihi%2FQ%2FmOWWqNoFXEn2zJyHAvykl5em85q4D99zdNueY0vwZWxKOlrrFeuhUB2gPFP3aEuV6gqJvYRNa9Gacf%2BvbR5Ev%2FKVT%2Fdt1I4SWS3MQk4wwgoJakXx0zPIyHQqcNWkOR%2BaeVsmLUf7uiDbZEHhsEd7pgbTb6yA0YMjthp9AS%2BsbPPIa8ftx8PYUFheMYMeKd2y5EOKK0T0VeGKTMyjCXGmkwHRmgGPFYagC0Iv2qokWxoSJL0dsPu%2FngST5s41BqVr2c%2FPz64Bd5jg32SF%2B44FHLaXZ45QJryzEU6Jjsr0vAhoD%2BPk4EhKcCMMLP2ckGOqUBmdGcowMD0TVmkXp7Bjv4OSDuRm8Kf2x5msLyZGMcw8SNEJTMDdcwlQMh91DCcaPlNry%2F4vX1X4yjZ63Zd%2FaDS1hQ9ac9YtQHazd3OYQSmkFcNLrd9zpqMvsjs78OXGj9JSa7zTBnOjTG9gnXNLmP5SASAHMonY6p9AvA0hxK7sx00Nq7j%2B1oudGXStL8C5mqrTlPx11z4Ff8eWSYs2rxIqyEetO5&X-Amz-Signature=cf55e3c54221bf190153a4b765c2e9b8c0d47b011c928955de1e6ba7a758a1de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
