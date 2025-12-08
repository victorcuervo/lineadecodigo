---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUQPVXS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXa9x7t2VtjAEl0vpeYV6cOaIqgFIZNYhlLXvuqHsfmQIgU%2FPD19l7saQ4z0Pme32Kz5iaPdU46dFM%2FRA5vlql2AgqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmXuJrY8mXL8JDAASrcA3STtWE%2FkWoktd90aJWcsFn%2FqFUG%2F3sQz9oncJkJRdlONPR9u%2Frv9TpeDgNAaXjCzRh6TqWwSrRQrLnyxx127jgDnxNUDyz0muMRWKniVlqdpx9STcKTdGK5aqSBDhpQCY8PgTv6l%2BjN%2B3EVheiBccI%2FfcW9vd2odpcS99kc%2FiTcz2iVELK%2B2i6IS5IICUDbNEeZY8yIB%2BoY%2BLkHSKuQGbVhg9OaRH2AF9m6peZmdsZM%2BTmNvG7kFd2CRh08dHqaFo%2ByC1H8RLHNyLNf80sLH6EwXDfrd%2BIhgWEhPtaUqxDtg9uFtO0GfjIe7a1kOKTPakuICguvr7hF44TxWIf3CedEOAut8ybbqAkXG3kN7cW7uDvDPDsm5ZmCBu1GmBPovocBgSRkbCj783yw88VC1nP6m6rICLvc017dvaAgN7Nht4TijApVjvazgmsKBajH9CQT5dTw69LhknX6yMFZ0rQ%2BMlzr6nQBJiabCUJiqYHvTS2gW8bfmxewKklIBiFkcViYvcE%2BUaZLVbM2osuyowkzBPJ%2Fx6EoaGaQ%2Fhv2QBhMwPgvRxa6L5xWjii9MAd4jrIPthcXVYFwX9IYXTKLDHz%2FnPHhBM6sbCAmxUCIWTY23CJD2FfquG1449Q3MP3%2F3MkGOqUBmWo%2FzgXQjvQ4RFYnA1YUumP%2B2lwdov9PgWNz%2FAy%2BN3kBMW06Ql70gY%2BgB3HhS7lK3Wnb4j4tbC7JW1UsziUOxXaYG4Fmd5pnKjr1Fbl9AxcV%2FgBgc%2BnD%2F0eFejG1u93faZjHqteiJyiSbAIg%2FB0f6Ppvg6rg36VQWx0Ky6sqLXp6voQjtzBtB%2BVGr940WyAB%2FlOmXCMLa%2FBxdyXp8%2FmxwtcJPvud&X-Amz-Signature=f9bf6f3e9c6c91d5b82b054aa8b14f23e2312268352dfdab1d574b99b385fdee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBUQPVXS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXa9x7t2VtjAEl0vpeYV6cOaIqgFIZNYhlLXvuqHsfmQIgU%2FPD19l7saQ4z0Pme32Kz5iaPdU46dFM%2FRA5vlql2AgqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmXuJrY8mXL8JDAASrcA3STtWE%2FkWoktd90aJWcsFn%2FqFUG%2F3sQz9oncJkJRdlONPR9u%2Frv9TpeDgNAaXjCzRh6TqWwSrRQrLnyxx127jgDnxNUDyz0muMRWKniVlqdpx9STcKTdGK5aqSBDhpQCY8PgTv6l%2BjN%2B3EVheiBccI%2FfcW9vd2odpcS99kc%2FiTcz2iVELK%2B2i6IS5IICUDbNEeZY8yIB%2BoY%2BLkHSKuQGbVhg9OaRH2AF9m6peZmdsZM%2BTmNvG7kFd2CRh08dHqaFo%2ByC1H8RLHNyLNf80sLH6EwXDfrd%2BIhgWEhPtaUqxDtg9uFtO0GfjIe7a1kOKTPakuICguvr7hF44TxWIf3CedEOAut8ybbqAkXG3kN7cW7uDvDPDsm5ZmCBu1GmBPovocBgSRkbCj783yw88VC1nP6m6rICLvc017dvaAgN7Nht4TijApVjvazgmsKBajH9CQT5dTw69LhknX6yMFZ0rQ%2BMlzr6nQBJiabCUJiqYHvTS2gW8bfmxewKklIBiFkcViYvcE%2BUaZLVbM2osuyowkzBPJ%2Fx6EoaGaQ%2Fhv2QBhMwPgvRxa6L5xWjii9MAd4jrIPthcXVYFwX9IYXTKLDHz%2FnPHhBM6sbCAmxUCIWTY23CJD2FfquG1449Q3MP3%2F3MkGOqUBmWo%2FzgXQjvQ4RFYnA1YUumP%2B2lwdov9PgWNz%2FAy%2BN3kBMW06Ql70gY%2BgB3HhS7lK3Wnb4j4tbC7JW1UsziUOxXaYG4Fmd5pnKjr1Fbl9AxcV%2FgBgc%2BnD%2F0eFejG1u93faZjHqteiJyiSbAIg%2FB0f6Ppvg6rg36VQWx0Ky6sqLXp6voQjtzBtB%2BVGr940WyAB%2FlOmXCMLa%2FBxdyXp8%2FmxwtcJPvud&X-Amz-Signature=f9fe34acfb927f97d475b9f689b3fdefa634a803788d2d4fb6f971c8aee1bd65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

