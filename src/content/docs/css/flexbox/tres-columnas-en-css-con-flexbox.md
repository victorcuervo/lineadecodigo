---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCAY3GN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSdvV%2F0393PUEss57s5sfVlCvGXZvXuapCFyWjlsNYhQIgTEezUF7YG7GvR7yXo7gxkk3XznW%2FcIszl404Afx6ez4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCHN8UYeLvWE7Wn%2FHSrcAxxk9ESeSM7b0teQdlm8zEkrJk1wV9ae5%2FiZ4YEdOhjZ5NCCQ9qP2uvvcJeMnsWGmOv8NtyKK9iaqo7RIbP9IwCeQFe3ADhycq%2F1DjNETwbUq%2FMtM71MFh2GuP21ySxQbl4NqUlE91bpMJJ%2F8owxn1Q9sVz9UHSKct90aR3Og8ROwC2dGPyjNWebg%2Bi8fp9AS%2F8m3GZyhNns6pNJxdWa9uoI1qlb82LbuyMvoBduxDuPfpIFNU9GuaxBfUoaZ5ul2UerhDHVF1vYR7zGHUb9tla8fP6F%2Bswj9VN%2Bz7DS%2FsNsEPIrk3QcOmeWGqhktR9%2FSlTLPmFDZ8%2BZJsJee1%2BjEIWwKuP4WCxbeH7iZZLgbwuIiWiWydH0Pi25dmnmCiH49wbBpBpp%2FtNL8hKg3hfzldfqUnlfBO5X89tV97trf7qyul78agN7H07t4741BrP9b6GH135pKJX1OeswRIYwU7%2FZKrx1HGTwXat9cSwvBrcoYP9PWoKN1YulK7icG8V9cpX9L3d%2B120Ng08xWjRvsGvrotUz7ymyT0fYN8gLL%2F920ikMmMdJ%2BoOvWh2KmLH52gvjDx42SAshjMWPNAbf2UEuFWq15VdbWR5ZW0fgqnQpiVvSYaxusoQw4jnRMJPKyskGOqUBwA4w%2F7m1TTH6DDOgaS%2Fz9CjYUyVrPaDPfB6%2FV4CjL2eUuC7Ss2xFFS23nPNnfcfdb20ogPXplMCUfG5NIX3UbEbKF471hKszC2C2kv%2BM1OEP4hhqNQXiQrD2%2BGcPhRl9IDEgOFZtzntHmofM2NYSsaf6T4HeIg4CBNKIE9IYrPKoZQEPtZVbRzp2jvGC4WHfDqCHkyms4OGv1Nf0WRJd%2F66y2Y2P&X-Amz-Signature=beb8c9fd8c4c4d6b8a52ea005d010544ed55ade8a9c7049fb9b2cc55c59d5cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPCAY3GN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSdvV%2F0393PUEss57s5sfVlCvGXZvXuapCFyWjlsNYhQIgTEezUF7YG7GvR7yXo7gxkk3XznW%2FcIszl404Afx6ez4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDCHN8UYeLvWE7Wn%2FHSrcAxxk9ESeSM7b0teQdlm8zEkrJk1wV9ae5%2FiZ4YEdOhjZ5NCCQ9qP2uvvcJeMnsWGmOv8NtyKK9iaqo7RIbP9IwCeQFe3ADhycq%2F1DjNETwbUq%2FMtM71MFh2GuP21ySxQbl4NqUlE91bpMJJ%2F8owxn1Q9sVz9UHSKct90aR3Og8ROwC2dGPyjNWebg%2Bi8fp9AS%2F8m3GZyhNns6pNJxdWa9uoI1qlb82LbuyMvoBduxDuPfpIFNU9GuaxBfUoaZ5ul2UerhDHVF1vYR7zGHUb9tla8fP6F%2Bswj9VN%2Bz7DS%2FsNsEPIrk3QcOmeWGqhktR9%2FSlTLPmFDZ8%2BZJsJee1%2BjEIWwKuP4WCxbeH7iZZLgbwuIiWiWydH0Pi25dmnmCiH49wbBpBpp%2FtNL8hKg3hfzldfqUnlfBO5X89tV97trf7qyul78agN7H07t4741BrP9b6GH135pKJX1OeswRIYwU7%2FZKrx1HGTwXat9cSwvBrcoYP9PWoKN1YulK7icG8V9cpX9L3d%2B120Ng08xWjRvsGvrotUz7ymyT0fYN8gLL%2F920ikMmMdJ%2BoOvWh2KmLH52gvjDx42SAshjMWPNAbf2UEuFWq15VdbWR5ZW0fgqnQpiVvSYaxusoQw4jnRMJPKyskGOqUBwA4w%2F7m1TTH6DDOgaS%2Fz9CjYUyVrPaDPfB6%2FV4CjL2eUuC7Ss2xFFS23nPNnfcfdb20ogPXplMCUfG5NIX3UbEbKF471hKszC2C2kv%2BM1OEP4hhqNQXiQrD2%2BGcPhRl9IDEgOFZtzntHmofM2NYSsaf6T4HeIg4CBNKIE9IYrPKoZQEPtZVbRzp2jvGC4WHfDqCHkyms4OGv1Nf0WRJd%2F66y2Y2P&X-Amz-Signature=5a269bd847ab0d0b06e5463dd1603838035e74fd6a2a5eb54e5c5d8330600cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

