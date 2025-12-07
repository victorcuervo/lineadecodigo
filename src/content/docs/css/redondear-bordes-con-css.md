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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4CRDLJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs28fvcS4so6a35p%2Bk8dQNrVUsLFHcnfVuZSlENCMWAAIgPA%2BnjVz9ajDUqX5ETNdBHtuM8B1JjCTViWdvDoiBlJcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSmYpyyS55rQjAJmCrcA1hlINjcmJlfQq5990NZPpTalx73rXU%2BJwSP3luqMkzmVTdRCI8FA6YSgZJEXOb5vMcFMoVCNv5xtm7aDYCZz%2BRbQYMbwB0Xs2EP1wJoDIuWb89pHz9%2BO4hGBBsbdl10tAi%2B0pRs5X6x4YJT6pt07l%2BSqnuoEMfBRjxPoLYyvlMKZA%2BNY8WUFncUiRhCkRwk8df6rsKSnlgD2PWGcM0INkoOHWbU8U9LhVUi76wowvWs79R3Qgd17Dl0L0dukE8c0kytsEwr7ndlw%2BAa1mntixP5t4a8sHT%2FaXectiO465WEpAWC7hOwbeiJ2d6D87xWifeHoEefQyun0%2B8QRf6osYJ8jZn0M8E%2B3TFej%2F6HbIXZ4L4%2FTTK%2B1xDudJcmzOt38hH7hvjW9JuIKxbCNI3L6rbUKTzJEBLUmUPxc2Q%2F1I082l0y%2BNUrA02WpcqcUFhWa3Ued7C2nOO58fijPPp2ivXmgLiGTBt%2FOhMXpwHqcVScqdE3ev%2FpXEUb%2B93jOjGsfWsgkxXt%2BDAi9BpMgloOagrnHACxyemldKzoZwtV93Az3f66fZXiII1iA9KNHXniIkf%2FhnFHCjkNVrBD1soJE17%2BGj8yBoTRU4YSOfugYTWqlhHNWN5UQL27lgU5MLD%2B0skGOqUBjFJfkVG3Optg0TI51pOuL7QCUl14GkwSJbnlb3EqehCkgAcqVkoBRpqxYJnuIo3LnqRhRHMkQ7mBzP1gb5EsGhzSLDs4AN8TPW9T3EP8bhVtCMcVbDR5ccpaz33PIOWn4qj2eyCGHsskBytASXHw8LxEW3%2FpF3BOF9ajFWJq9TqNsFgq7iMGv1qMHI2TmVx%2Fil1gCsNU6KjltgajpnZKRUvympUj&X-Amz-Signature=0bef367bfe420e669582d3547cfff6b499771708cae04b303cc610f7561af3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4CRDLJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs28fvcS4so6a35p%2Bk8dQNrVUsLFHcnfVuZSlENCMWAAIgPA%2BnjVz9ajDUqX5ETNdBHtuM8B1JjCTViWdvDoiBlJcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNSmYpyyS55rQjAJmCrcA1hlINjcmJlfQq5990NZPpTalx73rXU%2BJwSP3luqMkzmVTdRCI8FA6YSgZJEXOb5vMcFMoVCNv5xtm7aDYCZz%2BRbQYMbwB0Xs2EP1wJoDIuWb89pHz9%2BO4hGBBsbdl10tAi%2B0pRs5X6x4YJT6pt07l%2BSqnuoEMfBRjxPoLYyvlMKZA%2BNY8WUFncUiRhCkRwk8df6rsKSnlgD2PWGcM0INkoOHWbU8U9LhVUi76wowvWs79R3Qgd17Dl0L0dukE8c0kytsEwr7ndlw%2BAa1mntixP5t4a8sHT%2FaXectiO465WEpAWC7hOwbeiJ2d6D87xWifeHoEefQyun0%2B8QRf6osYJ8jZn0M8E%2B3TFej%2F6HbIXZ4L4%2FTTK%2B1xDudJcmzOt38hH7hvjW9JuIKxbCNI3L6rbUKTzJEBLUmUPxc2Q%2F1I082l0y%2BNUrA02WpcqcUFhWa3Ued7C2nOO58fijPPp2ivXmgLiGTBt%2FOhMXpwHqcVScqdE3ev%2FpXEUb%2B93jOjGsfWsgkxXt%2BDAi9BpMgloOagrnHACxyemldKzoZwtV93Az3f66fZXiII1iA9KNHXniIkf%2FhnFHCjkNVrBD1soJE17%2BGj8yBoTRU4YSOfugYTWqlhHNWN5UQL27lgU5MLD%2B0skGOqUBjFJfkVG3Optg0TI51pOuL7QCUl14GkwSJbnlb3EqehCkgAcqVkoBRpqxYJnuIo3LnqRhRHMkQ7mBzP1gb5EsGhzSLDs4AN8TPW9T3EP8bhVtCMcVbDR5ccpaz33PIOWn4qj2eyCGHsskBytASXHw8LxEW3%2FpF3BOF9ajFWJq9TqNsFgq7iMGv1qMHI2TmVx%2Fil1gCsNU6KjltgajpnZKRUvympUj&X-Amz-Signature=67fcb566d3651ce9149ab38bf9ccb4211d1f715f594f7556325126dd9155a8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
