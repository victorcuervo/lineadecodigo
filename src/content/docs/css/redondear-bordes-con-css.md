---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YXYH3JB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIF29p2%2B0%2FrFASFJXnbkYlmYvqbBy6bR5208t3DNhpgd1AiAjDbDYrirzcw7lt4vgNEAd%2BJB8cN0T5%2FQBX%2FfNo343Qir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMfOE9Y7ipg42dYNWiKtwD33fvs88XeOjXxFBB1Iw2YV2Di4asr1Mhn2n7SIo8P0OEtgUOgM2sAsYuAzMDG%2BlHFuiSyy1ZCetfUg4bdQr2Yvn0NAL%2FEvIp2wKEtuG1OK766UDVrAN0iZv%2BQ3960DTN4jMWt77Kcvsjhc6BYvcLNsw8im0YjPWrjCrm5vw37Tqx9D28RQnsPs88QENk4dqwXQ%2FwgQhCBNN9H9XPSWO3yxUXwbUpuu3PKTkGQ4iEMcGQLfLVFI9MNMxM8toel2RktPR2209l1sLv0B9McHsiMuxdEXDuW2hUOvaGlHDZQ%2B2d09%2BFKqvSDtO23eC2VnPqcsUNj6qMc8aqXzkRpeWLzKSNu2exJ7jsFZMufeTqjTP47BOgbzUbgr121DIHEFpiLo1DZsu7xAfikrjdWLgL1WIFS5UBn72G4Uof6jBRqF7Rs%2BHt0WCOaeAuuLhUd8TDmc72xLoC%2Bv7vUZEnQYachezyzpytSjEAiQqTozfTew1nT%2FMwpdNpzy%2FQxXZj7eh3rI8LfMC4TluYKMz6xHTcdjcdWYwY3zjcUfUO0IURDwQUDp8DMbJmlc5L9qrFPbEA5KD5if5fVnk7iC3%2F85ccrdL1wv1BUFeUu7TpUJ245EskjcppPI0%2BEye74Csw7tTDyQY6pgFYOzkycY1si1OKE5EXanJbs75%2BFRKAaXnYFsOR%2Fy82XbP3IdiDvnyfEQ3cjjm7aLeQqbeXltjuBbC3hwkbij29Efo3%2B4XnP6OUN0Q0Wa6p7C4P6voImZ%2Baw4SHv%2FuyGwTj0qk%2BrJV3KBVWLI%2FTZvO%2FG3G4AzyOA3A6A2%2FnNfvgxEH06KMNVwrc1YHWjONJYYJIG0mKrstpx1fXdns35WJKdQZQiUNB&X-Amz-Signature=ca4799f932efc7b7924a5b2360906bbbda3b5680da11d4b123adb5f6ce64711d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YXYH3JB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIF29p2%2B0%2FrFASFJXnbkYlmYvqbBy6bR5208t3DNhpgd1AiAjDbDYrirzcw7lt4vgNEAd%2BJB8cN0T5%2FQBX%2FfNo343Qir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMfOE9Y7ipg42dYNWiKtwD33fvs88XeOjXxFBB1Iw2YV2Di4asr1Mhn2n7SIo8P0OEtgUOgM2sAsYuAzMDG%2BlHFuiSyy1ZCetfUg4bdQr2Yvn0NAL%2FEvIp2wKEtuG1OK766UDVrAN0iZv%2BQ3960DTN4jMWt77Kcvsjhc6BYvcLNsw8im0YjPWrjCrm5vw37Tqx9D28RQnsPs88QENk4dqwXQ%2FwgQhCBNN9H9XPSWO3yxUXwbUpuu3PKTkGQ4iEMcGQLfLVFI9MNMxM8toel2RktPR2209l1sLv0B9McHsiMuxdEXDuW2hUOvaGlHDZQ%2B2d09%2BFKqvSDtO23eC2VnPqcsUNj6qMc8aqXzkRpeWLzKSNu2exJ7jsFZMufeTqjTP47BOgbzUbgr121DIHEFpiLo1DZsu7xAfikrjdWLgL1WIFS5UBn72G4Uof6jBRqF7Rs%2BHt0WCOaeAuuLhUd8TDmc72xLoC%2Bv7vUZEnQYachezyzpytSjEAiQqTozfTew1nT%2FMwpdNpzy%2FQxXZj7eh3rI8LfMC4TluYKMz6xHTcdjcdWYwY3zjcUfUO0IURDwQUDp8DMbJmlc5L9qrFPbEA5KD5if5fVnk7iC3%2F85ccrdL1wv1BUFeUu7TpUJ245EskjcppPI0%2BEye74Csw7tTDyQY6pgFYOzkycY1si1OKE5EXanJbs75%2BFRKAaXnYFsOR%2Fy82XbP3IdiDvnyfEQ3cjjm7aLeQqbeXltjuBbC3hwkbij29Efo3%2B4XnP6OUN0Q0Wa6p7C4P6voImZ%2Baw4SHv%2FuyGwTj0qk%2BrJV3KBVWLI%2FTZvO%2FG3G4AzyOA3A6A2%2FnNfvgxEH06KMNVwrc1YHWjONJYYJIG0mKrstpx1fXdns35WJKdQZQiUNB&X-Amz-Signature=7030fd6ec6dd7fd00325e91badf9dcc0159a68ef715d7f7c4b4d35febc495a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
