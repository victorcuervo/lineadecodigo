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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2NMV7S4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1cjr5IwZd5AKEW9lAC%2BYo94sc45%2FoWXl54f882MJFKQIhAOdqmJxwTd%2F%2BX9PYPwvn9G60PyTyu9ikZODcWsM8rxXxKv8DCEkQABoMNjM3NDIzMTgzODA1IgzXeEgH46MWoj7uVU4q3AO5mfTHqNX9YULVhCPh42OfVIXYCouVOPBXhl17ywQGBxja31Jc2Uyh4bfsNY%2Bh8ubMmBGN51caiJW4Hlssib8kcM73NnBu3lZkj5VEHlT%2FAGpeb0ZZ5X6t2NPl5hxs%2B49GvFsT6ROJmyO9%2FFkiMOEkcTBfMApzyWa48GVxVisr6kS7%2Fr7aJ9lzz%2FBZHsJECPKdAe%2FRW2v0Ijec7mtKqDBsCylG6MkcrwG%2FIz82iqgjBuAyUhBwRmamrL6Pod%2FzyqMSXbx0YtxVmAUVty6SaY8sk3YT%2Fz3u26jlc2jU%2BUGgt1rwMS4k7Vukuv1BUpwc2Rs6KsQfrqPAv1g5yCBPA%2FnKEUagFX8gZvvW%2FRaqrD1aoHsB2oSVtGuWr9kpoGHwvSqVm1Dc9nN2mZQMxmVvbPqrXwytm7zz4Y3p69XVbDL7oPR6uzr%2BeB0Dq4%2FQpFX17o4%2BqtDSFZ9Hq0R%2BOgRd%2B3qBYNu5StEhKzgzbKj2xDGSy9QleRCL6WBCTyB3Zm47NSyjF%2FL8WwjqedIOqu6uqMKYaMYw4agf0payEJPI%2FP50CIHVej8%2BBbM2TB6e%2ByH%2FRRlMeBQuKRtOZZOb8YC5%2FmRJtpkBkx1%2FyTTAyc2bQEdEB40DWNRZ7muYm7x5UTDq28bJBjqkAXaENYmejDqA0IpxNj46JrkHWmUFWlf7GOOgnuwIDwzTA90umDrdHliJZ2%2B2Ctjs7I63WHu37FRSr2%2FrlaR1j2TQcZJAADh5Ji22YbZ62%2F9nkYs91YdPToCdpaWXTLL6kpuxjKtHZrx2O8%2Bs7aeBaoDvYC%2FOCEH3Xi4E%2BMu3FV%2BfUmAzb72ioyLRW%2F1U0hbOKxGZAP8tfVPP3VYXGyXeuIlNEZcX&X-Amz-Signature=8eaaa0c0d62e97e18770145b44d71492b1ef9d386f73b032c8b5ff7de1dab834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2NMV7S4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1cjr5IwZd5AKEW9lAC%2BYo94sc45%2FoWXl54f882MJFKQIhAOdqmJxwTd%2F%2BX9PYPwvn9G60PyTyu9ikZODcWsM8rxXxKv8DCEkQABoMNjM3NDIzMTgzODA1IgzXeEgH46MWoj7uVU4q3AO5mfTHqNX9YULVhCPh42OfVIXYCouVOPBXhl17ywQGBxja31Jc2Uyh4bfsNY%2Bh8ubMmBGN51caiJW4Hlssib8kcM73NnBu3lZkj5VEHlT%2FAGpeb0ZZ5X6t2NPl5hxs%2B49GvFsT6ROJmyO9%2FFkiMOEkcTBfMApzyWa48GVxVisr6kS7%2Fr7aJ9lzz%2FBZHsJECPKdAe%2FRW2v0Ijec7mtKqDBsCylG6MkcrwG%2FIz82iqgjBuAyUhBwRmamrL6Pod%2FzyqMSXbx0YtxVmAUVty6SaY8sk3YT%2Fz3u26jlc2jU%2BUGgt1rwMS4k7Vukuv1BUpwc2Rs6KsQfrqPAv1g5yCBPA%2FnKEUagFX8gZvvW%2FRaqrD1aoHsB2oSVtGuWr9kpoGHwvSqVm1Dc9nN2mZQMxmVvbPqrXwytm7zz4Y3p69XVbDL7oPR6uzr%2BeB0Dq4%2FQpFX17o4%2BqtDSFZ9Hq0R%2BOgRd%2B3qBYNu5StEhKzgzbKj2xDGSy9QleRCL6WBCTyB3Zm47NSyjF%2FL8WwjqedIOqu6uqMKYaMYw4agf0payEJPI%2FP50CIHVej8%2BBbM2TB6e%2ByH%2FRRlMeBQuKRtOZZOb8YC5%2FmRJtpkBkx1%2FyTTAyc2bQEdEB40DWNRZ7muYm7x5UTDq28bJBjqkAXaENYmejDqA0IpxNj46JrkHWmUFWlf7GOOgnuwIDwzTA90umDrdHliJZ2%2B2Ctjs7I63WHu37FRSr2%2FrlaR1j2TQcZJAADh5Ji22YbZ62%2F9nkYs91YdPToCdpaWXTLL6kpuxjKtHZrx2O8%2Bs7aeBaoDvYC%2FOCEH3Xi4E%2BMu3FV%2BfUmAzb72ioyLRW%2F1U0hbOKxGZAP8tfVPP3VYXGyXeuIlNEZcX&X-Amz-Signature=f782aa5b867445006789f4203a946cdc22a9aad3fd44636c8948a8d22d853a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
