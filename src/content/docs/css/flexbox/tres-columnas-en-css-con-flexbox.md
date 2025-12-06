---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNSEKB7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLVwxTIEUCxZi2piECqzP%2BUhaqnDUE4R4Fg6tGYHjapwIhAMrTShNYbbFXEJ9KvFuSSMAlsNbWVtmyjbn2Pv9%2FrnX0Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxV%2ForFCR%2F%2B0MABlHUq3ANqiv3iPF5FzDKeGX9s7w67EkItdR9ailuBoS1r6Qibv1ivjEqF0aDIt1%2FKAVz8F2ewSE6ljqJaVWNizFSLwtHijE7yN9cLSDUb0uSp8p8iobO53Vqj%2FEZiqxcX63mOyhHXN4%2B87B4wlMHDnzP0HMnhv6a1g99U9phB4bXATXLT9VqUl7Whczrdx1OvC6LHd1DinSpa8jAwn5ez%2B3I6vxtMWMC8qd6CPDlgdQTxSWkNZDVd5b6JPzal6XTlRPOsCiEtWTuDx7l6f7APWfXkD1czgfMSpLHpISrfTaYhkKJD16KPUp%2BZpIuZST9sux4rGMR%2FAujB3RbHlvKo1c36s41%2Fuj8Kx0pTlDOux5FZ54X99%2Bkmks1PZoNcOMPoEdjwr15sSdgL%2BMD8h9S81VIBywXXa37a3aKQZg3SwMXxwsyO41YT4Q1DWurdTDH9sKwjmqUhsh70fGQBiKqK32PnkAi%2FpS1ZTqkROEEmRPecSTg%2FndUKfMfvd%2FyrRxLXj0qMvV3oBFrPiCgr0YAWp5eFtuOzjYJ7B89gmmY9ZfMV5%2BHnguRl59ZiL4aijESy%2Bwg6pdU8WEuA9c%2BNst6g0EuhaZUttTASmvl%2BXv3YK%2Farg6gHdmU3dLf5VpbvMakIFDDhptDJBjqkAdV9RftXMV%2F28wLVKzbJumKmj7UgfbMRY%2FNGwsfPBZlYXhbshcz%2FYL8kRAhG1YA%2FlqnmT1eXIFzBfDkWvtTUx5%2Bu7xFZUP11FPUmJOaMTqHmWuIxkKuEe9Fk7HV1KODE%2BBKUWL6r%2FjRpGJBAXvAr%2FgU5AEcZsD%2FYGUwZ012xX2j8B7WLXtRovsoaA%2FZKZMdZ4NBvqyeDNgUwLEKyrQD7ytpFlxmf&X-Amz-Signature=03426c68f2e1201351a343513a0fa47a84ddbc7fee1412ccd7cd3a5f5c182c84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKNSEKB7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLVwxTIEUCxZi2piECqzP%2BUhaqnDUE4R4Fg6tGYHjapwIhAMrTShNYbbFXEJ9KvFuSSMAlsNbWVtmyjbn2Pv9%2FrnX0Kv8DCHUQABoMNjM3NDIzMTgzODA1IgxV%2ForFCR%2F%2B0MABlHUq3ANqiv3iPF5FzDKeGX9s7w67EkItdR9ailuBoS1r6Qibv1ivjEqF0aDIt1%2FKAVz8F2ewSE6ljqJaVWNizFSLwtHijE7yN9cLSDUb0uSp8p8iobO53Vqj%2FEZiqxcX63mOyhHXN4%2B87B4wlMHDnzP0HMnhv6a1g99U9phB4bXATXLT9VqUl7Whczrdx1OvC6LHd1DinSpa8jAwn5ez%2B3I6vxtMWMC8qd6CPDlgdQTxSWkNZDVd5b6JPzal6XTlRPOsCiEtWTuDx7l6f7APWfXkD1czgfMSpLHpISrfTaYhkKJD16KPUp%2BZpIuZST9sux4rGMR%2FAujB3RbHlvKo1c36s41%2Fuj8Kx0pTlDOux5FZ54X99%2Bkmks1PZoNcOMPoEdjwr15sSdgL%2BMD8h9S81VIBywXXa37a3aKQZg3SwMXxwsyO41YT4Q1DWurdTDH9sKwjmqUhsh70fGQBiKqK32PnkAi%2FpS1ZTqkROEEmRPecSTg%2FndUKfMfvd%2FyrRxLXj0qMvV3oBFrPiCgr0YAWp5eFtuOzjYJ7B89gmmY9ZfMV5%2BHnguRl59ZiL4aijESy%2Bwg6pdU8WEuA9c%2BNst6g0EuhaZUttTASmvl%2BXv3YK%2Farg6gHdmU3dLf5VpbvMakIFDDhptDJBjqkAdV9RftXMV%2F28wLVKzbJumKmj7UgfbMRY%2FNGwsfPBZlYXhbshcz%2FYL8kRAhG1YA%2FlqnmT1eXIFzBfDkWvtTUx5%2Bu7xFZUP11FPUmJOaMTqHmWuIxkKuEe9Fk7HV1KODE%2BBKUWL6r%2FjRpGJBAXvAr%2FgU5AEcZsD%2FYGUwZ012xX2j8B7WLXtRovsoaA%2FZKZMdZ4NBvqyeDNgUwLEKyrQD7ytpFlxmf&X-Amz-Signature=e78bbe6cf96b1d777f86e14c6510541ff9df3203e7cfc0b271238f5b20eab24b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

