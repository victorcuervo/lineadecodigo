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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5F2FAB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BPUxB21D%2BNRzSrmQp7%2BwHeWayQXmerjP0DeJXN%2FivkwIhAPgRcEcoVQhGLMwf3bjdsmo%2FocmeWpKs9eRrTcMCwOJ6KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmKyGPCV23k%2FEu95Mq3AMGlZcA2YyeNxfCvn0iNs1szCg1%2BLlmXSx37zNg2wu99k2omxG%2FNkKJ3M6htNYUce9IHBF8uL1H2ks6AGYoHGjy2QWgYSODWVJCJdcRFMMXNNAC8YEf6C556SyuuJMaPHXFTq5Z0uoqWpd56KZqOGcX7NgMAfFVdunGPaLse8C5pUZ2MlNmK93EobsN%2B77T%2B1XA2eNeGfC%2Fxu6MG7hhaozOOJP6oFo5pt%2FMTWKfmNzou2iTmZrhquu8e9qu0WTijpZG%2B0Dp%2B9GOqfgGLHvarvdxxM%2BSzl6JXGEf8tLmJityHw%2B2SMOKuY4VRYuR1Z7WPGE60ixANNX%2BbfsOiY3XC9pTFcAKO8%2FPAdr4QWaaezfE3iUkKlM0SV9YKrefsDErb6SJGT63IAB2nCa3LXhR6lFEt9r5JS68Gd5UMJeyZZdg%2Bwl1FZ4CSF2sBTfLUGcVU2SB46s1jhVy1SYpUiPmy7JmklqEw1Zbi5dXOCMAdIyM8QOy4Q7Mx9Yqf5DgFM%2BrnUOfRkZN3qX4tHsRDgMpvyk5Mt495ummckgrj%2BBuUzLOdAEHg8T6Ic0iSpfCAMYkyJZEBHxRMq8vO1WbXXGrg8RBwlG65QHajIsTBlXBfnwXl0oAcDw%2BeAFFoXPFHTCdoIvKBjqkAV%2FZdTVj%2F7NF0whcKH2E3%2FekrdJP9sqS5yl2u5ZBLpgMwSe4P0hjtb%2B8%2F7NRCuOmxUL8Ks3dO0y3FJ4GTYiLFalJHCoBuSEC7xeKxG7p2u7YVLXPtBxvD8Y%2B%2Fl6yK2s02uB2UKFyuTqx7izyMo%2FeHhXbI2WWI5rWqEdICDErsDxL1phuX1M7zLl8hKMyRbcNnYI1ChzL9zDYOjnkYfUJK6C3Ek1w&X-Amz-Signature=9530506df1af680d7af0433c54083792747119e77fc640dd49c9dff96fdcd6fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RG5F2FAB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BPUxB21D%2BNRzSrmQp7%2BwHeWayQXmerjP0DeJXN%2FivkwIhAPgRcEcoVQhGLMwf3bjdsmo%2FocmeWpKs9eRrTcMCwOJ6KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmKyGPCV23k%2FEu95Mq3AMGlZcA2YyeNxfCvn0iNs1szCg1%2BLlmXSx37zNg2wu99k2omxG%2FNkKJ3M6htNYUce9IHBF8uL1H2ks6AGYoHGjy2QWgYSODWVJCJdcRFMMXNNAC8YEf6C556SyuuJMaPHXFTq5Z0uoqWpd56KZqOGcX7NgMAfFVdunGPaLse8C5pUZ2MlNmK93EobsN%2B77T%2B1XA2eNeGfC%2Fxu6MG7hhaozOOJP6oFo5pt%2FMTWKfmNzou2iTmZrhquu8e9qu0WTijpZG%2B0Dp%2B9GOqfgGLHvarvdxxM%2BSzl6JXGEf8tLmJityHw%2B2SMOKuY4VRYuR1Z7WPGE60ixANNX%2BbfsOiY3XC9pTFcAKO8%2FPAdr4QWaaezfE3iUkKlM0SV9YKrefsDErb6SJGT63IAB2nCa3LXhR6lFEt9r5JS68Gd5UMJeyZZdg%2Bwl1FZ4CSF2sBTfLUGcVU2SB46s1jhVy1SYpUiPmy7JmklqEw1Zbi5dXOCMAdIyM8QOy4Q7Mx9Yqf5DgFM%2BrnUOfRkZN3qX4tHsRDgMpvyk5Mt495ummckgrj%2BBuUzLOdAEHg8T6Ic0iSpfCAMYkyJZEBHxRMq8vO1WbXXGrg8RBwlG65QHajIsTBlXBfnwXl0oAcDw%2BeAFFoXPFHTCdoIvKBjqkAV%2FZdTVj%2F7NF0whcKH2E3%2FekrdJP9sqS5yl2u5ZBLpgMwSe4P0hjtb%2B8%2F7NRCuOmxUL8Ks3dO0y3FJ4GTYiLFalJHCoBuSEC7xeKxG7p2u7YVLXPtBxvD8Y%2B%2Fl6yK2s02uB2UKFyuTqx7izyMo%2FeHhXbI2WWI5rWqEdICDErsDxL1phuX1M7zLl8hKMyRbcNnYI1ChzL9zDYOjnkYfUJK6C3Ek1w&X-Amz-Signature=026d5b4e02d60c5b95c821c727dd0fd083354a00e5398b1db2519448d98369dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
