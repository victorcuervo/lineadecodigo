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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVADL3DO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7%2BXglZwf5Uhrt298aJYXfFeBVha3mXEJA8MntTSd1kAiEA6kCZ3i%2FaZ6m8b6TdesIYMzxPGTb953g4BQB7N8kS3RsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCLqwum7qpbDZu5HSrcAx95hpFOo7sPKnabxhvD%2B5Z0mhuV5illAYEXeSNmhnEUcZFP0afwAj%2BDgJ79WWDFO0wPmZasTcDnDAejN%2FtqX0C88S4UslTGLZqbl8lDS4XEgJklN1awiiTDfmU49pYbW2LtOvzIHTCTxCz%2Brt7ehxSkN7Hvmb6LfdxTEwgUbOyQgFa%2F491BwAH%2FDNzSnZCIXw6kJNDykrj7OjjPLNWnQPIpKcbtvUYFuVHkzLLOexDqyexZ0D5lHtXVlUVvdyA1fn4F9IiBQAkuHqiiIs3mHgXmTK6DtndnspAb4OCHKwkitS3UdFT%2BB%2BdKCV9HaIrrpyGq5XuB%2FHnHlMb8nN%2BUjjfyhZ9MSPP02P9%2FhaCCJvi2MQgqIysPZRwelIgEW04WA2f04mj7WBuCej5X%2FmthlupPytCEWPoYbl5dt9E1yAF2ivqObfinIc8NHXNhjdR%2FZj8f3ErYWOeAMprfPmDPNwLAGifVIoRbL5iDHC87b5Apa49i1Xfo4uqgGL1UYzgfqvrdEtM9Cyho%2FUC6TA%2FWBqxAEvJhMeOwQwGmWJrU3ksd8p0wO%2FDyxo46IIHMcf9vyMHXt86Olt46aCQqo87SVi4uO1UkGxf%2FowkPYDBB12vVO%2B4HTXCPDCOf%2FFtaMN281skGOqUBg8ors2dcRsCrCVuaPpaoz8SiE09JU7OFWXBo6F9XgTyqfFTfpRo%2FzfUxA9dJw4UBufRiTH71ynZyddpbd%2BOczH8qP03XBIUo5hAOb34M3s%2FDGpjMEyWqxs3aC0KOZtD3aebfikaO6mjca9sgm4OCynzxBc1WZiYdEMybqfxPej%2Byz%2Fjf9QidiRS4Fxp89geZZelKN80eltQ8cT4b%2FGlQDC45vjR%2B&X-Amz-Signature=6360a7c8313ce9119f478aadbcb06f11180a4e2bf9d24ac33ca8e7467a0865e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVADL3DO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7%2BXglZwf5Uhrt298aJYXfFeBVha3mXEJA8MntTSd1kAiEA6kCZ3i%2FaZ6m8b6TdesIYMzxPGTb953g4BQB7N8kS3RsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNCLqwum7qpbDZu5HSrcAx95hpFOo7sPKnabxhvD%2B5Z0mhuV5illAYEXeSNmhnEUcZFP0afwAj%2BDgJ79WWDFO0wPmZasTcDnDAejN%2FtqX0C88S4UslTGLZqbl8lDS4XEgJklN1awiiTDfmU49pYbW2LtOvzIHTCTxCz%2Brt7ehxSkN7Hvmb6LfdxTEwgUbOyQgFa%2F491BwAH%2FDNzSnZCIXw6kJNDykrj7OjjPLNWnQPIpKcbtvUYFuVHkzLLOexDqyexZ0D5lHtXVlUVvdyA1fn4F9IiBQAkuHqiiIs3mHgXmTK6DtndnspAb4OCHKwkitS3UdFT%2BB%2BdKCV9HaIrrpyGq5XuB%2FHnHlMb8nN%2BUjjfyhZ9MSPP02P9%2FhaCCJvi2MQgqIysPZRwelIgEW04WA2f04mj7WBuCej5X%2FmthlupPytCEWPoYbl5dt9E1yAF2ivqObfinIc8NHXNhjdR%2FZj8f3ErYWOeAMprfPmDPNwLAGifVIoRbL5iDHC87b5Apa49i1Xfo4uqgGL1UYzgfqvrdEtM9Cyho%2FUC6TA%2FWBqxAEvJhMeOwQwGmWJrU3ksd8p0wO%2FDyxo46IIHMcf9vyMHXt86Olt46aCQqo87SVi4uO1UkGxf%2FowkPYDBB12vVO%2B4HTXCPDCOf%2FFtaMN281skGOqUBg8ors2dcRsCrCVuaPpaoz8SiE09JU7OFWXBo6F9XgTyqfFTfpRo%2FzfUxA9dJw4UBufRiTH71ynZyddpbd%2BOczH8qP03XBIUo5hAOb34M3s%2FDGpjMEyWqxs3aC0KOZtD3aebfikaO6mjca9sgm4OCynzxBc1WZiYdEMybqfxPej%2Byz%2Fjf9QidiRS4Fxp89geZZelKN80eltQ8cT4b%2FGlQDC45vjR%2B&X-Amz-Signature=2893d0b722e98b0784072171cd2f2357e6d3cfd91328df28d0db1dbf73d1b083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
