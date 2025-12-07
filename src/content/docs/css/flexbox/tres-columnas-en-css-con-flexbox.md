---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OD3FO4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7bCYapHzmUrWcYKlgGJ8weK5XJgDLKG8Av1uFwtjcxAiBFLHFqci0gOVJ4py8FWezPIUDiGGcYH5ZFedwODHijkiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOTe0iSUFN%2BKahP6pKtwD%2B4moxhreF0PND%2BdRtkbVOWt8X04BIBH22r%2B7r%2FAdZiQkcMSgyY6odqYSBr2jvXnguRKoEvf5KBsiWeGZjRqbImFCRXO73ejOzTxf5FbCPz2PpzQq0Se7alaHdKJEe82plj7EvD9NOKsRdevswOEYHCiI8CU2f4PbQTWrra0hX%2BtFIOBYdg0Fsi1kNVFUrlKswDxhfP1HhZ8pq1KBJxuUsDf4oYJLf6YcKPn%2BfhTUOrQEzEnCJ%2Fasr8imgqNtuOuXLT4my57d%2Fzj%2FrH7Srt5XAA2%2BzmV4Mq6KnrBcnOw3nL9zv2%2B1BIQj6IHf9epkHqCcJVgkX60y%2BLhTfAKgpYtlEy1LfeqjGrg6HQaC4GazmOeEb0hxT5GjrJ9XSXIC4A0wVNcPJ7XnXxgygeRd4i9RzW7mNVCqVtMCmqswVPiYr5gphMZnnI2%2FkdtHE7OEbfuWLEbV4KsIGLpn4Km%2FwrOvTOqK%2BmPvriqRAIhKRPOkzg5QJRUQjgRz92UmmFYrSFfXi2epdlmwYDyGd2yJEYIBJZn1HkWcNZxuefo2tJ5ulr%2BOoDDJa4tXsdzoS9nBNh5%2BjfdKnyUNLgFAJjz83wyR25uOWJXIj%2FFnonhL74HHI2ZJMjKn6FVWD8IGvQAwvaDUyQY6pgHZ9dhnDSmeb%2Fnl%2BuHvJJLnsrvGLXGPmwt%2B2sRjr4LpSLSuU9ldmd28cGHOPXNb1DZ6pUzDU2iVfsOZOVJld9c%2BBnZDDq0YkUYCAjyL4mLQ1VTdv3oR2alPeWhLKJlrcbOmUx%2FH2nTpoOfsZfC00se1bn69vEKOcJIyYZ2QimFvb4B2PltFJbaFoP%2Bnp3CjYE80jAQP%2B3NBEzSZyY0Mmv0HZmb%2Baj3T&X-Amz-Signature=640dba0a5b741f76ddc755f87409de370fd11dbc6f241fa643a70e7ff6f48557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OD3FO4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7bCYapHzmUrWcYKlgGJ8weK5XJgDLKG8Av1uFwtjcxAiBFLHFqci0gOVJ4py8FWezPIUDiGGcYH5ZFedwODHijkiqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOTe0iSUFN%2BKahP6pKtwD%2B4moxhreF0PND%2BdRtkbVOWt8X04BIBH22r%2B7r%2FAdZiQkcMSgyY6odqYSBr2jvXnguRKoEvf5KBsiWeGZjRqbImFCRXO73ejOzTxf5FbCPz2PpzQq0Se7alaHdKJEe82plj7EvD9NOKsRdevswOEYHCiI8CU2f4PbQTWrra0hX%2BtFIOBYdg0Fsi1kNVFUrlKswDxhfP1HhZ8pq1KBJxuUsDf4oYJLf6YcKPn%2BfhTUOrQEzEnCJ%2Fasr8imgqNtuOuXLT4my57d%2Fzj%2FrH7Srt5XAA2%2BzmV4Mq6KnrBcnOw3nL9zv2%2B1BIQj6IHf9epkHqCcJVgkX60y%2BLhTfAKgpYtlEy1LfeqjGrg6HQaC4GazmOeEb0hxT5GjrJ9XSXIC4A0wVNcPJ7XnXxgygeRd4i9RzW7mNVCqVtMCmqswVPiYr5gphMZnnI2%2FkdtHE7OEbfuWLEbV4KsIGLpn4Km%2FwrOvTOqK%2BmPvriqRAIhKRPOkzg5QJRUQjgRz92UmmFYrSFfXi2epdlmwYDyGd2yJEYIBJZn1HkWcNZxuefo2tJ5ulr%2BOoDDJa4tXsdzoS9nBNh5%2BjfdKnyUNLgFAJjz83wyR25uOWJXIj%2FFnonhL74HHI2ZJMjKn6FVWD8IGvQAwvaDUyQY6pgHZ9dhnDSmeb%2Fnl%2BuHvJJLnsrvGLXGPmwt%2B2sRjr4LpSLSuU9ldmd28cGHOPXNb1DZ6pUzDU2iVfsOZOVJld9c%2BBnZDDq0YkUYCAjyL4mLQ1VTdv3oR2alPeWhLKJlrcbOmUx%2FH2nTpoOfsZfC00se1bn69vEKOcJIyYZ2QimFvb4B2PltFJbaFoP%2Bnp3CjYE80jAQP%2B3NBEzSZyY0Mmv0HZmb%2Baj3T&X-Amz-Signature=b1dd4fb88f6b6022ed615a7d754e472d202ffc5a22d759dcb02e0f4361d69b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

