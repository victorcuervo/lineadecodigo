---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRFNKG7Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDh7u0dKEnCBkll29qEqsxFy%2FknR4%2Bk4Ibb%2F4%2B3mhJ73AIhAJNiIVpiRV7unX5bPdAxc5JwR%2FV6uj9vaazguASVC6QmKv8DCEMQABoMNjM3NDIzMTgzODA1IgyaEuHuadgdH0bfx3Qq3AO6%2BXnyLHR7T3zR8zT278pXCxZcrzWetMa%2BYF0KvjFooKHRUQ%2F7yjG3r9VQtnSxOl59aEP7%2BA9aRTZqzjufkQG8zaMYxVlgn%2BZYF8UIIcK64r2IKUNyEXvGq%2FA%2BEGvlRaY7AMMzQ3CH%2Bid5ewhafWaeyLj55JL21H1mq5IQdcKikEwfIFWtMUN0EKeb%2FOxdXXMs62ZDbejrGszkYZaxvqVTZFhGDlQQ1Z5TPVxuqGgll6S4bYFQe00XwTyZbXmW3S22Y3%2B88rVLkkVsAE0EmSUsb4cCxkamge8A2oiw7etJp1g0xtK%2FjAKflHOGQuhuYupaA0n4WXU%2FV2jwm%2BsybDqV5%2BnZP3aAw9PeOjEZtfDCGQ3b%2BHs%2F2M0TrJuyWX%2B3jdhupor40lRG2Sjn7p18kFFTUB%2BoSSggA3WzdxUfol30TBkLTKvrp7tpp3a1XrdPFbBVspMQ3JyizQ0AJw55DWXjLMrBos5ZDMFJrlE8qxQpARpuFK1VMq8yOvS7quprg1pk6Vi7bCCoyN%2BV8EogoGNacEm2PtZDYcjqjXPXSTUY%2BTUGrMWQbd7sUCM%2FDejFOOwbBVJE5cQwNxnKIScWIA9gKoTa%2B1bpQdl1oKWvT5euiOcpIVHHP6bKu4T8ljDrqsXJBjqkASqCkqHFPz6Z1bPuBFqhyleFxWQH3Cak%2BPTK6XWAJkZH1ljQZOmLFK9jU6TePMP2aSDgzPkJmAxSR35GXBsNRcwt52WislfNS8H5HuHiA787NJRBP1FrDQ11e95bF3%2BVSfjFkJYjlmzP7jqYPdye53bN9SNPdqNR2goCam%2Fap0ILlZRmHj5hjIOFpV%2F8%2F%2FYJ%2FmpoO3cNWb8mGimIRjjTX5%2B%2FwFzi&X-Amz-Signature=69bccba0d72087be3d06334040eb8d1df940fe38be59239bcc588b05ca2fb05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRFNKG7Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T093626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDh7u0dKEnCBkll29qEqsxFy%2FknR4%2Bk4Ibb%2F4%2B3mhJ73AIhAJNiIVpiRV7unX5bPdAxc5JwR%2FV6uj9vaazguASVC6QmKv8DCEMQABoMNjM3NDIzMTgzODA1IgyaEuHuadgdH0bfx3Qq3AO6%2BXnyLHR7T3zR8zT278pXCxZcrzWetMa%2BYF0KvjFooKHRUQ%2F7yjG3r9VQtnSxOl59aEP7%2BA9aRTZqzjufkQG8zaMYxVlgn%2BZYF8UIIcK64r2IKUNyEXvGq%2FA%2BEGvlRaY7AMMzQ3CH%2Bid5ewhafWaeyLj55JL21H1mq5IQdcKikEwfIFWtMUN0EKeb%2FOxdXXMs62ZDbejrGszkYZaxvqVTZFhGDlQQ1Z5TPVxuqGgll6S4bYFQe00XwTyZbXmW3S22Y3%2B88rVLkkVsAE0EmSUsb4cCxkamge8A2oiw7etJp1g0xtK%2FjAKflHOGQuhuYupaA0n4WXU%2FV2jwm%2BsybDqV5%2BnZP3aAw9PeOjEZtfDCGQ3b%2BHs%2F2M0TrJuyWX%2B3jdhupor40lRG2Sjn7p18kFFTUB%2BoSSggA3WzdxUfol30TBkLTKvrp7tpp3a1XrdPFbBVspMQ3JyizQ0AJw55DWXjLMrBos5ZDMFJrlE8qxQpARpuFK1VMq8yOvS7quprg1pk6Vi7bCCoyN%2BV8EogoGNacEm2PtZDYcjqjXPXSTUY%2BTUGrMWQbd7sUCM%2FDejFOOwbBVJE5cQwNxnKIScWIA9gKoTa%2B1bpQdl1oKWvT5euiOcpIVHHP6bKu4T8ljDrqsXJBjqkASqCkqHFPz6Z1bPuBFqhyleFxWQH3Cak%2BPTK6XWAJkZH1ljQZOmLFK9jU6TePMP2aSDgzPkJmAxSR35GXBsNRcwt52WislfNS8H5HuHiA787NJRBP1FrDQ11e95bF3%2BVSfjFkJYjlmzP7jqYPdye53bN9SNPdqNR2goCam%2Fap0ILlZRmHj5hjIOFpV%2F8%2F%2FYJ%2FmpoO3cNWb8mGimIRjjTX5%2B%2FwFzi&X-Amz-Signature=255cb7e85f60bd38f2f382bef31cb5594bd9b95e79342bcd42ca5f9276d26431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
