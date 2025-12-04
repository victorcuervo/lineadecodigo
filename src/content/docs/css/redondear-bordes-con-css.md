---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6D6YBSK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCYYJB7HGWQ%2FSWRqX59Z%2F6T2xHCQyO%2F8xjbMjhOuqIvAQIgaVJpk22au0fAlYyPfFkRbyiE2iceg4RmWvY%2BGVQCjzkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMfxLhPkt97a3h3FpCrcAwgIKBO69Xc1wdzAN5R493RnelsUklXn%2BmIVs%2FfqIW5usQamqic%2FOd8rcRHXNeoZsR3arPpFsy6mwx6sDV8vIwvXaflHY5poA%2FDdS89B7kseVBZsjkeTRFjwyljzZ3sc9lSqHBz1ZPQRWRUEqvvQ%2FiCNLNfMZ3HVofPIqYShuybVesTj3o%2BvhmVDSMEZ950TyEmATUeFJQGkQ6lGjLqHoWfSFAYq19X1yTbF5aiDT92imY%2B1HMEgUcGzlCL8YCQp%2BEOrN9qRsf79h6OUg1qzrdj2mGjkqbPk1ZkD%2FR6B0xQij4%2FGX%2BPyXb7mhcrMIYcP8mVecUwnaXkxtghHkqYHkROi7CMasuQXssGAi0oMkETDX%2BN9K%2B%2B22TscdJmoqmz%2BG59Vxr%2BGUNGRI%2FDmv%2BEjHY%2BKTJPDIKlvKDjC2JGqEy%2BP9AF%2Bfj%2Fp%2BfawxvmamY0PxWn%2BcMz5Ndit%2F4OM1hqvW8fxEYCNdZULKlyASpFdG78dvHx%2BfO15A%2FWwCvDdGynMsTLqIb8KLufMXUfp8LT20baK2oYX31jU3%2FPmezT7OsS%2FR0gqa%2BgB1HN9f%2FoIWCOaJ8pOHwWUMxJ%2FIc%2Bx7c8%2B2iabJjtR77tk5ua3UE4RwXzYReHSjssKjN530HvEMNvyw8kGOqUBTAWi7AB3HGjDa6rO%2BhUDsec%2B8%2BzrfSM%2FUP18W11owOV4bUNPS2aO65hQZBnFvP5qsN3x3BOxptA%2Fob28zkgk%2FGLHpiGgEL5SUzYtnPc4ozqM02oDacXYucPrQjsGlFUtD%2F6JSPt9%2Bfz9%2BwKuZffKjyI2DRZq5NagEd2UiB8E%2BYVhnKtvquIyG3BOYptnk2h%2B%2FstntEty9c0I8ZE6YUzZiPE%2FWrOm&X-Amz-Signature=fef464a060f0f77de631e43e0ed848f6f1e1514451fc60e2d106db5bf21938e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6D6YBSK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCYYJB7HGWQ%2FSWRqX59Z%2F6T2xHCQyO%2F8xjbMjhOuqIvAQIgaVJpk22au0fAlYyPfFkRbyiE2iceg4RmWvY%2BGVQCjzkq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMfxLhPkt97a3h3FpCrcAwgIKBO69Xc1wdzAN5R493RnelsUklXn%2BmIVs%2FfqIW5usQamqic%2FOd8rcRHXNeoZsR3arPpFsy6mwx6sDV8vIwvXaflHY5poA%2FDdS89B7kseVBZsjkeTRFjwyljzZ3sc9lSqHBz1ZPQRWRUEqvvQ%2FiCNLNfMZ3HVofPIqYShuybVesTj3o%2BvhmVDSMEZ950TyEmATUeFJQGkQ6lGjLqHoWfSFAYq19X1yTbF5aiDT92imY%2B1HMEgUcGzlCL8YCQp%2BEOrN9qRsf79h6OUg1qzrdj2mGjkqbPk1ZkD%2FR6B0xQij4%2FGX%2BPyXb7mhcrMIYcP8mVecUwnaXkxtghHkqYHkROi7CMasuQXssGAi0oMkETDX%2BN9K%2B%2B22TscdJmoqmz%2BG59Vxr%2BGUNGRI%2FDmv%2BEjHY%2BKTJPDIKlvKDjC2JGqEy%2BP9AF%2Bfj%2Fp%2BfawxvmamY0PxWn%2BcMz5Ndit%2F4OM1hqvW8fxEYCNdZULKlyASpFdG78dvHx%2BfO15A%2FWwCvDdGynMsTLqIb8KLufMXUfp8LT20baK2oYX31jU3%2FPmezT7OsS%2FR0gqa%2BgB1HN9f%2FoIWCOaJ8pOHwWUMxJ%2FIc%2Bx7c8%2B2iabJjtR77tk5ua3UE4RwXzYReHSjssKjN530HvEMNvyw8kGOqUBTAWi7AB3HGjDa6rO%2BhUDsec%2B8%2BzrfSM%2FUP18W11owOV4bUNPS2aO65hQZBnFvP5qsN3x3BOxptA%2Fob28zkgk%2FGLHpiGgEL5SUzYtnPc4ozqM02oDacXYucPrQjsGlFUtD%2F6JSPt9%2Bfz9%2BwKuZffKjyI2DRZq5NagEd2UiB8E%2BYVhnKtvquIyG3BOYptnk2h%2B%2FstntEty9c0I8ZE6YUzZiPE%2FWrOm&X-Amz-Signature=f96084d04ad16ba7779f7ab56c98273094e34c85a5ca68f627a3fdeffb08ad6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
