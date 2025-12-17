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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDZBBRI7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Xkt0QC010Yf8ZG0sFlFW9PmhaBgn5PbQ9SPqukTdSAIgcdCkzlXgPGS7%2BiDUm7tuzN2%2F3UST8GMR674%2Bch5VcHEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGFtkwIFcXrPSSYO0SrcA%2BB9QWPfgt1FUZlNcURtYBlajFf%2B6Wek4a0%2FmIxodR9VhnXfJ341KScnoOgKFww0bvxNJDd1vKxPlSG%2BwBoDY0eia0tVfcUYDQ2vq4zPG8raDlLveYDjK%2FvPS%2BfX%2FFnOZl1LiBOL96sy2NzcRtgqHD1sqfjOEgEfUjmVdmUKaVyej9woEhjhwtbjf8EVFWZBXOCdpwrkCkNXlqXBhqKQtLxfm2pS7lCIt4bVgYcS78UzYyBMWukL7p6o4fwo2zoKmtcmutmqmIttBXPAL1jpEfpFLXJmnH6jgwGjte6elXBQBsPf%2BHBtmoHCTTr0FqO7wL%2BgAprTVTmZXB5ue8PpMng5jCuw5h8PqDPz6%2BROOJakJYTYkPFhQMgz9Az%2F6lrXjGsUWALJavWfr072Z%2BjsTzffxN7WZ%2Fu8bpY7B4Ppx7bN%2FncO18iu4HUuK8aEzd5RFf6yYZNlWwUveZ4ydrVujSLSj4E4MZW%2BmKsIV7MBQVq4UjqcHnRVe4NWW6d8hKGVui2Di9k1bMYjjxx%2B0GIbRUlLXoWHUji9aN%2BcH%2Bw4MGGlcxAQfDnk7i%2BEN%2FypIoboyokww5DysrXZ7qxM1wshxuOi9GDS518vGNdBw3YhpuwR6S6tzLMyMJ1RDcFAMOOOisoGOqUB12Yw49LneMBrP7q%2FvoMahLQh5Bh2%2FnmysCHr5XY3i%2Be%2FtrLQ0vBlP%2B1C1N7uRdDhQEZaxCNd8C7c4Q1pQOSEhKkeYuIEeT58upCFELFBXMxD64y8wtkPr3wTmFP4B0wbr0MFX6xW%2B1T8KAomMVemB9nj9MgW%2B1yDTzYTbQugZoQ4wSMuf8lhS0GwY7UYzRIQMNbUUFFXK1wia4A9waebkUFlwSU5&X-Amz-Signature=5f4b5ba8136f254d4e1b9a24964a071c406265daa41950193213843d12249af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDZBBRI7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Xkt0QC010Yf8ZG0sFlFW9PmhaBgn5PbQ9SPqukTdSAIgcdCkzlXgPGS7%2BiDUm7tuzN2%2F3UST8GMR674%2Bch5VcHEq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGFtkwIFcXrPSSYO0SrcA%2BB9QWPfgt1FUZlNcURtYBlajFf%2B6Wek4a0%2FmIxodR9VhnXfJ341KScnoOgKFww0bvxNJDd1vKxPlSG%2BwBoDY0eia0tVfcUYDQ2vq4zPG8raDlLveYDjK%2FvPS%2BfX%2FFnOZl1LiBOL96sy2NzcRtgqHD1sqfjOEgEfUjmVdmUKaVyej9woEhjhwtbjf8EVFWZBXOCdpwrkCkNXlqXBhqKQtLxfm2pS7lCIt4bVgYcS78UzYyBMWukL7p6o4fwo2zoKmtcmutmqmIttBXPAL1jpEfpFLXJmnH6jgwGjte6elXBQBsPf%2BHBtmoHCTTr0FqO7wL%2BgAprTVTmZXB5ue8PpMng5jCuw5h8PqDPz6%2BROOJakJYTYkPFhQMgz9Az%2F6lrXjGsUWALJavWfr072Z%2BjsTzffxN7WZ%2Fu8bpY7B4Ppx7bN%2FncO18iu4HUuK8aEzd5RFf6yYZNlWwUveZ4ydrVujSLSj4E4MZW%2BmKsIV7MBQVq4UjqcHnRVe4NWW6d8hKGVui2Di9k1bMYjjxx%2B0GIbRUlLXoWHUji9aN%2BcH%2Bw4MGGlcxAQfDnk7i%2BEN%2FypIoboyokww5DysrXZ7qxM1wshxuOi9GDS518vGNdBw3YhpuwR6S6tzLMyMJ1RDcFAMOOOisoGOqUB12Yw49LneMBrP7q%2FvoMahLQh5Bh2%2FnmysCHr5XY3i%2Be%2FtrLQ0vBlP%2B1C1N7uRdDhQEZaxCNd8C7c4Q1pQOSEhKkeYuIEeT58upCFELFBXMxD64y8wtkPr3wTmFP4B0wbr0MFX6xW%2B1T8KAomMVemB9nj9MgW%2B1yDTzYTbQugZoQ4wSMuf8lhS0GwY7UYzRIQMNbUUFFXK1wia4A9waebkUFlwSU5&X-Amz-Signature=ac356570108e33d420f7e1115a56c87e99ac947e239afdf5267bb723b70be539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
