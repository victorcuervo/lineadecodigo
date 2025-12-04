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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIWS6GC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCe%2FFqeKVikyqgB9IQiP6k3IaGlIJd2wtKQZW4LPLTOMgIhAMdWrilqsPQlLVTgHalGzxws2hQG1M3I0AuYH4a5RVQhKv8DCDkQABoMNjM3NDIzMTgzODA1Igzbktx4c0jHNCGamw0q3AMwIkAJpaG7VjwZAgymT1SC7EBqrcddMCUwWjQQ5dS0K6wXJC0csGa6qRx3X8gVKp7YtM%2BZ3xIMD4ZzgZ2EaDmhCIzeXEQPg%2BEFrmGvBRSvF2EJlWGIb2n542irwIAiYtxFz8hfpPo%2Ft5kJnGkAplR8lghQiiLnBz3W%2FJZzgZh09hSCP0TnyYKlfp91fEIrTah7aINVwwX7JFtscikbiZts3WGN7Hso621KwoeZJMgY9oUTwt067dOFW8JZxoq1TTb6g%2FMIPYlGsG1m%2Bd7cQyK%2FZEROXdkwf%2Bp0sc2VDlVbOIIfBBh69Qj46T%2FZtWUNO6EgTgmenMb9lmQzHRNrHjsFnnzrWm6CtnkI5A770UPvzR3iEtx1FLI151oOpP07b0%2BuXVXd7WTycZmMZBoKs3uETHbAotxt1VGrQAhgfkkZJN7GLtRZ4%2FkrjU9FBViEaZAhkZMiwFhQY3fRIP%2FOjnvDgYBiMT9lZHdsaWegnphjpdTGIwtplNFVT6moFldPn0Yve7tPXPdGHDL9c91CRYC2s62BfjXILKldwK1Fb4tNPWBPlNbCDH8FmHx4Mny40iSZHNnkypdM1R5xErfBc3woSWIeI%2FYSfezLZLPIbS9%2FU4%2BebdqF7wHJFdgw%2BzD%2FlMPJBjqkAY8LtcuMJGrYdktxBMAVII%2BFVM1adzELFap2I4V610EHD54MsvPpM38oV96lw9mGjE9ozwn6ti8qzDIJLzH0iyUh%2FcJOWkhIv%2Bp1FdT80eV7lIKdt6TrfHTFWaLSuZiwwznaQ8lmcaLXNgXWLO44SnZh2kYBs1W0wE4%2BJPhtU5WvcCGzRS0KlrYuAI7%2FB7OvHoiiLsG7p3rZJWGUXg03PG1F5ipE&X-Amz-Signature=f896c2c6f9e8fbbe5042773a1b09e5f27b3d5e1ba3e50f1b3623059c36989930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AIWS6GC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCe%2FFqeKVikyqgB9IQiP6k3IaGlIJd2wtKQZW4LPLTOMgIhAMdWrilqsPQlLVTgHalGzxws2hQG1M3I0AuYH4a5RVQhKv8DCDkQABoMNjM3NDIzMTgzODA1Igzbktx4c0jHNCGamw0q3AMwIkAJpaG7VjwZAgymT1SC7EBqrcddMCUwWjQQ5dS0K6wXJC0csGa6qRx3X8gVKp7YtM%2BZ3xIMD4ZzgZ2EaDmhCIzeXEQPg%2BEFrmGvBRSvF2EJlWGIb2n542irwIAiYtxFz8hfpPo%2Ft5kJnGkAplR8lghQiiLnBz3W%2FJZzgZh09hSCP0TnyYKlfp91fEIrTah7aINVwwX7JFtscikbiZts3WGN7Hso621KwoeZJMgY9oUTwt067dOFW8JZxoq1TTb6g%2FMIPYlGsG1m%2Bd7cQyK%2FZEROXdkwf%2Bp0sc2VDlVbOIIfBBh69Qj46T%2FZtWUNO6EgTgmenMb9lmQzHRNrHjsFnnzrWm6CtnkI5A770UPvzR3iEtx1FLI151oOpP07b0%2BuXVXd7WTycZmMZBoKs3uETHbAotxt1VGrQAhgfkkZJN7GLtRZ4%2FkrjU9FBViEaZAhkZMiwFhQY3fRIP%2FOjnvDgYBiMT9lZHdsaWegnphjpdTGIwtplNFVT6moFldPn0Yve7tPXPdGHDL9c91CRYC2s62BfjXILKldwK1Fb4tNPWBPlNbCDH8FmHx4Mny40iSZHNnkypdM1R5xErfBc3woSWIeI%2FYSfezLZLPIbS9%2FU4%2BebdqF7wHJFdgw%2BzD%2FlMPJBjqkAY8LtcuMJGrYdktxBMAVII%2BFVM1adzELFap2I4V610EHD54MsvPpM38oV96lw9mGjE9ozwn6ti8qzDIJLzH0iyUh%2FcJOWkhIv%2Bp1FdT80eV7lIKdt6TrfHTFWaLSuZiwwznaQ8lmcaLXNgXWLO44SnZh2kYBs1W0wE4%2BJPhtU5WvcCGzRS0KlrYuAI7%2FB7OvHoiiLsG7p3rZJWGUXg03PG1F5ipE&X-Amz-Signature=f8ea1fa9fecf52529646812c339fb6ee937656b44c1aab8f113310634d469c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
