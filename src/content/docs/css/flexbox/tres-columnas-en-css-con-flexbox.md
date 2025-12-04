---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3P4FIGP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDWQOfN0I78p65zUehRZdCB1j1lbxHd%2B6%2Bu7%2F7jlERx7AIgapbP0CPnRJ%2FLKtvA6ic9W7RFMYUkTDeCpfhnG5YOkYwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIS3X2jSv24TbpYJvSrcAx8mMtBU2vJ5UlY11OFQoofuTTj4xYTsKv06VE4d70YEkC3aXlT10Mqxxsnu11n0xjHScNVwCUWG%2B2O0dBkBUZ7QTF6Gkc%2BfXqSWHp3Q8vTzhquMhyMzJlSfdm7yhfUzBzbGOgdIj3wcCo4sGCdN7dqaFAo%2BI3vYjbai7yJjMUfqWXsli2JK21DA%2F4IkC%2B5R7xRnaREJnN6Z%2FZrOJN1f4QfJ%2FpBdfgY66SFn5FW1mhMYdfsdMokyZMW%2Ff8gFeGKrBzrDu64e1o33yr6n8EdjLC0k1uOtZE0aRiYW%2FyAXT4OnNe5UJw3E5DZGxkJIfvQ9crUOO4yXXkIjC8FETRxQ9bxNoJWxs%2BpKP%2BHFAOuOutYMnMv8vz8nX61WzA%2BfIk%2BLh3c7icE004LbcRusdGrfrqHzZc5jLlzd0Leo86poEjPRqVzJavw%2FaOqzLh3pJh5XfCa0ts5WlpgTftK9hes3OpsoWp60m0%2BLMW8Xs3B6sRpEv5I1zV5fDTQHn5XTmZMBrPioFEWpmRzG2OuGUPTSuo9PAlcRI66B%2FOhIfynDDxQXu2Epc9yBczZsk2MD4IqcZn%2BAQJo7Iq8EkMma16Ml0A6igjmapOTqWqFD5hvPnlD63l0rGguEwgKvQZhmMOCHxckGOqUBkX6MZxDH2v7dju%2BOZsdUiJsrsfwT7Eb2W%2FUsu%2FhuqTlfuQcHHeGzySh%2BrP2QYKIupaxzzD4v8DwILoaQNiQRDsP7DPS2exFmffo9pgSKpAEb%2BoA236ZNdsOkIaORsXTkaqo8llfPXPj7OFQbpr%2BW56DuWIG8tyw%2BiVQHE7PlVEgCG9ehnH%2F3EIKVoBiuAaGmI4D%2BVE1bExoZppzFKTle%2FWJ%2Bp3hX&X-Amz-Signature=728212d78d6059f90809684a1a854c8c0e60a7cdd226edd1066ab8032115d767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3P4FIGP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDWQOfN0I78p65zUehRZdCB1j1lbxHd%2B6%2Bu7%2F7jlERx7AIgapbP0CPnRJ%2FLKtvA6ic9W7RFMYUkTDeCpfhnG5YOkYwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDIS3X2jSv24TbpYJvSrcAx8mMtBU2vJ5UlY11OFQoofuTTj4xYTsKv06VE4d70YEkC3aXlT10Mqxxsnu11n0xjHScNVwCUWG%2B2O0dBkBUZ7QTF6Gkc%2BfXqSWHp3Q8vTzhquMhyMzJlSfdm7yhfUzBzbGOgdIj3wcCo4sGCdN7dqaFAo%2BI3vYjbai7yJjMUfqWXsli2JK21DA%2F4IkC%2B5R7xRnaREJnN6Z%2FZrOJN1f4QfJ%2FpBdfgY66SFn5FW1mhMYdfsdMokyZMW%2Ff8gFeGKrBzrDu64e1o33yr6n8EdjLC0k1uOtZE0aRiYW%2FyAXT4OnNe5UJw3E5DZGxkJIfvQ9crUOO4yXXkIjC8FETRxQ9bxNoJWxs%2BpKP%2BHFAOuOutYMnMv8vz8nX61WzA%2BfIk%2BLh3c7icE004LbcRusdGrfrqHzZc5jLlzd0Leo86poEjPRqVzJavw%2FaOqzLh3pJh5XfCa0ts5WlpgTftK9hes3OpsoWp60m0%2BLMW8Xs3B6sRpEv5I1zV5fDTQHn5XTmZMBrPioFEWpmRzG2OuGUPTSuo9PAlcRI66B%2FOhIfynDDxQXu2Epc9yBczZsk2MD4IqcZn%2BAQJo7Iq8EkMma16Ml0A6igjmapOTqWqFD5hvPnlD63l0rGguEwgKvQZhmMOCHxckGOqUBkX6MZxDH2v7dju%2BOZsdUiJsrsfwT7Eb2W%2FUsu%2FhuqTlfuQcHHeGzySh%2BrP2QYKIupaxzzD4v8DwILoaQNiQRDsP7DPS2exFmffo9pgSKpAEb%2BoA236ZNdsOkIaORsXTkaqo8llfPXPj7OFQbpr%2BW56DuWIG8tyw%2BiVQHE7PlVEgCG9ehnH%2F3EIKVoBiuAaGmI4D%2BVE1bExoZppzFKTle%2FWJ%2Bp3hX&X-Amz-Signature=3a0f4784eb5474f9829832ea31e832f93d111e212a75826ee3be1ffca58822cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

