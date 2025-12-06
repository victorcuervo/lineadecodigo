---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2UHYQE6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCRrJy%2BHmO6ggCquukIcYzUHPwgQjHmM%2BnzxLvYUKZAIgCmk1CTpOvoy%2FPOUDq6FUtRiZZAnBbKo1TIFza7U1L7Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJLbfQhhMMPENubvhSrcA6ZOS%2FvnwycwzI7eXR%2FpyAaEkrSGjaxipQNuYE%2F8qxskO1mYwcTuIxMYYz53%2BVIDajdBzR%2FURgCL1gSRGV27G03lxLIX6RpgwUbSsRaoS%2FVsMtxWe8T9ke6BGVRcTkXfjULvdQaCR0%2FkL93S6k%2FZnp%2Bkb9MgssToXkLX7t69XgkxPL0FrtNcCCbj0KoammoJcafs3N6cl%2FBe157%2BonAf6DIJIfebbetjkg6szDjuXRemqvE26UbnBTsKaXxspeUTTQXnwakWoT3rFe2cfDideDYK8NIWrjK2Anz2KwZJfaXd6G8dgz2QBHal%2BwfdBLvAb8R2AgfsXxh6%2Bug1lI9ojyzYNQdbjJGg2XtRngFSHU9W3ryZPBuTth%2FMoPZO3%2FtRsWKghv68WG6VDLgx5EClEmHy7L3YVi2w88rOdQTdZCwxxY8TcSALKt0GjIXw%2F1tVA34aN8m31I7v1ODfoLmHc7MahkKyBD5dwumj5miHaIyJT%2BgHHO2f3Mn2TcPeq37SyWdJPrkAXShoZYcn0ddzzFaKM2AnOn4udtSASNY1OQ1Lg%2BKvU3jFD5b%2BzNrcyLFLXTuOsnN37hW7Sm2RIco0Se5dKNHjNpUuTNyQr0P3DJNNI%2Bmtn0od0e%2FxDfL%2FMKWm0MkGOqUB%2BDhomnjvqRtBZ56YlBRlOJNKqRu1LCkd7TTtH1wFve0igVgwoaKXy0I%2FV5SrHqTFzNvJ%2FoXk5uy06H3hhYGV4i7IticOxl8Qek7xR4P3rhlHHixUbX0YcFZi1rARrhqPacjB6MW44Bw6mf6%2Fwx%2F1ToWJf%2BJJaFLCev04NztPj9PC4l2gWMo%2B%2FQagdYiE%2BoN%2BBVIDq4gsVt9RFWX9n%2FqJffPVem%2FM&X-Amz-Signature=9a2f26a1f50b79d9c1a10ab8f07b9eb6a3a4e94e9d4beb74e2fd94a3f6d96016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2UHYQE6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcCRrJy%2BHmO6ggCquukIcYzUHPwgQjHmM%2BnzxLvYUKZAIgCmk1CTpOvoy%2FPOUDq6FUtRiZZAnBbKo1TIFza7U1L7Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJLbfQhhMMPENubvhSrcA6ZOS%2FvnwycwzI7eXR%2FpyAaEkrSGjaxipQNuYE%2F8qxskO1mYwcTuIxMYYz53%2BVIDajdBzR%2FURgCL1gSRGV27G03lxLIX6RpgwUbSsRaoS%2FVsMtxWe8T9ke6BGVRcTkXfjULvdQaCR0%2FkL93S6k%2FZnp%2Bkb9MgssToXkLX7t69XgkxPL0FrtNcCCbj0KoammoJcafs3N6cl%2FBe157%2BonAf6DIJIfebbetjkg6szDjuXRemqvE26UbnBTsKaXxspeUTTQXnwakWoT3rFe2cfDideDYK8NIWrjK2Anz2KwZJfaXd6G8dgz2QBHal%2BwfdBLvAb8R2AgfsXxh6%2Bug1lI9ojyzYNQdbjJGg2XtRngFSHU9W3ryZPBuTth%2FMoPZO3%2FtRsWKghv68WG6VDLgx5EClEmHy7L3YVi2w88rOdQTdZCwxxY8TcSALKt0GjIXw%2F1tVA34aN8m31I7v1ODfoLmHc7MahkKyBD5dwumj5miHaIyJT%2BgHHO2f3Mn2TcPeq37SyWdJPrkAXShoZYcn0ddzzFaKM2AnOn4udtSASNY1OQ1Lg%2BKvU3jFD5b%2BzNrcyLFLXTuOsnN37hW7Sm2RIco0Se5dKNHjNpUuTNyQr0P3DJNNI%2Bmtn0od0e%2FxDfL%2FMKWm0MkGOqUB%2BDhomnjvqRtBZ56YlBRlOJNKqRu1LCkd7TTtH1wFve0igVgwoaKXy0I%2FV5SrHqTFzNvJ%2FoXk5uy06H3hhYGV4i7IticOxl8Qek7xR4P3rhlHHixUbX0YcFZi1rARrhqPacjB6MW44Bw6mf6%2Fwx%2F1ToWJf%2BJJaFLCev04NztPj9PC4l2gWMo%2B%2FQagdYiE%2BoN%2BBVIDq4gsVt9RFWX9n%2FqJffPVem%2FM&X-Amz-Signature=24933828697835f0c5849b790ba66a10bc697ca1dd7f51900bdaecf257c49f17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

