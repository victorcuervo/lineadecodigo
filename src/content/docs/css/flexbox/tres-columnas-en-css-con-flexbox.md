---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YU7WXYE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKfwzDSgIdlzkpRfG9fK9CcZoGJZtQyQR%2FUQCuRxJdIQIhAOViFlm5SfGU%2Fzr0EtXBW7qz1ZkSPxK88CRKzmVcUBUzKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymjdrOIREiFZqIIzsq3ANk4SydTz5CU4f7l4UMLpEzSbuHq9TXJu%2Fbm3MZlCFaElTVQNkzXeGdeoePYjoyEH4HCk2d12JqSUJB%2B58a3uVtX8dwZbCzW6NQJepF18w6HDDckG3jmILo%2BABOoIhSZVH43gplGzCOBvqIT1UVbZdkzbJJ46ypM14bY5GEvfJmZukFxmfh4kjL414IlXiNYZOGb9%2F69zC1Z89AmYFxM7CLrW090rX6oY%2FchMVugZhLMECKMMDvLAaiLDjfondB5nyJDI28yK4m3q402k0P5tS56pW5Wsx4I9OxC3xNKTnDMxo4nvJ6fdRUmwcVbRozGIGbwOTSG530%2Bja3aEPk%2FWDqJwesCpgh%2BhIGy5eGAUfBNpIdH5NF04b33%2BcwkMIASumMGaBYH6S4kS0FmOu9SDh4i4nmgzayfhOclqCY9Is83d%2FdZEjUwkssqYnNluhO06ED%2BXVju%2BMU3i%2FOYnY07XWv05mTr4KJK2x5l%2F6bVV4Xk0Q6BI9D05sUjmSd%2B8vfuVvDo55K%2BvRoQx01ylUd5t088wKBato%2BEPIjMvGF%2BJbQ7d9%2BxayZFg5GXiMVGoSrTI8EYtJy0TPyI5h5mAnB2ZgbiLS7K6IbvckxiVKF691WZam9nkmA0V0iYUm6%2FTDS0djJBjqkAe3n%2B6nO7b%2BwulB6QNDW8W98vRWebeaEzOIJJsssSlgSc8PYsoALZJxyE9F7Yi%2F1HHHeXWiHKAwmpnc0CMs83G3qF9o63vFqTJYx0pCg0a7onEjsTyrr1Z66VJNjxJY3kkxPFBxTe%2FA%2Fhc0ZSMpZrAIqhj9a0DBJL0FWnyKJMYIyrT%2Fag179VNH3p6zP4xxbgj80TW52d8EtI%2FOElJGoW3hE633b&X-Amz-Signature=1ff556af88cad3e1584113008ac867f0120ef31c5c867dc8edfb5354deebcca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YU7WXYE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKfwzDSgIdlzkpRfG9fK9CcZoGJZtQyQR%2FUQCuRxJdIQIhAOViFlm5SfGU%2Fzr0EtXBW7qz1ZkSPxK88CRKzmVcUBUzKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymjdrOIREiFZqIIzsq3ANk4SydTz5CU4f7l4UMLpEzSbuHq9TXJu%2Fbm3MZlCFaElTVQNkzXeGdeoePYjoyEH4HCk2d12JqSUJB%2B58a3uVtX8dwZbCzW6NQJepF18w6HDDckG3jmILo%2BABOoIhSZVH43gplGzCOBvqIT1UVbZdkzbJJ46ypM14bY5GEvfJmZukFxmfh4kjL414IlXiNYZOGb9%2F69zC1Z89AmYFxM7CLrW090rX6oY%2FchMVugZhLMECKMMDvLAaiLDjfondB5nyJDI28yK4m3q402k0P5tS56pW5Wsx4I9OxC3xNKTnDMxo4nvJ6fdRUmwcVbRozGIGbwOTSG530%2Bja3aEPk%2FWDqJwesCpgh%2BhIGy5eGAUfBNpIdH5NF04b33%2BcwkMIASumMGaBYH6S4kS0FmOu9SDh4i4nmgzayfhOclqCY9Is83d%2FdZEjUwkssqYnNluhO06ED%2BXVju%2BMU3i%2FOYnY07XWv05mTr4KJK2x5l%2F6bVV4Xk0Q6BI9D05sUjmSd%2B8vfuVvDo55K%2BvRoQx01ylUd5t088wKBato%2BEPIjMvGF%2BJbQ7d9%2BxayZFg5GXiMVGoSrTI8EYtJy0TPyI5h5mAnB2ZgbiLS7K6IbvckxiVKF691WZam9nkmA0V0iYUm6%2FTDS0djJBjqkAe3n%2B6nO7b%2BwulB6QNDW8W98vRWebeaEzOIJJsssSlgSc8PYsoALZJxyE9F7Yi%2F1HHHeXWiHKAwmpnc0CMs83G3qF9o63vFqTJYx0pCg0a7onEjsTyrr1Z66VJNjxJY3kkxPFBxTe%2FA%2Fhc0ZSMpZrAIqhj9a0DBJL0FWnyKJMYIyrT%2Fag179VNH3p6zP4xxbgj80TW52d8EtI%2FOElJGoW3hE633b&X-Amz-Signature=93d6e527b9d1ac7dbc795d9aa83b063b596f0f6ef37acbab1555b3430cc9271c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

