---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63EEPRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIB0Kn3G1%2BU1d3JyVVmiOh4I5rW72%2Fb79%2BK5j6Dz5g9ZjAiBqnMpl4Byvt97k%2BLfRlex%2FJfJBdXBO8UyJQIoNsjJwjir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMt2O3%2F0zsescNgu7gKtwD56hbGxnmzsny6QGP26bivdn%2FOQ2De7mypnLo83JiLEQduG30qLMNefT8L2MGQlpzjZeqiK9vz1fUUhJ8kmfbLYqF4HM7DXOW03CYtgnxn8baFt7S0Uxrlztcip1G9lKF4MrHXQ4Uv3EDkdioqiQTq9NeLWmgaH51N1uzP%2FesmgtQAUhtXky3jF78iJxjjRAjXhDF6oEZzfeLInIX0k0107VBYdQqiZDD8EOqQwP0CxWLGhXbzm9HruOALMJs97OkTkucDpNIYklDh1y%2Fsn3xehJfLwME0NGA8wIZYRGp0Q9KrQJ74qLkluG%2B6UIZxnXFlPwsUKChSXZ0SX87fLmMa9%2FANOPsftRE7xSh28HDP5Y3R9YPu6dzV8yQHsvbdzccbrPKJvNda7qTWvS3swAA9PFO%2BXgnF%2B9nJX%2F7XybJYIfTMTZgs1mMOERSi4WeBY5kbhfw%2FPVpmVEuButbV4WHcUj4IxhuZrKkeUFnOK2nAzW2ljR4ujQ7iCdROOpZJ045%2B%2FsSgm7autFPgcpS9gOxFU9whUMlU%2FeGxjyF4uo0OJtVK7annGR7tb65IzHUIGiRnaeaQ64kB2IWr6kss6nTmx3ZqXRErr33CWXeqDVK3urKRbY8xn%2B4%2FfItap4w9ufEyQY6pgG9TK%2B8f4PNplkZbBncGGCEfnFNucXVH2UZ4WY04UWhQYkBihKryhXj0yPzgpW%2FX7b%2Fu5OtHavtXvP9wScgsMqMnbbUwFtJSUZ6YStf3OL1n8clQEXebGnLBcleb2kWshBZw28mDwligLC1u2g%2F90UzSjw5GXWl4c8jF8lvG61%2FnE%2BXKGyRrBKfThAhx43wr%2BCI4gcotldzjxLh9scT6TClsnISC1c%2F&X-Amz-Signature=0bcc22792fa242fd63b8a8498cdd8a5effd80dfc3b90a58efd71879e9c8e0f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X63EEPRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIB0Kn3G1%2BU1d3JyVVmiOh4I5rW72%2Fb79%2BK5j6Dz5g9ZjAiBqnMpl4Byvt97k%2BLfRlex%2FJfJBdXBO8UyJQIoNsjJwjir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMt2O3%2F0zsescNgu7gKtwD56hbGxnmzsny6QGP26bivdn%2FOQ2De7mypnLo83JiLEQduG30qLMNefT8L2MGQlpzjZeqiK9vz1fUUhJ8kmfbLYqF4HM7DXOW03CYtgnxn8baFt7S0Uxrlztcip1G9lKF4MrHXQ4Uv3EDkdioqiQTq9NeLWmgaH51N1uzP%2FesmgtQAUhtXky3jF78iJxjjRAjXhDF6oEZzfeLInIX0k0107VBYdQqiZDD8EOqQwP0CxWLGhXbzm9HruOALMJs97OkTkucDpNIYklDh1y%2Fsn3xehJfLwME0NGA8wIZYRGp0Q9KrQJ74qLkluG%2B6UIZxnXFlPwsUKChSXZ0SX87fLmMa9%2FANOPsftRE7xSh28HDP5Y3R9YPu6dzV8yQHsvbdzccbrPKJvNda7qTWvS3swAA9PFO%2BXgnF%2B9nJX%2F7XybJYIfTMTZgs1mMOERSi4WeBY5kbhfw%2FPVpmVEuButbV4WHcUj4IxhuZrKkeUFnOK2nAzW2ljR4ujQ7iCdROOpZJ045%2B%2FsSgm7autFPgcpS9gOxFU9whUMlU%2FeGxjyF4uo0OJtVK7annGR7tb65IzHUIGiRnaeaQ64kB2IWr6kss6nTmx3ZqXRErr33CWXeqDVK3urKRbY8xn%2B4%2FfItap4w9ufEyQY6pgG9TK%2B8f4PNplkZbBncGGCEfnFNucXVH2UZ4WY04UWhQYkBihKryhXj0yPzgpW%2FX7b%2Fu5OtHavtXvP9wScgsMqMnbbUwFtJSUZ6YStf3OL1n8clQEXebGnLBcleb2kWshBZw28mDwligLC1u2g%2F90UzSjw5GXWl4c8jF8lvG61%2FnE%2BXKGyRrBKfThAhx43wr%2BCI4gcotldzjxLh9scT6TClsnISC1c%2F&X-Amz-Signature=f758053cbc360064622cf368cfb2907dfdc5ce17ae19b5b569d46e08dfe83595&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

