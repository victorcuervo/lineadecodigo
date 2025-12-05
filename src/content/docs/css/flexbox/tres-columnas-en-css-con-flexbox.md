---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664YMPXX7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKY9QQlsCYHC1WCxAfbsPvNKht1yw5k8JfS2hQjWkEEwIhAKIyQPOip2GdzKv3y0l9U8W32akGjfthW3SYqFRk%2BXviKv8DCFUQABoMNjM3NDIzMTgzODA1IgyUaaJN32GTKumRnJYq3AP5eQE917MgMuSEbDvzIPrzEpk465Cs7W%2F7cjG%2FHdMcoELpfjnCjf2bYB7e%2BRLMBCqQBIXVC8n9yVQWGcVcsr%2Fbz%2B9iKs5jjsXUaa6smwKD8DlaCJQuUEF%2BTzC7SDu5v0byeW%2FzCHyF66x8X4ciJEe2DpOWZCJH0j2pGyKW4b9tdXdqIhuL7yDqVzp8D5tCyNy1dLbFejrWfH7nK%2FnNGeT3qw7vg7lXb5Jk%2BEjBMkfWmS5u0iHZ5O26qP3TyiyAskkBdGE7VgdzdXbTGXGV%2BdSjsnTereYBTMn3EuHykegzSVLJ4Wp8ElqfJex7ubkENiI%2FlEj1bYikLmjAT1dvG%2FfYg%2BAijBdaP52iBIH3fr0jXXbIYmWfumw7cIa52yqlNhzBNQrbcnlTSZLhXCuJn3C8nie4HnMFVBQHdSyRroszP3rOoFfkxagm22btqYw1OeO5l2xCUOoZlE%2FKYLUMW8gHvyJzgqai4f9L3KM1HMyagXb8gcvb%2FdB2dCADb3BBWLoGFYAsAy27dF95KQJHwY%2Baf%2FkbyQfCnPonybFq2T59kpwpbVGLZzLJsO2OlBx2XBkLHbd2KZFBQIO%2FZ8asFT99mxi%2BQQ6h8We9H4wRVEbxq2Lf6sec5gZsw96b%2FzCnr8nJBjqkAT8%2FBBlKI%2BcSqcicYDafI9YemkuRsIgu4BtV3MZrXQyTanBBrejQ3GejpXJaS1n7H16iPwwENv0jQh4bBiOBVaNyoNXHemb21YARxdMfxwWzvYX9UbDz8%2Fksi4FEpB4dOUNx96RmjcBywBtiXwWrgFlBNuOh%2FXt8H%2FjTRLuRwiq9Cn0fwkbtuGcYnByMsUZSUlxyQvxr7VWnkcRi9ACgz61PJONt&X-Amz-Signature=f5a47a4c19d6cd29619d46b317e0d83c1f1c56c27b091f6e5f842a31db962932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664YMPXX7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKY9QQlsCYHC1WCxAfbsPvNKht1yw5k8JfS2hQjWkEEwIhAKIyQPOip2GdzKv3y0l9U8W32akGjfthW3SYqFRk%2BXviKv8DCFUQABoMNjM3NDIzMTgzODA1IgyUaaJN32GTKumRnJYq3AP5eQE917MgMuSEbDvzIPrzEpk465Cs7W%2F7cjG%2FHdMcoELpfjnCjf2bYB7e%2BRLMBCqQBIXVC8n9yVQWGcVcsr%2Fbz%2B9iKs5jjsXUaa6smwKD8DlaCJQuUEF%2BTzC7SDu5v0byeW%2FzCHyF66x8X4ciJEe2DpOWZCJH0j2pGyKW4b9tdXdqIhuL7yDqVzp8D5tCyNy1dLbFejrWfH7nK%2FnNGeT3qw7vg7lXb5Jk%2BEjBMkfWmS5u0iHZ5O26qP3TyiyAskkBdGE7VgdzdXbTGXGV%2BdSjsnTereYBTMn3EuHykegzSVLJ4Wp8ElqfJex7ubkENiI%2FlEj1bYikLmjAT1dvG%2FfYg%2BAijBdaP52iBIH3fr0jXXbIYmWfumw7cIa52yqlNhzBNQrbcnlTSZLhXCuJn3C8nie4HnMFVBQHdSyRroszP3rOoFfkxagm22btqYw1OeO5l2xCUOoZlE%2FKYLUMW8gHvyJzgqai4f9L3KM1HMyagXb8gcvb%2FdB2dCADb3BBWLoGFYAsAy27dF95KQJHwY%2Baf%2FkbyQfCnPonybFq2T59kpwpbVGLZzLJsO2OlBx2XBkLHbd2KZFBQIO%2FZ8asFT99mxi%2BQQ6h8We9H4wRVEbxq2Lf6sec5gZsw96b%2FzCnr8nJBjqkAT8%2FBBlKI%2BcSqcicYDafI9YemkuRsIgu4BtV3MZrXQyTanBBrejQ3GejpXJaS1n7H16iPwwENv0jQh4bBiOBVaNyoNXHemb21YARxdMfxwWzvYX9UbDz8%2Fksi4FEpB4dOUNx96RmjcBywBtiXwWrgFlBNuOh%2FXt8H%2FjTRLuRwiq9Cn0fwkbtuGcYnByMsUZSUlxyQvxr7VWnkcRi9ACgz61PJONt&X-Amz-Signature=ccde741c35d7c413ecc43dc9ab4a4066a2bb2e25d6b13d6d706cfa26e8742228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

