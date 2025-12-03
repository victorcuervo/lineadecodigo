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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2VTT3D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGQdirc0wfZ8TXWrWfrRqAbvgTlsaHARKFedKNXo7DQ0AiEAoVbSwIFY65wyPCu2i2CRFzQxQbBhdyoW6ayhgAYKU%2Boq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKfSKJjpw5NmhbGyIyrcAwvo2OZgCFB3aOyy5X7kl57eWSzgaOcD9qcb2D8OCTcibhXocCChkxkLnLaOcFHWVavSAQt1zg4LGYjNAGHoDIVc1sdHM5pRAkO%2B6zxDP3dLvwKnzHul6WrvOy2CvMBJgAfrp8B7aoq1BjBxTl0N5mfiEpCrDfjsXrFDTe3Ka8QeKUjaR%2B4kagTcdWk%2BaHcCPE%2F1quxcyW7mXJSsc%2B3idQBdV3E%2FfVilqRVitvg%2FPFk%2FYBcIBa4Fu0CXSVhZM1TTgB%2BwIf3VOICPPCJIvqe06QOIOSjKHJ2EgfD2vQDvFXQ5r3SsDfqMd0FNgu4sjGvKAbks%2FeMufGlcQ09gFbJVZwCiJdMQIOTZl9VuDL6ZDmhH1QdHnOkxvwrNxdIgH0e4YAoiaghcQLTgqxlnKzjrdIEusIozc5lG0nTdY%2Fo8phtWSMZJfk5kfCFqf4SNJW3mV55EOfz8Fa9BZ01Y0XwRWj%2BRyRaD7vQjFqk0ikEmYgyfIf48XHRUbCbxhHbFHGM84ti90FXvKoOvdCDVX8EBMusv5UlmLfYlREgu3ydGvHuAgC99XSyOjGpszMBTyikMlYZehVrt9jAiQfa%2Faeo%2BJQI3XwAcfUghWniaDDp2OUiQVZr5xH%2FO%2BiB6Vb7xMJfVv8kGOqUB1JgRH2y1aQ%2F62UeGzFXPERqt3XIHvjlg0TDVdWFdduitynOjBaHNQbXQyeSUrH2okQvy%2BbF4uKmIN2U5Bknzo6yooEtVgZ%2B2iD9BMtssRXR%2Fpq7nd6OOzXwp3N4f4p6jAwbMyQnD4dPfnswaYUtPARp0qw6SMq%2FwHB9nQwrrThb0Q9CRp1VGimjlPp85ZQa1OuEw9yhlAyWOgNHkPRyQnXavrpLP&X-Amz-Signature=ba092bdc24d47a12ca7ff1e1d7eb781d8925e5dbd83a89f029cf3d84bdc73bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H2VTT3D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGQdirc0wfZ8TXWrWfrRqAbvgTlsaHARKFedKNXo7DQ0AiEAoVbSwIFY65wyPCu2i2CRFzQxQbBhdyoW6ayhgAYKU%2Boq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKfSKJjpw5NmhbGyIyrcAwvo2OZgCFB3aOyy5X7kl57eWSzgaOcD9qcb2D8OCTcibhXocCChkxkLnLaOcFHWVavSAQt1zg4LGYjNAGHoDIVc1sdHM5pRAkO%2B6zxDP3dLvwKnzHul6WrvOy2CvMBJgAfrp8B7aoq1BjBxTl0N5mfiEpCrDfjsXrFDTe3Ka8QeKUjaR%2B4kagTcdWk%2BaHcCPE%2F1quxcyW7mXJSsc%2B3idQBdV3E%2FfVilqRVitvg%2FPFk%2FYBcIBa4Fu0CXSVhZM1TTgB%2BwIf3VOICPPCJIvqe06QOIOSjKHJ2EgfD2vQDvFXQ5r3SsDfqMd0FNgu4sjGvKAbks%2FeMufGlcQ09gFbJVZwCiJdMQIOTZl9VuDL6ZDmhH1QdHnOkxvwrNxdIgH0e4YAoiaghcQLTgqxlnKzjrdIEusIozc5lG0nTdY%2Fo8phtWSMZJfk5kfCFqf4SNJW3mV55EOfz8Fa9BZ01Y0XwRWj%2BRyRaD7vQjFqk0ikEmYgyfIf48XHRUbCbxhHbFHGM84ti90FXvKoOvdCDVX8EBMusv5UlmLfYlREgu3ydGvHuAgC99XSyOjGpszMBTyikMlYZehVrt9jAiQfa%2Faeo%2BJQI3XwAcfUghWniaDDp2OUiQVZr5xH%2FO%2BiB6Vb7xMJfVv8kGOqUB1JgRH2y1aQ%2F62UeGzFXPERqt3XIHvjlg0TDVdWFdduitynOjBaHNQbXQyeSUrH2okQvy%2BbF4uKmIN2U5Bknzo6yooEtVgZ%2B2iD9BMtssRXR%2Fpq7nd6OOzXwp3N4f4p6jAwbMyQnD4dPfnswaYUtPARp0qw6SMq%2FwHB9nQwrrThb0Q9CRp1VGimjlPp85ZQa1OuEw9yhlAyWOgNHkPRyQnXavrpLP&X-Amz-Signature=720f14a90bcfbec7b90c298a4944f96b64c5f535dd1648c945314d644b9e7f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

