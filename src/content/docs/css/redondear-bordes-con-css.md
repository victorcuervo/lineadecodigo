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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7JNPVF4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr8R9FIyBP5bNr44iA585%2Bzk%2BP6bBhT%2BIkSd9%2FQzINWQIga1kGZO0HkUfoQoY%2BYBLOKD4YO6N28FUH0cwWGNypOeUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMkGKskCPDymsgz4HircA0dwmuTISAJxJGPrCe6APFkhpyoRLtz9BijkmU47X5a3vWK5159s%2BcMNcAWncWXMgZmqTwskZAPJqwOWEcL%2FFV7FGNNiBIGEbqQlNrurRdVL8yoCSMrdoNo00hYqmj22yO3NgA1EdKnnkDAAfLupvV0ulViyROF7nvN9aNXsdIUnlKT3ozzBsPdjezMvKgDcTjvl3OZKHhSSuX1oQaj8u4hvFSxb45w%2FB9ResXu0XV2wQ7xXLMBAtHEh2lee3CCPjHOURPmGW9p8sijGoS1PIZcdve%2BWkMv3RiCXnQtyqBDUGKOMd2WIt4u0uLGo%2Fx02fZ9dyFajSM%2FMSoon3utx%2FfsejbLz%2F4JYcK278fqwVf3Qws4MF7SkcLcV0JBdJP%2FdX79qK5clWiMn2dB646OndXpYJZr34Ic8MQ0UqBig%2F1XBTAMW2PtfOfwYiIjfGvpccPsyyOnrNVQduENJqvY7uh3gPTV14Wg1pGJkPViUmEvrXW7PC7k%2FvciBxc%2B0KCcXRX4Lxa%2FrRZB7tS4KZ%2Bqe63zWkv6ERprx73NBTuKql5zhXTwXQ7%2FIxXa6m7nzW86zjoatuakM8aHd6NghrugFYZxrsdBLmFVilWT7b%2BTqa4LsEd2eVIDGOxjxuWPKMMOMyMkGOqUBLctOn2Zr3vMAHI4f635kzY4qL%2B1O9F5FFeY1r5OwyAN2Ib9wePjQmGfNRZ%2FzUDxSxqPy%2BKVEyNqtdmqTda9s2eqwpa%2F5PkfP01w6FRBNTxcjRJWysxDmHjnBRvlzFSHlzqbMoEjMPCuol90QzDxUZ0pLFCbHrLIyeA2yox6FHZGTsQJh72QG2mqS8dW8kbO%2FoSbftifSeh1%2BNDI49VzeStUNQ21C&X-Amz-Signature=db8a9ac5d390d969bd698560db1f5e848b1a80f8806e31bf007aaedc83ac3c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7JNPVF4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr8R9FIyBP5bNr44iA585%2Bzk%2BP6bBhT%2BIkSd9%2FQzINWQIga1kGZO0HkUfoQoY%2BYBLOKD4YO6N28FUH0cwWGNypOeUq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMkGKskCPDymsgz4HircA0dwmuTISAJxJGPrCe6APFkhpyoRLtz9BijkmU47X5a3vWK5159s%2BcMNcAWncWXMgZmqTwskZAPJqwOWEcL%2FFV7FGNNiBIGEbqQlNrurRdVL8yoCSMrdoNo00hYqmj22yO3NgA1EdKnnkDAAfLupvV0ulViyROF7nvN9aNXsdIUnlKT3ozzBsPdjezMvKgDcTjvl3OZKHhSSuX1oQaj8u4hvFSxb45w%2FB9ResXu0XV2wQ7xXLMBAtHEh2lee3CCPjHOURPmGW9p8sijGoS1PIZcdve%2BWkMv3RiCXnQtyqBDUGKOMd2WIt4u0uLGo%2Fx02fZ9dyFajSM%2FMSoon3utx%2FfsejbLz%2F4JYcK278fqwVf3Qws4MF7SkcLcV0JBdJP%2FdX79qK5clWiMn2dB646OndXpYJZr34Ic8MQ0UqBig%2F1XBTAMW2PtfOfwYiIjfGvpccPsyyOnrNVQduENJqvY7uh3gPTV14Wg1pGJkPViUmEvrXW7PC7k%2FvciBxc%2B0KCcXRX4Lxa%2FrRZB7tS4KZ%2Bqe63zWkv6ERprx73NBTuKql5zhXTwXQ7%2FIxXa6m7nzW86zjoatuakM8aHd6NghrugFYZxrsdBLmFVilWT7b%2BTqa4LsEd2eVIDGOxjxuWPKMMOMyMkGOqUBLctOn2Zr3vMAHI4f635kzY4qL%2B1O9F5FFeY1r5OwyAN2Ib9wePjQmGfNRZ%2FzUDxSxqPy%2BKVEyNqtdmqTda9s2eqwpa%2F5PkfP01w6FRBNTxcjRJWysxDmHjnBRvlzFSHlzqbMoEjMPCuol90QzDxUZ0pLFCbHrLIyeA2yox6FHZGTsQJh72QG2mqS8dW8kbO%2FoSbftifSeh1%2BNDI49VzeStUNQ21C&X-Amz-Signature=e950c5c4856c0bcdad13f69e6a73d84027931c2e27d63db482447464b45c7a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
