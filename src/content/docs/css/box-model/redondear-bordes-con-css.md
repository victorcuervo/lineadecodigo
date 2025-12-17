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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3I5MHF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQtzjua%2B7f0TCy3ErYRBRKXkjJThV8S%2FE7MfwDg5XExwIgZCJzMwxSycCIH7p6kwRD4A1%2BFmnxByKo2hXK5%2F70akMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLThtD6TspDExs7o6ircA6a1%2FCs6yQSyqEiYLyrqM310vM9aq4Ur3kvrQakxf5hikjIS65zpNaDbJFYBRLy18iza4vbnI9Mnx1n4MbuQe0pBIYL9OVV%2BmNmRYjYu7Grckjtn5SkHB7oLaKkQOQgIavIxJrcKW7pO%2BYFfeHD1FPbqgQ7aoAXA38dIEiE8c0pbCKBxCsJw%2FMOX9Zwjfbu%2FGKuE6BBOm%2FnrrOsrCu4NWI8D7rS0tVUey0w7qT9px0PmV234ocrlwh%2FjJe3st1USSiwbpF9z%2FD3cMxPQlVjre4gNc7Y9KTKXzRNl8TnnIDws92zhobfrXC4UnT782P7gFOE7Vhoh6F9WPZknssqT5n93VHXFbrnG5GjB5p431ctR7Gl%2BozpiMm65xdU%2FM6ZrzOWl5BC8SjuyuUaqRRNiW4hCCMjIilbA6ZZzqdZ4rovruT2o%2FaiUgXft02DApMtWOr%2F%2BJzOHk55COroaAbOOKIbigBimcCBnzUEwSQ49mif1dC1r2pHp0gw7pxMSwNVC97ivY3jDLD0pIif5bTbEYy5a5IB7tUOFf1n1xnBFvxVYDjhOomLr5%2BvtcAggGIMLFeJP5dIqtdGekWbBqiYALGnvEohdMifYHW9SwUSP20BzAfJZJxpW8FZXVtS5MLODicoGOqUBYze703lvs25yw5ztrNLDz01OxcqncBnIa%2FCQNhu2w1Y5gvTFTm6jeeaAOEucQ4ypYRLytdIYHeVtZZ%2FiSA3CIQSrF%2BNlUaguLftUfJJ%2FEw5urU6dpyhFlbmMQsyJ3aLmBKrINh2%2BkaqDY%2FICM8jYu9IoLCCd1qp1PXJbwgXtjn3vCwhREWbon4sSr39LesQno5fexCqKenSUz22mU324KxbJia65&X-Amz-Signature=fdf3f6f6306d80d726def63b4d078f3042570de9002ddc178638058465eb9f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ3I5MHF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQtzjua%2B7f0TCy3ErYRBRKXkjJThV8S%2FE7MfwDg5XExwIgZCJzMwxSycCIH7p6kwRD4A1%2BFmnxByKo2hXK5%2F70akMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLThtD6TspDExs7o6ircA6a1%2FCs6yQSyqEiYLyrqM310vM9aq4Ur3kvrQakxf5hikjIS65zpNaDbJFYBRLy18iza4vbnI9Mnx1n4MbuQe0pBIYL9OVV%2BmNmRYjYu7Grckjtn5SkHB7oLaKkQOQgIavIxJrcKW7pO%2BYFfeHD1FPbqgQ7aoAXA38dIEiE8c0pbCKBxCsJw%2FMOX9Zwjfbu%2FGKuE6BBOm%2FnrrOsrCu4NWI8D7rS0tVUey0w7qT9px0PmV234ocrlwh%2FjJe3st1USSiwbpF9z%2FD3cMxPQlVjre4gNc7Y9KTKXzRNl8TnnIDws92zhobfrXC4UnT782P7gFOE7Vhoh6F9WPZknssqT5n93VHXFbrnG5GjB5p431ctR7Gl%2BozpiMm65xdU%2FM6ZrzOWl5BC8SjuyuUaqRRNiW4hCCMjIilbA6ZZzqdZ4rovruT2o%2FaiUgXft02DApMtWOr%2F%2BJzOHk55COroaAbOOKIbigBimcCBnzUEwSQ49mif1dC1r2pHp0gw7pxMSwNVC97ivY3jDLD0pIif5bTbEYy5a5IB7tUOFf1n1xnBFvxVYDjhOomLr5%2BvtcAggGIMLFeJP5dIqtdGekWbBqiYALGnvEohdMifYHW9SwUSP20BzAfJZJxpW8FZXVtS5MLODicoGOqUBYze703lvs25yw5ztrNLDz01OxcqncBnIa%2FCQNhu2w1Y5gvTFTm6jeeaAOEucQ4ypYRLytdIYHeVtZZ%2FiSA3CIQSrF%2BNlUaguLftUfJJ%2FEw5urU6dpyhFlbmMQsyJ3aLmBKrINh2%2BkaqDY%2FICM8jYu9IoLCCd1qp1PXJbwgXtjn3vCwhREWbon4sSr39LesQno5fexCqKenSUz22mU324KxbJia65&X-Amz-Signature=6d49e2c46c7e7ebf33555d919477552a3c5a4a70bc8c754b8198cca196b7f2e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
