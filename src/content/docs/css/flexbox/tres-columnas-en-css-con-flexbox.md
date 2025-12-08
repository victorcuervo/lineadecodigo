---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W674A3MY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkNpB7YIgetM78s5zzWRAHfh2%2B%2BZEq%2BaCY7gUoR1s4cgIhAJuK%2FwCQLTdz17zJFvQGImfuAA%2FWyOu5IeamuiS4fkHOKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMupUfU2Wq8YjqjF4q3AOBHh36hInI7IreVGXxCZvy0iZEe5UNt7t%2FErwv0h0sEY%2FQg19e61ShD%2B5%2FhN9qQ6KllqldM5ECcz7FtabBSFAEUQVXuF9tDOGn76E87APtFgcjKLbcyWeoprzJA7UkLTNZR2aMO2eHG%2FIEKQpr8tjKi1KYKb%2BC0WjxkwzJWQmxeybHtf%2BO9IbqErgxhaC1d1qa1Klj9i5ir%2BzsBsTUtB4MrSNZrWzpdihgD855FhumhlSx%2BEFCFJr7a9hg0qGKZf1Xi6R9EM%2FMURrgGeIV1lluzGUDOxNcsiCtBPkVU%2BzuJaiCoHzBbAUisdE2YdU4ZpK2Ma%2Bf%2Fl1slvAGX%2BTSQcycNVe6aPBBtJaL5QFZQQRkivP6cVZbyc68JtF6oMJT9kJ4lTo%2BRS4QozbEl6CGF1s6rsMEz14OsLgzdmsY09rEkOjEB%2BmjAx50j1Lfi4%2BcyzQK%2BffZLOQcKMrUGoRri9jxPSvUtdn0zNKGavTEp7mQwoJY9SSWj0Sejv4qat9od3L2ugVJgT93y1JxPKYs%2Fv9nrYj8kmwr7eV%2FCM95%2B65QWJSnMyYhbW8AztgHEREyZz1luKSq1AJM6JOS%2FMVyhJ3z6xXsl0QkUO3Glic%2BJXR2uFlQTtdtiHKPcao0bjCD5dvJBjqkAUyn8NkFzZ3MlPvIrddFj5k97kPlIete2jH8gbB6NF4U7fmXix8uTEff08f%2FH9sdMSd3VxqjbgOlBunJ5Iqd8EMw%2Fjm0lTZ1gAh4EsBpMVt8k4CejxO2ovQAyk3%2BNlJRTv8c8Mb4sOpwvXs4WEwapy3PFhaXp1L55ml42lrupIKqYZc0clLFENoZUMSwv4PqXzwVMLaiDBUYmQ8XHZQJjtcilmJL&X-Amz-Signature=4f1337bc1bf060e7854fe02099e360629f358a2c915394f3c334cf6983529be9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W674A3MY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkNpB7YIgetM78s5zzWRAHfh2%2B%2BZEq%2BaCY7gUoR1s4cgIhAJuK%2FwCQLTdz17zJFvQGImfuAA%2FWyOu5IeamuiS4fkHOKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMupUfU2Wq8YjqjF4q3AOBHh36hInI7IreVGXxCZvy0iZEe5UNt7t%2FErwv0h0sEY%2FQg19e61ShD%2B5%2FhN9qQ6KllqldM5ECcz7FtabBSFAEUQVXuF9tDOGn76E87APtFgcjKLbcyWeoprzJA7UkLTNZR2aMO2eHG%2FIEKQpr8tjKi1KYKb%2BC0WjxkwzJWQmxeybHtf%2BO9IbqErgxhaC1d1qa1Klj9i5ir%2BzsBsTUtB4MrSNZrWzpdihgD855FhumhlSx%2BEFCFJr7a9hg0qGKZf1Xi6R9EM%2FMURrgGeIV1lluzGUDOxNcsiCtBPkVU%2BzuJaiCoHzBbAUisdE2YdU4ZpK2Ma%2Bf%2Fl1slvAGX%2BTSQcycNVe6aPBBtJaL5QFZQQRkivP6cVZbyc68JtF6oMJT9kJ4lTo%2BRS4QozbEl6CGF1s6rsMEz14OsLgzdmsY09rEkOjEB%2BmjAx50j1Lfi4%2BcyzQK%2BffZLOQcKMrUGoRri9jxPSvUtdn0zNKGavTEp7mQwoJY9SSWj0Sejv4qat9od3L2ugVJgT93y1JxPKYs%2Fv9nrYj8kmwr7eV%2FCM95%2B65QWJSnMyYhbW8AztgHEREyZz1luKSq1AJM6JOS%2FMVyhJ3z6xXsl0QkUO3Glic%2BJXR2uFlQTtdtiHKPcao0bjCD5dvJBjqkAUyn8NkFzZ3MlPvIrddFj5k97kPlIete2jH8gbB6NF4U7fmXix8uTEff08f%2FH9sdMSd3VxqjbgOlBunJ5Iqd8EMw%2Fjm0lTZ1gAh4EsBpMVt8k4CejxO2ovQAyk3%2BNlJRTv8c8Mb4sOpwvXs4WEwapy3PFhaXp1L55ml42lrupIKqYZc0clLFENoZUMSwv4PqXzwVMLaiDBUYmQ8XHZQJjtcilmJL&X-Amz-Signature=658fb3d3a1394d5578e76f518795b51d19dbcf2e6395bcf58c124a69e75b7d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

