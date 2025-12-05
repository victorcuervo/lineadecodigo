---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625GGTVA2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTYHcbiJlwChxz%2FaYbx1Pw%2Fj3HdF608PnpGVLl0%2FqSgIhAMGWYjbVAVW5Pbhyeq2u%2FeAuMvRPrUUvJQEbdK329AJTKv8DCE8QABoMNjM3NDIzMTgzODA1IgyTe0n65WlnFVHht6wq3AMk%2F%2BqApekQ6JL4FmgqgGVprKFKtR8lol1Fqu0sLF9u6R5vKz4QetuTc73xjpDqlxYdVRTXtGpO%2Ba0UtjuZv38LB%2BtQJGVdl4sMGuIaiJukZ86Vd3V3sAPjI0BXBxn8w8J8hELwhU1wq6vVZUfdES2ljZW6x4T1%2BjduMyWOBr%2BIneKqoSOfo3D5m3yNFfE0ShJbq9GaXH52APinv6veWB1yFS7A%2Fn2rkpMSpSA8SWf2rYeBcqZatxnAz%2B6oJtxdmXVlKRQTzNhUTQpBcRQmL98X6m4H1VIdetnOB5EQ8s9D07o6JRaiB9vGxtVqge9ZZuC%2Fq%2FeqUm9kAlGj8Ygt8u4LJws9j2HeD04C1r%2FHghRGLOHgCjyaCmBusnqQawOUSXadiBdcPbQ14BcQT0qJCg7jKSynUOaL6dDFf3F8gvLfCzN3LsrYhR5iDUDsjpfwqytAy%2B4D3x13KQ6%2FYZwGs23cWHIFkNRWPvoP6HgQnHKoCLD1pEC7RscMNFQHlDGPyJsUsPGSPoXsAuX2JyAAu6RaWPgi%2BG0%2BQL%2B2NzqQaHYWW5zmyHq6ID3ZsUbejHsoHTnSByVE3zGId9a07qsw9PVa7qqdPbD4pGgo6pYImQ6e6iDdy3bjwvSICWqdHzCejMjJBjqkAW7j1JeZNR4DhdrHfSIkpUxYBdfQQKYbu2W3w2b2J2sXTQLnWZ2cKsDAg6HSDKSRMAO%2FqpGMoaDeFcL4HoPZ3oWKt1pPj9p2zh%2BR8uNW032kMVhJDMkulxth6GT49aKndALKnGkEcRgQSmfo5PDpQ%2BfM3fubWfdgeO244kHT%2FxlEb790sMKwBh0wYuVYMOffLsbv3tBNuO7TZcVEWdbGNJmSSqQG&X-Amz-Signature=1b4e6c91e494c3547783e1fa1844c23ba72f8743b9ae4563396c12961ddd0ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625GGTVA2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRTYHcbiJlwChxz%2FaYbx1Pw%2Fj3HdF608PnpGVLl0%2FqSgIhAMGWYjbVAVW5Pbhyeq2u%2FeAuMvRPrUUvJQEbdK329AJTKv8DCE8QABoMNjM3NDIzMTgzODA1IgyTe0n65WlnFVHht6wq3AMk%2F%2BqApekQ6JL4FmgqgGVprKFKtR8lol1Fqu0sLF9u6R5vKz4QetuTc73xjpDqlxYdVRTXtGpO%2Ba0UtjuZv38LB%2BtQJGVdl4sMGuIaiJukZ86Vd3V3sAPjI0BXBxn8w8J8hELwhU1wq6vVZUfdES2ljZW6x4T1%2BjduMyWOBr%2BIneKqoSOfo3D5m3yNFfE0ShJbq9GaXH52APinv6veWB1yFS7A%2Fn2rkpMSpSA8SWf2rYeBcqZatxnAz%2B6oJtxdmXVlKRQTzNhUTQpBcRQmL98X6m4H1VIdetnOB5EQ8s9D07o6JRaiB9vGxtVqge9ZZuC%2Fq%2FeqUm9kAlGj8Ygt8u4LJws9j2HeD04C1r%2FHghRGLOHgCjyaCmBusnqQawOUSXadiBdcPbQ14BcQT0qJCg7jKSynUOaL6dDFf3F8gvLfCzN3LsrYhR5iDUDsjpfwqytAy%2B4D3x13KQ6%2FYZwGs23cWHIFkNRWPvoP6HgQnHKoCLD1pEC7RscMNFQHlDGPyJsUsPGSPoXsAuX2JyAAu6RaWPgi%2BG0%2BQL%2B2NzqQaHYWW5zmyHq6ID3ZsUbejHsoHTnSByVE3zGId9a07qsw9PVa7qqdPbD4pGgo6pYImQ6e6iDdy3bjwvSICWqdHzCejMjJBjqkAW7j1JeZNR4DhdrHfSIkpUxYBdfQQKYbu2W3w2b2J2sXTQLnWZ2cKsDAg6HSDKSRMAO%2FqpGMoaDeFcL4HoPZ3oWKt1pPj9p2zh%2BR8uNW032kMVhJDMkulxth6GT49aKndALKnGkEcRgQSmfo5PDpQ%2BfM3fubWfdgeO244kHT%2FxlEb790sMKwBh0wYuVYMOffLsbv3tBNuO7TZcVEWdbGNJmSSqQG&X-Amz-Signature=414d8fe22ddd670c154343484f608c70ad7c43f7e70837d9a6811878d97babce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

