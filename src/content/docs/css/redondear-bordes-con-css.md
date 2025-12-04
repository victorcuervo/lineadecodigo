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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXPPIGOY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHbvIqDEwGFqkwfkRiyl0IQTDQu7lBjbdJIynLaqmvyTAiAwu1L0dg8a2GdMfEcnXg1NOYuDiERzwyq1RtM3X9WWSSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMrShTpGtIOhMIu3bFKtwD8HM7X8CpQ2EW7jzzvwXhogZhgf6sQMi75yrhIKbYLm7VPMck6oUf4oj4136riZyHkPmDTjX0ZpqpYARb93QG%2FPCYa0BK%2FF97qrLs1vm26C4iVsfgmaQdb%2BJOipBvFEKjvz6IGXsh3W1DlV0DMASpSXt3cOidIwJhKPQlex8j%2BW%2B%2FZbmNeOOpHwJXA7h3ldci4BReoGghVaUdhZF5eO0%2BIatE4yxj3HlaxiV79AsUVbP25fyJz298SCL%2FdGlQbv3H2SScyaoxvAe9ck5v6hsMpkDkPuXXLmrC6TEjJCRmnIGXvByXkhwtZWi8%2BRex8c3KhzyKTsLhLYXuEwgTR%2F9%2FCLfOAM%2Ba72hRj%2BBWy8nBWYItZZaqBWXQEv9PUmiR5fy%2BkG7Tlzw%2F4otAioSHLksIFB6Yx%2FGgUrwnTLlVPw6sLqHHn0asO8K0LIOYkT5gpXLJo6W9uykGTKKUON%2BrI2jMISCoF2BnUZq8W441UVN8dxZyRyxqs6IgGRifsvriTiApFsmULocHnlyUvYYoXvvIfFFZ7AmCRdWTyd%2B5Ia1ZU63pa%2BoGGwQoEipPZPaABAspnPaVW0KW7qCdwv1DuwT3ZCdchkWh5BO0ikIRfxnJksghXYU%2BSTzqusR%2BZ64w663EyQY6pgHL%2FcC060VziCY55SblTWInrOVjRlyYswZg2mfVe7xM%2FDxXGGGOW%2Flx0BRdismOL5qA7HLHslsET7XeRzTYO%2B5abImNYXrJfTwBiKjE0JI1ROL2TQhIRHs7CVDdseDknGsSOx6vAfD6S1eDXpyaSzGxyq3RIlcOIbUbV%2BNinl6J4HgZ4D6JQS3pVa0J%2F96ymeKiuslv1qPFdxi0hlHDhUyKXoNlwaqe&X-Amz-Signature=f6a95b0d73695962475eb76a51094594ff1c00a1647eca94a9038f6ccea7f4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXPPIGOY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHbvIqDEwGFqkwfkRiyl0IQTDQu7lBjbdJIynLaqmvyTAiAwu1L0dg8a2GdMfEcnXg1NOYuDiERzwyq1RtM3X9WWSSr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMrShTpGtIOhMIu3bFKtwD8HM7X8CpQ2EW7jzzvwXhogZhgf6sQMi75yrhIKbYLm7VPMck6oUf4oj4136riZyHkPmDTjX0ZpqpYARb93QG%2FPCYa0BK%2FF97qrLs1vm26C4iVsfgmaQdb%2BJOipBvFEKjvz6IGXsh3W1DlV0DMASpSXt3cOidIwJhKPQlex8j%2BW%2B%2FZbmNeOOpHwJXA7h3ldci4BReoGghVaUdhZF5eO0%2BIatE4yxj3HlaxiV79AsUVbP25fyJz298SCL%2FdGlQbv3H2SScyaoxvAe9ck5v6hsMpkDkPuXXLmrC6TEjJCRmnIGXvByXkhwtZWi8%2BRex8c3KhzyKTsLhLYXuEwgTR%2F9%2FCLfOAM%2Ba72hRj%2BBWy8nBWYItZZaqBWXQEv9PUmiR5fy%2BkG7Tlzw%2F4otAioSHLksIFB6Yx%2FGgUrwnTLlVPw6sLqHHn0asO8K0LIOYkT5gpXLJo6W9uykGTKKUON%2BrI2jMISCoF2BnUZq8W441UVN8dxZyRyxqs6IgGRifsvriTiApFsmULocHnlyUvYYoXvvIfFFZ7AmCRdWTyd%2B5Ia1ZU63pa%2BoGGwQoEipPZPaABAspnPaVW0KW7qCdwv1DuwT3ZCdchkWh5BO0ikIRfxnJksghXYU%2BSTzqusR%2BZ64w663EyQY6pgHL%2FcC060VziCY55SblTWInrOVjRlyYswZg2mfVe7xM%2FDxXGGGOW%2Flx0BRdismOL5qA7HLHslsET7XeRzTYO%2B5abImNYXrJfTwBiKjE0JI1ROL2TQhIRHs7CVDdseDknGsSOx6vAfD6S1eDXpyaSzGxyq3RIlcOIbUbV%2BNinl6J4HgZ4D6JQS3pVa0J%2F96ymeKiuslv1qPFdxi0hlHDhUyKXoNlwaqe&X-Amz-Signature=7ac05bb5f4b336c29544f4c21da659d22e79214c981449b4d41195b3fea4f77d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
