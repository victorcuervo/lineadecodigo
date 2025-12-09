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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTMKZICE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGcHu3hcAoyzheNAictMubEEkgKvRQO7hiFSQDCHFaLQIhAPRsW7lQsbAA2EF9n1oe3ItcOefpUv0kwJT%2FZmGrylPEKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzARiG0O%2Bs0xS3DvVYq3ANppjXDuB3uobkxcCvBwHWNIh6NezCpuZs5VhU0fmCqq7ReD0%2FzqkHwpt9AP8nTNPUzXRDOp6zPuxCWM31YOPlx2ey8M8ACVcFyHIlsnasOT2LW6rHVUxk6wgwA3V7mj59FPxu%2FdfzJ2oIXCrLGBuXSaJsV6A1zguSTuDWZwlRQtFAH8N5YheYJsmJzmcKxDTEnGrkVbcjDKcFjKqHC5JiK2q8MfIeVjQH9IJzPVjdsE0XojDKuCoaZY%2BDgWsvGxnfF6xlFqUqvlTSxcVK25POK3l0H1dirHGrpAkG3KpXR4rVETk9Q77bY3WSraRFYyXrq5CLfE1UEz2tBa90apkOWS0GhXtkRc5XFVv9qDQOfRbIcn7tAhdgmoiNx7ioeJx4aEEhY610RC83IpMP9Qy0qn56D3xa1asBj7tsHoFKGY5Mzsqrg4Bj8eV%2Fg1yKDfY54PW9QX8KlVo%2FXL%2FmUwcUaTE5No9P4bF3PHPAOv3UB1OMN2Vo7667CR5d%2BMLwZwtwTYhaE4dtCk6S4om2dBW8BacgbyGhRew6LgqHyWvHbYkHVGun96%2BbRy6KsJvG77%2Fn607F2j7H4Vs02NFhwl76RsAby968EjSay5FuG9BwFx%2Bf2iGZX3%2BRjCQsqKDCrw9%2FJBjqkAXagzLzGOO9YnX9ehtHTgv3qRUf7OcCUu2UlfYLw94NkCc%2FlcqGN%2BynzgyH8tnbJQsQQEiMbQ6GUZhQXAGg8yDe2EpXqmOQhi%2FO1pr2NqihIil2DfA81xGygtQbzBUPPqgdcVsjG2hMBd%2BkhhZjIjkA2t1AJUPpTX8n4P482Rk5tSxDkgLTg27L0T8gb94tny5%2F6gpTuh1kl7qMV4cyoB88Dassd&X-Amz-Signature=f25bb4f453ac96401a2726ea644a3760408393c1eb058b46b4752cc0d02d4c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTMKZICE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGcHu3hcAoyzheNAictMubEEkgKvRQO7hiFSQDCHFaLQIhAPRsW7lQsbAA2EF9n1oe3ItcOefpUv0kwJT%2FZmGrylPEKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzARiG0O%2Bs0xS3DvVYq3ANppjXDuB3uobkxcCvBwHWNIh6NezCpuZs5VhU0fmCqq7ReD0%2FzqkHwpt9AP8nTNPUzXRDOp6zPuxCWM31YOPlx2ey8M8ACVcFyHIlsnasOT2LW6rHVUxk6wgwA3V7mj59FPxu%2FdfzJ2oIXCrLGBuXSaJsV6A1zguSTuDWZwlRQtFAH8N5YheYJsmJzmcKxDTEnGrkVbcjDKcFjKqHC5JiK2q8MfIeVjQH9IJzPVjdsE0XojDKuCoaZY%2BDgWsvGxnfF6xlFqUqvlTSxcVK25POK3l0H1dirHGrpAkG3KpXR4rVETk9Q77bY3WSraRFYyXrq5CLfE1UEz2tBa90apkOWS0GhXtkRc5XFVv9qDQOfRbIcn7tAhdgmoiNx7ioeJx4aEEhY610RC83IpMP9Qy0qn56D3xa1asBj7tsHoFKGY5Mzsqrg4Bj8eV%2Fg1yKDfY54PW9QX8KlVo%2FXL%2FmUwcUaTE5No9P4bF3PHPAOv3UB1OMN2Vo7667CR5d%2BMLwZwtwTYhaE4dtCk6S4om2dBW8BacgbyGhRew6LgqHyWvHbYkHVGun96%2BbRy6KsJvG77%2Fn607F2j7H4Vs02NFhwl76RsAby968EjSay5FuG9BwFx%2Bf2iGZX3%2BRjCQsqKDCrw9%2FJBjqkAXagzLzGOO9YnX9ehtHTgv3qRUf7OcCUu2UlfYLw94NkCc%2FlcqGN%2BynzgyH8tnbJQsQQEiMbQ6GUZhQXAGg8yDe2EpXqmOQhi%2FO1pr2NqihIil2DfA81xGygtQbzBUPPqgdcVsjG2hMBd%2BkhhZjIjkA2t1AJUPpTX8n4P482Rk5tSxDkgLTg27L0T8gb94tny5%2F6gpTuh1kl7qMV4cyoB88Dassd&X-Amz-Signature=2ec9dc42311bfe5ea5d779a82f0b29bd8624a9cbaec648ad82bd0c1c95b067ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
