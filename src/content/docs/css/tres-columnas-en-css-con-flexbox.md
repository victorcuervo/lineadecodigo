---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2BJ6UVT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC8doX8OXsq2d3R0quYHtCJnToAREaqMlSJCJFvB%2BUSBAIhAOHxD3KAVOMxnMFZlkeEt8Gg%2FOGi%2FqaV%2BZQNg46maiWsKv8DCDgQABoMNjM3NDIzMTgzODA1IgxGfu1Cy1E4Ulivsg4q3APGIIhSJk9B4aGtPyOjDoJre0BEavdgckEJ%2B27BVjhBTwfsZl3%2BjPeiSB%2B4ibRHXctedyYHxfZ%2FnmlnTdWCyhZkE1NUkCZBSLOlEep8Ir9gF3CQfpwdOkmX1Bh3TIYrMzEfjNLkUWhirJhr1O1O3osdx4RPgs82vZD907wADFvg8pF%2B1FZBLox%2BNzshwEqCUVm6mYcXtEMRnSak%2BRevC0vFH%2BJR1E3igy7q5dF%2FfiNfS1msQmUQgUI2GgH2VH%2FwMni1lfRQPo2vGUrSoMPogoF3jYX8lIXD7tmM3mmvMFUgO6BkC%2BvtMJCdjOFxvsitjG0KQCQdn4Q6gJ6y48h4SiEqgPc0wcQvmDO%2Bwetie1TAXquJt%2BiMMP12XItjZO6s0PVlD03fbt8LM8kapynBObR9fS1IbY9ZWNZ2b9ZKqxgCvzX3D8E4qUg6bNvH4sFzKL3QwlPoOasxJmfljxA1N5Oq1nCB%2BtlQyOutyyCAooIoozpC1s26mbk812UylD5QlRAAdGRdvFRC0BZyuO0RPh31lJPYqth7nz3qT9uUCvbrqL0EgnpqTr%2FdMZCVqBfrM5WbOqtdhRCKlegHI2eirSwTx3Zgniq7QccZAqqdww8ue4NcFyriivzmWvxhOzDV%2BMLJBjqkAeCOLdrgLBJMDA%2F0rPvA9I7KRAIpA7cZi%2BwN3uaYWkmAbq2tx%2BNChXyUwLIyt%2BnlYICMqFjpgRiA8L0L8y017bIShmvRg2KNGY%2B6kLbxxpw0CkLamEp85UqAw4gQGlLK14Y9qDdVoh3tAWQQFSb4npwBa%2BmbgHAWDJqLTdMkQ2XTM%2B09Lr3AJDks5rn4PSId31MSbQB8bctdrbEkL5tKUZImmBkp&X-Amz-Signature=85636bab11e90d2f0c1db9ea99254f83f2342b546cbb04c5390f58ca6b160204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2BJ6UVT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQC8doX8OXsq2d3R0quYHtCJnToAREaqMlSJCJFvB%2BUSBAIhAOHxD3KAVOMxnMFZlkeEt8Gg%2FOGi%2FqaV%2BZQNg46maiWsKv8DCDgQABoMNjM3NDIzMTgzODA1IgxGfu1Cy1E4Ulivsg4q3APGIIhSJk9B4aGtPyOjDoJre0BEavdgckEJ%2B27BVjhBTwfsZl3%2BjPeiSB%2B4ibRHXctedyYHxfZ%2FnmlnTdWCyhZkE1NUkCZBSLOlEep8Ir9gF3CQfpwdOkmX1Bh3TIYrMzEfjNLkUWhirJhr1O1O3osdx4RPgs82vZD907wADFvg8pF%2B1FZBLox%2BNzshwEqCUVm6mYcXtEMRnSak%2BRevC0vFH%2BJR1E3igy7q5dF%2FfiNfS1msQmUQgUI2GgH2VH%2FwMni1lfRQPo2vGUrSoMPogoF3jYX8lIXD7tmM3mmvMFUgO6BkC%2BvtMJCdjOFxvsitjG0KQCQdn4Q6gJ6y48h4SiEqgPc0wcQvmDO%2Bwetie1TAXquJt%2BiMMP12XItjZO6s0PVlD03fbt8LM8kapynBObR9fS1IbY9ZWNZ2b9ZKqxgCvzX3D8E4qUg6bNvH4sFzKL3QwlPoOasxJmfljxA1N5Oq1nCB%2BtlQyOutyyCAooIoozpC1s26mbk812UylD5QlRAAdGRdvFRC0BZyuO0RPh31lJPYqth7nz3qT9uUCvbrqL0EgnpqTr%2FdMZCVqBfrM5WbOqtdhRCKlegHI2eirSwTx3Zgniq7QccZAqqdww8ue4NcFyriivzmWvxhOzDV%2BMLJBjqkAeCOLdrgLBJMDA%2F0rPvA9I7KRAIpA7cZi%2BwN3uaYWkmAbq2tx%2BNChXyUwLIyt%2BnlYICMqFjpgRiA8L0L8y017bIShmvRg2KNGY%2B6kLbxxpw0CkLamEp85UqAw4gQGlLK14Y9qDdVoh3tAWQQFSb4npwBa%2BmbgHAWDJqLTdMkQ2XTM%2B09Lr3AJDks5rn4PSId31MSbQB8bctdrbEkL5tKUZImmBkp&X-Amz-Signature=7f9a7e04e6fcb49a770dbc6871de7e427f66c0e9e65c56ec9bbc200242c7a6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

