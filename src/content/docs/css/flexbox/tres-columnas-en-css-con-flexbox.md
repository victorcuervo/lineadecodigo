---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYYWHOT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjIbqmXtP%2BW0fmmaWzRsJo8rMhcxM5xc2x1yyRgA6f9AiEAogJirQCMRL0c2lQywq0WTljAZWT8FywHTOs%2BR1mqFwUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGCIOceOpaOHlk3wircA6G896Larfi34cW646vZcWxaQKajhJ8JzDZG1%2BDX%2F2IxTkdn9Ihd2LsbuXnI16fEQ8L12GtYwj9y5nR0eBb8UM348aUkHl91wwRnFzID6Tw0kb0KuRXyY3fPMQ9mMiSQEaSTZrJOPG3SzGAXoOsUWfTTItNjo8uwWnzkcM%2BdcGzpRJBRnuUwqaiWA8YEcpST28VE8T5tVp7VGk9PF3o3NNBtwIsPv%2BWfyE3rGg21rETIXK8607VzDZYV32B9CzE9%2BSFJCOW18kz9q1F2iFkagJNj%2FSEKAF6FcdL1lNnkDM02Sn7SSrzAm8WiLRrtMrjuEk3pmtQilPmKROebmZ8VWIXrmdWu2qOBelVI7qcHA9X0si8ZjHknCPuId0AHjJ47nKrTVAIiBa5WRG4HiwnRrTCEvDzc2YOgZrinw7IXmaND03ZTREDGD1PoZ4UhH957um%2BrG2Y30wr00%2FvfD2QbGsZLfnOP3GyJPnVwfanTFotFVphUiwhkxexdfp2gZy5JbrAVUjXZS2zR7OO%2BbEGd4opevgq%2FG3dzpIhA07tRb1gx8rZkBJwSboJJtDoAr3ePuRSY1v2QjXM6%2BymuYUHe%2FRVL%2FEELu%2Bll23KIyzi9CEDAb7s7m1zOHKtUhVfHMO2h2MkGOqUBWjPtCSKEST7k170042PPoiXOhyeK0Tw%2B%2FP8xUNJJzTBRJQozZqoHHsyh%2FZtCUKsmrqeO%2FYNzMvlod1tzfPYU5iaLZkdxCyZET7e3ZFF1ZQOc1aUmTnDwglNNHgDsNstmN11VlM2xEICgcQgXIUBRpP3htTMhieg1uyN73%2BnwBdshKqQMMGWoQTO43GsMOo7%2FLbcYFvAbZ64po0JrV%2BcNjiFDPppp&X-Amz-Signature=fff0ab79c9150a5c68fe3fcd370f27e729a12b273f30d8398122d6fed048b6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WYYWHOT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEjIbqmXtP%2BW0fmmaWzRsJo8rMhcxM5xc2x1yyRgA6f9AiEAogJirQCMRL0c2lQywq0WTljAZWT8FywHTOs%2BR1mqFwUqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGCIOceOpaOHlk3wircA6G896Larfi34cW646vZcWxaQKajhJ8JzDZG1%2BDX%2F2IxTkdn9Ihd2LsbuXnI16fEQ8L12GtYwj9y5nR0eBb8UM348aUkHl91wwRnFzID6Tw0kb0KuRXyY3fPMQ9mMiSQEaSTZrJOPG3SzGAXoOsUWfTTItNjo8uwWnzkcM%2BdcGzpRJBRnuUwqaiWA8YEcpST28VE8T5tVp7VGk9PF3o3NNBtwIsPv%2BWfyE3rGg21rETIXK8607VzDZYV32B9CzE9%2BSFJCOW18kz9q1F2iFkagJNj%2FSEKAF6FcdL1lNnkDM02Sn7SSrzAm8WiLRrtMrjuEk3pmtQilPmKROebmZ8VWIXrmdWu2qOBelVI7qcHA9X0si8ZjHknCPuId0AHjJ47nKrTVAIiBa5WRG4HiwnRrTCEvDzc2YOgZrinw7IXmaND03ZTREDGD1PoZ4UhH957um%2BrG2Y30wr00%2FvfD2QbGsZLfnOP3GyJPnVwfanTFotFVphUiwhkxexdfp2gZy5JbrAVUjXZS2zR7OO%2BbEGd4opevgq%2FG3dzpIhA07tRb1gx8rZkBJwSboJJtDoAr3ePuRSY1v2QjXM6%2BymuYUHe%2FRVL%2FEELu%2Bll23KIyzi9CEDAb7s7m1zOHKtUhVfHMO2h2MkGOqUBWjPtCSKEST7k170042PPoiXOhyeK0Tw%2B%2FP8xUNJJzTBRJQozZqoHHsyh%2FZtCUKsmrqeO%2FYNzMvlod1tzfPYU5iaLZkdxCyZET7e3ZFF1ZQOc1aUmTnDwglNNHgDsNstmN11VlM2xEICgcQgXIUBRpP3htTMhieg1uyN73%2BnwBdshKqQMMGWoQTO43GsMOo7%2FLbcYFvAbZ64po0JrV%2BcNjiFDPppp&X-Amz-Signature=cdeaab4ab6a5b0bdff779d982674327844f702886594a0bf9cc142c620cdfd5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

