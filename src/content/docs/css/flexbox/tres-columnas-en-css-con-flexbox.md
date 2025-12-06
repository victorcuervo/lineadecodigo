---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZOVPW3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg23X1M76akbqlyYL8lIjOXNEx4U%2BZVrVgqZreTOT9vAiEA8RyBVN9qpH6l%2FRWWVsAEpWEmFIzfiaC01p%2FLksb%2Bcwkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCwGg3QF1VFe3oz8hCrcAxIBSvAl4DM25FrdZv7R4Z1AVldGiEYLeudWloftHurluuRkR%2FeKkzUGwaq3p8chqfF8gIclwQlxz9wqK%2BC2v1gMxDXJCaGkPGX552deBoTEa%2B4r3VzoH5L82%2FYkw0HY1%2BgppCgG5Bp%2FCdqhbwz23ngTO1s1C7EeaAmPCiXESWgHA8Z%2FEboXiFeSGnM4tpuIfDI0fP1EO8evmsnpIMerAYxp9GrXQLjsWjWiEFOzg4SSkeRq7lpp5yrzZY5zvf3PqlrZnDH88UUrKxCJJqqGFsRTBHmqBA%2FAJTFMzzwH%2B4G7or%2BaEIZpa554Hn01RCYn%2B341jhsdjuVjcCom%2FpzXx%2BBKaVtUmd5KJ5oOX2YVZ1fdOesvVNsw0Y87HcYTsSK4FZCv%2Fd%2BZDOxp6OR%2BrZT9FqnTEBc5X1Fs1wJtWrFjUGT4Om70%2FJ9GCSWa2gznEgP7MWyKHVFqHvIqBjc4thEnZKEpy7QoBnO1gC4UEAxjDxRXxCoTk%2FEfTxO6Va4b1TPlXWtLuO6FPgrGWLXxJfsDo%2FijAPpxo%2F5EEagLxrrio7kzbTI9Q5qaP4Ro9DcKBPCieph8j7iNxdGnpc52aOTS5npzouFTobaVEPYOrVmZunonOkQ87BwNCg%2FFinC3MNCm0MkGOqUBsKnoIF%2BVeIKLG4qF%2FgjpAo%2BHcmS1MVDEKxbZ%2FRAOxv0uAl56fTHGPtNubeJbxkPr%2FDgL5nUIm5bDSAALm1DrHXi02x87naSvw%2BDQiuEAOjbUsPuZwQEmc6MtE9CfGTrcP8ZvNeopwdN8DAu9eu%2B2ai%2BWISfoyrCePk0tiJ71RLZvQYU8yMYFx1mAe%2BU69IBSjCdMbs8cNYDHJIQ9scHA%2BUPPdGW4&X-Amz-Signature=2986fa2db3489363031714676f8c02592d552bc49f2d45592ebc4a009c235d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZOVPW3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDg23X1M76akbqlyYL8lIjOXNEx4U%2BZVrVgqZreTOT9vAiEA8RyBVN9qpH6l%2FRWWVsAEpWEmFIzfiaC01p%2FLksb%2Bcwkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCwGg3QF1VFe3oz8hCrcAxIBSvAl4DM25FrdZv7R4Z1AVldGiEYLeudWloftHurluuRkR%2FeKkzUGwaq3p8chqfF8gIclwQlxz9wqK%2BC2v1gMxDXJCaGkPGX552deBoTEa%2B4r3VzoH5L82%2FYkw0HY1%2BgppCgG5Bp%2FCdqhbwz23ngTO1s1C7EeaAmPCiXESWgHA8Z%2FEboXiFeSGnM4tpuIfDI0fP1EO8evmsnpIMerAYxp9GrXQLjsWjWiEFOzg4SSkeRq7lpp5yrzZY5zvf3PqlrZnDH88UUrKxCJJqqGFsRTBHmqBA%2FAJTFMzzwH%2B4G7or%2BaEIZpa554Hn01RCYn%2B341jhsdjuVjcCom%2FpzXx%2BBKaVtUmd5KJ5oOX2YVZ1fdOesvVNsw0Y87HcYTsSK4FZCv%2Fd%2BZDOxp6OR%2BrZT9FqnTEBc5X1Fs1wJtWrFjUGT4Om70%2FJ9GCSWa2gznEgP7MWyKHVFqHvIqBjc4thEnZKEpy7QoBnO1gC4UEAxjDxRXxCoTk%2FEfTxO6Va4b1TPlXWtLuO6FPgrGWLXxJfsDo%2FijAPpxo%2F5EEagLxrrio7kzbTI9Q5qaP4Ro9DcKBPCieph8j7iNxdGnpc52aOTS5npzouFTobaVEPYOrVmZunonOkQ87BwNCg%2FFinC3MNCm0MkGOqUBsKnoIF%2BVeIKLG4qF%2FgjpAo%2BHcmS1MVDEKxbZ%2FRAOxv0uAl56fTHGPtNubeJbxkPr%2FDgL5nUIm5bDSAALm1DrHXi02x87naSvw%2BDQiuEAOjbUsPuZwQEmc6MtE9CfGTrcP8ZvNeopwdN8DAu9eu%2B2ai%2BWISfoyrCePk0tiJ71RLZvQYU8yMYFx1mAe%2BU69IBSjCdMbs8cNYDHJIQ9scHA%2BUPPdGW4&X-Amz-Signature=ea849f278dd1bc3d2893e82b4194dc344428d9eb69bbb7e79b0faef2fd62c764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

