---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQZIKO5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIRmjBhoJLnrFnLdt92QmlGRSobSmPLuPMUdlAGkcuaAiAgZU%2FC%2FuzKD4KofzToL0xnZ%2FmRXizZrFIsgGY%2F2p7nIir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMf8YzjW4fEjwQIivaKtwDcZIVTE9leCl59mn0qthp9GX5s3l98qMIkFepBaj50YYhbJ5pPkOszHqJBq4B67VqVue%2BqJeU8sPKbvf2fdPDIgpqKJNMAhN4KbQEi3FHLipQWNOl926EqkY0F%2BmGMDRaL2o600rFuEXbCB3k0UD9sKC3XTi6sccSF2zLKYwp%2FaJVsRRXo0Hbo5yswuYsZ79FJVOrESnJR6%2BbiuZ0OQL5BC5ceI9MYyD2lDtTGYoU9H%2FBtU1BMXSxEXNJ3p84zsBiuW%2Fo58hZdC2o90tnrNjjW%2B0HUTLQwzNk84ZRU0BOihuP7tpTrfDg%2BadXpfUZMQ30TGbzWUyVsoJb6XjvNaJs7GBSo2B27XgP7NNyd43YMVquFZRBoea81Y7MeUPUD1qaKvL8%2Bfrpp9truiZyPHkfDJzhuOa9hQZW%2B18WvMBfRqaEOO0nN1DzJUtOWqGRHDoWJn%2FxoZMmkZWPk6HpUGkcY0DMQAXhzo4bxFZUYBChfA7r7%2BqrXRvBwSZtM8E7A4zU9Hry8aKUDyRv%2Bjimj6ut%2BRv7YBIBWYct628BOqFIdKCqgcVtQ%2BCdkAUcwf0kIFbhyzt0Sbm0mjCUD4vG%2BXbLom%2BrbVOihP3g5CmIlt0ZamTFVlGmLVn6utUuzdowlejNyQY6pgHr%2FtFXtkdBIqNNoxnAr%2BaTWOIuOGBsltsspip1lq61eXLebSrByYKsmd2ZFVLVxJpOXTnG3G0RomryAktn3GKCT42vEfMIM4fofTLsSjFRdi%2BX48qy7c1YXQSD6g2gfpEgWC6g7xsACBEQcx%2BVDeIKH1MKdgEj5cMOSkvt89WC2o9yRLae9WBnaubBKs9FW7M2dEy%2B9rfEQ6h0jq1A3yD25Aes%2BGka&X-Amz-Signature=0fce8cb945cf4341f52b83166f388e86540ee9d4f8bf39cd41d7d5353c586ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEQZIKO5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIRmjBhoJLnrFnLdt92QmlGRSobSmPLuPMUdlAGkcuaAiAgZU%2FC%2FuzKD4KofzToL0xnZ%2FmRXizZrFIsgGY%2F2p7nIir%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMf8YzjW4fEjwQIivaKtwDcZIVTE9leCl59mn0qthp9GX5s3l98qMIkFepBaj50YYhbJ5pPkOszHqJBq4B67VqVue%2BqJeU8sPKbvf2fdPDIgpqKJNMAhN4KbQEi3FHLipQWNOl926EqkY0F%2BmGMDRaL2o600rFuEXbCB3k0UD9sKC3XTi6sccSF2zLKYwp%2FaJVsRRXo0Hbo5yswuYsZ79FJVOrESnJR6%2BbiuZ0OQL5BC5ceI9MYyD2lDtTGYoU9H%2FBtU1BMXSxEXNJ3p84zsBiuW%2Fo58hZdC2o90tnrNjjW%2B0HUTLQwzNk84ZRU0BOihuP7tpTrfDg%2BadXpfUZMQ30TGbzWUyVsoJb6XjvNaJs7GBSo2B27XgP7NNyd43YMVquFZRBoea81Y7MeUPUD1qaKvL8%2Bfrpp9truiZyPHkfDJzhuOa9hQZW%2B18WvMBfRqaEOO0nN1DzJUtOWqGRHDoWJn%2FxoZMmkZWPk6HpUGkcY0DMQAXhzo4bxFZUYBChfA7r7%2BqrXRvBwSZtM8E7A4zU9Hry8aKUDyRv%2Bjimj6ut%2BRv7YBIBWYct628BOqFIdKCqgcVtQ%2BCdkAUcwf0kIFbhyzt0Sbm0mjCUD4vG%2BXbLom%2BrbVOihP3g5CmIlt0ZamTFVlGmLVn6utUuzdowlejNyQY6pgHr%2FtFXtkdBIqNNoxnAr%2BaTWOIuOGBsltsspip1lq61eXLebSrByYKsmd2ZFVLVxJpOXTnG3G0RomryAktn3GKCT42vEfMIM4fofTLsSjFRdi%2BX48qy7c1YXQSD6g2gfpEgWC6g7xsACBEQcx%2BVDeIKH1MKdgEj5cMOSkvt89WC2o9yRLae9WBnaubBKs9FW7M2dEy%2B9rfEQ6h0jq1A3yD25Aes%2BGka&X-Amz-Signature=9dcf388238db1d995564ece4ec79c7858e0871539fdfcdc40dbac75c28d1dee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

