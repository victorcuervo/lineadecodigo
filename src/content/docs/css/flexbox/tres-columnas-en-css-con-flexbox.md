---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOSXOJE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTStM4sJCg%2Bc%2FhMIXlFEvsn%2FWsC2KAid7jQchClADk%2FwIhAKCRBVUPOzpuOyWdkiLBsovj9r7gWqg0pKDq61UEK%2BIiKv8DCFsQABoMNjM3NDIzMTgzODA1IgzN387CgysiYknMVq4q3AMCBn6qiS4KOz2fhgkRPOO69Diw2NBNETq%2BBd6eiK4dOn91xEEiQbkgArmVW3IXqFL46sGrBkY708w2ZJNnUi%2B8%2FKx5s4DTL8k7swnjiEDu39zMp0NnB1rH%2FjpxBFBILLkqOJibd612hwAVWtzmJuqCjrdA%2FzNMgSQ0z7ImiBrl%2BI7l7w2dP4gH63ZXX4RPMT44VpSK8niAP1yzwLOgnN1eETgWYKGmOr9%2BOAjLDbctU8rLjjEnnrrHuX%2FzYh5PL23rr2%2FXxmzBt6QEViNqIeUHyfeWIRYIqd%2FYpOjs1lGBLkai82Y7DhT1VJRiUrqUbi7gifcGtpllTtWI73%2FnAPaITrhXOaawN9PMeUK8LGMvss71hmSTe%2FaltT62rKWWjWWKe3l1F9LRX94H0CGzWktuJ9WC96Ln9sLYLi%2FpFOEDYzL165qLzbtmcFj78M4HJuXWa1jX9KhmHpgG3ApFyVen%2FWQ5wC%2FFXYbOA9Bm569EnhND%2B7zVRsvqbNxqVrcOtwTYo5qDvXmqHdYwBwnr9kcoLMJRG19zfqw38Z3Y3OZtxSbpKvTQTI6M4NTdFF3xXONb10UAD0pJDZoSidOmfq3SPgNHoiCNK4%2Fya1JpZQ4keR6nm9XipsbfCKRrWjDTz8rJBjqkAWR2ZLekNNA%2BiSsl25%2FY5V3QpZJUhjSLxSV61M5U4DbkZaxCJ5%2FPxOqTJorTQhXEJnvEQ1sa2vFC7MtKFTO%2B7479nSCkGtFlTUOwwvxZCdEqJLwt8czxZdS8%2BI0oXouKiKQLV9YU%2F8H%2FKPaP4sZxR1Jb2PBnHY3z8JLzq5dpcO%2F%2Fd6KmHh2mxhtkdZCrKAC7jOYwS9AhnHMJ9GaRPB3pWhyCCjs6&X-Amz-Signature=884979cb838b322c781ae9ddab669495425dd261a05b72dacf278582378ae2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGOSXOJE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T152058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTStM4sJCg%2Bc%2FhMIXlFEvsn%2FWsC2KAid7jQchClADk%2FwIhAKCRBVUPOzpuOyWdkiLBsovj9r7gWqg0pKDq61UEK%2BIiKv8DCFsQABoMNjM3NDIzMTgzODA1IgzN387CgysiYknMVq4q3AMCBn6qiS4KOz2fhgkRPOO69Diw2NBNETq%2BBd6eiK4dOn91xEEiQbkgArmVW3IXqFL46sGrBkY708w2ZJNnUi%2B8%2FKx5s4DTL8k7swnjiEDu39zMp0NnB1rH%2FjpxBFBILLkqOJibd612hwAVWtzmJuqCjrdA%2FzNMgSQ0z7ImiBrl%2BI7l7w2dP4gH63ZXX4RPMT44VpSK8niAP1yzwLOgnN1eETgWYKGmOr9%2BOAjLDbctU8rLjjEnnrrHuX%2FzYh5PL23rr2%2FXxmzBt6QEViNqIeUHyfeWIRYIqd%2FYpOjs1lGBLkai82Y7DhT1VJRiUrqUbi7gifcGtpllTtWI73%2FnAPaITrhXOaawN9PMeUK8LGMvss71hmSTe%2FaltT62rKWWjWWKe3l1F9LRX94H0CGzWktuJ9WC96Ln9sLYLi%2FpFOEDYzL165qLzbtmcFj78M4HJuXWa1jX9KhmHpgG3ApFyVen%2FWQ5wC%2FFXYbOA9Bm569EnhND%2B7zVRsvqbNxqVrcOtwTYo5qDvXmqHdYwBwnr9kcoLMJRG19zfqw38Z3Y3OZtxSbpKvTQTI6M4NTdFF3xXONb10UAD0pJDZoSidOmfq3SPgNHoiCNK4%2Fya1JpZQ4keR6nm9XipsbfCKRrWjDTz8rJBjqkAWR2ZLekNNA%2BiSsl25%2FY5V3QpZJUhjSLxSV61M5U4DbkZaxCJ5%2FPxOqTJorTQhXEJnvEQ1sa2vFC7MtKFTO%2B7479nSCkGtFlTUOwwvxZCdEqJLwt8czxZdS8%2BI0oXouKiKQLV9YU%2F8H%2FKPaP4sZxR1Jb2PBnHY3z8JLzq5dpcO%2F%2Fd6KmHh2mxhtkdZCrKAC7jOYwS9AhnHMJ9GaRPB3pWhyCCjs6&X-Amz-Signature=8f7a4de409f099c952c41935f5d01788b9a68e5f7ab327bc017633a15ca5aaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

