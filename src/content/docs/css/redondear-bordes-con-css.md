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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NIR5EKB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgpmjsQ0UGFtVx7fFSQZEhA0w669BE6iuLDLC66vqwOAiA6rTf%2Bhm9OSZAaPmNJrH0uzKRNnJnECBAHi0%2BoiTJbWSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4N7vqG07b5vgqEVlKtwDtWEt4dQdxRECr975oGuyxnY0lPAuIu90n%2BBli5DJEi1bLmHRl%2B2R%2FVaen0fbBGIWnJx23TNpq5vErrmSB9s3jh7qeuboErA4Wrn7%2B6nG%2BmeV3W3LIccRmnV6n1zLo6NHz5KU6g32nbwfB%2FJJjtaLijZJnRV4GX%2BxYDm7J3O9mA4%2BGxPNFHTaVQH9%2BSFnaw09XzLuEiUKhzZRW7WlD1xwoERUnEG%2Fdzj4oM2hgFOkcQ%2FjlbhfF5yyWCkN0RDrSSGLmtaSvz0VFOancUXK2kpe9C9nqekCuRpovau6CAoTyoWs25fait53A742RJ1jZqvg3SigHtqTJE7jwdmaQhHG7nR4O9zw3dMRa5IH0y8snQ0C5NStnBPWA%2BcISmJM5NawvoTCdq5Mbq2EWkl3HexKCaNTM7ELxaOEdxw2oP1AiXC%2B0lIB1gtf3oqmijQERdrNuEH5m8G7WqH418jO%2BDl0WkUMckQvfO2quFOtiHsa5jekZLrBH6U7nSJuxE4iGQ5sOpcsrzX4Fy7%2B6ngZx9dbUHUFsHHY6pOQlxgHJYcJT3S1qfMCup%2F779bUWN8LSW9xM2%2FkptjIa4JJ4rhc3YYCZo9Le3V9ta8PdFHCoOhtapnzE39T5Bmwmp6%2BEXow2IzIyQY6pgFgs7K7%2FOidXHIIFnRE%2FZ74lU3BP8gZrb1Vi3rSQF191WmJc2gX5FxdfDVmCNxdyN6sqljXXCozSOei513n9UJwwSIumnoENFjiKHWquWgJ1BfQKqzS46iBTyCI1Jp4rNS789P%2BVLl777I3jxrWvwoiXU6wEZBDQxJt8GigDOH%2FStGeich6L8mjJYd3hB0agOVV7GYgBqzasW2RmPLDbH2X4RI7z%2Ffo&X-Amz-Signature=b64849ab6e75a3d4960a48a87f859ad849b21522126ed8c8ba2b737421e98e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NIR5EKB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgpmjsQ0UGFtVx7fFSQZEhA0w669BE6iuLDLC66vqwOAiA6rTf%2Bhm9OSZAaPmNJrH0uzKRNnJnECBAHi0%2BoiTJbWSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIM4N7vqG07b5vgqEVlKtwDtWEt4dQdxRECr975oGuyxnY0lPAuIu90n%2BBli5DJEi1bLmHRl%2B2R%2FVaen0fbBGIWnJx23TNpq5vErrmSB9s3jh7qeuboErA4Wrn7%2B6nG%2BmeV3W3LIccRmnV6n1zLo6NHz5KU6g32nbwfB%2FJJjtaLijZJnRV4GX%2BxYDm7J3O9mA4%2BGxPNFHTaVQH9%2BSFnaw09XzLuEiUKhzZRW7WlD1xwoERUnEG%2Fdzj4oM2hgFOkcQ%2FjlbhfF5yyWCkN0RDrSSGLmtaSvz0VFOancUXK2kpe9C9nqekCuRpovau6CAoTyoWs25fait53A742RJ1jZqvg3SigHtqTJE7jwdmaQhHG7nR4O9zw3dMRa5IH0y8snQ0C5NStnBPWA%2BcISmJM5NawvoTCdq5Mbq2EWkl3HexKCaNTM7ELxaOEdxw2oP1AiXC%2B0lIB1gtf3oqmijQERdrNuEH5m8G7WqH418jO%2BDl0WkUMckQvfO2quFOtiHsa5jekZLrBH6U7nSJuxE4iGQ5sOpcsrzX4Fy7%2B6ngZx9dbUHUFsHHY6pOQlxgHJYcJT3S1qfMCup%2F779bUWN8LSW9xM2%2FkptjIa4JJ4rhc3YYCZo9Le3V9ta8PdFHCoOhtapnzE39T5Bmwmp6%2BEXow2IzIyQY6pgFgs7K7%2FOidXHIIFnRE%2FZ74lU3BP8gZrb1Vi3rSQF191WmJc2gX5FxdfDVmCNxdyN6sqljXXCozSOei513n9UJwwSIumnoENFjiKHWquWgJ1BfQKqzS46iBTyCI1Jp4rNS789P%2BVLl777I3jxrWvwoiXU6wEZBDQxJt8GigDOH%2FStGeich6L8mjJYd3hB0agOVV7GYgBqzasW2RmPLDbH2X4RI7z%2Ffo&X-Amz-Signature=f6b7a513858dd76da8d59d3060e978761d50e3ca5125f3608a41f812d9f97af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
