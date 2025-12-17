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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7B5TEK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg7jbBhutDA7IaKvcmPuMmIW%2FP1vBITpe4%2FbffYas%2F1AIhAN5AX%2FsqfKG2AWp1z94pp0jzffjd0ROTxl4VLIjUO0m%2FKv8DCHIQABoMNjM3NDIzMTgzODA1IgwgA3arcmPevDcb4Ecq3AN5gnWIOEgLR7y5N98FaGz9KUHyOGVH4qamNzloWGw57bbJiW4rG2GZdUDTHp%2BCFyGAf7tanVsyDfnmI1Uz8vAmUOVcn1XTj%2FvKi4eVBG3kAwZMS%2FAMzHOl7zir9Kja7pVLu71xQOstVS9vaGRAC8tssY4vGC738I2yNI3rwKCERSoSItqIz1r19n2a%2FUUsNTNT50KjrCwu2dfeRUP%2Bt4mL3jcvYG53FcJpuTBjrPNe06oKPEVzha8SHPtj4PDWDjILnZgPzMGCJM4BMOgHlBvMA4VM5bPXHHtp6r1hZTVocgyW6VudxK7NIJ%2FhYn4%2BBQ%2FPBCn5IueNR5ZmToW2Rp58VaeaQKw%2BjVtnhLUA6VD9ORkp%2Fw3df2aIDux1buauvxqevRi%2BThJ6UeAPLmIlN5P5WOLU4I3lKfujXuNBGWi1HXixb1p5skAqZzy4aOgydvTaEsgtLU3l8rfsez4PB4xKWFwnchUoDdM6udCEVeYQ%2FZ2%2F1EkiCCIgP8ddYOD0HI%2B2AZYbj1QCk9AwmN%2F%2Btg4Ry8RpB0EcWvfXHgD8pR5N%2FXzMJwQSqjeI0VFq%2F9CwPOcuqOx3oOGL1mMjFTA7gubFHRxajuw7AFr07c348TIux8puDyDJt9daqmqcCTDX%2B4fKBjqkASA4L%2BWRuZh%2FH9Iz2HNWz19m4R21UyknUFrw0HevDiIneyTkgaqyJlrfOgUx6mL2lP6r2B3VE%2F0vYBHDNU1IV2R6DUSbwA%2FQntvwVQUa4wTJwzahrOSgjfMRyJHcw2kMwy9gnR2Gda7JzfSXOlBEcFbfOfbB4HTXFbrPcSw40prOcEwGgPu2vg13jZV7TlSn3gymtIyV9UJaq%2BNA8p%2Fm3R5oZjJE&X-Amz-Signature=b43ec142283498b98aa6134b7f567f115e1c8e2f443b4369ceef6e9513dc2269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7B5TEK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDg7jbBhutDA7IaKvcmPuMmIW%2FP1vBITpe4%2FbffYas%2F1AIhAN5AX%2FsqfKG2AWp1z94pp0jzffjd0ROTxl4VLIjUO0m%2FKv8DCHIQABoMNjM3NDIzMTgzODA1IgwgA3arcmPevDcb4Ecq3AN5gnWIOEgLR7y5N98FaGz9KUHyOGVH4qamNzloWGw57bbJiW4rG2GZdUDTHp%2BCFyGAf7tanVsyDfnmI1Uz8vAmUOVcn1XTj%2FvKi4eVBG3kAwZMS%2FAMzHOl7zir9Kja7pVLu71xQOstVS9vaGRAC8tssY4vGC738I2yNI3rwKCERSoSItqIz1r19n2a%2FUUsNTNT50KjrCwu2dfeRUP%2Bt4mL3jcvYG53FcJpuTBjrPNe06oKPEVzha8SHPtj4PDWDjILnZgPzMGCJM4BMOgHlBvMA4VM5bPXHHtp6r1hZTVocgyW6VudxK7NIJ%2FhYn4%2BBQ%2FPBCn5IueNR5ZmToW2Rp58VaeaQKw%2BjVtnhLUA6VD9ORkp%2Fw3df2aIDux1buauvxqevRi%2BThJ6UeAPLmIlN5P5WOLU4I3lKfujXuNBGWi1HXixb1p5skAqZzy4aOgydvTaEsgtLU3l8rfsez4PB4xKWFwnchUoDdM6udCEVeYQ%2FZ2%2F1EkiCCIgP8ddYOD0HI%2B2AZYbj1QCk9AwmN%2F%2Btg4Ry8RpB0EcWvfXHgD8pR5N%2FXzMJwQSqjeI0VFq%2F9CwPOcuqOx3oOGL1mMjFTA7gubFHRxajuw7AFr07c348TIux8puDyDJt9daqmqcCTDX%2B4fKBjqkASA4L%2BWRuZh%2FH9Iz2HNWz19m4R21UyknUFrw0HevDiIneyTkgaqyJlrfOgUx6mL2lP6r2B3VE%2F0vYBHDNU1IV2R6DUSbwA%2FQntvwVQUa4wTJwzahrOSgjfMRyJHcw2kMwy9gnR2Gda7JzfSXOlBEcFbfOfbB4HTXFbrPcSw40prOcEwGgPu2vg13jZV7TlSn3gymtIyV9UJaq%2BNA8p%2Fm3R5oZjJE&X-Amz-Signature=3cf0f60c1632d5694692e28f12ed0b92c4274b642288609ca52cbc40748341c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
