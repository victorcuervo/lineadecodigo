---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W2SUBOS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQx4hEqDOpvz74uBdAMEwPGsg8aSrRY5zTeZxpSpvnRQIhAKxSE6bdYN%2FfUL7Ko3slDWtNc3iDp%2BUQJJWC5viLffXCKv8DCHoQABoMNjM3NDIzMTgzODA1IgyV9MPoHK5D97%2B1a0sq3ANaJt7IK5NJSgENeG3GOsXV8WPnCl3AeZveKdcSRjdpDnP9GzPKWNmWeQ81k829YurDFYzFSG14vQyZto5dnfmoyxRb9uuCTpgcznoNswXP1277R2O065PmKuvJ%2FtLTcGHP23xoeAvYd9EiWnnjY4AgkiUvviVzpU0t%2B7EF2nCdVPnVKNgXXFJ5SyALNYFY3J84ZuUuzHK4xeJJ8af47eZmo7%2F4jTVeDpRSOK145rbcz%2FqxzL7SwtMhtnINUvFjnTQSRwNer7olP1nxDFM64QGb65gNa650pMVtpGYS0yBerP%2B8WSZUxkKxn2F6iYqEtbWHrQzGxG4TeDem0UkGD6mimipvy1sOeJHjqtMI91O1E3pqq%2F6UICrfCMNG2Dmunu2oLuHkolupeNJhD1PRREQreAXAmLrQJ3cqZOXpT%2Fm5g04t1dbW3VWvgAc04tgXJZ%2BlLoQ%2Fdl0ZgyQnQtLcdYTCixqdMNk65tRiNVGIu9UpXgODbMcfzN71qRamTj6ax4sTcAQX9nvtGyyQ5n%2BNne%2FIn7LUX7w3HE%2BxL7sRG6qHUc7dHw4pCDwi17TCWMZZ8ZLAoFFpWg4YwstQEYKmLT%2B7Pvo%2Fnv6GA8fUKpLxjt5qr1YDXkImuhN%2F1ucDYDCJzNHJBjqkAZx5uXZcOQ8s5QGn1QPtUUSjHf8s94tKVBnEDhhQZXII7R%2FnJPNN%2BgWsILTZYO0d5STdrNgahgR%2BUG6BIfdOViWVgeJUeP1emcn6q3z4amHoSqkfChRuMY9HupzD25yH3i7PWVm6BV2LmF5L9Nkk8qMGjRURNO%2F3ZOm%2F3BBdJ4jCKj3v189GpYMOW8WMbIR15u9UGGLnrnlOzADKu1KWxn36kYLP&X-Amz-Signature=cdb41b832c937fe73159c18b32dc981a03255b6740ec8f8acbbdceabcd7c5111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W2SUBOS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQx4hEqDOpvz74uBdAMEwPGsg8aSrRY5zTeZxpSpvnRQIhAKxSE6bdYN%2FfUL7Ko3slDWtNc3iDp%2BUQJJWC5viLffXCKv8DCHoQABoMNjM3NDIzMTgzODA1IgyV9MPoHK5D97%2B1a0sq3ANaJt7IK5NJSgENeG3GOsXV8WPnCl3AeZveKdcSRjdpDnP9GzPKWNmWeQ81k829YurDFYzFSG14vQyZto5dnfmoyxRb9uuCTpgcznoNswXP1277R2O065PmKuvJ%2FtLTcGHP23xoeAvYd9EiWnnjY4AgkiUvviVzpU0t%2B7EF2nCdVPnVKNgXXFJ5SyALNYFY3J84ZuUuzHK4xeJJ8af47eZmo7%2F4jTVeDpRSOK145rbcz%2FqxzL7SwtMhtnINUvFjnTQSRwNer7olP1nxDFM64QGb65gNa650pMVtpGYS0yBerP%2B8WSZUxkKxn2F6iYqEtbWHrQzGxG4TeDem0UkGD6mimipvy1sOeJHjqtMI91O1E3pqq%2F6UICrfCMNG2Dmunu2oLuHkolupeNJhD1PRREQreAXAmLrQJ3cqZOXpT%2Fm5g04t1dbW3VWvgAc04tgXJZ%2BlLoQ%2Fdl0ZgyQnQtLcdYTCixqdMNk65tRiNVGIu9UpXgODbMcfzN71qRamTj6ax4sTcAQX9nvtGyyQ5n%2BNne%2FIn7LUX7w3HE%2BxL7sRG6qHUc7dHw4pCDwi17TCWMZZ8ZLAoFFpWg4YwstQEYKmLT%2B7Pvo%2Fnv6GA8fUKpLxjt5qr1YDXkImuhN%2F1ucDYDCJzNHJBjqkAZx5uXZcOQ8s5QGn1QPtUUSjHf8s94tKVBnEDhhQZXII7R%2FnJPNN%2BgWsILTZYO0d5STdrNgahgR%2BUG6BIfdOViWVgeJUeP1emcn6q3z4amHoSqkfChRuMY9HupzD25yH3i7PWVm6BV2LmF5L9Nkk8qMGjRURNO%2F3ZOm%2F3BBdJ4jCKj3v189GpYMOW8WMbIR15u9UGGLnrnlOzADKu1KWxn36kYLP&X-Amz-Signature=199a32bc399e76a0d94908aaa48d3134221e866af06ea3f067ee20c7aa1365b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

