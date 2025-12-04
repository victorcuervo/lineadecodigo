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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6V3ZNTP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDukwRb74PPEW%2Bh8jXBdzyP2piItfJgMY6Ns3PD9r1glgIhAML7eJUuGV3McOnpG8BKAPR8jT7t0ULShzOm9uba64MHKv8DCD0QABoMNjM3NDIzMTgzODA1IgyJBYdErAv32yN8tdAq3AOT8oA5oaVk24gUe46A%2FJ%2FwELhUju8J41gY9RLg0ehvwwkOJhtdMOiyRCPbQRQRf7A%2BsPjsAHOLgx87Dyg8X9ZC%2FCOYnoEv01R5NvlE08tdDutnC3G%2Fu%2BCYmMzMUTpVxsrW%2BwRgplJrAyr09LFZOKGXoF0DpAXzjFktKDbfQLABoApD1OiuFBdioWcfVyCT72QKXtrck0rw40kTlo2Bw9ySVhLXC8diVJFm1RmaaTZjhycrNkIoOxGk9Z0fcSMUE5jqofcwt6svoqujQNBoppsomlOqx2MFvWtxwqedzMZNFVhz6%2BzN%2FIZlQitkP1hx5SXTm3%2BI0z5PkW7Pal07jGCvaBztddEfAEC0W4bYsS3mkuQUiiYcnwIyV%2BtJzTpxFgNL0PLp8roo9hhCpq2hpq7mcBTu6JjHzKdTj%2B6Ox88SmIj45BUNEoVHa4Hav3TMRd3Bdej2%2Fq7t%2FoWgUOR8Vwb2bzHY00zN53UaNY1zWECLZXdzjPZuP46NONHB5IQPviwuaehlbojQnyidLmqbD3Np4qP3O6tB%2FY5lMG0z4UDrFph5YSsfJt%2B3UL6BRwPFBk0GwGDXHK2QFZwkMrLlsvac%2FRPxaR51KKXAs72jCUFx3QwjFCFeqS9iIcIGjjCpkMTJBjqkAbFRz70v2BdtvRCN6nuGwudQT5J0D%2Bgp9p%2FwZ%2F44KwnOcm01Fk3wG6OcHM89ZTvW0muNbc9WxMuMfZjPSJhjR17qBvGX7ZwpHGZeNQG%2F7tBpNiKo%2FCa1kL%2BMWlcF5NzMpv%2FSeWg1YpLQIPmvoVghoeeMhU2EA8MNg7dnVyqHbo4ZfIYiZGNhPF7Ry0NauDbRL7kcCxF6q4t8v8VpSlQqSuxPE9ug&X-Amz-Signature=30596c8ea830954a010590b132e84de4716df1a27bf457aff7da145b2af93a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6V3ZNTP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDukwRb74PPEW%2Bh8jXBdzyP2piItfJgMY6Ns3PD9r1glgIhAML7eJUuGV3McOnpG8BKAPR8jT7t0ULShzOm9uba64MHKv8DCD0QABoMNjM3NDIzMTgzODA1IgyJBYdErAv32yN8tdAq3AOT8oA5oaVk24gUe46A%2FJ%2FwELhUju8J41gY9RLg0ehvwwkOJhtdMOiyRCPbQRQRf7A%2BsPjsAHOLgx87Dyg8X9ZC%2FCOYnoEv01R5NvlE08tdDutnC3G%2Fu%2BCYmMzMUTpVxsrW%2BwRgplJrAyr09LFZOKGXoF0DpAXzjFktKDbfQLABoApD1OiuFBdioWcfVyCT72QKXtrck0rw40kTlo2Bw9ySVhLXC8diVJFm1RmaaTZjhycrNkIoOxGk9Z0fcSMUE5jqofcwt6svoqujQNBoppsomlOqx2MFvWtxwqedzMZNFVhz6%2BzN%2FIZlQitkP1hx5SXTm3%2BI0z5PkW7Pal07jGCvaBztddEfAEC0W4bYsS3mkuQUiiYcnwIyV%2BtJzTpxFgNL0PLp8roo9hhCpq2hpq7mcBTu6JjHzKdTj%2B6Ox88SmIj45BUNEoVHa4Hav3TMRd3Bdej2%2Fq7t%2FoWgUOR8Vwb2bzHY00zN53UaNY1zWECLZXdzjPZuP46NONHB5IQPviwuaehlbojQnyidLmqbD3Np4qP3O6tB%2FY5lMG0z4UDrFph5YSsfJt%2B3UL6BRwPFBk0GwGDXHK2QFZwkMrLlsvac%2FRPxaR51KKXAs72jCUFx3QwjFCFeqS9iIcIGjjCpkMTJBjqkAbFRz70v2BdtvRCN6nuGwudQT5J0D%2Bgp9p%2FwZ%2F44KwnOcm01Fk3wG6OcHM89ZTvW0muNbc9WxMuMfZjPSJhjR17qBvGX7ZwpHGZeNQG%2F7tBpNiKo%2FCa1kL%2BMWlcF5NzMpv%2FSeWg1YpLQIPmvoVghoeeMhU2EA8MNg7dnVyqHbo4ZfIYiZGNhPF7Ry0NauDbRL7kcCxF6q4t8v8VpSlQqSuxPE9ug&X-Amz-Signature=889502d4babf28bd0b351d94a241103caed18a612886e7cce5aa8fd3aed8ab27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
