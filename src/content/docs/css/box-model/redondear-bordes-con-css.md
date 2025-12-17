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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657UY65AM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFo308f2YehoiKk%2B%2FDg4SXicq3zbPCl4CaN0f9MIXWkQIgU5LEd4kxuSoUe4lP7ubGpJhygb2pXUElie2eBpVVqIMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV8s0Q9NcgR7hWFFCrcA58Vsho%2F1jPECRP8IRvMDXsan%2BDWWD%2FUxDQSHG4ySPfZRy8WqGBVA%2B%2Bv7D2D6RcDm%2Byt%2BUU9qT%2Bzq5AqU6FzaRNV9UqEukh2PtPmM4Xb3RoA6nM%2F37iJkarEHWFl3RuRjNACdChHhGC3eHxvRG6kOP36CJOMqXU%2BjDuIcOeY6%2Bq0CGuIiGAp%2FcNfqs2E4dv7NBPa1gXKAkHxmIbaARHHESpDoVLJfBuGxfoWSuwP5XDpN4s1i4nkGHL8YIhcR49o86XoGKWZ5oGQejCn88Nhm7%2FY1ChU%2FbJyr0Ng34nQ1TFZmU7n1S9Owh2ylaiD6vABQW4RGv0C85%2FsEqeyZWltLuqdppqr5VzEYYjWdv7%2Fm78cpBFk%2BiX%2Baze4f88rhNPn7gZXU11HHaaPIC9m1ZnlehHFiyjc233ZtZAlYqpnbp4TCOKpGcRBKFQsHUtQkg6%2F%2F5eWqQ0NDFUu3A3nHgToRTIJ4G5tA%2B4vdRBayEQ1qVEVslh0zpBGzk27E3p0gaXdc2dth74wNUYPr01a9NB9fRaUH9qYsXM86shLEGZlvTX66%2BRX5ZK1JFuM2lK0hOtWufWlr2YRYj1M2GNri9%2BV7GkIO0OH0W3e3Aba3lvXZvJTb8GclsemOuxi277hMN%2Bgi8oGOqUBEVP4SQUEpMFkNF%2FquBC0QW5NRH7ldbZzH21iIbw6Ue84cZT0TRh%2FcK2KOu55xtgAtyzx2JrndlKmtg8xGs%2BUOCNYI40VLgToblUfgOOT9nEH1cNBHVtZbZOeMtVwTe84db375IJ%2BbLaeINhezn5dMcAADygU69JU5opquAWXKWSupZCwmz1Sq3zBJWDNokZ%2Brg2GuxJ3RiUZlHnOxpcQmkfKxiPR&X-Amz-Signature=532025aedc30f5b1374c2b4cb96c98e7888a80b5c092ffc96039bf0723ecfa6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657UY65AM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFo308f2YehoiKk%2B%2FDg4SXicq3zbPCl4CaN0f9MIXWkQIgU5LEd4kxuSoUe4lP7ubGpJhygb2pXUElie2eBpVVqIMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCV8s0Q9NcgR7hWFFCrcA58Vsho%2F1jPECRP8IRvMDXsan%2BDWWD%2FUxDQSHG4ySPfZRy8WqGBVA%2B%2Bv7D2D6RcDm%2Byt%2BUU9qT%2Bzq5AqU6FzaRNV9UqEukh2PtPmM4Xb3RoA6nM%2F37iJkarEHWFl3RuRjNACdChHhGC3eHxvRG6kOP36CJOMqXU%2BjDuIcOeY6%2Bq0CGuIiGAp%2FcNfqs2E4dv7NBPa1gXKAkHxmIbaARHHESpDoVLJfBuGxfoWSuwP5XDpN4s1i4nkGHL8YIhcR49o86XoGKWZ5oGQejCn88Nhm7%2FY1ChU%2FbJyr0Ng34nQ1TFZmU7n1S9Owh2ylaiD6vABQW4RGv0C85%2FsEqeyZWltLuqdppqr5VzEYYjWdv7%2Fm78cpBFk%2BiX%2Baze4f88rhNPn7gZXU11HHaaPIC9m1ZnlehHFiyjc233ZtZAlYqpnbp4TCOKpGcRBKFQsHUtQkg6%2F%2F5eWqQ0NDFUu3A3nHgToRTIJ4G5tA%2B4vdRBayEQ1qVEVslh0zpBGzk27E3p0gaXdc2dth74wNUYPr01a9NB9fRaUH9qYsXM86shLEGZlvTX66%2BRX5ZK1JFuM2lK0hOtWufWlr2YRYj1M2GNri9%2BV7GkIO0OH0W3e3Aba3lvXZvJTb8GclsemOuxi277hMN%2Bgi8oGOqUBEVP4SQUEpMFkNF%2FquBC0QW5NRH7ldbZzH21iIbw6Ue84cZT0TRh%2FcK2KOu55xtgAtyzx2JrndlKmtg8xGs%2BUOCNYI40VLgToblUfgOOT9nEH1cNBHVtZbZOeMtVwTe84db375IJ%2BbLaeINhezn5dMcAADygU69JU5opquAWXKWSupZCwmz1Sq3zBJWDNokZ%2Brg2GuxJ3RiUZlHnOxpcQmkfKxiPR&X-Amz-Signature=6f242fd8927b047c1aa0d5bbf0d074080dcdb8528340980bf5859bdacc7e627e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
