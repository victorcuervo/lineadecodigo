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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WRRL5I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4VclSRcUP%2BhGY73va68rCS60xcWAAt%2F%2FuXRluMIA%2ByAiEA5JF5fH8Sj5WoQe0HrdwPEBTvVTiIvEikXExErW33wJ8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHIFPX7nQqapr5W9RCrcA8ChuKhuJRMF8T77ZtI31DT3rB85YnXGDstZMpRHfghDOb0gu%2Fwq0cmcvv%2BG%2F7E0%2FjBHiQvGbee41Ap3K3fzCe4%2BtLsZNCMilEulzsRiB5B7djGJzCt5wzYRrPHiJRZvbmIUjfZG2v%2FsNTPf%2FOGm1TfGbjTfb5NmUAd9advzyH6yzMflJEYUUSGABwaD2lqrKvFmDnJxqTQWWz80E%2B3ULfXtX614K9Rwrf%2Bj%2B%2FCyS%2FZrr48QHw82cgGJgIIqLfG1gNIVL57OD%2FsgH2wsiGT%2FFggkIL7Dmz7ZWeb4OgIhSphziu1tOx6RbULEK8nJbPw%2Bk2PSuixBrGSQhIN2%2BVLzcSWXzQxXztZLpAvWOcID8qn%2FCPoXgOXNudDFHvbaToaOM%2BSE%2B%2FQ7Ma%2BLV2p9LhokdLPUnRZ9cRF7%2FUKcav6OdxZq6eduLPFBO6d%2Fa0%2FgXmC1rLDU7i9n2MDhafqFWR8HiXYX2XIHNsnFy3RsAWscuHK94cZSVi5dg%2B3XbsPMwjZmwWiaFlYhdBYGg9oK4e01Wpzh%2B%2BI411nCTQcUcFdfFApaFUVIAIY7qWgeaiUfIi1GRXAuvx3ypffjt6qt5x%2BiJ57KVAKXvLdWZj4ZIKRcXZMRz5bwXymRCreuKCXVMP3QicoGOqUBWr4ajbCJN2Irk8%2B0aFVqppP0TlgCIpN9vluULwMzszKEFmdsHbH%2BPcSete167TyaPm4KMPzWbPdoVGPBAsKD1EU%2FCHgUyFxL%2BrrPrXft4rutUuESWmv%2F4n%2FgLvN9giHj9yvtAvUz%2B7fbX8gem8HaqCaE4p9IF87zuYRa68unua4oPJYpenPaZpXYFWCzTm%2BTBsUmJPwu7FQPKEAnrWHIPduIkQFh&X-Amz-Signature=be7c6cb389cd8aa400279c7405b385c360607961cceac59c28c1306677405778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663WRRL5I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4VclSRcUP%2BhGY73va68rCS60xcWAAt%2F%2FuXRluMIA%2ByAiEA5JF5fH8Sj5WoQe0HrdwPEBTvVTiIvEikXExErW33wJ8q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHIFPX7nQqapr5W9RCrcA8ChuKhuJRMF8T77ZtI31DT3rB85YnXGDstZMpRHfghDOb0gu%2Fwq0cmcvv%2BG%2F7E0%2FjBHiQvGbee41Ap3K3fzCe4%2BtLsZNCMilEulzsRiB5B7djGJzCt5wzYRrPHiJRZvbmIUjfZG2v%2FsNTPf%2FOGm1TfGbjTfb5NmUAd9advzyH6yzMflJEYUUSGABwaD2lqrKvFmDnJxqTQWWz80E%2B3ULfXtX614K9Rwrf%2Bj%2B%2FCyS%2FZrr48QHw82cgGJgIIqLfG1gNIVL57OD%2FsgH2wsiGT%2FFggkIL7Dmz7ZWeb4OgIhSphziu1tOx6RbULEK8nJbPw%2Bk2PSuixBrGSQhIN2%2BVLzcSWXzQxXztZLpAvWOcID8qn%2FCPoXgOXNudDFHvbaToaOM%2BSE%2B%2FQ7Ma%2BLV2p9LhokdLPUnRZ9cRF7%2FUKcav6OdxZq6eduLPFBO6d%2Fa0%2FgXmC1rLDU7i9n2MDhafqFWR8HiXYX2XIHNsnFy3RsAWscuHK94cZSVi5dg%2B3XbsPMwjZmwWiaFlYhdBYGg9oK4e01Wpzh%2B%2BI411nCTQcUcFdfFApaFUVIAIY7qWgeaiUfIi1GRXAuvx3ypffjt6qt5x%2BiJ57KVAKXvLdWZj4ZIKRcXZMRz5bwXymRCreuKCXVMP3QicoGOqUBWr4ajbCJN2Irk8%2B0aFVqppP0TlgCIpN9vluULwMzszKEFmdsHbH%2BPcSete167TyaPm4KMPzWbPdoVGPBAsKD1EU%2FCHgUyFxL%2BrrPrXft4rutUuESWmv%2F4n%2FgLvN9giHj9yvtAvUz%2B7fbX8gem8HaqCaE4p9IF87zuYRa68unua4oPJYpenPaZpXYFWCzTm%2BTBsUmJPwu7FQPKEAnrWHIPduIkQFh&X-Amz-Signature=8860346506f129d759009cb812b6bedf70236df0e779525472910afa15eed201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
