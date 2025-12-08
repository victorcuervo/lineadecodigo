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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTVINPBN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNkg906PGK7cIaRbuBJg988u48zEJ7%2Brd7arbnbDQZ9AIgMgrln4Q7EfgGgOekJoKUZ13IjDSsNyTb6jhDqRaHf%2F8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP21qKjE37zEUR%2B1jircA5bumEAM63R7EObLOfG04wmAZyXxahTI%2FGwO0Fg4p6%2FKpkuPWl%2BOn4%2B%2BPALNA49obTu1wDcKHas2ilqFiR4IQm62%2BzrMmlK5xs36cpHDDWFeyllGPk%2Bv85phDionPe%2B8BgfuOV0Z1zEt1ABWHd6o2sWqSUMGUCWDJkqaO%2Fg5n24VaHjN8JrICCsLhW%2FTUqE07fnC4sarGKYXwgvPbW8AYRiaCRxL4jN4YcKlupWC31HQZlXbDSebfy91ANGPSh7p2Nkf8KBja2nYlZI0uphfb9vAOfRT8XtJCiCM9LlTuxWRI2RUlNKP92NAPKyuugvddL9%2FFlYdklYItjLuRLjlBYbQkfpTKKiv7OsG%2Fcb3tfRCiHpCV49reJ1HOIRlu2%2BmQI01HIjeNHFGXQiKTg4YJ7HD9kTnLa38%2Fmvu%2FtxkHXGpyelhsz%2FgKaJRtUNZxspdU8%2B%2BLwib2RXTF%2FMZqiuHxX6xhhlOXD%2BWn3nnCA6iNmJcLhFN5DG6DpJmWvsEr%2BmsGjiqdxQhpETwPCNEetRc3kxsCA7Vw1v0Y6eGbzsi%2BJj%2BwP7Jmd6NTKDOkb2lnY%2FiW6UGrAqvqaOrrvucm9VAjbp6jnL34XzQzOvxyXMeH8Y54cA98IAZs5ImxtjUMKXd3MkGOqUB4LhCc%2F3dwJ1r7WgcCeoSLIac3l8ml1wghubrtKTrm2qBg2qWSlxMKESaFqUTfS5eY8wIDSwMyOWwV9mcVPfuJR8JBjplKJp88b8q42LtF6TFoI44XvwM9Q%2BP3PzfoCoZ6LtPsIYM9lg9z1G8r7UdvSK7CmhxtsQO7u0yGE8Xd1PjwcNczlJssH4A7pi2xzpm6mPcbjy0sX%2BONUQTet4MI%2B4KsOWk&X-Amz-Signature=37a436a25675239494b1c8cbf3670317cfe7c9f3d4b4f44b48cdb87f133aca43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTVINPBN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T202501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNkg906PGK7cIaRbuBJg988u48zEJ7%2Brd7arbnbDQZ9AIgMgrln4Q7EfgGgOekJoKUZ13IjDSsNyTb6jhDqRaHf%2F8qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP21qKjE37zEUR%2B1jircA5bumEAM63R7EObLOfG04wmAZyXxahTI%2FGwO0Fg4p6%2FKpkuPWl%2BOn4%2B%2BPALNA49obTu1wDcKHas2ilqFiR4IQm62%2BzrMmlK5xs36cpHDDWFeyllGPk%2Bv85phDionPe%2B8BgfuOV0Z1zEt1ABWHd6o2sWqSUMGUCWDJkqaO%2Fg5n24VaHjN8JrICCsLhW%2FTUqE07fnC4sarGKYXwgvPbW8AYRiaCRxL4jN4YcKlupWC31HQZlXbDSebfy91ANGPSh7p2Nkf8KBja2nYlZI0uphfb9vAOfRT8XtJCiCM9LlTuxWRI2RUlNKP92NAPKyuugvddL9%2FFlYdklYItjLuRLjlBYbQkfpTKKiv7OsG%2Fcb3tfRCiHpCV49reJ1HOIRlu2%2BmQI01HIjeNHFGXQiKTg4YJ7HD9kTnLa38%2Fmvu%2FtxkHXGpyelhsz%2FgKaJRtUNZxspdU8%2B%2BLwib2RXTF%2FMZqiuHxX6xhhlOXD%2BWn3nnCA6iNmJcLhFN5DG6DpJmWvsEr%2BmsGjiqdxQhpETwPCNEetRc3kxsCA7Vw1v0Y6eGbzsi%2BJj%2BwP7Jmd6NTKDOkb2lnY%2FiW6UGrAqvqaOrrvucm9VAjbp6jnL34XzQzOvxyXMeH8Y54cA98IAZs5ImxtjUMKXd3MkGOqUB4LhCc%2F3dwJ1r7WgcCeoSLIac3l8ml1wghubrtKTrm2qBg2qWSlxMKESaFqUTfS5eY8wIDSwMyOWwV9mcVPfuJR8JBjplKJp88b8q42LtF6TFoI44XvwM9Q%2BP3PzfoCoZ6LtPsIYM9lg9z1G8r7UdvSK7CmhxtsQO7u0yGE8Xd1PjwcNczlJssH4A7pi2xzpm6mPcbjy0sX%2BONUQTet4MI%2B4KsOWk&X-Amz-Signature=a6425fe9aa76e58ae4ae9177fc5fffd9f5d31dd08a83e61b0be77242c86cef6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
