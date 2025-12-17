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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XZQ6SLA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHXyFyFmla0CKvTu5O5ODcl2yn739bFgJ%2FCwMlfIU7GAiAi7Rb9aJJOJRcyVy4Ysef3VzbhwlA9YimX9w4l3vZr2Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMv6M%2BQocE3ePJ05JkKtwDhFeOgspJlshzk4Mnm4vuqHgdbijnpe8pedfXuBXm%2B5ADJtWpMhV%2F93a27S9TcyLW1zCBj6vWLSzcGMhE%2BsjqRyyVWbqpmTV6AGjQdJCdL5%2FPtWI3pH1dHfXRZ%2FJhn8S%2FfGTef2UDhtD2CssWQCHVu9x2btkWsd73bUUvXfjvSmF18%2FmJ7zNnMOdFNe3GsEMFXkvZSBY4ipFnisaLNAp0vsBlzRBYb5DbkKvG7gQVcAHzvtMe9Ag%2FaAqr9Yqgp6oTbj%2FHFlrZmM72ZSMGahKj6ClC%2BEh9JxshP36J2ubRP0RboJqS%2Fx7w%2F5q2b5jKWhshCD%2B352aCqtQh2cSZzh4v6iqkMzehPhCgTttXE7EwPDRoXHRzoYzIy9HFpAzLev9gJLai8iE4wGjW8HCj53x6dbrR1%2BsTp4Zo9%2FhDTS%2Ftjr3LtqMDrrXjmEqbpNpBYs7MGh5LsMfbaCb7e6GwX1czIHbboSzfOx2JmwnVqkZ53m2pdpVCxWzSuUgVyY9NWoYPWDv0qFzAZWWHVU5%2BdQUsa572lzgwvrNNCrpWqYw%2BGOYmG%2BSLs3KP3f9ieYx1ZA17zgWvnX88eDXW%2BVFOGs3y9zwwOmpSS3FC63P83GsD8fg6d%2BLxLoqrSGL%2FRn8wgdGJygY6pgGB5SfEXQmMu9m6mHGum7ZM8VIxI1M1xE7MC41RQyZpVPIkcNuUXZdR2r3exXJEGqSoQPUU%2FJY%2FFDHIDmgrr5CYp3CwgrXUVTSnEZ5BWIq0oYL9qZkhWv8Q2ZWnA4%2FFT%2BwszhqwQfnLbLOILGQ9Oj07k4MXiDcjh1LDRdZrrQZBtCJjIGjdbpee9w1JBu1lLRmEqJ%2BIGm7Yrk9W11QBs96%2BiSTjvG6J&X-Amz-Signature=e87f45e0e516ad79108a575a46ac7d01681e86d2b661f3b8e0f5181b3ea04519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XZQ6SLA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICHXyFyFmla0CKvTu5O5ODcl2yn739bFgJ%2FCwMlfIU7GAiAi7Rb9aJJOJRcyVy4Ysef3VzbhwlA9YimX9w4l3vZr2Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMv6M%2BQocE3ePJ05JkKtwDhFeOgspJlshzk4Mnm4vuqHgdbijnpe8pedfXuBXm%2B5ADJtWpMhV%2F93a27S9TcyLW1zCBj6vWLSzcGMhE%2BsjqRyyVWbqpmTV6AGjQdJCdL5%2FPtWI3pH1dHfXRZ%2FJhn8S%2FfGTef2UDhtD2CssWQCHVu9x2btkWsd73bUUvXfjvSmF18%2FmJ7zNnMOdFNe3GsEMFXkvZSBY4ipFnisaLNAp0vsBlzRBYb5DbkKvG7gQVcAHzvtMe9Ag%2FaAqr9Yqgp6oTbj%2FHFlrZmM72ZSMGahKj6ClC%2BEh9JxshP36J2ubRP0RboJqS%2Fx7w%2F5q2b5jKWhshCD%2B352aCqtQh2cSZzh4v6iqkMzehPhCgTttXE7EwPDRoXHRzoYzIy9HFpAzLev9gJLai8iE4wGjW8HCj53x6dbrR1%2BsTp4Zo9%2FhDTS%2Ftjr3LtqMDrrXjmEqbpNpBYs7MGh5LsMfbaCb7e6GwX1czIHbboSzfOx2JmwnVqkZ53m2pdpVCxWzSuUgVyY9NWoYPWDv0qFzAZWWHVU5%2BdQUsa572lzgwvrNNCrpWqYw%2BGOYmG%2BSLs3KP3f9ieYx1ZA17zgWvnX88eDXW%2BVFOGs3y9zwwOmpSS3FC63P83GsD8fg6d%2BLxLoqrSGL%2FRn8wgdGJygY6pgGB5SfEXQmMu9m6mHGum7ZM8VIxI1M1xE7MC41RQyZpVPIkcNuUXZdR2r3exXJEGqSoQPUU%2FJY%2FFDHIDmgrr5CYp3CwgrXUVTSnEZ5BWIq0oYL9qZkhWv8Q2ZWnA4%2FFT%2BwszhqwQfnLbLOILGQ9Oj07k4MXiDcjh1LDRdZrrQZBtCJjIGjdbpee9w1JBu1lLRmEqJ%2BIGm7Yrk9W11QBs96%2BiSTjvG6J&X-Amz-Signature=5ac4634ff2a8fcb54aeb0afc5f52a632ce7e1276a57430428013539e059f5b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
