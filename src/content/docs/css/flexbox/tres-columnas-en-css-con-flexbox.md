---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSY3TLF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTs5UOAMyQTeNcm4jVBeO0aeAL2GEV8W5GicYSPTYwRAIgYn8HQJzZjoQh4moSEcWdp9%2FGaoqhLFY1g1b%2FzAgrZiQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4wAIGTrybRkb%2FkWSrcA6br3UV1swp61TnBgs8rUdDTOx2zm8KM6aQiI2qNIigCKnhBMM5cf2GPg%2Bj9Y9e76cvNxDM%2F%2BgjEQjq1QbdlCm5xz%2BLA%2BS41E2mnhdvmhkrUfc%2F81BkH11KErG%2FoIkf7lv0GzpiYuXU4Yc66qiRtzNNI3Jkyks%2Bl0o329iyPqeD8q4e4KmdCxoX6Nf9OYJypsRE5i%2B%2BEdBY0X8b6bZ36cyJrRl2ttiJUiV75EyH5YmJ%2FselE%2FZU%2Fl1opXo6wES0FkXy5I4g7P0CotXEpTAxCF0oCAG05A4uREhvQ9ZOFr784nY2fZxyxJ49KogWgpiBVl4B6Ken1j2XQJ9nv7UuS8Fxe3LzFLRM0lw5y11zXjicsyH1PF6MiuzMDlRStsvnwwQWu5trhI4xEZgVB%2BigIm0nmFkMjldKDeIyr3uFfOUIGzciJPJQeF7kZZbpQ8VyAaRsl5FHEcQuG7elvPBIr7gxPuq2k4ewlvpju02OHzZS6u%2BFvq5FjoWpXDLc1WzKzvx83KEAPUi6%2BJ5VOXsuT9Rm0mhhKYsBKiiAGWuGIrS6KfOtZr0XF%2BEnXiF5qkOypoJ0tYPOAVKkXUWLxDx7qzFZCFxVCJ8EdAHNya1IXNedhHRNWY%2B5mBkGOrqUBMPOZ1ckGOqUBqEdvObIlzg979GbbLRVPB1SB9ZTs%2FiOLFbCS9O2I9qz67d2AVgHU7%2BgYHaZSM88IR8wlutd%2BprJG4kauDek6Rdl9naOWkZTXOHpPr6G0zwgRGDxkR8k%2B6Weki%2FEvK3R5guFtes1DShL6pSJ5KSqtdGrh3VY101YBbmVrPW%2BOLdagmgjgrqM7AVek96MKgvudm4jkhbYJ2%2FJsmT2pFZUdB4xMPb0O&X-Amz-Signature=a6c3b97c267103f5c2e38ccfd9ca5fdb221feddb31388948cc64b2b913d290dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQSY3TLF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTs5UOAMyQTeNcm4jVBeO0aeAL2GEV8W5GicYSPTYwRAIgYn8HQJzZjoQh4moSEcWdp9%2FGaoqhLFY1g1b%2FzAgrZiQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA4wAIGTrybRkb%2FkWSrcA6br3UV1swp61TnBgs8rUdDTOx2zm8KM6aQiI2qNIigCKnhBMM5cf2GPg%2Bj9Y9e76cvNxDM%2F%2BgjEQjq1QbdlCm5xz%2BLA%2BS41E2mnhdvmhkrUfc%2F81BkH11KErG%2FoIkf7lv0GzpiYuXU4Yc66qiRtzNNI3Jkyks%2Bl0o329iyPqeD8q4e4KmdCxoX6Nf9OYJypsRE5i%2B%2BEdBY0X8b6bZ36cyJrRl2ttiJUiV75EyH5YmJ%2FselE%2FZU%2Fl1opXo6wES0FkXy5I4g7P0CotXEpTAxCF0oCAG05A4uREhvQ9ZOFr784nY2fZxyxJ49KogWgpiBVl4B6Ken1j2XQJ9nv7UuS8Fxe3LzFLRM0lw5y11zXjicsyH1PF6MiuzMDlRStsvnwwQWu5trhI4xEZgVB%2BigIm0nmFkMjldKDeIyr3uFfOUIGzciJPJQeF7kZZbpQ8VyAaRsl5FHEcQuG7elvPBIr7gxPuq2k4ewlvpju02OHzZS6u%2BFvq5FjoWpXDLc1WzKzvx83KEAPUi6%2BJ5VOXsuT9Rm0mhhKYsBKiiAGWuGIrS6KfOtZr0XF%2BEnXiF5qkOypoJ0tYPOAVKkXUWLxDx7qzFZCFxVCJ8EdAHNya1IXNedhHRNWY%2B5mBkGOrqUBMPOZ1ckGOqUBqEdvObIlzg979GbbLRVPB1SB9ZTs%2FiOLFbCS9O2I9qz67d2AVgHU7%2BgYHaZSM88IR8wlutd%2BprJG4kauDek6Rdl9naOWkZTXOHpPr6G0zwgRGDxkR8k%2B6Weki%2FEvK3R5guFtes1DShL6pSJ5KSqtdGrh3VY101YBbmVrPW%2BOLdagmgjgrqM7AVek96MKgvudm4jkhbYJ2%2FJsmT2pFZUdB4xMPb0O&X-Amz-Signature=4e97d95c482e04b89a312c5d4db6e3c3a8d75afb3802a94934a3dd9402713b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

