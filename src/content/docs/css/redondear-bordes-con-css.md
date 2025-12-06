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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC3ASGNQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ31tU%2FUPl0amNpRP8RoU7AIJkbCojexOqt8KKXwcxLwIgYlbz5p%2BU0A2vSGKyzkoe9B3mxBGQ6KMAUP1CNyqBv40q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP3xpvpVOcrxN%2Fi31CrcAyNhyLyhFGS327SO2WM%2FZOw0i4xK8BFUzQiA5rZTJx10YrXCzK%2F79zriSpqel2VfdG1KyQinC2WuMGrGFIiS3qJfOpTCm9QHkybfH6qzIc5icudSOSZtpD1ij%2BmDqKK%2FFIpIa74QlU3QGK7hUI4IXoCBXfVBbpux1Y3zc1L7cikMLunzgHwERAT%2BX6wm4xwh9%2B5O2qSAzPYPwo7v0qwFBFPTu5DFNIMGkNQFPBFs9GCAedUJboIvleWF84sC8Vp1BYoJF8yQnN4YJf00aBB2sjqtL0SuPcUpm2jlR4tTDBJMiXeCC%2BQiekjF7kvZB4RO8oNdrK4q51oK%2Bk9MF%2FzGXwzpia36kV81BZYHpF2FbOJ%2FogqihRH9ZKIyswO0hVnOGtMPH6ThAV8NHFSbj%2BlAMf%2BsErfHjVBti4OyK4oBCgH30qzrv65JHjD3ocRyXVhLScUCdvOhlE%2FZSHGuZ7ar34dVAMhpyNxxAvyVj8g%2BHYH%2Bm3vif4MOLWQTPpljlC61pOwL3NNK7GgyX2Tuo0y%2Fw6qFNVUFdtT7bphC1sEH2XaWKPCtl%2F1ZYGZKaKmZ%2B2nykV6lv1daco2lH16MIIxPYPA08kWLINh4jqe4OOAdrx8MELZzk4nX9zx3zBIiMNum0MkGOqUBRxuSG3qRZSpx1o4tloNijWNVgJr4bvv5SlmAiBjDEQoRYMtt5bd3FT4eJzt9%2BptuvV0PXX3QHr7AB15mxWvWRsMOeU5QlWqzfTPhf8lg%2FrTeUX9i58444TXi2HhLvFN5IoleX5orugD%2B1a940EZpD1OpXCwiFunO%2BkVIWeNamkAjrMM%2BB%2BcVpfpZ2VK2%2FtggOtlozjIx9WdvQa0ba0z%2BTZDqsmrC&X-Amz-Signature=2bde022502b5d7b46e9b7390d91352b6a59190a8f2710ea484894c8a1b52cb90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC3ASGNQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T152303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ31tU%2FUPl0amNpRP8RoU7AIJkbCojexOqt8KKXwcxLwIgYlbz5p%2BU0A2vSGKyzkoe9B3mxBGQ6KMAUP1CNyqBv40q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP3xpvpVOcrxN%2Fi31CrcAyNhyLyhFGS327SO2WM%2FZOw0i4xK8BFUzQiA5rZTJx10YrXCzK%2F79zriSpqel2VfdG1KyQinC2WuMGrGFIiS3qJfOpTCm9QHkybfH6qzIc5icudSOSZtpD1ij%2BmDqKK%2FFIpIa74QlU3QGK7hUI4IXoCBXfVBbpux1Y3zc1L7cikMLunzgHwERAT%2BX6wm4xwh9%2B5O2qSAzPYPwo7v0qwFBFPTu5DFNIMGkNQFPBFs9GCAedUJboIvleWF84sC8Vp1BYoJF8yQnN4YJf00aBB2sjqtL0SuPcUpm2jlR4tTDBJMiXeCC%2BQiekjF7kvZB4RO8oNdrK4q51oK%2Bk9MF%2FzGXwzpia36kV81BZYHpF2FbOJ%2FogqihRH9ZKIyswO0hVnOGtMPH6ThAV8NHFSbj%2BlAMf%2BsErfHjVBti4OyK4oBCgH30qzrv65JHjD3ocRyXVhLScUCdvOhlE%2FZSHGuZ7ar34dVAMhpyNxxAvyVj8g%2BHYH%2Bm3vif4MOLWQTPpljlC61pOwL3NNK7GgyX2Tuo0y%2Fw6qFNVUFdtT7bphC1sEH2XaWKPCtl%2F1ZYGZKaKmZ%2B2nykV6lv1daco2lH16MIIxPYPA08kWLINh4jqe4OOAdrx8MELZzk4nX9zx3zBIiMNum0MkGOqUBRxuSG3qRZSpx1o4tloNijWNVgJr4bvv5SlmAiBjDEQoRYMtt5bd3FT4eJzt9%2BptuvV0PXX3QHr7AB15mxWvWRsMOeU5QlWqzfTPhf8lg%2FrTeUX9i58444TXi2HhLvFN5IoleX5orugD%2B1a940EZpD1OpXCwiFunO%2BkVIWeNamkAjrMM%2BB%2BcVpfpZ2VK2%2FtggOtlozjIx9WdvQa0ba0z%2BTZDqsmrC&X-Amz-Signature=52fc1aa7be901599b47aabd7800b2f6a8ce6959356c09469aa820bf5f6c5a5b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
