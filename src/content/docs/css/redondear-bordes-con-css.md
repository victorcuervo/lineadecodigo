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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STYJCFA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0FAiVT8pgPitZIj7vNek6dCgn7SWSoFbHtRcqt1ClACIQD5rY9XNTOjphxs2wL%2FNO0h4fPwzq7yP%2B1x147lSikctSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMd%2B%2FNtIKJmL15mH1vKtwDG5d1UtfgqNOrxBIMEDcXDzbKVoR0Msh8MwQogkyJ2WtzGqVAB1z2YRclxm%2F63cNnzipOYW18d9H3s%2BQMrAPOjycx4NydxhUBdwDsom0EPMPw66Vdh41nN1%2F7nhU7NKLhxIfHY22ZlYSfIS6hzBZ%2FL2MbGG%2Fu7Jvy93RCEruWTYjcTPHEDBad7TEhPQHXtzlRZckHkOTG4oHzaDf4Hg1ut8AIMsuJXA7r38GiMlChccmbKUEtD3nuEtislEA7VSD%2BEwpKZZ8fDHx57JK5rlzQr9lXhrEM96S0NGnfbUf4%2FxVflpTR3mk1Mw2RHDDxfTGUvyRwfoPr4J%2FSqwOzvr%2BfyB2BrfeOiTUoOE796m3zduKSzLvOM8vF7jtaYIxbYtr7TDdFapzZGQmZ%2FsGqElDgqeLk%2BqR5PwXzLELDY81S0fIj%2FveydOtY5ow1FTEpxO7u56zbJqu8%2FZ7DuMfANkEc1s2Wn4aZyu07DD%2B%2FZ4B00rSF13uMyogjax2MST96u2euET2wZGDJJVLGmWzwQ1aDUHBNbCCd%2FKLOhO%2FfgjNo0F0rxHLarVRY2WqkoXHc%2Fwtlsp4ZTKkQp9qbt0Ruv%2Bq%2FV9dlPVEwWwhXtPKDJfvA8nMBF73zCbfvokMuuPYwqMPKyQY6pgEq2U4CPJzaRkJz4jyzWlMl4sBaJJxI91tOaClGskKgpjKsB9CW9dK56LW0MneyXbiAGo%2BQbrv6mOvRrBzjzPiz2yBqom4XMrHxMMa2gzsAX7LN95WQZVg%2BQNffiydBsjfs5xegHbCrJbMzL%2FpqC4sYZDVHa1RP0ux%2FXrGgsIWRwyBqaW2aMyF3CaLg2ZdXWcjKdDpYfFqkUiw4Uqu%2BRCEFfQ9PUojy&X-Amz-Signature=4d8bfac3a5f0cd1f5d15449bf990cba4930157bef9f4d09df599cd9a75830650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STYJCFA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH0FAiVT8pgPitZIj7vNek6dCgn7SWSoFbHtRcqt1ClACIQD5rY9XNTOjphxs2wL%2FNO0h4fPwzq7yP%2B1x147lSikctSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMd%2B%2FNtIKJmL15mH1vKtwDG5d1UtfgqNOrxBIMEDcXDzbKVoR0Msh8MwQogkyJ2WtzGqVAB1z2YRclxm%2F63cNnzipOYW18d9H3s%2BQMrAPOjycx4NydxhUBdwDsom0EPMPw66Vdh41nN1%2F7nhU7NKLhxIfHY22ZlYSfIS6hzBZ%2FL2MbGG%2Fu7Jvy93RCEruWTYjcTPHEDBad7TEhPQHXtzlRZckHkOTG4oHzaDf4Hg1ut8AIMsuJXA7r38GiMlChccmbKUEtD3nuEtislEA7VSD%2BEwpKZZ8fDHx57JK5rlzQr9lXhrEM96S0NGnfbUf4%2FxVflpTR3mk1Mw2RHDDxfTGUvyRwfoPr4J%2FSqwOzvr%2BfyB2BrfeOiTUoOE796m3zduKSzLvOM8vF7jtaYIxbYtr7TDdFapzZGQmZ%2FsGqElDgqeLk%2BqR5PwXzLELDY81S0fIj%2FveydOtY5ow1FTEpxO7u56zbJqu8%2FZ7DuMfANkEc1s2Wn4aZyu07DD%2B%2FZ4B00rSF13uMyogjax2MST96u2euET2wZGDJJVLGmWzwQ1aDUHBNbCCd%2FKLOhO%2FfgjNo0F0rxHLarVRY2WqkoXHc%2Fwtlsp4ZTKkQp9qbt0Ruv%2Bq%2FV9dlPVEwWwhXtPKDJfvA8nMBF73zCbfvokMuuPYwqMPKyQY6pgEq2U4CPJzaRkJz4jyzWlMl4sBaJJxI91tOaClGskKgpjKsB9CW9dK56LW0MneyXbiAGo%2BQbrv6mOvRrBzjzPiz2yBqom4XMrHxMMa2gzsAX7LN95WQZVg%2BQNffiydBsjfs5xegHbCrJbMzL%2FpqC4sYZDVHa1RP0ux%2FXrGgsIWRwyBqaW2aMyF3CaLg2ZdXWcjKdDpYfFqkUiw4Uqu%2BRCEFfQ9PUojy&X-Amz-Signature=d1428d8bfda5c17ee8edf356f0f07fe9e2e0c796f1840652a90c64e2ff86d2da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
