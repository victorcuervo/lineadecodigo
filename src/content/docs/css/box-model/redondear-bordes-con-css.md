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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFG7O4S3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL3v%2FWprjRJhiuU%2BLLaugGG3lltauuphPGUPVi0Vt6uAIhAOP2SQXJyDg%2F9qJqUMTiGX%2BdGPcktPAIsiug910fG8x8Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzXtr6ux7GnOmtp6Asq3AMddTJNf%2FSvQ2K%2BLbIks1tIr6t06tOZbkLAuqpXwpbROYIH24zt7GEjMeoY2ZQ6vGtAzlH4ToxAEJfnai9szjOj5pY6EKLmXbeYkUlQ%2Bv4BfyWvGZ6ZXmhAkTzwNtDRY%2BUF07xMqkOtdnyU92QqXkFZ4OgbsiN%2FNhQyh1nwPBGG10Z%2B323QZzEOgxz1wjuy1XL%2Fe77963rcusgxkZE0HSrSpKKtdu5DcfuORfkDEFG0Y3o5rcxoJrE4BrU4s1LNbcfI76jA0MlFLGJJgCymvVPw6RmMewWXDolv0ltF5bFS66nR7GITHVnY6QhvOxXez11R%2BCTaKp6fR2imgQEGxsSs1H%2BeJdgOyR6VpKezJPfNU4D41rRg9Rco0cDRxsEcED0BAIoXSUDw6VkN5gXaQkLSW%2FPIVwoupOdJ%2BgZCOn%2BKtWVzfus10KR8k%2FhOYwqiDh9KZc5msm7Mpaq%2BmphvtMcIc45%2Fw%2BYK%2BbCCn%2F0uDxt7RN4W1eQbCAeXLcPs2JaSFDJFh%2BYw1bX6LixD%2FU3Gp20YaOBfLjMIUSsecquByHVWpcRFf2SFcadCHq%2F4rRiWXnzlCcA8LvCbbtWgzjR35xouLEOg8P0f5xo6gRz88jratA9H765auNlnGRzgNTDZjorKBjqkAfN4PiDeB%2B7sIFl7s8szilVfldzkZ%2F7XCFASK1J4bqvRLoxsENYU4fQkerEORYB9BrTArY31YoPjC1zYohwSGeUCP12zJlQXKO7%2B4ZquMleud9kmTUAS85DRTB9tK%2FcYH%2B4l%2B%2FcdR%2FsuGkgru7tl8PO786pLvLfPBlNLpvNKREmXBwo1dGwpd8%2FKffwd1HIWdk%2FWeDVN2BhUicl%2F1nLXpAt2c8uN&X-Amz-Signature=0b979cc88610dc31b39d9ce7e6cf4ce73b122048caa8956d163ab79487df483f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFG7O4S3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL3v%2FWprjRJhiuU%2BLLaugGG3lltauuphPGUPVi0Vt6uAIhAOP2SQXJyDg%2F9qJqUMTiGX%2BdGPcktPAIsiug910fG8x8Kv8DCHwQABoMNjM3NDIzMTgzODA1IgzXtr6ux7GnOmtp6Asq3AMddTJNf%2FSvQ2K%2BLbIks1tIr6t06tOZbkLAuqpXwpbROYIH24zt7GEjMeoY2ZQ6vGtAzlH4ToxAEJfnai9szjOj5pY6EKLmXbeYkUlQ%2Bv4BfyWvGZ6ZXmhAkTzwNtDRY%2BUF07xMqkOtdnyU92QqXkFZ4OgbsiN%2FNhQyh1nwPBGG10Z%2B323QZzEOgxz1wjuy1XL%2Fe77963rcusgxkZE0HSrSpKKtdu5DcfuORfkDEFG0Y3o5rcxoJrE4BrU4s1LNbcfI76jA0MlFLGJJgCymvVPw6RmMewWXDolv0ltF5bFS66nR7GITHVnY6QhvOxXez11R%2BCTaKp6fR2imgQEGxsSs1H%2BeJdgOyR6VpKezJPfNU4D41rRg9Rco0cDRxsEcED0BAIoXSUDw6VkN5gXaQkLSW%2FPIVwoupOdJ%2BgZCOn%2BKtWVzfus10KR8k%2FhOYwqiDh9KZc5msm7Mpaq%2BmphvtMcIc45%2Fw%2BYK%2BbCCn%2F0uDxt7RN4W1eQbCAeXLcPs2JaSFDJFh%2BYw1bX6LixD%2FU3Gp20YaOBfLjMIUSsecquByHVWpcRFf2SFcadCHq%2F4rRiWXnzlCcA8LvCbbtWgzjR35xouLEOg8P0f5xo6gRz88jratA9H765auNlnGRzgNTDZjorKBjqkAfN4PiDeB%2B7sIFl7s8szilVfldzkZ%2F7XCFASK1J4bqvRLoxsENYU4fQkerEORYB9BrTArY31YoPjC1zYohwSGeUCP12zJlQXKO7%2B4ZquMleud9kmTUAS85DRTB9tK%2FcYH%2B4l%2B%2FcdR%2FsuGkgru7tl8PO786pLvLfPBlNLpvNKREmXBwo1dGwpd8%2FKffwd1HIWdk%2FWeDVN2BhUicl%2F1nLXpAt2c8uN&X-Amz-Signature=55f1339bb13122d7974412504d17501a4277f2eaf5770ebaf047cd06da054930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
