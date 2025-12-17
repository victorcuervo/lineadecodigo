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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINT3EXU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHba165n2%2FX%2Bw1NmpFYIVxKp5KZx6kgVlqbif0QgjT2uAiAn5kl8PKGfR69XlwYIo3L1aNJVx26uuWWB698TG2JlASr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM0JgDrZRvTZ0Sop6WKtwDQjmA2HUcnrKkO0aGwteUTTQn3QiCa%2Bx20whwt6MPGNgRoJggoC%2Bf%2FnIEdjQj4A9OHpHvLTjTm%2BkDnChHz4LMWYoBFleJhskzCcqGXTCIfULdNYUDI9RbyF9bVPrvC7ZcsVBzLXW0uFZEV8ghaEO6GWih%2FDwPtZxs4aGpPl%2BP2owd95pKRNrtSMWB9JAwMKsql2PISMvyb5rpCc0DGc%2BrokZ6RPYwsbAwyuKIiK6Cf5%2BrJ4QuU87rOqiu8A8j76fcZscn4r7Ry798Ur4RwsK67DQacqHw%2FTu0XHUJfrHwdGUB07fYZ25Ms6%2BBuHDz19cAzYIqjMOEdQmMNHVeayJrjg8DZCjUQoSuLtN%2F%2BqgVNQwuRNCwI08oieoGU1AOpLPV4QBJMm%2BU%2BjfxwoteUIVzvSeHt3H%2BpFP%2F2smQld1wm22lxvM8ghJakCiSeFgnFqLdkx92cuYeGKtGIdcMY8Z%2BE9RNCGdxYzWUGo0fDsWu87Ch39aef2ZBpRLGQvT0KvUwapzCP27x5F5E8WdJzIj4skfT7Yx0i3uSaJJN1EfUuQyErEsUcBZUcLQXfeQIgb%2BTd1jvEpBcQ3utM6WRkPhBHT%2B3bl7j%2BJ3V9%2F%2Bbv%2F10Z2Wm9cHd%2BTj17HnwnIEwn%2FCJygY6pgFt%2Fa3rmy3fcx99IlK2O6PYmYPBLuXLh4ag8W1eINvDQVIeFOnBN7nPnknrU2Bui9JeagObQYzvHTopN4u6N19B5poEEi%2FzPpUAndy3CG3n4%2B9sa8BoVWfoY1Meh%2BPr1lFKMMod5cQ63i%2Bsny4DRTh9KgggC0mNmVh9d%2FbpoZCMcHgcRsi4wn%2BMDPSLq22n7mmDGk2l9XyMCTYsQ473LSoVWtJ6B7zP&X-Amz-Signature=8af10f5efcce71f31771b5affb41620764d42da60d23f97caab6fc7d19d695db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINT3EXU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHba165n2%2FX%2Bw1NmpFYIVxKp5KZx6kgVlqbif0QgjT2uAiAn5kl8PKGfR69XlwYIo3L1aNJVx26uuWWB698TG2JlASr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM0JgDrZRvTZ0Sop6WKtwDQjmA2HUcnrKkO0aGwteUTTQn3QiCa%2Bx20whwt6MPGNgRoJggoC%2Bf%2FnIEdjQj4A9OHpHvLTjTm%2BkDnChHz4LMWYoBFleJhskzCcqGXTCIfULdNYUDI9RbyF9bVPrvC7ZcsVBzLXW0uFZEV8ghaEO6GWih%2FDwPtZxs4aGpPl%2BP2owd95pKRNrtSMWB9JAwMKsql2PISMvyb5rpCc0DGc%2BrokZ6RPYwsbAwyuKIiK6Cf5%2BrJ4QuU87rOqiu8A8j76fcZscn4r7Ry798Ur4RwsK67DQacqHw%2FTu0XHUJfrHwdGUB07fYZ25Ms6%2BBuHDz19cAzYIqjMOEdQmMNHVeayJrjg8DZCjUQoSuLtN%2F%2BqgVNQwuRNCwI08oieoGU1AOpLPV4QBJMm%2BU%2BjfxwoteUIVzvSeHt3H%2BpFP%2F2smQld1wm22lxvM8ghJakCiSeFgnFqLdkx92cuYeGKtGIdcMY8Z%2BE9RNCGdxYzWUGo0fDsWu87Ch39aef2ZBpRLGQvT0KvUwapzCP27x5F5E8WdJzIj4skfT7Yx0i3uSaJJN1EfUuQyErEsUcBZUcLQXfeQIgb%2BTd1jvEpBcQ3utM6WRkPhBHT%2B3bl7j%2BJ3V9%2F%2Bbv%2F10Z2Wm9cHd%2BTj17HnwnIEwn%2FCJygY6pgFt%2Fa3rmy3fcx99IlK2O6PYmYPBLuXLh4ag8W1eINvDQVIeFOnBN7nPnknrU2Bui9JeagObQYzvHTopN4u6N19B5poEEi%2FzPpUAndy3CG3n4%2B9sa8BoVWfoY1Meh%2BPr1lFKMMod5cQ63i%2Bsny4DRTh9KgggC0mNmVh9d%2FbpoZCMcHgcRsi4wn%2BMDPSLq22n7mmDGk2l9XyMCTYsQ473LSoVWtJ6B7zP&X-Amz-Signature=45c59462e30d4404b896fdadd119a2e90a4adf6bbae925cb0c687e64951ae21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
