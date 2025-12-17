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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA6P5CLS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG79bjN4g8kq8rhzQVugoFHhPr70kyL6Eum46Dp67H3LAiEAn3JKr7UQipNqkjtwsXs4sgdk2CM5E5tKotBQD8miYMMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEhcp%2B8ZaLSYD1iQxyrcA3uFzhJ63SuZlhkGrd8XAXVLN6fYIWWTy7x%2Fhy61NP9mFQaAA8poY71m15wB%2F0Bwpd%2BZhKUE5kACxO8cDM7vQMxcFggl3eeg%2B8ZSkBGW8%2FXEJjrSIjhTuojQlOdZOksdOcIVFgBavcs33vV4Bn1HtfKCiJtitUdYDCifKLkb1Fo1XNweC3DaUC9tkJBKqi4EhbSzu2bXXlECii1X%2BbzlrhVKTpIbg%2BCzOulf3Kdf7fm%2FvwCe3jv6BgZBUi6QrZXud28Whr2pMr3rpHrNfCnqnupTO0vRGPSE0mVMECD9kCA5q6b9tbq4%2Fh26NgGgmCvCP85b39yb5y%2FL%2BucEjeJe6EvKcAcKL%2BmrEg9nU4NNmXif49xbuuwOYpFPAXr0s65eyk8tBv6F%2Fd6jB3G2ZNwlS1jf5Y%2BQDJ7%2FA74XMx6ww7PG%2FOfMB37BgqStw6gGjJd1uHJYt4om9aVxISjvc330QnzNcCn09Gnc23AMkJGGM0fRdW9vhM74e1SrPbKb0JdS6AwvdLRFU5GE%2FhdNKqM7YRLNrUzxBzcnns9C%2BMWIH8EurV1F9Gkut%2FpUV6oWj3PdjS679c2lOo4btq4T16xhUBlFg3iXiSYQ%2BFIzGxPiaMOVBnye6In%2FWO3WHDe%2BMJnOiMoGOqUB41Bp%2FWzLqvgN4cxaMthxvsWg8NFeokwtoTFbmPF0gIxxNgAu5xdbV7eGi%2BmWUUs5xGf4grb0BRJXVNR2VX30uz4DamQssw1xo%2BT14YOu8tcQAE3HQz5cf8Xz8l0yYhcKmiDlApd%2Fx3gF8WHwSqSFsV%2F7nQasZE9x5sl5xCSoFb06RXlwwBoseJmaeqbUReFQM%2FQr3XMjIYAwGZu9DxZp7IImKemW&X-Amz-Signature=f935991ce72faba1547c53007d81c4b72b36de2cf05874ee0bcddcc45ec57f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA6P5CLS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG79bjN4g8kq8rhzQVugoFHhPr70kyL6Eum46Dp67H3LAiEAn3JKr7UQipNqkjtwsXs4sgdk2CM5E5tKotBQD8miYMMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEhcp%2B8ZaLSYD1iQxyrcA3uFzhJ63SuZlhkGrd8XAXVLN6fYIWWTy7x%2Fhy61NP9mFQaAA8poY71m15wB%2F0Bwpd%2BZhKUE5kACxO8cDM7vQMxcFggl3eeg%2B8ZSkBGW8%2FXEJjrSIjhTuojQlOdZOksdOcIVFgBavcs33vV4Bn1HtfKCiJtitUdYDCifKLkb1Fo1XNweC3DaUC9tkJBKqi4EhbSzu2bXXlECii1X%2BbzlrhVKTpIbg%2BCzOulf3Kdf7fm%2FvwCe3jv6BgZBUi6QrZXud28Whr2pMr3rpHrNfCnqnupTO0vRGPSE0mVMECD9kCA5q6b9tbq4%2Fh26NgGgmCvCP85b39yb5y%2FL%2BucEjeJe6EvKcAcKL%2BmrEg9nU4NNmXif49xbuuwOYpFPAXr0s65eyk8tBv6F%2Fd6jB3G2ZNwlS1jf5Y%2BQDJ7%2FA74XMx6ww7PG%2FOfMB37BgqStw6gGjJd1uHJYt4om9aVxISjvc330QnzNcCn09Gnc23AMkJGGM0fRdW9vhM74e1SrPbKb0JdS6AwvdLRFU5GE%2FhdNKqM7YRLNrUzxBzcnns9C%2BMWIH8EurV1F9Gkut%2FpUV6oWj3PdjS679c2lOo4btq4T16xhUBlFg3iXiSYQ%2BFIzGxPiaMOVBnye6In%2FWO3WHDe%2BMJnOiMoGOqUB41Bp%2FWzLqvgN4cxaMthxvsWg8NFeokwtoTFbmPF0gIxxNgAu5xdbV7eGi%2BmWUUs5xGf4grb0BRJXVNR2VX30uz4DamQssw1xo%2BT14YOu8tcQAE3HQz5cf8Xz8l0yYhcKmiDlApd%2Fx3gF8WHwSqSFsV%2F7nQasZE9x5sl5xCSoFb06RXlwwBoseJmaeqbUReFQM%2FQr3XMjIYAwGZu9DxZp7IImKemW&X-Amz-Signature=ca399a063e14bbdb3baaad8b60916ddd71b871610ad826ff46ec1a46377a5f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
