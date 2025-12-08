---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTJHIGW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHtforbQJjaJi1kDm%2BoRLAWN1lHOvMGIHTdldaZke5twIgCHCrJiMao0XkJZyAyb3IjCYfIVtsyp6UOuvhpC%2BpMsUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9u4N6UfK%2BNchID1CrcA1%2FxFwKrcH48TJO3yng7QJhRFuUl9be0NMuaUKMJ3FYG3f3P27DWuDxwe9%2BH0QNBLUMV0OD4jsZ9gWjZ3xJyDDJK0PZffqMkzOBWT7GWfCR25aoFJHRL8NwY5gXa0nd4OrN4%2FlGpKKLA1sORVz%2BCVNpnlgk8Sc4dRqffF%2FgtJWKcJJRRfMC6ycn%2BSY5zjnbgEEQXJWpFd9AhhyZXt4EA9DyBiTClC979gTUN7AgSyJvdrQ%2FK10Pkz0sMTuEWMuOsB2%2FPtPEBpe9oMHGbxllSGdFQQUmCDxbRGfW4jXkmM23qijT3zFT0m8yxUkHmVMkaJGBdYsLdcOP4ztu84Gty5ArHhltqL4s8SIYZxO0rvrROKlWS7bhYcoPjnnrLmsOaokBjzKqVeVfAEhopRsMcRosLonAxv8ibuJeUuA3tf59DUtvNJoxvRp9Qk2HBVqLYpEkdpJODcdR%2FTMa04o0rmOo0JJLSXhacTVFzZkZcg%2F93cpTFUOnnFCg4o8%2FcbW10oepPIHNCw1Q9Ar82o1mksDgtT%2F0OVNrHlgKk%2BqNYlmtfTfiknfmq%2FzeXddaJIDMxTfO4PccZeT3BnwfQ0xTBTBSNra2gTD2JU7Kpoz4LxBXqQ8taKvyPmhpYSs7VMK%2Ft2ckGOqUBmS9Gz5hpkQ1ISQ95RG9%2FF2VJK0iAOavwX9TnU3uJDEOpKG%2FBlWJtMBi%2FgSQTUJ3iPo34T32BqCu4O4LJRGHgJ4ORLuLUGN6Hnlx6U8u766HppYutMiAIy5UpOb2okF4wfK7MGgGfhVP3J73b84T2%2F8YGqGghbuXrURGvRda2sDN4eSXkmJflORDR%2FhUD9ebABbwj35W8vosgUmJrbxkdm3j4ZWcY&X-Amz-Signature=5cb03735ed81b21947a89f7e1373293c5ca9370a76dc3bbbde8464ca57a84597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTJHIGW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHtforbQJjaJi1kDm%2BoRLAWN1lHOvMGIHTdldaZke5twIgCHCrJiMao0XkJZyAyb3IjCYfIVtsyp6UOuvhpC%2BpMsUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9u4N6UfK%2BNchID1CrcA1%2FxFwKrcH48TJO3yng7QJhRFuUl9be0NMuaUKMJ3FYG3f3P27DWuDxwe9%2BH0QNBLUMV0OD4jsZ9gWjZ3xJyDDJK0PZffqMkzOBWT7GWfCR25aoFJHRL8NwY5gXa0nd4OrN4%2FlGpKKLA1sORVz%2BCVNpnlgk8Sc4dRqffF%2FgtJWKcJJRRfMC6ycn%2BSY5zjnbgEEQXJWpFd9AhhyZXt4EA9DyBiTClC979gTUN7AgSyJvdrQ%2FK10Pkz0sMTuEWMuOsB2%2FPtPEBpe9oMHGbxllSGdFQQUmCDxbRGfW4jXkmM23qijT3zFT0m8yxUkHmVMkaJGBdYsLdcOP4ztu84Gty5ArHhltqL4s8SIYZxO0rvrROKlWS7bhYcoPjnnrLmsOaokBjzKqVeVfAEhopRsMcRosLonAxv8ibuJeUuA3tf59DUtvNJoxvRp9Qk2HBVqLYpEkdpJODcdR%2FTMa04o0rmOo0JJLSXhacTVFzZkZcg%2F93cpTFUOnnFCg4o8%2FcbW10oepPIHNCw1Q9Ar82o1mksDgtT%2F0OVNrHlgKk%2BqNYlmtfTfiknfmq%2FzeXddaJIDMxTfO4PccZeT3BnwfQ0xTBTBSNra2gTD2JU7Kpoz4LxBXqQ8taKvyPmhpYSs7VMK%2Ft2ckGOqUBmS9Gz5hpkQ1ISQ95RG9%2FF2VJK0iAOavwX9TnU3uJDEOpKG%2FBlWJtMBi%2FgSQTUJ3iPo34T32BqCu4O4LJRGHgJ4ORLuLUGN6Hnlx6U8u766HppYutMiAIy5UpOb2okF4wfK7MGgGfhVP3J73b84T2%2F8YGqGghbuXrURGvRda2sDN4eSXkmJflORDR%2FhUD9ebABbwj35W8vosgUmJrbxkdm3j4ZWcY&X-Amz-Signature=81f7e7728aa77f179f0a5086755fa541c970d475987026ddeb9cf2da1161807a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

