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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466274V3ZQY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV7f0z4raaGKfh7Jtsn1y6xlONqyEC0ul2oQRJVMjsVAIgQMiV%2F0QXCO4dtwjwDme8ej8f%2Fu1ZQbFyfwET4POk1uEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHIksiPPc2I%2F6FYROyrcAyS97yPtA4VV0QqPNmwuc%2BukGzzOz1WMo%2BcDNCr%2Bdrtj%2B6x%2BXj4gyuqYvNdmkHl6m%2BiFH5QXjR98JZzOFbZ0lJGTQsCjpmflJ80FdF5SYvncWJ2nbhAmCIAEUAahJ1KrXVv6wjKoLqSZJy11d1unWDS7kFCGkNNuTF%2Fgq8%2FJJmYg0YG175%2FqU9TN4tcNZDBaaTqWPwtAu80HLdih1Sy7BN7FSzmbdmvHVYPUZ5L%2BsY9d7k6vPdmvmBfmJQNtFTW3KaMDs4WjaljHBSbzaYYgnI%2BlkBo2XYjSgRxlDOMEATNK%2FMwhCSwreqRzRaevnKMngY3ZQQQyZ6rH%2Ft8MbDdjg6CescTA7cuTquqcRdTqx6enywOAqFS7txn4GFyvSLv5TsaYTXyG12AGrHp%2BJ4aGvzPnsmZzXjMCs2bFzTsbPheTN2D5uxyWdCFB8CS1FG13Ma%2BLh4SXyYtkWG33ieSy3Hd4nEVWH%2Bg6GyjchqY4TS%2FCPGRnSmYHtgl8zvdpyFVX7y1xcNm8PvyS4B%2BbIgHoui%2FfKUB0eS2%2FFqiVTCGEztOCo3o0bsjcguMAiPbxQv0uQNHuwtptb2%2B3TmQ%2FNcFt4YPz4enPZSaPOjdQSQzHdJGIAGmNzlqPQNKUU4LfMPaXiMoGOqUBJ%2BR%2FKqTErq1UutDCi2eikDeUX7WUZ6AK9WLyNY0CNLFq4x3Voh3NoivM57sySEVwZTrGfdVL5rHao9Qpi6ijE7veZNmli5%2ByOMk3qoJ9AjR7qAPYrTnPH1F8rRpXo1UmEHbo9Rnaxt3b8%2Fk%2FOzfe3bMutYIBtcOAu7mY38WSbC%2FPbOPkLZFSKDxO%2FrJ9qe4k7A%2B%2Bt8IsicuSIf8A8QKhhSGIPHVO&X-Amz-Signature=bcc8f3a1df303058bbe31fcc3dcd9cdb810bd195b9e443fbc10a6607fec83460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466274V3ZQY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCV7f0z4raaGKfh7Jtsn1y6xlONqyEC0ul2oQRJVMjsVAIgQMiV%2F0QXCO4dtwjwDme8ej8f%2Fu1ZQbFyfwET4POk1uEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHIksiPPc2I%2F6FYROyrcAyS97yPtA4VV0QqPNmwuc%2BukGzzOz1WMo%2BcDNCr%2Bdrtj%2B6x%2BXj4gyuqYvNdmkHl6m%2BiFH5QXjR98JZzOFbZ0lJGTQsCjpmflJ80FdF5SYvncWJ2nbhAmCIAEUAahJ1KrXVv6wjKoLqSZJy11d1unWDS7kFCGkNNuTF%2Fgq8%2FJJmYg0YG175%2FqU9TN4tcNZDBaaTqWPwtAu80HLdih1Sy7BN7FSzmbdmvHVYPUZ5L%2BsY9d7k6vPdmvmBfmJQNtFTW3KaMDs4WjaljHBSbzaYYgnI%2BlkBo2XYjSgRxlDOMEATNK%2FMwhCSwreqRzRaevnKMngY3ZQQQyZ6rH%2Ft8MbDdjg6CescTA7cuTquqcRdTqx6enywOAqFS7txn4GFyvSLv5TsaYTXyG12AGrHp%2BJ4aGvzPnsmZzXjMCs2bFzTsbPheTN2D5uxyWdCFB8CS1FG13Ma%2BLh4SXyYtkWG33ieSy3Hd4nEVWH%2Bg6GyjchqY4TS%2FCPGRnSmYHtgl8zvdpyFVX7y1xcNm8PvyS4B%2BbIgHoui%2FfKUB0eS2%2FFqiVTCGEztOCo3o0bsjcguMAiPbxQv0uQNHuwtptb2%2B3TmQ%2FNcFt4YPz4enPZSaPOjdQSQzHdJGIAGmNzlqPQNKUU4LfMPaXiMoGOqUBJ%2BR%2FKqTErq1UutDCi2eikDeUX7WUZ6AK9WLyNY0CNLFq4x3Voh3NoivM57sySEVwZTrGfdVL5rHao9Qpi6ijE7veZNmli5%2ByOMk3qoJ9AjR7qAPYrTnPH1F8rRpXo1UmEHbo9Rnaxt3b8%2Fk%2FOzfe3bMutYIBtcOAu7mY38WSbC%2FPbOPkLZFSKDxO%2FrJ9qe4k7A%2B%2Bt8IsicuSIf8A8QKhhSGIPHVO&X-Amz-Signature=9154a9fdb670178e4beed041c1be6a2e5023cbc05e76ff26d8c1148608a44809&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
