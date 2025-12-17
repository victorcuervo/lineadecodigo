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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VPNMBWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLjidUMhAOGGjuDgdNiOYlCxkblvzyTyReJrNvyAi%2BdQIhAPwoidksco6MSq752nWA3EpGZjo3r%2Bnl9DlWs1Kj6qlzKv8DCH0QABoMNjM3NDIzMTgzODA1IgyS2fLWepLlhobhl%2B4q3AOOiy3rnUdataP9UrMILIzd%2F2c2f%2BQZZgXN1D1Z4WrPfl7YnGAStcSgJDKaDk0MNqCUJowDj7MEVWqVJAq7PbDa%2FptOkHRtPsNXpaioRzUNgknansLDDV%2FjmbYwl1m1BYLIEcnUUuvgO%2B8J%2BrBV%2FwnXth7f0ksMAVjaAuDcPsWki9UD482MU2nhufBOzuwtzL7Lj%2FVlbuT%2BLfqcEgNavVyAvAVKZmoVl5af8vPOJFKEQszXAcffSv0tIm47Zp9lOZivNX2Y1Q8ANogbhtjiQrxUE3aqb6kxK4mUMe%2F6afHnkPjlwLQgPMIYL8fpa%2BIITbp57KrhjcTNlMvMC2CDuQxLaSS0kSe9t1ZTtpFxcTxO7SkszVli9f%2BK81vo3nI3Ym459rC%2BhDMgx0ew1z19ZL0qIHD7S20al1F%2FsDT0LWz6uJ97S%2BtNmLsa3sqgW5HqhakwVYRAuGFITSOSQWdX7Vcp5CSwrgErTJWZzq5cbuWY3are%2B4oLmx%2BGeDFqhsKM0WHEp46wHmZeUWxEjfWhitqFVrb33DMVy4m1nmnxPTgd1%2FyBZ17Nlqp05kKV73fSHySN2InKuYQbZ6lurz3fvTkzG9g4iAWjzGkCRrineWhkjejv33o8CzKwG3vlMDCcqorKBjqkAWKWrbBpJGbGnHQ10gpzMtucwBndwBUXZdMXa08Ccxp1P1EILZrD3szb9jLLdk0%2BfRDoKeee6YthFSMV3XpGWx2ikBUhdh8Poz3RgCUBNWr9FraY8%2FNt4Od0DTJ7jBoZseCjhOGUPSaCa5ZTEGA%2FZRDnAS4dX3ETy%2BKgoHeKKNfpq2g38NEG3KuWjmfp8dtxgWUKOWOS6hGzd6n1mkADOBYvFYdN&X-Amz-Signature=0e2295cd0968d0134db98ea422ca1cd4c33607e33c0a84300bbe8c43072c09af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VPNMBWO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLjidUMhAOGGjuDgdNiOYlCxkblvzyTyReJrNvyAi%2BdQIhAPwoidksco6MSq752nWA3EpGZjo3r%2Bnl9DlWs1Kj6qlzKv8DCH0QABoMNjM3NDIzMTgzODA1IgyS2fLWepLlhobhl%2B4q3AOOiy3rnUdataP9UrMILIzd%2F2c2f%2BQZZgXN1D1Z4WrPfl7YnGAStcSgJDKaDk0MNqCUJowDj7MEVWqVJAq7PbDa%2FptOkHRtPsNXpaioRzUNgknansLDDV%2FjmbYwl1m1BYLIEcnUUuvgO%2B8J%2BrBV%2FwnXth7f0ksMAVjaAuDcPsWki9UD482MU2nhufBOzuwtzL7Lj%2FVlbuT%2BLfqcEgNavVyAvAVKZmoVl5af8vPOJFKEQszXAcffSv0tIm47Zp9lOZivNX2Y1Q8ANogbhtjiQrxUE3aqb6kxK4mUMe%2F6afHnkPjlwLQgPMIYL8fpa%2BIITbp57KrhjcTNlMvMC2CDuQxLaSS0kSe9t1ZTtpFxcTxO7SkszVli9f%2BK81vo3nI3Ym459rC%2BhDMgx0ew1z19ZL0qIHD7S20al1F%2FsDT0LWz6uJ97S%2BtNmLsa3sqgW5HqhakwVYRAuGFITSOSQWdX7Vcp5CSwrgErTJWZzq5cbuWY3are%2B4oLmx%2BGeDFqhsKM0WHEp46wHmZeUWxEjfWhitqFVrb33DMVy4m1nmnxPTgd1%2FyBZ17Nlqp05kKV73fSHySN2InKuYQbZ6lurz3fvTkzG9g4iAWjzGkCRrineWhkjejv33o8CzKwG3vlMDCcqorKBjqkAWKWrbBpJGbGnHQ10gpzMtucwBndwBUXZdMXa08Ccxp1P1EILZrD3szb9jLLdk0%2BfRDoKeee6YthFSMV3XpGWx2ikBUhdh8Poz3RgCUBNWr9FraY8%2FNt4Od0DTJ7jBoZseCjhOGUPSaCa5ZTEGA%2FZRDnAS4dX3ETy%2BKgoHeKKNfpq2g38NEG3KuWjmfp8dtxgWUKOWOS6hGzd6n1mkADOBYvFYdN&X-Amz-Signature=3374eded8738e7b9b3683b046cade54941ee954ffebd8287bd3bc8b642917f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
