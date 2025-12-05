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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ITVWN3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkMjZUrrmtOiXXl7VWe2AKy448xRh7rYQgZFSAuZWZJQIgETDNmMUZgzcT3VquKq7IoBX2XPGgcHLAHaRVOccV7yEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMmA%2BYIbEpFuV6ZvGircAwW9C0hcqSuMqqxbpGQAGhPYSpukjYCT9M%2B3wFg%2F20RjmPiT89OhviX%2BvP4NPdfHIYAbSp5G0pou0KrgWSeiObFUGZ9iNhjiSajFC8%2BLb45M70%2Fie0DOidwUv4kMvWxnKoj1cESjcq15DnZ%2FVstii%2FFFWl9jKhm%2BhRGuqDL4w3jETvVinnHiWzQ%2BGBtMaMWyvM0dZf0RB7M9TNM3X%2F0fuV8P0aTxnngj%2Bv3zBkql8MNt13tmibP9q8nh4i7HgLUrPFw0qpKkc%2BOM0UPq3zKPx6I%2BH0ep6ewSTCs9Id1t61U0Yru%2BsX8uprJF%2BiE92lSTT0YLvf8%2BCcUDLnWH0y92%2BjSpRpZnSOVCgd2kRNnN2VGgXV%2BzV9ruAnk5lT%2FI8dvlAEyWsk5A7uBJp52mQUftpqi%2FmPj%2BxcXiZ4jiJ8navj7MEhcIFxBpJ3RO%2BLmWry7TzoHl9CGlMXRRYUzyy7lve6RXXRqtNpIqlMYraNIE%2FEjtLezTcMyxowQ4TltKiKygvyOhlopLnm6Zuh34wwYTz6LFqNEI5s6E50U4%2FUB%2ByCxZ%2FkqFhkAqUYHX28wdQqz8HEuqOhV4Krd%2BIGIhMh0WTsu7XIxDBQoYXBT1NFEud50tLglCH2yZ0CoWgGHIMNfly8kGOqUBlSGhgHKbFfdWMjkidqqDvBD0NV%2FSKY7yxtsXFd1QoaSaxQtV9ccf5KKPMaGUNx8G7IADkZ7eHz9yfntZqvVCbQxWKKrCxes4HO3M1i6X2gPhgbjLe3WNhpFgg319v8nfnwLOwZXTIUIjSnkcalW6xNOMJm1Baw%2FuG1CL2l%2FFuJSMZlf2pYEFXUMx9cWfUaIbJk7MUiKGHFQizLjXiUqE9ggS8JaT&X-Amz-Signature=b7bb97e8a726b5e02f779b31df44f1c01d6ffcdb9b883783a6def5d525429e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5ITVWN3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T204601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkMjZUrrmtOiXXl7VWe2AKy448xRh7rYQgZFSAuZWZJQIgETDNmMUZgzcT3VquKq7IoBX2XPGgcHLAHaRVOccV7yEq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDMmA%2BYIbEpFuV6ZvGircAwW9C0hcqSuMqqxbpGQAGhPYSpukjYCT9M%2B3wFg%2F20RjmPiT89OhviX%2BvP4NPdfHIYAbSp5G0pou0KrgWSeiObFUGZ9iNhjiSajFC8%2BLb45M70%2Fie0DOidwUv4kMvWxnKoj1cESjcq15DnZ%2FVstii%2FFFWl9jKhm%2BhRGuqDL4w3jETvVinnHiWzQ%2BGBtMaMWyvM0dZf0RB7M9TNM3X%2F0fuV8P0aTxnngj%2Bv3zBkql8MNt13tmibP9q8nh4i7HgLUrPFw0qpKkc%2BOM0UPq3zKPx6I%2BH0ep6ewSTCs9Id1t61U0Yru%2BsX8uprJF%2BiE92lSTT0YLvf8%2BCcUDLnWH0y92%2BjSpRpZnSOVCgd2kRNnN2VGgXV%2BzV9ruAnk5lT%2FI8dvlAEyWsk5A7uBJp52mQUftpqi%2FmPj%2BxcXiZ4jiJ8navj7MEhcIFxBpJ3RO%2BLmWry7TzoHl9CGlMXRRYUzyy7lve6RXXRqtNpIqlMYraNIE%2FEjtLezTcMyxowQ4TltKiKygvyOhlopLnm6Zuh34wwYTz6LFqNEI5s6E50U4%2FUB%2ByCxZ%2FkqFhkAqUYHX28wdQqz8HEuqOhV4Krd%2BIGIhMh0WTsu7XIxDBQoYXBT1NFEud50tLglCH2yZ0CoWgGHIMNfly8kGOqUBlSGhgHKbFfdWMjkidqqDvBD0NV%2FSKY7yxtsXFd1QoaSaxQtV9ccf5KKPMaGUNx8G7IADkZ7eHz9yfntZqvVCbQxWKKrCxes4HO3M1i6X2gPhgbjLe3WNhpFgg319v8nfnwLOwZXTIUIjSnkcalW6xNOMJm1Baw%2FuG1CL2l%2FFuJSMZlf2pYEFXUMx9cWfUaIbJk7MUiKGHFQizLjXiUqE9ggS8JaT&X-Amz-Signature=5e1c91e89e7d53744ce87fbfd42a19d842cfd929d141afdc6370a197b022e398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
