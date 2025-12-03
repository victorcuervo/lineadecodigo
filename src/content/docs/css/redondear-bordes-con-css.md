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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672TRPFGO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHLh2NMYMM6RD0pgBlq%2Bs%2FWddABacyJ3QVIBb5H%2FqXvqAiEA89iz2bcMW%2Bf6BmCPuaiOpK%2BwjgTshbwo8IEvvAGUwHEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOw4nwU30mTCVYHQryrcA2wM2e04xolepHXg%2FpusKIAE%2F7IoJdFr8pNXbOLr8gi1ARQbC9IU4Z9tuUWl66ypW8qVmDbC0JGGGN6C3RX%2F84eZj3EilMtG6Ges6fd09uuwqvqpYc0UFqUiq1xT0qB2tQbqNjeni0uR%2FNVSRa7ggQ6yaAEzp1GHvg9%2B3LOrSY9be5LngVikjB3YKzXG1yAzzK7TpRdmOPwgW1qKfdoPMD%2FnbyJ5x3BOkPW5ZItnQAkeOEh%2FBvbY%2FCUzEgmy%2Bn7oxYfngYhTLTslDn%2FP1uIVKhxNyLsvnBIwJLToyxQspJMNPgC9p5Y%2FAYwFhQe9x1s%2Fr4IXMv1uOZbEGk%2BOG5J9RLG5Vw%2FNOPPE4iDgit68088YTNpMFb6Wz%2BHbj6pAoJ9jkfyjj8S1Qdaoywo3alzGUqxe9XYg8qWioMMyegs2RBtU6NzcQ07n%2Bn9rSWDwYBmCGdLqeUP4me5i76oHwzEc0G8ViV7V5wXtqdECYXpEID9U%2Ba1uiJT7qIe7BE%2BoosEeSIAHno6%2BvatUFQlTXvzoLGnTI1v96%2FwRbhXQ8w%2B65c%2BqJY5%2F%2Ff0jZBXhp65FRM8w%2F7%2B9oMgH%2BXvvp9QTWdgj6aFojbDJanNqLF%2FFULZvMZocuoa7055BLmdcDoBjMOKUw8kGOqUBVULcxIV7TjfEkV%2FLj3%2BHPTyK9Ic6e7PQCh5yCKEW7W7z24hewOv%2FBTLCyfNmidBXW6vtUc3FNdoyeC2BSp0i9DG0H3xBboSPMiJx4BB3WNMSGZkO8zDV1LTWSTiNugzVw1LZeIq4o6qTBOlB4%2BALN7wlZbaFQ8ijrc1Fm430%2B6VF3DxkleeI79LF3%2FxKGat5O56M4Bt2XzA8l3LYascex5tgVuhO&X-Amz-Signature=c3863e13b08bb78abedb1f0eff2adc703d52362a287091f4b987fd3cd20fc0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672TRPFGO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHLh2NMYMM6RD0pgBlq%2Bs%2FWddABacyJ3QVIBb5H%2FqXvqAiEA89iz2bcMW%2Bf6BmCPuaiOpK%2BwjgTshbwo8IEvvAGUwHEq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOw4nwU30mTCVYHQryrcA2wM2e04xolepHXg%2FpusKIAE%2F7IoJdFr8pNXbOLr8gi1ARQbC9IU4Z9tuUWl66ypW8qVmDbC0JGGGN6C3RX%2F84eZj3EilMtG6Ges6fd09uuwqvqpYc0UFqUiq1xT0qB2tQbqNjeni0uR%2FNVSRa7ggQ6yaAEzp1GHvg9%2B3LOrSY9be5LngVikjB3YKzXG1yAzzK7TpRdmOPwgW1qKfdoPMD%2FnbyJ5x3BOkPW5ZItnQAkeOEh%2FBvbY%2FCUzEgmy%2Bn7oxYfngYhTLTslDn%2FP1uIVKhxNyLsvnBIwJLToyxQspJMNPgC9p5Y%2FAYwFhQe9x1s%2Fr4IXMv1uOZbEGk%2BOG5J9RLG5Vw%2FNOPPE4iDgit68088YTNpMFb6Wz%2BHbj6pAoJ9jkfyjj8S1Qdaoywo3alzGUqxe9XYg8qWioMMyegs2RBtU6NzcQ07n%2Bn9rSWDwYBmCGdLqeUP4me5i76oHwzEc0G8ViV7V5wXtqdECYXpEID9U%2Ba1uiJT7qIe7BE%2BoosEeSIAHno6%2BvatUFQlTXvzoLGnTI1v96%2FwRbhXQ8w%2B65c%2BqJY5%2F%2Ff0jZBXhp65FRM8w%2F7%2B9oMgH%2BXvvp9QTWdgj6aFojbDJanNqLF%2FFULZvMZocuoa7055BLmdcDoBjMOKUw8kGOqUBVULcxIV7TjfEkV%2FLj3%2BHPTyK9Ic6e7PQCh5yCKEW7W7z24hewOv%2FBTLCyfNmidBXW6vtUc3FNdoyeC2BSp0i9DG0H3xBboSPMiJx4BB3WNMSGZkO8zDV1LTWSTiNugzVw1LZeIq4o6qTBOlB4%2BALN7wlZbaFQ8ijrc1Fm430%2B6VF3DxkleeI79LF3%2FxKGat5O56M4Bt2XzA8l3LYascex5tgVuhO&X-Amz-Signature=da560118bbb6d9aacb4622ef90fbee7eab9efa133a3770f27b1ecec99cb551b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
