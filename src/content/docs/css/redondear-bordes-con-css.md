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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZOCQFH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBdLuhsWudiYTE96c6WzN26MCixLXWd9JzrJCLFtY4GAiEAhHoAx%2FBTgf0HUbUtsN3A4FYgvyRwgDaoyNSlJ%2BYOA%2BYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeKWkLjpORf4JZAvCrcA2NShlmkPKSa0N%2F1mvvZpxtc%2FAuKCIFXtSWMBsLEJZ2X2FyXLPMNdGu%2BB4NUkxYzDpn%2B0kzZVXWfaUDjEZG46vv1r%2BxpWeLySgKByAvrIVLcYSL39F1pSLHkrGPVagNbcvNOBwtNxCNA5FHr5ciDFwq%2F7%2FMhSYFobrzzkx6hXepV7xnWe2DJDs22gA4cPXDzgYKOM7S55gc2sslpKVCD06fPsXgKSkDNRUwCLnolDvVJAWPkVDx%2BNdeoBe13TiME5elkcSFUo4p9iIfIGacYZJObBUEFpWJE5DX%2FwMBFt19urIHGU8GWsIlOjY0f8B%2FCBaV3M%2FCfZAUa91uZkgYypdBMWyktM0RirLsu8Vmq8AZ3Jh%2FxVhS2boELZ8R8lFlZTbfyr8t%2FT60P49nDNH5nuXXoNwfbZKqzFD%2FeoB3JfS4EacQUSkuj75GnfmorFFsYYYIW1Wlk9qL0Dp9GNmu6pjscNYpacX1IWV%2BZCh%2BI36ETUJV73%2FFZDka2TJ5P57p8IHsKn%2Fb3viL1hezwFSxF%2B8q4%2F%2FrgL4KDVZhooH%2B%2Btuc4XzOb2%2BDxJrNxUB4GgnkDiX4l8T8oGT%2FME5jwfI7sJ%2BZGWketTxkVNoUKlC6oGT6iAZ%2BuRTbP2s6Xf2D6MOOE2MkGOqUBzHFasgD7V9Ngs4wXRkxLbfBr1ljgKWAVvNHTt8WeN7Yv7pXzcrIzflPVE49WsvMO0g6%2BmmXHfyFyAqgzY6KMWJuwvJfPX2cl%2Bs7Hy1ovC7aBxuD1fr9blFRBTsEDb2KAPQ5uL5jl8LdX%2FjpYKQCjO77TDaRyrdNPKS%2Bj1Q8E9jxszBNOB3ZdT7e0PlTFF9vRtX%2FdZNMJEKGoB0Z89sPZrxtDfbLh&X-Amz-Signature=71d25e09111c682e598fc9f69e47348298886130a75458998d912242108aeff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZOCQFH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBdLuhsWudiYTE96c6WzN26MCixLXWd9JzrJCLFtY4GAiEAhHoAx%2FBTgf0HUbUtsN3A4FYgvyRwgDaoyNSlJ%2BYOA%2BYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIeKWkLjpORf4JZAvCrcA2NShlmkPKSa0N%2F1mvvZpxtc%2FAuKCIFXtSWMBsLEJZ2X2FyXLPMNdGu%2BB4NUkxYzDpn%2B0kzZVXWfaUDjEZG46vv1r%2BxpWeLySgKByAvrIVLcYSL39F1pSLHkrGPVagNbcvNOBwtNxCNA5FHr5ciDFwq%2F7%2FMhSYFobrzzkx6hXepV7xnWe2DJDs22gA4cPXDzgYKOM7S55gc2sslpKVCD06fPsXgKSkDNRUwCLnolDvVJAWPkVDx%2BNdeoBe13TiME5elkcSFUo4p9iIfIGacYZJObBUEFpWJE5DX%2FwMBFt19urIHGU8GWsIlOjY0f8B%2FCBaV3M%2FCfZAUa91uZkgYypdBMWyktM0RirLsu8Vmq8AZ3Jh%2FxVhS2boELZ8R8lFlZTbfyr8t%2FT60P49nDNH5nuXXoNwfbZKqzFD%2FeoB3JfS4EacQUSkuj75GnfmorFFsYYYIW1Wlk9qL0Dp9GNmu6pjscNYpacX1IWV%2BZCh%2BI36ETUJV73%2FFZDka2TJ5P57p8IHsKn%2Fb3viL1hezwFSxF%2B8q4%2F%2FrgL4KDVZhooH%2B%2Btuc4XzOb2%2BDxJrNxUB4GgnkDiX4l8T8oGT%2FME5jwfI7sJ%2BZGWketTxkVNoUKlC6oGT6iAZ%2BuRTbP2s6Xf2D6MOOE2MkGOqUBzHFasgD7V9Ngs4wXRkxLbfBr1ljgKWAVvNHTt8WeN7Yv7pXzcrIzflPVE49WsvMO0g6%2BmmXHfyFyAqgzY6KMWJuwvJfPX2cl%2Bs7Hy1ovC7aBxuD1fr9blFRBTsEDb2KAPQ5uL5jl8LdX%2FjpYKQCjO77TDaRyrdNPKS%2Bj1Q8E9jxszBNOB3ZdT7e0PlTFF9vRtX%2FdZNMJEKGoB0Z89sPZrxtDfbLh&X-Amz-Signature=de3479a68050fd1c08d7b2993b7f5e2c5bcae9f881bca348946a1e5fec35fed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
