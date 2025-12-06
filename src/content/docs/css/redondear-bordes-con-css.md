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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4HVC3A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSVbjL0pIFYgFGkSVi5rTJqJ2XS7q%2BXJiWuAtr9upHaAiEA9XdB7bb1yG5UvsC5Pt9HglMz%2FwYusMlQwHxsAo4ySlgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAeZGKTgMKtzlGNs4yrcA0vt2YkNO7QALNvP5QtlOrxH9vB2yubbPosAMNAQbFbk9ios24WGSMHPn8Tho82M0U%2Bv8mYL2FzvBacycQBylVZ4bVMpsqjNt6fxuDeisxbfcZq6OWrN9iS%2BrVlmme5nA1Z2pT9RkSWw8j8%2BayorWH%2Blre1cqt4GlpA2K0CTazvs74%2BEheguDMt5jax6j4BpPb2tasZVz8FttyisrvFvyqZCjPW%2FBkaQgHlrOaCI3uFaD7ofw2q%2B1ePaUpsvlZvRC%2FSaqTbuIp0fUF64mqktldMZl5eeqnf8TlwtAewiPGqvKuPM4kTJ2jrfpLF3MhsN0tvyqH%2FI27FAanEj3KbVIqkCGrAV4EwujtrNJ7DJgXtiyspQFMKUA3m%2FjDYZ0MLcGIJB5WwXhuDT6KX2HKAMzfwOHjXqfUoiRwNdQMbIcoVO77o%2Fb9PYWadxOzovXI86YKKSoSPfsHF4g1u4K%2B39T4ab2GSYTgCp0BDpc3swi19sd9QaHwg%2FJvzTky8DBz71ECXoOkI0BwzwffqHDGHn2mkvkSr%2B%2FmmyqiRt0dtwMhXq3AUS8CBNY%2FFtgr1heGWoI4hx82%2FObw3jqEGwuHlsBlL8w9FSC8lfyPXNax0WViQ%2BFC%2Fk%2Fhd%2BZe6G%2BLHVML28z8kGOqUBTje0tpOAfZ%2BDwZMgA9Q%2Bcn%2BJMQkh%2Fj7koOyZndPRefmJJvhfLf%2F8doA7bi2Vv7A9%2BZmDMQQKMhxVEbeajcQK6NBJFQ4bkilIVRHVDkpqA%2BeIGn%2BQe6bQpsa7rHMSJO20l4%2B%2B%2FKETXeCshbtb5dxwxuUEyyx0LBwUCuGgyKA13QoTw59YBOAdd%2BBIlZHVJLKIfaxUZoVr6Wchqg4geLgkFFg%2BMFcu&X-Amz-Signature=0b7b41a523cc9a47d97a730d09bea966e7e5cabbb9699bd4349bd9793d483ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4HVC3A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHSVbjL0pIFYgFGkSVi5rTJqJ2XS7q%2BXJiWuAtr9upHaAiEA9XdB7bb1yG5UvsC5Pt9HglMz%2FwYusMlQwHxsAo4ySlgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAeZGKTgMKtzlGNs4yrcA0vt2YkNO7QALNvP5QtlOrxH9vB2yubbPosAMNAQbFbk9ios24WGSMHPn8Tho82M0U%2Bv8mYL2FzvBacycQBylVZ4bVMpsqjNt6fxuDeisxbfcZq6OWrN9iS%2BrVlmme5nA1Z2pT9RkSWw8j8%2BayorWH%2Blre1cqt4GlpA2K0CTazvs74%2BEheguDMt5jax6j4BpPb2tasZVz8FttyisrvFvyqZCjPW%2FBkaQgHlrOaCI3uFaD7ofw2q%2B1ePaUpsvlZvRC%2FSaqTbuIp0fUF64mqktldMZl5eeqnf8TlwtAewiPGqvKuPM4kTJ2jrfpLF3MhsN0tvyqH%2FI27FAanEj3KbVIqkCGrAV4EwujtrNJ7DJgXtiyspQFMKUA3m%2FjDYZ0MLcGIJB5WwXhuDT6KX2HKAMzfwOHjXqfUoiRwNdQMbIcoVO77o%2Fb9PYWadxOzovXI86YKKSoSPfsHF4g1u4K%2B39T4ab2GSYTgCp0BDpc3swi19sd9QaHwg%2FJvzTky8DBz71ECXoOkI0BwzwffqHDGHn2mkvkSr%2B%2FmmyqiRt0dtwMhXq3AUS8CBNY%2FFtgr1heGWoI4hx82%2FObw3jqEGwuHlsBlL8w9FSC8lfyPXNax0WViQ%2BFC%2Fk%2Fhd%2BZe6G%2BLHVML28z8kGOqUBTje0tpOAfZ%2BDwZMgA9Q%2Bcn%2BJMQkh%2Fj7koOyZndPRefmJJvhfLf%2F8doA7bi2Vv7A9%2BZmDMQQKMhxVEbeajcQK6NBJFQ4bkilIVRHVDkpqA%2BeIGn%2BQe6bQpsa7rHMSJO20l4%2B%2B%2FKETXeCshbtb5dxwxuUEyyx0LBwUCuGgyKA13QoTw59YBOAdd%2BBIlZHVJLKIfaxUZoVr6Wchqg4geLgkFFg%2BMFcu&X-Amz-Signature=c206617428bf0fd954ee42e148e0cfa4dcd55adc6fd8e8a0e969be2a7508ec24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
