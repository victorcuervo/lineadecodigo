---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBLIL74%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDUvTi6qX%2B8V2oMUNVYKkUapa4q2L165ASKlPJSN%2FaSGgIhAM2Irx6oZqR65iOmPrAcXphExtn8wlyK0D2hCGG3tRL3Kv8DCDsQABoMNjM3NDIzMTgzODA1Igx5mVCDL4YAJ366wAAq3AOJDH00cgv2ZIa3q1HzIEsB%2FXdjVq8%2BHiDYPT7tgqhBywhiDB77iCnV7xO5yQo1o2V2i0cA3SKCK7rUMvVkHsYw%2B3sRBd9XL7UH5xC7hTT1chgbSSqqzPhWQoTihvXSt%2F6gUIW%2B5DLcQIl5RAPLQX1rVQ6H3yFt%2F0e4XC6RX%2B6FwnTj2yo2%2B7qq7LADPBEEDTfF1Ove%2FL95lKZxdVHN7rQAVzjf3MFKFevHejXIJZMdMKJ1%2Fms2HQOJ%2F114ldcDOoL1x9BEfrQW4iiFHYCvP4UGxjZi3Ibt8fycotSH%2BlI%2FJad0bfqCObi3CbOAO713i9bHWCERLqYwX2lf7ZRP4D1T61Y99hYXyfqZsJcv4RWs9hQcOKbBUCMWCffmVn%2BguzAkzsl3VA2nLt%2BMbzkg4urGnY0NkqL75PwLTJN%2FNcxwnPHVaX00lKaJr6E6KtRh%2FKHpGOw5MezrWbIktyqXkSiuBkI1sHejdiKci8w8aGgL6VS%2BAYgSnTfjmGZpFUyGo1n8EOycf0cDIoJUXnRYW55YPYWIu8m2ROtujv4GdxdFjFouIZNcRSbbcWfC1c8co3U0i11hxME6qSpcWYwVpup%2BHo2VKOhG6GU1oxYgaOOlJOtl7WyyFXO4BbGWWzC%2F1MPJBjqkASBqgHn0cg7CkKApdCtt5gVAHYh4pzbDbFMVvpzYC%2BdsW4hI%2FNBnL2RSDcHDawVaZp1hUxkw147b5M7q8%2FVFK0cokJfd0FN3aX2dxeR7xMNsRgIQvMhQEQ2hJ4Z1G%2FekLvcpQbnFGeCivKVVcDGMiIoaIopoQjQwgxjviG7QAamPP1VFlO31R649DAAeFfWZ2rWTAGJeI4LTVhAfNxWrAEz39Fgk&X-Amz-Signature=ac9d107f0262815499bbd149d36b80d137ffb53bcb573617688d4dae80bcb733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFBLIL74%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDUvTi6qX%2B8V2oMUNVYKkUapa4q2L165ASKlPJSN%2FaSGgIhAM2Irx6oZqR65iOmPrAcXphExtn8wlyK0D2hCGG3tRL3Kv8DCDsQABoMNjM3NDIzMTgzODA1Igx5mVCDL4YAJ366wAAq3AOJDH00cgv2ZIa3q1HzIEsB%2FXdjVq8%2BHiDYPT7tgqhBywhiDB77iCnV7xO5yQo1o2V2i0cA3SKCK7rUMvVkHsYw%2B3sRBd9XL7UH5xC7hTT1chgbSSqqzPhWQoTihvXSt%2F6gUIW%2B5DLcQIl5RAPLQX1rVQ6H3yFt%2F0e4XC6RX%2B6FwnTj2yo2%2B7qq7LADPBEEDTfF1Ove%2FL95lKZxdVHN7rQAVzjf3MFKFevHejXIJZMdMKJ1%2Fms2HQOJ%2F114ldcDOoL1x9BEfrQW4iiFHYCvP4UGxjZi3Ibt8fycotSH%2BlI%2FJad0bfqCObi3CbOAO713i9bHWCERLqYwX2lf7ZRP4D1T61Y99hYXyfqZsJcv4RWs9hQcOKbBUCMWCffmVn%2BguzAkzsl3VA2nLt%2BMbzkg4urGnY0NkqL75PwLTJN%2FNcxwnPHVaX00lKaJr6E6KtRh%2FKHpGOw5MezrWbIktyqXkSiuBkI1sHejdiKci8w8aGgL6VS%2BAYgSnTfjmGZpFUyGo1n8EOycf0cDIoJUXnRYW55YPYWIu8m2ROtujv4GdxdFjFouIZNcRSbbcWfC1c8co3U0i11hxME6qSpcWYwVpup%2BHo2VKOhG6GU1oxYgaOOlJOtl7WyyFXO4BbGWWzC%2F1MPJBjqkASBqgHn0cg7CkKApdCtt5gVAHYh4pzbDbFMVvpzYC%2BdsW4hI%2FNBnL2RSDcHDawVaZp1hUxkw147b5M7q8%2FVFK0cokJfd0FN3aX2dxeR7xMNsRgIQvMhQEQ2hJ4Z1G%2FekLvcpQbnFGeCivKVVcDGMiIoaIopoQjQwgxjviG7QAamPP1VFlO31R649DAAeFfWZ2rWTAGJeI4LTVhAfNxWrAEz39Fgk&X-Amz-Signature=632143413dcb50bc3a0ae23cc18769fb10d3746584e39e578e10819af5006a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

