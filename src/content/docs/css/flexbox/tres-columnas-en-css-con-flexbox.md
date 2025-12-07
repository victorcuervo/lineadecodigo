---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632UUEV7T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhPHIGaJM8udcduQbJb7yS2cCNIvEBMs6Vo6Jtr%2Bjj1gIgQjc%2Fo%2FjF%2FM8P2cn46Dzh0uf33StZs48x34QiqoDwQpkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6kKw%2FyeFJdnC3tICrcA2XdzroFQEFRS5sdDbiQAfEi5Yj4YZvtCEOmYyfjr6gnt%2F1EpdosKs4EZVVNuPNM%2Fo4PxZ4habK1wm9VFfZ%2Bago1kuKwsWXNFHgyoZ7xUqENfrnd2QM2u043f6I2rzgsLXyabqYv7MZMYT%2BtDCldNplcsdRcmd8Pn4JbJsQ3xfT5FA4KX6r4QkbvrhpBhHUW5bIOBvjIKru%2FFbg27R9hl89YHmMrLuCAZbCmP5PbUxkPjDlyjnCU8cr%2Fl86z9B8zDdlnSzDfBLu6YxoeDYt2F42JBwhWcLqwv%2FpI9EHce3cUe1xXwHWD6DTH8G0qwBdj8wU8faUn%2BSiBRjs6V32yDf4SHowCXmCkJJGHa7J%2FJ4WfHswtfTKfKDfRsFf2bsXxx0Hd61QiBaxcmGbczcYmFsv6r5LhcHBxaiELTT0OqfbGjscj71Oxac5g91lltMZqsInHkn6kluBIu4MX1MZbGuKz5mhJeQwxnemMnkE%2Bnr6U%2BN%2F66gnN90htTxYG3G1PConyiUolhIyyeRCkkswKUgJyfdieORK1kkM6%2Fg9yd%2FgBLENibhEj0eWkbH0bvEs%2F%2Ftl3WZCsNdsMf8fxxsbSkMGcXYZv%2FHpqxgA2%2BDVZWBqeOaZ94wx6Li4j64y8MOrH18kGOqUB7YLHUP7O1edev7OTaqA1imWh0EQcSWY1eik08mIigbwivZaeuYXtW0XtCreXBWBUOiPPNQ3HcHpDJRWOgoXboWE6O58WXcXAzaSeIfJvkltewbWBDPsOmbwEjm9Qcw8UW%2BXHdcrQdWsdS4jrcB%2FMSDl9wVCYOT48wYi6vKNjMi3H%2B%2FOZ01vv6vwgIker7dvysuWhzTDqMV8Y7%2Fk1m9RJ214AN0Ax&X-Amz-Signature=68cc4720352496101846376725dd6d7b7ae0560c358c47b716d08270b3072555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632UUEV7T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhPHIGaJM8udcduQbJb7yS2cCNIvEBMs6Vo6Jtr%2Bjj1gIgQjc%2Fo%2FjF%2FM8P2cn46Dzh0uf33StZs48x34QiqoDwQpkqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6kKw%2FyeFJdnC3tICrcA2XdzroFQEFRS5sdDbiQAfEi5Yj4YZvtCEOmYyfjr6gnt%2F1EpdosKs4EZVVNuPNM%2Fo4PxZ4habK1wm9VFfZ%2Bago1kuKwsWXNFHgyoZ7xUqENfrnd2QM2u043f6I2rzgsLXyabqYv7MZMYT%2BtDCldNplcsdRcmd8Pn4JbJsQ3xfT5FA4KX6r4QkbvrhpBhHUW5bIOBvjIKru%2FFbg27R9hl89YHmMrLuCAZbCmP5PbUxkPjDlyjnCU8cr%2Fl86z9B8zDdlnSzDfBLu6YxoeDYt2F42JBwhWcLqwv%2FpI9EHce3cUe1xXwHWD6DTH8G0qwBdj8wU8faUn%2BSiBRjs6V32yDf4SHowCXmCkJJGHa7J%2FJ4WfHswtfTKfKDfRsFf2bsXxx0Hd61QiBaxcmGbczcYmFsv6r5LhcHBxaiELTT0OqfbGjscj71Oxac5g91lltMZqsInHkn6kluBIu4MX1MZbGuKz5mhJeQwxnemMnkE%2Bnr6U%2BN%2F66gnN90htTxYG3G1PConyiUolhIyyeRCkkswKUgJyfdieORK1kkM6%2Fg9yd%2FgBLENibhEj0eWkbH0bvEs%2F%2Ftl3WZCsNdsMf8fxxsbSkMGcXYZv%2FHpqxgA2%2BDVZWBqeOaZ94wx6Li4j64y8MOrH18kGOqUB7YLHUP7O1edev7OTaqA1imWh0EQcSWY1eik08mIigbwivZaeuYXtW0XtCreXBWBUOiPPNQ3HcHpDJRWOgoXboWE6O58WXcXAzaSeIfJvkltewbWBDPsOmbwEjm9Qcw8UW%2BXHdcrQdWsdS4jrcB%2FMSDl9wVCYOT48wYi6vKNjMi3H%2B%2FOZ01vv6vwgIker7dvysuWhzTDqMV8Y7%2Fk1m9RJ214AN0Ax&X-Amz-Signature=25cccf343b0799c5d3cfc2620e3098f195fcf52f69ceb7c94589f879a9899d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

