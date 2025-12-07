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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YED7ND6B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd4diHsG8T6UlhCzA%2FT2TR4R8Go7jmJLmf6VEP6OZPBAiA76Ho1u7Qxe1siHniWtjUAAafJMnUqb%2FIotI73B4YRfSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwBxs%2Bi1B3BZUJZifKtwD5IWm9EAKgVAGGqM0BpN5OcFlF7s4v1iGNCwfkQb8imcpaKrwHDw1balWw0QXacGQywaLUmkMsDS1de%2FnlgW%2B6LFio98D8%2Fk0tTng9j291XINb9lGMdosTNEIT78mjFVEh6W0nZv4OsiKnPYtJkh4guog2Wjwpb4Ph0oBacOgdepdYqfNOFDfGvSIyBD9V39zE3QyIfASm1SE22ZjVrld7TLS4FF%2FrcekXUuOOmzYS5hShuS%2FsrY2DM%2B5MieL39evUKqTl9EXg1cHZ79KwRnLmQKLeV4%2FhBE1Q%2Fv8OOlwby3FP2Uz%2BGFKpei50jsUhcbuiFk3ZcIGC08YRNvwz4pYoWgerW9LamhBCwo%2BnGQwtbtym%2BmFNdFf00vuhAxp9jxflZQ3%2Fubse1OUDPY6fVcN7j%2FkP3ajUfeCVMHLh9WDN%2B9vH1Fcv%2FYzWM%2BzqZbsPaQBt1Cl7HbAsI7hUeDlGhTYxN9VuOqQBxA3OH%2FQLp4sIOfnKRwJp8umjnUlv2YoqtpzM8Lmk9L62rvj8MZZdzuckd4gX5kK0ajP%2FLMzMx9D%2FteFhiPmSO8GczlznVG0qYQ8Ori67MWeMlzaXvnlF2Wtc1Z6aVYs3YBCHzn%2B5ae%2BsWAItkTd0aIO2qyhwPEwmf3SyQY6pgHWzZkl7%2FerDynhKlebKREG8Ih8UxVvwYjved4z8UG0SgYI2quqlGSSdge3%2BlFVhqYA5gumN9MRPYQvTwFyT5WAh9XQjAAxndTK4Wg1q1Su2t2tH7w4pc5D6p81VnUmOdpyCyWn1PpIDgkHCCPHDzaO%2Bvhb%2BGgV4v1K93VMCt129H%2FCI4XioFfec03z1Ln1wpX1tBTB0h7mz%2F8MbvkMedcC3fJY3TA4&X-Amz-Signature=76667c693ee58f5928a3e0186bceeee8437dc377da34ea95d90ce78de8ffb192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YED7ND6B%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDd4diHsG8T6UlhCzA%2FT2TR4R8Go7jmJLmf6VEP6OZPBAiA76Ho1u7Qxe1siHniWtjUAAafJMnUqb%2FIotI73B4YRfSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwBxs%2Bi1B3BZUJZifKtwD5IWm9EAKgVAGGqM0BpN5OcFlF7s4v1iGNCwfkQb8imcpaKrwHDw1balWw0QXacGQywaLUmkMsDS1de%2FnlgW%2B6LFio98D8%2Fk0tTng9j291XINb9lGMdosTNEIT78mjFVEh6W0nZv4OsiKnPYtJkh4guog2Wjwpb4Ph0oBacOgdepdYqfNOFDfGvSIyBD9V39zE3QyIfASm1SE22ZjVrld7TLS4FF%2FrcekXUuOOmzYS5hShuS%2FsrY2DM%2B5MieL39evUKqTl9EXg1cHZ79KwRnLmQKLeV4%2FhBE1Q%2Fv8OOlwby3FP2Uz%2BGFKpei50jsUhcbuiFk3ZcIGC08YRNvwz4pYoWgerW9LamhBCwo%2BnGQwtbtym%2BmFNdFf00vuhAxp9jxflZQ3%2Fubse1OUDPY6fVcN7j%2FkP3ajUfeCVMHLh9WDN%2B9vH1Fcv%2FYzWM%2BzqZbsPaQBt1Cl7HbAsI7hUeDlGhTYxN9VuOqQBxA3OH%2FQLp4sIOfnKRwJp8umjnUlv2YoqtpzM8Lmk9L62rvj8MZZdzuckd4gX5kK0ajP%2FLMzMx9D%2FteFhiPmSO8GczlznVG0qYQ8Ori67MWeMlzaXvnlF2Wtc1Z6aVYs3YBCHzn%2B5ae%2BsWAItkTd0aIO2qyhwPEwmf3SyQY6pgHWzZkl7%2FerDynhKlebKREG8Ih8UxVvwYjved4z8UG0SgYI2quqlGSSdge3%2BlFVhqYA5gumN9MRPYQvTwFyT5WAh9XQjAAxndTK4Wg1q1Su2t2tH7w4pc5D6p81VnUmOdpyCyWn1PpIDgkHCCPHDzaO%2Bvhb%2BGgV4v1K93VMCt129H%2FCI4XioFfec03z1Ln1wpX1tBTB0h7mz%2F8MbvkMedcC3fJY3TA4&X-Amz-Signature=dd5fa5bba35788261651132ed67e8db599667aae79ebd11c9401c37b373a2a42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
