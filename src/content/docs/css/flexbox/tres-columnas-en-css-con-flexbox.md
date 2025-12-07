---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NXV33VK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxGqfNSlXo3w56K6UncWl2OAxm7Q3jae20%2FmNGhJ4gWAIhAIuuJsr8tpRfW7MpFPG3i2oo9h3MLVaP2RxkuBkGIr6dKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM5upNGAZwbWgagu0q3AO6ZDgVFTi3JJ4BkQYh3eLoNNUGjHM%2Fp7aPngi%2FGgkX3gtk3ZUdjrinmtjOG5DJ6Mad%2Btnuj40nbxOAdgGstgqIIBxWr3OS7LfcWwyNQTJMvSkBgCteRpq4cS1ip1FuHBuU3JeItFajq5tHoR4udgUraqIcEKDrk1V5PlP8TU5n55S3AXr5xHXGEXSkX8cIqjUPusNh%2FmOuVDBFHHKu3zcwI63V8T55UkkQ3e5p5xxoWFBnfpamIs4v82Npb3bSfQInjC4hGKRR9isZb6S3CcFaYb1iSENLIgRzf7phr4%2BMuWwqnxxq5tpn%2Bw2tiUpB7hjepRFZrf4kFw6CiI2MgWfztPVUKjz5aRB4B2ED0687jJXlXg3%2BvVI4TBa3mYHmdXQH4QZd0BF1coqc%2F8kwERSZyIckFNE3xoiGmocHX%2B8kKGf8SDwRQwp8uDFixEYQBTdrjLrqqHgbQ1OY0Uw3NCyE94W2XqhcBFwdyz1vfOzXq3cpXI9CWslJJltvi2HI6buJ4f4ZPbNHoMiJcUjWfS9eijRsbrPyc7IF6pWIBUaCs%2BFE%2Bb7NCEi2WvOdb%2BZL%2B8z3U5zv%2B%2B%2FyMHHb2ezxeX4T5tPFfnolUAqCoXadV%2FGAhZ6Q5Sx%2Ff0jL%2BS%2FgHjD7mdXJBjqkAdKC6hQtnroFhAgpNbhB6u%2F%2BjUgVW%2Fe3WTCQg1Ox00W257t4msBU5FYnQUFHRJ%2BpVFl0cPtP7UkQQMCjaWDrrl%2Fs%2Fp3uGpz20DhBQibRsQr%2F5DJu1iy9fHlzw5i%2F2eYoEUtFfbmj4P6ANLV0Hw8vZ2nzvzc6JZGJ9R0Ai3kIr%2FS06qS%2BOTv7pq7ac2WBhIX9vbJRzbxJLXHztLyedYJpn97FOswJ&X-Amz-Signature=1fb5c14e34d7619900807a40ec56edb9a63b3149be0f1137f914ee4332336b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NXV33VK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxGqfNSlXo3w56K6UncWl2OAxm7Q3jae20%2FmNGhJ4gWAIhAIuuJsr8tpRfW7MpFPG3i2oo9h3MLVaP2RxkuBkGIr6dKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwM5upNGAZwbWgagu0q3AO6ZDgVFTi3JJ4BkQYh3eLoNNUGjHM%2Fp7aPngi%2FGgkX3gtk3ZUdjrinmtjOG5DJ6Mad%2Btnuj40nbxOAdgGstgqIIBxWr3OS7LfcWwyNQTJMvSkBgCteRpq4cS1ip1FuHBuU3JeItFajq5tHoR4udgUraqIcEKDrk1V5PlP8TU5n55S3AXr5xHXGEXSkX8cIqjUPusNh%2FmOuVDBFHHKu3zcwI63V8T55UkkQ3e5p5xxoWFBnfpamIs4v82Npb3bSfQInjC4hGKRR9isZb6S3CcFaYb1iSENLIgRzf7phr4%2BMuWwqnxxq5tpn%2Bw2tiUpB7hjepRFZrf4kFw6CiI2MgWfztPVUKjz5aRB4B2ED0687jJXlXg3%2BvVI4TBa3mYHmdXQH4QZd0BF1coqc%2F8kwERSZyIckFNE3xoiGmocHX%2B8kKGf8SDwRQwp8uDFixEYQBTdrjLrqqHgbQ1OY0Uw3NCyE94W2XqhcBFwdyz1vfOzXq3cpXI9CWslJJltvi2HI6buJ4f4ZPbNHoMiJcUjWfS9eijRsbrPyc7IF6pWIBUaCs%2BFE%2Bb7NCEi2WvOdb%2BZL%2B8z3U5zv%2B%2B%2FyMHHb2ezxeX4T5tPFfnolUAqCoXadV%2FGAhZ6Q5Sx%2Ff0jL%2BS%2FgHjD7mdXJBjqkAdKC6hQtnroFhAgpNbhB6u%2F%2BjUgVW%2Fe3WTCQg1Ox00W257t4msBU5FYnQUFHRJ%2BpVFl0cPtP7UkQQMCjaWDrrl%2Fs%2Fp3uGpz20DhBQibRsQr%2F5DJu1iy9fHlzw5i%2F2eYoEUtFfbmj4P6ANLV0Hw8vZ2nzvzc6JZGJ9R0Ai3kIr%2FS06qS%2BOTv7pq7ac2WBhIX9vbJRzbxJLXHztLyedYJpn97FOswJ&X-Amz-Signature=edebf411c394d074440e8f765e5177a47efcf7c57bfc5522083c4171164d1bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

