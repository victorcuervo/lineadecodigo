---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP7HI6X5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC42oc1j6wknSTavrxv9mB2oNJVZm2fD5MtrUvIqc6t9wIgWWon%2F9pgEzQX8zY9sgcJPxT28NqGNtk5LBxg8V%2FrFqMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP7PqAJ1RIXYOf9QqSrcAztWqPb8DgQg7CtXtNSx%2FXR%2FNNgTs%2FHJlyGs3UICVXWvAJMDwmuwXPQKd9DeJVSm0K683PAtmXUtU7IN26KxdvF22ghGyGjrvlvkiCS5vt5VhWfBAXp%2B7KidLaj3Lsu6oeD3blhxooDmGeaLAac85Gs2Y3cT62eRR4OL%2FZKXY%2FlWiV4dJ7g5jOTMMDgDuWrEfoyzXtIVlA5Ozo4Z1xqRm4llIzno0OvfIxcECD7M6xth7%2By%2BN2VVAdaGne07R%2FOI6wljGP%2BglvalD26V0%2BQOlT1t305vSe7eUnyz17UIPtQvWMbHqQt2ZNKiPegiQ48%2FWiiKLMutzfT%2BuOHAvkhoYU%2BsQqtiNvoCQLblligImq4%2FfHMq0cwtSyJf9yMrKm9cMU%2FzAXUqadQ2prM2TeVM10neD4cSF5PpRt4kmrrKCQqrCBQC8BbHltxeUdiV7sB%2BRZ4i5Su54lE8AHrGfFlA2i8nFzfGuWMkroSldFlN%2B9Qitc9nMXnVTOJpP1zzU9QNGpvdPLvvQxEudSKxKjghq1fr1a6DgW2BpYIjYOOhfb%2BbzWcoxx8V3%2FPnnGLo778%2BGe1HQ%2F9YcICqUpTjR5HIdwigj%2FKcWodqzht40NiVXTwL6CkQ7ehLJYqDuw0wMJPK0ckGOqUBXBAKouzfCj%2B60tb5Mg9fhOZuISA0IkV30SFeL7Nb4YjJKp%2BYZy6FecI5YYeUZA6A8bdYHHBQNy1XkmMGZpchY2MiXRAxBCWqE0LXB3BZ5gwpKDHZXatYyFawdbBX7C3DUOpGAPipEUIW%2BODUZgvO5IFnFvHfblMVvkNhfMCsHGZYXy8olQ%2B6pEiB20ov3NSieXUYEufFz%2BPEC5yv%2BG5iy65D1cb3&X-Amz-Signature=061d3880f31585c40590f3363c41e17cd1c37de2ca41b2f396945d713182695e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SP7HI6X5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T212749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC42oc1j6wknSTavrxv9mB2oNJVZm2fD5MtrUvIqc6t9wIgWWon%2F9pgEzQX8zY9sgcJPxT28NqGNtk5LBxg8V%2FrFqMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDP7PqAJ1RIXYOf9QqSrcAztWqPb8DgQg7CtXtNSx%2FXR%2FNNgTs%2FHJlyGs3UICVXWvAJMDwmuwXPQKd9DeJVSm0K683PAtmXUtU7IN26KxdvF22ghGyGjrvlvkiCS5vt5VhWfBAXp%2B7KidLaj3Lsu6oeD3blhxooDmGeaLAac85Gs2Y3cT62eRR4OL%2FZKXY%2FlWiV4dJ7g5jOTMMDgDuWrEfoyzXtIVlA5Ozo4Z1xqRm4llIzno0OvfIxcECD7M6xth7%2By%2BN2VVAdaGne07R%2FOI6wljGP%2BglvalD26V0%2BQOlT1t305vSe7eUnyz17UIPtQvWMbHqQt2ZNKiPegiQ48%2FWiiKLMutzfT%2BuOHAvkhoYU%2BsQqtiNvoCQLblligImq4%2FfHMq0cwtSyJf9yMrKm9cMU%2FzAXUqadQ2prM2TeVM10neD4cSF5PpRt4kmrrKCQqrCBQC8BbHltxeUdiV7sB%2BRZ4i5Su54lE8AHrGfFlA2i8nFzfGuWMkroSldFlN%2B9Qitc9nMXnVTOJpP1zzU9QNGpvdPLvvQxEudSKxKjghq1fr1a6DgW2BpYIjYOOhfb%2BbzWcoxx8V3%2FPnnGLo778%2BGe1HQ%2F9YcICqUpTjR5HIdwigj%2FKcWodqzht40NiVXTwL6CkQ7ehLJYqDuw0wMJPK0ckGOqUBXBAKouzfCj%2B60tb5Mg9fhOZuISA0IkV30SFeL7Nb4YjJKp%2BYZy6FecI5YYeUZA6A8bdYHHBQNy1XkmMGZpchY2MiXRAxBCWqE0LXB3BZ5gwpKDHZXatYyFawdbBX7C3DUOpGAPipEUIW%2BODUZgvO5IFnFvHfblMVvkNhfMCsHGZYXy8olQ%2B6pEiB20ov3NSieXUYEufFz%2BPEC5yv%2BG5iy65D1cb3&X-Amz-Signature=8e58a699e721408e10707cb02186c0433ca9a9e5f5a54bdc4555eb63d9b84e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

