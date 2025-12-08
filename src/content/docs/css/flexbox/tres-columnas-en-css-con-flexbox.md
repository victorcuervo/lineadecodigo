---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAGBAKT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDjtTzjrGxB06u9rdsAkwK2OCzB54LYeDKmPIBhVxXdAiEAp80%2BiR5yhbj6TSTS7N9jNvgbjeUSGNo11J3Yo22FV0UqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeUeEre1d8XeL1HtSrcA03eCcnE9KZvr3G3ywDZIVlTsFmamRQXz4DvlKrQARPrH%2FvuKoG%2Bemn5yPAFGIcyklYC6bM42le1HbypxnZGGAH1TMVSvMUTcSXWkHDXQInUNMDBGiE78EtAkbjUX7yiGwBB%2B6fo2ODquZNdEeQtJccHN4a3uOLMlMbj7hkvuqx7NjvfTqTf3%2FKVlMdtqZWa2sCLta1AyjMHaanMfTpVEB778Z7bFhKLsfR4K6w%2Fsd9rchMwTuReNWX1vgTSM0EOqR5c77LF3VVGRHtvoGCEgyt4J5oQIJnl3%2BXpoe3zNK25%2BpF88ccMmKzeZVapcrZKEP0dh3pgpUzHCwAYqfPuWA1NbL2m3ytwrbB7JDSYJvwAoO1kH5uLsxt2L4JmMED%2FXNwfVLJjW5nFMCwoVqINiPqKGluHPXeoHKPXT2RpQyh%2BTr%2BXol%2B2AtHwcq6utubC4UCufR38tO99povPe5k60fIuXOEmxpeCmZuOHHif%2ByJtDoM6o%2BRWJybpwQSXJRX%2F6Fg%2BBHZvMhomvj9KEacOywjDJlzCtpbeSsJ5OBudcJOFImzD8Ojyt0PPqXSl14evJTQ3kyzHVyCLuDKEdApH42HPRRcjjC4C482iLtHLF9B1x2RCU42W0B8Pqb8rMLrk28kGOqUByJtJGjdqeXOwUl%2Bbg1%2BsBOoBVkOfcGkncVOvHWaQsyfKZiZLmqGwCA%2F%2BvQceloGdms3uRCGyOvV2dPoEFXxGg%2FtreaZYl%2BAuXQisbBenRk3NUN9ITLayv3RNcIXXfLSPFlRDYimqmd5KoWFh2Exn3tzqgh6AMDjbDuqp%2Bx3D8NMkHlILAyU68M34z5LnL7vEke%2BZ54gN5e0PupEsCrkPRkTXIMPX&X-Amz-Signature=56b75070bb9a9677cdd84079555cded2191cc9562f92c212f989fc82bcd2aa08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUAGBAKT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBDjtTzjrGxB06u9rdsAkwK2OCzB54LYeDKmPIBhVxXdAiEAp80%2BiR5yhbj6TSTS7N9jNvgbjeUSGNo11J3Yo22FV0UqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHeUeEre1d8XeL1HtSrcA03eCcnE9KZvr3G3ywDZIVlTsFmamRQXz4DvlKrQARPrH%2FvuKoG%2Bemn5yPAFGIcyklYC6bM42le1HbypxnZGGAH1TMVSvMUTcSXWkHDXQInUNMDBGiE78EtAkbjUX7yiGwBB%2B6fo2ODquZNdEeQtJccHN4a3uOLMlMbj7hkvuqx7NjvfTqTf3%2FKVlMdtqZWa2sCLta1AyjMHaanMfTpVEB778Z7bFhKLsfR4K6w%2Fsd9rchMwTuReNWX1vgTSM0EOqR5c77LF3VVGRHtvoGCEgyt4J5oQIJnl3%2BXpoe3zNK25%2BpF88ccMmKzeZVapcrZKEP0dh3pgpUzHCwAYqfPuWA1NbL2m3ytwrbB7JDSYJvwAoO1kH5uLsxt2L4JmMED%2FXNwfVLJjW5nFMCwoVqINiPqKGluHPXeoHKPXT2RpQyh%2BTr%2BXol%2B2AtHwcq6utubC4UCufR38tO99povPe5k60fIuXOEmxpeCmZuOHHif%2ByJtDoM6o%2BRWJybpwQSXJRX%2F6Fg%2BBHZvMhomvj9KEacOywjDJlzCtpbeSsJ5OBudcJOFImzD8Ojyt0PPqXSl14evJTQ3kyzHVyCLuDKEdApH42HPRRcjjC4C482iLtHLF9B1x2RCU42W0B8Pqb8rMLrk28kGOqUByJtJGjdqeXOwUl%2Bbg1%2BsBOoBVkOfcGkncVOvHWaQsyfKZiZLmqGwCA%2F%2BvQceloGdms3uRCGyOvV2dPoEFXxGg%2FtreaZYl%2BAuXQisbBenRk3NUN9ITLayv3RNcIXXfLSPFlRDYimqmd5KoWFh2Exn3tzqgh6AMDjbDuqp%2Bx3D8NMkHlILAyU68M34z5LnL7vEke%2BZ54gN5e0PupEsCrkPRkTXIMPX&X-Amz-Signature=d2ce5beb0985675e220c38783247ba78fba4aede7f8343df6149c1e1d439d132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

