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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF2T37DQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfp5ii4feISlvwnQXCjg4MuPmZSsbr50RWxdZ5UkHWYAIgQE2Z4Uf475RiD%2FQL5X9TTOJFjQxU%2FQNOfTvx9va6BoIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMErcuh7WPdYQLGqVCrcAz%2FTkmsv1QUxlrYgDaeMizrcVRRQJ0nyeO2ucpGll66jyj8GSpA109PmuBdxhVOo66EADr921PO1fHYH7uz9xFnwFjMop833bSw2twcIs5eqJNqLnFM%2FtpH8oTRaIAUpKG8SN4I%2BEdTvQImcwENcfpb0q8zsHk3oyZq2MGZ4MkISzKDeNp67i87qxw03DmNC8XrNXhb%2Fvkyk%2FfqWFhLBMtwy2m0PR7kmTPpKoX2lzOXihljOLiwo6iBVsrJWfMQxp0HwSmEVKzfSQ4Y3cu3Hh6DZyy%2FHO0x%2B%2FxtAvTfhaayYvxh7ClXqXIq8EO5k0Jzs3EwE9DkUsHZ6hyttizF4uevJM5h1qCE3dxyPOq4vDSWMNQL6FAQHBdyHiZLykVGzuO7yv7zJ4H%2BuNNoj5spFfGC%2FH1AOqHe4K63QyJX53mDlfRgfNkYkqDdJClk43hfNv6YnJE%2BUq079w0YIqcxNZHTVD1STw3sEXVrB5UPf4HPBzDMH22krUf8ZpWjNElrPpD6khCliuD9lFbs2h9amPfkX4eYr8j5P2GWhE2jVXyZoYlds1gI4d%2BlVCfIIUdO7UG1S8FvQ7v6W0gGU0Zyiu01DkjfgCDqdsx25%2FwJzn%2Bg1Dgfo%2FTA9A0kC89TqMKufi8oGOqUBs55v8QmfhGIHq6Zb22U0TpRskF5zq3sP3Z2xzMFoRoFgoxxMfLFaFc6YkY64OusWlJocxIiTsLyJNK%2BWoGC1sTkAJuWPQB1medNb1GFKwJCLKc8x8kjEpnIMfd0pLKnJZOugrnpaZvPe5sZoTbKb4igeZ84xvHJ3bBaYbOJw2VV3eo2P%2BNKEiLMArzfh9jqY6tkDDeTio9GGnogTbCKinXmP7%2Fol&X-Amz-Signature=760a4d8be80b2801f436f51cbab1b9b02a21ebb752dd71c2962a431f368b3f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF2T37DQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfp5ii4feISlvwnQXCjg4MuPmZSsbr50RWxdZ5UkHWYAIgQE2Z4Uf475RiD%2FQL5X9TTOJFjQxU%2FQNOfTvx9va6BoIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMErcuh7WPdYQLGqVCrcAz%2FTkmsv1QUxlrYgDaeMizrcVRRQJ0nyeO2ucpGll66jyj8GSpA109PmuBdxhVOo66EADr921PO1fHYH7uz9xFnwFjMop833bSw2twcIs5eqJNqLnFM%2FtpH8oTRaIAUpKG8SN4I%2BEdTvQImcwENcfpb0q8zsHk3oyZq2MGZ4MkISzKDeNp67i87qxw03DmNC8XrNXhb%2Fvkyk%2FfqWFhLBMtwy2m0PR7kmTPpKoX2lzOXihljOLiwo6iBVsrJWfMQxp0HwSmEVKzfSQ4Y3cu3Hh6DZyy%2FHO0x%2B%2FxtAvTfhaayYvxh7ClXqXIq8EO5k0Jzs3EwE9DkUsHZ6hyttizF4uevJM5h1qCE3dxyPOq4vDSWMNQL6FAQHBdyHiZLykVGzuO7yv7zJ4H%2BuNNoj5spFfGC%2FH1AOqHe4K63QyJX53mDlfRgfNkYkqDdJClk43hfNv6YnJE%2BUq079w0YIqcxNZHTVD1STw3sEXVrB5UPf4HPBzDMH22krUf8ZpWjNElrPpD6khCliuD9lFbs2h9amPfkX4eYr8j5P2GWhE2jVXyZoYlds1gI4d%2BlVCfIIUdO7UG1S8FvQ7v6W0gGU0Zyiu01DkjfgCDqdsx25%2FwJzn%2Bg1Dgfo%2FTA9A0kC89TqMKufi8oGOqUBs55v8QmfhGIHq6Zb22U0TpRskF5zq3sP3Z2xzMFoRoFgoxxMfLFaFc6YkY64OusWlJocxIiTsLyJNK%2BWoGC1sTkAJuWPQB1medNb1GFKwJCLKc8x8kjEpnIMfd0pLKnJZOugrnpaZvPe5sZoTbKb4igeZ84xvHJ3bBaYbOJw2VV3eo2P%2BNKEiLMArzfh9jqY6tkDDeTio9GGnogTbCKinXmP7%2Fol&X-Amz-Signature=1650268ed6785e7828e97167ac8f25a89221b032ad7a8cc59ecf1f18c9ff4f28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
