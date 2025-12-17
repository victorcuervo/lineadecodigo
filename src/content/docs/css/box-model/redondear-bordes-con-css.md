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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4TNGDC4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQBKPNwK36IMufWYPb7x6NYbsbmC8i6x93EMk80rKlLAiAmUhOHfA1EApvP0H1P0LyOaIrrSmUQszLX2toiDUHaSir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM%2Fabl27GLIFMpq33UKtwD6HK2WJpGOXku7N%2Faa2Go%2FkNlWp0WRzSRLzOXyIiUb24TEo9dpiQ8q98rwPPs4%2FabDHQ%2FBEKH5JI%2FBbYBLX5q9UMnyUteOBwgt9q0fC3nCM6MONOtOapfCu1XVA%2BDsWk0HEDWOCpMv7mafff%2BBjNhEh6tlUEb01C1nFqOAP2tjVNv9taXRhNcx8ZXpw9r7LoYyKmUpVAybLBFKeLuEUXOgEuMyVIbEyACkCjsatTIPp406iiOF2fdpM%2FEuJvXdxnGO87alaH0jlY1s3pOllWrwDcLiSc2O1aL8Ey%2BohqTM2VODA99Mr%2BgHF5fHaRJXBDSfvAK9CFni%2FX5zUXt7uhTzDauHa%2FXaknPSqx%2FKX5tfDHy105nhFmc1AN4H3LOXZa3%2BFrBzUOJRPNM4rnpyNko%2F16deg7LSrXYUHvCdWaD%2FEpAW%2FjotIH0MNzymVLMgHtnh416lTQ9CF7sMvm5uGeSyFkg4WzMXabfjC%2B9eyo8iTFDYLY06OJHDWia0z2xz3b%2F9DXawD1S2F1p%2BWpYwYXZAWtyV46zc9F8n2JFYSfLhdDOh2F1P7kMf70UcqMubeMhvVmZ3GNp5tfKWRQDp1w0mhg%2BgpeEVUB8z5XQyiNWeeSE9mVCbAlT9bPE%2B6gwnJ6JygY6pgE9ZE1RmREpY2LujjhlBAsuMmk0iobBPtlKlOAt00C6Myom80xTV64ip%2B5%2BfHoHBdZCJNq%2BmgHx5SploU1VAsEO8DB8R%2FxPKk16nMyQyd8u0NOHsR1vkVzfErLl7zxC3Fq71bpl0htemQjdw%2FMxKijBF8X32cKfvb5yqwwNK%2BHpsnBng4rkx%2FR%2FzIxjTsU3NWtRrmk4Xve6HGRYCci7V45ifAUSnZk0&X-Amz-Signature=e59bc479fd10b25db7f95c7b0e465e0acc046830914fbcefe7f0f4a3f92bda3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4TNGDC4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQBKPNwK36IMufWYPb7x6NYbsbmC8i6x93EMk80rKlLAiAmUhOHfA1EApvP0H1P0LyOaIrrSmUQszLX2toiDUHaSir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM%2Fabl27GLIFMpq33UKtwD6HK2WJpGOXku7N%2Faa2Go%2FkNlWp0WRzSRLzOXyIiUb24TEo9dpiQ8q98rwPPs4%2FabDHQ%2FBEKH5JI%2FBbYBLX5q9UMnyUteOBwgt9q0fC3nCM6MONOtOapfCu1XVA%2BDsWk0HEDWOCpMv7mafff%2BBjNhEh6tlUEb01C1nFqOAP2tjVNv9taXRhNcx8ZXpw9r7LoYyKmUpVAybLBFKeLuEUXOgEuMyVIbEyACkCjsatTIPp406iiOF2fdpM%2FEuJvXdxnGO87alaH0jlY1s3pOllWrwDcLiSc2O1aL8Ey%2BohqTM2VODA99Mr%2BgHF5fHaRJXBDSfvAK9CFni%2FX5zUXt7uhTzDauHa%2FXaknPSqx%2FKX5tfDHy105nhFmc1AN4H3LOXZa3%2BFrBzUOJRPNM4rnpyNko%2F16deg7LSrXYUHvCdWaD%2FEpAW%2FjotIH0MNzymVLMgHtnh416lTQ9CF7sMvm5uGeSyFkg4WzMXabfjC%2B9eyo8iTFDYLY06OJHDWia0z2xz3b%2F9DXawD1S2F1p%2BWpYwYXZAWtyV46zc9F8n2JFYSfLhdDOh2F1P7kMf70UcqMubeMhvVmZ3GNp5tfKWRQDp1w0mhg%2BgpeEVUB8z5XQyiNWeeSE9mVCbAlT9bPE%2B6gwnJ6JygY6pgE9ZE1RmREpY2LujjhlBAsuMmk0iobBPtlKlOAt00C6Myom80xTV64ip%2B5%2BfHoHBdZCJNq%2BmgHx5SploU1VAsEO8DB8R%2FxPKk16nMyQyd8u0NOHsR1vkVzfErLl7zxC3Fq71bpl0htemQjdw%2FMxKijBF8X32cKfvb5yqwwNK%2BHpsnBng4rkx%2FR%2FzIxjTsU3NWtRrmk4Xve6HGRYCci7V45ifAUSnZk0&X-Amz-Signature=fca3dac2db8094cc6678b28cb75f03e091af639af4b98249cd46183ac428e084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
