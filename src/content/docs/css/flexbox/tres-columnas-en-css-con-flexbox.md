---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIKUJTU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYxuRqODNdEKvC%2FhXGST7zPG4TjVMAk4fwlH7%2FPudO7gIgbai7%2BlzBIzlZ9817SR3qRViZ9pwmcivGJ%2F1kmwOWq3YqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVx%2FVDErCB%2Bo2KPEyrcA%2BUFkd93gzvjId2ztrOGKWy6PaRY0U2E6pCMdd9uWt%2FRJz87FkteLob63HS39lf3P1bL4bYOrqq0vO1coo0dN%2F3BPrIzf7m%2BxvWQVj7HDUWDYw%2BEeoOa6%2BK9UZOz85Pevc3RFcawBvgRCqIq9nlPH05wx%2BR5dQQbjoWZ4Xz0dN8cA8L%2BhhHTr3Qtpke76JND5W%2F%2B497pMCm0eHXUSbKDebuxjVMSLG0aDCm%2BE6rZQ0%2BUTzjrzmeVDhngsCKqKh%2F7wo5aekrlZSLTtFywmRwK8%2FAJNtbikPV3S9z3OfuENIpaJwWOq5OTyyNXhK1QmXOn%2F6YTe2BEIOm7ewImNf2ni9l1Qwic9KeGgxJ9ywPx%2B4tjZw54zNkoBv3KsuzivRNWF0YxXR5milvSME%2FYZR6MubjtP7FhASUMCHH2X3sJYAb1vTi30rapQQm1Huv5ziIW8Tmpy6vEh4E%2Bk5yj5usED%2F6hX7MDDkfe2BspivSlg50dmC0vRvy4b1BEYC45Vi7V1iEdPxjfz73%2B7qTqRY5aV%2FuNMMkLpy4uLWnIh1j8ZuUWuLN8ZJMVyjW5x%2BHBZ4e5JsTIaJw69X4Fkyr3RX63FheGqGYHJDA96NxgzbstGTqxukD85RRSaBJtwzreML%2Fl3skGOqUBK66eqIWsSqepE%2FuNZaahmwKnIRKBdKWYTgmxNfNaEdWjwvOP5x%2F07RHVGJdY078q7MY9IExqCWbL18%2F0dMGMK3KhzUZYkj945RJ0Gn3S18lu3m%2FEJrORjqSLk%2BrLFGWQc5cclQXAc2dwmSf7dlA9Dh3FQRuMxggIbMLq5UqXAwa1M6ax1to7w%2FFf0ESnkR1RcviyA9pQK12DpqdRevptwlrIBTbR&X-Amz-Signature=b9f79f25cd6404f7ed02aa7788aaa19da38979b5b658d57192eecd512a70dc54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVIKUJTU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T062417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYxuRqODNdEKvC%2FhXGST7zPG4TjVMAk4fwlH7%2FPudO7gIgbai7%2BlzBIzlZ9817SR3qRViZ9pwmcivGJ%2F1kmwOWq3YqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVx%2FVDErCB%2Bo2KPEyrcA%2BUFkd93gzvjId2ztrOGKWy6PaRY0U2E6pCMdd9uWt%2FRJz87FkteLob63HS39lf3P1bL4bYOrqq0vO1coo0dN%2F3BPrIzf7m%2BxvWQVj7HDUWDYw%2BEeoOa6%2BK9UZOz85Pevc3RFcawBvgRCqIq9nlPH05wx%2BR5dQQbjoWZ4Xz0dN8cA8L%2BhhHTr3Qtpke76JND5W%2F%2B497pMCm0eHXUSbKDebuxjVMSLG0aDCm%2BE6rZQ0%2BUTzjrzmeVDhngsCKqKh%2F7wo5aekrlZSLTtFywmRwK8%2FAJNtbikPV3S9z3OfuENIpaJwWOq5OTyyNXhK1QmXOn%2F6YTe2BEIOm7ewImNf2ni9l1Qwic9KeGgxJ9ywPx%2B4tjZw54zNkoBv3KsuzivRNWF0YxXR5milvSME%2FYZR6MubjtP7FhASUMCHH2X3sJYAb1vTi30rapQQm1Huv5ziIW8Tmpy6vEh4E%2Bk5yj5usED%2F6hX7MDDkfe2BspivSlg50dmC0vRvy4b1BEYC45Vi7V1iEdPxjfz73%2B7qTqRY5aV%2FuNMMkLpy4uLWnIh1j8ZuUWuLN8ZJMVyjW5x%2BHBZ4e5JsTIaJw69X4Fkyr3RX63FheGqGYHJDA96NxgzbstGTqxukD85RRSaBJtwzreML%2Fl3skGOqUBK66eqIWsSqepE%2FuNZaahmwKnIRKBdKWYTgmxNfNaEdWjwvOP5x%2F07RHVGJdY078q7MY9IExqCWbL18%2F0dMGMK3KhzUZYkj945RJ0Gn3S18lu3m%2FEJrORjqSLk%2BrLFGWQc5cclQXAc2dwmSf7dlA9Dh3FQRuMxggIbMLq5UqXAwa1M6ax1to7w%2FFf0ESnkR1RcviyA9pQK12DpqdRevptwlrIBTbR&X-Amz-Signature=ca8904b9f5b02cf43b5f038cf726dc40ab87a71675042a1119204e45601225c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

