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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGA6QLY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUkz52upaAlf6pN1myIhi611T52AhqRdbai%2Bri2nY8iQIgXHjOotpQOsc4uv568%2Fd3K73X4wqO%2FJsO8d7i2amwpzIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDA1UdkSLCSqu3CCMVSrcA8%2BD23JR6yXTe9AdU8%2B8GcXFMvyCS1s4EkcOENQ5KsTPeIZJPbX7r2R7Lj8TeFMgidRGHea%2By79BOQJGgNd8uPAg7mLDO7MLDvW5nFDjPEPKI2CA%2FmNkCHTCkR1mVjCtTPQ2JHWCnpm3BwQ%2Bx3ltx7XLSLHp8YQqrUI7gf24tPP%2F6tCX4RYNFmg%2BWSjfgPPB%2Fx4G9oR6mLoWbn3280ah7QAuHxXSbuwFLg2oFbxof6rlIpLzDvAWQIK8cXlbBMJy3PL%2FmGufnDXsda0J86N6qJgBE%2FbuoO7m95%2FgQYoWFBViqzLU95K6coMTszSBDAk2SfjmwJoWp2c2k63sgRKDDv6zJthvrr6lDeztrv%2Bhr0IckyBpb0l7O7VXecRyq8tuJzefHiEsG4VF2fD2XjODQZyzkx2%2FZa3r2NaIjhmGpKfZjgi0%2B28ftHru52J5tHcUInXXNhMUOjhXo1DEhm7qDvCg%2BAGw8gIwacWfeLL2rfK%2BBrvP9Jvte%2FYB76uYkWVyj99pmQdWjJwE3k7PjKHH0hb8tCWZep5G7g1MPeIHoJbF%2FxB75mfc%2BsFLhHp4jluLbdBkHBYT%2BGJoeGAfRVa%2FRPYmD5NoAvv5YIS5SUdxdlJ6efaHdOHO%2BtJtm8AxMNCdicoGOqUBVxhbY2RJemECDcfZ29BQnn%2FRh%2Fuyh5Sc2lNTqEYEN68HQ%2BRVS%2BDCCVqtjB4wCx6oMXsrLfsiUIvSvxrFiS8wZ4NSdbXMtvYD1lT9VtqAGL0IaemcbLWsLfxiSP3eONfI13LVPPQ8PB9R15XsyfX7dBf87HhsJVND5hugJArjzf244cqUmaOICPiU6Fk6TnwoTtZ6GThqoVWMx8U5CuHyqkhQgrsn&X-Amz-Signature=1497525c322e70f177ffaaaf762ff86f372d56ac21aba3b48b46922f5603e970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJGA6QLY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUkz52upaAlf6pN1myIhi611T52AhqRdbai%2Bri2nY8iQIgXHjOotpQOsc4uv568%2Fd3K73X4wqO%2FJsO8d7i2amwpzIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDA1UdkSLCSqu3CCMVSrcA8%2BD23JR6yXTe9AdU8%2B8GcXFMvyCS1s4EkcOENQ5KsTPeIZJPbX7r2R7Lj8TeFMgidRGHea%2By79BOQJGgNd8uPAg7mLDO7MLDvW5nFDjPEPKI2CA%2FmNkCHTCkR1mVjCtTPQ2JHWCnpm3BwQ%2Bx3ltx7XLSLHp8YQqrUI7gf24tPP%2F6tCX4RYNFmg%2BWSjfgPPB%2Fx4G9oR6mLoWbn3280ah7QAuHxXSbuwFLg2oFbxof6rlIpLzDvAWQIK8cXlbBMJy3PL%2FmGufnDXsda0J86N6qJgBE%2FbuoO7m95%2FgQYoWFBViqzLU95K6coMTszSBDAk2SfjmwJoWp2c2k63sgRKDDv6zJthvrr6lDeztrv%2Bhr0IckyBpb0l7O7VXecRyq8tuJzefHiEsG4VF2fD2XjODQZyzkx2%2FZa3r2NaIjhmGpKfZjgi0%2B28ftHru52J5tHcUInXXNhMUOjhXo1DEhm7qDvCg%2BAGw8gIwacWfeLL2rfK%2BBrvP9Jvte%2FYB76uYkWVyj99pmQdWjJwE3k7PjKHH0hb8tCWZep5G7g1MPeIHoJbF%2FxB75mfc%2BsFLhHp4jluLbdBkHBYT%2BGJoeGAfRVa%2FRPYmD5NoAvv5YIS5SUdxdlJ6efaHdOHO%2BtJtm8AxMNCdicoGOqUBVxhbY2RJemECDcfZ29BQnn%2FRh%2Fuyh5Sc2lNTqEYEN68HQ%2BRVS%2BDCCVqtjB4wCx6oMXsrLfsiUIvSvxrFiS8wZ4NSdbXMtvYD1lT9VtqAGL0IaemcbLWsLfxiSP3eONfI13LVPPQ8PB9R15XsyfX7dBf87HhsJVND5hugJArjzf244cqUmaOICPiU6Fk6TnwoTtZ6GThqoVWMx8U5CuHyqkhQgrsn&X-Amz-Signature=47bf346b699123628c9e7dd3f3dde278045fcb4cd360f86dfd75245a835e951f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
