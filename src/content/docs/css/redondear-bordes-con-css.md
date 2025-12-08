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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQELQ2T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPFUzDKm2q%2BEEmCovcqAZny7L9wGpdj8TkMbLgLyAjEAiBTcloa4l0HjBUo0%2FpJPO%2F3j9WtSFsY75jJzwQAozdstyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfgqYkunaHaYA7gCSKtwDgvO0Dc1Kz0OEHyncTY%2FQNP5%2FKXvizwYIsIgj2Qs%2FvGYqxD76zonLzHp%2Fr%2FMYeiSsE4x4iTDCtVCVBmQGnI4QkHKKysbGpcYKIgsc6ffOqaKski7DvokoyZUyK0Zvo8ZHMhFpcSLaVWyk5TnFGnZiQ3g3Dz%2B%2BPXUfaJD4HFuIO%2B9fud%2BARMAT0tcOX1CJRFwKqsvpRSeaiheyVK2i7HJNkkDjX0Yv5sHRR35UPrS656tOMEa3VCvNu8wcVp%2FApKRCh%2F0%2BrNbt5PNgaZXabYmITDTk9j0ItbitVHL6FZBf20G320LbVc3SP7I%2B%2BJwQS74utcsI0ogYt6qv1mAKGetHM91KCgRBE82lrop0oO9z89ZW%2BScIZ5FqNdA0f5xoNg%2FFItcBfEbIk9gRK4Bf38yHRBg7oFtyXbf1M2x9b9lGOV9qwwcwPi6C7y9xCBmlFGf0dqFOH%2BTLePJWT23hhrBfOsbDcXI0A6dJ2FSeZMWt5Lurx6PMT8UEvx511Whlj0qhehCtTdqxuMmIwTjEIJ%2BpD0p1CO150ADs7Knl6TNe6HhpEtaIDTXFblpkxvVTtzeuHTVve3NsDELWOPUWvA0KpgSR9LF1vDDUGjdEkjeLUm1pJvF2TH34W5gjNwswrsPdyQY6pgHlAoB2wCr27XZ9%2Fj3DxBg%2Bt%2BghJfMfgsu7F3gW0A9MPkZaTDlhubKY2AVl2WwH1xE4erChMYirmkbzPUMHvSCZbYvKEjXwq%2Bj7zqMaOgxxrWO8wvyayZshV5FylS924OH6qr7jmV4s%2BWWzAZ6Uq5n%2F29lZjptO4noGi5wzSEwkh9qZiS3nSlU7xyq8Lrt4%2BU031c%2B86gnNOEy3J0ddDQJLCX8v%2Fne4&X-Amz-Signature=613302da5a56e633d7b20f5d395c7cee3b3de3a60332b811dbed4e9e8cc0ccbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCQELQ2T%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T235602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPFUzDKm2q%2BEEmCovcqAZny7L9wGpdj8TkMbLgLyAjEAiBTcloa4l0HjBUo0%2FpJPO%2F3j9WtSFsY75jJzwQAozdstyqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfgqYkunaHaYA7gCSKtwDgvO0Dc1Kz0OEHyncTY%2FQNP5%2FKXvizwYIsIgj2Qs%2FvGYqxD76zonLzHp%2Fr%2FMYeiSsE4x4iTDCtVCVBmQGnI4QkHKKysbGpcYKIgsc6ffOqaKski7DvokoyZUyK0Zvo8ZHMhFpcSLaVWyk5TnFGnZiQ3g3Dz%2B%2BPXUfaJD4HFuIO%2B9fud%2BARMAT0tcOX1CJRFwKqsvpRSeaiheyVK2i7HJNkkDjX0Yv5sHRR35UPrS656tOMEa3VCvNu8wcVp%2FApKRCh%2F0%2BrNbt5PNgaZXabYmITDTk9j0ItbitVHL6FZBf20G320LbVc3SP7I%2B%2BJwQS74utcsI0ogYt6qv1mAKGetHM91KCgRBE82lrop0oO9z89ZW%2BScIZ5FqNdA0f5xoNg%2FFItcBfEbIk9gRK4Bf38yHRBg7oFtyXbf1M2x9b9lGOV9qwwcwPi6C7y9xCBmlFGf0dqFOH%2BTLePJWT23hhrBfOsbDcXI0A6dJ2FSeZMWt5Lurx6PMT8UEvx511Whlj0qhehCtTdqxuMmIwTjEIJ%2BpD0p1CO150ADs7Knl6TNe6HhpEtaIDTXFblpkxvVTtzeuHTVve3NsDELWOPUWvA0KpgSR9LF1vDDUGjdEkjeLUm1pJvF2TH34W5gjNwswrsPdyQY6pgHlAoB2wCr27XZ9%2Fj3DxBg%2Bt%2BghJfMfgsu7F3gW0A9MPkZaTDlhubKY2AVl2WwH1xE4erChMYirmkbzPUMHvSCZbYvKEjXwq%2Bj7zqMaOgxxrWO8wvyayZshV5FylS924OH6qr7jmV4s%2BWWzAZ6Uq5n%2F29lZjptO4noGi5wzSEwkh9qZiS3nSlU7xyq8Lrt4%2BU031c%2B86gnNOEy3J0ddDQJLCX8v%2Fne4&X-Amz-Signature=e218a2005fefc8b5dd1fd02a6d9d2f518c5d4fc2a44e9b73e42f4769f87db6bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
