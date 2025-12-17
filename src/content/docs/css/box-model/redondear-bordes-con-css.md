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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIBUPOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhSRH2qsRSnvVQh0LjOcbgvKL%2BlCzU2wOlxumy%2Brq0eAiEA9JuG0VPkUS64W5mos0JrBiMiJAYlER%2Br%2Bkf23HFQcZ8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEdlUr%2FLgqAw353r4SrcA9ppktze65dee1uZXi0Vhe%2BK9VzxSTacMLRjvmfkESderek96HIO00K9goAgDXLQferNUBXNiB48E7ZibJZy5xv%2FdYqHkXL81HuKsXBwu8LfY6hBHauLIR6Tx7gugqxiHm3WKE%2FYJFVtvl5obAIoImDYtBR0w646aRIZ%2F7RNHz8L3RV5Y8CxbyeE8mAcXEUGu8U2SIrd96HrjhW7QfPGWPUz%2BSng6fNyMEjyT0sYQlEADjDl8C8MEAU7zRQW3%2Bke6w2FQWL%2B3gT7RZ0ShwsiJAiJqrVS3xWG2C2QlttvCgQ1CyTxt0dALOr92ZyrBR6cXPEa7qaiNdEeQOwIKvoiptouBBdrIuEI8S48nuTAWMRnKxH0rEBfCgIUhWXF%2FwjxhMoJI4oyveUNJg6Qkm2xDA1G8ZB8MtMjvgLGHVERJlGV6HHo0SW7RTW9Q2E1cExDew9Ap3002ulfWoOvYaG%2Fkua4%2BZ8v8vHwEdwJPFljQyvqCUpIRuyUqoqKw9M%2FX5gk0M4w8hllqV0F06OB0b1FKrJfZ6IepLYOhzWwAKmP6rbYTh4Rm2HwkBgBDtgqvAvR91qcmUt1qTJHNuJZILv10S5jJ09dpdkmLLN9GBKhq%2Fw%2FnoKs7gA9NuQQRCCrMPWdicoGOqUBLG5rT3NPUsHH38f%2F8FJwguqzlJPUBZ9Ym4KyaKGQ6ZfGcg7%2FnZJP8JylNKtCzLGwZ53NN5yqaWXVY5TgHu3RUCJ3nePuIn0Isr%2FaCool2L6agV30VEJgP4GVRZHnx00t8HrsfgXT8EGYk%2FgbFoEBTQyUWYgDbdM%2BMnqAPmmzoTdua%2FZw5khgs%2B1AkzeaMqKs1fUryjQmpvyS8dPRp85UdD0VFrgj&X-Amz-Signature=b43f189ddcbb4ff2f967e68ef101d7bcf327b06bceea790d84f65d0d4a8a6d49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPIBUPOA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhSRH2qsRSnvVQh0LjOcbgvKL%2BlCzU2wOlxumy%2Brq0eAiEA9JuG0VPkUS64W5mos0JrBiMiJAYlER%2Br%2Bkf23HFQcZ8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEdlUr%2FLgqAw353r4SrcA9ppktze65dee1uZXi0Vhe%2BK9VzxSTacMLRjvmfkESderek96HIO00K9goAgDXLQferNUBXNiB48E7ZibJZy5xv%2FdYqHkXL81HuKsXBwu8LfY6hBHauLIR6Tx7gugqxiHm3WKE%2FYJFVtvl5obAIoImDYtBR0w646aRIZ%2F7RNHz8L3RV5Y8CxbyeE8mAcXEUGu8U2SIrd96HrjhW7QfPGWPUz%2BSng6fNyMEjyT0sYQlEADjDl8C8MEAU7zRQW3%2Bke6w2FQWL%2B3gT7RZ0ShwsiJAiJqrVS3xWG2C2QlttvCgQ1CyTxt0dALOr92ZyrBR6cXPEa7qaiNdEeQOwIKvoiptouBBdrIuEI8S48nuTAWMRnKxH0rEBfCgIUhWXF%2FwjxhMoJI4oyveUNJg6Qkm2xDA1G8ZB8MtMjvgLGHVERJlGV6HHo0SW7RTW9Q2E1cExDew9Ap3002ulfWoOvYaG%2Fkua4%2BZ8v8vHwEdwJPFljQyvqCUpIRuyUqoqKw9M%2FX5gk0M4w8hllqV0F06OB0b1FKrJfZ6IepLYOhzWwAKmP6rbYTh4Rm2HwkBgBDtgqvAvR91qcmUt1qTJHNuJZILv10S5jJ09dpdkmLLN9GBKhq%2Fw%2FnoKs7gA9NuQQRCCrMPWdicoGOqUBLG5rT3NPUsHH38f%2F8FJwguqzlJPUBZ9Ym4KyaKGQ6ZfGcg7%2FnZJP8JylNKtCzLGwZ53NN5yqaWXVY5TgHu3RUCJ3nePuIn0Isr%2FaCool2L6agV30VEJgP4GVRZHnx00t8HrsfgXT8EGYk%2FgbFoEBTQyUWYgDbdM%2BMnqAPmmzoTdua%2FZw5khgs%2B1AkzeaMqKs1fUryjQmpvyS8dPRp85UdD0VFrgj&X-Amz-Signature=0cf82b5d05b5d79f67d2fdb0bbd7703c96b4d50a8ed528c83c3b7e33c3493c95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
