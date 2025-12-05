---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLK7DG7I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWD4lhzBuG7fd15BYjNzzgQehc%2FaJW%2F3dVdnyqtTa1TAiEA9sUdGQ3sTvIY2YiTSWKRfIOicJBveq75VmVtwoz%2FWV0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKEWej2%2BI%2FjLUvTKZSrcA5zNl0eBIKs%2BgVSLYjJEZJnPokykHJw2RP1UZbD90TlB2xz9m6LgQTK08jFHLpNzHCB9Yod%2F7syrAFrWNZt7QWTxAA%2FICsw2tG7tfHQbzEsI%2B0eYzKlPba5ajRMmkvXh3lYWvEuyCnWhhe4tw8aU7vQcDKXOS4Pj5Mqyekk4cEzXTTeHjxNrZ6EiOh1gd0SkIuxkgaX0bVDtuaESEcHOyHXpsNQdidut9oAmAkDonHRW4DCivNw5OjsrL57f7WVhRP8v75do6z7I0LzJLbjPIz2FNRqbrTCmbEZBfKWX%2B%2BT6i51Fl7cQoliDgQFIhcu2IcRK6dne8i1DJR5%2FeQfSj5vSEaysPyrVWikJ9e%2FDBrtstAsRd1t1TQ5NeGUrBLIWcmoVyiQHs6HQKfhSNJnlsNka%2FQgqoe%2BGeloEn4OqaHRPxMUKOKV%2FRnX8373RE3AOTXsLclGtpMADBLBfdgFL4sJBH%2Bn9S7BOIsYloEsPvr5kOD1vo%2FOLeSwiV6X4GAOgi4HIBe6U7HyuezSrXt4uieDAyNPOjApL0ChTTJFfFlRqKbEwzmIMu7xSUQ3cj0bEzmuiEA600ILpLfcBj7vwBkGDQyKnDlMARTbmSXk5dxxCbz3HYUqxot41zqKuMMmZzckGOqUBNITYz9rDMbwuM6H2EFLhxDEit6CYu5We7PVbMR14u3%2FLZqEIcp9N6175IdccQWDDTrRQSHbg%2BiIXMOyi4ZzE14eTcEMY7feIf7G5yBIFFH%2FU5jOjfx%2Bzg8uIU7c8X4btIMthkISufrGj2wVNWK2dN%2FDYqM2nEqdWpsgdRZlgp4TN1AIFeVm6j4BeRN2FPOiv2K%2BWfqDeHI3e8yE%2BmAYXlshI7ObF&X-Amz-Signature=99163d67fec9469b52ec860bb89ddd3f400ae0f51a9a2cf73696ae4bd2b7699e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLK7DG7I%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWD4lhzBuG7fd15BYjNzzgQehc%2FaJW%2F3dVdnyqtTa1TAiEA9sUdGQ3sTvIY2YiTSWKRfIOicJBveq75VmVtwoz%2FWV0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKEWej2%2BI%2FjLUvTKZSrcA5zNl0eBIKs%2BgVSLYjJEZJnPokykHJw2RP1UZbD90TlB2xz9m6LgQTK08jFHLpNzHCB9Yod%2F7syrAFrWNZt7QWTxAA%2FICsw2tG7tfHQbzEsI%2B0eYzKlPba5ajRMmkvXh3lYWvEuyCnWhhe4tw8aU7vQcDKXOS4Pj5Mqyekk4cEzXTTeHjxNrZ6EiOh1gd0SkIuxkgaX0bVDtuaESEcHOyHXpsNQdidut9oAmAkDonHRW4DCivNw5OjsrL57f7WVhRP8v75do6z7I0LzJLbjPIz2FNRqbrTCmbEZBfKWX%2B%2BT6i51Fl7cQoliDgQFIhcu2IcRK6dne8i1DJR5%2FeQfSj5vSEaysPyrVWikJ9e%2FDBrtstAsRd1t1TQ5NeGUrBLIWcmoVyiQHs6HQKfhSNJnlsNka%2FQgqoe%2BGeloEn4OqaHRPxMUKOKV%2FRnX8373RE3AOTXsLclGtpMADBLBfdgFL4sJBH%2Bn9S7BOIsYloEsPvr5kOD1vo%2FOLeSwiV6X4GAOgi4HIBe6U7HyuezSrXt4uieDAyNPOjApL0ChTTJFfFlRqKbEwzmIMu7xSUQ3cj0bEzmuiEA600ILpLfcBj7vwBkGDQyKnDlMARTbmSXk5dxxCbz3HYUqxot41zqKuMMmZzckGOqUBNITYz9rDMbwuM6H2EFLhxDEit6CYu5We7PVbMR14u3%2FLZqEIcp9N6175IdccQWDDTrRQSHbg%2BiIXMOyi4ZzE14eTcEMY7feIf7G5yBIFFH%2FU5jOjfx%2Bzg8uIU7c8X4btIMthkISufrGj2wVNWK2dN%2FDYqM2nEqdWpsgdRZlgp4TN1AIFeVm6j4BeRN2FPOiv2K%2BWfqDeHI3e8yE%2BmAYXlshI7ObF&X-Amz-Signature=a3f8d07c5c62accb45f9e67a7bdedc45f10bb336f4d62a05ca513bb2ce5e24ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

