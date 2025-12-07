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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KN7NCK2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtGa9uvFDjcO0PilUWwCU4wd1gerWnLdjZc%2BTalkJy6AIgNI58VCnJjHvBf5X1kWTirzccqb64Y2rnMEOiqlFsjz4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOlyx8Ut%2FAo%2BkKINSrcA7QsDcX4RJWnoPJ1hdjeryCVIoADkZj71DdqIR2Y6NflmeaahDIbyFK%2FHEQJhz8nv6vyQ7PSpT499TruF8VNWNP7V4buNnDDdoaQYzfQt92e%2FQSx5PJMR2c%2FrKADDRbbAT8Q67TWpsRInny9%2FsHOg07tMplaP6JWYQLctt5Mzt91AoXXTOfDR0HD%2BrlJqoWbAmPH5KEY3Le0vFNwnfk7QWFmAgpR6D1IW5m6VTrrI%2FcPUBNtIBJG6J6t11IXqEhmiGrOtwxxJ5t1gW7mj2XHxtyzWCSSJgNWuiRy9zl07WyFdmtSS3%2FlLaGnkRhBMQvAd8WDYhbVK15at98o689qiHfoQO%2BiO%2FSwyUJx1KAGIHOcaiHu6D3JZWcjXZMw4rB84Dacx6qma66TJqYXbX2X5SCXKyDuaoaLTki0VyJrwkC37pTbAumnlHKCCO0gMD8OeZVO%2BznrNFDX2HGNsQt5E%2BQhggNllxEZkqWugl%2BC3CXgA96EIOVmFKf6nxT0wErRuHlGiPqBU76vsGKzTGmRrOaKGVw3PbcoblmjNKbuFpmg74E7quZhMpsOj7qdmIw3aRdPADFpo%2B9LyFboxvtmu%2F1MB7ZCcu9ZJ7mEUuvjAjIV9%2FBkrCOqMSwvEPoKMNig1MkGOqUB1b%2BHo%2Buz7PUTT%2FQEm1BCjVilqRos%2Fsvwnj7zL8u8lJ%2Fson2QWdXUt2tOO4fBLMlxqJjag7mm3OkeRMiIlP8RvcARPwETIX5ba%2FnwUnu4LaL5Ak%2FHy4D%2FEFQVdUdIZ7vBCJ5g7yADAenSX9FZFRny%2B%2BFFDO8vn51DzOT%2F%2FH7FkphaxvG1XDK1ftVJt1RF4bIQ%2BDXin2JrrGNKontmPPkOL7ZNfZaT&X-Amz-Signature=b2a2b5a319a97ea49410108de3584be9aae68f054981617583f665058b17b8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KN7NCK2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtGa9uvFDjcO0PilUWwCU4wd1gerWnLdjZc%2BTalkJy6AIgNI58VCnJjHvBf5X1kWTirzccqb64Y2rnMEOiqlFsjz4qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPOlyx8Ut%2FAo%2BkKINSrcA7QsDcX4RJWnoPJ1hdjeryCVIoADkZj71DdqIR2Y6NflmeaahDIbyFK%2FHEQJhz8nv6vyQ7PSpT499TruF8VNWNP7V4buNnDDdoaQYzfQt92e%2FQSx5PJMR2c%2FrKADDRbbAT8Q67TWpsRInny9%2FsHOg07tMplaP6JWYQLctt5Mzt91AoXXTOfDR0HD%2BrlJqoWbAmPH5KEY3Le0vFNwnfk7QWFmAgpR6D1IW5m6VTrrI%2FcPUBNtIBJG6J6t11IXqEhmiGrOtwxxJ5t1gW7mj2XHxtyzWCSSJgNWuiRy9zl07WyFdmtSS3%2FlLaGnkRhBMQvAd8WDYhbVK15at98o689qiHfoQO%2BiO%2FSwyUJx1KAGIHOcaiHu6D3JZWcjXZMw4rB84Dacx6qma66TJqYXbX2X5SCXKyDuaoaLTki0VyJrwkC37pTbAumnlHKCCO0gMD8OeZVO%2BznrNFDX2HGNsQt5E%2BQhggNllxEZkqWugl%2BC3CXgA96EIOVmFKf6nxT0wErRuHlGiPqBU76vsGKzTGmRrOaKGVw3PbcoblmjNKbuFpmg74E7quZhMpsOj7qdmIw3aRdPADFpo%2B9LyFboxvtmu%2F1MB7ZCcu9ZJ7mEUuvjAjIV9%2FBkrCOqMSwvEPoKMNig1MkGOqUB1b%2BHo%2Buz7PUTT%2FQEm1BCjVilqRos%2Fsvwnj7zL8u8lJ%2Fson2QWdXUt2tOO4fBLMlxqJjag7mm3OkeRMiIlP8RvcARPwETIX5ba%2FnwUnu4LaL5Ak%2FHy4D%2FEFQVdUdIZ7vBCJ5g7yADAenSX9FZFRny%2B%2BFFDO8vn51DzOT%2F%2FH7FkphaxvG1XDK1ftVJt1RF4bIQ%2BDXin2JrrGNKontmPPkOL7ZNfZaT&X-Amz-Signature=d499e6cbfc91f0a4dead9677d87de8444bf3d877f63ef0a8ce82b15702b85ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
