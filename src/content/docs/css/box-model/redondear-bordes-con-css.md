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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP3ZVANI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnenSPkkGD2ec7bmZJAXr0dXNnFif%2Body5XYNeFmiAXwIhAMoqkT8fazWE2hkqIyAG9xRoq3FsJezeiaawGfYPFBAAKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPT9ncrdlJiq2%2FJoIq3ANi163GRBPRRleaPeYP1FKa0kjmg8sS2bWKSqnH47jgamB3vNA83p44UcSgM2hr6%2BZ15RSDnIa2MPZx8Slkklj%2BAXC1ccy4SavZ4F6N%2FyJY0KTV9eKh7qZnBdUsDqCoMZzzBLGvhv13Z3%2BBnAOGDvVmhdTzqExr1ewf4sztIRx3lxZ0Q92bMXFXv9pn7widn8x5HxegtDL8Hu8mkaFFVp13GVbHfRb8Y5F6Jjn9bne6SffHYTzzNVJQer29XMY4oiUvXcsfwyXAPKar9C1zkHXePr3gkkc9%2ByE9%2FGiT0G4cAH%2BiOgQ3xyJbplmNTqDnP3J%2BsnPrSHotvJEMG0x6wP%2FMlTrQ2PyAMNXmABHwDozVmHKd34CPLQB37VOOCv%2BSZcua%2F56Lk5hCScpxviPhV9Uv0r4aNWqt0A0ilUrAYL%2Bdqr5jtgk8nUyhDObR0kBC5SWW24HTnQWin7eOBBwTIgtn1dUASXZfxmfzxSXanEoHu1HL0srHlMzOIZwmwWOyd4l7ad2jMhz2rd4b6x0qmBJGTQUHosUCldgQwDFEzJAWU4tKgTO3H%2BGfSVAidEZl6sbAiRUedpBvGmg8Dh%2Fg9Ma6CuWfDkTTDIraKJCl4%2BAQW3ohpFrEBZQ%2Ft%2FtNLzDOrYzKBjqkAXSmHiipB7JKnz4MZxXASZzLmtEW3ZdsAsVRo4k0ANOu611wiktGNjA3it8NShPabFYVePdhm7EvNA3xi9DBbVBYq%2Be6Ce8KDbMIgzYx1U8HdS6ftYIj7MKaXr5fYgy%2FBfkjA0hMQBdvJribSBSpPe0nD%2BCyOZ76HGJsXn%2BigJsJALV7FDRWTJOwupJBLpvBG1jitDAHFAPvHuCFOgVyHZnx8HDQ&X-Amz-Signature=bde2ccf9851ce95f441d38d3e1158dd374a86f5fb1d7d96f60f3a84e6f830f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP3ZVANI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnenSPkkGD2ec7bmZJAXr0dXNnFif%2Body5XYNeFmiAXwIhAMoqkT8fazWE2hkqIyAG9xRoq3FsJezeiaawGfYPFBAAKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPT9ncrdlJiq2%2FJoIq3ANi163GRBPRRleaPeYP1FKa0kjmg8sS2bWKSqnH47jgamB3vNA83p44UcSgM2hr6%2BZ15RSDnIa2MPZx8Slkklj%2BAXC1ccy4SavZ4F6N%2FyJY0KTV9eKh7qZnBdUsDqCoMZzzBLGvhv13Z3%2BBnAOGDvVmhdTzqExr1ewf4sztIRx3lxZ0Q92bMXFXv9pn7widn8x5HxegtDL8Hu8mkaFFVp13GVbHfRb8Y5F6Jjn9bne6SffHYTzzNVJQer29XMY4oiUvXcsfwyXAPKar9C1zkHXePr3gkkc9%2ByE9%2FGiT0G4cAH%2BiOgQ3xyJbplmNTqDnP3J%2BsnPrSHotvJEMG0x6wP%2FMlTrQ2PyAMNXmABHwDozVmHKd34CPLQB37VOOCv%2BSZcua%2F56Lk5hCScpxviPhV9Uv0r4aNWqt0A0ilUrAYL%2Bdqr5jtgk8nUyhDObR0kBC5SWW24HTnQWin7eOBBwTIgtn1dUASXZfxmfzxSXanEoHu1HL0srHlMzOIZwmwWOyd4l7ad2jMhz2rd4b6x0qmBJGTQUHosUCldgQwDFEzJAWU4tKgTO3H%2BGfSVAidEZl6sbAiRUedpBvGmg8Dh%2Fg9Ma6CuWfDkTTDIraKJCl4%2BAQW3ohpFrEBZQ%2Ft%2FtNLzDOrYzKBjqkAXSmHiipB7JKnz4MZxXASZzLmtEW3ZdsAsVRo4k0ANOu611wiktGNjA3it8NShPabFYVePdhm7EvNA3xi9DBbVBYq%2Be6Ce8KDbMIgzYx1U8HdS6ftYIj7MKaXr5fYgy%2FBfkjA0hMQBdvJribSBSpPe0nD%2BCyOZ76HGJsXn%2BigJsJALV7FDRWTJOwupJBLpvBG1jitDAHFAPvHuCFOgVyHZnx8HDQ&X-Amz-Signature=1c75be4f2228e5f0703b7ffada2fa2d5d95fef0e5f0b1b3c435762d67297ad15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
