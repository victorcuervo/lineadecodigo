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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W76IYVKI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGKexxeerqlSjkZaK27DSBkS%2BCyStgdrMgyEedMjSH6gIgVSfJPtqEEWXoHnEc6ysJghUZB4xa%2FewUMheAo1dWkM8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBb%2BHkf29zs2XvpYCSrcA2v9vU664%2Bsh9FGN9TZ4hal2wAIh8wX4fG1Pzg5p9Ofck26gXx0WjPPHN1M5oveyCYdhnsnAg478XfB4KqCqvzGaLkvi%2BXRFsmd8s1SYmnlQf9S87c%2FSw9ta%2FppNROL4ITkc8vI8Gg4rCVFzfeZt3Ntxr80G%2BZU1K%2BW%2BVsqBzRzZj5YN39YBnkqBkk04tBXQ4dUk8DMDnKuLB7eOIHwWO6%2FAOuQc1N4IQ1buIt5lQhBEC4jpU8Y4b0fnIOzKS4JdXn7vLt1ztT%2FtvIHNQ23HMkK0Ne2hVce46NugQrw5FZNxlX%2Bc3yoskE4ydnPynpBgRi7FNS%2B%2FOZmK9SBl%2BFf%2BkbmttdQfNE7j%2FPUm4Xs%2BpdQgBUTZax%2FTKNKvT9fGNeWam46Ocq4AznT%2B4JRjThCaONI9ZSctOEBcBdTpWXMJAQmjuF198Lg3Ge2g%2FntgFlLXNU0lFJ9WddQO4BNtiijETZhv8VuzH5VyN2ZuHMQ2fx0xVqUI3RUKQD3gmHnbqr%2BdU%2FrqxsVVI1OmHDb9DGbUYXvUuz7wGF1muke2nPDd2J9VJymQxC4HuQjdVQSWR%2FRl3E9Zf6W7oLZUNW2zjdEpQr5vfZeEUWT1VkBNPWK6njzLn0USt6jpbU%2BP%2FcRuMMDVyskGOqUBaQpZs5%2Bo0DC2A3shp2ulJyWafY7ytbre0YGjt6koHD91gDTV7YUs5YJzjdJczOIiTmYvFDYGl0E2Oef1GiLXzj34SYzNXpO49B9FZ4pXk3MAbhzfXb%2Fn%2Fkstru2OTqdh4QI4RY5eh0XASRli66BTOiQPuIVjWk%2FYUnqiquikdTXzEN%2FRJTRn5QkRFqNSMEjh%2FfzO1p6C7ztkP0FxQSiv89m%2BoaCr&X-Amz-Signature=8066410290f3129c03f0b5273ba4baf8c51fb0f6c00ee4af557aacddfdd63172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W76IYVKI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGKexxeerqlSjkZaK27DSBkS%2BCyStgdrMgyEedMjSH6gIgVSfJPtqEEWXoHnEc6ysJghUZB4xa%2FewUMheAo1dWkM8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDBb%2BHkf29zs2XvpYCSrcA2v9vU664%2Bsh9FGN9TZ4hal2wAIh8wX4fG1Pzg5p9Ofck26gXx0WjPPHN1M5oveyCYdhnsnAg478XfB4KqCqvzGaLkvi%2BXRFsmd8s1SYmnlQf9S87c%2FSw9ta%2FppNROL4ITkc8vI8Gg4rCVFzfeZt3Ntxr80G%2BZU1K%2BW%2BVsqBzRzZj5YN39YBnkqBkk04tBXQ4dUk8DMDnKuLB7eOIHwWO6%2FAOuQc1N4IQ1buIt5lQhBEC4jpU8Y4b0fnIOzKS4JdXn7vLt1ztT%2FtvIHNQ23HMkK0Ne2hVce46NugQrw5FZNxlX%2Bc3yoskE4ydnPynpBgRi7FNS%2B%2FOZmK9SBl%2BFf%2BkbmttdQfNE7j%2FPUm4Xs%2BpdQgBUTZax%2FTKNKvT9fGNeWam46Ocq4AznT%2B4JRjThCaONI9ZSctOEBcBdTpWXMJAQmjuF198Lg3Ge2g%2FntgFlLXNU0lFJ9WddQO4BNtiijETZhv8VuzH5VyN2ZuHMQ2fx0xVqUI3RUKQD3gmHnbqr%2BdU%2FrqxsVVI1OmHDb9DGbUYXvUuz7wGF1muke2nPDd2J9VJymQxC4HuQjdVQSWR%2FRl3E9Zf6W7oLZUNW2zjdEpQr5vfZeEUWT1VkBNPWK6njzLn0USt6jpbU%2BP%2FcRuMMDVyskGOqUBaQpZs5%2Bo0DC2A3shp2ulJyWafY7ytbre0YGjt6koHD91gDTV7YUs5YJzjdJczOIiTmYvFDYGl0E2Oef1GiLXzj34SYzNXpO49B9FZ4pXk3MAbhzfXb%2Fn%2Fkstru2OTqdh4QI4RY5eh0XASRli66BTOiQPuIVjWk%2FYUnqiquikdTXzEN%2FRJTRn5QkRFqNSMEjh%2FfzO1p6C7ztkP0FxQSiv89m%2BoaCr&X-Amz-Signature=2be4d0cd4c86b6620c384ce2cb6ef63ec2f51777cd2326b0519ab117b604b6aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
