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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAP3PKN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDskSkXXN9W8fxhYvUq1821Jvr2bAxuM7P43jA%2F21Y0UQIhALXedDuyq2RM8aViZf6cU%2FnFx8XTC2kemvovFaGcvhDBKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytAD%2BChBW9T1avaSgq3ANFYzARGZA0UzruafgPmFLRKGd6uoneeFhN%2FIUQuMpo4GwtnKGLFeI4ZYJLxGo7lxAfbVvs6hOgfUWUWDDsmZafnrwGGyZbljRiinfd7o7FYdIqTm5hc2IvTs3kkeEmjzwIEnD2fUqOU3ydkjqSivd%2FEZsDFX6NVLXBY5ARLBPPKA%2FlB3BhGLmjWujKjDFo6Dv8%2BDfitqf6vu%2FbeJCAhfQmY5J0noDP581%2Fy1gSmkLQamX8hOkcnGOciIpfwynmlp61%2BWBTf57%2FF49Qf%2FGK%2BpJQxwrD4TFgqLB3PACghTfUji3VkTPXwqQ%2FD6A0JzqPP4I0XSLbEMPv18PmR%2BnRkDzIfnlpcWvObNMeBURKSPns22jty3ygrFPrbje1TVR0xhXBg4wMLC0Gb9%2F1PtokNxiB0njTzDzdSq1J5LRqlk87iLhXnEah5YcGDDiljZMGwIrjSG44j0eZw9W%2FqTmoyUx%2BYmuc%2B7bNN6ZwfqYyLIZ1GDVm41CbXBxUH7%2BF1X91nu6JKk7JBaqvZB%2BXR0ETh69o6joTbMAWzdCS2UQmYvM3H3LOvGlWny3n4Py0xv1W9OBgLXCSJGJP%2FP6bljQlOA1H3sG5K49K%2FmzVZ0xMKKUFCxdFoBGwulk0kut4rjCUgYvKBjqkAWJqwoldW6Fg%2Bfwzlr69n3G1AEv%2F1edIG8TFJ5mNCkChNiLZjuwRpdBsOGTRmDDO9s5mpMFy%2BU8CH3yoOieM5OK%2BxHF7Z48NU%2FrQhbr4exsImqKGvpCn9Q3nIOMumTJpR2z1K%2FUEzXDqG0fM%2BR9oTtKBW2xwQmdiKKAFUxcdBGFu7HsPEYud9yStsHmTKZBzkzairWmM432EOf3N%2FaUWbUl%2Fre7%2B&X-Amz-Signature=b08475723fa0ee7cddbcb9fc7ac4bb3220b3e321c5cc898c8aef40231186c925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAP3PKN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDskSkXXN9W8fxhYvUq1821Jvr2bAxuM7P43jA%2F21Y0UQIhALXedDuyq2RM8aViZf6cU%2FnFx8XTC2kemvovFaGcvhDBKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytAD%2BChBW9T1avaSgq3ANFYzARGZA0UzruafgPmFLRKGd6uoneeFhN%2FIUQuMpo4GwtnKGLFeI4ZYJLxGo7lxAfbVvs6hOgfUWUWDDsmZafnrwGGyZbljRiinfd7o7FYdIqTm5hc2IvTs3kkeEmjzwIEnD2fUqOU3ydkjqSivd%2FEZsDFX6NVLXBY5ARLBPPKA%2FlB3BhGLmjWujKjDFo6Dv8%2BDfitqf6vu%2FbeJCAhfQmY5J0noDP581%2Fy1gSmkLQamX8hOkcnGOciIpfwynmlp61%2BWBTf57%2FF49Qf%2FGK%2BpJQxwrD4TFgqLB3PACghTfUji3VkTPXwqQ%2FD6A0JzqPP4I0XSLbEMPv18PmR%2BnRkDzIfnlpcWvObNMeBURKSPns22jty3ygrFPrbje1TVR0xhXBg4wMLC0Gb9%2F1PtokNxiB0njTzDzdSq1J5LRqlk87iLhXnEah5YcGDDiljZMGwIrjSG44j0eZw9W%2FqTmoyUx%2BYmuc%2B7bNN6ZwfqYyLIZ1GDVm41CbXBxUH7%2BF1X91nu6JKk7JBaqvZB%2BXR0ETh69o6joTbMAWzdCS2UQmYvM3H3LOvGlWny3n4Py0xv1W9OBgLXCSJGJP%2FP6bljQlOA1H3sG5K49K%2FmzVZ0xMKKUFCxdFoBGwulk0kut4rjCUgYvKBjqkAWJqwoldW6Fg%2Bfwzlr69n3G1AEv%2F1edIG8TFJ5mNCkChNiLZjuwRpdBsOGTRmDDO9s5mpMFy%2BU8CH3yoOieM5OK%2BxHF7Z48NU%2FrQhbr4exsImqKGvpCn9Q3nIOMumTJpR2z1K%2FUEzXDqG0fM%2BR9oTtKBW2xwQmdiKKAFUxcdBGFu7HsPEYud9yStsHmTKZBzkzairWmM432EOf3N%2FaUWbUl%2Fre7%2B&X-Amz-Signature=030f3fb8cee6c09dfe873b45f05422f3d9fdbccbee116fe705a8be59c19c2b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
