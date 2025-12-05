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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXFGNNV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Rm0r%2F8i78LCcIISCg0bl5YPm4p4emMKRgXg5dQkwLQIhAIhV%2FCDG6n20g0ekvbRWETpYsLs14unhfF0dUPtEuZS0Kv8DCE8QABoMNjM3NDIzMTgzODA1Igz3Uz2i3XOg1Vqt1ckq3ANEXklC73qNPFw6yFAYxZZjPJukDhEiEP1AH9LX%2BgaDybNdPknO8VLgI4iEkdpfu5rGtSJUFy3hNqpr7bM19NbfmOLFNhF4k%2Fs%2BGgKV7%2FNZo4jRNWwjHWP1Sx7Iy9oJIrYh3mKawQyf%2F5OnIuJ7yDgJ%2FLioYTs6YPfsJa5ZioN%2BQGGaFte5Ycm%2FW7AYFKKRW8m6XngYEmymvMBe8m6hm9XqQN0iiutL6GTeJOx75f0dbHoo981eabRtfKGRpUZ9D36HQigb2DgAMkB8DRTxiOfiVBeQEpLfxd%2B5WmivjDuaHmi2ED3HLOJQjC75PfPeGIKq13dCC00VgNJ1DZXFMma9PH9w3EcSkrZXAfzW15JyELfJjWFN86OKOwDM8WJ2XJ90hVK2uFyivHJ%2FCdAZs7XUFP1wacXf0RFMrVaQ9w46XiR3IuqrPwkymxC077gf9%2BAOEWwD2GGE99Mki1Ctc40SEIblyb1ZdHYNW4eQVCUG2ux2B6JdpfssMRqxPVPCW3xyLdvmEf9gj%2BNTvXjR6kuMW6x4yHmt2HBNj4IgDcZLL1N1GWvNt9NslXrjRlg5mbrvHC97B%2BaivZW51vI%2BjTBK8y6hxshNVIhCryKNOcRuYaCyosSund0c2KmxQzDVjMjJBjqkAS9uZeW9ryF0jBGSR2LPCRy813wxMq02rau0ZCvc7mGi7nGkGBNi5k%2F1oWH%2BYBbJaB8Jl2kF7%2BXBlh8wGi6Dd5ArPgeK16vJTyNlYdeKCw0%2BSX0WNXXlBubG8szDubESJz3gQX1BfCCIsCWKviu4ukTddTo638xA%2By1oD8IORxA99wmdXAiaILijstFctOqY6F8%2BZUuc%2BWUjXSbAqAqhySdVcMJO&X-Amz-Signature=48f394f7407c5479945116ea706b030e5ee7bff8e563e4470253a977efa2d90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CXFGNNV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Rm0r%2F8i78LCcIISCg0bl5YPm4p4emMKRgXg5dQkwLQIhAIhV%2FCDG6n20g0ekvbRWETpYsLs14unhfF0dUPtEuZS0Kv8DCE8QABoMNjM3NDIzMTgzODA1Igz3Uz2i3XOg1Vqt1ckq3ANEXklC73qNPFw6yFAYxZZjPJukDhEiEP1AH9LX%2BgaDybNdPknO8VLgI4iEkdpfu5rGtSJUFy3hNqpr7bM19NbfmOLFNhF4k%2Fs%2BGgKV7%2FNZo4jRNWwjHWP1Sx7Iy9oJIrYh3mKawQyf%2F5OnIuJ7yDgJ%2FLioYTs6YPfsJa5ZioN%2BQGGaFte5Ycm%2FW7AYFKKRW8m6XngYEmymvMBe8m6hm9XqQN0iiutL6GTeJOx75f0dbHoo981eabRtfKGRpUZ9D36HQigb2DgAMkB8DRTxiOfiVBeQEpLfxd%2B5WmivjDuaHmi2ED3HLOJQjC75PfPeGIKq13dCC00VgNJ1DZXFMma9PH9w3EcSkrZXAfzW15JyELfJjWFN86OKOwDM8WJ2XJ90hVK2uFyivHJ%2FCdAZs7XUFP1wacXf0RFMrVaQ9w46XiR3IuqrPwkymxC077gf9%2BAOEWwD2GGE99Mki1Ctc40SEIblyb1ZdHYNW4eQVCUG2ux2B6JdpfssMRqxPVPCW3xyLdvmEf9gj%2BNTvXjR6kuMW6x4yHmt2HBNj4IgDcZLL1N1GWvNt9NslXrjRlg5mbrvHC97B%2BaivZW51vI%2BjTBK8y6hxshNVIhCryKNOcRuYaCyosSund0c2KmxQzDVjMjJBjqkAS9uZeW9ryF0jBGSR2LPCRy813wxMq02rau0ZCvc7mGi7nGkGBNi5k%2F1oWH%2BYBbJaB8Jl2kF7%2BXBlh8wGi6Dd5ArPgeK16vJTyNlYdeKCw0%2BSX0WNXXlBubG8szDubESJz3gQX1BfCCIsCWKviu4ukTddTo638xA%2By1oD8IORxA99wmdXAiaILijstFctOqY6F8%2BZUuc%2BWUjXSbAqAqhySdVcMJO&X-Amz-Signature=0570455b3ecd0b90e6bdc4214d3f05677ae59d3cc90c3d6d91ccabff982d495a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
