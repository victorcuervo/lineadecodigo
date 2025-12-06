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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXKCTV4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Mjgm8gwC2vKUkluzLHtGf1AfW0UQT9qP10bUKKG31AIhAMkBXD43zAgFsM6EBQ5vUliWBsJz8bxgB3MtCy%2FkhKh3Kv8DCGsQABoMNjM3NDIzMTgzODA1Igw%2BrKexYlgcECMgC%2Bcq3ANDuJbIVZm3D4kKyMtUVclikwaul40KOhtIpb09C0mEs%2FmFWMy3NlRo95ID%2BSXTjO4cB2ZNE5TqWD5cZ5wyYEitPEJC7EuiLSM41F8lriV3T1FKvWELErME2PNnf%2Bilbvnabh8A%2FxkZSHMowz%2FG0zqYQkXRxMe2wGkYf00%2B5XZEMRsEi2wMn4pHhqQkQ3qRrNXL3Byq8%2BeSh90t7lUz1cjn7xM9ZZtKE%2FiMJiyn2TvcL7zozRPfbpK6JK0E9dnyYY%2FfVFTAVpbjOYIaZ6WrcQCIAURgDgx7RKhbE6XIDZBFYDH9Z7QEmqk2RP6oYljhSxYTSJqpLZgduAYwQYHSkePeM4zW0aHVotYXHJltfuJ5YwjrxSWL%2BcVorNPjU843WhZ%2B%2Bwg0W2Dpl3h1rKXqTS1n%2Fujqc74EnsMVUwIVhJqD9%2Fx03I6l%2BTJlI1hIB46Lz47KnSZoxFAkAeMjfdBpsIcslU%2BMjfYt15oSvanto1gSd1tBfpJ271oVh%2FR%2BBbKQGVjQ3dlOobeDS8xecsExTz8H8%2FUcfl0LjNBJkx%2BrVUNjTICzfVtYPFiyH69P%2BScMA66TMa7vD4TcBG5bz3Uku62k45CGpZoD7ZqO70iKbugMDxDCjglD1SjJir0RkDChp87JBjqkAWZzPfKypimiCTk9KPR5ijMQsG5fQBmDX%2BoIkkWZIYfQ5Kk2mMYiHjcuf%2BkaFkHxf1LVHm73KP%2B0HLheOxSHw2gJHvDTeo%2BmRrMkmIhvKIgxDzOfRL%2FDDI4iI8BYT47tWcym0%2BcPnj5ZjXnCt7Uyvlo4U%2F8PnfOMKoaDhhTshY79BUtfxMTh7qBMVFjK5VKEqaoTTLvCx4sjjKDCvx0oVjV0ej4d&X-Amz-Signature=0b4fed7336f86ef12451be7529038f77af641133be47544332c7f5594dfc9f32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXKCTV4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8Mjgm8gwC2vKUkluzLHtGf1AfW0UQT9qP10bUKKG31AIhAMkBXD43zAgFsM6EBQ5vUliWBsJz8bxgB3MtCy%2FkhKh3Kv8DCGsQABoMNjM3NDIzMTgzODA1Igw%2BrKexYlgcECMgC%2Bcq3ANDuJbIVZm3D4kKyMtUVclikwaul40KOhtIpb09C0mEs%2FmFWMy3NlRo95ID%2BSXTjO4cB2ZNE5TqWD5cZ5wyYEitPEJC7EuiLSM41F8lriV3T1FKvWELErME2PNnf%2Bilbvnabh8A%2FxkZSHMowz%2FG0zqYQkXRxMe2wGkYf00%2B5XZEMRsEi2wMn4pHhqQkQ3qRrNXL3Byq8%2BeSh90t7lUz1cjn7xM9ZZtKE%2FiMJiyn2TvcL7zozRPfbpK6JK0E9dnyYY%2FfVFTAVpbjOYIaZ6WrcQCIAURgDgx7RKhbE6XIDZBFYDH9Z7QEmqk2RP6oYljhSxYTSJqpLZgduAYwQYHSkePeM4zW0aHVotYXHJltfuJ5YwjrxSWL%2BcVorNPjU843WhZ%2B%2Bwg0W2Dpl3h1rKXqTS1n%2Fujqc74EnsMVUwIVhJqD9%2Fx03I6l%2BTJlI1hIB46Lz47KnSZoxFAkAeMjfdBpsIcslU%2BMjfYt15oSvanto1gSd1tBfpJ271oVh%2FR%2BBbKQGVjQ3dlOobeDS8xecsExTz8H8%2FUcfl0LjNBJkx%2BrVUNjTICzfVtYPFiyH69P%2BScMA66TMa7vD4TcBG5bz3Uku62k45CGpZoD7ZqO70iKbugMDxDCjglD1SjJir0RkDChp87JBjqkAWZzPfKypimiCTk9KPR5ijMQsG5fQBmDX%2BoIkkWZIYfQ5Kk2mMYiHjcuf%2BkaFkHxf1LVHm73KP%2B0HLheOxSHw2gJHvDTeo%2BmRrMkmIhvKIgxDzOfRL%2FDDI4iI8BYT47tWcym0%2BcPnj5ZjXnCt7Uyvlo4U%2F8PnfOMKoaDhhTshY79BUtfxMTh7qBMVFjK5VKEqaoTTLvCx4sjjKDCvx0oVjV0ej4d&X-Amz-Signature=d4c2f11b52366b47c4ba9fbd6a42a25ed087f61d06c323d22bf183f48e59e899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
