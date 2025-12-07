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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQNU3R6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0AzmYSY4AloK%2BvkzybxojGSl3ySlyPpq8eH9pvceEOAiBAp1YiM4m0qsVkklY%2F7JdMliHjV9%2FlW7Kf%2FbDpQQbHhSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkOJiFPkj5iESMT1QKtwD%2FcEnLdDiaFdsBxYG8b0lzrIIovFXERBg0yo9i5bZOhaOrX0cd%2BoYmE9e%2F%2BOoPFNne%2Fh0a%2B6MfEvP6xtHp2Sn78Lc8p076BeatRdxBxPYnHQeKGKPebkstm39%2BJmsE%2FpJBazXXIhlTLhoWKfKina6t%2Bwd4Cwhu3f4BCQ0hImH3Z0dqV%2FHmbTJaRXxWjYmOjAtVPdo7avnFBcWlluMCT6h9t4nSwqME%2Fzd6G0Co1SV71BwcdhmdIQNZREON9Q7fj1aGkVWlmoCwfat2%2F4sFYOig%2BTZSgTtiE59yY%2FrT4zIRquUsYK8Oz37XF7yxvgV9lm%2Fj5Gt01w7Q%2BoHJYdlTnZyj9Rgp68KLBKbN%2B7QyLXMYT0ehULS0Pa7VtoiLk1MD6%2BoLXzhF7P0wR4DWPt%2FXymx%2FDxl29tHcTdJseW56Oqx7fwmbajuV8IFcEPBWJlVeh%2BWBspA0veC0gw0ldghfbmd9XINiFJaLvxmpoDJ9KEevv0LiPyGLZ5ZvNiT0zy7mD6FbCelTZO3CnabxontAPPoUixjsWpQ0s5moNL9d8p7q6VYdFbucA2qPh67DCB4j584f8wmkHv3hdl8Nc%2Bcd8zBEdgVoyl5eC6wXAadfrFKGkm8KJIY2qvI%2BU1c2gwwhv3SyQY6pgE9H1le044FlbL3uH4s2jgZwwP%2B%2FLJTVsQmXNvpbOxU%2FZrmnhQfE5u7yOXwjga1QeX2JtvlStfzx%2FUvIGWqfLreRGP%2Fb8YzDFAl%2FV%2FaPiovt60e23yuUjEYSZ0eG%2F1Zm53h0JOuqNmZKZMkuJ%2FigUXqPjPwfShgthaaofGLxO%2FXMftgrZpojFeGh1mDhM%2B4WPw5ypb0etkStGVefxHiAKIZUMNZe9u%2B&X-Amz-Signature=25e0b8277ad2995ac6fed2cbfc211fb6dcfb54fee6b693289a15aada47d1baee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWQNU3R6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0AzmYSY4AloK%2BvkzybxojGSl3ySlyPpq8eH9pvceEOAiBAp1YiM4m0qsVkklY%2F7JdMliHjV9%2FlW7Kf%2FbDpQQbHhSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkOJiFPkj5iESMT1QKtwD%2FcEnLdDiaFdsBxYG8b0lzrIIovFXERBg0yo9i5bZOhaOrX0cd%2BoYmE9e%2F%2BOoPFNne%2Fh0a%2B6MfEvP6xtHp2Sn78Lc8p076BeatRdxBxPYnHQeKGKPebkstm39%2BJmsE%2FpJBazXXIhlTLhoWKfKina6t%2Bwd4Cwhu3f4BCQ0hImH3Z0dqV%2FHmbTJaRXxWjYmOjAtVPdo7avnFBcWlluMCT6h9t4nSwqME%2Fzd6G0Co1SV71BwcdhmdIQNZREON9Q7fj1aGkVWlmoCwfat2%2F4sFYOig%2BTZSgTtiE59yY%2FrT4zIRquUsYK8Oz37XF7yxvgV9lm%2Fj5Gt01w7Q%2BoHJYdlTnZyj9Rgp68KLBKbN%2B7QyLXMYT0ehULS0Pa7VtoiLk1MD6%2BoLXzhF7P0wR4DWPt%2FXymx%2FDxl29tHcTdJseW56Oqx7fwmbajuV8IFcEPBWJlVeh%2BWBspA0veC0gw0ldghfbmd9XINiFJaLvxmpoDJ9KEevv0LiPyGLZ5ZvNiT0zy7mD6FbCelTZO3CnabxontAPPoUixjsWpQ0s5moNL9d8p7q6VYdFbucA2qPh67DCB4j584f8wmkHv3hdl8Nc%2Bcd8zBEdgVoyl5eC6wXAadfrFKGkm8KJIY2qvI%2BU1c2gwwhv3SyQY6pgE9H1le044FlbL3uH4s2jgZwwP%2B%2FLJTVsQmXNvpbOxU%2FZrmnhQfE5u7yOXwjga1QeX2JtvlStfzx%2FUvIGWqfLreRGP%2Fb8YzDFAl%2FV%2FaPiovt60e23yuUjEYSZ0eG%2F1Zm53h0JOuqNmZKZMkuJ%2FigUXqPjPwfShgthaaofGLxO%2FXMftgrZpojFeGh1mDhM%2B4WPw5ypb0etkStGVefxHiAKIZUMNZe9u%2B&X-Amz-Signature=cc9d9a8c3d3f4e35ef5e30ff0e7c3da35380843cb1a2a41d3139f715e2906276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
