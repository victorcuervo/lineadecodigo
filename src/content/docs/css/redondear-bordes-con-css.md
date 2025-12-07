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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73DZ3OC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuw%2BCczkgMdsdbKuh0SbZ%2B6uBHm2AlXP6VHLSCkNpkKAiEA2rOFyJiWT2CWj%2F9GpS1x69obl1dvBspaX9Snht6y0jQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmRdh1UK6MmiYPULircA3KhuSV4RK6oMCTdClctY%2BTYavoGVaNjBGEzpsEa7NTzjyOxkiO%2BrXMkDYU9LmNiQj8m9NID30UVKYy6At3zGaBRV23885zNZC6j1RiM%2FJWCScuw2lpC0OAr17UsZUV%2FcwYlXzKFSsmQZD02dvjCPevXx0xNuk4EmMy9zwI6V1wCEGGPUcYjsKzrusEXQ%2FjYkvZm2cZhFMhS1FngrmzE2oTz2NK0nTI%2BrQJNg8WA%2F0eMCHaXU8OoRHAy8c5Or0GLDnUZJeLdSjUlRijE1gITGGYDY674fx7Ttj97lN%2BY1d40FjY%2BiVBWf2aig0MtbKpQtVlZyNHrRls5a6PLxxjxDahuNmajm1GrAJzeOM7Fs9HrBTjvZOzVwUqFzMfH9dKlB6i%2Bxh5FQRggqk8ofhnhCUKvzszjKS%2BFFylR22txnogDz%2FPVsh3D2Kha5ka%2Fc0%2BhQTjpdzVmvLKf%2BVcdRbOnQfPm96v09GnhRv%2FPQe3mIkvYd%2BcvmCqKvRXqj0nZF3VBk7oV%2F6yIGrPKX3np9lEUNdv2BXNmFv531N4D%2B79bhB%2BjIR9O1zh4ztwvhBW8oW%2BY0wWTBWo7bZ45a4zsd1MA%2BRXb5JAfQT4W%2FVHQxDf8y62D%2FEJWroxulp%2BpUd2bMJOf1MkGOqUBU2EDeCPfebTuI3ylkoaOF50tg7ixM3COyoPzD0%2B31XNxVjvt4rf%2B9DJQG77m%2F7MPEkcL3CDDJVGEZzWh%2FqxBX3zWtQ7aGRgzgWSjIct3HZvzlqE0QtJxDjwdK%2BsgFzzdtcmxPUVt1QRzNjuDp4fVJt9ftYz7O26nCtu5g0HPevktGf%2BHvZHvM7n%2BCFtFG7DFFGmBvaqcTWZkZWgcCfWacy6hIpOt&X-Amz-Signature=6e813ca1d86cf320fee2330ccef3bfe211c7304fc849fe4445b9818b00d088b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W73DZ3OC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuw%2BCczkgMdsdbKuh0SbZ%2B6uBHm2AlXP6VHLSCkNpkKAiEA2rOFyJiWT2CWj%2F9GpS1x69obl1dvBspaX9Snht6y0jQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmRdh1UK6MmiYPULircA3KhuSV4RK6oMCTdClctY%2BTYavoGVaNjBGEzpsEa7NTzjyOxkiO%2BrXMkDYU9LmNiQj8m9NID30UVKYy6At3zGaBRV23885zNZC6j1RiM%2FJWCScuw2lpC0OAr17UsZUV%2FcwYlXzKFSsmQZD02dvjCPevXx0xNuk4EmMy9zwI6V1wCEGGPUcYjsKzrusEXQ%2FjYkvZm2cZhFMhS1FngrmzE2oTz2NK0nTI%2BrQJNg8WA%2F0eMCHaXU8OoRHAy8c5Or0GLDnUZJeLdSjUlRijE1gITGGYDY674fx7Ttj97lN%2BY1d40FjY%2BiVBWf2aig0MtbKpQtVlZyNHrRls5a6PLxxjxDahuNmajm1GrAJzeOM7Fs9HrBTjvZOzVwUqFzMfH9dKlB6i%2Bxh5FQRggqk8ofhnhCUKvzszjKS%2BFFylR22txnogDz%2FPVsh3D2Kha5ka%2Fc0%2BhQTjpdzVmvLKf%2BVcdRbOnQfPm96v09GnhRv%2FPQe3mIkvYd%2BcvmCqKvRXqj0nZF3VBk7oV%2F6yIGrPKX3np9lEUNdv2BXNmFv531N4D%2B79bhB%2BjIR9O1zh4ztwvhBW8oW%2BY0wWTBWo7bZ45a4zsd1MA%2BRXb5JAfQT4W%2FVHQxDf8y62D%2FEJWroxulp%2BpUd2bMJOf1MkGOqUBU2EDeCPfebTuI3ylkoaOF50tg7ixM3COyoPzD0%2B31XNxVjvt4rf%2B9DJQG77m%2F7MPEkcL3CDDJVGEZzWh%2FqxBX3zWtQ7aGRgzgWSjIct3HZvzlqE0QtJxDjwdK%2BsgFzzdtcmxPUVt1QRzNjuDp4fVJt9ftYz7O26nCtu5g0HPevktGf%2BHvZHvM7n%2BCFtFG7DFFGmBvaqcTWZkZWgcCfWacy6hIpOt&X-Amz-Signature=3a450548c5280458ed6799ba188e6937f5d323ddbe0360c21de8c2dfc9b429ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
