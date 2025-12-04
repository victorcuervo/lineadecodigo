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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53FEV25%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRFg%2F0a319oBGrCBNCUntJN0WEvZNF%2BHXOOztPNl5mDAiEAxKF0kyiDSwMkoiuu1bjwyaMNWiJxVevCmnG9lTQnJZoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNOJNyR4Q9Uvc4E97ircA3qnJJBGYxanc%2FaoY%2Bio2O0SijckbhnfcKg8Jrh5aZwU%2BSjWxAk%2FutdcMUokBmqvTcjSY%2B2tZQhG7YFTmFCCC%2FVLz%2FS5%2B%2B1f0g2zv%2Buma62eY0KhGXSpDR4wXUd9NPSCgaaHLqklRc5VQqtUvvPBCTEWTM11v05giQuBjgU%2FXWj0n2NOWkczEs7yrDGAGqM3Fb38I2A2U%2BS%2BACrxvpDJPOhjprrt238SfE1mUjJI6eL5ZjOMJN2i8ZNhkY7Xt5Xf9jyNecY0jqYsynUjmbW5PpOrl8OTkI%2B%2Fhh4OJvE142faPhRmYn2v1bP%2Fa8S8q70ZK9pJTRK7KbTrCCBOPoozT6ct23dHQ2qSaNUDHk12IxRoKy330emdR2u7N1mufbih%2F7hbh6u2hSxxBiMBVYwBs0za%2B4OAgHFawiEwJEjnuOvZyVnfXO36XCCYGU2Tdm4BT%2BF%2Fucs0pIVqlvNUZFys%2BlJKskhc2ellAk2oI4ynKbOgvP3s4yF37weYM7OC1qjCT2e6SR4SAo5cg2%2BJO6oBNEHQpvM46FtcPm3%2FZ8BPTIOwB6PeUDyeWUy5fG6l02uPuN4APUNOmyR%2F%2BDddiKTIwV7M4FzWJzyZ7Ja3Mw1v5b3Bz85T0emS5UjZp7MFMKLcxskGOqUBZl5zqKHTkdcL8O2s0rj0OzCMeoEU09xfvzveYjvHHSX%2FY2nUN8puPwI4Dd97dKAChXeMqQmpbi0aVukXbWCF0rlz16nkA6AhxFSg%2BZFekYL1TGH%2B1%2F9ypOKYuq%2B29M3RSS4Y1AvpSXbNoazgX7%2BDgoRtRXODiz5Y1tFQpqmuZMSMazs3C%2FxGqiqeVNEgpTFnkgnXd97e%2BhMJ3tCAErZ4LW1UYaTo&X-Amz-Signature=403376d653d9db8a21872b2483089fe1a6a9a45d9e0511c67bbc61fad44e8196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V53FEV25%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRFg%2F0a319oBGrCBNCUntJN0WEvZNF%2BHXOOztPNl5mDAiEAxKF0kyiDSwMkoiuu1bjwyaMNWiJxVevCmnG9lTQnJZoq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNOJNyR4Q9Uvc4E97ircA3qnJJBGYxanc%2FaoY%2Bio2O0SijckbhnfcKg8Jrh5aZwU%2BSjWxAk%2FutdcMUokBmqvTcjSY%2B2tZQhG7YFTmFCCC%2FVLz%2FS5%2B%2B1f0g2zv%2Buma62eY0KhGXSpDR4wXUd9NPSCgaaHLqklRc5VQqtUvvPBCTEWTM11v05giQuBjgU%2FXWj0n2NOWkczEs7yrDGAGqM3Fb38I2A2U%2BS%2BACrxvpDJPOhjprrt238SfE1mUjJI6eL5ZjOMJN2i8ZNhkY7Xt5Xf9jyNecY0jqYsynUjmbW5PpOrl8OTkI%2B%2Fhh4OJvE142faPhRmYn2v1bP%2Fa8S8q70ZK9pJTRK7KbTrCCBOPoozT6ct23dHQ2qSaNUDHk12IxRoKy330emdR2u7N1mufbih%2F7hbh6u2hSxxBiMBVYwBs0za%2B4OAgHFawiEwJEjnuOvZyVnfXO36XCCYGU2Tdm4BT%2BF%2Fucs0pIVqlvNUZFys%2BlJKskhc2ellAk2oI4ynKbOgvP3s4yF37weYM7OC1qjCT2e6SR4SAo5cg2%2BJO6oBNEHQpvM46FtcPm3%2FZ8BPTIOwB6PeUDyeWUy5fG6l02uPuN4APUNOmyR%2F%2BDddiKTIwV7M4FzWJzyZ7Ja3Mw1v5b3Bz85T0emS5UjZp7MFMKLcxskGOqUBZl5zqKHTkdcL8O2s0rj0OzCMeoEU09xfvzveYjvHHSX%2FY2nUN8puPwI4Dd97dKAChXeMqQmpbi0aVukXbWCF0rlz16nkA6AhxFSg%2BZFekYL1TGH%2B1%2F9ypOKYuq%2B29M3RSS4Y1AvpSXbNoazgX7%2BDgoRtRXODiz5Y1tFQpqmuZMSMazs3C%2FxGqiqeVNEgpTFnkgnXd97e%2BhMJ3tCAErZ4LW1UYaTo&X-Amz-Signature=572f0b7fc2210573168c1de28a127afa07d1ca01d44bc7910606e0ff9bf926dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
