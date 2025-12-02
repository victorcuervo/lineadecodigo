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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GMZDQJA%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDsP65FHC0%2FPeTM11O%2Fydw%2BNETT6YYvdpf2IjX62hRMoAIgIYUs4jgW%2FaGuCgESlcVZwaSsK%2BhfA1oTFzB4YuVICOsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFt43JgfmcSaybDUyyrcAxKDVK9hXSRZ8dUq51CM9keXDFt9bm5KYptU3RUjEP55GR3tEnJs4DeRUUjPgnVHECirPkWzWqQDx4fUnFgx4%2Fl5HshqMTXjgJg75Co%2FjAJwxjP14aZqlSUJqnQNGXQV%2Fl%2BMBWm3BC7LPcAZzLsNnchnaDXiz9wPVM2SBOdRnkQ6PNPFMgkZhL%2FwEhCdP6UMcWFDZB3v71zUsiume4VEyIzkCwtrNEBpr0egJ3PkOPQVaoaUm2yXBayQmWvGLdkLYDIGl5QULmSeq7Mk748cvwcMa66%2Bkk%2FVc%2BZU8op2I6LcwBZCnu5y3gxeJ81UsDCdKhzuf%2BuySLDxw%2B6rA%2BePOLZIL0Dj7ikYQjPGkFDvThDuRvgwNWT%2FcnqF3dORDYwGDni6bPfyDg8NbiYM9a7EuWke7yEx078PnbLeJYrEsbJmVVHvBP7c6lOM5A5rLvb%2BvPzgWO46vk3Fc7H3VLJXmGdxmBB0ulplN0KDf34QOC1WfNe1R3r%2BTnfumfzbjFrJlm3lN%2FA4D8qkeLNS0wDlRqvSF40UsXNKmsQlyB3OlcZgoQiq73xKlWSlk0JmXTsaQ%2Ftzu0wfzUPbYvoQ0oddPHgHskhHXgpmKAYHRZ%2BjW8iJASuaQ9P62eLPaduJMMXkvckGOqUBJ%2BJiay2P%2BVwT%2F68Y9drgaEyG7X2wm9cktJ7ygkOyRx2QkRW2siOeaFiiUmNcHmeP0sGYpJB%2F6gp7EW%2B0vwFSzZQ9zU1XthBwjL%2BgF7jg6b1WsbQfs56MwwAjlivWv6x%2FMMQNZFS3oAfJI7GpjzmGelc%2B8W69axHdz847owvtgtfaFgemSKna4nxVHaiHyotht%2FkRa%2FK%2FAVTwha7XlJqwWjb5uwTk&X-Amz-Signature=9f5de2124a023916b1b6c7f0121c534765424aa6b6b58a18c17f2622b4e7660b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GMZDQJA%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDsP65FHC0%2FPeTM11O%2Fydw%2BNETT6YYvdpf2IjX62hRMoAIgIYUs4jgW%2FaGuCgESlcVZwaSsK%2BhfA1oTFzB4YuVICOsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDFt43JgfmcSaybDUyyrcAxKDVK9hXSRZ8dUq51CM9keXDFt9bm5KYptU3RUjEP55GR3tEnJs4DeRUUjPgnVHECirPkWzWqQDx4fUnFgx4%2Fl5HshqMTXjgJg75Co%2FjAJwxjP14aZqlSUJqnQNGXQV%2Fl%2BMBWm3BC7LPcAZzLsNnchnaDXiz9wPVM2SBOdRnkQ6PNPFMgkZhL%2FwEhCdP6UMcWFDZB3v71zUsiume4VEyIzkCwtrNEBpr0egJ3PkOPQVaoaUm2yXBayQmWvGLdkLYDIGl5QULmSeq7Mk748cvwcMa66%2Bkk%2FVc%2BZU8op2I6LcwBZCnu5y3gxeJ81UsDCdKhzuf%2BuySLDxw%2B6rA%2BePOLZIL0Dj7ikYQjPGkFDvThDuRvgwNWT%2FcnqF3dORDYwGDni6bPfyDg8NbiYM9a7EuWke7yEx078PnbLeJYrEsbJmVVHvBP7c6lOM5A5rLvb%2BvPzgWO46vk3Fc7H3VLJXmGdxmBB0ulplN0KDf34QOC1WfNe1R3r%2BTnfumfzbjFrJlm3lN%2FA4D8qkeLNS0wDlRqvSF40UsXNKmsQlyB3OlcZgoQiq73xKlWSlk0JmXTsaQ%2Ftzu0wfzUPbYvoQ0oddPHgHskhHXgpmKAYHRZ%2BjW8iJASuaQ9P62eLPaduJMMXkvckGOqUBJ%2BJiay2P%2BVwT%2F68Y9drgaEyG7X2wm9cktJ7ygkOyRx2QkRW2siOeaFiiUmNcHmeP0sGYpJB%2F6gp7EW%2B0vwFSzZQ9zU1XthBwjL%2BgF7jg6b1WsbQfs56MwwAjlivWv6x%2FMMQNZFS3oAfJI7GpjzmGelc%2B8W69axHdz847owvtgtfaFgemSKna4nxVHaiHyotht%2FkRa%2FK%2FAVTwha7XlJqwWjb5uwTk&X-Amz-Signature=c7076f716d2aeeb3be8c2d603e64a3aac977533d40a9108d664e4e11e23f2859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

