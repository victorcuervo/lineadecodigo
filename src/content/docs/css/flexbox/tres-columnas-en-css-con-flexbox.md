---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAOWH5GS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkxU%2FSCuORPRYwjgQC9H1Jrw2ZSqFXxWH5Tr96iel0wIhAIrpWnMwgq57495lYNrcaa%2FRVZDSBwFVg9JMo0Ymm957KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyvSXhR73eVxLXEk8q3APhejSns5GLyjn9nBOR3lCcFpZWBl8emOwkdcthekIwaGjX3eGIlm3IvKGla0uUvgnqKldaQSPNmg6xo1ZpB%2BA2pc%2Fl8YCrkoi42Sr57n5gyPpKYRZN7pHrUef6qIVPMBhIZ3QmZheJ93jZYHr7KMM9Bl9%2BQrXdmcby8gfQCxfhShQLrr2%2FsieYLZt%2BbxPEzU1Rn%2FP7cY%2BdmrO%2BJGjMaXTO6xh7I1C%2FDXG4mp0tajzzs6BpMs%2FkiGlGLogkMFespKKXXIWDrf%2BVJ9emb4XPQEjaW2g5uVaWcM6l47PhY%2BX9YV1Q7vd3BC8IwWYZlBLFGOcN0a4pKaUbur7oIqMQ7Wyaha2AHc%2F99duyaHZdTwfnrCfmUmdaWuSgI6QMjOsDBmDGuUb6qQKh7ChqpkHgzZy6MqChgWpBhfwJUYpAGzAVq4pBl3VZ5VxHhvXjgc7mDVj%2FJPLqt5BmZPSpK3AhY1belSen7coH6JcWmGT5Lpwl%2BhsUsb63P8xKGrvaUniVbVxF64UGIis3dc3VJHZMXYVFqcWOk%2BmLDheEL4Jzx6pspMYKJZW9pp%2F86NQiIKP%2FBcn7CVeA9n0oyGPALI5UVs7zU7nN9ZK7p%2Bx1FETpL8PY0G88o7klPhwWydzA0zDVxN%2FJBjqkAX%2B%2FS4jYmh0wPNFDD1kSL0LJmEEkD8CliZGyiOK5Kkvx5eToUlV879hCcgV0AFTvxUEK3CLnARk1WR6y%2Bt4ZUPSdePY0VLxkLkgurs6lvKZsgGWMNw879gWV4rPrmmJzGTdpYibn0V6yt0nSOXhZJD3MQUcGbT%2BC5zxi8znwhFM%2BgCGsRn1VkcmzGzmmTltEW1lukMeCM62nhCzo3CokTAcHeDWl&X-Amz-Signature=a4a7dff08715a3251ac2fa87ddc6812addcfa02fe0e8f62f0a49f8acf2740f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAOWH5GS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIkxU%2FSCuORPRYwjgQC9H1Jrw2ZSqFXxWH5Tr96iel0wIhAIrpWnMwgq57495lYNrcaa%2FRVZDSBwFVg9JMo0Ymm957KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyvSXhR73eVxLXEk8q3APhejSns5GLyjn9nBOR3lCcFpZWBl8emOwkdcthekIwaGjX3eGIlm3IvKGla0uUvgnqKldaQSPNmg6xo1ZpB%2BA2pc%2Fl8YCrkoi42Sr57n5gyPpKYRZN7pHrUef6qIVPMBhIZ3QmZheJ93jZYHr7KMM9Bl9%2BQrXdmcby8gfQCxfhShQLrr2%2FsieYLZt%2BbxPEzU1Rn%2FP7cY%2BdmrO%2BJGjMaXTO6xh7I1C%2FDXG4mp0tajzzs6BpMs%2FkiGlGLogkMFespKKXXIWDrf%2BVJ9emb4XPQEjaW2g5uVaWcM6l47PhY%2BX9YV1Q7vd3BC8IwWYZlBLFGOcN0a4pKaUbur7oIqMQ7Wyaha2AHc%2F99duyaHZdTwfnrCfmUmdaWuSgI6QMjOsDBmDGuUb6qQKh7ChqpkHgzZy6MqChgWpBhfwJUYpAGzAVq4pBl3VZ5VxHhvXjgc7mDVj%2FJPLqt5BmZPSpK3AhY1belSen7coH6JcWmGT5Lpwl%2BhsUsb63P8xKGrvaUniVbVxF64UGIis3dc3VJHZMXYVFqcWOk%2BmLDheEL4Jzx6pspMYKJZW9pp%2F86NQiIKP%2FBcn7CVeA9n0oyGPALI5UVs7zU7nN9ZK7p%2Bx1FETpL8PY0G88o7klPhwWydzA0zDVxN%2FJBjqkAX%2B%2FS4jYmh0wPNFDD1kSL0LJmEEkD8CliZGyiOK5Kkvx5eToUlV879hCcgV0AFTvxUEK3CLnARk1WR6y%2Bt4ZUPSdePY0VLxkLkgurs6lvKZsgGWMNw879gWV4rPrmmJzGTdpYibn0V6yt0nSOXhZJD3MQUcGbT%2BC5zxi8znwhFM%2BgCGsRn1VkcmzGzmmTltEW1lukMeCM62nhCzo3CokTAcHeDWl&X-Amz-Signature=50d08fbe4a1567d86f3b58a094b797bb52fb43882af8209dc0815b6a03a3c150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

