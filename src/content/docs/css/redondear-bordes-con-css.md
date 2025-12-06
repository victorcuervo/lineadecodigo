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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRFSC43%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUhoa03Iwm%2BOtGA9pLXPzBIwaNblOAmVutWc5FYpH5NwIhAJrapLeFxTY3mlZy0lVK3QQvgTGZYXMzTp3BsWydIchLKv8DCH8QABoMNjM3NDIzMTgzODA1Igz0iDV0FBNjp3TP5Aoq3AMiXqgSUNACxGo6mHNaQegSJm9cbsg5AQZ6ZDAdLqxqK68Fl4SfVsdFTOcqlO1V12Nr4iMRqwyeAn6vbesasCg3dXJVTlzRotkB5WuDZHkx2n%2B5RhnMpJhi02tb6YUXGSUVHK%2BJPbRfahEWTfIM6UCtwTHJ4yzMDD%2FQLJ7rYjJNld5znEjZiMt1AdSjJJ68fA2P00PQyYWvsL%2FY9AhGB%2FAaUFug2BiQvT444JrjbgWzhbqWw6z1dUQ43SXUc%2Fc%2FyA6WWmeDAj4RMjGPyK9buywIWddbSYPhv7YImUqsoV0bt6iXcyvNVs7iO7ECn1AZCTHpfq6RlAS9%2F87%2BDRWPCBnWgKHUkpPWC4See%2FnGuEuPVzVPXvGa%2BbDYTGJNrUIsPAmBDP%2FDy3UtYKn99D92BDGlMa2ytLuV4esldBtlAsNZzI0kyR14C7dUKXYPo5hdgo8OmgugD46rAT2R%2F5lylFXqo7y69IlUZ2hcC1ft32qe2pzz8c0Fg9Rht2g04SU7F%2BAFOLi%2FsWykHBFtfnU2U3dyEvwgFXdguADy0EsKsu6UtFbQ1AsxCXPdNRAQrDa7IgQwRLtx1jZbEGApf%2FKvJHr7gyXA108sq9td%2BJXZO9c35JAVVsOAaT4%2FreyU1DCc1NLJBjqkAUnft%2FF4nf197efLQT7UMWI3kvuKXH7wMsmiQTcfLKRhrKT11OaYs69a%2BhwhNFPYHBGn4i5nOi0mRWcPT8frvNp%2BQenn9WLfM3werf0MAB7TRSaaE1sNzhzRNQ%2B8DuqF5w90t2CfrRk9XThte8XqhdLOqFZrZIBZcvdgqrboj5YjL4nxUlUgalVEVjDXN8gpkSxPxgJqU%2FSKAuby7SNNp7CeaTc2&X-Amz-Signature=32b8f34ac0451f33944613221fb6d805a5e8bcc1cb80dbcfda607dc9ae6c1db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRFSC43%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUhoa03Iwm%2BOtGA9pLXPzBIwaNblOAmVutWc5FYpH5NwIhAJrapLeFxTY3mlZy0lVK3QQvgTGZYXMzTp3BsWydIchLKv8DCH8QABoMNjM3NDIzMTgzODA1Igz0iDV0FBNjp3TP5Aoq3AMiXqgSUNACxGo6mHNaQegSJm9cbsg5AQZ6ZDAdLqxqK68Fl4SfVsdFTOcqlO1V12Nr4iMRqwyeAn6vbesasCg3dXJVTlzRotkB5WuDZHkx2n%2B5RhnMpJhi02tb6YUXGSUVHK%2BJPbRfahEWTfIM6UCtwTHJ4yzMDD%2FQLJ7rYjJNld5znEjZiMt1AdSjJJ68fA2P00PQyYWvsL%2FY9AhGB%2FAaUFug2BiQvT444JrjbgWzhbqWw6z1dUQ43SXUc%2Fc%2FyA6WWmeDAj4RMjGPyK9buywIWddbSYPhv7YImUqsoV0bt6iXcyvNVs7iO7ECn1AZCTHpfq6RlAS9%2F87%2BDRWPCBnWgKHUkpPWC4See%2FnGuEuPVzVPXvGa%2BbDYTGJNrUIsPAmBDP%2FDy3UtYKn99D92BDGlMa2ytLuV4esldBtlAsNZzI0kyR14C7dUKXYPo5hdgo8OmgugD46rAT2R%2F5lylFXqo7y69IlUZ2hcC1ft32qe2pzz8c0Fg9Rht2g04SU7F%2BAFOLi%2FsWykHBFtfnU2U3dyEvwgFXdguADy0EsKsu6UtFbQ1AsxCXPdNRAQrDa7IgQwRLtx1jZbEGApf%2FKvJHr7gyXA108sq9td%2BJXZO9c35JAVVsOAaT4%2FreyU1DCc1NLJBjqkAUnft%2FF4nf197efLQT7UMWI3kvuKXH7wMsmiQTcfLKRhrKT11OaYs69a%2BhwhNFPYHBGn4i5nOi0mRWcPT8frvNp%2BQenn9WLfM3werf0MAB7TRSaaE1sNzhzRNQ%2B8DuqF5w90t2CfrRk9XThte8XqhdLOqFZrZIBZcvdgqrboj5YjL4nxUlUgalVEVjDXN8gpkSxPxgJqU%2FSKAuby7SNNp7CeaTc2&X-Amz-Signature=f34e4d6c53283c12b9d1234c537b0d157563ee1829c4cfb25260e3950e19a3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
