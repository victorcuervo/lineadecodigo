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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBVN67JI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq%2FZvo1LVvPTPew51LENkelDvBEfMH0ZHN1HYkXP%2FLeQIhAN9EcMi528rrt2r5frEyzAwCKe86oL%2BpjJWzUsUwOC%2BhKv8DCHIQABoMNjM3NDIzMTgzODA1IgwqdJlX4lDS4%2FeOEj4q3ANTp9R0R%2FxGxgjtZoBFFUAbU8NEUgMPmg6%2Ff3zQ2wQ2VTKkvnPSmiADczzTIrMv%2BURDNRoTWn9Z1j2AWkL%2B0vZHWWQSm4cKrxBLqRCxpjBBI4H%2FmAHxhxUU3V%2BbKlXm6UUmg80%2FU%2F4zK0k647RGUP8Qcq%2B0Ce%2BLYJN2acKcKqgaukGVCPilSeN8uK3Mf%2FEDr2zKWXpQ9KR0zo%2FNlyfypvqOUOHbiq00pLebG3TqUOu3b9iEyvJ5stYIVZrFyc9ptWU1L4kO3Sj2wIVXeVyaXSd4aPzZQthtkxJL1n%2BkK13nbOqwJrJFK1ukqijqp%2Fr7r51Jkm6kmQaob8dkPacABVYtpHlEzbCgf00iz7iQp%2B3OOzLY4nVxak0cWlL5yQmWM8Y28lfDv%2Bg12o2vxNwqfVPmHxDAgX9e%2BptM6pBZbZ1zFaeWh5bB3wgL5vVV3H6LNDMrKyPRT%2BPEkiTvVZT5h0Ujr8kRG0pks1k2HcyALyUoMKkofJmGb6bqkuRq9xWGhlr%2BtncGG5TA1f6e6kj4f1zcRmYPZ1rJJaLjQEIG%2F4bfJHDPYpnWqtg14iKRJ8qMThuCW8bRrVMhHsbKadthTL8%2Fo%2B4Refl8eMBcnBtAW74SZrzB0usP9SXRbAjYFjDV%2B4fKBjqkAQanF1ze0qWAhd9ia6ZOhqYpZ2tZCeT2u2Iz%2BaWnbiMwdSUrfaXAH8Ku1y7iJXIoaQG4JO%2FZOWsRZQ4dy90clrFoaqRyHT%2Bse1BecdG5uQjpDooj94LL3a9F6UPpHuBYSlluKLjRSt%2FKIG9KAzeGRiWHalimmLGthDzxWV5S2fPYewRNDPeFT0sGElQfifzUKznFqkxxPItKT%2BvTfvtt9xmALYeq&X-Amz-Signature=a970d583f36a2703ae271ce76f019c28019d16a9c6c71dbebe540663b842a227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBVN67JI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq%2FZvo1LVvPTPew51LENkelDvBEfMH0ZHN1HYkXP%2FLeQIhAN9EcMi528rrt2r5frEyzAwCKe86oL%2BpjJWzUsUwOC%2BhKv8DCHIQABoMNjM3NDIzMTgzODA1IgwqdJlX4lDS4%2FeOEj4q3ANTp9R0R%2FxGxgjtZoBFFUAbU8NEUgMPmg6%2Ff3zQ2wQ2VTKkvnPSmiADczzTIrMv%2BURDNRoTWn9Z1j2AWkL%2B0vZHWWQSm4cKrxBLqRCxpjBBI4H%2FmAHxhxUU3V%2BbKlXm6UUmg80%2FU%2F4zK0k647RGUP8Qcq%2B0Ce%2BLYJN2acKcKqgaukGVCPilSeN8uK3Mf%2FEDr2zKWXpQ9KR0zo%2FNlyfypvqOUOHbiq00pLebG3TqUOu3b9iEyvJ5stYIVZrFyc9ptWU1L4kO3Sj2wIVXeVyaXSd4aPzZQthtkxJL1n%2BkK13nbOqwJrJFK1ukqijqp%2Fr7r51Jkm6kmQaob8dkPacABVYtpHlEzbCgf00iz7iQp%2B3OOzLY4nVxak0cWlL5yQmWM8Y28lfDv%2Bg12o2vxNwqfVPmHxDAgX9e%2BptM6pBZbZ1zFaeWh5bB3wgL5vVV3H6LNDMrKyPRT%2BPEkiTvVZT5h0Ujr8kRG0pks1k2HcyALyUoMKkofJmGb6bqkuRq9xWGhlr%2BtncGG5TA1f6e6kj4f1zcRmYPZ1rJJaLjQEIG%2F4bfJHDPYpnWqtg14iKRJ8qMThuCW8bRrVMhHsbKadthTL8%2Fo%2B4Refl8eMBcnBtAW74SZrzB0usP9SXRbAjYFjDV%2B4fKBjqkAQanF1ze0qWAhd9ia6ZOhqYpZ2tZCeT2u2Iz%2BaWnbiMwdSUrfaXAH8Ku1y7iJXIoaQG4JO%2FZOWsRZQ4dy90clrFoaqRyHT%2Bse1BecdG5uQjpDooj94LL3a9F6UPpHuBYSlluKLjRSt%2FKIG9KAzeGRiWHalimmLGthDzxWV5S2fPYewRNDPeFT0sGElQfifzUKznFqkxxPItKT%2BvTfvtt9xmALYeq&X-Amz-Signature=801de8c4e6a29fce4c5bb304d65edc37c61b014832e509956ed2386e222e6835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
