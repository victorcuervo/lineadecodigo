---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WSKFVZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEA%2FD24CcgPGG2h71dc1CxeXPvLSCnbHymM%2BgBOS249ZAiAgDsBNdpUEnIKijOf5ltoUWkEbBFLzVR0p6%2FJYS%2Fisqyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMRIDpLFS9YkIXICehKtwDC%2BVs%2B%2FxguCZ5FGewyd86uTEGREmnHSAej0hpTOMpNY4Rx%2FF7avgc0xRfXSJhBdKke5uK7ADwRy69TsJAOGGA2XZ8A12p8%2Fl7ks1eBHQzxHH1nYljTEqrnfEeiPTRT0J%2FTb6BCrn40L7qixVpCYrJzljY7XDzpqdahYveukKfX0ZrwTPWPsSKkYX3YMj17EW7%2FL0LekMyHZqJyRwXSaLMwA2Uf7Ss6QVVTg4Elib8XpTgfJftQove6pP88izK1KkH6vdcjZxqFsgDlfEaum5m6%2Fr%2FlPz1WsN8ZhmLWzQv46upD7icPfK5XNsQySgSqjt83IfJawiXlql6%2F578UjHwrBnr8icfYM88c1tMaUIbGD1Yx0LL7SQJL1wl81e%2ByYxeLpAIQEUNRe5RB9pNwZ3p0Z1dPg300qZKRBKwiF01fRTTIQKLXtlANo1ygSqHlZFkl6Mv1%2F4DW3yNBDpN8y7lFbKkmSqRhrrD%2B9c7B2co7dUIoqyIW7hjrUt1VomthBfE9Rudd0xGU7KPFCkHt8MYWjnYWf55cbCc85%2F2I63%2FckQMFvOnpW7YUWEjj3WZiXV2vg725yPfbk4jyO6KQymAELOM0NVbfwahs%2FfmoP3uvLLgMiu8gKr9sBa9A%2BEw7KbQyQY6pgHWIHg3zipb7o1VOwyYp8E70i%2FeZAFEQVBxgXpw2Q%2F%2BO79flksv0etbTFv2twS3w9m1%2BfuNr6xK7knvIajBYMX1kfkIplaE1MhSDBDPyqjgrUW6h4AzirsWU62gHiiAsuNIHtB65P3vHqt2KEwI5%2B9myDETmxZuM9Ho1AxkpgbSoY65N8S6%2FVNZVZSzg%2F23KBlHM26JVBQzOpmsHt9DxaWa3QhCfPYV&X-Amz-Signature=b45c4025e24c4977f66c69ff02dde07f3f2b131c452cc01ed1d6aadc82083d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4WSKFVZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEA%2FD24CcgPGG2h71dc1CxeXPvLSCnbHymM%2BgBOS249ZAiAgDsBNdpUEnIKijOf5ltoUWkEbBFLzVR0p6%2FJYS%2Fisqyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMRIDpLFS9YkIXICehKtwDC%2BVs%2B%2FxguCZ5FGewyd86uTEGREmnHSAej0hpTOMpNY4Rx%2FF7avgc0xRfXSJhBdKke5uK7ADwRy69TsJAOGGA2XZ8A12p8%2Fl7ks1eBHQzxHH1nYljTEqrnfEeiPTRT0J%2FTb6BCrn40L7qixVpCYrJzljY7XDzpqdahYveukKfX0ZrwTPWPsSKkYX3YMj17EW7%2FL0LekMyHZqJyRwXSaLMwA2Uf7Ss6QVVTg4Elib8XpTgfJftQove6pP88izK1KkH6vdcjZxqFsgDlfEaum5m6%2Fr%2FlPz1WsN8ZhmLWzQv46upD7icPfK5XNsQySgSqjt83IfJawiXlql6%2F578UjHwrBnr8icfYM88c1tMaUIbGD1Yx0LL7SQJL1wl81e%2ByYxeLpAIQEUNRe5RB9pNwZ3p0Z1dPg300qZKRBKwiF01fRTTIQKLXtlANo1ygSqHlZFkl6Mv1%2F4DW3yNBDpN8y7lFbKkmSqRhrrD%2B9c7B2co7dUIoqyIW7hjrUt1VomthBfE9Rudd0xGU7KPFCkHt8MYWjnYWf55cbCc85%2F2I63%2FckQMFvOnpW7YUWEjj3WZiXV2vg725yPfbk4jyO6KQymAELOM0NVbfwahs%2FfmoP3uvLLgMiu8gKr9sBa9A%2BEw7KbQyQY6pgHWIHg3zipb7o1VOwyYp8E70i%2FeZAFEQVBxgXpw2Q%2F%2BO79flksv0etbTFv2twS3w9m1%2BfuNr6xK7knvIajBYMX1kfkIplaE1MhSDBDPyqjgrUW6h4AzirsWU62gHiiAsuNIHtB65P3vHqt2KEwI5%2B9myDETmxZuM9Ho1AxkpgbSoY65N8S6%2FVNZVZSzg%2F23KBlHM26JVBQzOpmsHt9DxaWa3QhCfPYV&X-Amz-Signature=b9393d259c36c4c7b9e0c7911484ff46d695bb6ef366d74c938835b26ce81b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

