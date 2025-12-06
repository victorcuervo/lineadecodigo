---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDI55PO6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbbB7vgwfEjSmb2q0BvFnTp905PI%2BKZOLpcJjjYKnRsgIgdtB%2FGxUOk0cpxySJnoP2PWfQMPJHyRVtWxPt1mNIsQMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPYOHYVHhsR%2F8lLp0CrcA7lBqWPAIFXfMp9uc6vuzd4i5qcnsjX9nwFmARGpZovazBoi4YjHNtDDHO7Ubpk7Z5Z4FtDrc%2FVepuV9TgkqwDgTK8Q5yjZKZEzpMktQ5WOrale6xIWPy%2FNYYeN47RCdMzFItBQtVvkOvrwNyyCnPTXcnu5%2BKSrN3YAfeetgE5r4dvjl0ObrHJ47vAJa5NTnGZn4YmwTsOou9pNoN%2FNBl%2FR75l%2BdZcJ%2FSXT4yw%2F6icT3mcfr0npkzDKJ8NZY%2BLIKrRZG5XwHQIT0AKQjw3d%2B3OE5XCICUVGJQKpzbQJ95dxqbD3vVBfgOLAS8qc6D6rZ7Zxu3xpA48Xv4RYr5e99ol2i3pHCUAW5mPyl1%2BRn4OYjMHHdu%2Fwl0qiYV9Gvs9rWKCLNc1CVjo3uUrq5lij1GSAJhmd5FkV4WJb70R45GL%2FQ7O03U1VwL2eTiJRz1cJaXIFYyAlfW%2FXrRkZE%2Fpbx61UMsPNqhy%2FW5%2BYH7D7y2BCKJWUUNNlOND5h42EBXY8aoBLmjoYme8NXmMf803D7sYrIMQLp93bxBmi0hYvK3jaRYfH0JbMzWIsWdeBbK%2BWYMwwwh8ZEcliuMzvbQMUn%2FE%2F2IESoBlvrvedvQ8T38DaaAjaoSYb1M%2FcBEqtuMKGnzskGOqUBa6H4d6wT%2FtFAT%2BoleE5rn%2F2uZw9Ouna8MaywpZRuhsd%2F9nXeMjW7XqYw5I49mgL9JWp3Fv6L1qoEtONLOx5PVLwrgAc%2F%2BIXyAsLtOS5Mu5zFqN%2BM4f3T1gqIbpnFRx4pAkRzPdAul5dExTK34z3laYBwkS04hda11mbs6FIlskOxsfaiw5V13mH510gmBJxiN8brk62YMeC4vSmmp1itnLhnXkml&X-Amz-Signature=e487dbfbc662301ef03267ff956609fb6d3233ed540e21721d43631f1588701b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDI55PO6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T025520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbbB7vgwfEjSmb2q0BvFnTp905PI%2BKZOLpcJjjYKnRsgIgdtB%2FGxUOk0cpxySJnoP2PWfQMPJHyRVtWxPt1mNIsQMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPYOHYVHhsR%2F8lLp0CrcA7lBqWPAIFXfMp9uc6vuzd4i5qcnsjX9nwFmARGpZovazBoi4YjHNtDDHO7Ubpk7Z5Z4FtDrc%2FVepuV9TgkqwDgTK8Q5yjZKZEzpMktQ5WOrale6xIWPy%2FNYYeN47RCdMzFItBQtVvkOvrwNyyCnPTXcnu5%2BKSrN3YAfeetgE5r4dvjl0ObrHJ47vAJa5NTnGZn4YmwTsOou9pNoN%2FNBl%2FR75l%2BdZcJ%2FSXT4yw%2F6icT3mcfr0npkzDKJ8NZY%2BLIKrRZG5XwHQIT0AKQjw3d%2B3OE5XCICUVGJQKpzbQJ95dxqbD3vVBfgOLAS8qc6D6rZ7Zxu3xpA48Xv4RYr5e99ol2i3pHCUAW5mPyl1%2BRn4OYjMHHdu%2Fwl0qiYV9Gvs9rWKCLNc1CVjo3uUrq5lij1GSAJhmd5FkV4WJb70R45GL%2FQ7O03U1VwL2eTiJRz1cJaXIFYyAlfW%2FXrRkZE%2Fpbx61UMsPNqhy%2FW5%2BYH7D7y2BCKJWUUNNlOND5h42EBXY8aoBLmjoYme8NXmMf803D7sYrIMQLp93bxBmi0hYvK3jaRYfH0JbMzWIsWdeBbK%2BWYMwwwh8ZEcliuMzvbQMUn%2FE%2F2IESoBlvrvedvQ8T38DaaAjaoSYb1M%2FcBEqtuMKGnzskGOqUBa6H4d6wT%2FtFAT%2BoleE5rn%2F2uZw9Ouna8MaywpZRuhsd%2F9nXeMjW7XqYw5I49mgL9JWp3Fv6L1qoEtONLOx5PVLwrgAc%2F%2BIXyAsLtOS5Mu5zFqN%2BM4f3T1gqIbpnFRx4pAkRzPdAul5dExTK34z3laYBwkS04hda11mbs6FIlskOxsfaiw5V13mH510gmBJxiN8brk62YMeC4vSmmp1itnLhnXkml&X-Amz-Signature=f31286ac4d05bf5621ba1b71e4100e54f7c5c21fadcf30049eccd0d44a1fca9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

