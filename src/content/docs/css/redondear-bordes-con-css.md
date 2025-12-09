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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJTNYW2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgCvdegLswLZ9WLmLparTfyo7AVlkRERdAgxvwL2yAoAiB9RNHtgwWeGg9oDx1MsRsRkH%2BxrFya4pgTvOWxWCcIwiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJf6NElK2UcOlZr50KtwDQ%2BFOSt1NDcj7x5uDEH7FpoIcOYyzuQmrCJy0kKSA1lWjdejX786ph1%2FXJeC8z8wb7bienPu0RL55%2Ff4QVm7MXbqBQu%2BTYcBlZNEeQ50eIa00UUO2R%2BnYfYznXXmIsfTVigPiaXRL7ByqW4xLabjcC78i3v6iYmVQFy1mWxFTjPcNipxBfimqjwkcIdyeteDvcz7VZrk31NnejQrrzU7lhbCVIAzTBVEMeyg9D36DIoCp6wvqKkGu2RvVdhfodMnsV%2F%2B1%2FfhDBEIL1kWAl85T5%2Fu%2BOSzIG1L%2FXMMsZSF6vgC1IO3atZUKDTpomj4EC08L1mL4w20hX5JAuoHTU1Y%2B70%2Bz9dXuz%2B4KqV71dxNapaiyuJWjbVEAcOWjrZzL8%2FPw%2BJMrKMxu3KNZOK3n7eYU%2FhZjkiMya%2F7qZ9gfaw0jMKqIUVhmIUoUZow%2BBixmszphmODbF0N3SvjaxSyH810%2FKFnlDthBMztQdqU7u8sQKcRgaeoyK%2BuPV%2FAZbJk7y3CobSwI%2FkxbfDk9WixakDB7dCpGT3AisDIWK7GcHnPL5MSmr3dW%2FCCNp%2BpmYq5buylEnjdcFvzb3pyQmvc0pc%2FUfp4egQnBOyPxyUFfRYYMGJmoO41bJP%2FSz3XKjQwwl%2BndyQY6pgHfyp2I3%2FpS3yLOgu1UHiTKbmY7tLK6S69IRYpGJKr9apu3U7mq1KRWNDLAeWMO8dqU5GJv48cbvfYbVzevGcOhvhiHsKCdE3Um1H0u79wZRm%2Bxw8p9vhXCwb88fERY446sgOqgyf1qVXz9R2fBlh6dyHeb%2BU7BBHP9h5lE6B8AKWNBTRZxvV4ByG4t635Ka8EzsIOpYr8A3VO%2BROMqSSeCy42qm6eM&X-Amz-Signature=7464aad91597e9dbfa55769d9c0908ec5e9b8b72abdd017fda4d45075f829add&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFJTNYW2%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDgCvdegLswLZ9WLmLparTfyo7AVlkRERdAgxvwL2yAoAiB9RNHtgwWeGg9oDx1MsRsRkH%2BxrFya4pgTvOWxWCcIwiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJf6NElK2UcOlZr50KtwDQ%2BFOSt1NDcj7x5uDEH7FpoIcOYyzuQmrCJy0kKSA1lWjdejX786ph1%2FXJeC8z8wb7bienPu0RL55%2Ff4QVm7MXbqBQu%2BTYcBlZNEeQ50eIa00UUO2R%2BnYfYznXXmIsfTVigPiaXRL7ByqW4xLabjcC78i3v6iYmVQFy1mWxFTjPcNipxBfimqjwkcIdyeteDvcz7VZrk31NnejQrrzU7lhbCVIAzTBVEMeyg9D36DIoCp6wvqKkGu2RvVdhfodMnsV%2F%2B1%2FfhDBEIL1kWAl85T5%2Fu%2BOSzIG1L%2FXMMsZSF6vgC1IO3atZUKDTpomj4EC08L1mL4w20hX5JAuoHTU1Y%2B70%2Bz9dXuz%2B4KqV71dxNapaiyuJWjbVEAcOWjrZzL8%2FPw%2BJMrKMxu3KNZOK3n7eYU%2FhZjkiMya%2F7qZ9gfaw0jMKqIUVhmIUoUZow%2BBixmszphmODbF0N3SvjaxSyH810%2FKFnlDthBMztQdqU7u8sQKcRgaeoyK%2BuPV%2FAZbJk7y3CobSwI%2FkxbfDk9WixakDB7dCpGT3AisDIWK7GcHnPL5MSmr3dW%2FCCNp%2BpmYq5buylEnjdcFvzb3pyQmvc0pc%2FUfp4egQnBOyPxyUFfRYYMGJmoO41bJP%2FSz3XKjQwwl%2BndyQY6pgHfyp2I3%2FpS3yLOgu1UHiTKbmY7tLK6S69IRYpGJKr9apu3U7mq1KRWNDLAeWMO8dqU5GJv48cbvfYbVzevGcOhvhiHsKCdE3Um1H0u79wZRm%2Bxw8p9vhXCwb88fERY446sgOqgyf1qVXz9R2fBlh6dyHeb%2BU7BBHP9h5lE6B8AKWNBTRZxvV4ByG4t635Ka8EzsIOpYr8A3VO%2BROMqSSeCy42qm6eM&X-Amz-Signature=c71081dc1f2279dded67e481d297e27f4f4465b3070eab21ea7bfc39b6c0122c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
