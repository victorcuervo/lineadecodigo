---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECOAF7H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNaHEwj2EqsjC1hHuTBwjM7jeb1CndMue1Pmjr4JXdFAIhAMN%2Fys9vA5n9fSHrNbcjZSxgydGt2GYPCD2F8xE3MyewKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFxgmIuXgQCGdhaugq3AOPO6LQAgWDm9C%2B6doclOFb5bY9vgxXGrBQSTTOZEs%2Bhd49tFiGYZNrlq0%2BsM15J9irHb7InggH4GtlKAexQzVtWAgT1zy6KYMPdiYtvqW12MDfM36J085J5azbVKjn1R4Knvk6AbZa3KrmmZZ%2FqTHT%2BcGDQL%2FKCT6Kr5rHJXMNLHvCpNS%2F8QFM6xobC%2FV2WSIvfzy6nl6Q5w4bqDs9Ln9cVjrynTYHpXxMQYk%2FWfa2%2B1Qk2Z%2B00T2lLMZEMbfrFHwb70KRpsX92dEzeOgHqR4Kk63Bq9fWNiWDCWDmArUgKNQpZTVBvFS5ScNj0vxrMNuf2vg6OcpZ7csAS1vQWSuUCdiT8KrckOg%2FYfvXttKpqELHFNVgRNfnF6Hhq12L1U%2FP9sKwLAR3XrVGYK3B505IHrI9RwwGKlbEpoe%2FoCeYRTkxlXb5B7%2F1lbYBbarX87EDCY%2FLv8lcgpJAQ4T8zp7SrZyLN4r%2BQE07kAamx8RRN44W0ESHK5k9YgYndPtkSPiSJs8GsMGQ0wgiGpun7M6iZDC2yL3VpxVCZNbhON2M3NfkX7W%2Fb0lPxtyLHHtaU2%2BUPby4tEaPZfiuaTI2gqPNTbuOZ5t8z2RQr23AxaZwoju3lLbutNzKGevTvDCBh9zJBjqkAXABj5FUvtwUOnFvDiEapeo3HBsBgLOadEHDGZMnGLEABKzw5y60c13HokUKk8zU%2FpHA82f5o9UGL4AEvT3XHX0h06HGyqinFRyj1QqHXhaF%2BSWHZ%2ByIflaJVgZ8ZgSeaEVL7FA4jxiS4Y9Ar8b7HTvuMZ6TUY2DYN8gQ%2FhBcFZIIlsyPRojPoflUVBlqnDOq6Be2ss4RFEulDKIZZocRfReay7e&X-Amz-Signature=319cb03b5c5e9b4fd8f8e83d0c90975ac73d855e8393e4c5c03ccc8b8d104d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UECOAF7H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNaHEwj2EqsjC1hHuTBwjM7jeb1CndMue1Pmjr4JXdFAIhAMN%2Fys9vA5n9fSHrNbcjZSxgydGt2GYPCD2F8xE3MyewKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFxgmIuXgQCGdhaugq3AOPO6LQAgWDm9C%2B6doclOFb5bY9vgxXGrBQSTTOZEs%2Bhd49tFiGYZNrlq0%2BsM15J9irHb7InggH4GtlKAexQzVtWAgT1zy6KYMPdiYtvqW12MDfM36J085J5azbVKjn1R4Knvk6AbZa3KrmmZZ%2FqTHT%2BcGDQL%2FKCT6Kr5rHJXMNLHvCpNS%2F8QFM6xobC%2FV2WSIvfzy6nl6Q5w4bqDs9Ln9cVjrynTYHpXxMQYk%2FWfa2%2B1Qk2Z%2B00T2lLMZEMbfrFHwb70KRpsX92dEzeOgHqR4Kk63Bq9fWNiWDCWDmArUgKNQpZTVBvFS5ScNj0vxrMNuf2vg6OcpZ7csAS1vQWSuUCdiT8KrckOg%2FYfvXttKpqELHFNVgRNfnF6Hhq12L1U%2FP9sKwLAR3XrVGYK3B505IHrI9RwwGKlbEpoe%2FoCeYRTkxlXb5B7%2F1lbYBbarX87EDCY%2FLv8lcgpJAQ4T8zp7SrZyLN4r%2BQE07kAamx8RRN44W0ESHK5k9YgYndPtkSPiSJs8GsMGQ0wgiGpun7M6iZDC2yL3VpxVCZNbhON2M3NfkX7W%2Fb0lPxtyLHHtaU2%2BUPby4tEaPZfiuaTI2gqPNTbuOZ5t8z2RQr23AxaZwoju3lLbutNzKGevTvDCBh9zJBjqkAXABj5FUvtwUOnFvDiEapeo3HBsBgLOadEHDGZMnGLEABKzw5y60c13HokUKk8zU%2FpHA82f5o9UGL4AEvT3XHX0h06HGyqinFRyj1QqHXhaF%2BSWHZ%2ByIflaJVgZ8ZgSeaEVL7FA4jxiS4Y9Ar8b7HTvuMZ6TUY2DYN8gQ%2FhBcFZIIlsyPRojPoflUVBlqnDOq6Be2ss4RFEulDKIZZocRfReay7e&X-Amz-Signature=24dac637fe115c517954100966d2e09ccca18e909321e58ef5108c829e2ca5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

