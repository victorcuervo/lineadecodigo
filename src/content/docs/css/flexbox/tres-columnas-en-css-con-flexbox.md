---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635EJLR7Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU%2Bkw8PAg4K%2BNIcEhuUz5Y%2FCAxEmT0%2FWWoz7%2FKnba4OwIhAKRZbqHGWT7cEmcVO8DOpmkqC9BjplbrDctiKfd99xxyKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBPkM%2FTToF4Hw%2BqhUq3AOtjjic55e5KJq8QZjpzQtu6dcjeasQFRV42rztRTrwSW5lg1%2B3HjL297F%2BPu1rT1NHMCcgHniLcAyayAJ%2BBAv5XuBUKPlrQLHb0isXTuhGainALoShbxxl6nI1tFCfxe7Dqr0HbbW3QTxpk8ttE2%2FZtfFsnsgQfcmGmPLVsRYyxugwsnvS8O5GKqtBR5ngiW%2F8nBRBpuVDeKySxopZeBJM7RCseYWPPPCfW7AqbsdWQP1UnzCPh47%2B06XsN76T50x1RxFRmanPwrK%2FvJTBSb77FLzG6EuOTfWrCsS3yGZnxpZ6pLdnbewDOiTKVxrfEh2a4WIUs6mo1lk0iHBytTOpzbbr8qbBE0j4P4yBpn9%2FaX99BjMJwTXvrSjKsh5E9t9XrWua3hnU81KkrqxtyEEIW%2FO2GsMd5H613IJ%2Fe7oFpur9L8UX8ccvPbuyfM2e5ErybI9OIvC4zAIRFj7yTXs6JSfTXozvc%2Bi0cRI8U1WoOA2GqkwenwGIPWxnyVAzR%2Bd4dS3gZId3%2BWunHL1UkzU1CvZiL1nsYnRsb8xywWA694gCob%2B7uTNHemCu5pYapJ%2F6U%2Fdjogtl%2BnQZpM6oHSYrNrKjmoQNn5CyQ0skabn6Obigm3dd%2F722a%2FEwhzCyvtbJBjqkAapABjKIMx3%2B9E4fRGc7N%2Fj1fRtWBpfsNClgoRg9Q5rlwfLnmSrBm77IUE7REqLmaV47AwlLXrO%2BJp7OMR%2By45RM8eeTohtooJuXZYUSvE2tBz54NYcfAHaAZXBGgSAtuyU%2BXMFFWnbpkxnrciuuCXGM%2BiQHg%2FLJAWKWrGECsRwu6rpIZh4oItNjJevJwqgIxzD0vtHfC6c2IXvmfZZqXToq3Y1L&X-Amz-Signature=efc0d360f219b5cb119b30cc8b79e63b43df9c77f71e79476e0d8033f96130e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635EJLR7Z%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU%2Bkw8PAg4K%2BNIcEhuUz5Y%2FCAxEmT0%2FWWoz7%2FKnba4OwIhAKRZbqHGWT7cEmcVO8DOpmkqC9BjplbrDctiKfd99xxyKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBPkM%2FTToF4Hw%2BqhUq3AOtjjic55e5KJq8QZjpzQtu6dcjeasQFRV42rztRTrwSW5lg1%2B3HjL297F%2BPu1rT1NHMCcgHniLcAyayAJ%2BBAv5XuBUKPlrQLHb0isXTuhGainALoShbxxl6nI1tFCfxe7Dqr0HbbW3QTxpk8ttE2%2FZtfFsnsgQfcmGmPLVsRYyxugwsnvS8O5GKqtBR5ngiW%2F8nBRBpuVDeKySxopZeBJM7RCseYWPPPCfW7AqbsdWQP1UnzCPh47%2B06XsN76T50x1RxFRmanPwrK%2FvJTBSb77FLzG6EuOTfWrCsS3yGZnxpZ6pLdnbewDOiTKVxrfEh2a4WIUs6mo1lk0iHBytTOpzbbr8qbBE0j4P4yBpn9%2FaX99BjMJwTXvrSjKsh5E9t9XrWua3hnU81KkrqxtyEEIW%2FO2GsMd5H613IJ%2Fe7oFpur9L8UX8ccvPbuyfM2e5ErybI9OIvC4zAIRFj7yTXs6JSfTXozvc%2Bi0cRI8U1WoOA2GqkwenwGIPWxnyVAzR%2Bd4dS3gZId3%2BWunHL1UkzU1CvZiL1nsYnRsb8xywWA694gCob%2B7uTNHemCu5pYapJ%2F6U%2Fdjogtl%2BnQZpM6oHSYrNrKjmoQNn5CyQ0skabn6Obigm3dd%2F722a%2FEwhzCyvtbJBjqkAapABjKIMx3%2B9E4fRGc7N%2Fj1fRtWBpfsNClgoRg9Q5rlwfLnmSrBm77IUE7REqLmaV47AwlLXrO%2BJp7OMR%2By45RM8eeTohtooJuXZYUSvE2tBz54NYcfAHaAZXBGgSAtuyU%2BXMFFWnbpkxnrciuuCXGM%2BiQHg%2FLJAWKWrGECsRwu6rpIZh4oItNjJevJwqgIxzD0vtHfC6c2IXvmfZZqXToq3Y1L&X-Amz-Signature=385f8f88759cb7dce876b31f269bde3a9b0adae6371eb64ecfcef901e903ad7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

