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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSLTKFSS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0BnRx2wWdh8fhL2qJDCA5JdPhq21j3W15Gg1eWB5fwAiEArUkSRBaCUE0iyvBdwdk8nZTanYFoB1%2B%2BEcttFjZxICcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7i0h8%2B%2F73EthdgTCrcA5q1680nZdxtNnDhD2KQWQ6dRkBTCxfn4GJeGQ9iZv9xyh2ktGf8RtFrGms4eUNDd8QDOVUKfpckaPt%2Fdb8WAThkABXRMRuOOTvfCrIg7hRHaSyJrbNL1pfXci6IrCZ7p9t6uluM28ORxWRIcA2T4Pcdgof%2F2%2FJpfabXOFd0BBGI%2BVO6hjZlzbTBVU5yhn1zHca%2BeWRX23gqwGWozyHODSR3Vx%2BxZTvVYpul9HR2nl3pNt0qb7WFPlYSTlAbqbTlAxU6bkZFFnOEOYuUPqtz15GBG4oOTmhfpghQlNWLZmypx1o4baHRXOVGURkS%2BDGzjcc965BP%2FPMsdBk1NLL333RNaUqpxLnQcdmkfBiz1dISkBu8XZVkeBrMOVxjtYpxFb91xaAt2o20EE%2BzjO96ayVIMMf%2BbfHYqK0AEylfW8CqYchbgDNvpcAHJLlCnEXHGEYUvP%2BRXr%2Fw9Ub76aLfk8FrZUfbE%2FB8xEHgEyRYxzFKFvvqS5QUr1h99qCP4%2F455Hj1hF3OySeAE3X638odX%2FAq7ntgXgJsWDr1QFPp7Cdn1Z1mhpROIxJbsYqHAteTucgBPZwTyS6vV589W%2BXISU%2BOetHjnVGMmujNYAwfCjeuHvjpA%2BB1PT7CDcvvMLKH3MkGOqUBQI8wZfQFRV%2FXIAnQUiUlFRr5wyAwRdHPZNgziJ4H20PfW74UWksx0DpfT9fjuV75Oxymv4hmHn4ehGL1rGYsAHLCMGCanXweCGBTN%2FVSwPNVrV7kTxtdBJQfxuwY3rx6Gd4xTfEYKrqbVeguRHI0ddGBScT6MgwWqeUKew5Y6zdGZ00ymfWh8kl6rrbWoUJdkDQL44aniL6uGySXFz1O685am%2B7r&X-Amz-Signature=5fa46af8ca13d94f502005f9f338eeff24e6e83b627348f1cb604047699e18dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSLTKFSS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0BnRx2wWdh8fhL2qJDCA5JdPhq21j3W15Gg1eWB5fwAiEArUkSRBaCUE0iyvBdwdk8nZTanYFoB1%2B%2BEcttFjZxICcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7i0h8%2B%2F73EthdgTCrcA5q1680nZdxtNnDhD2KQWQ6dRkBTCxfn4GJeGQ9iZv9xyh2ktGf8RtFrGms4eUNDd8QDOVUKfpckaPt%2Fdb8WAThkABXRMRuOOTvfCrIg7hRHaSyJrbNL1pfXci6IrCZ7p9t6uluM28ORxWRIcA2T4Pcdgof%2F2%2FJpfabXOFd0BBGI%2BVO6hjZlzbTBVU5yhn1zHca%2BeWRX23gqwGWozyHODSR3Vx%2BxZTvVYpul9HR2nl3pNt0qb7WFPlYSTlAbqbTlAxU6bkZFFnOEOYuUPqtz15GBG4oOTmhfpghQlNWLZmypx1o4baHRXOVGURkS%2BDGzjcc965BP%2FPMsdBk1NLL333RNaUqpxLnQcdmkfBiz1dISkBu8XZVkeBrMOVxjtYpxFb91xaAt2o20EE%2BzjO96ayVIMMf%2BbfHYqK0AEylfW8CqYchbgDNvpcAHJLlCnEXHGEYUvP%2BRXr%2Fw9Ub76aLfk8FrZUfbE%2FB8xEHgEyRYxzFKFvvqS5QUr1h99qCP4%2F455Hj1hF3OySeAE3X638odX%2FAq7ntgXgJsWDr1QFPp7Cdn1Z1mhpROIxJbsYqHAteTucgBPZwTyS6vV589W%2BXISU%2BOetHjnVGMmujNYAwfCjeuHvjpA%2BB1PT7CDcvvMLKH3MkGOqUBQI8wZfQFRV%2FXIAnQUiUlFRr5wyAwRdHPZNgziJ4H20PfW74UWksx0DpfT9fjuV75Oxymv4hmHn4ehGL1rGYsAHLCMGCanXweCGBTN%2FVSwPNVrV7kTxtdBJQfxuwY3rx6Gd4xTfEYKrqbVeguRHI0ddGBScT6MgwWqeUKew5Y6zdGZ00ymfWh8kl6rrbWoUJdkDQL44aniL6uGySXFz1O685am%2B7r&X-Amz-Signature=f118e946cd9344ada4c1f454a994f0c9a626fe4694e80ccdf5b8e90e064afb49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
