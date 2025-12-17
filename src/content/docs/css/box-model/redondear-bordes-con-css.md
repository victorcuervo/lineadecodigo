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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEAUMSJH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Br2Ss%2FM6VejMcI7Pa1c91seDg%2FGgbUO2Ivyo%2FAJWaAIhALQuiA%2FkRjtSk%2FfrUXt3M7EfdouqyeG05kVTfKamv%2BzdKv8DCHYQABoMNjM3NDIzMTgzODA1IgyXZgMCkrAY9tS9whAq3AO7z%2FOTcgSnIx29WMomTFW9XYGlAT2KWfjEzrZjnugIMRpKWNzzdHPctthFfEHjCxKMhKUjoJyQKkqr%2B68ImNq39fEOLWFBySTT6Hv6AEbyblvq82E7%2BTZIEI4IFMwD4OYk99jCfqH3hRORKGCuIlSpQNsQ5pNNj%2F77Tf6Dnmxahn8v4rPbxFf2pUF8W0hTP%2BrAlRB1ynAaV4SPSrlEG1DW%2Fjanw3%2FzTRzBIAPxsJ%2FrRRtHk2%2FrPHlUqwPMq9hFz5x692aQm2CWPw2%2Blq%2Fn%2FNPfa%2BjXZJ05ovz4z6l3jv%2FZjV2Dn%2BovX65kq3ErOrwWd4Np5Ks%2BXtEkjThjsw3OEnWUq04l4Z9KsztsWr8WQf6oH97EqMa5MqHRy%2BHVBFQqeGXIq2lVLOaSE8XOSueror4mdue%2FrV%2FG0v14cPtzNnW51qBS1v4rslUar%2FHQAv0CAp2aTqWyjuJIt3xiwBg90HwT1FEMCZIFsLTUx%2Bmc8zUf9nKdWua4xCjzj7wnW7JHwuONX4xV6SeTFzQgRtPMUIlXeX6f780tTu6qCKRSW%2Bv6YtaspbBnAAFJ2MDTlQL9Ve24UXFketu2zB2bJ3RB9dQTfUzZaqtkPs9NravJceGmO4x6tOQRLfNUK7cKFTCd6ojKBjqkAVttTe7KSS0ElQcZR1UkP4LcDGzI9ek2rmPKqJbvk%2Bgmj17ttrUzT%2B8YrCwV%2F7mECRWYn9gdNSFVz4rVNWmGteQ3%2Bp4RAsrnHucLtHfrzrGyyY2ANnfhAhLmMp%2FzFsNuZD8jTiHwoOuKo4ZpWxm478SI1OMiip7slMxE78tGByqSrJ8rJYgb1OShC5Hnkfzlg8MDoln1CeJTR0hweKuZ2SSVVRzk&X-Amz-Signature=e31e4ff0958899a881378fa8b9ef14bc4203743b0ef803cae81cff363b3eff8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEAUMSJH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5Br2Ss%2FM6VejMcI7Pa1c91seDg%2FGgbUO2Ivyo%2FAJWaAIhALQuiA%2FkRjtSk%2FfrUXt3M7EfdouqyeG05kVTfKamv%2BzdKv8DCHYQABoMNjM3NDIzMTgzODA1IgyXZgMCkrAY9tS9whAq3AO7z%2FOTcgSnIx29WMomTFW9XYGlAT2KWfjEzrZjnugIMRpKWNzzdHPctthFfEHjCxKMhKUjoJyQKkqr%2B68ImNq39fEOLWFBySTT6Hv6AEbyblvq82E7%2BTZIEI4IFMwD4OYk99jCfqH3hRORKGCuIlSpQNsQ5pNNj%2F77Tf6Dnmxahn8v4rPbxFf2pUF8W0hTP%2BrAlRB1ynAaV4SPSrlEG1DW%2Fjanw3%2FzTRzBIAPxsJ%2FrRRtHk2%2FrPHlUqwPMq9hFz5x692aQm2CWPw2%2Blq%2Fn%2FNPfa%2BjXZJ05ovz4z6l3jv%2FZjV2Dn%2BovX65kq3ErOrwWd4Np5Ks%2BXtEkjThjsw3OEnWUq04l4Z9KsztsWr8WQf6oH97EqMa5MqHRy%2BHVBFQqeGXIq2lVLOaSE8XOSueror4mdue%2FrV%2FG0v14cPtzNnW51qBS1v4rslUar%2FHQAv0CAp2aTqWyjuJIt3xiwBg90HwT1FEMCZIFsLTUx%2Bmc8zUf9nKdWua4xCjzj7wnW7JHwuONX4xV6SeTFzQgRtPMUIlXeX6f780tTu6qCKRSW%2Bv6YtaspbBnAAFJ2MDTlQL9Ve24UXFketu2zB2bJ3RB9dQTfUzZaqtkPs9NravJceGmO4x6tOQRLfNUK7cKFTCd6ojKBjqkAVttTe7KSS0ElQcZR1UkP4LcDGzI9ek2rmPKqJbvk%2Bgmj17ttrUzT%2B8YrCwV%2F7mECRWYn9gdNSFVz4rVNWmGteQ3%2Bp4RAsrnHucLtHfrzrGyyY2ANnfhAhLmMp%2FzFsNuZD8jTiHwoOuKo4ZpWxm478SI1OMiip7slMxE78tGByqSrJ8rJYgb1OShC5Hnkfzlg8MDoln1CeJTR0hweKuZ2SSVVRzk&X-Amz-Signature=dbebfaeb21e2bea1b3a09938c100642c70ce0241da2cb6eb8c3f9941d33dab46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
