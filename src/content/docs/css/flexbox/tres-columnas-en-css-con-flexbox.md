---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TQISAB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD%2F3PANn9Rh%2FFBBHAuwEQYi34Alcq2vjqAXEzhqQY%2BNAIhAIijTajPRrgb1XD6Wbvr5p7zrcgEdCPcBvAthUuBF2vNKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz74qs8aNAIFZU5LYYq3ANonaFZ%2FNNdt1P2x84x0H03VlTz1cxjpoCmzpyEu8gQEzHMu75n0q3x0ySeL43K4YgM9Cq0nZPVHWTbxEKlqkhtkUFPkLTyKFHOAh7Otrvz4AD8%2By5ANO4kCkOIpltci3yJCooG5tE9V8d%2FRP%2BIjbNswzolE8I%2BhIZIwvU2%2BPmkDGv1LIeWKIyPbRTBK0nBIsjeRTd3rU5SbcdDbvMfs%2B7wSGPPmw9H8DnAbN24qbvVSHzeVx%2F6qOlv9KMntxSQZ%2FP2Sb2cMne0Dj1PDT2BqvQCCWbvoZFpq1SNCxfs4KNcAY66kELHya81TK4I1rWTAQOeV2y8BYvK7GwydIraLI8bFHMTSTvxUQvz6uLuEwOE4gaoSPXnuQCsFIJNb0y2N2mKbPo%2BriyjX2JS8%2FapJsXVXWHiqrceeJcAc8eHMB%2FRATumi85JDnm9AwCsXdX5b%2BBAFj%2Fv1ZT9J79oYJNU9pm%2B7%2FybXB8l7ymzmnAfIQpMShqvtnG4BucuRJFM8kDKt8lW46p1gU8mzc2NWEUWA8T2ain6DTNCfeQBSN9rQvJblmD1b6bBbedCOUywxZh5uuHVQHySOwdujf5%2BjKXR5%2BxCarNvCECU2poPmyY9zkmdYNxAeZbb7wZHclPxADCl7dnJBjqkAYZIFxom53WAVH6gvwLaq627WPL5LFKECX0I5bWs2otnL4bx91k%2FNE17wcVA9lqPukmIvppC23a3c303jlxBr51Et8F8XRK3RTUBUN2LxW75%2BoILJAD%2FjxAP4WTnrmnl8y4gXT3sO1fDpLn%2FUnqiQKLiV4e6jft3LlffaFkfl2VUXkl4dnsjxZdP9KoRJXRP9JsRMZdxQa4r6Vk3wzke0dnn4DW4&X-Amz-Signature=fd5f80ea6775abbdc202780aa0db3858058fac9e50970c8f95f2f55f1bdaf61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3TQISAB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T091913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD%2F3PANn9Rh%2FFBBHAuwEQYi34Alcq2vjqAXEzhqQY%2BNAIhAIijTajPRrgb1XD6Wbvr5p7zrcgEdCPcBvAthUuBF2vNKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz74qs8aNAIFZU5LYYq3ANonaFZ%2FNNdt1P2x84x0H03VlTz1cxjpoCmzpyEu8gQEzHMu75n0q3x0ySeL43K4YgM9Cq0nZPVHWTbxEKlqkhtkUFPkLTyKFHOAh7Otrvz4AD8%2By5ANO4kCkOIpltci3yJCooG5tE9V8d%2FRP%2BIjbNswzolE8I%2BhIZIwvU2%2BPmkDGv1LIeWKIyPbRTBK0nBIsjeRTd3rU5SbcdDbvMfs%2B7wSGPPmw9H8DnAbN24qbvVSHzeVx%2F6qOlv9KMntxSQZ%2FP2Sb2cMne0Dj1PDT2BqvQCCWbvoZFpq1SNCxfs4KNcAY66kELHya81TK4I1rWTAQOeV2y8BYvK7GwydIraLI8bFHMTSTvxUQvz6uLuEwOE4gaoSPXnuQCsFIJNb0y2N2mKbPo%2BriyjX2JS8%2FapJsXVXWHiqrceeJcAc8eHMB%2FRATumi85JDnm9AwCsXdX5b%2BBAFj%2Fv1ZT9J79oYJNU9pm%2B7%2FybXB8l7ymzmnAfIQpMShqvtnG4BucuRJFM8kDKt8lW46p1gU8mzc2NWEUWA8T2ain6DTNCfeQBSN9rQvJblmD1b6bBbedCOUywxZh5uuHVQHySOwdujf5%2BjKXR5%2BxCarNvCECU2poPmyY9zkmdYNxAeZbb7wZHclPxADCl7dnJBjqkAYZIFxom53WAVH6gvwLaq627WPL5LFKECX0I5bWs2otnL4bx91k%2FNE17wcVA9lqPukmIvppC23a3c303jlxBr51Et8F8XRK3RTUBUN2LxW75%2BoILJAD%2FjxAP4WTnrmnl8y4gXT3sO1fDpLn%2FUnqiQKLiV4e6jft3LlffaFkfl2VUXkl4dnsjxZdP9KoRJXRP9JsRMZdxQa4r6Vk3wzke0dnn4DW4&X-Amz-Signature=c5884141326a1e28e5f7edabb04392a4be77c4a1fa2770cd863580435183fced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

