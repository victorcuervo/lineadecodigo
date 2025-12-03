---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DOU2OT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDiGK9%2BPz%2FvbNOJYtm248ecSxb92KifrxRvEW1ritDIhwIgbaG82Fre4TC5LBfOtnviG0BHWjIGFMv%2FuMg2GeZBrBsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBnpkVLW21Nm0tqrJyrcA6G2746jApt%2BBzuDPC3M8rJe5bcrKRg4dZQjOFgV1STUMVqnSQWYKls0f6Wdan91sPovb8gVlCsF6k%2Bm65rIbLcnMu87efKx80AUUoXU%2BSTT0wk6sZB2K06lRpVzDq1IL7slIV11%2B4NsPxh2n%2FUsK6YzHOGJYGz6b0xh80mh7gUAnhqVhRoh2d7%2BCrcD3BcgRC6rCr7GHjAJqEbJP9QlutYZkfi4UfFNSAucFeGBqhq2y1LHO1qVMDzwQ7Kxcl1y4kbbBOIpFFWaEv3A3gLf69CaZ8zNCChrTW0OcLootS0s227vG5gCBmKuI38Wlx1b%2FYhiOgTVU6o6TmasnftX4%2B63ITpSoqdEyGLhzV91Qj16d%2BR788jldV217uACrfkZJOfxTX653pVTDVSDHt%2B26OG%2F%2F3wLodsRy%2B3jIk8O26yMd0X%2FNwHmsAaebuppscMteeVlwMvUvi02NztU26wrT1Cp7BzbVbaaxa9ixpGnEvETA3BRAABzhkA6r7ACANDLnlAO0gyJ5aktaiypRjU73PGsafobj19Bg3L3l%2FuMBghu3lcMDrc2oLWGgvZ7VQdAu5UbSx4VC%2F1awV3rzaVdLBmZ2NG6JXU8g3ecISjNzbBAzDcoDUPd%2Bu9RYioEMMqUvskGOqUBLbuCelncRvGXaj87cPSmuHS4pJnHpLhQxmmDyzU0HMvY9NqL19DVT%2BChtIDqCJij2tK8ooutPZeApTYo39qkZVYRrtClEKRz8pWcVeZuieFmaMSYMfHhrOLlrXBlq3xOFmED5hY1Sp6DJCsUjsd1COqWHi2ZOM43L8BM2xw7Qvu89Y9pKXGYc1D2S3HdVKFYzoW7ly5acDGjJNh6pfH1KLC1hMAa&X-Amz-Signature=bc39798702b0283bd5a72ca29175e98d725815776b817a53a9a95ef03135c4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6DOU2OT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T010620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDiGK9%2BPz%2FvbNOJYtm248ecSxb92KifrxRvEW1ritDIhwIgbaG82Fre4TC5LBfOtnviG0BHWjIGFMv%2FuMg2GeZBrBsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDBnpkVLW21Nm0tqrJyrcA6G2746jApt%2BBzuDPC3M8rJe5bcrKRg4dZQjOFgV1STUMVqnSQWYKls0f6Wdan91sPovb8gVlCsF6k%2Bm65rIbLcnMu87efKx80AUUoXU%2BSTT0wk6sZB2K06lRpVzDq1IL7slIV11%2B4NsPxh2n%2FUsK6YzHOGJYGz6b0xh80mh7gUAnhqVhRoh2d7%2BCrcD3BcgRC6rCr7GHjAJqEbJP9QlutYZkfi4UfFNSAucFeGBqhq2y1LHO1qVMDzwQ7Kxcl1y4kbbBOIpFFWaEv3A3gLf69CaZ8zNCChrTW0OcLootS0s227vG5gCBmKuI38Wlx1b%2FYhiOgTVU6o6TmasnftX4%2B63ITpSoqdEyGLhzV91Qj16d%2BR788jldV217uACrfkZJOfxTX653pVTDVSDHt%2B26OG%2F%2F3wLodsRy%2B3jIk8O26yMd0X%2FNwHmsAaebuppscMteeVlwMvUvi02NztU26wrT1Cp7BzbVbaaxa9ixpGnEvETA3BRAABzhkA6r7ACANDLnlAO0gyJ5aktaiypRjU73PGsafobj19Bg3L3l%2FuMBghu3lcMDrc2oLWGgvZ7VQdAu5UbSx4VC%2F1awV3rzaVdLBmZ2NG6JXU8g3ecISjNzbBAzDcoDUPd%2Bu9RYioEMMqUvskGOqUBLbuCelncRvGXaj87cPSmuHS4pJnHpLhQxmmDyzU0HMvY9NqL19DVT%2BChtIDqCJij2tK8ooutPZeApTYo39qkZVYRrtClEKRz8pWcVeZuieFmaMSYMfHhrOLlrXBlq3xOFmED5hY1Sp6DJCsUjsd1COqWHi2ZOM43L8BM2xw7Qvu89Y9pKXGYc1D2S3HdVKFYzoW7ly5acDGjJNh6pfH1KLC1hMAa&X-Amz-Signature=00fb536fb12d35eaa1a99912cd53c2a377e78a789fea5ffba1992d4bc812d17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

