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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQBF4NQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC5K5nnthBgc42XxkQDLc%2F1YNeIhSX5vNfshDUxBBWfAiEA50tGm6KaX6CeeSeEhEcWYi%2B2yW3CRjY5h0krAWNrs%2F4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5IArRSXgEnYUawkircAxvtihiBAU%2BiXTAnAgp04EhV0uCdiJrJejtmbVmX3Ijq%2BFBwppSTFRNxOXkr99uIhkKQQmIk%2BdjZwJP6aZ3yIX43LCMNfUqQRL7gwJEdT7o7%2Br6Z8ksCtepiqJ4BgvnKORsja0tFEH2IrFKNpYhcBTTO48QWTAXkBNx%2Fiko6Bjrp2n13M6KenRi2gimOGHMSKe6T2VBHDHhKzZfMkGtFF2wZzR%2BjvLNi2CivlibYnbnLfjegPc1WJFVZ4fg5ChFIGTRIKmd93DgkCKKrMs82hpoMBA2eOj5EJ0uXsCgjEe%2FZnO15p6jI4DCckOyaI4BGC%2BzL1igTQEKaz%2FCAZaQnloPYvt1Og0LvPzT3aW%2BqZqRQvVu2iDEa4%2Fct6LUkWLJ7TmD6fDef3YfW%2BagXP7qyW%2F0FgwG7%2F2%2Flgq4XMujw%2BGh39iRNS4HQYtitP6PAcxm%2F%2Bt%2BhHoW4YzlJDIyZ7rNGu7Q2OM51SdvaGUBXj3sNd8J95tZ1HYlHgTAONKB1zjv16kDS1ZbBpvrYJH38t3iF1EhV%2BMTnr4uXcEvTxSgT6%2FB2ZCy783pnOHxrbJ3ZyTV0FKMjnoSgkVpz1N1RMYLmQ698u%2BQk%2BnK0kQ5LBbXAvS179uS7N%2BjS3HOh1z%2B1MP%2Fc3MkGOqUBiDaJg0WW6y8pvU9m4VGCLlBTMB92g0Tr92BgOGvlv5IU3iuSTLshg2OeJy7eqtyJTSiAq9c0SNv5F8cKjrA8PMssSmiMT3UKAnU3ZXB3x4ZHkpRM%2BCmgrX8lFsbShl%2BFwhPsGW167kcrCfPLf2pQY6eWmlRVxWVpYZ1WbTsx7M5XQZca5RvsjXIk8kmcYrJV%2F1%2FPKOy%2BPhfiUpI7Q05B5md0IbwE&X-Amz-Signature=fc1347866fe4752084d9d6163ac20204519b508335f771883947fd5df3acdb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQBF4NQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBC5K5nnthBgc42XxkQDLc%2F1YNeIhSX5vNfshDUxBBWfAiEA50tGm6KaX6CeeSeEhEcWYi%2B2yW3CRjY5h0krAWNrs%2F4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5IArRSXgEnYUawkircAxvtihiBAU%2BiXTAnAgp04EhV0uCdiJrJejtmbVmX3Ijq%2BFBwppSTFRNxOXkr99uIhkKQQmIk%2BdjZwJP6aZ3yIX43LCMNfUqQRL7gwJEdT7o7%2Br6Z8ksCtepiqJ4BgvnKORsja0tFEH2IrFKNpYhcBTTO48QWTAXkBNx%2Fiko6Bjrp2n13M6KenRi2gimOGHMSKe6T2VBHDHhKzZfMkGtFF2wZzR%2BjvLNi2CivlibYnbnLfjegPc1WJFVZ4fg5ChFIGTRIKmd93DgkCKKrMs82hpoMBA2eOj5EJ0uXsCgjEe%2FZnO15p6jI4DCckOyaI4BGC%2BzL1igTQEKaz%2FCAZaQnloPYvt1Og0LvPzT3aW%2BqZqRQvVu2iDEa4%2Fct6LUkWLJ7TmD6fDef3YfW%2BagXP7qyW%2F0FgwG7%2F2%2Flgq4XMujw%2BGh39iRNS4HQYtitP6PAcxm%2F%2Bt%2BhHoW4YzlJDIyZ7rNGu7Q2OM51SdvaGUBXj3sNd8J95tZ1HYlHgTAONKB1zjv16kDS1ZbBpvrYJH38t3iF1EhV%2BMTnr4uXcEvTxSgT6%2FB2ZCy783pnOHxrbJ3ZyTV0FKMjnoSgkVpz1N1RMYLmQ698u%2BQk%2BnK0kQ5LBbXAvS179uS7N%2BjS3HOh1z%2B1MP%2Fc3MkGOqUBiDaJg0WW6y8pvU9m4VGCLlBTMB92g0Tr92BgOGvlv5IU3iuSTLshg2OeJy7eqtyJTSiAq9c0SNv5F8cKjrA8PMssSmiMT3UKAnU3ZXB3x4ZHkpRM%2BCmgrX8lFsbShl%2BFwhPsGW167kcrCfPLf2pQY6eWmlRVxWVpYZ1WbTsx7M5XQZca5RvsjXIk8kmcYrJV%2F1%2FPKOy%2BPhfiUpI7Q05B5md0IbwE&X-Amz-Signature=479bad4795da3d3d78413411b58ca6898377398bf4a745574060d0a95fd129e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
