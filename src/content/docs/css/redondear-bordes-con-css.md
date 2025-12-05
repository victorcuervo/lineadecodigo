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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3F776YT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd5mDbDSdWbuGAyLgVMBbhJvaB%2BHwITAPO0IcnRDZLNwIgcttPa3eYC7dr7OGxavTeYPHdk0GTGF138J8N5XPzqWIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDB43ZVdrnnH0qGrdDSrcA91GScUSe7iYCfwUlkU7lAY1lGVuDhZNvD4QdI6fEXorLMH5ViunO%2B4Jx77fqIraN42IYfUDNySz6gS4iM9yMWdtVchrVdyooeIrbihlS1SWbx1157ZyRKwoIIIuNY3Fb6ni7OTi5WI4WSiXce%2FcEskNGf3dwN6idOsnOdLWDtxiLBeLihx3JnDrtjfuiSMahCRt7zFiCNiBnJTgTASpnazpuZtlrvb9sZyR%2BhP%2F9U4FWTIU4l%2BtHGU1rLemG72No2zyjFkfcmKDDDTG9plirhEDRQEf%2BmZI3TybKi%2FoLLwkABj%2BYTQu5MxNJhxwNxxY2lESR6PKSeKJbZ%2FYTdzpRlKSBaJPRqrG%2FLAoikUI2ubkrHw81d8MTq4xubp7T7Ka0DTAeO9g1weLGuuUnrgqhe0Htb3hwOfV%2FaJKrlfxDA8dZ0p%2FlvO4YEKw9GGf6pSnl1mPQ0pn62qSs2tDUcye4UKuFmQlUNU8DEL6jXBd55Ds32bBm48WDQ0mHv%2FdKsiKFbzf4MT0df0Z6XDBdvPqzs3pJJpmWtG%2F1lPWvpdFbIzf974aBiBqpa7qi6ncCF7sKkDl3MBQejiQebT%2F%2B%2BOK%2FXf%2FAwXle1DqUKefVxrgEXMcFgMBqqEkm2V1l0gEMPytyckGOqUBn4UBkkMtyFY9DE4xf%2BUaT9L%2BExinGzWjqasOycQjYB2YHOXCEm4QbJz77kwoYOp68d5liXQqJVSiZD3sJy8C6vV6853kpThYG1BSee4pQsHN6y4VnJBAuqxrR7y4HQtqxlBi7nJi0KPWNrz70q1R%2FsbmcR7UMGhIYNsnEsEC8fh0QFkvGFeMvX8lJANKj8nBQUCa98lxMCrXJl7Y7DHU5fqak7wo&X-Amz-Signature=3d71ecd1d0c6350f0d27f51a3014bc26e0be4fe6fb7d15077569a809be20d378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3F776YT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCd5mDbDSdWbuGAyLgVMBbhJvaB%2BHwITAPO0IcnRDZLNwIgcttPa3eYC7dr7OGxavTeYPHdk0GTGF138J8N5XPzqWIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDB43ZVdrnnH0qGrdDSrcA91GScUSe7iYCfwUlkU7lAY1lGVuDhZNvD4QdI6fEXorLMH5ViunO%2B4Jx77fqIraN42IYfUDNySz6gS4iM9yMWdtVchrVdyooeIrbihlS1SWbx1157ZyRKwoIIIuNY3Fb6ni7OTi5WI4WSiXce%2FcEskNGf3dwN6idOsnOdLWDtxiLBeLihx3JnDrtjfuiSMahCRt7zFiCNiBnJTgTASpnazpuZtlrvb9sZyR%2BhP%2F9U4FWTIU4l%2BtHGU1rLemG72No2zyjFkfcmKDDDTG9plirhEDRQEf%2BmZI3TybKi%2FoLLwkABj%2BYTQu5MxNJhxwNxxY2lESR6PKSeKJbZ%2FYTdzpRlKSBaJPRqrG%2FLAoikUI2ubkrHw81d8MTq4xubp7T7Ka0DTAeO9g1weLGuuUnrgqhe0Htb3hwOfV%2FaJKrlfxDA8dZ0p%2FlvO4YEKw9GGf6pSnl1mPQ0pn62qSs2tDUcye4UKuFmQlUNU8DEL6jXBd55Ds32bBm48WDQ0mHv%2FdKsiKFbzf4MT0df0Z6XDBdvPqzs3pJJpmWtG%2F1lPWvpdFbIzf974aBiBqpa7qi6ncCF7sKkDl3MBQejiQebT%2F%2B%2BOK%2FXf%2FAwXle1DqUKefVxrgEXMcFgMBqqEkm2V1l0gEMPytyckGOqUBn4UBkkMtyFY9DE4xf%2BUaT9L%2BExinGzWjqasOycQjYB2YHOXCEm4QbJz77kwoYOp68d5liXQqJVSiZD3sJy8C6vV6853kpThYG1BSee4pQsHN6y4VnJBAuqxrR7y4HQtqxlBi7nJi0KPWNrz70q1R%2FsbmcR7UMGhIYNsnEsEC8fh0QFkvGFeMvX8lJANKj8nBQUCa98lxMCrXJl7Y7DHU5fqak7wo&X-Amz-Signature=506d9d2b840cb4320a032b1d1ab5eee2f631ef10edb4edd8f628c7881b37c0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
