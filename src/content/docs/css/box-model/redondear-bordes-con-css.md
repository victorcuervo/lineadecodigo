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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C27N7OE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtQNKngHrF%2F3D01Pgp3HsKSmX6PjOSgRgecY7UfUV%2B2gIgNdR6ZaFs8m0uPFXKAvpTnGDUnK2YYwvccEO2P%2Bmv6ywq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI7y5P6qfObMB81%2BqCrcA2VIVJStTF%2Fti6Q9QEinFarz1D4iBXIuP6l5kpBUDoY%2FOzefMRsfqxquJMpFoF5kh2I%2B1esT7HSaKauk3NPq7NXFfkBIUWVZzTZbc2tEiiHFSgmN63OYmQQGcjFi5%2Fv0ZZfXVmoxKjytvzQiE%2FRXUsriwLaPyqojvw8AhWCBw5pnHBNkOZCY1oM72KQnTNmJtVPtpVXpQnvUSquHQTkFE4IitfZvUTKg4XVMZlyoUWA4A3PKQ78ZAsjcCqBJLc4C8JwoGnHaOlsXQc4qJNGDRv3oZohzcPQU2Vba0s9DbbWz0%2Bxfn93MaiI6DmSQb5Le4JeUVDFxh6J%2BKavbChB59ZyP5jrW%2FxvGg3x3cM3h9B5n7TLgU7ZFZRWRAlOiQbgHITJZVaW1SJOEk90y3fGOkt1EkEYLauiz7lepTNACSjs69AKPvoo0sDHIabbDY2obbGTDI8P6%2BpY%2F%2BeVY1b3ujFjuepbkFc9%2BOo2rcWWtOCKLcEW0G20q2Xk%2B74yqCRX2NI9YGFLywEkSDvE5%2BXs1NunhDdFxPGn%2FKy3soa7GsPF3cDC3Hk6XGoRkIf7IjF3pNUdOXzJd9sG5VghdTG3jYsxu7nXVRZsr8cjZwVdY0NSy86EHBR8qB%2Bdxn7iPMK7hisoGOqUBy4Kk%2Bk%2FgxujGlzPHvVqtSJVwXkhXxIvxwwiRliv9T6XgfUlJ85tuyssmcl1toEvnZMUiMsveGvaZxZw0BRBS5Q92jpJlYDKDhZQfgG8%2F19Ugh38PY7AdS7bZ%2BLrbckJeADb47X4LaCNBK5Z6THh6lqYzqowkQIY%2BtNoamqwu%2FrfmQ91OjR%2FB4e8tNGEVlKatZ4E8Mju9bN51MDa9jLEfyu%2F7Sxsk&X-Amz-Signature=583b878b3da7d639e30a0064e40e38d38072a930e5e0e340bca7b881bd06cdd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C27N7OE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtQNKngHrF%2F3D01Pgp3HsKSmX6PjOSgRgecY7UfUV%2B2gIgNdR6ZaFs8m0uPFXKAvpTnGDUnK2YYwvccEO2P%2Bmv6ywq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDI7y5P6qfObMB81%2BqCrcA2VIVJStTF%2Fti6Q9QEinFarz1D4iBXIuP6l5kpBUDoY%2FOzefMRsfqxquJMpFoF5kh2I%2B1esT7HSaKauk3NPq7NXFfkBIUWVZzTZbc2tEiiHFSgmN63OYmQQGcjFi5%2Fv0ZZfXVmoxKjytvzQiE%2FRXUsriwLaPyqojvw8AhWCBw5pnHBNkOZCY1oM72KQnTNmJtVPtpVXpQnvUSquHQTkFE4IitfZvUTKg4XVMZlyoUWA4A3PKQ78ZAsjcCqBJLc4C8JwoGnHaOlsXQc4qJNGDRv3oZohzcPQU2Vba0s9DbbWz0%2Bxfn93MaiI6DmSQb5Le4JeUVDFxh6J%2BKavbChB59ZyP5jrW%2FxvGg3x3cM3h9B5n7TLgU7ZFZRWRAlOiQbgHITJZVaW1SJOEk90y3fGOkt1EkEYLauiz7lepTNACSjs69AKPvoo0sDHIabbDY2obbGTDI8P6%2BpY%2F%2BeVY1b3ujFjuepbkFc9%2BOo2rcWWtOCKLcEW0G20q2Xk%2B74yqCRX2NI9YGFLywEkSDvE5%2BXs1NunhDdFxPGn%2FKy3soa7GsPF3cDC3Hk6XGoRkIf7IjF3pNUdOXzJd9sG5VghdTG3jYsxu7nXVRZsr8cjZwVdY0NSy86EHBR8qB%2Bdxn7iPMK7hisoGOqUBy4Kk%2Bk%2FgxujGlzPHvVqtSJVwXkhXxIvxwwiRliv9T6XgfUlJ85tuyssmcl1toEvnZMUiMsveGvaZxZw0BRBS5Q92jpJlYDKDhZQfgG8%2F19Ugh38PY7AdS7bZ%2BLrbckJeADb47X4LaCNBK5Z6THh6lqYzqowkQIY%2BtNoamqwu%2FrfmQ91OjR%2FB4e8tNGEVlKatZ4E8Mju9bN51MDa9jLEfyu%2F7Sxsk&X-Amz-Signature=47783c0ab80e58eb7bbf3ce1c1f69cadb61d25ed30937cf08d2c395cd01a9a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
