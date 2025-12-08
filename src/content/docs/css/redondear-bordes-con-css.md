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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6WJ4F5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4kpqzIuawhk11zYivpST1kstXKl1S%2BQsn4oRt9YbglAiEA7Z1zkYxWeFJbLo7PVmOtVxlCC8SiUi%2FzSIwwLisQVQEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0TKAEnveurAog7ASrcA6rlAprkT0UsFBEApaNp6R33QTIICqd8w5jbmIOUFFTophs%2F4otBNPLBlIY%2BpcCn6rLv2hZWrpLBNrViEYgBGipzDlHvrqyBht2JgFCYNCbAEMo9kqe4zRc%2BACTdtqrP%2Fjr%2FVdRGyKl%2F81v%2BZxNcm0gZx6%2BzXYzwLqiaqbTJM5dyECav4K3HwAGNQ0RTEUJrCeEytpXuuTwGB1VWC9H7wAn7oZFX3XAfM1saS%2FyObDkCMHYGH6tmMECE4jbFn6xnFHwzlLwdFSnZWqD%2FA76iLvv9A3GbqcyAd8dSx91Eml%2BxtWSVRWM9RK8RamPlwrg%2BavDIx4PKSCrCFC4W5yMOmhWZySXbdXnmHixA39qoPu7fHkjkytND9Y5lFDHLIKtusbvO2qPaY62D39Of%2F%2F74N4PrNkeHuB4%2BVfoFBClm41JkD0WUY%2BaKKTMVY34pp%2BBW3s%2B64eAlelwk8%2BvhiHkHrM6N6V%2FauGQXJn8xX6OTI5ky8IpBNsLne4xIpwd%2FR86%2FEgRyV7qL0vb5Qt7Q4pZzeiQLbMI8qojWzUJJzO%2BjwMVlX%2BGq7gkknM%2FXO2tx6uR5gQYUF8TCJ6h4eC7TkWZOdComw6aFt%2BNxsNPVG2hOYKKk1z5KcPvxLtzz11HfMJ%2B03MkGOqUBWqVMYf5OTkddBtjIAXJpOFGJ5F0O3aLknuStqcbhJkLxa3ijfcPMsQ%2Fl8J6zaDi%2F0g%2FHYRej9%2F5HeCeZQN7laXJdmjcgHSpAWe6mfzwekJHzmihbrW78K3KFjFSjipE0%2Ff2vCc%2FMfV0bkYMU7JVXRpfDh%2Fa6RNegXO12O%2Bybzfw5gj5VFUbDVaApnIXHiwHTrdg20jMgCOZvbIsjfaQnptRI2CTe&X-Amz-Signature=b26752dc665a6af3b10682a62d1d446d5ce1e708a52688979dd44e9dbf332869&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC6WJ4F5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID4kpqzIuawhk11zYivpST1kstXKl1S%2BQsn4oRt9YbglAiEA7Z1zkYxWeFJbLo7PVmOtVxlCC8SiUi%2FzSIwwLisQVQEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0TKAEnveurAog7ASrcA6rlAprkT0UsFBEApaNp6R33QTIICqd8w5jbmIOUFFTophs%2F4otBNPLBlIY%2BpcCn6rLv2hZWrpLBNrViEYgBGipzDlHvrqyBht2JgFCYNCbAEMo9kqe4zRc%2BACTdtqrP%2Fjr%2FVdRGyKl%2F81v%2BZxNcm0gZx6%2BzXYzwLqiaqbTJM5dyECav4K3HwAGNQ0RTEUJrCeEytpXuuTwGB1VWC9H7wAn7oZFX3XAfM1saS%2FyObDkCMHYGH6tmMECE4jbFn6xnFHwzlLwdFSnZWqD%2FA76iLvv9A3GbqcyAd8dSx91Eml%2BxtWSVRWM9RK8RamPlwrg%2BavDIx4PKSCrCFC4W5yMOmhWZySXbdXnmHixA39qoPu7fHkjkytND9Y5lFDHLIKtusbvO2qPaY62D39Of%2F%2F74N4PrNkeHuB4%2BVfoFBClm41JkD0WUY%2BaKKTMVY34pp%2BBW3s%2B64eAlelwk8%2BvhiHkHrM6N6V%2FauGQXJn8xX6OTI5ky8IpBNsLne4xIpwd%2FR86%2FEgRyV7qL0vb5Qt7Q4pZzeiQLbMI8qojWzUJJzO%2BjwMVlX%2BGq7gkknM%2FXO2tx6uR5gQYUF8TCJ6h4eC7TkWZOdComw6aFt%2BNxsNPVG2hOYKKk1z5KcPvxLtzz11HfMJ%2B03MkGOqUBWqVMYf5OTkddBtjIAXJpOFGJ5F0O3aLknuStqcbhJkLxa3ijfcPMsQ%2Fl8J6zaDi%2F0g%2FHYRej9%2F5HeCeZQN7laXJdmjcgHSpAWe6mfzwekJHzmihbrW78K3KFjFSjipE0%2Ff2vCc%2FMfV0bkYMU7JVXRpfDh%2Fa6RNegXO12O%2Bybzfw5gj5VFUbDVaApnIXHiwHTrdg20jMgCOZvbIsjfaQnptRI2CTe&X-Amz-Signature=b7c9388e28ddee7e603b73d2539eb3a375ab35f5872623f90dacf4453e732c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
