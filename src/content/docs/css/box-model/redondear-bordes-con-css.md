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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF62TQZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdxjgAdLDOgoa%2FdWIpwW4fuWqesXSFwc9oBPUUGYK0YAiB90N19yAZe2XjxUoL0d5ofRO4cAplNpva%2BtnxkqzT%2FAir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMcFcfmQVD%2Fko4GXqqKtwDjM4z6bFvaH4VoUAUXSbQZY3Qt3PvLGSsWG4qzxm61%2B4Zw3Tgi69YRjo0Gc7%2BvVkAG9i1hnvOPbd1giSkMJgqzrcrR8jruiNE9QkEhe691fwBLlTHP4CS3VWtHGHyhyUbcYdWMfY%2FTJgf42D1FfA5TdqO%2BGrGbuwvNUXAokzjBkyZvtNZ7XcsqpXhlbMG2R61uefY52vP8JtZ4L39ijXN%2BNaFczzsn8je2oHVg0NyfFYigonjs7%2Fy3jyZyQwYkNNM8XBPF4Q4GqP%2BuODC9UDg0IbB0LFhgZp5MHxfMUIjwZUUFegOJR5Wf1RqUhmj8lth3vu5BjiyC%2FaS0W2H9xacOw41KA%2FKNLw1m37FmSkn5UFF93FyddvYWOHP9yJZl9%2B83n0oA8DYSycpnUZC%2FNjLI8L9BEvKO1W7SM7Y3HUFqK39WcaxsJj7ADz%2BkyVlJp3vJ95q5Ay1vZN%2B75Gjz7RUqxhaWz0DaKbEX8qnRf2DMtM5oh4OOE5J%2BpVv7o2xB5d4VKR2oIIWUtFkCIbjLmSRAAJG2FjrNQult53BdEkKT537WPCoVdND7YGC0iiaujFCtBfcAn0g7uPXGnLQQcNQ5fL5iqJtCWsjSxmWHMetd7A%2BkiYE%2FQdezxF8taowu52JygY6pgHdV9HmCSRubJu0nhPTr7dG6lWhhFSjwfHD6K4T%2BEtvjy%2Br1a3n8a8rqoSnk%2FIVr5tTt2g6ygttpk15rEEigTalI8TLStZoTN%2BsNSM1xBe4KBc6QAItevqGndfHQe4BRHfz5bhTKgKcKjr8Kd7z6rM6TvR7RW7HhXFp2g44hcN0IJa1YNTaxS5hUMVooPkV2YD%2FucUCpE7NkOrpO%2FfUK9kphvzEsTGr&X-Amz-Signature=54e839045192836bb240901a9b9b5ed2af9ea0794b23d88435c341121f33d04e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF62TQZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdxjgAdLDOgoa%2FdWIpwW4fuWqesXSFwc9oBPUUGYK0YAiB90N19yAZe2XjxUoL0d5ofRO4cAplNpva%2BtnxkqzT%2FAir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMcFcfmQVD%2Fko4GXqqKtwDjM4z6bFvaH4VoUAUXSbQZY3Qt3PvLGSsWG4qzxm61%2B4Zw3Tgi69YRjo0Gc7%2BvVkAG9i1hnvOPbd1giSkMJgqzrcrR8jruiNE9QkEhe691fwBLlTHP4CS3VWtHGHyhyUbcYdWMfY%2FTJgf42D1FfA5TdqO%2BGrGbuwvNUXAokzjBkyZvtNZ7XcsqpXhlbMG2R61uefY52vP8JtZ4L39ijXN%2BNaFczzsn8je2oHVg0NyfFYigonjs7%2Fy3jyZyQwYkNNM8XBPF4Q4GqP%2BuODC9UDg0IbB0LFhgZp5MHxfMUIjwZUUFegOJR5Wf1RqUhmj8lth3vu5BjiyC%2FaS0W2H9xacOw41KA%2FKNLw1m37FmSkn5UFF93FyddvYWOHP9yJZl9%2B83n0oA8DYSycpnUZC%2FNjLI8L9BEvKO1W7SM7Y3HUFqK39WcaxsJj7ADz%2BkyVlJp3vJ95q5Ay1vZN%2B75Gjz7RUqxhaWz0DaKbEX8qnRf2DMtM5oh4OOE5J%2BpVv7o2xB5d4VKR2oIIWUtFkCIbjLmSRAAJG2FjrNQult53BdEkKT537WPCoVdND7YGC0iiaujFCtBfcAn0g7uPXGnLQQcNQ5fL5iqJtCWsjSxmWHMetd7A%2BkiYE%2FQdezxF8taowu52JygY6pgHdV9HmCSRubJu0nhPTr7dG6lWhhFSjwfHD6K4T%2BEtvjy%2Br1a3n8a8rqoSnk%2FIVr5tTt2g6ygttpk15rEEigTalI8TLStZoTN%2BsNSM1xBe4KBc6QAItevqGndfHQe4BRHfz5bhTKgKcKjr8Kd7z6rM6TvR7RW7HhXFp2g44hcN0IJa1YNTaxS5hUMVooPkV2YD%2FucUCpE7NkOrpO%2FfUK9kphvzEsTGr&X-Amz-Signature=035cf263ea483b8af8b55953fbd8f5f9c1bc961548085a82f14c10d703902317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
