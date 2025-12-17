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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTML5GSX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDXZM164tfLBIvhSghDsWDXrpvuriy6%2FOWlB0Vpx6VEAiEA7HR8qkttm5wtwSS3nYr%2B4e6EoC7ml6740Mko0E0NbSsq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNCgkYCW3gkgR6q76CrcAx%2FVxe%2FzAKAbCKdMX6SeHtPgiQuAXQz5Xa7Mh20u4%2FEIQpwT%2Bxrnd0t%2Bp1gsAVjdqVBF%2Fu14k8QvI2HL%2FiRQ2kLDZObPq4iWxF8Bg7wLSNZeCiQIiC0dXZ5%2FeOpInCru1xUv8Us0cQ7GV9lhxqVSJHfBPwQ64yuym7dJbSCBA%2BqptA26l1SQmWD%2F12vRIgW8c%2B2Fvvi0%2BBsBIzDKHM2QwaS%2BLmMfB%2FrUejP5VzSNeMLjA2IDB1oIQ196udzipC7IAZDYSL7xMX5fjgQt%2FlrtlIpG3ivovMcNHy3M0e%2FTRYfqtaMmm%2Ftdc1N%2BQh%2B5JKH1q61oZszgmG72JXSGHFOG1pta0GBAearsw2UEjZeDwHHWyOVfoNogs2oD8nnUvbnN5JHJou3bk5%2FFiCAyufgbgtsEf%2BVKpCDfJGyLc5N7JgHqb6x7ludo2nHJryW0WmOK3t7PXx1nhuQb8K2gISnFRYKFkwuP5lp35dEgl6MNgI8iM1Wzx7iKAcWVees4NrBt4NTo%2FdeTSOu4FvUhxzSMTjHbrBsubu%2BjKWLmhPaxTfYBX7cN%2B4civd9Mp%2BtALlryNRCU79xEuETnWOY0LFVKb7HkJM0CvFxWoM9xPJ4dzig7m3FViJQV%2F7ezBnS4MMXGisoGOqUBw4WH1eq%2BFdakqZWNHRqGT%2BH1pbIq7VslsNmNfCwEOFajAdpsc1lkqlVUxV%2Fxu0X8LUkuA52rkvWB2Ethm%2BlHCAWP8rhjaXMnOhdbKoCI7%2F2X8JE6gUONTnUG1lpa0ERfNAKveuUvqjM8Zvjwv0Qbh559oLlaHTfj0CIl6Fu7Clm4lrTR0B7xigdwWTOItlgJB3%2BPLae8JMBck6tTTxru%2BHxkZVxe&X-Amz-Signature=a81d113e8482af34165f0f3cb969c035095fbcf23ff184893823ac47e73764ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTML5GSX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDXZM164tfLBIvhSghDsWDXrpvuriy6%2FOWlB0Vpx6VEAiEA7HR8qkttm5wtwSS3nYr%2B4e6EoC7ml6740Mko0E0NbSsq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNCgkYCW3gkgR6q76CrcAx%2FVxe%2FzAKAbCKdMX6SeHtPgiQuAXQz5Xa7Mh20u4%2FEIQpwT%2Bxrnd0t%2Bp1gsAVjdqVBF%2Fu14k8QvI2HL%2FiRQ2kLDZObPq4iWxF8Bg7wLSNZeCiQIiC0dXZ5%2FeOpInCru1xUv8Us0cQ7GV9lhxqVSJHfBPwQ64yuym7dJbSCBA%2BqptA26l1SQmWD%2F12vRIgW8c%2B2Fvvi0%2BBsBIzDKHM2QwaS%2BLmMfB%2FrUejP5VzSNeMLjA2IDB1oIQ196udzipC7IAZDYSL7xMX5fjgQt%2FlrtlIpG3ivovMcNHy3M0e%2FTRYfqtaMmm%2Ftdc1N%2BQh%2B5JKH1q61oZszgmG72JXSGHFOG1pta0GBAearsw2UEjZeDwHHWyOVfoNogs2oD8nnUvbnN5JHJou3bk5%2FFiCAyufgbgtsEf%2BVKpCDfJGyLc5N7JgHqb6x7ludo2nHJryW0WmOK3t7PXx1nhuQb8K2gISnFRYKFkwuP5lp35dEgl6MNgI8iM1Wzx7iKAcWVees4NrBt4NTo%2FdeTSOu4FvUhxzSMTjHbrBsubu%2BjKWLmhPaxTfYBX7cN%2B4civd9Mp%2BtALlryNRCU79xEuETnWOY0LFVKb7HkJM0CvFxWoM9xPJ4dzig7m3FViJQV%2F7ezBnS4MMXGisoGOqUBw4WH1eq%2BFdakqZWNHRqGT%2BH1pbIq7VslsNmNfCwEOFajAdpsc1lkqlVUxV%2Fxu0X8LUkuA52rkvWB2Ethm%2BlHCAWP8rhjaXMnOhdbKoCI7%2F2X8JE6gUONTnUG1lpa0ERfNAKveuUvqjM8Zvjwv0Qbh559oLlaHTfj0CIl6Fu7Clm4lrTR0B7xigdwWTOItlgJB3%2BPLae8JMBck6tTTxru%2BHxkZVxe&X-Amz-Signature=35ec855b2bb3aed46d7df4074bdb3d537a7b44fc5ff4ec0737168f108ddce421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
