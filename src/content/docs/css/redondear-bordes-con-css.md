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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCHODKA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs5J2H5qGSOKTFcx3WMvTjRfG3R643%2BU9sZgCQjwl4EQIgb952rAQjbs7al4m5KoOProctxjIWGrEf3WQ%2BKWsrDmIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaMrHa59h8FBRGQ0CrcA%2FEcoEsXxNoZZp6FaEbGzmegw6Ng4wjaVmZTtwTkpatVHa7ZVVbAzrizROkd1%2Bo3iy5XP2uBdJlzOLpdU8GXyKLgOqrKwi4UFj5Rwuzkg%2FGgNN57X8tJaCNNOrZ%2Bj2idB2FZPWm5qQfjZ3snuKZF0TLlZ50CV5HG%2BFHLhHAQx1omFFXtOgWbTHVBfm%2FGU4i%2ByfbDh9M8EhREkqpjC9DCWi3fkD%2BWYFqh%2FddMBpb%2F8TUFVIyU4%2F59AHTvUFtMCnXNnay0cse9%2BU69XZIaZh1tYXG3932ntiaEYoRzKUs%2BZrSIMqcwsNmHcCXDrrrQb1ATwN4%2FW5yPprjaydlUfQkVpxph0pso%2BPJOXHAt%2B2VMIG8oKsKtBK2N%2BHDb15wY3Nc7FzpSeaLzhyq2EyHjdfphEuNVG63LGvlk3pm1oiAmMWmAAcIB06p14VIFE0rn94H3YmeVMoeugQAeiwl56oN0phGuB8ej%2Fk86I7SE0DyOh9D8Vm%2BTNne%2Fx%2BdVLoPDS1jnkcdKqRkz14zanqcVC9jtnYvUs1O%2BHVBlMRXBi4KFjjFEu%2BSgtgp4ZO4l4wKpRBWMNgmjECMZwPhlySggAG6%2FNwSmKohbxZvPw1jQeuTbcfj7G%2BTw9uiSqPL%2FPCGqMMvB28kGOqUBaHeh7oTVCJ025sywlZJM3idC%2FTjxD%2BQcTfy4zd2k7PWZdr8Yigl8uaoqo7bMcK7KZTUDX4OEAGLKamUxSgbFpDxjOrctzcRl9AVN%2FzW3fm01%2BdR9L%2FOVTrXss0A5RnTQmL5pYmiq%2F1biE94As8DUxzLjyM2Q4DzW0pF7FaCzPwNsezLuTmF4wwU4vXQNtR%2Fmag2H2srQrIF2bxcExzV0fjtNnbAz&X-Amz-Signature=4c6714b1d37b48ae773102a797fd4c71ebaa47be35c5d15f35bd1fe958211e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCHODKA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs5J2H5qGSOKTFcx3WMvTjRfG3R643%2BU9sZgCQjwl4EQIgb952rAQjbs7al4m5KoOProctxjIWGrEf3WQ%2BKWsrDmIqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAaMrHa59h8FBRGQ0CrcA%2FEcoEsXxNoZZp6FaEbGzmegw6Ng4wjaVmZTtwTkpatVHa7ZVVbAzrizROkd1%2Bo3iy5XP2uBdJlzOLpdU8GXyKLgOqrKwi4UFj5Rwuzkg%2FGgNN57X8tJaCNNOrZ%2Bj2idB2FZPWm5qQfjZ3snuKZF0TLlZ50CV5HG%2BFHLhHAQx1omFFXtOgWbTHVBfm%2FGU4i%2ByfbDh9M8EhREkqpjC9DCWi3fkD%2BWYFqh%2FddMBpb%2F8TUFVIyU4%2F59AHTvUFtMCnXNnay0cse9%2BU69XZIaZh1tYXG3932ntiaEYoRzKUs%2BZrSIMqcwsNmHcCXDrrrQb1ATwN4%2FW5yPprjaydlUfQkVpxph0pso%2BPJOXHAt%2B2VMIG8oKsKtBK2N%2BHDb15wY3Nc7FzpSeaLzhyq2EyHjdfphEuNVG63LGvlk3pm1oiAmMWmAAcIB06p14VIFE0rn94H3YmeVMoeugQAeiwl56oN0phGuB8ej%2Fk86I7SE0DyOh9D8Vm%2BTNne%2Fx%2BdVLoPDS1jnkcdKqRkz14zanqcVC9jtnYvUs1O%2BHVBlMRXBi4KFjjFEu%2BSgtgp4ZO4l4wKpRBWMNgmjECMZwPhlySggAG6%2FNwSmKohbxZvPw1jQeuTbcfj7G%2BTw9uiSqPL%2FPCGqMMvB28kGOqUBaHeh7oTVCJ025sywlZJM3idC%2FTjxD%2BQcTfy4zd2k7PWZdr8Yigl8uaoqo7bMcK7KZTUDX4OEAGLKamUxSgbFpDxjOrctzcRl9AVN%2FzW3fm01%2BdR9L%2FOVTrXss0A5RnTQmL5pYmiq%2F1biE94As8DUxzLjyM2Q4DzW0pF7FaCzPwNsezLuTmF4wwU4vXQNtR%2Fmag2H2srQrIF2bxcExzV0fjtNnbAz&X-Amz-Signature=64a27e8e9b3b44fb6830fc7a7b3f0d4d09890099c2de435064424718e8d2c764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
