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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPMHATQP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsd9rLCMGYQurol4dHSMtafUgWdtTpN8l%2BmPR1%2FfnhJAiEAu%2B65WQ9YKai4TwMhsODf3n6ONFx6FCi1UFolJ57%2Fw9Eq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIgzmrGVVB3dS5JeVSrcA6SuybHOzmZP3M1wziROm4LCf8faFVEu0tRCxUoKqGpqkx0GKpQqR%2FT23%2B3lcLUt8C8QcS8ICxpL%2FAbKwwpOPYugY5UzdIyumJt0qtNvzETXHpFeUlmS%2FOEFMbkmxT7cauOoLijodE2%2FXcZ2Luhe4GZRAlvsaoeSH41P%2BmMtx0Wff%2FzFo57MKk3ocRL9wqrka0RLtEKGzaM%2Bf%2F3cQoeWFfzftzmo8LQbuKEAkN19OhGAlLtL26MJ7msBu949EdR%2FTZ%2FoXsFF7P6yyvsUGuTN4aZZ2jVryjA678gDN87yYNq8RurhAczX42LeuSZc7S84PJJ%2FHu%2FVJ3sXjfMOtn%2FcHilNED2HDWb4a6zKnccxSdFTUvPq5jenWluWY9zJIHbKLma0obS%2FCDtxb4qOfiUB%2Fb5dmXzfTcyk5Hl6TpIqYaNUilhmMbX3jGBK5tP90h%2FIORpEZMa6LNl1qwg0BlAUOWVNIo8b5fKKZBVLS7wtwiwbBMajtb5ABfqi1uuAkmn8P6E5AcuFxwc8ls7lg93EOI163TRmxrQHXomNwkEugnxGbKgzT%2FZccnnCCmlL%2FSZC9Jq18luVNoVHyVJybE12f3NVt7jOKC9AEjrvPWBdskwrv4q94138Jhn5%2FC5RMJfRicoGOqUBNyhhee9GfDNmqIM3MHd8e4gTf%2Fo0nm2X65gYUxgABMLwmfaw2uim8hzUO76Kw2Gb%2BD4C%2BqgHRX%2FqMnNS87%2BHLPAjkscTiAZl4ZL%2FyBNVAZQadTb8dXMO29X3ZhR%2F5lWYPS7RsJnz%2BTxR8IhuS3Aje8bJlGKpBnOY%2B8hbWnxWR%2Fk3qz%2FKTjHi1L9Vn3Dn0Il7ZmT4fYTvbpudWuQC4ksmkrFVWi8C&X-Amz-Signature=99c0c41595570459b6e22d5e1ff0aa3d1a35e94f723da736d4689cdb6ec39907&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPMHATQP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsd9rLCMGYQurol4dHSMtafUgWdtTpN8l%2BmPR1%2FfnhJAiEAu%2B65WQ9YKai4TwMhsODf3n6ONFx6FCi1UFolJ57%2Fw9Eq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIgzmrGVVB3dS5JeVSrcA6SuybHOzmZP3M1wziROm4LCf8faFVEu0tRCxUoKqGpqkx0GKpQqR%2FT23%2B3lcLUt8C8QcS8ICxpL%2FAbKwwpOPYugY5UzdIyumJt0qtNvzETXHpFeUlmS%2FOEFMbkmxT7cauOoLijodE2%2FXcZ2Luhe4GZRAlvsaoeSH41P%2BmMtx0Wff%2FzFo57MKk3ocRL9wqrka0RLtEKGzaM%2Bf%2F3cQoeWFfzftzmo8LQbuKEAkN19OhGAlLtL26MJ7msBu949EdR%2FTZ%2FoXsFF7P6yyvsUGuTN4aZZ2jVryjA678gDN87yYNq8RurhAczX42LeuSZc7S84PJJ%2FHu%2FVJ3sXjfMOtn%2FcHilNED2HDWb4a6zKnccxSdFTUvPq5jenWluWY9zJIHbKLma0obS%2FCDtxb4qOfiUB%2Fb5dmXzfTcyk5Hl6TpIqYaNUilhmMbX3jGBK5tP90h%2FIORpEZMa6LNl1qwg0BlAUOWVNIo8b5fKKZBVLS7wtwiwbBMajtb5ABfqi1uuAkmn8P6E5AcuFxwc8ls7lg93EOI163TRmxrQHXomNwkEugnxGbKgzT%2FZccnnCCmlL%2FSZC9Jq18luVNoVHyVJybE12f3NVt7jOKC9AEjrvPWBdskwrv4q94138Jhn5%2FC5RMJfRicoGOqUBNyhhee9GfDNmqIM3MHd8e4gTf%2Fo0nm2X65gYUxgABMLwmfaw2uim8hzUO76Kw2Gb%2BD4C%2BqgHRX%2FqMnNS87%2BHLPAjkscTiAZl4ZL%2FyBNVAZQadTb8dXMO29X3ZhR%2F5lWYPS7RsJnz%2BTxR8IhuS3Aje8bJlGKpBnOY%2B8hbWnxWR%2Fk3qz%2FKTjHi1L9Vn3Dn0Il7ZmT4fYTvbpudWuQC4ksmkrFVWi8C&X-Amz-Signature=5bd8475145c234d6e6e2dd3d831f1923164127571f0ef730fde83fc58558a38c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
