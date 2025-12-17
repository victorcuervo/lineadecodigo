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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVB3OPRI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdtl9%2FdiZO%2BeBdwt93BYjj6L9o3tWtkQz6ULHcBEz42AIhAIL6aMaS7RbW5ia6qpoaotRYfcy2TgVT01UJ8TpXkPSZKv8DCHoQABoMNjM3NDIzMTgzODA1IgxW34NXyta8Iiq6x5gq3APqwG4P3Aj9NdXUHFxSF2QKeZDKRIjJP3FpnJupMBW7HBb4K8yFgSHoEF0kEjQCo2bBFVHGqM6Efvgf9Sr%2Bz763L%2F%2BIdhhibjItU2rLlNuRUpRZ%2FSqA0roDEvPp1lG1%2BNl02z0DFSUhO8H1SR%2BgPY0UCsCp3r2I8U3JHWwwGPG8CAeeWyzxtJ17n6ESrxB72E%2BdZFIKlcqhINViDFaT9S8Qnj5%2BhAYKLm%2BmIsQr254XtKDxGRuml6vOS9yFSqKCW3Ds%2Ba0UrjumBGt4JR%2FM03JzkRMOuSpJJmFK7aP8uZPLbIeNoZYA7RuIy%2FEArBh32D7qbKve9NOTDYyrtwz40kfDyh9Uwo%2FeBMg%2BjPZGYE5ju1VXUMqyFMhCuaFCwPSSMNNaVV707KbSNxbxTkQMAPyajhQ2skHvsm0OL1a%2FqroCi3UHrMA7xzou73ZOWCRyRUZjF%2FTECrcd0k1rHpqZkcwVJY17kN8kFhsSj0041hoKCR0HWJj5dQt27L57l%2BU1beUoBVvBE3P4q%2Bw6EKwN1V4QcI587%2FVrywlHBo%2FCm7mXGsf0MFriS4vL0oTGc8byinnXc5ZUV7AmImQRJil%2FLjs357GCY2f%2BT%2BDbmqxqAwnVwDRLrYJexUGoM%2BQS2TD574nKBjqkAWupasq4CjSE%2FJZnRt68pu9TeKEcG%2BZTDk%2Bmtre81gtZdTVC9CaiK2delsaVLLWJQF9X0QnR%2FwMET7mZg86QEO8LwD7hcGdrUCoW9aqh1WkxeX1j4gflchEeDUCUM9Wt9dbQSZPpycEio2FVF0w2bZajWL4TS%2FmsNvmrXrGV82wX8YZNeSx1EbrdqoRMf7TDZXkXYUput2DxCICbrcjLAVj855G6&X-Amz-Signature=9d2b5a5feddfc49aaa893082f6977525437dff87b3873e9d274738b48570c9f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVB3OPRI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdtl9%2FdiZO%2BeBdwt93BYjj6L9o3tWtkQz6ULHcBEz42AIhAIL6aMaS7RbW5ia6qpoaotRYfcy2TgVT01UJ8TpXkPSZKv8DCHoQABoMNjM3NDIzMTgzODA1IgxW34NXyta8Iiq6x5gq3APqwG4P3Aj9NdXUHFxSF2QKeZDKRIjJP3FpnJupMBW7HBb4K8yFgSHoEF0kEjQCo2bBFVHGqM6Efvgf9Sr%2Bz763L%2F%2BIdhhibjItU2rLlNuRUpRZ%2FSqA0roDEvPp1lG1%2BNl02z0DFSUhO8H1SR%2BgPY0UCsCp3r2I8U3JHWwwGPG8CAeeWyzxtJ17n6ESrxB72E%2BdZFIKlcqhINViDFaT9S8Qnj5%2BhAYKLm%2BmIsQr254XtKDxGRuml6vOS9yFSqKCW3Ds%2Ba0UrjumBGt4JR%2FM03JzkRMOuSpJJmFK7aP8uZPLbIeNoZYA7RuIy%2FEArBh32D7qbKve9NOTDYyrtwz40kfDyh9Uwo%2FeBMg%2BjPZGYE5ju1VXUMqyFMhCuaFCwPSSMNNaVV707KbSNxbxTkQMAPyajhQ2skHvsm0OL1a%2FqroCi3UHrMA7xzou73ZOWCRyRUZjF%2FTECrcd0k1rHpqZkcwVJY17kN8kFhsSj0041hoKCR0HWJj5dQt27L57l%2BU1beUoBVvBE3P4q%2Bw6EKwN1V4QcI587%2FVrywlHBo%2FCm7mXGsf0MFriS4vL0oTGc8byinnXc5ZUV7AmImQRJil%2FLjs357GCY2f%2BT%2BDbmqxqAwnVwDRLrYJexUGoM%2BQS2TD574nKBjqkAWupasq4CjSE%2FJZnRt68pu9TeKEcG%2BZTDk%2Bmtre81gtZdTVC9CaiK2delsaVLLWJQF9X0QnR%2FwMET7mZg86QEO8LwD7hcGdrUCoW9aqh1WkxeX1j4gflchEeDUCUM9Wt9dbQSZPpycEio2FVF0w2bZajWL4TS%2FmsNvmrXrGV82wX8YZNeSx1EbrdqoRMf7TDZXkXYUput2DxCICbrcjLAVj855G6&X-Amz-Signature=70de37bfbecb099e5196cfcaf271bfacd180f29238608387c8c67840ffe6735d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
