---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYM76GV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD48HneLdSLJedhRhse5xkcq7p1cGRe2o59gEi1gfFYSAIhANRDk39zsBQ71vM9yLBUIZPKn2orNTCVAjIyvIVjDkprKv8DCEkQABoMNjM3NDIzMTgzODA1IgwbefcuZIap%2B%2B27a%2FIq3AOxsuGM%2Bfd4SZ4uDoZL2tnHmQpLzaBlav74yqgx%2Fw4F%2FdcOxbJrBwutykagtKT66R6Xm3tcB%2FGoNGK5ichYmtZj5ICspCoGkC4OSBm0upcgePsY%2FD4lm4zWb2EXBr1Xx7ttrlxwnA2rdsCw9xo2Du%2FEMNTCCtMrm5KPxYGxlHwZkHqYh8Hg%2FFOg3iUElupLSENrihI7qqzbo9nUTWtOophEUTdvvRsB%2FMN%2FXybdpOOmjjZHCqYKiM%2B3Rev0PbAAVN75TODFqrDNI7%2Bd12feybRth4PBCBu6dVhuPSp5w8L%2FNz%2FWrYvbP8MhUqT%2BrqlsSKwOyrwqwSVBDePJ%2B39D5WtZQc2JVRdbz7DQaRaAZ0MWF%2F%2FxvnQFqq781fvfjS1gtE8cJyr3ujoJQM8kWmYnJeL%2F50vGo8kDUKgH52tnC4zy7%2Fvs1ck3qHqvEYOKG8fGZ%2F9LVwHfdUE4H6pF%2BWLlfut2vFhVrMaqU9hbcAkqbi%2FMssOFEbJlCNFITdZx%2FxNuddHpWGg8VlgWyhcIz1yN3vi%2FGHvpyF58s5X4zjro9rmvoStyYL8gnAWy4Q31qYXGEwbrcAjFYhv0EexKk%2FR6vMcpgdZmXb328XRzekmbpEQJnCGfqghTznJExORfsDDp28bJBjqkAQ6jC11pt79wwoNZAPLPgkglPreaIm9EiqQwZc5bsFtto0tCrCZ6p%2F92aNO6kVH%2FLHo2vCfaxbBhQ4wkEMHZrl6Hn1dWBR5jhK7y3hbTAI8Jj7zND3g8nsBiOt7n7i%2FYP5EVDmb7Yl4OtIQ6BRurvJ8jtru0t2ZXGohx4mVLd5kzl5VGd6zyMrRXcVORGj0hl0FOFFEXTo1SU3nVgv9yM8SMwJi%2F&X-Amz-Signature=e0b6bf4165891e0842c6572c4cce6878039aed8fc9cca5dfdd6a2c57fa6e2d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DYM76GV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD48HneLdSLJedhRhse5xkcq7p1cGRe2o59gEi1gfFYSAIhANRDk39zsBQ71vM9yLBUIZPKn2orNTCVAjIyvIVjDkprKv8DCEkQABoMNjM3NDIzMTgzODA1IgwbefcuZIap%2B%2B27a%2FIq3AOxsuGM%2Bfd4SZ4uDoZL2tnHmQpLzaBlav74yqgx%2Fw4F%2FdcOxbJrBwutykagtKT66R6Xm3tcB%2FGoNGK5ichYmtZj5ICspCoGkC4OSBm0upcgePsY%2FD4lm4zWb2EXBr1Xx7ttrlxwnA2rdsCw9xo2Du%2FEMNTCCtMrm5KPxYGxlHwZkHqYh8Hg%2FFOg3iUElupLSENrihI7qqzbo9nUTWtOophEUTdvvRsB%2FMN%2FXybdpOOmjjZHCqYKiM%2B3Rev0PbAAVN75TODFqrDNI7%2Bd12feybRth4PBCBu6dVhuPSp5w8L%2FNz%2FWrYvbP8MhUqT%2BrqlsSKwOyrwqwSVBDePJ%2B39D5WtZQc2JVRdbz7DQaRaAZ0MWF%2F%2FxvnQFqq781fvfjS1gtE8cJyr3ujoJQM8kWmYnJeL%2F50vGo8kDUKgH52tnC4zy7%2Fvs1ck3qHqvEYOKG8fGZ%2F9LVwHfdUE4H6pF%2BWLlfut2vFhVrMaqU9hbcAkqbi%2FMssOFEbJlCNFITdZx%2FxNuddHpWGg8VlgWyhcIz1yN3vi%2FGHvpyF58s5X4zjro9rmvoStyYL8gnAWy4Q31qYXGEwbrcAjFYhv0EexKk%2FR6vMcpgdZmXb328XRzekmbpEQJnCGfqghTznJExORfsDDp28bJBjqkAQ6jC11pt79wwoNZAPLPgkglPreaIm9EiqQwZc5bsFtto0tCrCZ6p%2F92aNO6kVH%2FLHo2vCfaxbBhQ4wkEMHZrl6Hn1dWBR5jhK7y3hbTAI8Jj7zND3g8nsBiOt7n7i%2FYP5EVDmb7Yl4OtIQ6BRurvJ8jtru0t2ZXGohx4mVLd5kzl5VGd6zyMrRXcVORGj0hl0FOFFEXTo1SU3nVgv9yM8SMwJi%2F&X-Amz-Signature=48c8d167f22111c9f05fdab0547e9808696ca2f4f44d47f1c60a5c90bd0a9b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

