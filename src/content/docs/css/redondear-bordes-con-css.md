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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNELXZE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7fc6yHDCHIhIXSS8Fimc5nJQ2BsH1EL0wXzlXLM6ShwIhAJzKfoMo6tvU6Fmk2kqXiS8%2B5rHYACAmsA9u%2FfIi746YKv8DCHoQABoMNjM3NDIzMTgzODA1IgzBaXdAK0JkVwOrx2Aq3AOF%2BF8Vw9ZlsbhDmIuHCpEXhAFxaBn2EQm9wW9BCxP0uI%2FwrttTN2EmAQMLT1jNvguvHXHmzFcnYJB%2FTwjhDhtTCSXenOfTyNbSy1OUgNhugXCA5gDu5UZDnd894STNgeMAoZLPKatqkG5h6DxGGguI%2Fjqdkb71m5JtpAgbXVLpHpEsyRADbQnqsZKfYg%2FL2a7xJ9hxeHosfeC0Q0%2Bb3KDwbg5t8G%2Fd%2FbfjsnTTl1HffMuH8RQKq5wfL17soeFNEJ8JCtKuspgSWmptsf97ZLyDmGfds4TvQfGedK9GXiOqHpJjIrGO2c%2FhebzF3JibiSQCJ8byDVuMtTbjhkhjvEiLUrbYe%2BG12wefbEPS3Y8KB1tEKqollO2DiAdNX3cILImpO3f0TlH1gH4ZWiPCYlms%2BmlUDHk1jQ3WTC%2BI5Y%2FXJTGCke0BiEIh%2BjfNHxzlYYwXcSSdC28%2BktScQhcnNPsH2uhJhAPPSyXeHpUQlp57fyMSBmEDNe43VYoNcqqjjHNWcWZAMMew5X4%2B6P770p51cParNI%2BANM%2FK8MhoA6FE5dTVovDsDaYyP0MbbHHSvNSOBNrPi2vl8G3uF2JT0FkKeQJnbV2V05dBOBP%2FeOnQnLJPoAwpQXoFG5zCYTDkx9HJBjqkAXI63Bnwwsbment5pd%2B5tZDeU2ms27WEOxTCr5sk2llCvodhn%2FChbCvtI5tFlFf3LDSiI6oukLA8aemUVqotM77KlsbpFOzIfBDBrowtWHbeSpoSYKZfIa7zcdbWG5mPpY5eah6Sg90djorAJQiBYIEL6uw1rAU8o2TLypGG7jqe%2BI9LQmYIjERdKgrzEW%2F0A%2FAngYgx3QP4HbUD9u1dd%2FkPmxhc&X-Amz-Signature=504117fe0517aeee654e0793e9feeeefa87a0200bbf2648ca2de0a46defb545a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XNELXZE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T190033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7fc6yHDCHIhIXSS8Fimc5nJQ2BsH1EL0wXzlXLM6ShwIhAJzKfoMo6tvU6Fmk2kqXiS8%2B5rHYACAmsA9u%2FfIi746YKv8DCHoQABoMNjM3NDIzMTgzODA1IgzBaXdAK0JkVwOrx2Aq3AOF%2BF8Vw9ZlsbhDmIuHCpEXhAFxaBn2EQm9wW9BCxP0uI%2FwrttTN2EmAQMLT1jNvguvHXHmzFcnYJB%2FTwjhDhtTCSXenOfTyNbSy1OUgNhugXCA5gDu5UZDnd894STNgeMAoZLPKatqkG5h6DxGGguI%2Fjqdkb71m5JtpAgbXVLpHpEsyRADbQnqsZKfYg%2FL2a7xJ9hxeHosfeC0Q0%2Bb3KDwbg5t8G%2Fd%2FbfjsnTTl1HffMuH8RQKq5wfL17soeFNEJ8JCtKuspgSWmptsf97ZLyDmGfds4TvQfGedK9GXiOqHpJjIrGO2c%2FhebzF3JibiSQCJ8byDVuMtTbjhkhjvEiLUrbYe%2BG12wefbEPS3Y8KB1tEKqollO2DiAdNX3cILImpO3f0TlH1gH4ZWiPCYlms%2BmlUDHk1jQ3WTC%2BI5Y%2FXJTGCke0BiEIh%2BjfNHxzlYYwXcSSdC28%2BktScQhcnNPsH2uhJhAPPSyXeHpUQlp57fyMSBmEDNe43VYoNcqqjjHNWcWZAMMew5X4%2B6P770p51cParNI%2BANM%2FK8MhoA6FE5dTVovDsDaYyP0MbbHHSvNSOBNrPi2vl8G3uF2JT0FkKeQJnbV2V05dBOBP%2FeOnQnLJPoAwpQXoFG5zCYTDkx9HJBjqkAXI63Bnwwsbment5pd%2B5tZDeU2ms27WEOxTCr5sk2llCvodhn%2FChbCvtI5tFlFf3LDSiI6oukLA8aemUVqotM77KlsbpFOzIfBDBrowtWHbeSpoSYKZfIa7zcdbWG5mPpY5eah6Sg90djorAJQiBYIEL6uw1rAU8o2TLypGG7jqe%2BI9LQmYIjERdKgrzEW%2F0A%2FAngYgx3QP4HbUD9u1dd%2FkPmxhc&X-Amz-Signature=af55c2a60940233d9cc87f6581d38898ad3263fce1b361923b8bb3c596c20700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
