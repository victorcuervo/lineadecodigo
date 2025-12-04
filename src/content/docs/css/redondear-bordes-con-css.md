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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGODUMK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIA22sLi39QnGN2aj%2FY%2Ft5tdx8ot4eFajIsYzC7fhrWtBAiB%2Fo38Pv2oXRDJ5uTCfAM7fPdaYbi0hbp9T1YM%2BwNvW7ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMn6RZt2tz8OOpo25uKtwDzB5boLsznMn5ZOqzJou2SXs8%2BMnnvTyLZG3PsB1OrQEiHDXE3PDjwcHWVd0iDuohW9kq71ZW9om7aRUaf%2FVun6pwvOgJfi1QfvOi5faaJwKmDUWWCXDYKE21ZJqGK%2F3miqY%2BMn1Lk9wXOk3XcuMZ0qAQQJZbCoS5%2BsF58DHlC2mCJpGJww3xjrsPWwG8iGIvEhnsWiQGiAHBlBYnnzm2zgRJLztn9CR1mNsTjigFPcNjiI%2FrU5Jusc9saFEqoV0dhyD6oJ%2F003tZFJBJNaNj9LK9dQwGZS7pajs32VkV2Ec0V6i%2FJuw8HtfDo7xjHFNPo4IgY%2FtHtLvlo0mufh2eyTCuu6b%2Fq9%2Fl43%2FRoPiVGeXmmwflPPGkT7ssc8T9GM%2B0TQ5TRTAtWCFOBa8PGtHbBzYc1cjqCPMFl6eQd5mG6N5hRO164D%2BEfPx3mDC27Mx%2BtqoU6SjdmXpf4CxtG0VcTvCx0L52PZBIm2rqnU5lg%2FL2nYjc34kdfmI%2FCljZ%2BOfxXD3CJXi74ymlUT6t0eQU3cKDj%2FzT%2FBMCUNs5XuZgfUOVDCiZxTijkPCTs7NozsTQbpVttDScuwNjjnQTjwHfaqQnwZtA84%2BDFKxL8tN7Cyeo%2FHKpIPPGo3f6sg0wo8nFyQY6pgEpXBzx3d5iJKFmOYqdmXwuP9kfAbXQqCDqHQ4pafEvAamzJcZ06Y6%2FU4PGts8FBmTIcS8JdnVL8FCCSNRS84C%2Bez3Twf0hzjSMYnOQJXkrsPY1fny81BHd6SPS1l1zUBduiTCuR0w4XaWwuBa1Ym81hcnqrXBP5gPVF%2FWsixKYOvu%2Fr5nxsZxP4qUvb7OUAyTx%2BpcrbFznHeUmHgk4dg%2FtkpJieEFr&X-Amz-Signature=30b36c0b962af8b8b8d209b2f7aeb6a0945afaf62e0717cf0e49390a6c8a0d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIGODUMK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIA22sLi39QnGN2aj%2FY%2Ft5tdx8ot4eFajIsYzC7fhrWtBAiB%2Fo38Pv2oXRDJ5uTCfAM7fPdaYbi0hbp9T1YM%2BwNvW7ir%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMn6RZt2tz8OOpo25uKtwDzB5boLsznMn5ZOqzJou2SXs8%2BMnnvTyLZG3PsB1OrQEiHDXE3PDjwcHWVd0iDuohW9kq71ZW9om7aRUaf%2FVun6pwvOgJfi1QfvOi5faaJwKmDUWWCXDYKE21ZJqGK%2F3miqY%2BMn1Lk9wXOk3XcuMZ0qAQQJZbCoS5%2BsF58DHlC2mCJpGJww3xjrsPWwG8iGIvEhnsWiQGiAHBlBYnnzm2zgRJLztn9CR1mNsTjigFPcNjiI%2FrU5Jusc9saFEqoV0dhyD6oJ%2F003tZFJBJNaNj9LK9dQwGZS7pajs32VkV2Ec0V6i%2FJuw8HtfDo7xjHFNPo4IgY%2FtHtLvlo0mufh2eyTCuu6b%2Fq9%2Fl43%2FRoPiVGeXmmwflPPGkT7ssc8T9GM%2B0TQ5TRTAtWCFOBa8PGtHbBzYc1cjqCPMFl6eQd5mG6N5hRO164D%2BEfPx3mDC27Mx%2BtqoU6SjdmXpf4CxtG0VcTvCx0L52PZBIm2rqnU5lg%2FL2nYjc34kdfmI%2FCljZ%2BOfxXD3CJXi74ymlUT6t0eQU3cKDj%2FzT%2FBMCUNs5XuZgfUOVDCiZxTijkPCTs7NozsTQbpVttDScuwNjjnQTjwHfaqQnwZtA84%2BDFKxL8tN7Cyeo%2FHKpIPPGo3f6sg0wo8nFyQY6pgEpXBzx3d5iJKFmOYqdmXwuP9kfAbXQqCDqHQ4pafEvAamzJcZ06Y6%2FU4PGts8FBmTIcS8JdnVL8FCCSNRS84C%2Bez3Twf0hzjSMYnOQJXkrsPY1fny81BHd6SPS1l1zUBduiTCuR0w4XaWwuBa1Ym81hcnqrXBP5gPVF%2FWsixKYOvu%2Fr5nxsZxP4qUvb7OUAyTx%2BpcrbFznHeUmHgk4dg%2FtkpJieEFr&X-Amz-Signature=464b80336e625262644fa9003031c449b8f5a61d4ff4de8c8fc3d58d0eda6db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
