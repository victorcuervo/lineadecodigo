---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMXZLHG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrl9LOhLA%2Byn5EEX64%2BcwzqKmV4x0EZc4PxyKBhhys%2BAiEApIB%2FzCTEBWagHhNICKMlYDu9Mm0aaGkOAdP%2F%2BhtJJS0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNXCRPfGTc6z160AmircAwodV0D1xSTHNiZ617GsjIlAN0uKJrlAk79Fxq7DcH9YtbC9%2Bfs5uPBUUIr7Z020VZ%2FmGjOfc5rjYA%2FxR%2BV0p0hbAo9iFbFxZXGkEvfKt%2Fkpz%2FQVByS2s%2FbA0r%2FG21XDg2k%2BC%2BJRv2ZWxOJ%2FdoeqKQwxx6vby7oDaj4kQRLQ4ArrPv13TRQUZDVNqRJrUX9z9r3bquMYuC4s5SOh%2BXkR6lRCAxfHoxK9Zw67WxsjMn3%2B0rZsgXkhn1YX0kmM8597QtyDgeULnB0fZkPkCAtHndVVyBqgCC6MhaJDLr0XZWC4TE2mNSTI5ZnytqsFgDC%2Fa%2F5RihCoPW52Te8zNTACUxhxrOcUi5QUjkc9Xg7F8HDyykGaPypBkQ44%2FXUioN3INVObtIN7oZQV4j3vg%2BuoaU95vVZBsSBplvMmxYEByQcxmbgN8NqRXnG3NHftV3CHKFVJGr%2F%2BOiuSl0HowMp1jS9Gg%2BCemXEBzOWY9bqsTLfzNsyjOMz08%2F2BuKaNqAOKe4tndTHr%2FVyK1Z64BRC9ri%2BM1Ng2dQPUqOBO8cbAeXNn5FWYUISJHTBfBXd9IIq9GoNiXfwQLkVAYxZ7aO3W1qF%2FTnuBBv%2Bo%2FkNduHp8J8zlCNdk9lmeAWXgJ8SHMNOYzckGOqUB507jiU7%2F2HhsRxm4U0jl4OY4MhFLXUChuzNZ85d7HeN1MY7DqhFfhLrk3amV%2B1zS1ZtlXK1MR3IiThrFB6hNdC9D6Q0Lp3IOl4qybKsJrjNBVYgkjHXGoqQQA9qTEsMv3lGvpTkJz%2B7aL%2F9l3sTqRQ4vNoMBfX5O0kxOzZPLzuuE8FSktcIjxu1lAw5UFjGvM6iRSbt%2FpS7t354eYZ1EJQueHXuW&X-Amz-Signature=c89884a0beeddac0c8bb2a89ca93acceedf0f8bcf38c0a80905160c84c40fef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAMXZLHG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHrl9LOhLA%2Byn5EEX64%2BcwzqKmV4x0EZc4PxyKBhhys%2BAiEApIB%2FzCTEBWagHhNICKMlYDu9Mm0aaGkOAdP%2F%2BhtJJS0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDNXCRPfGTc6z160AmircAwodV0D1xSTHNiZ617GsjIlAN0uKJrlAk79Fxq7DcH9YtbC9%2Bfs5uPBUUIr7Z020VZ%2FmGjOfc5rjYA%2FxR%2BV0p0hbAo9iFbFxZXGkEvfKt%2Fkpz%2FQVByS2s%2FbA0r%2FG21XDg2k%2BC%2BJRv2ZWxOJ%2FdoeqKQwxx6vby7oDaj4kQRLQ4ArrPv13TRQUZDVNqRJrUX9z9r3bquMYuC4s5SOh%2BXkR6lRCAxfHoxK9Zw67WxsjMn3%2B0rZsgXkhn1YX0kmM8597QtyDgeULnB0fZkPkCAtHndVVyBqgCC6MhaJDLr0XZWC4TE2mNSTI5ZnytqsFgDC%2Fa%2F5RihCoPW52Te8zNTACUxhxrOcUi5QUjkc9Xg7F8HDyykGaPypBkQ44%2FXUioN3INVObtIN7oZQV4j3vg%2BuoaU95vVZBsSBplvMmxYEByQcxmbgN8NqRXnG3NHftV3CHKFVJGr%2F%2BOiuSl0HowMp1jS9Gg%2BCemXEBzOWY9bqsTLfzNsyjOMz08%2F2BuKaNqAOKe4tndTHr%2FVyK1Z64BRC9ri%2BM1Ng2dQPUqOBO8cbAeXNn5FWYUISJHTBfBXd9IIq9GoNiXfwQLkVAYxZ7aO3W1qF%2FTnuBBv%2Bo%2FkNduHp8J8zlCNdk9lmeAWXgJ8SHMNOYzckGOqUB507jiU7%2F2HhsRxm4U0jl4OY4MhFLXUChuzNZ85d7HeN1MY7DqhFfhLrk3amV%2B1zS1ZtlXK1MR3IiThrFB6hNdC9D6Q0Lp3IOl4qybKsJrjNBVYgkjHXGoqQQA9qTEsMv3lGvpTkJz%2B7aL%2F9l3sTqRQ4vNoMBfX5O0kxOzZPLzuuE8FSktcIjxu1lAw5UFjGvM6iRSbt%2FpS7t354eYZ1EJQueHXuW&X-Amz-Signature=2934f0f92f7a27630f9d51d6f6bdc276b393659e9ca794e215695dcf0bbbdf2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

