---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN62BFF3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PePqjNtRSnc7E02HA2%2BrF5YsroJ1%2BbuuGJVkv6nJtAIhALLnC6kK8s8D01w99a%2BwWvy9yta%2F0zP6Ceutl9CGzBf5KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4ZRa94fiUgU1rhEEq3AMUr9FX2KKj4un0IqRu6DkqDcPcmydreU3gQ8DHyW9tHkXarXtNuX7jqFiyO0orhUcT%2ByhkQ%2BjNrlbHj%2F7Yt4GDqlY0ZJid2MkFW8ozQ7uIz8TJZ2jzpuOu9WTpUhSUjk%2FyTuU6QONSf5QEZdmMKiI5NK%2FJcbPXQV3GdjfIukY0ihxskSVNlk4fXEouopUWWMWQmJ8VeudQdBdK1xdr6MmQA2QQq1xrp5TZFkVcnakytW6vVEl%2Fy2e43DuCZXrPuFm%2BFtOz59WIqH%2Bfu%2F6Tjk4s9EqghoSG6u2kFUS1E06WaREIKCBOtIFyRSWW%2BaY5ctI9vEY5L8Wjz4kTGeZekn0QudcEpSDoole%2BlMrbdmWI30nQAF8LOc%2FzXJKenoKhaPzKMf17hBTh1szq4kYZc%2BO6E9uD%2BJQko6JuVVvgRC9dxdoDInE%2B4bqLHA8dWpb9DuNuXFDPWN0MRiuEGNmdlu8kktbk%2FONHmctKIrMlQoGkaznjVmT2fjgCBf4tp4V3P1jY5cnSGMtAO46u5YCQU9Q2k4RHo%2BliNO0TyKr2DJe156xp1xAyVhwVJKqwjveKewARkausUDSMAafeOtZqJ9UvF7jAXr%2FOeIGSPubbGkVu9xtokEk6yjGqUxCalzChmdXJBjqkAaJSi0OfkAJH31khqSUiM5PFHNqRdq2Iwu3K0VR9zeTpczZSCFrxKcjYoBRgzmHJAYxvzgccmpZC77S6wL1hh5hHt4egM1Aq%2FcOrozUZnITRFHmPAWI3fZ8noWasEwdJUYtCWrW7DT2w27uEQplSYizkTomP%2BfG741MAMFdlhP%2BW78NCMnpjAAgghAoKmwGsPKoGnq8yGjhHGzb%2B3Q7%2BKsJbrSyu&X-Amz-Signature=9ddd6fa889598f41c964a23574e52636c4de21a80509c2d600a8ec0030096357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN62BFF3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T111545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PePqjNtRSnc7E02HA2%2BrF5YsroJ1%2BbuuGJVkv6nJtAIhALLnC6kK8s8D01w99a%2BwWvy9yta%2F0zP6Ceutl9CGzBf5KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx4ZRa94fiUgU1rhEEq3AMUr9FX2KKj4un0IqRu6DkqDcPcmydreU3gQ8DHyW9tHkXarXtNuX7jqFiyO0orhUcT%2ByhkQ%2BjNrlbHj%2F7Yt4GDqlY0ZJid2MkFW8ozQ7uIz8TJZ2jzpuOu9WTpUhSUjk%2FyTuU6QONSf5QEZdmMKiI5NK%2FJcbPXQV3GdjfIukY0ihxskSVNlk4fXEouopUWWMWQmJ8VeudQdBdK1xdr6MmQA2QQq1xrp5TZFkVcnakytW6vVEl%2Fy2e43DuCZXrPuFm%2BFtOz59WIqH%2Bfu%2F6Tjk4s9EqghoSG6u2kFUS1E06WaREIKCBOtIFyRSWW%2BaY5ctI9vEY5L8Wjz4kTGeZekn0QudcEpSDoole%2BlMrbdmWI30nQAF8LOc%2FzXJKenoKhaPzKMf17hBTh1szq4kYZc%2BO6E9uD%2BJQko6JuVVvgRC9dxdoDInE%2B4bqLHA8dWpb9DuNuXFDPWN0MRiuEGNmdlu8kktbk%2FONHmctKIrMlQoGkaznjVmT2fjgCBf4tp4V3P1jY5cnSGMtAO46u5YCQU9Q2k4RHo%2BliNO0TyKr2DJe156xp1xAyVhwVJKqwjveKewARkausUDSMAafeOtZqJ9UvF7jAXr%2FOeIGSPubbGkVu9xtokEk6yjGqUxCalzChmdXJBjqkAaJSi0OfkAJH31khqSUiM5PFHNqRdq2Iwu3K0VR9zeTpczZSCFrxKcjYoBRgzmHJAYxvzgccmpZC77S6wL1hh5hHt4egM1Aq%2FcOrozUZnITRFHmPAWI3fZ8noWasEwdJUYtCWrW7DT2w27uEQplSYizkTomP%2BfG741MAMFdlhP%2BW78NCMnpjAAgghAoKmwGsPKoGnq8yGjhHGzb%2B3Q7%2BKsJbrSyu&X-Amz-Signature=852ba16548fbfecabf4bae2a28ebc8242369d6435a420355be2bfd47765ea934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

