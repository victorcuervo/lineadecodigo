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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYGZISZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK7rvC88YRH%2FRmBI1Z3rMx%2FyVGTWjj7n%2FlNBIBuKd7NAIhAOsCTDKRChZBPldSlONBWFPGL3MxNSvdkw5VtG2VLfsoKv8DCHUQABoMNjM3NDIzMTgzODA1IgwKWMDg%2B0CJLN83hRMq3AMNLVrlsO4S7rTCkp0d55g9ebJw2EL5dpAfST8feqGU9DGyNPPXkXUVno%2B3ztcv6uizkyl5ElQu34%2Fpaze7AIjImtaf6z1DqDZah3UZE3vOysCFLh%2BalJYpDWLxKIbuOyvwzZuZ7hlUwLvm51r6ZF5Umgi9Cqpcwx1e9UnxF8HcBOoOwUhqW5%2BxpflrL5aMIGT88nIa57%2F5EP4zJ4XiwTFoBUMnpK4KUC0gw7OZraHsf6KhkDtydbBgR7EDu8e3F2eeg8EGrjofuU2qC%2FgnsvJbK2giMjpTb2MwbabMO%2FKtAqIHNreEdZAoQQb01OZhqI6vn1mMqjwq1PJRCfcTOhFVGNK1Wa20w87wwiw7FYUOSP9xDp1kYYW%2F9FbVyaIWYHmT45tbnbxRqtSR1OyRXzx01gBpsSpGuoZai8YV9wLuy%2BoxnZndzIoF2tcFTnzV1AP5EM8WKZSzHVMBGI%2Bbtz21nET7kphXbzee%2BkGWdoJI9T0eOoQqS0MHb%2BU4rX%2Fb%2Bfakq4ngGIQ3XY09ZAcF7F1fsGo8fkBmZ5o8wL4vGfAOqBVHppkU7OSxqZ%2BN86toJ4AMT7wuGNWidowwDkoch%2FDAVQxGmdqQa9kHcifjbxJqsUW2hIApbEcAGaUJBTCyzojKBjqkAVrr7x6TSX0xaFFxcpA%2B%2FAbdCV8rstPRMItEiih0Baj%2BYgrASJrguJnOx1FSyJdXfq269UapDLRIURGFT5Naa4ixP29Hf25AqbnFd1u0WChM3xd76X7u4tuPrrgYaLfmOHpriA%2FFbJi%2FbOVO%2F6VFVvf3vNE1pVnG3lgLBZKmMVkrdcML%2FyS9aqANDTW7Cx9fOfKjCSWuskPGcVXuH%2FXzUQJlwtOf&X-Amz-Signature=cec1bf8c72212994e17b057a910b0182a552796d6e8d6e1159d4f165dd6e9ec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JYGZISZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK7rvC88YRH%2FRmBI1Z3rMx%2FyVGTWjj7n%2FlNBIBuKd7NAIhAOsCTDKRChZBPldSlONBWFPGL3MxNSvdkw5VtG2VLfsoKv8DCHUQABoMNjM3NDIzMTgzODA1IgwKWMDg%2B0CJLN83hRMq3AMNLVrlsO4S7rTCkp0d55g9ebJw2EL5dpAfST8feqGU9DGyNPPXkXUVno%2B3ztcv6uizkyl5ElQu34%2Fpaze7AIjImtaf6z1DqDZah3UZE3vOysCFLh%2BalJYpDWLxKIbuOyvwzZuZ7hlUwLvm51r6ZF5Umgi9Cqpcwx1e9UnxF8HcBOoOwUhqW5%2BxpflrL5aMIGT88nIa57%2F5EP4zJ4XiwTFoBUMnpK4KUC0gw7OZraHsf6KhkDtydbBgR7EDu8e3F2eeg8EGrjofuU2qC%2FgnsvJbK2giMjpTb2MwbabMO%2FKtAqIHNreEdZAoQQb01OZhqI6vn1mMqjwq1PJRCfcTOhFVGNK1Wa20w87wwiw7FYUOSP9xDp1kYYW%2F9FbVyaIWYHmT45tbnbxRqtSR1OyRXzx01gBpsSpGuoZai8YV9wLuy%2BoxnZndzIoF2tcFTnzV1AP5EM8WKZSzHVMBGI%2Bbtz21nET7kphXbzee%2BkGWdoJI9T0eOoQqS0MHb%2BU4rX%2Fb%2Bfakq4ngGIQ3XY09ZAcF7F1fsGo8fkBmZ5o8wL4vGfAOqBVHppkU7OSxqZ%2BN86toJ4AMT7wuGNWidowwDkoch%2FDAVQxGmdqQa9kHcifjbxJqsUW2hIApbEcAGaUJBTCyzojKBjqkAVrr7x6TSX0xaFFxcpA%2B%2FAbdCV8rstPRMItEiih0Baj%2BYgrASJrguJnOx1FSyJdXfq269UapDLRIURGFT5Naa4ixP29Hf25AqbnFd1u0WChM3xd76X7u4tuPrrgYaLfmOHpriA%2FFbJi%2FbOVO%2F6VFVvf3vNE1pVnG3lgLBZKmMVkrdcML%2FyS9aqANDTW7Cx9fOfKjCSWuskPGcVXuH%2FXzUQJlwtOf&X-Amz-Signature=ff53e73314b446720d99063ff9defd90a63cf35ec12d9041b7d8b1ccaa9be16c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
