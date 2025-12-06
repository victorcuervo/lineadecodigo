---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSV5TNNL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJXlBC6%2Bq8K0qWdSM%2FYLWNSe47qYy6RmQmi1koAMeuegIhAIFV66DxvF4iYmsLLkInEoFzZ8QElL4OGeUbVrDnlWhzKv8DCHIQABoMNjM3NDIzMTgzODA1Igw%2BGEvFjW1gJZzccIYq3AOrwFruiYBQzDBi5rqE2yTYaBW%2FOzzX8dLxdYE6Rh68HZF1U210lab1or03OllUGoENhPu7mqp3aFK7q2rqes5%2BppPW0FxllP47m6%2FkvbbF%2BumD%2B9AGsxG9JMSnKCmgFolGrmSN8eyE9AhTj%2FQghvVe5VPfzZXidKiZ8uZvc6tjyYDkS3RmD86deXJIFfRZm4hr8rlg%2F0JXxXC1TAHHNDjIy4sM%2FQ%2F2oU4dvjZG8ft88223irEWHvAld4Rii7LHfIi5KGE85ZiDYpltgVwpSDKn3yaNnT4pN%2F40LRtWFMLhD7MctUI1OCaeZtjwd5RYnnhFFrRtulFRiXpbTNGFIyhCJpE%2F7%2BVaj810IzPQuEeHDY6HGlsVCmHEsWqq5%2FK%2BW4NAjf0zTTcbOFOWKAb%2Bf4RQpBj3cZR0XBzGnsqH%2FDbkuktg7lvLT%2F%2BZjSItSf3wOg0rL08wJjp9ksc3PmYcYi1PHZCsINv3QB7og6KkV6B0Iwfe59IEBQo%2F%2FD4cbJY5YANp8jz1nP%2FbhQ9X4LGStVskqEMouavebCpr5wGSeZ%2BkjRCQ5TGisiKO8ZVypJfzQbMPhfJdYCpzx8f2HHW9ZPCn1tJBNFVpXCMQtMjKTs%2FnJLPnPgveYhtwe6JHEjCK68%2FJBjqkAe3BPkCEZ5glOxSBEzsVO3rogLaoAtQ0mWH1KbAVCL2m5yO2UMGQn6PU18zs3y6SV03HKB6VT6hl9gDMh%2FVoN9DOV0xNI0KUXFHYDAXXYNmjCwW%2FTbt2i0xnYTWsJ%2Fcz7DqpuyXK1uJLXSZ1s2FreA4a8sefjRGScJLcxi%2FvqSHgaxSF8AjaMHpUZIp2oUzf4TPblVTQp60JJDY%2BwZotvOa68ukW&X-Amz-Signature=05b916837202ff7795a94e0f9c56972a60ce84f098233717ccb705c1a2815768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSV5TNNL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJXlBC6%2Bq8K0qWdSM%2FYLWNSe47qYy6RmQmi1koAMeuegIhAIFV66DxvF4iYmsLLkInEoFzZ8QElL4OGeUbVrDnlWhzKv8DCHIQABoMNjM3NDIzMTgzODA1Igw%2BGEvFjW1gJZzccIYq3AOrwFruiYBQzDBi5rqE2yTYaBW%2FOzzX8dLxdYE6Rh68HZF1U210lab1or03OllUGoENhPu7mqp3aFK7q2rqes5%2BppPW0FxllP47m6%2FkvbbF%2BumD%2B9AGsxG9JMSnKCmgFolGrmSN8eyE9AhTj%2FQghvVe5VPfzZXidKiZ8uZvc6tjyYDkS3RmD86deXJIFfRZm4hr8rlg%2F0JXxXC1TAHHNDjIy4sM%2FQ%2F2oU4dvjZG8ft88223irEWHvAld4Rii7LHfIi5KGE85ZiDYpltgVwpSDKn3yaNnT4pN%2F40LRtWFMLhD7MctUI1OCaeZtjwd5RYnnhFFrRtulFRiXpbTNGFIyhCJpE%2F7%2BVaj810IzPQuEeHDY6HGlsVCmHEsWqq5%2FK%2BW4NAjf0zTTcbOFOWKAb%2Bf4RQpBj3cZR0XBzGnsqH%2FDbkuktg7lvLT%2F%2BZjSItSf3wOg0rL08wJjp9ksc3PmYcYi1PHZCsINv3QB7og6KkV6B0Iwfe59IEBQo%2F%2FD4cbJY5YANp8jz1nP%2FbhQ9X4LGStVskqEMouavebCpr5wGSeZ%2BkjRCQ5TGisiKO8ZVypJfzQbMPhfJdYCpzx8f2HHW9ZPCn1tJBNFVpXCMQtMjKTs%2FnJLPnPgveYhtwe6JHEjCK68%2FJBjqkAe3BPkCEZ5glOxSBEzsVO3rogLaoAtQ0mWH1KbAVCL2m5yO2UMGQn6PU18zs3y6SV03HKB6VT6hl9gDMh%2FVoN9DOV0xNI0KUXFHYDAXXYNmjCwW%2FTbt2i0xnYTWsJ%2Fcz7DqpuyXK1uJLXSZ1s2FreA4a8sefjRGScJLcxi%2FvqSHgaxSF8AjaMHpUZIp2oUzf4TPblVTQp60JJDY%2BwZotvOa68ukW&X-Amz-Signature=9d9f6b4bc91f9567a30c5e8c786a463ca453761ff05114dc7c353780eb8f276d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

