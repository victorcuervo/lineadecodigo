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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHINVPWB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd489XYJJxZIm83tOwRiyfuF8noscd9zX6HllgWsLlngIhAKF9H%2FWQSpQxc58AYFAYgGDBg%2FkAhLMsGjrsG6HsRcNUKv8DCGgQABoMNjM3NDIzMTgzODA1IgyQHCN36rHhq8Rirlwq3AMDU6Z8JY6otGZOa3AgLYC%2BD85ipL0Uw1VmBz3aPtQ869VXsXlja77CaYCqGg7ZVllBk5pTM7lePxc1aUvOOqqMQaXHHCOU9%2Fqfl%2B9b%2Fp15QPn7bNQFS9xPfB2vFxpHiKykcnaWdGwRU%2F2e4%2FnDCJA5rbg4pWyuEwNrXs4V5cogK4TFiy%2FL9O4hvqGdKDxvM94HN0Fxrn6RO1NK1OY3E82tVcPqnJBfLoKF6f7z61oaSEcJa0XY3B5ZN5J%2BruDKPC%2BxSTvBWNEyJZsgZNLqwG6H08GsVokrSimUfmibYS1d3tj7tm6OpE89GxkvJLdWlQ3B1MXygQxTlgsWUrNo%2BRTqOupwRx%2B8MhLHiEkfm2L6rwL0BJsTLeGV%2FEjVEuhkthAEH4uZ6f3hP3BOTU7%2F2LDSGVekDTqwz89Gk2g4UnaRGKTIJ3nPcJzsUCLJBdYvapC9fseW1ZpFUNZKHZTlZzxO%2BmE044ycEuKYX0w6KhIynA7B%2F%2BBVb9BXwtOCiyqcpptH%2BY7hzj7hRRASm21cFz6g6XV1SAvZPPXbWL%2F%2F0auIeJ9LyYwe%2Bmm3uheJiUOYMJc6hPpXHifTPhB2TDvtITPOQx70T4ujIl3mbbCma0FIG7jbTfWKOrY5XvGJkDDIxs3JBjqkARyaJYyvN421AV3iXo8%2B7Y%2BJFmtX%2FIBaVzaM8a7hfq8ASSoEV03s1CNxHZQFHshVYhMTkG5KjUDd1hUgH8ZrdOKuk1AUUgPVGsIzTjzoKKSGnWMZqp3UCYQmrd%2BpnRKHQew2cNAKI8oKzCA5FDkSB%2B3n8D9L2molWQ2zy9r3HJneM9EQRPvN4OLHeNE17u2bg0rMObuLCCvedekh3UP7xYhrkPed&X-Amz-Signature=c5446ab1116f9528eb908362d496f77293aae8a6b8f7879559c45ee730e4a7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHINVPWB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd489XYJJxZIm83tOwRiyfuF8noscd9zX6HllgWsLlngIhAKF9H%2FWQSpQxc58AYFAYgGDBg%2FkAhLMsGjrsG6HsRcNUKv8DCGgQABoMNjM3NDIzMTgzODA1IgyQHCN36rHhq8Rirlwq3AMDU6Z8JY6otGZOa3AgLYC%2BD85ipL0Uw1VmBz3aPtQ869VXsXlja77CaYCqGg7ZVllBk5pTM7lePxc1aUvOOqqMQaXHHCOU9%2Fqfl%2B9b%2Fp15QPn7bNQFS9xPfB2vFxpHiKykcnaWdGwRU%2F2e4%2FnDCJA5rbg4pWyuEwNrXs4V5cogK4TFiy%2FL9O4hvqGdKDxvM94HN0Fxrn6RO1NK1OY3E82tVcPqnJBfLoKF6f7z61oaSEcJa0XY3B5ZN5J%2BruDKPC%2BxSTvBWNEyJZsgZNLqwG6H08GsVokrSimUfmibYS1d3tj7tm6OpE89GxkvJLdWlQ3B1MXygQxTlgsWUrNo%2BRTqOupwRx%2B8MhLHiEkfm2L6rwL0BJsTLeGV%2FEjVEuhkthAEH4uZ6f3hP3BOTU7%2F2LDSGVekDTqwz89Gk2g4UnaRGKTIJ3nPcJzsUCLJBdYvapC9fseW1ZpFUNZKHZTlZzxO%2BmE044ycEuKYX0w6KhIynA7B%2F%2BBVb9BXwtOCiyqcpptH%2BY7hzj7hRRASm21cFz6g6XV1SAvZPPXbWL%2F%2F0auIeJ9LyYwe%2Bmm3uheJiUOYMJc6hPpXHifTPhB2TDvtITPOQx70T4ujIl3mbbCma0FIG7jbTfWKOrY5XvGJkDDIxs3JBjqkARyaJYyvN421AV3iXo8%2B7Y%2BJFmtX%2FIBaVzaM8a7hfq8ASSoEV03s1CNxHZQFHshVYhMTkG5KjUDd1hUgH8ZrdOKuk1AUUgPVGsIzTjzoKKSGnWMZqp3UCYQmrd%2BpnRKHQew2cNAKI8oKzCA5FDkSB%2B3n8D9L2molWQ2zy9r3HJneM9EQRPvN4OLHeNE17u2bg0rMObuLCCvedekh3UP7xYhrkPed&X-Amz-Signature=2c660a6a0c87857a84d8bfe16e464a0f4c3602e58fdde0af04254bff4aaa76c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
