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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6YFWZK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdfJ2RNMluqGtZUXpRrBnIMv6fryMldDqdSx2VAn0gfAiEAz1h2PeqUMo2sbcBNXrMuEeL0S9%2BXkt61C%2FmFtZhXdFYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDtjFTyQ2UfM6XoPVyrcA1MdCFjRQ0KaqwUPNi19cL3FX7Nlss6kXfCjHgKglBW68wFhen%2FcryEGpDB%2B2Nblz6IWUvdfFom8O7TGMnqUQY%2B2tXorReDgkSWSUeOqJ%2FqsqtPSssN%2BR%2BMsN9BGxBI4qt%2BiPdYTVs%2F1tcnQ%2Fn75HMdAwnR%2B4ajpmbV%2B%2BO3lhJzM4l6qSNc7L9ogAd658rPr24UjfuCSEegG5Zx9Ydi3XpBQz%2BGP%2FLaiLfGVysjQ9QPcpcvB%2Frj1HNpwOLZ1ZF6254BdWl%2FZ66Zxy%2Bj3JEujo4Wr1v06LwbK%2FmJ53Duaf%2BewmAMrJTr9Y2jewocBW9%2B0%2BmQh6YL%2Fa4QjMpgS0lCeAHHBBG5EFENgaRiV6Z9BnJc%2BtSaOp5TB1fVMmqNyYPt2wlpkriyQSwruwSiYfBZfVrMNlZdHBvNEVKi1FMPY6a9D%2BEW1EjBIaU69dVAc9iAN6WWzweVKcg1Erkao1edhklX9H36UEniveqGn8k91JA3yKjOPLFpDUxEq7ev5enhWefhK%2FAJYiQHlRkUEaQ5ZjEfgkveP1U%2BE%2BHL12nPlqWGg3qDdmvwgnifBNqfNQU7XdReHTDWcI5ArZxj8kItVCIL4YIjRyLfyzr9YLmmMVy6d34tlCIhT1PUO%2F%2FqSMMnDzskGOqUByeeWrUbXzn2HbKuNZ6nL1tLFhZu5s48VJfPyLbZhdjxAOAj9axw8yDgE3bBvEIOZ5I1N4g1V8KWCj4kDIn6gkZk%2F5no%2BJaZwOsYPfK%2FBnRIxAPolncgozPZCkSz08mnsSrmyJKNY4FbDoyy4Ie8sIotnnUMlnOPxOoRub8ILR5MPg7ufoOQSF0WgUNk21dPzRp0lAosMfBxhi%2Fphpnrkl0PnwAgQ&X-Amz-Signature=861db465b7a92ed5dd404cff8f422ab038d6829d48135eb7fa5e18f8229409e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663S6YFWZK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFdfJ2RNMluqGtZUXpRrBnIMv6fryMldDqdSx2VAn0gfAiEAz1h2PeqUMo2sbcBNXrMuEeL0S9%2BXkt61C%2FmFtZhXdFYq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDtjFTyQ2UfM6XoPVyrcA1MdCFjRQ0KaqwUPNi19cL3FX7Nlss6kXfCjHgKglBW68wFhen%2FcryEGpDB%2B2Nblz6IWUvdfFom8O7TGMnqUQY%2B2tXorReDgkSWSUeOqJ%2FqsqtPSssN%2BR%2BMsN9BGxBI4qt%2BiPdYTVs%2F1tcnQ%2Fn75HMdAwnR%2B4ajpmbV%2B%2BO3lhJzM4l6qSNc7L9ogAd658rPr24UjfuCSEegG5Zx9Ydi3XpBQz%2BGP%2FLaiLfGVysjQ9QPcpcvB%2Frj1HNpwOLZ1ZF6254BdWl%2FZ66Zxy%2Bj3JEujo4Wr1v06LwbK%2FmJ53Duaf%2BewmAMrJTr9Y2jewocBW9%2B0%2BmQh6YL%2Fa4QjMpgS0lCeAHHBBG5EFENgaRiV6Z9BnJc%2BtSaOp5TB1fVMmqNyYPt2wlpkriyQSwruwSiYfBZfVrMNlZdHBvNEVKi1FMPY6a9D%2BEW1EjBIaU69dVAc9iAN6WWzweVKcg1Erkao1edhklX9H36UEniveqGn8k91JA3yKjOPLFpDUxEq7ev5enhWefhK%2FAJYiQHlRkUEaQ5ZjEfgkveP1U%2BE%2BHL12nPlqWGg3qDdmvwgnifBNqfNQU7XdReHTDWcI5ArZxj8kItVCIL4YIjRyLfyzr9YLmmMVy6d34tlCIhT1PUO%2F%2FqSMMnDzskGOqUByeeWrUbXzn2HbKuNZ6nL1tLFhZu5s48VJfPyLbZhdjxAOAj9axw8yDgE3bBvEIOZ5I1N4g1V8KWCj4kDIn6gkZk%2F5no%2BJaZwOsYPfK%2FBnRIxAPolncgozPZCkSz08mnsSrmyJKNY4FbDoyy4Ie8sIotnnUMlnOPxOoRub8ILR5MPg7ufoOQSF0WgUNk21dPzRp0lAosMfBxhi%2Fphpnrkl0PnwAgQ&X-Amz-Signature=a76ce09b38ef7800f4a8b313f4f1bc90a56694335e99a1f88b1cb0f8ff876930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
