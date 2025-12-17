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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TKFY4R6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA41meRp8W7WAmrQkFw2ynIdyxaha7A%2BCTfk9Mzj8D5FAiA0FACAlOTcr8g2riMezF0iKMYaRc8wDn%2BAvyOo4hMorCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXd56onoca19tbXNSKtwDD838bvtdFdXy1gFZHLTFYh%2BXUYX5Uh2PNgcSa0HcvsfDB0RbsTLG66%2BFdrua8EDHBTyWK53ETcCS7s2ZBu6G5hRi2UGWL7qS%2Fs2B4YrU%2FxRCn7i%2B63DkIj%2Bashypeoj%2BF3exRhrObWXMXLi11kV2v171jZEVWrjj74Ccp3RwKTZIKEiYUk6qQk2p4HnLKPe4JYtodwVf%2B5S8jQqVkLRyyzf8%2Fs9%2BixYbGXQqOcOwUPci2E22zMQRn0Czd250ZVBjRldui%2F9%2FSX8x%2BpCdLXGhubjvQojU4RcvnV4YdM5lrJMDgKAR6if%2BWN6pMEJpUbEPlNzT2z%2FwjVHd8GLC%2BdcXr4w%2F6WHtmGMTQes25MMcavDzMSXwKefzQ4ai%2BKaKd3tOOF8ymOrphggr7ZpciGWBF%2BTM10aLIg87sEF%2BwTCcbxzdWYUUbQ5bSaqAYzNW2b%2Bktyucu9oXoTP5EcI7aNsx40IQfB5vk%2BVHpz3pwLFoulzklr2oPN8VAsyse3WWxYd95z9v1y5iXol4CKw31CZI93bO1jr840CG47fSxPAg9xEfHoMGwg16Llian%2BWs80NBcvPFjAliBwgNLYvr4ZINCwsg4gTbDw8YBZv%2FK27pMZpOE6Xi63caLW8bElIwg6CLygY6pgGDwyFJwCTNYEjKGQbkNt8bnCcZjnJWQ9mRi8zdYZBuWxMMyBtDhlBeNordQK9249VCj353CZBY0WPK46A%2Bb07%2FGJ9h15GVBkjpxBSvrtMF4lh3emegZHttAYkYkSk2y0Q42t%2BObcKjVT21jmGuS6RvcrJ6jf8g6lIiVClfqEkIsvtzhV5feo13IXZ4BDOdvQiyq7a4xDwQGeqY1kUdR6qYctrAxf3g&X-Amz-Signature=2e9a76235727c1de930b4895734cc0b6e90f2308688d9f39c8d59614544389fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TKFY4R6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA41meRp8W7WAmrQkFw2ynIdyxaha7A%2BCTfk9Mzj8D5FAiA0FACAlOTcr8g2riMezF0iKMYaRc8wDn%2BAvyOo4hMorCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXd56onoca19tbXNSKtwDD838bvtdFdXy1gFZHLTFYh%2BXUYX5Uh2PNgcSa0HcvsfDB0RbsTLG66%2BFdrua8EDHBTyWK53ETcCS7s2ZBu6G5hRi2UGWL7qS%2Fs2B4YrU%2FxRCn7i%2B63DkIj%2Bashypeoj%2BF3exRhrObWXMXLi11kV2v171jZEVWrjj74Ccp3RwKTZIKEiYUk6qQk2p4HnLKPe4JYtodwVf%2B5S8jQqVkLRyyzf8%2Fs9%2BixYbGXQqOcOwUPci2E22zMQRn0Czd250ZVBjRldui%2F9%2FSX8x%2BpCdLXGhubjvQojU4RcvnV4YdM5lrJMDgKAR6if%2BWN6pMEJpUbEPlNzT2z%2FwjVHd8GLC%2BdcXr4w%2F6WHtmGMTQes25MMcavDzMSXwKefzQ4ai%2BKaKd3tOOF8ymOrphggr7ZpciGWBF%2BTM10aLIg87sEF%2BwTCcbxzdWYUUbQ5bSaqAYzNW2b%2Bktyucu9oXoTP5EcI7aNsx40IQfB5vk%2BVHpz3pwLFoulzklr2oPN8VAsyse3WWxYd95z9v1y5iXol4CKw31CZI93bO1jr840CG47fSxPAg9xEfHoMGwg16Llian%2BWs80NBcvPFjAliBwgNLYvr4ZINCwsg4gTbDw8YBZv%2FK27pMZpOE6Xi63caLW8bElIwg6CLygY6pgGDwyFJwCTNYEjKGQbkNt8bnCcZjnJWQ9mRi8zdYZBuWxMMyBtDhlBeNordQK9249VCj353CZBY0WPK46A%2Bb07%2FGJ9h15GVBkjpxBSvrtMF4lh3emegZHttAYkYkSk2y0Q42t%2BObcKjVT21jmGuS6RvcrJ6jf8g6lIiVClfqEkIsvtzhV5feo13IXZ4BDOdvQiyq7a4xDwQGeqY1kUdR6qYctrAxf3g&X-Amz-Signature=7a983123cbbc50eb0e455d83a3076a418849da456ecb460f229a185be6006c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
