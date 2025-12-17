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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXVQZX4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT2hkFcaN0tbbmp05Sj6YbFsuAWO7jIau%2F9cS4T8ieaAiAy2jybntZB2WISnq68q%2B2ukDvTdOnveoa2rthXVmYehCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPqp8RjSo2Wa9GMknKtwDHb6Gr5ZYyMNbltKBmCGh6yLv4qygFasfqSLhwPNnzkNATCdESbCEw2UNg7F8pQYQGctM0B%2FLjI%2BrpUEs6fablrThokN7pyOT%2FqcC5hddkVae0Qb6v26AmQBfvlIROOC07TDBcsCV4ozkyH29qZzKwg0NgjHYJvStyISiZZC6K1rCuYJQ2ar0OAJrL3p6D6PF4oZ8dfk%2FPoCbgAqacvRCcNBxpg%2FJhK9KTW7zbh79o84rxJiim4aGufpeqKZKJ8u4FOPUjV9PbMxV7UJPWTStm01TfNpZg2ax8y5bYzu%2ByTZCXvdQV3gLusLvfuIU1QVfG4bulRIMgpXlB7sQg1Un%2B7olv0wrAMUNnAXoPck8Tz5sZEMrddK3wTEPI6ql9%2FJnDM846ouKyzAyLh%2BfNjDSdCt52hjQNiardOPo3tRv8IqaJQwt4DR9vyerc1PaqYPFSOd9yMFkNvatroiUAsk7d%2BD5vUhbQtY1SDBjNvdjibVtzAL2pbrPqFXYrh92CxL9zimx06As6cTvO4ih0mSb80Uu613r%2F9X4QoKJjSuT9QA%2FO%2FED0Xj%2BuylZEAFTE8DnJAP1R%2Ftt2UbwnMzWKpnz9H6gbe1DG5x%2FKPJy6tVWgKktd6XL91Z5mlRBt9Qw7PGJygY6pgHVm3bEQmIjc%2F3bFVBNWcc8r%2FkxIqpXPKBXzCiDgo84p1J5ZawwPv%2BfWmB87Uv7hPVkEvWo42bhjPUkUBTS%2FyqjhacXcIefrkm9lFjreJIEc5bHwRRDlCe8j4lcZg8PfocCK4DQ6lCQ0m4TYtkmIGs1Rxjfc9tEtK4BNKRm5ftIpUdcAYFexWzGvTR4URn%2B3ufaqKfXyo8JUkmlkGnQlkF0tmkilKmw&X-Amz-Signature=4d0ab93d0808f4222ca3924ab73faaadc26368d2d895dd64da93fb233ebdfcf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTXVQZX4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGT2hkFcaN0tbbmp05Sj6YbFsuAWO7jIau%2F9cS4T8ieaAiAy2jybntZB2WISnq68q%2B2ukDvTdOnveoa2rthXVmYehCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMPqp8RjSo2Wa9GMknKtwDHb6Gr5ZYyMNbltKBmCGh6yLv4qygFasfqSLhwPNnzkNATCdESbCEw2UNg7F8pQYQGctM0B%2FLjI%2BrpUEs6fablrThokN7pyOT%2FqcC5hddkVae0Qb6v26AmQBfvlIROOC07TDBcsCV4ozkyH29qZzKwg0NgjHYJvStyISiZZC6K1rCuYJQ2ar0OAJrL3p6D6PF4oZ8dfk%2FPoCbgAqacvRCcNBxpg%2FJhK9KTW7zbh79o84rxJiim4aGufpeqKZKJ8u4FOPUjV9PbMxV7UJPWTStm01TfNpZg2ax8y5bYzu%2ByTZCXvdQV3gLusLvfuIU1QVfG4bulRIMgpXlB7sQg1Un%2B7olv0wrAMUNnAXoPck8Tz5sZEMrddK3wTEPI6ql9%2FJnDM846ouKyzAyLh%2BfNjDSdCt52hjQNiardOPo3tRv8IqaJQwt4DR9vyerc1PaqYPFSOd9yMFkNvatroiUAsk7d%2BD5vUhbQtY1SDBjNvdjibVtzAL2pbrPqFXYrh92CxL9zimx06As6cTvO4ih0mSb80Uu613r%2F9X4QoKJjSuT9QA%2FO%2FED0Xj%2BuylZEAFTE8DnJAP1R%2Ftt2UbwnMzWKpnz9H6gbe1DG5x%2FKPJy6tVWgKktd6XL91Z5mlRBt9Qw7PGJygY6pgHVm3bEQmIjc%2F3bFVBNWcc8r%2FkxIqpXPKBXzCiDgo84p1J5ZawwPv%2BfWmB87Uv7hPVkEvWo42bhjPUkUBTS%2FyqjhacXcIefrkm9lFjreJIEc5bHwRRDlCe8j4lcZg8PfocCK4DQ6lCQ0m4TYtkmIGs1Rxjfc9tEtK4BNKRm5ftIpUdcAYFexWzGvTR4URn%2B3ufaqKfXyo8JUkmlkGnQlkF0tmkilKmw&X-Amz-Signature=3695e224455a4fccb8a97ee70cd41249c694b857c069d1d86e90a33c57286657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
