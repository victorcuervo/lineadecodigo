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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PNXPRE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDAvWNBNT1ORAGrePgSwDRv58ae0z2gXJULIyTRVcK8JgIhAI3evPlZilFbfqiquX4CwVMFjyI%2Fta6bxMBPa4%2BIxXjpKv8DCEUQABoMNjM3NDIzMTgzODA1IgxmF2caKnXrxwT2c4sq3ANDz7CHMyEXGyIT6Yb%2FbhDZPuAt%2F9MjQhhio3Ox2l%2BAtVXnhm4VWowfBpF9QpwC6ssID2q6EkZfGNBBsUG%2FOGmA0aHQLsoC7chKYGfn4J1ewJCMoNQxsZ%2FYB%2FgUDOZxXPh0xjyzkulWkiwYTH1Sff2VdDnv%2BrLtiQlOUpu7DJbg%2FwS%2BXdhYOhvH8r3iXRQX%2BnzF%2FCBPvYGX66UTJw3VtpYWVapFAPilRUx3gpbkV%2BsAVtLb8kC62hELvvomK4CZ0HG29D0MS4noBRMKZkCAVdTMrYYcXtfkrjRZs9iuoFg%2BJPS01DvtoE2otbHXFEXWses%2FUBKakMGaXJg%2BPgsRRSFrSkSfbGHcClllFXDnIpGvlAOsD%2FI%2FodEg6vT2dueJpE0o6Y0Wbdgqy0U%2Bga3WK%2BcmP1%2BPBUd66gWtQp12OV%2BXY06bsL75NOtWDx4crd3ZGsNXpNimu1itYjEl1f3o79wscY37FH6lEwdlKd8th1CjYdAOBtgqyBG1GV2iJVwy5t%2BBbCCdQcuzUzA7y8TcyA9Ux5eG%2F%2F8fZeupm8cVZAYvlQNxhiT0oFsVMW2ICeuchCtD6XP9iDXSYvKBeRvp1ttM61dak5u6%2Fyrfzg2KWXmpeL9YE5tHQiAuoswaOTDc5sXJBjqkAUGTMjdj82PrF05KzSFyvnpNtu80wr3mRB6kVzPDWYoDLJN%2Bu4nDdk6awenwVKnrQSgrqKTCyqFf58IcDWZ5AFLuQS2O3a5aQpZFP7CB2k7%2B3f7FlvA3rxRy9u7PapiiUOUqkfIQRC27yGlL%2B74H7G2HHE1hfVM7Rv4AA6t4%2FfBDZUHsFyoEOrXMRGGjw36IwCKBK%2BfOt7A6PPpGIIP6ZcYavga9&X-Amz-Signature=d492c10c76bb19fc067c4ee956bb3a436bfe8fb1640cde77600315ca02696140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PNXPRE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDAvWNBNT1ORAGrePgSwDRv58ae0z2gXJULIyTRVcK8JgIhAI3evPlZilFbfqiquX4CwVMFjyI%2Fta6bxMBPa4%2BIxXjpKv8DCEUQABoMNjM3NDIzMTgzODA1IgxmF2caKnXrxwT2c4sq3ANDz7CHMyEXGyIT6Yb%2FbhDZPuAt%2F9MjQhhio3Ox2l%2BAtVXnhm4VWowfBpF9QpwC6ssID2q6EkZfGNBBsUG%2FOGmA0aHQLsoC7chKYGfn4J1ewJCMoNQxsZ%2FYB%2FgUDOZxXPh0xjyzkulWkiwYTH1Sff2VdDnv%2BrLtiQlOUpu7DJbg%2FwS%2BXdhYOhvH8r3iXRQX%2BnzF%2FCBPvYGX66UTJw3VtpYWVapFAPilRUx3gpbkV%2BsAVtLb8kC62hELvvomK4CZ0HG29D0MS4noBRMKZkCAVdTMrYYcXtfkrjRZs9iuoFg%2BJPS01DvtoE2otbHXFEXWses%2FUBKakMGaXJg%2BPgsRRSFrSkSfbGHcClllFXDnIpGvlAOsD%2FI%2FodEg6vT2dueJpE0o6Y0Wbdgqy0U%2Bga3WK%2BcmP1%2BPBUd66gWtQp12OV%2BXY06bsL75NOtWDx4crd3ZGsNXpNimu1itYjEl1f3o79wscY37FH6lEwdlKd8th1CjYdAOBtgqyBG1GV2iJVwy5t%2BBbCCdQcuzUzA7y8TcyA9Ux5eG%2F%2F8fZeupm8cVZAYvlQNxhiT0oFsVMW2ICeuchCtD6XP9iDXSYvKBeRvp1ttM61dak5u6%2Fyrfzg2KWXmpeL9YE5tHQiAuoswaOTDc5sXJBjqkAUGTMjdj82PrF05KzSFyvnpNtu80wr3mRB6kVzPDWYoDLJN%2Bu4nDdk6awenwVKnrQSgrqKTCyqFf58IcDWZ5AFLuQS2O3a5aQpZFP7CB2k7%2B3f7FlvA3rxRy9u7PapiiUOUqkfIQRC27yGlL%2B74H7G2HHE1hfVM7Rv4AA6t4%2FfBDZUHsFyoEOrXMRGGjw36IwCKBK%2BfOt7A6PPpGIIP6ZcYavga9&X-Amz-Signature=69680fe31f194d1fda2842faf3b4734a3a2556ff66662bdb8c484e9a4e156690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
