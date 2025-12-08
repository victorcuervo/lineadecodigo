---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR62WPBC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh6z3a7oc0yV4NQLuYEISUkvBm5iqFmJlXrK4a9xIpbAiEAzAICI8M4VoNWN6%2F47AqbNQK3sSurc3ZaCIlYM6RmpAIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrZLjOagzPYXCxrsircA4xXQP4gFeIM2AQOIXEnwR2hmNyhjKMpoHGc%2BbUPFKuIMmfXRrvUOznh43l%2F5mIcCd%2FOIogJAGxKtO4Yl2LM4BgDnRo2vMjLJMhCUhwIkR%2FJhuFtN99bHrBNcv%2FLfS5wD%2F88tWiV8KxVkqRjAgcmqyYWtyLuzIr%2FiR%2F9m8ZakH1Bs8CFipYYxXxjs73bhpU%2FUmN5gX6EITjUro6eFSoYnOfzt5x2qcQqo7mpzxI79%2FIVLK3om3D%2B3gYnXl2a1nH8bqMZdbjKXLU8ghBZmf4T9abg8%2FfoqDOf%2BQV%2FhbqanwDFVkvywnFbujDa7RITbaGHUNZB75ID7iywrROHvUArzCP4y5%2BNZ5LYpsty8hLYq%2BJm%2FlbA6KqvxHi1wA2OrStto2N%2BEwCVA4yGUDTXoRORKMo26X%2BF6n8LAQpMCOOXZkV7Qcsxdt1gRCyNAV6BhhvdBn3Ntu1wgXy%2BjAZpPZrKS0lkGSb1APPczkrVcdSgg4y7pLrIpJfeBnurzxhmOoqiKiN6%2F3kZgJ%2FZXClQuJPiGv%2BGhhYTRnCoBwpDVvbruDbHZqqMijG20DNVA1kJrVkKuI74MZ2u9%2BzWmBvIaHOoFuPuIgVDBFrndXmdr9aaJ0FQDoV4t9RV%2BWBbnIFvMO2h3ckGOqUBYHbpXBA9mecdqe%2F24mYkzgCCRvJu96NdAhDoS54AIGEvGD1zdaGUjbR0%2Fu%2FQWfRp48ihaWKKYMoW9vFZqYEqEOuM3RDcKSubvBD%2FOj%2Ff4DllOkNiw4yevFQ0gOJvkdLnx9fTF63ayZf0BusVHq0pz7%2Fj3UCqB9qnZrAJ8kYAMUNcO1IcrxdtNtYq6vzuIon1ZxuMx7YibdCXqUuKrpU5dLO6%2BsjM&X-Amz-Signature=623fc4193166b492ee63f3b474e6f60f4b26fc4c17f379cdc92cb885ead2607e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR62WPBC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAh6z3a7oc0yV4NQLuYEISUkvBm5iqFmJlXrK4a9xIpbAiEAzAICI8M4VoNWN6%2F47AqbNQK3sSurc3ZaCIlYM6RmpAIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrZLjOagzPYXCxrsircA4xXQP4gFeIM2AQOIXEnwR2hmNyhjKMpoHGc%2BbUPFKuIMmfXRrvUOznh43l%2F5mIcCd%2FOIogJAGxKtO4Yl2LM4BgDnRo2vMjLJMhCUhwIkR%2FJhuFtN99bHrBNcv%2FLfS5wD%2F88tWiV8KxVkqRjAgcmqyYWtyLuzIr%2FiR%2F9m8ZakH1Bs8CFipYYxXxjs73bhpU%2FUmN5gX6EITjUro6eFSoYnOfzt5x2qcQqo7mpzxI79%2FIVLK3om3D%2B3gYnXl2a1nH8bqMZdbjKXLU8ghBZmf4T9abg8%2FfoqDOf%2BQV%2FhbqanwDFVkvywnFbujDa7RITbaGHUNZB75ID7iywrROHvUArzCP4y5%2BNZ5LYpsty8hLYq%2BJm%2FlbA6KqvxHi1wA2OrStto2N%2BEwCVA4yGUDTXoRORKMo26X%2BF6n8LAQpMCOOXZkV7Qcsxdt1gRCyNAV6BhhvdBn3Ntu1wgXy%2BjAZpPZrKS0lkGSb1APPczkrVcdSgg4y7pLrIpJfeBnurzxhmOoqiKiN6%2F3kZgJ%2FZXClQuJPiGv%2BGhhYTRnCoBwpDVvbruDbHZqqMijG20DNVA1kJrVkKuI74MZ2u9%2BzWmBvIaHOoFuPuIgVDBFrndXmdr9aaJ0FQDoV4t9RV%2BWBbnIFvMO2h3ckGOqUBYHbpXBA9mecdqe%2F24mYkzgCCRvJu96NdAhDoS54AIGEvGD1zdaGUjbR0%2Fu%2FQWfRp48ihaWKKYMoW9vFZqYEqEOuM3RDcKSubvBD%2FOj%2Ff4DllOkNiw4yevFQ0gOJvkdLnx9fTF63ayZf0BusVHq0pz7%2Fj3UCqB9qnZrAJ8kYAMUNcO1IcrxdtNtYq6vzuIon1ZxuMx7YibdCXqUuKrpU5dLO6%2BsjM&X-Amz-Signature=a113b3a159b14c343720c5ab16fd9e7bc9a0018709a42d96bf5e31beea33e5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

