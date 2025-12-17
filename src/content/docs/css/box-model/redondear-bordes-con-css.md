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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662C37Y67%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK7RvNZfJN9dpeXT1BWgoFNs04iK4jWI6l3UTqCOflCQIgarpLY4B8CUL5ZXJ9L2EiZwfFCTX9TS2DZw723dfEHcMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGl745O9DBgCB987oCrcA2v%2B4jWFBZjNfc33Z0M1YpeD4kP2gEL6Qrk0LgttNdGp7vYy224XK7QfXysO88KPO3zQp2R%2B6D8uAIBtikoqXVpqmfbgoje5jTWsRHrbYMmCPVWgQsE0lJl8r4fvSOcO6Ymyb%2F5qJIm%2FffCq0DCoRSxYRTvXklHG1nZ0qH%2Bp3rxugIzkyEBLpp84GQh6gvW1LFaeoaVTWmzfgR%2BozpgJRlHBH5FruCnVTzDnbs%2FYnxJWiOwTwypZY%2Fwjgf0GLeeUHAa1JG9%2FNiWkgahciv%2Fo2s1GyKz3XfmMcuMoi7BWtc95d3NGz8lDXC5IMDx3jIe85pC2UijDhO9XTYQqPRQkFaenbMS7nlqt3qbqPby0wJFqKpe6Lhcp2fzyeOcDcnBeDeEu4fTh5PZiaFIQvkMNkeSwM4v8rz0aAiRsmMiIpToQ%2BXo%2FQ%2FvkzWczHQrRsBOrGQtv3PCGfpwC0%2BLkGDMoRYBwqXoMvzjLt8eiXH018hjpsUqiWK9qVALWqsiDIEsFmwWUeyV4HyWG%2BE%2B6dNg6hnVy4MJeh58Pj2WKM8RE72Esxkblsm%2Fzk0%2Fr2sYXfnI729d6IaFspyQHWVC4SGqsODDu7ADO0JovqE%2BndhHaraRvGx7YazRPUQK9L3y4MPreh8oGOqUBIJG%2BXgzhwwB8TmiYaPcPp7S7H6tV0aiSBOqq14xMBINHwJK53hAS86bvPk5sW8crBI4UvhvdXYOjT7jMnKdxYoDjpF%2FdBTT3hDSgJIJ3a%2FQEmOAvNcdtCZrWDLrTP1mdDUclc9NZSEb2Bur6USbF%2FeBLPexRPbYkQxBqcqQ%2Fk0Rt8N0tdT8Z9osTYWxBy7Er3E8m9OkNLYmorL49YOucNIhCgs9G&X-Amz-Signature=9a8ed8b9b5f529715321f7d46e24543879235bf2a00e6a3dafad4601de25d539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662C37Y67%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK7RvNZfJN9dpeXT1BWgoFNs04iK4jWI6l3UTqCOflCQIgarpLY4B8CUL5ZXJ9L2EiZwfFCTX9TS2DZw723dfEHcMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGl745O9DBgCB987oCrcA2v%2B4jWFBZjNfc33Z0M1YpeD4kP2gEL6Qrk0LgttNdGp7vYy224XK7QfXysO88KPO3zQp2R%2B6D8uAIBtikoqXVpqmfbgoje5jTWsRHrbYMmCPVWgQsE0lJl8r4fvSOcO6Ymyb%2F5qJIm%2FffCq0DCoRSxYRTvXklHG1nZ0qH%2Bp3rxugIzkyEBLpp84GQh6gvW1LFaeoaVTWmzfgR%2BozpgJRlHBH5FruCnVTzDnbs%2FYnxJWiOwTwypZY%2Fwjgf0GLeeUHAa1JG9%2FNiWkgahciv%2Fo2s1GyKz3XfmMcuMoi7BWtc95d3NGz8lDXC5IMDx3jIe85pC2UijDhO9XTYQqPRQkFaenbMS7nlqt3qbqPby0wJFqKpe6Lhcp2fzyeOcDcnBeDeEu4fTh5PZiaFIQvkMNkeSwM4v8rz0aAiRsmMiIpToQ%2BXo%2FQ%2FvkzWczHQrRsBOrGQtv3PCGfpwC0%2BLkGDMoRYBwqXoMvzjLt8eiXH018hjpsUqiWK9qVALWqsiDIEsFmwWUeyV4HyWG%2BE%2B6dNg6hnVy4MJeh58Pj2WKM8RE72Esxkblsm%2Fzk0%2Fr2sYXfnI729d6IaFspyQHWVC4SGqsODDu7ADO0JovqE%2BndhHaraRvGx7YazRPUQK9L3y4MPreh8oGOqUBIJG%2BXgzhwwB8TmiYaPcPp7S7H6tV0aiSBOqq14xMBINHwJK53hAS86bvPk5sW8crBI4UvhvdXYOjT7jMnKdxYoDjpF%2FdBTT3hDSgJIJ3a%2FQEmOAvNcdtCZrWDLrTP1mdDUclc9NZSEb2Bur6USbF%2FeBLPexRPbYkQxBqcqQ%2Fk0Rt8N0tdT8Z9osTYWxBy7Er3E8m9OkNLYmorL49YOucNIhCgs9G&X-Amz-Signature=8b87879b1f9e5b880365e7739f2c11302997bb3f677aa0f61c9ef8c80ad67185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
