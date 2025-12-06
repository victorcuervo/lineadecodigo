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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OSAHLT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjko6LbiSsp0vUnxfzeq3%2F5IpJH%2FewAdAmY%2FLv59YEsAiEA7%2Fa%2BJpbx6OzeQ%2BWOmXvzLSKosvinWy%2B78Ytj0nwYbeUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAeixaqOqWw5a%2BZxjSrcA4SIAyGpEdGPMasP8lTKWO8JnpC1z1EO0uJZeOfRB9mUFvXdcPEh6EX9b39fXilJOynfXkFuN5PwTJlLjhdUtJefqSd%2FgLJMWr7fsiP8ksV%2BszpXqhNF2gOM5CntFB3VJPNfum1seenGOaQD2CEqioU%2FdBkcl2zxeBRq5pbZL4WwcbpueCCxHuSlUh4qRLD645wzpMfcIfpfISocuL55gr7UMN5Tl%2B2mW%2BZOs7y55Ilg44lBuy9738sAn4HJvfBOoCgrZtfybTYtC5UvGozSIrefUnIM%2BF%2F2nHIl3uUq64iq9rL%2FNa%2FVkaDv4gpHB8ovn5tAGk2F7cM6Ab6G%2FhB9VBGN%2B9zIh%2BYf2cTJy68lSTFtG9cybBS91aS99%2FC6GWP1uvgk39OsrRV1oMgPQNRI0Cu9Iggp4KrlrokGwVzb5O26xx3zOqHDBhtOvEgEzCB80cQy%2BbMvuu0M003DLuwDBtTa0xYVqLl5JKBoQguF8a%2BYG8GfouI%2F8Qw5k9CgZbSIaqYLOSy6fIxtGrUCHnH6LH1v2ie00i0lHqtK12PPqTOfJ%2FuPgyammzj2%2BO0EhO%2BWmsyBhjFCmQ185qtVX8RDylxN%2B8Q5ygh6%2Fg2BOg4c%2F4RLbEFSqo%2FubCoxq%2B%2BuMPbqz8kGOqUBFz6GWyYGYYndv4nl3WsbOpmBPJtSh%2Bb7TaAv5O9tELn73%2BY8t9Y0q4Xupa7yP%2FmLFrP2sCa%2Fr4KDxIGjvjLVeHIZ%2B4v1fV%2FjSsZw%2F6%2Fnz5q8a9rW9rsGDcQBM%2B5nzNtFtuCsBHjWRT1v80Qx0UkdPyVsbc%2FoyH%2BS21TywsdP5K6H00dk4qlQz8aH5WhROfNgmXw%2BpodZ25yhswZoppcAg3KIgM%2Fd&X-Amz-Signature=f31faa4500f0833fe5ad1a17b20fe3838ce2c395d9ac7847de839ab04601c70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OSAHLT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBjko6LbiSsp0vUnxfzeq3%2F5IpJH%2FewAdAmY%2FLv59YEsAiEA7%2Fa%2BJpbx6OzeQ%2BWOmXvzLSKosvinWy%2B78Ytj0nwYbeUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAeixaqOqWw5a%2BZxjSrcA4SIAyGpEdGPMasP8lTKWO8JnpC1z1EO0uJZeOfRB9mUFvXdcPEh6EX9b39fXilJOynfXkFuN5PwTJlLjhdUtJefqSd%2FgLJMWr7fsiP8ksV%2BszpXqhNF2gOM5CntFB3VJPNfum1seenGOaQD2CEqioU%2FdBkcl2zxeBRq5pbZL4WwcbpueCCxHuSlUh4qRLD645wzpMfcIfpfISocuL55gr7UMN5Tl%2B2mW%2BZOs7y55Ilg44lBuy9738sAn4HJvfBOoCgrZtfybTYtC5UvGozSIrefUnIM%2BF%2F2nHIl3uUq64iq9rL%2FNa%2FVkaDv4gpHB8ovn5tAGk2F7cM6Ab6G%2FhB9VBGN%2B9zIh%2BYf2cTJy68lSTFtG9cybBS91aS99%2FC6GWP1uvgk39OsrRV1oMgPQNRI0Cu9Iggp4KrlrokGwVzb5O26xx3zOqHDBhtOvEgEzCB80cQy%2BbMvuu0M003DLuwDBtTa0xYVqLl5JKBoQguF8a%2BYG8GfouI%2F8Qw5k9CgZbSIaqYLOSy6fIxtGrUCHnH6LH1v2ie00i0lHqtK12PPqTOfJ%2FuPgyammzj2%2BO0EhO%2BWmsyBhjFCmQ185qtVX8RDylxN%2B8Q5ygh6%2Fg2BOg4c%2F4RLbEFSqo%2FubCoxq%2B%2BuMPbqz8kGOqUBFz6GWyYGYYndv4nl3WsbOpmBPJtSh%2Bb7TaAv5O9tELn73%2BY8t9Y0q4Xupa7yP%2FmLFrP2sCa%2Fr4KDxIGjvjLVeHIZ%2B4v1fV%2FjSsZw%2F6%2Fnz5q8a9rW9rsGDcQBM%2B5nzNtFtuCsBHjWRT1v80Qx0UkdPyVsbc%2FoyH%2BS21TywsdP5K6H00dk4qlQz8aH5WhROfNgmXw%2BpodZ25yhswZoppcAg3KIgM%2Fd&X-Amz-Signature=97916f3cb7b88f113b781b9a48aaccf1f65d39f6201e551d91e69886d081d79d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
