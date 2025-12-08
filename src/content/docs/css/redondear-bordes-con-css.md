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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELKEBSP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqSCZLTQIpWmZ8eW5ZKsRewE23CxSG%2BPsmlbK2HnpqTAiEAmfxy9jSI%2FJBXAocflUpgv7vC9dQAfaiTqO5mxf%2BnCp8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQl%2FuQtJxqvaNKBJCrcA7Bag%2BkXNC84NOb0LoFCNHSjBDTVH%2BfIAIGB9YoHuYWeZrc5SJblX56KsCNVew0lXOdj8kkoHqpveeIuz6gTUWKwqFo3VwH%2BhtQRvfzgowo0%2B6I25LTYLEaqu49jBpTuFfRps%2FPi2hgCqsAkqX5N3qjIxPtG5t6rUObXpdg9jJXflMWp8oN0voZNpsFdpzUNqYog2o8G0TcD9BJXCMJMKW%2BbhrKN2Iy7an7ibRGlQ7rA2VeQ%2FsS4lzHWaxIz8Gp%2BmdfosISJyamvZ%2B8rdnPmu9ADIpVyu46PuA3VIBE40jbAglf0iZnqiMYAqcl8I2iy3K4vho1ip2RFmUoZ9dgmNn%2By5wnJKyO9OqkQeX2LyCdKvWtTnNQ%2BkbAbdUmWwWaGGWq7kcTPRWE5U28nZyMUQJFphG3jxmp%2B0TaB5XEOb3e7ly%2B2eSpzNUUeVE7LQJMU9pdyz5nTApBdMSByz7kw9NrwyP5mkxQpjkvkBqM1R38UGbQWx706a2bpmnXbKITDBhBddSrPzD9FpN06wLYE4YqCI3mZeHzr96tB89iifDMf90sha6pxi3e0ovWgzDaKDBKV9D7eUHn6qX7Vz14c4XmXR66hEEP03yERuw1EiwsBg%2Bxfv%2FtYASSfPdzWMK%2FQ2ckGOqUBRAgnHyGQmKt6aBhoUZZzPLvamjTODhw0emvHzcP1mMKVMS1zMw8UCC2E%2Be5U8qwG4DXgZakDoKUK%2FT8JAPZl2rSwRseuKWBHs08c4alNHuAa2QVZ3JuD6XQIvjCQqNb6CV9r2gNnq50Qp1VRm1WX3BgYsAJXqnehHaYR7Ui04jxMr%2BiniIehbVcOjIAgAN8Vy1KeKQo5MEbLhVRjoGcvhpepvs0Z&X-Amz-Signature=e5457ab744aab0b2a290735e57138c4e243b2d5a7f1bfa21d6a0c4ccf5dbe5ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELKEBSP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqSCZLTQIpWmZ8eW5ZKsRewE23CxSG%2BPsmlbK2HnpqTAiEAmfxy9jSI%2FJBXAocflUpgv7vC9dQAfaiTqO5mxf%2BnCp8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQl%2FuQtJxqvaNKBJCrcA7Bag%2BkXNC84NOb0LoFCNHSjBDTVH%2BfIAIGB9YoHuYWeZrc5SJblX56KsCNVew0lXOdj8kkoHqpveeIuz6gTUWKwqFo3VwH%2BhtQRvfzgowo0%2B6I25LTYLEaqu49jBpTuFfRps%2FPi2hgCqsAkqX5N3qjIxPtG5t6rUObXpdg9jJXflMWp8oN0voZNpsFdpzUNqYog2o8G0TcD9BJXCMJMKW%2BbhrKN2Iy7an7ibRGlQ7rA2VeQ%2FsS4lzHWaxIz8Gp%2BmdfosISJyamvZ%2B8rdnPmu9ADIpVyu46PuA3VIBE40jbAglf0iZnqiMYAqcl8I2iy3K4vho1ip2RFmUoZ9dgmNn%2By5wnJKyO9OqkQeX2LyCdKvWtTnNQ%2BkbAbdUmWwWaGGWq7kcTPRWE5U28nZyMUQJFphG3jxmp%2B0TaB5XEOb3e7ly%2B2eSpzNUUeVE7LQJMU9pdyz5nTApBdMSByz7kw9NrwyP5mkxQpjkvkBqM1R38UGbQWx706a2bpmnXbKITDBhBddSrPzD9FpN06wLYE4YqCI3mZeHzr96tB89iifDMf90sha6pxi3e0ovWgzDaKDBKV9D7eUHn6qX7Vz14c4XmXR66hEEP03yERuw1EiwsBg%2Bxfv%2FtYASSfPdzWMK%2FQ2ckGOqUBRAgnHyGQmKt6aBhoUZZzPLvamjTODhw0emvHzcP1mMKVMS1zMw8UCC2E%2Be5U8qwG4DXgZakDoKUK%2FT8JAPZl2rSwRseuKWBHs08c4alNHuAa2QVZ3JuD6XQIvjCQqNb6CV9r2gNnq50Qp1VRm1WX3BgYsAJXqnehHaYR7Ui04jxMr%2BiniIehbVcOjIAgAN8Vy1KeKQo5MEbLhVRjoGcvhpepvs0Z&X-Amz-Signature=68838eabf2e0a02fb04e811bbd6ab7eec0d62ba3a15de399f70431b748c39e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
