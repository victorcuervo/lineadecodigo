---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7HMONPN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4WG1wxAqDInQ783vrS1oEiDn0rTNxJQO4U8DMTJqrAAIhAMdqiX9QxT1y42spyfhWzG5L9joU1ghxx0RO9XttojfXKv8DCFsQABoMNjM3NDIzMTgzODA1IgwQ0QCoIlAYcqm0UDIq3APO06H8vAG%2B7W2N01lirwwJzymouu4cqcdYLSz0jcerWaRqiIrj1pkEA0IKy%2BlWrfgRx68cLaRsnrQ1zmd%2BiG2WQ0V843kDR7oJilG6rLu9S2N%2FeOEYdTMN3o26ZQOIH7y0khesJ0JDHXg4lOt27npLoukwU6bAsH91eznS%2F3jBlYkOg%2BEpSTkKSskQHdpjEdNMBfGJFmFK9bjPBSwUyIrXKE%2BwsRTuzzUdw0N99mIRTDMQg2TYpyHUBR0DA6jB%2F%2F%2FgP0HSTyuMvrsbbsXCJ2YhDlHTlewNApx2xcZ4Iw6q8Co4Bvus927gjxi63%2F7DFMkjC9sm7H9foksEzsuI1OTGzNq7Ee4gkhp4GjPJHbTtsW7bbjZ7j0uDW80e7nxsfzXwN1zQCHLXX%2BoTCpFC%2FhJ5tOrwmZPJB0DjbzsyW05%2F7RrtkHPP5M%2Bpim5TbwORqZls%2FJ5%2FC3DKN9rtPEomhDfvx9nwjkwBvS9gfmnmQeW6XuLa0bn0Sj8w4VRSm%2Bf2Z08jfW48He0SaKbkOsDk%2F%2BSQ7pgMkDWGfNXm%2FKCHWyDdp18lywoLND0BiQrf%2FzO56HwSSEfwdbxCR1UYbducGj98Aaa7MEgx4ZAWXpBR%2Fsp7nDD96BCjwT8gfxovhzCl0crJBjqkAZNBLm1KDn3v9H4L9g6RJgzizy2rbmiuDLv%2BPjNmTtRhcp%2Ffwgpp6RS2tYBYTcJfcRYqq5BmdtQyff7vAHMEhnCFG0XgOcI20mmajn8n%2BP%2FOTUp0Ijcvo9zmYfkVjEV%2FpBp%2B%2Bp5rqztegPpIjAoU7J%2BVXB2E%2F8iVzRZ%2FuePGhXhCWB%2F9l%2BYqVQUBTWzZZbYz3Cn%2BZ0yg2zWFm%2FLEV2OY01v%2B0PBD&X-Amz-Signature=c906d40b8f2f1e30e257465700f543fed1e03f56cde3cd112f9fef98f4bea29e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7HMONPN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4WG1wxAqDInQ783vrS1oEiDn0rTNxJQO4U8DMTJqrAAIhAMdqiX9QxT1y42spyfhWzG5L9joU1ghxx0RO9XttojfXKv8DCFsQABoMNjM3NDIzMTgzODA1IgwQ0QCoIlAYcqm0UDIq3APO06H8vAG%2B7W2N01lirwwJzymouu4cqcdYLSz0jcerWaRqiIrj1pkEA0IKy%2BlWrfgRx68cLaRsnrQ1zmd%2BiG2WQ0V843kDR7oJilG6rLu9S2N%2FeOEYdTMN3o26ZQOIH7y0khesJ0JDHXg4lOt27npLoukwU6bAsH91eznS%2F3jBlYkOg%2BEpSTkKSskQHdpjEdNMBfGJFmFK9bjPBSwUyIrXKE%2BwsRTuzzUdw0N99mIRTDMQg2TYpyHUBR0DA6jB%2F%2F%2FgP0HSTyuMvrsbbsXCJ2YhDlHTlewNApx2xcZ4Iw6q8Co4Bvus927gjxi63%2F7DFMkjC9sm7H9foksEzsuI1OTGzNq7Ee4gkhp4GjPJHbTtsW7bbjZ7j0uDW80e7nxsfzXwN1zQCHLXX%2BoTCpFC%2FhJ5tOrwmZPJB0DjbzsyW05%2F7RrtkHPP5M%2Bpim5TbwORqZls%2FJ5%2FC3DKN9rtPEomhDfvx9nwjkwBvS9gfmnmQeW6XuLa0bn0Sj8w4VRSm%2Bf2Z08jfW48He0SaKbkOsDk%2F%2BSQ7pgMkDWGfNXm%2FKCHWyDdp18lywoLND0BiQrf%2FzO56HwSSEfwdbxCR1UYbducGj98Aaa7MEgx4ZAWXpBR%2Fsp7nDD96BCjwT8gfxovhzCl0crJBjqkAZNBLm1KDn3v9H4L9g6RJgzizy2rbmiuDLv%2BPjNmTtRhcp%2Ffwgpp6RS2tYBYTcJfcRYqq5BmdtQyff7vAHMEhnCFG0XgOcI20mmajn8n%2BP%2FOTUp0Ijcvo9zmYfkVjEV%2FpBp%2B%2Bp5rqztegPpIjAoU7J%2BVXB2E%2F8iVzRZ%2FuePGhXhCWB%2F9l%2BYqVQUBTWzZZbYz3Cn%2BZ0yg2zWFm%2FLEV2OY01v%2B0PBD&X-Amz-Signature=dd5d9d6fe8c4612575099de11b99b89372a5a97b19c861e9b45fa54a401aa37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

