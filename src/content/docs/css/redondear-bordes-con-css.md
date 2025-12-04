---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DKJGW6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDhA7aaHIqktfSudtfQJH4%2FbEFKIOqFHvd%2FQW%2FAGg%2FNSwIhAKBl30vXsdXwppaVN5OqN01NTOGsNq%2B%2B96kyutysrVymKv8DCDkQABoMNjM3NDIzMTgzODA1Igyt0Rk%2F0WxROPJCwqsq3ANnUYhc8z%2BLngmTzv9hWGtjNy9xzEAlEET5MMH2uuafNvEH3QG8PT3642zKhv%2BBGmFcypAXY67xS0tpzB%2Fs9JjncY295adyx34TucLYljrlqtdcZfPptvAptiaNyiPzUhAbJHGCjJTA2doewoglxO5VnM%2FQWU30X0%2BhJdpFLGPpjcH0O0H2blc58KzaXFCovdVscJPYxTTf9P12osPu2MyYpNnZ8u7m4%2B0r3vovLgAfIBgSUGpYIiBBT8dX3hI65g%2BgPAeSRz4ZQM8biCFXfVYbA%2FJ%2BtZEL%2Bk2ENgqqTkpyrqXi%2B4%2BMWmJ%2B%2BM0Uiap5f4y%2FmvRvXnxMXFc%2BmkjYWXAEUn%2FamCnSvY96GVnQ%2BtfsqRMqGVqrVQtWD4EYP4eTRV9olzipDRk4H4Emq5bbt%2BU5QRZpsGXTTRWEsQFzEKPl6U4D8H1MMg3uvvp144McDF8CZoL2OFzOY2iB%2BFFswAND3FyGc3EbMJ41kk3BqGrqetwGiSYib33HodZCcfsSTY%2FCEg0cLILRYiDIdtcLU9mcC32zFA5LZ98O9i%2BEOT9J3DddjuPDZCgTuT1EQ6uwCjXlhtASjO9Wwxyq38ssn857cRKXxJwQX3TU%2B6tW4n%2Bc3zYufAYHRf71s%2FhfqTDElMPJBjqkAdbWi00RyvaQ4OP32kD4xFNf%2BI15Lrn1PNn8myJcMNXyntxMjL3%2BAcsUVG9uUdUcRzswJqlBW9H2KxCFd3Gv3e0%2Bu6CoclhSa5wG23yMHoOYbWrHZdRNrHWaS0IJQ1A1w%2FYCiMlbPMTemnax9usrCLN3u7Q%2Br%2BSgW1CPUNWWfZFgEBNS0sID%2FXF%2BRyWRXKHH6vc7%2BkTG3y%2BH3d8vu8SzvYMH%2FjcZ&X-Amz-Signature=469d98a09dccfd91990ff5f8f14703f38f063e5a3eeba934ee578b8ca1188833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625DKJGW6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDhA7aaHIqktfSudtfQJH4%2FbEFKIOqFHvd%2FQW%2FAGg%2FNSwIhAKBl30vXsdXwppaVN5OqN01NTOGsNq%2B%2B96kyutysrVymKv8DCDkQABoMNjM3NDIzMTgzODA1Igyt0Rk%2F0WxROPJCwqsq3ANnUYhc8z%2BLngmTzv9hWGtjNy9xzEAlEET5MMH2uuafNvEH3QG8PT3642zKhv%2BBGmFcypAXY67xS0tpzB%2Fs9JjncY295adyx34TucLYljrlqtdcZfPptvAptiaNyiPzUhAbJHGCjJTA2doewoglxO5VnM%2FQWU30X0%2BhJdpFLGPpjcH0O0H2blc58KzaXFCovdVscJPYxTTf9P12osPu2MyYpNnZ8u7m4%2B0r3vovLgAfIBgSUGpYIiBBT8dX3hI65g%2BgPAeSRz4ZQM8biCFXfVYbA%2FJ%2BtZEL%2Bk2ENgqqTkpyrqXi%2B4%2BMWmJ%2B%2BM0Uiap5f4y%2FmvRvXnxMXFc%2BmkjYWXAEUn%2FamCnSvY96GVnQ%2BtfsqRMqGVqrVQtWD4EYP4eTRV9olzipDRk4H4Emq5bbt%2BU5QRZpsGXTTRWEsQFzEKPl6U4D8H1MMg3uvvp144McDF8CZoL2OFzOY2iB%2BFFswAND3FyGc3EbMJ41kk3BqGrqetwGiSYib33HodZCcfsSTY%2FCEg0cLILRYiDIdtcLU9mcC32zFA5LZ98O9i%2BEOT9J3DddjuPDZCgTuT1EQ6uwCjXlhtASjO9Wwxyq38ssn857cRKXxJwQX3TU%2B6tW4n%2Bc3zYufAYHRf71s%2FhfqTDElMPJBjqkAdbWi00RyvaQ4OP32kD4xFNf%2BI15Lrn1PNn8myJcMNXyntxMjL3%2BAcsUVG9uUdUcRzswJqlBW9H2KxCFd3Gv3e0%2Bu6CoclhSa5wG23yMHoOYbWrHZdRNrHWaS0IJQ1A1w%2FYCiMlbPMTemnax9usrCLN3u7Q%2Br%2BSgW1CPUNWWfZFgEBNS0sID%2FXF%2BRyWRXKHH6vc7%2BkTG3y%2BH3d8vu8SzvYMH%2FjcZ&X-Amz-Signature=eb59051337c42f48364238d8719fcbf202682366b476e2550f0365e36a8e2a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
