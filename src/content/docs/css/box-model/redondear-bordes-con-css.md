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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZ2GCRY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg2f20NqOp3O5f8Ncwswk1ys9HSaOqU%2Blx%2B77vjQuxmAiBlcr14sEWekXYCykvAVDY%2BlGe%2FVzeUzEqYpL369N2o6CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3TvuhVm%2BOhb0S14KtwDW9QGzmMxUCfe26R2guVjWCZMxDAVxzHCBFVE4tRFBGevuixszRJct6WVz9yHzlx9sDZ%2FV2v0k3MM%2FKh9lBU3idpHQ29G%2BQu%2BErKZzXFHQourE%2FMQXTFisrzqYZOhq7g1V2MOWiYM5FBntVDc3Bu8PS28FtcPLaaqCcTv47E7Hjkplze1JvzGCqjJ2IIUWoZhP453lusmJOmtHBj6SxuBx8jkgGHS1r3b2Sc77Yn07v3DsgzGZZTH8qZuqQX7pZW0QYzsYij9pCt7VFKlQ99LIMa1x0%2B5%2B4ZsOHLsDrNZT9SnAvMWleF1IyWK3%2B6J%2BSAeHbBplOKtOfIHeKcz%2FHwib3ku4tYWzEwc3M4KLBJKEUTT7g%2FsDIfoeXDvGG2fs1kIhYgwp448xj90TamDLKUlBBrMFt1OFCAVOJebm01Y%2FodgFC650RUzI7mbReyirF2x38cOyeo6QuC6fGElzajo7xfm0vPf2VaYkG8WvVxHILleOu3qO6qsL96sNA29%2BfGCRqglLJ%2FK5ArrXmwGCsoC3chut1jLXtS%2Btle%2BOxAp4jhfzn56ldpGQrHKA8Ofw7huNlK166Dh29JAtHt4JDSk7XwWHGx4mHh56f%2B28Kc3YxtGH3l3PJTuOuOcgVgwpp%2BLygY6pgGR5Kp6AO8KSSwVPxYKLeNMnSEDn1piuqb%2BxaI33Kxoj9wcG0C%2FjEjOqkFx5t64CRJNYiS3O8eJNyuu4%2F%2FjaMjfVXB44gwfto2EiJ3WBYgHfP48MNsF8p1LnYEh7ZbZEu5D3HAfKQgaueIYB98WIwN3oANQPyuR1SkVpIB99Xlv6NY8MZRJMxjffYImIOV7UasCzzM3x7fsLk3m3U1%2FmHjuCcavf0Tt&X-Amz-Signature=b78f55ee8c31e21bd4d11ae9e8234624a07cc02c28c24eca68bd58725f5597d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZ2GCRY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDg2f20NqOp3O5f8Ncwswk1ys9HSaOqU%2Blx%2B77vjQuxmAiBlcr14sEWekXYCykvAVDY%2BlGe%2FVzeUzEqYpL369N2o6CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT3TvuhVm%2BOhb0S14KtwDW9QGzmMxUCfe26R2guVjWCZMxDAVxzHCBFVE4tRFBGevuixszRJct6WVz9yHzlx9sDZ%2FV2v0k3MM%2FKh9lBU3idpHQ29G%2BQu%2BErKZzXFHQourE%2FMQXTFisrzqYZOhq7g1V2MOWiYM5FBntVDc3Bu8PS28FtcPLaaqCcTv47E7Hjkplze1JvzGCqjJ2IIUWoZhP453lusmJOmtHBj6SxuBx8jkgGHS1r3b2Sc77Yn07v3DsgzGZZTH8qZuqQX7pZW0QYzsYij9pCt7VFKlQ99LIMa1x0%2B5%2B4ZsOHLsDrNZT9SnAvMWleF1IyWK3%2B6J%2BSAeHbBplOKtOfIHeKcz%2FHwib3ku4tYWzEwc3M4KLBJKEUTT7g%2FsDIfoeXDvGG2fs1kIhYgwp448xj90TamDLKUlBBrMFt1OFCAVOJebm01Y%2FodgFC650RUzI7mbReyirF2x38cOyeo6QuC6fGElzajo7xfm0vPf2VaYkG8WvVxHILleOu3qO6qsL96sNA29%2BfGCRqglLJ%2FK5ArrXmwGCsoC3chut1jLXtS%2Btle%2BOxAp4jhfzn56ldpGQrHKA8Ofw7huNlK166Dh29JAtHt4JDSk7XwWHGx4mHh56f%2B28Kc3YxtGH3l3PJTuOuOcgVgwpp%2BLygY6pgGR5Kp6AO8KSSwVPxYKLeNMnSEDn1piuqb%2BxaI33Kxoj9wcG0C%2FjEjOqkFx5t64CRJNYiS3O8eJNyuu4%2F%2FjaMjfVXB44gwfto2EiJ3WBYgHfP48MNsF8p1LnYEh7ZbZEu5D3HAfKQgaueIYB98WIwN3oANQPyuR1SkVpIB99Xlv6NY8MZRJMxjffYImIOV7UasCzzM3x7fsLk3m3U1%2FmHjuCcavf0Tt&X-Amz-Signature=467b43f8210a36abdea8bbeac4941aba125326f2546e634474026c27791a512d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
