---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUCYQ5I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe5iz4%2FfFm7T5MJm0dWFSbIA1MdurhRHUBsuUpON7MwAIhAKCPnNoNJeD5IW%2F55yg0zldlr1offmUV7zqtcgEFVI2tKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNOWXJxeFRcsl6P7Yq3AM4jh6ZB1kw%2B2VZgJZ3HbLV2AAZZyq2ttDGgOOyZOnKzsIOAPknz%2F96%2Fcmz%2Fdc1w2XmdDo8akgadGp%2F%2Bguviv40wNqWVDyAVKTag7%2BLrXP8FaDKBYBEdtcAdQe7hK4K%2B3sDLJjim2DtCmtwJ8UsUA1YVlwPTJAlMKyDi37o8EN5raeh%2Bz9D1a7X7g1CArDwUnwKzzG7U7FvNE3ewStQBGRb3hKOqRzdBBbj2AzZAm03TIHMNFJoA56eUxE9bvIVoYglXqPH9NsdgHtEqI5TCZGRRl%2FyzcZs1Bx8UrriuziqDyg%2Brb7d32mgQuOPhA%2FaJ0j%2B5Lvaa0xivamx1H7L8ulNUH1PPn7hIiNvNjA2kpFUe1vOxMk%2ByuPw4E7%2BTTg5LPEXTZdJvQTXJ5dLa%2BvlHxqrU07cFp%2BM5Vuf3b1Jx5CZ%2F%2FtVPx42VOJq%2BmlcvwPFwDQKY0KTRIJVFT3xVv3Ikpna3rwAZtPZK%2FvpWJv%2F4yTQvxkESDGAA2WqdR5Hir81Lwd1uR2f20vxCc4j9OZYmZIg1a3q%2FmhL7Ve4UbR%2FNoVVfwMkmCaG9lp9YrAT79SluL%2BoErSYc3iVboH14IQ7hDuX8fwacSeWSFCByGexnHqy1IXo0z9BXtI%2BnwtwIzChldnJBjqkAb5qzxGDWx3mye3KJ2q04c2B07A1lZd3qDew4orRmY1eXSAMHZT25fJfwcEN2H9ZnBSMGSApjXLtr7WTkv%2BYcRV842nTptRSKlUWPh32SEFLYFPoFGhdRMViuaDzU7ENEcWyY1d3vWdrDrZZZu3YXrpGuMjtE7vVTiQ9p84hagfcV2haKyp9XMdH4SmmDoEfTpGxvdWZhqW5rZgZsjOKUdPCVfur&X-Amz-Signature=258a53634a3a30dc8c2da830c9e7e975463f3a51a26c5b753b462a5fd3a5ed60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URUCYQ5I%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe5iz4%2FfFm7T5MJm0dWFSbIA1MdurhRHUBsuUpON7MwAIhAKCPnNoNJeD5IW%2F55yg0zldlr1offmUV7zqtcgEFVI2tKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNOWXJxeFRcsl6P7Yq3AM4jh6ZB1kw%2B2VZgJZ3HbLV2AAZZyq2ttDGgOOyZOnKzsIOAPknz%2F96%2Fcmz%2Fdc1w2XmdDo8akgadGp%2F%2Bguviv40wNqWVDyAVKTag7%2BLrXP8FaDKBYBEdtcAdQe7hK4K%2B3sDLJjim2DtCmtwJ8UsUA1YVlwPTJAlMKyDi37o8EN5raeh%2Bz9D1a7X7g1CArDwUnwKzzG7U7FvNE3ewStQBGRb3hKOqRzdBBbj2AzZAm03TIHMNFJoA56eUxE9bvIVoYglXqPH9NsdgHtEqI5TCZGRRl%2FyzcZs1Bx8UrriuziqDyg%2Brb7d32mgQuOPhA%2FaJ0j%2B5Lvaa0xivamx1H7L8ulNUH1PPn7hIiNvNjA2kpFUe1vOxMk%2ByuPw4E7%2BTTg5LPEXTZdJvQTXJ5dLa%2BvlHxqrU07cFp%2BM5Vuf3b1Jx5CZ%2F%2FtVPx42VOJq%2BmlcvwPFwDQKY0KTRIJVFT3xVv3Ikpna3rwAZtPZK%2FvpWJv%2F4yTQvxkESDGAA2WqdR5Hir81Lwd1uR2f20vxCc4j9OZYmZIg1a3q%2FmhL7Ve4UbR%2FNoVVfwMkmCaG9lp9YrAT79SluL%2BoErSYc3iVboH14IQ7hDuX8fwacSeWSFCByGexnHqy1IXo0z9BXtI%2BnwtwIzChldnJBjqkAb5qzxGDWx3mye3KJ2q04c2B07A1lZd3qDew4orRmY1eXSAMHZT25fJfwcEN2H9ZnBSMGSApjXLtr7WTkv%2BYcRV842nTptRSKlUWPh32SEFLYFPoFGhdRMViuaDzU7ENEcWyY1d3vWdrDrZZZu3YXrpGuMjtE7vVTiQ9p84hagfcV2haKyp9XMdH4SmmDoEfTpGxvdWZhqW5rZgZsjOKUdPCVfur&X-Amz-Signature=8049fecab81a06a6275c5cfce4ef4b1f9fe0d0902e17f44de6e69ac7a1dd96fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

