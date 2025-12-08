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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGVZA7G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD05qMyMACzG4snXHlrkECdNn2uqP%2FNEn9f16l%2FibO0GAIhAOof1khSVsULsK84YDaFjEpHV%2F4M2v%2BwOxf3fUHoVdErKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDoXWiQbHFh4MSJusq3AMFXKmSok6%2F3WsUEGd7jZxZkqCW9ieeCe370G6FhmHglTnyXiY322wOlH%2FR4CdH844p2rtkIm7YaJiHjG4NLro3Xwgom25ZPGpQMKWIdrBvQcCK%2F7KMFmkcp2BNS0zghTfOyNKZOVwbXi7DqzijZSeV%2BHnvilTseFZejm97pv4%2Fl0H32Y7lAnteRN%2BrMdwa4PVZrQnklEu4mASvBd42DsLbPuT98gjLoo5AeMs7DYFCHI3v8AgTL5Skv70%2Fkn4vV8n1%2F7N6m9rbF4mSjfuCNC32XIMi9VjxgtJwlhY14sbrYYsV1qIKh8IwV%2Bkm5YpGBwRCSymQa9b6cEg31s4Jczk%2FNOsR7ksg7nDOM%2FJ7OAskl0HQJeC8gYn1MFIGWM7iNem6EddfaHdz8tmy5w3eG7QjNOQDK1VjZs4H4FF%2F4LWFRbMmeK6oUguAjt%2F2CBs8G%2FTCM3x%2B%2F0fztoKk%2BvJzdIUinjEV5qlKLxUrqw2Hg8KJYzvaSQF4wsLMZUs4WSdLzMxgjSqtD56zLaTe63Jx7S8npz2ZnS%2BpZ8sG3paEFrMBPrCCDCQB7E3iHD8iyRTtCq5puT2YVi2eYLTpUk31h%2BlZ8TJN%2F71y3es2R97uaGLsBoYzaI9ju%2BX%2FYBJ0MjDp0NjJBjqkAVeqz4ryjhXxowYngOdcxdC%2FjBK0Eixq6y9v9jJqwi0F%2BqFBpIT5bBfQDJxjg96Xgvgo2mONb6WXQGe9RezOKUCuwXz5zcpm0r9a8AySO59a4NARezckGS2nGSzB8m0rcI6LN01fjhwahswfeO%2BSXCFfLsjs2yzCLVkJNdJJSWJbIGB3phDeDTUtdVJMdojyORh5bUJRaUYMoMZrH3R9yQpg8JaJ&X-Amz-Signature=01cdb3e76b810dc53be6337c122d36da5dc173102e9fe80c8d5c3ca84b7b1eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGVZA7G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD05qMyMACzG4snXHlrkECdNn2uqP%2FNEn9f16l%2FibO0GAIhAOof1khSVsULsK84YDaFjEpHV%2F4M2v%2BwOxf3fUHoVdErKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzDoXWiQbHFh4MSJusq3AMFXKmSok6%2F3WsUEGd7jZxZkqCW9ieeCe370G6FhmHglTnyXiY322wOlH%2FR4CdH844p2rtkIm7YaJiHjG4NLro3Xwgom25ZPGpQMKWIdrBvQcCK%2F7KMFmkcp2BNS0zghTfOyNKZOVwbXi7DqzijZSeV%2BHnvilTseFZejm97pv4%2Fl0H32Y7lAnteRN%2BrMdwa4PVZrQnklEu4mASvBd42DsLbPuT98gjLoo5AeMs7DYFCHI3v8AgTL5Skv70%2Fkn4vV8n1%2F7N6m9rbF4mSjfuCNC32XIMi9VjxgtJwlhY14sbrYYsV1qIKh8IwV%2Bkm5YpGBwRCSymQa9b6cEg31s4Jczk%2FNOsR7ksg7nDOM%2FJ7OAskl0HQJeC8gYn1MFIGWM7iNem6EddfaHdz8tmy5w3eG7QjNOQDK1VjZs4H4FF%2F4LWFRbMmeK6oUguAjt%2F2CBs8G%2FTCM3x%2B%2F0fztoKk%2BvJzdIUinjEV5qlKLxUrqw2Hg8KJYzvaSQF4wsLMZUs4WSdLzMxgjSqtD56zLaTe63Jx7S8npz2ZnS%2BpZ8sG3paEFrMBPrCCDCQB7E3iHD8iyRTtCq5puT2YVi2eYLTpUk31h%2BlZ8TJN%2F71y3es2R97uaGLsBoYzaI9ju%2BX%2FYBJ0MjDp0NjJBjqkAVeqz4ryjhXxowYngOdcxdC%2FjBK0Eixq6y9v9jJqwi0F%2BqFBpIT5bBfQDJxjg96Xgvgo2mONb6WXQGe9RezOKUCuwXz5zcpm0r9a8AySO59a4NARezckGS2nGSzB8m0rcI6LN01fjhwahswfeO%2BSXCFfLsjs2yzCLVkJNdJJSWJbIGB3phDeDTUtdVJMdojyORh5bUJRaUYMoMZrH3R9yQpg8JaJ&X-Amz-Signature=2dbafc66cb58ca2d8552ed4c777f9dcc971217f21c26d035f1cf187df6e38aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
