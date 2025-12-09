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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMSNA66%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDudAYSI9oUEXUB720pumihKXvceAdkR9OeF1yKeB2H5gIgQxAh2nuV%2FViyOZqwazd3oLLuO0uEETVk7N1M41BVfYgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3oaSB46K4TVmGnryrcA8dwWWGHYUYyCR2p7diARCntCZZEqfjs8pG3RiUACUVaHlEVNsOexmuccmfwiSqa%2BO98mxBCcwupbdVD8HA1rEKWQRAuv%2F88%2BeDtH%2FkKtJP3I34SfYEF45Cf6SnP9Qsmd29m%2B%2FfsCieQ5dDDRsc6gmLevxvAki6qPQAu29SEbd%2BjS%2Fl9d8By5GQ8sp3y0ZP6enhtSd%2BBo5vSvffWmiL6n6DkfgOpYS47epj80iodXIZDZrIefqqrKU57Qb3ExJliAGPO8Mp214s5VQtqBxjd1AMXY19%2B6O2cXMMrzd2nzDht1wV7ndFQUWPNb0Fn8RM99yBGZ7gkkMNCNvSvV2KcB2WxSq3h62FWJAZpuxP7%2FDkg1wy%2Fkt1cDL2IQEO9CBZ1gTMeKpykSaBuHGN5k%2FZlimWc5cHp4cn33pVceGSKu5LF6xV9zJ5TBPsqyEUXHVZ7zagDjM7YidvrH1qXwIpc8%2BVWMzmmvwMI712pXEuzTt4uOw5pXcLQvcI4XFKLfDbV5YlQJqtZdffU9VwJh4aJr8Gt8ffZvYacYs1ozGq2Yq2P8lHar4oqNacCV%2B9ThBd%2BXCL9gVh4PhGvkZUkMP5gEtEt70BjyOpmA%2FYTw6hoBKZKoqQ6shNn9mwSGfFnMJ%2FE38kGOqUBbSvSH7kV9wqDDXT3oqlbOZdL1TBHgGSi3jbe8kGiultmklYrImwhHIuEWayUs8e1qWTd0pa3xODdu7%2BcO6URnpv61STsQ4LWEfaLuA9Tj5p%2FsR8262RRzkAgyejh3Tm4CV2UKb03zzsJM3o2WvygfD%2F5BgZ0z6pFIOHoVjvzvL95gIThIwdAileSpthW8toDbVTe5QwPWtTMs4PfocZGXuqRiSzf&X-Amz-Signature=87f102a5193778328a7e53fe027dfdda62d6faf1ec1baf8e804db015eabddd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XMSNA66%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDudAYSI9oUEXUB720pumihKXvceAdkR9OeF1yKeB2H5gIgQxAh2nuV%2FViyOZqwazd3oLLuO0uEETVk7N1M41BVfYgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3oaSB46K4TVmGnryrcA8dwWWGHYUYyCR2p7diARCntCZZEqfjs8pG3RiUACUVaHlEVNsOexmuccmfwiSqa%2BO98mxBCcwupbdVD8HA1rEKWQRAuv%2F88%2BeDtH%2FkKtJP3I34SfYEF45Cf6SnP9Qsmd29m%2B%2FfsCieQ5dDDRsc6gmLevxvAki6qPQAu29SEbd%2BjS%2Fl9d8By5GQ8sp3y0ZP6enhtSd%2BBo5vSvffWmiL6n6DkfgOpYS47epj80iodXIZDZrIefqqrKU57Qb3ExJliAGPO8Mp214s5VQtqBxjd1AMXY19%2B6O2cXMMrzd2nzDht1wV7ndFQUWPNb0Fn8RM99yBGZ7gkkMNCNvSvV2KcB2WxSq3h62FWJAZpuxP7%2FDkg1wy%2Fkt1cDL2IQEO9CBZ1gTMeKpykSaBuHGN5k%2FZlimWc5cHp4cn33pVceGSKu5LF6xV9zJ5TBPsqyEUXHVZ7zagDjM7YidvrH1qXwIpc8%2BVWMzmmvwMI712pXEuzTt4uOw5pXcLQvcI4XFKLfDbV5YlQJqtZdffU9VwJh4aJr8Gt8ffZvYacYs1ozGq2Yq2P8lHar4oqNacCV%2B9ThBd%2BXCL9gVh4PhGvkZUkMP5gEtEt70BjyOpmA%2FYTw6hoBKZKoqQ6shNn9mwSGfFnMJ%2FE38kGOqUBbSvSH7kV9wqDDXT3oqlbOZdL1TBHgGSi3jbe8kGiultmklYrImwhHIuEWayUs8e1qWTd0pa3xODdu7%2BcO6URnpv61STsQ4LWEfaLuA9Tj5p%2FsR8262RRzkAgyejh3Tm4CV2UKb03zzsJM3o2WvygfD%2F5BgZ0z6pFIOHoVjvzvL95gIThIwdAileSpthW8toDbVTe5QwPWtTMs4PfocZGXuqRiSzf&X-Amz-Signature=f64ac1058c1de3af04ac6c86829ec016b2f0c929da318a96496b14da37bc7ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
