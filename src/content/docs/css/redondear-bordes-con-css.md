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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NB7XM5W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBq3hmFaXbe30%2BXPKGZIQm2Z1u15wvslNenebB8N8juCAiBI68Bcj%2BTXQsuIuAK%2BuTQOic0pQKm7OmsclCHctCOiUCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx9tMizKQm%2BGD9%2Fz4KtwDJwZ9cKAaKsWmkvoVbXGbIMusDdc5BSx2wBQ%2BJYz62VfpXogsLnosZ1punB368egsjLzy4DG9gyawUM5YNRZ0iyo7HmmxIIzwxnT9mcvDVUFSxc3f4VNl%2BgcmwA8%2Fo8JE3ogxuDxL%2BiO%2BPx8L7NNmwYPJ9%2BtE%2FP%2BJfb7HHzwJdeD%2B2hcLa5%2B8NCib5FuWbWGruuYFmNpcmF%2Bu5VCJuB3q6nIBi4gbKxZm1027Gz0sso4d5o7MDnxxzkbuvq83AGYwo%2BLQ446Mafp1BbtdEKyfU5QatCPMjHxrUZSKRRiUsx1NdtTnsfWuehwUQt1VeFM13mTo3r038xq3S1fSGGNMeDsvzdZv8%2BLIKwEhw8NnSakou0Fxgn8v57oG91x2PIkWsmnY1enJvLEmYM2OLroLSAHDjeUE9aYGSe2%2FH43kU7Gd%2BkiXXCwaDaC2DbdO%2FXAF5x0KqP5v1wWFI%2FnZc0juGDJEszU%2FhuH%2FCdeqtnF%2F6oKtObZGDHnKVUYpU1%2F%2FkwQVorfzdOkHgfiYWmSDUAkggJqQjXk3YQfeDD9TaQbzgLyNh1%2FdIeArraAfYcgUCM3SyseEUHE0hDFOs2w1qbfpeKTuSmyaVAEFJm8cCVMe4%2F6tdsfw%2FQNS1M1rYNYw%2B63eyQY6pgGR3idHihU8SGkCV00Vz7GhpJmWi59zlW9NRCi8p2Nyxz70ELTEu1NqMcCqOpHLw7aTaP5mrU%2FIwqYA5QD9qpy6Adi6uzyz23l6zXvBZ1jl9Qm14Q9plEAC9bJNBlBSTDqL2V0trH4b9QHSYF%2F8RJyEeuj6WAJeXafLkazvwzsMtrdIUvEPiV2UK9QFR5zfPkyTzfmhPmDdGr36IYZeX%2BgEs6O4OdKY&X-Amz-Signature=d0ffa94e0dbb81fc330860e6f013b4934c5dd702f05e5413e0f9b4d0fe797d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NB7XM5W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBq3hmFaXbe30%2BXPKGZIQm2Z1u15wvslNenebB8N8juCAiBI68Bcj%2BTXQsuIuAK%2BuTQOic0pQKm7OmsclCHctCOiUCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx9tMizKQm%2BGD9%2Fz4KtwDJwZ9cKAaKsWmkvoVbXGbIMusDdc5BSx2wBQ%2BJYz62VfpXogsLnosZ1punB368egsjLzy4DG9gyawUM5YNRZ0iyo7HmmxIIzwxnT9mcvDVUFSxc3f4VNl%2BgcmwA8%2Fo8JE3ogxuDxL%2BiO%2BPx8L7NNmwYPJ9%2BtE%2FP%2BJfb7HHzwJdeD%2B2hcLa5%2B8NCib5FuWbWGruuYFmNpcmF%2Bu5VCJuB3q6nIBi4gbKxZm1027Gz0sso4d5o7MDnxxzkbuvq83AGYwo%2BLQ446Mafp1BbtdEKyfU5QatCPMjHxrUZSKRRiUsx1NdtTnsfWuehwUQt1VeFM13mTo3r038xq3S1fSGGNMeDsvzdZv8%2BLIKwEhw8NnSakou0Fxgn8v57oG91x2PIkWsmnY1enJvLEmYM2OLroLSAHDjeUE9aYGSe2%2FH43kU7Gd%2BkiXXCwaDaC2DbdO%2FXAF5x0KqP5v1wWFI%2FnZc0juGDJEszU%2FhuH%2FCdeqtnF%2F6oKtObZGDHnKVUYpU1%2F%2FkwQVorfzdOkHgfiYWmSDUAkggJqQjXk3YQfeDD9TaQbzgLyNh1%2FdIeArraAfYcgUCM3SyseEUHE0hDFOs2w1qbfpeKTuSmyaVAEFJm8cCVMe4%2F6tdsfw%2FQNS1M1rYNYw%2B63eyQY6pgGR3idHihU8SGkCV00Vz7GhpJmWi59zlW9NRCi8p2Nyxz70ELTEu1NqMcCqOpHLw7aTaP5mrU%2FIwqYA5QD9qpy6Adi6uzyz23l6zXvBZ1jl9Qm14Q9plEAC9bJNBlBSTDqL2V0trH4b9QHSYF%2F8RJyEeuj6WAJeXafLkazvwzsMtrdIUvEPiV2UK9QFR5zfPkyTzfmhPmDdGr36IYZeX%2BgEs6O4OdKY&X-Amz-Signature=1a911d103209846204cb65dfcb08e878781c6bd9b37c2952c06fc718f31e295c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
