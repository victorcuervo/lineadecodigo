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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EFWST5G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv3Hs1LX5KVaSfmRMjzWxuvwbcNDxvg8jtwlgUdMLuLAiEA2LftiHoAkpKZMTq9WHhKVziBoaHIYhTeKG3dRxtkfy8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLvd0pYgQeJZKkjG4ircAxwg8Vi2dl8ru0iuMreBlFNiNlLCFjhfMHFiE8e%2Ftdl4YbGN3YdrOhVl%2BYNRC5jsVL9oaXCe81Ve%2B5TZcgodq%2BwUjR70LEbHCIHB9G%2BvIPQKOiA%2BpQz%2F35SJnbD7CIlLTGle%2FGjhtsG5iBatF%2FGnBME1B%2B98UsCRK5gdii7869U1RPo8ONBljbmLtig1ZOgHyvkBXwANZm%2BAfwgaf2sN0rSKVGltiazpeOLnVNZ0IYervqZEaalhiHBs4Q9UNj0F3hF08avOkmvxWGWWB9cMZ%2FodEwfcOU5ma5f0B5XJDJYyG3fAdpdIJTpUhnw9GNcu%2FpJHBr%2FBsZw%2BVVl2wgWqdhEF6fbthbR%2B8ueQfuolWSD40x3MGylK2%2FLOzChLkyBtQDR2dd5fIQKGVu4gYoga%2F0kkBaJ9fulZRno8L%2BnmtsUWQsJzLkP3rMSQwBSVyM2xQmTGh7SjP5c43S%2Fz3n%2FrdvatQnjKGsRqUfmNbiLbnhy2mboRomjQpBzMqQC%2B6M%2BjdoeqKlQOzgIXqwMG93StkKJHAhNmZ50MME8R218FZc0zwJ2PNhqjmBb5D4sL5JLtTVrg4MW5vVXjG4Z4uaRgMxfBkWRNkL%2FRDFKl98Ga918T7nWxZ5zzMkvvdDr6MKbty8kGOqUBhwxJYuJ11F2jfkBUTjtQl1bT7uk0YzvX95fhcb9Xk3SgXuUiLQJSdYKb8vcG5FdEIoUJo2fS1Jsymp0ZMOUujPst8OFqjP1XuqXVrlaIFunPeuPBya8zXajCrFY1TIjKq2DXUN17TkGroBBfRQdDH3kUZtDp1CyaHg3hZlzQYgyrD8OWrywLi0sHC1PjBN1AnYbpjuV5zPm6ZpBMIcBvoNqAY1vA&X-Amz-Signature=9101aed8fb80624309b9ca5b57110d6dc0e0a8380ebedac3765f9add06b951c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EFWST5G%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICv3Hs1LX5KVaSfmRMjzWxuvwbcNDxvg8jtwlgUdMLuLAiEA2LftiHoAkpKZMTq9WHhKVziBoaHIYhTeKG3dRxtkfy8q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDLvd0pYgQeJZKkjG4ircAxwg8Vi2dl8ru0iuMreBlFNiNlLCFjhfMHFiE8e%2Ftdl4YbGN3YdrOhVl%2BYNRC5jsVL9oaXCe81Ve%2B5TZcgodq%2BwUjR70LEbHCIHB9G%2BvIPQKOiA%2BpQz%2F35SJnbD7CIlLTGle%2FGjhtsG5iBatF%2FGnBME1B%2B98UsCRK5gdii7869U1RPo8ONBljbmLtig1ZOgHyvkBXwANZm%2BAfwgaf2sN0rSKVGltiazpeOLnVNZ0IYervqZEaalhiHBs4Q9UNj0F3hF08avOkmvxWGWWB9cMZ%2FodEwfcOU5ma5f0B5XJDJYyG3fAdpdIJTpUhnw9GNcu%2FpJHBr%2FBsZw%2BVVl2wgWqdhEF6fbthbR%2B8ueQfuolWSD40x3MGylK2%2FLOzChLkyBtQDR2dd5fIQKGVu4gYoga%2F0kkBaJ9fulZRno8L%2BnmtsUWQsJzLkP3rMSQwBSVyM2xQmTGh7SjP5c43S%2Fz3n%2FrdvatQnjKGsRqUfmNbiLbnhy2mboRomjQpBzMqQC%2B6M%2BjdoeqKlQOzgIXqwMG93StkKJHAhNmZ50MME8R218FZc0zwJ2PNhqjmBb5D4sL5JLtTVrg4MW5vVXjG4Z4uaRgMxfBkWRNkL%2FRDFKl98Ga918T7nWxZ5zzMkvvdDr6MKbty8kGOqUBhwxJYuJ11F2jfkBUTjtQl1bT7uk0YzvX95fhcb9Xk3SgXuUiLQJSdYKb8vcG5FdEIoUJo2fS1Jsymp0ZMOUujPst8OFqjP1XuqXVrlaIFunPeuPBya8zXajCrFY1TIjKq2DXUN17TkGroBBfRQdDH3kUZtDp1CyaHg3hZlzQYgyrD8OWrywLi0sHC1PjBN1AnYbpjuV5zPm6ZpBMIcBvoNqAY1vA&X-Amz-Signature=773b9165228df3140b1870da41fd4f8578a9e582b54d450452996f348e4c47b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
