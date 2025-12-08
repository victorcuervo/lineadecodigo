---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRGNB6FA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnt5KBQ0THa7PxVbIi1WJCheKWOqcEvjFFjsQKO926tAiAm%2BeHa7HMi%2Bft%2Fcqdtw02VIZMMujs4htxGMJWKn6owYCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcP%2BlP3uZqFW%2B%2FIZ%2BKtwDVRLh95P8lwg1OhzS1zUi8Ws7FG9rBHc%2FsL7auYa75eLjGxJkkZmaiQ1PTJXXyxZ2SAmKnvHKqvjDLT36u3DhaPUaVEnx7v9mGnbbngKjTu7tUYoY3efcRbjGpyUtx5fPo4ADJPdjiWNb8jw9N4IPjOqJNJ%2Bex1Jf1zapNa7JnWP%2B0HW9rS7hNhWYRtR8wIATG9vWXqSS192c59GWUokvhdIEt2iQAH6PRON9qh4oep2hKD0PSybEvOAy9t2IqLLgWA7hZPfMfyevsazaQf%2F%2FYBaG7PspDZa15cFC3t0u%2FnLb4OaryXXQXiuW5ofULJikr98pg%2FMV38hhJjpq7dTSakooZeLS70alTV0RLyjzWMGx48NsntyQK4jT%2BX5gZYv8X2C5YL6swRu2lSKKYbt0imaz%2BS45%2BbPumPI9zyqJrFC6bSW540NkyDZmDOYBqqZuN0ARxwBoMD8t8LeFYr3IvAelx5%2FTNr7GfZftrGJjePnmm%2FJmRosv06LSPoeqRtaQgmtmN8bJlzKe8RPX0n1Txt1bF%2BTXx1ULaJi6L%2Br1iE3QOBeOYZYnBpYnjgvsVbw464pGtOPCnPlti7Ds8HCN2ER0swr%2Fv7InYn4KY4TkOBhxnuNcWHc5tS856EIwgIDdyQY6pgF0DuoSQpr3tfGu3zoJCW%2FZ0MSJWuVr4yQbTRtn%2FnPHTf4xihDaO%2Fi0nIv306MnZORWFY3b%2B1%2BNqAe3z1Axh7ubovZ3YGC16Y8R9vCm2ZJGEc2tASQZj5XSqgUVBIgbB8tX6Lo%2F1IJxJvlv4Jw7GXddgqnXMGXMnx7mRqIQaeXMzECb4sZ5BTy%2FF2MdK6vIRCa3cLkp9EkTV1AvXxB%2FGDGiJpNe0RNX&X-Amz-Signature=73f93df43edf64cea9a5ae56a1c0807f754617eb6064f33fda2bcc13698f3063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRGNB6FA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnt5KBQ0THa7PxVbIi1WJCheKWOqcEvjFFjsQKO926tAiAm%2BeHa7HMi%2Bft%2Fcqdtw02VIZMMujs4htxGMJWKn6owYCqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcP%2BlP3uZqFW%2B%2FIZ%2BKtwDVRLh95P8lwg1OhzS1zUi8Ws7FG9rBHc%2FsL7auYa75eLjGxJkkZmaiQ1PTJXXyxZ2SAmKnvHKqvjDLT36u3DhaPUaVEnx7v9mGnbbngKjTu7tUYoY3efcRbjGpyUtx5fPo4ADJPdjiWNb8jw9N4IPjOqJNJ%2Bex1Jf1zapNa7JnWP%2B0HW9rS7hNhWYRtR8wIATG9vWXqSS192c59GWUokvhdIEt2iQAH6PRON9qh4oep2hKD0PSybEvOAy9t2IqLLgWA7hZPfMfyevsazaQf%2F%2FYBaG7PspDZa15cFC3t0u%2FnLb4OaryXXQXiuW5ofULJikr98pg%2FMV38hhJjpq7dTSakooZeLS70alTV0RLyjzWMGx48NsntyQK4jT%2BX5gZYv8X2C5YL6swRu2lSKKYbt0imaz%2BS45%2BbPumPI9zyqJrFC6bSW540NkyDZmDOYBqqZuN0ARxwBoMD8t8LeFYr3IvAelx5%2FTNr7GfZftrGJjePnmm%2FJmRosv06LSPoeqRtaQgmtmN8bJlzKe8RPX0n1Txt1bF%2BTXx1ULaJi6L%2Br1iE3QOBeOYZYnBpYnjgvsVbw464pGtOPCnPlti7Ds8HCN2ER0swr%2Fv7InYn4KY4TkOBhxnuNcWHc5tS856EIwgIDdyQY6pgF0DuoSQpr3tfGu3zoJCW%2FZ0MSJWuVr4yQbTRtn%2FnPHTf4xihDaO%2Fi0nIv306MnZORWFY3b%2B1%2BNqAe3z1Axh7ubovZ3YGC16Y8R9vCm2ZJGEc2tASQZj5XSqgUVBIgbB8tX6Lo%2F1IJxJvlv4Jw7GXddgqnXMGXMnx7mRqIQaeXMzECb4sZ5BTy%2FF2MdK6vIRCa3cLkp9EkTV1AvXxB%2FGDGiJpNe0RNX&X-Amz-Signature=e3bd3510d3126a8d3617ff9ca24a09b5aba7b39039e3d213a98452444e709a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

