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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY7K5S56%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEtmJ1%2BrieTGHJKsxarZgNIbVdqg%2F4%2F%2FiyTaGAbyZ1bgIgbDRsNX6i5W5dHXzEogc02t5r%2Bz400gwhQqGLrONkA2sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDcRKEi9%2Bvx4DV1KPyrcAwEoWvR1Xmf8qkdXb%2F0sNZ368c34owmjjhyKyKBGrs9IwptBDmt%2FClJywF3Llx3g20GxwXEN9WNmZL6wpNAWmETHN080TUMughJubQsvAlAcS2TlBj9QT06642cBDmTnDWiY2q4mM9T0y2hQ59rZy%2FjsVwvXsWHjeM%2BEEN4NLV66kyRBd4klclX824A%2BRjS6Dr3mo%2BkFg4rvS90ppFWv0d59BzOXa6Ioa9jRnOZ1GptRiXyBT5CtrzDmKm5GKv23njG1n4cG5pIgAWXE1132ZTzOupR6V7iisRzdaKmLzDFFpbBuy5jqBmoww2MgWajzQ1ULxtzZAo7oVatDW2QUc5HmSxfrG%2BTWXKmYOpQIg3K0feOt6pIGFPFZqPGeNFs968y6OHwfzk9p8qIZQAtVuNTMDpg1ZKNP%2BfOnDi%2BKvhJZ6dzQxq5Z5QslgBKpx56gXX4CgMLZd4F2ng6XgJ%2FiLRDjURMUj8to5nSjhriXgdsx6B4TVEZVJ%2F5tw3%2FbrKV30Jeo4soOcavGFRcx%2BJxQgZzV8mFjtneopUSN56MAJzdYi%2BBbdK4NxJ6KHwjGN4MFJ2BfM0xZxncPpAEyjPshN8GmPp4BwLNrM5gm%2FD%2FA9%2Bf8SWEFVPxUoYY3sIwbMKyl0MkGOqUBcT1eOagmi19D2R6JhPAMrWHdENr29EtvoY5s8jGPzozZfDsDBBm%2BrYA4cR2HJLR8oszunFr00EAwMNN6bAGnKAoo5jhlcySaxGBzZmcNmhgJ1%2F1Dv3xDJKdd96lrM83MZSwRYfIiQW7AsnnqDr2h%2BxqahThzv%2BUkOWqxUBlIBLu6ybvmBg8yfyQOS34uRkgYlvMmacebvgJEXrQOJpNhRdTcwxH0&X-Amz-Signature=34fe14cb511b271200faa818d055f9865225689eec13d35927a73793b1f450fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY7K5S56%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEtmJ1%2BrieTGHJKsxarZgNIbVdqg%2F4%2F%2FiyTaGAbyZ1bgIgbDRsNX6i5W5dHXzEogc02t5r%2Bz400gwhQqGLrONkA2sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDcRKEi9%2Bvx4DV1KPyrcAwEoWvR1Xmf8qkdXb%2F0sNZ368c34owmjjhyKyKBGrs9IwptBDmt%2FClJywF3Llx3g20GxwXEN9WNmZL6wpNAWmETHN080TUMughJubQsvAlAcS2TlBj9QT06642cBDmTnDWiY2q4mM9T0y2hQ59rZy%2FjsVwvXsWHjeM%2BEEN4NLV66kyRBd4klclX824A%2BRjS6Dr3mo%2BkFg4rvS90ppFWv0d59BzOXa6Ioa9jRnOZ1GptRiXyBT5CtrzDmKm5GKv23njG1n4cG5pIgAWXE1132ZTzOupR6V7iisRzdaKmLzDFFpbBuy5jqBmoww2MgWajzQ1ULxtzZAo7oVatDW2QUc5HmSxfrG%2BTWXKmYOpQIg3K0feOt6pIGFPFZqPGeNFs968y6OHwfzk9p8qIZQAtVuNTMDpg1ZKNP%2BfOnDi%2BKvhJZ6dzQxq5Z5QslgBKpx56gXX4CgMLZd4F2ng6XgJ%2FiLRDjURMUj8to5nSjhriXgdsx6B4TVEZVJ%2F5tw3%2FbrKV30Jeo4soOcavGFRcx%2BJxQgZzV8mFjtneopUSN56MAJzdYi%2BBbdK4NxJ6KHwjGN4MFJ2BfM0xZxncPpAEyjPshN8GmPp4BwLNrM5gm%2FD%2FA9%2Bf8SWEFVPxUoYY3sIwbMKyl0MkGOqUBcT1eOagmi19D2R6JhPAMrWHdENr29EtvoY5s8jGPzozZfDsDBBm%2BrYA4cR2HJLR8oszunFr00EAwMNN6bAGnKAoo5jhlcySaxGBzZmcNmhgJ1%2F1Dv3xDJKdd96lrM83MZSwRYfIiQW7AsnnqDr2h%2BxqahThzv%2BUkOWqxUBlIBLu6ybvmBg8yfyQOS34uRkgYlvMmacebvgJEXrQOJpNhRdTcwxH0&X-Amz-Signature=cbf1ae40804a533d130ae9b0e831616c299e8d66cc1ce8f3f61dd78c7067dd94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
