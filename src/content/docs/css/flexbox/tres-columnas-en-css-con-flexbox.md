---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JLHVAQA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXcayFsRDWXTYpa1cwLUj5Z2BSymLbH82GrQeJ%2FoOR6gIhAI7%2BRurjavlVQLE3TjyV5rR2ANk%2BVP9GEuykz8Cd83gQKv8DCFoQABoMNjM3NDIzMTgzODA1Igw2fsNPxVggUwE95PMq3APro0c%2BmHn%2Ftu9x%2BuEzm6OWRc8LY5Ve1OINxKuxrHApxraqKJ9lscX9Zys3DT8saMy0V2WMMSrJjy2OXwW%2Fb0g3UOeJ5cX3c947jApbbOpxRKchZThyAja6BTl91hAtU2uq29y9FYNni7kEwqclz1OzyyG6MaRsrR6OfyfDV6kKzYIHA1nF%2BeUx3P%2FlFIWJhNpc%2B7iUNl%2FeY2CQrcJ7XyjpjUo17B5t4jEinRadC4wNiWOXKhBauviZrM8SxKXSdibjrtsUQE42BzGLjdocfel7juS81tHxhY5knZMZUukeH6zggO4nd4teRGEmfWHgRZxXhpnrEQr0uEGf1cAmO%2BVkikGXDigsW1uRNFYQlw0Xovh8qwHrCv5U5LcLGQ2CryxitpWbH4B4hm7%2BxPZ%2FUwYMaqI%2FKcMEwnIYHOqY19lkAtyjWYwJqz47Fpz866SVtkxcIqTVdB17eDYlKuaGYUwSyiBTF8LmykCFvvXFelN%2F1nCKcil7pU2xe1gMx13EByjmn%2F0YyLwP6nN594UaSTh3WDTDdHNIrgR3R6hvgJH4pHjAK%2FWKMklSKQY%2BYOahXs5y52m08SrpGi5r8jZldXC7PjAww46tQL886vWyn9oQuRS7yCWIR4u%2Bat4fLzDqxsrJBjqkAdR31hVKBz85ccpooUzrHur%2FCnKPAOrz88gi51D5Ksco%2BbyMw1AayBrNhhBcQp4uR7xW0578WhI3qCAdSC8qIkp%2FPVCjX32nHP6ifzq8j02InWHt4xDhMwtfI5GdjPzW%2BKyeMwLA40OC%2FtwbFGvYOsjupfhgBtuzNRbsy9wHiQh58p%2BemwTxqQRlq8ANf7%2BIg6gUnKjFmZ58sxWHktBk26L6kQQ%2B&X-Amz-Signature=f8799204b2ab19a7047a0ede077036665c3f0766dcca94aff5e2841c0525371d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JLHVAQA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T102656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXcayFsRDWXTYpa1cwLUj5Z2BSymLbH82GrQeJ%2FoOR6gIhAI7%2BRurjavlVQLE3TjyV5rR2ANk%2BVP9GEuykz8Cd83gQKv8DCFoQABoMNjM3NDIzMTgzODA1Igw2fsNPxVggUwE95PMq3APro0c%2BmHn%2Ftu9x%2BuEzm6OWRc8LY5Ve1OINxKuxrHApxraqKJ9lscX9Zys3DT8saMy0V2WMMSrJjy2OXwW%2Fb0g3UOeJ5cX3c947jApbbOpxRKchZThyAja6BTl91hAtU2uq29y9FYNni7kEwqclz1OzyyG6MaRsrR6OfyfDV6kKzYIHA1nF%2BeUx3P%2FlFIWJhNpc%2B7iUNl%2FeY2CQrcJ7XyjpjUo17B5t4jEinRadC4wNiWOXKhBauviZrM8SxKXSdibjrtsUQE42BzGLjdocfel7juS81tHxhY5knZMZUukeH6zggO4nd4teRGEmfWHgRZxXhpnrEQr0uEGf1cAmO%2BVkikGXDigsW1uRNFYQlw0Xovh8qwHrCv5U5LcLGQ2CryxitpWbH4B4hm7%2BxPZ%2FUwYMaqI%2FKcMEwnIYHOqY19lkAtyjWYwJqz47Fpz866SVtkxcIqTVdB17eDYlKuaGYUwSyiBTF8LmykCFvvXFelN%2F1nCKcil7pU2xe1gMx13EByjmn%2F0YyLwP6nN594UaSTh3WDTDdHNIrgR3R6hvgJH4pHjAK%2FWKMklSKQY%2BYOahXs5y52m08SrpGi5r8jZldXC7PjAww46tQL886vWyn9oQuRS7yCWIR4u%2Bat4fLzDqxsrJBjqkAdR31hVKBz85ccpooUzrHur%2FCnKPAOrz88gi51D5Ksco%2BbyMw1AayBrNhhBcQp4uR7xW0578WhI3qCAdSC8qIkp%2FPVCjX32nHP6ifzq8j02InWHt4xDhMwtfI5GdjPzW%2BKyeMwLA40OC%2FtwbFGvYOsjupfhgBtuzNRbsy9wHiQh58p%2BemwTxqQRlq8ANf7%2BIg6gUnKjFmZ58sxWHktBk26L6kQQ%2B&X-Amz-Signature=7ed5b8bf7d577845208f78a492268e6b99e4be23966a20668edaab7ae007df77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

