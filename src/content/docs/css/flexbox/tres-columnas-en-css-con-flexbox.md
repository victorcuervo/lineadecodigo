---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6RHVPNZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzi8rqhRRXHjBnuY5fI2Qn%2B14B8tSR3wUlWW0Wa6NGiAiATmccAXiroiJgLLe9XQShFvbt7i0k%2BsogKvYRoRbr5hSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7F5PBhwpPK0FGqkKtwDa%2BDQSJZ12JZFj7MmdfNqjPuuPeqoBl7i0Poedm7UNyn14scsMzCUifJz6ab5aWPjCJoHa2ijf0ErXrNZt2k5BS%2FHDRC1gBkgHY1SI8CLXza1toibQpvepXca99wnnq487%2B10ir951khXUmGivDhwzu%2FoLpTTR%2F93yjZaOkCZ90qBF341nGWxYWjfqsbEjdQcFkj15K407lw%2BJONNxdgadi91NbRo55Du9EUZrGNqfdqXPptk64XrkK9EUkgZbmUFXaossSUQ3JUTqGtEhIhvxBMCIg0WcR4djzVDEBZfmfvI2uH90rGHFxG6znhMpGQq3ZZkHZUmbxUzIWbHgfYkkczxCTG%2B7puH3qlpHFLTFuWgfUiwxL%2Be59ujvRodyz2cw%2FRuTOemcRg1%2F7ciVSr1%2FbypANYuBSYEBKXibsnHap6d3fQuCNwTWj8BgurRp9OzitNLoHlznTYdjF%2BekqLXwSo64Nw5IgZYW%2Beihga3M5DiwghiFfOH%2F9ZFYsp%2BQgE3qnHczEMrjWf2cAXpQaUEEmtZMElOcjtT8O0OgB8qzrzTasMdznrWcw9ZgBpo%2FNvNJOs8ErnCBChU%2FVAGGCzI%2BFbBQAQtWzK62WBbX2hVojR9VE80DaNu0CGZnUkwt5nVyQY6pgG%2FfGSEaLmcoIFs%2BUPli3Dbszr5Go636gCdB8nLDwCmtyIpVWK4ZViZz1gSwwnWs2Hm61WVxYylo%2B609uE0lWzyZW%2BonQmAOkhq7Zu%2B8b0fF8Zv9eyz2H6CiK7R6s89x%2Bq3pA3jACTwVqDkBAL43q%2Fvy0h3bbYDA0veGws%2FL%2B5%2FUrzA6hHYBwvUj5G19zmVhyt5TfXmDxlCYNxLGlMJKc%2BGotQqtWp9&X-Amz-Signature=ffe4e2a05b5db33115631687e82dc23e0a82e6ac4eb4149fbc0c01556e1da181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6RHVPNZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzi8rqhRRXHjBnuY5fI2Qn%2B14B8tSR3wUlWW0Wa6NGiAiATmccAXiroiJgLLe9XQShFvbt7i0k%2BsogKvYRoRbr5hSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMX7F5PBhwpPK0FGqkKtwDa%2BDQSJZ12JZFj7MmdfNqjPuuPeqoBl7i0Poedm7UNyn14scsMzCUifJz6ab5aWPjCJoHa2ijf0ErXrNZt2k5BS%2FHDRC1gBkgHY1SI8CLXza1toibQpvepXca99wnnq487%2B10ir951khXUmGivDhwzu%2FoLpTTR%2F93yjZaOkCZ90qBF341nGWxYWjfqsbEjdQcFkj15K407lw%2BJONNxdgadi91NbRo55Du9EUZrGNqfdqXPptk64XrkK9EUkgZbmUFXaossSUQ3JUTqGtEhIhvxBMCIg0WcR4djzVDEBZfmfvI2uH90rGHFxG6znhMpGQq3ZZkHZUmbxUzIWbHgfYkkczxCTG%2B7puH3qlpHFLTFuWgfUiwxL%2Be59ujvRodyz2cw%2FRuTOemcRg1%2F7ciVSr1%2FbypANYuBSYEBKXibsnHap6d3fQuCNwTWj8BgurRp9OzitNLoHlznTYdjF%2BekqLXwSo64Nw5IgZYW%2Beihga3M5DiwghiFfOH%2F9ZFYsp%2BQgE3qnHczEMrjWf2cAXpQaUEEmtZMElOcjtT8O0OgB8qzrzTasMdznrWcw9ZgBpo%2FNvNJOs8ErnCBChU%2FVAGGCzI%2BFbBQAQtWzK62WBbX2hVojR9VE80DaNu0CGZnUkwt5nVyQY6pgG%2FfGSEaLmcoIFs%2BUPli3Dbszr5Go636gCdB8nLDwCmtyIpVWK4ZViZz1gSwwnWs2Hm61WVxYylo%2B609uE0lWzyZW%2BonQmAOkhq7Zu%2B8b0fF8Zv9eyz2H6CiK7R6s89x%2Bq3pA3jACTwVqDkBAL43q%2Fvy0h3bbYDA0veGws%2FL%2B5%2FUrzA6hHYBwvUj5G19zmVhyt5TfXmDxlCYNxLGlMJKc%2BGotQqtWp9&X-Amz-Signature=00818d7a40576044486b4c4bf5257686b8133bdbd9eb731c81b2836f61c9fb75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

