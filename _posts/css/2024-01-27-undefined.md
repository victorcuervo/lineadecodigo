---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7RHEQB3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDNMaYWD3wqQ%2BtaJqh7g0V5L9MPcj5fpnBqk98Z1k73JAiEAn3I2Cp5CPI8a7aNqb%2F2wK6iite3Df2aUXcD1cwa4mUsq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDIHpt3n95IQDdoWnQircA5ZzZ0pCt0n5qgQk2%2BsY6YDoEAIL8%2FQfV237mSEWMMks4vtIDZGd8lAuB8GVOVd8%2Fv7IJdYqIT3C4qBaPwBIWDOuB1ScKsxptgz%2Bb7EwpaJsq44SwBFhPzhuPOMFElPMnD6yU0M6Y%2Fj120juMe9NQMoD7zV6z%2F01w8zifiFb821%2FsCQQJ%2FuhcNWK5bzBLWl%2BpCRz708xGGl6%2BBCKYsux6ic8KBpAOCIhRlJIDbPP4pSwuqAISxJ6TuV7uRQB7S4QOKFDXQJp5k4eC94xpRmJW19gqliejZL%2FVrr%2FjAAaUE3fxdse%2BGwKqd6e5UAys%2BLn46Kta1gEmhzkJwsoBeCUcrnObZbQSCWzQkMleBkedfMbjdJRuCBHewGj691xH1m2ir59dfCu6Dd7971Pdb5Aioyn5dJTsr69weRT%2BVWkohFPNQMkerSRaWI80xC0v4ltPcdqSCCFBA0bfOTXxChyBTVi5AvfqAXeGhrdKbLJBLGPiML%2FbHcDP4ke49c9tH0qIu7NrH4FtDOhuDYXHK6e%2BKaZFniiE%2FHHW3nAjyasks4DrqhU5Qxa8kNcBexpnKs1Wnm5d1fr5sk8X7VFdhYvRB5haxvNSUJFnVs7G%2BH4ZnB%2B%2BmwV%2BwqIaAyXPL8XMJT%2FvckGOqUBd9jM3Qqz1BLoyi98L7s9VqEJR841VfL8qGZl%2Be1wntqClqLWsdGmsVVaFP6pBgXySRFOy2JFqZKtiifJDS0G1h9f5DR4LIEoGkblcvaxQSdsoKbL8uW9V2mND7vyKsNLSnTJsH0Am8Nt%2BaKjTQRR%2FJqEeJ5nXZnSWKsmBAHA4y%2FONXKjveNEMFyAawhmrtr6%2FtlTzPLl0qGqdkgi%2FyV%2FgKMzziXl&X-Amz-Signature=de342e6eaf9cc86abc178de40ac4c819065bd242837a2ee2d2c4bf035b5370c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7RHEQB3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIDNMaYWD3wqQ%2BtaJqh7g0V5L9MPcj5fpnBqk98Z1k73JAiEAn3I2Cp5CPI8a7aNqb%2F2wK6iite3Df2aUXcD1cwa4mUsq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDIHpt3n95IQDdoWnQircA5ZzZ0pCt0n5qgQk2%2BsY6YDoEAIL8%2FQfV237mSEWMMks4vtIDZGd8lAuB8GVOVd8%2Fv7IJdYqIT3C4qBaPwBIWDOuB1ScKsxptgz%2Bb7EwpaJsq44SwBFhPzhuPOMFElPMnD6yU0M6Y%2Fj120juMe9NQMoD7zV6z%2F01w8zifiFb821%2FsCQQJ%2FuhcNWK5bzBLWl%2BpCRz708xGGl6%2BBCKYsux6ic8KBpAOCIhRlJIDbPP4pSwuqAISxJ6TuV7uRQB7S4QOKFDXQJp5k4eC94xpRmJW19gqliejZL%2FVrr%2FjAAaUE3fxdse%2BGwKqd6e5UAys%2BLn46Kta1gEmhzkJwsoBeCUcrnObZbQSCWzQkMleBkedfMbjdJRuCBHewGj691xH1m2ir59dfCu6Dd7971Pdb5Aioyn5dJTsr69weRT%2BVWkohFPNQMkerSRaWI80xC0v4ltPcdqSCCFBA0bfOTXxChyBTVi5AvfqAXeGhrdKbLJBLGPiML%2FbHcDP4ke49c9tH0qIu7NrH4FtDOhuDYXHK6e%2BKaZFniiE%2FHHW3nAjyasks4DrqhU5Qxa8kNcBexpnKs1Wnm5d1fr5sk8X7VFdhYvRB5haxvNSUJFnVs7G%2BH4ZnB%2B%2BmwV%2BwqIaAyXPL8XMJT%2FvckGOqUBd9jM3Qqz1BLoyi98L7s9VqEJR841VfL8qGZl%2Be1wntqClqLWsdGmsVVaFP6pBgXySRFOy2JFqZKtiifJDS0G1h9f5DR4LIEoGkblcvaxQSdsoKbL8uW9V2mND7vyKsNLSnTJsH0Am8Nt%2BaKjTQRR%2FJqEeJ5nXZnSWKsmBAHA4y%2FONXKjveNEMFyAawhmrtr6%2FtlTzPLl0qGqdkgi%2FyV%2FgKMzziXl&X-Amz-Signature=3bd48f25cef3ef04b21e057f0149da330ad66754f8e92d7eb93fe507a32fc9b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

