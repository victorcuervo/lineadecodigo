---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7LHMDL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWthzjQyZ1wbEQNpwVbmv5uQlCFrZj3Fi88XsQZJ6sFAiEAmS2yCgjVmP8Bp0UoWxzAXYMCH5ShqG084THCecNoqIMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjqK3GOBS17SDhKAyrcAyZTmb5cIk9VBA3CJYPVRk7vMlZYzL1E%2FLYnYdxLShh5InkTyAMgodclY6MmjBI18ddW8nxWt71EEPzmCEwG0yz1B3uUECyKDQ%2BDjAak4%2FEejL%2FcRwlU4FJ4AMpkc%2BXN5H%2Fy72nqEBUSDzAS%2FqVi0I5RTUAEK5jC3s%2BgZPjRq6G7DRcDwhGomQv5oUusDbCuMiqQNUrIChj4WVqh07TN9TCLWVjVUL%2FCDjCLHC6iLl%2FwO7%2Fzq0B%2BMjcM4mn%2Fr79zl1qWT692DBhvbU2lKU%2BcGpk3NXrYP0UDxxeJ%2B20NG92L4iXXmiOFT4%2BK15J1V83kYvsthsT7ZYcDEINEf8tY7j16dKdYGCLsG93G5IamXOKE1%2B5iqPH%2FwfioDsaxuEkgRACff2XwazkcUQ2F7EuDTJ94GnlhYSSlec47f8DkR0puvzAj0E8KHAFTUvOPE79K3WBfxZ%2FntJkPvAJC3lXdpw%2F4AJ6oMB2%2BC3Fb2A0Gw2pxhEkX%2FgbyX%2BsZ6v%2F6Y1CI4eOOVkCytn7C4NqrnjzCd6EXcaLva1D5MFXDyXfU5wnCAei7Wae02KdH9r86FIaOBtOG9e5t5M1rVqwn1HB2WCwnJ4NzGvraLIGCdLvkF6rxgaD%2BQZ8XEIea%2B8ufMLygi8oGOqUBgv%2B4BDLtrkiTKzFifrkKOiOgmNWCG9j8RsnUb4q2JUeqFl%2BoZcmk72b5GTzlHoLu6NR9TKs7Yy8nWg27FeWW6HCKdwuaUU1v%2F4bmQ31va6vePAfZgJtU3pNBuXVSWC%2F5SJUBjidOTa%2BbLaVU01d9TKVy9dRNz%2F1PpkxvImOyhLkjhs61NWlRv19HUFjYGezIkZq6tU7tghebcGy51gwt11%2FUlkvd&X-Amz-Signature=2b664c01366564c1564af7483a4092c1192c608dd652ab9d840f7a49f5100093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD7LHMDL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWthzjQyZ1wbEQNpwVbmv5uQlCFrZj3Fi88XsQZJ6sFAiEAmS2yCgjVmP8Bp0UoWxzAXYMCH5ShqG084THCecNoqIMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIjqK3GOBS17SDhKAyrcAyZTmb5cIk9VBA3CJYPVRk7vMlZYzL1E%2FLYnYdxLShh5InkTyAMgodclY6MmjBI18ddW8nxWt71EEPzmCEwG0yz1B3uUECyKDQ%2BDjAak4%2FEejL%2FcRwlU4FJ4AMpkc%2BXN5H%2Fy72nqEBUSDzAS%2FqVi0I5RTUAEK5jC3s%2BgZPjRq6G7DRcDwhGomQv5oUusDbCuMiqQNUrIChj4WVqh07TN9TCLWVjVUL%2FCDjCLHC6iLl%2FwO7%2Fzq0B%2BMjcM4mn%2Fr79zl1qWT692DBhvbU2lKU%2BcGpk3NXrYP0UDxxeJ%2B20NG92L4iXXmiOFT4%2BK15J1V83kYvsthsT7ZYcDEINEf8tY7j16dKdYGCLsG93G5IamXOKE1%2B5iqPH%2FwfioDsaxuEkgRACff2XwazkcUQ2F7EuDTJ94GnlhYSSlec47f8DkR0puvzAj0E8KHAFTUvOPE79K3WBfxZ%2FntJkPvAJC3lXdpw%2F4AJ6oMB2%2BC3Fb2A0Gw2pxhEkX%2FgbyX%2BsZ6v%2F6Y1CI4eOOVkCytn7C4NqrnjzCd6EXcaLva1D5MFXDyXfU5wnCAei7Wae02KdH9r86FIaOBtOG9e5t5M1rVqwn1HB2WCwnJ4NzGvraLIGCdLvkF6rxgaD%2BQZ8XEIea%2B8ufMLygi8oGOqUBgv%2B4BDLtrkiTKzFifrkKOiOgmNWCG9j8RsnUb4q2JUeqFl%2BoZcmk72b5GTzlHoLu6NR9TKs7Yy8nWg27FeWW6HCKdwuaUU1v%2F4bmQ31va6vePAfZgJtU3pNBuXVSWC%2F5SJUBjidOTa%2BbLaVU01d9TKVy9dRNz%2F1PpkxvImOyhLkjhs61NWlRv19HUFjYGezIkZq6tU7tghebcGy51gwt11%2FUlkvd&X-Amz-Signature=73616baa5f611c0a6b22cdd0da60c9b27280cacb44942ca6d631a2f1edd6b746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
