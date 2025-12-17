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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GPWAXS7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv7jfFXyKZJMsIrzMthXfRIdCeSx5UudlTVFKXHuK3qAiEAviGpVJDAqeHHeuo7VVGc2yS%2BG0In3oN0Uv001dgpMUMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAfekA1ep5lxOecMuircA1MAnXKaRAbjTMHqqJuIj%2FNeljuSUJejVaKM3I%2FQdQxEEFZ25YDPAFo5Z45ZTp6k6vWSD3fPvqViTQ7Huqgh%2F6v0QObdV9%2FfdcwakydXQ%2BeTC0DEZ0X2dhmBRv72iHf0MljQwPzNXxJe1HB5Ol6mA%2BhfY87UkMpTqd68NBJ%2Bm4pVVhYQ%2FkcUqcrzVMoUdecnch%2ByhsyOteVBoX87WeMt8mMihHl952pkIe3ZAMyEDl%2F2Xn%2BplDiAf7iHwQW9nfCe6%2Bs3gY2HrpFlIhFcosASYUNEqOO7vXTHdtt2XKrteWerno6Ho9JFlX7XT6aoEUkcIAzXiaZYTlDVenpwCtHDhkragehRj1T0Ye91Azm9qFUoKvj8F20wKcgXOJpyA6KqcX4fHWlXbhznjUPJmKFxqXpXxDx2234H3H2cAUI97f%2F1nkZus8mnoUFwFLoieIh2%2FJ97mZFljP3z6rbNwF7ydJF33h8R528yDDZcAreGijzgxXob9C8DeUVR1J4u4FHYgXlz1yXn9XHJO1EyLEtpaQ1hDBgOZPsEeKwlbOahoAP4DyiY6ZNEf9uhCp%2F05HGM7U7%2FEUQKX5Lck5HRaqRvMWgPKMy8JbD855YKhsKKAN8Kv8FRlSDuBti55vlBMND7h8oGOqUB%2FyQZcnIS%2FjDK7Kwe1FVfhFUK53Y61%2FGhwBvBhci2d7mKZLV5AXWnZFDt7Hrrt%2FbyvUE00mLdl1u53rCNILgv6CO2gh6%2F9HYAzLjDr%2FUvMGEv5ZlcC%2FSH42GpOlIALBN%2FM8zOvp3JqedsHMYh3U6l%2BodEW9gF0xK%2BG1ZK0F8EGAopM0FkroxlEtQlF%2Bwcoz601F77WSiINmwbPQy%2FUpwh%2FVeu82VZ&X-Amz-Signature=61bc2f1f2402b9e98a4a039e298a407994f40f5032da034f0a1eac1436a696f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GPWAXS7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFv7jfFXyKZJMsIrzMthXfRIdCeSx5UudlTVFKXHuK3qAiEAviGpVJDAqeHHeuo7VVGc2yS%2BG0In3oN0Uv001dgpMUMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAfekA1ep5lxOecMuircA1MAnXKaRAbjTMHqqJuIj%2FNeljuSUJejVaKM3I%2FQdQxEEFZ25YDPAFo5Z45ZTp6k6vWSD3fPvqViTQ7Huqgh%2F6v0QObdV9%2FfdcwakydXQ%2BeTC0DEZ0X2dhmBRv72iHf0MljQwPzNXxJe1HB5Ol6mA%2BhfY87UkMpTqd68NBJ%2Bm4pVVhYQ%2FkcUqcrzVMoUdecnch%2ByhsyOteVBoX87WeMt8mMihHl952pkIe3ZAMyEDl%2F2Xn%2BplDiAf7iHwQW9nfCe6%2Bs3gY2HrpFlIhFcosASYUNEqOO7vXTHdtt2XKrteWerno6Ho9JFlX7XT6aoEUkcIAzXiaZYTlDVenpwCtHDhkragehRj1T0Ye91Azm9qFUoKvj8F20wKcgXOJpyA6KqcX4fHWlXbhznjUPJmKFxqXpXxDx2234H3H2cAUI97f%2F1nkZus8mnoUFwFLoieIh2%2FJ97mZFljP3z6rbNwF7ydJF33h8R528yDDZcAreGijzgxXob9C8DeUVR1J4u4FHYgXlz1yXn9XHJO1EyLEtpaQ1hDBgOZPsEeKwlbOahoAP4DyiY6ZNEf9uhCp%2F05HGM7U7%2FEUQKX5Lck5HRaqRvMWgPKMy8JbD855YKhsKKAN8Kv8FRlSDuBti55vlBMND7h8oGOqUB%2FyQZcnIS%2FjDK7Kwe1FVfhFUK53Y61%2FGhwBvBhci2d7mKZLV5AXWnZFDt7Hrrt%2FbyvUE00mLdl1u53rCNILgv6CO2gh6%2F9HYAzLjDr%2FUvMGEv5ZlcC%2FSH42GpOlIALBN%2FM8zOvp3JqedsHMYh3U6l%2BodEW9gF0xK%2BG1ZK0F8EGAopM0FkroxlEtQlF%2Bwcoz601F77WSiINmwbPQy%2FUpwh%2FVeu82VZ&X-Amz-Signature=4d3bf7503f2d8294c69952596d2d33327a9daad5895cb440fa6dade816ded30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
