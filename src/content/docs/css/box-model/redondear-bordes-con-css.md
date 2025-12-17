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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4BJWLK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bx4%2FxmV5Q4qyOVp%2BYwhf%2Bdg8Zasxgm0P%2BTF15NbctNAIhAJfZ3ZVc18AU8p5waTkgCR1Ov6dLPPb2nKJM4xZr9UaPKv8DCHQQABoMNjM3NDIzMTgzODA1IgxM1NP73kAWx82fP3Uq3APbx7icgYdP7Q%2FmcEBR0X30ofRIFj%2BuK3spGbOywjaCo0Cnf1wGCnd1Es90mLG%2FHnTHJlb6bPM8TNeG1JZnKhs5LNmg7RJTFxAB%2FYmv0aNQfJs4cn1PnNt%2B3qRdqXFUwtlp18RLvaXlg8j6OvoTO%2FWRebA32%2BEg2BXyG7SW3tfYTuH0Qvi8ycQr2PeyaKyxu6IJ6ifwYpPTMadEuMULcau8WWUFKXBVX%2BtnbUGe0tflM9r%2FYNGAwT8uH7FoYpzLEuQ%2FY24I8UGn05weWUlrZ7oKj4Mggvfkc8Wup2W2FywStm%2FP1mAUobmtjQUXU0mFzUc8SeMby45VJjylFQBvtla5k7n3jA%2BcLzwSxmfMInusY4nyBQHynF6XWP%2B9KKNyMfirfZtSKHERlk2qSSCAAC7PCz5ReNAgC2LJ7QB6mbNPqFHCAiID7RsL855mqbkuPnimkqlU57yA7hgc9FJDzlb81uI6lOg5lpLuNVb2wjZxJPnSXYCBZ7I3cQu%2BRBYTxpbiskAx38btnydo1UaEtHgLCDMuhCStkkUTq8uShD002gH9SZxYPwLzeD0NyoTVfdJ7cKBshtZ40RqiiY6OXCewoLHkPQvijqoaPN1wwsv6wHzdS%2BQdFGlGX03SCDDAsojKBjqkAUson108%2FVPZbEYZYA1PB72GaJI%2FRE9b4OJx%2BMfzxL%2FJiFE14%2FscksQse1s%2BFGc7RqAR4PpBvks0lG0Tl%2Bb4v%2FQ2EzpkAqqlCzbqG20QkYKovZh5ifvDCUdZLq%2BSqHsQ1SgXT5manGU34RicW3o5ywODMYCCUP5m%2BgEP1G9NSu7e2p82Rmqz%2FCJQiWpTLkLFPjj6xCBVIoYdVu%2BS20MSX2OkokRB&X-Amz-Signature=848dd28fef9c1415b992607c8f9ee40b50f5a29991d47d9b2cff0c155225d4c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4BJWLK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2Bx4%2FxmV5Q4qyOVp%2BYwhf%2Bdg8Zasxgm0P%2BTF15NbctNAIhAJfZ3ZVc18AU8p5waTkgCR1Ov6dLPPb2nKJM4xZr9UaPKv8DCHQQABoMNjM3NDIzMTgzODA1IgxM1NP73kAWx82fP3Uq3APbx7icgYdP7Q%2FmcEBR0X30ofRIFj%2BuK3spGbOywjaCo0Cnf1wGCnd1Es90mLG%2FHnTHJlb6bPM8TNeG1JZnKhs5LNmg7RJTFxAB%2FYmv0aNQfJs4cn1PnNt%2B3qRdqXFUwtlp18RLvaXlg8j6OvoTO%2FWRebA32%2BEg2BXyG7SW3tfYTuH0Qvi8ycQr2PeyaKyxu6IJ6ifwYpPTMadEuMULcau8WWUFKXBVX%2BtnbUGe0tflM9r%2FYNGAwT8uH7FoYpzLEuQ%2FY24I8UGn05weWUlrZ7oKj4Mggvfkc8Wup2W2FywStm%2FP1mAUobmtjQUXU0mFzUc8SeMby45VJjylFQBvtla5k7n3jA%2BcLzwSxmfMInusY4nyBQHynF6XWP%2B9KKNyMfirfZtSKHERlk2qSSCAAC7PCz5ReNAgC2LJ7QB6mbNPqFHCAiID7RsL855mqbkuPnimkqlU57yA7hgc9FJDzlb81uI6lOg5lpLuNVb2wjZxJPnSXYCBZ7I3cQu%2BRBYTxpbiskAx38btnydo1UaEtHgLCDMuhCStkkUTq8uShD002gH9SZxYPwLzeD0NyoTVfdJ7cKBshtZ40RqiiY6OXCewoLHkPQvijqoaPN1wwsv6wHzdS%2BQdFGlGX03SCDDAsojKBjqkAUson108%2FVPZbEYZYA1PB72GaJI%2FRE9b4OJx%2BMfzxL%2FJiFE14%2FscksQse1s%2BFGc7RqAR4PpBvks0lG0Tl%2Bb4v%2FQ2EzpkAqqlCzbqG20QkYKovZh5ifvDCUdZLq%2BSqHsQ1SgXT5manGU34RicW3o5ywODMYCCUP5m%2BgEP1G9NSu7e2p82Rmqz%2FCJQiWpTLkLFPjj6xCBVIoYdVu%2BS20MSX2OkokRB&X-Amz-Signature=16cb5922a35bce6c47cd8ae61f9768bcfb10b90907b13d8f5a6189fc61f9b657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
