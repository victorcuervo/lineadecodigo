---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKCL2ZK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu%2B1ipIbW8EuHZYGR9v6zyxujZzWskt8LcJsaG5DxahAIgLMMo5kKoLXnkDRVZYJJICQz68re%2BXqbsiIJlIQqsimAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCvdnmWRAgU3Pb%2FVFircA9ug9uf2B7qdjbeoSPUQmXgWBPjZ8xT4L1avBshBygcjYF9ApRH38Liu4VLGhOh33%2BoX8wErp2HSEaBglz15bzffGeIt2aFlBRNFcnSoCYj6CK1IbwCRGx43UUB1mijfJIH1Bo9ii2UFbBDUR2NiBpVwTVWAJkSs0WZnxCckumqFCqpE2OMH1a1bduVHZH7VCxlk6GkeNbSaEf44dCeQqGj9yMMUhQHMWSnhv0DFKWFXSBe95l9yULx3pHJ78oh6eEKkZSghnawsX1BIOUPJrrFwaEULHtKy2%2FF4kEA5jJhDEd%2FUqwC0EY0F4BOKKho9UD3avX3ko2HElVJ01u67KwBoJD5zCVKn5D59aLdpSzkRpHJ0wwxrZISv7IU2SyJvAkLkpCvbnAnONERQPqYTsbJSbkqnJdb%2BCDdsFBhY%2B9OeZ33rskzuGGIOR5IkXVQa%2BB2mAz8k694GcSMDb6d25NV7PfQMrULkxzbBxuMCWxXgmUhEDmz8LbmPcA6L2nHPO%2FmjU5CWTSv%2FJA1RIdwK9M0EVklIyqAoMyu35q4LtePsi2y1JfTOGyPzeXAOPkm9HOuj5z5%2BS2AM1mfvVHZ9EOqLl2CTEIW%2Fi9SJy8uBDJAZOLZsXRSQRmMDPk3eMOGMyMkGOqUBwrOuRWGYzBgl5Cr3K7cKujMuj2YoljZyXVr%2B0PoByMq53EJd3dH%2B24%2B7qEiPgN2hln%2BU6CHzhhskF%2BT8Ui7Sfp5WivaTiEFqThzLYFtvrNZLSpEaKJ8ZaWIiqyXYCfy0f4nc6cfS%2B0R25%2BCY6LPGFpaUo6zcFBRPhVmowDr4FHR0o9%2BI2X3NEv2nNDkeVZOGDVdFwKrnUnv1oWlCtwSCebFai5%2BW&X-Amz-Signature=2c13b04efdf1330c78a328c0b4bfe9ca2598ed2be105f925115adf777491e792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KKCL2ZK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu%2B1ipIbW8EuHZYGR9v6zyxujZzWskt8LcJsaG5DxahAIgLMMo5kKoLXnkDRVZYJJICQz68re%2BXqbsiIJlIQqsimAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDCvdnmWRAgU3Pb%2FVFircA9ug9uf2B7qdjbeoSPUQmXgWBPjZ8xT4L1avBshBygcjYF9ApRH38Liu4VLGhOh33%2BoX8wErp2HSEaBglz15bzffGeIt2aFlBRNFcnSoCYj6CK1IbwCRGx43UUB1mijfJIH1Bo9ii2UFbBDUR2NiBpVwTVWAJkSs0WZnxCckumqFCqpE2OMH1a1bduVHZH7VCxlk6GkeNbSaEf44dCeQqGj9yMMUhQHMWSnhv0DFKWFXSBe95l9yULx3pHJ78oh6eEKkZSghnawsX1BIOUPJrrFwaEULHtKy2%2FF4kEA5jJhDEd%2FUqwC0EY0F4BOKKho9UD3avX3ko2HElVJ01u67KwBoJD5zCVKn5D59aLdpSzkRpHJ0wwxrZISv7IU2SyJvAkLkpCvbnAnONERQPqYTsbJSbkqnJdb%2BCDdsFBhY%2B9OeZ33rskzuGGIOR5IkXVQa%2BB2mAz8k694GcSMDb6d25NV7PfQMrULkxzbBxuMCWxXgmUhEDmz8LbmPcA6L2nHPO%2FmjU5CWTSv%2FJA1RIdwK9M0EVklIyqAoMyu35q4LtePsi2y1JfTOGyPzeXAOPkm9HOuj5z5%2BS2AM1mfvVHZ9EOqLl2CTEIW%2Fi9SJy8uBDJAZOLZsXRSQRmMDPk3eMOGMyMkGOqUBwrOuRWGYzBgl5Cr3K7cKujMuj2YoljZyXVr%2B0PoByMq53EJd3dH%2B24%2B7qEiPgN2hln%2BU6CHzhhskF%2BT8Ui7Sfp5WivaTiEFqThzLYFtvrNZLSpEaKJ8ZaWIiqyXYCfy0f4nc6cfS%2B0R25%2BCY6LPGFpaUo6zcFBRPhVmowDr4FHR0o9%2BI2X3NEv2nNDkeVZOGDVdFwKrnUnv1oWlCtwSCebFai5%2BW&X-Amz-Signature=457631d9f676a171ecf1b9d169bf460083bdfc1e9d5277a1c040f61fd47bd119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

