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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWK25FKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9YthaMFARqbifAljfSt4vkuTOU2O85HxFh%2FHUr6KoGgIhAJoAxOTpyjOI50u44BY1KSHukx8g5EAc24Xd%2F6paoL5CKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvrAFxF1CtLmUkwuwq3ANqeQ971Dvadd%2BaUu0%2BxsLXdGyTu87AzCltIT4mPy%2FctmUz%2FJ%2Bkyn2%2FhjxOhkuhBfvL71wF6DPcoZCRgvaA3U4W2WSKH1DYh6KaSykFfVmw7CLoyI5zWlko2LFHVWlmBqsOQPaCFQFkDfZhQc3Kv2F9SB6L4AKzI%2Bioi3HOrVV9p6ihSa5NM%2F6A7jE4rU%2FFDaKuiEWoIoTAHuDRV91AEu%2BIKH2m4BdkRb2fmKyNjzZ%2Ftgvs9jJrvO0I%2BWiqky8IVCyzTrhNwZHKzQ3RvRwZNr3D61GA2hUWt9QbnDucwMTG3sX2%2FW6tPLtUUNPBdgkybTtsPuTh46fp9JFrrwO%2Bby1QVUS8ASb58hbrCKopM0Z%2BICloJe3HZk%2Fs2Pj5AUOpHJyVuiH0xchoyu7ITYwvgNVD%2BuelscviTUW3F7C9P8SNvOJufeU0vxm%2FI5s4yc72FXdAQHtYW4jbquT5cuFk9cT%2B0L35Vk68VDSfn3sFq9BUluYmiXCWN2XgJE6sGO2IDZiMHt6qNjJCjpwDYM7YSbS08ZWoh03X5rVCaZLh1vAT0wGewJXg%2FSYf0goduUyWrFCJUN6IoP%2BPjWD9HkUAPpw%2FUNL9KNgcjczr2KXGpI4MlE6qRtuOuazMST40CDCngYvKBjqkARmXDFgJrkU1DMDcc1awj5NW7C0Fv6HVVckYjlFFOZiPK009tRyJCHidviwQRxHVeo8j1jrQ8Tjdaq70GA6x1UdG%2B3bBnbWeP7pqbEchzPL8Hpk48SAUYt1Q6K9zZDGT3T2VRlkbPmFdyyTAsYdOiv2yl3BUD%2FjSWWM43yvKh2lddM3k2P%2FzzCZ9MMm%2Bua5xsKf6IwazYSZNFpz%2F7GKSZPeAF3GX&X-Amz-Signature=e085a9284853e202447c63c9cf44772b685142ad4d47a8c748abef934e7f2e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWK25FKD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9YthaMFARqbifAljfSt4vkuTOU2O85HxFh%2FHUr6KoGgIhAJoAxOTpyjOI50u44BY1KSHukx8g5EAc24Xd%2F6paoL5CKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxvrAFxF1CtLmUkwuwq3ANqeQ971Dvadd%2BaUu0%2BxsLXdGyTu87AzCltIT4mPy%2FctmUz%2FJ%2Bkyn2%2FhjxOhkuhBfvL71wF6DPcoZCRgvaA3U4W2WSKH1DYh6KaSykFfVmw7CLoyI5zWlko2LFHVWlmBqsOQPaCFQFkDfZhQc3Kv2F9SB6L4AKzI%2Bioi3HOrVV9p6ihSa5NM%2F6A7jE4rU%2FFDaKuiEWoIoTAHuDRV91AEu%2BIKH2m4BdkRb2fmKyNjzZ%2Ftgvs9jJrvO0I%2BWiqky8IVCyzTrhNwZHKzQ3RvRwZNr3D61GA2hUWt9QbnDucwMTG3sX2%2FW6tPLtUUNPBdgkybTtsPuTh46fp9JFrrwO%2Bby1QVUS8ASb58hbrCKopM0Z%2BICloJe3HZk%2Fs2Pj5AUOpHJyVuiH0xchoyu7ITYwvgNVD%2BuelscviTUW3F7C9P8SNvOJufeU0vxm%2FI5s4yc72FXdAQHtYW4jbquT5cuFk9cT%2B0L35Vk68VDSfn3sFq9BUluYmiXCWN2XgJE6sGO2IDZiMHt6qNjJCjpwDYM7YSbS08ZWoh03X5rVCaZLh1vAT0wGewJXg%2FSYf0goduUyWrFCJUN6IoP%2BPjWD9HkUAPpw%2FUNL9KNgcjczr2KXGpI4MlE6qRtuOuazMST40CDCngYvKBjqkARmXDFgJrkU1DMDcc1awj5NW7C0Fv6HVVckYjlFFOZiPK009tRyJCHidviwQRxHVeo8j1jrQ8Tjdaq70GA6x1UdG%2B3bBnbWeP7pqbEchzPL8Hpk48SAUYt1Q6K9zZDGT3T2VRlkbPmFdyyTAsYdOiv2yl3BUD%2FjSWWM43yvKh2lddM3k2P%2FzzCZ9MMm%2Bua5xsKf6IwazYSZNFpz%2F7GKSZPeAF3GX&X-Amz-Signature=5c9fe5e295564b017d37687ca741cd380f1ca1388b5a8ce6fe40a2ad44717efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
