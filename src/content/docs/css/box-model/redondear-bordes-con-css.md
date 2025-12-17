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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ER7HFG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8uJULGEDeMBQ1Pz6055iekZKE%2FGROjvYZ9UNUeyxUQAiAk4rIcFLygJuhHT%2Fn1EAOApVqoY3%2BkpuI3WyHgOBO7JCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMuiwifkMSTvxRPbD0KtwDcq6HA3PF9GBzCGkBv%2BAV%2Fs2Ua7EH3e%2F8dsa3TGP5rHBk1Q2ECEL0CRPb4Omf%2FaCN6j901M73JE9JbkZbO6yADa5TF181AqJcL1wWUvCcRniLsAh5xu1%2BJCv0hDgxnPPYIQmrqnsorVS8Z5utydbFuiA8wpA6CBrUKGjnE6bx4ROCqS%2FBbBIq6RgH6yjX3r3Ol832kAT1BvxcQ%2BGdKH4QFWrHygaqNyERO3TIiN7iFugJlgq%2FeOqaKHmDB3h5bK6fOtmWUrgY6fpfGvllkdqN54CeMHGz1LvJ7J%2F%2BUOXTBYOCtPx4iCdjobHfGz275M5TGP08dFaElkDX5eEIYtixGO7WDW7vu7OTWWVjl6CeWhfOTShd%2FUPTXf1%2BsPNZRQ0jAZkZJUOj0ZEV2tjKrTT9EVtSGloAbLhYnmucUz4fUUPuK5MynWRry7kuyQ87qGCSMMoBw7jCgFJ%2FaWO5kTJStihHHI%2BVUobbCa39LMIPgVhfbkCBeuKoR3bRQpRepQTfgV6Tz9FmEBWJ5iB2Y%2BYt4YU3GBy3%2FEGW45M%2Bzg1xeJir0Xpp%2F5Tx727F2Gl2hlTj2IMBTKLQ8dxTpEgg8dOAx3D%2FAIqShOvw%2BqOJPkPC9x8%2Bll7r4TJqbb4P5J4wmtGJygY6pgFFUAVNyN%2BlThyd0C7AkC%2FQYMsdHV5gJzrQLcLrbTYZsVPLJCUVnIZ89%2FRLmkuWN%2FjTcERccX%2BvtQtwaJDKzrfYLPHb6PDXbFfQXnT9XGLXyR8UxYL59eDFr0OPDySpCquKKR%2FrNKKJXCkosAzF8tEussgaBV0viFQpgaVbXmkQZcWKPK3tTy2hSUhvlmVy7hUjttYS6gmx%2BpkVxAYLGXWCPaSce3sS&X-Amz-Signature=74276ebcbc80fc8c8e3abaab0de79fde68c66f3ccf0acb9e8693c67e621b7b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ER7HFG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8uJULGEDeMBQ1Pz6055iekZKE%2FGROjvYZ9UNUeyxUQAiAk4rIcFLygJuhHT%2Fn1EAOApVqoY3%2BkpuI3WyHgOBO7JCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMuiwifkMSTvxRPbD0KtwDcq6HA3PF9GBzCGkBv%2BAV%2Fs2Ua7EH3e%2F8dsa3TGP5rHBk1Q2ECEL0CRPb4Omf%2FaCN6j901M73JE9JbkZbO6yADa5TF181AqJcL1wWUvCcRniLsAh5xu1%2BJCv0hDgxnPPYIQmrqnsorVS8Z5utydbFuiA8wpA6CBrUKGjnE6bx4ROCqS%2FBbBIq6RgH6yjX3r3Ol832kAT1BvxcQ%2BGdKH4QFWrHygaqNyERO3TIiN7iFugJlgq%2FeOqaKHmDB3h5bK6fOtmWUrgY6fpfGvllkdqN54CeMHGz1LvJ7J%2F%2BUOXTBYOCtPx4iCdjobHfGz275M5TGP08dFaElkDX5eEIYtixGO7WDW7vu7OTWWVjl6CeWhfOTShd%2FUPTXf1%2BsPNZRQ0jAZkZJUOj0ZEV2tjKrTT9EVtSGloAbLhYnmucUz4fUUPuK5MynWRry7kuyQ87qGCSMMoBw7jCgFJ%2FaWO5kTJStihHHI%2BVUobbCa39LMIPgVhfbkCBeuKoR3bRQpRepQTfgV6Tz9FmEBWJ5iB2Y%2BYt4YU3GBy3%2FEGW45M%2Bzg1xeJir0Xpp%2F5Tx727F2Gl2hlTj2IMBTKLQ8dxTpEgg8dOAx3D%2FAIqShOvw%2BqOJPkPC9x8%2Bll7r4TJqbb4P5J4wmtGJygY6pgFFUAVNyN%2BlThyd0C7AkC%2FQYMsdHV5gJzrQLcLrbTYZsVPLJCUVnIZ89%2FRLmkuWN%2FjTcERccX%2BvtQtwaJDKzrfYLPHb6PDXbFfQXnT9XGLXyR8UxYL59eDFr0OPDySpCquKKR%2FrNKKJXCkosAzF8tEussgaBV0viFQpgaVbXmkQZcWKPK3tTy2hSUhvlmVy7hUjttYS6gmx%2BpkVxAYLGXWCPaSce3sS&X-Amz-Signature=e77c3a37bab595543625e1bbc5da9b0a8d7d6d39e3670a7c1f9cc069d4216162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
