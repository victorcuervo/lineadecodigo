---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URSRNSO5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDYtbrYxcEQd2utKhGB1DyiQEu7g4Gijk7mjLCKcpIf3AiEA5HSDtLeImJvIF%2BqRxdZdVADV3tEVz9n%2Fn%2BZNIZHR74Uq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDwOxCBEAwDMTgQeyCrcAwtpHVYhudr1uLxz3U9Y9gTrdpvlo4xO%2F0%2BoI1yqCYDW5VN%2BDIzduhcO8DkSYYJywBQLp%2F1SuD7c6ZIvZF2hf0gSdcmLkkSUWjlcJhKNob9lQBlRDM57iVb2O90%2FAo%2B%2FJSoq%2BARQKC%2FRxx71WiMA2zafsdCZBTJIAricbf4pjpFy4mbBv057JRmBpFGzPf6SlL02eH1KHNSZNHpKUbLbBrX7gqXZA3cxiDTOqRyqMgG0wqBhlxwQ8b0Tw2GHnrJ6HjikcnOhIFm6p8cq3d3qxUwJikMoHeOCIIosI21NKEJ7coXKlq1ovWgUfbt%2FvqZtW3FIgaPE0W%2BdSO4ZKit6CjukSK2QcKGbCS6Rj9qRT7tCMkSB%2BPESby%2BA%2FGnq5FSk%2BMylBOqJiwA3Z%2FSlD3KDuslyWWaUzoZTfyduTW0KOTP6t%2B3%2FGfxOwAUloThMZ%2BzldylfQ%2BCO%2BHKRpC1TLD91%2F2gRsvHGyP6s%2FpZ77XmpDyCSkp0cvbvTiRdsUIYM62eKIMH%2FEBU%2BR5BKE8FPbWdqIceLV%2BOvR%2BBPuzzvZVpZIHADYFYI%2Bq4mIAgPWht15VlFnXfMnaqkTks4OqWROT4b5zYThvketAKOAxZaMLUgRoB9SXWOXZzuYLzo8DbQMLfnxMkGOqUB9j%2FX80jAAeP%2Bk%2BhaqkeVzRObXdzDf2XGXyIOIaXqx0FlBGtdFYt4zh8qVIuj9UrzjJ9PxYYVKkpCvxgCybhnFAtczZJPwH5Z5v%2Bt8nH5Qqgec%2FWdzbAmv%2BXpwKTsKa6Ry%2F1%2F5fgpeOkDkSdha2MV3%2BmZA%2F7poq1Qju6Hue9DU%2FBdwNlQ1KRYaoAQ8zvZGeUYAfKY34LWVIrjOynaV5LviOG%2FYpTI&X-Amz-Signature=a2a16f65362009eff75aeeb98c5de16f1df4016a2652c126f4d94285572a392e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URSRNSO5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDYtbrYxcEQd2utKhGB1DyiQEu7g4Gijk7mjLCKcpIf3AiEA5HSDtLeImJvIF%2BqRxdZdVADV3tEVz9n%2Fn%2BZNIZHR74Uq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDwOxCBEAwDMTgQeyCrcAwtpHVYhudr1uLxz3U9Y9gTrdpvlo4xO%2F0%2BoI1yqCYDW5VN%2BDIzduhcO8DkSYYJywBQLp%2F1SuD7c6ZIvZF2hf0gSdcmLkkSUWjlcJhKNob9lQBlRDM57iVb2O90%2FAo%2B%2FJSoq%2BARQKC%2FRxx71WiMA2zafsdCZBTJIAricbf4pjpFy4mbBv057JRmBpFGzPf6SlL02eH1KHNSZNHpKUbLbBrX7gqXZA3cxiDTOqRyqMgG0wqBhlxwQ8b0Tw2GHnrJ6HjikcnOhIFm6p8cq3d3qxUwJikMoHeOCIIosI21NKEJ7coXKlq1ovWgUfbt%2FvqZtW3FIgaPE0W%2BdSO4ZKit6CjukSK2QcKGbCS6Rj9qRT7tCMkSB%2BPESby%2BA%2FGnq5FSk%2BMylBOqJiwA3Z%2FSlD3KDuslyWWaUzoZTfyduTW0KOTP6t%2B3%2FGfxOwAUloThMZ%2BzldylfQ%2BCO%2BHKRpC1TLD91%2F2gRsvHGyP6s%2FpZ77XmpDyCSkp0cvbvTiRdsUIYM62eKIMH%2FEBU%2BR5BKE8FPbWdqIceLV%2BOvR%2BBPuzzvZVpZIHADYFYI%2Bq4mIAgPWht15VlFnXfMnaqkTks4OqWROT4b5zYThvketAKOAxZaMLUgRoB9SXWOXZzuYLzo8DbQMLfnxMkGOqUB9j%2FX80jAAeP%2Bk%2BhaqkeVzRObXdzDf2XGXyIOIaXqx0FlBGtdFYt4zh8qVIuj9UrzjJ9PxYYVKkpCvxgCybhnFAtczZJPwH5Z5v%2Bt8nH5Qqgec%2FWdzbAmv%2BXpwKTsKa6Ry%2F1%2F5fgpeOkDkSdha2MV3%2BmZA%2F7poq1Qju6Hue9DU%2FBdwNlQ1KRYaoAQ8zvZGeUYAfKY34LWVIrjOynaV5LviOG%2FYpTI&X-Amz-Signature=76b22c7d488b2738a77a2826b718577ab48cb8c29900756eae5beaac52a4bb19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

