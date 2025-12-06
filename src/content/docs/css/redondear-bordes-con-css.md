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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YMXSXFI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBVNaGYKR7HNRGMGwjktl6Mq%2B%2FnnyQlaQnvCyCtqG3SAiBlDwGu%2BeJS6J2%2FVrVcJWYNIliGjKhUD%2FUDlHdrMjd6Lyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtM%2FYiDYg0%2FgqYzyOKtwDgoOYcDDhR9Qoo92faa1qRPzg0mh9pFgnWDXqdHcfEe4dQfIdpavUr0tegRX5nEXNZQ1QEF5LpDVbG6%2B5O8SbtBDsU2FZ5DsUqAWn4Aj09t74XvAgvl4XLTUfpE%2FIDZFBBjnwyu3IskbAm%2Bp5a97vmNff8h9jzoGCn%2B4qQBByKr7VUuqkjYrn%2BOtuffJ%2BmATRAg9YE6SE56uuSfLURc%2FoCRt0BRax9jpsT3F61Y7RtJrbXynxQKXKEeS%2FHprkFOUcAT8Wybc%2BfrZ9Hr1IuABE9S8u5JjLzAoWt5WAAdpL2MjXuCpRviYab%2Fcq%2Bj1jLvMlh%2ByE7riyMOvKWf%2FumNrBVoOD%2FmdtqXic0i2n59lA1t0qxeLIfLpGOYjG%2FWVu32zbUSNBmddkxsw5mbXrYoIi7exwqD55vupofut5%2B3J1mRgl568%2Bbk%2BHqBfwSXtfIIiInlB50R6RKo%2FQyU3ZruMHsbU1aWe7bCPLzxzBYryNt6Y3PPqu5SqtgMbE9tfM43W4%2BF7BsOs9NYN8OAAXXWN6S5K%2B%2BOB4OHz9NSbZoG%2FABfFGal6wVEncTayFf6DNOEWSO0zIffrSwLGR3NWq8Aa%2BN0I81vU5FiWj238RiVEbLVCXpXUBdzl2Stny7VAw05%2FPyQY6pgElqocOyqJ4CBbl4xkTTh24zDl5RvhdOCvPI7tG7SXQF1l7eENWV8OUFFikTz41mBB9ogj8FmsjcjJt%2F3koeJesWTUJmszHcrWiKlC6XC%2FQWuf07MpN3ojTsScCqjuqtTNxjMGexgbtxGiesWQQag5TTSSLBtcsd3etQ0gILSvl6lRhWI9MSrPq7BoI%2B7pklolxD46WaHAY2GBaeD227yvW4dL3DUyk&X-Amz-Signature=d9040f7cd1886886674f2ad18dc46cf8cf8f3c0a1f33187dfce8bb2b8d178575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YMXSXFI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBVNaGYKR7HNRGMGwjktl6Mq%2B%2FnnyQlaQnvCyCtqG3SAiBlDwGu%2BeJS6J2%2FVrVcJWYNIliGjKhUD%2FUDlHdrMjd6Lyr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMtM%2FYiDYg0%2FgqYzyOKtwDgoOYcDDhR9Qoo92faa1qRPzg0mh9pFgnWDXqdHcfEe4dQfIdpavUr0tegRX5nEXNZQ1QEF5LpDVbG6%2B5O8SbtBDsU2FZ5DsUqAWn4Aj09t74XvAgvl4XLTUfpE%2FIDZFBBjnwyu3IskbAm%2Bp5a97vmNff8h9jzoGCn%2B4qQBByKr7VUuqkjYrn%2BOtuffJ%2BmATRAg9YE6SE56uuSfLURc%2FoCRt0BRax9jpsT3F61Y7RtJrbXynxQKXKEeS%2FHprkFOUcAT8Wybc%2BfrZ9Hr1IuABE9S8u5JjLzAoWt5WAAdpL2MjXuCpRviYab%2Fcq%2Bj1jLvMlh%2ByE7riyMOvKWf%2FumNrBVoOD%2FmdtqXic0i2n59lA1t0qxeLIfLpGOYjG%2FWVu32zbUSNBmddkxsw5mbXrYoIi7exwqD55vupofut5%2B3J1mRgl568%2Bbk%2BHqBfwSXtfIIiInlB50R6RKo%2FQyU3ZruMHsbU1aWe7bCPLzxzBYryNt6Y3PPqu5SqtgMbE9tfM43W4%2BF7BsOs9NYN8OAAXXWN6S5K%2B%2BOB4OHz9NSbZoG%2FABfFGal6wVEncTayFf6DNOEWSO0zIffrSwLGR3NWq8Aa%2BN0I81vU5FiWj238RiVEbLVCXpXUBdzl2Stny7VAw05%2FPyQY6pgElqocOyqJ4CBbl4xkTTh24zDl5RvhdOCvPI7tG7SXQF1l7eENWV8OUFFikTz41mBB9ogj8FmsjcjJt%2F3koeJesWTUJmszHcrWiKlC6XC%2FQWuf07MpN3ojTsScCqjuqtTNxjMGexgbtxGiesWQQag5TTSSLBtcsd3etQ0gILSvl6lRhWI9MSrPq7BoI%2B7pklolxD46WaHAY2GBaeD227yvW4dL3DUyk&X-Amz-Signature=31ff1b335125bf0b4495f8bb88b101ad74bc4ac47bd0bed6ba05a74725372082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
