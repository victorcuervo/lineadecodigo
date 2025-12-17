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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UWNEZU5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6n6wi3TidPVotT3oGaFfiX2seJaqXhgajSZ1IgsypFAiEAhnroJtfDpTmT3r1xQLC2501Di6DEgVq%2B2vdRzX%2BwR6Mq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGtCGTJVUSTq6VtOKircA%2FR4Y1J%2F%2F%2FF8qr4T32PpjHJc%2FEa5uBnrIw2PPefFMBfaUvKdUstIrSNMyakhTi5slrovePLF9wWr%2BxVclwnF2Z0WJSi7L%2BK24pkiQUUvHXuhUj%2BstbFN8QKiJ63%2BNCOVUIfXNzEgihQ%2F5TbLwjgXrJmVCFpfzKy0CI%2FMs%2FcJf2HELebPQ9l%2F2hjWZ%2BIroVSY56z9wFUbq%2FKqC6KghTZRXkAqaZwZfXmdroPHkg8cFlNO0WmdjH5GzZ4Q%2FBukhsgO2Ysult%2F%2B5xYyGrfhEzThLBazswgv4pTxjhI1NMpC1AV%2F7R99OMB5aoBfrC0XZU6X%2FlrkpvcJYfroEpyUYC74%2BB3W0QLU45eFN%2BdKbsrjLe%2BuJ43oj%2BJsy3rouHWJOXml%2FJLeM7BsBF1FiKJBBI6HwmasUURkhVQ8XF7qqgxB0Q7mXCXgPwm9%2BsrB%2B9RDkthBYbD0zUYiWIkGNN6CZ4KlW2g3e29ynq3jcHq8mqfLia0Pmuq2Q%2BThL4givEnP6Of4wFLSQyX3e6NXM%2FUZdgrHpuyxcvLR24c3t96iTlBSuHpjLhuWA3DAGKZb3TQ4M0z6yJxWSLOFNqHvKLnPFuS3cNIKGZnXLCM8sIV9qVwrkmGykycICxLjZMUCbV5gMKSCicoGOqUBG16uiYW1E94xvV2HCEbPkuxgc6fiZYUPU%2FlxwedYsFq0KhMhfj44TKN07OPY4xs7BJ7qAj6PQbXTBQvSU%2FFhsPJNiCx1%2BP8jZk9DRCx0cef0MdYHRGpU7qzVa1dQX1XnkZoIt0%2BSGzPWwEGcBFQT0IorIIuzVlYmzBrNiNKlZU38XUIk8gkJ0Dd6nuD2b2pD4b1hrpOxbSonhHjKM%2FouQPj97LVT&X-Amz-Signature=e384d2532496b211be795711d469ae59c3f3dda236e0e8f0a13445d5af439d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UWNEZU5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6n6wi3TidPVotT3oGaFfiX2seJaqXhgajSZ1IgsypFAiEAhnroJtfDpTmT3r1xQLC2501Di6DEgVq%2B2vdRzX%2BwR6Mq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDGtCGTJVUSTq6VtOKircA%2FR4Y1J%2F%2F%2FF8qr4T32PpjHJc%2FEa5uBnrIw2PPefFMBfaUvKdUstIrSNMyakhTi5slrovePLF9wWr%2BxVclwnF2Z0WJSi7L%2BK24pkiQUUvHXuhUj%2BstbFN8QKiJ63%2BNCOVUIfXNzEgihQ%2F5TbLwjgXrJmVCFpfzKy0CI%2FMs%2FcJf2HELebPQ9l%2F2hjWZ%2BIroVSY56z9wFUbq%2FKqC6KghTZRXkAqaZwZfXmdroPHkg8cFlNO0WmdjH5GzZ4Q%2FBukhsgO2Ysult%2F%2B5xYyGrfhEzThLBazswgv4pTxjhI1NMpC1AV%2F7R99OMB5aoBfrC0XZU6X%2FlrkpvcJYfroEpyUYC74%2BB3W0QLU45eFN%2BdKbsrjLe%2BuJ43oj%2BJsy3rouHWJOXml%2FJLeM7BsBF1FiKJBBI6HwmasUURkhVQ8XF7qqgxB0Q7mXCXgPwm9%2BsrB%2B9RDkthBYbD0zUYiWIkGNN6CZ4KlW2g3e29ynq3jcHq8mqfLia0Pmuq2Q%2BThL4givEnP6Of4wFLSQyX3e6NXM%2FUZdgrHpuyxcvLR24c3t96iTlBSuHpjLhuWA3DAGKZb3TQ4M0z6yJxWSLOFNqHvKLnPFuS3cNIKGZnXLCM8sIV9qVwrkmGykycICxLjZMUCbV5gMKSCicoGOqUBG16uiYW1E94xvV2HCEbPkuxgc6fiZYUPU%2FlxwedYsFq0KhMhfj44TKN07OPY4xs7BJ7qAj6PQbXTBQvSU%2FFhsPJNiCx1%2BP8jZk9DRCx0cef0MdYHRGpU7qzVa1dQX1XnkZoIt0%2BSGzPWwEGcBFQT0IorIIuzVlYmzBrNiNKlZU38XUIk8gkJ0Dd6nuD2b2pD4b1hrpOxbSonhHjKM%2FouQPj97LVT&X-Amz-Signature=2cd38c6a431edca3847a9c7b9ffe729400723ad2e03943d2cd30eaafcf86c4aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
