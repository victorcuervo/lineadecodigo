---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QR6QLGY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCbBaePAEmVWs1QCaYAcwNkek91o931cEn27SXWpVlzVAIgNJZ%2Bd7%2BCkOFrIJHkoerU9RusHN1ZErsyqY3WRF%2BHCKMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDbK4az82rSB0Q5ZWSrcAwMvfQt1mzR0owbTA1QfWm4HFo7obCK0nrisJTh%2F80N1gsguW40bki5laVYE5hKHIX4Rim7QQ%2Fa64OmXnUK%2FH4A0wiOF3WM%2BhOKQHrhuDznOAvUESOLpc1%2BlIcc6z%2Bvx0K4dD3Mt8OKtcX341iExgu5%2FB2dMHfKY583plXboN7wDL2BIz5pf%2Bv5rw1wnOv0gvpVRZZRngQzeaIJKBUg5mj6KhI0d4%2BAihDY%2F8Z69051t6I8X5V0iVQWRnVSYg%2FQwed2yXELUA%2Bkw2Lj7zOzN0TMCFSgR%2BfypDciZRJim%2FvuUm10p1grlMthzxjxZb7%2BFT4zAiJtHvaw58OaST35rkm5JjGwzD5eERHJhyA4IEFXyfEjoDOFvz%2F7qipzYWxNBRvW5HYN3A7tQgqw75OzT3nuyXaLlIl2eP0YGUa9nzHl%2FZ0ZCFjutpLclKlDaRb%2FAJEV7i7bWykD0DjM%2FINn%2BQnYdifTUXxD6KESMM7vTF%2Bw5DgjD6I0BmMF0PDIq05FvjZ6J5g1in67TTpmT6Nogh7WFgv3BpOb0%2B43%2FykEnFpgwlT93FL9BgdUGdE5hBSaW6nXcdUeA6p4czcP7JQHknEN%2BGNvLHEx%2BIAl%2B264sWuhxjBWwUsFZQ9g7XU9RMN2HxckGOqUBEoOL3xVyvuNKYO3K39TdOdk2JfCXDWiZcdlKFkcMc%2BXzRgDEbfM%2Bl%2B32z%2FZmkRdINyQIzg6hY1OAv9F440Sa0YusE5mnVEc%2BfQiSEA6M%2BRFhVnIK1XAMjr0g7zQBAzhTyMWScYIthQEMT8C0hxE2EsRyLYE0byCpX30UtzxwNL30DjA%2BTgiS77h9VThK5DKz4Cf%2B2H8tCUsI3LAnWBW%2BUD5TD6Jw&X-Amz-Signature=b9d2d831ec0b247193b2990c0f343a45d424d53d6e14e7fde71618eb02a8b8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QR6QLGY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCbBaePAEmVWs1QCaYAcwNkek91o931cEn27SXWpVlzVAIgNJZ%2Bd7%2BCkOFrIJHkoerU9RusHN1ZErsyqY3WRF%2BHCKMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDbK4az82rSB0Q5ZWSrcAwMvfQt1mzR0owbTA1QfWm4HFo7obCK0nrisJTh%2F80N1gsguW40bki5laVYE5hKHIX4Rim7QQ%2Fa64OmXnUK%2FH4A0wiOF3WM%2BhOKQHrhuDznOAvUESOLpc1%2BlIcc6z%2Bvx0K4dD3Mt8OKtcX341iExgu5%2FB2dMHfKY583plXboN7wDL2BIz5pf%2Bv5rw1wnOv0gvpVRZZRngQzeaIJKBUg5mj6KhI0d4%2BAihDY%2F8Z69051t6I8X5V0iVQWRnVSYg%2FQwed2yXELUA%2Bkw2Lj7zOzN0TMCFSgR%2BfypDciZRJim%2FvuUm10p1grlMthzxjxZb7%2BFT4zAiJtHvaw58OaST35rkm5JjGwzD5eERHJhyA4IEFXyfEjoDOFvz%2F7qipzYWxNBRvW5HYN3A7tQgqw75OzT3nuyXaLlIl2eP0YGUa9nzHl%2FZ0ZCFjutpLclKlDaRb%2FAJEV7i7bWykD0DjM%2FINn%2BQnYdifTUXxD6KESMM7vTF%2Bw5DgjD6I0BmMF0PDIq05FvjZ6J5g1in67TTpmT6Nogh7WFgv3BpOb0%2B43%2FykEnFpgwlT93FL9BgdUGdE5hBSaW6nXcdUeA6p4czcP7JQHknEN%2BGNvLHEx%2BIAl%2B264sWuhxjBWwUsFZQ9g7XU9RMN2HxckGOqUBEoOL3xVyvuNKYO3K39TdOdk2JfCXDWiZcdlKFkcMc%2BXzRgDEbfM%2Bl%2B32z%2FZmkRdINyQIzg6hY1OAv9F440Sa0YusE5mnVEc%2BfQiSEA6M%2BRFhVnIK1XAMjr0g7zQBAzhTyMWScYIthQEMT8C0hxE2EsRyLYE0byCpX30UtzxwNL30DjA%2BTgiS77h9VThK5DKz4Cf%2B2H8tCUsI3LAnWBW%2BUD5TD6Jw&X-Amz-Signature=48681c34b796df871d1630e2b120b9340f15cbbf431ecb31cf352e3f310e5bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

