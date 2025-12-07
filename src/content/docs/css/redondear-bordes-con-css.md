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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7B6G5Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTF0mYT6JMAZRk4gDPS%2BjBlVZdeXX%2BGLu7QJFmmqZTXAiEAo2hsHCvAAUw8YMJ7hsUEVZu2IpAvVS7%2BmsYK1Yjll%2BYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB98nBOYcivgFqcB%2BircA18v%2BIHoKFizd7dV7rzz%2FZXfoambE%2BGYIWLpM7JPB1S1gwQDsCWnN41E0AsP79wAD4oYB%2BtYGjge5F83p%2BTWCOPBFC7nOVroq30bpx5RzTvDBa7ZOFiGHzmR47ASnUyxtuHu%2BenB%2Fyv1kdQZSxHNu7ilDEIePmu8CXbl4%2BvxDUspEBhnEkr7cjxZkaxYUQV03Vi5RHP916tAzfaUVU1%2BwvQ4NcKsHp2RPy4L7il6YNFm2GdkHbI6wO9hF2U9iCBpRIvHVc34P%2Faf%2FRbg4nvX2i%2BXR%2FtMxoIK80aC59Pr2mKvbrI9nMtcjFgoMO%2Fw8%2BIsXfdirJREdyn1OUFonrgbUjVd1zeCwGccRDr4u%2FjMHpLTHN1sw0PCsGRDficXW0dLFvhJqbz9hudpBdHj7po11iifwNRlQcxbRp71pAYveX7wVx4Z%2BAwCjbE%2B6L3fTUt5qQMxDonjcS5zANy2h1oVzHfGZCzui3DomtzX0UthfNkdJfkmZeWZHb3dlU4d3eFdT9S7x8EEQDczQ8y3GSeDuaHELp5aOYFMazPHqieDF93XpXDw99KNHQb0L0GouTpbKGpNZOIHdjUN50zEU9eGE4tcwWewWWfeGigkf%2FK%2B87JHqQCCny0VpjW2xQMUMLm81skGOqUB0Cw57aM%2FG3UJhvFEck1F4V2O%2BaIOwxqhMZQRBBOdcOlWUoR6KSmCbyYglLyoPmPYUF8F%2Fb%2BAAhcgSqtFe%2FkotfslsgqN2WJ9vBeohsTRd%2BljmaCcRcbjDWT9bBgff%2F2EKAGTZtMzRS9tVai2b%2FS%2Fo9V9DNf3zOkEMv51tnAy3bfInXUoREAINXc2vfDYlPE90S6nHHTi%2BbX6D6bvN%2F3bEAONhgej&X-Amz-Signature=79e912b1cd0580e68326c29260f0958b1c2ec325880dfda76da8490c3f5c240f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR7B6G5Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTF0mYT6JMAZRk4gDPS%2BjBlVZdeXX%2BGLu7QJFmmqZTXAiEAo2hsHCvAAUw8YMJ7hsUEVZu2IpAvVS7%2BmsYK1Yjll%2BYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB98nBOYcivgFqcB%2BircA18v%2BIHoKFizd7dV7rzz%2FZXfoambE%2BGYIWLpM7JPB1S1gwQDsCWnN41E0AsP79wAD4oYB%2BtYGjge5F83p%2BTWCOPBFC7nOVroq30bpx5RzTvDBa7ZOFiGHzmR47ASnUyxtuHu%2BenB%2Fyv1kdQZSxHNu7ilDEIePmu8CXbl4%2BvxDUspEBhnEkr7cjxZkaxYUQV03Vi5RHP916tAzfaUVU1%2BwvQ4NcKsHp2RPy4L7il6YNFm2GdkHbI6wO9hF2U9iCBpRIvHVc34P%2Faf%2FRbg4nvX2i%2BXR%2FtMxoIK80aC59Pr2mKvbrI9nMtcjFgoMO%2Fw8%2BIsXfdirJREdyn1OUFonrgbUjVd1zeCwGccRDr4u%2FjMHpLTHN1sw0PCsGRDficXW0dLFvhJqbz9hudpBdHj7po11iifwNRlQcxbRp71pAYveX7wVx4Z%2BAwCjbE%2B6L3fTUt5qQMxDonjcS5zANy2h1oVzHfGZCzui3DomtzX0UthfNkdJfkmZeWZHb3dlU4d3eFdT9S7x8EEQDczQ8y3GSeDuaHELp5aOYFMazPHqieDF93XpXDw99KNHQb0L0GouTpbKGpNZOIHdjUN50zEU9eGE4tcwWewWWfeGigkf%2FK%2B87JHqQCCny0VpjW2xQMUMLm81skGOqUB0Cw57aM%2FG3UJhvFEck1F4V2O%2BaIOwxqhMZQRBBOdcOlWUoR6KSmCbyYglLyoPmPYUF8F%2Fb%2BAAhcgSqtFe%2FkotfslsgqN2WJ9vBeohsTRd%2BljmaCcRcbjDWT9bBgff%2F2EKAGTZtMzRS9tVai2b%2FS%2Fo9V9DNf3zOkEMv51tnAy3bfInXUoREAINXc2vfDYlPE90S6nHHTi%2BbX6D6bvN%2F3bEAONhgej&X-Amz-Signature=4782afa55bc5aa637918bc75a5f8cdc2d299837860723ab2af895a548908ec65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
