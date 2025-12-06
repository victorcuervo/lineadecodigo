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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234ZEL4B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyrSC0lKEkXgjFqAPSQn9oF3XSZ068QTJbl%2FULKODGYwIgI%2FjFZAufmG8h%2B8cP22caeUCyaMkNo4zKT08MNxf8k0Eq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPUyjlUxU0so%2BApauSrcA%2FC0HITf4OYwNEyV5AeT0TBgaBz2uYOnIN3NwZqRRTggxZZUxqO8bgycKITQuAuD7%2BP6WRyIlK4%2BqdmwRqIyIXi%2Fs8gfXzVvOKv98xB5x6JgHQM41xrcajVdajUDYCxJmJG5npWOLGE3AKUfrjTnLaabEx7Yv5rb4%2FSBOcbyqCZju3HGTQ95qBYaxzaGKx36A0pSTaTdHHIdq3QlsbO%2FWEVGINNq%2FSOv4Lu6Of8JgiS%2Fm0Rdq7UGJwdMP%2FPrNtjyZqbrpmsdeH6WDvavt9lf8qw2gPNitu6IzDH2LzmYp1BbmEXV64PCP4HTPaSiDxdJpFyoZHsn%2B0tLIUf6OqyhC6roJvXk68uTDpZNpyNba2THQaMvyPPjcN%2FHJMeZkkOViKrdH4vNHt%2FYTYMfjuWpd9cpPkZmLQk%2FQiDLwZYnODFqST5gxrHa7COI15FFflDkptaCW9%2BSKyVZ1PE7G%2FIRbbzqtU3KL%2FE314I%2Fgicp3FuGZpH%2F2skYCdIb%2FLQzudlWHcOXzOGJWdpAswOvoxrGBmvWzZVANTnTcVe8fB8f48dYxfY4uH%2Blvk%2FimIbrjZ65mYaC%2FWSzzzNDFmYaLsn0%2BeDAgMt9%2FvxQdh6wv018FNgBYRIDwbsWx544ndCbMO6m0MkGOqUBIibfHm6GwjkTBAksgqK0ATD1g%2BMvoOV8t7mwKaBVhteCNu6WD1ea1AwD0Vy95q9OJDbcwwufkGqvDr%2ByNDoQaKBf8XWanRVMc4MrVjEVDX63Ia69f5JBL%2F%2Bjp8cavxd8yM%2F7fYsYrSl0N394zOosJElFMbZK1QeojATUyH5H9gZ03lBkqJT6E3SOuiT6utwBwwecvZ9LpzLHonbL5q0NTviJ49y0&X-Amz-Signature=2a2cd842f581a82ed3e35956584c6eba57b0ddb8facbb77ebf3f7d4d386d7ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466234ZEL4B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyrSC0lKEkXgjFqAPSQn9oF3XSZ068QTJbl%2FULKODGYwIgI%2FjFZAufmG8h%2B8cP22caeUCyaMkNo4zKT08MNxf8k0Eq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPUyjlUxU0so%2BApauSrcA%2FC0HITf4OYwNEyV5AeT0TBgaBz2uYOnIN3NwZqRRTggxZZUxqO8bgycKITQuAuD7%2BP6WRyIlK4%2BqdmwRqIyIXi%2Fs8gfXzVvOKv98xB5x6JgHQM41xrcajVdajUDYCxJmJG5npWOLGE3AKUfrjTnLaabEx7Yv5rb4%2FSBOcbyqCZju3HGTQ95qBYaxzaGKx36A0pSTaTdHHIdq3QlsbO%2FWEVGINNq%2FSOv4Lu6Of8JgiS%2Fm0Rdq7UGJwdMP%2FPrNtjyZqbrpmsdeH6WDvavt9lf8qw2gPNitu6IzDH2LzmYp1BbmEXV64PCP4HTPaSiDxdJpFyoZHsn%2B0tLIUf6OqyhC6roJvXk68uTDpZNpyNba2THQaMvyPPjcN%2FHJMeZkkOViKrdH4vNHt%2FYTYMfjuWpd9cpPkZmLQk%2FQiDLwZYnODFqST5gxrHa7COI15FFflDkptaCW9%2BSKyVZ1PE7G%2FIRbbzqtU3KL%2FE314I%2Fgicp3FuGZpH%2F2skYCdIb%2FLQzudlWHcOXzOGJWdpAswOvoxrGBmvWzZVANTnTcVe8fB8f48dYxfY4uH%2Blvk%2FimIbrjZ65mYaC%2FWSzzzNDFmYaLsn0%2BeDAgMt9%2FvxQdh6wv018FNgBYRIDwbsWx544ndCbMO6m0MkGOqUBIibfHm6GwjkTBAksgqK0ATD1g%2BMvoOV8t7mwKaBVhteCNu6WD1ea1AwD0Vy95q9OJDbcwwufkGqvDr%2ByNDoQaKBf8XWanRVMc4MrVjEVDX63Ia69f5JBL%2F%2Bjp8cavxd8yM%2F7fYsYrSl0N394zOosJElFMbZK1QeojATUyH5H9gZ03lBkqJT6E3SOuiT6utwBwwecvZ9LpzLHonbL5q0NTviJ49y0&X-Amz-Signature=ba571c3101ee55f3973d78e8951b01895ea55c7099058468c95969981fc75798&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
