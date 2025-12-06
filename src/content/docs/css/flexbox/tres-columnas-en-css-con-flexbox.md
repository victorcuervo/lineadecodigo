---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW2BPFDS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC00c32Xm2KVIjCj5VopROEYD%2FMMyHlDkvQuZM%2FDAG24wIhAM8sBCn%2FyvzPody0GlDGtz9KFJtRQwvHT4ZR8%2B2WdmOjKv8DCGwQABoMNjM3NDIzMTgzODA1IgzLd6k%2BHIwJvKf%2Fecsq3AN%2BPlk3cIrdgj%2BXG4CpRjk216Ek7t3b7yi%2B64%2BqkL9jB5RuFtpswbINxJW5kkiMD0IM4Q5cnjio69Z3F3HFu%2FBUCfM8OjKsyiZIl6E5qz1hNoHrofqixALH%2Fg4kkeOnz0kizZuDB4OYbS%2FgrwipoOaqMwjriWRAWR4xCS80Lk1QqHgFI%2BVPzne9c%2BmVqvSxiTSBhgVqMOW%2BLYrLf3jd0ws2F8KyK5e3iotgBLEpDI9TbWLenb3NPD2J1IL3bM%2Fvc3ZZMsLOrUtHU8xwcpqBwMJcEOow83qbYVRJIvVYTLRpiJU4L1RRRF1LhceMy3uY89hLRDNoRr1ATQ33jskm9tQ8909Fgf7BeDAwnh9KnSCyGc4kTuZN4QwVtKt5GJmcRRtlHI0SYfs%2FHmy0vreZDec99s39cvgCn16WUcYT7K33Newwqy%2Byc9l38XidwvU74ifn5W3pEfjDqnaXO%2B%2BDeEYDhKkrIJs3y4HoYAyxixWHOZHcLMx%2Fk5iz0RD29AKqgpEDZK6uZl1TJld7daOIAXb0feqNWQEnI6jXIO0VC0K1YX7xoX%2F6ye8BQ23QBlkxWSDlX8g%2BZif4%2BuR0vLjVYFfAUhagqTljdD8z6w4Q%2FrRnnQSX2bQp32P2RzjuajDnp87JBjqkAQjCPjMpkRBuVvM01rlTzRCerJFksJTlFDrrNB9e92fRW4SN0dyeIrn1fnaV7HzQqhFJ4ubtUiiV4arJru%2BllDMtY%2BGUtRbjuwVLL2davrVYbOe5Qol3x8XnY4sRDo%2FGQrhwxD7vqvNdHIklqozRsgIss3zAIhu2cwOXccpFPzXEMQWznKpxKQt%2BF7iphgI6rzy2GimEDNdg5L4QscMCYSvWWFt8&X-Amz-Signature=b9229ffcd3464c227d4b5f9e92a649e758ad804a05ac497655ca6edb8ff41d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WW2BPFDS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T022930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC00c32Xm2KVIjCj5VopROEYD%2FMMyHlDkvQuZM%2FDAG24wIhAM8sBCn%2FyvzPody0GlDGtz9KFJtRQwvHT4ZR8%2B2WdmOjKv8DCGwQABoMNjM3NDIzMTgzODA1IgzLd6k%2BHIwJvKf%2Fecsq3AN%2BPlk3cIrdgj%2BXG4CpRjk216Ek7t3b7yi%2B64%2BqkL9jB5RuFtpswbINxJW5kkiMD0IM4Q5cnjio69Z3F3HFu%2FBUCfM8OjKsyiZIl6E5qz1hNoHrofqixALH%2Fg4kkeOnz0kizZuDB4OYbS%2FgrwipoOaqMwjriWRAWR4xCS80Lk1QqHgFI%2BVPzne9c%2BmVqvSxiTSBhgVqMOW%2BLYrLf3jd0ws2F8KyK5e3iotgBLEpDI9TbWLenb3NPD2J1IL3bM%2Fvc3ZZMsLOrUtHU8xwcpqBwMJcEOow83qbYVRJIvVYTLRpiJU4L1RRRF1LhceMy3uY89hLRDNoRr1ATQ33jskm9tQ8909Fgf7BeDAwnh9KnSCyGc4kTuZN4QwVtKt5GJmcRRtlHI0SYfs%2FHmy0vreZDec99s39cvgCn16WUcYT7K33Newwqy%2Byc9l38XidwvU74ifn5W3pEfjDqnaXO%2B%2BDeEYDhKkrIJs3y4HoYAyxixWHOZHcLMx%2Fk5iz0RD29AKqgpEDZK6uZl1TJld7daOIAXb0feqNWQEnI6jXIO0VC0K1YX7xoX%2F6ye8BQ23QBlkxWSDlX8g%2BZif4%2BuR0vLjVYFfAUhagqTljdD8z6w4Q%2FrRnnQSX2bQp32P2RzjuajDnp87JBjqkAQjCPjMpkRBuVvM01rlTzRCerJFksJTlFDrrNB9e92fRW4SN0dyeIrn1fnaV7HzQqhFJ4ubtUiiV4arJru%2BllDMtY%2BGUtRbjuwVLL2davrVYbOe5Qol3x8XnY4sRDo%2FGQrhwxD7vqvNdHIklqozRsgIss3zAIhu2cwOXccpFPzXEMQWznKpxKQt%2BF7iphgI6rzy2GimEDNdg5L4QscMCYSvWWFt8&X-Amz-Signature=b8d2a0ee1087887cec44d2ce1f51e0c86a1a4c565ece87cd326ae064c2953853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

