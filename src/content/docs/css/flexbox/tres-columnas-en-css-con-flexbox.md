---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSH74UJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiw%2FAJiFrat299me%2FzzQ%2FFnjHW8VbJSmfYKAIjsLJbHgIhAMckPxKMb4BTnzTvzNllsVFo%2BvFTJpvXBXjnRpuRWz%2FOKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1WumvlWCjr48nAa4q3APxuRWU9A4dt0LDKcwaBqJPL9OfBaYplNLDSdQedhUm%2F47vW%2BS5xuiQRXjW6vCMjDnUKnbaEY451lCszI53eW64skwTRfZwftiY1EnTKmJGkjW4dxnyxjUjWl4mKgx2ZrNayWylMihOee%2BFP6rSeo%2BI%2FfkQly31ZIG2dn3NkhnGdDjDc2TxLsiN755mNyRU2FohfYrLNY5hHiF8qxFfIFFUxB479lnu5wFC72D4I7YDs8eeEx1lsS7A%2F8dXAP9E1If6BPOcssYyD9FWZ4VJ1%2F9UVUPnNQuuk17rvVOBuMuy8uMspZDYJkGj4hnEGs%2FxOfZpd3ffWv9QW7OUJJaYo0U%2FYzxrrXHKZYjB9%2BieLQ%2FibcUt03n5sJNS9E7UumHrDSSH8wcYJq260RSp6AebDHmTc1Z9qzDvfnCZ9Ub1LajGtiz71aVfa%2FMV48ICSliAyWvEY5fYgh8J4PyRa8jBwMzYbxXe8v0SxEBvgOgW6wQmwrD%2Ba%2FbcqNa0WQE6%2BuHIWjSOXYiSxZo%2FjhvhQLjf0Sh2QIf3Poe8ihj%2B4wAKOJJ3SF2hUIvzxXk1CsjBoJfxrncm9Al0i6naEIGeFCZQuEkb81hgzzxF5EItoLKVnfj53fAJeNDyL2dmLAggQDCi5NvJBjqkAXRgx%2FJ%2FkpODe%2F5mEN7iN%2Bve4VCIG4N7QOYZkxNmEyCJ8imbfzifELVb05v88hSoNzzdLMJ5v9Bt9O2nBtq7Lcgt%2BfWxz620BbXZep0ZnfWCMhm%2BQ2ZC%2FcEd0Ha1WarnCIX63S%2B0fjnf9QtSycE4e%2FoRxho12NCpJ4LUVdetUI5r7Lt2pPzSuqLl4WTjdx7M0HYWqex1GnAxYOhQMS4f9PNMJkX%2B&X-Amz-Signature=d2fab4c71ca9258e3de8f67d9e81e48185b60420fad3540057ac3da1ac017198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JSH74UJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiw%2FAJiFrat299me%2FzzQ%2FFnjHW8VbJSmfYKAIjsLJbHgIhAMckPxKMb4BTnzTvzNllsVFo%2BvFTJpvXBXjnRpuRWz%2FOKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1WumvlWCjr48nAa4q3APxuRWU9A4dt0LDKcwaBqJPL9OfBaYplNLDSdQedhUm%2F47vW%2BS5xuiQRXjW6vCMjDnUKnbaEY451lCszI53eW64skwTRfZwftiY1EnTKmJGkjW4dxnyxjUjWl4mKgx2ZrNayWylMihOee%2BFP6rSeo%2BI%2FfkQly31ZIG2dn3NkhnGdDjDc2TxLsiN755mNyRU2FohfYrLNY5hHiF8qxFfIFFUxB479lnu5wFC72D4I7YDs8eeEx1lsS7A%2F8dXAP9E1If6BPOcssYyD9FWZ4VJ1%2F9UVUPnNQuuk17rvVOBuMuy8uMspZDYJkGj4hnEGs%2FxOfZpd3ffWv9QW7OUJJaYo0U%2FYzxrrXHKZYjB9%2BieLQ%2FibcUt03n5sJNS9E7UumHrDSSH8wcYJq260RSp6AebDHmTc1Z9qzDvfnCZ9Ub1LajGtiz71aVfa%2FMV48ICSliAyWvEY5fYgh8J4PyRa8jBwMzYbxXe8v0SxEBvgOgW6wQmwrD%2Ba%2FbcqNa0WQE6%2BuHIWjSOXYiSxZo%2FjhvhQLjf0Sh2QIf3Poe8ihj%2B4wAKOJJ3SF2hUIvzxXk1CsjBoJfxrncm9Al0i6naEIGeFCZQuEkb81hgzzxF5EItoLKVnfj53fAJeNDyL2dmLAggQDCi5NvJBjqkAXRgx%2FJ%2FkpODe%2F5mEN7iN%2Bve4VCIG4N7QOYZkxNmEyCJ8imbfzifELVb05v88hSoNzzdLMJ5v9Bt9O2nBtq7Lcgt%2BfWxz620BbXZep0ZnfWCMhm%2BQ2ZC%2FcEd0Ha1WarnCIX63S%2B0fjnf9QtSycE4e%2FoRxho12NCpJ4LUVdetUI5r7Lt2pPzSuqLl4WTjdx7M0HYWqex1GnAxYOhQMS4f9PNMJkX%2B&X-Amz-Signature=8ade054bb9adc4a82612af9c925d0a65f390f5475f53c6a093872b3cb840c6ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

