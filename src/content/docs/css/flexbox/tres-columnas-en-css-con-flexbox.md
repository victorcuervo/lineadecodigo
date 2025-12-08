---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46TMJOJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx8sg%2FJwUPhn1KDqJDCs6EEfhebnwnNveRHq8c60rtAAiEAmMtOErv87zS4NnFnRjufTWp24tjqQtG8HYjFVQMgRRYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjqIJ7W7JdBHzhXTyrcA3OIo68%2BYPCYtgyYNWN%2BYc10TEElAi3mZZHC18CMi8SZDxalRMeaUmVaqgcpWvCPpHiuKV9SxPISqd16jVasTglt0GEJH55dbeQP2PH4VgvlZ0Ljzc8S4t2k3c%2BKg21lTR6VNL%2BQycvZG2nkoibmdfxs%2FhZy161KINpo7xYdXlRLCDCyhyroKMy0DF8ap9Zw6JEzTtVTwyqi8%2FUZ88Bc7OOT1U8xI777j5CJ%2F6rtaZaMJLfxTqomSpp4L8aB%2FEVp4OBhnYruF%2FLz4Ibqg7%2BuG89HdO39Kp2byYHr50wEBPKNU11dZpEg%2FMGHr%2F6wrSTFXCy6R%2F9JG0DNWb2tPBfOa%2Flp%2BDQVZf%2BUt8ybazbVaJXSs5BK%2BVLeYgQiSbGQI1trhcQbAAPsXOQWqasehAlD0RcClfAywV9CPizomDrKasSq5ErIE0nt6UYDP%2B64PAAh%2FGXn%2BtmlZMPBbkSGXXCPW9ZGhCs7nB0jN%2BZPkqhcCZsVFE4mP6LUv%2FaW0%2FYQUJwNoKeI2NGcP7uub7y%2BrVZ9euGEpU8u2AcZYYrhxygMdBgnEiWSvMqJYCCm9nEbBeoLbTXCn0CkEf5ecDmx8s%2BJHt%2BEvA1NS%2F5UQNTjRSh4KaYZ8pf15vc%2Bc8txlOClMNzR2MkGOqUBvVcPvyJ7T3j6peNORV4zOfdOXceoYzsbDuijV6%2Fa7exwlM04sJqH4t2aNCqAs3yXW0uEgC2dVMQ0MnxHTpyYiPGWFJ6cjPabR%2FhHylV8gMA%2F%2BXAQBy3JjR%2Fl2muIl6fUyXCElxRDA%2FIAFpXUuZ7kQgyFFVlbwj0XsLpOJE%2FvR%2BJ59AswMCTU2tF3uNbay6i%2BT%2FdIGOVPc7%2Fsyltry98fO6NWmryV&X-Amz-Signature=451a4c68dbee0d340e04e6af9fbe55e5f157578fd60daf7f03ae31bc2f819143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y46TMJOJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHx8sg%2FJwUPhn1KDqJDCs6EEfhebnwnNveRHq8c60rtAAiEAmMtOErv87zS4NnFnRjufTWp24tjqQtG8HYjFVQMgRRYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjqIJ7W7JdBHzhXTyrcA3OIo68%2BYPCYtgyYNWN%2BYc10TEElAi3mZZHC18CMi8SZDxalRMeaUmVaqgcpWvCPpHiuKV9SxPISqd16jVasTglt0GEJH55dbeQP2PH4VgvlZ0Ljzc8S4t2k3c%2BKg21lTR6VNL%2BQycvZG2nkoibmdfxs%2FhZy161KINpo7xYdXlRLCDCyhyroKMy0DF8ap9Zw6JEzTtVTwyqi8%2FUZ88Bc7OOT1U8xI777j5CJ%2F6rtaZaMJLfxTqomSpp4L8aB%2FEVp4OBhnYruF%2FLz4Ibqg7%2BuG89HdO39Kp2byYHr50wEBPKNU11dZpEg%2FMGHr%2F6wrSTFXCy6R%2F9JG0DNWb2tPBfOa%2Flp%2BDQVZf%2BUt8ybazbVaJXSs5BK%2BVLeYgQiSbGQI1trhcQbAAPsXOQWqasehAlD0RcClfAywV9CPizomDrKasSq5ErIE0nt6UYDP%2B64PAAh%2FGXn%2BtmlZMPBbkSGXXCPW9ZGhCs7nB0jN%2BZPkqhcCZsVFE4mP6LUv%2FaW0%2FYQUJwNoKeI2NGcP7uub7y%2BrVZ9euGEpU8u2AcZYYrhxygMdBgnEiWSvMqJYCCm9nEbBeoLbTXCn0CkEf5ecDmx8s%2BJHt%2BEvA1NS%2F5UQNTjRSh4KaYZ8pf15vc%2Bc8txlOClMNzR2MkGOqUBvVcPvyJ7T3j6peNORV4zOfdOXceoYzsbDuijV6%2Fa7exwlM04sJqH4t2aNCqAs3yXW0uEgC2dVMQ0MnxHTpyYiPGWFJ6cjPabR%2FhHylV8gMA%2F%2BXAQBy3JjR%2Fl2muIl6fUyXCElxRDA%2FIAFpXUuZ7kQgyFFVlbwj0XsLpOJE%2FvR%2BJ59AswMCTU2tF3uNbay6i%2BT%2FdIGOVPc7%2Fsyltry98fO6NWmryV&X-Amz-Signature=81044613ab2b7330553f80af8883a9240f2ebe8653b51ce12838a7f325797f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

