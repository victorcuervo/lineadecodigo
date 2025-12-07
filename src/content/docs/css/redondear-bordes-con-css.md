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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ICCQ2GQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD7E0IGHyvx88VvVyVRDluOap7oMnfRLQBHk8oSt7bOAIgdn%2F%2BvJsR4%2BJMp%2B4bVO0iNpMpML6GXos0EoV1XogtWj0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpqbDoEMb8umOsEySrcA5P7K6igxdVyIKsj%2FjYRR7fSKNW7bu4q8AxEcBx9AVvQGKUJ6fMovWSthPU%2FQbO2sHJ6cHH9TqzjFxeXhpd%2B79BsEg4nESyAeE%2BtIwMW%2FC64Am7Ve%2FEDjgfXGgvCh3fFbVWwy%2Ful2LDtNfvnikveG8zPn1j2yqYNFrfeORK7lW5N5l%2BWFK8189IF2Qi9Pgj3aALDyuK0PaQLpCoZQqm2n6afPllNu16TUfCjTO3xoBUN3%2BWINGKkmo1%2Ff9Hn6ChsA2t%2BgYIkg1p4gnhBDZJT1HqWP399%2FZd%2FNDANkGFSpIdF5UjEhZmA9%2Fx16Fnjw%2BT2I1Tb%2BmlPMWgYWD4Q1Z7Jcvywu5TtXbLWKOlR%2BKsCi8VkpdkCI0pvlGF3tTBZcQgexjz6rV8IO04Mn59VAqmt8%2Fu7%2BY5WWjTIxHIUWj8LssSCWz3ZI84fnXZyf95nXHtT7hyyxLXQPwrV6pSJix8MlHkhLY1KWEJr2eEsntBZBZLmYw37N7kmkuA6UHDemTINoKqZ190w5OFkH3WIJIfeVv1vPsY5nJ0COwzJywdgg7km9nDQuPmhOYQIzbqrONnd%2B2mCeYQBVld9xVVzVnPja5awPhfB6ZMbevSBPhacm6mgbEw7wNs%2FaTVH22wIMMbH18kGOqUBPFBWJlZTpLBglDvzYl2%2BSa5rzeBXjk66Cmx32bFNmPrT%2FYWlA%2Fu2ExiyO4jnDOX9TWhoVWnOCOe9en2QZ1KHWT%2FvC6lyPBOj8ASMV3klLtxwx388nVvL71Q3dkQto2timO2T6IgQfh7lWh6I237W2pwHtVH0UBL1tOBx8lFIZxd1turi1uc%2FJa34k2B5%2B5kscfmqSuncVEZNCio%2BGFNYta1q2puy&X-Amz-Signature=538ecc4bc4811c79bcdd225fa935400fe49cbfe2f5888340fce1a5457ceabfbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ICCQ2GQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD7E0IGHyvx88VvVyVRDluOap7oMnfRLQBHk8oSt7bOAIgdn%2F%2BvJsR4%2BJMp%2B4bVO0iNpMpML6GXos0EoV1XogtWj0qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpqbDoEMb8umOsEySrcA5P7K6igxdVyIKsj%2FjYRR7fSKNW7bu4q8AxEcBx9AVvQGKUJ6fMovWSthPU%2FQbO2sHJ6cHH9TqzjFxeXhpd%2B79BsEg4nESyAeE%2BtIwMW%2FC64Am7Ve%2FEDjgfXGgvCh3fFbVWwy%2Ful2LDtNfvnikveG8zPn1j2yqYNFrfeORK7lW5N5l%2BWFK8189IF2Qi9Pgj3aALDyuK0PaQLpCoZQqm2n6afPllNu16TUfCjTO3xoBUN3%2BWINGKkmo1%2Ff9Hn6ChsA2t%2BgYIkg1p4gnhBDZJT1HqWP399%2FZd%2FNDANkGFSpIdF5UjEhZmA9%2Fx16Fnjw%2BT2I1Tb%2BmlPMWgYWD4Q1Z7Jcvywu5TtXbLWKOlR%2BKsCi8VkpdkCI0pvlGF3tTBZcQgexjz6rV8IO04Mn59VAqmt8%2Fu7%2BY5WWjTIxHIUWj8LssSCWz3ZI84fnXZyf95nXHtT7hyyxLXQPwrV6pSJix8MlHkhLY1KWEJr2eEsntBZBZLmYw37N7kmkuA6UHDemTINoKqZ190w5OFkH3WIJIfeVv1vPsY5nJ0COwzJywdgg7km9nDQuPmhOYQIzbqrONnd%2B2mCeYQBVld9xVVzVnPja5awPhfB6ZMbevSBPhacm6mgbEw7wNs%2FaTVH22wIMMbH18kGOqUBPFBWJlZTpLBglDvzYl2%2BSa5rzeBXjk66Cmx32bFNmPrT%2FYWlA%2Fu2ExiyO4jnDOX9TWhoVWnOCOe9en2QZ1KHWT%2FvC6lyPBOj8ASMV3klLtxwx388nVvL71Q3dkQto2timO2T6IgQfh7lWh6I237W2pwHtVH0UBL1tOBx8lFIZxd1turi1uc%2FJa34k2B5%2B5kscfmqSuncVEZNCio%2BGFNYta1q2puy&X-Amz-Signature=c5edf188de8683422206cbed17264d7c5e33c483c9b0f536875cfd465c023405&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
