---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHOAAQOJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9US3DWEYI6NsO8CP0GDbc6W%2FnQS4nb2zI6QjiLidz5AiEAwoo1vLLxtskClvo%2B3jfXhPPQyzqrF4zR5NZD%2FFkFHFsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzwvBMWYWdq5ISz1ircA9Vw4PK74Q7Gdb%2F6k%2FNEkIT4z0ue1hV8kLjjpHuNkawhbqcx%2BKr4cA3u9deWIx8F9FhT39zJmNRpwltRSQokPDiou%2FoBbp6et2xzOPcie3aDqnMjvcbwDiHiRBxe9PZjnJqEPwM8354H%2FtOFs7vU2PSXLawZ3j0LqYPQrXoPyhuxR%2BxYxsbIqsRt8YU%2BHNT%2Fx2uqy24NUT7Tyf%2F3h%2FY2iCz00p8jgxsUxF53XWmC38V2h1cWqzPa5plfyU6tZ%2B5GIGm6csWubKuIC5nN2goneu0k%2BJrneuWrRB6IdigZAQGf4q3H%2FQug09pf2hKXAEz%2FGj2ox3qmF8Uhi1icYHffrx4hXFHJD3IqdmJQuyKLWthkK7KdvcAgDOAkGZVF0Lw%2FdWt8AbHfgyY676mp%2FOP3ZX%2B9jme5AoEXE2EV0FQfe8ILmLcHpCqzlqMvmUUprv1kBim6n6jf%2Bkcf9nCvjNu0p%2BFuoLm0kFDlhJNQGFgBwRLvRniAH3AJFTTXO724bEc8C95koiO1CmvOo7lU%2BAtf1AlO%2B5MYf3nT9XUtLqd6kTNe39Ew0AbVur57Q8cyyNO5JN9pYFrlG1Ccvdr5NbHWZ7TUktKAQFElOK4ukPx2Z7u2qlU4zPJxQWDuBEuMMJu21skGOqUBap9Pfx7szXnspfmJZqxrY6Tj7hnUDDDt3BvvAhj%2B5XNbkedTxzp%2BLbn84leuNIrPiJq3HdpLQyhoqazhvoDabDn6GsTYIDjcV%2FrdyEaudVLr7AFajxZcDSCLK0ZW5YAVmlEPz1rC4KWiCtiROg57F64gS4CCxVkPjfvdBGAPNI4GfU%2BEkAlY2JYq0t4kplDFEVLnuWssx79E1qqibSE27kwCnZI9&X-Amz-Signature=08b6252de35b26a19c1689a78405936640d3f6c1b3ccebf3f845c4d5e68188a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHOAAQOJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9US3DWEYI6NsO8CP0GDbc6W%2FnQS4nb2zI6QjiLidz5AiEAwoo1vLLxtskClvo%2B3jfXhPPQyzqrF4zR5NZD%2FFkFHFsqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAzwvBMWYWdq5ISz1ircA9Vw4PK74Q7Gdb%2F6k%2FNEkIT4z0ue1hV8kLjjpHuNkawhbqcx%2BKr4cA3u9deWIx8F9FhT39zJmNRpwltRSQokPDiou%2FoBbp6et2xzOPcie3aDqnMjvcbwDiHiRBxe9PZjnJqEPwM8354H%2FtOFs7vU2PSXLawZ3j0LqYPQrXoPyhuxR%2BxYxsbIqsRt8YU%2BHNT%2Fx2uqy24NUT7Tyf%2F3h%2FY2iCz00p8jgxsUxF53XWmC38V2h1cWqzPa5plfyU6tZ%2B5GIGm6csWubKuIC5nN2goneu0k%2BJrneuWrRB6IdigZAQGf4q3H%2FQug09pf2hKXAEz%2FGj2ox3qmF8Uhi1icYHffrx4hXFHJD3IqdmJQuyKLWthkK7KdvcAgDOAkGZVF0Lw%2FdWt8AbHfgyY676mp%2FOP3ZX%2B9jme5AoEXE2EV0FQfe8ILmLcHpCqzlqMvmUUprv1kBim6n6jf%2Bkcf9nCvjNu0p%2BFuoLm0kFDlhJNQGFgBwRLvRniAH3AJFTTXO724bEc8C95koiO1CmvOo7lU%2BAtf1AlO%2B5MYf3nT9XUtLqd6kTNe39Ew0AbVur57Q8cyyNO5JN9pYFrlG1Ccvdr5NbHWZ7TUktKAQFElOK4ukPx2Z7u2qlU4zPJxQWDuBEuMMJu21skGOqUBap9Pfx7szXnspfmJZqxrY6Tj7hnUDDDt3BvvAhj%2B5XNbkedTxzp%2BLbn84leuNIrPiJq3HdpLQyhoqazhvoDabDn6GsTYIDjcV%2FrdyEaudVLr7AFajxZcDSCLK0ZW5YAVmlEPz1rC4KWiCtiROg57F64gS4CCxVkPjfvdBGAPNI4GfU%2BEkAlY2JYq0t4kplDFEVLnuWssx79E1qqibSE27kwCnZI9&X-Amz-Signature=204ee7f54836f58fe10e210d807e09cd851337d9452747c99846a72d37baeaa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

