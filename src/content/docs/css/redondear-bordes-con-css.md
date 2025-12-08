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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB75HGPK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVkQ5DOuLwz1QH%2BXp90AvE64ZvEZRKka7yybdtNHlWOQIhAMeDkXN1SzUXGbdRTyby%2BWDDIsSlz2pRkvPzk55SH%2B0qKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FG4AzSmf4VIA8XPYq3APvK6mX20X5480arz2xpebAEE%2B7nGuupqJ2hmz0P%2FJVtnMjwmyghTZMHDggKNy4urFBdqq5w5QuN%2BF3y6doJsXoPnC1GG1rvkFxSFWUqoCK4GyWUQacUCmebikb0RVc1N8ijLunhS8gJvruVVwuNYvPMzgulpwHSfQ8V362qQIdctZcIhYrPVT2EiwfksJ5twv%2BSVnqCqXwKqi2Ni9XuAN62btX3KOwjvFl0RX4MuDB0qwmdo0%2F8uShk7rlMAjynzyurqVg2TXozkRLCKkQngLftctRug6UpZOe7zLJXFcpVeETvYFSKFye1AhgQvtu5kpsqNFdVPU5ItRZkwvtpIxAvrnaWG1f0nkvulMlb5SBrb7d%2BQJRosufPVpUXEdtJF6VcqN3G0OUeMYLXSDYexzC38gllBBKCQ8GasLBs7yiJ78msjtEK5wyT55AuPEp80Vj9LSfVSvjpCb%2BD2u3KL42Uh0nVgimkFXNSDTt8BcD8Y3bNkiE0kODiAU1BxPQSvgjb%2BQkQTAdFGNe40qPhA8VJq%2FwANGpwPy6R%2BSIbG%2BBXHb0oPwVCmwphPlXsgZ9RhE1KCYVsd%2BXAPfgqtebZoDtCVyTbGPGsa%2BRN4zBM%2FIErFScuZ0iPTTR4gMO1jCD79jJBjqkAYQZtE0H4lHQEdvvO91EdcA20u4ofXovbaof9JkSeod2VkRR6Vxf0bAqDQzAOwcx2FYsxv83DnXqYF%2FNQgSh4SNap%2BKj00aC%2BLYAfRay4FkheMFfhfUnC2lVaGCVqJwdfUWaEm10TwoWd%2FHl9iheNlLOUiki3MlhytdzXY%2B%2FDtrmJW2bjNh91RJRMjTgCoU8T0Q6nq85gS4wcM7ipOv75OTrwcmm&X-Amz-Signature=e17927e6b362fb56eb6631c00f74730a0f7c2ef7d60a24fc09c7668d688e4a47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB75HGPK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVkQ5DOuLwz1QH%2BXp90AvE64ZvEZRKka7yybdtNHlWOQIhAMeDkXN1SzUXGbdRTyby%2BWDDIsSlz2pRkvPzk55SH%2B0qKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FG4AzSmf4VIA8XPYq3APvK6mX20X5480arz2xpebAEE%2B7nGuupqJ2hmz0P%2FJVtnMjwmyghTZMHDggKNy4urFBdqq5w5QuN%2BF3y6doJsXoPnC1GG1rvkFxSFWUqoCK4GyWUQacUCmebikb0RVc1N8ijLunhS8gJvruVVwuNYvPMzgulpwHSfQ8V362qQIdctZcIhYrPVT2EiwfksJ5twv%2BSVnqCqXwKqi2Ni9XuAN62btX3KOwjvFl0RX4MuDB0qwmdo0%2F8uShk7rlMAjynzyurqVg2TXozkRLCKkQngLftctRug6UpZOe7zLJXFcpVeETvYFSKFye1AhgQvtu5kpsqNFdVPU5ItRZkwvtpIxAvrnaWG1f0nkvulMlb5SBrb7d%2BQJRosufPVpUXEdtJF6VcqN3G0OUeMYLXSDYexzC38gllBBKCQ8GasLBs7yiJ78msjtEK5wyT55AuPEp80Vj9LSfVSvjpCb%2BD2u3KL42Uh0nVgimkFXNSDTt8BcD8Y3bNkiE0kODiAU1BxPQSvgjb%2BQkQTAdFGNe40qPhA8VJq%2FwANGpwPy6R%2BSIbG%2BBXHb0oPwVCmwphPlXsgZ9RhE1KCYVsd%2BXAPfgqtebZoDtCVyTbGPGsa%2BRN4zBM%2FIErFScuZ0iPTTR4gMO1jCD79jJBjqkAYQZtE0H4lHQEdvvO91EdcA20u4ofXovbaof9JkSeod2VkRR6Vxf0bAqDQzAOwcx2FYsxv83DnXqYF%2FNQgSh4SNap%2BKj00aC%2BLYAfRay4FkheMFfhfUnC2lVaGCVqJwdfUWaEm10TwoWd%2FHl9iheNlLOUiki3MlhytdzXY%2B%2FDtrmJW2bjNh91RJRMjTgCoU8T0Q6nq85gS4wcM7ipOv75OTrwcmm&X-Amz-Signature=4836824f95562af2fc0ffb3fa5a33201fd03850721f534c1809889818bb0d059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
