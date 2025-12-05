---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UU7HDC7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMvkFPktZL%2BHgOu8W1epJYivdXjtjI9Nq61%2FyfEIsJaAiAp3zG%2FxcHUT3gL%2FtEtnbJlV8s7JtK640E2Xb9Y2UKS3ir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMvnShbW2lKxTPfBT0KtwDnS0aa5EvFh7v603cxlTPl%2BdVBLvrxQ8T%2FGrP3eyvK8EF0yerA6vplKgCjC2Cswp28eC1StAda%2BGLZTf2ggGFVdqZgw558qrGI55OJL%2F6rDW5fyjAAtKwO%2FsQto3LNg214VWuSUoIHQeKy6AXMQXUee11JpkxTWfylL0lRvgo3BmAc2p0zBdPN3jAFuwGiaSjdYRm9B1YN0IoKj9qRs0E2HnaKNVCyh%2F0z5FNOukykL3e3gOGfjMeutIbnZLBRRAp1sZH9tWQS2jNLDw2rHV8x55EiA7e0q7aseXY%2B85zA9Y48eSQTgR5zJUnv0A%2BR4yg1bmCf3C1zzs5DBnWLlKfWo%2BugIkpdA8yPXoiZTTNNBJl9beqbQKyLhrKHFpeXy903JzeIOTzBC3WLDruK4oEENzADE9otSZrxaYgAwnNFX1LLM2VtmcpofF73J9QBhRRhRQRD8GRCPE5zo6uN4GGP53c8JNNsHDSkSsaQzPoOI4wIfW8kKXFtIO3jRlX7fx2XtHeRmX1SUPAY0cE7xEe3Najol8DT%2BO7clKrbRbJTwodtaGlw7FqVNlTDeztjfjHn96Iuy80Dzs0dt6XDocV3iuRX6cbuU06RXsYjwchP5URLT%2FVddNtAIoyd%2Fcw2qrJyQY6pgFTxWg9KlMu8L%2Bm7th%2FqIEc0AK0gX4NCmwMnUWHNVrlVNHBGuhFvQqf8O7OzWkwvGy2EltnwdKJqVZvogt%2FlAxbfRE4iAOUHS5us866TCRkJR4aXtVCtgtTTb9sNVVAOXjzndr%2FGWL1SjP1Rc7NZKJENrj8z6fGbIqcUTzZ3bYpgOI67yaRxx%2Fw4Mm9hnUUaXduPGvJe87ExNQPBRz5a4A8B1HGTy4a&X-Amz-Signature=53562be352ce6d868895b2b5a459f0dfaca7f97776feb8ca0ac184eaa3620bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UU7HDC7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMvkFPktZL%2BHgOu8W1epJYivdXjtjI9Nq61%2FyfEIsJaAiAp3zG%2FxcHUT3gL%2FtEtnbJlV8s7JtK640E2Xb9Y2UKS3ir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMvnShbW2lKxTPfBT0KtwDnS0aa5EvFh7v603cxlTPl%2BdVBLvrxQ8T%2FGrP3eyvK8EF0yerA6vplKgCjC2Cswp28eC1StAda%2BGLZTf2ggGFVdqZgw558qrGI55OJL%2F6rDW5fyjAAtKwO%2FsQto3LNg214VWuSUoIHQeKy6AXMQXUee11JpkxTWfylL0lRvgo3BmAc2p0zBdPN3jAFuwGiaSjdYRm9B1YN0IoKj9qRs0E2HnaKNVCyh%2F0z5FNOukykL3e3gOGfjMeutIbnZLBRRAp1sZH9tWQS2jNLDw2rHV8x55EiA7e0q7aseXY%2B85zA9Y48eSQTgR5zJUnv0A%2BR4yg1bmCf3C1zzs5DBnWLlKfWo%2BugIkpdA8yPXoiZTTNNBJl9beqbQKyLhrKHFpeXy903JzeIOTzBC3WLDruK4oEENzADE9otSZrxaYgAwnNFX1LLM2VtmcpofF73J9QBhRRhRQRD8GRCPE5zo6uN4GGP53c8JNNsHDSkSsaQzPoOI4wIfW8kKXFtIO3jRlX7fx2XtHeRmX1SUPAY0cE7xEe3Najol8DT%2BO7clKrbRbJTwodtaGlw7FqVNlTDeztjfjHn96Iuy80Dzs0dt6XDocV3iuRX6cbuU06RXsYjwchP5URLT%2FVddNtAIoyd%2Fcw2qrJyQY6pgFTxWg9KlMu8L%2Bm7th%2FqIEc0AK0gX4NCmwMnUWHNVrlVNHBGuhFvQqf8O7OzWkwvGy2EltnwdKJqVZvogt%2FlAxbfRE4iAOUHS5us866TCRkJR4aXtVCtgtTTb9sNVVAOXjzndr%2FGWL1SjP1Rc7NZKJENrj8z6fGbIqcUTzZ3bYpgOI67yaRxx%2Fw4Mm9hnUUaXduPGvJe87ExNQPBRz5a4A8B1HGTy4a&X-Amz-Signature=41a09189a0e2bc390993d380a004ac7cbf181441dea719ed31325a35d4259c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

