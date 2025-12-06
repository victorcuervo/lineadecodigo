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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRO4WIJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVT9taOeDG%2Byz%2FW1ZTsSA0DRxiQQBMPx41cChwQSe%2FnQIhANhx6ydgS1O6PMPWO9095OkZUiByGGgSeEokJrvO4TbCKv8DCHIQABoMNjM3NDIzMTgzODA1IgwC9I2hHp4NXH537Asq3ANnSFzit6PlhvKw%2FdJMie54f6mtl1gbJwEWKsJFEbx62EnSiZaSbwDv%2FJ4CPaJfJYkARXT6Lb%2F3d9z3xmfhC0PNTS95M4qvE0rb3FeYY4X9IIKCMPK4V6K%2FJ1bSb1sLL%2FVBqL42DFbEbn4wansmjlQ14lc%2FsytO6sylNcQKtzv%2B8XwB9yj93l9ap%2BS68FgOLYQqCsy5TmKGlld6XxB2u48pd5tLP1YLznyz6z51NWepqcFDRkx6UHRI9DDhvOsAWJPx1WjETE2AyxZZBVZuYkWD00I5FGddYQXSgN9%2Fsm%2BzBwGfWRtgSdMZiOvwOgYk0fy9GGk0wlW%2Fw%2FVF9TRTp6Ke7iSBxJBVOdbhkHK%2FW%2FAxZzcDTyjnwQVkGtJiRDLL1j%2Br9Vk2NbC3pgTOXwY27MeKbky4wyRKsM99QVHoojaCHhGThNQAk%2Bm9nB8Iqt5GAL%2BLLYxSYtNx6k2eOucCrewWhAmOTX3%2Ft3FbL0zJA1zXJdHDwmXYxpzFBYTP75jDfok%2FzwecM8PKgDql6kN1VaIwPbvXGWMBqMHwjzLTd%2BgEf8azRqeVn1bWPuLa%2BjHCE18AuIiuBP4mr%2BDGS%2FmYQuiyoXfbZsoZRpek0N0tGRIjTCwOxB8e85vf7H6SNDC868%2FJBjqkAa0Za%2FVhI9azpkNNlVpDSZQj59mNnEitpa97IBHFUPvqGVc8qxPtNW5LkFoOCdOM1zfa%2BB4%2BYKMP9tXF77Qju0t11SRaLxcVauD%2BuMq%2FcHAz3QA%2FOqDJb0F%2F5YzKso0kN4P6Umg40ZMpJNg4nEAchs9sTCxoS%2BIRE98amb8on8Ltt3cx0qjCPckgEOe8JZMkqcAaDaTgtsDEohUW1GbGjUpQwTw5&X-Amz-Signature=9eb47bcbee046607676cdf70b6793ed03921219c8754c0e0191f4d48cdaa3b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRO4WIJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVT9taOeDG%2Byz%2FW1ZTsSA0DRxiQQBMPx41cChwQSe%2FnQIhANhx6ydgS1O6PMPWO9095OkZUiByGGgSeEokJrvO4TbCKv8DCHIQABoMNjM3NDIzMTgzODA1IgwC9I2hHp4NXH537Asq3ANnSFzit6PlhvKw%2FdJMie54f6mtl1gbJwEWKsJFEbx62EnSiZaSbwDv%2FJ4CPaJfJYkARXT6Lb%2F3d9z3xmfhC0PNTS95M4qvE0rb3FeYY4X9IIKCMPK4V6K%2FJ1bSb1sLL%2FVBqL42DFbEbn4wansmjlQ14lc%2FsytO6sylNcQKtzv%2B8XwB9yj93l9ap%2BS68FgOLYQqCsy5TmKGlld6XxB2u48pd5tLP1YLznyz6z51NWepqcFDRkx6UHRI9DDhvOsAWJPx1WjETE2AyxZZBVZuYkWD00I5FGddYQXSgN9%2Fsm%2BzBwGfWRtgSdMZiOvwOgYk0fy9GGk0wlW%2Fw%2FVF9TRTp6Ke7iSBxJBVOdbhkHK%2FW%2FAxZzcDTyjnwQVkGtJiRDLL1j%2Br9Vk2NbC3pgTOXwY27MeKbky4wyRKsM99QVHoojaCHhGThNQAk%2Bm9nB8Iqt5GAL%2BLLYxSYtNx6k2eOucCrewWhAmOTX3%2Ft3FbL0zJA1zXJdHDwmXYxpzFBYTP75jDfok%2FzwecM8PKgDql6kN1VaIwPbvXGWMBqMHwjzLTd%2BgEf8azRqeVn1bWPuLa%2BjHCE18AuIiuBP4mr%2BDGS%2FmYQuiyoXfbZsoZRpek0N0tGRIjTCwOxB8e85vf7H6SNDC868%2FJBjqkAa0Za%2FVhI9azpkNNlVpDSZQj59mNnEitpa97IBHFUPvqGVc8qxPtNW5LkFoOCdOM1zfa%2BB4%2BYKMP9tXF77Qju0t11SRaLxcVauD%2BuMq%2FcHAz3QA%2FOqDJb0F%2F5YzKso0kN4P6Umg40ZMpJNg4nEAchs9sTCxoS%2BIRE98amb8on8Ltt3cx0qjCPckgEOe8JZMkqcAaDaTgtsDEohUW1GbGjUpQwTw5&X-Amz-Signature=b17591704efa54a61f2594514000b431c22619de65fbf7d1977870b33f06ca3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
