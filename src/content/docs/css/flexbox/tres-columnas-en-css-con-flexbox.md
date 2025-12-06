---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DRY5X7S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmHGMonaHbN6wN5VlZPBnHYdrBJbwT0LleK6%2BcSkNGfAiEA7Ud00PsVfpTEHvAvp%2FzwoviLJlD%2FNllG1LQB9uL9KQsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAm98iDRe7%2BQph%2B23ircA5NddHQBnkDE6fZ0KXupzyplLP97abcbKZPBpPHQ3UHDzIAYnONsZOLwTDdvbCW3c5gvsB8ClLWnwUGY2lK9j0jFh%2F4kZL11SPPwFcFN6Dgn803cKdg6M%2B2bIz24o3E7grv2Z0agCgfOZTR69SXa5P19GylowEdQPHPJJm4LEetgLdjnaYxwVtNbMW9%2B5ssn%2FKSrd4Xx%2B01CEbO0vvXaO5zTQHx3S7qANYKjhqfXbYnXXFUHV3M2x%2BruZUauFuQx6Di09Fsis0RaJXGC0YyGZSXqUZPgcW1TVV0sN1XensYoSiBkgWb%2BTCzYjwuVqL45kUV2msQq%2FRs4ol15s14CNI%2FPq%2BkRitjusDv5hUzdCMild5i4tFDf5ubY2%2BScgUji6T0lwLFT0a7iOsqKDZignsEu4ORBi65GXS%2FbKsJ8wOi81IwKcMydDHgyQ35aTGQkLQI6BADR%2F1AMY7s6IIDidfLje7SIA7CJJAbBReYmG3u7VRLtt1t2OMMK2jct3f1aULt4cEU3Q6BnFmAfEyBpgOoBgw0rtlZ4HdUNF7X255hCSsQWhbkE7JhQMJOUO5WMGu72JV%2FLypmq4Dn1JKxIHKmZsDiQXNmgF2va%2BWPV%2Fg5UDNafM8OleXIDgyCOMI7rz8kGOqUB1Hf4bI4AkZ9d6gZNyDhuonbF%2FJTfYMM1eLRqDFMY1%2FEGxlt66FeXe0AZTmQ1CwqaIpcL0zTfDqWRFIYKRh7fFChZ0r57WeyeBw%2B7a5B9hdMrqgWgejypH%2B%2BaYfaYjcm0cav7Ruv6YWJ%2FxQECGxEgMyOFLPzDACsrGLrja%2FTz6Js9NNoDNtMF1JfMTsmfz%2FG%2Buc%2FguPMcDqCZRYq97BpYj2maosH3&X-Amz-Signature=3362638acbffea68bdf04a94b03bbdf9b59e2f678087babe531e49940069b326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DRY5X7S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmHGMonaHbN6wN5VlZPBnHYdrBJbwT0LleK6%2BcSkNGfAiEA7Ud00PsVfpTEHvAvp%2FzwoviLJlD%2FNllG1LQB9uL9KQsq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAm98iDRe7%2BQph%2B23ircA5NddHQBnkDE6fZ0KXupzyplLP97abcbKZPBpPHQ3UHDzIAYnONsZOLwTDdvbCW3c5gvsB8ClLWnwUGY2lK9j0jFh%2F4kZL11SPPwFcFN6Dgn803cKdg6M%2B2bIz24o3E7grv2Z0agCgfOZTR69SXa5P19GylowEdQPHPJJm4LEetgLdjnaYxwVtNbMW9%2B5ssn%2FKSrd4Xx%2B01CEbO0vvXaO5zTQHx3S7qANYKjhqfXbYnXXFUHV3M2x%2BruZUauFuQx6Di09Fsis0RaJXGC0YyGZSXqUZPgcW1TVV0sN1XensYoSiBkgWb%2BTCzYjwuVqL45kUV2msQq%2FRs4ol15s14CNI%2FPq%2BkRitjusDv5hUzdCMild5i4tFDf5ubY2%2BScgUji6T0lwLFT0a7iOsqKDZignsEu4ORBi65GXS%2FbKsJ8wOi81IwKcMydDHgyQ35aTGQkLQI6BADR%2F1AMY7s6IIDidfLje7SIA7CJJAbBReYmG3u7VRLtt1t2OMMK2jct3f1aULt4cEU3Q6BnFmAfEyBpgOoBgw0rtlZ4HdUNF7X255hCSsQWhbkE7JhQMJOUO5WMGu72JV%2FLypmq4Dn1JKxIHKmZsDiQXNmgF2va%2BWPV%2Fg5UDNafM8OleXIDgyCOMI7rz8kGOqUB1Hf4bI4AkZ9d6gZNyDhuonbF%2FJTfYMM1eLRqDFMY1%2FEGxlt66FeXe0AZTmQ1CwqaIpcL0zTfDqWRFIYKRh7fFChZ0r57WeyeBw%2B7a5B9hdMrqgWgejypH%2B%2BaYfaYjcm0cav7Ruv6YWJ%2FxQECGxEgMyOFLPzDACsrGLrja%2FTz6Js9NNoDNtMF1JfMTsmfz%2FG%2Buc%2FguPMcDqCZRYq97BpYj2maosH3&X-Amz-Signature=7ace123828f51d38ce338fe3b6adf27df829b22accfc7366a56a03fcb2207318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

