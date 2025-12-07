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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633LNE4W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9TnTQGfKtvhcuu2wcx2RQxX2cPat8zRC68K2uv5Sq%2BwIhAPqJXdz1kEOIlBn%2FfhIoma2cOifNOktHvyI4wudQYSNfKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw0csZ33cYqgtz6vMq3ANKOfmdV4%2F2ArqyzcYAEWnNu%2FgOn7pRCrjD%2BgFtbsJ2PUZLVQEGTQwtZZ1tMS2Am%2BbucAuESzfDhhzRTw2gYCicYkpnKgS5yv4dEDo9blo98rBYwZk2dd4B2rQPGSSJcW3gwUfLmwtSVCLp3y7BvMu2%2BiNKRmLt2rHlLC4DFzMUnc%2F7x%2FfMPf%2FKOCkObdPp58nGGimT3vfuJBIpUHij3tc41A8gfAfIv6DSkT4CYy7MFHrperLqr0ZDV61VD8zc5SAiqagwG2xs9eevi%2BeGGXwovIK45z7JqLLroMAllJTSVg4p4G3fCQbUqWgCYBBjS7i2iLYWcvjl335QHV40jVh5PPbHDDbUTEpVW8Y5OVPOX8REl1HTiVd8fldQ1vdWTT5nvHa1iHlbVOH1DLpisHT6Qk0NpOy5Uk8Koa%2BnKWJzOzZfAZdYoed2m5MbkDM3cUx9MZSV0Yox9zOK1KwSSr1sVDS1wJi5ndn0ArRPMJhQqQKdd193moh8zuwGT%2B9yX1USNPXBFa6RhSjrVtrBstxqeLj0n2isJ3WXe1Iu48Wm8qyTs%2BYMHk7KnH93d2z69aJCbiMG5jNg7gwVLOfJhyUiekjNAGLnNZQ2rIeBEow0gJgz9%2F7KXgNH0zKrczCDqdfJBjqkAWHcIbkxRnfln8sN6KadJRAeXM3qLhMB52rMIQXQfsE9LVPBoPuh0DRwEBdsFSpUSxnIycXktRHd8JuCW2EJZApXX%2FsM0QPWANmdWw9%2BABGMn9hWWIJtABk%2F6dMSoZgk%2FnFHFBnLli2OiE9q6x%2BIj7WAAvoZaWzbx1DHJI1n1vs5zrCDSr8xTVkEIsVcAX7nqjPLwS0ABf%2FRZ7tC9LrYu95ilpZW&X-Amz-Signature=b408c22ef4203babc164ad5e72929e003640afebd4ccc3c85b6718b437157b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466633LNE4W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T193209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9TnTQGfKtvhcuu2wcx2RQxX2cPat8zRC68K2uv5Sq%2BwIhAPqJXdz1kEOIlBn%2FfhIoma2cOifNOktHvyI4wudQYSNfKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyw0csZ33cYqgtz6vMq3ANKOfmdV4%2F2ArqyzcYAEWnNu%2FgOn7pRCrjD%2BgFtbsJ2PUZLVQEGTQwtZZ1tMS2Am%2BbucAuESzfDhhzRTw2gYCicYkpnKgS5yv4dEDo9blo98rBYwZk2dd4B2rQPGSSJcW3gwUfLmwtSVCLp3y7BvMu2%2BiNKRmLt2rHlLC4DFzMUnc%2F7x%2FfMPf%2FKOCkObdPp58nGGimT3vfuJBIpUHij3tc41A8gfAfIv6DSkT4CYy7MFHrperLqr0ZDV61VD8zc5SAiqagwG2xs9eevi%2BeGGXwovIK45z7JqLLroMAllJTSVg4p4G3fCQbUqWgCYBBjS7i2iLYWcvjl335QHV40jVh5PPbHDDbUTEpVW8Y5OVPOX8REl1HTiVd8fldQ1vdWTT5nvHa1iHlbVOH1DLpisHT6Qk0NpOy5Uk8Koa%2BnKWJzOzZfAZdYoed2m5MbkDM3cUx9MZSV0Yox9zOK1KwSSr1sVDS1wJi5ndn0ArRPMJhQqQKdd193moh8zuwGT%2B9yX1USNPXBFa6RhSjrVtrBstxqeLj0n2isJ3WXe1Iu48Wm8qyTs%2BYMHk7KnH93d2z69aJCbiMG5jNg7gwVLOfJhyUiekjNAGLnNZQ2rIeBEow0gJgz9%2F7KXgNH0zKrczCDqdfJBjqkAWHcIbkxRnfln8sN6KadJRAeXM3qLhMB52rMIQXQfsE9LVPBoPuh0DRwEBdsFSpUSxnIycXktRHd8JuCW2EJZApXX%2FsM0QPWANmdWw9%2BABGMn9hWWIJtABk%2F6dMSoZgk%2FnFHFBnLli2OiE9q6x%2BIj7WAAvoZaWzbx1DHJI1n1vs5zrCDSr8xTVkEIsVcAX7nqjPLwS0ABf%2FRZ7tC9LrYu95ilpZW&X-Amz-Signature=a3da3e98776c7d2247e40864f86ad88ab8de59cfd0d327542dc704581b012b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
