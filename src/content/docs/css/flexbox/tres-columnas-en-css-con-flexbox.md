---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZREOFY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhqWVM%2BydvWML7jThnLqulKK6nWeBKemKnmmZdCg7HsAiEAlWxuirCM%2FeiSdFCBIZfiIYgnmcBEKVts2CkQIkaKuuUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDC0pgpjcU%2FoIxN%2F%2F4CrcAz%2FRQIkXiN%2BRP7V6BoxV0v0tjZbnEGg9RSkDomUnbdOjsNoYudc0TMoqaMAIKaQ%2BcyRrUgXbC4U9P8zBED%2FDvGljYvakljDvEalU8bvD%2BsaZ4MenWKOo7WDm%2FPjvFaGwCl%2FLORj31z3jrta5GFe8DZiCsPLG5jQ9HZrBdyyfHWb%2B7YSM2Ber3HnD5yx6W8dJ4SDxUFRfaPPSDqTOZbrzqsLGgvJlDA7LHBpkPluGBqhDWBUkBO8BsYQSFQFDQOf%2FO0rJ34wtgUioqHqE8%2Bhj%2BAuTVxTA9WG%2BobnvpErXk1QTlUA%2BUeAJLJYerCl5PDersmcWe7w8MhAvRKK3hhGHfjwFz5SKsLi8RJPKx%2FKNP4XR3pOY9ugk%2FWi3YQoH4d1n8TfqtuwsItOENToDAkMizepfHHV7R6q%2BBoMoxTla7TzRmtc%2BbrXDaHgB3S45NhPbbFogTHpRDGajWdGtH1dgAG5xnlgDwNbzhthWu3g95gE16IIwUMLwDcbPonyIAj%2BqVIfYzQAGb52VvFNss4xj2GRHeSh3uWNJKoIundxqmntQBDvibX0VJxbZq9lGx2zpXRE6XmWai9piKtAowkhLeeSVjnSAseZT%2B3OG3Cl9WH%2Fsm3NwyL6KfgC20o3DMNytyckGOqUBmzeAnMiOKQT%2F8HxzRVtqZlG3rtnZHZSTtV4ACJEp0re%2BpIUYOq09UPGw5I7Qoo37E7pgx8B%2BXYxbWWwHa6kX3j%2BgN%2FwIeuPzyIarQsMPrLF4kmXNCh%2FpyvOQeLGvNFS4yXDXTKrZ6d10MIFhQRe14Gdr%2BVc3IsgLmta1RCwOHQe3nXVZAfjtJIeUQYDwn3RMuSWITLsAzqg3sHoNemutReRHtXnR&X-Amz-Signature=f9efc6a3bfcad7c2c0710fb3f4090f7a17399a32421a68300bb85da74d62865d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOZREOFY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhqWVM%2BydvWML7jThnLqulKK6nWeBKemKnmmZdCg7HsAiEAlWxuirCM%2FeiSdFCBIZfiIYgnmcBEKVts2CkQIkaKuuUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDC0pgpjcU%2FoIxN%2F%2F4CrcAz%2FRQIkXiN%2BRP7V6BoxV0v0tjZbnEGg9RSkDomUnbdOjsNoYudc0TMoqaMAIKaQ%2BcyRrUgXbC4U9P8zBED%2FDvGljYvakljDvEalU8bvD%2BsaZ4MenWKOo7WDm%2FPjvFaGwCl%2FLORj31z3jrta5GFe8DZiCsPLG5jQ9HZrBdyyfHWb%2B7YSM2Ber3HnD5yx6W8dJ4SDxUFRfaPPSDqTOZbrzqsLGgvJlDA7LHBpkPluGBqhDWBUkBO8BsYQSFQFDQOf%2FO0rJ34wtgUioqHqE8%2Bhj%2BAuTVxTA9WG%2BobnvpErXk1QTlUA%2BUeAJLJYerCl5PDersmcWe7w8MhAvRKK3hhGHfjwFz5SKsLi8RJPKx%2FKNP4XR3pOY9ugk%2FWi3YQoH4d1n8TfqtuwsItOENToDAkMizepfHHV7R6q%2BBoMoxTla7TzRmtc%2BbrXDaHgB3S45NhPbbFogTHpRDGajWdGtH1dgAG5xnlgDwNbzhthWu3g95gE16IIwUMLwDcbPonyIAj%2BqVIfYzQAGb52VvFNss4xj2GRHeSh3uWNJKoIundxqmntQBDvibX0VJxbZq9lGx2zpXRE6XmWai9piKtAowkhLeeSVjnSAseZT%2B3OG3Cl9WH%2Fsm3NwyL6KfgC20o3DMNytyckGOqUBmzeAnMiOKQT%2F8HxzRVtqZlG3rtnZHZSTtV4ACJEp0re%2BpIUYOq09UPGw5I7Qoo37E7pgx8B%2BXYxbWWwHa6kX3j%2BgN%2FwIeuPzyIarQsMPrLF4kmXNCh%2FpyvOQeLGvNFS4yXDXTKrZ6d10MIFhQRe14Gdr%2BVc3IsgLmta1RCwOHQe3nXVZAfjtJIeUQYDwn3RMuSWITLsAzqg3sHoNemutReRHtXnR&X-Amz-Signature=2c4ce34a2fe684279547820264bb931cfa1e5de7fac984b1dd38a6e1af5a0de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

