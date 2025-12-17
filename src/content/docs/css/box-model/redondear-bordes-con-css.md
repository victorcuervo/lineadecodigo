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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFHUHRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDC%2BWgU0sTQvAeGVBmaRY7duUAeyXqymqkk8bXGMD6c%2BAiEArS6tfMj%2BAVZselBka9LjR1dz1M9px1%2FgdQLwToCL5r4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDL%2BRSG%2FwswyWycjFnSrcA1GHMuwwonnrwygEhqEeYapP4co31b9IZI0gN3phqIger0twT%2F7rPyXoo%2B%2BlBzR1rNFb10DfAs4ukykn%2B4YfGFantwpFQXQezNArwhTiTsqnAmdrGhgp4hiSZNOHkj%2BmegIH8nArkhiFFXRmy9XZ1xuBhohcV0S0aIT2JKkuDXnZCI5%2FCtJ9JD%2F33%2BHuNXvHczk1tPNqmoO725vQ0TxdbcVkwUn%2BW6ahL8J3OujOOaBVjJVCYQiIcOVsNDrFxWAG1zTqRr8iZ3pKSm5FX4F2Bwc9IuGwDcGZVS6mHwCwWSX9JNkK88%2FT3wRL9m%2BlfwLLGpp3sLuUzRayTereomsy8OO1x2xjeg61lNtcjE6lIdUkyZGNGnfR2xw3nVzMsY4sZeVGe4kB4esXhiV1HnmSWSBwTmIRpXHHF1kO4HEI3m8dMQeiPoA1EpANvMWpIct9Jdsj63zv01efmlV3dYze9ZFAtRo%2FLvYgs4%2BLi2X98td2r4xP1RWjQr%2BIErMo5oWt8%2FRhM4XaZoITJtF4F7ULyGHRnOY%2Bxvmkx0Axthm31TDgmeTkRSFsbiqZKYqSwdmq%2BL302cO9AlWGK0T8vsXPc8%2FQeIMZssfAdvgnre%2BgqdGTv0CtFBBGLDvRCofwMNayiMoGOqUBsV6gWZu3Vx%2B7B7h2T4xchjjzjJB2vU0xMfsaq%2FVRxpJjeXCZGcVFbXjN6%2F5JFgxqOBskk79HPo9kG2OL%2FEqpoTxlcAtezyGXc3TK4vORU%2BU6XbCbbsZzJEcUnKUofuJAhLKyulO5Y%2BF5qWX0ReS54dAF3u5C1mZkwzrg8%2FOvHX5EIEzOeQPeBI19au5MuWP9OXT1E4LlJIWLhUc4blvs%2FwVhN2ar&X-Amz-Signature=ce0dad14dbf4fa5f4d643f285e248202f2097d0254b55260fab87e7d99cdba03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SFHUHRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDC%2BWgU0sTQvAeGVBmaRY7duUAeyXqymqkk8bXGMD6c%2BAiEArS6tfMj%2BAVZselBka9LjR1dz1M9px1%2FgdQLwToCL5r4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDL%2BRSG%2FwswyWycjFnSrcA1GHMuwwonnrwygEhqEeYapP4co31b9IZI0gN3phqIger0twT%2F7rPyXoo%2B%2BlBzR1rNFb10DfAs4ukykn%2B4YfGFantwpFQXQezNArwhTiTsqnAmdrGhgp4hiSZNOHkj%2BmegIH8nArkhiFFXRmy9XZ1xuBhohcV0S0aIT2JKkuDXnZCI5%2FCtJ9JD%2F33%2BHuNXvHczk1tPNqmoO725vQ0TxdbcVkwUn%2BW6ahL8J3OujOOaBVjJVCYQiIcOVsNDrFxWAG1zTqRr8iZ3pKSm5FX4F2Bwc9IuGwDcGZVS6mHwCwWSX9JNkK88%2FT3wRL9m%2BlfwLLGpp3sLuUzRayTereomsy8OO1x2xjeg61lNtcjE6lIdUkyZGNGnfR2xw3nVzMsY4sZeVGe4kB4esXhiV1HnmSWSBwTmIRpXHHF1kO4HEI3m8dMQeiPoA1EpANvMWpIct9Jdsj63zv01efmlV3dYze9ZFAtRo%2FLvYgs4%2BLi2X98td2r4xP1RWjQr%2BIErMo5oWt8%2FRhM4XaZoITJtF4F7ULyGHRnOY%2Bxvmkx0Axthm31TDgmeTkRSFsbiqZKYqSwdmq%2BL302cO9AlWGK0T8vsXPc8%2FQeIMZssfAdvgnre%2BgqdGTv0CtFBBGLDvRCofwMNayiMoGOqUBsV6gWZu3Vx%2B7B7h2T4xchjjzjJB2vU0xMfsaq%2FVRxpJjeXCZGcVFbXjN6%2F5JFgxqOBskk79HPo9kG2OL%2FEqpoTxlcAtezyGXc3TK4vORU%2BU6XbCbbsZzJEcUnKUofuJAhLKyulO5Y%2BF5qWX0ReS54dAF3u5C1mZkwzrg8%2FOvHX5EIEzOeQPeBI19au5MuWP9OXT1E4LlJIWLhUc4blvs%2FwVhN2ar&X-Amz-Signature=241ea9e0767001705cd87d1878d6d110201ea9905a397deff80f24a2ae230fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
