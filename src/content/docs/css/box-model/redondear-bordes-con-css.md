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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNXYOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNZamhHY1vR%2BM2LddGcP8h97XohSMwhXcYgj3ZCZCkvAIhAIRIEwRWsiEqhZy3gx02hlXvD16q8mbXHzQDEsTISwhpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbg0KZbTO86uPZSb8q3AOQgGCkizObFQImJxHDbZZ60nIA4R4o9An%2FgWV7TlcsB6s5PIpvGpDvEArgpSCN1nsUHTob01ijpq3%2B5qoFQwz2ANmZHLguC292ATkItTs8Iu%2FSZ9jMFTJpnHiBSvU9G7CXQN5Ok7eysB53uH9s7rnrxf7m1x2irDxHwJI3ypfa%2F56oBotRoI7JOp0%2BYKQ6nUrCH5ZGTKh67CdIi1t1AIOF3oS4LO4CDhZNmVVkToZNcWCnl9y1SK%2BB9ANg%2FOxAIlmz0q9m%2FOB771i7teM%2Bn9UBAg1etwqJOjOx4Z2dnwLoOQETIE5BHAK%2F8zzVT7LPr54xDxEVG5cNpOJ7VN446MB2Qg6ts8YEhwx1dyb6cOMoAM7%2BFpIZgPhzy%2BBWVxRJko5HdtFfZNWQAoCk5mS0CJBNYxdrFE9UEJEqfARLIsVpkMngBAnAVTnLRr0nHgiRiLqRkaDhFsjxFXQnCeU5XuwsVSJnf3CpipWWf2RoVrLVlvXf0EaseO4hZdg31bCghMIlKpOaJZZGaJ%2BCrv5kUi5QVHrNpZHZc%2F1YbbL2ZxblTmC9KDxGvvQdKWpAwORtZ1R%2FgBHrSXEOn1%2Ftq59XuLsDZ01XeXCAwKzxAuRCjVemkDFzegdpdCRzo%2B5TOzCCn4vKBjqkAa6WlTP3SUNIpC3sI1aZ%2BKj7erOcjGe1klFbj%2B4qodnVU0%2F1ig5krXi%2Fn9gU5HPBdAsg1c6iTAJkFYH2ufiHIcMFW8LJzRDGNpHcDv3SaZvLeP3y7MNLWa3ZzrnCxYhRgwsGru98rL6BdG7%2Bx5R8GzhGoOMiGqNdIolT3m7sTxdnMqeNrceYds0NLJbP1ADTp5HAdsIFAZa3ajfccC7D0wO%2BfBw0&X-Amz-Signature=8d28b95d3d40f5625e9e598b1c94543ac2bc47ba3e2c96afa6d3efc4b378259e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWLNXYOT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNZamhHY1vR%2BM2LddGcP8h97XohSMwhXcYgj3ZCZCkvAIhAIRIEwRWsiEqhZy3gx02hlXvD16q8mbXHzQDEsTISwhpKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxbg0KZbTO86uPZSb8q3AOQgGCkizObFQImJxHDbZZ60nIA4R4o9An%2FgWV7TlcsB6s5PIpvGpDvEArgpSCN1nsUHTob01ijpq3%2B5qoFQwz2ANmZHLguC292ATkItTs8Iu%2FSZ9jMFTJpnHiBSvU9G7CXQN5Ok7eysB53uH9s7rnrxf7m1x2irDxHwJI3ypfa%2F56oBotRoI7JOp0%2BYKQ6nUrCH5ZGTKh67CdIi1t1AIOF3oS4LO4CDhZNmVVkToZNcWCnl9y1SK%2BB9ANg%2FOxAIlmz0q9m%2FOB771i7teM%2Bn9UBAg1etwqJOjOx4Z2dnwLoOQETIE5BHAK%2F8zzVT7LPr54xDxEVG5cNpOJ7VN446MB2Qg6ts8YEhwx1dyb6cOMoAM7%2BFpIZgPhzy%2BBWVxRJko5HdtFfZNWQAoCk5mS0CJBNYxdrFE9UEJEqfARLIsVpkMngBAnAVTnLRr0nHgiRiLqRkaDhFsjxFXQnCeU5XuwsVSJnf3CpipWWf2RoVrLVlvXf0EaseO4hZdg31bCghMIlKpOaJZZGaJ%2BCrv5kUi5QVHrNpZHZc%2F1YbbL2ZxblTmC9KDxGvvQdKWpAwORtZ1R%2FgBHrSXEOn1%2Ftq59XuLsDZ01XeXCAwKzxAuRCjVemkDFzegdpdCRzo%2B5TOzCCn4vKBjqkAa6WlTP3SUNIpC3sI1aZ%2BKj7erOcjGe1klFbj%2B4qodnVU0%2F1ig5krXi%2Fn9gU5HPBdAsg1c6iTAJkFYH2ufiHIcMFW8LJzRDGNpHcDv3SaZvLeP3y7MNLWa3ZzrnCxYhRgwsGru98rL6BdG7%2Bx5R8GzhGoOMiGqNdIolT3m7sTxdnMqeNrceYds0NLJbP1ADTp5HAdsIFAZa3ajfccC7D0wO%2BfBw0&X-Amz-Signature=8672147194e4675bfac6f530bfd376112d78d3b16e106d43b0fdd20f9e669b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
