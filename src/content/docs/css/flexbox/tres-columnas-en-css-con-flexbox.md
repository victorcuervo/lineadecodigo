---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C3MB7SB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0NzxyPSaemkY%2BvWsOLUA0FqqCVHc6USc0MLn7YB0pqAIgJfLj4GrIpBQMLYUJXjwAQiv7njdV5AwvANkG8brcujkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEjit7S%2BaK%2BWNLekMircA8GkrKEY6TZVP9nmulQueM32jglt8%2FzCvUaPS5wm%2B0NA3trnI4XncjAezvSCx9npuQgRwyvANxDQiqY2MwbFRpoxE1htCNNJ6tbd%2FC9id3J38U%2F%2BUDOP1KBHxTc0dBDjVk5LCEZ4WFyJe5C8txnQ%2FuB1W2h6b4IlxfFHc8kwG8eaS4nkQIMI%2F1lm1MO%2FcGNKpfy7UJO34vHOdHV8nhxSiKfe7O1WgBkSdYjis%2FlsYjnlXNFsNCogME5m9TyYEh9xH241Ypt9fHUQg7Z85yFCFa7T%2BO9nMox0KxcL37vYAYHINfk9zDINq1IvWgB1S8ddwPGG%2BqVdPuNqw6WiJk99PI5iPhU%2Bm6ngVJIlnHKxZWIJEIRqrSdcn1bLqZqC6rlcokAaP09WSkAe1neq8RxMTlWPQvldPQX2ZIsV9ku6qaZelNTxYaiPbi4PedAZyMZSb3Qe1HF5zZnHYrhjo%2Frh2tyegCJRKeWw2sGeW7Q2yrk86JJpaHBPajx%2F9%2FpMNp%2F968ff0mfeDR4jrpy7xEf%2BrJRDEqokL7NB5O5WutInkaBqOn1M4AavoRqnDQUa52wnsxZ8hAl8oBjtCeY5ExSRnPHYclE8n5msBzFUze7lhe7ejdHsZmVlsmfm%2FxThMKGm0MkGOqUBa2vZfq5ngCnNkzv1ba9wvllP7%2FU4rAxkVLpyO3lupYUq6E2tn%2FNvyFaRtQXIVIKE%2BqrcJqLg8NWyaY43UFc643IMxS6Jo0%2F5cglM8vSNZryUJN3YGwy7CYOPwzP9RVAg55E3F4v9FBkekS%2BfFyy5Dlp0exYYWzisBOvNYBDp78W%2BEt5aO4ysSQuHh9XqOLOWU97T%2BZSTr%2FG9i4BB2G0qJek4xbIH&X-Amz-Signature=99f6dc229acddf9d1cce7c926d6f5addce3be3c6fc5ba55763c2a75f17cd5826&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662C3MB7SB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0NzxyPSaemkY%2BvWsOLUA0FqqCVHc6USc0MLn7YB0pqAIgJfLj4GrIpBQMLYUJXjwAQiv7njdV5AwvANkG8brcujkq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEjit7S%2BaK%2BWNLekMircA8GkrKEY6TZVP9nmulQueM32jglt8%2FzCvUaPS5wm%2B0NA3trnI4XncjAezvSCx9npuQgRwyvANxDQiqY2MwbFRpoxE1htCNNJ6tbd%2FC9id3J38U%2F%2BUDOP1KBHxTc0dBDjVk5LCEZ4WFyJe5C8txnQ%2FuB1W2h6b4IlxfFHc8kwG8eaS4nkQIMI%2F1lm1MO%2FcGNKpfy7UJO34vHOdHV8nhxSiKfe7O1WgBkSdYjis%2FlsYjnlXNFsNCogME5m9TyYEh9xH241Ypt9fHUQg7Z85yFCFa7T%2BO9nMox0KxcL37vYAYHINfk9zDINq1IvWgB1S8ddwPGG%2BqVdPuNqw6WiJk99PI5iPhU%2Bm6ngVJIlnHKxZWIJEIRqrSdcn1bLqZqC6rlcokAaP09WSkAe1neq8RxMTlWPQvldPQX2ZIsV9ku6qaZelNTxYaiPbi4PedAZyMZSb3Qe1HF5zZnHYrhjo%2Frh2tyegCJRKeWw2sGeW7Q2yrk86JJpaHBPajx%2F9%2FpMNp%2F968ff0mfeDR4jrpy7xEf%2BrJRDEqokL7NB5O5WutInkaBqOn1M4AavoRqnDQUa52wnsxZ8hAl8oBjtCeY5ExSRnPHYclE8n5msBzFUze7lhe7ejdHsZmVlsmfm%2FxThMKGm0MkGOqUBa2vZfq5ngCnNkzv1ba9wvllP7%2FU4rAxkVLpyO3lupYUq6E2tn%2FNvyFaRtQXIVIKE%2BqrcJqLg8NWyaY43UFc643IMxS6Jo0%2F5cglM8vSNZryUJN3YGwy7CYOPwzP9RVAg55E3F4v9FBkekS%2BfFyy5Dlp0exYYWzisBOvNYBDp78W%2BEt5aO4ysSQuHh9XqOLOWU97T%2BZSTr%2FG9i4BB2G0qJek4xbIH&X-Amz-Signature=1cfb7a8abd6f9e07159024d0e0e4c7828d849fd8db02ab14bbe1302a0c2d7661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

