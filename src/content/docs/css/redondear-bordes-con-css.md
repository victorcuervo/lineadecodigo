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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBN7YJB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLw1tkA4ROeApYg1PbTQ3x7Cst0mikEtr93HJSPkzeZAiEAz%2F%2BA9d1WaTUrir1OemqtjMBw5M%2FX5O75metzLe3eDCoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEWRBRQJVRf6l9%2F%2FSrcA5eSdjyCGIZMhKqGE%2BMPh4IZMJd1gvTCtcm6iRrBHnpLSEN4RPeFbhf02461k%2FBZT%2Bav8%2FIZz2sUwe7ZkomC9nsgM4o3u1mA4Di8fE0JGPKdPx%2FKjrRedxNhhqd6UIhGT6eA007hAGG3X7ZFOphEL8z2fdLPFPHENLoSepN9msWcL%2Bgfztb%2BMYZFrjc99XJAIX33xSPu%2BDyW4qgcgdlWTMgJ84RiWHJ55BywqbbGE5zl5W1gCM3toffXmTVnS3Ejt0e96LgmSaM1s6tgTGuiWyYucG6jfousIM2%2BKcbheqYu6ftvyTgwvCtC1%2Bow9A6K1OcWrkoicd2GPZ8LPllC3heNxVmK%2Fl6vSACtkL%2FQT1V68K%2BeI3z1mkerQiWc%2By%2BEFTZoG3DzSA3Fg58KXhljbvELPQOrZhEhpyiafUiOsDzchf8vN3vBcsIrQpHA9Z4uTRRwdh%2Fbz5ifSLOsXLppVPelm8Z75b6hVCb%2F0qFkDmX758k9FGCJqUVu5Wd9wxbB6hC0oET4CTlW4385P8LcobqKWbvkBcrVPyMex6UZbOBSseqvuXr5Xi6O4CmYniH5H1%2BgnzCnmIqrdo0bURItSEv7qNbQf6JcbZEHOZ901EWdWyypKYHS8Hle8BBjMO%2B31skGOqUBTlmYUP3keRWtkoROLGGTGodyf11AkhwWhn2OqeGQDYQF%2B4B2QxTW8TANsfXUTEMsKCmnoCnYU3xeTZgZzWNqEjCR3CiGlmDPxDmJSBg%2Fk7%2Fdm%2BhyWq0dPdbGHekARvkorw82Mh3Rn%2Fcse4ULKWG%2B9l1ppRg3RjIRFWB9RfaUuZQte%2Fz6OtlsBAYPv66wfFwBzxSrGe0zzJTm6gP5wCtqRBUZPVOu&X-Amz-Signature=8640279cb3894be4b1243ce0189c5078fa80f7d5b7c31a39feb32c1479ae1676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBN7YJB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLw1tkA4ROeApYg1PbTQ3x7Cst0mikEtr93HJSPkzeZAiEAz%2F%2BA9d1WaTUrir1OemqtjMBw5M%2FX5O75metzLe3eDCoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKEWRBRQJVRf6l9%2F%2FSrcA5eSdjyCGIZMhKqGE%2BMPh4IZMJd1gvTCtcm6iRrBHnpLSEN4RPeFbhf02461k%2FBZT%2Bav8%2FIZz2sUwe7ZkomC9nsgM4o3u1mA4Di8fE0JGPKdPx%2FKjrRedxNhhqd6UIhGT6eA007hAGG3X7ZFOphEL8z2fdLPFPHENLoSepN9msWcL%2Bgfztb%2BMYZFrjc99XJAIX33xSPu%2BDyW4qgcgdlWTMgJ84RiWHJ55BywqbbGE5zl5W1gCM3toffXmTVnS3Ejt0e96LgmSaM1s6tgTGuiWyYucG6jfousIM2%2BKcbheqYu6ftvyTgwvCtC1%2Bow9A6K1OcWrkoicd2GPZ8LPllC3heNxVmK%2Fl6vSACtkL%2FQT1V68K%2BeI3z1mkerQiWc%2By%2BEFTZoG3DzSA3Fg58KXhljbvELPQOrZhEhpyiafUiOsDzchf8vN3vBcsIrQpHA9Z4uTRRwdh%2Fbz5ifSLOsXLppVPelm8Z75b6hVCb%2F0qFkDmX758k9FGCJqUVu5Wd9wxbB6hC0oET4CTlW4385P8LcobqKWbvkBcrVPyMex6UZbOBSseqvuXr5Xi6O4CmYniH5H1%2BgnzCnmIqrdo0bURItSEv7qNbQf6JcbZEHOZ901EWdWyypKYHS8Hle8BBjMO%2B31skGOqUBTlmYUP3keRWtkoROLGGTGodyf11AkhwWhn2OqeGQDYQF%2B4B2QxTW8TANsfXUTEMsKCmnoCnYU3xeTZgZzWNqEjCR3CiGlmDPxDmJSBg%2Fk7%2Fdm%2BhyWq0dPdbGHekARvkorw82Mh3Rn%2Fcse4ULKWG%2B9l1ppRg3RjIRFWB9RfaUuZQte%2Fz6OtlsBAYPv66wfFwBzxSrGe0zzJTm6gP5wCtqRBUZPVOu&X-Amz-Signature=703e87aafba98c00e1d9ef5100d715bdac59a4de1a93a616fae5703548ad3ae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
