---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VCQ2BIX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJCT9TcudHNiXSySd3vAERqaYkRoMF9%2BCyO2UlC%2FJ4JQIhAIvvX0fU6E%2B9tD8XLHuM87b4iVeZ7pOyldex1%2FBN2H1sKv8DCE8QABoMNjM3NDIzMTgzODA1Igzci3uFGUujD%2FZq1Rwq3AP4u1JVazSmI7j5n%2FRnheeIbnTynQI3cZNu8%2BcuJxGXnbQn9Nm1B1gq9i8enIeFIJf8y6DddK9H9y3CMiE1tLhw2qlNXjLnVaAtW%2BxIbZX%2Fy49uuf2KChrlTLqexAuGRE%2F0Z7cJ%2Bwugiy18EUdrecvYtOVLUZtyL9WXNYCP7XSU5lafR1eRISKt41x66s6jjXhvpxQR%2B6lVpb9ToedFXGz2qSXJLSdKn4%2B95dU7vxhx81nVWQ3G3la%2BC1Dlzs9YA7sM6eW1smaDVebhacR2DZh9QQmjn%2F6ko4m7gW1zuOBDiUnJ1u0huN7zwnpnO0kTp1HGW74Gqp6JMXTBtj7k5tkgdCcZEcxYhMN2R2P9Ote9qgzzZ5W43514mDFo7U2IJfLyewkUMEN7dwsi4LCfJk4nmnu8AR4umr0mdfjCiCgCEZlfCZKtq9iVESXU8b6ORz3BINDXSj0h35XGNL5lPJX4BgtETgQIh0T3Xyt5u5UvwbDgfAsc6kY9tGxObUZvSNbLfnDeDNhG7g6yAVjoMtLYBrFQIZIJ%2F3rnmTr1oUlYJpp61BwRKQOkwlVAsb1HSdfV87SOMKshRdHZqV1EmIL%2FdBChuY9au%2FKkvrG0bNBHUOEwRknGZscsWSMQADD3i8jJBjqkAX4otKqcHSDSIYM6zCHUKRtJ5LFid4G2QxXpUM7AKw%2B1S1Uw9oh2%2Frr1uLmwosNLPMSs5SMde21hvPSY2P9%2B9q%2Fgauhc%2BWq35%2BLAMFYkyRXKPzALdfOPQsdN0jPK79zoNrKi8fUfpBLwYz9i6B%2F%2BflixwWwahQ8KEPupPeb4kMl8T4YGEHer1KPBXI7Kgg4kAksxGyxYvVBQ%2B9OkHoYeQl%2B%2ByTqO&X-Amz-Signature=0fcb6cb08574072ab92f778f3f033b009af3469b3633f0f1a6f7c42aed8cf9a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VCQ2BIX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJCT9TcudHNiXSySd3vAERqaYkRoMF9%2BCyO2UlC%2FJ4JQIhAIvvX0fU6E%2B9tD8XLHuM87b4iVeZ7pOyldex1%2FBN2H1sKv8DCE8QABoMNjM3NDIzMTgzODA1Igzci3uFGUujD%2FZq1Rwq3AP4u1JVazSmI7j5n%2FRnheeIbnTynQI3cZNu8%2BcuJxGXnbQn9Nm1B1gq9i8enIeFIJf8y6DddK9H9y3CMiE1tLhw2qlNXjLnVaAtW%2BxIbZX%2Fy49uuf2KChrlTLqexAuGRE%2F0Z7cJ%2Bwugiy18EUdrecvYtOVLUZtyL9WXNYCP7XSU5lafR1eRISKt41x66s6jjXhvpxQR%2B6lVpb9ToedFXGz2qSXJLSdKn4%2B95dU7vxhx81nVWQ3G3la%2BC1Dlzs9YA7sM6eW1smaDVebhacR2DZh9QQmjn%2F6ko4m7gW1zuOBDiUnJ1u0huN7zwnpnO0kTp1HGW74Gqp6JMXTBtj7k5tkgdCcZEcxYhMN2R2P9Ote9qgzzZ5W43514mDFo7U2IJfLyewkUMEN7dwsi4LCfJk4nmnu8AR4umr0mdfjCiCgCEZlfCZKtq9iVESXU8b6ORz3BINDXSj0h35XGNL5lPJX4BgtETgQIh0T3Xyt5u5UvwbDgfAsc6kY9tGxObUZvSNbLfnDeDNhG7g6yAVjoMtLYBrFQIZIJ%2F3rnmTr1oUlYJpp61BwRKQOkwlVAsb1HSdfV87SOMKshRdHZqV1EmIL%2FdBChuY9au%2FKkvrG0bNBHUOEwRknGZscsWSMQADD3i8jJBjqkAX4otKqcHSDSIYM6zCHUKRtJ5LFid4G2QxXpUM7AKw%2B1S1Uw9oh2%2Frr1uLmwosNLPMSs5SMde21hvPSY2P9%2B9q%2Fgauhc%2BWq35%2BLAMFYkyRXKPzALdfOPQsdN0jPK79zoNrKi8fUfpBLwYz9i6B%2F%2BflixwWwahQ8KEPupPeb4kMl8T4YGEHer1KPBXI7Kgg4kAksxGyxYvVBQ%2B9OkHoYeQl%2B%2ByTqO&X-Amz-Signature=d4f8de50b686470beea713eace211fc984987ca7cee3086227c1e2170a329e3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

