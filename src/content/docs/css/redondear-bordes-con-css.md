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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7TKV3V%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBgMYANCcaL9Y7lKM2u13bQ7s1%2FqX%2BLWKmBIfIE8xKPAIgEuELuNlper7LodcB1xcBLOduXJc9WZmGKhqsl1pxO4Yq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMYKl11Ci4SR6PG0nircA3Dnl4pbni5xRnRWYka%2BW%2Fn0TMzqAW3HgS6u6Nyy5TCEskLbc0EcpbzcDm07pc%2B4D4fjkSA91fyitiAGEUEKq6zRXJIQNfe5Y34fFXH4xdatygV5UAUVtLzQ5UtKT5%2Bxn%2BCpykL3a2bxSMVKREGfM0n6yDWgzr00R0OGhglraiKhaFWr2FNb9RocP64I2Me5E0LdHf1EaXZ6sQcGjzmvCSG29Jb1G4BxwGOc8Qpu7c629ak3aBAfS7l%2BqqTazcIZyv6eI8Rd7zNJ9lK8hd6uJu%2BVbpaUOkGoS1%2BqkzNS96jNBk6pLOw4Cpgeo4KJrhKCyyqfJt1cepFjfXgIvdMZ16k%2BmAZvYwoQjfDAjBzaqeq6t3mE5UDXJTPpJto6yT9v5BnWXNCqEdJndEkxcSgTi03ts2B0b7lfUYymwZgSevHAmIgVzOqo%2FjJqGryynYaxXIYCI1D5LtiBm7aovowsCfI7VzLBMSf80eFbufLz6cMXv%2FUHzjcTje%2BTYknflnC6%2FPz2zAVEfcl2JYRlV%2FBXrZ7xZ1%2Ft3wA6ElKoqdF19QRXlaHB140oIrxIuZ6NnkZ4vK9RYQZa2VmcwWR8iyKut8%2BZWtjhoeVwTw%2FByxiC%2BIm7HAw%2FQMeRdUlfDn5zMLym0MkGOqUBviR%2BFHNfHF%2BDruLJJC0tsJZ7Fw2SW9ZexQpqV05VEQcshouMuS4GhBGUqdVuCfkUAv4e%2FbTbVRjVSJqETTzf5Att81QII%2BZmivZ0NF%2B68m9DR0qFmDN56JeyuWJYGExL06hRRyoGzstI2lQIzRIP3BX%2B9MeLUTkq7yVKLI3j%2BMnoQ2DoUBkT0FZoKkavXaT7I432kONB2PIEOCHCt7dcJs7yMt3W&X-Amz-Signature=fec7a06e8dbcd547485e0cff5fc917d0ba0fce0215c61eb7e973d33b891a3d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB7TKV3V%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBgMYANCcaL9Y7lKM2u13bQ7s1%2FqX%2BLWKmBIfIE8xKPAIgEuELuNlper7LodcB1xcBLOduXJc9WZmGKhqsl1pxO4Yq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMYKl11Ci4SR6PG0nircA3Dnl4pbni5xRnRWYka%2BW%2Fn0TMzqAW3HgS6u6Nyy5TCEskLbc0EcpbzcDm07pc%2B4D4fjkSA91fyitiAGEUEKq6zRXJIQNfe5Y34fFXH4xdatygV5UAUVtLzQ5UtKT5%2Bxn%2BCpykL3a2bxSMVKREGfM0n6yDWgzr00R0OGhglraiKhaFWr2FNb9RocP64I2Me5E0LdHf1EaXZ6sQcGjzmvCSG29Jb1G4BxwGOc8Qpu7c629ak3aBAfS7l%2BqqTazcIZyv6eI8Rd7zNJ9lK8hd6uJu%2BVbpaUOkGoS1%2BqkzNS96jNBk6pLOw4Cpgeo4KJrhKCyyqfJt1cepFjfXgIvdMZ16k%2BmAZvYwoQjfDAjBzaqeq6t3mE5UDXJTPpJto6yT9v5BnWXNCqEdJndEkxcSgTi03ts2B0b7lfUYymwZgSevHAmIgVzOqo%2FjJqGryynYaxXIYCI1D5LtiBm7aovowsCfI7VzLBMSf80eFbufLz6cMXv%2FUHzjcTje%2BTYknflnC6%2FPz2zAVEfcl2JYRlV%2FBXrZ7xZ1%2Ft3wA6ElKoqdF19QRXlaHB140oIrxIuZ6NnkZ4vK9RYQZa2VmcwWR8iyKut8%2BZWtjhoeVwTw%2FByxiC%2BIm7HAw%2FQMeRdUlfDn5zMLym0MkGOqUBviR%2BFHNfHF%2BDruLJJC0tsJZ7Fw2SW9ZexQpqV05VEQcshouMuS4GhBGUqdVuCfkUAv4e%2FbTbVRjVSJqETTzf5Att81QII%2BZmivZ0NF%2B68m9DR0qFmDN56JeyuWJYGExL06hRRyoGzstI2lQIzRIP3BX%2B9MeLUTkq7yVKLI3j%2BMnoQ2DoUBkT0FZoKkavXaT7I432kONB2PIEOCHCt7dcJs7yMt3W&X-Amz-Signature=a2dc54a02706217a03ed7646b8d135c007ea658ca9878110241ce2fc1a22a3b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
