---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJP3662%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDZ5j%2BVVAFbWX7U40cPRw5aLQB5pyYvdgxlJXeyNJ%2BAMwIgfPh1ZO9kO%2Bs76jszsD%2BAMTRj5I7kHZ4vy3MlvahzwtUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMKDD7LFVSm6J4wuVircA%2FFTWGwOmmd9%2BjHKRhuKEPF3QTxw24EbCGLNe5IewmkK1JPa1bOy0S8pjV0ggKAJhBzJP0Ily6whqmxzFoKSJL2DJ%2FNYgR2rqtOnV6S8N86gz%2B6u1qaDICb5uaJtFwdEqxoQtYJ4Ff0EhWV6VbouGHpxO2Wggt6MLLS6ikiZj5E8D5ovRkf2HTxOY9Is4cZxaGkB4fewKj55JWd%2BAyMP1porpJ8fAvspU0lule3xJ05kIy6HlM68oxcIjFn8QagdfbA0MfKAB%2FEOxYZzzqL4kPD3pCbCG8nERLPXl3ncevjN4sygTTf4jrQz6VqhAYA9YL1z9LWyXvQgPuC9XUSfteOXTuaa419NEZOhkCcEHeoaub4%2Bcqen6UtQNm%2FfLe4JJMjIkVr7cwwnyeuW%2BKF7ksewa3eotYHzjxu8T86hep6JagqXBmYO70DBwPszuhseKOg9vQc5BG2T8J%2BBM6QEQUKVSRMyn85pN5cr2sQ%2BIOKnq6PDaTDS11ZuIi4Kz52hQPUx6hHu2fe8zL8MV1P6wndxRiKTOZ19lioNrjFMDoNHxl%2B9vMbYeYWiaFCm8klGDcy703ZxdK0BAqmlOfzFzjX2a8E%2BIawgCmvtDzqe9PdUg3HFTtOpe4zNcSZ4MN%2FMwMkGOqUBEnaVjib%2BS%2FC%2F8d4ZCN3190b3NZ%2B6RZId8aitvBIp4OGmdJ1PGFovcZhcGQwVwQIkQdSkGyzg5hxdon7kn3FR1TrzOrYHxRXB432Y7ynvCha6tStEjT%2Fe75XUj51oWv5vm%2BAJu9u4KnhLhISQWoAbuPVFFYoUVkPJeY6WJvNR5LSSS4WBPEr2ZG6nFxDH8XvUh1AUmISBk58YLSO2L2zyjeLN2IIX&X-Amz-Signature=4a524a96e732ca55e13de3c1c2e1cfcf5dc505391a8e860e2f0e0da47d333642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJP3662%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDZ5j%2BVVAFbWX7U40cPRw5aLQB5pyYvdgxlJXeyNJ%2BAMwIgfPh1ZO9kO%2Bs76jszsD%2BAMTRj5I7kHZ4vy3MlvahzwtUq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMKDD7LFVSm6J4wuVircA%2FFTWGwOmmd9%2BjHKRhuKEPF3QTxw24EbCGLNe5IewmkK1JPa1bOy0S8pjV0ggKAJhBzJP0Ily6whqmxzFoKSJL2DJ%2FNYgR2rqtOnV6S8N86gz%2B6u1qaDICb5uaJtFwdEqxoQtYJ4Ff0EhWV6VbouGHpxO2Wggt6MLLS6ikiZj5E8D5ovRkf2HTxOY9Is4cZxaGkB4fewKj55JWd%2BAyMP1porpJ8fAvspU0lule3xJ05kIy6HlM68oxcIjFn8QagdfbA0MfKAB%2FEOxYZzzqL4kPD3pCbCG8nERLPXl3ncevjN4sygTTf4jrQz6VqhAYA9YL1z9LWyXvQgPuC9XUSfteOXTuaa419NEZOhkCcEHeoaub4%2Bcqen6UtQNm%2FfLe4JJMjIkVr7cwwnyeuW%2BKF7ksewa3eotYHzjxu8T86hep6JagqXBmYO70DBwPszuhseKOg9vQc5BG2T8J%2BBM6QEQUKVSRMyn85pN5cr2sQ%2BIOKnq6PDaTDS11ZuIi4Kz52hQPUx6hHu2fe8zL8MV1P6wndxRiKTOZ19lioNrjFMDoNHxl%2B9vMbYeYWiaFCm8klGDcy703ZxdK0BAqmlOfzFzjX2a8E%2BIawgCmvtDzqe9PdUg3HFTtOpe4zNcSZ4MN%2FMwMkGOqUBEnaVjib%2BS%2FC%2F8d4ZCN3190b3NZ%2B6RZId8aitvBIp4OGmdJ1PGFovcZhcGQwVwQIkQdSkGyzg5hxdon7kn3FR1TrzOrYHxRXB432Y7ynvCha6tStEjT%2Fe75XUj51oWv5vm%2BAJu9u4KnhLhISQWoAbuPVFFYoUVkPJeY6WJvNR5LSSS4WBPEr2ZG6nFxDH8XvUh1AUmISBk58YLSO2L2zyjeLN2IIX&X-Amz-Signature=5546138a97094a37c883de89864c916e2d5a71b5cb20f0bf0b87e12672dd4115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

