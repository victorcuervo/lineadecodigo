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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFHYBH2B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNes%2Bwgf67QKMgbm99bANlPz0X22DtR2%2F5JgbPTzteGgIgNim1BfeIuLEz8lV6Fbvkdtp%2BsKoTBsybuqOECODMOUAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBR6zVXMQ6dRkvEvCSrcA4A7xIVcEJHJJpciTeMPeTr%2BMUDjp743lEBjB9TqJc026%2Fj5pVKh6dFGpnv917YLNa9RzVWxbAyY7QtFPTwu7%2BlTtSCrFkoHN%2Fp8VEp%2FLZ9X%2Bh5qSljzPu6PtQEK%2BiFOpFxx%2BHIib%2FeiwlGMJ7F8XY9LUc1%2F1s7LI%2Bk%2B5tXFrrcekHrPJTf3joYv4GuFTg5Cps%2FV8HjqMXBpOL8PrbjTWHksp09n5weE2QdSz6HDRZm8RAATNbnICdXw9KHe2Py0SoJ1XklW4WS%2BPXY8EtEisUySh9a%2B4UB%2BXr1EyNWH9Lev0WJIb1b4l3rFitoXmbCCSiYc%2F2FbKWjVHFV1wo%2B0ZsAbHgoWeLg29h7CAHvG3fwT7R1qtTLBLGNmtsLu4deEcJ6CmNfUsNNx0Blr8Ry9qWSxjia1Q2YXlemhcba7gHGy8Lk2KXByjiwybJWlwgUHiWFsVkK%2B4OInbzTvC3g9ex9zwLaSWNbOynMNFia9VJ0ZrsT7ADf45Dmfkr8UVMYl2l8GHhpEu2XzoDw%2F0QSeu9QD0neqgk9FFPawJgCKO030dLeGZFyYYCmCfGfeP8qiGQLGV8rXIjK2zX%2BJ1ZEvCQoo9WI50WKYRPYr5VG7naT5ROBGXhoYB4djlfANMOTrz8kGOqUBHFSzz4YfHpz%2FQnHlr5d1949yedjmcU5v4Nm%2FhlxcAB%2Bub0iOUgwRKeCEahsORvHxOPIV7H%2F9g24ylbRCrnoc3RRAaPvXw7r%2Bu%2B6blne73kilTdqL8ccSfWwX8xwmPF8%2FLdn6DofQe4VptO1jYcqrezC6Grrq%2F7AE%2B7Z2%2FMR%2FAquxj%2Bykn68tW%2BC%2FX%2BbgwJHp1KZ22%2Flwn8qckME8%2B6wXQ5anPgfA&X-Amz-Signature=79bf0dd09007bd464f9c35dda775cb8256e3134f1c74a0afc473e2c8b5132382&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFHYBH2B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNes%2Bwgf67QKMgbm99bANlPz0X22DtR2%2F5JgbPTzteGgIgNim1BfeIuLEz8lV6Fbvkdtp%2BsKoTBsybuqOECODMOUAq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDBR6zVXMQ6dRkvEvCSrcA4A7xIVcEJHJJpciTeMPeTr%2BMUDjp743lEBjB9TqJc026%2Fj5pVKh6dFGpnv917YLNa9RzVWxbAyY7QtFPTwu7%2BlTtSCrFkoHN%2Fp8VEp%2FLZ9X%2Bh5qSljzPu6PtQEK%2BiFOpFxx%2BHIib%2FeiwlGMJ7F8XY9LUc1%2F1s7LI%2Bk%2B5tXFrrcekHrPJTf3joYv4GuFTg5Cps%2FV8HjqMXBpOL8PrbjTWHksp09n5weE2QdSz6HDRZm8RAATNbnICdXw9KHe2Py0SoJ1XklW4WS%2BPXY8EtEisUySh9a%2B4UB%2BXr1EyNWH9Lev0WJIb1b4l3rFitoXmbCCSiYc%2F2FbKWjVHFV1wo%2B0ZsAbHgoWeLg29h7CAHvG3fwT7R1qtTLBLGNmtsLu4deEcJ6CmNfUsNNx0Blr8Ry9qWSxjia1Q2YXlemhcba7gHGy8Lk2KXByjiwybJWlwgUHiWFsVkK%2B4OInbzTvC3g9ex9zwLaSWNbOynMNFia9VJ0ZrsT7ADf45Dmfkr8UVMYl2l8GHhpEu2XzoDw%2F0QSeu9QD0neqgk9FFPawJgCKO030dLeGZFyYYCmCfGfeP8qiGQLGV8rXIjK2zX%2BJ1ZEvCQoo9WI50WKYRPYr5VG7naT5ROBGXhoYB4djlfANMOTrz8kGOqUBHFSzz4YfHpz%2FQnHlr5d1949yedjmcU5v4Nm%2FhlxcAB%2Bub0iOUgwRKeCEahsORvHxOPIV7H%2F9g24ylbRCrnoc3RRAaPvXw7r%2Bu%2B6blne73kilTdqL8ccSfWwX8xwmPF8%2FLdn6DofQe4VptO1jYcqrezC6Grrq%2F7AE%2B7Z2%2FMR%2FAquxj%2Bykn68tW%2BC%2FX%2BbgwJHp1KZ22%2Flwn8qckME8%2B6wXQ5anPgfA&X-Amz-Signature=19d3cb436dc5993765c6833081491d8ab5f07baab0a899545c5a783910fedaa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
