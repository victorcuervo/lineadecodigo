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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U36CK26P%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC50Ggw4iDbQV3CARl3TODIqptEBJzitmWt%2FWFQ3ATMGQIhAJiJpPIKIN7g8YfwU5pS33DtWy0X0BbdgFJwXBXJ%2FuilKv8DCC4QABoMNjM3NDIzMTgzODA1IgwQSVIf%2Fd2r6H%2FBu2kq3AO%2FaA6MZzpfoQAHES2thC9cvJafd72oigJZ5QjxAd%2BTy4eOnEsLVLNsoQNykDuBGLViKTaVp6ohg7b%2FcOkB1LNYn%2F5lPhY2pfoNBxtyRcZ04UAlsohcfbJ4GvP5EpCMVG0PSNm3QrSGC4cXTXnNy5hwrTr%2BQ7KDRGNtXdyNQmSLmmRgk5iyFlTD1%2FNGyhDJtbBd%2FH2iOhdirQ%2B%2B%2FCLmKh1YANIwyrbcD7hSbe2fuy0X1yWhsjFmUfXAiahCQJOAh94hG2KZtcn2YY%2B6tHxMK%2FPvt1pffx16Zod1j8ZtkzC3CTnwUc3leVKOvG%2Bi4r2Q8y956jNGvDCOOpvYwiBMra6Nc%2Bl%2Fn%2BZ4H2KR73FSYjBTRD6H8zDba7kf%2BikHehxFlQ%2FywY%2B3TsYXtUNG1WsQVmUMro%2FuAjJUbPtHj7KuIOz3z19s54UTijt3MORDEFXpZv5CsAjT5bJh8I4jknCD9dL8DrX%2FHPkbTd0lPU0bffYAJIZ4uB3i1qs8RlHYnXvF1UHtgRKDiOPaqArcFzL4z6wExT4mR3VdSdgQZtQ%2FSvCKxPsjsaSZAv4y1sxk4nh15H1YELg0fEW5%2B373xRedjxY%2Ferx390lBk6D5OzDXGn3gWzjBaJYJoca00TlPXjDQ6cDJBjqkAQ%2B3mbWI0w0EbSOjZLKui0xUZJ6UZMg3u3nxyUArEm6vYDVE3btbdIsBLuaiwc9kfmRhBFSInTmZbMafo3r%2BbpguqKRBpepKgf%2BJfNX9dHqtSGiOARwhq7nkgkSaWvo7bR1DZOvDlruTcGcT6EYyZhNMGMhVNJkoUX8%2FlafzwdS%2Fpmf7RWBy%2Fw59NxOcxc%2BskquBy4o9ODoUQk6DwSwDEveFWGGT&X-Amz-Signature=5f9f26bed899c9e4cbbeec4e450164b381d241133e9652b29e95026d3e546ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U36CK26P%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQC50Ggw4iDbQV3CARl3TODIqptEBJzitmWt%2FWFQ3ATMGQIhAJiJpPIKIN7g8YfwU5pS33DtWy0X0BbdgFJwXBXJ%2FuilKv8DCC4QABoMNjM3NDIzMTgzODA1IgwQSVIf%2Fd2r6H%2FBu2kq3AO%2FaA6MZzpfoQAHES2thC9cvJafd72oigJZ5QjxAd%2BTy4eOnEsLVLNsoQNykDuBGLViKTaVp6ohg7b%2FcOkB1LNYn%2F5lPhY2pfoNBxtyRcZ04UAlsohcfbJ4GvP5EpCMVG0PSNm3QrSGC4cXTXnNy5hwrTr%2BQ7KDRGNtXdyNQmSLmmRgk5iyFlTD1%2FNGyhDJtbBd%2FH2iOhdirQ%2B%2B%2FCLmKh1YANIwyrbcD7hSbe2fuy0X1yWhsjFmUfXAiahCQJOAh94hG2KZtcn2YY%2B6tHxMK%2FPvt1pffx16Zod1j8ZtkzC3CTnwUc3leVKOvG%2Bi4r2Q8y956jNGvDCOOpvYwiBMra6Nc%2Bl%2Fn%2BZ4H2KR73FSYjBTRD6H8zDba7kf%2BikHehxFlQ%2FywY%2B3TsYXtUNG1WsQVmUMro%2FuAjJUbPtHj7KuIOz3z19s54UTijt3MORDEFXpZv5CsAjT5bJh8I4jknCD9dL8DrX%2FHPkbTd0lPU0bffYAJIZ4uB3i1qs8RlHYnXvF1UHtgRKDiOPaqArcFzL4z6wExT4mR3VdSdgQZtQ%2FSvCKxPsjsaSZAv4y1sxk4nh15H1YELg0fEW5%2B373xRedjxY%2Ferx390lBk6D5OzDXGn3gWzjBaJYJoca00TlPXjDQ6cDJBjqkAQ%2B3mbWI0w0EbSOjZLKui0xUZJ6UZMg3u3nxyUArEm6vYDVE3btbdIsBLuaiwc9kfmRhBFSInTmZbMafo3r%2BbpguqKRBpepKgf%2BJfNX9dHqtSGiOARwhq7nkgkSaWvo7bR1DZOvDlruTcGcT6EYyZhNMGMhVNJkoUX8%2FlafzwdS%2Fpmf7RWBy%2Fw59NxOcxc%2BskquBy4o9ODoUQk6DwSwDEveFWGGT&X-Amz-Signature=8fae4e3747c647bc9336822e13dd919b8df684bb37381274c4c86c324f2b153a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

