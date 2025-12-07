---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANLCMK5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BVhtDE9tRe2SQGWnvPzTyEKGSPDdo5ZrMLIS0lAZMXwIgQ8Rmfrg0F0mIFzbP%2Bymp%2Bqq6Zn5sWSikhnsJHoLIGYwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhUQKFUwYOo2cdwASrcAzwsl6iUuMu5gB9tjxp5KLlAGXW4qGyA4MQ46NYw1L0GE%2F7cnrcmoLo6pdCDoNavkYUumyJHpugpcSM0q7j1aXSuVFNkhWgm%2BJmu2BQyzxKJnp2IX6G1VvkkyewsH8SPIJemQstN6TdVHIGySjqbP0bCEsL%2F3Vky45YmoecYPrY3QJjNPvDeheCi%2BnqRGqsABBqz%2B0FgkBWYAoiVlz7ZoqSSaYlEjnl4ncrvNELs0qgYT9sFKNDaWWxRJq9x4s5ynSmKhrWrxXtiQhhN0pjeu4hlB38LYh1WN7cb3ZqzJT0d5phojVCUH1XZVvi3fcknE2EXNfjoOVkzoMCI%2BP%2BY7xjqPbBv3CWQwcPCdS9um1NQPER3DGOZlV03z0xs5yrJlzXYHMt4ZGgg7FnWnqd6rc9FIpei0%2BpU1pHgYtpWBmjtQHXOqsTQl3jzT3RVLY%2BLQerVHjqsfomwyQIyfkvqBjHV8Apvoku9%2BOIOljudbszBHur0ebZI0bwxfZYkNGkGp9IoPjP7AIMr36wYxbLo1MSZTpHb5t%2F7zEHjHnHVrXAY23KKacyE9oz%2FFczNF%2FSFMJmUANuTPCXNz8t2K6jS1gpWWIGtdQ%2FAQrH%2ByBY1oF6dEhHB4q%2BVpBEpeFk6MNDH18kGOqUBN6Uy5Vrf8Wcw4rZhIP6vryamSOhM4hPCoqfOYcNeolydExSzKXfQISKWeOiq%2FFhs5Ub%2FjBVD9aBjQ%2FXtcWkp8bNQkkZQT9LaWqHdYbw3dF94HIZihjhnA2OsNnY1kQW973HVpn7ROT1ZOF9QY7zCiGytfKb66Aiad6Ci9PbMzWzESB%2BLwWrUWk5dLcy7GlQ2xK367WnfMhxo%2F55OU4oMDLndElKJ&X-Amz-Signature=327fd74fbd82b638b53bf54b5381127f5d8fec928b606d927c29b593bb80cf3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANLCMK5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T222613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BVhtDE9tRe2SQGWnvPzTyEKGSPDdo5ZrMLIS0lAZMXwIgQ8Rmfrg0F0mIFzbP%2Bymp%2Bqq6Zn5sWSikhnsJHoLIGYwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIhUQKFUwYOo2cdwASrcAzwsl6iUuMu5gB9tjxp5KLlAGXW4qGyA4MQ46NYw1L0GE%2F7cnrcmoLo6pdCDoNavkYUumyJHpugpcSM0q7j1aXSuVFNkhWgm%2BJmu2BQyzxKJnp2IX6G1VvkkyewsH8SPIJemQstN6TdVHIGySjqbP0bCEsL%2F3Vky45YmoecYPrY3QJjNPvDeheCi%2BnqRGqsABBqz%2B0FgkBWYAoiVlz7ZoqSSaYlEjnl4ncrvNELs0qgYT9sFKNDaWWxRJq9x4s5ynSmKhrWrxXtiQhhN0pjeu4hlB38LYh1WN7cb3ZqzJT0d5phojVCUH1XZVvi3fcknE2EXNfjoOVkzoMCI%2BP%2BY7xjqPbBv3CWQwcPCdS9um1NQPER3DGOZlV03z0xs5yrJlzXYHMt4ZGgg7FnWnqd6rc9FIpei0%2BpU1pHgYtpWBmjtQHXOqsTQl3jzT3RVLY%2BLQerVHjqsfomwyQIyfkvqBjHV8Apvoku9%2BOIOljudbszBHur0ebZI0bwxfZYkNGkGp9IoPjP7AIMr36wYxbLo1MSZTpHb5t%2F7zEHjHnHVrXAY23KKacyE9oz%2FFczNF%2FSFMJmUANuTPCXNz8t2K6jS1gpWWIGtdQ%2FAQrH%2ByBY1oF6dEhHB4q%2BVpBEpeFk6MNDH18kGOqUBN6Uy5Vrf8Wcw4rZhIP6vryamSOhM4hPCoqfOYcNeolydExSzKXfQISKWeOiq%2FFhs5Ub%2FjBVD9aBjQ%2FXtcWkp8bNQkkZQT9LaWqHdYbw3dF94HIZihjhnA2OsNnY1kQW973HVpn7ROT1ZOF9QY7zCiGytfKb66Aiad6Ci9PbMzWzESB%2BLwWrUWk5dLcy7GlQ2xK367WnfMhxo%2F55OU4oMDLndElKJ&X-Amz-Signature=31804ccc782ad1bfacc643a35397c0e6de7b7ca071005badf79eb575281fb194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

