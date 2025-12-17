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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF3L7VK3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq7XBIKUH86AVp%2BpmSmoTAQ%2BEgH3YrBNOWSaOjeFkIjAiEAknqEukCcawsrDWU14PsAT%2BY%2FKrJAcdS2w1tN2%2F%2BK1Nsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN%2Bt05GTjMafpyGeZyrcA3G2NG9XQbybvGzhm5vwadCyjPvtD1A%2B3hVLcZzCIgQI3CK5uwfgym2FXaNqC5Mf3MxgB71ajUBf6C0EHz5h%2B%2FdcdZzOKnu8b%2BRWGyZxvc6bmqfAr2aHLvTh7Fc2y1WpKbXJ7ihxw19ozSo0RuHHMs8hYc6faESfEoVnGDu7yobv3IBul39%2FeRJl%2FT3WydBR0wJWQr97WP%2FqiQki1s2mTFJIzbGW%2FLYTYi8EJYyRr7vhOQuBpu1Sqb9QcasP9dYDcm%2BY47RQhN1dg%2BWPwBP4yV0Hb4jTr618TMmPwWVUBTEEA8oorGVy8bOr2nWU7L8%2F7VoKnrj4qcmSOi9YuVBkq963qUwMlduRS7MOWdpVNj2woCjhBNdH9gQgs7Q0Cg0sOXt2BWk4ng4TxmKs8upWEEVk3WAfyZHPQP8%2FcWc9vh7GviU6V4yUJPWCT0q0Ywu7dPgJkXvTZAVUY7SQ1VBgtz8zJksOOlXks49LFkcHAyuI%2BdPr1ZfrBb5qWzWby8JwI%2B168gadyofVIg1J4OymJL%2BesEzIUbH1XubN%2FMljwwi9F%2BwOmDy%2BXwOcQgDMri1raK9IYYY4SbQ8tTWzsv%2BGyOWOsAk28CYWMk9JsbbR5GZakcktjNAKFbbg77TeMO7vicoGOqUBo6wJFFfSco319T0WQUm8UL6R3Gs3hoOepsL9PkuT7vsdN7aVJuRtrdEVE51CtQP37GkDA6thplSkGc3R0D4EqYb747V%2B%2Bwc1dQVja3mkMxkUDuAVvYEKJe%2FUvMw9zGXy9u91WeZBgLr%2Fv8Wxh72q1bx88c%2FJ7rQK0gIf0IcA2hN6NUJ1KXeaD41%2B1A3vEwb9%2B92DKyMgxsRXcMHZDCuctqA%2B0z4k&X-Amz-Signature=31f59a20bfd673928a309f7db37e1549e8fb6f783f13a29af6bd17a583f43bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF3L7VK3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBq7XBIKUH86AVp%2BpmSmoTAQ%2BEgH3YrBNOWSaOjeFkIjAiEAknqEukCcawsrDWU14PsAT%2BY%2FKrJAcdS2w1tN2%2F%2BK1Nsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN%2Bt05GTjMafpyGeZyrcA3G2NG9XQbybvGzhm5vwadCyjPvtD1A%2B3hVLcZzCIgQI3CK5uwfgym2FXaNqC5Mf3MxgB71ajUBf6C0EHz5h%2B%2FdcdZzOKnu8b%2BRWGyZxvc6bmqfAr2aHLvTh7Fc2y1WpKbXJ7ihxw19ozSo0RuHHMs8hYc6faESfEoVnGDu7yobv3IBul39%2FeRJl%2FT3WydBR0wJWQr97WP%2FqiQki1s2mTFJIzbGW%2FLYTYi8EJYyRr7vhOQuBpu1Sqb9QcasP9dYDcm%2BY47RQhN1dg%2BWPwBP4yV0Hb4jTr618TMmPwWVUBTEEA8oorGVy8bOr2nWU7L8%2F7VoKnrj4qcmSOi9YuVBkq963qUwMlduRS7MOWdpVNj2woCjhBNdH9gQgs7Q0Cg0sOXt2BWk4ng4TxmKs8upWEEVk3WAfyZHPQP8%2FcWc9vh7GviU6V4yUJPWCT0q0Ywu7dPgJkXvTZAVUY7SQ1VBgtz8zJksOOlXks49LFkcHAyuI%2BdPr1ZfrBb5qWzWby8JwI%2B168gadyofVIg1J4OymJL%2BesEzIUbH1XubN%2FMljwwi9F%2BwOmDy%2BXwOcQgDMri1raK9IYYY4SbQ8tTWzsv%2BGyOWOsAk28CYWMk9JsbbR5GZakcktjNAKFbbg77TeMO7vicoGOqUBo6wJFFfSco319T0WQUm8UL6R3Gs3hoOepsL9PkuT7vsdN7aVJuRtrdEVE51CtQP37GkDA6thplSkGc3R0D4EqYb747V%2B%2Bwc1dQVja3mkMxkUDuAVvYEKJe%2FUvMw9zGXy9u91WeZBgLr%2Fv8Wxh72q1bx88c%2FJ7rQK0gIf0IcA2hN6NUJ1KXeaD41%2B1A3vEwb9%2B92DKyMgxsRXcMHZDCuctqA%2B0z4k&X-Amz-Signature=3ae96d0db9a402a876e3d3aae445bd7819b6dc398aec24403f8e69d460aaceed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
