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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NLELJ5C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwmbXOXBM5HivO5papk6k7XCkEW5AA58O%2FGdvdcq9kFgIgAq111QqejqmjKEJ%2BFgjlye4Ejffr76FbE0zFtHl7C2Eq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLr2ZIByEYqAK45PmircA2QjGsmMIkaJeHhfZxl0SzQARHuheyes%2Bn%2BIACG3gRzawvV1b7cVQspcIeZ%2FCwdirGd56UiompuBXFzbH5QLyIib62Qe7ikDkUVe8x9r1G%2FE1xR2H1GQI9KFqXabW3OhwuJY1qnzcYDAKjW8mYQYxukEwCvZCD5Z2DcI3LJM7XvUDLFWCMo5ZLAix4bB825hBP%2BtVHfTrrE9Y3D%2FTyoj%2BZvQQ7tGbwaavWpyrnv90mnWlL%2B9hDoKY25LTj%2Bccua9kMw8GZDU7p%2FZ2ObAvsMwToot3PyhjP8mu%2FBvVI9S1QaRALvZIp6FNCpwU8RQwuDssAs0QJkttPWfA3vQx0E3sIJnQ27AG8M%2BPlAiv%2B0sk6TTi0f8HSg1UuJ7gGDmj2KLAsMguemvGCD6VMJjGc9ox3x9ReXESdulXs85oX0AnRCL8AxrSuAzq4qay%2Bpk33FC0Dn89aFabHZCaAmgkMUHx53ZMKqjp9OtyAqcpYdoAvfagydRVAVaZkNwum2IDUYgELMO2eAk6RkFPYYodxAptFVGBSjGFt5JcUyOjb79BEOzzoT6tUEr1Z%2BO64ul41l9tb%2FhqXBk3sHJ1y%2BMFIitvr6CVUw4mFBfU3m4Mnz7mB%2FVpBWq4Sc2le9vvJ9eMKjUyskGOqUB6xL43rIMHKzQaXqSVWgPiDohu379fOnbVm8LfKk%2BDH1qE4sNeBJOdfCHWuEQjrEZ1IJxNqEaU57JPTlRvDg7xz9%2FHS4Nnq1ldU9V5dtjN99Qrj1vK3o72U8Yr6dIbrUSMTYVfqaJaLWSzxTbfrC9JZ08pnUqDkIiTXpR1hAsgmWlXBrLeG6ZpaPoyLFIuR7AHrb%2Br%2FpDnX7%2BZxMNzpA4kc6I%2BF6j&X-Amz-Signature=7c17561df9fb4f35cb51e64c90d67b64fac1bc32144c904f5a8fb254a3f6fbb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NLELJ5C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T112757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwmbXOXBM5HivO5papk6k7XCkEW5AA58O%2FGdvdcq9kFgIgAq111QqejqmjKEJ%2BFgjlye4Ejffr76FbE0zFtHl7C2Eq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLr2ZIByEYqAK45PmircA2QjGsmMIkaJeHhfZxl0SzQARHuheyes%2Bn%2BIACG3gRzawvV1b7cVQspcIeZ%2FCwdirGd56UiompuBXFzbH5QLyIib62Qe7ikDkUVe8x9r1G%2FE1xR2H1GQI9KFqXabW3OhwuJY1qnzcYDAKjW8mYQYxukEwCvZCD5Z2DcI3LJM7XvUDLFWCMo5ZLAix4bB825hBP%2BtVHfTrrE9Y3D%2FTyoj%2BZvQQ7tGbwaavWpyrnv90mnWlL%2B9hDoKY25LTj%2Bccua9kMw8GZDU7p%2FZ2ObAvsMwToot3PyhjP8mu%2FBvVI9S1QaRALvZIp6FNCpwU8RQwuDssAs0QJkttPWfA3vQx0E3sIJnQ27AG8M%2BPlAiv%2B0sk6TTi0f8HSg1UuJ7gGDmj2KLAsMguemvGCD6VMJjGc9ox3x9ReXESdulXs85oX0AnRCL8AxrSuAzq4qay%2Bpk33FC0Dn89aFabHZCaAmgkMUHx53ZMKqjp9OtyAqcpYdoAvfagydRVAVaZkNwum2IDUYgELMO2eAk6RkFPYYodxAptFVGBSjGFt5JcUyOjb79BEOzzoT6tUEr1Z%2BO64ul41l9tb%2FhqXBk3sHJ1y%2BMFIitvr6CVUw4mFBfU3m4Mnz7mB%2FVpBWq4Sc2le9vvJ9eMKjUyskGOqUB6xL43rIMHKzQaXqSVWgPiDohu379fOnbVm8LfKk%2BDH1qE4sNeBJOdfCHWuEQjrEZ1IJxNqEaU57JPTlRvDg7xz9%2FHS4Nnq1ldU9V5dtjN99Qrj1vK3o72U8Yr6dIbrUSMTYVfqaJaLWSzxTbfrC9JZ08pnUqDkIiTXpR1hAsgmWlXBrLeG6ZpaPoyLFIuR7AHrb%2Br%2FpDnX7%2BZxMNzpA4kc6I%2BF6j&X-Amz-Signature=c65e40d941798c25fcb4260feb8f681f95039ecc8b1a089388ae2f6eef67cec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
