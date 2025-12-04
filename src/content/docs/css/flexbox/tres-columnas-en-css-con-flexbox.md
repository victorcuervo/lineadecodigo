---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMZK7P5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC8oYma6V%2BwIdkoT8BjgKCcpV6BhX9SXKGDBl4hXExjCwIhANtXKatx5ZlOc9vs38BKcDcrWXKjgaHxpXgHc4ksFyVWKv8DCD8QABoMNjM3NDIzMTgzODA1Igy0VtYatT4MrDZPpa4q3ANnjJvRF1PbLdufr9vNp%2F22HRRi%2BIf%2BWt6BS2XvefulU%2BaU5tg7bAvNHVXmP5TZ8tHsZghoF7Hd3bos5lRXQYVlswNFRSCXYlGQgsR9nRqchyTe58UMePaThL5WUHbefUejT%2BsRy0GTVXt6IECgfLb%2Fh8tBCo4qIH58FWooYMeS8%2F6XJlUdEhRp9ZT8z2zGmYz5eP1w5uIBiPHllMQS%2BP4UHuf9pxRIuKzp45NxAvyumDvmFUK04Gd843tOH9H5HIjCch51J3kI%2FPOBgaa7klNj4%2FzuwBFO4nQXV6QfjBj4xM3IAdw9UkxKVfy5UxrcN14DYp4uiKFZ4STXRjAkO%2FU1U8otSH%2BkSoTY206FguRrsl66ZsedvB9wvSH9EH%2BFCCFXy8yBGVxDxSzJSEhHMKoWGw7WJllAiqhG8Tt3c3ewBExJOyROWCaHyou5cJd7ehxiEmdqSeEStrz6EthtFIiFHiFyPcvuYW9E4AgPUEP4Y8eM%2FTmvu44Zqp26VQu3dbHb2qjKjgxQ1iA1YdO5FnxIByT2fPScs1TewhHMHNZ11kLbAiYdlKfrHRL6KWWFtibwxG%2FbQFVQo3E2Gs9sAPuf3qXPgiND2qpPXZEnxnLqXsTp1NNgSSA1iO4X0TCuy8TJBjqkAZYES3fve1%2F1x6fgYGaUV1NPe0YsG%2BvzoUcKSQD%2BpMo1hYbGxhcw502MBGks2LBx2SavHqjttY4uYOoEdUMVHfcKGFzv4RxzKJIESG80%2F4CVvplmN7L6MJguyX0qDCsESxoX4jRkuIyN3o3ceSGAKoOCd6qYWc7%2FcLAGrPzxsXsfllu240TssnNTvJAjp1OJAMlhU4xXhpL%2BQBIE%2FqNvvuSVCRkQ&X-Amz-Signature=23e81c023d5d30c67cebc11e6487bc7decdd7436f8e59b224d9c5628afb784e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMZK7P5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQC8oYma6V%2BwIdkoT8BjgKCcpV6BhX9SXKGDBl4hXExjCwIhANtXKatx5ZlOc9vs38BKcDcrWXKjgaHxpXgHc4ksFyVWKv8DCD8QABoMNjM3NDIzMTgzODA1Igy0VtYatT4MrDZPpa4q3ANnjJvRF1PbLdufr9vNp%2F22HRRi%2BIf%2BWt6BS2XvefulU%2BaU5tg7bAvNHVXmP5TZ8tHsZghoF7Hd3bos5lRXQYVlswNFRSCXYlGQgsR9nRqchyTe58UMePaThL5WUHbefUejT%2BsRy0GTVXt6IECgfLb%2Fh8tBCo4qIH58FWooYMeS8%2F6XJlUdEhRp9ZT8z2zGmYz5eP1w5uIBiPHllMQS%2BP4UHuf9pxRIuKzp45NxAvyumDvmFUK04Gd843tOH9H5HIjCch51J3kI%2FPOBgaa7klNj4%2FzuwBFO4nQXV6QfjBj4xM3IAdw9UkxKVfy5UxrcN14DYp4uiKFZ4STXRjAkO%2FU1U8otSH%2BkSoTY206FguRrsl66ZsedvB9wvSH9EH%2BFCCFXy8yBGVxDxSzJSEhHMKoWGw7WJllAiqhG8Tt3c3ewBExJOyROWCaHyou5cJd7ehxiEmdqSeEStrz6EthtFIiFHiFyPcvuYW9E4AgPUEP4Y8eM%2FTmvu44Zqp26VQu3dbHb2qjKjgxQ1iA1YdO5FnxIByT2fPScs1TewhHMHNZ11kLbAiYdlKfrHRL6KWWFtibwxG%2FbQFVQo3E2Gs9sAPuf3qXPgiND2qpPXZEnxnLqXsTp1NNgSSA1iO4X0TCuy8TJBjqkAZYES3fve1%2F1x6fgYGaUV1NPe0YsG%2BvzoUcKSQD%2BpMo1hYbGxhcw502MBGks2LBx2SavHqjttY4uYOoEdUMVHfcKGFzv4RxzKJIESG80%2F4CVvplmN7L6MJguyX0qDCsESxoX4jRkuIyN3o3ceSGAKoOCd6qYWc7%2FcLAGrPzxsXsfllu240TssnNTvJAjp1OJAMlhU4xXhpL%2BQBIE%2FqNvvuSVCRkQ&X-Amz-Signature=3ec182f54103396faf3f1f080ce6b9c46ba6350b8137da44a030bbc7247c487b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

