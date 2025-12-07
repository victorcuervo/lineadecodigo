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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCTAO4CC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWArY23no7%2FWigHJPx17t6XVlq5njBUo49B%2BElEoUmUwIgITKEIv1KTWA9V0%2B7hQNkW%2FW6P8vAelOl0SVHX1idvRQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxnVQCB7LwGUDh%2FBCrcA%2BbcO0OkB1ttIjukVjruDh6XKqyQOE2D6cSl1R8uFBVYn5UKIndfbWePXkvDWakf0CmMrqr5EEu8OSBlv2GJAVfGF0z45aBGkrtwH4HOzcap0573s84iU%2FKvk9yqoMOnGDrXrBthU11zmeVHkgfkt%2F%2FizUetOAlHWbThnMBvij%2Bz%2BldnKbBPdBZJNXyn7UfY1UDH15NmVfpMTBlxoN48tbV3ObIOQMLHxrL1ieGmUuZIA50ZNxd85kLtSiBOfkZLKIpjWZZ409BDhptItnXnk81FgWU8fr18ofOQG1Cl3zAMaoNOb8iYDd8gzCuk9w6vLAw%2BEulhH5AAb4a1NWFebxbqncx7cU2WbBAO9M%2FslCnxI5faUPGbSHnVAt%2B9fZ%2BjTaHa1%2F7uc3G5ePKe2Gjrq0Uc%2FJ479mMo40TwHkqueum0XK4LYxcjI7whJr5VA7z9KYRVL1WIZ1qzrlLrEG%2Buy6QzByjglhea1nZ8foApwUy9aP3I9KlzZjYmeaMthxpSjA97pqu5ZxerK72xQblJFCtrUQNJ%2FW%2FTNUpa45vRnPDTzBHqEGwUJhXTmSK%2FUXDQs8zeeb2wLT%2FJAgtuWtldZcIiWhRI8yXEpEklx3ouW5u6Kjupr1csK%2BV9%2B%2BfBMP%2Bo18kGOqUBujb2sNfsWMThW6vEDULLq97rV5Y4HTQAETqCyiKvz8vnokVsyX1Mz%2BY%2FIbRtgBVa0PG9il5GR%2BBCqIRzHIUgjaGXdlLWmalOl3sbBzEoOT1GGazPp4j6NnNhXZ7m8e1Vm5XT%2FDIlhxzdxOs%2BjObiIjBBbxRsUepdswlwOvN41QqTxXblEhPxLL7Mz1YDW6P0nrdAZ%2F4k4fdyeckmyi3R3KUpkS5g&X-Amz-Signature=680f797931656f2db0ac844a927289cf34a3560d42fe76b51ba11fba21dd25b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCTAO4CC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWArY23no7%2FWigHJPx17t6XVlq5njBUo49B%2BElEoUmUwIgITKEIv1KTWA9V0%2B7hQNkW%2FW6P8vAelOl0SVHX1idvRQqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxnVQCB7LwGUDh%2FBCrcA%2BbcO0OkB1ttIjukVjruDh6XKqyQOE2D6cSl1R8uFBVYn5UKIndfbWePXkvDWakf0CmMrqr5EEu8OSBlv2GJAVfGF0z45aBGkrtwH4HOzcap0573s84iU%2FKvk9yqoMOnGDrXrBthU11zmeVHkgfkt%2F%2FizUetOAlHWbThnMBvij%2Bz%2BldnKbBPdBZJNXyn7UfY1UDH15NmVfpMTBlxoN48tbV3ObIOQMLHxrL1ieGmUuZIA50ZNxd85kLtSiBOfkZLKIpjWZZ409BDhptItnXnk81FgWU8fr18ofOQG1Cl3zAMaoNOb8iYDd8gzCuk9w6vLAw%2BEulhH5AAb4a1NWFebxbqncx7cU2WbBAO9M%2FslCnxI5faUPGbSHnVAt%2B9fZ%2BjTaHa1%2F7uc3G5ePKe2Gjrq0Uc%2FJ479mMo40TwHkqueum0XK4LYxcjI7whJr5VA7z9KYRVL1WIZ1qzrlLrEG%2Buy6QzByjglhea1nZ8foApwUy9aP3I9KlzZjYmeaMthxpSjA97pqu5ZxerK72xQblJFCtrUQNJ%2FW%2FTNUpa45vRnPDTzBHqEGwUJhXTmSK%2FUXDQs8zeeb2wLT%2FJAgtuWtldZcIiWhRI8yXEpEklx3ouW5u6Kjupr1csK%2BV9%2B%2BfBMP%2Bo18kGOqUBujb2sNfsWMThW6vEDULLq97rV5Y4HTQAETqCyiKvz8vnokVsyX1Mz%2BY%2FIbRtgBVa0PG9il5GR%2BBCqIRzHIUgjaGXdlLWmalOl3sbBzEoOT1GGazPp4j6NnNhXZ7m8e1Vm5XT%2FDIlhxzdxOs%2BjObiIjBBbxRsUepdswlwOvN41QqTxXblEhPxLL7Mz1YDW6P0nrdAZ%2F4k4fdyeckmyi3R3KUpkS5g&X-Amz-Signature=23afe869b674c42f9c46558723138b69d71e4574d83157b642608179f60053a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
