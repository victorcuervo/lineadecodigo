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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672UQVYRA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsGdJBsy9bK0wgqJoPKGRohl079nVbkOB2tJ755WAKggIgP%2BQOZO3IKHdRzY4H2Y14DpkZilfn2q%2By3n1Pc3g0ULsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDICzjtI0jvEeNyhWdyrcA5ojvsJxaCXVF1DPy6EWusxMhK5CuXYDLFkmmvfIK9hXsDMoT9a4tKYSm77hSs7F2ldbLS079tqngUk6%2BpJRkugOczL1gXBLTOB9gJbvikOEgX2gtwgkDQCVrOadAdXJseRneJw281OUH36SK69RiUaKhZSVwcvrbwUBF%2Feh2axrcG3%2BsSh5rQBhp5eTKC1J777AD0q2GLJUDuPp6mtvkZOkekofkyH9ROdRzSfica7uJ862CufwHXLYNt0uvE4wLWUwtvHD9GCmSTS1UrHhQorhYLCUf2xnWsN9fDpCLCL4acETYTi4oFq%2FRv3E6Y16BsAxU3q%2BQtpNjF14eZ6DYvVfa71xJ3wqR3VdFm5%2BqR0gIKfqubw6ZKRAzF4F8VdRJuRE9wZt1%2BOFHsGi1pGwbE2iFluwcgnSYrkf2dNanDxxdm2YhDIj5Q6SWKs9nFKWQwBXItdY6PBIEpcyf1fB%2BW5kPopKs3jKUL8n63%2FNbe%2B4zJCD0obU9wmRQSVNY%2FrLFOKfsOxe1XRsm1J5erT623oiXBPSULGqGh7BIwpngh5IESYKY9L8sdgoNZrYeeg7XufhEDrn5fcqQN%2BK%2BhSZUkUtOjJNmQrAtURKOVRhv889H5arO9Tm8BVIK8NNMOnGyskGOqUBNW960ojatF9Kcyo1zIHgH5IC7rbZjY333VL6TFfeDx%2BhJQ%2BXf3ZHmkvQyoHbyqg5mdeitR7unI2u4A%2FZmMoliYOx5pqrx3O559ih55V%2BmwSFMMzDoQacYTsAvOm9n551qObJsB1IdCLNZjhAuEbFrdJIXnfPGBJiOndhZOMFHTwkQYn7T6btT6yoynxlLdVo62PF%2FAfRDbc8%2FqB2G6aYLGmAJgic&X-Amz-Signature=275fbc94fb9bfb600dcdf9bf1a84e1a3a3315c8c964e1b573c7c519fe8ad418c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672UQVYRA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsGdJBsy9bK0wgqJoPKGRohl079nVbkOB2tJ755WAKggIgP%2BQOZO3IKHdRzY4H2Y14DpkZilfn2q%2By3n1Pc3g0ULsq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDICzjtI0jvEeNyhWdyrcA5ojvsJxaCXVF1DPy6EWusxMhK5CuXYDLFkmmvfIK9hXsDMoT9a4tKYSm77hSs7F2ldbLS079tqngUk6%2BpJRkugOczL1gXBLTOB9gJbvikOEgX2gtwgkDQCVrOadAdXJseRneJw281OUH36SK69RiUaKhZSVwcvrbwUBF%2Feh2axrcG3%2BsSh5rQBhp5eTKC1J777AD0q2GLJUDuPp6mtvkZOkekofkyH9ROdRzSfica7uJ862CufwHXLYNt0uvE4wLWUwtvHD9GCmSTS1UrHhQorhYLCUf2xnWsN9fDpCLCL4acETYTi4oFq%2FRv3E6Y16BsAxU3q%2BQtpNjF14eZ6DYvVfa71xJ3wqR3VdFm5%2BqR0gIKfqubw6ZKRAzF4F8VdRJuRE9wZt1%2BOFHsGi1pGwbE2iFluwcgnSYrkf2dNanDxxdm2YhDIj5Q6SWKs9nFKWQwBXItdY6PBIEpcyf1fB%2BW5kPopKs3jKUL8n63%2FNbe%2B4zJCD0obU9wmRQSVNY%2FrLFOKfsOxe1XRsm1J5erT623oiXBPSULGqGh7BIwpngh5IESYKY9L8sdgoNZrYeeg7XufhEDrn5fcqQN%2BK%2BhSZUkUtOjJNmQrAtURKOVRhv889H5arO9Tm8BVIK8NNMOnGyskGOqUBNW960ojatF9Kcyo1zIHgH5IC7rbZjY333VL6TFfeDx%2BhJQ%2BXf3ZHmkvQyoHbyqg5mdeitR7unI2u4A%2FZmMoliYOx5pqrx3O559ih55V%2BmwSFMMzDoQacYTsAvOm9n551qObJsB1IdCLNZjhAuEbFrdJIXnfPGBJiOndhZOMFHTwkQYn7T6btT6yoynxlLdVo62PF%2FAfRDbc8%2FqB2G6aYLGmAJgic&X-Amz-Signature=f8b187fe138dcb8ff3925c5da7b46be7989848057bfd04a4b907b9f127d615e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
