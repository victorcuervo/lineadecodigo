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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GFT5ZZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HibhtVP13vVGbGCqxvEa3zSvvlIDm4UBmpupveCKMAiEAouyUzI69lv%2B1T%2BQ2WYQF4KJU3jXQi9ztVjK8fk%2B91tkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsFUO8SL6fW4%2FR45SrcA944a29ueKkCrdifAKn4EA2WaCW6eZxXKqYj%2FFfo%2FJyNsddEvJuc%2BqIXOxKZri%2Bnci27M3UeWIA3CeNX%2B3GK%2Bm4K0cH9VwGrX%2FqDrU7IU5GznMi14R6OSypnRw%2Fjur%2FnDcCAHjwkoel3uMQcO3FkneyHvrAnTg6qM963q5VKcW0pHe32OmEFROCNW52yr3RzN%2BeHHZ0%2BM6z2%2FTQvNqeia3s6QB4Si3dM0Pr7lfpOH9ww%2F0uiWdxgtUyh%2BVOuct9%2FtQTutjXzvsDrdbaYaOnIzjVW8VTIrIvcq9JjEwp49VFgKGQoi8UNt40jn2l0uYhxoCEKElJ%2B73Kxl009tPkMhobSHC8vS9ZKVP9987UBtstF7%2B3%2FVMzV7RqDrHI9tRn9GH%2FcRow8D8R4hgyr8IvaQ2rHiJI4yeQlX79hAcVXA4CRIsFAaAX7WGegckv3j65LJGnCatLbEjT3RWtvhsUrU%2B3%2FAiWZwwoRelaErhDmQsHaQ68jVJ6VttbtxGfuvZnMLPTLn74DEvYkt7NFna%2FyoD0DnawKyjGq%2FHacKqkPcnNlmRuEEy%2F%2F9Qr%2BMoV8lv4XyNOTx54EyZy3zBejzT1olJsWrcpFlOfuH4Il4qC3x%2Bne6%2Bdw9c03D%2Fgzuk32MISgi8oGOqUB3fTFLqV2MMVcfSVHl0RfLeo2u%2BiEZmYniSOBM4IMfCxD4wX%2Fj73rkHCME71u2wQPAeaQzY6HLJrWUY5Ns0ITgxXRwRk0q8H7g8YSXpNxpiLqLTeF5UMTv8wpwnDgQeFK8OsyMn1Pjp%2B%2FfI3hyDNQbl6gm5hjInhEAhcYOnee7CcCEEn6LXXw1OAA2mp5v5I3fxWq%2FiO46cUW9uqTiXiXufxRsExK&X-Amz-Signature=3d992debe80769cfffb6dd8fde703713843b89e5d0479e0fae69608c0eab353f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GFT5ZZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HibhtVP13vVGbGCqxvEa3zSvvlIDm4UBmpupveCKMAiEAouyUzI69lv%2B1T%2BQ2WYQF4KJU3jXQi9ztVjK8fk%2B91tkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsFUO8SL6fW4%2FR45SrcA944a29ueKkCrdifAKn4EA2WaCW6eZxXKqYj%2FFfo%2FJyNsddEvJuc%2BqIXOxKZri%2Bnci27M3UeWIA3CeNX%2B3GK%2Bm4K0cH9VwGrX%2FqDrU7IU5GznMi14R6OSypnRw%2Fjur%2FnDcCAHjwkoel3uMQcO3FkneyHvrAnTg6qM963q5VKcW0pHe32OmEFROCNW52yr3RzN%2BeHHZ0%2BM6z2%2FTQvNqeia3s6QB4Si3dM0Pr7lfpOH9ww%2F0uiWdxgtUyh%2BVOuct9%2FtQTutjXzvsDrdbaYaOnIzjVW8VTIrIvcq9JjEwp49VFgKGQoi8UNt40jn2l0uYhxoCEKElJ%2B73Kxl009tPkMhobSHC8vS9ZKVP9987UBtstF7%2B3%2FVMzV7RqDrHI9tRn9GH%2FcRow8D8R4hgyr8IvaQ2rHiJI4yeQlX79hAcVXA4CRIsFAaAX7WGegckv3j65LJGnCatLbEjT3RWtvhsUrU%2B3%2FAiWZwwoRelaErhDmQsHaQ68jVJ6VttbtxGfuvZnMLPTLn74DEvYkt7NFna%2FyoD0DnawKyjGq%2FHacKqkPcnNlmRuEEy%2F%2F9Qr%2BMoV8lv4XyNOTx54EyZy3zBejzT1olJsWrcpFlOfuH4Il4qC3x%2Bne6%2Bdw9c03D%2Fgzuk32MISgi8oGOqUB3fTFLqV2MMVcfSVHl0RfLeo2u%2BiEZmYniSOBM4IMfCxD4wX%2Fj73rkHCME71u2wQPAeaQzY6HLJrWUY5Ns0ITgxXRwRk0q8H7g8YSXpNxpiLqLTeF5UMTv8wpwnDgQeFK8OsyMn1Pjp%2B%2FfI3hyDNQbl6gm5hjInhEAhcYOnee7CcCEEn6LXXw1OAA2mp5v5I3fxWq%2FiO46cUW9uqTiXiXufxRsExK&X-Amz-Signature=236281cf43fe8b2bba72eeb5ef1c9aab8916ca09b3b36a1c0777defeb8a58912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
