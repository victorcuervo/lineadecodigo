---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIB76BF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6k9nBBtufL4MqriwP1eh7ywOEAdqICvX6a2yjicRfOAIgCjJahnughEYY9%2BR7OHlzb4eU2IuPIpSRRg9HmL6VJdUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAC2dF8MSdUtSpnMdCrcA%2F75ut0HEyIYYfuvqN%2FS%2BRUp%2BqzUeSC3Z9iLCL7URjCbPLlej8hRQSiE8x8dz4t7knCLMvxy9n9HFnxttzIflxH1%2F0NykdJeOskV3T3UFzOsnEp7JL0U6IJPWISJcQ77S%2ByvyQZGvlmCG%2ByDiU8P2aPx%2FsuxQJDGfpKgilgn8bW7w07oJ%2Fw1%2F3Ug3xnVKCfuzP%2BmYcU9vVkrhz8M5thzZh8OKtaKQn%2BIQlmGdza6HWxp5uTJ%2Bw1A9nVzjlFVB0h4dK5besjkwEdOAZf8yteeg9CrH5zN%2BtSLUgeqwKbUmbngE8opw1bikOGumBKnOJ%2FWAvsDCtqdmEpB%2BzGG%2Fp1UY8eJz3Vb1tIHAjJbz7Vu8K1KV1GO%2BMloxo3F7gfOaHXHHMhHsWhdHEQRaxSkl57BtLqdRwFPb%2FUsQwHzmmO6L48LfqdfYPlaNaMrjbgS%2B8%2FIAL0UGEQG4w2fpxgg00laudhG6uk55ZehAD2y3VUwUoaebt2zi9GGyLQH5OkJZUuSuClDLN3%2BLNo7h6IUlaJD9dGE1X7OqVlkvYxVPOqRczXvcwn5r%2B0%2FSxLw8t8XbFlr3hfcA8o30yAPcWEoj7jpWff41fdg16urobUUvxWsr4bFPK2Ohj0EnhHCeTQGMOyIzckGOqUBPRnqYZkMEJvK7qGof2bE55xcsDVo8Rh5lbUKcUrosNYhWbePQCB20AvU4M1K7ia7c%2FC1yPG8ToniH%2FCjRbW16%2FsmvCZPEs9p5QJMRKx4%2Bup5cuYwtcGtfV0qi3k4Pz1NiKMwf7cuBEvKZdaarLmRF2v%2BlNNilvnz862MSNipEga2%2BaPVuMiGhK45HrJHG1GVZJdYUj8jG9ZmNb15X7tdixuqe8BQ&X-Amz-Signature=dc8eded6a5fb60da5154f0ab8552714baa7928d8ddd84737e9c62070288efc63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYIB76BF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T222203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6k9nBBtufL4MqriwP1eh7ywOEAdqICvX6a2yjicRfOAIgCjJahnughEYY9%2BR7OHlzb4eU2IuPIpSRRg9HmL6VJdUq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAC2dF8MSdUtSpnMdCrcA%2F75ut0HEyIYYfuvqN%2FS%2BRUp%2BqzUeSC3Z9iLCL7URjCbPLlej8hRQSiE8x8dz4t7knCLMvxy9n9HFnxttzIflxH1%2F0NykdJeOskV3T3UFzOsnEp7JL0U6IJPWISJcQ77S%2ByvyQZGvlmCG%2ByDiU8P2aPx%2FsuxQJDGfpKgilgn8bW7w07oJ%2Fw1%2F3Ug3xnVKCfuzP%2BmYcU9vVkrhz8M5thzZh8OKtaKQn%2BIQlmGdza6HWxp5uTJ%2Bw1A9nVzjlFVB0h4dK5besjkwEdOAZf8yteeg9CrH5zN%2BtSLUgeqwKbUmbngE8opw1bikOGumBKnOJ%2FWAvsDCtqdmEpB%2BzGG%2Fp1UY8eJz3Vb1tIHAjJbz7Vu8K1KV1GO%2BMloxo3F7gfOaHXHHMhHsWhdHEQRaxSkl57BtLqdRwFPb%2FUsQwHzmmO6L48LfqdfYPlaNaMrjbgS%2B8%2FIAL0UGEQG4w2fpxgg00laudhG6uk55ZehAD2y3VUwUoaebt2zi9GGyLQH5OkJZUuSuClDLN3%2BLNo7h6IUlaJD9dGE1X7OqVlkvYxVPOqRczXvcwn5r%2B0%2FSxLw8t8XbFlr3hfcA8o30yAPcWEoj7jpWff41fdg16urobUUvxWsr4bFPK2Ohj0EnhHCeTQGMOyIzckGOqUBPRnqYZkMEJvK7qGof2bE55xcsDVo8Rh5lbUKcUrosNYhWbePQCB20AvU4M1K7ia7c%2FC1yPG8ToniH%2FCjRbW16%2FsmvCZPEs9p5QJMRKx4%2Bup5cuYwtcGtfV0qi3k4Pz1NiKMwf7cuBEvKZdaarLmRF2v%2BlNNilvnz862MSNipEga2%2BaPVuMiGhK45HrJHG1GVZJdYUj8jG9ZmNb15X7tdixuqe8BQ&X-Amz-Signature=83f3770d64dc431f806000769cbc848ebd562aebbf70b89a2c6e36f267be882d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

