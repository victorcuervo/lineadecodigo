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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C6W42AF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRIUzzXzOL%2BTTeP4NRSqx0yQ7Qx3ETnXv%2BWXHePeupzAiEAtmJo8z0qQcLQliMaTT0YQsxHjHiN7Nj1NUK3JHuQm84qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO8KuB0kPs3MLnO0SrcAwTsB29GfvpgG%2FzAWH11rKxtJOvsYkd6lN7exkvjfW%2FpJD0K0Ke23%2F3pm9Sfbis5I1Ix15it4MjIe%2BHcyoRwXS1HnAQtjbymTvbpwTRglmnclVyhCHjV%2BM%2FemzGxy%2BN0hqKRk1PwLl8LYPQU%2F%2B8x1nd%2BxrNgCnezfnBWeKJ5T94uB3rEFhXf3D5S%2BDTDPLRQ%2Fxartm8s9YR43WOqkH18DJq3G%2BN8myCftsbHLOiXCKk%2B42CJL%2Bi4iOU6Q5hJnUU70t2IfdOupdBRpo8rqfSyQehQMVDrjK48Q1UU0%2FYfXPUE%2BW66TOKWWVruKaG4mkKuV8aA%2FGXvfSgat0zwBlzlDmm%2BEjUTd0c0ExFftmWDk2FYzALVtQ%2BSSdlYWuP3Flyvci9YQ3Sb00ZRXNWWPW0ijnK8W4FTAmyqFFKumdsbmEAFk8XT2BAt3lE8aJSRYaPblmxFa3k6U9qnBZMnwTXQjreeOpGCBWdOkOSXu9TKyUudWT%2FzVn6Y4tk22Gokb47Kz4u4lOVYsrJrABwHEuxiYuwgIu3yL1Zd0%2BP50azQWsCX9oUXIXBRNt4bWzRwWPLQTuFJxdVN2MFcAio9Vz2jM20hL7O%2FwFh0iBJNDwN398i6uXEF1T9zx2CirrmXMIi03MkGOqUBVi3yDb2SVKIzgKp8d1PFa6q94pw5atbB5DACV4%2BD7tdo3fidaz7rHAYZd%2Fg9uLOfqoz53T7SWFYZyL8DNaHUJOthPsncw%2Br%2BR%2B7l59rYr%2FB0x8aN2rVPufqultbE0G2ob7LOKM0GcPDA7zNUXgkAUCH2PnE4HKSZtPuB33ebx9y0Ab9Cufb0I%2F7%2Fxpzsc0kayKJ94thg4rLdGE%2BWpqkHdXrtrkzO&X-Amz-Signature=8ff954d82acffd5d26dbd2fb1d2ebccc87efbe384d87be62f9af674b9f8590fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C6W42AF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRIUzzXzOL%2BTTeP4NRSqx0yQ7Qx3ETnXv%2BWXHePeupzAiEAtmJo8z0qQcLQliMaTT0YQsxHjHiN7Nj1NUK3JHuQm84qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAO8KuB0kPs3MLnO0SrcAwTsB29GfvpgG%2FzAWH11rKxtJOvsYkd6lN7exkvjfW%2FpJD0K0Ke23%2F3pm9Sfbis5I1Ix15it4MjIe%2BHcyoRwXS1HnAQtjbymTvbpwTRglmnclVyhCHjV%2BM%2FemzGxy%2BN0hqKRk1PwLl8LYPQU%2F%2B8x1nd%2BxrNgCnezfnBWeKJ5T94uB3rEFhXf3D5S%2BDTDPLRQ%2Fxartm8s9YR43WOqkH18DJq3G%2BN8myCftsbHLOiXCKk%2B42CJL%2Bi4iOU6Q5hJnUU70t2IfdOupdBRpo8rqfSyQehQMVDrjK48Q1UU0%2FYfXPUE%2BW66TOKWWVruKaG4mkKuV8aA%2FGXvfSgat0zwBlzlDmm%2BEjUTd0c0ExFftmWDk2FYzALVtQ%2BSSdlYWuP3Flyvci9YQ3Sb00ZRXNWWPW0ijnK8W4FTAmyqFFKumdsbmEAFk8XT2BAt3lE8aJSRYaPblmxFa3k6U9qnBZMnwTXQjreeOpGCBWdOkOSXu9TKyUudWT%2FzVn6Y4tk22Gokb47Kz4u4lOVYsrJrABwHEuxiYuwgIu3yL1Zd0%2BP50azQWsCX9oUXIXBRNt4bWzRwWPLQTuFJxdVN2MFcAio9Vz2jM20hL7O%2FwFh0iBJNDwN398i6uXEF1T9zx2CirrmXMIi03MkGOqUBVi3yDb2SVKIzgKp8d1PFa6q94pw5atbB5DACV4%2BD7tdo3fidaz7rHAYZd%2Fg9uLOfqoz53T7SWFYZyL8DNaHUJOthPsncw%2Br%2BR%2B7l59rYr%2FB0x8aN2rVPufqultbE0G2ob7LOKM0GcPDA7zNUXgkAUCH2PnE4HKSZtPuB33ebx9y0Ab9Cufb0I%2F7%2Fxpzsc0kayKJ94thg4rLdGE%2BWpqkHdXrtrkzO&X-Amz-Signature=c22cb1593c93013a72ea1b6386cd6bf2a031a5af193615a95000df15c88f6a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
