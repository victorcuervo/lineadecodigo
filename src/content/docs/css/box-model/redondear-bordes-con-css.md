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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKPGODN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnrbT1COadrk7wSz9dSg1Lx984ietv8JzXU%2BDF5T8fGAiEAlAXW8t2UZ4aqgBoES8mK7RsxFURlQSWC2DCd%2B7m2xREqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqIT1ohY2rxNw4E7yrcAyQH0z%2Bw2MdtNMx6uQdeTAF2MEybrhET5aqno7XPKoPvkpCDwv%2BmndUaLRv89mTNfIvTXAQQmU5RXXFnvsxO5xVOOJunoR%2Fuqrstq9GpR0PiHNfztIK638v4UmiLrOL1qjwPrhLVXWIIZfCCWefrBB4UbuYrT6bACH6lMZxn0DFhop%2B65VfVURdNrWUTItKgnf2KyEHBzqqNEodPnErTm6nEimgSNCHySVDmKxfNgq3j%2FBZp%2BrNeASrP0RxS3g%2FYfveHQUMBFUBTMwWJkzPG3uKsjUNaRgOksDZy9gWkZnefyrHT6Wy8M8NCkV9Rg4XTp%2BX4ODPC0oOr42X3MsCstkKk0l2n03K93LILWA3%2BuYg8TzRc4KTW0T3nbeRrdRqyIMxdF9EWqFF%2FcvwMIUcQWruvIN78c0vANkud6M61XGAAsjc6MxMlhWg4RCYQE0Q3bqPsNkLtHrM1axZqo45chiCc3oZndzzWtPJZXxMqzbYOHNoqTeQSWglizNiyCS%2B%2FmKEPzBp3goZ8NtlxZDZikMFygE%2B%2Fmc5TXi51gYg7jBQxvrDUTUOwAzUc3nj7Nu%2FTDRrVy%2F2l%2BEkKLerSRtnQl3TsEOKoQIziCahxirV8bhDXrUvqhC4GOM6L4fNmMMaLjMoGOqUBtBEzSH7aQCQetTUeFUOtxUFVNqRxvtzCLQRah5%2BrqKreALuh66PdaMzL%2BrCrqLQSx2b6VQDyNgo984ulSgA1Mt%2FGWE14d40vu24b3oM9P2YA1uXtV6ak0NfK%2BiSaTWMr5yamux8gzzfCZR5nD%2BgpRrT1M8m1ZvH1kxJDVAlcZ6ndzEacCI0fPfcVvgMsK2UPK5jtmn4xr1MLGWc8KlnLHRJMHGuF&X-Amz-Signature=c0904a94579333864b7a050a610d01ab0f691300d900114072b0d2a5f2027f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GKPGODN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFnrbT1COadrk7wSz9dSg1Lx984ietv8JzXU%2BDF5T8fGAiEAlAXW8t2UZ4aqgBoES8mK7RsxFURlQSWC2DCd%2B7m2xREqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJqIT1ohY2rxNw4E7yrcAyQH0z%2Bw2MdtNMx6uQdeTAF2MEybrhET5aqno7XPKoPvkpCDwv%2BmndUaLRv89mTNfIvTXAQQmU5RXXFnvsxO5xVOOJunoR%2Fuqrstq9GpR0PiHNfztIK638v4UmiLrOL1qjwPrhLVXWIIZfCCWefrBB4UbuYrT6bACH6lMZxn0DFhop%2B65VfVURdNrWUTItKgnf2KyEHBzqqNEodPnErTm6nEimgSNCHySVDmKxfNgq3j%2FBZp%2BrNeASrP0RxS3g%2FYfveHQUMBFUBTMwWJkzPG3uKsjUNaRgOksDZy9gWkZnefyrHT6Wy8M8NCkV9Rg4XTp%2BX4ODPC0oOr42X3MsCstkKk0l2n03K93LILWA3%2BuYg8TzRc4KTW0T3nbeRrdRqyIMxdF9EWqFF%2FcvwMIUcQWruvIN78c0vANkud6M61XGAAsjc6MxMlhWg4RCYQE0Q3bqPsNkLtHrM1axZqo45chiCc3oZndzzWtPJZXxMqzbYOHNoqTeQSWglizNiyCS%2B%2FmKEPzBp3goZ8NtlxZDZikMFygE%2B%2Fmc5TXi51gYg7jBQxvrDUTUOwAzUc3nj7Nu%2FTDRrVy%2F2l%2BEkKLerSRtnQl3TsEOKoQIziCahxirV8bhDXrUvqhC4GOM6L4fNmMMaLjMoGOqUBtBEzSH7aQCQetTUeFUOtxUFVNqRxvtzCLQRah5%2BrqKreALuh66PdaMzL%2BrCrqLQSx2b6VQDyNgo984ulSgA1Mt%2FGWE14d40vu24b3oM9P2YA1uXtV6ak0NfK%2BiSaTWMr5yamux8gzzfCZR5nD%2BgpRrT1M8m1ZvH1kxJDVAlcZ6ndzEacCI0fPfcVvgMsK2UPK5jtmn4xr1MLGWc8KlnLHRJMHGuF&X-Amz-Signature=6bbf5efcd4329bc2b2146efc99887cef59de3a8c1ef930d773737498e6f5355e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
