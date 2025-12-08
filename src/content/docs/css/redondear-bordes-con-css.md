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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7PLFDE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC31Avxde28uu0Z1eeiJAhzf9IdwlKoIR6OFxJ%2FBgbIBQIhAPo%2BkxVSbfIXTm3QRiJmG7Hjfs%2FORfhNOlPHMj5BOnfTKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygA37gc6WynlObAusq3ANN4oWhZxHfUjbIQrddDCHp6wsuyl0p0QcuBBMXIr2VXoOU0B%2BB8iHsWvXAHxJd2p3EWHpk7JCvoUl7kFSq57Hnp71sl4Gr9N1eqqQk22xUo%2Fu9XZCbHPXtXVnF09cI9wJTUKjOnpfjJ6CiPHhPT7vH%2F31s4RuC9KJUoPldYWjunhispaE%2FfzmjmKaSNHUQ%2FFDUfGjN8f%2Faaqb9aCdWjjroZPf3ww0Dfr4sh%2FjGJlx6BaJAjsNJh6Z7twho62tk59SdRdLsXViB48Vaf53i1J1khfZmI8LuPeAQjWDk1l2Yv%2FYR6O6FaTlg6YXsEcTh7PnCSxPoZyDTBKQ1RBGm5QjzQqvDDJq7jt%2F4TFUVw1J20bPvj%2FU6NTaz3Em6aAnDu2WsSfcgRPj8c4AOBhlFJyEvBAPbuC8DGN5c730HlqI9GwAyGp3zmokDeptkLu0mhgBpF%2FvQOWWS0XoB5O2CGy9g%2BYb9Nvl1atoqqiHMESyfmuO5WPEHf8pmgkzJxX9c%2FxK80fP3Av0ZGtZ1oydOGZepyhGW5Nq%2BgFranNVcRPIJmXizGXJVlMD234pit1R4dJEQU%2Fy7oH60oOiC1AG0vfDpQmyukCfm21sSyAWkNNYQhgMEHi9MlbxEhoehHjDG7dnJBjqkAZEpa4nP7D4KRWrodAlUzEE3DTliSN%2FCoIHf1vYYJf4c%2BuUVENkEJj%2BVkimHWYiWKnrt8GBlzviKRS8Ua%2B9Izp%2FAiZIxBU030GnpN3lpBSfZbIbF8D%2BO3rRXKg6ozNUWB7CFBXsK4VWxfKOhXs0p8oyd4vXktOFfb27EBud%2B0QGMnWpwTuhs1nnionDFrmYO9hmsceCROh%2FrDUw7Yu8X3yBzNv4y&X-Amz-Signature=b862b8d72065c3495a3235000a839a51526905c7e6c68d6121374e334cfc1fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F7PLFDE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC31Avxde28uu0Z1eeiJAhzf9IdwlKoIR6OFxJ%2FBgbIBQIhAPo%2BkxVSbfIXTm3QRiJmG7Hjfs%2FORfhNOlPHMj5BOnfTKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgygA37gc6WynlObAusq3ANN4oWhZxHfUjbIQrddDCHp6wsuyl0p0QcuBBMXIr2VXoOU0B%2BB8iHsWvXAHxJd2p3EWHpk7JCvoUl7kFSq57Hnp71sl4Gr9N1eqqQk22xUo%2Fu9XZCbHPXtXVnF09cI9wJTUKjOnpfjJ6CiPHhPT7vH%2F31s4RuC9KJUoPldYWjunhispaE%2FfzmjmKaSNHUQ%2FFDUfGjN8f%2Faaqb9aCdWjjroZPf3ww0Dfr4sh%2FjGJlx6BaJAjsNJh6Z7twho62tk59SdRdLsXViB48Vaf53i1J1khfZmI8LuPeAQjWDk1l2Yv%2FYR6O6FaTlg6YXsEcTh7PnCSxPoZyDTBKQ1RBGm5QjzQqvDDJq7jt%2F4TFUVw1J20bPvj%2FU6NTaz3Em6aAnDu2WsSfcgRPj8c4AOBhlFJyEvBAPbuC8DGN5c730HlqI9GwAyGp3zmokDeptkLu0mhgBpF%2FvQOWWS0XoB5O2CGy9g%2BYb9Nvl1atoqqiHMESyfmuO5WPEHf8pmgkzJxX9c%2FxK80fP3Av0ZGtZ1oydOGZepyhGW5Nq%2BgFranNVcRPIJmXizGXJVlMD234pit1R4dJEQU%2Fy7oH60oOiC1AG0vfDpQmyukCfm21sSyAWkNNYQhgMEHi9MlbxEhoehHjDG7dnJBjqkAZEpa4nP7D4KRWrodAlUzEE3DTliSN%2FCoIHf1vYYJf4c%2BuUVENkEJj%2BVkimHWYiWKnrt8GBlzviKRS8Ua%2B9Izp%2FAiZIxBU030GnpN3lpBSfZbIbF8D%2BO3rRXKg6ozNUWB7CFBXsK4VWxfKOhXs0p8oyd4vXktOFfb27EBud%2B0QGMnWpwTuhs1nnionDFrmYO9hmsceCROh%2FrDUw7Yu8X3yBzNv4y&X-Amz-Signature=21297de9404af52ba04dbda24f9ab1e984d72eff7a0fdc9e3af2e11daa56286b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
