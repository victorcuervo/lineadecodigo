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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQZAH2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVgLgjsU8Mj3ch9moEQFRzko%2BPPmH0UGjYxMmAUyIX8AiA9GmBzqR4Qp%2BwbZF9XgiV%2F4rH%2FIAjzk4oRVdAiwHTiCSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9y84XoFmeXdi7A4KtwDvo3FKQ9M8Li2MmZaPp9BmY7DcbwvkoRV7Ts1poAkR4DIckRoctVyc6gXYQ9VSMaSRMXezsa8yZZIvMedUapdG5RPnaqMJriqslYIuQJHUvTIG3QWI1odAl5iPea3LRQAZZHwCZGlMKVQczmx8YxPg4aUf8ubbvWs5FsiRrLk5eiq6CFTCZzJ2BGXN79ND%2FWnfSTw72F8H2IRXv9xeMcHJfZqj0O0%2FdhGVGXYcKRyN2RFPzZ6%2FrN5XlXFSfU4n%2B0AvFD3BLw%2FaOvp44i8GAifOfJCdbID%2Ftfnf%2BDWrpVG9jHPyEqOCSXv1vwecz9vWf0ZNgjzM8LNZRMQk3nRFDSz4vLOjRFioiByrj56f50HZb2ktYfZpxeOq5LG53L1eyI2hOSCo%2BCI73Mw06syW8BHoHQmms%2FqeBaJ9Mju6yOS4DzZhZgwXKu15JcVnB2sQJ8r7rtX%2Fj%2BWJ%2BsrdbIWH2aofLtW4i55VGakpn6eN5yOgJbocEPPx%2BNZEOqF%2F6M2YXmotcpDvz3Lgjx%2Fdpik7pTanI%2BXMxzKn7xsVf3Tj%2FfyVmqONcn7xPr1rSfcl5EkfxWyL8%2BjKeKrsZ9OgzBsvlj12GGvX9n%2F8L7BPDWmoCxflb7yaST6YTzvV8AFM4gwzZ6LygY6pgE7na6RFYOE3YbLpN%2FANkGVR0mS9jT3%2BuZJVoohzGJikscEDEX3Ay9MqmDLvxMEKW9AQFezDorrkiSvHLEMgFUTu%2FoNUVQJeG3yEhKpseO%2BD%2FLMdm6bRQXM7VJ063H1gC7R0g1Vg8mnOYSBf7Qkub50JzDdGb%2B6FB9uzl3y4ABCviv6McSbs5sgnO%2Fgnn%2FNdK04KaPT71LlMh90wtGU5u3D7sF%2FYPUi&X-Amz-Signature=90a990fa580c3c3262b82dc883c4021b1cf343f999365ddc847b01bc36e3d8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LQZAH2N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVgLgjsU8Mj3ch9moEQFRzko%2BPPmH0UGjYxMmAUyIX8AiA9GmBzqR4Qp%2BwbZF9XgiV%2F4rH%2FIAjzk4oRVdAiwHTiCSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw9y84XoFmeXdi7A4KtwDvo3FKQ9M8Li2MmZaPp9BmY7DcbwvkoRV7Ts1poAkR4DIckRoctVyc6gXYQ9VSMaSRMXezsa8yZZIvMedUapdG5RPnaqMJriqslYIuQJHUvTIG3QWI1odAl5iPea3LRQAZZHwCZGlMKVQczmx8YxPg4aUf8ubbvWs5FsiRrLk5eiq6CFTCZzJ2BGXN79ND%2FWnfSTw72F8H2IRXv9xeMcHJfZqj0O0%2FdhGVGXYcKRyN2RFPzZ6%2FrN5XlXFSfU4n%2B0AvFD3BLw%2FaOvp44i8GAifOfJCdbID%2Ftfnf%2BDWrpVG9jHPyEqOCSXv1vwecz9vWf0ZNgjzM8LNZRMQk3nRFDSz4vLOjRFioiByrj56f50HZb2ktYfZpxeOq5LG53L1eyI2hOSCo%2BCI73Mw06syW8BHoHQmms%2FqeBaJ9Mju6yOS4DzZhZgwXKu15JcVnB2sQJ8r7rtX%2Fj%2BWJ%2BsrdbIWH2aofLtW4i55VGakpn6eN5yOgJbocEPPx%2BNZEOqF%2F6M2YXmotcpDvz3Lgjx%2Fdpik7pTanI%2BXMxzKn7xsVf3Tj%2FfyVmqONcn7xPr1rSfcl5EkfxWyL8%2BjKeKrsZ9OgzBsvlj12GGvX9n%2F8L7BPDWmoCxflb7yaST6YTzvV8AFM4gwzZ6LygY6pgE7na6RFYOE3YbLpN%2FANkGVR0mS9jT3%2BuZJVoohzGJikscEDEX3Ay9MqmDLvxMEKW9AQFezDorrkiSvHLEMgFUTu%2FoNUVQJeG3yEhKpseO%2BD%2FLMdm6bRQXM7VJ063H1gC7R0g1Vg8mnOYSBf7Qkub50JzDdGb%2B6FB9uzl3y4ABCviv6McSbs5sgnO%2Fgnn%2FNdK04KaPT71LlMh90wtGU5u3D7sF%2FYPUi&X-Amz-Signature=e2794d91ce780f67a584ec7518f17290c1989c4553fe316e871d91501e350d87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
