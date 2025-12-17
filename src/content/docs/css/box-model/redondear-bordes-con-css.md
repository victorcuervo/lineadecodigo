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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGUH3T6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGowSwNdDHRWnVqeTJqasjiINwOYZHW%2BwpnYWJgVRj5WAiEA5NemOj8BgxZ%2Bh11rCQtGGBvd1TuIpLzFHtSoCNtiZu4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBr1lbui3pZRKwxyICrcA6zhvmXlmF240gL4rXHdedgIQaCzeu4eNHt%2FbfFWwZc607yskBhwItgsU13Li4UtPWOvppiCHKycnhjbSAVdAE180gheM4Mi%2BBpt%2Fdby6GVRm43xxmJ0P8AC0QmI%2BBK4LiW7%2FAHiLF%2BsvlifbLqHQe05NbRRBnsl4vrngy5zSXktt9%2FtamFMQ5I9FK2SClD1evuYyJBjUYNovF2Q%2FHfzZAgPD5eUlGuaH2TZnWR%2By%2Bgv1Tb8HcHmbO62vNnySlfnyrLXR%2Fr%2B2mzojWbThYKUivTq34hitaQEEL7JYPZEfFihnVYc4lmSNUb7A5M9lJfMUsKlRBh4vaWy70WoKqeHSff2csrN7lYUAPOit2Ei4i9t8qbC%2FIfOT3EMmJ5x0Q52CyQnOwvjgIUb2dh7x%2B%2FYS%2BiqpnwglteZCIvcV1GRccU92vOiZsoEA3fiNIvwohBCBuWEHRO2vsTV5sJo5fCZjwTmyL2QtIME1R9k7VVUkKYH1H5UcYuaiP6Lxraz5dVuAU2hKvFsstfGiHI1T%2FbGd38NEQ7M9yU4kszWftYtaKC6EptiVCbTtmiEZogpNJzFlpWW2iLWK4vl1ZT2tc%2Fu%2BMRcyL5nnr1nsJw6rzE0B0HnOIjC8ss6HZE8Npp2MJOziMoGOqUBUckAxYxTq0xWmwzq%2B%2Bw1CD8BzttXiriEQYrgEVZ442DYGXagXWabPEcOv27nfL1V%2BypU%2FPRn7pvwYa3HJvUvUorXNMVRCMDxD8dCEBbW3BHfXGZDN%2FbkvxpgZY0VgE4gLToEbEG3shYaehgVbn9Eo1ScDjeXatIelWNiot%2BK4beRTc5NnxA%2B1J%2FrjmdAkiU1uDwAEt5UBOvns9KtMBC01%2Fp3pv1Q&X-Amz-Signature=a38122c9dd050d772c79ff45bdc031ba59c86a7f38866ba0ef98fafbde423465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTGUH3T6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGowSwNdDHRWnVqeTJqasjiINwOYZHW%2BwpnYWJgVRj5WAiEA5NemOj8BgxZ%2Bh11rCQtGGBvd1TuIpLzFHtSoCNtiZu4q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBr1lbui3pZRKwxyICrcA6zhvmXlmF240gL4rXHdedgIQaCzeu4eNHt%2FbfFWwZc607yskBhwItgsU13Li4UtPWOvppiCHKycnhjbSAVdAE180gheM4Mi%2BBpt%2Fdby6GVRm43xxmJ0P8AC0QmI%2BBK4LiW7%2FAHiLF%2BsvlifbLqHQe05NbRRBnsl4vrngy5zSXktt9%2FtamFMQ5I9FK2SClD1evuYyJBjUYNovF2Q%2FHfzZAgPD5eUlGuaH2TZnWR%2By%2Bgv1Tb8HcHmbO62vNnySlfnyrLXR%2Fr%2B2mzojWbThYKUivTq34hitaQEEL7JYPZEfFihnVYc4lmSNUb7A5M9lJfMUsKlRBh4vaWy70WoKqeHSff2csrN7lYUAPOit2Ei4i9t8qbC%2FIfOT3EMmJ5x0Q52CyQnOwvjgIUb2dh7x%2B%2FYS%2BiqpnwglteZCIvcV1GRccU92vOiZsoEA3fiNIvwohBCBuWEHRO2vsTV5sJo5fCZjwTmyL2QtIME1R9k7VVUkKYH1H5UcYuaiP6Lxraz5dVuAU2hKvFsstfGiHI1T%2FbGd38NEQ7M9yU4kszWftYtaKC6EptiVCbTtmiEZogpNJzFlpWW2iLWK4vl1ZT2tc%2Fu%2BMRcyL5nnr1nsJw6rzE0B0HnOIjC8ss6HZE8Npp2MJOziMoGOqUBUckAxYxTq0xWmwzq%2B%2Bw1CD8BzttXiriEQYrgEVZ442DYGXagXWabPEcOv27nfL1V%2BypU%2FPRn7pvwYa3HJvUvUorXNMVRCMDxD8dCEBbW3BHfXGZDN%2FbkvxpgZY0VgE4gLToEbEG3shYaehgVbn9Eo1ScDjeXatIelWNiot%2BK4beRTc5NnxA%2B1J%2FrjmdAkiU1uDwAEt5UBOvns9KtMBC01%2Fp3pv1Q&X-Amz-Signature=ff267d89bd689a18a4d40f844e74d2a49a37b71521a6e207ebc14da19918385f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
