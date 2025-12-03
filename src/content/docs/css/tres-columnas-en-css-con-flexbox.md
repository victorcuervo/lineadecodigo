---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JEL7QI6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEwHbznAgBH3zYzHQp%2BajzXMLtzMAy15fBTcLycNfoO3AiEA1TgVfYQB6DtewAuFJezxcnojUGlwNahi2r5634yvYSQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKsBT9bJS8Yl2yrlwCrcA2yI%2FNqVrmIoFkHLhuw9Z31lpBmATj20Hse0QXvNYXRBMfPgz0gBkCRUio5w6ASBoznEERfJBqYQpl3Zyqk8kUvAY5oUmIHlaQsicOaTjn53yIA4Ha0tGimDa8Ao0DLyeeAqRdER7Eb6ohXzhTzKeX2%2FQVjAgT1m0eY6vOOIUsffDvHEWTqBS%2BI04mQSNfRFzPOutxVSEuYU%2FCCoFV1yxy4a5ceVnz9toU5xqjydydg4iVDlOuMchukpj1KsRnrOYNWKOO2jwvuQN8OjiWoTaxRoxSTWutVGc%2BWtshkcbvLY1Iy%2BxmHLg3udhu7SdiITOgtNPXkzno9FtDXktf%2BehkFXiwzBz7kDj4FXNmYWldBe%2BEZP87ExMJgKDdUV%2Fl9MljRyC9mHiK8VifUY9ae7U%2F9B20QnWDjCJTOA1QFWvTyVkEPUC2XHQ1HNTvuts0jOzoed6JW9LY7Wg4zkIPKf9ME7utiqqwZynjSVRyPRFjKXITv9MAqT%2BfqRvF%2Bk6RxZ%2FOF7FJhU8iidNP7Yg2rOC%2B2Vyc7l%2BHrT4vnBRbPuoZOzr2qdlKzLx5%2FezGF%2FcYsrxx7426hgIxuB1Bb7PcE634OpVxca6Q8CZ0d7NFStfGaRp%2FWmd7vpHCq4F4CbMMX3wskGOqUBMyOqXcezWQeOPzlWgIuEWuM08hYk8ZqtHvYZvOqTce7yOtjU0ypD2vdOQWcksW%2F5thhm%2BIXVOtmfpAlbkA7NOTbRZDc%2F567LUZgLymNjBlYhAzxWLGr%2Bc6aFVpr1Abp6YdXPnDReKchRb6FkazIvgjRWglhuNofABKe7rL2d03PnrkXCHWBUSkaOAgVxeBeICzfNBz5SbohDUyP10XuBOXXRLv16&X-Amz-Signature=0e81f24e99e51025e59d29afab41535e6237a36ae33ddd6dcdc8231d0c2f0dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JEL7QI6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIEwHbznAgBH3zYzHQp%2BajzXMLtzMAy15fBTcLycNfoO3AiEA1TgVfYQB6DtewAuFJezxcnojUGlwNahi2r5634yvYSQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDKsBT9bJS8Yl2yrlwCrcA2yI%2FNqVrmIoFkHLhuw9Z31lpBmATj20Hse0QXvNYXRBMfPgz0gBkCRUio5w6ASBoznEERfJBqYQpl3Zyqk8kUvAY5oUmIHlaQsicOaTjn53yIA4Ha0tGimDa8Ao0DLyeeAqRdER7Eb6ohXzhTzKeX2%2FQVjAgT1m0eY6vOOIUsffDvHEWTqBS%2BI04mQSNfRFzPOutxVSEuYU%2FCCoFV1yxy4a5ceVnz9toU5xqjydydg4iVDlOuMchukpj1KsRnrOYNWKOO2jwvuQN8OjiWoTaxRoxSTWutVGc%2BWtshkcbvLY1Iy%2BxmHLg3udhu7SdiITOgtNPXkzno9FtDXktf%2BehkFXiwzBz7kDj4FXNmYWldBe%2BEZP87ExMJgKDdUV%2Fl9MljRyC9mHiK8VifUY9ae7U%2F9B20QnWDjCJTOA1QFWvTyVkEPUC2XHQ1HNTvuts0jOzoed6JW9LY7Wg4zkIPKf9ME7utiqqwZynjSVRyPRFjKXITv9MAqT%2BfqRvF%2Bk6RxZ%2FOF7FJhU8iidNP7Yg2rOC%2B2Vyc7l%2BHrT4vnBRbPuoZOzr2qdlKzLx5%2FezGF%2FcYsrxx7426hgIxuB1Bb7PcE634OpVxca6Q8CZ0d7NFStfGaRp%2FWmd7vpHCq4F4CbMMX3wskGOqUBMyOqXcezWQeOPzlWgIuEWuM08hYk8ZqtHvYZvOqTce7yOtjU0ypD2vdOQWcksW%2F5thhm%2BIXVOtmfpAlbkA7NOTbRZDc%2F567LUZgLymNjBlYhAzxWLGr%2Bc6aFVpr1Abp6YdXPnDReKchRb6FkazIvgjRWglhuNofABKe7rL2d03PnrkXCHWBUSkaOAgVxeBeICzfNBz5SbohDUyP10XuBOXXRLv16&X-Amz-Signature=56292ce15351a5e90c9e4ce2304a36c07c5cc77a211f2c12ca4f63e6bae4a5b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

