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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDIIS7M4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy4fRrgO%2FD3t9qc9yYsh1F4H2IP9pNSjG80H4y0V%2BoKAiBIaY3TiITfR3dm4I3WQvElWmiQZac%2BX32S1zN8%2FR%2FmkCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMURyxVEzRJ%2BDKHYtqKtwDVfprISu2p%2FJq0vX6HrZrCa3yFnKsEdPXX2Qr3%2FQ761Au7W8DY3IzumvqY0NHjD%2FYAYf4uDLv86WQMhR%2BkEQBrX44r7oNuK9vQ63mrl1qZ6UCNlHaf%2BYqP6ehSwAjL8%2FcjydmGmHhewGCzLNehCDH42N6H8yJD4bP%2BJDNu5%2B%2B7jdpuCnvdgWOXpL8qDo0hAUILXPKG9LvHJwuxNiaUrkydWwNMIelxyxIlObQcv5E7FAlIoKw7zvpmg%2BqDjGR8RMSyPkVrSbF7ghCh%2Fxe2QHekcSHuz4AFzTI02Sripm2r8g%2FGPRtATSqHdvEoZ0JTkLe1xsBVDLyYmsBLp%2BzjMh3vQH4O9kIs1DcjTVDCOwFF1DomH33c9KnvA7a1nplHC%2FeKY4gJppvyCbKqkiY37aLnk%2FXvaEQszEJau5jCFIB3feDcr5AOnkGfDYVxkPq2sEnLVxj8fZeXFOw8fFTo0qsVJc6jWIw3Pzf7UIZbsAV5V2sd9UwNFUs99GceAOS1UZq4TO5dpjbZ6J11huvwz%2BlL8JvJMjT8kc9C9fOW6Ha2zTupj03fXVuouQCdJIHznO92vOm5RoytW184t%2B5yRuAm6%2F3hRfZrL9csw152Dc3m88QBer817NSgrhADJsw8OGKygY6pgFqiDjKCN0W68r9cf63sbr1pHjjyP6IvEzImQiBzmQcvqSgYPssbr8bjUoHB50ZPEfqVASkgDW0ZT5JC5MvtdVfhkg4pB2hIRX6nVdjj%2BPV5cafAAMJTv%2FVT01hg8ZaBGrjVn0nnzBEoCnipMVvN470RkUlA1THD4hLjjXwEbYxM7hFXcCl4CQB%2BKpXqJzggbD9RP1u4%2BSJ%2Fx%2Ba9jADX9RJsOSbv9w6&X-Amz-Signature=610c745916e5c914f558069a4bb12b827b0f9d6e06e5b04f8ad3ee3cc1afac5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDIIS7M4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy4fRrgO%2FD3t9qc9yYsh1F4H2IP9pNSjG80H4y0V%2BoKAiBIaY3TiITfR3dm4I3WQvElWmiQZac%2BX32S1zN8%2FR%2FmkCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMURyxVEzRJ%2BDKHYtqKtwDVfprISu2p%2FJq0vX6HrZrCa3yFnKsEdPXX2Qr3%2FQ761Au7W8DY3IzumvqY0NHjD%2FYAYf4uDLv86WQMhR%2BkEQBrX44r7oNuK9vQ63mrl1qZ6UCNlHaf%2BYqP6ehSwAjL8%2FcjydmGmHhewGCzLNehCDH42N6H8yJD4bP%2BJDNu5%2B%2B7jdpuCnvdgWOXpL8qDo0hAUILXPKG9LvHJwuxNiaUrkydWwNMIelxyxIlObQcv5E7FAlIoKw7zvpmg%2BqDjGR8RMSyPkVrSbF7ghCh%2Fxe2QHekcSHuz4AFzTI02Sripm2r8g%2FGPRtATSqHdvEoZ0JTkLe1xsBVDLyYmsBLp%2BzjMh3vQH4O9kIs1DcjTVDCOwFF1DomH33c9KnvA7a1nplHC%2FeKY4gJppvyCbKqkiY37aLnk%2FXvaEQszEJau5jCFIB3feDcr5AOnkGfDYVxkPq2sEnLVxj8fZeXFOw8fFTo0qsVJc6jWIw3Pzf7UIZbsAV5V2sd9UwNFUs99GceAOS1UZq4TO5dpjbZ6J11huvwz%2BlL8JvJMjT8kc9C9fOW6Ha2zTupj03fXVuouQCdJIHznO92vOm5RoytW184t%2B5yRuAm6%2F3hRfZrL9csw152Dc3m88QBer817NSgrhADJsw8OGKygY6pgFqiDjKCN0W68r9cf63sbr1pHjjyP6IvEzImQiBzmQcvqSgYPssbr8bjUoHB50ZPEfqVASkgDW0ZT5JC5MvtdVfhkg4pB2hIRX6nVdjj%2BPV5cafAAMJTv%2FVT01hg8ZaBGrjVn0nnzBEoCnipMVvN470RkUlA1THD4hLjjXwEbYxM7hFXcCl4CQB%2BKpXqJzggbD9RP1u4%2BSJ%2Fx%2Ba9jADX9RJsOSbv9w6&X-Amz-Signature=73cf81d4502ed1c5825ad24a65f3be7829444e827b24cadc7b1ea7e6fefb4374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
