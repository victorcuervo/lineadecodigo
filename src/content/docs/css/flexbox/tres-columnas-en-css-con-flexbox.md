---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YIP5QDH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC%2BBx85baSJ3uIMK%2Fh9%2BQ2ir%2FQ1lrdoH3ys0cP5t11j2QIgeZRpZDB9xP%2Fenu2p60Pq4wwvx72nmN5t2D1N1qlqxioq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDO%2FDDcYa2NTtkaVZNSrcA2b6X6OoIQJQBGEXsLfw7M9B7BQV5%2FYOgapT%2FUsEkPfguE6NRwv8sPcCDL0mZFOUfa63dniekDUoJmBLsVIlHjgo12pQ5NCYxSPjP3zXOjU0e8tvtggQ%2BmJzufi4X7XYyKvDyF%2Fe6a%2BzcO0CBZPusK34FZcIOOFH1%2BVoV76ElHjoTDTifpCB46TxOV6Ks%2BgnM14YPbxclxHaTZx5jrW2xeDMa3xPCMbs0waso0MPLnvEO4DSEFeJQwB3LfYdJNe8mWejAfYi2QqBMN9FbXjKnFXtCo%2B%2BXRrXnV0Mfbp68fdnNkyBLfQaiaC%2Fyz1WFOQbCLYm%2Bobq0lDS%2F%2FgZFGTEQWcSw2hJuo8qbY5ZbjwfrgyHQG83%2FSuW9PpF9qYCV%2FSVeCR4MF6djDwe8lOeFu%2FWRl9rgbn13sTGXtvEEL5J1dttamYt2d3o%2B6Rxl5YGVk1f5VBP2wPDU3NWDL0w3TqSUdzVoNaFR67agCrqZ45eM%2FAh%2BhCb%2FdOtxXLX3it948S%2BZ%2Fq%2B8%2FgHoRlakbN0hSN2LbqQcPcvrjt2U31QbcorQpxuUZUNQOVA18wr23kvAtkn5%2BWhSg88mxZzIEBtSrLgr0LTgc7DbGWqHbMhL1UlRZKOPkFJAdCGH6qQISRLMKWhxskGOqUBn%2BrNCWqI2C7RHOic4kjGzjK0ngSPRf2b%2B%2Bz1xPLg%2BgKNEoLcWiyMrgUiXZfUsnZiWMPfpyLCaN6whsEGvtq1SbruwHKy0mO%2B6O%2FhCrV9bRDVAtHBTm%2F4N9KhzOyjYwnw8aCuFZ1C9ZhoFKnvy3RpV9Mtz3SGEDTZsLTvZ0ThfJm7yvhgglro6Mgn6GwAdQmj5IoYBiQ5bGhV9T80md0F2fQm7s35&X-Amz-Signature=6579e8db8150ae324bb8b316f80eba8d6c82c4edc7d477ec58a6cc1b991ddbb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YIP5QDH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQC%2BBx85baSJ3uIMK%2Fh9%2BQ2ir%2FQ1lrdoH3ys0cP5t11j2QIgeZRpZDB9xP%2Fenu2p60Pq4wwvx72nmN5t2D1N1qlqxioq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDO%2FDDcYa2NTtkaVZNSrcA2b6X6OoIQJQBGEXsLfw7M9B7BQV5%2FYOgapT%2FUsEkPfguE6NRwv8sPcCDL0mZFOUfa63dniekDUoJmBLsVIlHjgo12pQ5NCYxSPjP3zXOjU0e8tvtggQ%2BmJzufi4X7XYyKvDyF%2Fe6a%2BzcO0CBZPusK34FZcIOOFH1%2BVoV76ElHjoTDTifpCB46TxOV6Ks%2BgnM14YPbxclxHaTZx5jrW2xeDMa3xPCMbs0waso0MPLnvEO4DSEFeJQwB3LfYdJNe8mWejAfYi2QqBMN9FbXjKnFXtCo%2B%2BXRrXnV0Mfbp68fdnNkyBLfQaiaC%2Fyz1WFOQbCLYm%2Bobq0lDS%2F%2FgZFGTEQWcSw2hJuo8qbY5ZbjwfrgyHQG83%2FSuW9PpF9qYCV%2FSVeCR4MF6djDwe8lOeFu%2FWRl9rgbn13sTGXtvEEL5J1dttamYt2d3o%2B6Rxl5YGVk1f5VBP2wPDU3NWDL0w3TqSUdzVoNaFR67agCrqZ45eM%2FAh%2BhCb%2FdOtxXLX3it948S%2BZ%2Fq%2B8%2FgHoRlakbN0hSN2LbqQcPcvrjt2U31QbcorQpxuUZUNQOVA18wr23kvAtkn5%2BWhSg88mxZzIEBtSrLgr0LTgc7DbGWqHbMhL1UlRZKOPkFJAdCGH6qQISRLMKWhxskGOqUBn%2BrNCWqI2C7RHOic4kjGzjK0ngSPRf2b%2B%2Bz1xPLg%2BgKNEoLcWiyMrgUiXZfUsnZiWMPfpyLCaN6whsEGvtq1SbruwHKy0mO%2B6O%2FhCrV9bRDVAtHBTm%2F4N9KhzOyjYwnw8aCuFZ1C9ZhoFKnvy3RpV9Mtz3SGEDTZsLTvZ0ThfJm7yvhgglro6Mgn6GwAdQmj5IoYBiQ5bGhV9T80md0F2fQm7s35&X-Amz-Signature=c1a8d2c9c908ac03cba8f76b16ff3dc9ae65ae33302a821deef620c4696bfd0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

