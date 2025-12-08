---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHPGXNNX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRNTtia1MOYTABY14XuPZJbqVT4z3xksvZW%2FOkx0HfNAiEA%2FL%2BsdgYrGGwdvGoHFWV04IYdAYwN5Ly3qObEtwJ7xA0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzS81Xx8rJYPipRuSrcA8Qr3BSwfSnU4GSVdMXlI9Jb4RFmuE4dRonbzJ7l1AWzMw5u7I5E3HtP9ruCU5tVAB3qKzXsQJxpcnGkKK7BArYfbKEznviXGL8WxURTadqzWamBCdRHXRX7p%2BLRWl8TkTb8N7DhUMv0uVCVIwYB8YS2Vk8Iz3r8SOpARpgxxT6K2quAf9j2bpfFAqx2%2FVudl3W9mM2XhHywIXCuezfbtP8bVcNL6RqajRBffQYXOuNSspARpzD74mcdRALtDGgiLTZFg%2FbsBsyIi04bFnn1FE9rs9sGdDOndVvc5HgPiUUFAwNVqpytlRAZqsHpW%2FdCO%2B5LbTHhV2jB6Sijw%2FkoMT92jnaxX%2BUmpxQBDG6qS4uSaQSID3uC35sQfaiBCWFBP5hw6bVOuMA3QLB0zBX6fTNtLaBx0oG8UvPxAYzcAu9u4a2bYE6KGgej6LQU6r53vW5rVg%2FYsg4wW5%2BhmTUdvYN9zhOqwzkCCTbGkhrp4lzlw%2Bfl%2FJ0K3g5ArJkh6rfcnoFgV16CjVBVuUVHBe2ViAzmomR3V65OXmbxpyS8aBlVN3HCvT0BoJxWYlkjxewOkrELq1i%2BWgccQNuNO%2BsJh2NnJAqwXynpc3yNv56TZ%2FE%2BWI%2FVS9yNueB3h9CqMJaU2ckGOqUBzpl%2FO%2FfpYhJBa5Eb4n%2F3ZvSoLyDpqa7cQO4aiy5CIFCol2y54nvEXowsomZJGrxhVS5ZwTgazK56cY8c7uX%2FOU7z6X98sxDtcczFK6%2BHP9hoq1NTZuU%2BE4%2FlfymrW6XllTt8EdxLo%2BAUIFrpSW%2FHTf6ecX3cYiU%2BthVqpUvE9wbuPenLAeLuW4ehazn97wjvOxmiqyqOX8HIOfmJq4mCNEEdKDgd&X-Amz-Signature=fe46893b7c109b2fadd7b1eac5e2771e4de2eaf89a011d6fbeb249932c7e93cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHPGXNNX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRNTtia1MOYTABY14XuPZJbqVT4z3xksvZW%2FOkx0HfNAiEA%2FL%2BsdgYrGGwdvGoHFWV04IYdAYwN5Ly3qObEtwJ7xA0qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOzS81Xx8rJYPipRuSrcA8Qr3BSwfSnU4GSVdMXlI9Jb4RFmuE4dRonbzJ7l1AWzMw5u7I5E3HtP9ruCU5tVAB3qKzXsQJxpcnGkKK7BArYfbKEznviXGL8WxURTadqzWamBCdRHXRX7p%2BLRWl8TkTb8N7DhUMv0uVCVIwYB8YS2Vk8Iz3r8SOpARpgxxT6K2quAf9j2bpfFAqx2%2FVudl3W9mM2XhHywIXCuezfbtP8bVcNL6RqajRBffQYXOuNSspARpzD74mcdRALtDGgiLTZFg%2FbsBsyIi04bFnn1FE9rs9sGdDOndVvc5HgPiUUFAwNVqpytlRAZqsHpW%2FdCO%2B5LbTHhV2jB6Sijw%2FkoMT92jnaxX%2BUmpxQBDG6qS4uSaQSID3uC35sQfaiBCWFBP5hw6bVOuMA3QLB0zBX6fTNtLaBx0oG8UvPxAYzcAu9u4a2bYE6KGgej6LQU6r53vW5rVg%2FYsg4wW5%2BhmTUdvYN9zhOqwzkCCTbGkhrp4lzlw%2Bfl%2FJ0K3g5ArJkh6rfcnoFgV16CjVBVuUVHBe2ViAzmomR3V65OXmbxpyS8aBlVN3HCvT0BoJxWYlkjxewOkrELq1i%2BWgccQNuNO%2BsJh2NnJAqwXynpc3yNv56TZ%2FE%2BWI%2FVS9yNueB3h9CqMJaU2ckGOqUBzpl%2FO%2FfpYhJBa5Eb4n%2F3ZvSoLyDpqa7cQO4aiy5CIFCol2y54nvEXowsomZJGrxhVS5ZwTgazK56cY8c7uX%2FOU7z6X98sxDtcczFK6%2BHP9hoq1NTZuU%2BE4%2FlfymrW6XllTt8EdxLo%2BAUIFrpSW%2FHTf6ecX3cYiU%2BthVqpUvE9wbuPenLAeLuW4ehazn97wjvOxmiqyqOX8HIOfmJq4mCNEEdKDgd&X-Amz-Signature=36e45032d2d58a135b05577903f1fdded17d126649a83f6c7b36df7a4a62e7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

