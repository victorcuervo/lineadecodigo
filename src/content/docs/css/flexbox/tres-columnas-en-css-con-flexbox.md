---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICN2RSL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVK%2BDOKAYRoED7Ib2qLKwXwbDuF%2FfWjoDfH14gCnv18AiEA%2Bn8TvimyQYK4X3I1TfN8b30HEb4ZU3KcmCttDBNhQEAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIrwNnf3OCJrlBQJESrcA4PZtEtXX7S729SRsFjMTph%2FnGy7HuNUyDt5wxWrUhJy5QR%2BSLIxItEIgUgQc17jelt5b7G9%2FxGMXea3zD0EDk1kVLt8fhOA7rRycGskkljEPihOORRrwehKcxPVUiuJPmam8qJS17RCFwFdH5rC3jrtkBQQ33kRr3D0MLlcwELtTO4D7Zppe5QSCsr5K8FakeDLwa%2BUTXRJYsPOpyeDzVILr8eY3v7JpdjFrQuQw9WVhSdQG4%2FucEAMcwc3bi5OdncvkF%2FfBEGH5GHmHJq%2B3yNtYu7wJJSmGesIjVBbk487Ef2qLG3pfWl8Xlw5f0spLyNoOfUEA%2BxWbpBSzb7KnvWYEsffz2y3duRfSXamA1BtVUPi5KngCfVrV5jC9esacM23drTpyij14QJfCun5z6wSpyF5gFUbK0rxpfglXChVKQZwEUxFbHhMXhZX4OXZwwkk4kr5QPnbZEWqhDniKDlxesdewjAIfQjlWXWYZ%2F9%2Bvykbo0opbZ%2BKIVTFaeddEYfFiji4Gj3SZLTYA7BubrWPf2aSff9g77%2FvAbUsfISZ%2FzZbQdi1QPOcXvBW4OhuLKBux%2Fbn3UpUGgA0XeSTBmGBBYYBLuIhn9oksVvHZPVUVuz7g3eoZfO5a8xpMPfpy8kGOqUBb4oLrSEsTQSYIYfVAia%2FYc1mfmf5a%2BoaFqHUJWjcWNfyqpcT1hGycwfPNcQa%2B%2BWBKXmdbbt4du11LynFs8aB7y4q4EZ30HRQuOycrjGnd%2BKRQN5lS4i6gTwQLzpDUEpGZ0ujcodkNlq0od151Lsth8hRoKbAGKMHtiqsrYT%2FyjLQBhoDN9XaEENEm04%2BzLOfHotFUke97fViXOnkRoLvv%2B2wbVFI&X-Amz-Signature=5f384bc0c6387f5615b671bc1c3e2a283fed67f66112532088ccc96f6fed8a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICN2RSL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBVK%2BDOKAYRoED7Ib2qLKwXwbDuF%2FfWjoDfH14gCnv18AiEA%2Bn8TvimyQYK4X3I1TfN8b30HEb4ZU3KcmCttDBNhQEAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIrwNnf3OCJrlBQJESrcA4PZtEtXX7S729SRsFjMTph%2FnGy7HuNUyDt5wxWrUhJy5QR%2BSLIxItEIgUgQc17jelt5b7G9%2FxGMXea3zD0EDk1kVLt8fhOA7rRycGskkljEPihOORRrwehKcxPVUiuJPmam8qJS17RCFwFdH5rC3jrtkBQQ33kRr3D0MLlcwELtTO4D7Zppe5QSCsr5K8FakeDLwa%2BUTXRJYsPOpyeDzVILr8eY3v7JpdjFrQuQw9WVhSdQG4%2FucEAMcwc3bi5OdncvkF%2FfBEGH5GHmHJq%2B3yNtYu7wJJSmGesIjVBbk487Ef2qLG3pfWl8Xlw5f0spLyNoOfUEA%2BxWbpBSzb7KnvWYEsffz2y3duRfSXamA1BtVUPi5KngCfVrV5jC9esacM23drTpyij14QJfCun5z6wSpyF5gFUbK0rxpfglXChVKQZwEUxFbHhMXhZX4OXZwwkk4kr5QPnbZEWqhDniKDlxesdewjAIfQjlWXWYZ%2F9%2Bvykbo0opbZ%2BKIVTFaeddEYfFiji4Gj3SZLTYA7BubrWPf2aSff9g77%2FvAbUsfISZ%2FzZbQdi1QPOcXvBW4OhuLKBux%2Fbn3UpUGgA0XeSTBmGBBYYBLuIhn9oksVvHZPVUVuz7g3eoZfO5a8xpMPfpy8kGOqUBb4oLrSEsTQSYIYfVAia%2FYc1mfmf5a%2BoaFqHUJWjcWNfyqpcT1hGycwfPNcQa%2B%2BWBKXmdbbt4du11LynFs8aB7y4q4EZ30HRQuOycrjGnd%2BKRQN5lS4i6gTwQLzpDUEpGZ0ujcodkNlq0od151Lsth8hRoKbAGKMHtiqsrYT%2FyjLQBhoDN9XaEENEm04%2BzLOfHotFUke97fViXOnkRoLvv%2B2wbVFI&X-Amz-Signature=08e0f8149529360b0e9e92ef88d22d2ab82bc32874ec2945db049225dc441a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

