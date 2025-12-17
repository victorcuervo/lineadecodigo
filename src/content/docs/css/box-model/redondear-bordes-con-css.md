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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ2NXK33%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F8SlytCJ70r4UT40tht6S62Je%2FcZK%2F%2FxHM3lKmMwNvAIgUTzcPquWOkao6SlvKrz0bC%2BCt0mKQYrDpytdIUilhyQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEjADj6rBjkhn2SGvSrcA7BRiGIId0HufuC38GM%2B0Nu0e9zhPpKlnoICk6N5cFV184p0FSvVdNCPpuNHd4Vs3UPVpQRgxJBU5yEDqRz%2BpefP%2FvX6cov5QnAL4agTgtISXMRXIkoO%2Fc3DONgrS0A7xPhzkBIAWrStfx0lTRc4Q4qGpj5XQEKMGALmMOT146kNSq6GPIa9Grbm7%2BrR53EFhcYXu8n3DO89eYeRs5ftt1NPZ5GVFclMTpLedGaHyvbE9J5lufUuwTxAz%2BFIr7GeYLJOrqhIHIyiyEHEeVG3unS1AbI9W%2FVSfLQdVSwj1w2ZYq0R4Odgu119H9Wc%2BXjXatei49cO49DVrE5EGCtac3fcALUxQm%2BJBSOFSPFKOx7eNPY06fxadeqQl6XbTtiSwWs6OZ%2Bso58JztH%2FcudQQ4OjIZQ578gfYDWjbK3RGPird4TXaOpReI%2BZwCDPE68xw%2FFXuRapSCf%2FzRLKOPaFKvuTsEx2yjZMsi8JSOLeLEWCKJ9n1HFUA3LdDvIe55ty7mfdZISd%2FSG2GRtjCjmiRlsubLfJCJPT0oGTxa62tNPe%2F8MCI0y0Il6bmdDHxJoQtBI91EJ1w%2Fpwd2cvsUs%2FlB40nPbD3igiVu2QBbGLRhbAv1hi7xWZiiUFbtEbMOjhisoGOqUBL6xp8RrV5ssfq6ymTVkwYRMg1BmfA2Y7ksUxChGn%2F9cvTdqKgL8R231Vq8cWWPoZLl%2Bzk3WwJ7EejGsDHAZBMH1dmRCCJ3WYHzvduTl0pJ0VqkIhdMYtnXMMXBDZPslvT5%2ByCsi1G7fpGE4pmFJXXG16srsVxFNfUGdaVFBr3lsNOlYDipi8eZc3FWTC04ustp50l2X2qE5F%2BCFnwkT39tpW%2FlFn&X-Amz-Signature=aa5828fd2a6ceebfa0c2de09f9180f08d510a5fee8ca2ae50fc3dc526b1389d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ2NXK33%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F8SlytCJ70r4UT40tht6S62Je%2FcZK%2F%2FxHM3lKmMwNvAIgUTzcPquWOkao6SlvKrz0bC%2BCt0mKQYrDpytdIUilhyQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEjADj6rBjkhn2SGvSrcA7BRiGIId0HufuC38GM%2B0Nu0e9zhPpKlnoICk6N5cFV184p0FSvVdNCPpuNHd4Vs3UPVpQRgxJBU5yEDqRz%2BpefP%2FvX6cov5QnAL4agTgtISXMRXIkoO%2Fc3DONgrS0A7xPhzkBIAWrStfx0lTRc4Q4qGpj5XQEKMGALmMOT146kNSq6GPIa9Grbm7%2BrR53EFhcYXu8n3DO89eYeRs5ftt1NPZ5GVFclMTpLedGaHyvbE9J5lufUuwTxAz%2BFIr7GeYLJOrqhIHIyiyEHEeVG3unS1AbI9W%2FVSfLQdVSwj1w2ZYq0R4Odgu119H9Wc%2BXjXatei49cO49DVrE5EGCtac3fcALUxQm%2BJBSOFSPFKOx7eNPY06fxadeqQl6XbTtiSwWs6OZ%2Bso58JztH%2FcudQQ4OjIZQ578gfYDWjbK3RGPird4TXaOpReI%2BZwCDPE68xw%2FFXuRapSCf%2FzRLKOPaFKvuTsEx2yjZMsi8JSOLeLEWCKJ9n1HFUA3LdDvIe55ty7mfdZISd%2FSG2GRtjCjmiRlsubLfJCJPT0oGTxa62tNPe%2F8MCI0y0Il6bmdDHxJoQtBI91EJ1w%2Fpwd2cvsUs%2FlB40nPbD3igiVu2QBbGLRhbAv1hi7xWZiiUFbtEbMOjhisoGOqUBL6xp8RrV5ssfq6ymTVkwYRMg1BmfA2Y7ksUxChGn%2F9cvTdqKgL8R231Vq8cWWPoZLl%2Bzk3WwJ7EejGsDHAZBMH1dmRCCJ3WYHzvduTl0pJ0VqkIhdMYtnXMMXBDZPslvT5%2ByCsi1G7fpGE4pmFJXXG16srsVxFNfUGdaVFBr3lsNOlYDipi8eZc3FWTC04ustp50l2X2qE5F%2BCFnwkT39tpW%2FlFn&X-Amz-Signature=2bb2e5f6843abf6fc299036338b4fb5a3ef4910897d674784a54166af03badb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
