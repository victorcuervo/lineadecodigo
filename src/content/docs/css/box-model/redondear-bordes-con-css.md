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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ72GNTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8gjFj%2FmtGEoXwxQ4hLWnvzgKr2IBKiLSl6vaUWdb37AiEA%2BUpbCHwPzwZ3lirXEsYUdO0%2B%2BHFdmUHfFkNREkRokmYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNJyqrc%2FejIB3OxASrcAxAPFD5w53LtbhrrqW%2FvoQlE%2BUPjEKVMFF09%2Bf8Qr9oS0hK6ozOmxhyPUx2CJ7cWzIebmKvzs10RyD8MlrmMNebV1VeRI5v4gA40Ws08m5S0xyqkYpsBN5S7ZNw1HQcsJ8G9Pmswx%2FIIkvgh8GitODcduTz5GIqAlaHtQ2z27ttIeuxM8a6EJRo674TzRgHdYHKREQXY7GYDyqFJNKs2MdN4wrlZg9XrZKn1S9fGf4e8yy4BpAhY2jeUy9LPwCExU9jemrhTzK9OjAnH13zoNHbHCcWnGcXbYF1O6ksn%2FWEAD%2Bm4e2o6Xne8hKV6trJHaFAesK221fICOQksckgLfNn%2Br4MW8u%2BSX3uL0nHAWVJdo8yujv7JaUKb3fLJBExJzdaWPcAQ%2Fnn1VK8gA%2BmUAkLfieDBAKQfVaIxinv4nkObKHHZY1cs1m8xuagOdi0EMIrfPaHZ8jugmtHw2o8G%2BjVrJ86khOODBPufLT1Fz4mz5oqE992OW4mKZIrtfKzBC3VDJN7P3JFKzr1uf17AX03hCAUlfAH%2F9wPEso90fr%2FxY3aDqoyiiJaxCntUW5VQQK8J59okDraMynEfdHiBf0BcFiJ%2FoG8Mwd3hHhpVC0IzthXSoODYMCBc9r%2BSMM%2BLjMoGOqUB3UNzMPUlTb7m%2FS%2BHA9HX9IgDqAWlopIEjeJ0S2c8Iq4R7i6nRwsKlhFn7V6RUs70YVXocJomCX2DswKrLFFytWMdQaEo6vhWNKqxwYkH1wSpe3pqfrJdjyMDEt2jkMDrLHnRgHtBft30p1sL4zTxzBjrH7HzstNJ0LVPVzgaaG9CA6A9J5HIQBxt1a0WnlAMGuN9Esryf3JBwgxLxIb34LRVOHgy&X-Amz-Signature=cc3b8b5746af05e8edad58f68e9946ae9727a5152863718ea51b911489f6b49a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJ72GNTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8gjFj%2FmtGEoXwxQ4hLWnvzgKr2IBKiLSl6vaUWdb37AiEA%2BUpbCHwPzwZ3lirXEsYUdO0%2B%2BHFdmUHfFkNREkRokmYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNJyqrc%2FejIB3OxASrcAxAPFD5w53LtbhrrqW%2FvoQlE%2BUPjEKVMFF09%2Bf8Qr9oS0hK6ozOmxhyPUx2CJ7cWzIebmKvzs10RyD8MlrmMNebV1VeRI5v4gA40Ws08m5S0xyqkYpsBN5S7ZNw1HQcsJ8G9Pmswx%2FIIkvgh8GitODcduTz5GIqAlaHtQ2z27ttIeuxM8a6EJRo674TzRgHdYHKREQXY7GYDyqFJNKs2MdN4wrlZg9XrZKn1S9fGf4e8yy4BpAhY2jeUy9LPwCExU9jemrhTzK9OjAnH13zoNHbHCcWnGcXbYF1O6ksn%2FWEAD%2Bm4e2o6Xne8hKV6trJHaFAesK221fICOQksckgLfNn%2Br4MW8u%2BSX3uL0nHAWVJdo8yujv7JaUKb3fLJBExJzdaWPcAQ%2Fnn1VK8gA%2BmUAkLfieDBAKQfVaIxinv4nkObKHHZY1cs1m8xuagOdi0EMIrfPaHZ8jugmtHw2o8G%2BjVrJ86khOODBPufLT1Fz4mz5oqE992OW4mKZIrtfKzBC3VDJN7P3JFKzr1uf17AX03hCAUlfAH%2F9wPEso90fr%2FxY3aDqoyiiJaxCntUW5VQQK8J59okDraMynEfdHiBf0BcFiJ%2FoG8Mwd3hHhpVC0IzthXSoODYMCBc9r%2BSMM%2BLjMoGOqUB3UNzMPUlTb7m%2FS%2BHA9HX9IgDqAWlopIEjeJ0S2c8Iq4R7i6nRwsKlhFn7V6RUs70YVXocJomCX2DswKrLFFytWMdQaEo6vhWNKqxwYkH1wSpe3pqfrJdjyMDEt2jkMDrLHnRgHtBft30p1sL4zTxzBjrH7HzstNJ0LVPVzgaaG9CA6A9J5HIQBxt1a0WnlAMGuN9Esryf3JBwgxLxIb34LRVOHgy&X-Amz-Signature=e3b3461c5ec0fc3e9258e5ec845b66917f9c3e8659e37b695613f20c84ad7266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
