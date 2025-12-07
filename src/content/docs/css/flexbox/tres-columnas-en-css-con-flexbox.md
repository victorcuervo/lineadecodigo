---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LTFV2ER%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2BuD45vSpOrsgVCUh6xiuOdBIEOqNzQnePquvHz5XFAiEAo4jnO%2BZE4soEb32%2FjCe0Fqtsd5%2BVlauqzMsaeLg9PrwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTYryK%2F84VJA7twfCrcA0kDzOs3a4cfq1w4nTSuqClNzhm%2BA%2BSqgbuRfPZAFGCSTozbADlcjMOMpORR6g1kqQ5Cp7f7iwFxBqIzGmljYTdj7L5%2BICkCf74QFhAEqQyAO%2B9jpcWb0kpiNhHmMCMunskPTn88iL%2BSuZ57F71Eg1%2FdwtyzD4axHCDBp4twdow7K1ot8wxi62rS2jzhM9bLI5bPKApRWff44CSXDkVo%2FXAfgLz71GpIFwIv0gKVHtIwODld9Ttk9lMYbhxFbMOHhYB5MS3KvJmvxLDJDO8qIX4bHcyzOWNMwKKeA73zLtJrdUVge2q6idZ8N41feXYtxoWWLjg6c8VGxItzdctdhKCjRSibOUNdC5S66iqg%2F2K%2FZ2HSxP5uJrq7mM7D%2FQiqTIWRpzyIU0XtnU423qpvzpkq9Neh998V1c4fPUMr94pcR3v8ZQ1Hv3laB8kvbksUOJ0H15IGThO%2BppVZR6PbviB141iybBSEGnu6WXO%2FJeXrCB83lZi9KM%2FGZC6pS44HlXtdahtlMhzc9q6X%2FFNApXTJQiFzVELJV%2BwZmb9CRGWFwHE5i3dywdwXbJ92m%2FsdoFss1CvL%2F33KTwMn7ISJmwpi87F1XsZgz9NX2KwuI9sdMQQaMPN%2FuUfyH%2Br9MPa01skGOqUBo8euaROmHl%2FSIwBEl3gF0LnSTjD%2FRTJG7K2%2BBnrKmpLsCb3lS0Z7lT8r6cJTd%2BeGGhcnr8zS1GNC7xrzRcxvfl3PY12kBp6KxO3iu0iqzadnfrK7AF2UEZhxzN23Ne9pyRyTHqTVCXEU%2FmTgv22opOm2Yp1XoPM6o7WDG64yzsZ5lpqQJITboCXwGqNqpKPd1hAuqjk0qoYhES2bk22jykgQcV5q&X-Amz-Signature=ba25c49800499230bb958e72a78313e03196b19e6142699e341e39b3cf743104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LTFV2ER%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T181952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2BuD45vSpOrsgVCUh6xiuOdBIEOqNzQnePquvHz5XFAiEAo4jnO%2BZE4soEb32%2FjCe0Fqtsd5%2BVlauqzMsaeLg9PrwqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTYryK%2F84VJA7twfCrcA0kDzOs3a4cfq1w4nTSuqClNzhm%2BA%2BSqgbuRfPZAFGCSTozbADlcjMOMpORR6g1kqQ5Cp7f7iwFxBqIzGmljYTdj7L5%2BICkCf74QFhAEqQyAO%2B9jpcWb0kpiNhHmMCMunskPTn88iL%2BSuZ57F71Eg1%2FdwtyzD4axHCDBp4twdow7K1ot8wxi62rS2jzhM9bLI5bPKApRWff44CSXDkVo%2FXAfgLz71GpIFwIv0gKVHtIwODld9Ttk9lMYbhxFbMOHhYB5MS3KvJmvxLDJDO8qIX4bHcyzOWNMwKKeA73zLtJrdUVge2q6idZ8N41feXYtxoWWLjg6c8VGxItzdctdhKCjRSibOUNdC5S66iqg%2F2K%2FZ2HSxP5uJrq7mM7D%2FQiqTIWRpzyIU0XtnU423qpvzpkq9Neh998V1c4fPUMr94pcR3v8ZQ1Hv3laB8kvbksUOJ0H15IGThO%2BppVZR6PbviB141iybBSEGnu6WXO%2FJeXrCB83lZi9KM%2FGZC6pS44HlXtdahtlMhzc9q6X%2FFNApXTJQiFzVELJV%2BwZmb9CRGWFwHE5i3dywdwXbJ92m%2FsdoFss1CvL%2F33KTwMn7ISJmwpi87F1XsZgz9NX2KwuI9sdMQQaMPN%2FuUfyH%2Br9MPa01skGOqUBo8euaROmHl%2FSIwBEl3gF0LnSTjD%2FRTJG7K2%2BBnrKmpLsCb3lS0Z7lT8r6cJTd%2BeGGhcnr8zS1GNC7xrzRcxvfl3PY12kBp6KxO3iu0iqzadnfrK7AF2UEZhxzN23Ne9pyRyTHqTVCXEU%2FmTgv22opOm2Yp1XoPM6o7WDG64yzsZ5lpqQJITboCXwGqNqpKPd1hAuqjk0qoYhES2bk22jykgQcV5q&X-Amz-Signature=df329517bbabc633d98ea299758b8315e0df8d2e6c880fe3b89d6dd5f1227944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

