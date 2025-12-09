---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKY6ZHEJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChRvwrQFgfpkw0iEZbEQ1e3C01cGYjhUEN0GE383snsAiAJSe67BNCAFbVVjtBxrnjpO1ZYNiSvQRk64lle8jiMRyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM97j2IXvd2phdwWwiKtwDZQ23nMf%2BSl12KL%2FHopdSWNA3rp2kzvngPu8TpKxxKRJ%2Fc41PL%2FKRClIyLx2T4dCqNY3f%2BUPCJMS0821cVx1FvzqoHWKnZdXnaCX2ov65KX1rGl0k4Bd%2BNlRZm3X0uXccxm8PF0k%2BdJau5I0BjDEl0lOlY87meetMuFW9QeX2kwHsHrjbPy6oQn6zFzgtg6a25y6D0P8CRlzrw9mVQAh5PvOk%2FSXnCXg2MF6madH9Vjx1QohXSFQ6%2FBohwUiBMhkKbrwFM8AAp8xc%2BWGrIGgKM39ffldYxOnNOmytZvPoJLIS5kF6G4ukjBX0iK7kVC9TFXfNEZbGQYPfRTrkVoPE4Vj4KPSkmelTAY8rmrThJmPQ%2Bl1yUO1qne3K5VcGki%2FVM3kg3UYuZc5kpwJ0hXZ1Mbo%2F2%2B8ejxfOY313%2FQIGNNOekjCuDzeskpGCGaZrrDZzflGjEdr8GsX7aiNyxR%2BFw8l1CO%2F%2BROqW3lRr51F%2BxZPrbDREKLjF53pGY0CRR1ddFoQLKl8EQYyf47j4PX%2BuZMAI4RlZerO%2FhpKB53H23lyAg1eTf9VOT2dQt8kmLAHczzt%2BD8cKk6rNJdQmwyFbhanMsW5yJYK%2BqNQCnnnN3lu37qjo8H7wSZBZuQMwjendyQY6pgGWSLDMBCIFTES2qHTUu3jt8mKgldk7rHuiFyzdLBVLxd1ZTsyzvcq4uMXWJ1REIMzra4y8OUfqzWSYSsN4JB3rgOMyCzYMOCBBw0P9JWuB95e1esLNbNVkmXsmkkLwzVjuJnj8BuegP6rd8J6Krk6C6ZWtbD8Lm%2BzAqoT6dMOS7LQzgpm8tZlT7wCSbNCxqrR5lq2vlWd%2B%2FDPXhAk7IL2w67DrGv4p&X-Amz-Signature=ffb8c70720a90dc06069197e36dc4fd90ee652a3d4ccdf91da35d6dd2346392a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKY6ZHEJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T012127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChRvwrQFgfpkw0iEZbEQ1e3C01cGYjhUEN0GE383snsAiAJSe67BNCAFbVVjtBxrnjpO1ZYNiSvQRk64lle8jiMRyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM97j2IXvd2phdwWwiKtwDZQ23nMf%2BSl12KL%2FHopdSWNA3rp2kzvngPu8TpKxxKRJ%2Fc41PL%2FKRClIyLx2T4dCqNY3f%2BUPCJMS0821cVx1FvzqoHWKnZdXnaCX2ov65KX1rGl0k4Bd%2BNlRZm3X0uXccxm8PF0k%2BdJau5I0BjDEl0lOlY87meetMuFW9QeX2kwHsHrjbPy6oQn6zFzgtg6a25y6D0P8CRlzrw9mVQAh5PvOk%2FSXnCXg2MF6madH9Vjx1QohXSFQ6%2FBohwUiBMhkKbrwFM8AAp8xc%2BWGrIGgKM39ffldYxOnNOmytZvPoJLIS5kF6G4ukjBX0iK7kVC9TFXfNEZbGQYPfRTrkVoPE4Vj4KPSkmelTAY8rmrThJmPQ%2Bl1yUO1qne3K5VcGki%2FVM3kg3UYuZc5kpwJ0hXZ1Mbo%2F2%2B8ejxfOY313%2FQIGNNOekjCuDzeskpGCGaZrrDZzflGjEdr8GsX7aiNyxR%2BFw8l1CO%2F%2BROqW3lRr51F%2BxZPrbDREKLjF53pGY0CRR1ddFoQLKl8EQYyf47j4PX%2BuZMAI4RlZerO%2FhpKB53H23lyAg1eTf9VOT2dQt8kmLAHczzt%2BD8cKk6rNJdQmwyFbhanMsW5yJYK%2BqNQCnnnN3lu37qjo8H7wSZBZuQMwjendyQY6pgGWSLDMBCIFTES2qHTUu3jt8mKgldk7rHuiFyzdLBVLxd1ZTsyzvcq4uMXWJ1REIMzra4y8OUfqzWSYSsN4JB3rgOMyCzYMOCBBw0P9JWuB95e1esLNbNVkmXsmkkLwzVjuJnj8BuegP6rd8J6Krk6C6ZWtbD8Lm%2BzAqoT6dMOS7LQzgpm8tZlT7wCSbNCxqrR5lq2vlWd%2B%2FDPXhAk7IL2w67DrGv4p&X-Amz-Signature=34a54b4a8c1ff7539e8b58e0bc3fe9169b9069086251d67ce8b7541833a3d6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

