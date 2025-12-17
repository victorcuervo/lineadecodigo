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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWAFRP2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR1bOcr498b1OdMjOK32BvmIqWwz8E22%2F57DYkHPITOgIgcmKCF%2BBuRtMsJXSydMpNttzvgvw2ldxywrWsG0TlVzsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDO1J26vfwpBqr5ek7yrcA1pZUr5NIIs6Dz6p1KHMjFrbnIP1K3wFTlTHzeo1NcnqfwMzgBjwEZHn%2BtI%2BvNealvZuzVKQICG2d1%2FxIsYPG2QPnB5JVO%2Bc9ZIn3GrlL%2Bdb%2BK8Wv9g1czbbMdSdAWEqoQZWOVmBZOtHS3%2B5orU85nfyfUTfytN0lOadD16z1%2BE8EOfJVSgdrmNKWKmf%2FNLEr1A7IAXvYG4%2BAeMZaZCw%2Bl3BSvnXOBIyDb8Thq3aGiISA2x3FQhvfitFab5gPv3Ea%2FJHzFdlwFA5P2Go4gEaOADO%2FLAua9JFqO5nPpsHQ51Qrf85agULV3cW%2Bz3Efp9SMRDLuzCnmyRLNlqwecAwnbYuHPEW8PbvztOQ4trgPxz4eAh8qM%2FJwhHI2awKnR%2Fpco9R7Qm7eu%2BPO3KlUxpJ2YkKs0h6QW7rfA%2BGyv36ULuPig%2Bdcie3zmxF8hFaEbCoIyVxz%2B7%2BQ%2BNDzQ2FeHO3EFx%2FSzSX1Sgn%2FDqoC8VXCh1JMf8o10hKqyq5K1FKq78PciVglUeukGzzfArOzDGZSRbozrrlRHK%2BOv%2BC1rvqI5lKk1ebV0Ey%2Bz6D%2BwA91DO4ikKuPvHAb5XyJs4ToD0UymyaZEeLqV6b98SfUyEjNCZeJXrhVSA7JmcD6rqDMPWyiMoGOqUBpQdLuulpAwHR9%2FsWrLUOug5D3YBhKbT19jzTQ1QG5v7M095%2B1XnZAugQvLuwvM54XOpokHqt%2BafRaAwtnImkpZssaxlcSUhdbKOiZx1PyienJCYdhlkq2qUQw93Cjgydt4ZOcQvvF5TjIX2gXFuC1dxREol0lxQoCXji2Qu%2BayiJZiAEshRNLsr9UP38gZ4CpdJhu1okxyWqQDBOuhx7DZ8AGCDf&X-Amz-Signature=7ca864155a0ae66cfaed85d3799ee5ee15731febdc23b811f6e8fd53f20c1af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXWAFRP2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCR1bOcr498b1OdMjOK32BvmIqWwz8E22%2F57DYkHPITOgIgcmKCF%2BBuRtMsJXSydMpNttzvgvw2ldxywrWsG0TlVzsq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDO1J26vfwpBqr5ek7yrcA1pZUr5NIIs6Dz6p1KHMjFrbnIP1K3wFTlTHzeo1NcnqfwMzgBjwEZHn%2BtI%2BvNealvZuzVKQICG2d1%2FxIsYPG2QPnB5JVO%2Bc9ZIn3GrlL%2Bdb%2BK8Wv9g1czbbMdSdAWEqoQZWOVmBZOtHS3%2B5orU85nfyfUTfytN0lOadD16z1%2BE8EOfJVSgdrmNKWKmf%2FNLEr1A7IAXvYG4%2BAeMZaZCw%2Bl3BSvnXOBIyDb8Thq3aGiISA2x3FQhvfitFab5gPv3Ea%2FJHzFdlwFA5P2Go4gEaOADO%2FLAua9JFqO5nPpsHQ51Qrf85agULV3cW%2Bz3Efp9SMRDLuzCnmyRLNlqwecAwnbYuHPEW8PbvztOQ4trgPxz4eAh8qM%2FJwhHI2awKnR%2Fpco9R7Qm7eu%2BPO3KlUxpJ2YkKs0h6QW7rfA%2BGyv36ULuPig%2Bdcie3zmxF8hFaEbCoIyVxz%2B7%2BQ%2BNDzQ2FeHO3EFx%2FSzSX1Sgn%2FDqoC8VXCh1JMf8o10hKqyq5K1FKq78PciVglUeukGzzfArOzDGZSRbozrrlRHK%2BOv%2BC1rvqI5lKk1ebV0Ey%2Bz6D%2BwA91DO4ikKuPvHAb5XyJs4ToD0UymyaZEeLqV6b98SfUyEjNCZeJXrhVSA7JmcD6rqDMPWyiMoGOqUBpQdLuulpAwHR9%2FsWrLUOug5D3YBhKbT19jzTQ1QG5v7M095%2B1XnZAugQvLuwvM54XOpokHqt%2BafRaAwtnImkpZssaxlcSUhdbKOiZx1PyienJCYdhlkq2qUQw93Cjgydt4ZOcQvvF5TjIX2gXFuC1dxREol0lxQoCXji2Qu%2BayiJZiAEshRNLsr9UP38gZ4CpdJhu1okxyWqQDBOuhx7DZ8AGCDf&X-Amz-Signature=334fb6f13da806cdbf27e0c850d0d4b3228e82491d5523d654fd405f05bf784f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
