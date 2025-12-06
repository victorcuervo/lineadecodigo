---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFT7CU2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVwvRR0sBQndx4MyGcyqhhW18bGrt10%2Bv3xaz%2BGYuiDAiA0gHsxrdTmRFCPqJlJoi12MW7ltOYnISzvnF9X7Hg71ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMZOgPFdr3HnlGA79ZKtwDN2rnjyezIwCUK0dU7gRKhZ0jLJPevfCKsnRFk3us4mWXS2kthBGct3QyL4k1x7Mgl3PRAaacU2uBjlW%2FrcwM83AvLq05cB1X%2Fyc3sFda6A8DpUQECjDIJGdy1GO90UxTIEiInv3YReVCmWnooB6D0KUQuK2FE8yLDeKUAC6yR8DNTiqqstdVhnhsOfDVr7PkN%2BKgCNgtcnPaHLsBbW%2Fj%2BXalYj8yZcElQxbETLfw9r1Uoj1ivtftbSjH6cc%2FJuTdI4EJXRblm3H3GSXmdcg6564Ocl5Bdc8CZDK1SLEs4R%2Bt%2BC65XRSCn2kKgE7cheNks9BmXb5WtN%2FHJi%2Fr%2BofRH5UFKfxiYO%2Fun%2FnTQELZUP3UMrXFYBN%2BjJtbUMZd9r8jimXSVyKnM7cI67VkePAMiTpuTdv2VG1gXK22zKq%2BsXD2KZWyxtjfkzxaSqQJuT0pZY0zxbKPw%2BUpJE3VsOnj9RbqnL98FNRjpv439M%2FRz4iY%2FtMY8tspQ1QQIX3VN3aFpS7zEEB0cAoAbgWBzYAKNqyLf37cRu0XHjukxSpxQV4DBBi8AryMF%2FpBM3B3ahKgYUg%2BMphuQvHDvP0dHIIwUZBxl3nZYf5JPqbSJhtPCs4xTY9jeKHXrGVheL4w0KbQyQY6pgE4KATAjuevV0cmWCnj6qxVd7YRQONBJKgzp7CwED2i4ENQZYpSVIi4BX85xCbRfne2hslO4jQXul4b%2Bio20OoYq9knvMskDBnecxvxOOiFEEo5Dn%2FSyAaM3dEQpvC78JJqD%2BCQDK7hDdMSGcGr3uepuJvHoZXz1AlSsFAwJ58km3H72VV%2FhOFXU%2BFL5saVDSiMNnSYgsva8JTCy2fkr47dBxyuJrIt&X-Amz-Signature=48d1823e823414f2973c0ff6bd703fa6e7be2debc1b20c47bd15339c8dd39135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJFT7CU2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVwvRR0sBQndx4MyGcyqhhW18bGrt10%2Bv3xaz%2BGYuiDAiA0gHsxrdTmRFCPqJlJoi12MW7ltOYnISzvnF9X7Hg71ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMZOgPFdr3HnlGA79ZKtwDN2rnjyezIwCUK0dU7gRKhZ0jLJPevfCKsnRFk3us4mWXS2kthBGct3QyL4k1x7Mgl3PRAaacU2uBjlW%2FrcwM83AvLq05cB1X%2Fyc3sFda6A8DpUQECjDIJGdy1GO90UxTIEiInv3YReVCmWnooB6D0KUQuK2FE8yLDeKUAC6yR8DNTiqqstdVhnhsOfDVr7PkN%2BKgCNgtcnPaHLsBbW%2Fj%2BXalYj8yZcElQxbETLfw9r1Uoj1ivtftbSjH6cc%2FJuTdI4EJXRblm3H3GSXmdcg6564Ocl5Bdc8CZDK1SLEs4R%2Bt%2BC65XRSCn2kKgE7cheNks9BmXb5WtN%2FHJi%2Fr%2BofRH5UFKfxiYO%2Fun%2FnTQELZUP3UMrXFYBN%2BjJtbUMZd9r8jimXSVyKnM7cI67VkePAMiTpuTdv2VG1gXK22zKq%2BsXD2KZWyxtjfkzxaSqQJuT0pZY0zxbKPw%2BUpJE3VsOnj9RbqnL98FNRjpv439M%2FRz4iY%2FtMY8tspQ1QQIX3VN3aFpS7zEEB0cAoAbgWBzYAKNqyLf37cRu0XHjukxSpxQV4DBBi8AryMF%2FpBM3B3ahKgYUg%2BMphuQvHDvP0dHIIwUZBxl3nZYf5JPqbSJhtPCs4xTY9jeKHXrGVheL4w0KbQyQY6pgE4KATAjuevV0cmWCnj6qxVd7YRQONBJKgzp7CwED2i4ENQZYpSVIi4BX85xCbRfne2hslO4jQXul4b%2Bio20OoYq9knvMskDBnecxvxOOiFEEo5Dn%2FSyAaM3dEQpvC78JJqD%2BCQDK7hDdMSGcGr3uepuJvHoZXz1AlSsFAwJ58km3H72VV%2FhOFXU%2BFL5saVDSiMNnSYgsva8JTCy2fkr47dBxyuJrIt&X-Amz-Signature=aefdbdf1c2d8a6a55c2f4994d9e86a345a47dbc373a559bcf20151e8d1b64933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

