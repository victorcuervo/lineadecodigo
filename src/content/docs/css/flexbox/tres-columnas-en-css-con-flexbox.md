---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVA5SWB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQHIuRCoaZ52GvrUWUkYDRcp%2FKsrUOOIFG2LkHA1%2BvOAiB%2FpfgHTTWhNG1k5qkRNaxuSZrJ8zwe1kaM7hqf2DfiiCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMroCf4xV6CUAXgpdhKtwDLlhcuU6aF6S0c2%2BenXdRx%2Bzkv9SlFtKtYjFqMI1jKbv0mkIim9iow2DUlkxFwsSvHb8gS801WVP%2Fssb2kCD98tCOa9m%2BuVWj8PyiXbWWRzkNxlOD19STA7284EWwGGqf%2FwHGRaz5snjSVkJp0DdL5rW%2BonIB%2BaV%2FEAmvag%2BkXXKbJX60Z5fdRy6O%2FoBjWHRCbG0rrWUVJLEHgB31tyDmoLWmuyQASgmWu2%2F3GMpFbE4AjjKqvnayijCL%2F5Cs42fVxjLcBiH7dpaGe3A9OOrU8lvi2VrKTT8P%2B2kwjE6%2FVi2JxWnJabP0rk3QNh4pV%2FOwU5cMINtsBh3Kqd9IQn1xKsPmJZA%2FNq7Zk02CiQQR5HkzvQZu8Gk%2FC0nZNoBGDcJpEGixwLi1IlU3D6POhsK0hXYqIvE6u%2F%2Bx4IoYPfoiF%2BdXLiIcclvnv7YdLeNezeGNPTwo7z0hPne3WXDsduQzLYnwSwyyP5FSTEFiEjHNQN59Olx7LwlwJEzhwxxaCbgadHv6zPY91Lw1E%2B19zWsbmbevEtCT1mUAw%2BPFZp19eLCVGG%2BtREGjmkfSEBrId1I7qaWVQZhsuLVdqqo7eTcIsgAsM29hUBd5anqS0GVVlPpxU4hNvKT4cAk%2Fguwwi%2B%2FYyQY6pgFWyLoQjmhy4XCiv5cplgho1zNERMgr7qtXll7No%2B4StLM0vSm6iPlX7GCCWOfUdfP9hblvUqnlw6IncssibzGHnriLC3E%2FiIM7W0FFofDMQ8CMJSrQLKQgFVTwO%2F7UjWas7fVT400BfwwAe97uNYUgRDmjaRF4%2BOOErP7hsv1KCrA4NRmOAOD372vp0qXywWo1yRraNwt3lYrnSlrt%2Fh9xicnTKla8&X-Amz-Signature=64a128596b603f52f9e51ef40fa8c71d1d54ba9eb654fd9c72a5bab48f08d953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVA5SWB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQHIuRCoaZ52GvrUWUkYDRcp%2FKsrUOOIFG2LkHA1%2BvOAiB%2FpfgHTTWhNG1k5qkRNaxuSZrJ8zwe1kaM7hqf2DfiiCqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMroCf4xV6CUAXgpdhKtwDLlhcuU6aF6S0c2%2BenXdRx%2Bzkv9SlFtKtYjFqMI1jKbv0mkIim9iow2DUlkxFwsSvHb8gS801WVP%2Fssb2kCD98tCOa9m%2BuVWj8PyiXbWWRzkNxlOD19STA7284EWwGGqf%2FwHGRaz5snjSVkJp0DdL5rW%2BonIB%2BaV%2FEAmvag%2BkXXKbJX60Z5fdRy6O%2FoBjWHRCbG0rrWUVJLEHgB31tyDmoLWmuyQASgmWu2%2F3GMpFbE4AjjKqvnayijCL%2F5Cs42fVxjLcBiH7dpaGe3A9OOrU8lvi2VrKTT8P%2B2kwjE6%2FVi2JxWnJabP0rk3QNh4pV%2FOwU5cMINtsBh3Kqd9IQn1xKsPmJZA%2FNq7Zk02CiQQR5HkzvQZu8Gk%2FC0nZNoBGDcJpEGixwLi1IlU3D6POhsK0hXYqIvE6u%2F%2Bx4IoYPfoiF%2BdXLiIcclvnv7YdLeNezeGNPTwo7z0hPne3WXDsduQzLYnwSwyyP5FSTEFiEjHNQN59Olx7LwlwJEzhwxxaCbgadHv6zPY91Lw1E%2B19zWsbmbevEtCT1mUAw%2BPFZp19eLCVGG%2BtREGjmkfSEBrId1I7qaWVQZhsuLVdqqo7eTcIsgAsM29hUBd5anqS0GVVlPpxU4hNvKT4cAk%2Fguwwi%2B%2FYyQY6pgFWyLoQjmhy4XCiv5cplgho1zNERMgr7qtXll7No%2B4StLM0vSm6iPlX7GCCWOfUdfP9hblvUqnlw6IncssibzGHnriLC3E%2FiIM7W0FFofDMQ8CMJSrQLKQgFVTwO%2F7UjWas7fVT400BfwwAe97uNYUgRDmjaRF4%2BOOErP7hsv1KCrA4NRmOAOD372vp0qXywWo1yRraNwt3lYrnSlrt%2Fh9xicnTKla8&X-Amz-Signature=c2535ae26afa1c1db5cc78b3ef32d4f4dca5e62b450cd0ac0407d336cc0298d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

