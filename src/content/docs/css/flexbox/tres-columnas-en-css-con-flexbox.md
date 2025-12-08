---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZE6UIIT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEY2Kihpt9J5MYLvaBXjEwhs5X3vV75jRIsjwzQm3DJZAiB7l5ztybwRzqBZznXIohx1aRVAiGnq6FuSeTsd9%2B9qkSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDHfJEQW9sdl5VHweKtwD4UTEFoKRvYyxbQOJws%2B%2Bj%2B1Pms20IL3OJb762i5eog3cQpUyqIZpqAPsrANVpGipmTzDqhdotTOhBue2u3kt6EkbX3QKc79G72h0PjlHJkHImM3LyIXtFxh4QKwhomwWzVjyC6E02wCeJwk0IPsv2%2FDWfWdzxtCYvlnum8QliqP5uT8TdGrPEA3oP%2B9nHZaJ8Wm%2BkVn7epsfpq4yF6BjcOjLbpLmI4GiTUGJDE%2FNIXZPPZNS3gR6ma7oYRBBsRguPVgAPKnLgZFtIOygfefjr2s8ugWHZ%2Fkta%2BCxHXRwGiF5OblX2DdXSPok1vpjcYpGEfadQ9sgMtcn%2BeVp0i1Y6d8qyYiEUrJQSZWU2gZw9BQOu2hcvCGI8Nvqxbnu3GeKVFf7%2BLbO0q9rZCJy9WzRuL0SS5KX%2FZGxp8GcjG%2BMgMODjHODALd%2FzXbRy%2Frd%2BCvJm1pLupDW%2FY68b0pjzjO0ekMjWVC0hq%2BHtblmkt5Q6twXOBTlzEfZ3uBPBi4egqDwIt3ATXW1ehOXdlPfNuvfT%2F%2BDNRIdTBHa60c%2BgVZnwlrokP%2BN5j%2FfnASh1poBJl0B4JZEkR16aAs00AqcKc66fGhR3xMl2xmNAwS1qc7s5fbiw4xRvEIuLx2lL1Mw%2B%2BzZyQY6pgEdQU8Uo%2BK3edrksiJqUF8dPcFEVhOZvjj0%2BPD%2BytiVyLOtjQjMhO66oltdZ%2BsVw2QZB1nHUQjz1GD6ki6DVuLTkj6HC9bWG51kkEsomCSWb9lXS8AqibIK2gu%2FdaCBSfNwTaoWMYobW3%2FEIqcet9dGXHv0Bt5yoNiF4vZY%2BSVNgXNbjeyUbx0WYefKYLWnPkBAeVdV2qTRElfjRg%2FiUc%2BjttnVN6m1&X-Amz-Signature=baf3202082aa86f882875753e6cf3116da509bb80e013fcf21232417512ed024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZE6UIIT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEY2Kihpt9J5MYLvaBXjEwhs5X3vV75jRIsjwzQm3DJZAiB7l5ztybwRzqBZznXIohx1aRVAiGnq6FuSeTsd9%2B9qkSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDHfJEQW9sdl5VHweKtwD4UTEFoKRvYyxbQOJws%2B%2Bj%2B1Pms20IL3OJb762i5eog3cQpUyqIZpqAPsrANVpGipmTzDqhdotTOhBue2u3kt6EkbX3QKc79G72h0PjlHJkHImM3LyIXtFxh4QKwhomwWzVjyC6E02wCeJwk0IPsv2%2FDWfWdzxtCYvlnum8QliqP5uT8TdGrPEA3oP%2B9nHZaJ8Wm%2BkVn7epsfpq4yF6BjcOjLbpLmI4GiTUGJDE%2FNIXZPPZNS3gR6ma7oYRBBsRguPVgAPKnLgZFtIOygfefjr2s8ugWHZ%2Fkta%2BCxHXRwGiF5OblX2DdXSPok1vpjcYpGEfadQ9sgMtcn%2BeVp0i1Y6d8qyYiEUrJQSZWU2gZw9BQOu2hcvCGI8Nvqxbnu3GeKVFf7%2BLbO0q9rZCJy9WzRuL0SS5KX%2FZGxp8GcjG%2BMgMODjHODALd%2FzXbRy%2Frd%2BCvJm1pLupDW%2FY68b0pjzjO0ekMjWVC0hq%2BHtblmkt5Q6twXOBTlzEfZ3uBPBi4egqDwIt3ATXW1ehOXdlPfNuvfT%2F%2BDNRIdTBHa60c%2BgVZnwlrokP%2BN5j%2FfnASh1poBJl0B4JZEkR16aAs00AqcKc66fGhR3xMl2xmNAwS1qc7s5fbiw4xRvEIuLx2lL1Mw%2B%2BzZyQY6pgEdQU8Uo%2BK3edrksiJqUF8dPcFEVhOZvjj0%2BPD%2BytiVyLOtjQjMhO66oltdZ%2BsVw2QZB1nHUQjz1GD6ki6DVuLTkj6HC9bWG51kkEsomCSWb9lXS8AqibIK2gu%2FdaCBSfNwTaoWMYobW3%2FEIqcet9dGXHv0Bt5yoNiF4vZY%2BSVNgXNbjeyUbx0WYefKYLWnPkBAeVdV2qTRElfjRg%2FiUc%2BjttnVN6m1&X-Amz-Signature=b407936078ba29b4cfbc95bbcab08b3f8cb3fe071fc4b55086029f9b8165e5a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

