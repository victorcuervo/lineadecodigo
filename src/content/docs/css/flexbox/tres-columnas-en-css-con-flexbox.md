---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVODS2N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCJphhSQhi4RTF5w9wE5AJEnF5pB%2FwtbNfUbafsn3lXAiEA1QU410sUiYP8E9quCD5Df%2Bu6QgRVKh6qfL3wdWGOuIIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAsOkadlo1X3nW1UjyrcA2DrOnaF2oiyCEgsKZGRvgFqCjX81DRwbsufMTeWJ89OoAW1IF8GOWZV%2BiOgPfd8HFZwXd8P2NLmhWy4aF5NJd6pKru6CpzwlbOrK7qd48Nr1hIGd0miBedj4ZkozNO7CmGPHd8CxFXdFmWuGOqKJw6eH%2BKybhqwSOJJg2ow8IPdMV2NjSo2KnKOGyRUXVvtqCsqNYrWknwCPJdbsfgg%2FUsJyfIinhW%2Bw8TgKkcxhGEBq%2BASP9igJOGtBNjRbByplG3T0RkOlazsThudCen9Nz%2FkAVUSIqZyzimbUX1LGQ335hN2L7nIYgfXT4ZJW%2BPVadv2fjt27%2BYq2k9WS6AF1KRs2DJ9yJl01wLoZMac5zsBSoBhYCb3EjKPIPmgkUOyR%2FiYn2vE3N8PQXy%2BbVJNY8RVPMQKLj65sqmB8nhZo0uaHQLmTHBeAg4FldmwCA6feJFPwwuCcuuzsx1Wff6tzI%2FyTLdbNdGDKwRzoN15cLV5ESWNpJKi1LxozN%2FCdBM7ecUrf6otuM9MhhNCQe3pkWiYsJCNMj1Pk8tUteZqINhYurnenP3OlW6DqFji2h2FsDW1i2%2BnT%2BPWAv4iORdjEACLplj3FpWwsF8kRWY8yNSxHCa0zrRgyhAAYA4xMN6qyckGOqUBbAgai%2FOIJ2w3KeisvxKnFNwmD1kdmILjRj1xraqPdY1naP9NViBGOLW5DNH1Gnn4SQNzSKm0V52%2B9YT5tnkQHgIhZSFJ%2BOYhQpRzYy8NO1xnTb7NElaZBmXE270ENFYK98UIkCszc3R0kK%2FNs%2BYCO%2BGN%2BOmaFwOvQIMKnBzdgzeBuEmUfGI8w16ky0pstxs%2BvWpW92EXYUY6%2BEt%2BdvDedWY%2BbgOU&X-Amz-Signature=84495deecf5f9ec4e3a0d4577add3636989965f76742475d26416bbeff445084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVODS2N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCJphhSQhi4RTF5w9wE5AJEnF5pB%2FwtbNfUbafsn3lXAiEA1QU410sUiYP8E9quCD5Df%2Bu6QgRVKh6qfL3wdWGOuIIq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAsOkadlo1X3nW1UjyrcA2DrOnaF2oiyCEgsKZGRvgFqCjX81DRwbsufMTeWJ89OoAW1IF8GOWZV%2BiOgPfd8HFZwXd8P2NLmhWy4aF5NJd6pKru6CpzwlbOrK7qd48Nr1hIGd0miBedj4ZkozNO7CmGPHd8CxFXdFmWuGOqKJw6eH%2BKybhqwSOJJg2ow8IPdMV2NjSo2KnKOGyRUXVvtqCsqNYrWknwCPJdbsfgg%2FUsJyfIinhW%2Bw8TgKkcxhGEBq%2BASP9igJOGtBNjRbByplG3T0RkOlazsThudCen9Nz%2FkAVUSIqZyzimbUX1LGQ335hN2L7nIYgfXT4ZJW%2BPVadv2fjt27%2BYq2k9WS6AF1KRs2DJ9yJl01wLoZMac5zsBSoBhYCb3EjKPIPmgkUOyR%2FiYn2vE3N8PQXy%2BbVJNY8RVPMQKLj65sqmB8nhZo0uaHQLmTHBeAg4FldmwCA6feJFPwwuCcuuzsx1Wff6tzI%2FyTLdbNdGDKwRzoN15cLV5ESWNpJKi1LxozN%2FCdBM7ecUrf6otuM9MhhNCQe3pkWiYsJCNMj1Pk8tUteZqINhYurnenP3OlW6DqFji2h2FsDW1i2%2BnT%2BPWAv4iORdjEACLplj3FpWwsF8kRWY8yNSxHCa0zrRgyhAAYA4xMN6qyckGOqUBbAgai%2FOIJ2w3KeisvxKnFNwmD1kdmILjRj1xraqPdY1naP9NViBGOLW5DNH1Gnn4SQNzSKm0V52%2B9YT5tnkQHgIhZSFJ%2BOYhQpRzYy8NO1xnTb7NElaZBmXE270ENFYK98UIkCszc3R0kK%2FNs%2BYCO%2BGN%2BOmaFwOvQIMKnBzdgzeBuEmUfGI8w16ky0pstxs%2BvWpW92EXYUY6%2BEt%2BdvDedWY%2BbgOU&X-Amz-Signature=26f3e3a4cf06d057fc12d5193b6dd4d8038c45946aa2195179d000c496810654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

