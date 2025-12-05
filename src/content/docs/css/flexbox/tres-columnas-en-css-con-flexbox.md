---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPB44UX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BsKJBw8TSj7IwiePnSKqRE9OjviaHmpk1glSAuhs8QwIhAMuJV0DL0wFViL%2Fvj%2F9igzc8YSGr%2FmToSnc1d9PXxNPEKv8DCGAQABoMNjM3NDIzMTgzODA1IgzgbMi%2Fw9tUme4kNVoq3AN2WkG9geRuXHIdxkTOFg%2Byh%2BHZr6EN0RQ4utyXt8XonOFI7rY%2Fw4QpRvygW6FWyn89A7DthrmTrpz7c%2FqJYugeH7wkaaCwq0ZpQV9vUYkIvzNeSIEx6bxjN2ULzqrSEP%2FEawD5gcW530flzJ54Up6VS%2F7bcF9ZQI%2FUUB3sIJmK3KHV6ke4Iq15uNQ%2FJmTh%2B4QBO30kcxiPUCZXVkYgGAJ7BP7l1LUG48TJWdB7cJN8mF32vsWFA6od7KleKSWd3%2BeQKAfve%2FlEYAW8qvbW9YnCk0XQgSQqH%2FO3KEeyvjSQVUsnfDX4lR54xNIzOAqqhwh4T8ma0904xV83H28I0NLwPE97WG6yra2tEgjZ1GQANus6cp%2FxXyujzgGSVzeXPVQ6zHzLW0WfmYbz4ZGF3vbRN72sIPJxcid7BoRPcOcrQi%2Bsg3kY5dC%2Bz47cQQXvi%2BEsgAJIJkkPG1RgfWgEE5ebSyVO2pSMDhzpkQgV6qr8mXD0%2BXwvrV%2Fxai6VCZWwkJm3hIgcyVJy3MAR5KaXkw2ooC3RBYYwi8OohPV2tdQ2YmhPQngXi9MB2vIaxlgmBR5BHuF3h1%2BqkA56Q3puP98NV4f71x3LScGrEx%2FcxRU3ql%2FdLUsXM3NxlwwgKDD%2B6cvJBjqkAaJS6HWHLpBZqr2GC5pu0xx4Y5VfQzoHo1ZgGPz58PqsdKt4G9Rhy6HnwJe5nS8xGD2F78BHVULJF%2BA4%2FHdUaQhKgugo3TODc5E6hoMn6QkKZoQr6H4QbSxCJ5WET7%2BsphFqQuu%2Bhp7ZJAYGwHaraBMBlZBQftrsmZZ%2BPI%2BKGAmx%2Fh79kUaCyWY%2FK66qk9tvWHvXKi9e8EQmt67Uem9ndbHBtZue&X-Amz-Signature=2e88300742bcd6e844b7de8fe4c4a147f0a0597b4c38cd96da9c69a11b6b8b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPB44UX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BsKJBw8TSj7IwiePnSKqRE9OjviaHmpk1glSAuhs8QwIhAMuJV0DL0wFViL%2Fvj%2F9igzc8YSGr%2FmToSnc1d9PXxNPEKv8DCGAQABoMNjM3NDIzMTgzODA1IgzgbMi%2Fw9tUme4kNVoq3AN2WkG9geRuXHIdxkTOFg%2Byh%2BHZr6EN0RQ4utyXt8XonOFI7rY%2Fw4QpRvygW6FWyn89A7DthrmTrpz7c%2FqJYugeH7wkaaCwq0ZpQV9vUYkIvzNeSIEx6bxjN2ULzqrSEP%2FEawD5gcW530flzJ54Up6VS%2F7bcF9ZQI%2FUUB3sIJmK3KHV6ke4Iq15uNQ%2FJmTh%2B4QBO30kcxiPUCZXVkYgGAJ7BP7l1LUG48TJWdB7cJN8mF32vsWFA6od7KleKSWd3%2BeQKAfve%2FlEYAW8qvbW9YnCk0XQgSQqH%2FO3KEeyvjSQVUsnfDX4lR54xNIzOAqqhwh4T8ma0904xV83H28I0NLwPE97WG6yra2tEgjZ1GQANus6cp%2FxXyujzgGSVzeXPVQ6zHzLW0WfmYbz4ZGF3vbRN72sIPJxcid7BoRPcOcrQi%2Bsg3kY5dC%2Bz47cQQXvi%2BEsgAJIJkkPG1RgfWgEE5ebSyVO2pSMDhzpkQgV6qr8mXD0%2BXwvrV%2Fxai6VCZWwkJm3hIgcyVJy3MAR5KaXkw2ooC3RBYYwi8OohPV2tdQ2YmhPQngXi9MB2vIaxlgmBR5BHuF3h1%2BqkA56Q3puP98NV4f71x3LScGrEx%2FcxRU3ql%2FdLUsXM3NxlwwgKDD%2B6cvJBjqkAaJS6HWHLpBZqr2GC5pu0xx4Y5VfQzoHo1ZgGPz58PqsdKt4G9Rhy6HnwJe5nS8xGD2F78BHVULJF%2BA4%2FHdUaQhKgugo3TODc5E6hoMn6QkKZoQr6H4QbSxCJ5WET7%2BsphFqQuu%2Bhp7ZJAYGwHaraBMBlZBQftrsmZZ%2BPI%2BKGAmx%2Fh79kUaCyWY%2FK66qk9tvWHvXKi9e8EQmt67Uem9ndbHBtZue&X-Amz-Signature=67c3287802c61caf69f8c544ac27c4375ea4b7057746f8b5a07708f70abb83be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

