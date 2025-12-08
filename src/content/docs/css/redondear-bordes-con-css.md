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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZE6UIIT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEY2Kihpt9J5MYLvaBXjEwhs5X3vV75jRIsjwzQm3DJZAiB7l5ztybwRzqBZznXIohx1aRVAiGnq6FuSeTsd9%2B9qkSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDHfJEQW9sdl5VHweKtwD4UTEFoKRvYyxbQOJws%2B%2Bj%2B1Pms20IL3OJb762i5eog3cQpUyqIZpqAPsrANVpGipmTzDqhdotTOhBue2u3kt6EkbX3QKc79G72h0PjlHJkHImM3LyIXtFxh4QKwhomwWzVjyC6E02wCeJwk0IPsv2%2FDWfWdzxtCYvlnum8QliqP5uT8TdGrPEA3oP%2B9nHZaJ8Wm%2BkVn7epsfpq4yF6BjcOjLbpLmI4GiTUGJDE%2FNIXZPPZNS3gR6ma7oYRBBsRguPVgAPKnLgZFtIOygfefjr2s8ugWHZ%2Fkta%2BCxHXRwGiF5OblX2DdXSPok1vpjcYpGEfadQ9sgMtcn%2BeVp0i1Y6d8qyYiEUrJQSZWU2gZw9BQOu2hcvCGI8Nvqxbnu3GeKVFf7%2BLbO0q9rZCJy9WzRuL0SS5KX%2FZGxp8GcjG%2BMgMODjHODALd%2FzXbRy%2Frd%2BCvJm1pLupDW%2FY68b0pjzjO0ekMjWVC0hq%2BHtblmkt5Q6twXOBTlzEfZ3uBPBi4egqDwIt3ATXW1ehOXdlPfNuvfT%2F%2BDNRIdTBHa60c%2BgVZnwlrokP%2BN5j%2FfnASh1poBJl0B4JZEkR16aAs00AqcKc66fGhR3xMl2xmNAwS1qc7s5fbiw4xRvEIuLx2lL1Mw%2B%2BzZyQY6pgEdQU8Uo%2BK3edrksiJqUF8dPcFEVhOZvjj0%2BPD%2BytiVyLOtjQjMhO66oltdZ%2BsVw2QZB1nHUQjz1GD6ki6DVuLTkj6HC9bWG51kkEsomCSWb9lXS8AqibIK2gu%2FdaCBSfNwTaoWMYobW3%2FEIqcet9dGXHv0Bt5yoNiF4vZY%2BSVNgXNbjeyUbx0WYefKYLWnPkBAeVdV2qTRElfjRg%2FiUc%2BjttnVN6m1&X-Amz-Signature=6f979ebccd61a0add9b18f01207b612d08a27a817cad3940f06d45707faedee0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZE6UIIT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEY2Kihpt9J5MYLvaBXjEwhs5X3vV75jRIsjwzQm3DJZAiB7l5ztybwRzqBZznXIohx1aRVAiGnq6FuSeTsd9%2B9qkSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDHfJEQW9sdl5VHweKtwD4UTEFoKRvYyxbQOJws%2B%2Bj%2B1Pms20IL3OJb762i5eog3cQpUyqIZpqAPsrANVpGipmTzDqhdotTOhBue2u3kt6EkbX3QKc79G72h0PjlHJkHImM3LyIXtFxh4QKwhomwWzVjyC6E02wCeJwk0IPsv2%2FDWfWdzxtCYvlnum8QliqP5uT8TdGrPEA3oP%2B9nHZaJ8Wm%2BkVn7epsfpq4yF6BjcOjLbpLmI4GiTUGJDE%2FNIXZPPZNS3gR6ma7oYRBBsRguPVgAPKnLgZFtIOygfefjr2s8ugWHZ%2Fkta%2BCxHXRwGiF5OblX2DdXSPok1vpjcYpGEfadQ9sgMtcn%2BeVp0i1Y6d8qyYiEUrJQSZWU2gZw9BQOu2hcvCGI8Nvqxbnu3GeKVFf7%2BLbO0q9rZCJy9WzRuL0SS5KX%2FZGxp8GcjG%2BMgMODjHODALd%2FzXbRy%2Frd%2BCvJm1pLupDW%2FY68b0pjzjO0ekMjWVC0hq%2BHtblmkt5Q6twXOBTlzEfZ3uBPBi4egqDwIt3ATXW1ehOXdlPfNuvfT%2F%2BDNRIdTBHa60c%2BgVZnwlrokP%2BN5j%2FfnASh1poBJl0B4JZEkR16aAs00AqcKc66fGhR3xMl2xmNAwS1qc7s5fbiw4xRvEIuLx2lL1Mw%2B%2BzZyQY6pgEdQU8Uo%2BK3edrksiJqUF8dPcFEVhOZvjj0%2BPD%2BytiVyLOtjQjMhO66oltdZ%2BsVw2QZB1nHUQjz1GD6ki6DVuLTkj6HC9bWG51kkEsomCSWb9lXS8AqibIK2gu%2FdaCBSfNwTaoWMYobW3%2FEIqcet9dGXHv0Bt5yoNiF4vZY%2BSVNgXNbjeyUbx0WYefKYLWnPkBAeVdV2qTRElfjRg%2FiUc%2BjttnVN6m1&X-Amz-Signature=10bc9b043fbfd85d0fcf1cefbdf946f86d2c2792e21e51c12910d1de398dbc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
