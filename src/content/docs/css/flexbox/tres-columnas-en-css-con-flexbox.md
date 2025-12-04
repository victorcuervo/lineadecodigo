---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NTBD5S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDKg8hfaAfWqb4Ffe2CyySJn7enAsf%2F7nuvQCpVxOUOxwIhAIGUw4KUHH0O1%2B7pmYq7AvQVQbk31ztvbzqYldc5KrsaKv8DCDwQABoMNjM3NDIzMTgzODA1IgyYEtRyiviPYi7%2BNncq3APqVQaIIhBwrWIaycczysRLN6QNhrMH4sPH5BRdlQvYdFt6iJV7ZKJViGZbIkjDAubiOXJ2KT0tNn%2B28offQZnbgfTerVZzSL8TxL%2BJH%2B93j%2BNAW0KcccRkX%2BOZfhA6b3EJzAyC6Ww0saDguPdzcPzA3kxNn%2BBC5x8%2FI7jHd7Ojnwx0AUOv6KrUCHUUGF4OGl1ZmSzNayZ%2BMsnie0E7WGzwoWa851mErPvKoNs8pnfMYUIiEYHODWpFNvgwm6vf2dlU%2FHXZdmf6J%2BYIaNoBpj4si7n4iKvnL%2BZrpwrCrKGYnuPOvJN60mq3xz6BlmxOVTtff1uip9GNnuDPfwzf%2FC52TXyuMT14f8BnZMzRhPzC5BLbX1kek2U18H5Z79IvC0KZx8hHeHGVrRMw4TbjHylwosBPijj%2B0rDglT5tDCWTS8G8OuAqXzw4xifdppw%2Fwfw02fCWZSNWz9ng79zD6zgeE%2Ffb0sQKUgDKUcSsdFGZmfFtFtHeaTBx0rWZzSnV13T4c7GA2j%2BxoQhih6dHs9wUWLgoIvERjkR98JQEkSmjCg2na4KUjoBmaUd9%2B4tF0chsKXM8WGrNOwUblmzYF2lWltpizISB2%2B6Rhj8VFeGni4xL1CVmsiwAzjke6jDG88PJBjqkAYB%2F2RINtopnyvCPXu9izB1SjzM5KL%2B8prRdEk2LsL1I65S4iA5LGIYPaITlXJuXaDcn%2FCXFJxwvuar4igO%2BNW2wzatrsO6aIQiaxsEBhBy%2BHCgLSAHBjdiABUE153wBVMFnPluM4aQFqyMCr3bmjE8jeiG2d3YmyqIie4hXa81OuZtCTHBScI%2Ft9vzplLFEIjLy1yUchBf9o4FYFPG%2Biy6VM5UQ&X-Amz-Signature=d9942a1398fa647a96d026f15f7141cfda8bb4d1260eaa4a8e20b75d694830ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4NTBD5S%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDKg8hfaAfWqb4Ffe2CyySJn7enAsf%2F7nuvQCpVxOUOxwIhAIGUw4KUHH0O1%2B7pmYq7AvQVQbk31ztvbzqYldc5KrsaKv8DCDwQABoMNjM3NDIzMTgzODA1IgyYEtRyiviPYi7%2BNncq3APqVQaIIhBwrWIaycczysRLN6QNhrMH4sPH5BRdlQvYdFt6iJV7ZKJViGZbIkjDAubiOXJ2KT0tNn%2B28offQZnbgfTerVZzSL8TxL%2BJH%2B93j%2BNAW0KcccRkX%2BOZfhA6b3EJzAyC6Ww0saDguPdzcPzA3kxNn%2BBC5x8%2FI7jHd7Ojnwx0AUOv6KrUCHUUGF4OGl1ZmSzNayZ%2BMsnie0E7WGzwoWa851mErPvKoNs8pnfMYUIiEYHODWpFNvgwm6vf2dlU%2FHXZdmf6J%2BYIaNoBpj4si7n4iKvnL%2BZrpwrCrKGYnuPOvJN60mq3xz6BlmxOVTtff1uip9GNnuDPfwzf%2FC52TXyuMT14f8BnZMzRhPzC5BLbX1kek2U18H5Z79IvC0KZx8hHeHGVrRMw4TbjHylwosBPijj%2B0rDglT5tDCWTS8G8OuAqXzw4xifdppw%2Fwfw02fCWZSNWz9ng79zD6zgeE%2Ffb0sQKUgDKUcSsdFGZmfFtFtHeaTBx0rWZzSnV13T4c7GA2j%2BxoQhih6dHs9wUWLgoIvERjkR98JQEkSmjCg2na4KUjoBmaUd9%2B4tF0chsKXM8WGrNOwUblmzYF2lWltpizISB2%2B6Rhj8VFeGni4xL1CVmsiwAzjke6jDG88PJBjqkAYB%2F2RINtopnyvCPXu9izB1SjzM5KL%2B8prRdEk2LsL1I65S4iA5LGIYPaITlXJuXaDcn%2FCXFJxwvuar4igO%2BNW2wzatrsO6aIQiaxsEBhBy%2BHCgLSAHBjdiABUE153wBVMFnPluM4aQFqyMCr3bmjE8jeiG2d3YmyqIie4hXa81OuZtCTHBScI%2Ft9vzplLFEIjLy1yUchBf9o4FYFPG%2Biy6VM5UQ&X-Amz-Signature=85e39c0d8837c6fe09357b20a442ed9080ce4520623536c3ae299c594b168b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

