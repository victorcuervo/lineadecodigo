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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFV2VEIH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2%2Ft3cgMy27%2FV09NvPAcvmLIwjFXB651rixiy9FhytGAiBWg3yY58JRVyE7n76qyRGgxlzQJvkTRu3i9WxwlDAjqiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj4dAu3wfG3z%2FsE9QKtwDu7g6RZ%2FTjzEEjdcKrriIqoUto7p2XMjnBNbhnxzo9G1N%2BFt1LV6iYD8xy0nLOBKR%2Frtu48K5Svtk%2Fj%2FAm3DVUiSxD0JyBaqesAr%2Bk2rMDLbb13INC5ABc3ZRJvj9MDpjh7Ui9qmXRGkW7RQ9%2FVkBvwmwG0h4kG22oX%2FE5hFWESmUtZ4OSFSd%2FJb6f3PokOMDLJEcPqCQ89%2B5%2BouRNwacp1wFUdSgjzH56TMk6%2F5y%2BWggPHRMEc5twejZP8fJ0AUyJkf47se89xUeXP838q3cVfDQn8u1LNnsdOVLh%2F73nV0XcZgKQjZqnIxctNHm6LXGMd7yxDMom7%2Blsv5lVwyzFMnJrdMUsOHI51Mfq4zWWFIOI2md9Wq1Q3txSTwU72U%2F7GGKUugSrGGPAJQMSk0%2BNnHxEBiApbQM1vaX7Iz4zqOrPkpgvGIoqJC6UWhYOdhF9FsNsVrhfBNX%2FE3GY2RAMyCS4aODhf4Ammlv49vAKUN%2FxM%2Fk%2FTmbPicJw2UzFM6tQDrrFVGFYQF0oJml3cbe4HoAh0hOeC2VDajKiHmufCsOfX3gHo%2FjscU7QECc9aFLseB1YwOV0ji7GukovJpGfImzrnuITgiZ4jkqBWahlFpWSxbcp99rtk5gFaIw1O7YyQY6pgHzQ%2FH%2FMIWH%2Fr6jeFxYtZGTkpn6zlyQpYvuvr%2FZglhkZmdAqrrRlzuTPUmz90%2FXzy%2BY%2FEEDnjzlyBrBdFtXEfZ%2B3eZs27k3JM0sGRjy6EcY%2FbH%2BqB7jJjt0K0Vn5PXetF34cMNGfnymBw%2F6WACzlg7mSQkOVmvcRhN6jSW7lKwL2TD5DbXyrzoM7OTf3%2FnUJkzAAtyju8Kj2GGa%2BXC7rbkT9vqTuvyv&X-Amz-Signature=fb8ffd65a7fa10ed075af954ffeeb68634629f4ea924883ea68b8e7d4a16679d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFV2VEIH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2%2Ft3cgMy27%2FV09NvPAcvmLIwjFXB651rixiy9FhytGAiBWg3yY58JRVyE7n76qyRGgxlzQJvkTRu3i9WxwlDAjqiqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMj4dAu3wfG3z%2FsE9QKtwDu7g6RZ%2FTjzEEjdcKrriIqoUto7p2XMjnBNbhnxzo9G1N%2BFt1LV6iYD8xy0nLOBKR%2Frtu48K5Svtk%2Fj%2FAm3DVUiSxD0JyBaqesAr%2Bk2rMDLbb13INC5ABc3ZRJvj9MDpjh7Ui9qmXRGkW7RQ9%2FVkBvwmwG0h4kG22oX%2FE5hFWESmUtZ4OSFSd%2FJb6f3PokOMDLJEcPqCQ89%2B5%2BouRNwacp1wFUdSgjzH56TMk6%2F5y%2BWggPHRMEc5twejZP8fJ0AUyJkf47se89xUeXP838q3cVfDQn8u1LNnsdOVLh%2F73nV0XcZgKQjZqnIxctNHm6LXGMd7yxDMom7%2Blsv5lVwyzFMnJrdMUsOHI51Mfq4zWWFIOI2md9Wq1Q3txSTwU72U%2F7GGKUugSrGGPAJQMSk0%2BNnHxEBiApbQM1vaX7Iz4zqOrPkpgvGIoqJC6UWhYOdhF9FsNsVrhfBNX%2FE3GY2RAMyCS4aODhf4Ammlv49vAKUN%2FxM%2Fk%2FTmbPicJw2UzFM6tQDrrFVGFYQF0oJml3cbe4HoAh0hOeC2VDajKiHmufCsOfX3gHo%2FjscU7QECc9aFLseB1YwOV0ji7GukovJpGfImzrnuITgiZ4jkqBWahlFpWSxbcp99rtk5gFaIw1O7YyQY6pgHzQ%2FH%2FMIWH%2Fr6jeFxYtZGTkpn6zlyQpYvuvr%2FZglhkZmdAqrrRlzuTPUmz90%2FXzy%2BY%2FEEDnjzlyBrBdFtXEfZ%2B3eZs27k3JM0sGRjy6EcY%2FbH%2BqB7jJjt0K0Vn5PXetF34cMNGfnymBw%2F6WACzlg7mSQkOVmvcRhN6jSW7lKwL2TD5DbXyrzoM7OTf3%2FnUJkzAAtyju8Kj2GGa%2BXC7rbkT9vqTuvyv&X-Amz-Signature=247708307cf2164c4f29ca4dcf52a386e19a1c86bd0aaa350f29811dc5352b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
