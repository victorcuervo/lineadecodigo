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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAXCXLMO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN1jfWYlg71Q2pFmG7xAwRu05TJu7maxLTMAnCs0hrxAiATPzUeKYQ5SrbsE0%2BIZaK3wV35PLrwleBILgQgroBflyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMHYXlVi1u0%2BbE55%2FdKtwDp4sLeGi5Wu7p37JHkqSXarr6JDAdmShGN7qVw1falrldDU6T%2FcAYstGZVvdDE0y9orrZ4yNa7kpny8nw3Dv24kKQLaM8mGFga%2F4RlrRDmwxFPIaeA6%2BDB%2FBpjUk1w91VVMcKfYcPdPeJt2Xqn8BvutcZKpRk5hCUv%2FTo2N1luKtM7EnMjhaRg%2FUuV7YQ5bpQI7QiQnu4%2B0ncJ%2BFZlYTINlEdu7%2FfRftBM2ZgPwOAXXjjLLBktAoV6TY0Nej7SoeW2Sci0xvqCX2j8hpCzYpphddJDjQ0oG6pAgakYJwbSNfeQjXoHGUx5FC2ozsLvYa5HUhAYD%2B%2FJA%2ByiO9iS7irfD8MtvxwStcODbEKV82n7gr%2FfZsv4zkP5Ft3oosnb%2FHcfanCoFscRmtbYE%2BEX8zjk1cmzPczkpHG0RWEcfXoCK2HSUBzqGUqd9pTiBY1U23TFJPSfXFCfe%2B5muh7s8tP%2BU3J%2FSwSHsg8g9QDJ%2FE3ofopWfFzt1GMgvxRAOIyptN0ofjeVGiV6WD0f2bi%2BTlfsu323QFxI4yqegg2Tcy5MSSOvGJflSopNDeeqTvYsQvKhjXFGecJrRP5VCdHi4IPN%2BI4Ke38LNVL6brUOIJsoyZm4qDcaID14cnvU6sws8jRyQY6pgFxcPs1olkIrc2y2XskzVPdwAHD0ADvJ3HXtIBDoav0qUd8HfSJ1MsRWhBFvwxQ%2Bb3YIrfwTXNONzuvL7XdImKstNprMlxm9uLoYjnAZEuWwyWYcnuP%2BNwhjMYq4Zca7JPxtHAb00BYjV7v9JBvJARmgEAzi35AfGGmZ8%2FByXXpHXRCiJkg3IO3XJ%2BZ9WVOmHNWsVOSAQB7ao7Ll%2BoVsvRx%2B9GS9Ji4&X-Amz-Signature=6e0798710657b61ebb1e61a41ec6a92df6886e74708587bd47cc4fdaac7f8941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAXCXLMO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICN1jfWYlg71Q2pFmG7xAwRu05TJu7maxLTMAnCs0hrxAiATPzUeKYQ5SrbsE0%2BIZaK3wV35PLrwleBILgQgroBflyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMHYXlVi1u0%2BbE55%2FdKtwDp4sLeGi5Wu7p37JHkqSXarr6JDAdmShGN7qVw1falrldDU6T%2FcAYstGZVvdDE0y9orrZ4yNa7kpny8nw3Dv24kKQLaM8mGFga%2F4RlrRDmwxFPIaeA6%2BDB%2FBpjUk1w91VVMcKfYcPdPeJt2Xqn8BvutcZKpRk5hCUv%2FTo2N1luKtM7EnMjhaRg%2FUuV7YQ5bpQI7QiQnu4%2B0ncJ%2BFZlYTINlEdu7%2FfRftBM2ZgPwOAXXjjLLBktAoV6TY0Nej7SoeW2Sci0xvqCX2j8hpCzYpphddJDjQ0oG6pAgakYJwbSNfeQjXoHGUx5FC2ozsLvYa5HUhAYD%2B%2FJA%2ByiO9iS7irfD8MtvxwStcODbEKV82n7gr%2FfZsv4zkP5Ft3oosnb%2FHcfanCoFscRmtbYE%2BEX8zjk1cmzPczkpHG0RWEcfXoCK2HSUBzqGUqd9pTiBY1U23TFJPSfXFCfe%2B5muh7s8tP%2BU3J%2FSwSHsg8g9QDJ%2FE3ofopWfFzt1GMgvxRAOIyptN0ofjeVGiV6WD0f2bi%2BTlfsu323QFxI4yqegg2Tcy5MSSOvGJflSopNDeeqTvYsQvKhjXFGecJrRP5VCdHi4IPN%2BI4Ke38LNVL6brUOIJsoyZm4qDcaID14cnvU6sws8jRyQY6pgFxcPs1olkIrc2y2XskzVPdwAHD0ADvJ3HXtIBDoav0qUd8HfSJ1MsRWhBFvwxQ%2Bb3YIrfwTXNONzuvL7XdImKstNprMlxm9uLoYjnAZEuWwyWYcnuP%2BNwhjMYq4Zca7JPxtHAb00BYjV7v9JBvJARmgEAzi35AfGGmZ8%2FByXXpHXRCiJkg3IO3XJ%2BZ9WVOmHNWsVOSAQB7ao7Ll%2BoVsvRx%2B9GS9Ji4&X-Amz-Signature=46258e8eca6848deabc35176d7b6882d89d4bedd123c83af7984f89314ea3f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
