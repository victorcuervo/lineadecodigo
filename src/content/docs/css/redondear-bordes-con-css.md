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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXPRNIN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyVuPvmskLjqJVyBf9Sgp0g1Mfi6cPXHaeYQZP0AXNoQIgDDVu3v1AXcHy66UgveZRlb5ohnhf8PjKe3gqbTeBNFYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrXqVzQUk1%2F6UdexSrcA3GqPFhqgKKfSALuqjnOug9C5G7VktQ56%2FnjMy%2Be5%2FE%2FjxmHUbqL2ts6j2AjemrOFu%2FM%2BwVjUy%2FcVyom5RcRg0DZSaFPpmaYIP1Uwe2lgM7cekmowYqERco7ie97USwCIm%2BoyIgDt%2Bbvd8%2FP1TgyQ0mY7spSrG7byYZBoSvolHZsm0uLd55RXrp4bGxOTVvfnB9DgXBVvIjqkF33F9OrVSbDAAE%2BydN%2FqxGa2LTgZRJJqC6p%2BSXIGTQh6eMQloeQCyAhoDMoL7SO3wESGtW4YX030FrbKysqQvrMgMDSYGCuutVT3ijHPa67qh9%2B0iVPm6YZEaQmyP9vvQIY6R%2B6ijnj5M5N1OWExGklfAKMYBHEJ3FPzCUVbbGz2NbYiSFdynZDp8Yqq0b10LasF2yzMLCwiAIPLSpX1e00CoKgQ%2F687cT0BT0WHiZ9GqIblFhvLjsXBq4qwxIIilln%2B3WyLjWagpA2s4SMjBNZ1GGkplqjlGQjBzx34D7wwjZ2EM5zKJame7Pw9N8WOwqM70x3Y3XL6rOaSFZmEiJ%2BUnc5GvDOVzGviwOnqrZr%2F6X4%2FQ5qoT1kLsfE13c85CdRGzWqC9lKrUgeptpASKhJ4Ggp9o5f0TuzlG8%2BrqaLESIFMLH%2B0skGOqUBNsnwA56XemIzkUDJY6d706eWvK4Gb09CymoMenlOPyDCwe79u8SHNCuVJOv3uDLRQyNC%2FfQFpSqMlfXxGEB3zCHbbi3YXUmyB9ie42ZYB2FUKdXPJu4%2B9CeSkHOuY1NGD061piJb8f4cGnqVfnx5C7cyRFVbVPK2Oqd%2Fryb2DJKW7flxxWO30ehMgi%2B%2B8lD%2BI%2FIRD99Tf0DvIVN%2FaAn2RSS4P1Fo&X-Amz-Signature=741d5ba509345e58e5fc56b70b78c64cc0b895bd39fcbc550eeee37d1a37a664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQXPRNIN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyVuPvmskLjqJVyBf9Sgp0g1Mfi6cPXHaeYQZP0AXNoQIgDDVu3v1AXcHy66UgveZRlb5ohnhf8PjKe3gqbTeBNFYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrXqVzQUk1%2F6UdexSrcA3GqPFhqgKKfSALuqjnOug9C5G7VktQ56%2FnjMy%2Be5%2FE%2FjxmHUbqL2ts6j2AjemrOFu%2FM%2BwVjUy%2FcVyom5RcRg0DZSaFPpmaYIP1Uwe2lgM7cekmowYqERco7ie97USwCIm%2BoyIgDt%2Bbvd8%2FP1TgyQ0mY7spSrG7byYZBoSvolHZsm0uLd55RXrp4bGxOTVvfnB9DgXBVvIjqkF33F9OrVSbDAAE%2BydN%2FqxGa2LTgZRJJqC6p%2BSXIGTQh6eMQloeQCyAhoDMoL7SO3wESGtW4YX030FrbKysqQvrMgMDSYGCuutVT3ijHPa67qh9%2B0iVPm6YZEaQmyP9vvQIY6R%2B6ijnj5M5N1OWExGklfAKMYBHEJ3FPzCUVbbGz2NbYiSFdynZDp8Yqq0b10LasF2yzMLCwiAIPLSpX1e00CoKgQ%2F687cT0BT0WHiZ9GqIblFhvLjsXBq4qwxIIilln%2B3WyLjWagpA2s4SMjBNZ1GGkplqjlGQjBzx34D7wwjZ2EM5zKJame7Pw9N8WOwqM70x3Y3XL6rOaSFZmEiJ%2BUnc5GvDOVzGviwOnqrZr%2F6X4%2FQ5qoT1kLsfE13c85CdRGzWqC9lKrUgeptpASKhJ4Ggp9o5f0TuzlG8%2BrqaLESIFMLH%2B0skGOqUBNsnwA56XemIzkUDJY6d706eWvK4Gb09CymoMenlOPyDCwe79u8SHNCuVJOv3uDLRQyNC%2FfQFpSqMlfXxGEB3zCHbbi3YXUmyB9ie42ZYB2FUKdXPJu4%2B9CeSkHOuY1NGD061piJb8f4cGnqVfnx5C7cyRFVbVPK2Oqd%2Fryb2DJKW7flxxWO30ehMgi%2B%2B8lD%2BI%2FIRD99Tf0DvIVN%2FaAn2RSS4P1Fo&X-Amz-Signature=e97a09859cd8a2f8a36c31e156fb7be55b8904ad12a5abfff2de04ce73025d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
