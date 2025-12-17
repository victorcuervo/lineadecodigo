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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIHNY5C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAarU98Qq7PDTst8A40eR68oPtE8SNBvM1FdZEbpbDVFAiA2dTjApuql9AWw21weVoxsBXzbs572XclvDEREIIwcXyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIS6Xf9N%2BshnQsEx5KtwDdzJGpiRQ9bohJl1Woc8qqNSNRJ04zeIi89E7WW8KBBdlcOPrgtkq9uHkN2MQFX9ihUmgPha8ixPFnPAAIbrJsLNB%2FyK2hNFNk619SBcBjxtG%2BhSFNSghxQIL%2F8HWA%2FhylosMjxjP7lfQA%2BTIcRrkYVtN4sU0MoG1UJCvPitXklY8R%2FZ6jsamdOLd7M5l74SuqNnm8I6WVInTFilwfCxwBTBDTcA0tfIjWmRU8zWbkTRrNR9BfbsJYgD1pvd%2BIqYtJKIXr65Ce26NZ2FXYXgAwBLfc2KwS7f60RC1hnWNuHexxuwVGy1GYhcJxqDBIkGtuGovZv6Z7VEeglquIuhsEFrxASeWqYub40jy%2FTM1h6lUAJyAT5bon6V8PKHAaf1FF7XewWQpmzVyBCQlZARmzsQ0do3pZ3hnSSghnwKYe%2FEaF16cXuxZygZMUxGPZ%2F67dpWSCJiX%2BuTRmYIPqI2OkypCK76lvo4WfwdndSZlt6yNGvJve%2FE79Tj%2Fuyez64F5vf%2B36siwWsuTNDteTIQXtnsvAnEWzshDkQhbeAxkZ8IvZNYAJnds6BcGlEbSrV3NXOpt7fi4ndq3t0LiKH%2BFK4FSNQoQkg8h4FvsTU6kpxH86j63NdZTk%2BTVAJwwzq6MygY6pgFiO9GHAMD%2FcrskasbLrZ2WSkSHY%2Bg4ruSBfurB3J68EpUrVFSzkKIKOZNrUuE57XgJHYyAOUujauwlvEbEYGlTOWrXjjuMZ%2FFkhJc8ij%2BYtCc%2FBQxvz68zpdu%2BDEEdHOo%2F2WurlcS8%2BPspbFY4iFC5TRcidfqeNoJUj77KutojM8cp%2FfXzDwM7b58H3G73jIXa%2F9s7IPtL8yYfA1u8euVnLqLLDor1&X-Amz-Signature=02c90f73cff0722d022438eff06c969f677e87115eb86c3e5a03b412fa107084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEIHNY5C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAarU98Qq7PDTst8A40eR68oPtE8SNBvM1FdZEbpbDVFAiA2dTjApuql9AWw21weVoxsBXzbs572XclvDEREIIwcXyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIS6Xf9N%2BshnQsEx5KtwDdzJGpiRQ9bohJl1Woc8qqNSNRJ04zeIi89E7WW8KBBdlcOPrgtkq9uHkN2MQFX9ihUmgPha8ixPFnPAAIbrJsLNB%2FyK2hNFNk619SBcBjxtG%2BhSFNSghxQIL%2F8HWA%2FhylosMjxjP7lfQA%2BTIcRrkYVtN4sU0MoG1UJCvPitXklY8R%2FZ6jsamdOLd7M5l74SuqNnm8I6WVInTFilwfCxwBTBDTcA0tfIjWmRU8zWbkTRrNR9BfbsJYgD1pvd%2BIqYtJKIXr65Ce26NZ2FXYXgAwBLfc2KwS7f60RC1hnWNuHexxuwVGy1GYhcJxqDBIkGtuGovZv6Z7VEeglquIuhsEFrxASeWqYub40jy%2FTM1h6lUAJyAT5bon6V8PKHAaf1FF7XewWQpmzVyBCQlZARmzsQ0do3pZ3hnSSghnwKYe%2FEaF16cXuxZygZMUxGPZ%2F67dpWSCJiX%2BuTRmYIPqI2OkypCK76lvo4WfwdndSZlt6yNGvJve%2FE79Tj%2Fuyez64F5vf%2B36siwWsuTNDteTIQXtnsvAnEWzshDkQhbeAxkZ8IvZNYAJnds6BcGlEbSrV3NXOpt7fi4ndq3t0LiKH%2BFK4FSNQoQkg8h4FvsTU6kpxH86j63NdZTk%2BTVAJwwzq6MygY6pgFiO9GHAMD%2FcrskasbLrZ2WSkSHY%2Bg4ruSBfurB3J68EpUrVFSzkKIKOZNrUuE57XgJHYyAOUujauwlvEbEYGlTOWrXjjuMZ%2FFkhJc8ij%2BYtCc%2FBQxvz68zpdu%2BDEEdHOo%2F2WurlcS8%2BPspbFY4iFC5TRcidfqeNoJUj77KutojM8cp%2FfXzDwM7b58H3G73jIXa%2F9s7IPtL8yYfA1u8euVnLqLLDor1&X-Amz-Signature=bd6f73fa43904f02aee0b293d6b5c2f5e06e534209ccf2d0b5e6de29c8b56e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
