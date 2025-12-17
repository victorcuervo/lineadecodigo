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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GQEF25%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZHEDjyVYKuoz9rXvQFbyYjdoaWuuXY95ykNp6%2BeNokAiEAr5cvrkuFW86cjDJZ0XJTIKJBS%2BpOKmWn45HIWZXSPxEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEn1ruBu7V%2BO2k2IQCrcAxQZMOyCIkjO6Skx3mCUnCGlzPk52juLnCzXr%2FcdFqrMrEp%2BjJN8IR75uHMmqAB3%2FBvZWOSX3nFtQRDQYmwDP%2BnimeE6OFFfAAAbQxdKLUJYrb0rGSoqs3sYKVQU%2BfGHufAcX5i%2FpTwKhm8eejQ6sNAGyO6peaxLVm51AxrNlKRuQq3mZwV%2BykTj8fAvB%2BWt%2FeswZ5HUPv8otTPNQ72mPFVjSD0KHFvZIMhfqpp7qYqVyg19w27UwuhVW2ojC5KZ0zBxE72AvtoeHwylAOhnsOURFHoEP92fjFq5mr5mqHT7yTRbqIXsXojV8NR%2Fm7syCHpfb8exn%2F%2B6ykWThq2S5gPGgQ26yi7Q%2BCFKEHYfleMczHFtd9ZIScPvwE84x7CSJM0K7yEX6JI2tspEh%2FnPvqjOmQfjeiBqNAcVVuGuztNxY6w44KlhukPN7Um3CArrYxSgExQvVK%2B6iPaaDfbAlfNOskNhdb6P8PFjNU2r7BeiBEj4YZMsnLNWN3z4c02HQNnTTKRz%2FpNl6ika53azMmBUDRW3OXWj8WCAly7twxPXQ1wmVhz6wy%2BbHQTjakli8EFsQglvix71ORg0mGlM%2BziLRgbtm%2BhOGg%2BXSNJqfrU23sdMV%2FAz4Gu9i66hMN3OiMoGOqUBjuzxotiexwmx1ood3SuSMZx59DjtyVl3JYVmQkHDedZrq%2FUJ00rIGkzy5mmmfBsK%2BXhMcZQfeA12xilqw%2BUDRSMZbRy42eS1WvKv4qt0jcSrSMqxmxKp0vUYy6yfp6%2Fum9gtucIUiQ8rsMwfJTvrQIfeMkJ6UUvou9tYIkhhiGHqZWs%2FrXPMeQCDjPvmx3e3ue717buGE1bYxzMdMFJX4OzjLuo9&X-Amz-Signature=d9bbfa7e539d6e3fa857d8447131dae92e69bd2859f13e4939927118b625c810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GQEF25%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZHEDjyVYKuoz9rXvQFbyYjdoaWuuXY95ykNp6%2BeNokAiEAr5cvrkuFW86cjDJZ0XJTIKJBS%2BpOKmWn45HIWZXSPxEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEn1ruBu7V%2BO2k2IQCrcAxQZMOyCIkjO6Skx3mCUnCGlzPk52juLnCzXr%2FcdFqrMrEp%2BjJN8IR75uHMmqAB3%2FBvZWOSX3nFtQRDQYmwDP%2BnimeE6OFFfAAAbQxdKLUJYrb0rGSoqs3sYKVQU%2BfGHufAcX5i%2FpTwKhm8eejQ6sNAGyO6peaxLVm51AxrNlKRuQq3mZwV%2BykTj8fAvB%2BWt%2FeswZ5HUPv8otTPNQ72mPFVjSD0KHFvZIMhfqpp7qYqVyg19w27UwuhVW2ojC5KZ0zBxE72AvtoeHwylAOhnsOURFHoEP92fjFq5mr5mqHT7yTRbqIXsXojV8NR%2Fm7syCHpfb8exn%2F%2B6ykWThq2S5gPGgQ26yi7Q%2BCFKEHYfleMczHFtd9ZIScPvwE84x7CSJM0K7yEX6JI2tspEh%2FnPvqjOmQfjeiBqNAcVVuGuztNxY6w44KlhukPN7Um3CArrYxSgExQvVK%2B6iPaaDfbAlfNOskNhdb6P8PFjNU2r7BeiBEj4YZMsnLNWN3z4c02HQNnTTKRz%2FpNl6ika53azMmBUDRW3OXWj8WCAly7twxPXQ1wmVhz6wy%2BbHQTjakli8EFsQglvix71ORg0mGlM%2BziLRgbtm%2BhOGg%2BXSNJqfrU23sdMV%2FAz4Gu9i66hMN3OiMoGOqUBjuzxotiexwmx1ood3SuSMZx59DjtyVl3JYVmQkHDedZrq%2FUJ00rIGkzy5mmmfBsK%2BXhMcZQfeA12xilqw%2BUDRSMZbRy42eS1WvKv4qt0jcSrSMqxmxKp0vUYy6yfp6%2Fum9gtucIUiQ8rsMwfJTvrQIfeMkJ6UUvou9tYIkhhiGHqZWs%2FrXPMeQCDjPvmx3e3ue717buGE1bYxzMdMFJX4OzjLuo9&X-Amz-Signature=8347158fef3f0cfb1e42b854d0363d009ae978d68d17133e234dcf47492bdfac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
