---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653PURJTC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEO2vm1NVuw0mViCYMjdmTyCzOdjzaCrJfruWFF9K4mIAiEAsHT3mcT6VUM5%2BKitSmWxFp87KR5u0PthU0pk6aGqNlMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLC6mW8G4DsYv69lOyrcAws2RsA4Cd4we8bXND1cmjTQgIRNNCsrcw6KlJ%2BiU46zUPIgZWHuk6g9iekI4LZv2pY%2FpinXYfocTDzqpklFXSTagoNpxxa9sp3xPpmGHxuQbAhksCzt0ejzB9elt973uzQlmI2qhGfAFU673nB%2FEb6ZEnOG8ClHYlZ2Ei0%2B6X2O1tX%2FE%2BQXnxCJJ49CRNi%2Bh5INNyQKyPK2sd7Aq7SdR4rd3%2FV6gOjfwyjs3nVnhu2Ib7a3uJDNQK8Cn0kFuvxVlHB7j35WRuigjndRUMkiCiPlKBgeBOuBQOpXu%2BGko2pbx4Laj6OmRIRdO2han9u0wBuG8Vtv09MCKovBl2KdV8rxIuBtscSACIhl2eNMHRw6JQraG3FulDrY9NGhzSJbNg9FJKu502aku6t%2BWya7NekNXxB0ECJNDwBsXtf4jiDDGUfWGZmhWmvAZknFxLNB3BI5Pdswo5EVntwxzrBxfJz6Spl1vuI3vkbVcbtFpqR0bQps4bQF%2Bgl6ymCASXsBc6Wp54%2FaE3ZWUR70e3EuDUEfd3EnOfYUEfHeF3wwb6n8VUF8f5Go8Cq62PzMME4uLGhnP0hSL9OWjSJNByz%2FAm%2BlHsRJKl2Byaaubyo%2FblEdhI0%2FDh54tnXvDSLAMNaMyMkGOqUBrQmav3Rb%2Ft9wAiJiSncHnwz9kvIJLAyxVbfIfa21%2BQ3IOCfCnJHBy9%2FdsCYKj0Y3UwdpQZQ2x7Sr%2F66qna7KHC7xEqvq%2FUZOoL8i66JKNM9CtiufWCFJgxOsppztXLl1uUGYNvzLsdfGTWMgFcqEUw%2BgLDorc4OkhUFTuJbH5rk5RNK3hNs9YRGHFzVjUYEjZhudDFjTTtsax0bzqlTsQ4DZMvrl&X-Amz-Signature=4848a7206f828572bd268e60f779e0db1a3e02399841d10ccb0f80e62638a3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653PURJTC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEO2vm1NVuw0mViCYMjdmTyCzOdjzaCrJfruWFF9K4mIAiEAsHT3mcT6VUM5%2BKitSmWxFp87KR5u0PthU0pk6aGqNlMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLC6mW8G4DsYv69lOyrcAws2RsA4Cd4we8bXND1cmjTQgIRNNCsrcw6KlJ%2BiU46zUPIgZWHuk6g9iekI4LZv2pY%2FpinXYfocTDzqpklFXSTagoNpxxa9sp3xPpmGHxuQbAhksCzt0ejzB9elt973uzQlmI2qhGfAFU673nB%2FEb6ZEnOG8ClHYlZ2Ei0%2B6X2O1tX%2FE%2BQXnxCJJ49CRNi%2Bh5INNyQKyPK2sd7Aq7SdR4rd3%2FV6gOjfwyjs3nVnhu2Ib7a3uJDNQK8Cn0kFuvxVlHB7j35WRuigjndRUMkiCiPlKBgeBOuBQOpXu%2BGko2pbx4Laj6OmRIRdO2han9u0wBuG8Vtv09MCKovBl2KdV8rxIuBtscSACIhl2eNMHRw6JQraG3FulDrY9NGhzSJbNg9FJKu502aku6t%2BWya7NekNXxB0ECJNDwBsXtf4jiDDGUfWGZmhWmvAZknFxLNB3BI5Pdswo5EVntwxzrBxfJz6Spl1vuI3vkbVcbtFpqR0bQps4bQF%2Bgl6ymCASXsBc6Wp54%2FaE3ZWUR70e3EuDUEfd3EnOfYUEfHeF3wwb6n8VUF8f5Go8Cq62PzMME4uLGhnP0hSL9OWjSJNByz%2FAm%2BlHsRJKl2Byaaubyo%2FblEdhI0%2FDh54tnXvDSLAMNaMyMkGOqUBrQmav3Rb%2Ft9wAiJiSncHnwz9kvIJLAyxVbfIfa21%2BQ3IOCfCnJHBy9%2FdsCYKj0Y3UwdpQZQ2x7Sr%2F66qna7KHC7xEqvq%2FUZOoL8i66JKNM9CtiufWCFJgxOsppztXLl1uUGYNvzLsdfGTWMgFcqEUw%2BgLDorc4OkhUFTuJbH5rk5RNK3hNs9YRGHFzVjUYEjZhudDFjTTtsax0bzqlTsQ4DZMvrl&X-Amz-Signature=90dfeb3fd3127b30af7a9c11e3e03b3058b44a4aae727bd31c84eef0b10154f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

