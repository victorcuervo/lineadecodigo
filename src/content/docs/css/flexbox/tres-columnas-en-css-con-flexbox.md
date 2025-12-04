---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF6TCCR5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDQYsw%2BVK1%2FUJ%2BGPFQicuELOs0n1BhyTQfe1oN0C0EZOgIhANNzXSIzocP%2BtlAWXdZkMmWMAC6X9fg461LZXlOxi7xwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzBQQU2SGeqSWLPyDAq3APGkAHgGMv9vJ9H1NqwhciRPo1XTo0KMLCaSjIs55ob6%2Boc6VkQmkSTcj6sAaw3By%2BeHdwMMf0jSeL3cUI7l6agicd2d23qvYietRPxr7nw7ofDmzdILTyUsKuGO8vFmD%2Ben8ATbrYAHYBcjGmN4cH4VOU2J5AojDH%2FISf4K6%2BKWaI110NUzr7KTC%2FIPI8a46ed2iSbusIQEOKD9bZW4kGYFhzRkDX8wbp5gxwGsRm9wA2K%2Bk1ML06stkvgspdTPya6K9WS6RgYM9aI8mpDARgnECqqPd89igZvoBScsJkDsAmkeHcpRpcFz9FPgQdSRZBjMURADzgxyq7FtywVrayUrG54%2B13b8JfTBOS2mQLT%2BiCbesh24bLemLngOgZNdtLeDioPV7Rc4Ezoo1n1LbzT1bYBOltjhlKp0sn%2BPpevf3r97ityIWTg3IXv04SmxutcQWChLJnf9PjZCf3FTeXvhl34SnFAXdJ%2FPZy%2B5V1TQqTrZL80l5DmqC0oe5d8iGnsBeZUhqBP%2BIh2Iv4qKrHheUOCTPF6wdVzuTBsTLI6h21HhQftjjMztM7dD8N6PM1Y8z7By6HVC2osgMzCT4pf9R2DRF3221yTAHlmB5OMh2tHihBPo3gTp3GnGzDm5sXJBjqkAVnLzebnuGRSl64weWSde13WzYg059LfY5Pkj7ZonDJFJAUn0X%2FPDDFuUoUoZ1u%2BrIAnZMUo8PNdDGQmCgytriM1LW7tgX7cfy8S%2BCXuieYIPi7PSl5AOZs0YZFp9PpOTwzpn%2BulYpEViKHcR7WlInnN1P6mh8bma%2B4si847jtcadYWBtudkgZ3elM6i4xgduLTknd%2Bk2JJ%2BW7GuAbq50Yl5kmfo&X-Amz-Signature=896a4b7e8b5a57ac0acd278b98808ef6442a3af57d68203b463b6dcf0384f91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF6TCCR5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDQYsw%2BVK1%2FUJ%2BGPFQicuELOs0n1BhyTQfe1oN0C0EZOgIhANNzXSIzocP%2BtlAWXdZkMmWMAC6X9fg461LZXlOxi7xwKv8DCEUQABoMNjM3NDIzMTgzODA1IgzBQQU2SGeqSWLPyDAq3APGkAHgGMv9vJ9H1NqwhciRPo1XTo0KMLCaSjIs55ob6%2Boc6VkQmkSTcj6sAaw3By%2BeHdwMMf0jSeL3cUI7l6agicd2d23qvYietRPxr7nw7ofDmzdILTyUsKuGO8vFmD%2Ben8ATbrYAHYBcjGmN4cH4VOU2J5AojDH%2FISf4K6%2BKWaI110NUzr7KTC%2FIPI8a46ed2iSbusIQEOKD9bZW4kGYFhzRkDX8wbp5gxwGsRm9wA2K%2Bk1ML06stkvgspdTPya6K9WS6RgYM9aI8mpDARgnECqqPd89igZvoBScsJkDsAmkeHcpRpcFz9FPgQdSRZBjMURADzgxyq7FtywVrayUrG54%2B13b8JfTBOS2mQLT%2BiCbesh24bLemLngOgZNdtLeDioPV7Rc4Ezoo1n1LbzT1bYBOltjhlKp0sn%2BPpevf3r97ityIWTg3IXv04SmxutcQWChLJnf9PjZCf3FTeXvhl34SnFAXdJ%2FPZy%2B5V1TQqTrZL80l5DmqC0oe5d8iGnsBeZUhqBP%2BIh2Iv4qKrHheUOCTPF6wdVzuTBsTLI6h21HhQftjjMztM7dD8N6PM1Y8z7By6HVC2osgMzCT4pf9R2DRF3221yTAHlmB5OMh2tHihBPo3gTp3GnGzDm5sXJBjqkAVnLzebnuGRSl64weWSde13WzYg059LfY5Pkj7ZonDJFJAUn0X%2FPDDFuUoUoZ1u%2BrIAnZMUo8PNdDGQmCgytriM1LW7tgX7cfy8S%2BCXuieYIPi7PSl5AOZs0YZFp9PpOTwzpn%2BulYpEViKHcR7WlInnN1P6mh8bma%2B4si847jtcadYWBtudkgZ3elM6i4xgduLTknd%2Bk2JJ%2BW7GuAbq50Yl5kmfo&X-Amz-Signature=045f496a4c12c90ba48e14b0ff120830b3984a2ad7878ac4a69e35fb4cc79207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

