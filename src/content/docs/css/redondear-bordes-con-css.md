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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRM36CO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBNecMxrjw5%2BiQsRvHZLIKuEo3y%2BPv0k7NBJmfn%2FJHpwIgR6iDFjPmjCAy9vBW%2Bj%2BfnsNm%2BANuMDcc4gxULV5IPygq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDenETVil2sA4pzP%2BCrcA%2BlwHohcRM6T77tlwQ0cUpIejd8KBx9JO0JD7QebeXLr%2BJEQxhwyMIh3MkdaTlgfYpVUqp5qE%2BPx7SFifJI7eT9wJSX8u60al1PZJwnQh07XAMMdG8PFQke66jkHcxaaQNduhe4WhaHrxZcHvUCXT9fJKGjxUwYL3ORyHz3tYEQ0AqmGJCukPLKvQhwyogWdxLVforNRpuYO2rmjw%2BrewPgy532z3ZKLdsRB8F24m89jc%2FJnkwgV8jL7j0Au5I0dRV2yG4BI46sBo9PqAQgo5nb8C3r7brnF5OTVnchLLiIm99wljllh2tbx%2Foz9fNPzNg%2FFFFb4xuYJEEBE9Os9LAUqFV%2B5VxYRfrzsUn0IytHNNxxVSrqdcaJEVXvf4xuulbBF1JgRTA8u%2FycBtXxULVeWT0JNLUFzq4fgL1EgtAQpvKI8XGZaX%2FMVXM%2BhlRsJ7v09qIkRdIRAV2p7xaeYX%2Bmiz7yTfVY%2B3vBPGpRzaAmzl8ZOClBpCcYSY4nh51GaJrUDFO70nbyTd0472Ifj%2BvL1OQbqm87tn5yVH%2FzRWLfo3uTY55prJTHqfDfGHHWfoABwkkmvCrP6C2PB9l1CB1RWFu1am9Wm0VNpjhAregmKWWQlNLqZSdFOVFGYMJ7uy8kGOqUBKxCG29nqH7Ch%2FjH2UTbPRT5Vt%2FJBWqJyrRyQVy1r39oMOStnuH0Q4l9twtUT%2BQOU1OvSiaermWvmqn8jmOxQPvWTTJfhlvOcJuQdRx4c2qThf1niBPLe3LpsVP7%2FAyixwTirPLecLiGib5%2BwY7zbOR2isER40AaGU5F%2FS2uag12WBLWdCdYoeKui9RPrqPzAvvxuwOcXapoCNCZr1vzAswYD4Pbq&X-Amz-Signature=b2e269939dca7a670423f0a3ee10322b8fbc39df0a49d4b021e04b3568449bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIRM36CO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBNecMxrjw5%2BiQsRvHZLIKuEo3y%2BPv0k7NBJmfn%2FJHpwIgR6iDFjPmjCAy9vBW%2Bj%2BfnsNm%2BANuMDcc4gxULV5IPygq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDDenETVil2sA4pzP%2BCrcA%2BlwHohcRM6T77tlwQ0cUpIejd8KBx9JO0JD7QebeXLr%2BJEQxhwyMIh3MkdaTlgfYpVUqp5qE%2BPx7SFifJI7eT9wJSX8u60al1PZJwnQh07XAMMdG8PFQke66jkHcxaaQNduhe4WhaHrxZcHvUCXT9fJKGjxUwYL3ORyHz3tYEQ0AqmGJCukPLKvQhwyogWdxLVforNRpuYO2rmjw%2BrewPgy532z3ZKLdsRB8F24m89jc%2FJnkwgV8jL7j0Au5I0dRV2yG4BI46sBo9PqAQgo5nb8C3r7brnF5OTVnchLLiIm99wljllh2tbx%2Foz9fNPzNg%2FFFFb4xuYJEEBE9Os9LAUqFV%2B5VxYRfrzsUn0IytHNNxxVSrqdcaJEVXvf4xuulbBF1JgRTA8u%2FycBtXxULVeWT0JNLUFzq4fgL1EgtAQpvKI8XGZaX%2FMVXM%2BhlRsJ7v09qIkRdIRAV2p7xaeYX%2Bmiz7yTfVY%2B3vBPGpRzaAmzl8ZOClBpCcYSY4nh51GaJrUDFO70nbyTd0472Ifj%2BvL1OQbqm87tn5yVH%2FzRWLfo3uTY55prJTHqfDfGHHWfoABwkkmvCrP6C2PB9l1CB1RWFu1am9Wm0VNpjhAregmKWWQlNLqZSdFOVFGYMJ7uy8kGOqUBKxCG29nqH7Ch%2FjH2UTbPRT5Vt%2FJBWqJyrRyQVy1r39oMOStnuH0Q4l9twtUT%2BQOU1OvSiaermWvmqn8jmOxQPvWTTJfhlvOcJuQdRx4c2qThf1niBPLe3LpsVP7%2FAyixwTirPLecLiGib5%2BwY7zbOR2isER40AaGU5F%2FS2uag12WBLWdCdYoeKui9RPrqPzAvvxuwOcXapoCNCZr1vzAswYD4Pbq&X-Amz-Signature=fa1e3a40d4cc061d17758421115ded7ec4a5456a5e3d6b9e986fbd303e30efd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
