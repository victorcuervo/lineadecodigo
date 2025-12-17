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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOCPC4XH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpAAsdnB%2Fo4Usfqggd9j8viqXFyXTW%2FofHykQyQtiCMQIgX%2Bxrs4AJ08hMb2M68yj7X8FziN1bjUiWp8zLOgd8zRAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD%2Fba2OOyFKBSY7uZCrcA89GUPQXJw4Uh83QO8biQ76r4fkBYaen7OGGrsAW449PgfJcCk%2FmrtuMQ1381DrSn1KTgQynw8xeBsF08Jfd08Qxg4vFvwz9im%2FbGObhvI8rTLtjUmMlbvfHklp%2FnVFzpgET0RShLZKxmuKpghGXjqQt0Ts6ryIdQsrhEHAc2ODejvdDJX9n2GjOB0PmFf%2BbXYnxbi7igP2Mmo%2FE8H1eg1UYVpEhqpH%2B7eRdsQLg9doJbwSdWPS07Ndg9wxA49kh73zhAWxNG9gyhnnWWZkmqSY0xj5JSjMt7kAvjVW85PdsiB2UfOVteiHkO3kZDkr6mTnrEGhZnLVH63l1mQ26ilfbG%2B5Nyq3XUmAg67ZQ9EqPX3nRoxsXxCwo8c5czLtkxVOAX8xKauCo0Fex6EOMIlw3AeQAdS3HSjW3d%2BpCPwR3992q2B0imkylToLNnZZ5iy05gKP9L0cwi9Ls04GnWMxVvPYxNsYrn3uoVfj6LC1baLkgg%2BFHY6faFGzJggqFbakaxsO3d5LSJuFd3XFbIdyQybKFDCRLj64ckil2PcDXN698HwlmSEIRTLPoTgLe1nXebpagXo%2F5PYqf0aRl2pQYtAl4pFPCBsd4RQWwyxSApzHxPQROoOel75z8MJjOiMoGOqUBJaMBiMzST0NFpTRlbsOBIQjORAO6oUGJXHns1k5i2WBLjlu0UyJu2pp3BUtOmtrPqYk6vCkNxk0AkInJiMkbVmaLoB7sjyuz7CQjA6oP3lCyI8xN9ipjM4TiGfbReMScV23PpCh%2B%2BPaHH18yc9aYQZknKrwOmfH%2BcIme6jXibGwMyQWi7O0uavcZQrjs0gJNvXODjCL1xLKj0J26xBvry3aeBrvj&X-Amz-Signature=981e0136c81b8e698ae1152bb8b42e2616cb175221513e737313c45874d7c063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOCPC4XH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpAAsdnB%2Fo4Usfqggd9j8viqXFyXTW%2FofHykQyQtiCMQIgX%2Bxrs4AJ08hMb2M68yj7X8FziN1bjUiWp8zLOgd8zRAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDD%2Fba2OOyFKBSY7uZCrcA89GUPQXJw4Uh83QO8biQ76r4fkBYaen7OGGrsAW449PgfJcCk%2FmrtuMQ1381DrSn1KTgQynw8xeBsF08Jfd08Qxg4vFvwz9im%2FbGObhvI8rTLtjUmMlbvfHklp%2FnVFzpgET0RShLZKxmuKpghGXjqQt0Ts6ryIdQsrhEHAc2ODejvdDJX9n2GjOB0PmFf%2BbXYnxbi7igP2Mmo%2FE8H1eg1UYVpEhqpH%2B7eRdsQLg9doJbwSdWPS07Ndg9wxA49kh73zhAWxNG9gyhnnWWZkmqSY0xj5JSjMt7kAvjVW85PdsiB2UfOVteiHkO3kZDkr6mTnrEGhZnLVH63l1mQ26ilfbG%2B5Nyq3XUmAg67ZQ9EqPX3nRoxsXxCwo8c5czLtkxVOAX8xKauCo0Fex6EOMIlw3AeQAdS3HSjW3d%2BpCPwR3992q2B0imkylToLNnZZ5iy05gKP9L0cwi9Ls04GnWMxVvPYxNsYrn3uoVfj6LC1baLkgg%2BFHY6faFGzJggqFbakaxsO3d5LSJuFd3XFbIdyQybKFDCRLj64ckil2PcDXN698HwlmSEIRTLPoTgLe1nXebpagXo%2F5PYqf0aRl2pQYtAl4pFPCBsd4RQWwyxSApzHxPQROoOel75z8MJjOiMoGOqUBJaMBiMzST0NFpTRlbsOBIQjORAO6oUGJXHns1k5i2WBLjlu0UyJu2pp3BUtOmtrPqYk6vCkNxk0AkInJiMkbVmaLoB7sjyuz7CQjA6oP3lCyI8xN9ipjM4TiGfbReMScV23PpCh%2B%2BPaHH18yc9aYQZknKrwOmfH%2BcIme6jXibGwMyQWi7O0uavcZQrjs0gJNvXODjCL1xLKj0J26xBvry3aeBrvj&X-Amz-Signature=f7d613b97417e4e884425d0885adf3ef89c2aecf8ab7b69697a5257ff82186fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
