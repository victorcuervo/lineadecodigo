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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFGLSRZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxkLpqJv6sTqb83jKCBYPLHYF2OZYxeUGxvj7NC%2BXTGAiEAsnZGpsRWwJ0Ul1Lffy3wyetskZbk42kmaqSqQxqQn9kqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC56R8egpHtza8r2%2FircA7DYW3%2FkxAXv6C2lCWlNMJ%2FyiT7HfvUCwST5sTjeik2Qgoql5GkhuqsLf9mX%2FjWBT1kL3gF5xrDYemK%2BTz3xET%2Fxa5VjFnxEdLZeSr%2Bho7q2glAQ1O2gce9jaJ3ifo6PH0VNHtNARcu73VTWPmrEsnhFj2xa%2BNftVq1KFCLoORON2lh3XV6g7PNt3%2F2IH3g%2BY%2BtX1uK%2BgqagSFVQH5PmgfZd34WAujRZxsHUCPmTPMyRRjJhXEjhgKXI4E9GFi8ViZT2yxNQroBW8s8ELAX0PBOIWrnUQRZ96n6ZznKdOJEz9It2AwhRe8MAUWvy7Pa8hUeceRQbqK8nxSegiTNK%2B9RXGNatyl8V8hA8W%2FtZA%2FfJZCFDZYXEFZa%2F86i%2FPkAadLD8SDtLtPsqkFpr8Bcvq8ooJeQCxHIULbZp53lCc8TgIHB78E9wtDABIwi9JXXdsTYZzDCBtquxKtqn1Hl8X0LkpOs4dDIKLIFkeqmpp%2FHZAJQ0i%2Fu59FvmnX9NZXySBK815L8kujvozgoLCrs3bSVM8MuV0rGPlIaHS5aAOP8DxTKPI2q4Cl4yRsLsRsi6ecpBaibqfDfAXvaEWa75aI5urs5RIOvaW%2Bm4dO8whiY9TOm8Ji1c47yU1grAMMyh2MkGOqUBmdkxJ0RpWqeHLc1%2BPjASNNdOuneJx3WU6A46oKHaTZXZ3Npsw3dZRVHx1USk%2FRWEw6XopZGrfXdr3E%2F63ZFBBypA6IilkJJ9gUpbM5Kr5MDkOB%2FdNmNUtqwK6YiRQoBIotu1sUwr%2Bkr9Ajac7RdIX19bVO0xtg98TgSWQf7wVWczHDr48CPT0eJfH%2BNFrY8vtfJMawaoKvTi0uo3g6KoUQhDBExu&X-Amz-Signature=b547904af71b40f331d6445283b3231108fdfff370bce2e1f82d54b4c4db77fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PFGLSRZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxkLpqJv6sTqb83jKCBYPLHYF2OZYxeUGxvj7NC%2BXTGAiEAsnZGpsRWwJ0Ul1Lffy3wyetskZbk42kmaqSqQxqQn9kqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC56R8egpHtza8r2%2FircA7DYW3%2FkxAXv6C2lCWlNMJ%2FyiT7HfvUCwST5sTjeik2Qgoql5GkhuqsLf9mX%2FjWBT1kL3gF5xrDYemK%2BTz3xET%2Fxa5VjFnxEdLZeSr%2Bho7q2glAQ1O2gce9jaJ3ifo6PH0VNHtNARcu73VTWPmrEsnhFj2xa%2BNftVq1KFCLoORON2lh3XV6g7PNt3%2F2IH3g%2BY%2BtX1uK%2BgqagSFVQH5PmgfZd34WAujRZxsHUCPmTPMyRRjJhXEjhgKXI4E9GFi8ViZT2yxNQroBW8s8ELAX0PBOIWrnUQRZ96n6ZznKdOJEz9It2AwhRe8MAUWvy7Pa8hUeceRQbqK8nxSegiTNK%2B9RXGNatyl8V8hA8W%2FtZA%2FfJZCFDZYXEFZa%2F86i%2FPkAadLD8SDtLtPsqkFpr8Bcvq8ooJeQCxHIULbZp53lCc8TgIHB78E9wtDABIwi9JXXdsTYZzDCBtquxKtqn1Hl8X0LkpOs4dDIKLIFkeqmpp%2FHZAJQ0i%2Fu59FvmnX9NZXySBK815L8kujvozgoLCrs3bSVM8MuV0rGPlIaHS5aAOP8DxTKPI2q4Cl4yRsLsRsi6ecpBaibqfDfAXvaEWa75aI5urs5RIOvaW%2Bm4dO8whiY9TOm8Ji1c47yU1grAMMyh2MkGOqUBmdkxJ0RpWqeHLc1%2BPjASNNdOuneJx3WU6A46oKHaTZXZ3Npsw3dZRVHx1USk%2FRWEw6XopZGrfXdr3E%2F63ZFBBypA6IilkJJ9gUpbM5Kr5MDkOB%2FdNmNUtqwK6YiRQoBIotu1sUwr%2Bkr9Ajac7RdIX19bVO0xtg98TgSWQf7wVWczHDr48CPT0eJfH%2BNFrY8vtfJMawaoKvTi0uo3g6KoUQhDBExu&X-Amz-Signature=8b25c9bb02baba36197363b7b3e0367c6aeb5a1b93278b0e2b40f7f3678e7700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
