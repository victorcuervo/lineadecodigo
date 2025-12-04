---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SKHA6S7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoLzE0VEYuO7SOA3RIx3PQ5OE9iEJEo5oATh8Frg56aQIgLax0TZhCXacIaO%2BjI2kvdRA0uMSVRESpkC4L%2FXh%2BP5wq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDORDmkxKLjqTQBoiRCrcAz%2BYpKTP%2BI3C2lpjWkC6YwomAmh%2BnozOX5zAEBfy2DdDI8ddVbW9QcvT9oEpjqLJTXI7Dt62c2hItaSB%2BMVn3d%2F1Wgs2fwnlYYhV1D4CcTA31CiPKsDtEiq0KKhRdSpQdQhioeyl%2FTtVXevhkb55HWWe39Df%2FCmxnyEvHhN7HQh%2BfMvRm%2B5VCYnwhvOnkWJaW9madbjUWtDlXqJCsn%2B9%2Fx18pWfhw8NCHQRFoLt%2FyTfcC9fIha%2B%2F0JycZ1WsbHcZZp3GuO%2F7lVhE%2FyCkqzjiBPA5YcO%2BP9It069riLbj0qWtSbssyQzrj0RlmJBK6lCp8H0ntBi0J6N6fkcyhbiOBxyf44e9ezQeiLYYwhZxGl1us5wthPMekPbSkIRxgxo%2BEUuZhn5bnyjAlhG64kMl5HQ8J1iZnUBG%2FEnFiQMzAPBkZIG8co9zlSlE08qnRrLtxPn4v1gprHdeGzOko8t2uImRo%2FML3Z2UA0muPhQJm87GDxMs46RD%2BVpusJI34MjEXpYE3nvjibv2NZBuZXaFdF%2BvcXQS16FQ6G0Fjiyh0MSxsfQp2BJ6TZZp8amXntuuXGktktSz8MMhViggPiflFQ4cMqg26cL8FbXlDu88ywZz0T%2BOxm5kxhdqigOeMPXcxskGOqUBtsBny3MGItroKb%2Fo5jDec0x7SSJIL9fNLh1smWam2dlP6dwPoRAH%2BAY%2FVOtF3SXSkzYnCFHQejGxENGQsplvqCW33KTISVZHEbatvkVbQXDLGR2C5O4EikycGR%2F%2BGtUiVX%2B6qIJVcXZ2LwQnmL73leaGJdem%2Bj%2B7hk1BeHnFzXhkpinoYMOJSMotIFtYy09Ofo%2FY%2B74g9A06rwTb%2BRrd58%2Bg%2FvVR&X-Amz-Signature=f90680cc23da9d947250a73dd6b3f9bdab6fc2f473910220403678f3af111992&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SKHA6S7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoLzE0VEYuO7SOA3RIx3PQ5OE9iEJEo5oATh8Frg56aQIgLax0TZhCXacIaO%2BjI2kvdRA0uMSVRESpkC4L%2FXh%2BP5wq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDORDmkxKLjqTQBoiRCrcAz%2BYpKTP%2BI3C2lpjWkC6YwomAmh%2BnozOX5zAEBfy2DdDI8ddVbW9QcvT9oEpjqLJTXI7Dt62c2hItaSB%2BMVn3d%2F1Wgs2fwnlYYhV1D4CcTA31CiPKsDtEiq0KKhRdSpQdQhioeyl%2FTtVXevhkb55HWWe39Df%2FCmxnyEvHhN7HQh%2BfMvRm%2B5VCYnwhvOnkWJaW9madbjUWtDlXqJCsn%2B9%2Fx18pWfhw8NCHQRFoLt%2FyTfcC9fIha%2B%2F0JycZ1WsbHcZZp3GuO%2F7lVhE%2FyCkqzjiBPA5YcO%2BP9It069riLbj0qWtSbssyQzrj0RlmJBK6lCp8H0ntBi0J6N6fkcyhbiOBxyf44e9ezQeiLYYwhZxGl1us5wthPMekPbSkIRxgxo%2BEUuZhn5bnyjAlhG64kMl5HQ8J1iZnUBG%2FEnFiQMzAPBkZIG8co9zlSlE08qnRrLtxPn4v1gprHdeGzOko8t2uImRo%2FML3Z2UA0muPhQJm87GDxMs46RD%2BVpusJI34MjEXpYE3nvjibv2NZBuZXaFdF%2BvcXQS16FQ6G0Fjiyh0MSxsfQp2BJ6TZZp8amXntuuXGktktSz8MMhViggPiflFQ4cMqg26cL8FbXlDu88ywZz0T%2BOxm5kxhdqigOeMPXcxskGOqUBtsBny3MGItroKb%2Fo5jDec0x7SSJIL9fNLh1smWam2dlP6dwPoRAH%2BAY%2FVOtF3SXSkzYnCFHQejGxENGQsplvqCW33KTISVZHEbatvkVbQXDLGR2C5O4EikycGR%2F%2BGtUiVX%2B6qIJVcXZ2LwQnmL73leaGJdem%2Bj%2B7hk1BeHnFzXhkpinoYMOJSMotIFtYy09Ofo%2FY%2B74g9A06rwTb%2BRrd58%2Bg%2FvVR&X-Amz-Signature=5251b11a7841ecb801a84e63b487162004a664f92d6a12be43ad37227f84133e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
