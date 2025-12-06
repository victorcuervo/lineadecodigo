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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKS45NVN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZjmDpmryV%2F8csjz6%2FsrHTuB8LIAFqUI%2FyJuZJpXpOXAIhANDSiGDzU05yqzFPNxCVxyAashJMqPz4ensA7cZJ7i2DKv8DCHoQABoMNjM3NDIzMTgzODA1Igw16d5n4i8c9ttt5P4q3AO335x%2BkBFAhAHEwp%2ByqKTCfDqIY2rULgQBByHXAM5EDAtpHwWEnAiu%2BysTiQ66Jn9Ax0v8ZE%2BpMkO%2BxRzkNlE7yUiLR%2F5I0gu1QeD4MAsClL3e7xzm5dTsBAl7IvhK5MXEYbfuN6imUDkEozSc1d6Z2CLB3dpg%2FABLQrlOYaQ6k733%2BfiaYSnzTK%2Bzl0uS%2B0Ua5Zu%2BV30i%2Fff9NT7lMygLDirQ4XTd%2BNewAt1gfUtXv3GA1j3uuMz19tCmHgEN4NUqqDivw9WW8jWIMkCxAlGFzWsLbdaIcgSLmbcwGAMA89FiGQYGkw1j2YMFphEkXvE7JL4CvQXfSv3gRj5RNIpMaZRAnBtyiMCJpMw0dQLOZQ5pfTkeT16v0UQGlb8FCpgps%2BCDTEhOPFbmStZQz2r2HFUqnJhBp%2FTbZo2gUd1E13MZrj4CIoLjTwd90OAFkLvojzplZg7FcpT0cRLlk0v8LVNDbcx9IJxl%2BBTnF1sroMemIsG6CfBiWTigLsDoS3pNrjytLYdyj7za2pi8FJ3A5ov8okwjwJiDPUosdP9MglbbBcra0qGryVt9yaIpKz0lsRX99E2epXmh9hCn3kxO24EDqaWxyHlwoAOa51KIXkhZAztGCBfInb4qdzCTy9HJBjqkAfBxNYwCwFZk5gB%2F6qGSFep0RKL9Wk%2BvprCCOFs5%2B23zGEE65QMUATKRuPjVjqu39QN06%2BBHlfIheydMyEwOsj%2BFVaHp2Z%2F0V8IwxM49r%2BdL8Pd7ti5qEi7UrA5qZOziXAV8pLQ%2B5OxgfZ6kPLIobAEfYOoDJR2HM6HYJ3IcUS8sQXWzwALf1FHDShsxAdzFL3ONTkV8mFz9aqB2aA0D7RKvtwHE&X-Amz-Signature=628299d9cb5b505ea5358cb0915b55be40e870ef893659733e93c6d518c2537e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKS45NVN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T173037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZjmDpmryV%2F8csjz6%2FsrHTuB8LIAFqUI%2FyJuZJpXpOXAIhANDSiGDzU05yqzFPNxCVxyAashJMqPz4ensA7cZJ7i2DKv8DCHoQABoMNjM3NDIzMTgzODA1Igw16d5n4i8c9ttt5P4q3AO335x%2BkBFAhAHEwp%2ByqKTCfDqIY2rULgQBByHXAM5EDAtpHwWEnAiu%2BysTiQ66Jn9Ax0v8ZE%2BpMkO%2BxRzkNlE7yUiLR%2F5I0gu1QeD4MAsClL3e7xzm5dTsBAl7IvhK5MXEYbfuN6imUDkEozSc1d6Z2CLB3dpg%2FABLQrlOYaQ6k733%2BfiaYSnzTK%2Bzl0uS%2B0Ua5Zu%2BV30i%2Fff9NT7lMygLDirQ4XTd%2BNewAt1gfUtXv3GA1j3uuMz19tCmHgEN4NUqqDivw9WW8jWIMkCxAlGFzWsLbdaIcgSLmbcwGAMA89FiGQYGkw1j2YMFphEkXvE7JL4CvQXfSv3gRj5RNIpMaZRAnBtyiMCJpMw0dQLOZQ5pfTkeT16v0UQGlb8FCpgps%2BCDTEhOPFbmStZQz2r2HFUqnJhBp%2FTbZo2gUd1E13MZrj4CIoLjTwd90OAFkLvojzplZg7FcpT0cRLlk0v8LVNDbcx9IJxl%2BBTnF1sroMemIsG6CfBiWTigLsDoS3pNrjytLYdyj7za2pi8FJ3A5ov8okwjwJiDPUosdP9MglbbBcra0qGryVt9yaIpKz0lsRX99E2epXmh9hCn3kxO24EDqaWxyHlwoAOa51KIXkhZAztGCBfInb4qdzCTy9HJBjqkAfBxNYwCwFZk5gB%2F6qGSFep0RKL9Wk%2BvprCCOFs5%2B23zGEE65QMUATKRuPjVjqu39QN06%2BBHlfIheydMyEwOsj%2BFVaHp2Z%2F0V8IwxM49r%2BdL8Pd7ti5qEi7UrA5qZOziXAV8pLQ%2B5OxgfZ6kPLIobAEfYOoDJR2HM6HYJ3IcUS8sQXWzwALf1FHDShsxAdzFL3ONTkV8mFz9aqB2aA0D7RKvtwHE&X-Amz-Signature=45481a49283e66fb5225013a457fc110f59c535d4bd5de527a57ac979dfa45ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
