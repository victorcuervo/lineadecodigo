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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJELXKSK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGBTh5Xn8xOaLpwduHmu2JkjWytdAiCVuev5dLs4rCSnAiEAvzunBTRj2fwtzlQUzrzU6ccYgaHmNb78BUEV%2B4KMSYAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDBugJMImaS03C%2FZ1%2BSrcA8W0VR2FkbwerAaVGyFTMRLY%2F0P1fTPMDLj9yRsJqq784AallJS3%2BjHyC5nlSchmakGbMl37YFgIjoDXUh1zR%2FZxkYwLDi9tGbj21Xmx6yTYHcob0Iz2hDonVBaUkqcJngbnlnm%2B4O1CCQ81YmdCXKBDE0GewVwNcq9azup%2Bm%2FJadNlecj8tOXnm0K%2BnQ%2Bwn1wVtzMdHxVAQi7buekW4jvOcQU36mt2v5uzmjSVTvKpyVhglrL63AyntOQKZXwRnCpZmGABzCQ4vtwwDcO8EgtCWW5Yfm7kMbhHGRzSbq%2FrqwaVatzycNp6%2FvuTt8s3Fx9NQXj%2FYWtLxv7vLL2pd%2BrXXfdjPGTm6OTHUedIIzgqy4HsBm49ps4cbFTpx57SfCI2BiLRTM5bUvqfitrq2WBgt4keRu3uqj1XrrecBwsHRDSkJJY8n3iicOxq1U4FOMKXfwddHuUt3QD36h6QuYnTpwtgOlvaws%2BQNqkHVanXyz1YM17306RuMWHYtRwIhERVi8CyBK0rnLCnfhRVcbfAGmrdMt9PntzA2Bu59%2Fnflzz1EVpk9sUex64zzqzXyFM9Utp4DO6%2FxWncl7WsBHKRXYMW9I0LzZttAVKHyLPthCGFX1MYnQCp6ZvXkMMymwckGOqUBvSAT23y8byVkSLpwtYpFdH63nBx6Xa6%2BmScoohrAhvcgjU3WIjXJIPh%2FTne3fvHR%2BC9TzYQwX%2FZhBGs6KtRFqxF8yxCNIdJ87QJertdNKPJRMfjw6FQXIwM4UD6yPM8SDx0sxwAgJLnmL6W3eOxL%2BUuVfVLgDnKjSf7PnZZk62JPWPNUALA9pcbtuj9KGWd7fwV7aMFL66ZHY1pNvBJorty1jmwi&X-Amz-Signature=a599729707e14b528c7cde3d820a37a1950b421e2991901601d45588afc62e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJELXKSK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIGBTh5Xn8xOaLpwduHmu2JkjWytdAiCVuev5dLs4rCSnAiEAvzunBTRj2fwtzlQUzrzU6ccYgaHmNb78BUEV%2B4KMSYAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDBugJMImaS03C%2FZ1%2BSrcA8W0VR2FkbwerAaVGyFTMRLY%2F0P1fTPMDLj9yRsJqq784AallJS3%2BjHyC5nlSchmakGbMl37YFgIjoDXUh1zR%2FZxkYwLDi9tGbj21Xmx6yTYHcob0Iz2hDonVBaUkqcJngbnlnm%2B4O1CCQ81YmdCXKBDE0GewVwNcq9azup%2Bm%2FJadNlecj8tOXnm0K%2BnQ%2Bwn1wVtzMdHxVAQi7buekW4jvOcQU36mt2v5uzmjSVTvKpyVhglrL63AyntOQKZXwRnCpZmGABzCQ4vtwwDcO8EgtCWW5Yfm7kMbhHGRzSbq%2FrqwaVatzycNp6%2FvuTt8s3Fx9NQXj%2FYWtLxv7vLL2pd%2BrXXfdjPGTm6OTHUedIIzgqy4HsBm49ps4cbFTpx57SfCI2BiLRTM5bUvqfitrq2WBgt4keRu3uqj1XrrecBwsHRDSkJJY8n3iicOxq1U4FOMKXfwddHuUt3QD36h6QuYnTpwtgOlvaws%2BQNqkHVanXyz1YM17306RuMWHYtRwIhERVi8CyBK0rnLCnfhRVcbfAGmrdMt9PntzA2Bu59%2Fnflzz1EVpk9sUex64zzqzXyFM9Utp4DO6%2FxWncl7WsBHKRXYMW9I0LzZttAVKHyLPthCGFX1MYnQCp6ZvXkMMymwckGOqUBvSAT23y8byVkSLpwtYpFdH63nBx6Xa6%2BmScoohrAhvcgjU3WIjXJIPh%2FTne3fvHR%2BC9TzYQwX%2FZhBGs6KtRFqxF8yxCNIdJ87QJertdNKPJRMfjw6FQXIwM4UD6yPM8SDx0sxwAgJLnmL6W3eOxL%2BUuVfVLgDnKjSf7PnZZk62JPWPNUALA9pcbtuj9KGWd7fwV7aMFL66ZHY1pNvBJorty1jmwi&X-Amz-Signature=072fac77b746c9b8dcaa6bc1189f80a2be4038040b8a02421acbfe281ac39547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

