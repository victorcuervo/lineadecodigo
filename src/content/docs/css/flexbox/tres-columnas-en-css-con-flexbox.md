---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBDCPEO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAv9429Nm%2Fo5QUa5jDFf2UMfOPFWcbgIkOejKDXjhmwIgDWJZJjjz4IVRIJhwQssC5i47Ca9bXi33oAU8fqTQH60qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1iGlu3Zagc8uEwHCrcAy86CLQ6tcJa45nz5U2LIBkOQtQFJyBugAte1nrhJ2Hqq9mJJ6zR60ONjfjTtBzog0ceOoh3LOxwfr5wgwvOJaOTVR7jlfvgPXN67OLJQKaY0B4tWSE%2FDDXEtF4f8BW6r7QSN70ThHhJPCK2HmYlVywyT%2BxomoukLLACFxsz2aG%2FwyThE3p90U%2FcJP5B6gXsopCE9n8kyvIb4B6kzhsgsnb9QRQcOlunbRw89U5V7%2BN0fuXcM%2Bme00S8TxsmHW6sANVfWGIaO82B2mwqUhIUEau1p5EuwqAit%2Bp2TA8ez4B7zrX7Ng56dIWOnOgnKH0XR6pxpAN4yJA4bjpdlc7vxM0U3GEGb4FurGFmeAMQ2uyxCFCSt8KRiV6llR3Awm6%2FNdo5eIeCTyL3odthM57%2F%2FA59uVFTTTvn6Npy6k0GD71NyRaMWs2tvbEro7wf7Y%2B%2B8uMbeCjpMpHB9oS7vb3z%2By9%2Bcfv2CzWqKgT9GRcm6wrr2njs1EXHGt60miE6IvTpiuNF%2F9RzXXfvZVatmy%2B3D2g2aTDnIhJwVZJq4sXOPVLigPe8QJDyEVMbP6imQcxY%2BGB7soiBfwZor6QSRCxUqiDx8KfCaptMLjM4p6tDXEQkDzmRf2dMsLMGsNC%2BMNCE2MkGOqUBckrjA%2FD7lhH684EV8%2B7l%2BsDvC%2Bl6zknCaqMg1iHmMMP3NI4jQs132GNvWyfZ8iXZ1%2BxLQ49nLap7W6kVF2cEYF0sAmO25MHB1s5Z%2BKcPFxAg5g71W7wmB5hhqH9mzoc%2BYCAQConigVGi4s01tVOFK7BaLU8E0YLOeWtqoeO%2FrvZUUUlvlS%2FGMWlRXw2FLWJRjwuzjqObE8%2BscRTR0Vl0Lk5pP0yk&X-Amz-Signature=5b949b5e32f0f435d0510895a03a1942b442f9027dbf6199c23cacf2cd02348c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBBDCPEO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAv9429Nm%2Fo5QUa5jDFf2UMfOPFWcbgIkOejKDXjhmwIgDWJZJjjz4IVRIJhwQssC5i47Ca9bXi33oAU8fqTQH60qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1iGlu3Zagc8uEwHCrcAy86CLQ6tcJa45nz5U2LIBkOQtQFJyBugAte1nrhJ2Hqq9mJJ6zR60ONjfjTtBzog0ceOoh3LOxwfr5wgwvOJaOTVR7jlfvgPXN67OLJQKaY0B4tWSE%2FDDXEtF4f8BW6r7QSN70ThHhJPCK2HmYlVywyT%2BxomoukLLACFxsz2aG%2FwyThE3p90U%2FcJP5B6gXsopCE9n8kyvIb4B6kzhsgsnb9QRQcOlunbRw89U5V7%2BN0fuXcM%2Bme00S8TxsmHW6sANVfWGIaO82B2mwqUhIUEau1p5EuwqAit%2Bp2TA8ez4B7zrX7Ng56dIWOnOgnKH0XR6pxpAN4yJA4bjpdlc7vxM0U3GEGb4FurGFmeAMQ2uyxCFCSt8KRiV6llR3Awm6%2FNdo5eIeCTyL3odthM57%2F%2FA59uVFTTTvn6Npy6k0GD71NyRaMWs2tvbEro7wf7Y%2B%2B8uMbeCjpMpHB9oS7vb3z%2By9%2Bcfv2CzWqKgT9GRcm6wrr2njs1EXHGt60miE6IvTpiuNF%2F9RzXXfvZVatmy%2B3D2g2aTDnIhJwVZJq4sXOPVLigPe8QJDyEVMbP6imQcxY%2BGB7soiBfwZor6QSRCxUqiDx8KfCaptMLjM4p6tDXEQkDzmRf2dMsLMGsNC%2BMNCE2MkGOqUBckrjA%2FD7lhH684EV8%2B7l%2BsDvC%2Bl6zknCaqMg1iHmMMP3NI4jQs132GNvWyfZ8iXZ1%2BxLQ49nLap7W6kVF2cEYF0sAmO25MHB1s5Z%2BKcPFxAg5g71W7wmB5hhqH9mzoc%2BYCAQConigVGi4s01tVOFK7BaLU8E0YLOeWtqoeO%2FrvZUUUlvlS%2FGMWlRXw2FLWJRjwuzjqObE8%2BscRTR0Vl0Lk5pP0yk&X-Amz-Signature=ca82bd47569d2f2dd053299f9b77c51d496f0df2468dcc4ed52f9afb47e9d5ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

