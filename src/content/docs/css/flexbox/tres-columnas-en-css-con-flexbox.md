---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JM2PBQ7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcKmR%2Ffg8xO%2FDyQ6ttrEGbb%2FncJhlZhz8kfKxqkHvhlAiBBpLW7f6foWgH8bIDijBgZiZGxDwPuP4dHJaC%2FrxkCFSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM9m3WgIHmWswtz3EzKtwDx9AQaHe3N3mkpS%2FGrPDgtFvPc%2BdURx9oK2P5A%2BADlnd8Wq17wpEp%2BIk5bjJ0y7gJhlfzfm%2BK%2FWnm5MdnUEVQkKRo%2FD8v%2F%2FUFVme%2FbXpKh7mMU8GBrbjoOFkiaJEr%2B7i2qrVZe9tGjIFIFfwDQB8sYsawCEcWUXg045MQ8l8fxu7tVyZnwSAKifNGz58R40Lu1ABc7ikzIg%2Fsu2cjkHzXwmyCwB3bNSwoBaU8xt8v0pzbeG0X6P%2FoRTlDpCbmc8FCKF0Bqt01eKLeh831WZ5erijSJK6Q%2F5lw4f9fYhJsmbBALHt6qFcYmdriD%2Bir3iQB3i7zQgEV8Ww27y1aWDlOOSsPOTYwpYlUoVr%2BLvtalodLCbhk25NaxknhWIDmWDRqSb6kEJaFHhJHtW3%2Bh%2FURtJF58Pkqdy89hMEHNVLlemiN8CmrNzGoyWtV53y%2BPxToE7spclM%2BxeN6cAUZPP4BZ8K46plzuGaV%2FxcAS6DRp9n9Al5ItaM7sG2Jdsu0P77VR9kzbQDZ7FUgAY%2B429fZ%2F5r6hrZ85UbKyL6V1nXvJxxyROdEYYBfX60SFSiJ%2BfxxiD3te32UlaoBWSc%2FBFMUkjy%2FKctJGLSHrJJsBiNKEnqYf9S%2Bi%2BH6e3cyR2kwgsbRyQY6pgFaG%2FHOClD9p9CJr5mVL52FFZ%2BnMtGVhPCIqTSI5SonXvHfnVMtuvlUJFeGPnZRoe5Mo2icRzno9v3En6ayVaXJBz9ARmHfm3XJxxrHFDPo2cCzAofFwUfZDuc1ragdrAEaF%2FAShJHDFwXpl83EKrxR%2ByEOPgce96z%2FtuizICTlYLF%2FZIUDo4vd85VlhGnfqVSlVA0y9dHuN5Ayr7NaXkbz3cOdgPG7&X-Amz-Signature=c8faac49693c15b1d2eaf43b1304c19f9799a826fd97e3d9e4b6434cb9ea6306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JM2PBQ7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcKmR%2Ffg8xO%2FDyQ6ttrEGbb%2FncJhlZhz8kfKxqkHvhlAiBBpLW7f6foWgH8bIDijBgZiZGxDwPuP4dHJaC%2FrxkCFSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM9m3WgIHmWswtz3EzKtwDx9AQaHe3N3mkpS%2FGrPDgtFvPc%2BdURx9oK2P5A%2BADlnd8Wq17wpEp%2BIk5bjJ0y7gJhlfzfm%2BK%2FWnm5MdnUEVQkKRo%2FD8v%2F%2FUFVme%2FbXpKh7mMU8GBrbjoOFkiaJEr%2B7i2qrVZe9tGjIFIFfwDQB8sYsawCEcWUXg045MQ8l8fxu7tVyZnwSAKifNGz58R40Lu1ABc7ikzIg%2Fsu2cjkHzXwmyCwB3bNSwoBaU8xt8v0pzbeG0X6P%2FoRTlDpCbmc8FCKF0Bqt01eKLeh831WZ5erijSJK6Q%2F5lw4f9fYhJsmbBALHt6qFcYmdriD%2Bir3iQB3i7zQgEV8Ww27y1aWDlOOSsPOTYwpYlUoVr%2BLvtalodLCbhk25NaxknhWIDmWDRqSb6kEJaFHhJHtW3%2Bh%2FURtJF58Pkqdy89hMEHNVLlemiN8CmrNzGoyWtV53y%2BPxToE7spclM%2BxeN6cAUZPP4BZ8K46plzuGaV%2FxcAS6DRp9n9Al5ItaM7sG2Jdsu0P77VR9kzbQDZ7FUgAY%2B429fZ%2F5r6hrZ85UbKyL6V1nXvJxxyROdEYYBfX60SFSiJ%2BfxxiD3te32UlaoBWSc%2FBFMUkjy%2FKctJGLSHrJJsBiNKEnqYf9S%2Bi%2BH6e3cyR2kwgsbRyQY6pgFaG%2FHOClD9p9CJr5mVL52FFZ%2BnMtGVhPCIqTSI5SonXvHfnVMtuvlUJFeGPnZRoe5Mo2icRzno9v3En6ayVaXJBz9ARmHfm3XJxxrHFDPo2cCzAofFwUfZDuc1ragdrAEaF%2FAShJHDFwXpl83EKrxR%2ByEOPgce96z%2FtuizICTlYLF%2FZIUDo4vd85VlhGnfqVSlVA0y9dHuN5Ayr7NaXkbz3cOdgPG7&X-Amz-Signature=09717489fdb1cc0d087bd6b672e5e5c853a1366a866b5138e85b9d6344bc1f6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

