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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLJTJAGN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTSJ%2FDxcCItOeyiCwIaZWA3R63LgI5uYUTfytmRtIIPAiByCYbmyaV5VmSn%2FQKJfQVtbswyJoO4T7MhyzluenfJOir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMAjTZK7EKWsYek6Y%2BKtwDJJ9mcfH7LKhEoW0BMFgvMjFmP4Ap%2BpOHHTaOyfAoubCjM5XoYY4619kCojxubXcnF122IKPnc%2Bkrn04VrJJ3KcRuKSX8m2eqmx5zaBs5ClTPkoo9YnlCGCVRBYzSeb9ykvxQ4%2F4QGZg9sI9amgbux6apBlDmaELqvjC95t2Pu569Hmvc7pvM13gxFi5rp0WNHyzA%2BjP37u2G5aB0Y7a%2B8EjDiS5YbXy4SM%2B%2Fyx3d4LhKqGYBi5fMEx%2BwomF5Fzp%2FSKCvBdgmXAr5OmUtYgX9bPzP5hF5OUDsKx%2FvXoLUiy3FtjERCqo%2Bmi1NsG7RI7ADolHEXcYV1FbfoQe%2FcPDBZakXmZ9%2FFE%2B3U0DYftCCOk1US%2FS7CX9RKKxuaObJfVQwERQofgI2Fak70lm5R2Sv3VPAtcXkPI%2BMqxZfj3mR2MzX0DbZyoAaHwoW%2BlV%2B8j3k2v65oyX7JObssewvk1Ykw3nUY6XuXNMPHxopM7pTR2tYWOuSrZ8zvz5FBGIIqMpoTOmg9GllhFG1xnGTSy4jQ9IIIUIhI5PV%2B4XhdTzn7n4jxS6mo%2F0aXWtoyLluAU2jnBAjLFwSSKGUl43VUKxNNW2JRgQxzaPoyaRECQEXRV75FmnedpJ4H951YOMw86vJyQY6pgFCbXy7VA%2Brk6%2BBk%2FhTZBn8%2FbEhgsirJm9JdOKHEWEQehbVcE3ZAdk1y%2BmXKs8Dz58ihZMTrw%2FjdEA9uPtOnG%2F5Nm%2Bz9eupKWNTqbxw%2BqINrBX%2F5QBf%2BfxLj8Yvze9Lq1aRtgSlmJcBokMKSq%2FGStH%2FIYQhWsMgZRknsmVCf8MMboem0N1lRQQ84vMPa4Pk6gSv4FUNzI8y27%2BHDCRd4AiBvCsNSoKW&X-Amz-Signature=a7c07fe1bb4f812fc2662d6975f1d02f9a113a7017529a4078a9f47cf538e5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLJTJAGN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDTSJ%2FDxcCItOeyiCwIaZWA3R63LgI5uYUTfytmRtIIPAiByCYbmyaV5VmSn%2FQKJfQVtbswyJoO4T7MhyzluenfJOir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMAjTZK7EKWsYek6Y%2BKtwDJJ9mcfH7LKhEoW0BMFgvMjFmP4Ap%2BpOHHTaOyfAoubCjM5XoYY4619kCojxubXcnF122IKPnc%2Bkrn04VrJJ3KcRuKSX8m2eqmx5zaBs5ClTPkoo9YnlCGCVRBYzSeb9ykvxQ4%2F4QGZg9sI9amgbux6apBlDmaELqvjC95t2Pu569Hmvc7pvM13gxFi5rp0WNHyzA%2BjP37u2G5aB0Y7a%2B8EjDiS5YbXy4SM%2B%2Fyx3d4LhKqGYBi5fMEx%2BwomF5Fzp%2FSKCvBdgmXAr5OmUtYgX9bPzP5hF5OUDsKx%2FvXoLUiy3FtjERCqo%2Bmi1NsG7RI7ADolHEXcYV1FbfoQe%2FcPDBZakXmZ9%2FFE%2B3U0DYftCCOk1US%2FS7CX9RKKxuaObJfVQwERQofgI2Fak70lm5R2Sv3VPAtcXkPI%2BMqxZfj3mR2MzX0DbZyoAaHwoW%2BlV%2B8j3k2v65oyX7JObssewvk1Ykw3nUY6XuXNMPHxopM7pTR2tYWOuSrZ8zvz5FBGIIqMpoTOmg9GllhFG1xnGTSy4jQ9IIIUIhI5PV%2B4XhdTzn7n4jxS6mo%2F0aXWtoyLluAU2jnBAjLFwSSKGUl43VUKxNNW2JRgQxzaPoyaRECQEXRV75FmnedpJ4H951YOMw86vJyQY6pgFCbXy7VA%2Brk6%2BBk%2FhTZBn8%2FbEhgsirJm9JdOKHEWEQehbVcE3ZAdk1y%2BmXKs8Dz58ihZMTrw%2FjdEA9uPtOnG%2F5Nm%2Bz9eupKWNTqbxw%2BqINrBX%2F5QBf%2BfxLj8Yvze9Lq1aRtgSlmJcBokMKSq%2FGStH%2FIYQhWsMgZRknsmVCf8MMboem0N1lRQQ84vMPa4Pk6gSv4FUNzI8y27%2BHDCRd4AiBvCsNSoKW&X-Amz-Signature=58c8f253b016c309523c9f4081f30286b146c06f15419fe6c975ef609a9ce1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
