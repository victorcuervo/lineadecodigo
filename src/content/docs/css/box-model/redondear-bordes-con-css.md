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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLMF37F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiiVtwBFNuYEztZmCnm8PoPZw%2ByN5lL%2B1gEgYb2%2FqXaAiEAhuBVhq6%2BHerdVaa2ezM8ZEbHe%2FkeI6V61jVvRd7TTd8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFFy4CMKaKVcGs1xgSrcAyBr5Mq03KgEooqWWykNlMhOb8eTFXi5CZUwZsYLbfHK0gpOuV%2B8TG3sw8wdam%2FSsl5vCVmvhXz8Zr4ApwyE8BxlMek6TgI97YrUk4V7T2d3sKHpAcaJf%2B3GM9IteEP32Ore2ZNFDoouFdfJe%2FoQiB%2FIAic%2FzRfCnvs8%2BRelfFRucKxfwNvHfWPiqJ0tIBIatsfq2s8a4YIpZvQrcBlLUvvawyhE7KFs6m%2FtiLNGEPVyMaCrFA0jK9sSbYpZCTqOa3CtUne16OXhpYfidkAuyYtwGVKVtv5eIuuEUAr2977ve3t469gmt8lHRO8DnLQt8r8ZFKnhT5lOAl1ztd%2B42N10PO4ESbDz6ggRssSAPGrErB0VUia8CFNys2myVs3WYCTPAME2L2pLCha4rQNlf9t%2FozL3EZw5EQdOs4m%2FCwJrq1EqXsbjriJd9%2F7ThqB0c7%2BNct8FdHwBgkyXjr3DuCMxUUtrZCNTFVdDhE36ihzhr29jwpF3lMiPmg4%2BHAkqUe1HqywH%2FS%2FNvnS1Y0ncpipGWw0D8i6Z4ujq%2BohScQRO7mk0yNu7s7ovRZuSgFdSdJo7VAwfUG%2FnCtChpIm%2BSVuMIyEgVGKZJQzVpN2QfdjMtY49eSL3b3KSsoKNMNqOisoGOqUBag2D0NNaMHUiKV162A1%2B%2BhRj0qmulydh1jM%2FYJmVQ30jG%2Bmg9FT2hY%2FwMapM5oSDGoPA4t2gSKV3VphPeOSgPWoz2ehfbXX6DuPCaOwDvOyP8V7hg6NvooeIFh2zOXYIdjeKv19VsEGW2BwXOmdnmEAXSQrMJfAicyisGrF6w6ORzaB%2FPT2XDXpSmMOzrd5K%2FxTDMFPdmx0LZ9YPPVr%2Fvm9eJDpH&X-Amz-Signature=26c3e9c327fe484b5dc2dd7430a396e9e8c49b862e7c5fcf5567add61fe3c8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWLMF37F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEiiVtwBFNuYEztZmCnm8PoPZw%2ByN5lL%2B1gEgYb2%2FqXaAiEAhuBVhq6%2BHerdVaa2ezM8ZEbHe%2FkeI6V61jVvRd7TTd8q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDFFy4CMKaKVcGs1xgSrcAyBr5Mq03KgEooqWWykNlMhOb8eTFXi5CZUwZsYLbfHK0gpOuV%2B8TG3sw8wdam%2FSsl5vCVmvhXz8Zr4ApwyE8BxlMek6TgI97YrUk4V7T2d3sKHpAcaJf%2B3GM9IteEP32Ore2ZNFDoouFdfJe%2FoQiB%2FIAic%2FzRfCnvs8%2BRelfFRucKxfwNvHfWPiqJ0tIBIatsfq2s8a4YIpZvQrcBlLUvvawyhE7KFs6m%2FtiLNGEPVyMaCrFA0jK9sSbYpZCTqOa3CtUne16OXhpYfidkAuyYtwGVKVtv5eIuuEUAr2977ve3t469gmt8lHRO8DnLQt8r8ZFKnhT5lOAl1ztd%2B42N10PO4ESbDz6ggRssSAPGrErB0VUia8CFNys2myVs3WYCTPAME2L2pLCha4rQNlf9t%2FozL3EZw5EQdOs4m%2FCwJrq1EqXsbjriJd9%2F7ThqB0c7%2BNct8FdHwBgkyXjr3DuCMxUUtrZCNTFVdDhE36ihzhr29jwpF3lMiPmg4%2BHAkqUe1HqywH%2FS%2FNvnS1Y0ncpipGWw0D8i6Z4ujq%2BohScQRO7mk0yNu7s7ovRZuSgFdSdJo7VAwfUG%2FnCtChpIm%2BSVuMIyEgVGKZJQzVpN2QfdjMtY49eSL3b3KSsoKNMNqOisoGOqUBag2D0NNaMHUiKV162A1%2B%2BhRj0qmulydh1jM%2FYJmVQ30jG%2Bmg9FT2hY%2FwMapM5oSDGoPA4t2gSKV3VphPeOSgPWoz2ehfbXX6DuPCaOwDvOyP8V7hg6NvooeIFh2zOXYIdjeKv19VsEGW2BwXOmdnmEAXSQrMJfAicyisGrF6w6ORzaB%2FPT2XDXpSmMOzrd5K%2FxTDMFPdmx0LZ9YPPVr%2Fvm9eJDpH&X-Amz-Signature=19acc240eaa26654178f88a8baffb0bfd4f379dae33b295009b3800ef4b22aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
