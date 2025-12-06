---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4ERF6F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSaKhgOtVZp8%2F7Qs9q39ZShzFzyS1rKfV9JtnjOTlDEAiEApaR2SM6Ijo%2BhBzH9FBZkYuk%2FdGWeBmW3VVDr7gE4gB8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDD9nR9dslzXLI%2Ft9uircA%2FLupOLv8LbNnfq5YRVqn3HKy3HrtJrtNCMyJJ%2Bjac3zQwrsKdGJl1DUCOPUH1TVlxNdGwFXUGf0V8yZxUaXd6mpK4VwAFKj4R3iSu4RbmuRxcFBdzjlY6VWYnRtrrRLUm9qWfN10h0W8ig%2Fu2gwNPsFtj0jAkcwTRNHIeYkKJmEn0b2v0WIjHQjpeVPs%2BiV1DXNTiJbLcbk7qeBTUUAygsLj0Ujs%2FUTM8Rea80a0ODuyqpj4dsG8Upem%2BK1K8KuCJ4cpwvdRbLeeHkoUcbDEN7GaWUznFSmhd%2B3i9vDl3UFEpgDDH4WbKEQtRl3YslDymWcp8Mn6U1VBYcdRrBUKiwtTZt3wH%2BM3tCmDwCj%2BytiQHY9bfLDzPjBjVyT6VirMKcNw3ZbXkDmkN0Tu4xqrlzHuX%2FWcvtkllOa0%2Fiymy5Fqxs4tnMvWN%2FXdheTFHnQ75CG%2BdWFnqRiVJLFwCCr1JPxxTjtxr7AuedUqbqKZfCVzW5PYnrYmxzrNTFdeGl5nIaF7hWUndo37s3%2Fo2%2BEeeTEobM7EjrArFFVUtnQdFol6aXoH0Z8QRCnMpvDSKeG%2Fh1maSLBE7vu%2Fo%2Fb0DJtt4SL0aD%2BOL24MWkuEZpn%2F6DL9x4KauF6GJDAPmD5MLfL0ckGOqUBJMbwT%2ByeHXtavpuq6mhFyQqZm966a0BSmoVH4S6AHxXjw9eRBUSGYJbkr3TUAWEpMKv8IcrVyhHB8TxPSscf9dSr64NWeZfhdR2vdSEndgCIgLt1%2BxHeXSOs5VKZKYqj31mAq2GDt8NvSwE0Y8iBCwBqmf%2Blh25Bhm28b8rwCDouCTSawrV8ibeiKhtOVWKVd101N0mbznUvrDVc6uIerawiWbLj&X-Amz-Signature=f5c0261c2369b90c4357b024c47523b4d55f704227dfcac546f32bb1d81b68aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QF4ERF6F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSaKhgOtVZp8%2F7Qs9q39ZShzFzyS1rKfV9JtnjOTlDEAiEApaR2SM6Ijo%2BhBzH9FBZkYuk%2FdGWeBmW3VVDr7gE4gB8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDD9nR9dslzXLI%2Ft9uircA%2FLupOLv8LbNnfq5YRVqn3HKy3HrtJrtNCMyJJ%2Bjac3zQwrsKdGJl1DUCOPUH1TVlxNdGwFXUGf0V8yZxUaXd6mpK4VwAFKj4R3iSu4RbmuRxcFBdzjlY6VWYnRtrrRLUm9qWfN10h0W8ig%2Fu2gwNPsFtj0jAkcwTRNHIeYkKJmEn0b2v0WIjHQjpeVPs%2BiV1DXNTiJbLcbk7qeBTUUAygsLj0Ujs%2FUTM8Rea80a0ODuyqpj4dsG8Upem%2BK1K8KuCJ4cpwvdRbLeeHkoUcbDEN7GaWUznFSmhd%2B3i9vDl3UFEpgDDH4WbKEQtRl3YslDymWcp8Mn6U1VBYcdRrBUKiwtTZt3wH%2BM3tCmDwCj%2BytiQHY9bfLDzPjBjVyT6VirMKcNw3ZbXkDmkN0Tu4xqrlzHuX%2FWcvtkllOa0%2Fiymy5Fqxs4tnMvWN%2FXdheTFHnQ75CG%2BdWFnqRiVJLFwCCr1JPxxTjtxr7AuedUqbqKZfCVzW5PYnrYmxzrNTFdeGl5nIaF7hWUndo37s3%2Fo2%2BEeeTEobM7EjrArFFVUtnQdFol6aXoH0Z8QRCnMpvDSKeG%2Fh1maSLBE7vu%2Fo%2Fb0DJtt4SL0aD%2BOL24MWkuEZpn%2F6DL9x4KauF6GJDAPmD5MLfL0ckGOqUBJMbwT%2ByeHXtavpuq6mhFyQqZm966a0BSmoVH4S6AHxXjw9eRBUSGYJbkr3TUAWEpMKv8IcrVyhHB8TxPSscf9dSr64NWeZfhdR2vdSEndgCIgLt1%2BxHeXSOs5VKZKYqj31mAq2GDt8NvSwE0Y8iBCwBqmf%2Blh25Bhm28b8rwCDouCTSawrV8ibeiKhtOVWKVd101N0mbznUvrDVc6uIerawiWbLj&X-Amz-Signature=bcb3bbf2f3dac3b5bb845651216d5ec5f332a488e084a1ca5d550f75b615d1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

