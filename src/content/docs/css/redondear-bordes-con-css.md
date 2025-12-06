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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FL25KU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN%2F3FegR%2FACBQ18q5%2Bk6ca5pl1nKnEH2k32ltfFjRa%2FAIgTt41vGAVeg62bcpmWT7G2YZEenjdU3JdVf17%2BbDABGYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKkP9AvFdPdNGILE7ircA3Lzj1wlywJfmbIjjo7Qx1gH9RPxGKJB3pjL2MLvcQnbLDgbyYoFJSTbLFPnRai%2FYI%2B0cjCMsH0tloheZ%2BB%2B2lrHyfOL9wBzTmuxef%2BIZmZg7saNk4iOj%2BejcvR0otA2sMBWbO76r84FwhWPkhKwcW4sd8PU%2FBZyQ0jeoq5ploAU78G1EnSwRFD7OnJ5lqOtNOcQ4htd0Nx9zK5fxuRPOCTG7L9HLHYWlbjKT7FM24g8lQOigZwT%2BNSTr3xMnfOkIcWINYs5eMxzFVF8T14O%2B2BA3jCtgMoEoRkc9cUdlutxAumSEQhN1BrVMwRsGtsJl7LzakQu2qnM5BXuBw%2Bkv1sRhlaQFgEsgI8EBvrdRG54b%2FHNAIdnG1aYVwNc8CEo8vcnOHVxwCSdBZx9UbC5HKHg5%2BMdeEVSbUuFijmUaBnPvN9ORS353InU3tDAkk7zRPwQgbhPBHa9j6qjjb42sbyxhI9dbAnwcsNmC2qcuLzC2M8%2BHBpz7xRaUsVO4Sn%2F0PsAknfZyVuXvMNnhx%2BwtDbZom%2FT0t5QYb7BLrCopsupfzxZhJBcaCMWKSryAbNoC3Vj5aeOqNuURSpr%2FDjLvsZelYbBSzXMAHUiAdxpAuSWVg5%2BZuzekE2V8uVBML6ez8kGOqUBH%2BkqXqNCQFGlNbAVVRg025XTIgWg3q%2FdnEkVyMB3lL0aAcK56%2BbIVwM1Ie%2F6bjVTfJDgq%2F7BFR6w11%2Bt4V6GKekphjOuBXj%2FOPrROruaRBvWN%2Fz2Hu9T0TN8TRGkmthtlvKkv%2BAuNhrFopYSypOFlU9JMaifVh2euzTV%2B9JjG%2FPEw254AO5%2BKy1ZyUgsWscVmaGVyltb7xoXXLDiVHoq6sF5hdc5&X-Amz-Signature=3b67cb5960c88062fb77d06a4422cd3fc81cdda114eb85fb9e6a6f11c64792bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2FL25KU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN%2F3FegR%2FACBQ18q5%2Bk6ca5pl1nKnEH2k32ltfFjRa%2FAIgTt41vGAVeg62bcpmWT7G2YZEenjdU3JdVf17%2BbDABGYq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDKkP9AvFdPdNGILE7ircA3Lzj1wlywJfmbIjjo7Qx1gH9RPxGKJB3pjL2MLvcQnbLDgbyYoFJSTbLFPnRai%2FYI%2B0cjCMsH0tloheZ%2BB%2B2lrHyfOL9wBzTmuxef%2BIZmZg7saNk4iOj%2BejcvR0otA2sMBWbO76r84FwhWPkhKwcW4sd8PU%2FBZyQ0jeoq5ploAU78G1EnSwRFD7OnJ5lqOtNOcQ4htd0Nx9zK5fxuRPOCTG7L9HLHYWlbjKT7FM24g8lQOigZwT%2BNSTr3xMnfOkIcWINYs5eMxzFVF8T14O%2B2BA3jCtgMoEoRkc9cUdlutxAumSEQhN1BrVMwRsGtsJl7LzakQu2qnM5BXuBw%2Bkv1sRhlaQFgEsgI8EBvrdRG54b%2FHNAIdnG1aYVwNc8CEo8vcnOHVxwCSdBZx9UbC5HKHg5%2BMdeEVSbUuFijmUaBnPvN9ORS353InU3tDAkk7zRPwQgbhPBHa9j6qjjb42sbyxhI9dbAnwcsNmC2qcuLzC2M8%2BHBpz7xRaUsVO4Sn%2F0PsAknfZyVuXvMNnhx%2BwtDbZom%2FT0t5QYb7BLrCopsupfzxZhJBcaCMWKSryAbNoC3Vj5aeOqNuURSpr%2FDjLvsZelYbBSzXMAHUiAdxpAuSWVg5%2BZuzekE2V8uVBML6ez8kGOqUBH%2BkqXqNCQFGlNbAVVRg025XTIgWg3q%2FdnEkVyMB3lL0aAcK56%2BbIVwM1Ie%2F6bjVTfJDgq%2F7BFR6w11%2Bt4V6GKekphjOuBXj%2FOPrROruaRBvWN%2Fz2Hu9T0TN8TRGkmthtlvKkv%2BAuNhrFopYSypOFlU9JMaifVh2euzTV%2B9JjG%2FPEw254AO5%2BKy1ZyUgsWscVmaGVyltb7xoXXLDiVHoq6sF5hdc5&X-Amz-Signature=e59a18cbdf627a55fa1654b4f369edd5467236c1f1906690918d6e6f6e05335d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
