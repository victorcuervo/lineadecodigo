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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYUZ7STS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo4ShfsqiXmj14NT8BY5NL3fdvL5ktlWcjMgNNDvwOOgIgGE%2FQw6IqzXdlYNp0t7%2FP08Cw9t3V6Fb5svT3k%2Flh4jsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLIUs4u%2F9rJYo3ySKSrcAwHPmf7Y4ZPzO0g2G%2ByBcwJtwIC8KV6Wanb%2FWCeLcjisHGHH0iq5XcjrW3iI0hfdwjSznbpwr5100qTjpxMi43wLmNTZO4Nkd3fRs4bGk8kTjyweVsZ62fRE%2BcynX9UoYt%2F%2FRnsM29d3UEYV3ElLTMVxysGjzkYJ5CRQK2DnBajSCj3JFe2NDhfKcrElo4y0ZxBy9Jt%2FIifENs0t63NIF7W7c%2BW1efBZr7ONdrvl871R0KFNNZT45FSLAEcOS33bC85GnbQArJoOhQdFllFD0n7kDVfId8wcCjbhQkRNkODypUP%2BPZUGIPuZnIhaFtL%2BWQvcDbzDh8ThL3Toe86oMv4ummxOrFAToE%2FrPkx11wy0UwO5QwucgVIt5jtQ6vV%2FRDg8hx4QYlaVtWysBXE8YHeplo4uZ9Uvbq%2FdM3YyzlUL0buF9ThurTF3rDpagMQ6%2BbueqyavNOiVgQiuTyhraZnT6e5st2CDQZW33zg46PtkGx2JgW4m5yRKfL6WueVCzDEdcwPUxSxSMW7IJ2lwoRj%2FFwdvGZ1agk4PbJwNhOWhduxZ6cFA%2FBGwVZ3wzibkD06hA37P2YugmkIyVSfA%2FCGgKmpZZge2bdq7oIdKD9%2F1Ieweg7FDyusrhgLoMLCmyckGOqUB064KHwnHc430N3QXOHA9f2Gt2XsM%2Bj4Wao80d9uf0xUUZKkNmNfV9fp%2FA6AUJcUTO1E7s%2BdzsUmJz5lHbgSwEfviaSCF3%2B5mNU4uIjdad8SxJkpk3TZL9pUwglTWJavjEVySKplLWWMsop3wRbv0N%2FIo%2Fydz5OlR601k7UTlS7XR%2FXVm%2FbJjVPIOxMKJrPQ3cBn1MBQNhegHyMz5Caa9%2F1jqTLE3&X-Amz-Signature=a3a0c6cb00b04aa554087103dcce0d061d4681cb0f8f5ad01c883d518a21474c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYUZ7STS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T071751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo4ShfsqiXmj14NT8BY5NL3fdvL5ktlWcjMgNNDvwOOgIgGE%2FQw6IqzXdlYNp0t7%2FP08Cw9t3V6Fb5svT3k%2Flh4jsq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLIUs4u%2F9rJYo3ySKSrcAwHPmf7Y4ZPzO0g2G%2ByBcwJtwIC8KV6Wanb%2FWCeLcjisHGHH0iq5XcjrW3iI0hfdwjSznbpwr5100qTjpxMi43wLmNTZO4Nkd3fRs4bGk8kTjyweVsZ62fRE%2BcynX9UoYt%2F%2FRnsM29d3UEYV3ElLTMVxysGjzkYJ5CRQK2DnBajSCj3JFe2NDhfKcrElo4y0ZxBy9Jt%2FIifENs0t63NIF7W7c%2BW1efBZr7ONdrvl871R0KFNNZT45FSLAEcOS33bC85GnbQArJoOhQdFllFD0n7kDVfId8wcCjbhQkRNkODypUP%2BPZUGIPuZnIhaFtL%2BWQvcDbzDh8ThL3Toe86oMv4ummxOrFAToE%2FrPkx11wy0UwO5QwucgVIt5jtQ6vV%2FRDg8hx4QYlaVtWysBXE8YHeplo4uZ9Uvbq%2FdM3YyzlUL0buF9ThurTF3rDpagMQ6%2BbueqyavNOiVgQiuTyhraZnT6e5st2CDQZW33zg46PtkGx2JgW4m5yRKfL6WueVCzDEdcwPUxSxSMW7IJ2lwoRj%2FFwdvGZ1agk4PbJwNhOWhduxZ6cFA%2FBGwVZ3wzibkD06hA37P2YugmkIyVSfA%2FCGgKmpZZge2bdq7oIdKD9%2F1Ieweg7FDyusrhgLoMLCmyckGOqUB064KHwnHc430N3QXOHA9f2Gt2XsM%2Bj4Wao80d9uf0xUUZKkNmNfV9fp%2FA6AUJcUTO1E7s%2BdzsUmJz5lHbgSwEfviaSCF3%2B5mNU4uIjdad8SxJkpk3TZL9pUwglTWJavjEVySKplLWWMsop3wRbv0N%2FIo%2Fydz5OlR601k7UTlS7XR%2FXVm%2FbJjVPIOxMKJrPQ3cBn1MBQNhegHyMz5Caa9%2F1jqTLE3&X-Amz-Signature=073777bf34c325af411486fa5caf89299d333395e1ce53950a217b0bc8ec6ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
