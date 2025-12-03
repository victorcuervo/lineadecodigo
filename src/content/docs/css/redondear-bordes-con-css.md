---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FKJ4RQE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDQLP0WB3WVaxwsTpyZoA9cQbp5NEmKCEb79o7DyD65QgIgW8Ih8huQ9ltTu6vQMWw88afjRHjMMsPUye78DaeXrZ0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDDysfKQK7cQYj7%2FOtCrcA%2F8mc7%2BOfhoavMEF1OYGkJPRKIXchyKcZ0PRFixEW7fCSNtM8rHXtMSBuz2jrsonotZpB%2F0Z6VAXapfaCXXFJLpgJZZcMoCF29sviDQDZbPvtppSZVNusuCt5nPR4ZbdiN1z3S1gjPP%2BBh%2BwP6Vi%2BkAZ6P%2F6s5iL5iyxbtNNCGeBbwhg3uXg6EbcqTYqIlnBxayDTEoMzlOf4svlaWmuBP4E%2FWsPXL3NHLGcwGhFBF2pYRhilZEXINZwK2hxGGMJbl9zrwl9VHGvIgFcxFSUeQsSf7eJpF7p0ArmIp60yZcOkw0MdAERbTsvyW0vhrcWFBovB409ydhPcn6xlI4XZynNlREdG1y4GgLHBR8%2BiAsfanz7X7sVbysNytpkWV83aT3iGC2nRrIjbp3aqcrg1g7UI43LfA2onN0tvyzLBUX521E44KE0LDG4CxPGKK9mZj2qci5Ki4oqDJCvnq4X4Xo6lGJ3F75nY6p45D2oR6OFeIrMq37YUb33avf8yrEef6x0NCs6JhstXhy4YQAxGEByybfg3fR3cnQciuZn8kGG1QXy1ZUBpiqWtB01Wj60xYjM%2BfUviqQ8gOP21N7yNdQ89FB%2BRSj7qj26r5%2FNtrG%2Fq18rTp7xWtdwktvEMNa9wskGOqUBKVBD0fqqiEo2PEhql%2FS0n9S5NVJDtggWJjDmFmdja7IL3iCRsnOAnR4juHvdxTg8jklQ8FP5pxzkw1XNtr99zSTt4%2BJ%2BHXbn7qm0EO61gKqzL3pTJ7nwLemizlzXsz3JY%2B1qK58dkxpzJC4VpD4S1P2oR3szv4zWWVjg1gn5EE0%2FJwh2V3sqLK09Ihj6vaKhz354HDdR6C0pSYqHInhyY2590BDy&X-Amz-Signature=e35bc206d6e14e057bd2f3237534416153e9bc43277dc401f1110a3b90b5f831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FKJ4RQE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDQLP0WB3WVaxwsTpyZoA9cQbp5NEmKCEb79o7DyD65QgIgW8Ih8huQ9ltTu6vQMWw88afjRHjMMsPUye78DaeXrZ0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDDysfKQK7cQYj7%2FOtCrcA%2F8mc7%2BOfhoavMEF1OYGkJPRKIXchyKcZ0PRFixEW7fCSNtM8rHXtMSBuz2jrsonotZpB%2F0Z6VAXapfaCXXFJLpgJZZcMoCF29sviDQDZbPvtppSZVNusuCt5nPR4ZbdiN1z3S1gjPP%2BBh%2BwP6Vi%2BkAZ6P%2F6s5iL5iyxbtNNCGeBbwhg3uXg6EbcqTYqIlnBxayDTEoMzlOf4svlaWmuBP4E%2FWsPXL3NHLGcwGhFBF2pYRhilZEXINZwK2hxGGMJbl9zrwl9VHGvIgFcxFSUeQsSf7eJpF7p0ArmIp60yZcOkw0MdAERbTsvyW0vhrcWFBovB409ydhPcn6xlI4XZynNlREdG1y4GgLHBR8%2BiAsfanz7X7sVbysNytpkWV83aT3iGC2nRrIjbp3aqcrg1g7UI43LfA2onN0tvyzLBUX521E44KE0LDG4CxPGKK9mZj2qci5Ki4oqDJCvnq4X4Xo6lGJ3F75nY6p45D2oR6OFeIrMq37YUb33avf8yrEef6x0NCs6JhstXhy4YQAxGEByybfg3fR3cnQciuZn8kGG1QXy1ZUBpiqWtB01Wj60xYjM%2BfUviqQ8gOP21N7yNdQ89FB%2BRSj7qj26r5%2FNtrG%2Fq18rTp7xWtdwktvEMNa9wskGOqUBKVBD0fqqiEo2PEhql%2FS0n9S5NVJDtggWJjDmFmdja7IL3iCRsnOAnR4juHvdxTg8jklQ8FP5pxzkw1XNtr99zSTt4%2BJ%2BHXbn7qm0EO61gKqzL3pTJ7nwLemizlzXsz3JY%2B1qK58dkxpzJC4VpD4S1P2oR3szv4zWWVjg1gn5EE0%2FJwh2V3sqLK09Ihj6vaKhz354HDdR6C0pSYqHInhyY2590BDy&X-Amz-Signature=ffe2419b08ec3847025281f2c12c7af6ba80413a44753c22b376b37592fe331a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
