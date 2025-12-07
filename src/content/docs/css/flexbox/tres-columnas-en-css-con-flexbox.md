---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAT6TJEC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgsDKpqJ9nKGDc00Khc1%2BcovyYuXMgFw%2FzUdG9l6SGNQIgHJMSraQDUQm7Ql7mGWHcAs7qazaMJkRIrZew0DA%2BgWgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrTyT%2BgvZZUQxbYbSrcA80inqCdBbvFQlLlqN7HK0q8g5Ez07vrun8RKSz5ihN6URFc8rncotgap8chOJybhCzdpPE%2Fq5QT2ianZnxLfB8Odu1xs7PtKwRqoNBuLanHQoYMUELCiwAQLwCBAkxPDUJ2WwKs5ADox05K8jZTN50dDL1WNwDy%2BdLwsZnQ5wPcaZnRnGlDTwsacPZu%2BEmTXWGjZbGd%2BHgGGa%2FV1nyHCO0rzBwOR1ARQ2iEe9Bg8Z%2BqXmGsLhb4IvpuOsnWtfSiNNj3tGCB2yOB8yzflN3TGtewSk98xdPPjW3x8pIEDhrstD3ptQ1LF%2B87QP9%2FyRdKvf68ZxIw6CS0Qm7O6wAN2fcBtq9bI8%2BE3K8UwUoR5GO9kfkjLcnjaY9l2nttGPZwHWh8%2BBx7Qt%2Boffk%2BCwN7%2BCgaqG99%2Bt%2Fky7HZ2whg0LexOXTWdBZ43ug9DAJjPQ3maVwxB5CvAIdvs02w%2FsD5CQbUpHcbop27YVPnA41wyZWJWKqLQpAdjGF%2F9y4rss%2BzhNiCg7xM3gjyHBIIIOiIZ51ATCMQ3MhhCk%2FpRvVPVLZW2nhouwU6P1ZrR9mEMT%2Bm5RAg9ZeOXKQ4IbgdPY05cnrFub5oSyBJu8cN7OxvE8CNKjkjMhiAfkN7twL%2BMLyg1MkGOqUBOWrajCb6ZAPceDoCge0OyH9i1wj6ULdw%2FzNYwhnnRBLgGQrlgkRo3EKEldmMRMqe2Na5aNmNaD3RXVtJZt%2F3waKtmgfg1zgkB2mCQE717IGA9fNbJafsvq07b2vjqYd5m8rwXtq%2Bz3HRjoWV%2BZ6ud3Rw2upcVSMrt3QiSHUy6YMmEoxv1uj97TCClueqrTPXb25Gr6lsVZ%2BIqQC6fsoYJrYsSsyO&X-Amz-Signature=e79ed18f51f1fcdd5ebebc80ea9c7a69571bfb603ddd83a4cd242507936fe784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAT6TJEC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgsDKpqJ9nKGDc00Khc1%2BcovyYuXMgFw%2FzUdG9l6SGNQIgHJMSraQDUQm7Ql7mGWHcAs7qazaMJkRIrZew0DA%2BgWgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrTyT%2BgvZZUQxbYbSrcA80inqCdBbvFQlLlqN7HK0q8g5Ez07vrun8RKSz5ihN6URFc8rncotgap8chOJybhCzdpPE%2Fq5QT2ianZnxLfB8Odu1xs7PtKwRqoNBuLanHQoYMUELCiwAQLwCBAkxPDUJ2WwKs5ADox05K8jZTN50dDL1WNwDy%2BdLwsZnQ5wPcaZnRnGlDTwsacPZu%2BEmTXWGjZbGd%2BHgGGa%2FV1nyHCO0rzBwOR1ARQ2iEe9Bg8Z%2BqXmGsLhb4IvpuOsnWtfSiNNj3tGCB2yOB8yzflN3TGtewSk98xdPPjW3x8pIEDhrstD3ptQ1LF%2B87QP9%2FyRdKvf68ZxIw6CS0Qm7O6wAN2fcBtq9bI8%2BE3K8UwUoR5GO9kfkjLcnjaY9l2nttGPZwHWh8%2BBx7Qt%2Boffk%2BCwN7%2BCgaqG99%2Bt%2Fky7HZ2whg0LexOXTWdBZ43ug9DAJjPQ3maVwxB5CvAIdvs02w%2FsD5CQbUpHcbop27YVPnA41wyZWJWKqLQpAdjGF%2F9y4rss%2BzhNiCg7xM3gjyHBIIIOiIZ51ATCMQ3MhhCk%2FpRvVPVLZW2nhouwU6P1ZrR9mEMT%2Bm5RAg9ZeOXKQ4IbgdPY05cnrFub5oSyBJu8cN7OxvE8CNKjkjMhiAfkN7twL%2BMLyg1MkGOqUBOWrajCb6ZAPceDoCge0OyH9i1wj6ULdw%2FzNYwhnnRBLgGQrlgkRo3EKEldmMRMqe2Na5aNmNaD3RXVtJZt%2F3waKtmgfg1zgkB2mCQE717IGA9fNbJafsvq07b2vjqYd5m8rwXtq%2Bz3HRjoWV%2BZ6ud3Rw2upcVSMrt3QiSHUy6YMmEoxv1uj97TCClueqrTPXb25Gr6lsVZ%2BIqQC6fsoYJrYsSsyO&X-Amz-Signature=3db476110e83814db7b2f81f22f2c34b91734dbca3a64f7c7deb488a91a58d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

