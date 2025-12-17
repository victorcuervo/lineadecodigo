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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEAZAM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfJaZnLTyneD1uEguI2HxsXHTI9SRBc5PKy%2FXqpqnuZAiEA3bWWXRGvwEAqcRkS8nyMb0FEast8aSRaCThT%2FqXkHUEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALmBch2%2BYC%2F7a7l6CrcA1JGm%2Fe1N8gL8JMctw4XPst4tzJpA6zBbU8TdEOXxujD28biXfHh1gL%2BQTd9dEBYaRW2qPMbKWzRPl08E8gr6iaa6OtQ%2FxAYX4ErSL5Ets8pjoyytMUL1XwkyfnnzumU8YKv5dSgYmAk2meajOf31KYJX957X%2FGTprZrt%2BB2MR3OBea0my55Dh7thteGKppk0YRJPF3xAfO5UhT5hj%2BQbqud6dfqRCXhL7o6%2BYjUffdFGwFCYiIAWiFo6fZ4%2Fnv47yW%2BkmDQ5VN4z1l%2BIGfOFgrwEPsiEN7iGS6sRawQ3X%2Bc4%2BJfU7nSrxA%2FlPVc0VwmQpEp83WtGBp%2BHrnjzZ9V0NyA5iE738i17ABLIma1KnnNOZz1pkdWoS3ZNULWKIAV53Jdxm61lp9YjZEHtv2UPHqfttSMRuS0OKkLpSARqJnqD2LszbT3EVTxhqPg3dvAmNpeFb09rv7VSHq%2FVzudFyeFwG686gBUlPuyySsUsYFIUPLBLkkD3AulXYb%2BzGioWPlfn5bBK%2Fz4BsatNeEX%2BRRPqbpNe7Du4yTa3hhxb1DHdO3Ny2Gyoc%2FjSrkokM9BVXoY9hN3OKbST2rpBzr%2BCwbiM0m7oT1f8utl42PxbbMRpLpdZTiV5YduWU4pMIufi8oGOqUBZIxRLGXGBhj6lSPT99hsGvLsjwHAxdtX5uHak2bTK1mJLnAFbSUKtPC%2B46oDFAr3PdWRvlLYx35RdYeEHxo2E68AsmnhnpMSh7QSaCbyMIuS%2B16cVXyLYSSB%2Fe2a65iF5v0x1cJI0fNRusqrZIPwLBT6Tk65a6se99%2FoBn2MjhUDSMKEg%2BCnjsXPmPSlHvZxdlWjQo3QNTGtRPH%2FRVxH19pPd7AJ&X-Amz-Signature=9134d7ae78d1f4844945955435c06c0e77934d8feb69b04f113fc84bfba6f898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJEAZAM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGfJaZnLTyneD1uEguI2HxsXHTI9SRBc5PKy%2FXqpqnuZAiEA3bWWXRGvwEAqcRkS8nyMb0FEast8aSRaCThT%2FqXkHUEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALmBch2%2BYC%2F7a7l6CrcA1JGm%2Fe1N8gL8JMctw4XPst4tzJpA6zBbU8TdEOXxujD28biXfHh1gL%2BQTd9dEBYaRW2qPMbKWzRPl08E8gr6iaa6OtQ%2FxAYX4ErSL5Ets8pjoyytMUL1XwkyfnnzumU8YKv5dSgYmAk2meajOf31KYJX957X%2FGTprZrt%2BB2MR3OBea0my55Dh7thteGKppk0YRJPF3xAfO5UhT5hj%2BQbqud6dfqRCXhL7o6%2BYjUffdFGwFCYiIAWiFo6fZ4%2Fnv47yW%2BkmDQ5VN4z1l%2BIGfOFgrwEPsiEN7iGS6sRawQ3X%2Bc4%2BJfU7nSrxA%2FlPVc0VwmQpEp83WtGBp%2BHrnjzZ9V0NyA5iE738i17ABLIma1KnnNOZz1pkdWoS3ZNULWKIAV53Jdxm61lp9YjZEHtv2UPHqfttSMRuS0OKkLpSARqJnqD2LszbT3EVTxhqPg3dvAmNpeFb09rv7VSHq%2FVzudFyeFwG686gBUlPuyySsUsYFIUPLBLkkD3AulXYb%2BzGioWPlfn5bBK%2Fz4BsatNeEX%2BRRPqbpNe7Du4yTa3hhxb1DHdO3Ny2Gyoc%2FjSrkokM9BVXoY9hN3OKbST2rpBzr%2BCwbiM0m7oT1f8utl42PxbbMRpLpdZTiV5YduWU4pMIufi8oGOqUBZIxRLGXGBhj6lSPT99hsGvLsjwHAxdtX5uHak2bTK1mJLnAFbSUKtPC%2B46oDFAr3PdWRvlLYx35RdYeEHxo2E68AsmnhnpMSh7QSaCbyMIuS%2B16cVXyLYSSB%2Fe2a65iF5v0x1cJI0fNRusqrZIPwLBT6Tk65a6se99%2FoBn2MjhUDSMKEg%2BCnjsXPmPSlHvZxdlWjQo3QNTGtRPH%2FRVxH19pPd7AJ&X-Amz-Signature=dd4cc4cb235080a9802cdb380991587c1839d446433ff82ed05ecc85e1696fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
