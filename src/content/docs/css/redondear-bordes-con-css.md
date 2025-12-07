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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YHQL5F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzoTF7PMVXmlWB4WE5IJcQv59xWa2IHL3Db85qrwihEAiEAjVORKBMLx2QSAVSv4BWvUGB6zcHNlt6Phnc3%2Fp6YB8UqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASbDyLjNtk8qEZ20CrcA67norWUmD64FO9ZU9if5u6N8edzDZP1VRmZpoe92EQb8Fb61HqwttwlMxhE4lWeCcFkaSLjSm%2F9lE6neBbQHrgnlAxNy9qlthdWdeClBPdkVP3HRJCLCtKLpXf%2FwsnMVD7MuE0GXB7LqZwJ%2B2RsX%2FbsTRg9SygNxtv2sYtRWN0%2B3o0h%2BpyTC8NixbR%2FSOJsdNigQs62zFM5Qu61pfdrzQPh%2F3z%2BkqshnhIcQYfz9%2FqUNKd7gPC7GBTMRJmyW9rHFAEcPibsZvOXptmkKDw6EQfEq1qPXp4llb0aYywPok2lw%2FK1y6D8HWG4eI407L%2FnzxiwlronMelqX2AsLmf%2FUzbPJyY9Pk03EIA65WvEKwxH%2BP0%2FwNOHBGiiuUr%2FXEM2Tk9aOiIK2JVVcunx9yV5qFJUOici6U4vXH1wJH3MdOz6sfM08fDmFT1jflFFB6JvTIa8KI2DUSmQQIEHjdnMD%2BHc%2Fa9W1wn8WpH6loNxb8TX1mxb6dpNKobUGrGooKg6azjh6WQiH7d5ijgV9odwQjJF%2BzB26sKCmSKWHQPamC1CMMUc1xAnFrExNh5YLjFgmPgTMnQ0DtqsPos%2Bv1%2FJIbylYlHL%2BnT3rNFv%2FXdIMGNgqqZlOctcp%2BvLAkbXMPaj1MkGOqUBo%2FOKzFs0lkIwvewNZJeae%2F5rdbcN1nBYrzB1QHfOgIyVjFB5CPf%2F%2F9W3QcZyLAUzf6zqOY57Tx2t2%2FGvcGLAIg%2FYW66n%2BgBXarKSMnfKJLM%2BDJHAaSGXy7a1hVtUfdP0%2B7Y82YTEBkmOO9Zd9ZVLQDUUUzZl7r9GQqH2Q1oAXmm3lhak55phMaS68YHLXRM9Lxs0qz18iyDKMBa0Bghk2nO4Mtmd&X-Amz-Signature=bc3db65a871c1e474dc761d83c3b1abac33b51c0fab14dba1a1240c7b872f80d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YHQL5F%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T063117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzoTF7PMVXmlWB4WE5IJcQv59xWa2IHL3Db85qrwihEAiEAjVORKBMLx2QSAVSv4BWvUGB6zcHNlt6Phnc3%2Fp6YB8UqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDASbDyLjNtk8qEZ20CrcA67norWUmD64FO9ZU9if5u6N8edzDZP1VRmZpoe92EQb8Fb61HqwttwlMxhE4lWeCcFkaSLjSm%2F9lE6neBbQHrgnlAxNy9qlthdWdeClBPdkVP3HRJCLCtKLpXf%2FwsnMVD7MuE0GXB7LqZwJ%2B2RsX%2FbsTRg9SygNxtv2sYtRWN0%2B3o0h%2BpyTC8NixbR%2FSOJsdNigQs62zFM5Qu61pfdrzQPh%2F3z%2BkqshnhIcQYfz9%2FqUNKd7gPC7GBTMRJmyW9rHFAEcPibsZvOXptmkKDw6EQfEq1qPXp4llb0aYywPok2lw%2FK1y6D8HWG4eI407L%2FnzxiwlronMelqX2AsLmf%2FUzbPJyY9Pk03EIA65WvEKwxH%2BP0%2FwNOHBGiiuUr%2FXEM2Tk9aOiIK2JVVcunx9yV5qFJUOici6U4vXH1wJH3MdOz6sfM08fDmFT1jflFFB6JvTIa8KI2DUSmQQIEHjdnMD%2BHc%2Fa9W1wn8WpH6loNxb8TX1mxb6dpNKobUGrGooKg6azjh6WQiH7d5ijgV9odwQjJF%2BzB26sKCmSKWHQPamC1CMMUc1xAnFrExNh5YLjFgmPgTMnQ0DtqsPos%2Bv1%2FJIbylYlHL%2BnT3rNFv%2FXdIMGNgqqZlOctcp%2BvLAkbXMPaj1MkGOqUBo%2FOKzFs0lkIwvewNZJeae%2F5rdbcN1nBYrzB1QHfOgIyVjFB5CPf%2F%2F9W3QcZyLAUzf6zqOY57Tx2t2%2FGvcGLAIg%2FYW66n%2BgBXarKSMnfKJLM%2BDJHAaSGXy7a1hVtUfdP0%2B7Y82YTEBkmOO9Zd9ZVLQDUUUzZl7r9GQqH2Q1oAXmm3lhak55phMaS68YHLXRM9Lxs0qz18iyDKMBa0Bghk2nO4Mtmd&X-Amz-Signature=ad73cc89c716af93f7ea59ae1fd3eb798190c5e272481cfe3d4ef28e3fa70e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
