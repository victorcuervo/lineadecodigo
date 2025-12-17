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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOX7TFUN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmX79AQAVsK4ufi2fsyj18bapHioGNKoY%2FnN6xh2oF6QIgeyAE2xOMWUGrG9SxxGhl%2FiYVZ4FmjzRw6rFgtd3FKDoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMDHe0hFt52Iz2Y5CrcA6cask8A9C2g71I1GyzOtRiOU9S6KRN56fWnKxO0ty5H3yxal542fEfTgDhDZT3UEqOYQrOBm5945YaGToGimj7V88%2BURQeZGLC482OIIETbQWutxn1My9H0OJbHF3zl5hsbEWtR7K7b0ZRY80wuuUtgjtMPonE%2FVPIXh%2BlwTg8oeIXDNTZegJ7hNRfORvI8LuU%2BvGtk57AHG2a5HKKKZ0%2BFRihHOP1SErmF9qgy5poAI7oQ4DauhBdFJ6GGELdb9XLiCVRTP%2F88Rq6BEjhnZDN%2BrSIPq5wQLcJ2szg4CjEgaYuOMesZ8uvimTA1YgtFnT2ex7K%2F0CZldlk4B51%2B%2BZFBgh%2F%2FUJSRdhb%2BuxAOPk2dLnL0nb2icdGfXLFV1LmWqRjs0mZOkJBLcNSR9eLuoqDgy2VGwU5iN%2BjU2Ha%2Fv1Rkl%2BwNFbA4CNRb2reg7jboyFqWmUcTxfPqfwj9mLCSEw%2FsrvOBgcAJDuIwyJ7E8U7ywijwpu9bWJqjg7myLHGK%2BMW3n5TELv7i3xH2OSHRiQUK3wEhGYwiQy3KXd7In5n2GPjFPhQm9R0%2B1CcOuRHL3vnFnzWH%2FQXspUAJXWFjfkdfrURF7VIzxZ5hAYTEy4kW0vbc1YnigiJo1WXXMP6tjMoGOqUBKW4M6%2FQSDKMf3G00%2BZg1k8pzFcbHEXoYE6xouPMMISKorniQrTizn%2BQC9nhsr%2BkzL61cECFDEopAUhymaiuuZCFCOD3AepFRmjpq7e0M8T4F4%2BhESUNFU%2BJGJZqAB7MkwqW%2FQk2iQMfEdh71UQX4ps3UAVQuoHrbBjHRjcNDBWJs%2F6wjrqcQCE75yzD%2B%2Fr3y0DiPcHYksqcQaK8xVwMUh0GuBVxP&X-Amz-Signature=6483720e9f8a1edea461d4bdc1babe6d0ef67d6a4d5aa8d84be5b0ec16f9af16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOX7TFUN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmX79AQAVsK4ufi2fsyj18bapHioGNKoY%2FnN6xh2oF6QIgeyAE2xOMWUGrG9SxxGhl%2FiYVZ4FmjzRw6rFgtd3FKDoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNMDHe0hFt52Iz2Y5CrcA6cask8A9C2g71I1GyzOtRiOU9S6KRN56fWnKxO0ty5H3yxal542fEfTgDhDZT3UEqOYQrOBm5945YaGToGimj7V88%2BURQeZGLC482OIIETbQWutxn1My9H0OJbHF3zl5hsbEWtR7K7b0ZRY80wuuUtgjtMPonE%2FVPIXh%2BlwTg8oeIXDNTZegJ7hNRfORvI8LuU%2BvGtk57AHG2a5HKKKZ0%2BFRihHOP1SErmF9qgy5poAI7oQ4DauhBdFJ6GGELdb9XLiCVRTP%2F88Rq6BEjhnZDN%2BrSIPq5wQLcJ2szg4CjEgaYuOMesZ8uvimTA1YgtFnT2ex7K%2F0CZldlk4B51%2B%2BZFBgh%2F%2FUJSRdhb%2BuxAOPk2dLnL0nb2icdGfXLFV1LmWqRjs0mZOkJBLcNSR9eLuoqDgy2VGwU5iN%2BjU2Ha%2Fv1Rkl%2BwNFbA4CNRb2reg7jboyFqWmUcTxfPqfwj9mLCSEw%2FsrvOBgcAJDuIwyJ7E8U7ywijwpu9bWJqjg7myLHGK%2BMW3n5TELv7i3xH2OSHRiQUK3wEhGYwiQy3KXd7In5n2GPjFPhQm9R0%2B1CcOuRHL3vnFnzWH%2FQXspUAJXWFjfkdfrURF7VIzxZ5hAYTEy4kW0vbc1YnigiJo1WXXMP6tjMoGOqUBKW4M6%2FQSDKMf3G00%2BZg1k8pzFcbHEXoYE6xouPMMISKorniQrTizn%2BQC9nhsr%2BkzL61cECFDEopAUhymaiuuZCFCOD3AepFRmjpq7e0M8T4F4%2BhESUNFU%2BJGJZqAB7MkwqW%2FQk2iQMfEdh71UQX4ps3UAVQuoHrbBjHRjcNDBWJs%2F6wjrqcQCE75yzD%2B%2Fr3y0DiPcHYksqcQaK8xVwMUh0GuBVxP&X-Amz-Signature=22807b6c924eb1588b5b0b10151d5600b4fc3889d194ea23db0db7b95c646297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
