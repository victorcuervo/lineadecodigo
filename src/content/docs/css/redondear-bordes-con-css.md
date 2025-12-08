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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR6IBYOX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgp%2Bl6mF3EKVVW8TruWPwJ028BW9TDveujZFsSQxV8mQIhANJsjre%2BmJqgJI4ZHE3jkHKgU4szpmYDkr1m24YLVdUXKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNajVAgOd%2FDb1XhrAq3AOTSo2tHCMmkOS%2FDVZpAUZnFYyceBVRIoQ2G4Hf4e9QFIhDb8x9HUUrFlJfX2pYpwN%2FW67ima7pS8dpBunpIpbHrQ%2BmG2WmmEIh3YualMOCZf7cRk8ksFp%2Bgq7PaT728ZkmQIUmkL8dNVe5EzZhb0qJuvXiu1pylkqyPZkXB3uZFTBCXLDHOXcEd73pjvjht5CYL7HF%2F9l9N7oEcmDAIiNssAjZ1YwjEgf58UC8n18n2iNG1MILuyfiWgxZtBKYntptjgGPMPSUCwMa0wY9du6Hq%2FXYFw%2F99evQGdZRQOiotbktA72Pn5akGp6quzVbf1vSENeBkXvq4%2BtCOA%2Bo1XD15GYvE%2B8Fm0hfiw2X5aSb1tJuTBx7A7Xwq%2FQhlOB%2FfY0NBaHjnU7Rl%2FF3VPBqbnqgFBkU0o7CIhGkmhaZ64I5DvgRUMr2h7Ib98pn8svwLqk53KfscR3uNa4F0kQK5y3MXhNOHAGWyLuS8%2Fs9noowHEuD3sf3%2FDtL0RIgAhKvAEk9dob%2BXWNIK5H0IxLPTx4Z8eeqikG4s%2FRkh81eljwxr3eOqrcJyM7d0P0TAtGoBIeMRFU0945v1DOqp4ZoBK43GyLZ7FaSp8JOFXIeQr944jQig0AyU82UO217WTCtwdvJBjqkAStrpkcvw16yCoKeWFz87FCDVp5ZLbVkOpIp%2BMQ6kxZn2xZTZ6EdM3RG%2BeUVmMMTsceNSkDHYIb7AjlvukjjPxSJNntDMwTrruF5s9aj9oU3Zz%2FZgCiULVRqtkTBSGcP232Ic3XDKCyvoaNIhRC%2BxsU05BWDHsuU8oJX1wgG2UhKg7AL3b5BglgHRm6xkiEltgtWvixu1rzb%2BRwXFRWE1m%2BvJlPS&X-Amz-Signature=16a736ac1a1ae68b7fc614c33b80cbb5974453034f1e7f2767414b06a80924b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR6IBYOX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgp%2Bl6mF3EKVVW8TruWPwJ028BW9TDveujZFsSQxV8mQIhANJsjre%2BmJqgJI4ZHE3jkHKgU4szpmYDkr1m24YLVdUXKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNajVAgOd%2FDb1XhrAq3AOTSo2tHCMmkOS%2FDVZpAUZnFYyceBVRIoQ2G4Hf4e9QFIhDb8x9HUUrFlJfX2pYpwN%2FW67ima7pS8dpBunpIpbHrQ%2BmG2WmmEIh3YualMOCZf7cRk8ksFp%2Bgq7PaT728ZkmQIUmkL8dNVe5EzZhb0qJuvXiu1pylkqyPZkXB3uZFTBCXLDHOXcEd73pjvjht5CYL7HF%2F9l9N7oEcmDAIiNssAjZ1YwjEgf58UC8n18n2iNG1MILuyfiWgxZtBKYntptjgGPMPSUCwMa0wY9du6Hq%2FXYFw%2F99evQGdZRQOiotbktA72Pn5akGp6quzVbf1vSENeBkXvq4%2BtCOA%2Bo1XD15GYvE%2B8Fm0hfiw2X5aSb1tJuTBx7A7Xwq%2FQhlOB%2FfY0NBaHjnU7Rl%2FF3VPBqbnqgFBkU0o7CIhGkmhaZ64I5DvgRUMr2h7Ib98pn8svwLqk53KfscR3uNa4F0kQK5y3MXhNOHAGWyLuS8%2Fs9noowHEuD3sf3%2FDtL0RIgAhKvAEk9dob%2BXWNIK5H0IxLPTx4Z8eeqikG4s%2FRkh81eljwxr3eOqrcJyM7d0P0TAtGoBIeMRFU0945v1DOqp4ZoBK43GyLZ7FaSp8JOFXIeQr944jQig0AyU82UO217WTCtwdvJBjqkAStrpkcvw16yCoKeWFz87FCDVp5ZLbVkOpIp%2BMQ6kxZn2xZTZ6EdM3RG%2BeUVmMMTsceNSkDHYIb7AjlvukjjPxSJNntDMwTrruF5s9aj9oU3Zz%2FZgCiULVRqtkTBSGcP232Ic3XDKCyvoaNIhRC%2BxsU05BWDHsuU8oJX1wgG2UhKg7AL3b5BglgHRm6xkiEltgtWvixu1rzb%2BRwXFRWE1m%2BvJlPS&X-Amz-Signature=08b427103a43866e737f082aa2b439a6dbbcc018ba273eadba44d7e738cad183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
