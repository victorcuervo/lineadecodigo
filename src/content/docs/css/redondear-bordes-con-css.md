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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RKOOU2J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGKRLttnYZ5esv%2BPB9Y6%2FLj0oOdgmf7oy6JCw9jfKQhQAiAVjsmxJAzW1CJfZ437DL57qiZDZKqsjFJF1x8cGYbdZCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMP3IkXauiXsWOVZVNKtwDc%2Brxegvf3ERWht8yoJF88bd5gCben6fc3vM1LxO7p%2FXcWG9DxRZ0oE1oUT4kiydGl70dKpBzOOmCjL08ADtAeo3HA1O0jzB5K4sSjxUam19Njnl8mjtr4NjmCMPm3qoCY8tPfCGnidxFZ6s6BkcWW250dW3S602sQYx2CI05adWchJIqOQafS10RAkoWS%2BryuDJG%2FKst88Lx0N5iK8evNJIcfWCOXbvMOXquaK0YfdjuvmzJncqQYWINyllB%2FlkIOifxcL6zTfT9N0HggmnAllQpDLM0E4Y60wSNUUoVkoyJ0ZxDDfHymR%2Bk%2B7H9Cc2kK%2Bb6dVkftZzlR0GQAHOTZyfg3PvqeXkR79tpFlgT1dxuO3tPmG6MZOhpwKz1TALhcdHtptYquLVNsSHtiTjbtj%2FWQVKfxw6IZp4zBye1NUlWng%2FzVhF%2FwjbwLqmLYit6JBTQrRZoTpe6YDufe%2FE0X26Ojw%2FOxdZD1IBSSTWzzO2mbjZ2q9w2cICwc6UxBZmX2dmBUhOTY%2FYYaGb4JVrzZHTx2lgWZS4tmkWToGc7Tulr9X%2Fk86Ykp8I2onRtL2g4LOSfSFuk%2Baa1%2Bj4oe6VEE3WtMK5hwg%2FLrooXUp%2BVb9VsQP1VQKKAvYsPoYcw2pDEyQY6pgEb7sIGtNfGAI3x%2FqPYkTviHUKy%2BWi%2Bg%2FyyX9Vu0EIHqRTaOjLtQo5bPK98LZB0fQ5PBCMiH%2Fn6gWgfLkOzECrfUeX1%2BqCwfNWDBRdNUiqzphCc0OzL3LMSsoE1foNDj%2BebS7GUxilzzQJGol7LcT0kTHrKvyEr9%2F5WndwAJL92GBOdoHK4A0o2jEPSDYtZOkth%2BsLl11Yjmd4HC9N7PnW7gHzQ%2FcHR&X-Amz-Signature=d7cd5a23ca5021f062b13aa41018999039db53a83c257441e39d666124e505e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RKOOU2J%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIGKRLttnYZ5esv%2BPB9Y6%2FLj0oOdgmf7oy6JCw9jfKQhQAiAVjsmxJAzW1CJfZ437DL57qiZDZKqsjFJF1x8cGYbdZCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMP3IkXauiXsWOVZVNKtwDc%2Brxegvf3ERWht8yoJF88bd5gCben6fc3vM1LxO7p%2FXcWG9DxRZ0oE1oUT4kiydGl70dKpBzOOmCjL08ADtAeo3HA1O0jzB5K4sSjxUam19Njnl8mjtr4NjmCMPm3qoCY8tPfCGnidxFZ6s6BkcWW250dW3S602sQYx2CI05adWchJIqOQafS10RAkoWS%2BryuDJG%2FKst88Lx0N5iK8evNJIcfWCOXbvMOXquaK0YfdjuvmzJncqQYWINyllB%2FlkIOifxcL6zTfT9N0HggmnAllQpDLM0E4Y60wSNUUoVkoyJ0ZxDDfHymR%2Bk%2B7H9Cc2kK%2Bb6dVkftZzlR0GQAHOTZyfg3PvqeXkR79tpFlgT1dxuO3tPmG6MZOhpwKz1TALhcdHtptYquLVNsSHtiTjbtj%2FWQVKfxw6IZp4zBye1NUlWng%2FzVhF%2FwjbwLqmLYit6JBTQrRZoTpe6YDufe%2FE0X26Ojw%2FOxdZD1IBSSTWzzO2mbjZ2q9w2cICwc6UxBZmX2dmBUhOTY%2FYYaGb4JVrzZHTx2lgWZS4tmkWToGc7Tulr9X%2Fk86Ykp8I2onRtL2g4LOSfSFuk%2Baa1%2Bj4oe6VEE3WtMK5hwg%2FLrooXUp%2BVb9VsQP1VQKKAvYsPoYcw2pDEyQY6pgEb7sIGtNfGAI3x%2FqPYkTviHUKy%2BWi%2Bg%2FyyX9Vu0EIHqRTaOjLtQo5bPK98LZB0fQ5PBCMiH%2Fn6gWgfLkOzECrfUeX1%2BqCwfNWDBRdNUiqzphCc0OzL3LMSsoE1foNDj%2BebS7GUxilzzQJGol7LcT0kTHrKvyEr9%2F5WndwAJL92GBOdoHK4A0o2jEPSDYtZOkth%2BsLl11Yjmd4HC9N7PnW7gHzQ%2FcHR&X-Amz-Signature=123c56072b61abd1deb4fa37e91269a86c0878d7ce65c006c8b64e0fd1f9d825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
