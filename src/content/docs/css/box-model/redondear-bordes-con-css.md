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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U476X562%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK3tuzGaBejHGyVD6SsnXa19r1wiTY5oBQ0J5N20QpUgIgZY8yTrIl4AfCvLSiCZbXrA4FitbUc1qBE6EfX%2B%2BmEa0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCT6rczSgg%2BMracfhSrcA9aqHh4LWwLpCu25OCp2%2B98SnB2XTgZFvbrRKaOOj5PKpT6v%2BMFYTx243S7era8yY8SdScqpcqAqzVZyUoTXeRLf2HgAQItCKwAc85cPkJ%2FUqqlAhpf231UwHae9MNjVgr9ruwUKWjQoi%2B4rzJeW%2BCvFhvDA67Uastve5jMyEjJltYbmVe94xFkQWPQ58CKGZ3dlevxSZ9qHFv1JCMg3Do48vnU11kLiPQLTsSunImB%2BOvX5ATx6yYGCvMWA%2Bm%2BRGdpCvbiYuNBMIVWKW522HN1akZHzBl2O9dRaohA3N8y4nO5Wa8%2FLD7NYe9F9iSUzdi4YglEN41sYcG76cJpFKGeB%2Fw4GZ5xrKiQkMMfqVpk1SD4N0xUDMd03CID%2BW6POfM8I2irggJuLR3hGfejcEUnigBEWZaHB702DL8Vhsd5fgME7j5thCoAl9TtOfr8FagSxFLJrWZ9oSioegi1AqO1a4l6MLqhqamsa%2FyottN4nKy2NV6VLyT%2Fy8G5JOnd%2BS99T8j6vqtvkHKhgyxOoVuGAz0GeyZthw63igPA2VBFuKJpWkz0a%2F75h2vfZeQ9cW34i049PntrLM934jX1v6R8jpz%2BEueTR9IqO%2FIoCK7cSrmZlkTI1wrIbGrYlMJ7piMoGOqUBZqbUJmTVt5JNU0iA5B9goC0zNdu%2BT7vp5rq1SsPhKnkxUzNtFBRjxk8ndET4uBdNoc4x4uA6TA3VTKfu0%2BqtpVwp8XgXnFJ8FZk%2Blbal5yos1cvFEn%2FFTT2Ezd0jAHIPtc57MV9ZxGeiX2V%2F%2FQuxMRT%2FT%2BZOmY%2F1LuqlXHChecAdF92c5A6LHfQV0JZXg8Vv9LP4FS8Ff%2Frg7YyFS1a1f%2FSjlxuR&X-Amz-Signature=e8789454f92b1fedc263ca536530f2b3d72b5177c7ba1f44c05a3175ac7c5fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U476X562%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDK3tuzGaBejHGyVD6SsnXa19r1wiTY5oBQ0J5N20QpUgIgZY8yTrIl4AfCvLSiCZbXrA4FitbUc1qBE6EfX%2B%2BmEa0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCT6rczSgg%2BMracfhSrcA9aqHh4LWwLpCu25OCp2%2B98SnB2XTgZFvbrRKaOOj5PKpT6v%2BMFYTx243S7era8yY8SdScqpcqAqzVZyUoTXeRLf2HgAQItCKwAc85cPkJ%2FUqqlAhpf231UwHae9MNjVgr9ruwUKWjQoi%2B4rzJeW%2BCvFhvDA67Uastve5jMyEjJltYbmVe94xFkQWPQ58CKGZ3dlevxSZ9qHFv1JCMg3Do48vnU11kLiPQLTsSunImB%2BOvX5ATx6yYGCvMWA%2Bm%2BRGdpCvbiYuNBMIVWKW522HN1akZHzBl2O9dRaohA3N8y4nO5Wa8%2FLD7NYe9F9iSUzdi4YglEN41sYcG76cJpFKGeB%2Fw4GZ5xrKiQkMMfqVpk1SD4N0xUDMd03CID%2BW6POfM8I2irggJuLR3hGfejcEUnigBEWZaHB702DL8Vhsd5fgME7j5thCoAl9TtOfr8FagSxFLJrWZ9oSioegi1AqO1a4l6MLqhqamsa%2FyottN4nKy2NV6VLyT%2Fy8G5JOnd%2BS99T8j6vqtvkHKhgyxOoVuGAz0GeyZthw63igPA2VBFuKJpWkz0a%2F75h2vfZeQ9cW34i049PntrLM934jX1v6R8jpz%2BEueTR9IqO%2FIoCK7cSrmZlkTI1wrIbGrYlMJ7piMoGOqUBZqbUJmTVt5JNU0iA5B9goC0zNdu%2BT7vp5rq1SsPhKnkxUzNtFBRjxk8ndET4uBdNoc4x4uA6TA3VTKfu0%2BqtpVwp8XgXnFJ8FZk%2Blbal5yos1cvFEn%2FFTT2Ezd0jAHIPtc57MV9ZxGeiX2V%2F%2FQuxMRT%2FT%2BZOmY%2F1LuqlXHChecAdF92c5A6LHfQV0JZXg8Vv9LP4FS8Ff%2Frg7YyFS1a1f%2FSjlxuR&X-Amz-Signature=86294fbc3f33480cf4896b2e5929202e0391745aef9a4db2287db3224161ef9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
