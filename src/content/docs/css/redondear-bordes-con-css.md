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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYALJ236%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDENZFq4pU0F%2FuQUFwvLT1NgSxXX5cCHC3LZ8HmxAlJlAIhANFhXPwzE92ETeqrAHYkA2wbBpnrgSpnI02q6827GoWmKv8DCHoQABoMNjM3NDIzMTgzODA1IgzScOADh3PhT78DTRkq3APhnUHjEiPbHexYoRs10%2BSoblVjcNm0KUrGPrTy%2BVYfqCKr3I12jCEcCmv6kw1PhE0aARU7P%2FYlqDHu1Ky6Oa8MBFS7NtAL46GbSsMu4OzeK%2BLuFRTNQlDu3kyuby4c6vKS63Coj%2FvokbIVi2YwnJsGC%2FD8f0WJppDRQVPXE2BjbCqmVZlHTcNQrdPzmlvxactXNQ66oPqQ0Gc4l8TXnMsTuvEfaIsHa6tzSu99z6eoIRaF1UnSk%2FbtwiwDnASgujOO4dqT8D5BH7lMsE9c8nzALKr0ju9vtWZ9JBpzkHIi1T2kp%2BhS7%2F%2BpwMsM1dWDeaZyX6yeq2tAE5wsJZmVi2VtHwwtqNg6hQzdP4Nlw8mj8voBQZ1WkecI6uKqLU8jj%2BaeVEC4RPuVrOW8VyeUBsaowhgyBphwXi7M8gvj2CkCu2cwcoYESyc70EU1C8qzWpnyHdDaGFtf2weUBc9XpfhzuCpgZ7qRBOLWYH%2Ff9ty74mPtLmEHWm5xtFGpaqngVFIZP%2FJKd0zgguwshg6f%2B1AnXGwIL7Nsn%2Fv5mtHF05k3qF2UZAfQQ5lhCRXOm7UfDvPqWOktozFYEeVzlX67lUnXPl9RLOb4oIsc2GF5amsdu2EL%2FLWcD1dmsDG51TDiw9HJBjqkAYnh68CaHhVX6exrA3SIV5wzHU7Y9rtGEA4NhDI7Y%2BYT9TehnhNSQ4GL0rcv596JYwN6FSz6fBNgB5RijOcckp3Lqc6TnE5m9BzkTsOVyML1ubW6cr3%2F2Y37KnHMn9%2Brk2biIpd9qBQsFwc6oxI48%2FGe2HejTVrE%2FsHFOF6P2H2zz09d6lQGvqIWGVMJk1UDjLz1QR71OaWApEhIM5xysoWo2ckJ&X-Amz-Signature=f22b6988abda9d1bfbbb4a9161136267c6eb2f81eb360c698f7050a075dc0e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYALJ236%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDENZFq4pU0F%2FuQUFwvLT1NgSxXX5cCHC3LZ8HmxAlJlAIhANFhXPwzE92ETeqrAHYkA2wbBpnrgSpnI02q6827GoWmKv8DCHoQABoMNjM3NDIzMTgzODA1IgzScOADh3PhT78DTRkq3APhnUHjEiPbHexYoRs10%2BSoblVjcNm0KUrGPrTy%2BVYfqCKr3I12jCEcCmv6kw1PhE0aARU7P%2FYlqDHu1Ky6Oa8MBFS7NtAL46GbSsMu4OzeK%2BLuFRTNQlDu3kyuby4c6vKS63Coj%2FvokbIVi2YwnJsGC%2FD8f0WJppDRQVPXE2BjbCqmVZlHTcNQrdPzmlvxactXNQ66oPqQ0Gc4l8TXnMsTuvEfaIsHa6tzSu99z6eoIRaF1UnSk%2FbtwiwDnASgujOO4dqT8D5BH7lMsE9c8nzALKr0ju9vtWZ9JBpzkHIi1T2kp%2BhS7%2F%2BpwMsM1dWDeaZyX6yeq2tAE5wsJZmVi2VtHwwtqNg6hQzdP4Nlw8mj8voBQZ1WkecI6uKqLU8jj%2BaeVEC4RPuVrOW8VyeUBsaowhgyBphwXi7M8gvj2CkCu2cwcoYESyc70EU1C8qzWpnyHdDaGFtf2weUBc9XpfhzuCpgZ7qRBOLWYH%2Ff9ty74mPtLmEHWm5xtFGpaqngVFIZP%2FJKd0zgguwshg6f%2B1AnXGwIL7Nsn%2Fv5mtHF05k3qF2UZAfQQ5lhCRXOm7UfDvPqWOktozFYEeVzlX67lUnXPl9RLOb4oIsc2GF5amsdu2EL%2FLWcD1dmsDG51TDiw9HJBjqkAYnh68CaHhVX6exrA3SIV5wzHU7Y9rtGEA4NhDI7Y%2BYT9TehnhNSQ4GL0rcv596JYwN6FSz6fBNgB5RijOcckp3Lqc6TnE5m9BzkTsOVyML1ubW6cr3%2F2Y37KnHMn9%2Brk2biIpd9qBQsFwc6oxI48%2FGe2HejTVrE%2FsHFOF6P2H2zz09d6lQGvqIWGVMJk1UDjLz1QR71OaWApEhIM5xysoWo2ckJ&X-Amz-Signature=368213d7569bb737714fd9ebe9e5c7f3a67bd4eeff10c05685548ffad167e640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
