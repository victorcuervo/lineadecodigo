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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIDBA5L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwk%2Fisk1LH1h21E3cvA0g18xRhR99div7419uPlgoT4AiAG2oExi7ir87dINcySI9qNDswivs194EcIigI5YeKGgir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMCtqjGFKphs%2FL9KB1KtwDVM%2FT0QuPlcqQDz%2Bf%2FQ1UOrZosxQUWImJ6uogY8DLjNx06WIZDjQGJpk2GePISF73u0xWALBLm8jPz0Lv%2BQasiWpvQaZ5EI4pTCczqQxoVZjPhBDk4sVCsl8RfWell1yPI5qE%2Fdq4US69hRANvN56aWzMAtmgIWzyq7fyXZE1u0vH2dKwnKrC%2BaMVZIwXrIiX7ln1eo3hF%2B5DXLNqNqJplhTezw302CRZukOaVcYydOtdFsGjtGVppSGdp8vaGRUp8DCNyg9tsBagT1FdHcvCj1czz7F07TXY4kCUNn%2Fe7AwpRR5bQo7rGvLeRgwXgJimq7NiJqIjI3aG3J52G03%2Fod%2FJ9MXFmm%2BZYh%2BSrXoHSeiapCge6vekB3cca8uJ2GkA7srEb7sxyZUvkPHe2rwLRayrowPlhi%2FcIgXWMoE7H55dEHZCoWsgdwH6dYUns%2BuES%2F6OOP0SkybqNo8G3IP%2Bb39WIQtRbgwaLl%2B4B1NeGhYIIzF7nNvGk5Vaha290ev9Wc0gQ25bvF3J%2FzTkPSpIkqII0WtyWprhGdxebzevVnHQfCgOjGDj8ZYI00MDgV2yX8COJb%2BC7dPQfNbwyUExHuu5d%2B2BjGi0xmi7FJVNLJ8x4upkf8Hf9x30%2F%2BwwhKfQyQY6pgE1U%2FPxYiJ5OwAQgeQ2%2FiMOM4HwFpG5%2BLzzL6cdF76qD792DHXrhCgvPo0cWrTpCcL4wyyzxchE%2BtYOgvndZl4Ls7s3Iiwc9TXwIA1gbYt28XbDarsKrTHGWKE4JX0JkIkaw5%2FH5%2BFmkTNMW3b%2Bx1UIlfSbgAf4W0E1lTEs0TT8OZukqAVQzf1yXdBWNnaLA3fXhCwBsmJCIrBme1hxAqiv7KFOxsY8&X-Amz-Signature=10ee41fc00cfa46de36733ee3bc6d5b5bba0ddedd09fcc9331dda4faddd441ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLIDBA5L%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwk%2Fisk1LH1h21E3cvA0g18xRhR99div7419uPlgoT4AiAG2oExi7ir87dINcySI9qNDswivs194EcIigI5YeKGgir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMCtqjGFKphs%2FL9KB1KtwDVM%2FT0QuPlcqQDz%2Bf%2FQ1UOrZosxQUWImJ6uogY8DLjNx06WIZDjQGJpk2GePISF73u0xWALBLm8jPz0Lv%2BQasiWpvQaZ5EI4pTCczqQxoVZjPhBDk4sVCsl8RfWell1yPI5qE%2Fdq4US69hRANvN56aWzMAtmgIWzyq7fyXZE1u0vH2dKwnKrC%2BaMVZIwXrIiX7ln1eo3hF%2B5DXLNqNqJplhTezw302CRZukOaVcYydOtdFsGjtGVppSGdp8vaGRUp8DCNyg9tsBagT1FdHcvCj1czz7F07TXY4kCUNn%2Fe7AwpRR5bQo7rGvLeRgwXgJimq7NiJqIjI3aG3J52G03%2Fod%2FJ9MXFmm%2BZYh%2BSrXoHSeiapCge6vekB3cca8uJ2GkA7srEb7sxyZUvkPHe2rwLRayrowPlhi%2FcIgXWMoE7H55dEHZCoWsgdwH6dYUns%2BuES%2F6OOP0SkybqNo8G3IP%2Bb39WIQtRbgwaLl%2B4B1NeGhYIIzF7nNvGk5Vaha290ev9Wc0gQ25bvF3J%2FzTkPSpIkqII0WtyWprhGdxebzevVnHQfCgOjGDj8ZYI00MDgV2yX8COJb%2BC7dPQfNbwyUExHuu5d%2B2BjGi0xmi7FJVNLJ8x4upkf8Hf9x30%2F%2BwwhKfQyQY6pgE1U%2FPxYiJ5OwAQgeQ2%2FiMOM4HwFpG5%2BLzzL6cdF76qD792DHXrhCgvPo0cWrTpCcL4wyyzxchE%2BtYOgvndZl4Ls7s3Iiwc9TXwIA1gbYt28XbDarsKrTHGWKE4JX0JkIkaw5%2FH5%2BFmkTNMW3b%2Bx1UIlfSbgAf4W0E1lTEs0TT8OZukqAVQzf1yXdBWNnaLA3fXhCwBsmJCIrBme1hxAqiv7KFOxsY8&X-Amz-Signature=b9458f236eb006516783087e98cd9855e91d39095fc8ef4937a30963de61373d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
