---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFM5O4S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrO0wlemoMKtE5aQR5xvfqQ8oy9iNjb57A3n7%2Fuk7GrgIgTcnConbBLqRPxP7Zt%2FAqM7Xlu09sRkQ7lvIgtMERK4kqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmwhRdctRCUmE%2BIhCrcAz%2BKJ5S51FXJkxrilKSH4UDJBeY5MtosATxgcm4%2F2zGoYT9oJSjZjs50tg6xUmUjEIHg0IQGw3LlxMXBm81JsdkSEXPb4gNoGh53qCsPQVW%2FJ1KuwWGC%2FPKzXPHKjFR6s5VNnc43ru5kojkK4ST%2FQvmiI5lZOVlw0dF86ycneUOSbYAxg7RUUMoG3oUgbZUwpSPFg13%2FBwJ1B5tmOTjMUKS7R0qygsqwP9FsG8wUpt6xCwZMwZtlrXyi5Uf3zh97yc9XiJPNBahQ%2BPKSmgHEiv98QAbFb%2FFAmPdh%2FLjshp8mZz2IyjXwk4PMI8TK3XCSDxtVLX6eeKDPlnweJscoAdCQcqnZY8n7redHBSdizmSv3dmZyvURH8v8omlMQSfGRv9eLGodWkSx2W2XYZUNbsAT7d7gmupPAXWQDxvPmYJQ8%2BPH9W%2FAkoWcXfUCkDcjyTTH2IYjoJdAN6rxtkXTkvWhsvjhP%2BArDbeqAIcA1tCwztY52QKl5zyoADhAtnEpFuQQumnkYo68x8LTh0UlR%2FZWtkAJkzi6CMzXjIf7dRQTCi9BKcm5AgGNg74cRv26P5l9r1viKYRtA0DDjsatIQnmwmQcpbUMgT%2FobfEUkzD%2B8dAjSmYE%2FKvgIqlUMOnu2MkGOqUBtABLOH51XZP0P%2BJvmdyb%2Fg0P5jYPV4yB5O4tbB9sgYSufkThsN8vIGlY50%2FZBa7lB9bYiqxK93pWE8nNtLlhEqjpFbNeJASnFyjaLSAg1ar%2FKfTW6rDzLRzVKmsleVlRMwNdagHtyQiySJU8EXFbQaZujBfz1TPL3Q%2FkYcfyDNIycOJEno5nG2YystReXsXvOR%2Fg7AkwLMAsZA7lz%2BOljbm483eC&X-Amz-Signature=51390aeb5c30d5e40a1883e05b5f84a831f93337408eb0e99bfbcc0be4c943c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSFM5O4S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrO0wlemoMKtE5aQR5xvfqQ8oy9iNjb57A3n7%2Fuk7GrgIgTcnConbBLqRPxP7Zt%2FAqM7Xlu09sRkQ7lvIgtMERK4kqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmwhRdctRCUmE%2BIhCrcAz%2BKJ5S51FXJkxrilKSH4UDJBeY5MtosATxgcm4%2F2zGoYT9oJSjZjs50tg6xUmUjEIHg0IQGw3LlxMXBm81JsdkSEXPb4gNoGh53qCsPQVW%2FJ1KuwWGC%2FPKzXPHKjFR6s5VNnc43ru5kojkK4ST%2FQvmiI5lZOVlw0dF86ycneUOSbYAxg7RUUMoG3oUgbZUwpSPFg13%2FBwJ1B5tmOTjMUKS7R0qygsqwP9FsG8wUpt6xCwZMwZtlrXyi5Uf3zh97yc9XiJPNBahQ%2BPKSmgHEiv98QAbFb%2FFAmPdh%2FLjshp8mZz2IyjXwk4PMI8TK3XCSDxtVLX6eeKDPlnweJscoAdCQcqnZY8n7redHBSdizmSv3dmZyvURH8v8omlMQSfGRv9eLGodWkSx2W2XYZUNbsAT7d7gmupPAXWQDxvPmYJQ8%2BPH9W%2FAkoWcXfUCkDcjyTTH2IYjoJdAN6rxtkXTkvWhsvjhP%2BArDbeqAIcA1tCwztY52QKl5zyoADhAtnEpFuQQumnkYo68x8LTh0UlR%2FZWtkAJkzi6CMzXjIf7dRQTCi9BKcm5AgGNg74cRv26P5l9r1viKYRtA0DDjsatIQnmwmQcpbUMgT%2FobfEUkzD%2B8dAjSmYE%2FKvgIqlUMOnu2MkGOqUBtABLOH51XZP0P%2BJvmdyb%2Fg0P5jYPV4yB5O4tbB9sgYSufkThsN8vIGlY50%2FZBa7lB9bYiqxK93pWE8nNtLlhEqjpFbNeJASnFyjaLSAg1ar%2FKfTW6rDzLRzVKmsleVlRMwNdagHtyQiySJU8EXFbQaZujBfz1TPL3Q%2FkYcfyDNIycOJEno5nG2YystReXsXvOR%2Fg7AkwLMAsZA7lz%2BOljbm483eC&X-Amz-Signature=ef16f4482c30db9f39ed477d0f1a570a9c9820160e3f7d5a378fec73df3c76aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

