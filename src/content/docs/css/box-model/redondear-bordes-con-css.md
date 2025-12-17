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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KZFKVJZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEafrfG55x6J%2FcY7H0iKEPt2KHNvadL62Do60FVkCf1jAiEA%2Bq7IwOx3YYS9J4X9dLMzK1sqayCWKNSc0UOOxnMDZZcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe5L2vX7CEZXBXlsCrcA4mQ8clHHGXVcwxMigQIaSuNnr5%2Fd7bi%2Fas%2B8tP8A%2FIfFAUoqC7Wi0ddQ6GoVUszSOpfCGRnVnTVuq5Ykqt3hy4VDaSUV8VcHwD0xIKoB33wk75IyLtgWWxPAw9FapBMW9NB5SZ3o1REPFWKl6ufinlmDzsvKjbFMtZ7HbtY7WSVmorX63RoHaSdDjHBAzQSaWroiTcIX1tcWCisfFpzfJ9y2x5oJCN2M0Ft%2FbI%2Fl0qAYdafovp27OVUAxaRxQ4qgLp7YrY%2FB5MWwmWjsOK0NTsUil%2FyyzmLGxbZMM8778joYHbxTm1HQ%2FdsqyAhdIdxV4IKVJvJuugEJGMGeLpClbfeMhakuUYZXz022Kt5uucznPxX20Nvv4Ftwh3luUaUOp%2F%2F5BoycNVOLs23NbYgQu8Ci8DkqvQzJcKD9xplqOODwJ7Le6rvYlepFRJD4ymE5he6KQHXGFFyLvysa14bXIs0jN6XRN%2Bw2o7%2FUTdyUDqKAmh7OF8swf%2BDqgsqlkGQ0mF7%2FYlv%2BXzhc69Iw%2FnylWplbfH27kPmgLA1Q45hR7r8gaq7iD16XG%2F90bFQIVGMq5plpDYRCCEoTvDF9djc9jT%2FqK7cpgds%2B7E%2BW3ifQYoyWVgjpoP5NoQC1lIVMNSBi8oGOqUBu%2F24%2BFmnAK6dkn16pGfO4IXOCgQMwuhkH1N%2BkIGp6FD8gSq6bPMitQFyolm%2Bz8uW34Edwj0OQ8iq7SJFDwMmgyKQ6IzwbgOaGAF7fJx0FkmJUCaOKd8k9I7JEHnZQKvGi%2BUB6h2hF%2BY5Oq9Hsn4q5d6ABJTzFh8%2F2PTjCX%2BSit70MoY9AEqOw6E1yWDjxn2wH3g0hYbbfeOkyBYPjTaXLP0bVa08&X-Amz-Signature=6064f4ad141240d8fb1aabf8a91abf8200ff9fff84792f265b2641cccd060ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KZFKVJZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEafrfG55x6J%2FcY7H0iKEPt2KHNvadL62Do60FVkCf1jAiEA%2Bq7IwOx3YYS9J4X9dLMzK1sqayCWKNSc0UOOxnMDZZcqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNe5L2vX7CEZXBXlsCrcA4mQ8clHHGXVcwxMigQIaSuNnr5%2Fd7bi%2Fas%2B8tP8A%2FIfFAUoqC7Wi0ddQ6GoVUszSOpfCGRnVnTVuq5Ykqt3hy4VDaSUV8VcHwD0xIKoB33wk75IyLtgWWxPAw9FapBMW9NB5SZ3o1REPFWKl6ufinlmDzsvKjbFMtZ7HbtY7WSVmorX63RoHaSdDjHBAzQSaWroiTcIX1tcWCisfFpzfJ9y2x5oJCN2M0Ft%2FbI%2Fl0qAYdafovp27OVUAxaRxQ4qgLp7YrY%2FB5MWwmWjsOK0NTsUil%2FyyzmLGxbZMM8778joYHbxTm1HQ%2FdsqyAhdIdxV4IKVJvJuugEJGMGeLpClbfeMhakuUYZXz022Kt5uucznPxX20Nvv4Ftwh3luUaUOp%2F%2F5BoycNVOLs23NbYgQu8Ci8DkqvQzJcKD9xplqOODwJ7Le6rvYlepFRJD4ymE5he6KQHXGFFyLvysa14bXIs0jN6XRN%2Bw2o7%2FUTdyUDqKAmh7OF8swf%2BDqgsqlkGQ0mF7%2FYlv%2BXzhc69Iw%2FnylWplbfH27kPmgLA1Q45hR7r8gaq7iD16XG%2F90bFQIVGMq5plpDYRCCEoTvDF9djc9jT%2FqK7cpgds%2B7E%2BW3ifQYoyWVgjpoP5NoQC1lIVMNSBi8oGOqUBu%2F24%2BFmnAK6dkn16pGfO4IXOCgQMwuhkH1N%2BkIGp6FD8gSq6bPMitQFyolm%2Bz8uW34Edwj0OQ8iq7SJFDwMmgyKQ6IzwbgOaGAF7fJx0FkmJUCaOKd8k9I7JEHnZQKvGi%2BUB6h2hF%2BY5Oq9Hsn4q5d6ABJTzFh8%2F2PTjCX%2BSit70MoY9AEqOw6E1yWDjxn2wH3g0hYbbfeOkyBYPjTaXLP0bVa08&X-Amz-Signature=ed7e42c3b031822267f9dabc13945beaaedc4bfa82bf901e8c37344308ec733c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
