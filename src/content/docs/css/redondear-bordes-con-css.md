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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTW4BS5M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXNe1QGTVqFu9D9EW2K8orATY6Bi1zXEDZGf6OfZPQgIgZbSriwwOxsGkrn4OtF6UhvculJH7ekuOrYtgtTzO6AYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbo8VbgdkMe9Un6FSrcAworVEC1zDZ1P%2BWxqUxOP1IOg8lVkPczbCAHAxmOcxRzNdhBggn3m%2F%2BeSwsucpnVbNhcsZ7lRMXJx%2FXt01vy8gECAQKNMZhry3Zd6kpRafXx2s%2BmeMN5HUrindBKg6GB02d4wLzAm%2BLeAiYsh7MUtx%2F%2Bfb7baok8E4xk7h1HqKnrZtkbXWzvm9bj%2FH8y8hIpeZ6ScA0%2B%2FlUzq7a1%2B6BtBn8jt4oJ5twFVFvjHi3%2Bn3d37Z9JLrXD7Lr4wS%2F8zoBfK2VrsYjbXYWX86uqv%2BHpL3COp%2BJEiV8nacI7RM7yEWFYYOI6THB6LGrSmpGxjQnNsAEtWXd6RD7Op%2BYUS6shi0GWUwcMOIzOmgBSDMunf%2FiU9DksSo82%2BzcSxxcYMcb2uXzm13b0OzxWcGsabY4uCdoKASEblxPoLJxfYqtw3UVHAUfxz8JcV3kZwLnDfE2w0HBLqOLE2lQcieMfdFkG4U%2FaRj8uLxuBtxbrorEIAuJHm9RJJ09Ujb3yhH8QNtqjDmWdWC8Q6vYxMgIGh4FeZB7iwcv8z3W4hGjjjrstLKnjbm59UbKvtDSUepmADhcz7mX7Of3QDZtidEKk6B40k5nizfKtoEDorxxmY9gatq1kWeIgZT91btJpDS6KMIX90skGOqUBg6FEF2eAUXvU1hJaqae%2BaNZ2EsWcvXmJ%2FEFVFdQztH9SPg5xTu1MtvMUUFW1xPIYqTUGugUDEFmJQwxy78Y3nqYdIrxtxgWZVWYZ6tDmsgFHb4nsFHnmYMMUj7aeKH2wv7Icn2l2j54lWYvI23sl%2B%2B6soVkgPmzpV%2Bt5yYu5K%2FIEFNA3wlEZTzw8sfA1KAFXhs8%2BKLCfE7I1Rkj7i0YTVZvp0Yxw&X-Amz-Signature=2be372fa53c114f72e3bd8d3e851c15f81c30ca441769c3595715602cf9e0199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTW4BS5M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpXNe1QGTVqFu9D9EW2K8orATY6Bi1zXEDZGf6OfZPQgIgZbSriwwOxsGkrn4OtF6UhvculJH7ekuOrYtgtTzO6AYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbo8VbgdkMe9Un6FSrcAworVEC1zDZ1P%2BWxqUxOP1IOg8lVkPczbCAHAxmOcxRzNdhBggn3m%2F%2BeSwsucpnVbNhcsZ7lRMXJx%2FXt01vy8gECAQKNMZhry3Zd6kpRafXx2s%2BmeMN5HUrindBKg6GB02d4wLzAm%2BLeAiYsh7MUtx%2F%2Bfb7baok8E4xk7h1HqKnrZtkbXWzvm9bj%2FH8y8hIpeZ6ScA0%2B%2FlUzq7a1%2B6BtBn8jt4oJ5twFVFvjHi3%2Bn3d37Z9JLrXD7Lr4wS%2F8zoBfK2VrsYjbXYWX86uqv%2BHpL3COp%2BJEiV8nacI7RM7yEWFYYOI6THB6LGrSmpGxjQnNsAEtWXd6RD7Op%2BYUS6shi0GWUwcMOIzOmgBSDMunf%2FiU9DksSo82%2BzcSxxcYMcb2uXzm13b0OzxWcGsabY4uCdoKASEblxPoLJxfYqtw3UVHAUfxz8JcV3kZwLnDfE2w0HBLqOLE2lQcieMfdFkG4U%2FaRj8uLxuBtxbrorEIAuJHm9RJJ09Ujb3yhH8QNtqjDmWdWC8Q6vYxMgIGh4FeZB7iwcv8z3W4hGjjjrstLKnjbm59UbKvtDSUepmADhcz7mX7Of3QDZtidEKk6B40k5nizfKtoEDorxxmY9gatq1kWeIgZT91btJpDS6KMIX90skGOqUBg6FEF2eAUXvU1hJaqae%2BaNZ2EsWcvXmJ%2FEFVFdQztH9SPg5xTu1MtvMUUFW1xPIYqTUGugUDEFmJQwxy78Y3nqYdIrxtxgWZVWYZ6tDmsgFHb4nsFHnmYMMUj7aeKH2wv7Icn2l2j54lWYvI23sl%2B%2B6soVkgPmzpV%2Bt5yYu5K%2FIEFNA3wlEZTzw8sfA1KAFXhs8%2BKLCfE7I1Rkj7i0YTVZvp0Yxw&X-Amz-Signature=ea7e28494172855c43d027d555aaaa3ab81edfe94284a76787c11bfb59979a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
