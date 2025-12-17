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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X73QM6EQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXSRvCyZAGn5VQSm4tYyEWHXEarDk5p0hpaL80cyYULAiBdLSwhfgLCZRqXt3JM1YZDaJrf6O1tRqiZTHQLcNUYLSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMuLwIdI9tW%2BdgoNwuKtwD%2FlDC6aDOaty%2BsDU6V%2FOc%2BLpUnCoOQ3ohidNjcHHn2%2BTFsKibhc0u%2Bu5IxB9i62c6KFSXkTmIEvVjuI5l5fnj0QTh1XvRPYTWu%2BCccCQGwnillnV2LkD7O8%2BXrEpNjNAYGVWkv5Lm98x3TXW8JkRKvHyrjt2WpmJ1AVIJoGeeuKCa0wQTx%2FSQofyY0Su7JzjeXINu2bxr5DS9gGbnoN85ZewpvN0Xzg8y1E5KegdD0NdmjwOgB%2Be%2BnCKSz68dOpYeVA11cYh3BUYmmRAhizurv2I0LZc8w3h7MZtOZIF3y9Ee%2Fxf2w735YvkYr%2BOqXQ58JH8abLcp6shTjWYozNmpXhOxBiMnEjFA%2BeT0TYe6rn3w8AxajliD8j69Cafjje37VaZjXjDdx1Ty2Ld0biti04WnPRaPMtrUNz27t4QOQBO39qyBBzo2whxhKnCeH7c7qaTmzyjCCLsa%2Boeeq1Cm38Nrd0wRnObl6%2Fiw9QiC7hpFW4F3Qr%2FtWLWEFiSBuqzeFUhIoVkPXwFuKSumzWyGF6BjEOdK%2BW3z8mRllEVeVlMsBjwWmPbELVV%2Fc3VoPIgrAYhMQicT5aPaWBNmGahm5ZTAOEghTrzMlTcQpqe40i%2FjoqHMK7ynvG7zyaow1caKygY6pgFMfu5AhzXUe0nU7KwcMnnbBtMfWtcC3Tn%2F%2F1hP9jRojSIjB2SPtOGAmIkzDgTdtmsbSOVPE%2BEnu6XJHNyXTVR9XIvPEhIGzap6NncexrM8OLnoie1JzXjY5PTFl8PI5cQj5nF%2Bmc3CTEZJYiYnuO5A88oaEVErtqUeG7K3wi0HZcKgHaY01Dtm5DcyU%2BVbyAhxbt42oBWJjB5%2BhZeSsNRbSwXoHhaM&X-Amz-Signature=edc8e152d64885cdcf6d8ec0b4d0cbc291efaba541a68e64b4b7eb30a0e8284a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X73QM6EQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXSRvCyZAGn5VQSm4tYyEWHXEarDk5p0hpaL80cyYULAiBdLSwhfgLCZRqXt3JM1YZDaJrf6O1tRqiZTHQLcNUYLSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMuLwIdI9tW%2BdgoNwuKtwD%2FlDC6aDOaty%2BsDU6V%2FOc%2BLpUnCoOQ3ohidNjcHHn2%2BTFsKibhc0u%2Bu5IxB9i62c6KFSXkTmIEvVjuI5l5fnj0QTh1XvRPYTWu%2BCccCQGwnillnV2LkD7O8%2BXrEpNjNAYGVWkv5Lm98x3TXW8JkRKvHyrjt2WpmJ1AVIJoGeeuKCa0wQTx%2FSQofyY0Su7JzjeXINu2bxr5DS9gGbnoN85ZewpvN0Xzg8y1E5KegdD0NdmjwOgB%2Be%2BnCKSz68dOpYeVA11cYh3BUYmmRAhizurv2I0LZc8w3h7MZtOZIF3y9Ee%2Fxf2w735YvkYr%2BOqXQ58JH8abLcp6shTjWYozNmpXhOxBiMnEjFA%2BeT0TYe6rn3w8AxajliD8j69Cafjje37VaZjXjDdx1Ty2Ld0biti04WnPRaPMtrUNz27t4QOQBO39qyBBzo2whxhKnCeH7c7qaTmzyjCCLsa%2Boeeq1Cm38Nrd0wRnObl6%2Fiw9QiC7hpFW4F3Qr%2FtWLWEFiSBuqzeFUhIoVkPXwFuKSumzWyGF6BjEOdK%2BW3z8mRllEVeVlMsBjwWmPbELVV%2Fc3VoPIgrAYhMQicT5aPaWBNmGahm5ZTAOEghTrzMlTcQpqe40i%2FjoqHMK7ynvG7zyaow1caKygY6pgFMfu5AhzXUe0nU7KwcMnnbBtMfWtcC3Tn%2F%2F1hP9jRojSIjB2SPtOGAmIkzDgTdtmsbSOVPE%2BEnu6XJHNyXTVR9XIvPEhIGzap6NncexrM8OLnoie1JzXjY5PTFl8PI5cQj5nF%2Bmc3CTEZJYiYnuO5A88oaEVErtqUeG7K3wi0HZcKgHaY01Dtm5DcyU%2BVbyAhxbt42oBWJjB5%2BhZeSsNRbSwXoHhaM&X-Amz-Signature=78ef021c5a52faff8785eb64cb780e01a7bb11e52d0bb3f94ea02a6434f1682b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
