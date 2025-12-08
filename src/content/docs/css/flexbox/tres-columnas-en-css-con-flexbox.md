---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F7KBQER%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuer0T7K1MbqF%2B%2BHHoRpAjei9CkYH3C9KYHJmn%2B8%2FczAiEAseap1d5CqRophso%2FfoVQu4uqpduFpXu7zcOcjw5JWjsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuGbpN58dWQLDmViSrcA0vcAGe6qw7gNcBZe3vu4mWyF9wE9Zf5CHnZHKcpT1TLe50bvEf2Nt4PgZbX%2BXvxk%2BtjvNc82Dq6L3e6mZCH27b8KYwq54096eVQJiRndZUhc5UI9tyiXkZzE9x0C%2FXV6vPZtv0gNgg7%2FCpFG4PNJrofNPmnQjTmf2DqErJVQ%2FSOw1yOVES7%2BgEPOsePwuTx%2FsquQ%2FKcp0ivtNQPo%2Bt0NpzoVRyt8TzFZMR%2BPuV6JZwxqNDo9Csm8RPugXqC2mgFZAaVRWV9%2B6okUuIPpcyqBpRXUItMugCMuYs8rbkAHAxDIaOVDYm3DOkQR6wPgyJKMvrc1xAUrDTPsCrwh%2FLL37bmW1%2FKh4dyNK4AQ9I99AENpyqFbBL%2F%2FRoOlGbbdh6j%2BuI6Qu6uhCSM9cLGGTFPV2aSBHs6zhYp7XfxB44Yt0Z0kmb%2FHop2xOrB3iAA5xdCu3Xjx%2By%2F2AqUy%2FSc4HT2EkbCUOHN3sEWVbKtE6kfeF0msSoQh6pO%2Bu8JVLSTskZ78hOuf6ry5%2Br%2FXLoAOO6P%2FOnItjTX%2BQzxiI7CitYGgQr04OK%2FK1%2FxS%2Bh664f%2B114qvdw3P5eAyd7qSvZgpUKv7CrexXb9Mr4ey%2BJ5IyZrVQ9idAXZnN6vb13OeMDYMKLk28kGOqUBGuTYoe8eZsPHwbALh64THVThgfIYVFwa%2BnMle0yezznDKD9Qb1MpXHjXT2LyufPvRU%2Bi7cdMV1g08PHj0tjj%2FORyybOevUgy5yRmUjMZzhhB0FwqRNKp7qnXklJBdjodAtZyYlqMdiJNnoPcD4wEUOfKpsmEdfH6BRtwr9GMW3pCXTeu%2BtJEqu4OdV8wIyCu0mJxDi07L6m8uyqsNDJJUB5obFqS&X-Amz-Signature=cf5427eaed4510896bd04c4e1605c560e7eb2d041be0230891bcc1c7822f9b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F7KBQER%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEuer0T7K1MbqF%2B%2BHHoRpAjei9CkYH3C9KYHJmn%2B8%2FczAiEAseap1d5CqRophso%2FfoVQu4uqpduFpXu7zcOcjw5JWjsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuGbpN58dWQLDmViSrcA0vcAGe6qw7gNcBZe3vu4mWyF9wE9Zf5CHnZHKcpT1TLe50bvEf2Nt4PgZbX%2BXvxk%2BtjvNc82Dq6L3e6mZCH27b8KYwq54096eVQJiRndZUhc5UI9tyiXkZzE9x0C%2FXV6vPZtv0gNgg7%2FCpFG4PNJrofNPmnQjTmf2DqErJVQ%2FSOw1yOVES7%2BgEPOsePwuTx%2FsquQ%2FKcp0ivtNQPo%2Bt0NpzoVRyt8TzFZMR%2BPuV6JZwxqNDo9Csm8RPugXqC2mgFZAaVRWV9%2B6okUuIPpcyqBpRXUItMugCMuYs8rbkAHAxDIaOVDYm3DOkQR6wPgyJKMvrc1xAUrDTPsCrwh%2FLL37bmW1%2FKh4dyNK4AQ9I99AENpyqFbBL%2F%2FRoOlGbbdh6j%2BuI6Qu6uhCSM9cLGGTFPV2aSBHs6zhYp7XfxB44Yt0Z0kmb%2FHop2xOrB3iAA5xdCu3Xjx%2By%2F2AqUy%2FSc4HT2EkbCUOHN3sEWVbKtE6kfeF0msSoQh6pO%2Bu8JVLSTskZ78hOuf6ry5%2Br%2FXLoAOO6P%2FOnItjTX%2BQzxiI7CitYGgQr04OK%2FK1%2FxS%2Bh664f%2B114qvdw3P5eAyd7qSvZgpUKv7CrexXb9Mr4ey%2BJ5IyZrVQ9idAXZnN6vb13OeMDYMKLk28kGOqUBGuTYoe8eZsPHwbALh64THVThgfIYVFwa%2BnMle0yezznDKD9Qb1MpXHjXT2LyufPvRU%2Bi7cdMV1g08PHj0tjj%2FORyybOevUgy5yRmUjMZzhhB0FwqRNKp7qnXklJBdjodAtZyYlqMdiJNnoPcD4wEUOfKpsmEdfH6BRtwr9GMW3pCXTeu%2BtJEqu4OdV8wIyCu0mJxDi07L6m8uyqsNDJJUB5obFqS&X-Amz-Signature=f5281e918e02cf8aab34152c98f9a0dbdfd0ef844fb9bee3674142325e347cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

