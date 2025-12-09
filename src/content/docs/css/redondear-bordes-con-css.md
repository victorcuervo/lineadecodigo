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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ELV7BIS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKWebyFKeG9cAX88dfAKQtdNddNwKlX1UwFyUdumPfIAiBrmv9QQdP44F9lkpaP76lvUCygwHBFi27JzxcSZzPtDCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxfrQmICTbeW7JIUnKtwDscRzouVQRhIh0m%2FrckeNuDfuct%2BXeYDyqhG2O8Ew65Lf3Pp95MJ22nWqT3%2FeEq13%2BlTVoimNWdQlnPyrlK5zQ1l%2BMopui2JRvQzcEmhMWLrYwT8Ysco1AtK0jAZ1SJ9UHFD7JDpi5PAJDdUtaDYUY66W%2B%2BQQDzZc6Hf88zq9FGFaxRaWlnBHPRYEc7k%2Bcx%2BksG3bwYCw3arAzWY%2FR7MvctbOkWuM2ORh4hGN1yltqN%2FZZRk5B8gkAcvYzf9AURyjMkogftMUFQpk1ilf5TyLN2u4iJt670iQZMvfgc4IHIz1v32R8tMIBdrDvl%2B0PWqcTRxgH0J7krTNXpC8mo%2Fr7OrnZaDD2w2kUotidgyyHsZHTUwsLnT3m6%2FOH9FDtVoQ6DvW6AhlU9XKorN%2BOlE5ugwHNy9Wzt%2FBjOYT1JDdLknk4kWwc9jqupzg6nqh%2BMnFClIZi9muazn2BgEnRU4e99TDewJ2ausUpIfwMW2T3sCUg05GOrSmbP65rBxr2xdfqTHYHqFym9v%2FpMQfpG0U75BwXGyCVNDF6Vviedc3CPlrCoR%2Bs5Sf4hpFkOBo92fFsnbvlqCbkeBvtjBdrc4lMrHQZ989xMugN7XVzgxHoMuaAVBOsENV8kxTSiAwp8LdyQY6pgFChlSFe7H9xkN15YJSEgAukBpjzf36wuCE5Su767sdOT5%2F%2B4dql6uowAfVXdsC%2Fbis%2F3boA%2FtCnolHTNKOX%2BMhzuDczmMKXS3IFNnRn%2FJJWVvXqySwbHnvvxv2nPz%2FQZkTaXc2s00U2B400BQv3OjivReh8C8HC%2BbFP3EytyXevPd1DUSWDUrHBtUG%2B%2FuSyUm5%2B3uFIhTe7lhOFQAPOf2U0WKqZRWi&X-Amz-Signature=9cd7b170e4d088c0e938dac43fa0d34aac22d0a34e1c542791283295bc007f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ELV7BIS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAKWebyFKeG9cAX88dfAKQtdNddNwKlX1UwFyUdumPfIAiBrmv9QQdP44F9lkpaP76lvUCygwHBFi27JzxcSZzPtDCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxfrQmICTbeW7JIUnKtwDscRzouVQRhIh0m%2FrckeNuDfuct%2BXeYDyqhG2O8Ew65Lf3Pp95MJ22nWqT3%2FeEq13%2BlTVoimNWdQlnPyrlK5zQ1l%2BMopui2JRvQzcEmhMWLrYwT8Ysco1AtK0jAZ1SJ9UHFD7JDpi5PAJDdUtaDYUY66W%2B%2BQQDzZc6Hf88zq9FGFaxRaWlnBHPRYEc7k%2Bcx%2BksG3bwYCw3arAzWY%2FR7MvctbOkWuM2ORh4hGN1yltqN%2FZZRk5B8gkAcvYzf9AURyjMkogftMUFQpk1ilf5TyLN2u4iJt670iQZMvfgc4IHIz1v32R8tMIBdrDvl%2B0PWqcTRxgH0J7krTNXpC8mo%2Fr7OrnZaDD2w2kUotidgyyHsZHTUwsLnT3m6%2FOH9FDtVoQ6DvW6AhlU9XKorN%2BOlE5ugwHNy9Wzt%2FBjOYT1JDdLknk4kWwc9jqupzg6nqh%2BMnFClIZi9muazn2BgEnRU4e99TDewJ2ausUpIfwMW2T3sCUg05GOrSmbP65rBxr2xdfqTHYHqFym9v%2FpMQfpG0U75BwXGyCVNDF6Vviedc3CPlrCoR%2Bs5Sf4hpFkOBo92fFsnbvlqCbkeBvtjBdrc4lMrHQZ989xMugN7XVzgxHoMuaAVBOsENV8kxTSiAwp8LdyQY6pgFChlSFe7H9xkN15YJSEgAukBpjzf36wuCE5Su767sdOT5%2F%2B4dql6uowAfVXdsC%2Fbis%2F3boA%2FtCnolHTNKOX%2BMhzuDczmMKXS3IFNnRn%2FJJWVvXqySwbHnvvxv2nPz%2FQZkTaXc2s00U2B400BQv3OjivReh8C8HC%2BbFP3EytyXevPd1DUSWDUrHBtUG%2B%2FuSyUm5%2B3uFIhTe7lhOFQAPOf2U0WKqZRWi&X-Amz-Signature=6036b41bbe6d49b5f7c01ecc5e907a578284c3e1da842e5025f4c4b24136498b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
