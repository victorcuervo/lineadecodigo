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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBTWG7U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlvyNSn4vS2dYOs8A6ligQjnOh8wIe%2Fjn%2FSGREvR5fgAIhAJEehiT5TJwNEqD7Sf8ZqqRO2IsiTtnQlhpHZu3ZaRfjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnJc5c5%2FPvQTooxDIq3AM81KWuBnM0vbEh1EGERodNS3%2FIyLWYGPilACnYbZE%2B0hLO%2Fb2rkhBuQrqLHs%2FnrPWAYfnJDffbv5IWWGfW9vgtQ5Hg9OGSh1QaM1CvY%2BGY0t84aLLbjpKdteW3KiKgYpYtlDHm5n8cLAPfpjscl7TeskX5GBGphkm1%2F7nwLXeX%2BdtIGV12mDK4Ti4i%2F8WavpradzmlSk8UbguZFshnwP0vaA1UsgSWuiDhBrzSi5h8jvwcz4DHnI7maOzQu5VVD6O8sMpz9G%2BEvBitofvhqUewJd2G%2BAK4InIxkttojAhfldbpKwChTvXQKiDXQa2pq5j9v%2BvvqRr1vBHOA%2FSRdEpcH1K2bDHMF9g%2BRCdC2a%2Bj6%2FDdRN9i2PnrXbDM3RBtLuZOIoVEpOci2rbNeaQA%2FlJ8mu%2BZ7Qz1eAfdPn108lry1YqNrk95v5RfoduWqtxQrseegw4VljjnrqUYncDsNwI8e3U5nYSsxy0PMg61auEBqy7JFqz8k2C2yAIe5%2F%2FowQtyY0P%2BogVR7eljQA1Ar8x8Lon7%2BWSh9T0YnSyyBvwuR48b9AHjEzosVCGkSMXMmcXpFhFYhNhp0yjCLtYYH2QY4lIzwGfctrWy%2FfRyfAxP9vMjhI0hgcHqL2XCDTDW%2FdLJBjqkAWUxzAZZZ3VM13TBAX38Bg976NqR%2BuY06nuIJgK%2B46TRETKSjn3vbXgvye1dadle8ZW8njXXzsfNmDSDLjxd9YVFMI10Mnhoi5vBA02zAzK%2F%2F29pHZ6D3ZIknm%2FrYpAlB9g0L6nOU%2FEa9ccG4KDelVtGBDSMN2Xp113%2BxYoJJEzafnUTi4QVhHdDJmVK9KEhdLbBHmayQuckHDxPvmQTz2wwJ3FD&X-Amz-Signature=c1b31e77cfe549d5c4b59009f496ffdfc9dad8c350ae5b1fdbe3e6818c49d578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZBTWG7U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlvyNSn4vS2dYOs8A6ligQjnOh8wIe%2Fjn%2FSGREvR5fgAIhAJEehiT5TJwNEqD7Sf8ZqqRO2IsiTtnQlhpHZu3ZaRfjKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnJc5c5%2FPvQTooxDIq3AM81KWuBnM0vbEh1EGERodNS3%2FIyLWYGPilACnYbZE%2B0hLO%2Fb2rkhBuQrqLHs%2FnrPWAYfnJDffbv5IWWGfW9vgtQ5Hg9OGSh1QaM1CvY%2BGY0t84aLLbjpKdteW3KiKgYpYtlDHm5n8cLAPfpjscl7TeskX5GBGphkm1%2F7nwLXeX%2BdtIGV12mDK4Ti4i%2F8WavpradzmlSk8UbguZFshnwP0vaA1UsgSWuiDhBrzSi5h8jvwcz4DHnI7maOzQu5VVD6O8sMpz9G%2BEvBitofvhqUewJd2G%2BAK4InIxkttojAhfldbpKwChTvXQKiDXQa2pq5j9v%2BvvqRr1vBHOA%2FSRdEpcH1K2bDHMF9g%2BRCdC2a%2Bj6%2FDdRN9i2PnrXbDM3RBtLuZOIoVEpOci2rbNeaQA%2FlJ8mu%2BZ7Qz1eAfdPn108lry1YqNrk95v5RfoduWqtxQrseegw4VljjnrqUYncDsNwI8e3U5nYSsxy0PMg61auEBqy7JFqz8k2C2yAIe5%2F%2FowQtyY0P%2BogVR7eljQA1Ar8x8Lon7%2BWSh9T0YnSyyBvwuR48b9AHjEzosVCGkSMXMmcXpFhFYhNhp0yjCLtYYH2QY4lIzwGfctrWy%2FfRyfAxP9vMjhI0hgcHqL2XCDTDW%2FdLJBjqkAWUxzAZZZ3VM13TBAX38Bg976NqR%2BuY06nuIJgK%2B46TRETKSjn3vbXgvye1dadle8ZW8njXXzsfNmDSDLjxd9YVFMI10Mnhoi5vBA02zAzK%2F%2F29pHZ6D3ZIknm%2FrYpAlB9g0L6nOU%2FEa9ccG4KDelVtGBDSMN2Xp113%2BxYoJJEzafnUTi4QVhHdDJmVK9KEhdLbBHmayQuckHDxPvmQTz2wwJ3FD&X-Amz-Signature=9b931c48ff3935f0a74004128bbf97a23f4329ba868a6c7520594c4111342c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
