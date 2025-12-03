---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU75MFF6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCdYmTkkFU225A6bCsDdDUcY9bAYWCDXIMXGy1p56CI3AIgGldlsUlB0CwSPsy8TwDyav6og%2Fs8DBKOaJo56Go%2FX9Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJvBRzQqxCVufM7FsircAz92LG3%2BQdyjniAwGt98j8ikxkaY1vlLxAyG5egmsY8VBkyr%2BiSSPWJdXUwI2cCoJYxp9IFg8gm2hew%2Fnlecp6G%2BCLB8LK1fgXAbhcSqZdLjc37C6Cu8oKAGSVqweFKrkWGhissOvDwN1jTGcHVhXvKl6mFC%2B9SmPl7dpCJpW4FiF8mRgVg0g%2F4YYU%2BVa8Q2kEkqT5fQ9g3HHy0tL%2B%2FbujODmJcOiB5dhHCisriZg%2FDfGvxaRWLkbfigLLJdmjWgTAxXKtrHyqacKib7LUparWE4DQ%2B4w39xCj7ztv6NwepbJob8MDJTaFA6ZDHsBcdTwHBGlEZuIAUDkzkhdywDAdqaARD%2B1vPE4YI29zwMbdstWe45BPDftjkMQDAmBSE7zRs03yVPmcEmY3JvuFdHJisLo9xDUsFjSE6NViC3H%2FGXesamPeGP%2BEsPEjdHL4M4dSJG2mSNJMB%2FAfdrdNygiC%2Fw1TM7CXSho8fwDS071kT5W9zsfUdnAnz3xi%2Bm8MSth3%2FcLjn9Zszn%2F4EamcKOovqCBfD3mUTKXROGl1PM6dTsvwNOXBiGk0A8ctcHK%2BT3OB%2Fp%2B%2FKOCPN4ho6zNL3RoCI2gnldWZdmS55%2BZTcvHvEfEa7PWycb%2FgMJPquiMJ2%2BwskGOqUBXjzQERIRgwMPgEyU6gGCRgvn2P0SM3L4Tu86Ohv4d0cLcOjMjH6HPL4FWhCQ2ytXo3fYfGOuP2qGtDTTHXysZ8cKVLOa7PMmi4ehEmwweo%2Bi9CNYyuwSJj%2BA7Pw%2Fd9yQD3FsHad93w8DWR7ZclXgy4iilDJyWa7nTttZCcFuUAm5SyNiJoKDXYDoz2dUoGNmVbYd4%2BSgJa7eR51sCPmCG3Zqt3PG&X-Amz-Signature=14b18f9278eddcdf834ed8eae747bbb4c9f82252bdf72eebbf6d2e918d470286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU75MFF6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCdYmTkkFU225A6bCsDdDUcY9bAYWCDXIMXGy1p56CI3AIgGldlsUlB0CwSPsy8TwDyav6og%2Fs8DBKOaJo56Go%2FX9Uq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJvBRzQqxCVufM7FsircAz92LG3%2BQdyjniAwGt98j8ikxkaY1vlLxAyG5egmsY8VBkyr%2BiSSPWJdXUwI2cCoJYxp9IFg8gm2hew%2Fnlecp6G%2BCLB8LK1fgXAbhcSqZdLjc37C6Cu8oKAGSVqweFKrkWGhissOvDwN1jTGcHVhXvKl6mFC%2B9SmPl7dpCJpW4FiF8mRgVg0g%2F4YYU%2BVa8Q2kEkqT5fQ9g3HHy0tL%2B%2FbujODmJcOiB5dhHCisriZg%2FDfGvxaRWLkbfigLLJdmjWgTAxXKtrHyqacKib7LUparWE4DQ%2B4w39xCj7ztv6NwepbJob8MDJTaFA6ZDHsBcdTwHBGlEZuIAUDkzkhdywDAdqaARD%2B1vPE4YI29zwMbdstWe45BPDftjkMQDAmBSE7zRs03yVPmcEmY3JvuFdHJisLo9xDUsFjSE6NViC3H%2FGXesamPeGP%2BEsPEjdHL4M4dSJG2mSNJMB%2FAfdrdNygiC%2Fw1TM7CXSho8fwDS071kT5W9zsfUdnAnz3xi%2Bm8MSth3%2FcLjn9Zszn%2F4EamcKOovqCBfD3mUTKXROGl1PM6dTsvwNOXBiGk0A8ctcHK%2BT3OB%2Fp%2B%2FKOCPN4ho6zNL3RoCI2gnldWZdmS55%2BZTcvHvEfEa7PWycb%2FgMJPquiMJ2%2BwskGOqUBXjzQERIRgwMPgEyU6gGCRgvn2P0SM3L4Tu86Ohv4d0cLcOjMjH6HPL4FWhCQ2ytXo3fYfGOuP2qGtDTTHXysZ8cKVLOa7PMmi4ehEmwweo%2Bi9CNYyuwSJj%2BA7Pw%2Fd9yQD3FsHad93w8DWR7ZclXgy4iilDJyWa7nTttZCcFuUAm5SyNiJoKDXYDoz2dUoGNmVbYd4%2BSgJa7eR51sCPmCG3Zqt3PG&X-Amz-Signature=06b3e766b9b1b902d3e88f1febabbe75ad131591edf52993013c30c6096e8ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
