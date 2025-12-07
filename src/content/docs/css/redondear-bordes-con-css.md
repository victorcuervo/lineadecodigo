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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI554MWO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKEjJWV396%2Bxccw0NkR28%2FjzJkmpew%2FzH0eyZzfav5DAiAqIheip3gJCgL51YdXC8rm7Zgcujyx6aFlciEFmv3AIyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMITeX1ZWihrmVfVxdKtwDau2Msl9wL4NED%2FGxSKHRzMBgJ1VHEAs7DEXqhEuYX89UxveNHP6Mh6%2B%2BcBqvL5PQ8N%2BePJiPDGRUYP1CaTThXgaSV7QZooFUR63ny7IetTBne9CR99ouC9CHkhyCwWC4c9AHQFBucFYidFmAYvHMXoWZgNvhh%2Fc1cAXQDcKzOyFbOJjzfzbLAbKPECgiFO6Wfebl9nOwH6fLvgaDKIWpv7xXEH0biMOFoHd49Cxu7mUFXFhSPF8peiIjdq77eYSKjtcMKnsrR5c8Mgn73Rxl9VaI12bv0yZfsXSvyzq3kEPBgqv7jmMYsf3sT1oOj%2BEZNV%2FauVVPIJmCqvlkxX1nBZ7E%2BGbVyT7KAeATYSvE6fEDo4E3cF1IKbrDtjhx5edWV%2Bhj2fDebKgfgzdVStdv3z3hiDZ5%2B%2B5iRnZ2QulFSem4fR%2BORxVfyY5%2BEYnX3wdjHVhQWHiG706q13fld%2FofoIf5ptrG3Gc12vlw5kNmpEIGYybR%2Fdjhu5JZiDEkUh1naPGcLWr2QYJIDsZ9a%2FRp5Qkds13zsx2oXfoZ8AMMyANFKQECq8Kcpax8NtWBy37sfyBbZCkkxaIq1WMRziMErQKqGJXx1MBUhypdcNli%2BOqVuE8u8h4IQU5d76kw%2BpnVyQY6pgGW4KRyIoPI3h13aBUOj5IDwNHGxxVPfCJvhfkc%2FrH8TQG2UJOyCfJVZ1Bw7cK1V%2Bwl8j3owVtG2LiHRgQTqla5hY15vvu8vS6I1g3n7ShC7JISGFYfyRVzydztblefvtzzzF86xXUzu6HI4kfdX2bcCFcDaGySyEXDcl6BBhVJdJK5Jx1tWd76yxzlOE%2F4aDWnWPklGCU7kC99yyvJxHoj4FGjCNG3&X-Amz-Signature=b48d92021632a2b4e1789fa214a6f48293182d2391e153c59ca4cc53e77d2ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI554MWO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDKEjJWV396%2Bxccw0NkR28%2FjzJkmpew%2FzH0eyZzfav5DAiAqIheip3gJCgL51YdXC8rm7Zgcujyx6aFlciEFmv3AIyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMITeX1ZWihrmVfVxdKtwDau2Msl9wL4NED%2FGxSKHRzMBgJ1VHEAs7DEXqhEuYX89UxveNHP6Mh6%2B%2BcBqvL5PQ8N%2BePJiPDGRUYP1CaTThXgaSV7QZooFUR63ny7IetTBne9CR99ouC9CHkhyCwWC4c9AHQFBucFYidFmAYvHMXoWZgNvhh%2Fc1cAXQDcKzOyFbOJjzfzbLAbKPECgiFO6Wfebl9nOwH6fLvgaDKIWpv7xXEH0biMOFoHd49Cxu7mUFXFhSPF8peiIjdq77eYSKjtcMKnsrR5c8Mgn73Rxl9VaI12bv0yZfsXSvyzq3kEPBgqv7jmMYsf3sT1oOj%2BEZNV%2FauVVPIJmCqvlkxX1nBZ7E%2BGbVyT7KAeATYSvE6fEDo4E3cF1IKbrDtjhx5edWV%2Bhj2fDebKgfgzdVStdv3z3hiDZ5%2B%2B5iRnZ2QulFSem4fR%2BORxVfyY5%2BEYnX3wdjHVhQWHiG706q13fld%2FofoIf5ptrG3Gc12vlw5kNmpEIGYybR%2Fdjhu5JZiDEkUh1naPGcLWr2QYJIDsZ9a%2FRp5Qkds13zsx2oXfoZ8AMMyANFKQECq8Kcpax8NtWBy37sfyBbZCkkxaIq1WMRziMErQKqGJXx1MBUhypdcNli%2BOqVuE8u8h4IQU5d76kw%2BpnVyQY6pgGW4KRyIoPI3h13aBUOj5IDwNHGxxVPfCJvhfkc%2FrH8TQG2UJOyCfJVZ1Bw7cK1V%2Bwl8j3owVtG2LiHRgQTqla5hY15vvu8vS6I1g3n7ShC7JISGFYfyRVzydztblefvtzzzF86xXUzu6HI4kfdX2bcCFcDaGySyEXDcl6BBhVJdJK5Jx1tWd76yxzlOE%2F4aDWnWPklGCU7kC99yyvJxHoj4FGjCNG3&X-Amz-Signature=db6180d2f336a99f78ab4283ea8f21468104769ded7f37e0125bd6f88ca9af93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
