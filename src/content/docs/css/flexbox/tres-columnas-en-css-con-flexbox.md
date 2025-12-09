---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRNLYA5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BRu3NSpx0yAG3Oj4c27pM%2Bzd%2BMwrkkBlUg%2BfSyZQphAiEAxDkEPOJKKw0a6pjsRQ1xHFfQvUmDMHleTtOHEZhalooqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3ggdK7o14bOlkN%2BircA7cO%2F%2F6qB3A4RlZK54dPATLNk0H9fKD3NTadSm%2FsGfLOWqF9qK9tXgk9TtSdTTYvRhmWMDs2kvV8eGIiIDm4l0n3K263LQeIhPrQpWVRiYYZwUlgg6jaAjOQxuzc528BswHxim4FWGeAlKaAs2BptI0RWMGg8fCkJ8H1WxZw2JnLvpOtIBCNVPM9JKfYMWTTskMO6Eoem7Riy7STqnjbb4nT2A%2BNJY8srGsH%2BPvH7sJQVozYNCzl7f4HKVkQcYd1WzZWhnVqShZAPi7jnhrbDuYeahZSpLqnasVBEwEA4uENyll48AmABK3E3TCA7BJ3fciIMcNtlp9bFpNGnqKggdT1dw09Ftki3mu3XTuGO0HQobTMS9sy8BwpD80UImL0SaMDgUY%2Fqw%2BBQ9Ux4At%2BEfGfc%2BH3%2BC%2FtE2opy3Oaag%2B0Dp6a642rWHWMbCxsrUylUhR%2Bm4r%2BdrFNCKK3hNGYpF1CQemYUmTavyqrLGgtsdzP%2FLX17y0qnHqBbv8tfcmHMXO171NrZAj%2BAv5pZIN2Mr%2F6IfXJKgCAoZLwMb84vHDfuT4zcC4aRHBp2bY395ZlbnwHUFoJ69RUJNPKp3MYJ3kqj8GUU1t4utTjBWurSor4M%2Bw2k%2FoXggGXl5FqMOno3ckGOqUByWhwQDQNuI1jPhGCxNutpjcPbarZOe84agDrLABX9%2BKR%2FZKcrP04ajMGF6gpzd8J0Z2LdsFSIloKWuAc8nHoulIjHcOpxBVKwftYckamXiq3vO4ctj9OzpQHKG3mdSI2nTVUh%2BkaNyBSZlEad52gK%2BYC2U2SFR9T1VY103Psr7Few0za7XEULdCA7TGZGMPIFAwDeYQbEsYas83knC7IlKr%2BZ4kE&X-Amz-Signature=466495b6c8a16a0b0c87fc0e259096611fa9875660b86193d11f6679773faa7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXRNLYA5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BRu3NSpx0yAG3Oj4c27pM%2Bzd%2BMwrkkBlUg%2BfSyZQphAiEAxDkEPOJKKw0a6pjsRQ1xHFfQvUmDMHleTtOHEZhalooqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3ggdK7o14bOlkN%2BircA7cO%2F%2F6qB3A4RlZK54dPATLNk0H9fKD3NTadSm%2FsGfLOWqF9qK9tXgk9TtSdTTYvRhmWMDs2kvV8eGIiIDm4l0n3K263LQeIhPrQpWVRiYYZwUlgg6jaAjOQxuzc528BswHxim4FWGeAlKaAs2BptI0RWMGg8fCkJ8H1WxZw2JnLvpOtIBCNVPM9JKfYMWTTskMO6Eoem7Riy7STqnjbb4nT2A%2BNJY8srGsH%2BPvH7sJQVozYNCzl7f4HKVkQcYd1WzZWhnVqShZAPi7jnhrbDuYeahZSpLqnasVBEwEA4uENyll48AmABK3E3TCA7BJ3fciIMcNtlp9bFpNGnqKggdT1dw09Ftki3mu3XTuGO0HQobTMS9sy8BwpD80UImL0SaMDgUY%2Fqw%2BBQ9Ux4At%2BEfGfc%2BH3%2BC%2FtE2opy3Oaag%2B0Dp6a642rWHWMbCxsrUylUhR%2Bm4r%2BdrFNCKK3hNGYpF1CQemYUmTavyqrLGgtsdzP%2FLX17y0qnHqBbv8tfcmHMXO171NrZAj%2BAv5pZIN2Mr%2F6IfXJKgCAoZLwMb84vHDfuT4zcC4aRHBp2bY395ZlbnwHUFoJ69RUJNPKp3MYJ3kqj8GUU1t4utTjBWurSor4M%2Bw2k%2FoXggGXl5FqMOno3ckGOqUByWhwQDQNuI1jPhGCxNutpjcPbarZOe84agDrLABX9%2BKR%2FZKcrP04ajMGF6gpzd8J0Z2LdsFSIloKWuAc8nHoulIjHcOpxBVKwftYckamXiq3vO4ctj9OzpQHKG3mdSI2nTVUh%2BkaNyBSZlEad52gK%2BYC2U2SFR9T1VY103Psr7Few0za7XEULdCA7TGZGMPIFAwDeYQbEsYas83knC7IlKr%2BZ4kE&X-Amz-Signature=b90aaf386464014c2d8aee6150c59d478753257c60a6adedaca0ea3bb29539a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

