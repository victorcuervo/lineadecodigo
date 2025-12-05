---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCWPVA6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATfMIebp1hAvLeUj4zg%2BDXr%2BibMyfz3GZn3BwkjkBS9AiEAyu77gl5YZnwLASJMKCScOEOxsxph2PYFPPN%2BWIEnDTQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIGNAw%2BtNcin2HqYvCrcA01JqIvxeuAT4pPoDaAHgT%2BOpvKj1v0VJz%2FJAtRITciAykV2EJRsPz%2BzGoKT5PHDHpQCjpaPoK6MFq7LC92QtqHD3lAzdn1pvevPjBaOCaORGUeSxtxvxlXF7YZmWvwmD69Nr5VqrGGzreChl5xnzndkKHFkc8NWR4OuaINPT5AjTj7JwKm%2Fky19LhcgQmn9KQ2taK0UJTTy8jv9WzVNWUM5ax%2BKhFRzI6FgH%2B58UJrzQvkfBZIQp699%2FP2hb0m2dZk%2BqEOomfpQIHqvRxNSFGz2%2B6tPgexzHVgd5sBQja2mN%2BCyrDLRk5sKigWSMlprlGVXco82nM6jlA%2BefhDEJBmTTRUUw2eJslUczT0vt%2BiW55ykQbSXhj7tK7RoEy6tsX7BhRrv6IjLjWKVJm7%2FNN0%2BuGchvzsqgAekghPAuodOefuDTm7Xp7FLeFiHALsm4%2Fc4%2BCO2AOHJQ3a4AejeWP2sL2Ov46uie0mzCokGVCJk1Z08DanJWLKb1moY4uM2Qk6j6CgFZrHr%2FruarLgkZfC6z%2BTh08VG49bIhhD6hacJSzEusf%2FiTlwp6fsKWkt8JSPSDtMHLCtXbqEhkew3agPanzxIjgeZRHwXD%2Fe1VWaQehXJ3FY%2BiIo7XOw%2BMIfIyskGOqUBMqkfDCEToNAHMRT%2BTcbyo0GfFTpQN9RvUN8gCXky%2F7wJLy%2FpTAbF9yLdG9o973SjcbYdnXob2PXD1gSANgV4BtFXvBVvoVZgu8%2F93wWnmsbY1GQiood0sWNQWpu9i6AK5M3H4TeReSiaZ8gXpCACBKiA3zr%2FvaJW6TfqJRdwW3KL30pQ71XRnNeQaf6ctqyt%2BzMbtouS%2B01irD1oJ8AQrQwTJglE&X-Amz-Signature=c68efd4341da4aa6663ec8b2069ba594c163366bf6b80ebd55a82effd96911d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCWPVA6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIATfMIebp1hAvLeUj4zg%2BDXr%2BibMyfz3GZn3BwkjkBS9AiEAyu77gl5YZnwLASJMKCScOEOxsxph2PYFPPN%2BWIEnDTQq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIGNAw%2BtNcin2HqYvCrcA01JqIvxeuAT4pPoDaAHgT%2BOpvKj1v0VJz%2FJAtRITciAykV2EJRsPz%2BzGoKT5PHDHpQCjpaPoK6MFq7LC92QtqHD3lAzdn1pvevPjBaOCaORGUeSxtxvxlXF7YZmWvwmD69Nr5VqrGGzreChl5xnzndkKHFkc8NWR4OuaINPT5AjTj7JwKm%2Fky19LhcgQmn9KQ2taK0UJTTy8jv9WzVNWUM5ax%2BKhFRzI6FgH%2B58UJrzQvkfBZIQp699%2FP2hb0m2dZk%2BqEOomfpQIHqvRxNSFGz2%2B6tPgexzHVgd5sBQja2mN%2BCyrDLRk5sKigWSMlprlGVXco82nM6jlA%2BefhDEJBmTTRUUw2eJslUczT0vt%2BiW55ykQbSXhj7tK7RoEy6tsX7BhRrv6IjLjWKVJm7%2FNN0%2BuGchvzsqgAekghPAuodOefuDTm7Xp7FLeFiHALsm4%2Fc4%2BCO2AOHJQ3a4AejeWP2sL2Ov46uie0mzCokGVCJk1Z08DanJWLKb1moY4uM2Qk6j6CgFZrHr%2FruarLgkZfC6z%2BTh08VG49bIhhD6hacJSzEusf%2FiTlwp6fsKWkt8JSPSDtMHLCtXbqEhkew3agPanzxIjgeZRHwXD%2Fe1VWaQehXJ3FY%2BiIo7XOw%2BMIfIyskGOqUBMqkfDCEToNAHMRT%2BTcbyo0GfFTpQN9RvUN8gCXky%2F7wJLy%2FpTAbF9yLdG9o973SjcbYdnXob2PXD1gSANgV4BtFXvBVvoVZgu8%2F93wWnmsbY1GQiood0sWNQWpu9i6AK5M3H4TeReSiaZ8gXpCACBKiA3zr%2FvaJW6TfqJRdwW3KL30pQ71XRnNeQaf6ctqyt%2BzMbtouS%2B01irD1oJ8AQrQwTJglE&X-Amz-Signature=0907e55d5956cd775348117abed89545299aab8b63520557bb88a3b1af1811a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

