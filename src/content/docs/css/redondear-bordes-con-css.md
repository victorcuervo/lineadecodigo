---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627TTGMZT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDdyKwjOFYGBqSoxWE9k0sbnavBa3zDgRupYFyIXEpG1AiAUsFBxr3KvlXZZOc0rWDpvB%2BUycA6eIcYGryVlUiZbdSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMxmN9hL717Gh8G0wLKtwDP56uBv9liAz5%2FsIPudKRszg2Yh5n0yfViR4RFaNWt%2FWH9zIZeEcs5OvPQMpmFjgajk1pZTmMcdvtTqI31VJV8lYD%2BVmWaBKTiNvR4bec6f%2BfR3dbHLBgYeuwKe01uCvw3Fc1D%2F4uC3DaYlq8o%2B%2Bw3pQNE5rv%2BpBLiLg8icGG4Z1%2BB%2FuTAbi2v3J2JeUIudg5upvI5gY3mS4G9uIBTmPvqKhMnZjyeG18yWfUMgWbmMjcCk2RF9NSLg8Ny1AoLWEmewNaP%2FXNvbb3k8p2f2M5uqgcuw%2B0MNzhffuqdL%2BPXH8LA3q%2BLupf51CNvfgIeroB9l7%2F1qH5ucSkyxKDTKzcAMkkXKIWdU4P3T4%2F%2BsOFkdSMx8BuOlHZ05nIJ%2F5v5RPQJWNFFyCECK5gm18QKDTe8iBsW8LkTeK2dbScstuJt5HJBXzMjITeqD0XFNsrGd2ajWa66BM%2FUNXxBu7K%2F1vJMffYYZ1C0UeHRTiJNetFb4i1Sq671oxPqJqIwMpYk7fuT34q0dY5VsDiCdXIr3rlh7pMAXlsorWCXDwVi0RvUgYlbcIM0uRjmUm5j8UiO%2FXRIQljYGsM5IDT3jPbfp3Q763zQ2Rmb8VfBOxkC0dkSrGHySJKbrVmoCzmeJ8wqdTDyQY6pgEQbmGTCASsBlZTkB1EPpUEuKJXTvREAk%2BNq4ceEXzrRUzry4hVQ%2BhZUOvYHDWmjrN3mW30UtphDQKAXuvSREesaOxA5CmL1BC2blhT2jZfQ4Ms1X8L1vNywD2SL1fcgSNGCFtWnd4JhlPlkL0f4gqD7p1pPrOj%2BemHMuf4ReA4LBmjbdirjUU%2BrnYv9b6ZBKOM9B7jSk9fe8kYHal9h%2Fj%2FDbsJn50b&X-Amz-Signature=e73c46c534f6a0b0cb144b83d42114da3081af873e95b9718cd0853dddf57361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627TTGMZT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDdyKwjOFYGBqSoxWE9k0sbnavBa3zDgRupYFyIXEpG1AiAUsFBxr3KvlXZZOc0rWDpvB%2BUycA6eIcYGryVlUiZbdSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMxmN9hL717Gh8G0wLKtwDP56uBv9liAz5%2FsIPudKRszg2Yh5n0yfViR4RFaNWt%2FWH9zIZeEcs5OvPQMpmFjgajk1pZTmMcdvtTqI31VJV8lYD%2BVmWaBKTiNvR4bec6f%2BfR3dbHLBgYeuwKe01uCvw3Fc1D%2F4uC3DaYlq8o%2B%2Bw3pQNE5rv%2BpBLiLg8icGG4Z1%2BB%2FuTAbi2v3J2JeUIudg5upvI5gY3mS4G9uIBTmPvqKhMnZjyeG18yWfUMgWbmMjcCk2RF9NSLg8Ny1AoLWEmewNaP%2FXNvbb3k8p2f2M5uqgcuw%2B0MNzhffuqdL%2BPXH8LA3q%2BLupf51CNvfgIeroB9l7%2F1qH5ucSkyxKDTKzcAMkkXKIWdU4P3T4%2F%2BsOFkdSMx8BuOlHZ05nIJ%2F5v5RPQJWNFFyCECK5gm18QKDTe8iBsW8LkTeK2dbScstuJt5HJBXzMjITeqD0XFNsrGd2ajWa66BM%2FUNXxBu7K%2F1vJMffYYZ1C0UeHRTiJNetFb4i1Sq671oxPqJqIwMpYk7fuT34q0dY5VsDiCdXIr3rlh7pMAXlsorWCXDwVi0RvUgYlbcIM0uRjmUm5j8UiO%2FXRIQljYGsM5IDT3jPbfp3Q763zQ2Rmb8VfBOxkC0dkSrGHySJKbrVmoCzmeJ8wqdTDyQY6pgEQbmGTCASsBlZTkB1EPpUEuKJXTvREAk%2BNq4ceEXzrRUzry4hVQ%2BhZUOvYHDWmjrN3mW30UtphDQKAXuvSREesaOxA5CmL1BC2blhT2jZfQ4Ms1X8L1vNywD2SL1fcgSNGCFtWnd4JhlPlkL0f4gqD7p1pPrOj%2BemHMuf4ReA4LBmjbdirjUU%2BrnYv9b6ZBKOM9B7jSk9fe8kYHal9h%2Fj%2FDbsJn50b&X-Amz-Signature=e2404eaa14678b656a9009554d08868f9d600be575818060cee7af9bd24b30fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
