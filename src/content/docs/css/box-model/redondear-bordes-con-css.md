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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V26JCQW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGTYl6rrt6wYUkIvvSwa2sD87P0%2B%2B3aDP%2FKk2oLdmZigIgNnsh5Q87Zci3L6DYdPySKspiSPuHdQ%2F%2B8C38AAVM43Uq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBhDVjTmQ%2FNYuGxifSrcAwFBpseMS3auFsqD7xYhMGBLKiHpCB9PD2iqja46rNnEXiCn%2B2H4oE5hdiKVyEDg40pvmFxy9FKIc%2FQHxEAunzk1Qn9g5cgGbDqykIR0daKApzu0tnEn2JGeN8Gbux0B0hsFYOLY6OWI7YjSrs1FD9sY%2BQoVRZU5FvxTImfBoWFf1xTVIagAeAJAuJrjdsjpFn6XSUuQIBeifgqwchm0zLN1rSV5JXkYRbpWPUaEHXobPBRiJV1vgEdaqfv%2FAt1ZuYRmVTYtatRKrLARIwf%2B80qHVhHUfKskBF8UGYSG2ypggeJAEn%2BfTjrhaNCwY8eoxCe4nP%2FxFTPuIlfRgJeiqQ8QiHwm%2F6sehdPzN9hde8%2B1m6GgtlPQR%2F52V4whHyL%2BYKaqWF3NmFBHkZgPWJ3getLLS%2BoFx0P7eXdCWg%2BYuW3zTaTnK%2Fz07ExNFIBzAp6Y7SGkUqRUeEJ0KMoNaoPY5Ji5zAQWCnMN%2F%2FWT98QQUpj%2BlIuP3KBv1U5cymw46iPY0mXF9aeerUmIDyTSQCU%2Bs5tgFX7vcyleybPifFUCp10ofs%2FYHzPt4M%2F%2FBjUCa7Qbg71Ujjjyzje3%2Fy9DOVMXz0n75nfAsvAp1PQ%2BtS%2FBZQMley1Pz22PodQ%2BQwoBMNTFisoGOqUBva1uKsPmD2lVBfJTmYd7GZWRwr1ALgnH3rnJ1G3fKcabBeWEpdSuwye00LcFh%2FtX7u9mGl8W25QBq9gk6IbZqjNFT7Ws3%2BmsKj%2F%2FfCmflDE2AvGdzi3CqH20Y0uTKgdH%2FQdSiTwbX%2BNKzY0gAhTbOvqTTbpLX99%2BdwBbUQmcLEjZ5oQfisam9JAOLUibLTupYMNwTujMiDbaclcIAM63L9j7njrN&X-Amz-Signature=96a8d46ddd91872c276a8942b0b00fba78644d3438fca8ec92ce9a7c74b7d6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V26JCQW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGTYl6rrt6wYUkIvvSwa2sD87P0%2B%2B3aDP%2FKk2oLdmZigIgNnsh5Q87Zci3L6DYdPySKspiSPuHdQ%2F%2B8C38AAVM43Uq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBhDVjTmQ%2FNYuGxifSrcAwFBpseMS3auFsqD7xYhMGBLKiHpCB9PD2iqja46rNnEXiCn%2B2H4oE5hdiKVyEDg40pvmFxy9FKIc%2FQHxEAunzk1Qn9g5cgGbDqykIR0daKApzu0tnEn2JGeN8Gbux0B0hsFYOLY6OWI7YjSrs1FD9sY%2BQoVRZU5FvxTImfBoWFf1xTVIagAeAJAuJrjdsjpFn6XSUuQIBeifgqwchm0zLN1rSV5JXkYRbpWPUaEHXobPBRiJV1vgEdaqfv%2FAt1ZuYRmVTYtatRKrLARIwf%2B80qHVhHUfKskBF8UGYSG2ypggeJAEn%2BfTjrhaNCwY8eoxCe4nP%2FxFTPuIlfRgJeiqQ8QiHwm%2F6sehdPzN9hde8%2B1m6GgtlPQR%2F52V4whHyL%2BYKaqWF3NmFBHkZgPWJ3getLLS%2BoFx0P7eXdCWg%2BYuW3zTaTnK%2Fz07ExNFIBzAp6Y7SGkUqRUeEJ0KMoNaoPY5Ji5zAQWCnMN%2F%2FWT98QQUpj%2BlIuP3KBv1U5cymw46iPY0mXF9aeerUmIDyTSQCU%2Bs5tgFX7vcyleybPifFUCp10ofs%2FYHzPt4M%2F%2FBjUCa7Qbg71Ujjjyzje3%2Fy9DOVMXz0n75nfAsvAp1PQ%2BtS%2FBZQMley1Pz22PodQ%2BQwoBMNTFisoGOqUBva1uKsPmD2lVBfJTmYd7GZWRwr1ALgnH3rnJ1G3fKcabBeWEpdSuwye00LcFh%2FtX7u9mGl8W25QBq9gk6IbZqjNFT7Ws3%2BmsKj%2F%2FfCmflDE2AvGdzi3CqH20Y0uTKgdH%2FQdSiTwbX%2BNKzY0gAhTbOvqTTbpLX99%2BdwBbUQmcLEjZ5oQfisam9JAOLUibLTupYMNwTujMiDbaclcIAM63L9j7njrN&X-Amz-Signature=051562f4a562510c8e37f202cd9d1f1536125b31e6d8f2baedbc719c1b64b0d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
