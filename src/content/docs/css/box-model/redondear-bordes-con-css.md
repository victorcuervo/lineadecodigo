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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKD7G4I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnSF1Pvi1hP19BRJ1UaHtbd0hGuqr0yVsk%2Fn0%2F%2FGmy5AiEA9BQjed7B6N3tPq1owAgsmewDeewp6BGatZJBv%2BxCTJEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKo2LgBgdAyOjWTKMircAysRIkIqk6i%2BfDVgRs%2BVnnvbOtIeh%2FBQnDE3GayJfC4TrP98i2xinjfamg4nuR1VJmdi548CXEszlh33q%2FsIlb0vfPkKSDuU%2FPizapshDlua1MLZfAkzd8AnosupGzmV6BmAbB1uic99XWe87S79M9RhXECnzvtiQVlHFbV8RiNEx7rN%2BdgfDEhs8dDNDd9Ta9aU84HOVpFsnYW8kuJ9KLaRX5LnFLZ0EZJ54bBDl8gavKMR6%2B7djiyAA9M7CT6lp%2BRnGWJf2J%2BHVt5MfFJnA%2B6BaXBskwYzRh79%2F1WHzjhV4%2BoSlzYlQYVOO3wSUOJu4ffg0Olnn6q%2BptzMRXWrq0POMzqqNGI%2BUuWVQaQoiAS7K1vs%2BiA7WfHKb9TlLd3YC7fmTOXAgyfwjpV%2B5CBibcvTTHu6wT6C9bDgVMTIFljp4YOcXZFFLt%2BTHxUlAHivFAD%2FnaPwlcpMgLwQUruRS3HALZ9K5uJhI0qAawJThDxBBAqxqwyOR8kjC9aeUTh4oEgmBgxy6pooDlNNC9%2FOJHxoftVjBMbdO1RrmU8ikEPjeckix5ioCGEtZznnbZ%2B%2FhPC7Gfdl3pmfexc6sZB%2BLsHSOC6shQ6pZY8S%2F3DcHhxF0NXkMkPJR84YBe9gMIjGisoGOqUBRLe1KaLCiUqYt25lFbep2mR%2BwdamrP2%2FIbP3vE5aDGwmGFYErP%2FySHqG0K0ch7Uf6DXDB2ngm2a9f97%2Bf5FaXVbtJp9aty428ZQEBCBf4JxYCpc8Z8XZ0Y6k0KXPkqAdgeaBjB5ZkPlQnxT36VmHE5%2FVM0zZhxRMiTQ6%2BZOy0AGzlVv4xcPtfNOCjEYGakbFFZMX5zxdsU6m6OZLOMpug5pGe6zK&X-Amz-Signature=2356825dd913e54c7d6f8b192f9bed0bed823a80da8de67f479e0afc6bea8087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKD7G4I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBnSF1Pvi1hP19BRJ1UaHtbd0hGuqr0yVsk%2Fn0%2F%2FGmy5AiEA9BQjed7B6N3tPq1owAgsmewDeewp6BGatZJBv%2BxCTJEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDKo2LgBgdAyOjWTKMircAysRIkIqk6i%2BfDVgRs%2BVnnvbOtIeh%2FBQnDE3GayJfC4TrP98i2xinjfamg4nuR1VJmdi548CXEszlh33q%2FsIlb0vfPkKSDuU%2FPizapshDlua1MLZfAkzd8AnosupGzmV6BmAbB1uic99XWe87S79M9RhXECnzvtiQVlHFbV8RiNEx7rN%2BdgfDEhs8dDNDd9Ta9aU84HOVpFsnYW8kuJ9KLaRX5LnFLZ0EZJ54bBDl8gavKMR6%2B7djiyAA9M7CT6lp%2BRnGWJf2J%2BHVt5MfFJnA%2B6BaXBskwYzRh79%2F1WHzjhV4%2BoSlzYlQYVOO3wSUOJu4ffg0Olnn6q%2BptzMRXWrq0POMzqqNGI%2BUuWVQaQoiAS7K1vs%2BiA7WfHKb9TlLd3YC7fmTOXAgyfwjpV%2B5CBibcvTTHu6wT6C9bDgVMTIFljp4YOcXZFFLt%2BTHxUlAHivFAD%2FnaPwlcpMgLwQUruRS3HALZ9K5uJhI0qAawJThDxBBAqxqwyOR8kjC9aeUTh4oEgmBgxy6pooDlNNC9%2FOJHxoftVjBMbdO1RrmU8ikEPjeckix5ioCGEtZznnbZ%2B%2FhPC7Gfdl3pmfexc6sZB%2BLsHSOC6shQ6pZY8S%2F3DcHhxF0NXkMkPJR84YBe9gMIjGisoGOqUBRLe1KaLCiUqYt25lFbep2mR%2BwdamrP2%2FIbP3vE5aDGwmGFYErP%2FySHqG0K0ch7Uf6DXDB2ngm2a9f97%2Bf5FaXVbtJp9aty428ZQEBCBf4JxYCpc8Z8XZ0Y6k0KXPkqAdgeaBjB5ZkPlQnxT36VmHE5%2FVM0zZhxRMiTQ6%2BZOy0AGzlVv4xcPtfNOCjEYGakbFFZMX5zxdsU6m6OZLOMpug5pGe6zK&X-Amz-Signature=5cf692f9b6aa7b449acdeef0400f76ac608b00965b723ea0103928931a7fb3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
