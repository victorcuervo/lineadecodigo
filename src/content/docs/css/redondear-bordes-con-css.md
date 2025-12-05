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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBLZBCUB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHH%2FWmc0BgiKy%2FX0zvAjvny6PJIXBTVoLjedsPFUHbAAiADTvizRdi46yQUflPzyW%2FvdwJVwYt5JD2mqudNVDj0ICr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMEkR3hgZ1YJ28jevQKtwDZ%2BpzYGMwFJQErniVj%2FEDOZFbIKJmgIg8y50Rc92LOydmIRJ1aiulQrz2SqnEZDlczlh4UlOK5m6kfcS0lMEIEMKR1fvADe1PJFxJCc4Vte9XXjeAHhAFaPCouaYahYVIf%2BIvceIxSHsAqNweLg9wIeteM%2FnLEQVhtTevKikJ8psaJ5JkN0HZRVRZFNyOqcSvUN3OkhylxFs3xdgorHebHvLbTvgLm9erJFrPvDUWqKO%2BGWXt9Vie6OLQ2MBUihfstFVQGNNQL8uJ9IHeUO6poYEnUNXOIQxa%2BSH8lS3AK1NXMvtMYwJRhYq1MQuY08et6%2FUblAO%2F%2FmhmHO3cZTo4hM4p2ZHNHYl3FQfCo%2FTFicKTeU9OLM5uNdfU%2Fl2p67zDuGyPtktzW5RrKLAgsWX2d72EsrA97W98tbko4kpHOkbmJfxKAOnwKR2sgw%2FIXbibyF3mPmYGNdiAEY%2Fs4A%2B2Wmvkwl6a%2BPZKsP6DScmlfGfmbqybwIMv8vT08%2BB1J%2Fgis9c8OJFsP5qEXPVXPaHypxyanXg2%2BCXsh416UNguMsfOXXEgcj9%2Fr5MO%2F8nN7Bo5HUiOn6OA7gB0z%2FNe4OCuhUUhxMrsMw7kwXP8NR6m6DIR%2BuQvlAnVxNtbbu8wk4zIyQY6pgGBRlF%2BNBmdCfxpT%2BiDJKHDropJ4qfLQkTHbbEsY20UI14fSP99HxvXsWKpgWu6qF6EBlluDUOc9ddTHM%2B0wNpItykSrQOrPK7adF%2B9yHptwhgVjkAWCvElUudLL%2FjjdLNzfrbmC0cpeChkq32nTPk3r%2BJ%2BnYbhzikpaoVsO8FwZYI4TaSka2at0Gpyi3F0IRNjpESKC6x2W6q6JpJGFsiZNueRqyQ7&X-Amz-Signature=87873a04a85b2da68bb7966f0e97424cef539521aa4ace5542f4503976853a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBLZBCUB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAHH%2FWmc0BgiKy%2FX0zvAjvny6PJIXBTVoLjedsPFUHbAAiADTvizRdi46yQUflPzyW%2FvdwJVwYt5JD2mqudNVDj0ICr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMEkR3hgZ1YJ28jevQKtwDZ%2BpzYGMwFJQErniVj%2FEDOZFbIKJmgIg8y50Rc92LOydmIRJ1aiulQrz2SqnEZDlczlh4UlOK5m6kfcS0lMEIEMKR1fvADe1PJFxJCc4Vte9XXjeAHhAFaPCouaYahYVIf%2BIvceIxSHsAqNweLg9wIeteM%2FnLEQVhtTevKikJ8psaJ5JkN0HZRVRZFNyOqcSvUN3OkhylxFs3xdgorHebHvLbTvgLm9erJFrPvDUWqKO%2BGWXt9Vie6OLQ2MBUihfstFVQGNNQL8uJ9IHeUO6poYEnUNXOIQxa%2BSH8lS3AK1NXMvtMYwJRhYq1MQuY08et6%2FUblAO%2F%2FmhmHO3cZTo4hM4p2ZHNHYl3FQfCo%2FTFicKTeU9OLM5uNdfU%2Fl2p67zDuGyPtktzW5RrKLAgsWX2d72EsrA97W98tbko4kpHOkbmJfxKAOnwKR2sgw%2FIXbibyF3mPmYGNdiAEY%2Fs4A%2B2Wmvkwl6a%2BPZKsP6DScmlfGfmbqybwIMv8vT08%2BB1J%2Fgis9c8OJFsP5qEXPVXPaHypxyanXg2%2BCXsh416UNguMsfOXXEgcj9%2Fr5MO%2F8nN7Bo5HUiOn6OA7gB0z%2FNe4OCuhUUhxMrsMw7kwXP8NR6m6DIR%2BuQvlAnVxNtbbu8wk4zIyQY6pgGBRlF%2BNBmdCfxpT%2BiDJKHDropJ4qfLQkTHbbEsY20UI14fSP99HxvXsWKpgWu6qF6EBlluDUOc9ddTHM%2B0wNpItykSrQOrPK7adF%2B9yHptwhgVjkAWCvElUudLL%2FjjdLNzfrbmC0cpeChkq32nTPk3r%2BJ%2BnYbhzikpaoVsO8FwZYI4TaSka2at0Gpyi3F0IRNjpESKC6x2W6q6JpJGFsiZNueRqyQ7&X-Amz-Signature=80556f9c180d9e351ce981dedc19fe2b99c877a4f0c8dda263406a679f7be4ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
