---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653B7XE74%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3DBreJ46n3Eg8e0F4L0JIdZeZdr%2B568cuJ2h9gnVvogIgVy4BEWYp6geV1yh81Vh35%2F40PqZelJs33qNQ9q25blEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJj57KqajmqYEGwReircA%2FY1cPeRCO%2Fso%2BbhZFBQ01rsxx%2B1FuB%2BnKq%2Bq2lwKPkxi6R7p6wuGNOB1D0R1t9dw82EMBMo%2FHG5xEbpn2bR9Z3UUwtUWPIAaM1WebMYRukTxZ%2BgJG%2FXQOJ%2BF%2Fda8ERM8DlY80PYyH5HKk8hdc7d8UP1p0yjYKFaeVWmL6ru1ew0paOugX23pQcSDqlVqpBzvqN%2BDSiVD%2F7QVjOc%2F0tciiy21QyO5lDUiwBqE8FQF2%2B2kVE6zehx3eEOaxr2p0PufhgjbT53PoSVPvfimXUxubmAranpBTB5Z1qlcQy1BRA2xhSZFoO9lVIMGnlC41XaLel%2Bi643ls5Wv9ZkHNv%2Be%2Fqv3YUvVQNTTE9%2Br2fZ9nJyJTOIlqkvdYGNz7Kar4rTyqQO%2FID3gdaY03ilGzVj1d49iBmq9TQlOSJ6CWn9ZOiN4HfcSVdZ3%2Bs4yyFQLVzpzZwEtWFaKxPUQr%2Bu3YaNxiCzK%2FqFen%2BQd0PQk3boXo8s7agG%2Fe%2Fg9uuq2Y7J0NdyfGzvzf1KlI0fsUyBWNUELetmUWHs5SWN%2Fz5535v0lkAOqMdX2KAEcG48GvUgiVtkooXqpaedAr6luPdgJ7IqUJfmaEr%2BtzmXtTB9WWt8N6aUg2F55zeWrJkjwQDUMJ%2FR2MkGOqUBEVIEblcmcvdZzuvguRspvOwYLu%2BdC2%2FiDYp0QOrzB%2F6iScxLYVA8MOQp7h%2BzIU8n1z3ffZ2Lbf5MAXZoNFk935a%2B%2BrcI4Xap%2BBXkwxu93KdAev48utunNAqb37c6povAm20ux4woM91VSxNfcA74gqDfzujWxS3injRF2xmji%2FzXw%2B194NNNcI3UL3RKNMgHuMk1W0fsvx3wXS9yGlNh9O3LYSOq&X-Amz-Signature=040706978a876fdf02b6719fd0578290555b52e7c64ad644bc46b19e95ae1bb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653B7XE74%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3DBreJ46n3Eg8e0F4L0JIdZeZdr%2B568cuJ2h9gnVvogIgVy4BEWYp6geV1yh81Vh35%2F40PqZelJs33qNQ9q25blEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJj57KqajmqYEGwReircA%2FY1cPeRCO%2Fso%2BbhZFBQ01rsxx%2B1FuB%2BnKq%2Bq2lwKPkxi6R7p6wuGNOB1D0R1t9dw82EMBMo%2FHG5xEbpn2bR9Z3UUwtUWPIAaM1WebMYRukTxZ%2BgJG%2FXQOJ%2BF%2Fda8ERM8DlY80PYyH5HKk8hdc7d8UP1p0yjYKFaeVWmL6ru1ew0paOugX23pQcSDqlVqpBzvqN%2BDSiVD%2F7QVjOc%2F0tciiy21QyO5lDUiwBqE8FQF2%2B2kVE6zehx3eEOaxr2p0PufhgjbT53PoSVPvfimXUxubmAranpBTB5Z1qlcQy1BRA2xhSZFoO9lVIMGnlC41XaLel%2Bi643ls5Wv9ZkHNv%2Be%2Fqv3YUvVQNTTE9%2Br2fZ9nJyJTOIlqkvdYGNz7Kar4rTyqQO%2FID3gdaY03ilGzVj1d49iBmq9TQlOSJ6CWn9ZOiN4HfcSVdZ3%2Bs4yyFQLVzpzZwEtWFaKxPUQr%2Bu3YaNxiCzK%2FqFen%2BQd0PQk3boXo8s7agG%2Fe%2Fg9uuq2Y7J0NdyfGzvzf1KlI0fsUyBWNUELetmUWHs5SWN%2Fz5535v0lkAOqMdX2KAEcG48GvUgiVtkooXqpaedAr6luPdgJ7IqUJfmaEr%2BtzmXtTB9WWt8N6aUg2F55zeWrJkjwQDUMJ%2FR2MkGOqUBEVIEblcmcvdZzuvguRspvOwYLu%2BdC2%2FiDYp0QOrzB%2F6iScxLYVA8MOQp7h%2BzIU8n1z3ffZ2Lbf5MAXZoNFk935a%2B%2BrcI4Xap%2BBXkwxu93KdAev48utunNAqb37c6povAm20ux4woM91VSxNfcA74gqDfzujWxS3injRF2xmji%2FzXw%2B194NNNcI3UL3RKNMgHuMk1W0fsvx3wXS9yGlNh9O3LYSOq&X-Amz-Signature=6d430217680422206bd1f88c831b85e00f694ea3a158e130cbe96dcaf7320936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

