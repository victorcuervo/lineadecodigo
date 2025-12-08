---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6U6RCB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP3YPCrixiy3s%2BZdgywC4Of8b00uCLnNw34gH023B0rAIgQFrZFgYd7WqY6kui4xWJaBFKtu%2BeQyHRh2RiYZlt3gEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHI4pkuqo9IFZJ%2FUsCrcA8d%2FKvNkhC8Kt4d2jh5D0BhY2FZ0BGqtvp3WvvKvwPP72C6sBQCqUbRodC%2F%2Fi%2Fsiu1hJpMVsxSherrsIfUnJ23ZY80BOF07h300MGFGwnkpDV84IdRH%2BKuIXzSEn7ZUoMO2XvyQMnxpfsdQNxCUxBANaLKRsyotx59CT0nFF1E6Uidqe8CJcGBk1p4WtDce4G2F7wDzGjgugkvK18kWKCVyyBySi0okRPkgKdCzCLNVwiIVYexdLjWoMHFMkkZvoYxCsh4mtKLL%2FJwTEOqfvyUwrodm7oKbsBqAP3obroGj69p4%2BkzZ%2BaLrbqPVA%2FuTqtPrWoQ4iN2Jcym2cqV9%2FW92JOiQzKVZeol9DWfEdMyN5TZnSxOGfr%2BHcOsQ6z1jjcmO17RQ2eYs7HglRczaRmKC%2FFsd2RwKUSj0t5wi3YYutLox3942YhCaaz5FdTdyk644YHhMVY5zIwvGhEy3meDSgBDCQx3LamBms0Gdn4HliqaSS9k64btHXkIbam8vV%2BP4oxD8FhWQWtTxjQ7O5UnEJanqZ8N6RuOoI7dC7wv%2Bc3S7j88AzFXSdeGdV2ziU1hTeISdJxbCOCQrBiaH0mb5GwY2%2F0UAoZdl%2FCYhTX8I7PwLqUhe85IfNENNSMJXv2MkGOqUBZBUp1H%2B%2Bwvp4vmUCEUzBbUXrIywGMseoniBMicMUnBQnRiL70L1CFOzyAT7wFmY5%2FZgPu5NFQaSE2PvI8M%2BPSviKwwjXCGbIRiQ9CDJoc8W1Q9QFRPVd22lkyZF4cAKXRovnDyVIVVEGtaZHS%2BqhaNprUdpnpwi7Z0NCrSPqzoeL6Y8WX8rJ%2F2YEbEt20jFyqhHaYC%2BEMsU1aRAZ27kjQtTwm4Ta&X-Amz-Signature=4dffce0184812362aadf09c1ee95fa8bf6af58a22af445d87449cac210187490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RR6U6RCB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP3YPCrixiy3s%2BZdgywC4Of8b00uCLnNw34gH023B0rAIgQFrZFgYd7WqY6kui4xWJaBFKtu%2BeQyHRh2RiYZlt3gEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHI4pkuqo9IFZJ%2FUsCrcA8d%2FKvNkhC8Kt4d2jh5D0BhY2FZ0BGqtvp3WvvKvwPP72C6sBQCqUbRodC%2F%2Fi%2Fsiu1hJpMVsxSherrsIfUnJ23ZY80BOF07h300MGFGwnkpDV84IdRH%2BKuIXzSEn7ZUoMO2XvyQMnxpfsdQNxCUxBANaLKRsyotx59CT0nFF1E6Uidqe8CJcGBk1p4WtDce4G2F7wDzGjgugkvK18kWKCVyyBySi0okRPkgKdCzCLNVwiIVYexdLjWoMHFMkkZvoYxCsh4mtKLL%2FJwTEOqfvyUwrodm7oKbsBqAP3obroGj69p4%2BkzZ%2BaLrbqPVA%2FuTqtPrWoQ4iN2Jcym2cqV9%2FW92JOiQzKVZeol9DWfEdMyN5TZnSxOGfr%2BHcOsQ6z1jjcmO17RQ2eYs7HglRczaRmKC%2FFsd2RwKUSj0t5wi3YYutLox3942YhCaaz5FdTdyk644YHhMVY5zIwvGhEy3meDSgBDCQx3LamBms0Gdn4HliqaSS9k64btHXkIbam8vV%2BP4oxD8FhWQWtTxjQ7O5UnEJanqZ8N6RuOoI7dC7wv%2Bc3S7j88AzFXSdeGdV2ziU1hTeISdJxbCOCQrBiaH0mb5GwY2%2F0UAoZdl%2FCYhTX8I7PwLqUhe85IfNENNSMJXv2MkGOqUBZBUp1H%2B%2Bwvp4vmUCEUzBbUXrIywGMseoniBMicMUnBQnRiL70L1CFOzyAT7wFmY5%2FZgPu5NFQaSE2PvI8M%2BPSviKwwjXCGbIRiQ9CDJoc8W1Q9QFRPVd22lkyZF4cAKXRovnDyVIVVEGtaZHS%2BqhaNprUdpnpwi7Z0NCrSPqzoeL6Y8WX8rJ%2F2YEbEt20jFyqhHaYC%2BEMsU1aRAZ27kjQtTwm4Ta&X-Amz-Signature=b9484a6a25d500e16e76c8db8830812143d435a0079cde81aefaea974608ef26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

