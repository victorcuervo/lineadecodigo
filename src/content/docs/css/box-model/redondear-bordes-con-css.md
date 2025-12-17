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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYAL447Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp2cCDOtMqwJXEbhax94MHGwwFSn2s4Xln4iIEThlj8AiEAzBXy8wKyfqStESbr2IVwJASLgjPjxxO9MWRRhhEg%2FHkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHsSQNf3DKTcGQmvSSrcAxfXyUMj1PiFVsz5Jbohx86Rgdhmx3zv2bpsg4fRYbJH%2FYRnvFdzlyJJTtA0dvVPBuypIhY3hJDXJ0cmOVHwsUJ7XUfmKALPbsvUcCIadQ2Lr5mlTGfz66ncE3ThJOl8lmurhxgsPyEPIN3cLx4ZqzhzYY%2BCkkFT%2BvfmRbyayoZAasbLUNcum81U6LdVqFdyWSq%2B6IJJiGymfEprksa%2BAE%2FgvZvwYijLQOvgO9HDYkIgWgIaQW79wX4ch2%2FHjQPndZNbm3p2Djk%2FBqwdvQNcrKze%2B8m2cMhhL1MQmv7A6ICFI1XyMT1ou20y5GYnUg7rE6QqrJalYGduHz9T2qi8nRs12wliVYWZLndf%2BFNQajtXB0Q%2Fr%2FG1RDZyNq5qtGi5yEPFuj3UTeRsKEenvDfDWEUX%2FZiRoJw4B36YlRxArJdn1xq5qp98%2FtbVmZXdRRSot62S8OGN6sxRg2MrwsvdWwIPC6ppR12nE65eNa0ObjTwkxWdihiRKVp5qSshufkJoCHCZoxxUGQk5FyoLHLD6CKmJu32XTmb0W28yhpaXAVf9aznY5mO%2BxyOfG6MZbqXNkqSHUd%2FrRK4XC8OI2CJTEXU83j3HSAgrUF8cIdZQbmCXva%2BSc%2Ba2ESurHStMO%2FvicoGOqUBYjvpoYD4oyyMFAxbmcccmXPfD89n48MOebACE2xkHwritkH1CKbRHMRjD70zDz15AvbE%2Fh7RlNUkqrqAYY6Vkqs7q0IHTiknGC6wvZHei%2BtdUwdR5Ogd5QmCiaHmUbSWNtpFIiIlEk5ywpbLIspaW2XEHE2U0fKmL5IhZHzkXTWyuS7KeWJwDuzCX9%2BJGperJ6Jnmb4s5AYf9hEgQAdIt%2BZ4jEWP&X-Amz-Signature=3f400bce86ef4638e4221861d2bf9d2bf3b0c326231e6f18f9f4b7ca48671fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYAL447Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBp2cCDOtMqwJXEbhax94MHGwwFSn2s4Xln4iIEThlj8AiEAzBXy8wKyfqStESbr2IVwJASLgjPjxxO9MWRRhhEg%2FHkq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHsSQNf3DKTcGQmvSSrcAxfXyUMj1PiFVsz5Jbohx86Rgdhmx3zv2bpsg4fRYbJH%2FYRnvFdzlyJJTtA0dvVPBuypIhY3hJDXJ0cmOVHwsUJ7XUfmKALPbsvUcCIadQ2Lr5mlTGfz66ncE3ThJOl8lmurhxgsPyEPIN3cLx4ZqzhzYY%2BCkkFT%2BvfmRbyayoZAasbLUNcum81U6LdVqFdyWSq%2B6IJJiGymfEprksa%2BAE%2FgvZvwYijLQOvgO9HDYkIgWgIaQW79wX4ch2%2FHjQPndZNbm3p2Djk%2FBqwdvQNcrKze%2B8m2cMhhL1MQmv7A6ICFI1XyMT1ou20y5GYnUg7rE6QqrJalYGduHz9T2qi8nRs12wliVYWZLndf%2BFNQajtXB0Q%2Fr%2FG1RDZyNq5qtGi5yEPFuj3UTeRsKEenvDfDWEUX%2FZiRoJw4B36YlRxArJdn1xq5qp98%2FtbVmZXdRRSot62S8OGN6sxRg2MrwsvdWwIPC6ppR12nE65eNa0ObjTwkxWdihiRKVp5qSshufkJoCHCZoxxUGQk5FyoLHLD6CKmJu32XTmb0W28yhpaXAVf9aznY5mO%2BxyOfG6MZbqXNkqSHUd%2FrRK4XC8OI2CJTEXU83j3HSAgrUF8cIdZQbmCXva%2BSc%2Ba2ESurHStMO%2FvicoGOqUBYjvpoYD4oyyMFAxbmcccmXPfD89n48MOebACE2xkHwritkH1CKbRHMRjD70zDz15AvbE%2Fh7RlNUkqrqAYY6Vkqs7q0IHTiknGC6wvZHei%2BtdUwdR5Ogd5QmCiaHmUbSWNtpFIiIlEk5ywpbLIspaW2XEHE2U0fKmL5IhZHzkXTWyuS7KeWJwDuzCX9%2BJGperJ6Jnmb4s5AYf9hEgQAdIt%2BZ4jEWP&X-Amz-Signature=e9d4ec2842be934465f81fed74e5a44b4dcb92d4efd28318e404a4f91f8c8b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
