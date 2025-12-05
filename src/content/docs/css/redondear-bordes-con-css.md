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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YLDKN7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDpvz%2FzOgRLS6iCIA5QNfgx20X%2FWZwGIxyRnr08hpjzAiEAl37gMiHPdi3vXDH9XvOcbeaauacMC9hJN0IyBmA9Nj8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJAt3%2FcTp4Rsvd0dNircA%2Fzk%2FcuVv%2BqvZGYadBVjQ1kP%2FHcT35gWIrxvETzYeJ0cSv58EhtLhYpWIrslWK4D9f9N%2BDr8jZbDLsPnYYO4ir0gulPq%2B0N0E%2B2T5hQyrO4JpvE3xVz2DE80gjRJd8WHl%2FcGKDto0krMLV7KIoYV08oNZg7K%2BQEDdK7PEcfqC9hWLJkTi5oI0XpSe2V04%2B3npDDuyZZdkjAglF3jaUDqK%2BkzUTD7d7FEq%2BvuUfrnOCIJGqTUaNBx7FZZXsi5wQYukFeTnMlRn6ZDAjwyK3wCdJ%2F4pQy%2FZXaugzMU11WETmxmSDZZqDjX5CFGuFLC1pDxglFnQPJYIs8NNNynweOzKAuboKDNv0Ix55MqZQueInqieIXP4KZm7MT6WnZg3xrBof8rGMtYc6ZFkIN2Rvd7Q%2FDImOHtByQBg2Ut51gfyyRudleBzy%2B8t5axQWyBS1lWCHP2yeFpUaeRvT0c1xrKQlNUfJhKZVwQ6fgYNmXA4UFOyfFr4v0oLhgm3JvbXSrmuGPnl4qsZy3K0ix%2Bw081usjaDqH3nwYsweNcxh3p6EYc2J2D58ORcLZYpCBtyBsVqWZeC5LGdb14t11i4eIE0w1ykk9glyaZEoVYb0LIeU%2FGQEWKGyyTuY6DpaueMNOMyMkGOqUBz9kLMg9q0BgMHoodIx7YiSry0qxAs9ElxjjJwPWy4ZdRL3S6W%2BoQUQUIhOCDrBHpquTX%2BLi4XHvaBAGLa6IH2GrfGyLnap46xJDPMVpgO4nTBSmbK8M9cTG1KjI%2FoJLECD%2B7RqODoFmo77qScgmJaSVz5TnnEtoKVdLDPeXep6Ksw9EkjVOpe0S9Z1yHjM8XQXFr8d2LEwd22xso4ahBjgd2aFOh&X-Amz-Signature=347d77c4812ea496bd8a595dc2bfbb2077e12c1127907369c411eaa5d72c2840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662YLDKN7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFDpvz%2FzOgRLS6iCIA5QNfgx20X%2FWZwGIxyRnr08hpjzAiEAl37gMiHPdi3vXDH9XvOcbeaauacMC9hJN0IyBmA9Nj8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJAt3%2FcTp4Rsvd0dNircA%2Fzk%2FcuVv%2BqvZGYadBVjQ1kP%2FHcT35gWIrxvETzYeJ0cSv58EhtLhYpWIrslWK4D9f9N%2BDr8jZbDLsPnYYO4ir0gulPq%2B0N0E%2B2T5hQyrO4JpvE3xVz2DE80gjRJd8WHl%2FcGKDto0krMLV7KIoYV08oNZg7K%2BQEDdK7PEcfqC9hWLJkTi5oI0XpSe2V04%2B3npDDuyZZdkjAglF3jaUDqK%2BkzUTD7d7FEq%2BvuUfrnOCIJGqTUaNBx7FZZXsi5wQYukFeTnMlRn6ZDAjwyK3wCdJ%2F4pQy%2FZXaugzMU11WETmxmSDZZqDjX5CFGuFLC1pDxglFnQPJYIs8NNNynweOzKAuboKDNv0Ix55MqZQueInqieIXP4KZm7MT6WnZg3xrBof8rGMtYc6ZFkIN2Rvd7Q%2FDImOHtByQBg2Ut51gfyyRudleBzy%2B8t5axQWyBS1lWCHP2yeFpUaeRvT0c1xrKQlNUfJhKZVwQ6fgYNmXA4UFOyfFr4v0oLhgm3JvbXSrmuGPnl4qsZy3K0ix%2Bw081usjaDqH3nwYsweNcxh3p6EYc2J2D58ORcLZYpCBtyBsVqWZeC5LGdb14t11i4eIE0w1ykk9glyaZEoVYb0LIeU%2FGQEWKGyyTuY6DpaueMNOMyMkGOqUBz9kLMg9q0BgMHoodIx7YiSry0qxAs9ElxjjJwPWy4ZdRL3S6W%2BoQUQUIhOCDrBHpquTX%2BLi4XHvaBAGLa6IH2GrfGyLnap46xJDPMVpgO4nTBSmbK8M9cTG1KjI%2FoJLECD%2B7RqODoFmo77qScgmJaSVz5TnnEtoKVdLDPeXep6Ksw9EkjVOpe0S9Z1yHjM8XQXFr8d2LEwd22xso4ahBjgd2aFOh&X-Amz-Signature=5e33a7fe515a9bc48645b88dde64cc3dda8624666f40d60a9feaf79db70fade5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
