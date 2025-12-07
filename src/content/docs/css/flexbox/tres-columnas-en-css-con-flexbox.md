---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLCWYNH4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRvPKB12PT9F9NBwFYT%2BsZSCkOKQrW0QC2qluiqxqLLAiBpeE%2BMspvhUWUt2zfce%2BSPHGbVJmvxH26qdIwJSTCtsCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YvzSMWqfEijbdDhKtwDvLL69xl1j%2F8tB5tHkeZcS0t6K8Ckves5DbpNzc%2BL6%2BUFf%2B9wLCYhNBMMAV8iJ3XsWCe2Kvyanokmhy6k40tWHe%2FJBWXwTXOAXADESTYnWu4LosWK1AyN%2F6sIx9wK2BEZmvjIRVuYPBPHQto1t8hsrvmgo3k8rg2buEFVyrZ%2BplEVzpBSMc0a7HAIe6hcR6NNv07rEbgBGEYkI3TZicKVUzukuIPGuADEJZzgR85et1A5Lk%2FbmTFoMuKlk7tcWraN86viW8dq970bdVMIAQOwsyo4uZVsIrf54l7LnvKzA%2FdN97RBfKxMtu5dX2kFPzQMsCh8eMreGaOEu4smETq7sJ1cg8dDqJm5dyWT9XzitJbl5Svw5dGgepDQoMB%2F0isuFYajFHjfyQ1Lyj3ra0vSjVpka46yK3Rz6GOi1wXaQ%2BVxJ8%2Blm9pZhdFWNuCZQr0d9eheLcMFLbnX1%2F92NcoY%2BNKzcubSed6r27QN%2BrSFHg%2FfJgiUd%2BBwlbHbcjHEuS7m%2Bxx%2F3oNPBvzOHKZ62x5ZovF0x%2BbWd8VGIWPT%2FeBQEsDhE2ggKfwaYl4l8UFqH8E2qOBKVZBcmsUAqmlepguY928GxDMmezZWXq8ITHLOQEVTdHLxEJxMQ1dkGFkwopnVyQY6pgFi%2BVr%2FG6ahE8CGai3d%2F9IPQWJyzPgJw6WjUHP2Sc9gwmfB3UVIgG6BZ%2BKyva8Bdc8D%2FoPBe06JxZPzdtifqKl3B2fJxZOSkywHVMKgifvwVCghPN48YSzcIKFkG4XltiFWcnTS05jt0b3Fhons4N7zXXa%2F3%2Fi1uq8h4boSF9Env70I0eYb80igcy7kR%2B61v3NN%2B6cKXNU2%2BdhX7prwGNL4bd516%2FEy&X-Amz-Signature=bff894ce7890ddaea3cd21f1f97c0f6aa7d5a1855811fca5d0f61946a1c6e186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLCWYNH4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDRvPKB12PT9F9NBwFYT%2BsZSCkOKQrW0QC2qluiqxqLLAiBpeE%2BMspvhUWUt2zfce%2BSPHGbVJmvxH26qdIwJSTCtsCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8YvzSMWqfEijbdDhKtwDvLL69xl1j%2F8tB5tHkeZcS0t6K8Ckves5DbpNzc%2BL6%2BUFf%2B9wLCYhNBMMAV8iJ3XsWCe2Kvyanokmhy6k40tWHe%2FJBWXwTXOAXADESTYnWu4LosWK1AyN%2F6sIx9wK2BEZmvjIRVuYPBPHQto1t8hsrvmgo3k8rg2buEFVyrZ%2BplEVzpBSMc0a7HAIe6hcR6NNv07rEbgBGEYkI3TZicKVUzukuIPGuADEJZzgR85et1A5Lk%2FbmTFoMuKlk7tcWraN86viW8dq970bdVMIAQOwsyo4uZVsIrf54l7LnvKzA%2FdN97RBfKxMtu5dX2kFPzQMsCh8eMreGaOEu4smETq7sJ1cg8dDqJm5dyWT9XzitJbl5Svw5dGgepDQoMB%2F0isuFYajFHjfyQ1Lyj3ra0vSjVpka46yK3Rz6GOi1wXaQ%2BVxJ8%2Blm9pZhdFWNuCZQr0d9eheLcMFLbnX1%2F92NcoY%2BNKzcubSed6r27QN%2BrSFHg%2FfJgiUd%2BBwlbHbcjHEuS7m%2Bxx%2F3oNPBvzOHKZ62x5ZovF0x%2BbWd8VGIWPT%2FeBQEsDhE2ggKfwaYl4l8UFqH8E2qOBKVZBcmsUAqmlepguY928GxDMmezZWXq8ITHLOQEVTdHLxEJxMQ1dkGFkwopnVyQY6pgFi%2BVr%2FG6ahE8CGai3d%2F9IPQWJyzPgJw6WjUHP2Sc9gwmfB3UVIgG6BZ%2BKyva8Bdc8D%2FoPBe06JxZPzdtifqKl3B2fJxZOSkywHVMKgifvwVCghPN48YSzcIKFkG4XltiFWcnTS05jt0b3Fhons4N7zXXa%2F3%2Fi1uq8h4boSF9Env70I0eYb80igcy7kR%2B61v3NN%2B6cKXNU2%2BdhX7prwGNL4bd516%2FEy&X-Amz-Signature=4bdd73bd25c3072df34569d744dcf77afc707f0e5916b2280d7c5376936515ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

