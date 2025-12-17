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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3FIHOF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7ttLU5MmNYbt%2F8PuF0BLY3pAE6C1vIjQbaQiogLeujAiBVhFKTM5iQGEK76P6VdEC8mIx6dHJU0Dp7lWJkFBpg9ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2BtCTNumKllNYQi6mKtwDl9T%2Fnk2puzfiqDNHlXsb%2FGDZp97LTdZKM7PmUevFIZ5JP%2Fs%2BO0%2Fm502qywwawDH6tmPf8RBvAaS1ScGQq4HJN6TLnWlTTUDDdUquZJI87%2B%2BLaj9yOOkooBD2sG82ttEd3RMo8qwUh%2FAZ7LHjmxFo3mr2xXb7aCnjA1m9bsrqkScwyRSTUmraEUWHDnNNwh4ULDUgfhiFbIpV6lbNw%2FcGEqQmkBUwgE3IsrbV9O5kDiSYVHVB45eKs0EjAgkkbauo5i4%2BH0%2FBspaO%2F5PfIXqEuWDUbf%2BhZI1NK7ub6yp4Zk4h0%2Ff9ZqJVpcL9UDzu8DU%2FCw3WAdVQP7NnCzWcWlx%2FnNaDOKw%2BfT4cgAQnyyUiL%2F6VUvmdny%2F7xoAyx9aY352dj3A70nYPl5Isk1WUUqXB6deDO%2FnKxNbJLnvSbwVoe5LvhaXiK3x4cob3nyXnX3M%2BaLoC1BX%2BhCL7ni8xQdWTK%2BnJHvG68HxhHJdrucZVFtKDEeMLOVc6%2B1C7Bj4NUUgW54e1WDTcxKvarFkeUJBOikd7QKUWl%2Bhygn7NWfwbk6gQzSTj3amBVoSGybo0GX2avgR7bej6dgjUqUvZicH7bJE8mzfJTLLZTncfpySFr6EMLW6glh%2FN4GJc70ow5fuHygY6pgHm%2F5rU8kUKT36iwfVxFRApB%2F5Ic2CIviUE1%2FgVakK2lszgngpJvEmStFv6MLc93gzR0kpHnMPzAkqYoTn0q60Eog7ujxwYOABDWpg3HQ%2F95icbi%2BpdNodHKo%2Bz481eF8RHrMlGTLGo6EHr0w7xq2amPMDW6W0H7kBVzi6%2B5PKLQEQOl1LWsNfRsCaVsv3RdMcPWh00UmLlqDfHj5YxG9BezeI0Tngs&X-Amz-Signature=65ea0818e262e983f37ceaaf707f36a944244942ab76cd8e82c2d45872881581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ3FIHOF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG7ttLU5MmNYbt%2F8PuF0BLY3pAE6C1vIjQbaQiogLeujAiBVhFKTM5iQGEK76P6VdEC8mIx6dHJU0Dp7lWJkFBpg9ir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2BtCTNumKllNYQi6mKtwDl9T%2Fnk2puzfiqDNHlXsb%2FGDZp97LTdZKM7PmUevFIZ5JP%2Fs%2BO0%2Fm502qywwawDH6tmPf8RBvAaS1ScGQq4HJN6TLnWlTTUDDdUquZJI87%2B%2BLaj9yOOkooBD2sG82ttEd3RMo8qwUh%2FAZ7LHjmxFo3mr2xXb7aCnjA1m9bsrqkScwyRSTUmraEUWHDnNNwh4ULDUgfhiFbIpV6lbNw%2FcGEqQmkBUwgE3IsrbV9O5kDiSYVHVB45eKs0EjAgkkbauo5i4%2BH0%2FBspaO%2F5PfIXqEuWDUbf%2BhZI1NK7ub6yp4Zk4h0%2Ff9ZqJVpcL9UDzu8DU%2FCw3WAdVQP7NnCzWcWlx%2FnNaDOKw%2BfT4cgAQnyyUiL%2F6VUvmdny%2F7xoAyx9aY352dj3A70nYPl5Isk1WUUqXB6deDO%2FnKxNbJLnvSbwVoe5LvhaXiK3x4cob3nyXnX3M%2BaLoC1BX%2BhCL7ni8xQdWTK%2BnJHvG68HxhHJdrucZVFtKDEeMLOVc6%2B1C7Bj4NUUgW54e1WDTcxKvarFkeUJBOikd7QKUWl%2Bhygn7NWfwbk6gQzSTj3amBVoSGybo0GX2avgR7bej6dgjUqUvZicH7bJE8mzfJTLLZTncfpySFr6EMLW6glh%2FN4GJc70ow5fuHygY6pgHm%2F5rU8kUKT36iwfVxFRApB%2F5Ic2CIviUE1%2FgVakK2lszgngpJvEmStFv6MLc93gzR0kpHnMPzAkqYoTn0q60Eog7ujxwYOABDWpg3HQ%2F95icbi%2BpdNodHKo%2Bz481eF8RHrMlGTLGo6EHr0w7xq2amPMDW6W0H7kBVzi6%2B5PKLQEQOl1LWsNfRsCaVsv3RdMcPWh00UmLlqDfHj5YxG9BezeI0Tngs&X-Amz-Signature=65d29079feced40f1a53bf0e2dbb9e90f9b702823b88d4739c61aeb6a991f8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
