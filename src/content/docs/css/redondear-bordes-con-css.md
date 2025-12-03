---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PGFJJR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD7JYfZ5wAn%2FIRkH0J0JG3kD%2FIL2rRlq73tcQjvGnrh%2BgIgVPmItv7VKPNYhg%2B0KyQcN%2FlYYuTBduy4erb3FiaGHlEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDH498t1ftckp8sHhlircA9o8vZnnU3SeINEFRYGzY83ncHhxakAtRH9Ja3qjeLKkaGh43BsS47JMjSrnN%2BBRdsZRBu6nVAlUNZsbHvNBdpDGDQzSA1R82a8wIG8orJCuaDzPQC30pn9ktppvBzE%2FxW%2BshNQeNcAEjMlhU57R%2FfeievP6kNhS%2FRAe8hbpk%2BT0fiS7x8eezKLDWuQIyaAgOT%2FwS0f2Dt5MOgL9pPKrtP1MvA1k04oDBO8UiHQ7zJbKxGl%2FZ4EL%2Boxdio0XiKky7YYwODLZzzOOPru%2BXtPzBfhzuuDUWJEok6LglivZtCIzuj%2FPRrO8n3HaYMrTYqFqzznbNDyToTHj85aTszbKbi%2B5MC8gsHzLhrk4TU1iqlsEQMIDFLWgFlWa1D%2Bj9FG8CHA7VvR76nG3OcTra4cHLTctwC1xYbEjI%2FJx18%2FenD%2FGC%2BSRQAR6xr1%2F%2Fwr7i49QELEoHtwnLmiLjvaay%2Fwk%2BKY93DtLpZRnUAL9lsz2syr54xrPaXQcduDP1%2BtA6mqy3a0EjUeJjFTeUIT1%2BFRxOeKRbLyq6SWwzVnq4VciHPcvgMt6dnytLdpDiY3v9vWBlXfWXSDdzSyvDJFQqEtbSX4CxwZYMNj%2Br2328Bt3YY83%2Befap1tnv7EDLgtCMLO%2BwskGOqUBeycW%2F6mOeJvsjdILTNEMdvU8e3om3%2FrZMnul7a71aOobAT%2FmjUwvwjC%2FbKTnb2jfcU48u6S9M4V7p%2FdUN%2FElUC5ssbA8XOEcatg4HGF%2B24ffCbCIBWH3qPKELbR%2FrnEJUo1YHEYtMyY5JYJzB5MkAmzlxtS7lFIjDkmmK5Zk8SuT8YKctFOa97NaX%2Fm7%2BXtpe3OXlnw%2F0wUEjgT6F43hkVfVkbbn&X-Amz-Signature=9ab2b44eda5d2899edc5edbc898a6a28e68e2c374e092201edc331e3b0866f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PGFJJR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQD7JYfZ5wAn%2FIRkH0J0JG3kD%2FIL2rRlq73tcQjvGnrh%2BgIgVPmItv7VKPNYhg%2B0KyQcN%2FlYYuTBduy4erb3FiaGHlEq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDH498t1ftckp8sHhlircA9o8vZnnU3SeINEFRYGzY83ncHhxakAtRH9Ja3qjeLKkaGh43BsS47JMjSrnN%2BBRdsZRBu6nVAlUNZsbHvNBdpDGDQzSA1R82a8wIG8orJCuaDzPQC30pn9ktppvBzE%2FxW%2BshNQeNcAEjMlhU57R%2FfeievP6kNhS%2FRAe8hbpk%2BT0fiS7x8eezKLDWuQIyaAgOT%2FwS0f2Dt5MOgL9pPKrtP1MvA1k04oDBO8UiHQ7zJbKxGl%2FZ4EL%2Boxdio0XiKky7YYwODLZzzOOPru%2BXtPzBfhzuuDUWJEok6LglivZtCIzuj%2FPRrO8n3HaYMrTYqFqzznbNDyToTHj85aTszbKbi%2B5MC8gsHzLhrk4TU1iqlsEQMIDFLWgFlWa1D%2Bj9FG8CHA7VvR76nG3OcTra4cHLTctwC1xYbEjI%2FJx18%2FenD%2FGC%2BSRQAR6xr1%2F%2Fwr7i49QELEoHtwnLmiLjvaay%2Fwk%2BKY93DtLpZRnUAL9lsz2syr54xrPaXQcduDP1%2BtA6mqy3a0EjUeJjFTeUIT1%2BFRxOeKRbLyq6SWwzVnq4VciHPcvgMt6dnytLdpDiY3v9vWBlXfWXSDdzSyvDJFQqEtbSX4CxwZYMNj%2Br2328Bt3YY83%2Befap1tnv7EDLgtCMLO%2BwskGOqUBeycW%2F6mOeJvsjdILTNEMdvU8e3om3%2FrZMnul7a71aOobAT%2FmjUwvwjC%2FbKTnb2jfcU48u6S9M4V7p%2FdUN%2FElUC5ssbA8XOEcatg4HGF%2B24ffCbCIBWH3qPKELbR%2FrnEJUo1YHEYtMyY5JYJzB5MkAmzlxtS7lFIjDkmmK5Zk8SuT8YKctFOa97NaX%2Fm7%2BXtpe3OXlnw%2F0wUEjgT6F43hkVfVkbbn&X-Amz-Signature=1d30a5b54a81b45c354c9b7ac5809f517f4e5137baf1f2e93172268b179c27d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
