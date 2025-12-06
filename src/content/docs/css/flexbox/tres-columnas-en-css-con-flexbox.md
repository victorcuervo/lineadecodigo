---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG6UBV2U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdMhONBnH4XdCjhhRp1r1f0fyvXBAYZt9wA2hq%2FXet0AiEAuYY7tJtHU4LPn7il1xG%2F%2B%2FSPQWJpzG%2BA8S05pIVXCpwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCpIGKetkkXg1Hh%2F8ircA3%2BpQ1D51248JsUHoitnN2wZDMd2SvQoap8aQTmQYoBm%2ByxI5v7rwscuNKlGLHgE07mU9rSlOB5M041ouOYNqwXNrYAwFcmnr%2FXErscAsAdjrcjp303BegW3N97cE%2FnD0tfvjNoQt%2F3NnyJ%2BHsw9LuI%2B5NkP0JMAzZra6IXiHYI2GPQI2QffuzURVvdQqcUVs5%2Fbreo6MLgODn93rhEMNQgudVzo7E5U20WCxoduelplnaUpV1wzpCdjSi%2Fcx3w%2Bp1PWXnRsjHJYA2F6T5PryI%2By5l6ezQFyLq2U2cg4JauXpbM%2FpiqWvec3LoOpe1QZ9ADd7JKVzZhc%2FQU1mA1uNmRSjD%2Bt8%2BORTsZBEbPiffFx%2FH9JDF721EbrS4oZrXjvNHwsFLdPTj6njuVRFf0Z%2FOW2XwP9dqdQRU5p3OOeBtzl%2F4Pm7monH09x2kjB59loX%2B0HWliAePj0gqBEzBNkF2EV%2BWUJjLezoxZNcWejT6y6diT6Pb3oIxpLetJOvTwlovD6AhUKDGPMuW8x2EbtKGHPaGtS1HWOi%2FOcKFAShmLHxxRnHR9ZHXtnfcsJAk8TDY6MiUhG7%2B7osZ00vepBRWIhShX9VQRq6itgc1xXmIrdgZCfoAIZb4jwzQDiMNim0MkGOqUBwvKv1qu1j8Oi%2FSmstyuVOwXU%2FRV2SeXTLiIFK3RTPgHEOJUeIHmN1kmgWO%2FvfLsupi5g8kTQyPVUbvp1UBbmJfPIoAiJ4UlKLqtAed3mfQgokzS%2Fp%2BJFhSLQOwO8gNSjpEyhS0j2a43FyogOX8PjXIfayvhHpjdEKUBkG5zf0haXeDnPWYvQfDx3prwiR29GM7HCN53HPPzgU2k%2FFyIegDE0QkBS&X-Amz-Signature=64f2cfbe951c63c1a1ac152ba8806b25a55317109c7b8772074b7b781e18d917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG6UBV2U%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T134159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHdMhONBnH4XdCjhhRp1r1f0fyvXBAYZt9wA2hq%2FXet0AiEAuYY7tJtHU4LPn7il1xG%2F%2B%2FSPQWJpzG%2BA8S05pIVXCpwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCpIGKetkkXg1Hh%2F8ircA3%2BpQ1D51248JsUHoitnN2wZDMd2SvQoap8aQTmQYoBm%2ByxI5v7rwscuNKlGLHgE07mU9rSlOB5M041ouOYNqwXNrYAwFcmnr%2FXErscAsAdjrcjp303BegW3N97cE%2FnD0tfvjNoQt%2F3NnyJ%2BHsw9LuI%2B5NkP0JMAzZra6IXiHYI2GPQI2QffuzURVvdQqcUVs5%2Fbreo6MLgODn93rhEMNQgudVzo7E5U20WCxoduelplnaUpV1wzpCdjSi%2Fcx3w%2Bp1PWXnRsjHJYA2F6T5PryI%2By5l6ezQFyLq2U2cg4JauXpbM%2FpiqWvec3LoOpe1QZ9ADd7JKVzZhc%2FQU1mA1uNmRSjD%2Bt8%2BORTsZBEbPiffFx%2FH9JDF721EbrS4oZrXjvNHwsFLdPTj6njuVRFf0Z%2FOW2XwP9dqdQRU5p3OOeBtzl%2F4Pm7monH09x2kjB59loX%2B0HWliAePj0gqBEzBNkF2EV%2BWUJjLezoxZNcWejT6y6diT6Pb3oIxpLetJOvTwlovD6AhUKDGPMuW8x2EbtKGHPaGtS1HWOi%2FOcKFAShmLHxxRnHR9ZHXtnfcsJAk8TDY6MiUhG7%2B7osZ00vepBRWIhShX9VQRq6itgc1xXmIrdgZCfoAIZb4jwzQDiMNim0MkGOqUBwvKv1qu1j8Oi%2FSmstyuVOwXU%2FRV2SeXTLiIFK3RTPgHEOJUeIHmN1kmgWO%2FvfLsupi5g8kTQyPVUbvp1UBbmJfPIoAiJ4UlKLqtAed3mfQgokzS%2Fp%2BJFhSLQOwO8gNSjpEyhS0j2a43FyogOX8PjXIfayvhHpjdEKUBkG5zf0haXeDnPWYvQfDx3prwiR29GM7HCN53HPPzgU2k%2FFyIegDE0QkBS&X-Amz-Signature=9d9f474feab985370df04ebe67705d7cc113b708c21bc934b9a4a74c3d54780f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

