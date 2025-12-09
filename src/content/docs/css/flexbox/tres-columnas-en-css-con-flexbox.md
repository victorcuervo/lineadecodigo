---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV2YOUE4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgcXikwfn1oP87fibsg0lOwEG47XmBfE4tYlmd%2B1ijrgIhAOHIs3iAqtynqVpxcCdmUd%2Fqu%2BNquesqC5VHHvB%2BmjoTKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2pAMlqknByZGkqnkq3APOlPwH%2FGi5Y5%2B5nTDP4A4IA5E9NL%2FQ1%2BGG%2Fo3XnfiyJMK%2Fdi8A9X3VJrMrKMhqk%2B9Pj9fTQYb3PUNreEtmKK2%2BYaft02P9UqzZaQuGEAbRLnQZt7HQ%2FtO%2B%2FIdDNJcqhkoLP3U3c1Ste8AFf3HxO%2FtP3fYzZ9Jb6vQ3peKxXSXxrqINb1AX6lIo25H2yMXdUof5ykorJ%2FuQaW8Lr27D00mK7CXj09LU6RWGeI%2FZIdUyCTLL2KHO5IWzPiKU6gP%2B5ss8mNhJP5B2y9ugLEgmy9s0MmreIyYvF3E4szT5jznEFkkY2fDNoD23Fvdg2vvHLOLTbFaVcCvKa%2Fxgfqq8hNwHo9hQPT2t7USdu4WS4pmmCvqTdhmkptMdyOIWPJ48hRLnrfexd%2FmFDBSVoHqC2mkbPR6FVi1x1O%2BttKcm2tzUCcnzpQxalD92OxIWt8G4LdU551MsnGNU2zhO9Qib4UT0XmFoQ4MbLTOID3ri8XXnh65TfuVlCRzK1drNpEl61XvZGBeRZFbCW%2BIFDeW0UItYUFe9G2OKngAiT0FEJVjZeXu4rmv2BMr8M9jVZVFQm936Pi%2FI5KiDrsKLLi5v9JX17VOUKTsyjgzAK2LDX%2FdGzTzj23OEI5Rtws95wDDN5d7JBjqkAemqwfD%2B%2BCJE7QYjFDNEnZ35Hrq77dBV%2FPX5Dl1FtFfq6FmgAT0EclqGNv8JFfqnhYKFnhAedmbxO84S1g6MNk20ZIbEhFhQwN5ubywSXMCj92XS8AYhGkKQxw8G%2FqX3ZBnKFNauOkeuLMzdEFLlCdLnC9z803yIGBI6%2BhVs6hwU8tPX6uNB121mE5ti37PLYlWgANgv1VWLWiJ4wVPzy%2BzdM%2BPx&X-Amz-Signature=3169932de58377a15f353e16100b183b00f60107714e97b9143015579eabcfb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV2YOUE4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T053209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgcXikwfn1oP87fibsg0lOwEG47XmBfE4tYlmd%2B1ijrgIhAOHIs3iAqtynqVpxcCdmUd%2Fqu%2BNquesqC5VHHvB%2BmjoTKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2pAMlqknByZGkqnkq3APOlPwH%2FGi5Y5%2B5nTDP4A4IA5E9NL%2FQ1%2BGG%2Fo3XnfiyJMK%2Fdi8A9X3VJrMrKMhqk%2B9Pj9fTQYb3PUNreEtmKK2%2BYaft02P9UqzZaQuGEAbRLnQZt7HQ%2FtO%2B%2FIdDNJcqhkoLP3U3c1Ste8AFf3HxO%2FtP3fYzZ9Jb6vQ3peKxXSXxrqINb1AX6lIo25H2yMXdUof5ykorJ%2FuQaW8Lr27D00mK7CXj09LU6RWGeI%2FZIdUyCTLL2KHO5IWzPiKU6gP%2B5ss8mNhJP5B2y9ugLEgmy9s0MmreIyYvF3E4szT5jznEFkkY2fDNoD23Fvdg2vvHLOLTbFaVcCvKa%2Fxgfqq8hNwHo9hQPT2t7USdu4WS4pmmCvqTdhmkptMdyOIWPJ48hRLnrfexd%2FmFDBSVoHqC2mkbPR6FVi1x1O%2BttKcm2tzUCcnzpQxalD92OxIWt8G4LdU551MsnGNU2zhO9Qib4UT0XmFoQ4MbLTOID3ri8XXnh65TfuVlCRzK1drNpEl61XvZGBeRZFbCW%2BIFDeW0UItYUFe9G2OKngAiT0FEJVjZeXu4rmv2BMr8M9jVZVFQm936Pi%2FI5KiDrsKLLi5v9JX17VOUKTsyjgzAK2LDX%2FdGzTzj23OEI5Rtws95wDDN5d7JBjqkAemqwfD%2B%2BCJE7QYjFDNEnZ35Hrq77dBV%2FPX5Dl1FtFfq6FmgAT0EclqGNv8JFfqnhYKFnhAedmbxO84S1g6MNk20ZIbEhFhQwN5ubywSXMCj92XS8AYhGkKQxw8G%2FqX3ZBnKFNauOkeuLMzdEFLlCdLnC9z803yIGBI6%2BhVs6hwU8tPX6uNB121mE5ti37PLYlWgANgv1VWLWiJ4wVPzy%2BzdM%2BPx&X-Amz-Signature=6baebac7641ec42897e3aa3e99008e7be7d9157cd4c38f32f64d3b7113d50c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

