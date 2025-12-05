---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAEPERY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFy%2Bzclr%2BUDxrJHdMf4XwV8WuNFyF%2Bta8ZA%2FRaodizOQIhAK06VNJKv4D5iopBQd9Zeikc2JubkLa6SFoSH%2B6qM8lGKv8DCFUQABoMNjM3NDIzMTgzODA1Igx%2F%2FcrSK1%2BZZvz76k8q3AO4ekbAO3gpc69WoP1aATt6AZQDkJ4wTZzykVsMdwT5B9dGIkB4X3VTuNz5Fs0ed8Y1rOosGw7nYcZNbmMWsrojUFLrwaVLCinjlhKpla%2FX9XjOx1yji%2Bk0XsB%2BRAcN41oDTdb7Isae2wVcxh5ZhrmK%2FoxO4NqdEd%2BdtgGHlOjuKWgyZEQ2iQGoJJa3CXtNn57Ql%2Ft%2BlhMQZ0Y05u5iyAsuRFanHnUXmfftauBDC5jvr4JNDSqP6oEhw0uM%2Fhocmoni3m6JRoUoeMGS0FrZu%2FUsSpuR9lg0lWgb6LYwuf9OsqU77b6%2FPgm%2FRNUYdyyt2JsWYiHp7rXSWDgO6Vepwj%2Bcb4FDdDmGglEpcNbu%2FUZCTwAHOVrT3XSO%2BFOLyx5No%2FzMS%2F1BhfPZ7hif4C6%2FkN4GyR1U27z%2Fdb9%2FixgcDna2scE7Ww%2BpPlLI5VwV49hudD5iw730%2F6MnFQm4xRBbUbDHljFFJwwYHn2%2FolV7p%2B7ykY66XhF%2B%2BzHwG7xtFF8ry3%2B5ZLSSaLGiRbCeG%2FOzUb79P4qtuUuUsU0bg1eUVjzYbRKvZIWM430k6yfB6sIygsAHaAzRP%2BxIpA68%2BnmtYy31yzQnyzC%2FzhUZlivGCK73t1lltmK%2FObfHnigBgDDescnJBjqkAXPohJjMj5oajT%2BdMo%2FEKJoXLlgZ%2FMf%2BApze942%2F3kd4GqJb%2FUFpwqwuTmMgi7tUplRfXkDw9Ge1MPylHMqFDgHRCJ%2BLrAL2hCw5XW1ajvVJnPfAaBYaNO7rQu6iWI3X12aWwjAEConKzFDRztY5kAwZj9GpzOoUo3qVr7MoCZl%2BxtDE15hbE23oxEAA5GF4ul2rdLh54hnUoRaR%2Fc%2FttpvDQoz4&X-Amz-Signature=0d6651cae03a6fee9cd7a6f46e372fefe31d2234ec4260127d4641addaddc4b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TAEPERY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFy%2Bzclr%2BUDxrJHdMf4XwV8WuNFyF%2Bta8ZA%2FRaodizOQIhAK06VNJKv4D5iopBQd9Zeikc2JubkLa6SFoSH%2B6qM8lGKv8DCFUQABoMNjM3NDIzMTgzODA1Igx%2F%2FcrSK1%2BZZvz76k8q3AO4ekbAO3gpc69WoP1aATt6AZQDkJ4wTZzykVsMdwT5B9dGIkB4X3VTuNz5Fs0ed8Y1rOosGw7nYcZNbmMWsrojUFLrwaVLCinjlhKpla%2FX9XjOx1yji%2Bk0XsB%2BRAcN41oDTdb7Isae2wVcxh5ZhrmK%2FoxO4NqdEd%2BdtgGHlOjuKWgyZEQ2iQGoJJa3CXtNn57Ql%2Ft%2BlhMQZ0Y05u5iyAsuRFanHnUXmfftauBDC5jvr4JNDSqP6oEhw0uM%2Fhocmoni3m6JRoUoeMGS0FrZu%2FUsSpuR9lg0lWgb6LYwuf9OsqU77b6%2FPgm%2FRNUYdyyt2JsWYiHp7rXSWDgO6Vepwj%2Bcb4FDdDmGglEpcNbu%2FUZCTwAHOVrT3XSO%2BFOLyx5No%2FzMS%2F1BhfPZ7hif4C6%2FkN4GyR1U27z%2Fdb9%2FixgcDna2scE7Ww%2BpPlLI5VwV49hudD5iw730%2F6MnFQm4xRBbUbDHljFFJwwYHn2%2FolV7p%2B7ykY66XhF%2B%2BzHwG7xtFF8ry3%2B5ZLSSaLGiRbCeG%2FOzUb79P4qtuUuUsU0bg1eUVjzYbRKvZIWM430k6yfB6sIygsAHaAzRP%2BxIpA68%2BnmtYy31yzQnyzC%2FzhUZlivGCK73t1lltmK%2FObfHnigBgDDescnJBjqkAXPohJjMj5oajT%2BdMo%2FEKJoXLlgZ%2FMf%2BApze942%2F3kd4GqJb%2FUFpwqwuTmMgi7tUplRfXkDw9Ge1MPylHMqFDgHRCJ%2BLrAL2hCw5XW1ajvVJnPfAaBYaNO7rQu6iWI3X12aWwjAEConKzFDRztY5kAwZj9GpzOoUo3qVr7MoCZl%2BxtDE15hbE23oxEAA5GF4ul2rdLh54hnUoRaR%2Fc%2FttpvDQoz4&X-Amz-Signature=f31a4f8456ef1105ce183297f7afcdcb89ca3f41fd28d09688b650a5df0bfa0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

