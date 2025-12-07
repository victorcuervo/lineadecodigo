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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3OKBDJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEldlX5JHygQpEwMOQAR%2F1xePeCkDr%2BEXaG8tBppQjXbAiA96FnvNUws6ZbHoTi5LUTSUkLjEgbEtGGxwVNCUk4awyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ubxbEG6gFh1mEi4KtwDcG%2BvSJpnVl%2BDhxX2J0Io4dcRmXoev5NMS8iOApZK5RiUHZea1IeGHNXOFsbzmCfbeNcZ3w1H5jXC8IHkeqTFgylvLn0dA%2FR%2FPVMVcWvzKXXP2yd81KNdfz2IBL2SRrRH0quouxO%2BwbiocZmu7hs4uLGRuvTfDDAVAZdnrFhZcEJbEAK%2BJLqutoINkcRlyoMEAwIwqMFaioZf9IoWidpmFbooVf8s7OKDcdW6qnlIUYgbFsWl9tKUbUYS3TpDm1A37bUEuSOYmMSp4qH8veJvKXN73dLAREd92S79iBiGVEJyb4kErNJjxL1exTLSdPZv1A9tr183%2Fsn%2Fi90QFPFe43QxsnjiHr1rJuOovPJttE4zB%2BJOAZaL0JV64bzai6pcLjPGn3FnvRoEUe40CIVFUNuS8G7ze%2FYIFt3yHhmyGIR38EgGbezBQJw7JNGcUPT%2F%2Fs%2FpYHgd53PrzDVECPydxVeEDWH55QePZxJ1R1Q0B26yLBGavcAAw6wNinAaJDw8FbhKrRxlnR%2FqrMLCFsXHEgF7K9nqMnNu7%2F85N4hZqqQGfj3mNF9ODvJZKZ6w7I5y0SiKmvX%2BIfgscszUQsKMpx3%2FArA0BAOLgog1BfiRi%2FVf45MyVkFFGcC15NwwuZvUyQY6pgGGDTgXcMcaSUtTOycfDr3Yvk1GWKeU5WQnj7s39SSWVmXl3JDoO%2F1jMX3%2BU8RQz8BHUKprz3BrTnEQAUNsre8tfxm78S0FvaNJUJAe%2F1YHzrl9ux7SAnrEHRo3YmZHpVOMKXY4bnqGlVO9PuuYJvIIwRCIUAHb%2Fxz540FRiq1qeONiUkRr46rB6c9qkMUUtXtI4nrosuCyHrSQDRl80hR4Dezz1Tn8&X-Amz-Signature=9a3305fed773ccf887692123b2fa54dc06cd571f09ec94fcc89f50985b62a04f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O3OKBDJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEldlX5JHygQpEwMOQAR%2F1xePeCkDr%2BEXaG8tBppQjXbAiA96FnvNUws6ZbHoTi5LUTSUkLjEgbEtGGxwVNCUk4awyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2ubxbEG6gFh1mEi4KtwDcG%2BvSJpnVl%2BDhxX2J0Io4dcRmXoev5NMS8iOApZK5RiUHZea1IeGHNXOFsbzmCfbeNcZ3w1H5jXC8IHkeqTFgylvLn0dA%2FR%2FPVMVcWvzKXXP2yd81KNdfz2IBL2SRrRH0quouxO%2BwbiocZmu7hs4uLGRuvTfDDAVAZdnrFhZcEJbEAK%2BJLqutoINkcRlyoMEAwIwqMFaioZf9IoWidpmFbooVf8s7OKDcdW6qnlIUYgbFsWl9tKUbUYS3TpDm1A37bUEuSOYmMSp4qH8veJvKXN73dLAREd92S79iBiGVEJyb4kErNJjxL1exTLSdPZv1A9tr183%2Fsn%2Fi90QFPFe43QxsnjiHr1rJuOovPJttE4zB%2BJOAZaL0JV64bzai6pcLjPGn3FnvRoEUe40CIVFUNuS8G7ze%2FYIFt3yHhmyGIR38EgGbezBQJw7JNGcUPT%2F%2Fs%2FpYHgd53PrzDVECPydxVeEDWH55QePZxJ1R1Q0B26yLBGavcAAw6wNinAaJDw8FbhKrRxlnR%2FqrMLCFsXHEgF7K9nqMnNu7%2F85N4hZqqQGfj3mNF9ODvJZKZ6w7I5y0SiKmvX%2BIfgscszUQsKMpx3%2FArA0BAOLgog1BfiRi%2FVf45MyVkFFGcC15NwwuZvUyQY6pgGGDTgXcMcaSUtTOycfDr3Yvk1GWKeU5WQnj7s39SSWVmXl3JDoO%2F1jMX3%2BU8RQz8BHUKprz3BrTnEQAUNsre8tfxm78S0FvaNJUJAe%2F1YHzrl9ux7SAnrEHRo3YmZHpVOMKXY4bnqGlVO9PuuYJvIIwRCIUAHb%2Fxz540FRiq1qeONiUkRr46rB6c9qkMUUtXtI4nrosuCyHrSQDRl80hR4Dezz1Tn8&X-Amz-Signature=f970f9452636c21f588c38c472c34449bbd53e3a4070095c33aeef98d376af04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
