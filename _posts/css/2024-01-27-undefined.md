---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJDIY3C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGo%2FPGoWtZo5MUzpSTNQfvpHv5B0sn5SGJWODwSI%2F5W4AiEAoZVzOM0%2Btc%2BLpZxJvauueNz5z4OJviWqHnWyTtqYQioq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEnmTVkJgml0TaSoXSrcA0qzjd7FNO12%2BM9XtffdZhy9hSI7uluBA%2F1lrsAtJj7AqrkvcW8KYMbRaJmOhdpdwzkXccj5hepHpaCVlmCKfHs775WkKpnS6RPa%2FFN1u5R6MuuI4y9NiaK6x060ePVXY3UoRmJBANqJmXD0%2BlaEIGTu4qWX3uhHX3Nz7w8SQKQs8s8u8XHFRPczPQys8%2BzY4U7oPmfySJmXcD5zeewNNueNZBVNyUTu39NL%2BBsbBPtxN%2B1HmwjmIaQxiO%2Fis%2B6nqJ4YQP2fksCLeCVi4r9stHtW93IQz4z8zYymqbLGGVhPuBo3OxTK2Ok2Vh8t6uvRcTxcxFCQpwhwaibBurJnOc7D70w%2BNQ0K%2BgsPeoKgCUUIqxMomh0fPBM1TzrLTj%2FS9YwUh6j9FSVqURAKnE0dQ3rdTp0F660MDk%2FXwN9W11yiMTnpFCX%2FijJ2bvWeJTtMPifxwsFv0w4K2s6psro82RKla%2FOnhZuJV21Erpp%2BjRraDAl%2BsAMs0g8n%2FOhPaBwEUey76p%2Fp4i6coZ1Eg0i0klAQJYXkTHhZ%2BNdxpOJ4MhgTNE3pR8pazjXU%2FIf%2FVsSVtYlRjn241nIN7TbhFNCmgo0IMK05Lh1FLr%2BSQT1CSeBkIrDYTaoJ%2BWlg2PZPMNubv8kGOqUBfzG9Ay6iBaSNWRRjIYV2d75%2FqLzq%2BCgw%2BXUZbylAS2vldo4OXtQSKMBErCS%2B5Qv8EFymKuzar9lCw3lBptriU4s6PfwS8Pecfbl1I0Ao9lFLTYYavHkDkV1rtIhnjt0fQ9WEA7qKlA%2BaQi3R7pCl9hKpPpBOnMzonlx2fiCZ2a9i1xxnIPa1a1QYLIxazYR3dNK6CwIsQVqYvcTjAOLnRVKRHWec&X-Amz-Signature=2fc1f009cf614f979ceab88faab52bad3a605c076fc323f8e403bea28bbb6842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWJDIY3C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGo%2FPGoWtZo5MUzpSTNQfvpHv5B0sn5SGJWODwSI%2F5W4AiEAoZVzOM0%2Btc%2BLpZxJvauueNz5z4OJviWqHnWyTtqYQioq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEnmTVkJgml0TaSoXSrcA0qzjd7FNO12%2BM9XtffdZhy9hSI7uluBA%2F1lrsAtJj7AqrkvcW8KYMbRaJmOhdpdwzkXccj5hepHpaCVlmCKfHs775WkKpnS6RPa%2FFN1u5R6MuuI4y9NiaK6x060ePVXY3UoRmJBANqJmXD0%2BlaEIGTu4qWX3uhHX3Nz7w8SQKQs8s8u8XHFRPczPQys8%2BzY4U7oPmfySJmXcD5zeewNNueNZBVNyUTu39NL%2BBsbBPtxN%2B1HmwjmIaQxiO%2Fis%2B6nqJ4YQP2fksCLeCVi4r9stHtW93IQz4z8zYymqbLGGVhPuBo3OxTK2Ok2Vh8t6uvRcTxcxFCQpwhwaibBurJnOc7D70w%2BNQ0K%2BgsPeoKgCUUIqxMomh0fPBM1TzrLTj%2FS9YwUh6j9FSVqURAKnE0dQ3rdTp0F660MDk%2FXwN9W11yiMTnpFCX%2FijJ2bvWeJTtMPifxwsFv0w4K2s6psro82RKla%2FOnhZuJV21Erpp%2BjRraDAl%2BsAMs0g8n%2FOhPaBwEUey76p%2Fp4i6coZ1Eg0i0klAQJYXkTHhZ%2BNdxpOJ4MhgTNE3pR8pazjXU%2FIf%2FVsSVtYlRjn241nIN7TbhFNCmgo0IMK05Lh1FLr%2BSQT1CSeBkIrDYTaoJ%2BWlg2PZPMNubv8kGOqUBfzG9Ay6iBaSNWRRjIYV2d75%2FqLzq%2BCgw%2BXUZbylAS2vldo4OXtQSKMBErCS%2B5Qv8EFymKuzar9lCw3lBptriU4s6PfwS8Pecfbl1I0Ao9lFLTYYavHkDkV1rtIhnjt0fQ9WEA7qKlA%2BaQi3R7pCl9hKpPpBOnMzonlx2fiCZ2a9i1xxnIPa1a1QYLIxazYR3dNK6CwIsQVqYvcTjAOLnRVKRHWec&X-Amz-Signature=f5e47050f65d23c08e211d6b86240a8e114d1db24f326f089019d600ccb301ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

