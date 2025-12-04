---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGU7GMZD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICdwcHsyFAdhC7kYRKm8DqLyXIhrejrdE7VXQ0KkRxiPAiEAwn%2F07v5aHeYkhZHpzbccYBfo%2FyslpuObyYjjk5V%2BVawq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAR1E6OfMPpTdUBJLCrcA0egk6XtKT%2F3JAle6L%2Ff0%2FGmdCayxLGbHycjRE4ri%2FZyBP%2BKFMN5Z8hVtWaiqySEaN%2F661gZ49C9UUS2GiGtOvQtLJgFVmbdWDormrAAHnSGxq%2FOi3G5DgyczC4FgtmwJL2Vy8XORL2rO6TSuSVLWdfD06mPkUhJ4MUz%2FnnhMCVYdD1ykEGc2NVBLCrifHGHA%2FiLuu0kZNTWZH88aJdZxqg6Hq4%2FQ8DMZAUCFYLG5tI32%2BwP%2Fc%2FcwOLiAjnTs4Fxg0QOiPpVrNmMlj0jBCVC0pG4LPZpGfnJraUt39Sa20eIg5YvJcqtUKTtFUjgkfgZKthFEvRtTsKbigfLnUVVl9eD9y%2BGTq%2Bw2t4Ch0cKu3%2B7DWwJd82AirPNJNfDX8u1ZMdKCl0LZDefHqt7mEMVDA7XtNqKzS3HMz0Bg0RiXgZJST3UWy3AtwJFAhzdMyMUWMeXzYxdKRcWmLbLre4beXc4f948NyVR10s8SFF%2Fjqg1v4kJJYhvwarStcDJQB50Fr%2FP6clFce6sc9KDXxKyerSAiG5R23YkYn0v0FLPVxq5O7eYtKcMrVdeF6%2B0pm42bM1SDnmJYqQvb%2B0W5UUiHxpvE02xQxD0wz%2FddU7dDDjif%2FNla7cj35TN4Z7QMIKqxckGOqUBk%2BXgdMqLI%2Bwawl%2BkJE7PkWjed%2FSITmKSXsa0e0NOO1gR9dVQC8nRQph254G15jnRlGcdlKcx0dotYfOmSFOmKJGmOR7o%2B9c5v%2FBFQhHafgAhpR6P9D9l38jJpeuO%2Fqz6wapPBhf%2BYWBo%2FgxSQeJYxmXgjs5AEZqn8nr5R58eYuG5sFnoRtiLi%2BveU1EILcgpB0BWB%2FIIo37pPbr9FqWP8R%2FwUsEK&X-Amz-Signature=f2d845e02fc7a6caff65edad10dcd97b54feb1688b4de617e81b7fa439cecd92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGU7GMZD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICdwcHsyFAdhC7kYRKm8DqLyXIhrejrdE7VXQ0KkRxiPAiEAwn%2F07v5aHeYkhZHpzbccYBfo%2FyslpuObyYjjk5V%2BVawq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAR1E6OfMPpTdUBJLCrcA0egk6XtKT%2F3JAle6L%2Ff0%2FGmdCayxLGbHycjRE4ri%2FZyBP%2BKFMN5Z8hVtWaiqySEaN%2F661gZ49C9UUS2GiGtOvQtLJgFVmbdWDormrAAHnSGxq%2FOi3G5DgyczC4FgtmwJL2Vy8XORL2rO6TSuSVLWdfD06mPkUhJ4MUz%2FnnhMCVYdD1ykEGc2NVBLCrifHGHA%2FiLuu0kZNTWZH88aJdZxqg6Hq4%2FQ8DMZAUCFYLG5tI32%2BwP%2Fc%2FcwOLiAjnTs4Fxg0QOiPpVrNmMlj0jBCVC0pG4LPZpGfnJraUt39Sa20eIg5YvJcqtUKTtFUjgkfgZKthFEvRtTsKbigfLnUVVl9eD9y%2BGTq%2Bw2t4Ch0cKu3%2B7DWwJd82AirPNJNfDX8u1ZMdKCl0LZDefHqt7mEMVDA7XtNqKzS3HMz0Bg0RiXgZJST3UWy3AtwJFAhzdMyMUWMeXzYxdKRcWmLbLre4beXc4f948NyVR10s8SFF%2Fjqg1v4kJJYhvwarStcDJQB50Fr%2FP6clFce6sc9KDXxKyerSAiG5R23YkYn0v0FLPVxq5O7eYtKcMrVdeF6%2B0pm42bM1SDnmJYqQvb%2B0W5UUiHxpvE02xQxD0wz%2FddU7dDDjif%2FNla7cj35TN4Z7QMIKqxckGOqUBk%2BXgdMqLI%2Bwawl%2BkJE7PkWjed%2FSITmKSXsa0e0NOO1gR9dVQC8nRQph254G15jnRlGcdlKcx0dotYfOmSFOmKJGmOR7o%2B9c5v%2FBFQhHafgAhpR6P9D9l38jJpeuO%2Fqz6wapPBhf%2BYWBo%2FgxSQeJYxmXgjs5AEZqn8nr5R58eYuG5sFnoRtiLi%2BveU1EILcgpB0BWB%2FIIo37pPbr9FqWP8R%2FwUsEK&X-Amz-Signature=5914ca56b01b151e2163b0205db6b20d578f0ddca2c3e8840632178455a419d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
