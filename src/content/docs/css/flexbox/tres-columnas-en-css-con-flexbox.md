---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4IM2A5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJxJ3DnZ80l%2FHVLrWIsXxzH418RcDMxSOS%2FrM6BvAC0AiAfh%2BomaKnaAohuneKGJpAQK5yPIcxnvl4ZGtzt9yKXPCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMC4%2F76dlQoUHFWduVKtwDD9UREnUDt%2FJhm2TY%2FpeyfduXUC004cxWl8ZjNdLlZoed3GTLP9j08A93NFMax%2BhECISmeX%2FB2177ZSov49INgxX%2FRSxQlfwna70OsaIekG2lwXM58ZJkInCWxIEqT%2FUm25YFL9MFo829Pzuoa3rSgwq0woWyUO0YQoVZJGgh02qt%2Bsc5hVGVBIUC8nKzmDxflDf0do0TYoKjuMMZA5ZyK70HXwW63qHModCGMB5xnrO8EgIw9ENABUVUFyzeAU2jSWpgInBJseaPA9syTVbXR75n1Zd1qtagDJQbdfSauXPW49koc2g4LoHxSkfje1uAaTnxl134WaHRs%2F6b1%2FNPqlwLzYnAJyKaM0MOJFYyPdt5ZNCsbwCO4MWdgqwovTm1Bbc8uOxDhSVif3J1P8TpDra%2FZlajxjCYysa%2F8CRy9Om%2Bi7v%2BdppLkVUJ1C%2BkoldiGuxtjdkh%2Fh%2FjOT2OHMpS8ezDEXQ2wpRE%2FDLgkXaChKZkvb6IzBf8tbBXTvd%2Bwauu5jPCTJB0FRUENoRknZIW28NqNa9Sw%2B4si%2Fbk9Ha4p0WsYKMfiYgfwIC59BjCbU1%2BiD6LvkQ7498VNu9Fbsb0MJOTdoJLy%2BJuNT%2F%2FsLHWaArQJSVkp5A%2BlUF01icw1YzIyQY6pgF53NE4qyswxT44qgzCfp3gUVJFF2WwzjdKKG3CQcXD1yqUK3eCWfRUM6lQxto0KpcAJG0BBkR8VNSAlIVT3anSR6bzvYqMd4zSp7Y6a9y0%2Ff7EyowqvVUuAN%2F4NG8DWMmCcz3zV2DJVAJCcfPbDOmcATP%2F2GqxRIDdv0OKZgF3P7A5PxbZ6SmGDhRQAlIDtjHJ9Vh3SFPhjjE9AHHr%2BGXG3BS9tscP&X-Amz-Signature=5e485e09ed9c57639673d4f3380e84d61201d22272a0f43c8ab0913a05f45c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU4IM2A5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T003637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJxJ3DnZ80l%2FHVLrWIsXxzH418RcDMxSOS%2FrM6BvAC0AiAfh%2BomaKnaAohuneKGJpAQK5yPIcxnvl4ZGtzt9yKXPCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMC4%2F76dlQoUHFWduVKtwDD9UREnUDt%2FJhm2TY%2FpeyfduXUC004cxWl8ZjNdLlZoed3GTLP9j08A93NFMax%2BhECISmeX%2FB2177ZSov49INgxX%2FRSxQlfwna70OsaIekG2lwXM58ZJkInCWxIEqT%2FUm25YFL9MFo829Pzuoa3rSgwq0woWyUO0YQoVZJGgh02qt%2Bsc5hVGVBIUC8nKzmDxflDf0do0TYoKjuMMZA5ZyK70HXwW63qHModCGMB5xnrO8EgIw9ENABUVUFyzeAU2jSWpgInBJseaPA9syTVbXR75n1Zd1qtagDJQbdfSauXPW49koc2g4LoHxSkfje1uAaTnxl134WaHRs%2F6b1%2FNPqlwLzYnAJyKaM0MOJFYyPdt5ZNCsbwCO4MWdgqwovTm1Bbc8uOxDhSVif3J1P8TpDra%2FZlajxjCYysa%2F8CRy9Om%2Bi7v%2BdppLkVUJ1C%2BkoldiGuxtjdkh%2Fh%2FjOT2OHMpS8ezDEXQ2wpRE%2FDLgkXaChKZkvb6IzBf8tbBXTvd%2Bwauu5jPCTJB0FRUENoRknZIW28NqNa9Sw%2B4si%2Fbk9Ha4p0WsYKMfiYgfwIC59BjCbU1%2BiD6LvkQ7498VNu9Fbsb0MJOTdoJLy%2BJuNT%2F%2FsLHWaArQJSVkp5A%2BlUF01icw1YzIyQY6pgF53NE4qyswxT44qgzCfp3gUVJFF2WwzjdKKG3CQcXD1yqUK3eCWfRUM6lQxto0KpcAJG0BBkR8VNSAlIVT3anSR6bzvYqMd4zSp7Y6a9y0%2Ff7EyowqvVUuAN%2F4NG8DWMmCcz3zV2DJVAJCcfPbDOmcATP%2F2GqxRIDdv0OKZgF3P7A5PxbZ6SmGDhRQAlIDtjHJ9Vh3SFPhjjE9AHHr%2BGXG3BS9tscP&X-Amz-Signature=4f5534b8111cd6b55089fc4e3158d659e1a27723431b362157374c9bdba1ea0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

