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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U77VGWP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAfMBKibKwdebq3xpfzXprkZpBbKg5zbHjofzpZksnxAIhANKe7df21QcKQLFL88qL%2FtUppV3MnPJDZ61pI5qKhTr7Kv8DCE8QABoMNjM3NDIzMTgzODA1IgwUH1tHoVccli0i5yIq3AP%2FLk1zQqo75XrYk3zTVsR0OR4imbSyr45zan6tVv6mZINj%2F4gxcMJy7sc97V1Z0FK701I%2Be6Qwn9y6tUXsh4GI6%2BQnnboHv47muGzIyHHqZP6BH0BGZ%2FS0n2sl480HVGjm%2F7gyYaLjU%2FFnJHlGACUIwfwBvkCqNCzQFYUQK%2FFUBMItoiQ82bVivWC1GWCKJt7JhaKtkobs06nBQVOTgJe1TFIgmlAqnDjIf%2FGECffVLYwCP%2F4AaK2ldnBZnkO3oTiXRzIpp62feUTvJ8gJ1v0iZy4J8oruiXf8GPcNGiOrxJxIQHBC7TwPRQbp%2B9gHdfe6w4OyjvanDoTWThEt%2B4Xy9ziLe%2FsZ8hiRV%2FpZGmfmUJzCwEn8PFvspXiuI1vZIFKUSwjS8c51hDEcFLHniuiYMehtMmy0fiC5RJIigFkmlJww%2B7rERtDFep8HW5OBG7vCUrtXLMC%2BBND29iPl5Kg4Zze%2F3vw%2F46v%2FegCnFMMMQsV162YDwCvLFqjnal7OfQTfGd9Z%2BMmtIFAHHwcoBSJcwpByWNFDlN9GQ4rCXQeu3vs8BJJS10PChSytADj2BH7iEvJGxPgRTadGtkKppK%2FOasupSbzOZl4C6MoUVkJdEKoUf7E3Iw7TEuxveTDKjMjJBjqkAVsR6pHWG021O1TymEXmBbS9JZdRYS%2Bm0IHpGB%2B8kGDNNfyph%2FDS4pSlwvtFSSPNQHaMkggrBceOOEtJzEbfzty5Q5C0QelMpJNiaB2CvRl%2FuAjyp5VBZ5IfEYU4b5vRigP54xHSmNgnHXJ32grF8GjfOPjCour3JKH1rheHHSPSPChtgkuD2%2FZ1RcR5a7EZk6TWFEN3ZjpmvKdz66JvZTrhn00Q&X-Amz-Signature=96c80c28fd123e62fa663ac6d152d52b66d7ac7bc0b718fd3adf4bf8f70f0524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664U77VGWP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAfMBKibKwdebq3xpfzXprkZpBbKg5zbHjofzpZksnxAIhANKe7df21QcKQLFL88qL%2FtUppV3MnPJDZ61pI5qKhTr7Kv8DCE8QABoMNjM3NDIzMTgzODA1IgwUH1tHoVccli0i5yIq3AP%2FLk1zQqo75XrYk3zTVsR0OR4imbSyr45zan6tVv6mZINj%2F4gxcMJy7sc97V1Z0FK701I%2Be6Qwn9y6tUXsh4GI6%2BQnnboHv47muGzIyHHqZP6BH0BGZ%2FS0n2sl480HVGjm%2F7gyYaLjU%2FFnJHlGACUIwfwBvkCqNCzQFYUQK%2FFUBMItoiQ82bVivWC1GWCKJt7JhaKtkobs06nBQVOTgJe1TFIgmlAqnDjIf%2FGECffVLYwCP%2F4AaK2ldnBZnkO3oTiXRzIpp62feUTvJ8gJ1v0iZy4J8oruiXf8GPcNGiOrxJxIQHBC7TwPRQbp%2B9gHdfe6w4OyjvanDoTWThEt%2B4Xy9ziLe%2FsZ8hiRV%2FpZGmfmUJzCwEn8PFvspXiuI1vZIFKUSwjS8c51hDEcFLHniuiYMehtMmy0fiC5RJIigFkmlJww%2B7rERtDFep8HW5OBG7vCUrtXLMC%2BBND29iPl5Kg4Zze%2F3vw%2F46v%2FegCnFMMMQsV162YDwCvLFqjnal7OfQTfGd9Z%2BMmtIFAHHwcoBSJcwpByWNFDlN9GQ4rCXQeu3vs8BJJS10PChSytADj2BH7iEvJGxPgRTadGtkKppK%2FOasupSbzOZl4C6MoUVkJdEKoUf7E3Iw7TEuxveTDKjMjJBjqkAVsR6pHWG021O1TymEXmBbS9JZdRYS%2Bm0IHpGB%2B8kGDNNfyph%2FDS4pSlwvtFSSPNQHaMkggrBceOOEtJzEbfzty5Q5C0QelMpJNiaB2CvRl%2FuAjyp5VBZ5IfEYU4b5vRigP54xHSmNgnHXJ32grF8GjfOPjCour3JKH1rheHHSPSPChtgkuD2%2FZ1RcR5a7EZk6TWFEN3ZjpmvKdz66JvZTrhn00Q&X-Amz-Signature=7aa9bf35220951cb6c6514a60ffebadcf3e42e934e136f67c5b1ff3776518223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
