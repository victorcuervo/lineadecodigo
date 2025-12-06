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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYWBRAF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3HCBP8NejkcAqHW5cPPzVRaRVfUO5DcK1hV4CmAfeKAiEAnnDXHvbL9psrKDmWYxGwGSysEChKXaOIJD6%2FxZp27yMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDP1fIOmt1q44tv7bByrcA%2FIsv9BUBM4CwLNY7qiTBdxBDGBVfMMKmgN%2FGLV5vDQAr53X9XM0dPPAtNerytWIfhCbhoHa6%2Bhu1MTABhCfC8hpSTgR5Nr09QE2546UcNIuzQdx3Xi5ydzsowO%2FbpF1NQRix%2B9xPWlvsaczWvQdAnnc18CelELGiJ%2BhA4fodIQ0KsFx0DXDFvVOP7mVjdv72FlV8GWGjMsvXIE8o0jT9VQCPeZWhKsgUxOqxRa3aCrGQmKbFAxWalCc4LNjeVsJJy6f7Uhss8R0gqAIOdIBZGxRYwwGuAfOED%2B1%2BNdCXMq6Obd04HxmC8N3HVscpkuRgCcp0Dj2QgYRYAT0cQxYV2qY8TpEANMpaO7JWub%2Fy1cxD9eG%2BNmOcV4l8q5s03N%2FlSadt7C%2BzEITEO9sSx775v%2FWV5LDwXeCVK2cBLJHngMEQprs2YHh4ZKlZTMsth%2FQssiVGnuJdpqp85K%2F6fxJ%2FEPnydDhC2SmpzyVt%2FH3SmagOsV0AcwBmiOMX9ZP7PPmFKDh8QuLuQOePuGFCzx0yep4leI4HOr0ICw4UGdMncLUEUsQgZliZRHzNVQIcVSlNVhysy1VgIqzu19hRTJmw%2FXeAX15WLvEuYBxHzof3dxixLkX0xpLgziLWYXbMP28z8kGOqUBuqiaRMmbvvXoKOTti2PzpyYJ0Ernrl1%2BC6l2Q3UzNFVYi%2FtxK1vpT49dCtSq7%2FF8FZ28GQhS6E7WviYToo3G%2FZd2DEEoKIWwA3x0365X5BoG%2FKyqsfPE%2BwzaYUq6ui51qpUh42WADhDNV0RQy3eXDffXtI2sEJx73wDZI%2Bjes6vmw8g5hdOgmzcBZDwBp5m77UGmCMJdMtf8INI62S%2BspIE%2BJz%2FY&X-Amz-Signature=240e7a2072aad5b4ac32ff2b385688d721046571a6d8c76142f7d8e5072c6bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTYWBRAF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH3HCBP8NejkcAqHW5cPPzVRaRVfUO5DcK1hV4CmAfeKAiEAnnDXHvbL9psrKDmWYxGwGSysEChKXaOIJD6%2FxZp27yMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDP1fIOmt1q44tv7bByrcA%2FIsv9BUBM4CwLNY7qiTBdxBDGBVfMMKmgN%2FGLV5vDQAr53X9XM0dPPAtNerytWIfhCbhoHa6%2Bhu1MTABhCfC8hpSTgR5Nr09QE2546UcNIuzQdx3Xi5ydzsowO%2FbpF1NQRix%2B9xPWlvsaczWvQdAnnc18CelELGiJ%2BhA4fodIQ0KsFx0DXDFvVOP7mVjdv72FlV8GWGjMsvXIE8o0jT9VQCPeZWhKsgUxOqxRa3aCrGQmKbFAxWalCc4LNjeVsJJy6f7Uhss8R0gqAIOdIBZGxRYwwGuAfOED%2B1%2BNdCXMq6Obd04HxmC8N3HVscpkuRgCcp0Dj2QgYRYAT0cQxYV2qY8TpEANMpaO7JWub%2Fy1cxD9eG%2BNmOcV4l8q5s03N%2FlSadt7C%2BzEITEO9sSx775v%2FWV5LDwXeCVK2cBLJHngMEQprs2YHh4ZKlZTMsth%2FQssiVGnuJdpqp85K%2F6fxJ%2FEPnydDhC2SmpzyVt%2FH3SmagOsV0AcwBmiOMX9ZP7PPmFKDh8QuLuQOePuGFCzx0yep4leI4HOr0ICw4UGdMncLUEUsQgZliZRHzNVQIcVSlNVhysy1VgIqzu19hRTJmw%2FXeAX15WLvEuYBxHzof3dxixLkX0xpLgziLWYXbMP28z8kGOqUBuqiaRMmbvvXoKOTti2PzpyYJ0Ernrl1%2BC6l2Q3UzNFVYi%2FtxK1vpT49dCtSq7%2FF8FZ28GQhS6E7WviYToo3G%2FZd2DEEoKIWwA3x0365X5BoG%2FKyqsfPE%2BwzaYUq6ui51qpUh42WADhDNV0RQy3eXDffXtI2sEJx73wDZI%2Bjes6vmw8g5hdOgmzcBZDwBp5m77UGmCMJdMtf8INI62S%2BspIE%2BJz%2FY&X-Amz-Signature=e38647a0423398519de7ce9e16d3b23c802427025eddcc6ba96bafcef0b0a4dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
