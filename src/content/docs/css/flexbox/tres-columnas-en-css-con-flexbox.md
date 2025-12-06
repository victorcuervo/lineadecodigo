---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QZJCZI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3uE5uyszUFUVGuuZGbbvZVY5VrnVfl0%2F0KxRax%2Bv7aQIhALjlfDLxIeW0Q9MwTMKvT2wDce8lbL1JQLKxnZ8klcNyKv8DCHkQABoMNjM3NDIzMTgzODA1IgxcgRtTpQGh9JaKxZcq3AOa%2FfHI2jRhv3Yw8yRF%2BnPJGjOmrn3kKVUmpIiGJs0Xsq%2F8TwksGreFN0D13Siy%2Bvk8LTdMpiIwh%2BWjTOuZOV2Esj01PWT7ilcTvonnydVdGSL0UfLBDNylLN%2B8BjxcAmWwGDaFc4zXu2NvYvbLRs%2F6bR0gx9fxA8Edpn7oCpKfbM3gaE0K%2BPeztIL6E%2FxeRm5gWn5uC7x7v8X2KWF0S49TLnM3sqa8Ta2FlrL5Oo%2B%2BDrw0y9T7ahLD%2BwGTqGqrctY%2FpicLXmHGwdVJMd9OZxTkEnmnSFAwlJpbAVd4SZYOE99yW8pZYjWxK987CZIpNe1yfL592kKQWlLRhignRgSLDCu%2Bkc1IJKRilkYU1j32vFHPrEP6lFKAE9orFbQ%2FJ%2FSTtqH%2BYm9Q4ZdbL6TeFcmFka%2FMUyAJ7ke1Wj67SQdXOCETWccJhDXEtZaZOJfGO8skQQKndzhveJvR9ndiooFXSQ8AEEW9zqJOrKl7L2Za%2FvJR0thSfdLzXwSmkdGNVOMs9t3KJznGc%2BZsRoIxhUgDFpyCzK%2FkEmgbC%2BZah3fr5rPy94yPhSAlFXFF1z9O3AaxFr8UZa5ojrIxV6YF0LKpTxwp2i8J9axhiISHat0A1LyUMly1I8Vi0HAZSzCYrdHJBjqkAVsfLEPGMJSYDhRJzuj2B0yeMjaDOVaYSYuZlRvthNCBDmLEnpkJS3%2FDN3hIg3HYL0EIhfhTydnBdkoPqiBP1ybVJjRjpqEiRYb%2FXqyGDsFr%2BPoFH6pMhzoHdDd8NQE2S3lwTzLb3B%2BRXwZsUhdjvAgHhYcLF7ZS1cT4NfBuriveXuOt%2FPKSOa8rBWYlCWlK%2BgAGiXNW1xpjqAHahRizRUMjUgDQ&X-Amz-Signature=2da7a6ec330e6e71954a0c99975eba17031ea591155aac8275955ff242d95ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6QZJCZI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T185035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3uE5uyszUFUVGuuZGbbvZVY5VrnVfl0%2F0KxRax%2Bv7aQIhALjlfDLxIeW0Q9MwTMKvT2wDce8lbL1JQLKxnZ8klcNyKv8DCHkQABoMNjM3NDIzMTgzODA1IgxcgRtTpQGh9JaKxZcq3AOa%2FfHI2jRhv3Yw8yRF%2BnPJGjOmrn3kKVUmpIiGJs0Xsq%2F8TwksGreFN0D13Siy%2Bvk8LTdMpiIwh%2BWjTOuZOV2Esj01PWT7ilcTvonnydVdGSL0UfLBDNylLN%2B8BjxcAmWwGDaFc4zXu2NvYvbLRs%2F6bR0gx9fxA8Edpn7oCpKfbM3gaE0K%2BPeztIL6E%2FxeRm5gWn5uC7x7v8X2KWF0S49TLnM3sqa8Ta2FlrL5Oo%2B%2BDrw0y9T7ahLD%2BwGTqGqrctY%2FpicLXmHGwdVJMd9OZxTkEnmnSFAwlJpbAVd4SZYOE99yW8pZYjWxK987CZIpNe1yfL592kKQWlLRhignRgSLDCu%2Bkc1IJKRilkYU1j32vFHPrEP6lFKAE9orFbQ%2FJ%2FSTtqH%2BYm9Q4ZdbL6TeFcmFka%2FMUyAJ7ke1Wj67SQdXOCETWccJhDXEtZaZOJfGO8skQQKndzhveJvR9ndiooFXSQ8AEEW9zqJOrKl7L2Za%2FvJR0thSfdLzXwSmkdGNVOMs9t3KJznGc%2BZsRoIxhUgDFpyCzK%2FkEmgbC%2BZah3fr5rPy94yPhSAlFXFF1z9O3AaxFr8UZa5ojrIxV6YF0LKpTxwp2i8J9axhiISHat0A1LyUMly1I8Vi0HAZSzCYrdHJBjqkAVsfLEPGMJSYDhRJzuj2B0yeMjaDOVaYSYuZlRvthNCBDmLEnpkJS3%2FDN3hIg3HYL0EIhfhTydnBdkoPqiBP1ybVJjRjpqEiRYb%2FXqyGDsFr%2BPoFH6pMhzoHdDd8NQE2S3lwTzLb3B%2BRXwZsUhdjvAgHhYcLF7ZS1cT4NfBuriveXuOt%2FPKSOa8rBWYlCWlK%2BgAGiXNW1xpjqAHahRizRUMjUgDQ&X-Amz-Signature=3a4b339592e649624f6f54ce1fedb4381516a21b1589b8183c88a631469371be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

