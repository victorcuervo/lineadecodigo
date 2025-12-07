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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E7OYHJD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwAZCC6jeABxc4CcyufKBENkus2njxMwqcvOENenlUsAIhAO49Z55Hv2RR55EsxzZ34K28%2F%2B6AEBPbiML6v5Sn36zUKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTNcShLWBzkEJEzh8q3AOvGgHZbyqABMq8N1nyEqxUwOIMtuZDjgDJbf2%2F0epzEY%2FW4r9TdtDMSsp%2B4MqFW5rqdKA1GXIBKRlIshiwPJCDfTtKzoXEnAg2XN4ocioiaJ0Wx%2BulUpCDiZxxtP2v7nttD0cZJoKCwSt35vPM0U4FlERW9rkI905KxB69UhqDSXCXeX%2F2Jf7bwLk42Gy%2F6YIUBLlGzQV7fNW8PgiJgHdbmAgZcfrUt3FE8%2BAPMDIXcoDdkwNL0ZYXLBZvv3R5il89O7M3Y%2F9IudKCP0I2Kbq7m5el5%2BllvEgvnYUkVi92jOd%2B%2FmX231LPliBsi4Zj8VuygHdcf48iKkCkEtASb93q5D3RM5luLGv9%2FvK6X7eYhmGMD2sxzbcDoSy8duyseWvZ3XrxvjHcglnQ%2FuQrijwy9wMZ314jvGKIuEu4oK2AwkDYvBOjt%2BFZywoiqBWlJLY3Tr2ddYIShaK83XsJI6%2FHH1vf1GAkJ1GNKFV8Lgp54Wer7zEezsrVHNO%2BYyZOVq7YLnNyWrM96f0pRymClfagA0a2BcCzMBAa6yMA2rpA5MAd31aP%2BzkxZP1xpn2PkkkMa0ZIxSWXDkCk2ezluRT2lsPTN3aQydQ37m%2FDh42sxpjYZvYMay3NJ%2FNaWzCQ%2FdLJBjqkAVaV6J9duJxUyqnSQZ9zYdqD6Rui4dV8vCIY8fmN9QjXm3KF3f5mjmOZvjpG97vAVfhB4J3Gxz8YdlnGdiv1G%2FIPBOyyUaUw4LQCLp5p%2BuqMP1HaqUr2qZZInjZAzjkHnD%2FgchyIWXH1%2FAT1o6rLvMgt0VSMekKG42ZSBCfoy3UGq1lyvM3X2Kl%2BdoAWJFpzHFkv0FlKAUKeYUhifr%2FHh2w7S%2BsM&X-Amz-Signature=6b34e8036c950d4e307a76788eb5901bfeaa638e14105b0b8cfee7bbae2c303c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E7OYHJD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwAZCC6jeABxc4CcyufKBENkus2njxMwqcvOENenlUsAIhAO49Z55Hv2RR55EsxzZ34K28%2F%2B6AEBPbiML6v5Sn36zUKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTNcShLWBzkEJEzh8q3AOvGgHZbyqABMq8N1nyEqxUwOIMtuZDjgDJbf2%2F0epzEY%2FW4r9TdtDMSsp%2B4MqFW5rqdKA1GXIBKRlIshiwPJCDfTtKzoXEnAg2XN4ocioiaJ0Wx%2BulUpCDiZxxtP2v7nttD0cZJoKCwSt35vPM0U4FlERW9rkI905KxB69UhqDSXCXeX%2F2Jf7bwLk42Gy%2F6YIUBLlGzQV7fNW8PgiJgHdbmAgZcfrUt3FE8%2BAPMDIXcoDdkwNL0ZYXLBZvv3R5il89O7M3Y%2F9IudKCP0I2Kbq7m5el5%2BllvEgvnYUkVi92jOd%2B%2FmX231LPliBsi4Zj8VuygHdcf48iKkCkEtASb93q5D3RM5luLGv9%2FvK6X7eYhmGMD2sxzbcDoSy8duyseWvZ3XrxvjHcglnQ%2FuQrijwy9wMZ314jvGKIuEu4oK2AwkDYvBOjt%2BFZywoiqBWlJLY3Tr2ddYIShaK83XsJI6%2FHH1vf1GAkJ1GNKFV8Lgp54Wer7zEezsrVHNO%2BYyZOVq7YLnNyWrM96f0pRymClfagA0a2BcCzMBAa6yMA2rpA5MAd31aP%2BzkxZP1xpn2PkkkMa0ZIxSWXDkCk2ezluRT2lsPTN3aQydQ37m%2FDh42sxpjYZvYMay3NJ%2FNaWzCQ%2FdLJBjqkAVaV6J9duJxUyqnSQZ9zYdqD6Rui4dV8vCIY8fmN9QjXm3KF3f5mjmOZvjpG97vAVfhB4J3Gxz8YdlnGdiv1G%2FIPBOyyUaUw4LQCLp5p%2BuqMP1HaqUr2qZZInjZAzjkHnD%2FgchyIWXH1%2FAT1o6rLvMgt0VSMekKG42ZSBCfoy3UGq1lyvM3X2Kl%2BdoAWJFpzHFkv0FlKAUKeYUhifr%2FHh2w7S%2BsM&X-Amz-Signature=113195d6fc2b5ba70830a473db13b98b969529b93c9177c94974400309f6ab7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
