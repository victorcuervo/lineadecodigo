---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXZF2AJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2eVedDJNM%2B%2FE0zA2Wz8%2Bjt2WcMsju175yuAybzx0bnAiEA%2B%2Fq8f8W63K%2FqBoAsaBKaUTsGpUSR7UkYA%2F5TZgXvJ90qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVMieXxtX3zgopS%2BCrcA6tzmWEYgCs8bzLI3yQUbiDcUx7bfp%2FEiDu6xNKG%2Fq8gdG50Zyt%2B1mWsV6k3ZOQyO9O5smVuow57bwChPUDNJXkcMutpdK5A1qoBQ7cZHdOrVW5EzZQ9Xw5N4%2FMSBZ8PL8owRT7B0vlR6eGn7STeDvf3vXzqpwfVIRD0xwSE%2F5M1Y%2BcVGDZhQzRXEbx2Krm%2BmxYMcveT%2B1h3Eam8Px5VfFlk%2BIz4cx10NKGcXxPH3OOT0kwwqji8KaTE9ZkG335DGVZqnrGySIqCBWc%2BB%2FLUHy9yuavQ996jHa5lvoHKDG3X7%2BKjrK3yegXDW5cPzVPuhhehjIyLHRAkapTY43xqc7kRsbP91DexpbmA%2BDjfOp2oxN9HhhJhnPnngX%2BiIZMKHSnabrMCsbeLA4kfkf74f6tmNuDVua0cLq6X4TvdSvFm44xXDwzQQiE0HaiOICBSZb68p%2FHx8HVCujXPd8dHMDYElAujbMcy%2BIzfLJmU3b%2B0MPSyuI5L5YGxO9RyyhbBW6lXFy7yNHtRN2oMHi6Ou5aO3IlyprRwVpp%2Beclj9%2BU0wXLV7BOT%2FrqYTDVR%2Fz%2FvX5D%2F%2F5VA7QQpNIC8L7pfOHB60doBc5dkMkxAdImDQl2xxw1lKwhoHR6PRfLwMKaH3MkGOqUBGwJnSR9h%2FGE%2BN5Wc95BRDJR9vgFkbUpoL1vHLtizXhuozLCaOfIgay2nuGT1FsdDqDlHtieFNxkW7FQgaRYCTvGPepXT%2FmXZiZ1yRbNCNe76%2FPl7rvjSNAx%2BHAesvRX8HVHB8h7%2BqhIQDh3UZx4d1cP4B4nStaR9wLYBekreRv0XIKV1zm0bUyaVWh4W9ooLIsz4tCIcW8pCOFv61w9WtLYS0j5m&X-Amz-Signature=84d8eb7b286ba6b16b7086d4a6e7914593960fb090c3e07d99131c7bfa063294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCXZF2AJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T180007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID2eVedDJNM%2B%2FE0zA2Wz8%2Bjt2WcMsju175yuAybzx0bnAiEA%2B%2Fq8f8W63K%2FqBoAsaBKaUTsGpUSR7UkYA%2F5TZgXvJ90qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFVMieXxtX3zgopS%2BCrcA6tzmWEYgCs8bzLI3yQUbiDcUx7bfp%2FEiDu6xNKG%2Fq8gdG50Zyt%2B1mWsV6k3ZOQyO9O5smVuow57bwChPUDNJXkcMutpdK5A1qoBQ7cZHdOrVW5EzZQ9Xw5N4%2FMSBZ8PL8owRT7B0vlR6eGn7STeDvf3vXzqpwfVIRD0xwSE%2F5M1Y%2BcVGDZhQzRXEbx2Krm%2BmxYMcveT%2B1h3Eam8Px5VfFlk%2BIz4cx10NKGcXxPH3OOT0kwwqji8KaTE9ZkG335DGVZqnrGySIqCBWc%2BB%2FLUHy9yuavQ996jHa5lvoHKDG3X7%2BKjrK3yegXDW5cPzVPuhhehjIyLHRAkapTY43xqc7kRsbP91DexpbmA%2BDjfOp2oxN9HhhJhnPnngX%2BiIZMKHSnabrMCsbeLA4kfkf74f6tmNuDVua0cLq6X4TvdSvFm44xXDwzQQiE0HaiOICBSZb68p%2FHx8HVCujXPd8dHMDYElAujbMcy%2BIzfLJmU3b%2B0MPSyuI5L5YGxO9RyyhbBW6lXFy7yNHtRN2oMHi6Ou5aO3IlyprRwVpp%2Beclj9%2BU0wXLV7BOT%2FrqYTDVR%2Fz%2FvX5D%2F%2F5VA7QQpNIC8L7pfOHB60doBc5dkMkxAdImDQl2xxw1lKwhoHR6PRfLwMKaH3MkGOqUBGwJnSR9h%2FGE%2BN5Wc95BRDJR9vgFkbUpoL1vHLtizXhuozLCaOfIgay2nuGT1FsdDqDlHtieFNxkW7FQgaRYCTvGPepXT%2FmXZiZ1yRbNCNe76%2FPl7rvjSNAx%2BHAesvRX8HVHB8h7%2BqhIQDh3UZx4d1cP4B4nStaR9wLYBekreRv0XIKV1zm0bUyaVWh4W9ooLIsz4tCIcW8pCOFv61w9WtLYS0j5m&X-Amz-Signature=06e9b17a8e372eb81a3b19e3cbd7394106b925f24aa895bd0556a98bf4744e49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

