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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XSQPROG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYw251as8HYpf%2B2LRexQeFNT0tAdhijlvEDomAaVPc%2BAiBbr8CKp%2BPIiv%2Burx0HYVTGPwJ7yVQn6VpD8TSrCK8YbCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX2K%2Bx4Azk0ySccpaKtwDCfGgPTr8TtkeIOqeNlcz%2FznPdLyJOc%2BB61xkJbL%2F7vc%2BB9rfEzJI3av2cnCclLpUmM4uutcWuHsgxe4cgm0hWE1xeJ5uk7geDWvL0H7w%2FqkyrMLKWvUWBrRR%2FeveJ539RywfLVIHLJM%2BSWWz6%2Fw6NYJ%2BTLXI8ozrzH3RdVVMcZ7AII6PW4Y5UvKEKOUkTrp6LRsRkJcEswxqd2iNXeNEtlrYjpcK%2BspwkfPeAEoHOdkBoLm%2BRSoK76zJOrtDxYveCWWI6Do4GJq%2BAbOmlOJ1jHduFw9ywiCMYJJ7vUMkdwaTxhDS2I2RIysfQwHUeMM6McqKhYqA%2BHu5dUFd7HGK9Kq%2Bw%2FDhAoESdgMYFnaUMiRjcuf6Bvv5mzBuLH%2FMqLM6gEJxfNyXk1NBn37%2B%2BDL%2FTmYVwmXEp8cMLqhxF65Xbgyyx3LxDYMOsTSwOH2y%2F7wHNkyAkQpIhoHbPggewuqw8eyWuDcIQi4Q%2BK5kYrbPxZKH%2BU9TJb3aUxA2v6SskIzpCJfCgDZMkHl9tBWzXMi%2B3lh9JQqiuRo3FewbQ62FzudNbsxs6R1H9KHVSIAEzeTU%2Fm6%2FOWSQv9W6mWRYKWIWjCPe1Z4FkSkuaq2YdHlZ9uZUNPo%2FBtFFq0WvCnMworTZyQY6pgFLYmV%2Bzb1HCMtjpqn7wk0LwcREhs78r0ddVKpBd%2F%2Bwk%2BLHxzEBgps%2BXHTbTejk9hPt%2Fu3l2I12fmjeGuoTK9s1dN5iNq3PTsHg27DYNGSzwzxCNVGCgxPCk%2BCsf%2FudhczuHHNlrAQRUHNP1ptRXlXQRGDeA6liTFeCal47pMQppIrYaUa%2BjEdQAOdhdloryVgxbMFE6t3kX5iyz3949IuvUe8AAP9e&X-Amz-Signature=e2e52ea04d8e0021ba22e4e1620d38e76e5a11ef3d42c87e864547b3215b84ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XSQPROG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYw251as8HYpf%2B2LRexQeFNT0tAdhijlvEDomAaVPc%2BAiBbr8CKp%2BPIiv%2Burx0HYVTGPwJ7yVQn6VpD8TSrCK8YbCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX2K%2Bx4Azk0ySccpaKtwDCfGgPTr8TtkeIOqeNlcz%2FznPdLyJOc%2BB61xkJbL%2F7vc%2BB9rfEzJI3av2cnCclLpUmM4uutcWuHsgxe4cgm0hWE1xeJ5uk7geDWvL0H7w%2FqkyrMLKWvUWBrRR%2FeveJ539RywfLVIHLJM%2BSWWz6%2Fw6NYJ%2BTLXI8ozrzH3RdVVMcZ7AII6PW4Y5UvKEKOUkTrp6LRsRkJcEswxqd2iNXeNEtlrYjpcK%2BspwkfPeAEoHOdkBoLm%2BRSoK76zJOrtDxYveCWWI6Do4GJq%2BAbOmlOJ1jHduFw9ywiCMYJJ7vUMkdwaTxhDS2I2RIysfQwHUeMM6McqKhYqA%2BHu5dUFd7HGK9Kq%2Bw%2FDhAoESdgMYFnaUMiRjcuf6Bvv5mzBuLH%2FMqLM6gEJxfNyXk1NBn37%2B%2BDL%2FTmYVwmXEp8cMLqhxF65Xbgyyx3LxDYMOsTSwOH2y%2F7wHNkyAkQpIhoHbPggewuqw8eyWuDcIQi4Q%2BK5kYrbPxZKH%2BU9TJb3aUxA2v6SskIzpCJfCgDZMkHl9tBWzXMi%2B3lh9JQqiuRo3FewbQ62FzudNbsxs6R1H9KHVSIAEzeTU%2Fm6%2FOWSQv9W6mWRYKWIWjCPe1Z4FkSkuaq2YdHlZ9uZUNPo%2FBtFFq0WvCnMworTZyQY6pgFLYmV%2Bzb1HCMtjpqn7wk0LwcREhs78r0ddVKpBd%2F%2Bwk%2BLHxzEBgps%2BXHTbTejk9hPt%2Fu3l2I12fmjeGuoTK9s1dN5iNq3PTsHg27DYNGSzwzxCNVGCgxPCk%2BCsf%2FudhczuHHNlrAQRUHNP1ptRXlXQRGDeA6liTFeCal47pMQppIrYaUa%2BjEdQAOdhdloryVgxbMFE6t3kX5iyz3949IuvUe8AAP9e&X-Amz-Signature=490805e81d5f89455e80f84861dea465a9a84fee9fbf8dd62794e5bbd70f6b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
