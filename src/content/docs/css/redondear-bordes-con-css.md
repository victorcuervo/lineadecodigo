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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJU4A3YR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5uCV%2ByoDZ0RIAVSCZveCVarsSsurtStIiCy0awtGuKAiEA%2BWR0CR%2FQmigfpgONO3veODbIMqQ4aigjPFVMLZKjZo0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMxTg%2FL5QVFCS7JvwircA%2F9ZvG7poMdl8tOcngduvivUFpTh1QKFqSUkcm%2Bv%2BUsUMIoc4ay%2FQlLv0yGQt%2FR18PoLLJCKpslP%2BhLsivt0yAGuZNaDS%2F%2BLpLNHYdv3QzojmBxlt0g7aJ6MvgyeS%2FrrMF3fCQi%2FgJEQOadDwULkXLD1xsc%2FglRdbwmgaQE8I12mjiqSp16SImMqydT6r2qIidfankfFuS%2FTVXvfsriLoDy50X5820NbfF4rPzvhCSkoySjYZgnU%2FjxSdpVUhVlM%2FTafX6lfcjqzcmJ3wItQ8LbZURkBdDikZAkcx8%2FWaYSNB%2BxKhaVTnQkdjHE6S%2BqTsz9xzjyfCoQtOSOUWF6PYFw61FxOo4ScczC4g6apJSxLiAYyrXUNynVVTgOeJ9luQZ4GKIljlA0zy6LFI4sZmg4uyGPx%2BXmEUkof0u5mjChBd5wXRKS38dIDagMHFj8XR97%2F547jvQ5bZ5EIDgDqKgslVhYdzsZVpAlJFcWqtMfu5J8hpsRZfa8Wpj0rxh05dNFRRIj6Ns5BdcURMzVujf3h7jug0mADyU0hRI4hFh5PRhiYNFhie5mhWV9FJ3Rutc6wyPgc0gdxHFmrwJLHE9hnbneD82eQyzRN21xQCJEekqyusVcUFhALrV11MKfezskGOqUB%2FNrQVT7JhFm1geYbGqujl5i8lARM7CdOxboOgs64oUgJoHDtmBV36oF%2FiOH3uCBKC9DImlyw48%2FtXzIIehfQ3B5DyBIWM5J8002t5OFHB1w0MhNB7V%2FU48q7x3eTKDhqr1jzaUQUYvyfeVs7UMPa8XVWm3IQXiWGudGRRpQo9ZGJ79Zr9rI8Z6JvMZyJrCraXqKYAE%2FYvsOkm17Rk27bxUMPQUpq&X-Amz-Signature=ec44849d3b45010b3729b8833493e746e2ba6b2cd77dc659eaa3dbfc0fc084d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJU4A3YR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG5uCV%2ByoDZ0RIAVSCZveCVarsSsurtStIiCy0awtGuKAiEA%2BWR0CR%2FQmigfpgONO3veODbIMqQ4aigjPFVMLZKjZo0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDMxTg%2FL5QVFCS7JvwircA%2F9ZvG7poMdl8tOcngduvivUFpTh1QKFqSUkcm%2Bv%2BUsUMIoc4ay%2FQlLv0yGQt%2FR18PoLLJCKpslP%2BhLsivt0yAGuZNaDS%2F%2BLpLNHYdv3QzojmBxlt0g7aJ6MvgyeS%2FrrMF3fCQi%2FgJEQOadDwULkXLD1xsc%2FglRdbwmgaQE8I12mjiqSp16SImMqydT6r2qIidfankfFuS%2FTVXvfsriLoDy50X5820NbfF4rPzvhCSkoySjYZgnU%2FjxSdpVUhVlM%2FTafX6lfcjqzcmJ3wItQ8LbZURkBdDikZAkcx8%2FWaYSNB%2BxKhaVTnQkdjHE6S%2BqTsz9xzjyfCoQtOSOUWF6PYFw61FxOo4ScczC4g6apJSxLiAYyrXUNynVVTgOeJ9luQZ4GKIljlA0zy6LFI4sZmg4uyGPx%2BXmEUkof0u5mjChBd5wXRKS38dIDagMHFj8XR97%2F547jvQ5bZ5EIDgDqKgslVhYdzsZVpAlJFcWqtMfu5J8hpsRZfa8Wpj0rxh05dNFRRIj6Ns5BdcURMzVujf3h7jug0mADyU0hRI4hFh5PRhiYNFhie5mhWV9FJ3Rutc6wyPgc0gdxHFmrwJLHE9hnbneD82eQyzRN21xQCJEekqyusVcUFhALrV11MKfezskGOqUB%2FNrQVT7JhFm1geYbGqujl5i8lARM7CdOxboOgs64oUgJoHDtmBV36oF%2FiOH3uCBKC9DImlyw48%2FtXzIIehfQ3B5DyBIWM5J8002t5OFHB1w0MhNB7V%2FU48q7x3eTKDhqr1jzaUQUYvyfeVs7UMPa8XVWm3IQXiWGudGRRpQo9ZGJ79Zr9rI8Z6JvMZyJrCraXqKYAE%2FYvsOkm17Rk27bxUMPQUpq&X-Amz-Signature=0218433633d9f8a29cd48527fe1667fd15bbf7b5092c487c14513749de9fa3b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
