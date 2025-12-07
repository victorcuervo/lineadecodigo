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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5Y77QF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtxB0Ad0pdMnZrFzuBy0B9VRsildOXi5ez6Nwg7dmMkQIhANCk3QHF8sJ%2FCaRhwtIBw0Z9JEewOO1pyCJEE0Q9XDvjKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBeQkXxtoyl3%2BMZPAq3AP4UjUZlbTbGYqYMebqB1GVXbIE0dYnNzI8nPMz%2BqolevGhqQDgoBbj2%2FCCVAPRnrBjh%2BttUtp58yRM0EJ%2BM3m5OIuyORlckVki3lI5%2FDsbkVQFauYM5KdAzKDTOXW70yljlIXwHDrtaQkrEnCZ0V2qyHY52XSqGu5etjc1o6kHKq4GR5qMCWR2QIbnHiem9hyAyIgcR41nAUcW0pgM7X%2BS%2BmBLTlzHIyjYqxiqcmzlUou13Whx4%2Bm418i8R2JQeYPoXiUvrvumJ5vAd2xY7Rnyms8221KgUp%2ByR7Z0ULCDzjqYTZiZrglP6giz%2BzbGGUlmss9wdlKJNTvAAgxTWXpO364r2khzc5jwjf2XCbsUtBFnD%2B%2FUnEixaWIk6hWM3ETzdcxn9RwiytyoH%2BupHHSBsS03vxcIXKJMmIRObuarwx7eOFA0OPCANX6Xv9OmfMo3mzeX61ckVmtMYbuiFm5dZzauXa7DBYv%2BuGUD9clryNQd%2Ff%2BJe2Dvyn5PxrfvE7AvO4irceIFeQdSv2JgVksJIRkKm3IdHIFY8%2BpsQxleC3EySAI25S743oqbiyo21yVg%2BoRZa5SqKaKmRH4GcIqqhkMGybcH9kZo2qcRZk%2BxCVm9n7Gy23PMlKb2LTCaodjJBjqkAaf0IA9rDiil53zcbVHZyoEE4ChjLArlHHij6C8E%2FaTKMO8WjBd1gveHhsyvx0d%2Fl55RMQSGPeEgqPwriF7e7AnJ1uOliGVxWarwEDBFuwM8KnZaf2Gl3ALCEeKZTkKDMRvpURqGL6VmZ4%2FAg609f4smApQPdrKo%2Be%2FLwzOsmmO%2B7%2F8eP0TzVkwWwUIiJtHIB7IZF6BSJrIkRvWHButyYjT13%2FNf&X-Amz-Signature=a3567bbe5a37c74592a332792a810420586c6c8ec6088533fef8e299d187cab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH5Y77QF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtxB0Ad0pdMnZrFzuBy0B9VRsildOXi5ez6Nwg7dmMkQIhANCk3QHF8sJ%2FCaRhwtIBw0Z9JEewOO1pyCJEE0Q9XDvjKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBeQkXxtoyl3%2BMZPAq3AP4UjUZlbTbGYqYMebqB1GVXbIE0dYnNzI8nPMz%2BqolevGhqQDgoBbj2%2FCCVAPRnrBjh%2BttUtp58yRM0EJ%2BM3m5OIuyORlckVki3lI5%2FDsbkVQFauYM5KdAzKDTOXW70yljlIXwHDrtaQkrEnCZ0V2qyHY52XSqGu5etjc1o6kHKq4GR5qMCWR2QIbnHiem9hyAyIgcR41nAUcW0pgM7X%2BS%2BmBLTlzHIyjYqxiqcmzlUou13Whx4%2Bm418i8R2JQeYPoXiUvrvumJ5vAd2xY7Rnyms8221KgUp%2ByR7Z0ULCDzjqYTZiZrglP6giz%2BzbGGUlmss9wdlKJNTvAAgxTWXpO364r2khzc5jwjf2XCbsUtBFnD%2B%2FUnEixaWIk6hWM3ETzdcxn9RwiytyoH%2BupHHSBsS03vxcIXKJMmIRObuarwx7eOFA0OPCANX6Xv9OmfMo3mzeX61ckVmtMYbuiFm5dZzauXa7DBYv%2BuGUD9clryNQd%2Ff%2BJe2Dvyn5PxrfvE7AvO4irceIFeQdSv2JgVksJIRkKm3IdHIFY8%2BpsQxleC3EySAI25S743oqbiyo21yVg%2BoRZa5SqKaKmRH4GcIqqhkMGybcH9kZo2qcRZk%2BxCVm9n7Gy23PMlKb2LTCaodjJBjqkAaf0IA9rDiil53zcbVHZyoEE4ChjLArlHHij6C8E%2FaTKMO8WjBd1gveHhsyvx0d%2Fl55RMQSGPeEgqPwriF7e7AnJ1uOliGVxWarwEDBFuwM8KnZaf2Gl3ALCEeKZTkKDMRvpURqGL6VmZ4%2FAg609f4smApQPdrKo%2Be%2FLwzOsmmO%2B7%2F8eP0TzVkwWwUIiJtHIB7IZF6BSJrIkRvWHButyYjT13%2FNf&X-Amz-Signature=da7959a97ab9da55e2b29b09b747fae23f752eafe4a1a7e32d4962b8da16b9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
