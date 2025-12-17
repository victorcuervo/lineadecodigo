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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7DWJ7K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI4%2BWUynl0kPtlMbyYhFXPZeW643hTrdPAzUIAhqKhMgIhALopDdBk4R7zRaaGjMxRQWoLPTdwUNm4NLWveTac95xtKv8DCHgQABoMNjM3NDIzMTgzODA1IgyTLOVabbTTi1VLgMsq3AMNpfpneC%2Fi2bZvX0aIsMLGUDwIdorEB0DWDmL3NOQLaEErJULmgSrWLrGxHZtw2CFZYDUyo3eDA5QxqTHLzOXAQc4ayZaurSWZ%2FG3Yt7PsimfvBmC%2B1MWzSkqB7FRAhs%2FoI4i8S89pTQ1ii%2Fj2n%2B9rPjg%2BGT%2BudIWYgJaqXaOkOz7ueI5QSCkx8oCEdYa5699b6uKCtHccda2%2FT0H3Jg4m%2Bk%2FKsVU4hvNR%2BmYZ9HJykvxtq%2Bs26xujYdKBNIRnRatgMFgcPjJHf7nJmWihvSBHUCGAqcHxvL431d7HqWoZsmmXNXj2n5mdKvBl7DF8w06qI2tJQ2MdpeX3mj9TdRf6xp9%2B9eDlc%2FI3FjyKnux1%2B9VBDI3QZBqTn30pBO6YTxhlvzHoRYsxpLBTKM5oGJV%2FRr0RJFgqMdcBNKqVIaIJAkMGo%2BUCpSrChuJD72hZFLxFPV6ksjPDPA4WMi3Lu8as3EP5XHKHNokaWpRoHP%2B5Dh0t5cGj%2BLEcNX8CZ%2BZWpr4Vb0fU1pSBXOhphg6hsn32PgeaVOBHObe8Ov3djk%2F3us8sL0IryvirLMBMmyMdDTWc9S1PhWqNytXIyxQWLtaZ%2B2%2FN1kyNuTXmQkuJzK0p9Svka9voD6Zt2ChwozCIt4nKBjqkASybRasaM2zIjGOd8i0C0iUtwsmO3PXhpn6JJTDnHkOYTB%2BlkCEoFI6qo7qJxFcp2ZOlvnOxAtF0%2FiPL0aThTcBHeAaFa%2FnlA2TliblHlWp57g7toVMijkr%2BhQj%2BM58KSzOrDlxzsXJiHHuMi%2BkfbU5UlnB%2FwGLnZBVC7eryiQ4V5RwSemXFj8oXHgxyFRNU%2B4T02YmXG1qAgA3DBpMG63p%2BwqAm&X-Amz-Signature=af00463f794e2ddfa39d90776d3c60b4f7d7f9653c09437ef50877993d5f0af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7DWJ7K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI4%2BWUynl0kPtlMbyYhFXPZeW643hTrdPAzUIAhqKhMgIhALopDdBk4R7zRaaGjMxRQWoLPTdwUNm4NLWveTac95xtKv8DCHgQABoMNjM3NDIzMTgzODA1IgyTLOVabbTTi1VLgMsq3AMNpfpneC%2Fi2bZvX0aIsMLGUDwIdorEB0DWDmL3NOQLaEErJULmgSrWLrGxHZtw2CFZYDUyo3eDA5QxqTHLzOXAQc4ayZaurSWZ%2FG3Yt7PsimfvBmC%2B1MWzSkqB7FRAhs%2FoI4i8S89pTQ1ii%2Fj2n%2B9rPjg%2BGT%2BudIWYgJaqXaOkOz7ueI5QSCkx8oCEdYa5699b6uKCtHccda2%2FT0H3Jg4m%2Bk%2FKsVU4hvNR%2BmYZ9HJykvxtq%2Bs26xujYdKBNIRnRatgMFgcPjJHf7nJmWihvSBHUCGAqcHxvL431d7HqWoZsmmXNXj2n5mdKvBl7DF8w06qI2tJQ2MdpeX3mj9TdRf6xp9%2B9eDlc%2FI3FjyKnux1%2B9VBDI3QZBqTn30pBO6YTxhlvzHoRYsxpLBTKM5oGJV%2FRr0RJFgqMdcBNKqVIaIJAkMGo%2BUCpSrChuJD72hZFLxFPV6ksjPDPA4WMi3Lu8as3EP5XHKHNokaWpRoHP%2B5Dh0t5cGj%2BLEcNX8CZ%2BZWpr4Vb0fU1pSBXOhphg6hsn32PgeaVOBHObe8Ov3djk%2F3us8sL0IryvirLMBMmyMdDTWc9S1PhWqNytXIyxQWLtaZ%2B2%2FN1kyNuTXmQkuJzK0p9Svka9voD6Zt2ChwozCIt4nKBjqkASybRasaM2zIjGOd8i0C0iUtwsmO3PXhpn6JJTDnHkOYTB%2BlkCEoFI6qo7qJxFcp2ZOlvnOxAtF0%2FiPL0aThTcBHeAaFa%2FnlA2TliblHlWp57g7toVMijkr%2BhQj%2BM58KSzOrDlxzsXJiHHuMi%2BkfbU5UlnB%2FwGLnZBVC7eryiQ4V5RwSemXFj8oXHgxyFRNU%2B4T02YmXG1qAgA3DBpMG63p%2BwqAm&X-Amz-Signature=4104c6dea7b5e135b8f63579c9c97ce5299f8854bb489e6f0b657c922905aaa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
