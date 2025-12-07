---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQPM2CBC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEdZiFhZRfajqw%2F3o3eabYbIGx7FeHqDeEZ9vqNIbdNwIhAKeb70IiL3otD1SSm1VIob%2FHUhlgxuMMH5Enug2EXkOTKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM9%2Bp6Is6CJB3YGooq3AN%2FybwuTb592%2FcZnbN%2FOYM3OlpNifwasKQgOAtww%2BnXOZdgpOI01LBo3z05yHSmP68xM9BsOPS00Cc4%2BUdN%2ByOpIcDSgyGlhW9SyR6ZaiYqi5tZqD3wTwzkRiNeU8Bn1QchimqNBe3II9Uzq2rK%2BzifjLZPbVyfxXXLW1nAtb3t9SqM%2F%2FtQ%2Bs%2FRuUkDL7fOy%2BSFo90GTD%2FP%2Fkyzg1uSCjM5ODFh1hB3hrpaK2q12h%2BT7aVKvDFTa5paFY3%2FwQaBhSGZR8iB6lvas%2B5EYTq46WYFHf4b0PwPbd5znSE%2BzcxVALDOQ124qeAEQcxgWIC8m0YYSidpUNcH6U5vn6Y%2FVypOZnPpLMSSVbNmQI4tByUN8vbQorO5dziF3lM0UFUhlj85Y8tD%2FBXmloWJg5UR%2By%2FkzqDTleS69NpRA6gjIpq6qgibp97IIhj37X1RPgu7fJzFBReSN0gWL51Fy6AHq17dEGGfJQvpMYcp%2BzPHkJLE3xrwfyMnOyJA4LyfdePm%2BhRM6kuvlet6l3xULH9%2BTPjSFtRq5XIevqd%2BBevd%2Fw40sVUcSPVCERbhbSNtIh655R4kYUpxb8UnGyRqy3ex1ui3jUibiG90LPuJ27mTtmKeNWPxIGZvzP74NsqExjD9o9TJBjqkAcSnCJOhLK0AzeMF3tHLVmBJtDQobnZUgBAq3g7I9Dm%2FPinP6DlfTYb9utw%2FtHay0VVYWrxfFJPDGzKnmcrJ7F2HTqCcjL1SxH4CPIrPN%2Bh9COUoQW3hsAd%2F8BktWfVWaxW3KXuYQJEmFD5zDpN92ya2KdeqFfI0Mz%2F4hwVVHqTgzUR7xkahs2%2BNnXPwrSsGv%2Bl2IXGXKohGEVA3LdGd1svG4sAn&X-Amz-Signature=560f7db0adbc31e0cfd6e87e7b041b2602deacf4577adceec37ea654eab61dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQPM2CBC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T092334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEdZiFhZRfajqw%2F3o3eabYbIGx7FeHqDeEZ9vqNIbdNwIhAKeb70IiL3otD1SSm1VIob%2FHUhlgxuMMH5Enug2EXkOTKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxM9%2Bp6Is6CJB3YGooq3AN%2FybwuTb592%2FcZnbN%2FOYM3OlpNifwasKQgOAtww%2BnXOZdgpOI01LBo3z05yHSmP68xM9BsOPS00Cc4%2BUdN%2ByOpIcDSgyGlhW9SyR6ZaiYqi5tZqD3wTwzkRiNeU8Bn1QchimqNBe3II9Uzq2rK%2BzifjLZPbVyfxXXLW1nAtb3t9SqM%2F%2FtQ%2Bs%2FRuUkDL7fOy%2BSFo90GTD%2FP%2Fkyzg1uSCjM5ODFh1hB3hrpaK2q12h%2BT7aVKvDFTa5paFY3%2FwQaBhSGZR8iB6lvas%2B5EYTq46WYFHf4b0PwPbd5znSE%2BzcxVALDOQ124qeAEQcxgWIC8m0YYSidpUNcH6U5vn6Y%2FVypOZnPpLMSSVbNmQI4tByUN8vbQorO5dziF3lM0UFUhlj85Y8tD%2FBXmloWJg5UR%2By%2FkzqDTleS69NpRA6gjIpq6qgibp97IIhj37X1RPgu7fJzFBReSN0gWL51Fy6AHq17dEGGfJQvpMYcp%2BzPHkJLE3xrwfyMnOyJA4LyfdePm%2BhRM6kuvlet6l3xULH9%2BTPjSFtRq5XIevqd%2BBevd%2Fw40sVUcSPVCERbhbSNtIh655R4kYUpxb8UnGyRqy3ex1ui3jUibiG90LPuJ27mTtmKeNWPxIGZvzP74NsqExjD9o9TJBjqkAcSnCJOhLK0AzeMF3tHLVmBJtDQobnZUgBAq3g7I9Dm%2FPinP6DlfTYb9utw%2FtHay0VVYWrxfFJPDGzKnmcrJ7F2HTqCcjL1SxH4CPIrPN%2Bh9COUoQW3hsAd%2F8BktWfVWaxW3KXuYQJEmFD5zDpN92ya2KdeqFfI0Mz%2F4hwVVHqTgzUR7xkahs2%2BNnXPwrSsGv%2Bl2IXGXKohGEVA3LdGd1svG4sAn&X-Amz-Signature=01ffe14ef7bd4a2d077e708ce3c5cd0cbf42b0ad47337a9efcd2512a547eb7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

