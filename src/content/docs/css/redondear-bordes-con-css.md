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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPO77ZS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk%2B5PwAVDCFQel2dTBkwDBuwNTTvwnn0AoZvZKgQOVfQIhAL5s4WyO5%2FSdS9S7UDIlZmj28GLNJ3Qxx3Gqzfqh3TpiKv8DCHEQABoMNjM3NDIzMTgzODA1IgynlPXMOHbVyD7re1Eq3ANTyHb%2FaJPtLeTzXS7CCrNwv4uuPdFWCxCBAABbMkQ7b1jCkbGxo%2FEpXTWbwVqv2fs7EWflFCoXaOvxUNmHJbR3nUpdDChvb2TaLLCa56swHM2SmJlSd6zjTuka91VKFWBX8tq93tlS0x5rlGf%2BirXGGJITPmoptb1UjKtxcv%2BjXkcvHN1QWMESKi4o6DP%2F7fx7HiFDmGygESf0MnivR8jqX3PP1Qxf6Wk6e4Yjv3kmARM%2FA4gqQGuWqbDES2PT0uJtxwRLDvYC1E8AjcC03g69H61OrAZ6yZB%2BlMai87cVKzWdbrj9ETo4vYMzTTCMXcfmKJdlaosPR%2F%2Fuam%2FAUvDbgtz9R%2BdIyNuT5wOYbqc2BryNc6I9dcOYg9ibmm3SOcnN3DVQjVcAwtTWyzaz73jZ91y9kqPpKGXeZo4x%2F6hwtFjLIB9EMndcpUhgAWe%2B5S370HIzf9ePFlY9alitaIqHuXXD1HDzG%2FOuT%2Bzt4ssvSulhBH7mnpDxL6Gr%2F%2FU3JUP5LA5T5wqXB5y40kx2FSm%2BGP0Q4dfiYq%2By%2BB3VdbrmJHh5paPSdIzZwXc5JaBnvKh%2Fm6rEM0JC%2FtjcuIgqCQPDlQlXLesiaAu%2FkknHIoPtvoSRgG32Eg%2Bpijz9hDDIvM%2FJBjqkAYUeFe9yiMfJiVkvbojQY0hK3CY6KRJrEB1IMQAwTWj5%2FbqrGXguN152%2Flt2oRD5X6s4kefL8hrGjzJYZOqL%2FHSqkFerLOBBsyl0tbAHxrV7ia8M51G2Ktp68sEnH0%2BTk7Oq3GrL%2FJgXMHHAO1KkY%2FZDLM8y6RCWR3NFsynjFkW9aGJfAv5FdBOnlZIJc4cfs70Jn7lxvezc2VAPRocT3kvFe6dS&X-Amz-Signature=78fca26c26d04be8cbf99029acdde0f11c53020c7525d2a240348fb4368143cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPO77ZS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk%2B5PwAVDCFQel2dTBkwDBuwNTTvwnn0AoZvZKgQOVfQIhAL5s4WyO5%2FSdS9S7UDIlZmj28GLNJ3Qxx3Gqzfqh3TpiKv8DCHEQABoMNjM3NDIzMTgzODA1IgynlPXMOHbVyD7re1Eq3ANTyHb%2FaJPtLeTzXS7CCrNwv4uuPdFWCxCBAABbMkQ7b1jCkbGxo%2FEpXTWbwVqv2fs7EWflFCoXaOvxUNmHJbR3nUpdDChvb2TaLLCa56swHM2SmJlSd6zjTuka91VKFWBX8tq93tlS0x5rlGf%2BirXGGJITPmoptb1UjKtxcv%2BjXkcvHN1QWMESKi4o6DP%2F7fx7HiFDmGygESf0MnivR8jqX3PP1Qxf6Wk6e4Yjv3kmARM%2FA4gqQGuWqbDES2PT0uJtxwRLDvYC1E8AjcC03g69H61OrAZ6yZB%2BlMai87cVKzWdbrj9ETo4vYMzTTCMXcfmKJdlaosPR%2F%2Fuam%2FAUvDbgtz9R%2BdIyNuT5wOYbqc2BryNc6I9dcOYg9ibmm3SOcnN3DVQjVcAwtTWyzaz73jZ91y9kqPpKGXeZo4x%2F6hwtFjLIB9EMndcpUhgAWe%2B5S370HIzf9ePFlY9alitaIqHuXXD1HDzG%2FOuT%2Bzt4ssvSulhBH7mnpDxL6Gr%2F%2FU3JUP5LA5T5wqXB5y40kx2FSm%2BGP0Q4dfiYq%2By%2BB3VdbrmJHh5paPSdIzZwXc5JaBnvKh%2Fm6rEM0JC%2FtjcuIgqCQPDlQlXLesiaAu%2FkknHIoPtvoSRgG32Eg%2Bpijz9hDDIvM%2FJBjqkAYUeFe9yiMfJiVkvbojQY0hK3CY6KRJrEB1IMQAwTWj5%2FbqrGXguN152%2Flt2oRD5X6s4kefL8hrGjzJYZOqL%2FHSqkFerLOBBsyl0tbAHxrV7ia8M51G2Ktp68sEnH0%2BTk7Oq3GrL%2FJgXMHHAO1KkY%2FZDLM8y6RCWR3NFsynjFkW9aGJfAv5FdBOnlZIJc4cfs70Jn7lxvezc2VAPRocT3kvFe6dS&X-Amz-Signature=5ef985b64a9fe099f3d13336b181a91459dd0af669bb723e5d953db431c5eb32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
