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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPSMHPEX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyW3O72Bq4wUtCbGFQeNJCF0MGldLjuywW1RJU484hQIgMQrgjrceErtO2xTt34Cz1pNQhUctBWCAQ2c9NjrK09AqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtJZwri0lsnUfrasCrcAxGdJd%2BhGAcXUPUBprAXtqqoAGiqibDj5pAkabvg90ntbdYRL62pGSAFlE55aypKPol%2FemeQR05qCajnC5s45%2F6y27Mx%2FM%2FEk2PGNXp1an3Euobh3XTtrfEkhltU6iRaikXPEaIFJPVrwq4kbxbkNeQ3nhZ3sDOHsGdLiRtlmnTmvs1a8qgLA3vEkQzCbmRD0mraNzrZNyNGBzXkPzkfjP1dlPVVZVDk3ebIastpkInlqx2yfvJLM54XXRDITdAUW886dcBoBg3%2FkKq3gBE69EVlCurHdrN6SdWEGC2vjzadXQ7wh1yb6ggZvxiVkof%2BevcDC0MYGLhWROgUXFSjMiKJOTSj%2FU6ijqgfMitQYN6KRExa1oP16iUzYHvkpi1AJokhIJn4FXDwB5whNVCvG60Dh7VRC0yT22V%2BWuC5s9qGsD9CxWLAjL4SiDoe%2Br4syBXToB2nRlng%2FQtt%2B7Vgwucbjfg8JuKmzsHWc44%2BKNDhih3KQRuHyO0Ki%2F%2FgtTX8tMaciAzBAKuWj08CaSYSPWXiURwN8D6H1K7BhdvrrK3CgrlQ83ktkjPVYRIYevfqEv0%2FDyGgxmX3DbKwkgRIDIIG5w3Ntx3FH1%2BSmwmLrxjyhYdXSqkPVKRRwKuWMJ%2Fl28kGOqUBT6ap6LKRSfnXfvGcIgyHz4laCoUjR2AgQY1a4bzuYeFoY109f%2FkpmUKSuRGSSDg9tz6EQI%2FaKW4lOWFdsC%2FwvHyGW%2FhLSZ%2FcUT8a4rWz1Z4fGe%2FkQqrG4GLv3tFRokZHF0faH5yLO4tU9Q7HCd%2F8sJ7TdctabmYAXvPVgXfI0NNIJsJlZr8N0lq1ptT%2F9Kfg4Dg%2FAJ0ILfQ43sL2ojtrjqJb7eyw&X-Amz-Signature=36f296953c362c2d11e281ebe0e065dfb40554c7b76a3dd73c2491637a372c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPSMHPEX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyW3O72Bq4wUtCbGFQeNJCF0MGldLjuywW1RJU484hQIgMQrgjrceErtO2xTt34Cz1pNQhUctBWCAQ2c9NjrK09AqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtJZwri0lsnUfrasCrcAxGdJd%2BhGAcXUPUBprAXtqqoAGiqibDj5pAkabvg90ntbdYRL62pGSAFlE55aypKPol%2FemeQR05qCajnC5s45%2F6y27Mx%2FM%2FEk2PGNXp1an3Euobh3XTtrfEkhltU6iRaikXPEaIFJPVrwq4kbxbkNeQ3nhZ3sDOHsGdLiRtlmnTmvs1a8qgLA3vEkQzCbmRD0mraNzrZNyNGBzXkPzkfjP1dlPVVZVDk3ebIastpkInlqx2yfvJLM54XXRDITdAUW886dcBoBg3%2FkKq3gBE69EVlCurHdrN6SdWEGC2vjzadXQ7wh1yb6ggZvxiVkof%2BevcDC0MYGLhWROgUXFSjMiKJOTSj%2FU6ijqgfMitQYN6KRExa1oP16iUzYHvkpi1AJokhIJn4FXDwB5whNVCvG60Dh7VRC0yT22V%2BWuC5s9qGsD9CxWLAjL4SiDoe%2Br4syBXToB2nRlng%2FQtt%2B7Vgwucbjfg8JuKmzsHWc44%2BKNDhih3KQRuHyO0Ki%2F%2FgtTX8tMaciAzBAKuWj08CaSYSPWXiURwN8D6H1K7BhdvrrK3CgrlQ83ktkjPVYRIYevfqEv0%2FDyGgxmX3DbKwkgRIDIIG5w3Ntx3FH1%2BSmwmLrxjyhYdXSqkPVKRRwKuWMJ%2Fl28kGOqUBT6ap6LKRSfnXfvGcIgyHz4laCoUjR2AgQY1a4bzuYeFoY109f%2FkpmUKSuRGSSDg9tz6EQI%2FaKW4lOWFdsC%2FwvHyGW%2FhLSZ%2FcUT8a4rWz1Z4fGe%2FkQqrG4GLv3tFRokZHF0faH5yLO4tU9Q7HCd%2F8sJ7TdctabmYAXvPVgXfI0NNIJsJlZr8N0lq1ptT%2F9Kfg4Dg%2FAJ0ILfQ43sL2ojtrjqJb7eyw&X-Amz-Signature=aa68a7b8fecfcf0a14776a8de23509e65b2c018e082989fd8f7b26bd83a2d085&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
