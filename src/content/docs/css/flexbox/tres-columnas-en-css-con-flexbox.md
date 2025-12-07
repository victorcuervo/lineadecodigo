---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR73JO7O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFh%2FKqQHCidG1LnilL3OIGEF0JggpPmT05WX82fWiG3sAiEAswHhRXQKQjp1rnwxz0tKW2VYjJDN8%2FfLzmOSZWlUgyUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfLvtHquL%2FtAQ01QCrcAzVAjbkyEiyoe3C%2BwoZPK1EpXvtxzFI4iVAAIk7uciWY96v0w09e1h2HVKiz0tNez5gv%2BtBDDA%2FaswdOfoB44fT36WmKpGDfTPfX4bEBPvs%2FSI%2BTeLFT23gOf9S1%2BEgj%2FRyXepO47EAjw659cTumbb544VoeV5t5KSGyKw6I%2BSN7%2F%2FMGTjJPNJWJrucPX%2FbHcMqOXOQIEen8cKe1U5fkP82ByG5l0ybstnNJ8XdrKAMs0XkB1aZHhstonREy8H%2Bl%2Fui%2B7cWTNXuBh0zgj5kWWYVozwDHg%2Frr8pB8tMOQqOWxoYrF5sqcdn1XE6QlIg3l1A2eDonWVo8cDvAg4jojzhS0%2BlV3XrHrh1aoNiwhzWVw5BG%2FKoQHexQrzqgL5vYKw8DuhxcusmzXt2%2B1Isqk%2BMsaqaj9hqyd2dX6UR4CZQ7JXwYhMWZMSz4xLdfyUzBLJMOhC1bexPi5BdpsvX%2Ftdz%2F7bjWLgQFisM9WonvLsEj4E0r2WvjZxJpT2dUqw87y3k3GFsyFy0tIT26JpPijPqGKYm6L3HVwbCPlvSwUkBSKHHvoloH1cZsw9QnctGOyyaMbwKwaH%2BDVqRCJQYD4L8ImHBDlj9IYEgsmBN37JiiB9e1NB9D3CJilFj%2FnMLOa1ckGOqUByCD6whqMzTxvbDNYcaVJU9Vxs8YjCUFGc3uPgK5VTS1QI3YV%2FMZaInDDMGm%2BRftn7fAXom9j6LWpN3a5wDCeEBFSxhPKcAkwG72MFg6Pe%2BhB76VKMbvms30YXLHr%2Fo7QfFmIaFzGozxnWRnuCCqHE3cIJPF7YMo2RMBEL9dIfTsuhgUBjLLiW2KmOWfIHZFUEwIc12c6un78zGDMekEAlHAEm0vr&X-Amz-Signature=ae22ecd05ef72af7861174716f1fb110ac48d560b3bf36d505d103b9998bf702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR73JO7O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFh%2FKqQHCidG1LnilL3OIGEF0JggpPmT05WX82fWiG3sAiEAswHhRXQKQjp1rnwxz0tKW2VYjJDN8%2FfLzmOSZWlUgyUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfLvtHquL%2FtAQ01QCrcAzVAjbkyEiyoe3C%2BwoZPK1EpXvtxzFI4iVAAIk7uciWY96v0w09e1h2HVKiz0tNez5gv%2BtBDDA%2FaswdOfoB44fT36WmKpGDfTPfX4bEBPvs%2FSI%2BTeLFT23gOf9S1%2BEgj%2FRyXepO47EAjw659cTumbb544VoeV5t5KSGyKw6I%2BSN7%2F%2FMGTjJPNJWJrucPX%2FbHcMqOXOQIEen8cKe1U5fkP82ByG5l0ybstnNJ8XdrKAMs0XkB1aZHhstonREy8H%2Bl%2Fui%2B7cWTNXuBh0zgj5kWWYVozwDHg%2Frr8pB8tMOQqOWxoYrF5sqcdn1XE6QlIg3l1A2eDonWVo8cDvAg4jojzhS0%2BlV3XrHrh1aoNiwhzWVw5BG%2FKoQHexQrzqgL5vYKw8DuhxcusmzXt2%2B1Isqk%2BMsaqaj9hqyd2dX6UR4CZQ7JXwYhMWZMSz4xLdfyUzBLJMOhC1bexPi5BdpsvX%2Ftdz%2F7bjWLgQFisM9WonvLsEj4E0r2WvjZxJpT2dUqw87y3k3GFsyFy0tIT26JpPijPqGKYm6L3HVwbCPlvSwUkBSKHHvoloH1cZsw9QnctGOyyaMbwKwaH%2BDVqRCJQYD4L8ImHBDlj9IYEgsmBN37JiiB9e1NB9D3CJilFj%2FnMLOa1ckGOqUByCD6whqMzTxvbDNYcaVJU9Vxs8YjCUFGc3uPgK5VTS1QI3YV%2FMZaInDDMGm%2BRftn7fAXom9j6LWpN3a5wDCeEBFSxhPKcAkwG72MFg6Pe%2BhB76VKMbvms30YXLHr%2Fo7QfFmIaFzGozxnWRnuCCqHE3cIJPF7YMo2RMBEL9dIfTsuhgUBjLLiW2KmOWfIHZFUEwIc12c6un78zGDMekEAlHAEm0vr&X-Amz-Signature=f0c051b89f53287b07199e5f843763d5dcc45a188bdcf3f36b9a7b5e04212ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

