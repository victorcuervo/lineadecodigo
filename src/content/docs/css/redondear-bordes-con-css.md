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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZ3O5WE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvhTFCLF3aZYGCKED1NzvYf0Qe5HVPgFKHXWhDXuai5QIgCkokmqOfZAU4YmkTYOG9yIAX14NF9pkDxJ%2FocmCKIhcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcbqSj9KikLUuKftCrcA0HyylP14G7n3OaObDdycT5mnTW2XINfzn1GcTeL6nvIN6BcV2h4VFmqbt7aJzsnP%2BAWHea3sIk9P4wRPM2gI9lM96jIjxxXcXjSTNKzFBfYUuqUWazwfPX0g1%2Fe3ax3zf3r1cS8eENGRw0MFda8811Ko8V70k%2BmIJh1gTYoI%2BSZ5i5iYLoRk23pnzXWjpAYgGM5S%2BbE39MBnKLEvpEjfGyOfvk96VtKFQy2qPcZRs9pyYGKTG%2FeEx6%2FfIJ9oHyjVl1sYKPgUO1wYFu%2BE48EIhH%2BgHGUBDUDev3DHx5xLWxtxXHsqjKMK765i5nO9GsesbhLjEUllv5OxxMnNUVVwFt7id8ne%2FJky8xahsHf2%2BLkfImTzUnyi87BBRffdyOW1Z%2B0wELXRc7almXVPxwOl2d8isxbVNQIUda6wo0F4Wsso3SE9XGPLV9p4s3gYRf8AonhTgy7M8DhIzDQiKzjA0cAfcyU3jIDa1wGov3s%2F9ZZ6R9rLXb6x5%2FPWZiEL%2BQdpCUJS%2FJ0RQnhIEBoWElvDuLVz%2Bk5ol2g7gwkHGh4SB6ZB84SGiexxmLVO5HzVIj2ogECth6Hkw8W0%2FLtbCwsi7S%2FCn7RSr0pf5KInnQXFYYzB4iGTeZmVDSBJh9ZMLSZ1ckGOqUBZtxGVYxmUxxFO4qQANk2TrWsuHTjgwFaY7ebMIdb%2FenZRguE24dIS1ni1elDQeeQvqhwTUGSi%2BftSoZgvMTw8XgtMEidfK0G3WaBod%2F%2F13hXkbrwXApmuVh4B4a2RnBKju3Ks7q56FZnHPy3ADbf5LS%2FMjgCsaSROVyCvN5CYLh1k%2BmB76SVt2jx%2BmCUrunFgqsOtpjDcJcxIalsjs0ezAIjF0Pr&X-Amz-Signature=368a6870052f465a853ddd6f8836ebdee5f8b34f32bbc1fc80355ec7d11d21e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIZ3O5WE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvhTFCLF3aZYGCKED1NzvYf0Qe5HVPgFKHXWhDXuai5QIgCkokmqOfZAU4YmkTYOG9yIAX14NF9pkDxJ%2FocmCKIhcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcbqSj9KikLUuKftCrcA0HyylP14G7n3OaObDdycT5mnTW2XINfzn1GcTeL6nvIN6BcV2h4VFmqbt7aJzsnP%2BAWHea3sIk9P4wRPM2gI9lM96jIjxxXcXjSTNKzFBfYUuqUWazwfPX0g1%2Fe3ax3zf3r1cS8eENGRw0MFda8811Ko8V70k%2BmIJh1gTYoI%2BSZ5i5iYLoRk23pnzXWjpAYgGM5S%2BbE39MBnKLEvpEjfGyOfvk96VtKFQy2qPcZRs9pyYGKTG%2FeEx6%2FfIJ9oHyjVl1sYKPgUO1wYFu%2BE48EIhH%2BgHGUBDUDev3DHx5xLWxtxXHsqjKMK765i5nO9GsesbhLjEUllv5OxxMnNUVVwFt7id8ne%2FJky8xahsHf2%2BLkfImTzUnyi87BBRffdyOW1Z%2B0wELXRc7almXVPxwOl2d8isxbVNQIUda6wo0F4Wsso3SE9XGPLV9p4s3gYRf8AonhTgy7M8DhIzDQiKzjA0cAfcyU3jIDa1wGov3s%2F9ZZ6R9rLXb6x5%2FPWZiEL%2BQdpCUJS%2FJ0RQnhIEBoWElvDuLVz%2Bk5ol2g7gwkHGh4SB6ZB84SGiexxmLVO5HzVIj2ogECth6Hkw8W0%2FLtbCwsi7S%2FCn7RSr0pf5KInnQXFYYzB4iGTeZmVDSBJh9ZMLSZ1ckGOqUBZtxGVYxmUxxFO4qQANk2TrWsuHTjgwFaY7ebMIdb%2FenZRguE24dIS1ni1elDQeeQvqhwTUGSi%2BftSoZgvMTw8XgtMEidfK0G3WaBod%2F%2F13hXkbrwXApmuVh4B4a2RnBKju3Ks7q56FZnHPy3ADbf5LS%2FMjgCsaSROVyCvN5CYLh1k%2BmB76SVt2jx%2BmCUrunFgqsOtpjDcJcxIalsjs0ezAIjF0Pr&X-Amz-Signature=c5dd465a0475f9b84f49a8831a8b04fc9f601667ca39ec12652c0ca266057f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
