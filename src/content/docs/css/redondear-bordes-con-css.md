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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6Z47EDZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEayeg7PykYo108%2BabEDJiVGEP6%2BtTIVCpGxNTl16G%2BNAiAAn%2B4RvyxUu%2FrOBop3rb0R2zxEQIsKH81ZWTv83rg6WSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMlzOyA1xtQBFyYDHAKtwDX8%2B6bxD1Tw95YKBg6g94w4FjKdG%2FmyK4DRUelHDDPlybKVusjufRd0PTwTbyK9RrwuSgN5jbGYlH3FnQ8ZUaShA9yjRaz4QlwDwCtlLWOZUQaBs%2BwI5%2BiLUEkQ2EcBuDleDwOPPgxoeaFd6MKlMXF5CdFNdh0c0Gv%2B3GRj7Lgdv%2FoLzz8OiUGg3Z88oAOJVe97s0DYOMHsOECc9LAsqI5931HZGgfymHy%2FLMjEGFvdE7NW%2FE2C2j2B9U6%2F7oBLtH8CK24LMYBrFvkHDkJ1ZWS2ItiWV1eoW%2Fb9eMA9sLRESS8AbdMZGVnNyY3IbLFT1y0o6O9K69O1g%2BOKYJ9B%2B%2FGjS9YMUl2fygcDVRiEHlpYE2ro7Dvol%2FzCbCp6wml6YSNpNpmZkTK07jQfXmD7wrbfSQyfqBJdiV7v7ndnpdS2tzclxQ28AKnsEjW1XaKMO7AWHrOhmFbmfB8hpdY3gjFyrmH8VPCGNwYrkHePoVwLwBjBO%2FjSypsfdqlw%2Fer3yi3Q7Jhfy2NdSwyHDCEAVYPDI9W5w7kOE6%2FlUCvBvRkBGL0WyNoKTK5dMS3FBnyWyOLzusJGr4%2BE6ErYJ4tyDmKbK37TDnjUjIbFXe3buQeVOwA40RLFpEoLxlTsMwx6bQyQY6pgHRFo1YwP%2B52HZryYkDky%2BHt5gLJnyWYX9%2BivQnrj%2FjPUIY1H3d8%2BsnxOiXivAZmExe2Z3yTk0irF1u8BwTAY3jZhwKGsWUl33p9cL4OtMTo6rgUyUv7alI6pNBRSwha2Yuo8judVY96G5qGx2hfUpEei4qb3kDusytqOhefX83L7qXpBo3BcJfEzatt6XZ78sGM97f1RH6Ao2if1Sv2YAf7O8guOwW&X-Amz-Signature=a95c894270489c65ddf5578a4cbc3e6746ed5ad735485b7c4e28d4ad9781b9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6Z47EDZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEayeg7PykYo108%2BabEDJiVGEP6%2BtTIVCpGxNTl16G%2BNAiAAn%2B4RvyxUu%2FrOBop3rb0R2zxEQIsKH81ZWTv83rg6WSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMlzOyA1xtQBFyYDHAKtwDX8%2B6bxD1Tw95YKBg6g94w4FjKdG%2FmyK4DRUelHDDPlybKVusjufRd0PTwTbyK9RrwuSgN5jbGYlH3FnQ8ZUaShA9yjRaz4QlwDwCtlLWOZUQaBs%2BwI5%2BiLUEkQ2EcBuDleDwOPPgxoeaFd6MKlMXF5CdFNdh0c0Gv%2B3GRj7Lgdv%2FoLzz8OiUGg3Z88oAOJVe97s0DYOMHsOECc9LAsqI5931HZGgfymHy%2FLMjEGFvdE7NW%2FE2C2j2B9U6%2F7oBLtH8CK24LMYBrFvkHDkJ1ZWS2ItiWV1eoW%2Fb9eMA9sLRESS8AbdMZGVnNyY3IbLFT1y0o6O9K69O1g%2BOKYJ9B%2B%2FGjS9YMUl2fygcDVRiEHlpYE2ro7Dvol%2FzCbCp6wml6YSNpNpmZkTK07jQfXmD7wrbfSQyfqBJdiV7v7ndnpdS2tzclxQ28AKnsEjW1XaKMO7AWHrOhmFbmfB8hpdY3gjFyrmH8VPCGNwYrkHePoVwLwBjBO%2FjSypsfdqlw%2Fer3yi3Q7Jhfy2NdSwyHDCEAVYPDI9W5w7kOE6%2FlUCvBvRkBGL0WyNoKTK5dMS3FBnyWyOLzusJGr4%2BE6ErYJ4tyDmKbK37TDnjUjIbFXe3buQeVOwA40RLFpEoLxlTsMwx6bQyQY6pgHRFo1YwP%2B52HZryYkDky%2BHt5gLJnyWYX9%2BivQnrj%2FjPUIY1H3d8%2BsnxOiXivAZmExe2Z3yTk0irF1u8BwTAY3jZhwKGsWUl33p9cL4OtMTo6rgUyUv7alI6pNBRSwha2Yuo8judVY96G5qGx2hfUpEei4qb3kDusytqOhefX83L7qXpBo3BcJfEzatt6XZ78sGM97f1RH6Ao2if1Sv2YAf7O8guOwW&X-Amz-Signature=0600c42b2b71cb58a4da00c68126ad592f09cfcb7a6e0190d271b89c232147f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
