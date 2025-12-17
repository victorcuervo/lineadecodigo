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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXP7KET%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH3wnR%2BLp3LOa1IIz4nkBAfJnpPrfmBglknAempbY0jAIhAMhasX%2BB0yKjxDQYXNpt3nDtS80ajgcywyYP1dpstf0hKv8DCH8QABoMNjM3NDIzMTgzODA1Igw4c5zwG%2Fa88m4K4bYq3ANKUEiqIB1sNQLoSo%2BrHT2MscsnoS5VBCIMLCOnyWFxYo%2B%2FSSYbtoxGlk1FqR%2B3f1e3%2FdcDwFt1%2BGHtCTBGpgk6%2FGCPOz%2BKHj7joqu%2Bzao7QM4kBos3nvL4r4e5QPVeDjLomY154XPHWoeHURyZoM5thBorsKm8daQ2PIYwWy5xRbQ%2FA1GHvhqihiUn95So8IC15MfD%2Bd%2F1ea%2FDs5STckWEwJ5Rm3piYjeJgt8q3fD8Jpg260Zti03xxuxAnWuaiJO304hykYb5bGrCq2T2YuyF76fc49Ub%2BnN5n1nByUCV%2B9iKQRv4RrH6rIj42eLDp0heNi56t1hfvlwyzlzrJxCfAmIcS%2BiM3%2BOJ4cqMNmuQ6PlFr3ZP6fdMvJHW8BpEPWvTh52VqnEeRxLr3AcME0o7vVO9W%2FW0E6Q7uaz%2BBnWlXPzXHre25XqLiUcYKulHacwkNN7BsXErgpgvTNEuljwNMGzbB8NH%2FfthyqCYlJ69%2FbJR%2BClfVp5c0K13F8qYOTe9sZZBUsLwfh7Mx28IUGteHsXL%2BpX7vdHKO%2BV0BgnQ33zC7RbSyggse9%2FldeW5eaMN5yGs0%2F6oLK3vYPoRWq4hK3vf%2FqsVNw%2FwcQxlu%2FrZJ03NFZdTFazyzs%2FFRjC04YrKBjqkAXXX%2FR09crl6A4N4Mx8Ai3n6TvmHjWqpcEnL3BFQTThEdOvdAgRYZ93ObJWxd%2BbUweKOksBe4gZhJf%2FcTC37xTaalt73m0QqldcXQ9Myc2v%2FKkR%2B5jletOBKElntbLxSt5aKAlkmGpdhuubJYVojn0xlXf4RsOXCDWYw9rINfpDBUzS6cFd8F%2FfaRjc%2BYFiVg4Nd1EFZ29XDF9H47XUMjgiPrX73&X-Amz-Signature=4ab00b761e876cfe9d2e837cdf4a7bd2d28b53eed6086a6e0b0bba688eb5a137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JXP7KET%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDH3wnR%2BLp3LOa1IIz4nkBAfJnpPrfmBglknAempbY0jAIhAMhasX%2BB0yKjxDQYXNpt3nDtS80ajgcywyYP1dpstf0hKv8DCH8QABoMNjM3NDIzMTgzODA1Igw4c5zwG%2Fa88m4K4bYq3ANKUEiqIB1sNQLoSo%2BrHT2MscsnoS5VBCIMLCOnyWFxYo%2B%2FSSYbtoxGlk1FqR%2B3f1e3%2FdcDwFt1%2BGHtCTBGpgk6%2FGCPOz%2BKHj7joqu%2Bzao7QM4kBos3nvL4r4e5QPVeDjLomY154XPHWoeHURyZoM5thBorsKm8daQ2PIYwWy5xRbQ%2FA1GHvhqihiUn95So8IC15MfD%2Bd%2F1ea%2FDs5STckWEwJ5Rm3piYjeJgt8q3fD8Jpg260Zti03xxuxAnWuaiJO304hykYb5bGrCq2T2YuyF76fc49Ub%2BnN5n1nByUCV%2B9iKQRv4RrH6rIj42eLDp0heNi56t1hfvlwyzlzrJxCfAmIcS%2BiM3%2BOJ4cqMNmuQ6PlFr3ZP6fdMvJHW8BpEPWvTh52VqnEeRxLr3AcME0o7vVO9W%2FW0E6Q7uaz%2BBnWlXPzXHre25XqLiUcYKulHacwkNN7BsXErgpgvTNEuljwNMGzbB8NH%2FfthyqCYlJ69%2FbJR%2BClfVp5c0K13F8qYOTe9sZZBUsLwfh7Mx28IUGteHsXL%2BpX7vdHKO%2BV0BgnQ33zC7RbSyggse9%2FldeW5eaMN5yGs0%2F6oLK3vYPoRWq4hK3vf%2FqsVNw%2FwcQxlu%2FrZJ03NFZdTFazyzs%2FFRjC04YrKBjqkAXXX%2FR09crl6A4N4Mx8Ai3n6TvmHjWqpcEnL3BFQTThEdOvdAgRYZ93ObJWxd%2BbUweKOksBe4gZhJf%2FcTC37xTaalt73m0QqldcXQ9Myc2v%2FKkR%2B5jletOBKElntbLxSt5aKAlkmGpdhuubJYVojn0xlXf4RsOXCDWYw9rINfpDBUzS6cFd8F%2FfaRjc%2BYFiVg4Nd1EFZ29XDF9H47XUMjgiPrX73&X-Amz-Signature=5a6aaafd9f56aead47d67555744637baad59d40b2d12b2f63a72461e68b69b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
