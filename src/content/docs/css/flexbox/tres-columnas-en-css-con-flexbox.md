---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QQ4HN7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICagh0rP6iy63ykZm8SvX5%2BDP32zsL%2BNw95jMGYDGRGIAiEA6E6myBNfPYiKatnnrargmqcBMzI170UQwsyhT5Kdod0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFTLRvMRQwipmlE3sCrcA8iOGuHRsgyAC0TPCeyzI0jFi0xgtpFlbRehN%2FzgyiIv3XN3YdmXa0AA9G%2F0HrRYPc4vklLOulSuM5aq3%2B%2Bgh%2Bh6MMDYRJL9Hz%2FFvsWoV%2B6It6qx8bm0fTJGtvlpRwLemIWbdB%2Fuamzcf2dNKLBqr3FN2bZBL3T3OpQZ8ySlSSx6WWoM1wsrBVsXAc8CQtPfCGjMEYtiUaFyi5pAe%2B0hJIK7URaCIyf0sUVPaQ69%2FR9tPb0xZWYh5Z8ly1Szs1JJnU8%2FQtYTcTzuq0yWnXlhlgBvIihpLKSqo%2FEBa6s2p%2FHpChKoif%2BR4lvJDbANppfbjHnBsAHT5krWXygIrlYx7gaZUsC2vY1XyyQRFsN9QayY9DAFS%2BWrvm4qUJSK2YXhfY%2FbIQrX3p7WRC%2BACMhWz8TeIZdxjOQNGbDG2%2FfpQHNdWYPT%2BjAou%2F6GNCksCM53nUZKVu0Mqwczxjq9b%2FjgnioX5fVpYYg3o9g5tSw7OGj2JYhT4uVZlADgbpSnso2QL3NLC%2B6LXGyCOwZXMWx23AQ%2FdY6BzuUUZ%2BwYl%2FX2lsBEaevNViernmM9a466FiBEA3RZN3Hv5IC8UTSEgKlc78uVodFCOGfPw2P4wOa%2BdV343B%2FS%2BS5BUASVFWqAMPnA0ckGOqUBC1Ts3di0%2Bzp4QD4Rdzo43cOivNf3%2FiMu8xrBwqvBKJj%2ByN%2Bs53q8BYB%2B7SxUr0jQhUF43mbmIsV%2BGh66ryiicOAIWm7lOmYt6K6dKbBddBNdyf0E3xz5F5ekki39fLcT9oWTUtR1hXYg6Zunp18LF7viL1gYWyk0x42nlfeU4XacAlfF%2B5a%2FYspUaYL38B%2BFVfLJv503VSfbmKsqOFgf19qJRdcT&X-Amz-Signature=5eee2db6ff312b7d748fc074e20de1ea473510b158eb496a1ca98e344c4bbd8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QQ4HN7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICagh0rP6iy63ykZm8SvX5%2BDP32zsL%2BNw95jMGYDGRGIAiEA6E6myBNfPYiKatnnrargmqcBMzI170UQwsyhT5Kdod0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDFTLRvMRQwipmlE3sCrcA8iOGuHRsgyAC0TPCeyzI0jFi0xgtpFlbRehN%2FzgyiIv3XN3YdmXa0AA9G%2F0HrRYPc4vklLOulSuM5aq3%2B%2Bgh%2Bh6MMDYRJL9Hz%2FFvsWoV%2B6It6qx8bm0fTJGtvlpRwLemIWbdB%2Fuamzcf2dNKLBqr3FN2bZBL3T3OpQZ8ySlSSx6WWoM1wsrBVsXAc8CQtPfCGjMEYtiUaFyi5pAe%2B0hJIK7URaCIyf0sUVPaQ69%2FR9tPb0xZWYh5Z8ly1Szs1JJnU8%2FQtYTcTzuq0yWnXlhlgBvIihpLKSqo%2FEBa6s2p%2FHpChKoif%2BR4lvJDbANppfbjHnBsAHT5krWXygIrlYx7gaZUsC2vY1XyyQRFsN9QayY9DAFS%2BWrvm4qUJSK2YXhfY%2FbIQrX3p7WRC%2BACMhWz8TeIZdxjOQNGbDG2%2FfpQHNdWYPT%2BjAou%2F6GNCksCM53nUZKVu0Mqwczxjq9b%2FjgnioX5fVpYYg3o9g5tSw7OGj2JYhT4uVZlADgbpSnso2QL3NLC%2B6LXGyCOwZXMWx23AQ%2FdY6BzuUUZ%2BwYl%2FX2lsBEaevNViernmM9a466FiBEA3RZN3Hv5IC8UTSEgKlc78uVodFCOGfPw2P4wOa%2BdV343B%2FS%2BS5BUASVFWqAMPnA0ckGOqUBC1Ts3di0%2Bzp4QD4Rdzo43cOivNf3%2FiMu8xrBwqvBKJj%2ByN%2Bs53q8BYB%2B7SxUr0jQhUF43mbmIsV%2BGh66ryiicOAIWm7lOmYt6K6dKbBddBNdyf0E3xz5F5ekki39fLcT9oWTUtR1hXYg6Zunp18LF7viL1gYWyk0x42nlfeU4XacAlfF%2B5a%2FYspUaYL38B%2BFVfLJv503VSfbmKsqOFgf19qJRdcT&X-Amz-Signature=17d00d4a72bab6d186b0b6a6d229c009a6ea86c6c66cf357931e3a1ae2a00dba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

