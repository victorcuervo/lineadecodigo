---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINC7P2J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBFBFI0sHb9qDaLtvCwRiQE%2F9owm7z%2BaRVmf1gZrs7eKAiBaB%2Bzv%2FvUuzeXTDLLPscrlAz%2BPcxXLQqCDoNe0Q17Iayr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMjK99LBzED6%2FBNgKXKtwDqnZfV2d9X4oG2IRiUisIa3sdw0cge1x9ChVaeZ0KqZcKoE5nu1i%2F0yK5q3NduCOJ3lKx3rceQy%2B09XrtO26sc0gRsN0SG3BEgiqnDI9rNgiD5p0dByUHZED7NA%2BMutuouEzmoyxnoJn7sp%2FEXRVohRnGtUtYbpaQSnCzTZwWlhB%2BD95mKJYS7tZ3m14SkX3m8%2Bbxlv4OsFyN0gfRt9qrAX1gtm8NANB3lhk%2BzmzRjGKuPj6zpbGc%2BkwwDRuFHtbErMdsD4XjuoAD6qpcl7RQ225oBjvZW54UmsRAEotQMqJ53Fuz%2BoADSzEolxlOtD5PpS8%2FT4HZOO8aqSguwqt8ZmC65Me97k16DOb7%2BMcqxNnr60Aw%2BogMbaZ29sx3VxUNHvzPr4E6ZoBPiunuBCLG5ofN%2Bno85iiHXQ1dISiKhKTkOLneonzGDBhNRzEUFkNNce8%2BlUg%2FZ5IHlsLbRZPyphoIPL%2FUTPMHZ0s13xtj6knMsnNJbMtpL4P%2BCmAs%2FGrKjA0XIZbpNQKnSxSNJIlW8VIRPmk%2B%2BlWA6J%2FoYWhqiog60cBuSnL4lv0y7sZOSFpLdT8UCaJahW3ce6%2BWc%2Fef0Pb5fchT9vj2FgxQHJIFvUTRF2TzBPUaiDDe0W8wiZu%2FyQY6pgHQsVKSbf7iI44PvZJ0c9LMCJy2bttaPdy55drXAl%2F5Fr8VhuDRBgwHuVTtiUfgNIavzdpKRsH9%2Fid%2BGnyv8I9Sk5fCHhpM0nyavhCQAcDGAXBkBz%2FH3kC3QT8mZlO4HbFs7uuBDSqdo8h5Xc61a%2FNM7n5fUdFse4K%2Friw1yUWcWiyV3%2B49oH5nu5FqW1BSqfr1Jr3SNuA57q6wR0%2BssY3k91Vg%2Bn4C&X-Amz-Signature=c4a0ed86edfe46dc672dfba933c0126c0461d19989dc18adfbc94cb95e47f5a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINC7P2J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBFBFI0sHb9qDaLtvCwRiQE%2F9owm7z%2BaRVmf1gZrs7eKAiBaB%2Bzv%2FvUuzeXTDLLPscrlAz%2BPcxXLQqCDoNe0Q17Iayr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMjK99LBzED6%2FBNgKXKtwDqnZfV2d9X4oG2IRiUisIa3sdw0cge1x9ChVaeZ0KqZcKoE5nu1i%2F0yK5q3NduCOJ3lKx3rceQy%2B09XrtO26sc0gRsN0SG3BEgiqnDI9rNgiD5p0dByUHZED7NA%2BMutuouEzmoyxnoJn7sp%2FEXRVohRnGtUtYbpaQSnCzTZwWlhB%2BD95mKJYS7tZ3m14SkX3m8%2Bbxlv4OsFyN0gfRt9qrAX1gtm8NANB3lhk%2BzmzRjGKuPj6zpbGc%2BkwwDRuFHtbErMdsD4XjuoAD6qpcl7RQ225oBjvZW54UmsRAEotQMqJ53Fuz%2BoADSzEolxlOtD5PpS8%2FT4HZOO8aqSguwqt8ZmC65Me97k16DOb7%2BMcqxNnr60Aw%2BogMbaZ29sx3VxUNHvzPr4E6ZoBPiunuBCLG5ofN%2Bno85iiHXQ1dISiKhKTkOLneonzGDBhNRzEUFkNNce8%2BlUg%2FZ5IHlsLbRZPyphoIPL%2FUTPMHZ0s13xtj6knMsnNJbMtpL4P%2BCmAs%2FGrKjA0XIZbpNQKnSxSNJIlW8VIRPmk%2B%2BlWA6J%2FoYWhqiog60cBuSnL4lv0y7sZOSFpLdT8UCaJahW3ce6%2BWc%2Fef0Pb5fchT9vj2FgxQHJIFvUTRF2TzBPUaiDDe0W8wiZu%2FyQY6pgHQsVKSbf7iI44PvZJ0c9LMCJy2bttaPdy55drXAl%2F5Fr8VhuDRBgwHuVTtiUfgNIavzdpKRsH9%2Fid%2BGnyv8I9Sk5fCHhpM0nyavhCQAcDGAXBkBz%2FH3kC3QT8mZlO4HbFs7uuBDSqdo8h5Xc61a%2FNM7n5fUdFse4K%2Friw1yUWcWiyV3%2B49oH5nu5FqW1BSqfr1Jr3SNuA57q6wR0%2BssY3k91Vg%2Bn4C&X-Amz-Signature=aaa8ee88073a2b366d65585c872275dec922f8387d3bb86f58c41d3e672b0d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

