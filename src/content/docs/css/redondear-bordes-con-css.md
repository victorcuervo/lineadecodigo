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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FENHXH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwSVgt4t9kRfU8Icmm2r7AU8IfgW2jc2381tOmhQZqpAiEApXpclxVzVNmGhCIxN5N7o9aN8tqzTdSDPB%2FY7239wEwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF3EPBmf8qBa1nympircAxNdprW1EBhu6%2FJY2NSo5HWbS4jIkJU%2F7z1srCmFQWenSloQNdGPDO4vXyeJif07mLJccHUlAliLbv%2FzqyZRbHQObSatoqP3qWTeIsGxOF7%2FSHCrHM4qQ78l6EJoFMOjnQotNTDyRcxX6SeMqBgL6oDmjAbMrA38jqpDx8OEhUhzxoJNEt2jJOr1xmILpB1Y%2FgRf%2FqgX3ALQDgfTWxXQLTWTip4k3PxaZ5BUVNS%2FsdQp5uLG1dTyHu8TIZtQv49Jo%2BH%2F9oBBpkBtCP4qCnvClEF48IxTVccWNHgSZTQwoSA2a2LzFiGBLX%2FByG6tSM3f%2BO%2BtihtseLINs4ObHjbrii8PqDq%2F4cq8TzDDfoQvXGgBvXywRbmiXT27zrxHbMYGJkwf37fxM%2By72uAlWyh3OMdy6HXyvVj5NA40YfWQ6DvW8g72cHXlfhAg1wRU6O0ygLYssKsGEWnbFvGF%2F1Omm3dlJQ5lWsGYC%2BirwBLtJDhn5SAGNVxbo3RZ2rawVxdASLHeCrR%2BiBVXRALB6jLuqKk2QJtPVp4%2FjdR23POnSM3MxwC0mvff0L2DGPQYinKG9g7VkjUWnINHRWRKqMspO2WV8xf9B0eligp2qJZIBswnWdD4pfPvsH%2FIq57kMOKm0MkGOqUBlR7f2Lo1lt1gQ0AK34exgiY%2BlgVGtlAtBFf2qvpZxqcEzUx9G643ytmTieCAvyBj5gG3Ke%2BQ%2FE3xniGUlN7tHXmHDX4tDeSiMnsi3W2CdGFKsf5BnHr7OhF4HVmBdPAlxAeMPcUfE4hQ24XzJ5uwmDdYUp3DQ9g%2By8ridH0OjCTgzx0Ambj1xwjL1I3YlPF7bU5QP%2FpR0hCfRQd1Re3dSigHDoId&X-Amz-Signature=f3f55a4339303c8701848272c7fb2958c850dcf501b43bbadbbc94644234cf55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644FENHXH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAwSVgt4t9kRfU8Icmm2r7AU8IfgW2jc2381tOmhQZqpAiEApXpclxVzVNmGhCIxN5N7o9aN8tqzTdSDPB%2FY7239wEwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDF3EPBmf8qBa1nympircAxNdprW1EBhu6%2FJY2NSo5HWbS4jIkJU%2F7z1srCmFQWenSloQNdGPDO4vXyeJif07mLJccHUlAliLbv%2FzqyZRbHQObSatoqP3qWTeIsGxOF7%2FSHCrHM4qQ78l6EJoFMOjnQotNTDyRcxX6SeMqBgL6oDmjAbMrA38jqpDx8OEhUhzxoJNEt2jJOr1xmILpB1Y%2FgRf%2FqgX3ALQDgfTWxXQLTWTip4k3PxaZ5BUVNS%2FsdQp5uLG1dTyHu8TIZtQv49Jo%2BH%2F9oBBpkBtCP4qCnvClEF48IxTVccWNHgSZTQwoSA2a2LzFiGBLX%2FByG6tSM3f%2BO%2BtihtseLINs4ObHjbrii8PqDq%2F4cq8TzDDfoQvXGgBvXywRbmiXT27zrxHbMYGJkwf37fxM%2By72uAlWyh3OMdy6HXyvVj5NA40YfWQ6DvW8g72cHXlfhAg1wRU6O0ygLYssKsGEWnbFvGF%2F1Omm3dlJQ5lWsGYC%2BirwBLtJDhn5SAGNVxbo3RZ2rawVxdASLHeCrR%2BiBVXRALB6jLuqKk2QJtPVp4%2FjdR23POnSM3MxwC0mvff0L2DGPQYinKG9g7VkjUWnINHRWRKqMspO2WV8xf9B0eligp2qJZIBswnWdD4pfPvsH%2FIq57kMOKm0MkGOqUBlR7f2Lo1lt1gQ0AK34exgiY%2BlgVGtlAtBFf2qvpZxqcEzUx9G643ytmTieCAvyBj5gG3Ke%2BQ%2FE3xniGUlN7tHXmHDX4tDeSiMnsi3W2CdGFKsf5BnHr7OhF4HVmBdPAlxAeMPcUfE4hQ24XzJ5uwmDdYUp3DQ9g%2By8ridH0OjCTgzx0Ambj1xwjL1I3YlPF7bU5QP%2FpR0hCfRQd1Re3dSigHDoId&X-Amz-Signature=9a07a7836dc23aae9ec06107b421bef6d739908a458e9f281ee8236d131552a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
