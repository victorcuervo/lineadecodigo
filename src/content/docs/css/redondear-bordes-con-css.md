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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWP54JA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuHrGWs%2B5c21lR%2B7y8viM1oYGf8bSHUYtV%2BPT14YNrEAiEA%2Fz7gnUYFiUBr3Vi2YnrISIsxFJW0EYi410dON3hv750q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBhU9Vk46%2BjB8hbmMyrcA%2FUQVPrDP76iBKrYsVJ6lSvqUvVtOJvDlw0R1MR2mzE5fLG8qPtsZqYyDyb9n0Ntr0EKl9RYbP255oKJwCRBRykiTbyKtgNkIQZYNA3ZoeEg3zp5XkALkbhEhac6YpHFeve9YvD%2Fsag%2F6AxX93SZqdrZ0L5lNEg2b5ZNAMlimPs4veTMc0xrRmeLxD7HAyfyaQXPsCaNan%2Bi6U%2BZwUbyaC%2F3FYSRiqjka8mdcXNyfB48JrRysuzuuUsUWJel16oYi8y6Zmcevr8gEr4mJJb%2B7g3Klib62vBsr444L%2BekIm6oHaSP65qRf8daycYdCYYhsy9ieys%2FWAss2e9BJ%2F4Ll%2Bwb1tC5xkEsRn9wLjhcccfRU8038F2%2FcRvAI8iLDrFkHk%2B3C61e5BwBEYYtxH40rP8ieisn3OHFLa3DpAKBgnk%2FkvvhUYFtqovtqYK%2BJbyt%2BuwLDEr4DIGYoSezojkedRMQS8qiZaLc%2BRKrgb0mkh4vs4HXbXqNLquWg9uu%2Fxwuxd%2FibXx6SAnvrlpPW%2FsRVPQD9TplWFVI0SUYfScM38LrKAxS4cHAKEdEi9l5KgoFBGoA9OXIUy4Avhyj%2BVF%2F0eIgQZLORUHmsKhO6PBamhzjFNPmx87js3dBUb0pMMvK0ckGOqUBPiJ9Ff87rE1OV30XltLIzunYT60nZD1ALAWbvi7vvv5aMqXOxv2lCSBVwtUMvE3lwQt2fPY36BGm2Y8xy%2FxZUdyYYLbKy3BB9gK%2FVwDLkhIWWPFqHszYg68f7m86QHWNf9b6JVf5n5GvdgFLZ7emWlRBJlsODfanARV7uY4KK%2F23%2BwqX%2BWXZVM%2F%2F021YU4%2Bk8W%2F46hyFCvlrD5jN6haUahI8rZK4&X-Amz-Signature=323a3709ed80e652d690a32bac7e2f66408cea0cf26b67e6a67fe823d392713b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWWP54JA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuHrGWs%2B5c21lR%2B7y8viM1oYGf8bSHUYtV%2BPT14YNrEAiEA%2Fz7gnUYFiUBr3Vi2YnrISIsxFJW0EYi410dON3hv750q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBhU9Vk46%2BjB8hbmMyrcA%2FUQVPrDP76iBKrYsVJ6lSvqUvVtOJvDlw0R1MR2mzE5fLG8qPtsZqYyDyb9n0Ntr0EKl9RYbP255oKJwCRBRykiTbyKtgNkIQZYNA3ZoeEg3zp5XkALkbhEhac6YpHFeve9YvD%2Fsag%2F6AxX93SZqdrZ0L5lNEg2b5ZNAMlimPs4veTMc0xrRmeLxD7HAyfyaQXPsCaNan%2Bi6U%2BZwUbyaC%2F3FYSRiqjka8mdcXNyfB48JrRysuzuuUsUWJel16oYi8y6Zmcevr8gEr4mJJb%2B7g3Klib62vBsr444L%2BekIm6oHaSP65qRf8daycYdCYYhsy9ieys%2FWAss2e9BJ%2F4Ll%2Bwb1tC5xkEsRn9wLjhcccfRU8038F2%2FcRvAI8iLDrFkHk%2B3C61e5BwBEYYtxH40rP8ieisn3OHFLa3DpAKBgnk%2FkvvhUYFtqovtqYK%2BJbyt%2BuwLDEr4DIGYoSezojkedRMQS8qiZaLc%2BRKrgb0mkh4vs4HXbXqNLquWg9uu%2Fxwuxd%2FibXx6SAnvrlpPW%2FsRVPQD9TplWFVI0SUYfScM38LrKAxS4cHAKEdEi9l5KgoFBGoA9OXIUy4Avhyj%2BVF%2F0eIgQZLORUHmsKhO6PBamhzjFNPmx87js3dBUb0pMMvK0ckGOqUBPiJ9Ff87rE1OV30XltLIzunYT60nZD1ALAWbvi7vvv5aMqXOxv2lCSBVwtUMvE3lwQt2fPY36BGm2Y8xy%2FxZUdyYYLbKy3BB9gK%2FVwDLkhIWWPFqHszYg68f7m86QHWNf9b6JVf5n5GvdgFLZ7emWlRBJlsODfanARV7uY4KK%2F23%2BwqX%2BWXZVM%2F%2F021YU4%2Bk8W%2F46hyFCvlrD5jN6haUahI8rZK4&X-Amz-Signature=a37bde0cdd5c0cf0ef361d2131d69c7f4ca3dda478be8ff1114b275ae0be4172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
