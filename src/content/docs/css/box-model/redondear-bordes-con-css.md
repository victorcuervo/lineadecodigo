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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VS3JJOL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu6GwjHCN1iKYQjIMyqmIuH6UGPM4iB6nNPyK1exWWxAiBGFzC%2BPSDR5rSjt5HZlilfOdd%2Fm5YzFKm4Fcvh4ra8ICr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMxgQ8jePmmaYPOoNEKtwDgjeyO7%2BWbzDWHiVm3axBCMB9ueB2vPL4VaBmtBShK1BzsKV5keVvgY0CtUJekIxcXuHJKDgVnfoQWGYsGlTMI0k9%2FmirDcs2RTQZi5%2B7kJAfYNKHlmRfh6nOtMNEMINxMRrXyvJQ9UUzal56MGcG5ijSuDY3btVoGrRSHQUBiMSUr%2B76UCVMg4MyTfP7p%2F9Pe95AklUJm7zrMxFbHqZ1DhHf6ZSgK4%2BudvTB4ssCLKOpCuUVhuGFOamx0aHZSm5oEX1EIghuI9KQFfi0TFJonM7SeF7YijtRX6hpixY0JV6rfJWSpp76IT%2FOTbDaiOaZI6Q4gYJbmRxYJhF5yEChR39GSzO7gZw%2FKzNoEhmQWXOFykkmcmBmYv38AcPdS5KIStL9%2BQ6ksa6asNkyLEaxSIc%2BdtrKQ0ACWdOBgI0a8d08nXXwjKokvzmIbDtvgdYP%2Bzj8Q%2FFhe2pVxNnyjj4gSS2XTPuhEx2t5pD%2BeBoIuGgweJAEtQirLAp8Zf0tkbnuTJa5rRije2XWioOGKcUyoVzMQt%2BQF42MS%2FHsMLixQjM0oC2hEkGJvHIruHxOEWnaO0vPKFUXgggGXKGrPMY0xdamyAJTfbgwZ0b6%2Fofhsv6LCY1v0jBVakgWol8wls6IygY6pgHvRAaJtgsDUw18zIV1%2FElDYVeLdbVCblpNiu9Hk%2B1p1QmXBS7LuvnaMnM8eOfyA3F9qCNx7oqYOgwcyiHK6zMlU3yI9ov%2F9AId3evaQgo1Eh72owvCE3Vw%2BwmBcjKENa4%2Fn2JYykm9UpYzNkHrZVBCdG%2B97kNEvP7dGymMV9DWbcTb%2FSuALU9VlVPS7p%2FLaxyVdEbljIRBOfC21wJbyluNCt2s%2BQkW&X-Amz-Signature=ae05d03b620dc98c4f10682bfdbd2967b7745a1ab28f53579945af65e489e233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VS3JJOL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu6GwjHCN1iKYQjIMyqmIuH6UGPM4iB6nNPyK1exWWxAiBGFzC%2BPSDR5rSjt5HZlilfOdd%2Fm5YzFKm4Fcvh4ra8ICr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMxgQ8jePmmaYPOoNEKtwDgjeyO7%2BWbzDWHiVm3axBCMB9ueB2vPL4VaBmtBShK1BzsKV5keVvgY0CtUJekIxcXuHJKDgVnfoQWGYsGlTMI0k9%2FmirDcs2RTQZi5%2B7kJAfYNKHlmRfh6nOtMNEMINxMRrXyvJQ9UUzal56MGcG5ijSuDY3btVoGrRSHQUBiMSUr%2B76UCVMg4MyTfP7p%2F9Pe95AklUJm7zrMxFbHqZ1DhHf6ZSgK4%2BudvTB4ssCLKOpCuUVhuGFOamx0aHZSm5oEX1EIghuI9KQFfi0TFJonM7SeF7YijtRX6hpixY0JV6rfJWSpp76IT%2FOTbDaiOaZI6Q4gYJbmRxYJhF5yEChR39GSzO7gZw%2FKzNoEhmQWXOFykkmcmBmYv38AcPdS5KIStL9%2BQ6ksa6asNkyLEaxSIc%2BdtrKQ0ACWdOBgI0a8d08nXXwjKokvzmIbDtvgdYP%2Bzj8Q%2FFhe2pVxNnyjj4gSS2XTPuhEx2t5pD%2BeBoIuGgweJAEtQirLAp8Zf0tkbnuTJa5rRije2XWioOGKcUyoVzMQt%2BQF42MS%2FHsMLixQjM0oC2hEkGJvHIruHxOEWnaO0vPKFUXgggGXKGrPMY0xdamyAJTfbgwZ0b6%2Fofhsv6LCY1v0jBVakgWol8wls6IygY6pgHvRAaJtgsDUw18zIV1%2FElDYVeLdbVCblpNiu9Hk%2B1p1QmXBS7LuvnaMnM8eOfyA3F9qCNx7oqYOgwcyiHK6zMlU3yI9ov%2F9AId3evaQgo1Eh72owvCE3Vw%2BwmBcjKENa4%2Fn2JYykm9UpYzNkHrZVBCdG%2B97kNEvP7dGymMV9DWbcTb%2FSuALU9VlVPS7p%2FLaxyVdEbljIRBOfC21wJbyluNCt2s%2BQkW&X-Amz-Signature=8ee19163643926807e2bc0a5cbd76ddc85121a2df7a537964dd58493bded3b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
