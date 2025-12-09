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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DPEEBP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZSbT3Zzmv%2BKf7qsk5iFXi5lESbFlriZfVlNQTJjBU5AIhAK0%2Bh5xtIzeKXeNehKKJvga8%2F1aZCIUlWD9LKATGozrCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsfi%2BIEOUB8jxXNbEq3APLX2LIjqTCs72lwWmN3kAiwfRX8HqYXNt3aNxq8o1mrgbEXeEJDMz2UjT5EJP%2FSFcs7AAXF65TKE00AtwpgE3hlhX6Oaak2rJ8BHHXVuEHYw4hIc%2FWcm237sDdgEzSKVaZatoYJt74lskkuVzMy3BLQ6O%2BM8pLp5WPafeXv%2BU3BASgDEekCbKaFkbok4gq8nE0EStk2rx9CT%2FRq3JmjDSbavHb2fW9Gra3oa66fblX7KMMFzA7YTa3E3oqV2Z4NWsFH35hA%2BkULS%2BUV3aEzObnLdQU9bXFnz9np7GiORVd9YubWQdgg4TFqJ1LU7JVdgF%2FCOFYs7ZLof3AgfWjFaqTMEczQiQxvoj9RQfXTfixf%2Few0CM85P7NSuWauRs4rsUKoSQNVpo%2BdI5pMo15rYS5jl7qO%2FF7Y8dpESgT4Y0wC6lgFaetYZ6lWu6ZYu%2Fm0EEPAbhcl7k6hk1YZWaX14015NmdYUnk4Ramn102CncAB3YWpK1WaAu1hyObTkwqZ46xEUDCUhEPQ4ycHsukgs0bV1QhYuq%2BYif%2Fcc92%2FOgymEDiVioRrTVnFNwXLXs22cIrUSD6DtjodfbgtwA72lwm9s5vBnICneuchTohw%2FXy36DtuxeTxMBUqCGKUTCvh9%2FJBjqkAWD6zP%2FO0%2B2Im7b9LAmmx4tyCCUeXBK5dZLvov7JnRrTu3on2yg5KgoIm096clBv0gu%2Bt1bAwk6HKwu0T2JMt4ySSNoXTfSjDRp3Uv%2BnSFOKniykCMvTxaopG4ch3YcVHMYlDsi28CVPz%2BsTY4k1848NRvYoHzDGDvQtCkxt2RXui0S7LC9gZ%2B2B%2Fz9kx7nBUNN4mCL5AXiIKspsOhgG8VJ1j033&X-Amz-Signature=6cf7c2e9c8c5e5b52cfa89336c82f03a9876af1c0498cbe1689a82d78129178e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7DPEEBP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T065028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZSbT3Zzmv%2BKf7qsk5iFXi5lESbFlriZfVlNQTJjBU5AIhAK0%2Bh5xtIzeKXeNehKKJvga8%2F1aZCIUlWD9LKATGozrCKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsfi%2BIEOUB8jxXNbEq3APLX2LIjqTCs72lwWmN3kAiwfRX8HqYXNt3aNxq8o1mrgbEXeEJDMz2UjT5EJP%2FSFcs7AAXF65TKE00AtwpgE3hlhX6Oaak2rJ8BHHXVuEHYw4hIc%2FWcm237sDdgEzSKVaZatoYJt74lskkuVzMy3BLQ6O%2BM8pLp5WPafeXv%2BU3BASgDEekCbKaFkbok4gq8nE0EStk2rx9CT%2FRq3JmjDSbavHb2fW9Gra3oa66fblX7KMMFzA7YTa3E3oqV2Z4NWsFH35hA%2BkULS%2BUV3aEzObnLdQU9bXFnz9np7GiORVd9YubWQdgg4TFqJ1LU7JVdgF%2FCOFYs7ZLof3AgfWjFaqTMEczQiQxvoj9RQfXTfixf%2Few0CM85P7NSuWauRs4rsUKoSQNVpo%2BdI5pMo15rYS5jl7qO%2FF7Y8dpESgT4Y0wC6lgFaetYZ6lWu6ZYu%2Fm0EEPAbhcl7k6hk1YZWaX14015NmdYUnk4Ramn102CncAB3YWpK1WaAu1hyObTkwqZ46xEUDCUhEPQ4ycHsukgs0bV1QhYuq%2BYif%2Fcc92%2FOgymEDiVioRrTVnFNwXLXs22cIrUSD6DtjodfbgtwA72lwm9s5vBnICneuchTohw%2FXy36DtuxeTxMBUqCGKUTCvh9%2FJBjqkAWD6zP%2FO0%2B2Im7b9LAmmx4tyCCUeXBK5dZLvov7JnRrTu3on2yg5KgoIm096clBv0gu%2Bt1bAwk6HKwu0T2JMt4ySSNoXTfSjDRp3Uv%2BnSFOKniykCMvTxaopG4ch3YcVHMYlDsi28CVPz%2BsTY4k1848NRvYoHzDGDvQtCkxt2RXui0S7LC9gZ%2B2B%2Fz9kx7nBUNN4mCL5AXiIKspsOhgG8VJ1j033&X-Amz-Signature=c411877dbc121c477bb9e2e08c6084d62dccee4e311bfd30e57e61f0c914c38a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
