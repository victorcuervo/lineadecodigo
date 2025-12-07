---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4YZEJ3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDtUXJ9IaNjy%2FbqX%2BRHbOzfOwaAlw00aGa0oFI9Yqt6gIhAIH4Edgxr%2B%2B1fqmqgZC3QqL%2Fmt4DUPrBIUDDsMGvEQu3KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGBO11tY68NzZMYz4q3AMPDSO43nR7kOe5Y5gqwFiiPt6KTcVA3niBqqj73nqCmvenI0OoraJAiyzk%2B2dFM4lNR3yqaBTOJYplmpmZB77zM2HzMKyBYj19uhZlH50BUMlZ4B69N4sAUXOxob%2FQV1EWMq8IutP1Ai4XblKa5QPYN%2FK7tgYDVLofNkDcJaQr7QhA4wevmHHQM2pE0%2B3wJHPpGr4vaedM21DcP%2FT%2F56am499yn4J5aVPqIVRmkquPTjkCxe0HamX0H1z1ueh7XKAk9Pki9ve5MijSRolhFEGODb65%2FurGQRNp%2BLD2jbgY%2BHks1hOQANkbUz4mDQOL4%2B1okkCdZ57veId6MtiqD2MBL4HGw8s6IvihQWTY44fXc%2BSH88bC5p7nvVXPQL79Gvn7PWYhknBsLkkfjEv9LJHM2wWRT0XtlJn2FLRm%2FItU1Bp9Sz289q65ToGIEc8j%2F1dz5IVXivzl6ldHJNTNJKobO%2BamGyCtmxkPAM0txtGIqSEX7IFgPvXoAqZ%2FOZapPyPgrVkQaNZtddR%2BIeQL6jG2FIsOUgevpp%2FfvZX5F7yTCD0YWpjm%2BTDWipXlozeCVSAEWaQXejvyp%2BmW0JTY4uUV7iBb6e2GABKKYtnTL0feBT%2B%2BZDVSvieUUEBMqTCW%2FdLJBjqkAXSIQgovGNHLFgWFJoNzicUbUnN7MDK0VilzjQIGEoaWOJM7mA9NMsXi%2FuKmofYczi1vfy2vBECdbF3Yd2%2BB0pXDjjMj9%2Fkwdi7%2Fh%2FOdBdqAO1DEyEL%2Fn8RH%2B%2BtGOFSmtpK6RMQj31i8O7kB%2FMr1VA47z6hZAiyOXaKdBmbLntN08SgKAg%2BuPizerZt36WjrsGdDAvZdFfRtyhexT4W98oqjVSV9&X-Amz-Signature=cde22c875ba5fa0b68dd6254e131391a615887a21ecc215d38bbaea3f07c6b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666O4YZEJ3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDtUXJ9IaNjy%2FbqX%2BRHbOzfOwaAlw00aGa0oFI9Yqt6gIhAIH4Edgxr%2B%2B1fqmqgZC3QqL%2Fmt4DUPrBIUDDsMGvEQu3KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGBO11tY68NzZMYz4q3AMPDSO43nR7kOe5Y5gqwFiiPt6KTcVA3niBqqj73nqCmvenI0OoraJAiyzk%2B2dFM4lNR3yqaBTOJYplmpmZB77zM2HzMKyBYj19uhZlH50BUMlZ4B69N4sAUXOxob%2FQV1EWMq8IutP1Ai4XblKa5QPYN%2FK7tgYDVLofNkDcJaQr7QhA4wevmHHQM2pE0%2B3wJHPpGr4vaedM21DcP%2FT%2F56am499yn4J5aVPqIVRmkquPTjkCxe0HamX0H1z1ueh7XKAk9Pki9ve5MijSRolhFEGODb65%2FurGQRNp%2BLD2jbgY%2BHks1hOQANkbUz4mDQOL4%2B1okkCdZ57veId6MtiqD2MBL4HGw8s6IvihQWTY44fXc%2BSH88bC5p7nvVXPQL79Gvn7PWYhknBsLkkfjEv9LJHM2wWRT0XtlJn2FLRm%2FItU1Bp9Sz289q65ToGIEc8j%2F1dz5IVXivzl6ldHJNTNJKobO%2BamGyCtmxkPAM0txtGIqSEX7IFgPvXoAqZ%2FOZapPyPgrVkQaNZtddR%2BIeQL6jG2FIsOUgevpp%2FfvZX5F7yTCD0YWpjm%2BTDWipXlozeCVSAEWaQXejvyp%2BmW0JTY4uUV7iBb6e2GABKKYtnTL0feBT%2B%2BZDVSvieUUEBMqTCW%2FdLJBjqkAXSIQgovGNHLFgWFJoNzicUbUnN7MDK0VilzjQIGEoaWOJM7mA9NMsXi%2FuKmofYczi1vfy2vBECdbF3Yd2%2BB0pXDjjMj9%2Fkwdi7%2Fh%2FOdBdqAO1DEyEL%2Fn8RH%2B%2BtGOFSmtpK6RMQj31i8O7kB%2FMr1VA47z6hZAiyOXaKdBmbLntN08SgKAg%2BuPizerZt36WjrsGdDAvZdFfRtyhexT4W98oqjVSV9&X-Amz-Signature=dcc41e312450aa437a9b31f782a14d88f3ff80ec17601b75f216c6effec30b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

