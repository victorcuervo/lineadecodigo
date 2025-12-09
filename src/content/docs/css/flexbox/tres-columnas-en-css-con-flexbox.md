---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLBNI3P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAAvvYW7xqHd01LFWiO9qaZOk0zTF0ATwbb8TKGNMb7QIge2%2Bq93olaPo30fe8iBtfUpq8RcnoYtkfWUr5AzV3g14qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAdgGQ0mx%2Bg%2B5%2FAzSrcAyIciJ2Om2Cb%2BdgNjel3SwIeEgNmbTJMeLZd%2Fj9kynvYxy5l6347yNOrtMFgFEXDu9RGGf4%2F65ydVkWjsnoq0cv2WXHpLyWu2ufeQo3h0UnN8FF0TDcHtRGBQBkQ2iuEfv7ZRy9fT6vEcXKyg27DDH8ZwFesfLMZzduCzeaUAePHfUIn%2Fym5d%2FoCJFqMHbe3tSevraZ3NPTEX8C2XsDNj%2Br6MJ%2F%2FXZ8z3UHXoWNJjFj1SXOnpqtO%2B6fIeOTo5lkt0BA6KJ%2Fql84xIUc%2B9x63HJgvleCQOo8f2ft3R7Zfnnq7XpfGA28XrimEKJlOb8tylawsvbnyN95qc%2FZczl4KlWEy1mOZcctPjxr2qq7AlxbIDpoEmhBUxarSBGojIMsM60NcO0QJEHzLaZjgHIUCO1LmYbNJ%2FOKKYdDyt7Uo5mnlmG%2FiyFzNba7abZJOfnWGWk2kYc4XR7rVDhlAq9QhlbeAz%2FlUgCylmLsa8E%2FBRTv1PQws7V5WBRq%2FBdqNmX8Xo4ytWhfh1kKoW%2BO7W7BEmBeL3%2BG5rppFIw6VSswwHs%2BGde%2FUQau38tIHRSZuBSRXWJIYaSgnYbTluZGhdrQ5pkcBZWTumPr4MukXVD2iG%2FKMfvIegkwiIMAEcXg6MKjC3ckGOqUBh5%2Bdpd%2BSAxCBO1nY2k4oWHe1S5B0bOPj%2BJ%2FkxgL4pzOc9SO7VdS5bvOizcPx0VOcl8Pd1Jb09z3v0kFunyHT5VU2EqBjILb%2BqVESTFTVAOQRxpJT0b5PeR5%2FnAiv1%2FmIn3EFDs9Oc1hPgDNBgaFJ3K%2FnDflWv5jOxFULm2aiXmFl7ujzBXQOwys4r5dFCKPeLP9lN%2Bc%2BP%2FDSq4hrdRQWb%2FfC3bfy&X-Amz-Signature=34768630194e72c1dd018e2f9a339450d28e6883c0d2ceecb7b168288577a05b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RLBNI3P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T002149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAAvvYW7xqHd01LFWiO9qaZOk0zTF0ATwbb8TKGNMb7QIge2%2Bq93olaPo30fe8iBtfUpq8RcnoYtkfWUr5AzV3g14qiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHAdgGQ0mx%2Bg%2B5%2FAzSrcAyIciJ2Om2Cb%2BdgNjel3SwIeEgNmbTJMeLZd%2Fj9kynvYxy5l6347yNOrtMFgFEXDu9RGGf4%2F65ydVkWjsnoq0cv2WXHpLyWu2ufeQo3h0UnN8FF0TDcHtRGBQBkQ2iuEfv7ZRy9fT6vEcXKyg27DDH8ZwFesfLMZzduCzeaUAePHfUIn%2Fym5d%2FoCJFqMHbe3tSevraZ3NPTEX8C2XsDNj%2Br6MJ%2F%2FXZ8z3UHXoWNJjFj1SXOnpqtO%2B6fIeOTo5lkt0BA6KJ%2Fql84xIUc%2B9x63HJgvleCQOo8f2ft3R7Zfnnq7XpfGA28XrimEKJlOb8tylawsvbnyN95qc%2FZczl4KlWEy1mOZcctPjxr2qq7AlxbIDpoEmhBUxarSBGojIMsM60NcO0QJEHzLaZjgHIUCO1LmYbNJ%2FOKKYdDyt7Uo5mnlmG%2FiyFzNba7abZJOfnWGWk2kYc4XR7rVDhlAq9QhlbeAz%2FlUgCylmLsa8E%2FBRTv1PQws7V5WBRq%2FBdqNmX8Xo4ytWhfh1kKoW%2BO7W7BEmBeL3%2BG5rppFIw6VSswwHs%2BGde%2FUQau38tIHRSZuBSRXWJIYaSgnYbTluZGhdrQ5pkcBZWTumPr4MukXVD2iG%2FKMfvIegkwiIMAEcXg6MKjC3ckGOqUBh5%2Bdpd%2BSAxCBO1nY2k4oWHe1S5B0bOPj%2BJ%2FkxgL4pzOc9SO7VdS5bvOizcPx0VOcl8Pd1Jb09z3v0kFunyHT5VU2EqBjILb%2BqVESTFTVAOQRxpJT0b5PeR5%2FnAiv1%2FmIn3EFDs9Oc1hPgDNBgaFJ3K%2FnDflWv5jOxFULm2aiXmFl7ujzBXQOwys4r5dFCKPeLP9lN%2Bc%2BP%2FDSq4hrdRQWb%2FfC3bfy&X-Amz-Signature=8c0179acceeb5fc268c2176aa811a33574afe31e2492afb954ac4c60cc0c48de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

