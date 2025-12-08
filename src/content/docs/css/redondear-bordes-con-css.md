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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRM7AFPT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR2jEJZqLEwDyLUPlpR8Dk1MGTPm%2BwJR4PvuUSAXIOvgIhAMRGgHdV6SWVyE85euUdr08xHcRGc7lLoHyH8zNQ6dTWKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7O6%2Fu4EOGCNlzgLgq3AMiUjXwjJ4GdnRw5bjstt0LRKlnAVnRABe9AHo0R5%2BNc8554OmOBFbFq%2BLvS%2BHJJhc1tU%2BwNQ0BU08db476K%2Fe8hmDhum95d87m90SNCHdqCYbWl0vpNmew4BMaG%2BSJjHwfaLtADehffdJhnpH%2BuK6TNLX4ypLLo9CRSfsVryJ4SbNGaZWemUMHOtGwgtTtJhZ0jA%2FzPa%2BtSy%2BVipcDReVNNCbVZ6j9g3MSLt89sDxymo%2ByHq9P%2FRKLXuUp1zNnfNuOjieN1tqKb7vIQuPwcpZRxqYvCOP4XMnNiRD2cT4ZR0mFled%2B2VBsNEWKVnDdj4LoDqFzZ3Yps0MWsM5yWbvgE%2BlY1NEtUGMYSDxIa7I2RGXC5M7UAcXbkQCOLz4xjDKgDWXfDLGvvj3WqrvVCslKdfuKsaZLK5ifGVK%2FQK4HvLpwZaZC87oNY6CYJXdUgZWYfWzAWMvYWpjeCLLpn2HRDY47PWAiqMA4nwrsKvc8B%2FRIoLLaNNyAcMgTFzRwwY2Y%2F9XVY9196XoacM6DRZGEJbPVbQtCBjeQNGB0J%2Fcn%2Ft11X3%2F8SYuTmc61IBJHbI3PPgbgtGnujOXJZqK6mvUJ0psopTVPL05wpY11Lwt3IwCAJNcegeS8m0X0PDDbj9vJBjqkAa2P8M%2BeaUDPTfdK6bLJ87tryi6bhTSSzgCn97Q5e4vddkjw6lyDoBNU3nncI6ocLiW0Nwb3%2FLFeNosNq3Qdxz7VNBzPbCjYlwwJgYPAYHjVf4k56OyBCoPwO4hvRrFD9bIxzE20B3wGSZNACYRK4TCZLoxKp2ehbMjXJYyDWt3zcSV1WeHmHLSd7uNssw8QmEU3xuahL4St09q9g5QrYOefUJGg&X-Amz-Signature=1c6644a7cf50cfee57a537bd86c87fbb05101036fef6b4b322d951bddaf8a6f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRM7AFPT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDR2jEJZqLEwDyLUPlpR8Dk1MGTPm%2BwJR4PvuUSAXIOvgIhAMRGgHdV6SWVyE85euUdr08xHcRGc7lLoHyH8zNQ6dTWKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy7O6%2Fu4EOGCNlzgLgq3AMiUjXwjJ4GdnRw5bjstt0LRKlnAVnRABe9AHo0R5%2BNc8554OmOBFbFq%2BLvS%2BHJJhc1tU%2BwNQ0BU08db476K%2Fe8hmDhum95d87m90SNCHdqCYbWl0vpNmew4BMaG%2BSJjHwfaLtADehffdJhnpH%2BuK6TNLX4ypLLo9CRSfsVryJ4SbNGaZWemUMHOtGwgtTtJhZ0jA%2FzPa%2BtSy%2BVipcDReVNNCbVZ6j9g3MSLt89sDxymo%2ByHq9P%2FRKLXuUp1zNnfNuOjieN1tqKb7vIQuPwcpZRxqYvCOP4XMnNiRD2cT4ZR0mFled%2B2VBsNEWKVnDdj4LoDqFzZ3Yps0MWsM5yWbvgE%2BlY1NEtUGMYSDxIa7I2RGXC5M7UAcXbkQCOLz4xjDKgDWXfDLGvvj3WqrvVCslKdfuKsaZLK5ifGVK%2FQK4HvLpwZaZC87oNY6CYJXdUgZWYfWzAWMvYWpjeCLLpn2HRDY47PWAiqMA4nwrsKvc8B%2FRIoLLaNNyAcMgTFzRwwY2Y%2F9XVY9196XoacM6DRZGEJbPVbQtCBjeQNGB0J%2Fcn%2Ft11X3%2F8SYuTmc61IBJHbI3PPgbgtGnujOXJZqK6mvUJ0psopTVPL05wpY11Lwt3IwCAJNcegeS8m0X0PDDbj9vJBjqkAa2P8M%2BeaUDPTfdK6bLJ87tryi6bhTSSzgCn97Q5e4vddkjw6lyDoBNU3nncI6ocLiW0Nwb3%2FLFeNosNq3Qdxz7VNBzPbCjYlwwJgYPAYHjVf4k56OyBCoPwO4hvRrFD9bIxzE20B3wGSZNACYRK4TCZLoxKp2ehbMjXJYyDWt3zcSV1WeHmHLSd7uNssw8QmEU3xuahL4St09q9g5QrYOefUJGg&X-Amz-Signature=5f11dd5f56f71f374f0b71ba74cd3adaf5da0122bea553cd06f1fff8aa0c319d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
