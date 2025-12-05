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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MFEENLI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLGNOigj7ac3Nvu2JZpWxnCHTmxFJBBnLdifPgrnNIqAiEAjSWRXiOSk9mTHlWZlGa63maC4JqLRIH2c9%2F5TKxwoykq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOA5Iz5hZdC0fIcTNyrcA8FsO6EWZiD9rGZFyeX7LQ%2F%2FY0tHvyuFMhiOvmoBpXA9sElzVXsmoGk8IEJXaKRkMiO%2FjiCLe5dqXPpdpb0g0D2TO9T4tQ24LeS%2BG479NQDZ6onLo8X3AMRzbpiOVCAO0xxEUNt5%2FF2%2BPWa9waVsnMNhpwLf63eHgdpk%2FAUS5b259osm5sOjfJ7LsTbif46eoaCh00%2BBGXVbYxcmHXI30RnHwp%2FACYsRC3%2FCwU%2FBHD8J5eQvfdHCf9X6cnuMv1MBuXNWUx8ahA2MefoXgSNucBt118tHSGQN45BXXrJ0iSN0QB94o6ltxwjQiYEm9K3DrDNzyl16SARec6LaDQyibRPqwVUj49%2FWh%2BcWBPYItDgCpSSxHEgLGS2p9RJwhZdCv1dxjz5h%2BPj7lM8AoELV1AtJn00aYUGkUD4JdxsNDJBSd%2F30pt%2BiwuyoCzWZv%2B0zSjXJZTAVIfVy%2FyfomENQcQ1UNbuYHa14rGSdxi4MwpcETnJSr%2Bpzl2NW4HUI3s7avQu%2BjiHlhIp1VpZVEeZpchS5WdPyhUE%2Fwz15TIvzMvUEARGNqxS6Rtk2%2Bo5eqx1j96qfPj5CIjkAjmj9bX6NXJS8KP87OtSRlHJOKSHVqUr2OQ1ifjiYXkHxNvWvMK%2F2y8kGOqUBrcq2DcFp%2B%2FVttxl9hcIOzY3iQ2x4rUjc6oy%2Brnd9YKXpw81sJbOG4g2r%2FkTvddMYxezUlJVdFvQwSoUQTQvxN9oiiKDgPvFlE%2F8VSAVueE4Lh9ZmFc%2B1KgZVsgYSk3bY3VKibbyHS4Pd5DwEYj3YWASYn97OJ8w9Wk53O2V4osmIl9zoNAyfaKW39z38r%2FG6iw%2B3njwVNjhi4HsLDV3KnDq0OpZT&X-Amz-Signature=e6fa64520f9d7c36897b09f5a8ceec8cf027d1ec665f4a4cdf14833170355edf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MFEENLI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLGNOigj7ac3Nvu2JZpWxnCHTmxFJBBnLdifPgrnNIqAiEAjSWRXiOSk9mTHlWZlGa63maC4JqLRIH2c9%2F5TKxwoykq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDOA5Iz5hZdC0fIcTNyrcA8FsO6EWZiD9rGZFyeX7LQ%2F%2FY0tHvyuFMhiOvmoBpXA9sElzVXsmoGk8IEJXaKRkMiO%2FjiCLe5dqXPpdpb0g0D2TO9T4tQ24LeS%2BG479NQDZ6onLo8X3AMRzbpiOVCAO0xxEUNt5%2FF2%2BPWa9waVsnMNhpwLf63eHgdpk%2FAUS5b259osm5sOjfJ7LsTbif46eoaCh00%2BBGXVbYxcmHXI30RnHwp%2FACYsRC3%2FCwU%2FBHD8J5eQvfdHCf9X6cnuMv1MBuXNWUx8ahA2MefoXgSNucBt118tHSGQN45BXXrJ0iSN0QB94o6ltxwjQiYEm9K3DrDNzyl16SARec6LaDQyibRPqwVUj49%2FWh%2BcWBPYItDgCpSSxHEgLGS2p9RJwhZdCv1dxjz5h%2BPj7lM8AoELV1AtJn00aYUGkUD4JdxsNDJBSd%2F30pt%2BiwuyoCzWZv%2B0zSjXJZTAVIfVy%2FyfomENQcQ1UNbuYHa14rGSdxi4MwpcETnJSr%2Bpzl2NW4HUI3s7avQu%2BjiHlhIp1VpZVEeZpchS5WdPyhUE%2Fwz15TIvzMvUEARGNqxS6Rtk2%2Bo5eqx1j96qfPj5CIjkAjmj9bX6NXJS8KP87OtSRlHJOKSHVqUr2OQ1ifjiYXkHxNvWvMK%2F2y8kGOqUBrcq2DcFp%2B%2FVttxl9hcIOzY3iQ2x4rUjc6oy%2Brnd9YKXpw81sJbOG4g2r%2FkTvddMYxezUlJVdFvQwSoUQTQvxN9oiiKDgPvFlE%2F8VSAVueE4Lh9ZmFc%2B1KgZVsgYSk3bY3VKibbyHS4Pd5DwEYj3YWASYn97OJ8w9Wk53O2V4osmIl9zoNAyfaKW39z38r%2FG6iw%2B3njwVNjhi4HsLDV3KnDq0OpZT&X-Amz-Signature=1e905d4ccfac43ade8d2690554db64bf12804bbf2c1c999a55461062b28e00dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
