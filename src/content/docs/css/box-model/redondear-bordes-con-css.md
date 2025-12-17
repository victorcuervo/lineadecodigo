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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSG4HZBK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQrf4SwbrrWOJRk%2FulmA%2B1twRtfMSER%2BWfYb0Xx3XUzAiEAjiQhBTRpy3d%2F1t4GECP9OEp%2BsG5b0RFkv%2FJSt8KuGhUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPeSjaoatxVO9tU%2FlircA1vc7wXjnIdrJ5W%2FH87jDlP2KgYrE4%2BidWlcggfaXWdtnxVEGHPlhqN3cDKOFzImD7aTO%2FHHN7sBH0daMDJ03uo%2Blvfur5kJFrYFWgEz8zuOimR03C49%2BRl%2BSlm5ATua9hPH3ylNOsdjP3J8%2BUCukWXKxYkC0CjSGNeTbrW84eOqSXszieE3rqMLt1%2FWJyQXJ%2BPOylg13iEGKerxexoVgZEZnwHsSRMonw0hlxPKarfkaVQQvRZMYIa0dHe2SeFl1Nd7YWs%2BdDPKBa1SjtYtlPu%2FICOIwuSgIvhjdKXNafTAN7JVwg0ERDjfjxA%2Bb%2BA1EbbMvgMSFcvVdSGg56xEMyWV838OtqEY%2Fo5knWycIeZ9J7B9S5%2F4nJYieUYn%2FB8uX8VQ6AA66VgKzmlNA3vaW7VTUC%2FIW6aC9FqY1FcRAGoGtyXrOs%2FYyU8lZ28Q7yJaET7%2FZtkUGTIE2vLUbPT2ppSAvQ70rDrsw1KEgyLJBN4tC26wJB3YaJQZxWaXnnHjiDj11hLQW8KswSOTnueCXb5C86rm7lpsfjFObP9dL%2FDsO3cegCbh7lNRT1pWl2VxQMvgmFF8Wt%2BibOp0p6pM%2F6FB9ThaEKAlUx8QCVpJXtdupm%2Fwnpraw49Cbcz8MPLFisoGOqUBGljckZrrhFBuukyeYsEGakMfU0HNjIjZ0YSz6KC%2BHx0SlpRVJ7qfnFXTW1HQ%2BzT1m5weTqqqai7UScPBzORJnwr1fCMY5Dr0kcpERCTigPVdoJ%2FPPp%2B0bZhAhiIZEGu%2BSKwT2RjXtDO6T1RSBGISZ0U2qswFKx7O26HxZ6UTmxn8CIDoK2iXyIop78aSJpiYIaO7aE0kgsMn6c3ic4Isc96E8jvw&X-Amz-Signature=33d767c05d52fcbef3e0da720c4796a3d3d82c648513500429d2e4fd2d77f883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSG4HZBK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQrf4SwbrrWOJRk%2FulmA%2B1twRtfMSER%2BWfYb0Xx3XUzAiEAjiQhBTRpy3d%2F1t4GECP9OEp%2BsG5b0RFkv%2FJSt8KuGhUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDPeSjaoatxVO9tU%2FlircA1vc7wXjnIdrJ5W%2FH87jDlP2KgYrE4%2BidWlcggfaXWdtnxVEGHPlhqN3cDKOFzImD7aTO%2FHHN7sBH0daMDJ03uo%2Blvfur5kJFrYFWgEz8zuOimR03C49%2BRl%2BSlm5ATua9hPH3ylNOsdjP3J8%2BUCukWXKxYkC0CjSGNeTbrW84eOqSXszieE3rqMLt1%2FWJyQXJ%2BPOylg13iEGKerxexoVgZEZnwHsSRMonw0hlxPKarfkaVQQvRZMYIa0dHe2SeFl1Nd7YWs%2BdDPKBa1SjtYtlPu%2FICOIwuSgIvhjdKXNafTAN7JVwg0ERDjfjxA%2Bb%2BA1EbbMvgMSFcvVdSGg56xEMyWV838OtqEY%2Fo5knWycIeZ9J7B9S5%2F4nJYieUYn%2FB8uX8VQ6AA66VgKzmlNA3vaW7VTUC%2FIW6aC9FqY1FcRAGoGtyXrOs%2FYyU8lZ28Q7yJaET7%2FZtkUGTIE2vLUbPT2ppSAvQ70rDrsw1KEgyLJBN4tC26wJB3YaJQZxWaXnnHjiDj11hLQW8KswSOTnueCXb5C86rm7lpsfjFObP9dL%2FDsO3cegCbh7lNRT1pWl2VxQMvgmFF8Wt%2BibOp0p6pM%2F6FB9ThaEKAlUx8QCVpJXtdupm%2Fwnpraw49Cbcz8MPLFisoGOqUBGljckZrrhFBuukyeYsEGakMfU0HNjIjZ0YSz6KC%2BHx0SlpRVJ7qfnFXTW1HQ%2BzT1m5weTqqqai7UScPBzORJnwr1fCMY5Dr0kcpERCTigPVdoJ%2FPPp%2B0bZhAhiIZEGu%2BSKwT2RjXtDO6T1RSBGISZ0U2qswFKx7O26HxZ6UTmxn8CIDoK2iXyIop78aSJpiYIaO7aE0kgsMn6c3ic4Isc96E8jvw&X-Amz-Signature=37e8df2e3b8ea7fd748327800d5a9d5162bdcee769f465caadb65c59bd093edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
