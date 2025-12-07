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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWYD2UVH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDURgY2RY8guLvKeOvGRSArPtN8FAAmeXtPBy08WBrDaAiEAhWA9IK7bV23sOYfl1aguReqcyVQ7RsbFa0x6uwit2G4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUBYILPudaPaJZBgSrcA8lkrMIpNrRGoPw8oTctqCtrlbwHjrzITjNm3EdRBKaxywVYbRXwJvpb0MXQszeciWhOL%2B%2BVXyK%2BL32DGs1g8rNEZHdE%2BT5L2vcZVnmg78e70aO5g1UX2CTJ7X0R4x%2BSP6dR6ATK4Fn7Y2WMlx6x2G6%2BQ1vWweTL1hSFEts%2Blc6f7CsqS2Bn57H8NRxCUClqBVci2eDMMzdNYZSxeXN6wZBfZyYT61qUxKcPRGSTqjXj8YyPEVUe3QsiQJsAoe9brKRHdxBa9iDSv2Z0k6tpDEB519nkc04eQtPO9hXqn%2FH8RG5d0dZZtbP%2F0Hq%2BM3riVnhfWS6ePwSWGF4X9fsvIIe%2BrBYlf5znJqYgbtYhD8rdA%2FEHYDUpumwAit9sGkMr6CGFWIPggcnA%2FyS%2FKUn6uX0r4OA7hs3SmGrlGX3jUxPTlGQ7w07JiIIjxOcnbZRp0eGMD4o67R9w3fLrSJ7bRydkKG0F0PovaN0ui8hqpVO78p3cIrU9N4Dl7I7E658baY%2BSM7Z1CcdtjThTW2HKO0z0Ox7DA0Vaxg%2FSpuCkxHQrCdfsVHQHQ3Me%2BZm3d9pF1L56vR2aYFYMXbhFCUkbY6BgO4ITuMPpS9zq%2BEmz7NvIW%2BY93g%2Bwv%2FcBZNbkMK%2B31skGOqUBGWZhzkjZ5PW%2BP%2FgiAcr0%2FnX4vTlxgT7qNqytkzuVqmJ1%2BN9DR%2FV1X54vCriQJpqoM%2F9ffcJ%2FziwNphtLLBYtO28YwNSdIUu6DT5QXtRywynfRXBlPxWDhMHxJ4gMPZeJ0AJmNO%2FbNbFsYqeaSNQ9V%2FohLzDJ1ZL1Un3ZwMWMpNbFRXzeWmIStIt4uKWMtmT4%2BHLwb0oxsTj1Qn%2BPFuoHPf%2FC71LG&X-Amz-Signature=e9282efdf2ffbb16209f678db70b1e7e93907c398e7f882205495734787b2ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWYD2UVH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDURgY2RY8guLvKeOvGRSArPtN8FAAmeXtPBy08WBrDaAiEAhWA9IK7bV23sOYfl1aguReqcyVQ7RsbFa0x6uwit2G4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBUBYILPudaPaJZBgSrcA8lkrMIpNrRGoPw8oTctqCtrlbwHjrzITjNm3EdRBKaxywVYbRXwJvpb0MXQszeciWhOL%2B%2BVXyK%2BL32DGs1g8rNEZHdE%2BT5L2vcZVnmg78e70aO5g1UX2CTJ7X0R4x%2BSP6dR6ATK4Fn7Y2WMlx6x2G6%2BQ1vWweTL1hSFEts%2Blc6f7CsqS2Bn57H8NRxCUClqBVci2eDMMzdNYZSxeXN6wZBfZyYT61qUxKcPRGSTqjXj8YyPEVUe3QsiQJsAoe9brKRHdxBa9iDSv2Z0k6tpDEB519nkc04eQtPO9hXqn%2FH8RG5d0dZZtbP%2F0Hq%2BM3riVnhfWS6ePwSWGF4X9fsvIIe%2BrBYlf5znJqYgbtYhD8rdA%2FEHYDUpumwAit9sGkMr6CGFWIPggcnA%2FyS%2FKUn6uX0r4OA7hs3SmGrlGX3jUxPTlGQ7w07JiIIjxOcnbZRp0eGMD4o67R9w3fLrSJ7bRydkKG0F0PovaN0ui8hqpVO78p3cIrU9N4Dl7I7E658baY%2BSM7Z1CcdtjThTW2HKO0z0Ox7DA0Vaxg%2FSpuCkxHQrCdfsVHQHQ3Me%2BZm3d9pF1L56vR2aYFYMXbhFCUkbY6BgO4ITuMPpS9zq%2BEmz7NvIW%2BY93g%2Bwv%2FcBZNbkMK%2B31skGOqUBGWZhzkjZ5PW%2BP%2FgiAcr0%2FnX4vTlxgT7qNqytkzuVqmJ1%2BN9DR%2FV1X54vCriQJpqoM%2F9ffcJ%2FziwNphtLLBYtO28YwNSdIUu6DT5QXtRywynfRXBlPxWDhMHxJ4gMPZeJ0AJmNO%2FbNbFsYqeaSNQ9V%2FohLzDJ1ZL1Un3ZwMWMpNbFRXzeWmIStIt4uKWMtmT4%2BHLwb0oxsTj1Qn%2BPFuoHPf%2FC71LG&X-Amz-Signature=d005ea180df24d6a318422f0bdd699ba701324108fed6ee68d858a48efea1a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
