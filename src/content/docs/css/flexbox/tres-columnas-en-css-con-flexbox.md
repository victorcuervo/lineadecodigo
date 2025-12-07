---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRBRLSQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEw1TguSjKmN82%2FJCdOLPgO6cjON0d0jSOYMx4cEAYKFAiAB2%2BLk9dwxKMUoq8EaEejQseKcdmKb3X9S9yNe7fnkqyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ6SNWqF4mHxN39V4KtwDQTdCP0ABMkVggqbLEFGgViGc1AfGVd2ekoUjMHb8dwAVDi8BBwNu6WG9aiYg8wx4jAN%2B%2F4RMLoYkWWtu6%2Bqv%2BUtwoWoIk2cmZFh3k2Z%2FxaX1TifavWfqYZSFw8UpXQCaXwWiYBcs4EDP45RB%2FfMLkL44WtMoq9WXna%2FhC0kBFFYGMNEffjPbT8q%2BgloVBJrVI04YE4F3wPHXHuMlhdiNs9Ebuuy62oMuuVc35CORHz98xwoaRWkFr79hqiHKFBBLNalGuWnzsmmf5CYtV2wMQEXP1A7wFHt0wl6yfAZhN2KESZKw0bWn2EAyznR1wCjC15OVLHb7jHlbNTzVaZh%2FXXhfbq4so%2Fve3EQswUpuxcouG6g2z2VnM0wpZKKNmfkeFPswznbMlweR1D2K81MpXY3qRUN98S%2B2vHYJMXfyUbGphQbzELVt7bSiyNlo5laIQUg0LLnm2PRJb3HndnP%2BKqkxmJD7KhZirWz%2BzLDwZaUXX56eMLH6zQIbVj7pWGsVoCddc0SZSuN8hmtbIiASRmMwJAOsIshmkkxRlZELWC14M%2BbKEHeSyF5lkPbHGiSh2i1viSN%2FSRAsXByERzeHSJdYd27rSeroO7byp8l0tBeFQ73bc3UAeui77z4w88fXyQY6pgHdhiDkNxS9yaJBmRgvFjQ71qWUj%2BulcGrGqL69IWg6%2B%2FcrkGBqSBFLQwp%2B%2FmbVlwd29sqaB0waWkav%2B0tKyPxgzafkoVa4wYlydyEuOS7jBSUdaPFqbahdc5pNf%2FCAGfH9I83oM20%2BHihU2e%2BPbStHoNYvJGtNfzcUrXOYT4E58wezMT0y%2F8bstJoHKf6YnDD0lsRcMYGFDJTX4Sj1SgmJUNxG9Ly%2F&X-Amz-Signature=db1bf203964a261b8462fdab516d3c1ca790c10ae860ec70e78df9fe0d7f4823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRBRLSQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEw1TguSjKmN82%2FJCdOLPgO6cjON0d0jSOYMx4cEAYKFAiAB2%2BLk9dwxKMUoq8EaEejQseKcdmKb3X9S9yNe7fnkqyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ6SNWqF4mHxN39V4KtwDQTdCP0ABMkVggqbLEFGgViGc1AfGVd2ekoUjMHb8dwAVDi8BBwNu6WG9aiYg8wx4jAN%2B%2F4RMLoYkWWtu6%2Bqv%2BUtwoWoIk2cmZFh3k2Z%2FxaX1TifavWfqYZSFw8UpXQCaXwWiYBcs4EDP45RB%2FfMLkL44WtMoq9WXna%2FhC0kBFFYGMNEffjPbT8q%2BgloVBJrVI04YE4F3wPHXHuMlhdiNs9Ebuuy62oMuuVc35CORHz98xwoaRWkFr79hqiHKFBBLNalGuWnzsmmf5CYtV2wMQEXP1A7wFHt0wl6yfAZhN2KESZKw0bWn2EAyznR1wCjC15OVLHb7jHlbNTzVaZh%2FXXhfbq4so%2Fve3EQswUpuxcouG6g2z2VnM0wpZKKNmfkeFPswznbMlweR1D2K81MpXY3qRUN98S%2B2vHYJMXfyUbGphQbzELVt7bSiyNlo5laIQUg0LLnm2PRJb3HndnP%2BKqkxmJD7KhZirWz%2BzLDwZaUXX56eMLH6zQIbVj7pWGsVoCddc0SZSuN8hmtbIiASRmMwJAOsIshmkkxRlZELWC14M%2BbKEHeSyF5lkPbHGiSh2i1viSN%2FSRAsXByERzeHSJdYd27rSeroO7byp8l0tBeFQ73bc3UAeui77z4w88fXyQY6pgHdhiDkNxS9yaJBmRgvFjQ71qWUj%2BulcGrGqL69IWg6%2B%2FcrkGBqSBFLQwp%2B%2FmbVlwd29sqaB0waWkav%2B0tKyPxgzafkoVa4wYlydyEuOS7jBSUdaPFqbahdc5pNf%2FCAGfH9I83oM20%2BHihU2e%2BPbStHoNYvJGtNfzcUrXOYT4E58wezMT0y%2F8bstJoHKf6YnDD0lsRcMYGFDJTX4Sj1SgmJUNxG9Ly%2F&X-Amz-Signature=4ae493d7bf0da389aa77257af070ae9649f225d9afdd5272f63d4ce49a7de61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

