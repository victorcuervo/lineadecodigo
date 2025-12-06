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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S442W2RQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF9l64nvKUNp1fZUnl0ngI51XDLWMDGWv8MgTurpgz7AIgDm159SkM7WGNw2BEpHa%2Fjc4L0XbJH9tf2htwOSnXoHcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMPofx8DlF8jV1YdwCrcA2uPuLoh2U%2BaaXxO%2F%2FVuGikMfZdccDvc0AFI%2BgKqZVZMbytW7wtAC5ypVPVKlbXxYVYAyrQ%2F8i9YIkMLzogy1rpwwjB001pf3bNiisiCbz%2FStcMztdUAI1CyPLyt%2FrjqBrUJ1txpN%2FU0uazu5BsbBCcpqE1rqafHADsTmLM3LkYVLXpVMI0u5lDRiVmWBUhmSpFKSOUpJvpuTAESvfZwwIF1yPMlWc%2B1SEZdAsI4cT%2Fc7XMI1aZ7u06pNRoJhk6iHCvyuOWeBSPNJigLYoYta0PuoAgJ0fUSaAgm9ilj4A3hwuPPi5vHC%2FplEUKsInR7%2BU0v70qnBfbAbch6Q9Q7s828x%2BHuvSYV%2BXSTFT9oYKUAKbecmI788fvyZAAWh5lVsmyMgFQahb%2FevyUPzCStwOsiofST1zsARUieUi8qXJQ3n13egeo2hRlPLmKOBZQynTJfhD5QUKXSqIHRrTky0TlC6iwgH6%2B%2BWhQsy3GlyzkFBjGD6qtRWPpLBr4d4vcBBGd9iVf3y5TvtwiuZA7YI6FmnQ7s9uL7dWJsld4VDLOq5H03PsPJhK34Fse%2F%2Fd6%2F2idPd30M6EoWusUUFYA6ZTs3HPqW5rUw2vGHKo6HOV8zosXXHKCDOlF%2Bi%2FLkMM7U0skGOqUBs%2F1JQ8Y0Zk%2BaF2il8CjmYjmQ6jd79N%2B63M%2Bc0sIh0EcACMACdoYjTJUJAVS6Jfa3TqDDpudyXeb9cjh7WstqgXnhP1WrEEwdNxLu0ZkcBffvzEgZLICH0m33B%2Fxo4xRCjUmYdCsWbuHCVukMhIWfzWwpCAN9aDT2cfRbmF%2FrFzPDBDlXSTsW18HiI1MY6in1DlQedagZVtsTU3tW0C2X3fV3nbUX&X-Amz-Signature=7d7fe38b74034dafc04e9c49b7f632072699e86a8528d26b435d333ea9a6f464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S442W2RQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCF9l64nvKUNp1fZUnl0ngI51XDLWMDGWv8MgTurpgz7AIgDm159SkM7WGNw2BEpHa%2Fjc4L0XbJH9tf2htwOSnXoHcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMPofx8DlF8jV1YdwCrcA2uPuLoh2U%2BaaXxO%2F%2FVuGikMfZdccDvc0AFI%2BgKqZVZMbytW7wtAC5ypVPVKlbXxYVYAyrQ%2F8i9YIkMLzogy1rpwwjB001pf3bNiisiCbz%2FStcMztdUAI1CyPLyt%2FrjqBrUJ1txpN%2FU0uazu5BsbBCcpqE1rqafHADsTmLM3LkYVLXpVMI0u5lDRiVmWBUhmSpFKSOUpJvpuTAESvfZwwIF1yPMlWc%2B1SEZdAsI4cT%2Fc7XMI1aZ7u06pNRoJhk6iHCvyuOWeBSPNJigLYoYta0PuoAgJ0fUSaAgm9ilj4A3hwuPPi5vHC%2FplEUKsInR7%2BU0v70qnBfbAbch6Q9Q7s828x%2BHuvSYV%2BXSTFT9oYKUAKbecmI788fvyZAAWh5lVsmyMgFQahb%2FevyUPzCStwOsiofST1zsARUieUi8qXJQ3n13egeo2hRlPLmKOBZQynTJfhD5QUKXSqIHRrTky0TlC6iwgH6%2B%2BWhQsy3GlyzkFBjGD6qtRWPpLBr4d4vcBBGd9iVf3y5TvtwiuZA7YI6FmnQ7s9uL7dWJsld4VDLOq5H03PsPJhK34Fse%2F%2Fd6%2F2idPd30M6EoWusUUFYA6ZTs3HPqW5rUw2vGHKo6HOV8zosXXHKCDOlF%2Bi%2FLkMM7U0skGOqUBs%2F1JQ8Y0Zk%2BaF2il8CjmYjmQ6jd79N%2B63M%2Bc0sIh0EcACMACdoYjTJUJAVS6Jfa3TqDDpudyXeb9cjh7WstqgXnhP1WrEEwdNxLu0ZkcBffvzEgZLICH0m33B%2Fxo4xRCjUmYdCsWbuHCVukMhIWfzWwpCAN9aDT2cfRbmF%2FrFzPDBDlXSTsW18HiI1MY6in1DlQedagZVtsTU3tW0C2X3fV3nbUX&X-Amz-Signature=d7e5fbd133fd2bc35bd2d6fd16cf23787d2a1e3ca3af39f3cdddee56a9e806ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
