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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHZTX3TP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPs09dRFO%2BjG3cAf%2Bvu6G5tHJklfv4eKPitCVSYw51NwIgXcKpLBQ54XGL7fKU9Zc6Kg2frT%2FUN%2BEo9INl3SVd8UQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOys5t1N4%2FmaBBhb1SrcAwRLg3%2FHHUhpVF9S%2FHetOYLOTZSxGWZXYNTZQHNzJYg8WyvqH8iuGdeh0gAA1R03CRVU17lCHnJTz7vzWymTPiQAezbV1r%2BylmbNBspxF6BCJgr5HB5sRYMt7CYZTIfQ7X5Edc8yw1PDO0Mtdlij2HXEDyY49WFUa2ITYWxG9%2BVSL%2F5E4jQnaUNHxi9tB7pe7fX2ssbZ5Kosaw5H5ekmE17WSVLtJw28sO98ZCTNthkSe0vU46%2F41nmdThmDb9lQyYHJquprDppxaekofk%2Bgw8ejOYY%2BNxaqZPCSiBR9DhDbTKkUmRJ8Y96GHsKd7XlGw0lsXAtR7byOAp8Tn06WdvIwKsAE4B9cZc62vLe9UYipvUmMa5%2BfJPY8yG8gnA9gZ%2F%2BOKcpuajlaJuWeQ%2BgPhKHlZVbObWCgxB%2F8EtnN8RzN1Tgv%2BmN2od0349njIQM2xJJZBumxd6UDYium2s2s%2F8Mmii1fnxsXAm156ZDV4GSmPjmTDrJPNbJUA088zaSDEY2sOaEFQEM6VbpGfoz6jTclaU%2BNoKO2vB0ODs%2F5bUcKQ7Z%2FFpZ5oVY4HlTW3t%2BxN9bMeY3gUUTkMBgACK%2F6%2FouxtqN02tRWml8Z1ONL5ZRXStDrdq2%2Bc5s%2FyCVKML%2BQ28kGOqUBQmlo3KA4qGXL9bpVXEsmVxbxDkNG%2FOpik7ur%2Fr%2BW26oiCBTdOF9SK0hNSMeFg4mWmvxZ%2BbKMVZLz89ebtb2B2Ard0uPep%2FYbtD1QlEff%2F6LLsfxg3ty16Cu4E4fB7oHt42vgj8vAbSt2t6oI0%2FSi0N2bzKejHJNFTwwzCzkATP2AYqGmeZC2%2FZtVfflX7Rp2p70WpuSx1A%2FYq29FJe2NlBkv1Eqe&X-Amz-Signature=64b98787bc896c4d8b4cbca88c9b0d5da91a840a244ea8e5d960130d2ed4ccae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHZTX3TP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPs09dRFO%2BjG3cAf%2Bvu6G5tHJklfv4eKPitCVSYw51NwIgXcKpLBQ54XGL7fKU9Zc6Kg2frT%2FUN%2BEo9INl3SVd8UQqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOys5t1N4%2FmaBBhb1SrcAwRLg3%2FHHUhpVF9S%2FHetOYLOTZSxGWZXYNTZQHNzJYg8WyvqH8iuGdeh0gAA1R03CRVU17lCHnJTz7vzWymTPiQAezbV1r%2BylmbNBspxF6BCJgr5HB5sRYMt7CYZTIfQ7X5Edc8yw1PDO0Mtdlij2HXEDyY49WFUa2ITYWxG9%2BVSL%2F5E4jQnaUNHxi9tB7pe7fX2ssbZ5Kosaw5H5ekmE17WSVLtJw28sO98ZCTNthkSe0vU46%2F41nmdThmDb9lQyYHJquprDppxaekofk%2Bgw8ejOYY%2BNxaqZPCSiBR9DhDbTKkUmRJ8Y96GHsKd7XlGw0lsXAtR7byOAp8Tn06WdvIwKsAE4B9cZc62vLe9UYipvUmMa5%2BfJPY8yG8gnA9gZ%2F%2BOKcpuajlaJuWeQ%2BgPhKHlZVbObWCgxB%2F8EtnN8RzN1Tgv%2BmN2od0349njIQM2xJJZBumxd6UDYium2s2s%2F8Mmii1fnxsXAm156ZDV4GSmPjmTDrJPNbJUA088zaSDEY2sOaEFQEM6VbpGfoz6jTclaU%2BNoKO2vB0ODs%2F5bUcKQ7Z%2FFpZ5oVY4HlTW3t%2BxN9bMeY3gUUTkMBgACK%2F6%2FouxtqN02tRWml8Z1ONL5ZRXStDrdq2%2Bc5s%2FyCVKML%2BQ28kGOqUBQmlo3KA4qGXL9bpVXEsmVxbxDkNG%2FOpik7ur%2Fr%2BW26oiCBTdOF9SK0hNSMeFg4mWmvxZ%2BbKMVZLz89ebtb2B2Ard0uPep%2FYbtD1QlEff%2F6LLsfxg3ty16Cu4E4fB7oHt42vgj8vAbSt2t6oI0%2FSi0N2bzKejHJNFTwwzCzkATP2AYqGmeZC2%2FZtVfflX7Rp2p70WpuSx1A%2FYq29FJe2NlBkv1Eqe&X-Amz-Signature=9230386610e562e499da8d119ad44dc9252941d200ecd4c2d96dccd18f6fc455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
