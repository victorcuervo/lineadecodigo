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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633L3IHCG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhLITlkY6azva%2FGdFtB%2BCnVjXVVmX91e8Rdmn1gTtLTAiEA2%2F8BYiSQCx7dFNOpFYBFKSOge9hkIn6iTs7siomk6x0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQTR52ikzhmK%2BlUfyrcA%2Fx2ZVvkXpzIeZI%2FTko0WP0xsjgpNz%2BWig0dtJTz%2FXQlWLCqpoS07ut3ynUjV1FMX%2BaiZSljjja7U3Dai6sTZeH1r3zmn4s19GLtfHMpVpifQyjvkvCCyIvL0OhRjISX4HnD7Cvw1TzMyzhPHZIs78xmDPNq6x%2BIs1yPtmzNBO8Zh4LPU6BV4TxuI76eHyCvzb1WKrzsGqJQ6dg4%2Fp04UoPyrAm996mvXfuBITPQswwNh1qSJAVJI2QP1w38LDTSzycbztGgcH%2BVdhoFDy%2BHaVXbrhVVwZX91%2FF2u5QNx7Lddki%2Fms0n2OXMKkld8dAGRlLb0Fl%2BN9vCsQ5Hl%2BS9BtObKMr2d3YCd3ea2Y29Gi8QSX4yv%2BpZFs9vu%2BMN5ytFy0S1vL2Ykbk5EgDZ2vvlFm9Q%2FuFAYv5wcz7wjkhTjB5hrALaejKNzbRGLAuIeSYmRhqk%2FW1RFvXO4ordVqhRFT7HukaWdFuD9ZbjvuwBp6o8xmr0DG82mhmSHAur06jwyD2o5imrBFnj8Hua0sCmhGRd2Q2tfSanIvDBiUelYvRgk9nq250itxC%2FHsINMjhwt7KZzWSUlvhV4RZPW8jdFR%2FLjTgxN6NYu6YhfAizgT%2B7YNerIQd9gV9SnfkXMM2a1ckGOqUBfXt5N699wBJ2CR1GrHRiGBta8v1aFiqslbZZ24aGf4FOR3d%2BxEjgbkEqhpnak7kQlhqnegkkXOnjzeTQCyV10Yh0EuFXonVqXr%2BBgpSZNKpZjKOeg4ZEQ3mQeBnzATtUdb%2BB4Gl0x6fVPxxV88EgUobNbOcZMypOd2e13sX3cKFRPSppO6o6isXr770tqtCADhIOjZG07jQJACxk54OVmCs2zA3z&X-Amz-Signature=c170a90029c1d9584657acc535b5ae748b9e861782f204206e15b802b0c33956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633L3IHCG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T145707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhLITlkY6azva%2FGdFtB%2BCnVjXVVmX91e8Rdmn1gTtLTAiEA2%2F8BYiSQCx7dFNOpFYBFKSOge9hkIn6iTs7siomk6x0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQTR52ikzhmK%2BlUfyrcA%2Fx2ZVvkXpzIeZI%2FTko0WP0xsjgpNz%2BWig0dtJTz%2FXQlWLCqpoS07ut3ynUjV1FMX%2BaiZSljjja7U3Dai6sTZeH1r3zmn4s19GLtfHMpVpifQyjvkvCCyIvL0OhRjISX4HnD7Cvw1TzMyzhPHZIs78xmDPNq6x%2BIs1yPtmzNBO8Zh4LPU6BV4TxuI76eHyCvzb1WKrzsGqJQ6dg4%2Fp04UoPyrAm996mvXfuBITPQswwNh1qSJAVJI2QP1w38LDTSzycbztGgcH%2BVdhoFDy%2BHaVXbrhVVwZX91%2FF2u5QNx7Lddki%2Fms0n2OXMKkld8dAGRlLb0Fl%2BN9vCsQ5Hl%2BS9BtObKMr2d3YCd3ea2Y29Gi8QSX4yv%2BpZFs9vu%2BMN5ytFy0S1vL2Ykbk5EgDZ2vvlFm9Q%2FuFAYv5wcz7wjkhTjB5hrALaejKNzbRGLAuIeSYmRhqk%2FW1RFvXO4ordVqhRFT7HukaWdFuD9ZbjvuwBp6o8xmr0DG82mhmSHAur06jwyD2o5imrBFnj8Hua0sCmhGRd2Q2tfSanIvDBiUelYvRgk9nq250itxC%2FHsINMjhwt7KZzWSUlvhV4RZPW8jdFR%2FLjTgxN6NYu6YhfAizgT%2B7YNerIQd9gV9SnfkXMM2a1ckGOqUBfXt5N699wBJ2CR1GrHRiGBta8v1aFiqslbZZ24aGf4FOR3d%2BxEjgbkEqhpnak7kQlhqnegkkXOnjzeTQCyV10Yh0EuFXonVqXr%2BBgpSZNKpZjKOeg4ZEQ3mQeBnzATtUdb%2BB4Gl0x6fVPxxV88EgUobNbOcZMypOd2e13sX3cKFRPSppO6o6isXr770tqtCADhIOjZG07jQJACxk54OVmCs2zA3z&X-Amz-Signature=07e4a320c4401273eaf5141ec10dfd869f2377092ec93182d1a138ac39a8159f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
