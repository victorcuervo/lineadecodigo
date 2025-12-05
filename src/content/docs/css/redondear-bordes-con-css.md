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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663E4P35D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0YhIQ0nm9%2B56AiVI4hORmBWOxfXR64SlU37V6XkoRAwIhALYeqLYb3BjbruppNOBFUCpOw9lSR6x6xc20ppPhLHFZKv8DCGAQABoMNjM3NDIzMTgzODA1IgwOkdsnzse%2F403L728q3APR7NCUeo9m4UzJIZk2bDHteoUsOy%2Bm7PoLKs7K%2F9DZtQzs2C5KP9B68ZnJAxzVDWdkumeDPsfPgKkm3YHOMELGy8CjVCmrkp0kXTQ5GxBC6XXnxXSBbs0o2HaqYzXPnE2%2Bl7v%2FmI7cb6U0rhLglmtiWHsshYt7aAOCL3kvvxUh5HUewEqljGHddH0cuaIoWaRw%2Fx0wqZM6%2FQMR7GqfmCwncZLOTspYEq7x%2FT0TY287AEimw%2FXUwXqFfpZycgbrZpVzl4JEpaiV6IhBPNs4g17QlJ%2BcWQV6%2FOfpe2AoSA5nYUwUiSW0P4DZ2EAo9Gu4Kq5FIMan%2BQXDGMc3dXOAApDWbHAC%2FjENyEBfckZ3DJrD24KwkYOnAOXh88C9kTUbDFcTq4j3%2BcZOM8OQz8cfufl7RdyZtjrOY7v%2FOZTNOS3qBgUVdGF41FVvaH%2Bu3ALk1sg7sqAYJebvOP%2BKa0MdFd30EJq5fvjWhuxfiORbf47y2kg6FDkJCze4guLVntw0emWk3AUjtPbcFrLFh5nJldosKzPl8m2IWK8CgKS3ysRXFwqwMVQCE1BkJla800rbz1n5Nh%2FKzAxTeyW70D6y1VpzCevpFm6Y27v4PUdZgm84ZPm2HjINyRuhA3Gz7zC77cvJBjqkAa15h6MFnIzpiIq1AU%2FvuWyawHarDrfdZ0BZvovo12T6YdIqJ0ufBjqGQoD8Yp3A3A9cfcaQ6EV8tBUMXUvqXqY36j%2BKOye29PP8ue3SRJvx1LmLjbrpfnWWAKS59ybGRqgk1CJbrsBfEEzxyZmpZXTmvHVliHhJaijFGdIQuD%2FBTqYUJAAgTQ2JByQkqdTO%2FGH2z55yV3aOP1ql955IzSsLVDxD&X-Amz-Signature=e1ba732dd92918bf317513a2270e2db3429a64b77784c06913c6e4bc68287d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663E4P35D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0YhIQ0nm9%2B56AiVI4hORmBWOxfXR64SlU37V6XkoRAwIhALYeqLYb3BjbruppNOBFUCpOw9lSR6x6xc20ppPhLHFZKv8DCGAQABoMNjM3NDIzMTgzODA1IgwOkdsnzse%2F403L728q3APR7NCUeo9m4UzJIZk2bDHteoUsOy%2Bm7PoLKs7K%2F9DZtQzs2C5KP9B68ZnJAxzVDWdkumeDPsfPgKkm3YHOMELGy8CjVCmrkp0kXTQ5GxBC6XXnxXSBbs0o2HaqYzXPnE2%2Bl7v%2FmI7cb6U0rhLglmtiWHsshYt7aAOCL3kvvxUh5HUewEqljGHddH0cuaIoWaRw%2Fx0wqZM6%2FQMR7GqfmCwncZLOTspYEq7x%2FT0TY287AEimw%2FXUwXqFfpZycgbrZpVzl4JEpaiV6IhBPNs4g17QlJ%2BcWQV6%2FOfpe2AoSA5nYUwUiSW0P4DZ2EAo9Gu4Kq5FIMan%2BQXDGMc3dXOAApDWbHAC%2FjENyEBfckZ3DJrD24KwkYOnAOXh88C9kTUbDFcTq4j3%2BcZOM8OQz8cfufl7RdyZtjrOY7v%2FOZTNOS3qBgUVdGF41FVvaH%2Bu3ALk1sg7sqAYJebvOP%2BKa0MdFd30EJq5fvjWhuxfiORbf47y2kg6FDkJCze4guLVntw0emWk3AUjtPbcFrLFh5nJldosKzPl8m2IWK8CgKS3ysRXFwqwMVQCE1BkJla800rbz1n5Nh%2FKzAxTeyW70D6y1VpzCevpFm6Y27v4PUdZgm84ZPm2HjINyRuhA3Gz7zC77cvJBjqkAa15h6MFnIzpiIq1AU%2FvuWyawHarDrfdZ0BZvovo12T6YdIqJ0ufBjqGQoD8Yp3A3A9cfcaQ6EV8tBUMXUvqXqY36j%2BKOye29PP8ue3SRJvx1LmLjbrpfnWWAKS59ybGRqgk1CJbrsBfEEzxyZmpZXTmvHVliHhJaijFGdIQuD%2FBTqYUJAAgTQ2JByQkqdTO%2FGH2z55yV3aOP1ql955IzSsLVDxD&X-Amz-Signature=02fbb49eaf3f466fed74b9bffbbf331f8b822b1a14a52a10428ac8db8a12d4e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
