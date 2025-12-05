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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YEWWVB4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtQvrsoX1kVHWMSIajbuxLnnT0GjZiKghuKdL8bm0cYAiEAxnbWVH%2BKh6OuW3MYkRY%2FgtFml8VVa7%2BNd7WDgfAef3kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBbWvnuRPV6AsmDaByrcAwl%2BK6FYoD8wgQjo8PC3UpqLaLPYbCQ17koWq1jPR5OZrm1Mh%2BC%2BH5Zl17ODRQag5cFMzort%2F5gbA%2BwwYWOi2xmfTKGuoI1g0Qs2wQI9OMvO2z2cf7QhRpoxKg9E6DIC10%2BJTBTnlNv1%2FT9WAuyrap9D7ztcJ3kVkLFz59vqKMmln%2FXMr39uMBWfgncFVLHQZkowIvvEuEKm3q5c7L4MZnXPmoJ0R1TGCfNnCV77%2Bfib9S037ytITLxYaUg9%2BSM8P8GrY0n5Ohr%2Fh7iLzSPBh2W9iyD92VgRF%2FZi6EcwTOjjCzt%2FhXxIhe%2B0sr9sALRPJbp517T9ZTdbVyxjyVxqgMFSSe16qsBpE0mnO4sAyOApFBPPtC1rlyT4UGFM1iOQhUZJv%2BNrizvfJbDKI2QCsKkXbr%2BYUIQkp2ZZ9qF2hZ7EfEOrsCSxH%2B1RoQ%2BSCbF%2BdHNweDWia0PcR76Gq9KHfyvgVkDxf1MqdFOSB5I%2F9X6rBLRB8yYeZpn%2FVLOgekX0GoDhXZTrZ68yfWUl5rqGuxG08osnbLzuN6hgt8d5XsuTVspeA22xdiFkBs1EuYP6Ve2GKiV15gIQx0EJOb%2FWuTRH3usRFVFiQYW0hVz1ioH2S1xjddTX5pqc%2FDc4MIfQyskGOqUBfS%2FWQ3QURtza%2Fickwjf1tOMypDoBlN8ohp2MKkBQgK5QcN%2BcUDF5Kord%2B7AlALGoR%2Frkl%2FGThXHFYuANYzfd3sGjKZ3woHqcpGA%2BkzTNfsrZIVUm55kmc3v%2BZNEUXwM12%2F71IXUvLrhKrxlwnogB%2B2%2BfgjEu6EmAd3BsNLwbVZ9FBdwv7VWNMR1ZfpdJ483xxZsyARyJAN%2FHrMO6939hCXjqu0xG&X-Amz-Signature=baf93b8b27565f044ce2a87f0e335663d83e2819a34bae5e701a62d82e30fb3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YEWWVB4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T111212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtQvrsoX1kVHWMSIajbuxLnnT0GjZiKghuKdL8bm0cYAiEAxnbWVH%2BKh6OuW3MYkRY%2FgtFml8VVa7%2BNd7WDgfAef3kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBbWvnuRPV6AsmDaByrcAwl%2BK6FYoD8wgQjo8PC3UpqLaLPYbCQ17koWq1jPR5OZrm1Mh%2BC%2BH5Zl17ODRQag5cFMzort%2F5gbA%2BwwYWOi2xmfTKGuoI1g0Qs2wQI9OMvO2z2cf7QhRpoxKg9E6DIC10%2BJTBTnlNv1%2FT9WAuyrap9D7ztcJ3kVkLFz59vqKMmln%2FXMr39uMBWfgncFVLHQZkowIvvEuEKm3q5c7L4MZnXPmoJ0R1TGCfNnCV77%2Bfib9S037ytITLxYaUg9%2BSM8P8GrY0n5Ohr%2Fh7iLzSPBh2W9iyD92VgRF%2FZi6EcwTOjjCzt%2FhXxIhe%2B0sr9sALRPJbp517T9ZTdbVyxjyVxqgMFSSe16qsBpE0mnO4sAyOApFBPPtC1rlyT4UGFM1iOQhUZJv%2BNrizvfJbDKI2QCsKkXbr%2BYUIQkp2ZZ9qF2hZ7EfEOrsCSxH%2B1RoQ%2BSCbF%2BdHNweDWia0PcR76Gq9KHfyvgVkDxf1MqdFOSB5I%2F9X6rBLRB8yYeZpn%2FVLOgekX0GoDhXZTrZ68yfWUl5rqGuxG08osnbLzuN6hgt8d5XsuTVspeA22xdiFkBs1EuYP6Ve2GKiV15gIQx0EJOb%2FWuTRH3usRFVFiQYW0hVz1ioH2S1xjddTX5pqc%2FDc4MIfQyskGOqUBfS%2FWQ3QURtza%2Fickwjf1tOMypDoBlN8ohp2MKkBQgK5QcN%2BcUDF5Kord%2B7AlALGoR%2Frkl%2FGThXHFYuANYzfd3sGjKZ3woHqcpGA%2BkzTNfsrZIVUm55kmc3v%2BZNEUXwM12%2F71IXUvLrhKrxlwnogB%2B2%2BfgjEu6EmAd3BsNLwbVZ9FBdwv7VWNMR1ZfpdJ483xxZsyARyJAN%2FHrMO6939hCXjqu0xG&X-Amz-Signature=80901505340247606e18c5530ba9e39ee8edf49d1f5686878c063042ac95cbea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
