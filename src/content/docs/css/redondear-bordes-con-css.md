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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJUJWL2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdIQSb7YnBBr3gL%2FmOvh1VwkZx1kTgAal9MrjEEm%2B7cgIhAMnhL70muRNbgbqh9iBCRuWoNcrO%2FEjtXwOQa2cXPWLkKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykpdULtiliBK3YOTQq3AO6mpZhVfQ970utB9bRNwStV7aLn91i9VBW31vSZ2%2FuEnAslohoRxMu5nN0Q5k9e13yk%2B66EoDPSex1ZwoBITXqHnJWfsu%2F3clOVn%2BU0fMjmNOOR6VWRtFTICT2ANk7GrbaVMsM9PGD6jUpehCjCTFEPvIEpyrxTaLTOgcx4uTIRQoFEmJM7B%2BDqutch8wHsUqiAZs2sYXkpMt3dcd3SpPptgeo3TrbPC2dv2ev3I4XH9hHY11ObPUrnsm4ouIWK1vgL80TMhL3BbXWcapX93HKWMB%2BhkJcSzetaidqY2dkFJdC63TVBsmwYV9B5JDRuMxDyKP5Wi88%2BrLhJym%2B4SjQBhe4UCG9MaKJq43lPuE84%2FLYGZUDU19HfPW9y2MClhObhPq5nATTj4dlemIPGLx8LzwwAB3TOVpidTT6%2FeblRWr2VY0bVWvYLQjhOo%2F9BeT4I4U8rhCPhEFWmIJVkvDoxtox8kohK6%2Ff6WPFlQVKJA12osRh1icaGD0bF2STopJBKcMc0JCBHDs8ovU4ZTG66IIVo137l6NReqzM1jl3XpoJHdI%2B%2Bnteivh8LtAIlDDzTzZuc4nCXiCcobJxhoWoFrDZHYXqG57rf8bQ6ukorss6jg4vNX8nm1EJbjCO%2FdLJBjqkAV5dQGpZoVIbIm1BqWbYhBIthTgWNoe0DfTuuWpjwPhxt8W7K8Qmi3aze6cJ2ZvGcIgKJCY8gffKj0HoQuDOw2ipRh9X6YxaR0VIJsQ1yoFbzrBY7PHzN19IVJFde%2FwtSOWz%2FXB0Bm7hJVw4xvMpQPlBVR9Rz%2BLKYcE4xxHUl%2BiaRo0vdGjOVrZcfIcH597u3030SBrUMEUaGZqvgi5%2FgiCfPmq6&X-Amz-Signature=16aa8a12af9ca90e18115da9764a0ad71e19ae5dcd51b71fe4814788fef509e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLJUJWL2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdIQSb7YnBBr3gL%2FmOvh1VwkZx1kTgAal9MrjEEm%2B7cgIhAMnhL70muRNbgbqh9iBCRuWoNcrO%2FEjtXwOQa2cXPWLkKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykpdULtiliBK3YOTQq3AO6mpZhVfQ970utB9bRNwStV7aLn91i9VBW31vSZ2%2FuEnAslohoRxMu5nN0Q5k9e13yk%2B66EoDPSex1ZwoBITXqHnJWfsu%2F3clOVn%2BU0fMjmNOOR6VWRtFTICT2ANk7GrbaVMsM9PGD6jUpehCjCTFEPvIEpyrxTaLTOgcx4uTIRQoFEmJM7B%2BDqutch8wHsUqiAZs2sYXkpMt3dcd3SpPptgeo3TrbPC2dv2ev3I4XH9hHY11ObPUrnsm4ouIWK1vgL80TMhL3BbXWcapX93HKWMB%2BhkJcSzetaidqY2dkFJdC63TVBsmwYV9B5JDRuMxDyKP5Wi88%2BrLhJym%2B4SjQBhe4UCG9MaKJq43lPuE84%2FLYGZUDU19HfPW9y2MClhObhPq5nATTj4dlemIPGLx8LzwwAB3TOVpidTT6%2FeblRWr2VY0bVWvYLQjhOo%2F9BeT4I4U8rhCPhEFWmIJVkvDoxtox8kohK6%2Ff6WPFlQVKJA12osRh1icaGD0bF2STopJBKcMc0JCBHDs8ovU4ZTG66IIVo137l6NReqzM1jl3XpoJHdI%2B%2Bnteivh8LtAIlDDzTzZuc4nCXiCcobJxhoWoFrDZHYXqG57rf8bQ6ukorss6jg4vNX8nm1EJbjCO%2FdLJBjqkAV5dQGpZoVIbIm1BqWbYhBIthTgWNoe0DfTuuWpjwPhxt8W7K8Qmi3aze6cJ2ZvGcIgKJCY8gffKj0HoQuDOw2ipRh9X6YxaR0VIJsQ1yoFbzrBY7PHzN19IVJFde%2FwtSOWz%2FXB0Bm7hJVw4xvMpQPlBVR9Rz%2BLKYcE4xxHUl%2BiaRo0vdGjOVrZcfIcH597u3030SBrUMEUaGZqvgi5%2FgiCfPmq6&X-Amz-Signature=a8fa7b73fff02ecf7ae66d619dc154da86d9cc2d46a35c6ec11b4f4ab4c69856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
