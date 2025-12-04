---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHX4V4AK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDsBNy4DMi0DJR8ItaJWhlzbK4VdQIpeqWjuyqTYbVBKAiBwmz%2BT0SQXDjm57Xgg7TrCP3o2iV1l7%2BTh1lrO1cKe7Sr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMB8W8m0JeVlB8x0uqKtwDt5zWmQAwzwP%2F7t98C26ACVA%2Bz%2FMCbL8jb5FEGWrAH1GsM%2BuN%2FFYQeEMv65Jbrcmkr8eUCvfDt16jiBvCJ2rjYc7ZLZ%2BCKY1gAStIh8a7WbyH6l%2Fl1maqVh10hjSs9XD6VhZwqeVC9RKH05AxiYjBbxjwXLpDwPR9z7vbz2wJMbIUExlDCDZUfcb9SfWfpN8nocgGf0hgemBcj%2B0GrcGYTGUftE05Wlh4IikbVzZ0uQosJ3hCoGSkwHwh4JMnZCujIUwCrX7iIUPebNSzdwiz6y6bMgZ%2BQfF7W5PYedOgxvaf9POJfcDiXp4dWrBIcGPchtGklUqruNgCazyYOOGiVloPkqHYr5n4ocFkjXJOjWNMSSMQZ070TcyOMfmkw6lrPQbvZDMDaKN%2BD5%2BglxSVqx7%2FwFeeYJVvn10AljeF00ErZtYuClgNZjTuw39T7X0Mn3VH8x6ikCn8XWNj86FzRwH953webdlktvuUBdPFXfvoGhlwVPG8K4pk4wEgEntKxH4ClO11ccW7oFZMz%2BXeXAlSb%2Bkd1hyPqlylkyY9RB0dxKF4DLOFAIoNfaUpSNuyhKocFu5%2FoUC0XmId9VP2LcVkuB89vp7FPKQ1okdFTRmv0FnTkd3ZmUiDZbswtrTDyQY6pgH%2F20csmrlwBZyQE%2Fe%2F2naX5KJ7QTjOMh2axVVePE8%2FsLDtQgZiydAhFvo44FxZXah1dEOmlWCyTt%2Fy7qLKGk0eHAgRtz9e8c5mPmOq2J28L3kQJ8KGyx8dfHkQurCCE4UdED1QE5Y4qUE3KMasugvA6LtucoalMRmimjrqkd7hQ2n1l%2BlzsWc%2FCPWBg7GJVcFiAyl9CygXe9Gc32SmojLIXtOV33uy&X-Amz-Signature=397c24a120a2fd60f7b566f5dfb6f84e502f0b7cbba75200706a82858617fa6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHX4V4AK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDsBNy4DMi0DJR8ItaJWhlzbK4VdQIpeqWjuyqTYbVBKAiBwmz%2BT0SQXDjm57Xgg7TrCP3o2iV1l7%2BTh1lrO1cKe7Sr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMB8W8m0JeVlB8x0uqKtwDt5zWmQAwzwP%2F7t98C26ACVA%2Bz%2FMCbL8jb5FEGWrAH1GsM%2BuN%2FFYQeEMv65Jbrcmkr8eUCvfDt16jiBvCJ2rjYc7ZLZ%2BCKY1gAStIh8a7WbyH6l%2Fl1maqVh10hjSs9XD6VhZwqeVC9RKH05AxiYjBbxjwXLpDwPR9z7vbz2wJMbIUExlDCDZUfcb9SfWfpN8nocgGf0hgemBcj%2B0GrcGYTGUftE05Wlh4IikbVzZ0uQosJ3hCoGSkwHwh4JMnZCujIUwCrX7iIUPebNSzdwiz6y6bMgZ%2BQfF7W5PYedOgxvaf9POJfcDiXp4dWrBIcGPchtGklUqruNgCazyYOOGiVloPkqHYr5n4ocFkjXJOjWNMSSMQZ070TcyOMfmkw6lrPQbvZDMDaKN%2BD5%2BglxSVqx7%2FwFeeYJVvn10AljeF00ErZtYuClgNZjTuw39T7X0Mn3VH8x6ikCn8XWNj86FzRwH953webdlktvuUBdPFXfvoGhlwVPG8K4pk4wEgEntKxH4ClO11ccW7oFZMz%2BXeXAlSb%2Bkd1hyPqlylkyY9RB0dxKF4DLOFAIoNfaUpSNuyhKocFu5%2FoUC0XmId9VP2LcVkuB89vp7FPKQ1okdFTRmv0FnTkd3ZmUiDZbswtrTDyQY6pgH%2F20csmrlwBZyQE%2Fe%2F2naX5KJ7QTjOMh2axVVePE8%2FsLDtQgZiydAhFvo44FxZXah1dEOmlWCyTt%2Fy7qLKGk0eHAgRtz9e8c5mPmOq2J28L3kQJ8KGyx8dfHkQurCCE4UdED1QE5Y4qUE3KMasugvA6LtucoalMRmimjrqkd7hQ2n1l%2BlzsWc%2FCPWBg7GJVcFiAyl9CygXe9Gc32SmojLIXtOV33uy&X-Amz-Signature=65a88105c26ae46cf3a0c1f4cb414b5103def8c7fe992d6eccd341f992f333a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

