---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6IHVV7J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4lNmeCgl5H7%2FLmJ%2FthQP3lVqW%2BP7hllMDk6liD%2Bt%2BZQIgZQgsPrWpBwskiuRK73Iy%2FscagYgK8uxXzqjUIIePLZ4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDIXBzwBCpFJRu1nSpircA0sdHhHHV1iaQ2QmQSm%2B4yPU6QEGOLw0FI8wXW07pymPYKBJM%2BnW5us%2BCEZPMhDDWPtDoZLRVHzqWXXQLfBOUDVwgLuyyjn1CBOmmXicHazyxSsutGxY7zLjcFvktU9txxmbXQ9ag1DkOTf2d4eU999V9EiaYI3yV7ZqHlohFK14rLi27B3vpmgnUd5ZRvSpeofEbYt1f019D2j27rOLHmThD%2F%2F30mWjuV4hdvsM2jB%2Bhcd8glPL8Ux8gjdX9SLwm3teLVgtBK3b%2BxSPrfRuGF2DcuRBMrxa28j6%2BXZXwmERLg6dsY2XV3yrydPRCYm0xF3rYRhQrQMyHRj%2BBii5uycKOcX9483zdCwNK1HD1J12XNkOABReAMbkOSKOG242%2FGFRMULp%2BmuDkEbQShUjkPLDTACqsWkB76RgmEkGjHheB%2BoBqgrW9bkCW6yxoAt8OdlOY4Cd2YrfUZJALVe8taNzfVWs3p2KTq0gsfvca14vDmyzAtQJR6NlPttKO0Mg5dEnxX151HOoJAlgqDxQLtpJYPx9vSbn76sBbRWtFZu3bAn6no1LRSmJWAb4QfYnk2WShkWGI2oT2i7QIjyTxqduE75I6iherFDOOaQpKkV0D4g7AqhCGWjEURrJMNOyy8kGOqUBU%2Fi79uzRPMckY5vFA3LJbmTG0x7iZ9%2Bbh4%2BfMi15XhSaWTIYEYVU02mISg7Oexdy4vEFzGfBBQG%2Bi5G02CaiX1hphJGTxRY1PD8%2Figyv1ANgTChE%2F%2BDFVe%2BR0o%2BW6WPoL1ukMccWF1GPIyuKkRcLb5HRn2UXkXBLR4v9tSocZZyfcluQ%2BY9ZM70Hhu1SPKCVrwZVmgsbAJaoZqQJdYPn34%2B2GnvT&X-Amz-Signature=4296b9aceba372e09c4eed4fc4ddc5ee14f3d59d57473ddf432166aa8b15e9fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6IHVV7J%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4lNmeCgl5H7%2FLmJ%2FthQP3lVqW%2BP7hllMDk6liD%2Bt%2BZQIgZQgsPrWpBwskiuRK73Iy%2FscagYgK8uxXzqjUIIePLZ4q%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDIXBzwBCpFJRu1nSpircA0sdHhHHV1iaQ2QmQSm%2B4yPU6QEGOLw0FI8wXW07pymPYKBJM%2BnW5us%2BCEZPMhDDWPtDoZLRVHzqWXXQLfBOUDVwgLuyyjn1CBOmmXicHazyxSsutGxY7zLjcFvktU9txxmbXQ9ag1DkOTf2d4eU999V9EiaYI3yV7ZqHlohFK14rLi27B3vpmgnUd5ZRvSpeofEbYt1f019D2j27rOLHmThD%2F%2F30mWjuV4hdvsM2jB%2Bhcd8glPL8Ux8gjdX9SLwm3teLVgtBK3b%2BxSPrfRuGF2DcuRBMrxa28j6%2BXZXwmERLg6dsY2XV3yrydPRCYm0xF3rYRhQrQMyHRj%2BBii5uycKOcX9483zdCwNK1HD1J12XNkOABReAMbkOSKOG242%2FGFRMULp%2BmuDkEbQShUjkPLDTACqsWkB76RgmEkGjHheB%2BoBqgrW9bkCW6yxoAt8OdlOY4Cd2YrfUZJALVe8taNzfVWs3p2KTq0gsfvca14vDmyzAtQJR6NlPttKO0Mg5dEnxX151HOoJAlgqDxQLtpJYPx9vSbn76sBbRWtFZu3bAn6no1LRSmJWAb4QfYnk2WShkWGI2oT2i7QIjyTxqduE75I6iherFDOOaQpKkV0D4g7AqhCGWjEURrJMNOyy8kGOqUBU%2Fi79uzRPMckY5vFA3LJbmTG0x7iZ9%2Bbh4%2BfMi15XhSaWTIYEYVU02mISg7Oexdy4vEFzGfBBQG%2Bi5G02CaiX1hphJGTxRY1PD8%2Figyv1ANgTChE%2F%2BDFVe%2BR0o%2BW6WPoL1ukMccWF1GPIyuKkRcLb5HRn2UXkXBLR4v9tSocZZyfcluQ%2BY9ZM70Hhu1SPKCVrwZVmgsbAJaoZqQJdYPn34%2B2GnvT&X-Amz-Signature=e828f8c4c5eb95d09088218e1cb30fd3e6667c1abb17cdd3d99a53a88eaabc10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

