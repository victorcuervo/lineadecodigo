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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G3RG23%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FI5uhsA2N73G34RDz9Er2TMLiwEAkw2nIBBY9zaxt4AiEAuhEdtZvbgQ2diMONHWA3HYU37lTLeGVDs7iSs61DW5wq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIMME%2F%2FPAScN7f4f0SrcA5MhyrrZ4XTJuzf52mQRtBuyHt2lY0y0U3hShezuPncAtWujJQifScMcNR5PJOXiq6LFKWMzQitvEisDjFgmzRReVLZJYzlPm7VNiVG0s%2FQ2Gd5ACMXIKBJfWxa0DHrzDIkuNpAHNSP7QoFkPj2rFf%2Bnqy7O7Odw%2Ft%2FMuUW8MGYTiPRwf4KvSoixBiRjFCveQsOknHEjhFR%2BJZJJ3x%2FHf401O8GrCnSZizSZryLVDo3grSwHi%2BrKRVZ5K47NoedCyX6FCoKlbGSMLYeuVPVYGCEnvyvrYZbhQuuiUqSwQzfk7%2BacUsEK5e3rda3hFIrT1jV1L%2F%2FHRmAaZk3mhRT0O64iSmTX3qrXsQTwI1qz1M9YVGdLFkqxz2vE8dnQOm6D06vsO24BQ0kABuZTDnbI%2BoEitDa2Y0YvmX67b1rEV0lTzsh4%2Bb3DmHeJcwrQGDI2aCRnly5uUADzWba%2FcoGFeuQRG49o%2BwBMjPzyOuI4IRgnBh7LBVzCNlHhVb0a%2FQ92o6CgBzxwtGEGVBWOf4NETd8KJsKuSd%2BLbNJG3%2BIOx4gF6tbrBCEK%2FMSkrCuwDL7ma0Nv3IqQ95uZGlPlYtTb%2Fv9SgZfuOQnxGNdf63qJbuJA7%2FOW%2BGhoukELwluWMOzpiMoGOqUBY%2BuCfA6971KmL5ByHI3T023mMcjDivbzpiBt%2FKFRzOdR%2Fy5mYzj2zsWvTkqibOqBenm5%2B9QCh570nCMRUe%2FZxl31PO2UPJ7PH2nB32Ue%2FsiqTyQOnh65ilGxmx8Slas9nCjnys%2BElWH4%2B2dF4rFIT%2F7LkShzqDI%2FG8ZlIKl2FkjOzdNQAzSCM4FoC6zLImvRFcdqeN35IJSgRDGVhruq5V4%2BJYvp&X-Amz-Signature=23119fab168b9193443c940f986b87a262cd8d63dcd44f4b2299b3a09a88773e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G3RG23%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2FI5uhsA2N73G34RDz9Er2TMLiwEAkw2nIBBY9zaxt4AiEAuhEdtZvbgQ2diMONHWA3HYU37lTLeGVDs7iSs61DW5wq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIMME%2F%2FPAScN7f4f0SrcA5MhyrrZ4XTJuzf52mQRtBuyHt2lY0y0U3hShezuPncAtWujJQifScMcNR5PJOXiq6LFKWMzQitvEisDjFgmzRReVLZJYzlPm7VNiVG0s%2FQ2Gd5ACMXIKBJfWxa0DHrzDIkuNpAHNSP7QoFkPj2rFf%2Bnqy7O7Odw%2Ft%2FMuUW8MGYTiPRwf4KvSoixBiRjFCveQsOknHEjhFR%2BJZJJ3x%2FHf401O8GrCnSZizSZryLVDo3grSwHi%2BrKRVZ5K47NoedCyX6FCoKlbGSMLYeuVPVYGCEnvyvrYZbhQuuiUqSwQzfk7%2BacUsEK5e3rda3hFIrT1jV1L%2F%2FHRmAaZk3mhRT0O64iSmTX3qrXsQTwI1qz1M9YVGdLFkqxz2vE8dnQOm6D06vsO24BQ0kABuZTDnbI%2BoEitDa2Y0YvmX67b1rEV0lTzsh4%2Bb3DmHeJcwrQGDI2aCRnly5uUADzWba%2FcoGFeuQRG49o%2BwBMjPzyOuI4IRgnBh7LBVzCNlHhVb0a%2FQ92o6CgBzxwtGEGVBWOf4NETd8KJsKuSd%2BLbNJG3%2BIOx4gF6tbrBCEK%2FMSkrCuwDL7ma0Nv3IqQ95uZGlPlYtTb%2Fv9SgZfuOQnxGNdf63qJbuJA7%2FOW%2BGhoukELwluWMOzpiMoGOqUBY%2BuCfA6971KmL5ByHI3T023mMcjDivbzpiBt%2FKFRzOdR%2Fy5mYzj2zsWvTkqibOqBenm5%2B9QCh570nCMRUe%2FZxl31PO2UPJ7PH2nB32Ue%2FsiqTyQOnh65ilGxmx8Slas9nCjnys%2BElWH4%2B2dF4rFIT%2F7LkShzqDI%2FG8ZlIKl2FkjOzdNQAzSCM4FoC6zLImvRFcdqeN35IJSgRDGVhruq5V4%2BJYvp&X-Amz-Signature=feae93d416efb0edf892b036a3db21a48b7529ebe18c0582f539d45a49ec0630&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
