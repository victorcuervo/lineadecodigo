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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLGNOUB2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIESx4L5KaNfkwZGHz0JPrZ1qwL7xi4nWyPIydNZxD9PTAh9dH2dt8yLAvHWW75%2FF1HUfCoWGev3I63w9kaNTGOP5KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl0eYMIkoMq%2Fa1hwYq3AMJ1Ksbz6EOf49%2BCi%2FSpw%2Bv%2FzJyU0ldi1lmn33wS5S95MuxqjvFW0Z8%2F6ziNoO7wB9ECK2BVMsSKx%2FjyTJ%2FwoD4FTRLBLd698dg7Hzzq0N9ieWDH%2FfAo2XbG8vpvsnXdl%2B9sTdPz1yipr%2FLIl1KgtHJTYBoHethWFHpYKVWQG3TP1ZmrwtkS6uR0i4Csqf25u8vn7Z4iNwoAm6viHv6oRGGvfDUnnlpIuaoxGX1KnY096SvMCl08FPvgEpdd%2BAmHR8oTUVJQT6bVjcXTnotB0571jx12a2EYrrKHcZbCOHGtYHBbpFavoMlEMMNGHqRGK1QBo1Cy56%2FOTAzTLTaocEXqjaRi8ytE67zu57rm8xsfFhlZ5xG%2BQizzjYDAoEaDfo2UVVhr5E2sihMgxGa%2FiGvu8XbxAg33kYJKHSZgSEaPU6YcTiVDEEzyPG%2FstD81Ks43zPIDOvzG596r9UrsXMaDRX5q03bg6T%2Bi2ADaD6un9CS7MExZTCTBOVJUkCsl3DHnmDt3jrDVGDVq3Z2SPja6sRebHLh3tr19mfi%2B%2F18dx%2FkzQVstV5KSNtMlag68udt62ubOuMttx0LJmpdHXRuE7Pha%2Fmk5KHf%2BpJf%2Feg7VPIVjW0Yuvrf9JLN7jDm0djJBjqnAd4Jn%2Fp2qr%2FxUbm%2FKq2%2BFiXZ6FTnU8Lr%2FM%2BX8dhVWYyyQ4L5PzEXplSkbDt5kPxhEvEUfBrNDqVnOcFF1HDtoaU9%2Br3QjDRE7kobTiKGf4VE129Wuv6hOwrrJT3%2Bphb9mPKLlbS%2Fbc70PNegzp1wAA0dtlNviuS0LqXkCqdgQdz%2FmnuVKtYRzZ8XQmF8lK0MQbxFkh0TzAAAaJy5c3ZHsrnTkOHz1ruu&X-Amz-Signature=35836904445b198f3d4c6915ba6b1390415d0bcfd511e85ade18eee2e54a975b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLGNOUB2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIESx4L5KaNfkwZGHz0JPrZ1qwL7xi4nWyPIydNZxD9PTAh9dH2dt8yLAvHWW75%2FF1HUfCoWGev3I63w9kaNTGOP5KogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl0eYMIkoMq%2Fa1hwYq3AMJ1Ksbz6EOf49%2BCi%2FSpw%2Bv%2FzJyU0ldi1lmn33wS5S95MuxqjvFW0Z8%2F6ziNoO7wB9ECK2BVMsSKx%2FjyTJ%2FwoD4FTRLBLd698dg7Hzzq0N9ieWDH%2FfAo2XbG8vpvsnXdl%2B9sTdPz1yipr%2FLIl1KgtHJTYBoHethWFHpYKVWQG3TP1ZmrwtkS6uR0i4Csqf25u8vn7Z4iNwoAm6viHv6oRGGvfDUnnlpIuaoxGX1KnY096SvMCl08FPvgEpdd%2BAmHR8oTUVJQT6bVjcXTnotB0571jx12a2EYrrKHcZbCOHGtYHBbpFavoMlEMMNGHqRGK1QBo1Cy56%2FOTAzTLTaocEXqjaRi8ytE67zu57rm8xsfFhlZ5xG%2BQizzjYDAoEaDfo2UVVhr5E2sihMgxGa%2FiGvu8XbxAg33kYJKHSZgSEaPU6YcTiVDEEzyPG%2FstD81Ks43zPIDOvzG596r9UrsXMaDRX5q03bg6T%2Bi2ADaD6un9CS7MExZTCTBOVJUkCsl3DHnmDt3jrDVGDVq3Z2SPja6sRebHLh3tr19mfi%2B%2F18dx%2FkzQVstV5KSNtMlag68udt62ubOuMttx0LJmpdHXRuE7Pha%2Fmk5KHf%2BpJf%2Feg7VPIVjW0Yuvrf9JLN7jDm0djJBjqnAd4Jn%2Fp2qr%2FxUbm%2FKq2%2BFiXZ6FTnU8Lr%2FM%2BX8dhVWYyyQ4L5PzEXplSkbDt5kPxhEvEUfBrNDqVnOcFF1HDtoaU9%2Br3QjDRE7kobTiKGf4VE129Wuv6hOwrrJT3%2Bphb9mPKLlbS%2Fbc70PNegzp1wAA0dtlNviuS0LqXkCqdgQdz%2FmnuVKtYRzZ8XQmF8lK0MQbxFkh0TzAAAaJy5c3ZHsrnTkOHz1ruu&X-Amz-Signature=4acb3e6e6e2b88906ab77a9dedfd3b520cd1ec9c6d1c8f147a07b750705ecdf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
