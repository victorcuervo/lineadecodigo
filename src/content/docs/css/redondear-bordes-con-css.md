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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXNSINH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2Fo%2BySAqHeFZOOMPT12P6NSEXgrTbwq5WNdy3uUAi4oAiEA503kXyV21KNxE8QKke214oEoZKlpKuUJVcWkPSTKehQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLtBl3LD1FKgfnuwYyrcAzQTKySyx4hfSF3m7HEWCZdUnNX6Ud0mVSKuqEmtz4mvgg5QsKNeGz3SGSik%2BQge%2BDT0Rjory7iOY8xtQmQADQ7vOOKptge%2FGvjzqIOwKau%2Fn25FIinxjK0KByGXd4xzlZlPD35wdfZ9q9L3b0xU1hJRevifdMbCNa1vD8aJn7JW6rczOiNJoCnKw%2FqaktiyJZ8dNBRX%2BqmZD7fvFzHAGLvj%2F2zBwIvQliq2w%2FvSxgFelQJS6eBw4C7iwXQiKNrNv50Di2iUBPiJDOg3V1t0fNImbHIHDNZOgkMl9PymCStAXVrlGva%2BI3ftCU%2BBwI6LlbEomod0BVdaE9LCXVzmEFZSRtT5Q5H19h%2Fl05I3eq9fzLc%2B7rCqGQ8zFW3LcqE6gNIt6csRsD%2BLBxXXh6SrBtgFOnITGblwlCtOk47iPAjYwNw7u1Em0QTgL6u4AYiqLaDShQ1o7lVDO3RuPfRMS83lWvrNiIURcLJCo3ixKiuFyKVuXyWfpxZ0VcmNEXcjrQOuyjeIub9BSWARpKsktyGc9a3Pd9BF%2F2smrHgZERfXAVm2qf8zecjNJb3gKAnd2AE2rXHFgoHx025eQHbfGttN7DlOYp5HPpLNtPg6Wlvki9kGdMpiUeDe%2BXySMIT9zskGOqUBorRJsCQ30exYlNz4iwQnIWAiYX5wgdmXQx5mc4WLWSTovlbXTwAL%2F8FhPOCjzdbDqCzQ9rB1nZMvpnLLN7D4TJcmefKNTzwwaupstXaQa7J9oTLea%2BgBp9ZmEKxfbKNGOHLYa%2F4%2BKkqvhFPis80stoQ27H%2FDP354aQHUBjbnqDoycgmxOqzatnLJOah73w%2FPNgTtfPVFVddPvmffTHUxO9nnCRNo&X-Amz-Signature=08c052f086769f48f3bb23e4f491bc0958f6ffd7110ede2c84801e92d8e0b524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXNSINH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2Fo%2BySAqHeFZOOMPT12P6NSEXgrTbwq5WNdy3uUAi4oAiEA503kXyV21KNxE8QKke214oEoZKlpKuUJVcWkPSTKehQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLtBl3LD1FKgfnuwYyrcAzQTKySyx4hfSF3m7HEWCZdUnNX6Ud0mVSKuqEmtz4mvgg5QsKNeGz3SGSik%2BQge%2BDT0Rjory7iOY8xtQmQADQ7vOOKptge%2FGvjzqIOwKau%2Fn25FIinxjK0KByGXd4xzlZlPD35wdfZ9q9L3b0xU1hJRevifdMbCNa1vD8aJn7JW6rczOiNJoCnKw%2FqaktiyJZ8dNBRX%2BqmZD7fvFzHAGLvj%2F2zBwIvQliq2w%2FvSxgFelQJS6eBw4C7iwXQiKNrNv50Di2iUBPiJDOg3V1t0fNImbHIHDNZOgkMl9PymCStAXVrlGva%2BI3ftCU%2BBwI6LlbEomod0BVdaE9LCXVzmEFZSRtT5Q5H19h%2Fl05I3eq9fzLc%2B7rCqGQ8zFW3LcqE6gNIt6csRsD%2BLBxXXh6SrBtgFOnITGblwlCtOk47iPAjYwNw7u1Em0QTgL6u4AYiqLaDShQ1o7lVDO3RuPfRMS83lWvrNiIURcLJCo3ixKiuFyKVuXyWfpxZ0VcmNEXcjrQOuyjeIub9BSWARpKsktyGc9a3Pd9BF%2F2smrHgZERfXAVm2qf8zecjNJb3gKAnd2AE2rXHFgoHx025eQHbfGttN7DlOYp5HPpLNtPg6Wlvki9kGdMpiUeDe%2BXySMIT9zskGOqUBorRJsCQ30exYlNz4iwQnIWAiYX5wgdmXQx5mc4WLWSTovlbXTwAL%2F8FhPOCjzdbDqCzQ9rB1nZMvpnLLN7D4TJcmefKNTzwwaupstXaQa7J9oTLea%2BgBp9ZmEKxfbKNGOHLYa%2F4%2BKkqvhFPis80stoQ27H%2FDP354aQHUBjbnqDoycgmxOqzatnLJOah73w%2FPNgTtfPVFVddPvmffTHUxO9nnCRNo&X-Amz-Signature=6431d6ae38fbcdf33e3cadeee5aca88c6cc54bf9e079e658271e9ce3b8661205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
