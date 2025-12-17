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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZWCYVD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Z4l9eAGVEqEAI9BoJzyCB%2Bo%2F6Lcu1sLBQqZTflsdGQIhAPt%2BKuTjS71tMv1u4eMBqYDN%2F0XKZmQty245Y%2BA5F5sZKv8DCHQQABoMNjM3NDIzMTgzODA1Igx1Wyx4k2%2B2H80i8Ygq3AM4sRnThj%2FmQngrraJ%2FPbNEaYYHgL7h1XNWV0dfporKiHQ4UkSzVoQX5axve3huu1e%2BNWYkmrd6vwWJTUF1SlAomKQvc5tBau7RE%2F47nWE7EX5d5IelC4wlIFmrp1yRP9soAmt6qfZqGoM%2FRqiAD7U6opUO3ep1liOVX1fS7ivq10mSxKeNm%2F5DhImrudJJiILVCTeARkQfOiUqSgRBrretOYDU9N5voGCEDQ%2BuIK7UoJ7ceyd9xT1e9V6LTp%2F%2F3VlrvoWuCs%2FdQTC3U%2BoE9Z%2FD1Usfyt%2B41voFTKCAeXKMu%2BxjE26rXOcxeVhNnCZNULbqz1AMWLJ34D%2BXX1bVibj309p%2F38JkxGquB0GuaoPnRxs%2FSqiWQ632xqS5A888VPtdnj3l7RPRRoPrb7rgOuO0QVlVRJCY3GFH7AclaUdT7jMR8%2BmXmgWOvDMjlGfl9tmGxLiWsN26IbHeQKBiV8qPKWpI%2BEHARa8WZXOVf4Ne2gL6BP6G02g7%2BB83Sae1HkJab3wUosHevz1BXCnLNkoP2yI916pu%2FDIIYp74BgVJNJHCaU%2BCUpB6k6uDK7dxPHadSr9LvbQJxKcUsKVcQ9DcLQ906k5FVrEymAGjqmHos0FV9CD1%2FkjyyNUttDDMsYjKBjqkASn%2Bbnn3DupI%2B07OMohyZ4gJgGTM5TMbtpRNNtJx%2FHvayTribeJE0BrfIRkTHM4yH4erpuciUbnyiDyC0ace7xwPv81O%2BLFtCss6T0CrVtSjzF9kFUH5mYQEztqOGOFFVq9GHUuUVh3da1ucyOTVxuScFB62TzTb9oy6YE%2FwxreGZaG4qOK20H1TOrPprWktYAn5lHGjBgas4xiC5PWTkVcgKWIv&X-Amz-Signature=41ecb9cc4228b1daded6b88d875583b0bb4e4905e4142ada50d8ff3b8e7f21ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFZWCYVD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2Z4l9eAGVEqEAI9BoJzyCB%2Bo%2F6Lcu1sLBQqZTflsdGQIhAPt%2BKuTjS71tMv1u4eMBqYDN%2F0XKZmQty245Y%2BA5F5sZKv8DCHQQABoMNjM3NDIzMTgzODA1Igx1Wyx4k2%2B2H80i8Ygq3AM4sRnThj%2FmQngrraJ%2FPbNEaYYHgL7h1XNWV0dfporKiHQ4UkSzVoQX5axve3huu1e%2BNWYkmrd6vwWJTUF1SlAomKQvc5tBau7RE%2F47nWE7EX5d5IelC4wlIFmrp1yRP9soAmt6qfZqGoM%2FRqiAD7U6opUO3ep1liOVX1fS7ivq10mSxKeNm%2F5DhImrudJJiILVCTeARkQfOiUqSgRBrretOYDU9N5voGCEDQ%2BuIK7UoJ7ceyd9xT1e9V6LTp%2F%2F3VlrvoWuCs%2FdQTC3U%2BoE9Z%2FD1Usfyt%2B41voFTKCAeXKMu%2BxjE26rXOcxeVhNnCZNULbqz1AMWLJ34D%2BXX1bVibj309p%2F38JkxGquB0GuaoPnRxs%2FSqiWQ632xqS5A888VPtdnj3l7RPRRoPrb7rgOuO0QVlVRJCY3GFH7AclaUdT7jMR8%2BmXmgWOvDMjlGfl9tmGxLiWsN26IbHeQKBiV8qPKWpI%2BEHARa8WZXOVf4Ne2gL6BP6G02g7%2BB83Sae1HkJab3wUosHevz1BXCnLNkoP2yI916pu%2FDIIYp74BgVJNJHCaU%2BCUpB6k6uDK7dxPHadSr9LvbQJxKcUsKVcQ9DcLQ906k5FVrEymAGjqmHos0FV9CD1%2FkjyyNUttDDMsYjKBjqkASn%2Bbnn3DupI%2B07OMohyZ4gJgGTM5TMbtpRNNtJx%2FHvayTribeJE0BrfIRkTHM4yH4erpuciUbnyiDyC0ace7xwPv81O%2BLFtCss6T0CrVtSjzF9kFUH5mYQEztqOGOFFVq9GHUuUVh3da1ucyOTVxuScFB62TzTb9oy6YE%2FwxreGZaG4qOK20H1TOrPprWktYAn5lHGjBgas4xiC5PWTkVcgKWIv&X-Amz-Signature=497bc5744ea5d8413260f8f93251fec62a35ac53424ccf2acd9feeb6cdcd6613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
