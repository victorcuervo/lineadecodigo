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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5FFNYPV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbk1qXSPw76zQLKIuwA0vwzgRjiKqspPH0oP8CLgTt7AiEA1pjgYpTmrF6eVTYcnFRkWR85G1DU%2B6owXEFm1Pw1lrEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNudxHh6MKrER5ASNyrcA63%2BpbMgLjzbiGb4Ig%2BFJDQz1fUVZ%2FuKkvqp4ZvUmZHysKNQ6IHLO7aB%2F53wNBZrsxxRiirr2hh2FR7qPvOvVB5F3w0JI%2F96QTUEiHHFxEC8ym2PyMqjP0L4idAeQQnDGiUMSP7eeI6hmvZDJnqOnaRBsRSIRVx%2B%2BDxKi3Hp11A%2BMl6d1%2Bp6ou6Ro8IK7jbNSs7GdwL%2F3bWFesgjwY%2Fikt5LjENzd5R3Wnt41QIUnancGmBW7HEFGWylveZpHj88aqVL7o8WSN6eKPrnT%2FW0bz6TpcmmKaqMeGiZlWtwlCkpChKF3WndV0uQy05wyfEVw5EF2rkjdBRdlDXZMd%2BlcFViav1WxH%2B%2FxqvHmNqheZ1%2FZAG5jZVULWp1oZvL86MqzAzGMEBmP1gLT67QC1gMMucuIsqYpQ6tEs%2F0H7%2BspbmvsnBgs8zVhPgkIZOirXFvfR2eugpHg%2FEX9KUls%2BET7bzKawpfRavs62XRhcPTLBGrP3wB01snCXI82IzP8WtqF3ogbRHd3mFM%2Bm6D6%2FSSuzfrXG0vzbBYJj2qMNo4oRbcwyh7Z1VzZXMBsdF2OwA4LQs9pLfc1rvE3kOQSib87%2BW%2FRM1bb9%2Ff9BYfzmhFc65X%2FWMCNgd69vkV%2BrJQMI2F2MkGOqUBkq8m6UG7A4zmecJDkB3k6xhn1Q0Y0HcBAUc0t60tRIPObibFbAD7uBXLR6c4563V%2FPQONYqPZ%2FH5%2Fr8my4jpD%2BBwEKcz2%2F0QMmXd0g4D3q1reNQ6kvqKgf9z%2F5YXjk7R48APfxZA3bXPGWkInl0qfNT5iZoAL74G%2B%2FNIkO0Ofz1fQxHNWVx%2FVIk10ki8uqOLGpgDLLkh29DRZwqgp7Rn18t6yQYG&X-Amz-Signature=f20f768e76ccb1c656c690fdaf5ab11270e916413432fadc54ed5e624c5e8e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5FFNYPV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGbk1qXSPw76zQLKIuwA0vwzgRjiKqspPH0oP8CLgTt7AiEA1pjgYpTmrF6eVTYcnFRkWR85G1DU%2B6owXEFm1Pw1lrEqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNudxHh6MKrER5ASNyrcA63%2BpbMgLjzbiGb4Ig%2BFJDQz1fUVZ%2FuKkvqp4ZvUmZHysKNQ6IHLO7aB%2F53wNBZrsxxRiirr2hh2FR7qPvOvVB5F3w0JI%2F96QTUEiHHFxEC8ym2PyMqjP0L4idAeQQnDGiUMSP7eeI6hmvZDJnqOnaRBsRSIRVx%2B%2BDxKi3Hp11A%2BMl6d1%2Bp6ou6Ro8IK7jbNSs7GdwL%2F3bWFesgjwY%2Fikt5LjENzd5R3Wnt41QIUnancGmBW7HEFGWylveZpHj88aqVL7o8WSN6eKPrnT%2FW0bz6TpcmmKaqMeGiZlWtwlCkpChKF3WndV0uQy05wyfEVw5EF2rkjdBRdlDXZMd%2BlcFViav1WxH%2B%2FxqvHmNqheZ1%2FZAG5jZVULWp1oZvL86MqzAzGMEBmP1gLT67QC1gMMucuIsqYpQ6tEs%2F0H7%2BspbmvsnBgs8zVhPgkIZOirXFvfR2eugpHg%2FEX9KUls%2BET7bzKawpfRavs62XRhcPTLBGrP3wB01snCXI82IzP8WtqF3ogbRHd3mFM%2Bm6D6%2FSSuzfrXG0vzbBYJj2qMNo4oRbcwyh7Z1VzZXMBsdF2OwA4LQs9pLfc1rvE3kOQSib87%2BW%2FRM1bb9%2Ff9BYfzmhFc65X%2FWMCNgd69vkV%2BrJQMI2F2MkGOqUBkq8m6UG7A4zmecJDkB3k6xhn1Q0Y0HcBAUc0t60tRIPObibFbAD7uBXLR6c4563V%2FPQONYqPZ%2FH5%2Fr8my4jpD%2BBwEKcz2%2F0QMmXd0g4D3q1reNQ6kvqKgf9z%2F5YXjk7R48APfxZA3bXPGWkInl0qfNT5iZoAL74G%2B%2FNIkO0Ofz1fQxHNWVx%2FVIk10ki8uqOLGpgDLLkh29DRZwqgp7Rn18t6yQYG&X-Amz-Signature=43b6411656e1a14a05841999da98f6e2d3798bfe7a4ffb980b21db966098b0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
