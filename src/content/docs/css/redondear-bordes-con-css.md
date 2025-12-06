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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFUMGQ5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYEPc%2BH%2F7OMoudlzKMHjrmOcPXEHmHtMVL5pHwn2sxFAiEA02KBaB3CztqBT3Nrtg39UlfpJdcYdoI3LPetO6HPf%2Fgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPujEdMH2a75ylq5gCrcA6k4pqC4kL%2BwfPul2SV9q%2BTiz6nFx7lWFspLlcdMaZ9OpPJZC1CgN%2FBW3JfBSOBjnmtN87uYM8FcAaUySHoqB4vtzDfttc5Ncfd6wz4mCVnm2vhXxZ74pu1697%2BM%2FwRJunC%2FYFSLaWLzspiR%2BipFtRXA16%2B4nAQ0CkZXLNBzgnj8zf%2FCpWU7sBvpKkikSUS9y4ABBNXPzH2riKfB6CKcIwrEvBbJGF%2Fh9bL6P61p1igQk00mVqQP9nv8AlkMnupkW33R9g%2Bo6iH5sJKs3x37yUQqYmvPfOpGQXk7fWL2MDN9zrUv0p8YPpebTIGb7dwDHvK4ho9y1oaZfS66kXfrwdNuEH0YlNY%2BMTk6Nsw7l3LmxeTRdjq4zKyvhaifJ9f1xIn%2BXkZ2oykDYO0zehwl0gGiuU7sXk7%2BqzzPK3ZgNmZ5lWmupR2UzhV6SE10mb%2FtxtgnmsP9XEvt1Gg4MKiCq%2F%2FaPnk3oY7LgTz1Yw7ug8l3oziTQOwFG%2FxISTRMJVSb8TW9orSxGKnoef5sQLMRthTX7T2Bjb80P3Dj84UrhatnsfCYdSiV2yaDSWrbJnodyQS25yKRGAlM6WoKGLP6Hg0Bhp6QuaJn1rSMjZKKlO6crKQokJ%2Fc5uuCHJFmMOrDzskGOqUBH6YgAUfGDGsZRJT6AYUUSdZ2AW2FBKJkmOlHmNbDL1CyJ0H2Z0CHd2QgG82UCe7ilfIP7XxwFd%2By%2BOvOPxVCYoff9rsmXBV4iVhPoZJiW3iIjs1Mv9JSPoxAreJb4wuI4%2Fj%2BenhaG4%2BHbBF5uGbb8mVW9wBtALyxyFlDUVPr8oea5r6DPw1ukiiQYE67VX4IvaksTIQ423zEWJt%2F5lf79epw9F60&X-Amz-Signature=9d3821bc5ec8e95db743805c5477d5b673e580e57cb49ca4881ff1b29dec1a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WFUMGQ5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFYEPc%2BH%2F7OMoudlzKMHjrmOcPXEHmHtMVL5pHwn2sxFAiEA02KBaB3CztqBT3Nrtg39UlfpJdcYdoI3LPetO6HPf%2Fgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDPujEdMH2a75ylq5gCrcA6k4pqC4kL%2BwfPul2SV9q%2BTiz6nFx7lWFspLlcdMaZ9OpPJZC1CgN%2FBW3JfBSOBjnmtN87uYM8FcAaUySHoqB4vtzDfttc5Ncfd6wz4mCVnm2vhXxZ74pu1697%2BM%2FwRJunC%2FYFSLaWLzspiR%2BipFtRXA16%2B4nAQ0CkZXLNBzgnj8zf%2FCpWU7sBvpKkikSUS9y4ABBNXPzH2riKfB6CKcIwrEvBbJGF%2Fh9bL6P61p1igQk00mVqQP9nv8AlkMnupkW33R9g%2Bo6iH5sJKs3x37yUQqYmvPfOpGQXk7fWL2MDN9zrUv0p8YPpebTIGb7dwDHvK4ho9y1oaZfS66kXfrwdNuEH0YlNY%2BMTk6Nsw7l3LmxeTRdjq4zKyvhaifJ9f1xIn%2BXkZ2oykDYO0zehwl0gGiuU7sXk7%2BqzzPK3ZgNmZ5lWmupR2UzhV6SE10mb%2FtxtgnmsP9XEvt1Gg4MKiCq%2F%2FaPnk3oY7LgTz1Yw7ug8l3oziTQOwFG%2FxISTRMJVSb8TW9orSxGKnoef5sQLMRthTX7T2Bjb80P3Dj84UrhatnsfCYdSiV2yaDSWrbJnodyQS25yKRGAlM6WoKGLP6Hg0Bhp6QuaJn1rSMjZKKlO6crKQokJ%2Fc5uuCHJFmMOrDzskGOqUBH6YgAUfGDGsZRJT6AYUUSdZ2AW2FBKJkmOlHmNbDL1CyJ0H2Z0CHd2QgG82UCe7ilfIP7XxwFd%2By%2BOvOPxVCYoff9rsmXBV4iVhPoZJiW3iIjs1Mv9JSPoxAreJb4wuI4%2Fj%2BenhaG4%2BHbBF5uGbb8mVW9wBtALyxyFlDUVPr8oea5r6DPw1ukiiQYE67VX4IvaksTIQ423zEWJt%2F5lf79epw9F60&X-Amz-Signature=6eeaa017e6e30f7986a8512fa2643a3492eff87cde99751dc8b827b69e1c89bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
