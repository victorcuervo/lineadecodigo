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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QTXZMR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZNI6pehXQ%2F5N8n4ufj1M5lIg7oSfbgEGJ51onFSxI2AiEApDe9bsdchTL0Goz6Ss97qrJvfgaorj7c1YjznC32Ul0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4SIS1FQ4bCi3fujyrcAy3k30pexXE5ygJpwZkCWRGXIBjeR7edjeAB77MkJk2JkftgDZtwknyumBegpoZJ15YSGFM2kvkSk126tVAPFNNiU8qEXQGZshvPRvIHk9b8K2sVbrLGFfgrn4ZZ0LigE7eJ%2BMRgOgR5iSBPuputa0vzWUp1%2BNDZKx616U5zBI5hrBv7ExnEetGvwfMHUvXkNPwGecoKn%2F6U1Prubghsm69A25%2Fbl5nnyjXNtml%2BucNcBL8sYNt6ZgjmdjW6INR0HwGcnzqlDGjFN%2BVGDFYdVjeqqlYXTyM5fA6AfRtPl7bpx9YmMUj9ALsad6UGzIpbsIeIU4ycpYhkjdpRsvELMbDRIWuyh7JIshmS1Lrd56KvUiAq1CS6tuepbjBeK7Rr8WW1eiB8VLqXnMazCpPX7JYGLXVZHS2uDGOqaWRE1tGgq%2BBtFtsN6ZAVkAiz0CyWrsRQqk%2FlNcqpwCG3lwIdDD4I7BClHkHTIrUyOxI5yvL3mg5E0Nwq15pYB%2FSQtVMVZir1WazTJZpLLUTnS63PPtCvtOer3ZiFwTu1DOr1us%2BmQPEA%2F2MH3sza%2FzJjp3AGacTCMGyKhfuhNsm4lWG%2F%2BmNOu3CN55I9ezBbdlAwpUQLlupOD310aivS4eNyMNr%2FisoGOqUB58x4CzoOFanrqux1I01Psq6T0q%2FagvhJlkPYun9P%2B2n0E8j%2F3534DsBgjBM9v7qCJZ3ps4po7iYFPUDin8QrcLO9OyNBuZ9MsVuY7gXiFAB2hi%2Fxq%2BYrYhwLtBC7e%2FvYERwNdHj40Hi54g14Sc%2FWufJrSYA94ZJffH5xYaxJXD96FPIFZv27ZIRTJ391%2BVjGBm5%2FmMvFWgHF6XtT3l6mlWichTAZ&X-Amz-Signature=ef16fd22a9c6260909226fc367ad1cbdb82c084d33a80edcc65f740b2802af25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677QTXZMR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFZNI6pehXQ%2F5N8n4ufj1M5lIg7oSfbgEGJ51onFSxI2AiEApDe9bsdchTL0Goz6Ss97qrJvfgaorj7c1YjznC32Ul0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK4SIS1FQ4bCi3fujyrcAy3k30pexXE5ygJpwZkCWRGXIBjeR7edjeAB77MkJk2JkftgDZtwknyumBegpoZJ15YSGFM2kvkSk126tVAPFNNiU8qEXQGZshvPRvIHk9b8K2sVbrLGFfgrn4ZZ0LigE7eJ%2BMRgOgR5iSBPuputa0vzWUp1%2BNDZKx616U5zBI5hrBv7ExnEetGvwfMHUvXkNPwGecoKn%2F6U1Prubghsm69A25%2Fbl5nnyjXNtml%2BucNcBL8sYNt6ZgjmdjW6INR0HwGcnzqlDGjFN%2BVGDFYdVjeqqlYXTyM5fA6AfRtPl7bpx9YmMUj9ALsad6UGzIpbsIeIU4ycpYhkjdpRsvELMbDRIWuyh7JIshmS1Lrd56KvUiAq1CS6tuepbjBeK7Rr8WW1eiB8VLqXnMazCpPX7JYGLXVZHS2uDGOqaWRE1tGgq%2BBtFtsN6ZAVkAiz0CyWrsRQqk%2FlNcqpwCG3lwIdDD4I7BClHkHTIrUyOxI5yvL3mg5E0Nwq15pYB%2FSQtVMVZir1WazTJZpLLUTnS63PPtCvtOer3ZiFwTu1DOr1us%2BmQPEA%2F2MH3sza%2FzJjp3AGacTCMGyKhfuhNsm4lWG%2F%2BmNOu3CN55I9ezBbdlAwpUQLlupOD310aivS4eNyMNr%2FisoGOqUB58x4CzoOFanrqux1I01Psq6T0q%2FagvhJlkPYun9P%2B2n0E8j%2F3534DsBgjBM9v7qCJZ3ps4po7iYFPUDin8QrcLO9OyNBuZ9MsVuY7gXiFAB2hi%2Fxq%2BYrYhwLtBC7e%2FvYERwNdHj40Hi54g14Sc%2FWufJrSYA94ZJffH5xYaxJXD96FPIFZv27ZIRTJ391%2BVjGBm5%2FmMvFWgHF6XtT3l6mlWichTAZ&X-Amz-Signature=66c959feb598e34eb74643d0a9c7127c161ba68c25e686ea8543fd33a55b5097&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
