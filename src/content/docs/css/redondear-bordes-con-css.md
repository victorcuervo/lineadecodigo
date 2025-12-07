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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJFZBTQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLNo44H42EUULx%2BVygrgoSzSSyuvH2hk8RbElMnM%2F3EAiEAmOavkgdLBDVYM3dhixG1AbQmUWalR%2FmWP%2FD%2FOyn%2FY4UqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKgPy0zX4dtQR8BkSrcA650GzE4vQIFM3LGo6QoDy6gF1KHCLLw8xiOi4xZVbgnp5ku332QG5VM%2B4AlVuJMqqaSUnJa3UitM5FP7obvUMYhsCLfTcpg0aN0cwwunVoOu19hj6wg9zHxOVNzC%2FjlV0EMopcmrQzMebNMOaIB48jC10kI3MAIkw8%2FuiK1%2FriDVhNH7J1FpBklICvljuTY76vc1k8bsT5I%2FB5YNYucy1Kx83eS2LC83AAgwHtNCuE4inhRO1%2B4qWfkLQCsiUiQBR7OC8KbuALQzLo2xtQpSuFCae2Ziq2bw6MM3OfzsY2AFS770rEIkWwX5v8%2FewXhFV1oLwrGMUS5Zo7fHkSplfW6lOVMInpUcU6FT5DX8DiGToCi6D4w7eM%2B52lfp4Mycw6xWZQePqtRD1W6epm7c%2FXWPrgKcYRQMRnG8liC2w3n3McQw62%2FCUqTtmBJDNUrsLIfm9MYaPANdrMj96w37G5u1Jq9cmiNta6xJPT71EW59a7xP5Gig%2FyaHV1%2FsBVbtxdx%2FJPbu7y%2BPK4G6FlYG8ywCpg4ksadFbBUhjK5RysJFHA4kEghbzO0u%2BibU%2BUuISb%2FzJ%2BNfFlUHwHAzPCmRt4hM7YdWiPK7vpe3NYCnwDejwHQzGer7xXFfdbHML6a1ckGOqUBkO63S2cHp%2BvQH6MypQP%2B%2BWIeEjm02jVootqvQcKw3y8OpieCG33GK9hRNShgRe%2Bo5OLgOTdxSm6L7dPzWC8MvVZ8F%2FvnwxvpL4W8LMH%2F4Sx%2F2RATC1Wqwg0ObbXdTFrXSzNGVuTURfZDpwkL6RSgysD8O32xy7oEqQFf9j1iYZpO3A%2BJEI3BXBConynfBjB3jxuCZIMqUD3HC%2F%2FRnskH31pHbKa6&X-Amz-Signature=68221cccbd9c9cad068ec49ac2c619d6dd7a718f9cdfcf34442eb190142aded7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJFZBTQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T134854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLNo44H42EUULx%2BVygrgoSzSSyuvH2hk8RbElMnM%2F3EAiEAmOavkgdLBDVYM3dhixG1AbQmUWalR%2FmWP%2FD%2FOyn%2FY4UqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKgPy0zX4dtQR8BkSrcA650GzE4vQIFM3LGo6QoDy6gF1KHCLLw8xiOi4xZVbgnp5ku332QG5VM%2B4AlVuJMqqaSUnJa3UitM5FP7obvUMYhsCLfTcpg0aN0cwwunVoOu19hj6wg9zHxOVNzC%2FjlV0EMopcmrQzMebNMOaIB48jC10kI3MAIkw8%2FuiK1%2FriDVhNH7J1FpBklICvljuTY76vc1k8bsT5I%2FB5YNYucy1Kx83eS2LC83AAgwHtNCuE4inhRO1%2B4qWfkLQCsiUiQBR7OC8KbuALQzLo2xtQpSuFCae2Ziq2bw6MM3OfzsY2AFS770rEIkWwX5v8%2FewXhFV1oLwrGMUS5Zo7fHkSplfW6lOVMInpUcU6FT5DX8DiGToCi6D4w7eM%2B52lfp4Mycw6xWZQePqtRD1W6epm7c%2FXWPrgKcYRQMRnG8liC2w3n3McQw62%2FCUqTtmBJDNUrsLIfm9MYaPANdrMj96w37G5u1Jq9cmiNta6xJPT71EW59a7xP5Gig%2FyaHV1%2FsBVbtxdx%2FJPbu7y%2BPK4G6FlYG8ywCpg4ksadFbBUhjK5RysJFHA4kEghbzO0u%2BibU%2BUuISb%2FzJ%2BNfFlUHwHAzPCmRt4hM7YdWiPK7vpe3NYCnwDejwHQzGer7xXFfdbHML6a1ckGOqUBkO63S2cHp%2BvQH6MypQP%2B%2BWIeEjm02jVootqvQcKw3y8OpieCG33GK9hRNShgRe%2Bo5OLgOTdxSm6L7dPzWC8MvVZ8F%2FvnwxvpL4W8LMH%2F4Sx%2F2RATC1Wqwg0ObbXdTFrXSzNGVuTURfZDpwkL6RSgysD8O32xy7oEqQFf9j1iYZpO3A%2BJEI3BXBConynfBjB3jxuCZIMqUD3HC%2F%2FRnskH31pHbKa6&X-Amz-Signature=6374aa9d3ead1815ad49d3a44f462fb85630d30de2f5757727714b7bafb1933c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
