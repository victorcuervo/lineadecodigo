---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT76WWHW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaInmDYA3qPlg6zoWL6xE7v3yNFBsm4zFx09YC7Naz0gIhAOK%2FcP%2BF9xwwVUr3ln8P9yjnYFjNFPAQQPi7x44FQrs3Kv8DCG8QABoMNjM3NDIzMTgzODA1IgzSoQzh8S4ahn9VNiAq3APN06ZiAJ4uzOkukLchdG7ZPdF8Vsxj0UU0BVJXGviDgH5V0n3eY%2F5mC3SAKBLu3LstV591f%2Fz5pOQ6R7BANz7usq%2BPlk%2BkHi%2BFgB74vRZGIlAT9%2BD%2F8iWzntNeyqsDzsNGusdfKZGQYqu3jp7qaM9s1G3ZF8Fd5EDw0BR%2FX3V9RJ%2FAQMOyvrFQMBPx%2Bwtec2rTHBgisgmkquFuenDvbNc8dQ0O5Zld5y54%2F3rVnmLPFkJf%2FZ79mYMTUaEmTpcpGb%2FWHXtzwKbhYfPx%2BZ6w8S1iMR9vR9Um4BBs3J%2FFdqb2TCQYTqruogaxgPHq%2FB2n0ttEAr6UwgIHtq09VAnfD5hgsh8jWxTauc2QuFP0OHXwI22PumqHZrXWgX2GxvEYu3qHy6AT4IUTPKtcJn6LLQx03gY%2FsT%2B4X%2BMpEYizQrZFAE3b4FLY0CdUd%2FVo7AjqiGNYFlTfvE5nRq8uZIlNZzwG0POhlUzN71ldF7VDXA5FondCU4sqPcpJ33MZNDhGnD%2BTyjzZMnvUl%2BKsOCYGc1YHLNbyJ8oJbfxZwxoaSr175US01Juj1mXrCYwU6ZG7B1RN6ZLKrip292VYWR%2FEdE5fZnpDnwzbaAz7jNv2I5K%2BtPRATKrDxDx6JCLHNTDV%2FM7JBjqkAWEWwBOpOPzb8fzDgYBMAQwJ79G5fZoK2vP5l%2BviLo5Hbj6j0Cw6k2Cetgg481ItR1OW%2Bd9UYd2OAhKSyK2QGHC0IjbDsDkImxMcNPB5pqNd0iOZhpJWZGltzsLLP68eI1ghiMYMprASWW5W1jIQInX0PSc6gw5VJvq7E4DYVlotaPCSAWa%2BFe8H499Eqx%2FblqqyHaoKM%2BtDrVaZF%2B7fWhDLxyGn&X-Amz-Signature=2b2a9c6b99669d41c8521e091722b6807453266ed93f2451c3565d7b8c6cae19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT76WWHW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaInmDYA3qPlg6zoWL6xE7v3yNFBsm4zFx09YC7Naz0gIhAOK%2FcP%2BF9xwwVUr3ln8P9yjnYFjNFPAQQPi7x44FQrs3Kv8DCG8QABoMNjM3NDIzMTgzODA1IgzSoQzh8S4ahn9VNiAq3APN06ZiAJ4uzOkukLchdG7ZPdF8Vsxj0UU0BVJXGviDgH5V0n3eY%2F5mC3SAKBLu3LstV591f%2Fz5pOQ6R7BANz7usq%2BPlk%2BkHi%2BFgB74vRZGIlAT9%2BD%2F8iWzntNeyqsDzsNGusdfKZGQYqu3jp7qaM9s1G3ZF8Fd5EDw0BR%2FX3V9RJ%2FAQMOyvrFQMBPx%2Bwtec2rTHBgisgmkquFuenDvbNc8dQ0O5Zld5y54%2F3rVnmLPFkJf%2FZ79mYMTUaEmTpcpGb%2FWHXtzwKbhYfPx%2BZ6w8S1iMR9vR9Um4BBs3J%2FFdqb2TCQYTqruogaxgPHq%2FB2n0ttEAr6UwgIHtq09VAnfD5hgsh8jWxTauc2QuFP0OHXwI22PumqHZrXWgX2GxvEYu3qHy6AT4IUTPKtcJn6LLQx03gY%2FsT%2B4X%2BMpEYizQrZFAE3b4FLY0CdUd%2FVo7AjqiGNYFlTfvE5nRq8uZIlNZzwG0POhlUzN71ldF7VDXA5FondCU4sqPcpJ33MZNDhGnD%2BTyjzZMnvUl%2BKsOCYGc1YHLNbyJ8oJbfxZwxoaSr175US01Juj1mXrCYwU6ZG7B1RN6ZLKrip292VYWR%2FEdE5fZnpDnwzbaAz7jNv2I5K%2BtPRATKrDxDx6JCLHNTDV%2FM7JBjqkAWEWwBOpOPzb8fzDgYBMAQwJ79G5fZoK2vP5l%2BviLo5Hbj6j0Cw6k2Cetgg481ItR1OW%2Bd9UYd2OAhKSyK2QGHC0IjbDsDkImxMcNPB5pqNd0iOZhpJWZGltzsLLP68eI1ghiMYMprASWW5W1jIQInX0PSc6gw5VJvq7E4DYVlotaPCSAWa%2BFe8H499Eqx%2FblqqyHaoKM%2BtDrVaZF%2B7fWhDLxyGn&X-Amz-Signature=84ec79d912bb187598a145310e41500dc8da08866d28325e6015210777e786bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

