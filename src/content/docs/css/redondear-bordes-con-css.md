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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLT7CWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjphaWQEjUBfKwJkOjQLhtSE%2FH5UiwC0wCdJ1H%2FWDKKAiEApKHsZdDuWzAy%2BjrSJzxDiLLA1D%2Fq4YKta6m7KWUp0%2BIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBClQOMi1EjmhwF7aSrcA3%2F1OMQ27p4y6%2FmxEhs2BCJUzOk%2FjbkO%2FUjArErt3333hPJGTajBSaWFQStAxBxih5%2FSK1bWm1YE7JvXdbqmdmFD7xmqjOZ3%2BpXLCd7oAezedMelJn4MMSkgDDzmf2UrSQivANoBQ8nx2epwXzd%2B91zfZIo7WyVm7XE40%2B9Rr08TPq%2B3EP5JwuIPvPln5DLR2ule7DmIb2R6fRNWlmGterJuRSYe6lBuEsN3rwt1R6VdP%2B8MY01i43%2BNenz4alJTAQfMYqft3v%2BsE8%2FNHHZdv%2F4HXYdXC5p8DjQ9K%2BAXVIaLKyW997ia3zAMghKERRtR54UUl19%2BleaFKKTuEIGgFw%2BbPlE1YIbDqbz00bIVpooHmunpQJMeiILIrMa4pv%2Fp%2Bebnh8fUcRnIoNUe%2BdR%2Bp4goycoZ0c1toR%2BWxrzmPcdp%2FRU6IugVRPPIRSNzWKO%2FR7gAKpYSLUJ3F%2B4e2yKeEau2nebIWqrNP2eMNHW80u4c0NiDZaGwJUNlFLUM5sPc4wkxBoWVSjj%2BcRzkr2P6gyksPpTjNVaYRkSSPuBmSkj5%2B6GCZIRMfl5hVgXvsQtoBp7rCQqBfGAqtDDPhqIZ5eOsuU4jSgptCH3ua%2FvdIfRsDcxeFqvvCI%2B3g%2FjWMMuh2MkGOqUBu%2BGXxJfy0bHX%2FDcAjzC8ZwZM8v7k3Q18h%2BLovZeDvt2MTwGK9ZNf3EubhCeVX%2B0qBbHsYiGni0%2FSBbrwniz6Z8zFbvHiBpDdTZph%2FA2S6g%2F3A17BVXWBLVqz7F4nJodHDFzSv3s9lV%2B38QD6%2F1r%2FXItgU%2BXOF%2FDuffC1%2FDm4dBLwgDJ1btQeUyFBrJWKjjEEp1xa3QZS1ceMueP%2FfmXxX5Hmx%2FE3&X-Amz-Signature=dc9d33a2a900d30807d9284c9b1c869163271d08f9f1cf015b314de067a43846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSLT7CWU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjphaWQEjUBfKwJkOjQLhtSE%2FH5UiwC0wCdJ1H%2FWDKKAiEApKHsZdDuWzAy%2BjrSJzxDiLLA1D%2Fq4YKta6m7KWUp0%2BIqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBClQOMi1EjmhwF7aSrcA3%2F1OMQ27p4y6%2FmxEhs2BCJUzOk%2FjbkO%2FUjArErt3333hPJGTajBSaWFQStAxBxih5%2FSK1bWm1YE7JvXdbqmdmFD7xmqjOZ3%2BpXLCd7oAezedMelJn4MMSkgDDzmf2UrSQivANoBQ8nx2epwXzd%2B91zfZIo7WyVm7XE40%2B9Rr08TPq%2B3EP5JwuIPvPln5DLR2ule7DmIb2R6fRNWlmGterJuRSYe6lBuEsN3rwt1R6VdP%2B8MY01i43%2BNenz4alJTAQfMYqft3v%2BsE8%2FNHHZdv%2F4HXYdXC5p8DjQ9K%2BAXVIaLKyW997ia3zAMghKERRtR54UUl19%2BleaFKKTuEIGgFw%2BbPlE1YIbDqbz00bIVpooHmunpQJMeiILIrMa4pv%2Fp%2Bebnh8fUcRnIoNUe%2BdR%2Bp4goycoZ0c1toR%2BWxrzmPcdp%2FRU6IugVRPPIRSNzWKO%2FR7gAKpYSLUJ3F%2B4e2yKeEau2nebIWqrNP2eMNHW80u4c0NiDZaGwJUNlFLUM5sPc4wkxBoWVSjj%2BcRzkr2P6gyksPpTjNVaYRkSSPuBmSkj5%2B6GCZIRMfl5hVgXvsQtoBp7rCQqBfGAqtDDPhqIZ5eOsuU4jSgptCH3ua%2FvdIfRsDcxeFqvvCI%2B3g%2FjWMMuh2MkGOqUBu%2BGXxJfy0bHX%2FDcAjzC8ZwZM8v7k3Q18h%2BLovZeDvt2MTwGK9ZNf3EubhCeVX%2B0qBbHsYiGni0%2FSBbrwniz6Z8zFbvHiBpDdTZph%2FA2S6g%2F3A17BVXWBLVqz7F4nJodHDFzSv3s9lV%2B38QD6%2F1r%2FXItgU%2BXOF%2FDuffC1%2FDm4dBLwgDJ1btQeUyFBrJWKjjEEp1xa3QZS1ceMueP%2FfmXxX5Hmx%2FE3&X-Amz-Signature=a7ac85302a7db250963c0e312e44c7bc6940964a78466a077fa7b2f0b2e6e0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
