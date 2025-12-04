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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LKOWBF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIAO5fyBeDnNtBrnbj15m9hPDSNLcjXlkMDAZOVhuSalbAiEAyXSIeKrADtCIEelRFVwCTU6Igda7acdNGQPwZuFAmsUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEI3HPWVxef7O3sfeSrcA8hFrYHi2SbeC9a13RChRQgyxLlWEiyI6B%2FIttFYeN4PsBKd2YEVc2wGZUJmW1aLREKN28NDMcnhy%2BhKLuV0hUJhkyIn6KPTtN2nUJT68FAUwP0pprtRhnU2YAxSIQbDejmeJqdJ0SUawpFxjASbWcfUNQTxVZ2dGbngclucNsaOfbYmM0c0ipI5bheF33cTuFyNFEkaeug4dLUqovY%2B%2FHbGkINo69ciyQwKbbYX4aNKvgssA4iVQ4lFE2dG4rJc%2FiU0cUlQMB5hV0BUxQwZdQdHBUd6oLgvO2PRxlyX5Fxk3kjm%2B7QijwEdfitVT9oTiU6%2BBUF2sYjYairpk5AngwwxL2KYs3SnBZmVoFuJPsL37tdzuw4pWtZceDntQmUQ4SzTA%2FvR0U8tuhA1lxvq3mpiIWHYpzA7IgXnhKMSYwbkG%2FuRMAUI0o%2B8k4wFykCvR8Z8xbxPuyG2UjKhrxZ1YA%2Fmnieb3nKYgXh2SfxBOuQvNqqSxLxA%2FHRq%2BQnWxuWmX66NjzvaEQny4wA211oS0XQxHGMVRvDCh%2FCZkL3RhNT6mr7sYvo1MHtwhb%2BovEXghDCKOzrCCcCIRfbdP77dRvKnfjTZlbNsqNL%2BM7e9M0zqNR1V8TzeqZbmpYCTMMDnxMkGOqUBd0ReeZuQWTHzLAVPF0tpJAdoX3W%2Bw4gfFdkkwRcdm1Rlkjv2aKtPcM%2B5Gr8BkMHbvuVLeim757Uq4B2jbQJx1lX5Efn%2BvAywshVNN2wLKfWyNgVf3wYjZZ84kyXq8fOl5zOILkBYzMPN%2FDeVibKYvz63qE4Vj91WPW%2FkfDna9i4%2FYK0XWR%2FSMuYZ94UV3OD8di9gCD%2FOAPKLiKT2LGmKBsEzrNdg&X-Amz-Signature=595b0ad0aa4d80c5bc751890ab921378a293464c1dacccbaf40362215e748daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675LKOWBF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIAO5fyBeDnNtBrnbj15m9hPDSNLcjXlkMDAZOVhuSalbAiEAyXSIeKrADtCIEelRFVwCTU6Igda7acdNGQPwZuFAmsUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDEI3HPWVxef7O3sfeSrcA8hFrYHi2SbeC9a13RChRQgyxLlWEiyI6B%2FIttFYeN4PsBKd2YEVc2wGZUJmW1aLREKN28NDMcnhy%2BhKLuV0hUJhkyIn6KPTtN2nUJT68FAUwP0pprtRhnU2YAxSIQbDejmeJqdJ0SUawpFxjASbWcfUNQTxVZ2dGbngclucNsaOfbYmM0c0ipI5bheF33cTuFyNFEkaeug4dLUqovY%2B%2FHbGkINo69ciyQwKbbYX4aNKvgssA4iVQ4lFE2dG4rJc%2FiU0cUlQMB5hV0BUxQwZdQdHBUd6oLgvO2PRxlyX5Fxk3kjm%2B7QijwEdfitVT9oTiU6%2BBUF2sYjYairpk5AngwwxL2KYs3SnBZmVoFuJPsL37tdzuw4pWtZceDntQmUQ4SzTA%2FvR0U8tuhA1lxvq3mpiIWHYpzA7IgXnhKMSYwbkG%2FuRMAUI0o%2B8k4wFykCvR8Z8xbxPuyG2UjKhrxZ1YA%2Fmnieb3nKYgXh2SfxBOuQvNqqSxLxA%2FHRq%2BQnWxuWmX66NjzvaEQny4wA211oS0XQxHGMVRvDCh%2FCZkL3RhNT6mr7sYvo1MHtwhb%2BovEXghDCKOzrCCcCIRfbdP77dRvKnfjTZlbNsqNL%2BM7e9M0zqNR1V8TzeqZbmpYCTMMDnxMkGOqUBd0ReeZuQWTHzLAVPF0tpJAdoX3W%2Bw4gfFdkkwRcdm1Rlkjv2aKtPcM%2B5Gr8BkMHbvuVLeim757Uq4B2jbQJx1lX5Efn%2BvAywshVNN2wLKfWyNgVf3wYjZZ84kyXq8fOl5zOILkBYzMPN%2FDeVibKYvz63qE4Vj91WPW%2FkfDna9i4%2FYK0XWR%2FSMuYZ94UV3OD8di9gCD%2FOAPKLiKT2LGmKBsEzrNdg&X-Amz-Signature=b6d70d70753d39dc163ad918734c117dc6aadaef241ec10291674ac38c308cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
