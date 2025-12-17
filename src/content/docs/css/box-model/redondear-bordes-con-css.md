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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRQUYZN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7zLrXO7oE8LDIk6SZvQWasHEuO%2F3PnvbvYoKWB%2BMq%2BAIhAIgNBPuw2AMTOpnFt0R9BbxoRcAlgI4jgpF0cLWbTmnMKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEu6SCUIyIH1dMkVcq3ANtvLDz48OsPfaoVXKU9YOHIH1xvLLF%2BX%2FEq2HIeVFJqu1MpFXDLgpHw3cP0HcgsU%2FOlOUav4QZCAznBeFqhIgUoQAqQ5AtjNZvOVLmXEzIqX7MF2T5nokQXqdvryTiDQTDuVmTRsdpHNOUhcaqrWCuarIRIS2etnNJFr5BHQV82JWkjT0CcFkYxuAWLRQTwvGFrQmKSx37ZqwcqmAQYX7tDJnarJ%2BPRaGerUNFp%2F1WJUyoqWc3HldssJ673cT6iu%2F5kKkx5cBGv2yga9M%2FY4P4L8awx%2FcLrCKH9FKE3LN4FLhJWRb%2F7wx7GmsI6VubgjJxl4g%2FacXemPrPBGChGbs1HvDeKeew2ktNC%2B5KhJXYf8dr31Uio8JeSmxe8mizER4xMG70cGpDY7wEYkGgz%2FSRLemAZu94Qw36GHiTBzo7xJjZN4keshGCKRVAnyaxwN5WpGKTb%2BRkASJteZMousPNcLUBD%2Fa3Y6%2BQ0uyFMd5PnYlc7QqDXfstE7u3TgINHOIduGXEV49kyizTMKYoT%2FPEBVUOX%2F2OBt7r3lc26d6zmSZASGZOneJXuLQAAL%2F6aK9d0S2kJh%2BvUhowHl%2F3rGjUle%2Bk2yXQepPlXS14oPN%2FDW0npZkIOS3grPHG4TDTi4zKBjqkAZLVI%2Bibo7MM6tVAFhIpjXK3ZxQIBUh9Xgzr8qkioTj6CmB8RoLOW8Q%2BHFt774phEnX3VQ0mpxzlJ8uxSaZ5wYOjtIeNP%2FtTUESRTzM9hX0zrFsfMuFUTGbvs28toSs2Y1ohWHpn9BQ1Wu%2FzabqQ6RpW6NcGmS4b389NiVWCfrfM1sAe8KGFhH7lFcZgfBVXGci6Nwh%2F8idznct2VeRidbDLZflW&X-Amz-Signature=53888f7cc96a0b431fa380eb8e576fd769ad4992ceb0935558875a280a2688ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBRQUYZN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7zLrXO7oE8LDIk6SZvQWasHEuO%2F3PnvbvYoKWB%2BMq%2BAIhAIgNBPuw2AMTOpnFt0R9BbxoRcAlgI4jgpF0cLWbTmnMKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEu6SCUIyIH1dMkVcq3ANtvLDz48OsPfaoVXKU9YOHIH1xvLLF%2BX%2FEq2HIeVFJqu1MpFXDLgpHw3cP0HcgsU%2FOlOUav4QZCAznBeFqhIgUoQAqQ5AtjNZvOVLmXEzIqX7MF2T5nokQXqdvryTiDQTDuVmTRsdpHNOUhcaqrWCuarIRIS2etnNJFr5BHQV82JWkjT0CcFkYxuAWLRQTwvGFrQmKSx37ZqwcqmAQYX7tDJnarJ%2BPRaGerUNFp%2F1WJUyoqWc3HldssJ673cT6iu%2F5kKkx5cBGv2yga9M%2FY4P4L8awx%2FcLrCKH9FKE3LN4FLhJWRb%2F7wx7GmsI6VubgjJxl4g%2FacXemPrPBGChGbs1HvDeKeew2ktNC%2B5KhJXYf8dr31Uio8JeSmxe8mizER4xMG70cGpDY7wEYkGgz%2FSRLemAZu94Qw36GHiTBzo7xJjZN4keshGCKRVAnyaxwN5WpGKTb%2BRkASJteZMousPNcLUBD%2Fa3Y6%2BQ0uyFMd5PnYlc7QqDXfstE7u3TgINHOIduGXEV49kyizTMKYoT%2FPEBVUOX%2F2OBt7r3lc26d6zmSZASGZOneJXuLQAAL%2F6aK9d0S2kJh%2BvUhowHl%2F3rGjUle%2Bk2yXQepPlXS14oPN%2FDW0npZkIOS3grPHG4TDTi4zKBjqkAZLVI%2Bibo7MM6tVAFhIpjXK3ZxQIBUh9Xgzr8qkioTj6CmB8RoLOW8Q%2BHFt774phEnX3VQ0mpxzlJ8uxSaZ5wYOjtIeNP%2FtTUESRTzM9hX0zrFsfMuFUTGbvs28toSs2Y1ohWHpn9BQ1Wu%2FzabqQ6RpW6NcGmS4b389NiVWCfrfM1sAe8KGFhH7lFcZgfBVXGci6Nwh%2F8idznct2VeRidbDLZflW&X-Amz-Signature=5be9d330d406c86786a0ecca1fb67c7df996147406c545c0314c9e3c3a6a4870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
