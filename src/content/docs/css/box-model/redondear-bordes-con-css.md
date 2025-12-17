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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4C2HQ7X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9bW7b1nzZYUdrxHBreLDgc%2FGfKV3RdT6IBW87NAPjwIgGCtwOm%2BsR7zh%2F3D36UUug9AiLd2P%2FIEACXQd7yAuFPIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm%2B2J1JSPzaTrWbtyrcA%2FJ%2FWPJ5zUW%2BlKCzQumrBe07qBI1Uu%2B1DJZGYwTsUNg%2F6f%2Buwz47iSLP%2BZVC0VjCd6obXxK9go2OHjZIVidS4tB4amU3n4AApFeLwEeUGkQZVnSwlSVvdLeVS76%2Fa0Ni4U3QgSFj%2BuPBlzf2f3xNobiSShAVWsN%2BfFhKbuwlqWhCoQq2Idnagdsc7SQSYYuVNPsgPyASjTmognRnxDF02TQJ%2BeIqn2fsqfDtd6Cn090Ik645%2BKM9Yc8f6xqnX3zJFxwmFHjztxhPBcu7lvQDn8h3%2FypoW%2BcTEdcNx3NCcI9xmQ%2FTnr9AjgzJIXqLe%2BPPPxwj1Td01rC96TagqjXyPIK8VtXMUqi9oZqppPsbaDz%2B063z5dtIDwRsC1ZIUdyslzOhZTiJx51AVrAvR3GzslZM201F9xFGZaIM2SuYG6kjNKW3tCSprw4y1N%2Fx9gCyIIEGj%2FS4kpoVHm588xCYFOH%2B%2FJgJX9QZg4OQF09oWvx00POLEhysVLYjvwG7rIUynjuUPYcLpiDTLmXTVpLb6bFKLsX8gOaO4dW6fI8zS5%2BVCn1z6pH4xDcrrD64GvbkcLg49bhJS5C2sDk3Qo%2BL7PlY6fVjWnkSLl2wYM552AP%2Bz6axYP04qvLS7BBFMK2Bi8oGOqUBWdbLAdBJZlfaZiwiDkX1R0bj1qORZkiXg494%2FxmLrAaj9KFIHqwQ4%2BTzZWYLi6s8%2BJQvjiFI56OR1NeTzP3Upmnv0znwqSIELdYyBIxC5oVDTRpLL7HqHcm6BmBSQsy2i%2Fcsy%2FB45YunEVVH9HCazHcV30lMc3mO1pEd%2BvxfDGKvuEFoFAoxV3UayNPdQsSZ07879bfg85DMcHUtFNr6RWrFct4n&X-Amz-Signature=fdfa0c0ea1ee404c4012035a291469d8ef14e1dab368b45633336cab7319550c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4C2HQ7X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9bW7b1nzZYUdrxHBreLDgc%2FGfKV3RdT6IBW87NAPjwIgGCtwOm%2BsR7zh%2F3D36UUug9AiLd2P%2FIEACXQd7yAuFPIqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFm%2B2J1JSPzaTrWbtyrcA%2FJ%2FWPJ5zUW%2BlKCzQumrBe07qBI1Uu%2B1DJZGYwTsUNg%2F6f%2Buwz47iSLP%2BZVC0VjCd6obXxK9go2OHjZIVidS4tB4amU3n4AApFeLwEeUGkQZVnSwlSVvdLeVS76%2Fa0Ni4U3QgSFj%2BuPBlzf2f3xNobiSShAVWsN%2BfFhKbuwlqWhCoQq2Idnagdsc7SQSYYuVNPsgPyASjTmognRnxDF02TQJ%2BeIqn2fsqfDtd6Cn090Ik645%2BKM9Yc8f6xqnX3zJFxwmFHjztxhPBcu7lvQDn8h3%2FypoW%2BcTEdcNx3NCcI9xmQ%2FTnr9AjgzJIXqLe%2BPPPxwj1Td01rC96TagqjXyPIK8VtXMUqi9oZqppPsbaDz%2B063z5dtIDwRsC1ZIUdyslzOhZTiJx51AVrAvR3GzslZM201F9xFGZaIM2SuYG6kjNKW3tCSprw4y1N%2Fx9gCyIIEGj%2FS4kpoVHm588xCYFOH%2B%2FJgJX9QZg4OQF09oWvx00POLEhysVLYjvwG7rIUynjuUPYcLpiDTLmXTVpLb6bFKLsX8gOaO4dW6fI8zS5%2BVCn1z6pH4xDcrrD64GvbkcLg49bhJS5C2sDk3Qo%2BL7PlY6fVjWnkSLl2wYM552AP%2Bz6axYP04qvLS7BBFMK2Bi8oGOqUBWdbLAdBJZlfaZiwiDkX1R0bj1qORZkiXg494%2FxmLrAaj9KFIHqwQ4%2BTzZWYLi6s8%2BJQvjiFI56OR1NeTzP3Upmnv0znwqSIELdYyBIxC5oVDTRpLL7HqHcm6BmBSQsy2i%2Fcsy%2FB45YunEVVH9HCazHcV30lMc3mO1pEd%2BvxfDGKvuEFoFAoxV3UayNPdQsSZ07879bfg85DMcHUtFNr6RWrFct4n&X-Amz-Signature=3cbfa0bee3bc986aa861b469fbf5ce86e5c2c4984cf88476369d54a04a7d5fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
