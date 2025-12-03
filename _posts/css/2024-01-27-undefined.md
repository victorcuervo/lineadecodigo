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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6T7VSTI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCdYOqQnrIhL8OQI98R%2FP%2BliUJeb7Bz5o7jjX2C5lcN5AIhAMFok2t6k%2BauQtsbwQfoLr6JAQLDUNW0XPjOoc4OnjpTKv8DCC4QABoMNjM3NDIzMTgzODA1Igz0DxYuKY0AhlP4AWkq3AMgaOdqwD4MTCn7LKQ2oTPlh8%2BqD0cUD0eOdlqGm5HY%2FesICp6klNujrER5UgqRCyKzM0x9CtFJgz1S%2FtOVWxNm%2FMk0gxg23jFsCc7kwx%2Fr3gYENPO%2FEblNsdzgK25HFgGHRapfstl14PPGJ2foT4GrsAVOY6F2vQfT9yX6E0J%2B1cOnwWM7JrbKO4hvXSclWfUU3aBI43T%2Bo%2B4NA7SEsWYyEBP48h2uRFKSzNQqGZ%2BfO7OfucQz98YtauZ%2BvkaTidAvB4u790exO9PqvEGE8GftZ5qqLDA5Qurs%2Bg2qAR9V%2FnJHYAOY7UeVXT9QLeJ3d68XkNz8c3cKvlUkV6bzf%2BwZtKBUQYyq1T4FJKNefa61fBb4T46WURTmu6en04jkrdml0fD1nWl2SudmOyQrf8W8cwFrRt95JyZegwbxnkJWZoaa4oASEgljS06rDoPwU1mo9gZFmgAHePiE5rOmpQCci4WXF%2B1w1GxoAn8th3cs%2FCgvI1HyWzIz%2B9g7mlu0paBekOTYRmCQ%2FLOwrrWkQymKp9lfZWuOAsEGnHYandao8PWKgmlR2yfkX5KHE4KTK4kUCvnWc8HfCO%2BSadt2gCE6VvHyUSij0g5plbirY%2BqcrevBIc%2FIoM5aBFADHTCD6cDJBjqkAT0ZzLB9gCPasGe%2BaKqxyWrFZJI052WabExpHbCCn4DQNdbNeIh2TDRgVGHX7y6MrKacL8yD4wuO5nXy%2FbHY%2Fo5tEib8sNRPZiRwyw6OpZydAvsXsrxvlqo897SoQGbET0uc%2BRlm%2BeHbtNy3u8CWbm3hm3rrK5qrRDkl3VTmQbMttQkOeLxmT5iWTOccv9aOkW4sYZrHbCQLRYscTe8Bf9CAkVQs&X-Amz-Signature=32d3914132c600616135b55be1bc0f151c91a06c84ebe877c8378d84ca4accfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6T7VSTI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCdYOqQnrIhL8OQI98R%2FP%2BliUJeb7Bz5o7jjX2C5lcN5AIhAMFok2t6k%2BauQtsbwQfoLr6JAQLDUNW0XPjOoc4OnjpTKv8DCC4QABoMNjM3NDIzMTgzODA1Igz0DxYuKY0AhlP4AWkq3AMgaOdqwD4MTCn7LKQ2oTPlh8%2BqD0cUD0eOdlqGm5HY%2FesICp6klNujrER5UgqRCyKzM0x9CtFJgz1S%2FtOVWxNm%2FMk0gxg23jFsCc7kwx%2Fr3gYENPO%2FEblNsdzgK25HFgGHRapfstl14PPGJ2foT4GrsAVOY6F2vQfT9yX6E0J%2B1cOnwWM7JrbKO4hvXSclWfUU3aBI43T%2Bo%2B4NA7SEsWYyEBP48h2uRFKSzNQqGZ%2BfO7OfucQz98YtauZ%2BvkaTidAvB4u790exO9PqvEGE8GftZ5qqLDA5Qurs%2Bg2qAR9V%2FnJHYAOY7UeVXT9QLeJ3d68XkNz8c3cKvlUkV6bzf%2BwZtKBUQYyq1T4FJKNefa61fBb4T46WURTmu6en04jkrdml0fD1nWl2SudmOyQrf8W8cwFrRt95JyZegwbxnkJWZoaa4oASEgljS06rDoPwU1mo9gZFmgAHePiE5rOmpQCci4WXF%2B1w1GxoAn8th3cs%2FCgvI1HyWzIz%2B9g7mlu0paBekOTYRmCQ%2FLOwrrWkQymKp9lfZWuOAsEGnHYandao8PWKgmlR2yfkX5KHE4KTK4kUCvnWc8HfCO%2BSadt2gCE6VvHyUSij0g5plbirY%2BqcrevBIc%2FIoM5aBFADHTCD6cDJBjqkAT0ZzLB9gCPasGe%2BaKqxyWrFZJI052WabExpHbCCn4DQNdbNeIh2TDRgVGHX7y6MrKacL8yD4wuO5nXy%2FbHY%2Fo5tEib8sNRPZiRwyw6OpZydAvsXsrxvlqo897SoQGbET0uc%2BRlm%2BeHbtNy3u8CWbm3hm3rrK5qrRDkl3VTmQbMttQkOeLxmT5iWTOccv9aOkW4sYZrHbCQLRYscTe8Bf9CAkVQs&X-Amz-Signature=4ee3b1bafc4676e792120e821f321da1dd818ab2a0fd427fc4f37b62df030790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

