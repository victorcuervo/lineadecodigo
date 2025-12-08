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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OCM6KZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN2YRNBrbIqzmyXBqZnFWmOQcLUUVGXj%2BnOxXB%2BsHG%2BAiEAiBtSruDeHhLgYFcDHBaXK8xsqvi5XTfICMWwOzFxePoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2DgC%2FzC6xR4S0V%2BSrcA7kawvIh1OwTNlsFV3spl%2F932rWQt%2FJGlagmJ%2BYMMBwqELOgh46Ih7htofPXgcbgWQMkx0FBw9E6nmRHD1OtJ%2FHiYtDjPKBKlq7AFZMWnYcsUbKjgXsPrOc1i2M8dXBtNU3%2FHnifcaOE3MoMJBXfh6u4IB45X6YRtOYgAxR%2FT0GKK%2Bvls19d%2FA7e0OsFHYio4%2FOFjIo2ja%2BWgS2DKBfPm1hJ%2FJHf8dApRzYW5eVd8cQko26MNjaCtN%2BeptuI%2FewCQQLuEmhLqDlm8tNMf26nLX5GEK9UfZrGTLjyvsxrANFlIsxe4I7kdSzMgwA7VSVvtjCndWDF212mW4dje0YOEAkj4x1ztsfYfen9h3R3RaoIBSVcQ5dFs%2BQvzLOnfJoNFKy7%2FMJRTtnMVxJa3Am6JGgC5K6u%2BK8O4sJNNy4b1%2BVieDUDXA9nN5u4177q%2FecX32%2Fz5yiR3HB4D5yGi9wKNHYjwOeXTcMQpYucCk2W2HKZrEfvH%2BQzrupSogA1x9fhPX3NNbwEYj7ljYOXfk70x9jtkhnZ5ycSZB6OWq4QP41oOYujf%2Fdy0yoob2KJKC7W6B83z%2FppaxYLMa9RlGlyAzg5RVknf2UrpJmo3W%2BuhtbplJMfLaM6zuOHI%2FMNMO3t2ckGOqUBV5sG29X2LtL4q9k9WrifamEPqma%2FjbLmciEL57TBxaxJqm%2FIlaqUluzam%2BPeYTE3f%2F%2FVEAB25WYmr4%2FHRENpCsVW0Mr%2Bq4Nj0euCQ%2FCDS0nohwfSThyqTfrejE%2BkEaR077k6wTA4ELH37NkJ%2Bf9u4ESDuapkaetcmpUJDjuVwmgc6c8OaevEbi0AgsFqUMVCfNXAM5VyzeXdRfmFdNK0%2FvbmDodg&X-Amz-Signature=03f5c97fe2341f52eefd5db9e397a8bde7cca12659b26e536bcfbfa0db18570f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OCM6KZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAN2YRNBrbIqzmyXBqZnFWmOQcLUUVGXj%2BnOxXB%2BsHG%2BAiEAiBtSruDeHhLgYFcDHBaXK8xsqvi5XTfICMWwOzFxePoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2DgC%2FzC6xR4S0V%2BSrcA7kawvIh1OwTNlsFV3spl%2F932rWQt%2FJGlagmJ%2BYMMBwqELOgh46Ih7htofPXgcbgWQMkx0FBw9E6nmRHD1OtJ%2FHiYtDjPKBKlq7AFZMWnYcsUbKjgXsPrOc1i2M8dXBtNU3%2FHnifcaOE3MoMJBXfh6u4IB45X6YRtOYgAxR%2FT0GKK%2Bvls19d%2FA7e0OsFHYio4%2FOFjIo2ja%2BWgS2DKBfPm1hJ%2FJHf8dApRzYW5eVd8cQko26MNjaCtN%2BeptuI%2FewCQQLuEmhLqDlm8tNMf26nLX5GEK9UfZrGTLjyvsxrANFlIsxe4I7kdSzMgwA7VSVvtjCndWDF212mW4dje0YOEAkj4x1ztsfYfen9h3R3RaoIBSVcQ5dFs%2BQvzLOnfJoNFKy7%2FMJRTtnMVxJa3Am6JGgC5K6u%2BK8O4sJNNy4b1%2BVieDUDXA9nN5u4177q%2FecX32%2Fz5yiR3HB4D5yGi9wKNHYjwOeXTcMQpYucCk2W2HKZrEfvH%2BQzrupSogA1x9fhPX3NNbwEYj7ljYOXfk70x9jtkhnZ5ycSZB6OWq4QP41oOYujf%2Fdy0yoob2KJKC7W6B83z%2FppaxYLMa9RlGlyAzg5RVknf2UrpJmo3W%2BuhtbplJMfLaM6zuOHI%2FMNMO3t2ckGOqUBV5sG29X2LtL4q9k9WrifamEPqma%2FjbLmciEL57TBxaxJqm%2FIlaqUluzam%2BPeYTE3f%2F%2FVEAB25WYmr4%2FHRENpCsVW0Mr%2Bq4Nj0euCQ%2FCDS0nohwfSThyqTfrejE%2BkEaR077k6wTA4ELH37NkJ%2Bf9u4ESDuapkaetcmpUJDjuVwmgc6c8OaevEbi0AgsFqUMVCfNXAM5VyzeXdRfmFdNK0%2FvbmDodg&X-Amz-Signature=2f1795803e50854fa4c3367735bf71570fdcefc60bf93a854b0af7de86fc78c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
