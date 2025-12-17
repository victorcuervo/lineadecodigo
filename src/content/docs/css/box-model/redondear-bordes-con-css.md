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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LUY5TD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzlDrBclnjy%2FRctAascfpWzArpmiA4kCvG%2BaiUs9FFDAIhAJpFOrmFIriyzY7MvBSl%2Ft6BEwXsjVqYklWnOsOceIlNKv8DCHsQABoMNjM3NDIzMTgzODA1Igz%2F%2Fe87KTQKL7xNLpUq3AOzfh7lRPL67ZYWLjDO5GXFm%2Frd2%2Bxjwv0yLoikAk84rACfVnATcBHGu3SQ6MIAsBi7jJNougiZJGCJUMkzcBdc25f2lkr64uMli2M7dk09kzF1mxBGN%2Fak5Xvc%2BzDHix3uBWpWqk9N1BREMqbIKkDhy8WAoZR8vCsIWuVwttpZLj6Qtxam%2FdH0CY6o2iGjiP3vI5%2Fo4BGarqYFpsyGXMolmA6%2BNwUpLid3t26tIrF%2BdlaVTC2y3QLYC048K69JKzhegk%2FO%2BWazEkib7iMbYkjEH57222PgQ6TIt9%2FijmLuUlUnspheF83hCE25Gpvk%2FPjFCsUWFXmupiLxuW7W%2FHFJ7BuZt8tC4FL95%2FFu%2F0qOSGpRLtZKeHPvyNE2a9EVkFOXfD4VosHV9J6Df%2BXRw%2BPBaSjTxYiiqjUnfK9S8bP9r9HO1k%2FsOyz1SfVYpuvpfr1EVhaqyx%2BYqxIcNQMBPqlohdhBiRJyuzTerwqrpZcxx2o6fboIo9A9P6bd1I0m3i3w79gdbnWO4R%2Fbpa1ewfIQnB6%2BQO1KIeAHyr1t1AyYcAcGPW1U6vlCFN4H8We%2FYTBv3KTBFXGBQO1z8cOXlF8PawciJJcPMOBD%2BEOEcADmT0xFSEWU5f8UyC2G6TDd8InKBjqkAZfGQn174EhEURLSeGN50Pst3c4SBQRF6teXqq27yKwQenvii7u%2BBS9jcaQzCZic7yEGRspvYVPLoQYrEL128yTdYzx6mDnEu1hVl2xTCLyT4uB0HPq5Zx4UpDz7Ep4cB24AhsFd8%2F1RUjsaWYXtPQmpf8eUklIGfH42cykBqVKg3OHA2auV873BTlzmP6yY6nlbKgeQz8nYUvtwMldQiigpLvgB&X-Amz-Signature=0c80f2ed3840634c5b14bcdd8a95826b17329b1b6ad978ff7fce152a58932e3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LUY5TD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzlDrBclnjy%2FRctAascfpWzArpmiA4kCvG%2BaiUs9FFDAIhAJpFOrmFIriyzY7MvBSl%2Ft6BEwXsjVqYklWnOsOceIlNKv8DCHsQABoMNjM3NDIzMTgzODA1Igz%2F%2Fe87KTQKL7xNLpUq3AOzfh7lRPL67ZYWLjDO5GXFm%2Frd2%2Bxjwv0yLoikAk84rACfVnATcBHGu3SQ6MIAsBi7jJNougiZJGCJUMkzcBdc25f2lkr64uMli2M7dk09kzF1mxBGN%2Fak5Xvc%2BzDHix3uBWpWqk9N1BREMqbIKkDhy8WAoZR8vCsIWuVwttpZLj6Qtxam%2FdH0CY6o2iGjiP3vI5%2Fo4BGarqYFpsyGXMolmA6%2BNwUpLid3t26tIrF%2BdlaVTC2y3QLYC048K69JKzhegk%2FO%2BWazEkib7iMbYkjEH57222PgQ6TIt9%2FijmLuUlUnspheF83hCE25Gpvk%2FPjFCsUWFXmupiLxuW7W%2FHFJ7BuZt8tC4FL95%2FFu%2F0qOSGpRLtZKeHPvyNE2a9EVkFOXfD4VosHV9J6Df%2BXRw%2BPBaSjTxYiiqjUnfK9S8bP9r9HO1k%2FsOyz1SfVYpuvpfr1EVhaqyx%2BYqxIcNQMBPqlohdhBiRJyuzTerwqrpZcxx2o6fboIo9A9P6bd1I0m3i3w79gdbnWO4R%2Fbpa1ewfIQnB6%2BQO1KIeAHyr1t1AyYcAcGPW1U6vlCFN4H8We%2FYTBv3KTBFXGBQO1z8cOXlF8PawciJJcPMOBD%2BEOEcADmT0xFSEWU5f8UyC2G6TDd8InKBjqkAZfGQn174EhEURLSeGN50Pst3c4SBQRF6teXqq27yKwQenvii7u%2BBS9jcaQzCZic7yEGRspvYVPLoQYrEL128yTdYzx6mDnEu1hVl2xTCLyT4uB0HPq5Zx4UpDz7Ep4cB24AhsFd8%2F1RUjsaWYXtPQmpf8eUklIGfH42cykBqVKg3OHA2auV873BTlzmP6yY6nlbKgeQz8nYUvtwMldQiigpLvgB&X-Amz-Signature=2f0f6e7c0650b0247a30fe987ae4855242ac16473125966e98e7f984a5737a52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
