---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCMN2VZB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIF49H%2FRPO4UNybAYt2ZaeWm5AsIPwRTlmMIKlWQGzNX%2BAiEAwEYwgrpzh2E2%2BBYZfaioaYmv%2BvvAXRniwzPVmxQGvA0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK0YLXTTb%2F%2BN9jxgsSrcA8np0IHRc7l43WzZpCAkk4pG9DVoyGdEFPnCAcrp8gm3h0XH500%2BaVM3cxMXMU569HWEs2v9nRyrbY8gUhJXcxh5ExCqbgzmBp%2Bgfq%2FteKGBkAyTHEHz8VUnqTyoFp6ltKtGTiwxh%2FHfrhh4h%2BnWjQyXFNRLU%2BMoHjtzHLalUqTvYWy%2BKfYEP418Do4iqvDsqrtyvAyxjb4RoiFQ59vV2OMdg%2FupW9WraSxveWvIDsfzPpVDiKmHignY4PsvZGc3lTOlilfUSnW2Q%2BC6nhz4QqZaZu1wfWc6NpqVwiO5qImLubGWqfkrw9rhf1w7Ljoy0%2BVKQyl3txtd0OdHZ%2F3Ob4sqDTz3F%2BuljhLRIgbXvoM4gHPk%2FbPyItUePeBJnRjVSElu6nmk%2BMN1pTFPX3aoNPuykvt50kcON%2FcCMsC7RNFOC1HXn%2BDgR8qx30VqP0bhUkq3d%2FiAwgmZtaqEFwS%2BQTSuJHf%2Fe%2FE3l4PzCjNaQHtAAuEnxDTjP4MLDPaZv435jBkywaI9SOvDjQdd3X6LnU%2B600En0YFDUq4LOt86fqoYKk050gXSzRPrU0aVmu%2FCKww9vNzJ%2BG5Y0q4uy3DVwGnp21lnnr9nreWgNF67gIuyjjh22gaCnmrXC%2FC%2BMIfLxMkGOqUByzyx2aM4IE6cJC4%2BxhMHfDiSebhon0k9q%2BoNHDBLDrLpR0wq8r3Sr6tLjVvFU068wSuZ54mrEPndBSZWMum3pIetXt8EpBO07yhehsfthR6of%2F1COqqjDjy1L4fldmm6rkV2w5Gx4V%2FOQvBQgRKXeesZsaYVNkRnizvE%2BUYYofQgzOET9VLRxDQQi5meef08I5h7sBI%2FUIPXYnWeC1YVJwQ9q9q9&X-Amz-Signature=e6991bdf13f2fbcfee59818896c46ce81e677c6cf18af281dd3701ca68dd404a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCMN2VZB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIF49H%2FRPO4UNybAYt2ZaeWm5AsIPwRTlmMIKlWQGzNX%2BAiEAwEYwgrpzh2E2%2BBYZfaioaYmv%2BvvAXRniwzPVmxQGvA0q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDK0YLXTTb%2F%2BN9jxgsSrcA8np0IHRc7l43WzZpCAkk4pG9DVoyGdEFPnCAcrp8gm3h0XH500%2BaVM3cxMXMU569HWEs2v9nRyrbY8gUhJXcxh5ExCqbgzmBp%2Bgfq%2FteKGBkAyTHEHz8VUnqTyoFp6ltKtGTiwxh%2FHfrhh4h%2BnWjQyXFNRLU%2BMoHjtzHLalUqTvYWy%2BKfYEP418Do4iqvDsqrtyvAyxjb4RoiFQ59vV2OMdg%2FupW9WraSxveWvIDsfzPpVDiKmHignY4PsvZGc3lTOlilfUSnW2Q%2BC6nhz4QqZaZu1wfWc6NpqVwiO5qImLubGWqfkrw9rhf1w7Ljoy0%2BVKQyl3txtd0OdHZ%2F3Ob4sqDTz3F%2BuljhLRIgbXvoM4gHPk%2FbPyItUePeBJnRjVSElu6nmk%2BMN1pTFPX3aoNPuykvt50kcON%2FcCMsC7RNFOC1HXn%2BDgR8qx30VqP0bhUkq3d%2FiAwgmZtaqEFwS%2BQTSuJHf%2Fe%2FE3l4PzCjNaQHtAAuEnxDTjP4MLDPaZv435jBkywaI9SOvDjQdd3X6LnU%2B600En0YFDUq4LOt86fqoYKk050gXSzRPrU0aVmu%2FCKww9vNzJ%2BG5Y0q4uy3DVwGnp21lnnr9nreWgNF67gIuyjjh22gaCnmrXC%2FC%2BMIfLxMkGOqUByzyx2aM4IE6cJC4%2BxhMHfDiSebhon0k9q%2BoNHDBLDrLpR0wq8r3Sr6tLjVvFU068wSuZ54mrEPndBSZWMum3pIetXt8EpBO07yhehsfthR6of%2F1COqqjDjy1L4fldmm6rkV2w5Gx4V%2FOQvBQgRKXeesZsaYVNkRnizvE%2BUYYofQgzOET9VLRxDQQi5meef08I5h7sBI%2FUIPXYnWeC1YVJwQ9q9q9&X-Amz-Signature=9c17ec44814be1900c90663d3f2a03c858b52c47539bba90fd582ea0f2a7d2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

