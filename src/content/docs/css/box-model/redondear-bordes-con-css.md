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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MMB5QJ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLI65FcZhMM02yIUhtKWdSZcmPeMnhx80lvbyfvfP0awIgYlmoE6rEGCQpTmtZegIsI7NQD4T14zRUILhXLmoQ6pIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDO3mAFYKHmfx8hoEDircA1336PQ1%2FcI6aTtKPnfCqBG7Ty4KC6KeacjbY6QZOto4E7zunmr10Dll0tTLBXqnd3l1gyS41AwzvjBlj5nyaJPShxrcOHeyBeKDlvnJ2O0j2bXHSn%2BaJBbb0nkaB9ZiBfYqTD%2FTY7Y4a8Ve6U5U2pkOWWU0%2BfzgZMg0kXpWzCGHNqPCWXZw2Nl%2BxMuNOId4oY%2FFR02s2n5hJLw12qQSYhy%2FmzgOs4AJR7A4XMXqKLtB4zJwL7Fp0%2FAltRXdhUVIffVtf0v84y8ONj%2Bsb48bcPmi%2FxWrW8pCN0I6lexgLociKL3xQkFdTMCSBRijHFguwqg5y9dGyQg%2FGsryZmyUSdYMVbY98x0pHcRBgO7aUxTYF2lpsTBdcOXyfmG2SNYYeqS8qfQX1ch9ngfGBMOmvzxIjpkEqXYjKvvb4cNtJv7ppkcwowp699Lnphto9s%2FqE3Qw3D4RxpVT0u2vAsT4YliH2hF5hl6uskjU6wwr%2Ff6r3bOrZ2adhJPVXo4FN5SAKCPuI%2FDBlVaOBtShjXVSPotU9B4Hc845C3x2VDhSPhWOrbFY%2BJWyAvtSQ9rIATfULG9nzdUT9CLkA1pxtsIdWgdd9wl%2FWL5sMXR7t7rEFow92CzH0xP5ewnvskaTMJjOiMoGOqUBuNu59p%2F%2Ba%2FDJi6b5PkTeQYqAZJq%2F8aPU7uV%2BYeb3ynKLLntlBauk1zzwxQwDoxheHERMJwow6aUsHFra7RwNUc%2B76n7O3JWg2CkMzj9iC8p%2BDwpCCZiaKqj2CSs048wmwbEywJMOI7efAO34axOXg%2FGTUonEyW6D%2F0y%2FmO997oCphswmp1Sf%2Bg0BDsRRJ0qTWqErRISzz%2BwwugtqHBYoVLRj5awf&X-Amz-Signature=b2069b6f1d4b22163cd5511609472e52e8b4020aec536b543fd0e19cd1316a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MMB5QJ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLI65FcZhMM02yIUhtKWdSZcmPeMnhx80lvbyfvfP0awIgYlmoE6rEGCQpTmtZegIsI7NQD4T14zRUILhXLmoQ6pIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDO3mAFYKHmfx8hoEDircA1336PQ1%2FcI6aTtKPnfCqBG7Ty4KC6KeacjbY6QZOto4E7zunmr10Dll0tTLBXqnd3l1gyS41AwzvjBlj5nyaJPShxrcOHeyBeKDlvnJ2O0j2bXHSn%2BaJBbb0nkaB9ZiBfYqTD%2FTY7Y4a8Ve6U5U2pkOWWU0%2BfzgZMg0kXpWzCGHNqPCWXZw2Nl%2BxMuNOId4oY%2FFR02s2n5hJLw12qQSYhy%2FmzgOs4AJR7A4XMXqKLtB4zJwL7Fp0%2FAltRXdhUVIffVtf0v84y8ONj%2Bsb48bcPmi%2FxWrW8pCN0I6lexgLociKL3xQkFdTMCSBRijHFguwqg5y9dGyQg%2FGsryZmyUSdYMVbY98x0pHcRBgO7aUxTYF2lpsTBdcOXyfmG2SNYYeqS8qfQX1ch9ngfGBMOmvzxIjpkEqXYjKvvb4cNtJv7ppkcwowp699Lnphto9s%2FqE3Qw3D4RxpVT0u2vAsT4YliH2hF5hl6uskjU6wwr%2Ff6r3bOrZ2adhJPVXo4FN5SAKCPuI%2FDBlVaOBtShjXVSPotU9B4Hc845C3x2VDhSPhWOrbFY%2BJWyAvtSQ9rIATfULG9nzdUT9CLkA1pxtsIdWgdd9wl%2FWL5sMXR7t7rEFow92CzH0xP5ewnvskaTMJjOiMoGOqUBuNu59p%2F%2Ba%2FDJi6b5PkTeQYqAZJq%2F8aPU7uV%2BYeb3ynKLLntlBauk1zzwxQwDoxheHERMJwow6aUsHFra7RwNUc%2B76n7O3JWg2CkMzj9iC8p%2BDwpCCZiaKqj2CSs048wmwbEywJMOI7efAO34axOXg%2FGTUonEyW6D%2F0y%2FmO997oCphswmp1Sf%2Bg0BDsRRJ0qTWqErRISzz%2BwwugtqHBYoVLRj5awf&X-Amz-Signature=e02c1c2871e368caf99927ee43af64ee65615e02de06c504a47d6cb570844110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
