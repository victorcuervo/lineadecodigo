---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2P2IMK2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAwqgS%2FMInyEsW6UfTZuoPFIo2WjeC4LldcF%2F4jTUT9AiBSKJ9dEYdy2taXVmK3cRXlLI7ITQvxFS0%2Fryh4fWCEHyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMsku83092qFgflDu8KtwDywruGDUl0eD8Xln9wH0%2FV4DOVx2ynuAIV5rheIfojI4udwIK4vX1ZC06c3xHYiny1vJLyfZ0kwvyPMAarvidDliigsuXAWTdIFsNlj1mViUuB2S8ol%2Fuo4AONrA%2B8%2ByXTsVtqMhMuGgwB5b%2Ff99SaFO2RHIdz7LHWTibZIOSwWiLlSElGUUle%2FZE82%2BQGtPyS4n1oWVMlzvs4Q%2FUvkA0WTG%2Bz1D9T%2B8GkNlQy9CdXRFCiZTS%2BZaAl8DWdYMADFQmuEbK6MhFqM38sIwiNZVu93mUIJhAgF6Po4X6K4PahDjfieePOes48q%2BKvLk9Ph1QB5A6xRVIsMHLHgn%2BAMkwmnbpCAxVqWFIQX%2BEBnA9KrkdBINQZFhyKrO6nKmktOKmQiQhsIAp2vFo1vyn6XBIwvlY3uEHiTOz4rXFQyPcpBaDaWaT4JuG5EnTBlkjSmdugai4H3humI4ELtYTmdTfyWMPfOPHVnIJtS7Hj6arRxg2vcsiNEDmukRIbfLOpcwp1OBbDjRJNV9%2F0O6Td2PKfC5ZPcBGevBbklcWP95o8RjBrtNjkPu9EUSJ4%2FVmDom%2BkeNx85QoOZHieJiahiDvXWhkhc8DXUIbNB%2FmXI1AycKJre6I86P4fO49CJow5cXNyQY6pgEowTneqHyWxMJOeW1ON7QnL26%2BafzbN%2Bvj2SN2S9NVM8HmcEDm6oxPSjXRNKBHkrAkVS6fwR1NWQkKktxHLGurekoZ1TFOVayqhj9iUYgrcLhbt%2FxWbAhUKT%2FWhz9CwQn9Gz3bP2DM2qnzJ%2Fn8TarrfMOij3OAtQd0JvJQxi7JEuh0qr5Bwo6aOhxFrGb2CSWH87WGZKI%2FTnklT3afvSef5kIBoUpm&X-Amz-Signature=7f1c9aa2461999f0c8f9350cb2f00ff193a1705ec7001e44c374b250115156a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2P2IMK2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T232659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAwqgS%2FMInyEsW6UfTZuoPFIo2WjeC4LldcF%2F4jTUT9AiBSKJ9dEYdy2taXVmK3cRXlLI7ITQvxFS0%2Fryh4fWCEHyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMsku83092qFgflDu8KtwDywruGDUl0eD8Xln9wH0%2FV4DOVx2ynuAIV5rheIfojI4udwIK4vX1ZC06c3xHYiny1vJLyfZ0kwvyPMAarvidDliigsuXAWTdIFsNlj1mViUuB2S8ol%2Fuo4AONrA%2B8%2ByXTsVtqMhMuGgwB5b%2Ff99SaFO2RHIdz7LHWTibZIOSwWiLlSElGUUle%2FZE82%2BQGtPyS4n1oWVMlzvs4Q%2FUvkA0WTG%2Bz1D9T%2B8GkNlQy9CdXRFCiZTS%2BZaAl8DWdYMADFQmuEbK6MhFqM38sIwiNZVu93mUIJhAgF6Po4X6K4PahDjfieePOes48q%2BKvLk9Ph1QB5A6xRVIsMHLHgn%2BAMkwmnbpCAxVqWFIQX%2BEBnA9KrkdBINQZFhyKrO6nKmktOKmQiQhsIAp2vFo1vyn6XBIwvlY3uEHiTOz4rXFQyPcpBaDaWaT4JuG5EnTBlkjSmdugai4H3humI4ELtYTmdTfyWMPfOPHVnIJtS7Hj6arRxg2vcsiNEDmukRIbfLOpcwp1OBbDjRJNV9%2F0O6Td2PKfC5ZPcBGevBbklcWP95o8RjBrtNjkPu9EUSJ4%2FVmDom%2BkeNx85QoOZHieJiahiDvXWhkhc8DXUIbNB%2FmXI1AycKJre6I86P4fO49CJow5cXNyQY6pgEowTneqHyWxMJOeW1ON7QnL26%2BafzbN%2Bvj2SN2S9NVM8HmcEDm6oxPSjXRNKBHkrAkVS6fwR1NWQkKktxHLGurekoZ1TFOVayqhj9iUYgrcLhbt%2FxWbAhUKT%2FWhz9CwQn9Gz3bP2DM2qnzJ%2Fn8TarrfMOij3OAtQd0JvJQxi7JEuh0qr5Bwo6aOhxFrGb2CSWH87WGZKI%2FTnklT3afvSef5kIBoUpm&X-Amz-Signature=91453010bdbad9a72ffcd048440b9a39b423a308b0b1cc79179953d324f365b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

