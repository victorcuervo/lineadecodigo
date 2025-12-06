---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYE63IO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPvRGQY6I1GYsQczAD%2FRwVydHcS%2FxwziPBl2KLuM1IDAIgVaJXE88lLjFdJOSWiM8jSTwm8iBcSnyDW5Gs1qkQz8Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMlaMr%2BoYqQ%2F0LEntyrcA%2BCFnP6qvO6CgrK9zq%2BO9dirAqK%2Fh%2F5Dula1gKebf9Ga32Y4LhSqgt%2FmlIxp6Z6F5LxzcTqQ%2BikChgBVlpUQvRXiHqycl4iY85o4LjKrr%2BhaSvqknj5tJEQWeIUDNgleFCboP8WMsGL0YXjfhcOcTc7p0iP0uzjbg4y1g%2BgwuXPP3x6dSnEOAhOq%2BAPsKot6e38ds32tBPzGMZAfJA2xPPWfQNXWi3CKVoKy0a1WbjLm%2BTDIm61TRqfVW4RBjO2oPtR3QbErFzHRf6Ce%2B2WNUPOK3YWEB%2B3g2tcChpcsIDs9nBJVtphudYIV%2FhCKaao%2B%2BtkDuqYkYOfo9B7aKk%2BdJAWXHkL%2FMKMGMq%2F46Djnv1h%2F%2BLNuEthpPj%2BS6xYW2sDR2BBn9XP14yWLMKut4ZF%2BfYXyRYyLJmEMj9sV0Uhh7vb967VlUw3A8pd0jJkILU%2FLy7vRWDGZ38A46sN4Lcnz4mKDMfTBQn3rn%2F%2FKU8D2mr89ZMXNvERDzlVgXrvGsZbOVsD5hF%2BYUqtTbYH2Cl%2Ff1KjgF%2FhDfTguDgWvLW6RlWzd5XSncmJcq8tQUA0wATUqT7kgaLqktIR06ix9nrs%2B4PBTKk2HaJOt6daJY%2Fu7RU5ZPUNvyfCPq8N8vS6lMNCm0MkGOqUBB08BGkxBy9y%2BJ69PlKGF%2BMVNqvgXAQXi7WaY3QZpuiI8XApxVUy09sYU7kdjDPGUZZMDY2ceZxFzg2UQmxDE5%2B182zCpVpNtai6gZhegFivP%2FTrEHTd8L8eoUscGCNFrDlk%2FgNIo5Tsw7VdUM9f1EOyeCTlK1HRRRgZBId1e0l6bqNSDXGedP5rUV0pJm5wiTZlu0w30jmuG%2Bv0a8djYs0fteXpj&X-Amz-Signature=7533466cb6bfcd84771d61bcb1d212f94c2df71aa37ac03d99932dd264579629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYE63IO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPvRGQY6I1GYsQczAD%2FRwVydHcS%2FxwziPBl2KLuM1IDAIgVaJXE88lLjFdJOSWiM8jSTwm8iBcSnyDW5Gs1qkQz8Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMlaMr%2BoYqQ%2F0LEntyrcA%2BCFnP6qvO6CgrK9zq%2BO9dirAqK%2Fh%2F5Dula1gKebf9Ga32Y4LhSqgt%2FmlIxp6Z6F5LxzcTqQ%2BikChgBVlpUQvRXiHqycl4iY85o4LjKrr%2BhaSvqknj5tJEQWeIUDNgleFCboP8WMsGL0YXjfhcOcTc7p0iP0uzjbg4y1g%2BgwuXPP3x6dSnEOAhOq%2BAPsKot6e38ds32tBPzGMZAfJA2xPPWfQNXWi3CKVoKy0a1WbjLm%2BTDIm61TRqfVW4RBjO2oPtR3QbErFzHRf6Ce%2B2WNUPOK3YWEB%2B3g2tcChpcsIDs9nBJVtphudYIV%2FhCKaao%2B%2BtkDuqYkYOfo9B7aKk%2BdJAWXHkL%2FMKMGMq%2F46Djnv1h%2F%2BLNuEthpPj%2BS6xYW2sDR2BBn9XP14yWLMKut4ZF%2BfYXyRYyLJmEMj9sV0Uhh7vb967VlUw3A8pd0jJkILU%2FLy7vRWDGZ38A46sN4Lcnz4mKDMfTBQn3rn%2F%2FKU8D2mr89ZMXNvERDzlVgXrvGsZbOVsD5hF%2BYUqtTbYH2Cl%2Ff1KjgF%2FhDfTguDgWvLW6RlWzd5XSncmJcq8tQUA0wATUqT7kgaLqktIR06ix9nrs%2B4PBTKk2HaJOt6daJY%2Fu7RU5ZPUNvyfCPq8N8vS6lMNCm0MkGOqUBB08BGkxBy9y%2BJ69PlKGF%2BMVNqvgXAQXi7WaY3QZpuiI8XApxVUy09sYU7kdjDPGUZZMDY2ceZxFzg2UQmxDE5%2B182zCpVpNtai6gZhegFivP%2FTrEHTd8L8eoUscGCNFrDlk%2FgNIo5Tsw7VdUM9f1EOyeCTlK1HRRRgZBId1e0l6bqNSDXGedP5rUV0pJm5wiTZlu0w30jmuG%2Bv0a8djYs0fteXpj&X-Amz-Signature=a8902f6b278c06944ad707ede70a4cd430bb82f1d0eb3104ffd82f73453653c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

