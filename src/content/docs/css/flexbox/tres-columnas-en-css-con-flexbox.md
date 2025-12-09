---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYPXDPJD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaPhej%2B3ZZAyU4i%2F26ygg97K6k8XlXx576ISYL%2F7sXSQIhAKISMBu8JyvNCd53DXVbHwzVHzUz4b2wvK%2FF%2Bhcgmw4cKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj6DJegM%2BKKAQ9XToq3AOqsclQGjg7x%2Bx665hturieJ3zwjSXNhyXhBFAmaBkYGBChFdZGClNxaY7HBxzTRtisKyZlORh1v%2B5r2rUyYJg29TlGH1mkF6Qky7Tos0fim25PllpV1xnNsk4D3r2yGGZWAX0h84nNm%2FJpG3s1UFFXRLKTplRTI4m8p%2Fr494AAvr4FLmJmKXOqGECzRTFOEY0cls9T%2B7C8z8egn6QHN4EtJDHNAlX9f3Z648PgPeJA90Uh91phSwIbr4%2BCCyaZh2lRV4KnXTh%2Bdsf%2F22DVZ2Si8B92XAKIT5n7lBwtBVUjnbRp%2BOfU2reMIbKjwA10Krzn4qLFqAfpL64pML0yrkul49uojvttQoOSobgJIGulwSKLnV9jGYE9dXrFb4DIj13AMjP8PkTOZkDIQmTE2noNHH%2BKNsdeFANj2N%2B3S7TA9ZLnJhpGPy0hDqJnPC0DyuU%2Bl59z1S7VQIn4ZiVEYNvqgG0AGJK1zpdcOlSnF%2FDCw0qNPly8EW05ckN25yiS%2F46aH4fVFUlEpOwjEV98yabDeYjrrWXHN%2FKT8ypyB1QEQEgaiQqsvzh%2FOpCFrdr0k%2FUV6cNsRD1JRFTFaYcV5yisWBDCDYNQdiZqdf%2FPzlY7wpRv%2BjykeXD%2BDzREojDw5N7JBjqkAWVguvZXsaXpDvZbYgSUPEowKiLbaQYXwNsR0dvosWSpZIan%2FEwkNZYnB23YuHFKs6nnQh90w9F1CYOu60UXvzzIy7idVwp6z382q7M2BrXwzZ%2F4hysVg%2F%2BGuK6FTdKWmih9DzC0l1WNJ01chFK5Cbu4fdxk%2BcsmoFBGkjMem0gs5UUtgFgC88WCMn4ej2Q7WQoLxiZI0ndeR%2B2lfXBbu5tyciGA&X-Amz-Signature=f41d9a1114260e2956bde9698f8b4b6c2675d0c4baaf051c3f8848575c04ca01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYPXDPJD%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaPhej%2B3ZZAyU4i%2F26ygg97K6k8XlXx576ISYL%2F7sXSQIhAKISMBu8JyvNCd53DXVbHwzVHzUz4b2wvK%2FF%2Bhcgmw4cKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj6DJegM%2BKKAQ9XToq3AOqsclQGjg7x%2Bx665hturieJ3zwjSXNhyXhBFAmaBkYGBChFdZGClNxaY7HBxzTRtisKyZlORh1v%2B5r2rUyYJg29TlGH1mkF6Qky7Tos0fim25PllpV1xnNsk4D3r2yGGZWAX0h84nNm%2FJpG3s1UFFXRLKTplRTI4m8p%2Fr494AAvr4FLmJmKXOqGECzRTFOEY0cls9T%2B7C8z8egn6QHN4EtJDHNAlX9f3Z648PgPeJA90Uh91phSwIbr4%2BCCyaZh2lRV4KnXTh%2Bdsf%2F22DVZ2Si8B92XAKIT5n7lBwtBVUjnbRp%2BOfU2reMIbKjwA10Krzn4qLFqAfpL64pML0yrkul49uojvttQoOSobgJIGulwSKLnV9jGYE9dXrFb4DIj13AMjP8PkTOZkDIQmTE2noNHH%2BKNsdeFANj2N%2B3S7TA9ZLnJhpGPy0hDqJnPC0DyuU%2Bl59z1S7VQIn4ZiVEYNvqgG0AGJK1zpdcOlSnF%2FDCw0qNPly8EW05ckN25yiS%2F46aH4fVFUlEpOwjEV98yabDeYjrrWXHN%2FKT8ypyB1QEQEgaiQqsvzh%2FOpCFrdr0k%2FUV6cNsRD1JRFTFaYcV5yisWBDCDYNQdiZqdf%2FPzlY7wpRv%2BjykeXD%2BDzREojDw5N7JBjqkAWVguvZXsaXpDvZbYgSUPEowKiLbaQYXwNsR0dvosWSpZIan%2FEwkNZYnB23YuHFKs6nnQh90w9F1CYOu60UXvzzIy7idVwp6z382q7M2BrXwzZ%2F4hysVg%2F%2BGuK6FTdKWmih9DzC0l1WNJ01chFK5Cbu4fdxk%2BcsmoFBGkjMem0gs5UUtgFgC88WCMn4ej2Q7WQoLxiZI0ndeR%2B2lfXBbu5tyciGA&X-Amz-Signature=40f0b6d58942f60de909c179adce82f481506a48dccba390da749fb6e369c9ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

