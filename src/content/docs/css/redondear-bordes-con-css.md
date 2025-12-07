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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VIGXAT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSBCjLw4IRTfBDc94zXU%2FkB6fjVDQxlbOL%2FrXj1Yhp0wIgOm%2BtIzJ1TyMzI4TDnnkAy9bTSrk5OhgYX9YoVed%2BGCsqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmN6IPemOhnhSk%2FtCrcAxroLD1kpKj0pUEGnBRRWspQnR19jgoBiHX1CkAlQdF6884CzhDmtbqicMoGY9Ru6DX5z4im%2B5a1y1EiqDEbiJWstW9D%2FN84wsRZnDMsCN7SN%2Bt5BuT21c%2Bv6iutaFLBLrR%2Fj38usOjDs6OxwXQ75uZdtf%2FU4JQTQXB%2BwBLbDQhHohB9nJbXFixOjssR5iFN021SgtzBQAC2OPU4hTGF744Xi6cMUcy1Vis%2BGjkhSLSaYAYa5Esnry8Y16DgP%2BZQ2ih5OaWEQDTBvWNb7jHM9hLUUhjyroOE0MY1%2FPFpLk0ep1COn1Zw68NraIPiutODOWK%2Fqz5g%2Bjl7v55cZltr05QWeORBVwW2IpUePpG4D92pn6FiUX5qydMkFVI0FZArE6JhKl3qbg16BPjlwG0x%2BB%2FArhxkhn3cFvsOJo6fSeSp8jVTsr%2BGMrzNXw3a7vcJy0GIytcqKTQG9jaP220qQ7YmOKGHrliIZG%2FeXv5EvnYOpWa9kTHU2QBLOv9gUgk1W5XmIeb8IB%2BHuiBj5cj4Mqr%2Bgln5pxfwKUCTlaxgOz95J4%2BaXqVRSUXZR6ibCBgIME3uA5cH3KALklYK0HdqsBpWwFBbd5injKxzazsrZXY1754J%2F0GFnAIQejXCMOyE2MkGOqUBUQl1pTN66rfjZbK9sOZuSh2IGtlBSq1mPozTDjvmUPE8AHVZutrTBIwzpU05exTGWVnwVg9OcaE1K6kX16AaYKrPsTtXFEbaJU5AI8iUCHZbMJ7AI9FoxrXBfzRKWDOWVjLrNT1tw3HGE4b7H%2FCMPUxFVj6TGMvVfIm11V3GoQnhj1uYzc5pnyo2eyrdYCXN7Re%2BSWhHwPM0vmRmIaRO86P8Tjmd&X-Amz-Signature=624a2f17bc043b3ce51b026ae0fdd956cacb57b441c5225f53228e0fc869853b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656VIGXAT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSBCjLw4IRTfBDc94zXU%2FkB6fjVDQxlbOL%2FrXj1Yhp0wIgOm%2BtIzJ1TyMzI4TDnnkAy9bTSrk5OhgYX9YoVed%2BGCsqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFmN6IPemOhnhSk%2FtCrcAxroLD1kpKj0pUEGnBRRWspQnR19jgoBiHX1CkAlQdF6884CzhDmtbqicMoGY9Ru6DX5z4im%2B5a1y1EiqDEbiJWstW9D%2FN84wsRZnDMsCN7SN%2Bt5BuT21c%2Bv6iutaFLBLrR%2Fj38usOjDs6OxwXQ75uZdtf%2FU4JQTQXB%2BwBLbDQhHohB9nJbXFixOjssR5iFN021SgtzBQAC2OPU4hTGF744Xi6cMUcy1Vis%2BGjkhSLSaYAYa5Esnry8Y16DgP%2BZQ2ih5OaWEQDTBvWNb7jHM9hLUUhjyroOE0MY1%2FPFpLk0ep1COn1Zw68NraIPiutODOWK%2Fqz5g%2Bjl7v55cZltr05QWeORBVwW2IpUePpG4D92pn6FiUX5qydMkFVI0FZArE6JhKl3qbg16BPjlwG0x%2BB%2FArhxkhn3cFvsOJo6fSeSp8jVTsr%2BGMrzNXw3a7vcJy0GIytcqKTQG9jaP220qQ7YmOKGHrliIZG%2FeXv5EvnYOpWa9kTHU2QBLOv9gUgk1W5XmIeb8IB%2BHuiBj5cj4Mqr%2Bgln5pxfwKUCTlaxgOz95J4%2BaXqVRSUXZR6ibCBgIME3uA5cH3KALklYK0HdqsBpWwFBbd5injKxzazsrZXY1754J%2F0GFnAIQejXCMOyE2MkGOqUBUQl1pTN66rfjZbK9sOZuSh2IGtlBSq1mPozTDjvmUPE8AHVZutrTBIwzpU05exTGWVnwVg9OcaE1K6kX16AaYKrPsTtXFEbaJU5AI8iUCHZbMJ7AI9FoxrXBfzRKWDOWVjLrNT1tw3HGE4b7H%2FCMPUxFVj6TGMvVfIm11V3GoQnhj1uYzc5pnyo2eyrdYCXN7Re%2BSWhHwPM0vmRmIaRO86P8Tjmd&X-Amz-Signature=b60f8cfcf1f8ba6d6888dde8c1eff4dd6786265bd4b6c2198c916f44503d70cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
