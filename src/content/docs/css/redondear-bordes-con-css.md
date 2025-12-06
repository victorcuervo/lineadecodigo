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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TNVAITK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSfL9N75FrK4RdEpfHq%2BAqtGNa9tkgj%2Bzn5wT4dbjZYQIgDp5k2PRizJNwYW3nnCn8INfdJlNv16otboh1Tb1XuLwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB9VSVvH4TykELAx%2FCrcA%2B4H%2FNTHuiwyMN%2Fbdi1Xqto%2B3MlD6dl4MWWKweccBHYsnKOXAveLcq9Yy%2FS3JwS1eqZ%2FL0fd4lb4Th4LmzNsbJbSgt3q39b0LogDMBeGT5UrDr%2B2cpOHo4EYu51Qsqr2MIRL2aWRIVG4vuAI3fj6TLtbBf4LSpilSJUlifS17ZcYuhSFrj%2Ba59Tb06K2uX26k6XPy6qqMdqJP0lXLEw87Krbad7DQGPt4%2Ft9%2F4wrkALfp3p1t%2F%2FJ8U6ZUQ2vkOiY9r0LkiY084viXyjT0MjugnDwOLSUX%2BQDmNcTm3R2i2BK6yNKuPZVywRUdeu8mwoNuqq8LgqgcHuUjMne5P8uD9umTrhYAKSAoYZVOosoGHfay7AZ6pUgCrCcQss6jdC%2FuO3gZHKhL9qz37Q0%2Bq9MuEDfpO%2F%2Bh5zxAbSrldCgxSE9jViSMIwODxWLmjjJ96%2BBLXCtl6VbPyFb2lN%2BR2KUoimKl6bPSRxEfjx%2BXLwn%2BXUf5daRBjNbKvsGnxA%2FC5fdwvhLvxDec7hytbajiqUu%2BpWCGFHGCyJxFjtwjZyyPSu50XI14GiKdyvjRlkngOVYF1IsYpYIGpgDjfg8E1uaLn2IhlATF6eXMIuvweBr%2BEY99Fj9v%2F2B3aeQvfhjMITU0skGOqUBy%2FyuxEJVOdf0LgzMX0VWeM8YkwM7sm5op62dPGd3en9nnGoOv0eBHNMZNmR%2BSbQ1J7gRTH%2BGpqagZQCx2zUKPNbB11wjg3HtMglBgxh2%2BkqWB7K%2BBYL8dZ8zDBYyoYEAn7lshgzTSZ%2FHZat853LWdzKzk5Pgh%2FKC7idI2mem4fTIDbA4dz65SQE2YlgbtmCyUGhu5ro%2B0dMjnQhWaU9C2mT9MGgH&X-Amz-Signature=596deee52c48c85c2798be55476e245daa3ab325557925e5cf9324bb67fc7f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TNVAITK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSfL9N75FrK4RdEpfHq%2BAqtGNa9tkgj%2Bzn5wT4dbjZYQIgDp5k2PRizJNwYW3nnCn8INfdJlNv16otboh1Tb1XuLwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB9VSVvH4TykELAx%2FCrcA%2B4H%2FNTHuiwyMN%2Fbdi1Xqto%2B3MlD6dl4MWWKweccBHYsnKOXAveLcq9Yy%2FS3JwS1eqZ%2FL0fd4lb4Th4LmzNsbJbSgt3q39b0LogDMBeGT5UrDr%2B2cpOHo4EYu51Qsqr2MIRL2aWRIVG4vuAI3fj6TLtbBf4LSpilSJUlifS17ZcYuhSFrj%2Ba59Tb06K2uX26k6XPy6qqMdqJP0lXLEw87Krbad7DQGPt4%2Ft9%2F4wrkALfp3p1t%2F%2FJ8U6ZUQ2vkOiY9r0LkiY084viXyjT0MjugnDwOLSUX%2BQDmNcTm3R2i2BK6yNKuPZVywRUdeu8mwoNuqq8LgqgcHuUjMne5P8uD9umTrhYAKSAoYZVOosoGHfay7AZ6pUgCrCcQss6jdC%2FuO3gZHKhL9qz37Q0%2Bq9MuEDfpO%2F%2Bh5zxAbSrldCgxSE9jViSMIwODxWLmjjJ96%2BBLXCtl6VbPyFb2lN%2BR2KUoimKl6bPSRxEfjx%2BXLwn%2BXUf5daRBjNbKvsGnxA%2FC5fdwvhLvxDec7hytbajiqUu%2BpWCGFHGCyJxFjtwjZyyPSu50XI14GiKdyvjRlkngOVYF1IsYpYIGpgDjfg8E1uaLn2IhlATF6eXMIuvweBr%2BEY99Fj9v%2F2B3aeQvfhjMITU0skGOqUBy%2FyuxEJVOdf0LgzMX0VWeM8YkwM7sm5op62dPGd3en9nnGoOv0eBHNMZNmR%2BSbQ1J7gRTH%2BGpqagZQCx2zUKPNbB11wjg3HtMglBgxh2%2BkqWB7K%2BBYL8dZ8zDBYyoYEAn7lshgzTSZ%2FHZat853LWdzKzk5Pgh%2FKC7idI2mem4fTIDbA4dz65SQE2YlgbtmCyUGhu5ro%2B0dMjnQhWaU9C2mT9MGgH&X-Amz-Signature=9c4ce51f3027f866893f8e34e0c24d2603b8937fba6354ac461421cc818ba4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
