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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWG6QS35%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR3%2FlAzASTPQf7NKtpsouBe1AsiFPfAH%2FMNdJwvq3nFwIgWuM0pJwvNBdGPRH9PWM0xR6lQZou8xwqedji%2F%2F2ZaOUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKtqHcc00UJqjkjW%2FircA0FmMbDRbZuALhYamV5b1%2F%2BkDA9DuRUVZ5%2FQPlceeYRLot5nbfZxKMH24%2BiQlRCrToV5p0pxLEAmR%2BTJuUWhFvgP24oUohAOsziLFiyet1asrT1%2FRDGev8lnPBIkVO%2Fy%2B8eI%2BZ3AvWT%2BNbB0MH%2FVuLuu02lRPDB70Sum4vqWqzF7NcVZsJTQM%2F%2F9LBlZI5oWPp56h%2BSXjHOQS3%2BsF3yNR91ARi821wrf77JGf3PN9J%2BWY24SdUxn4sdzX2ykwzWI8jgOoes%2BH4lnW00qnsILfQ5RJNfPe0mlYMNDWVTZKXnEUU9elHqT%2Fu3I0JqQ%2Blmc3xXwS1TIuyrPT2ntvzxFA%2BrZEG%2FgmSKbXnin7%2F85h4tByD54fRw%2FxU%2Bk7aUF1HOkkWf7O70bfkFaRdA2iz9zYIqCQErZrDNOtVbii2Ox1vse5%2B73rUrS1WIKxjQhW%2F99C44mQqPiW62B2AwHW84gwzdlU2P7nQwokfv3d%2BSSLmQkGNqTNydV0FhLIwOdGyO1aPwsv%2BNTcoGgw1fSEV1g22YD2pr0pClodv6ADToHYlJt35bbs0JOixU%2FdVmlMnKzQz9sDbUPRp7oAHUhmeGqWZ6NNUGq%2FOlvOrjgWjetJNp%2BS1Nyv4ezMWbhP4dgMNTrz8kGOqUBbkVFtka89XiIhEx%2FUVrvbD7%2Ba5Wz3CeFIbQL88Uwq%2FPgIZUXUgib8EFP0Zmxd4yXyIB3AQgN3IUkOU1I30hfgBL5Fmgj7Bqb0u1jHyh1aVsqaFKF55Lo9eSGBR9%2FFiQfRvNVzHzPQak8Anbdt3JPi3uFGNaoK7UcnA6OzMWp1Zye4YjpYwsbJjEM60UslVA6yya7dTIY2nafUnVEwX6p96gmEfAJ&X-Amz-Signature=edfbf0c98413e6667b54b858f4157c57f044b245ea489b881090cef6ebac6ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWG6QS35%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDR3%2FlAzASTPQf7NKtpsouBe1AsiFPfAH%2FMNdJwvq3nFwIgWuM0pJwvNBdGPRH9PWM0xR6lQZou8xwqedji%2F%2F2ZaOUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKtqHcc00UJqjkjW%2FircA0FmMbDRbZuALhYamV5b1%2F%2BkDA9DuRUVZ5%2FQPlceeYRLot5nbfZxKMH24%2BiQlRCrToV5p0pxLEAmR%2BTJuUWhFvgP24oUohAOsziLFiyet1asrT1%2FRDGev8lnPBIkVO%2Fy%2B8eI%2BZ3AvWT%2BNbB0MH%2FVuLuu02lRPDB70Sum4vqWqzF7NcVZsJTQM%2F%2F9LBlZI5oWPp56h%2BSXjHOQS3%2BsF3yNR91ARi821wrf77JGf3PN9J%2BWY24SdUxn4sdzX2ykwzWI8jgOoes%2BH4lnW00qnsILfQ5RJNfPe0mlYMNDWVTZKXnEUU9elHqT%2Fu3I0JqQ%2Blmc3xXwS1TIuyrPT2ntvzxFA%2BrZEG%2FgmSKbXnin7%2F85h4tByD54fRw%2FxU%2Bk7aUF1HOkkWf7O70bfkFaRdA2iz9zYIqCQErZrDNOtVbii2Ox1vse5%2B73rUrS1WIKxjQhW%2F99C44mQqPiW62B2AwHW84gwzdlU2P7nQwokfv3d%2BSSLmQkGNqTNydV0FhLIwOdGyO1aPwsv%2BNTcoGgw1fSEV1g22YD2pr0pClodv6ADToHYlJt35bbs0JOixU%2FdVmlMnKzQz9sDbUPRp7oAHUhmeGqWZ6NNUGq%2FOlvOrjgWjetJNp%2BS1Nyv4ezMWbhP4dgMNTrz8kGOqUBbkVFtka89XiIhEx%2FUVrvbD7%2Ba5Wz3CeFIbQL88Uwq%2FPgIZUXUgib8EFP0Zmxd4yXyIB3AQgN3IUkOU1I30hfgBL5Fmgj7Bqb0u1jHyh1aVsqaFKF55Lo9eSGBR9%2FFiQfRvNVzHzPQak8Anbdt3JPi3uFGNaoK7UcnA6OzMWp1Zye4YjpYwsbJjEM60UslVA6yya7dTIY2nafUnVEwX6p96gmEfAJ&X-Amz-Signature=0f6b47bbee79320e39d9ad918d2bdcf1ee6cb4e4d8e11d384dde46f301df43fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
