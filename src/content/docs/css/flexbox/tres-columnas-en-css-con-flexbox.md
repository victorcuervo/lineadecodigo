---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5WWEXHA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHiBgOygv%2BU8puvb5iFYVXIflAE%2B0n5usUV4iRrzkRXtAiEAgDO7C3ZnL8yYIsQmLoUeibY%2FCy6lmQgzjosIr%2FhoATAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLCulf1pat%2Bk7SbrYCrcAxbx74RYP8qgPwnFTCfqnZq%2FUWVCtumcd7Z2UaBQ%2BjNhgYlgPyRXt%2BPAw4jUOP7tEBYqnod91pY%2B5R5gNZ2cwpr3OdMMqdI2L1EabBGKmS%2FeHGDsErDM117HJf3QyUDYZH7ZXnWGp1fL4NnLosd%2Bob%2F9POfS0mtmZnskDGZmUHFAeXVO2l%2FTB0NuUDJ6%2FbHikKEcuImugdIb%2FtGcna6YLcTOLmIWHlpVwAe6yLnSDBFV3WNyEvgp6HLwIv4qqWqX4ppRyVJxokEfWfn6ypH%2BTODdIlMaGZACA2kXhEBZyztJ8bcQHWEECfNPVuN5SqCjGXU3JJL%2BhzAN%2FW3n6A6kxyKbkfYRI9Es57JPc8m81imCwuY9sSmkvwGUra6WS1Eosy9v%2B2%2Bn0Z9Q%2FMvwL1A9HLILeXc3oGulgPDwMUdOrcqvzuHGJm%2FgmcsLnIWcdfSqpVBimuiU%2Bu6cPraYNpest2QdE7ctvTyxFZSaGBynUtGNPUYoMF8k3ix96m%2FVv%2F1VyZ2vtbbKugskagtxCqr3K%2B6Afk%2B%2FTUyxckQP4wEKa0ERbnZT6DMxr%2FC%2Bu8jPSgit0692zPKciIhwDmFUs%2F%2F%2BcU4rt7ol5FNpCP7d9nXc3gnMI6%2BxLMYtudxkTZ7ZMKvJxMkGOqUBwzTvgLmB4ajhj09QnGC0VcvwEu3ACrt0s4f4RiAd%2BuS%2FPNzMdIphQxYfJertwepkzHJ3SHVkC8bENf8%2FrVwvX5LOGV6IllEFjm3WUsCJXXmNHEDoSAkfDDQcAt3XYi%2F3AL%2Fc9p%2BxX4e%2F4eCgpHVhuQPKVy52jpDQtHF%2FYOSv%2FrHVemIR6eU9qiyt4oFXGC2sS%2FHWR8JeloPE8J9nGm4zdOLg52UZ&X-Amz-Signature=0a567a93d5a09fb6e9c7152ae19699a7f10018e281e7da2cedfe2bfa3cfb0a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5WWEXHA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHiBgOygv%2BU8puvb5iFYVXIflAE%2B0n5usUV4iRrzkRXtAiEAgDO7C3ZnL8yYIsQmLoUeibY%2FCy6lmQgzjosIr%2FhoATAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLCulf1pat%2Bk7SbrYCrcAxbx74RYP8qgPwnFTCfqnZq%2FUWVCtumcd7Z2UaBQ%2BjNhgYlgPyRXt%2BPAw4jUOP7tEBYqnod91pY%2B5R5gNZ2cwpr3OdMMqdI2L1EabBGKmS%2FeHGDsErDM117HJf3QyUDYZH7ZXnWGp1fL4NnLosd%2Bob%2F9POfS0mtmZnskDGZmUHFAeXVO2l%2FTB0NuUDJ6%2FbHikKEcuImugdIb%2FtGcna6YLcTOLmIWHlpVwAe6yLnSDBFV3WNyEvgp6HLwIv4qqWqX4ppRyVJxokEfWfn6ypH%2BTODdIlMaGZACA2kXhEBZyztJ8bcQHWEECfNPVuN5SqCjGXU3JJL%2BhzAN%2FW3n6A6kxyKbkfYRI9Es57JPc8m81imCwuY9sSmkvwGUra6WS1Eosy9v%2B2%2Bn0Z9Q%2FMvwL1A9HLILeXc3oGulgPDwMUdOrcqvzuHGJm%2FgmcsLnIWcdfSqpVBimuiU%2Bu6cPraYNpest2QdE7ctvTyxFZSaGBynUtGNPUYoMF8k3ix96m%2FVv%2F1VyZ2vtbbKugskagtxCqr3K%2B6Afk%2B%2FTUyxckQP4wEKa0ERbnZT6DMxr%2FC%2Bu8jPSgit0692zPKciIhwDmFUs%2F%2F%2BcU4rt7ol5FNpCP7d9nXc3gnMI6%2BxLMYtudxkTZ7ZMKvJxMkGOqUBwzTvgLmB4ajhj09QnGC0VcvwEu3ACrt0s4f4RiAd%2BuS%2FPNzMdIphQxYfJertwepkzHJ3SHVkC8bENf8%2FrVwvX5LOGV6IllEFjm3WUsCJXXmNHEDoSAkfDDQcAt3XYi%2F3AL%2Fc9p%2BxX4e%2F4eCgpHVhuQPKVy52jpDQtHF%2FYOSv%2FrHVemIR6eU9qiyt4oFXGC2sS%2FHWR8JeloPE8J9nGm4zdOLg52UZ&X-Amz-Signature=8e637765c09c1ad0d2fa16ff2c10b076cce3d2e18feda573db8445905ac7346f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

