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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCXMUAJ6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbnb2GbzpLA5orV9xHSmYcjod3yKQyiZxsbI23XK%2B3UAiBJjKj8pbyXebstTxedbutiAQLrkHFaLZOUmdvkOL5nsSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMHMp5%2FEVBm5wO9I7PKtwDLVw6gQjG6a0kmf61lV8nX%2FO%2B%2FJR8hK1XIUEvY4TIhboCVKjaOuUJuTwhH3Zc7obYPolu78x%2FpTCzlTTVChfa7XdvUMA5uvz43SPQlmfjOE68wBRL5Tz5paDdoAQw%2FNLWTGn3TG8mcWRvdpeGlOu%2FrJiewaA4I45b718D0uy45V86d2a5OnPVCKob0ZPHBodr0%2BM7TYvsPwv8RYoEsUHz0W0UPVpHJfSunbqtMxwmeAah2ZsbqbqlH0dCZRJVIC47pmXY9o6nrvhcxBi%2B8bA5J%2Fs%2F657yj78JaNQ5XHumBxfVEAh6B8BPR6V2O9%2FfyIY9Ko5Sy5OpZzyXh2PwRa7DllEquOQlLFUxM%2BZvtarneRZk1If65sT%2FOeMcXIH47k7PJkISEBeBgtYIqfZg3TBSdZVsElKckfoWqII9WqcXVxOWeEDf1x9Q7royiO6us57lIaozC7v4rKZcZWrbU1IgAJs9uxFtBePIx9INnTKIgcTKkIZ6u4fpKRp90oQsGPPIc6VZc6l1RnKpGPT2bGMWai%2BFONL%2BbDz4q%2BGoRELSO2gR45kMtMWp1noyXhb8ckr4tDaSh8dcPP2H6LMGi9fnuUGEhncSO3Kk9PoHtUdry5GYQr8PozcOxQ8cOGoww6zJyQY6pgHjVTB6dgaO4ocz512mhJOXCEEWeiA3bquWSXrxVnT1sC3cRd6RKX7gZ5FSIWFLpkADxdeWCMRtbktDnM7SsybRbT5JADPcUV6SVBYCIBGvXhKegjjj7glHPobZ0rdZwR9KNsopN%2FwoMnwUp4%2FORAHfl%2Bbdi9KwtwBqIWxxg8PVEnpRf5Q8nuGq4tCsJPFqlAacPz60U3I44SinGj2VCLJYXbcdrOQ7&X-Amz-Signature=43292057486f1c70223bc983d65e85fcd6d540de35d25a2a9e5205e499aa4355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCXMUAJ6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbnb2GbzpLA5orV9xHSmYcjod3yKQyiZxsbI23XK%2B3UAiBJjKj8pbyXebstTxedbutiAQLrkHFaLZOUmdvkOL5nsSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMHMp5%2FEVBm5wO9I7PKtwDLVw6gQjG6a0kmf61lV8nX%2FO%2B%2FJR8hK1XIUEvY4TIhboCVKjaOuUJuTwhH3Zc7obYPolu78x%2FpTCzlTTVChfa7XdvUMA5uvz43SPQlmfjOE68wBRL5Tz5paDdoAQw%2FNLWTGn3TG8mcWRvdpeGlOu%2FrJiewaA4I45b718D0uy45V86d2a5OnPVCKob0ZPHBodr0%2BM7TYvsPwv8RYoEsUHz0W0UPVpHJfSunbqtMxwmeAah2ZsbqbqlH0dCZRJVIC47pmXY9o6nrvhcxBi%2B8bA5J%2Fs%2F657yj78JaNQ5XHumBxfVEAh6B8BPR6V2O9%2FfyIY9Ko5Sy5OpZzyXh2PwRa7DllEquOQlLFUxM%2BZvtarneRZk1If65sT%2FOeMcXIH47k7PJkISEBeBgtYIqfZg3TBSdZVsElKckfoWqII9WqcXVxOWeEDf1x9Q7royiO6us57lIaozC7v4rKZcZWrbU1IgAJs9uxFtBePIx9INnTKIgcTKkIZ6u4fpKRp90oQsGPPIc6VZc6l1RnKpGPT2bGMWai%2BFONL%2BbDz4q%2BGoRELSO2gR45kMtMWp1noyXhb8ckr4tDaSh8dcPP2H6LMGi9fnuUGEhncSO3Kk9PoHtUdry5GYQr8PozcOxQ8cOGoww6zJyQY6pgHjVTB6dgaO4ocz512mhJOXCEEWeiA3bquWSXrxVnT1sC3cRd6RKX7gZ5FSIWFLpkADxdeWCMRtbktDnM7SsybRbT5JADPcUV6SVBYCIBGvXhKegjjj7glHPobZ0rdZwR9KNsopN%2FwoMnwUp4%2FORAHfl%2Bbdi9KwtwBqIWxxg8PVEnpRf5Q8nuGq4tCsJPFqlAacPz60U3I44SinGj2VCLJYXbcdrOQ7&X-Amz-Signature=6aa29e4b190589087556843a5503d9fd0e3f9f396762e36ec0c91db1dc67892a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
