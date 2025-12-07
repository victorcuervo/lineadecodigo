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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQVEYNW5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMGXgkJ8RAat4t1w5ujco8Lryd61XJldmq%2BnCreFTIHAiBQnSUQmO8JG5SiH5wdhURPOzCMNXhyPoLKN2b3K5GkriqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwDBex%2FIeDt9XgaOKtwDyTWuB6vAWZ0IzzHYSMSuo7%2F2lsFas7poKFmGM7ev1hD4xPuDhl65C1%2BJgclSBKQk%2BSgbZURxGgw%2FMyvbEvZGGKQZgtDEsKDN1R%2F26%2FioWEM3YbnkkYpUe17YWj%2FaBsg2czcauRHSTnnxyMbbT35Z0FpeImIRY8a5ev7ggq42dKOWbOxuFH4kVQh2Q7KlR8y9vbH7gi0WBRkNfEwSkrT7XPSLzkQyU%2BrYDfYATq9xYZbhrySa0QR1Uvxo4rfENxzyEvtkYYaerr35kNbGRMllvHZk%2FsbUI5upe5MX36mF%2Fd8hheI%2Fz8iohzMXzZ8edCD6l5Ob3b%2F%2Bq5Xn4HwIlEnN7oQ3FUr9YCtDQreaV2BVf9VNOtzB0J1WHktQJgCLC1C0RydwWGZS9VS3Mz8eLIczvWW0zAtCrS2VibFwS6GxZYMuW3yDK3pHx%2FtSmT7C2U2pkrgkJ7wBgv%2FKMPxRH8T8nagEkwAkfTePyr4zxkVb6mTg3n2TZKwcGo5X1QggyXrOs3JyLTMu%2FQcavz8fCOuWkgJSdVG4cJezxp7QZNlqwAR%2FF2EzN%2BxGWRnmyq9PkwMCO7RAcKL%2B3ZGZFE9YnJsAULZ6X%2FEWe7MrR%2FYGcvwQOrBbQHHEW7kffcU533gw4MfXyQY6pgG45%2FeC7p%2FzqU2bxLVPGGU0LVjH2eunIDcUYXh%2BhsRAG4wh6EbrIXofj4bZRP9fyJV36s94%2BFsaANyHzOqvC20Y7uAhm99BU1tZowEBpbcDggQoIjIGNpvhHuqyAIMgOCYH72DJPavrXEHLtWtO9Pim8AjuE2qIPkzL8w3TRmgIY3Pb2T6Kq6n0dKzojfRwIcsyjGRNrY%2F5lHTzyZuW%2FqCVnFMgphKI&X-Amz-Signature=b2f87f10584ecf21ff301226f7b5313d6b3299fcaf1b50fdb820bebb4c665a29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQVEYNW5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMGXgkJ8RAat4t1w5ujco8Lryd61XJldmq%2BnCreFTIHAiBQnSUQmO8JG5SiH5wdhURPOzCMNXhyPoLKN2b3K5GkriqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwDBex%2FIeDt9XgaOKtwDyTWuB6vAWZ0IzzHYSMSuo7%2F2lsFas7poKFmGM7ev1hD4xPuDhl65C1%2BJgclSBKQk%2BSgbZURxGgw%2FMyvbEvZGGKQZgtDEsKDN1R%2F26%2FioWEM3YbnkkYpUe17YWj%2FaBsg2czcauRHSTnnxyMbbT35Z0FpeImIRY8a5ev7ggq42dKOWbOxuFH4kVQh2Q7KlR8y9vbH7gi0WBRkNfEwSkrT7XPSLzkQyU%2BrYDfYATq9xYZbhrySa0QR1Uvxo4rfENxzyEvtkYYaerr35kNbGRMllvHZk%2FsbUI5upe5MX36mF%2Fd8hheI%2Fz8iohzMXzZ8edCD6l5Ob3b%2F%2Bq5Xn4HwIlEnN7oQ3FUr9YCtDQreaV2BVf9VNOtzB0J1WHktQJgCLC1C0RydwWGZS9VS3Mz8eLIczvWW0zAtCrS2VibFwS6GxZYMuW3yDK3pHx%2FtSmT7C2U2pkrgkJ7wBgv%2FKMPxRH8T8nagEkwAkfTePyr4zxkVb6mTg3n2TZKwcGo5X1QggyXrOs3JyLTMu%2FQcavz8fCOuWkgJSdVG4cJezxp7QZNlqwAR%2FF2EzN%2BxGWRnmyq9PkwMCO7RAcKL%2B3ZGZFE9YnJsAULZ6X%2FEWe7MrR%2FYGcvwQOrBbQHHEW7kffcU533gw4MfXyQY6pgG45%2FeC7p%2FzqU2bxLVPGGU0LVjH2eunIDcUYXh%2BhsRAG4wh6EbrIXofj4bZRP9fyJV36s94%2BFsaANyHzOqvC20Y7uAhm99BU1tZowEBpbcDggQoIjIGNpvhHuqyAIMgOCYH72DJPavrXEHLtWtO9Pim8AjuE2qIPkzL8w3TRmgIY3Pb2T6Kq6n0dKzojfRwIcsyjGRNrY%2F5lHTzyZuW%2FqCVnFMgphKI&X-Amz-Signature=3c3768a7361a3d38b2ab713a6ab70acb4e282ea44816c5ac8314e5649d81001f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
