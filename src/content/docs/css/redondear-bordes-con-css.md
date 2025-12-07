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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNX6PYEY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHNa%2FLWYFalhzuXK6SG7PwlnuoSrbNh04g0EAm6pjVzAIgfbR7EHaMKu5ucfe7JpU5HJXvCiiQVNB2Z5hZ5itfpbwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgqEHlMliKeC1sOZCrcAyrT6o9s7lReMRjh2A6bERrMntia9Fy6M6NQuh9J%2BBLVAzPjMiqW6VwWCU9Yu1ksF84mC46vq0dJnnO59d90egKUxK12iOay8S4gw8TVNwf7ydPDKzwkw8n6TUc6dKLIgxuitkt1YLq1rO1b8xVv4hSnaBvH3KapLiRum2OvYQHtQeTXf8VfID5DRsl8bsjn%2BwqF1C2XzED4tIV%2FpzvaQdY4fqUFnQeqL4MIrMJJQ%2Bq11KEYYBze1q4bXNTQs0%2Fado1KMvLhU1957pIj5KH4CASxZd36t%2BfTUhXn4uyu0h6SwzxliviVK9RP7ReRGm6KQGiUa%2Bo5Es6QUPndPcP%2FuvoTH2OdYQwq0ZbXTPXIrlMx7dUahwtdUGICZkruwDIrKkRcKTZisyDiARD1j2XpOOMYKjlmtjHyT0yjh6ga2L6WHy0o3bFw12mlaTS%2FpvvE%2FHNvnikDvB164hNYF0jw%2FfCO2aSTD%2B6ZdXGA1%2F%2FIXy4fXeNlRVRTJ89vxVHZG097oL%2FuH3owZFG4nKyVYy4k9JeemhPbeYfrqIYdMMN4MOFmnjWEhnA6tw8n1npPvV8p%2FzKFwZGKYphcZKDHpiDKC8XylBCxhTdrgLa05IdFOSbICjrZM56FvBpTQdsmMJD90skGOqUBcb8SRi9dEPZDGkohlBdZgy7HUi0FoUgkS4aInpPulDbbyThBB1vBZaxBWADGmcH8SuA%2FaLuO1BPXRXQlv7Wny9BVkmnynSaLW5Z5HMT2lIKKhXxZya9tmmD96lMAZx2rIBuWxkR6rvvs4WEwcxSp2%2BNpTLZQSGYvd39z1cOICzm2vLK7VARMpDJ842%2FZIhPiRTokVPUSefDm6X3fCiXz%2B47%2B%2FtVA&X-Amz-Signature=abc24e0c17bb710e015bbed968b95ebdc0c414ef48890d4246045e0ad6820218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNX6PYEY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHNa%2FLWYFalhzuXK6SG7PwlnuoSrbNh04g0EAm6pjVzAIgfbR7EHaMKu5ucfe7JpU5HJXvCiiQVNB2Z5hZ5itfpbwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDgqEHlMliKeC1sOZCrcAyrT6o9s7lReMRjh2A6bERrMntia9Fy6M6NQuh9J%2BBLVAzPjMiqW6VwWCU9Yu1ksF84mC46vq0dJnnO59d90egKUxK12iOay8S4gw8TVNwf7ydPDKzwkw8n6TUc6dKLIgxuitkt1YLq1rO1b8xVv4hSnaBvH3KapLiRum2OvYQHtQeTXf8VfID5DRsl8bsjn%2BwqF1C2XzED4tIV%2FpzvaQdY4fqUFnQeqL4MIrMJJQ%2Bq11KEYYBze1q4bXNTQs0%2Fado1KMvLhU1957pIj5KH4CASxZd36t%2BfTUhXn4uyu0h6SwzxliviVK9RP7ReRGm6KQGiUa%2Bo5Es6QUPndPcP%2FuvoTH2OdYQwq0ZbXTPXIrlMx7dUahwtdUGICZkruwDIrKkRcKTZisyDiARD1j2XpOOMYKjlmtjHyT0yjh6ga2L6WHy0o3bFw12mlaTS%2FpvvE%2FHNvnikDvB164hNYF0jw%2FfCO2aSTD%2B6ZdXGA1%2F%2FIXy4fXeNlRVRTJ89vxVHZG097oL%2FuH3owZFG4nKyVYy4k9JeemhPbeYfrqIYdMMN4MOFmnjWEhnA6tw8n1npPvV8p%2FzKFwZGKYphcZKDHpiDKC8XylBCxhTdrgLa05IdFOSbICjrZM56FvBpTQdsmMJD90skGOqUBcb8SRi9dEPZDGkohlBdZgy7HUi0FoUgkS4aInpPulDbbyThBB1vBZaxBWADGmcH8SuA%2FaLuO1BPXRXQlv7Wny9BVkmnynSaLW5Z5HMT2lIKKhXxZya9tmmD96lMAZx2rIBuWxkR6rvvs4WEwcxSp2%2BNpTLZQSGYvd39z1cOICzm2vLK7VARMpDJ842%2FZIhPiRTokVPUSefDm6X3fCiXz%2B47%2B%2FtVA&X-Amz-Signature=1df4273a3218bd73c48f98cb5d9633b33b39aa1f3b0a1cbb43f7f198121134ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
