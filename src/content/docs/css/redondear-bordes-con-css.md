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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULPMNC7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCco4IaEMGAS1ta8%2FQ9S0KoS82nSZOa5ZF8txGix858kgIgEdbMYkeaSu1wk3lQkpyzV3viyEXd5zN8cWNAcg%2FCzCMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOEbajEHvsnGSMwbhCrcA%2BFdZf94FczmpdtUkOJsCx5O9mYLl2wOOpp1jEGLktBEI3sdVY9eq5faaHy38%2BXEcZm0ak3lQ5o3ysn9u%2BoP%2F1S19vm%2B9ZMO2uZOIzmZZW989ptO%2FEUq%2FXUnTdd3gzN4vX0cDOAaY0dqtreUHsgNr%2F%2BSPyWy9bIKzKA49zVaVIswUKzlTt8R8aIrcCVjXawFDdShit%2Fae7b%2BYwl1fWHl6UtM3b%2BlOhB3lr2r%2B0L1UHAMsGIiCzJ%2FFvSEJSnj64cWxq81YJQp6tZliWgvsC2jiD1p5cRSzyiyCoyL9TZxe2wAuAP%2Fd8EbmWrW3mLvQWydI6N9essBf7vcSsdvx0Y1h2XFESf%2FgD2npdUi1Z7Gjk%2B9Vao9IvCqZ2w06ElXLEY%2F5tWlC2VHXoIkeClPQ%2F3CgOjECNZ8yLFQdPLUtbGSzLsYpJR4KCDZYrj9OtySRmiD8AGeOwNgEHNRlBKHEg10KkWXHRJoSG1HDxUtMiim0BzvBdWaQv5HW9g8vuK0J7554MzNXMMap5%2Fq44fwLso4FqXMc%2Buc%2Fq5CXdYBiHQ7HOyPzPo%2BNfeNcqC2yjiADmp4snm9z5dli6Cz59ynToYKGFpbRhH97rlwPt6uOdWVru%2FJgq9EZbrh7V%2FEqejIMP%2Bm0MkGOqUB%2BcVcJ4jE8lxX5Apr2Ve18BPpey2CNWzThk7KR5K31IgB5umHguZK1kGRk3DXvN%2BwzsnMOiWwVm4O5kG6GJpUx7d17gBgbqPFbPV4ZtICoLEdbXHdWwe%2BCFnAxs8pSvLgcXTzeB82icFeyn%2By7%2BK7ojRsi6U0vSyOhyWgbcnNJuacHjFYQ4i5TCTopZl%2BbMENtKqOktGuLCIWBJ0WZyaJbIEZ9UaM&X-Amz-Signature=53c6da76c58b0810df35c09f0f01c9d4e29d41bfb5f84a2b2ef45505a90c95df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZULPMNC7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCco4IaEMGAS1ta8%2FQ9S0KoS82nSZOa5ZF8txGix858kgIgEdbMYkeaSu1wk3lQkpyzV3viyEXd5zN8cWNAcg%2FCzCMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOEbajEHvsnGSMwbhCrcA%2BFdZf94FczmpdtUkOJsCx5O9mYLl2wOOpp1jEGLktBEI3sdVY9eq5faaHy38%2BXEcZm0ak3lQ5o3ysn9u%2BoP%2F1S19vm%2B9ZMO2uZOIzmZZW989ptO%2FEUq%2FXUnTdd3gzN4vX0cDOAaY0dqtreUHsgNr%2F%2BSPyWy9bIKzKA49zVaVIswUKzlTt8R8aIrcCVjXawFDdShit%2Fae7b%2BYwl1fWHl6UtM3b%2BlOhB3lr2r%2B0L1UHAMsGIiCzJ%2FFvSEJSnj64cWxq81YJQp6tZliWgvsC2jiD1p5cRSzyiyCoyL9TZxe2wAuAP%2Fd8EbmWrW3mLvQWydI6N9essBf7vcSsdvx0Y1h2XFESf%2FgD2npdUi1Z7Gjk%2B9Vao9IvCqZ2w06ElXLEY%2F5tWlC2VHXoIkeClPQ%2F3CgOjECNZ8yLFQdPLUtbGSzLsYpJR4KCDZYrj9OtySRmiD8AGeOwNgEHNRlBKHEg10KkWXHRJoSG1HDxUtMiim0BzvBdWaQv5HW9g8vuK0J7554MzNXMMap5%2Fq44fwLso4FqXMc%2Buc%2Fq5CXdYBiHQ7HOyPzPo%2BNfeNcqC2yjiADmp4snm9z5dli6Cz59ynToYKGFpbRhH97rlwPt6uOdWVru%2FJgq9EZbrh7V%2FEqejIMP%2Bm0MkGOqUB%2BcVcJ4jE8lxX5Apr2Ve18BPpey2CNWzThk7KR5K31IgB5umHguZK1kGRk3DXvN%2BwzsnMOiWwVm4O5kG6GJpUx7d17gBgbqPFbPV4ZtICoLEdbXHdWwe%2BCFnAxs8pSvLgcXTzeB82icFeyn%2By7%2BK7ojRsi6U0vSyOhyWgbcnNJuacHjFYQ4i5TCTopZl%2BbMENtKqOktGuLCIWBJ0WZyaJbIEZ9UaM&X-Amz-Signature=35306f21c23681d3af6b4c7cf55ce4c8ecb1e21bf73c20d187e5c07264b57764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
