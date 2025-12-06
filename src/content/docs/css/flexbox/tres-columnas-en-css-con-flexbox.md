---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBJMIERJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZXurbEcug4t615%2Byopwy3%2BgDOOxOmHm2ZFlMKtUE3wIgNHBQb6yWA37dv8mKOciYzzlpnzACGf7VCaaK2ttZIdkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDENJbrsvMmw55V0NFSrcA%2FEBkglPjym7x%2BC3HhHLsBMOl%2Fexgw778D%2FcBuac%2B4K4LiBgVw7zWgoESYoafIUTKs1uDsLRUg9l3O6euQwY2vzBjDPDoAtQ5gWTc7iIO2bRA29wNLbkAElhewIQqkRAW7xmRZbvpTsaphMbxxU8KiWH%2FNi%2B8skLTuYAAs0O7ISq1E4BKLtbzEZV3nYWqy54BcxCDznMDudiKKdc2JPeW5D%2FLNeQX3HJ7FZTaDkE%2Bp8m5wYwfyRXKb%2BAOdoZ4GzWhs46WpTtCM0UT3w0hoRJzHN%2FkTicOZrleldyRnm8257YeT8Qb8eLtSmDUYngLSRC04P6yb8nnQkv%2BjRVda%2BfRvGxXM2Ykx6UER2Zeh9hNu9BuKY%2B8LsDXDqSaT%2FECSk2WTTp%2BOcP2FQ6Nkadt8UX4zNVolXUq3mun2VdqA2HqJT%2Ba49Ftp0o9%2B0fXbnH0firDsoreJ2D2cfZLTljfDOQNvahaHZVoja%2BAj03CTTHO7dqVAYo2Hk7x9%2FXQ5LjptKmREr%2F0LgQbQ%2Fc4TI8OXkigBqf2nY5OPIiaCV8VCFe2vLUrXBVglzgbr1rpA2ThxLbPHgDWGNRjt74QjgqANIhEUFT%2BcQAKNyOCdHnphuZXLdVsl53LDoGzPfRnv7tMLenzskGOqUBFLc3Q46Mg2p6oM%2FyVDuDDQJeg7CcC6k7LLf708BMdjW4s29bSjHzQaiBFoKd8YcYPmvFBXMgIGqXafYq4nMVmLnxOENgt%2BxNKd1Lr6lzLIIo0RLuQMa0qCpZsthQgx6QzpJ4ZQ79HvnBoN6P96MziySUIvHh%2F3A1XU9EEg2Fo2cSzoEGE4Zaf9ddtaWi0MA%2BgNKCXZsqpH3vHqTfT2qgJqDrHj8U&X-Amz-Signature=fce973908e0bce51ae110718f99f0797a678700534463a1cb9bfd07a6440f79c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBJMIERJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbZXurbEcug4t615%2Byopwy3%2BgDOOxOmHm2ZFlMKtUE3wIgNHBQb6yWA37dv8mKOciYzzlpnzACGf7VCaaK2ttZIdkq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDENJbrsvMmw55V0NFSrcA%2FEBkglPjym7x%2BC3HhHLsBMOl%2Fexgw778D%2FcBuac%2B4K4LiBgVw7zWgoESYoafIUTKs1uDsLRUg9l3O6euQwY2vzBjDPDoAtQ5gWTc7iIO2bRA29wNLbkAElhewIQqkRAW7xmRZbvpTsaphMbxxU8KiWH%2FNi%2B8skLTuYAAs0O7ISq1E4BKLtbzEZV3nYWqy54BcxCDznMDudiKKdc2JPeW5D%2FLNeQX3HJ7FZTaDkE%2Bp8m5wYwfyRXKb%2BAOdoZ4GzWhs46WpTtCM0UT3w0hoRJzHN%2FkTicOZrleldyRnm8257YeT8Qb8eLtSmDUYngLSRC04P6yb8nnQkv%2BjRVda%2BfRvGxXM2Ykx6UER2Zeh9hNu9BuKY%2B8LsDXDqSaT%2FECSk2WTTp%2BOcP2FQ6Nkadt8UX4zNVolXUq3mun2VdqA2HqJT%2Ba49Ftp0o9%2B0fXbnH0firDsoreJ2D2cfZLTljfDOQNvahaHZVoja%2BAj03CTTHO7dqVAYo2Hk7x9%2FXQ5LjptKmREr%2F0LgQbQ%2Fc4TI8OXkigBqf2nY5OPIiaCV8VCFe2vLUrXBVglzgbr1rpA2ThxLbPHgDWGNRjt74QjgqANIhEUFT%2BcQAKNyOCdHnphuZXLdVsl53LDoGzPfRnv7tMLenzskGOqUBFLc3Q46Mg2p6oM%2FyVDuDDQJeg7CcC6k7LLf708BMdjW4s29bSjHzQaiBFoKd8YcYPmvFBXMgIGqXafYq4nMVmLnxOENgt%2BxNKd1Lr6lzLIIo0RLuQMa0qCpZsthQgx6QzpJ4ZQ79HvnBoN6P96MziySUIvHh%2F3A1XU9EEg2Fo2cSzoEGE4Zaf9ddtaWi0MA%2BgNKCXZsqpH3vHqTfT2qgJqDrHj8U&X-Amz-Signature=208eb15af5bf5045db2ec28973b70e0a5ae130ba4f4ed5d61353edcac271f45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

