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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PYTLG2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe3AP1FGMCSKHvc%2BL%2FvBylyFu1%2BSsM%2F1eeoXOC329%2B5AiEAgOmqpprsjeQEvaooeJ0s3bloQNPfaSVkrupfG67xbfoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4w5CXWkJQ9XA3KvSrcAxS0%2FcoIPIjBfGcLglDYAxkyqvzSzPup%2FwB8ia6FnNa8jIcdXU4Dt8GWuDr3X7Kze96q%2Fy46%2FK2szFLLGaq3dsh1LDpUlJ6s0YMWc23S0ApDyu85Ea1P5Bp779s80LCNjcNimeLaFH%2B8G6vZQ%2BEfN5kcJPpjQIOV5eOVaAofzTm8%2FdFDH3wnVy49ubTLgw88if%2F60sOQN5p56UXPPnebopZOsb3qYkCma8CWBg3o1dVAY9q7IjMyEzrzXV%2BLvevA5FmLFpA19UIDp7vZei7iDb%2BP1r7kU8lUhkDW%2FScHPK%2B86wzWNnb5e5TX902gG0gzZl3u0lvnuRVFwnIeRRO21pefNm9NmjM7bRWAjBZ8NzQ2W6dUdh8%2B7SvNVxEZ9fvfLX0qEL4LZ%2BsYOJD9aRhWe%2BMpkIEAA1VPaTkU%2FD5RnlMzZb%2FWMwZlmT%2BkVO6vO6hvAbAOhqUV14FcyoJGu26NNM78feFG40eGu8wSQEGDXQCyxx%2FZzN%2BLfuoZpaPO7lhFiVxRAJGrblJmLf5nxgZpm5qJgmJa7GIieNoBjY%2BopXRooQejnSbROmcfxGRhv0KbODlKDo1YRBY4dhLbXFNDyB9a9LxcZ8cJ%2BY9yS7lblsjFheE4F0UCqZxHKYYVMJXC28kGOqUBt1f%2Fb4wvGvgFcnIKm6DZrhpZ3aWwTm2Qn4%2F9uiCH3lpkWJdroy5EOID%2BSI8xFJocVmjmEo97qDHGjZYGjbpIr%2BAeHiZcFCUp38LZmFlJHCry7ICU97eakf7ejtsO%2BktJbHIUGPIBfYeg4YLL1wMV2FNaab0y%2FIq4q%2BWSsQR2Yeycy%2FJKvruIJXnSLVq9nQqqknz10rtYNjUv9OTXCvwk6TUjunnW&X-Amz-Signature=1c3b9ed4310cd286ad60b87c3f01f5b5266fdcd1d2193568906205ea9647cf8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PYTLG2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAe3AP1FGMCSKHvc%2BL%2FvBylyFu1%2BSsM%2F1eeoXOC329%2B5AiEAgOmqpprsjeQEvaooeJ0s3bloQNPfaSVkrupfG67xbfoqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE4w5CXWkJQ9XA3KvSrcAxS0%2FcoIPIjBfGcLglDYAxkyqvzSzPup%2FwB8ia6FnNa8jIcdXU4Dt8GWuDr3X7Kze96q%2Fy46%2FK2szFLLGaq3dsh1LDpUlJ6s0YMWc23S0ApDyu85Ea1P5Bp779s80LCNjcNimeLaFH%2B8G6vZQ%2BEfN5kcJPpjQIOV5eOVaAofzTm8%2FdFDH3wnVy49ubTLgw88if%2F60sOQN5p56UXPPnebopZOsb3qYkCma8CWBg3o1dVAY9q7IjMyEzrzXV%2BLvevA5FmLFpA19UIDp7vZei7iDb%2BP1r7kU8lUhkDW%2FScHPK%2B86wzWNnb5e5TX902gG0gzZl3u0lvnuRVFwnIeRRO21pefNm9NmjM7bRWAjBZ8NzQ2W6dUdh8%2B7SvNVxEZ9fvfLX0qEL4LZ%2BsYOJD9aRhWe%2BMpkIEAA1VPaTkU%2FD5RnlMzZb%2FWMwZlmT%2BkVO6vO6hvAbAOhqUV14FcyoJGu26NNM78feFG40eGu8wSQEGDXQCyxx%2FZzN%2BLfuoZpaPO7lhFiVxRAJGrblJmLf5nxgZpm5qJgmJa7GIieNoBjY%2BopXRooQejnSbROmcfxGRhv0KbODlKDo1YRBY4dhLbXFNDyB9a9LxcZ8cJ%2BY9yS7lblsjFheE4F0UCqZxHKYYVMJXC28kGOqUBt1f%2Fb4wvGvgFcnIKm6DZrhpZ3aWwTm2Qn4%2F9uiCH3lpkWJdroy5EOID%2BSI8xFJocVmjmEo97qDHGjZYGjbpIr%2BAeHiZcFCUp38LZmFlJHCry7ICU97eakf7ejtsO%2BktJbHIUGPIBfYeg4YLL1wMV2FNaab0y%2FIq4q%2BWSsQR2Yeycy%2FJKvruIJXnSLVq9nQqqknz10rtYNjUv9OTXCvwk6TUjunnW&X-Amz-Signature=b95818845e3adf2543fded2f61a13b17e08f67e5bea6419cebc39883e96b2925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
