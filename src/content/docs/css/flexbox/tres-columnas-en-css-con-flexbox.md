---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V37726X6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjKIC%2FxnF%2Bi8ehj9J0JwVoMd7grEH4UgDIQZXoHX5WaAiEAz%2BA%2Fk7feE7lrh1iophAy8TXPdfiekBFme0EtP9cX5kQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq2nzwS423hcl7%2BoircA2jvzajNDasu5W2BY8W6dk%2FWCI%2FcIZSRS2EMTBz40m29tFj%2F30ognFFVpBa%2F0Cde2sCeZQ55HgYNNM3%2Fg3M0xA7WE9LJ9yWj4ZRw%2FH%2BkiknvpQdUHyFRPPx8CKWdiunafOKieOAjVCyWAoxUkeAfk2VC37bj37sOOmRluXXeW5Iu6IUUG%2FFSX0Qsxg69wDLleglFS%2FqUQtSNfHIvnQpTpq6LjJnPwl1m%2B76iIDreBZUV%2BxhV8wcTfffH5wBnVjMqnCzX4NM2DgOgP%2BhETd%2Fa40I3NVRxsZosd3XfzhO1NDOYVjGp%2BBqxPWzb%2BY%2Bga6WBW8itCHfX3Xg9%2BcKdRjsZTgOcWKzEGuLEINeJskyo6%2FCqnfAVRuI4eIKiBr9vxyerqC0ETqdsFN2fUlTsUJvQ7vJWNYkQX01kYC8pr7ClT9BRj0toy42V%2F6fk6CHRRu%2Bhenlof1WVlWeXDy%2BwxIKgcwoGEag8B9APdCB8y7lX0%2Fzv0MHGumNnQerYgBPPz88sTCaARNEMZaZXv4e8S7PsMo3XP5AUtq%2BSCoUscF9hCSNNlJX6UY5GCmOKECXtU0VPZIcF%2F0sgYp6alRnqMSX5cxBOLmPR3zBDRM4N%2FMDo1AuucfJrHFVE8noaOGu1MKvd3MkGOqUBY3GVi74pIq%2FZTEFzQFCOWGbUm4E4evLZ9VqvToNU%2Bz7fxGFmhGVuNh7yOi8qUYElTFgQYOKI77QuCJUGY2HyjRlGCTKFXLEeMlEGvvR7V%2BRzKizUi8hHAlg%2FrQhGgDfrsUiVO6kVPgENpARQP7WTsNSsqUsNuuSbvk84DRIV0M4P%2F2UQutG8xyxrrNfPy3nPQdJoV7Waz6taZ%2BnSvB5RGZfkPNKI&X-Amz-Signature=8ef3a2d7be99ba81b1630ad2a64c6744b2c4cb87743a08764c73f452a98dd9b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V37726X6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjKIC%2FxnF%2Bi8ehj9J0JwVoMd7grEH4UgDIQZXoHX5WaAiEAz%2BA%2Fk7feE7lrh1iophAy8TXPdfiekBFme0EtP9cX5kQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJq2nzwS423hcl7%2BoircA2jvzajNDasu5W2BY8W6dk%2FWCI%2FcIZSRS2EMTBz40m29tFj%2F30ognFFVpBa%2F0Cde2sCeZQ55HgYNNM3%2Fg3M0xA7WE9LJ9yWj4ZRw%2FH%2BkiknvpQdUHyFRPPx8CKWdiunafOKieOAjVCyWAoxUkeAfk2VC37bj37sOOmRluXXeW5Iu6IUUG%2FFSX0Qsxg69wDLleglFS%2FqUQtSNfHIvnQpTpq6LjJnPwl1m%2B76iIDreBZUV%2BxhV8wcTfffH5wBnVjMqnCzX4NM2DgOgP%2BhETd%2Fa40I3NVRxsZosd3XfzhO1NDOYVjGp%2BBqxPWzb%2BY%2Bga6WBW8itCHfX3Xg9%2BcKdRjsZTgOcWKzEGuLEINeJskyo6%2FCqnfAVRuI4eIKiBr9vxyerqC0ETqdsFN2fUlTsUJvQ7vJWNYkQX01kYC8pr7ClT9BRj0toy42V%2F6fk6CHRRu%2Bhenlof1WVlWeXDy%2BwxIKgcwoGEag8B9APdCB8y7lX0%2Fzv0MHGumNnQerYgBPPz88sTCaARNEMZaZXv4e8S7PsMo3XP5AUtq%2BSCoUscF9hCSNNlJX6UY5GCmOKECXtU0VPZIcF%2F0sgYp6alRnqMSX5cxBOLmPR3zBDRM4N%2FMDo1AuucfJrHFVE8noaOGu1MKvd3MkGOqUBY3GVi74pIq%2FZTEFzQFCOWGbUm4E4evLZ9VqvToNU%2Bz7fxGFmhGVuNh7yOi8qUYElTFgQYOKI77QuCJUGY2HyjRlGCTKFXLEeMlEGvvR7V%2BRzKizUi8hHAlg%2FrQhGgDfrsUiVO6kVPgENpARQP7WTsNSsqUsNuuSbvk84DRIV0M4P%2F2UQutG8xyxrrNfPy3nPQdJoV7Waz6taZ%2BnSvB5RGZfkPNKI&X-Amz-Signature=7506be5ff920933bcdc3a85957b4762b1f6b6e2767ef196a9fac1abecfc02565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

