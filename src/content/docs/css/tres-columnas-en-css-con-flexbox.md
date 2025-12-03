---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQ27NXF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB3BFjrkUi%2FxucNUfRQ47XJxBiDnLAKwL6OkDd5OKfqyAiEAm6rIMSwFEuJshoHNruSaHPgg6M3fNt8Z1lpCBvsX6Pkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJyekti35JRXaR41rCrcAwjxRQvRqM%2FxvKZybqyq%2FlMd8b7CkuuhtTWQB0XIyXYCyIv9WmUt4sBrEJUoKJwXXlXHTMciDx72jdMJiAGHmqRuD0CXGuOHU%2Byg60NbQLVtRxSuhvSboUwm6dMfgd9AUa1JJpltLBkR3QUjvvcPDCZm6UIlKohURUzJ2QEgqgU1GOvRgmoFidXK0t9OOAEfeJrpA9%2FWEcssYiTqopRr4k0oCIu74horlkqZol2QY%2Fj%2FhUtb%2BnYLNrgUi9HohfJqmtRQ0Py9eTztsrTtlyFCq8QYZltfR0weZnO3vFo83bpMgQgfQkaIZp%2BhLtGpcfKpAyehRfX2ohaJnfdob9kDD9jFSUU2KB02WqRz0hGrYFgkJ6K0ckQE9Az79dxuVUILLezSg3vpyuUJQzFxTEL77vFnd%2B%2FspLqr%2BTmFN2Whmy87ZHnTHp2D0WdWEQ%2FgQ%2FVyzRLfj0tfeW6hPppqpHCgoF%2FGPcw4gqePazltonnlxFnpnGFTVQ%2FFltLohXB9afXx06ZEKmSrm%2Boz5QZEO4nx0p3rOk9FYPk6VZ%2FpzlPh07lauML94SEM1OebFfieWgqjLYVZOZ4Xd5uc4ocV7mtoLLLbM9brzuaKTLPy7%2BjL8ARWpACL89E3xxP04W6yMKPcwskGOqUBan2%2FT0VNXaSUoa0RJmn8aWkpqf11Y8s1UwlP9zhI%2B1jVmaIkHcGxujpQu2Xh%2BlXNRIfmefrllpFez5ijS2BwjxMXPNK0yaIDWpTIG3RlyM1SLzYZSYKLkz92ocZoHXob5e0LnTgUHyfdlFy8CCWKxkCa1rphcJEAqD8EB6j1iPO9KpwmvxK9SHAX5AR4R%2BmZ6SbsYz5HWiQU8IlthRhH8XVJ5mj0&X-Amz-Signature=dd10d6f32ddeb1a52e5a2ea523bced223ab6bee3f2b24615cdb4f1207a9cb384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEQ27NXF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIB3BFjrkUi%2FxucNUfRQ47XJxBiDnLAKwL6OkDd5OKfqyAiEAm6rIMSwFEuJshoHNruSaHPgg6M3fNt8Z1lpCBvsX6Pkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDJyekti35JRXaR41rCrcAwjxRQvRqM%2FxvKZybqyq%2FlMd8b7CkuuhtTWQB0XIyXYCyIv9WmUt4sBrEJUoKJwXXlXHTMciDx72jdMJiAGHmqRuD0CXGuOHU%2Byg60NbQLVtRxSuhvSboUwm6dMfgd9AUa1JJpltLBkR3QUjvvcPDCZm6UIlKohURUzJ2QEgqgU1GOvRgmoFidXK0t9OOAEfeJrpA9%2FWEcssYiTqopRr4k0oCIu74horlkqZol2QY%2Fj%2FhUtb%2BnYLNrgUi9HohfJqmtRQ0Py9eTztsrTtlyFCq8QYZltfR0weZnO3vFo83bpMgQgfQkaIZp%2BhLtGpcfKpAyehRfX2ohaJnfdob9kDD9jFSUU2KB02WqRz0hGrYFgkJ6K0ckQE9Az79dxuVUILLezSg3vpyuUJQzFxTEL77vFnd%2B%2FspLqr%2BTmFN2Whmy87ZHnTHp2D0WdWEQ%2FgQ%2FVyzRLfj0tfeW6hPppqpHCgoF%2FGPcw4gqePazltonnlxFnpnGFTVQ%2FFltLohXB9afXx06ZEKmSrm%2Boz5QZEO4nx0p3rOk9FYPk6VZ%2FpzlPh07lauML94SEM1OebFfieWgqjLYVZOZ4Xd5uc4ocV7mtoLLLbM9brzuaKTLPy7%2BjL8ARWpACL89E3xxP04W6yMKPcwskGOqUBan2%2FT0VNXaSUoa0RJmn8aWkpqf11Y8s1UwlP9zhI%2B1jVmaIkHcGxujpQu2Xh%2BlXNRIfmefrllpFez5ijS2BwjxMXPNK0yaIDWpTIG3RlyM1SLzYZSYKLkz92ocZoHXob5e0LnTgUHyfdlFy8CCWKxkCa1rphcJEAqD8EB6j1iPO9KpwmvxK9SHAX5AR4R%2BmZ6SbsYz5HWiQU8IlthRhH8XVJ5mj0&X-Amz-Signature=9e2c840433a77b838cc451f5680fee7318b481110eebce7ae1a54f88b4d76e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

