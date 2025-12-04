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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S3QYLMN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqKTMh5uVMfOcct%2Fr901n0vCP6WVEkVlMc3h9Q7oI0wAiBGl8Da9TRJNQd8FyjIP69tJU7XGegb3P3yvhKYWpE%2BuSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMmP7uLRalLWx5MokfKtwD42rQ29wbR232BrNvUsw%2BboXD25M3fS2qCh8tpej0flYcoZhq68NyCmls4FzUVwJQx283jrLjERte7ckPCHfYRf5PGwg9rdwC45q%2FbMizp63u4afmquDUS%2Fdg3vBAB%2FHWlMUI%2FiRj8C4e8K36T6kM1QXUcGDuuHVQ2s6iM7lMWN8qQeKti8Yuxdj%2BEDXcUCnlDdBMdua2aHPGV0X%2FkPdzjvF0F8AvzBk5DjTao52d0D2IXfHPNUwJxrydVc3kNIH1wmALcI9eZsyvg%2Bj5wuY2va3agrvN0lMutz6Kuj%2BGBilgVWJoWKLo8P6Y1Hzf2s%2BRWn6CMRJUeqMEFXUqxlEYdLFEg3Vln%2BmYXBVVF%2Fq0h1VgUD4kYFMAX9Gzh%2BLKQrW7cxVEywjMVHYD2zu%2FZauxj8OCEfIpG6p%2FBPdTp0jEY0zM36lNiMCw5%2BRvV0DLmn1kjj4%2Fj2VoCKL6kLGi3OTExr%2FepFP2e8zptOQw7syskCd7pAKg55qJgehBcgUE3K77ZyufbjLSQqHfyld%2Bl6Qu5AO3qBvykc59vGdVFzJvbk77R%2BsH6%2FXMWXWtL%2Bb5k9XntyCfSJpOI8hxV4Cyxs46i84f7lBHukB8eyHyn4SIFpnDhKGBcvUpK1wheAkws4zIyQY6pgESSgu74UbVX0djqJsxF2qv1bZWavdPWPKWZdb7bNUuYeCN3tsBqb4b2p9IH1JNw6gH%2BhUWGz6D5x0tGRIv4TFxRXFtdBsX1R9YX1vXD2XBRY8EpJkuQFgvw0pCDT%2FVZDBUlW%2FPhk9t%2FkkS0j9gcwEby3XMqhRanDjVH3gYRM%2F61mUxjlsuEmO6fvxc%2BUjUZWWN0OyMMj%2FnymUVzCKxX2LUbICe8%2Fi7&X-Amz-Signature=9696d2e550aef6a21b97fc340ceec11c953ff56f67beedec0d36a28e8eb93942&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S3QYLMN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAqKTMh5uVMfOcct%2Fr901n0vCP6WVEkVlMc3h9Q7oI0wAiBGl8Da9TRJNQd8FyjIP69tJU7XGegb3P3yvhKYWpE%2BuSr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMmP7uLRalLWx5MokfKtwD42rQ29wbR232BrNvUsw%2BboXD25M3fS2qCh8tpej0flYcoZhq68NyCmls4FzUVwJQx283jrLjERte7ckPCHfYRf5PGwg9rdwC45q%2FbMizp63u4afmquDUS%2Fdg3vBAB%2FHWlMUI%2FiRj8C4e8K36T6kM1QXUcGDuuHVQ2s6iM7lMWN8qQeKti8Yuxdj%2BEDXcUCnlDdBMdua2aHPGV0X%2FkPdzjvF0F8AvzBk5DjTao52d0D2IXfHPNUwJxrydVc3kNIH1wmALcI9eZsyvg%2Bj5wuY2va3agrvN0lMutz6Kuj%2BGBilgVWJoWKLo8P6Y1Hzf2s%2BRWn6CMRJUeqMEFXUqxlEYdLFEg3Vln%2BmYXBVVF%2Fq0h1VgUD4kYFMAX9Gzh%2BLKQrW7cxVEywjMVHYD2zu%2FZauxj8OCEfIpG6p%2FBPdTp0jEY0zM36lNiMCw5%2BRvV0DLmn1kjj4%2Fj2VoCKL6kLGi3OTExr%2FepFP2e8zptOQw7syskCd7pAKg55qJgehBcgUE3K77ZyufbjLSQqHfyld%2Bl6Qu5AO3qBvykc59vGdVFzJvbk77R%2BsH6%2FXMWXWtL%2Bb5k9XntyCfSJpOI8hxV4Cyxs46i84f7lBHukB8eyHyn4SIFpnDhKGBcvUpK1wheAkws4zIyQY6pgESSgu74UbVX0djqJsxF2qv1bZWavdPWPKWZdb7bNUuYeCN3tsBqb4b2p9IH1JNw6gH%2BhUWGz6D5x0tGRIv4TFxRXFtdBsX1R9YX1vXD2XBRY8EpJkuQFgvw0pCDT%2FVZDBUlW%2FPhk9t%2FkkS0j9gcwEby3XMqhRanDjVH3gYRM%2F61mUxjlsuEmO6fvxc%2BUjUZWWN0OyMMj%2FnymUVzCKxX2LUbICe8%2Fi7&X-Amz-Signature=32710f021f536c14bf2b04af0bc48ba587b3082c756fcecffb553eb02edb9078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
