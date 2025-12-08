---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWOF2ZG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbJllIv5zo9BBt%2B%2BhZCtcW0fytvgvwo92%2F3Xh4fBib6wIhAN2Pt0ar0L5I3snVHubkn750PgaJlcRU9j5Z07whradcKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoSKJibxtwsvDEyoYq3AOA0LoBGgYfQDSdwpoQ2Z4vXQjnwX7VaIW0jPBzMG0WsSK%2BIFVRXrc96HNN5jNVUE0NzZ6efxy21kAPybP5gjL1rh5hrr1AyfNMM%2FAz1YBh7karRZHeD32hC6cSmONbz%2Fz5ffrUReXC3UM72q%2FeuIMpSdLAN2IaO4pOleUaluZQOs3nZT4RmokKi350YAOlCdkRCZYiwHGJ%2B42VdnMRGazwvfupspnWvY70AxesSM673VeZyuQGROIV1s0TlyFEvC%2FpIJiE1X%2FJqsY5Ntog3Sfebeqo98ttcq%2FBRYeHU6sx8LXNi1dBThDRH0SwyX2jvZBpwDbbSywFuhbNswmlnTkq1juDQrXwWDSl8DDzCiBKvvW0YF8f1Ajm57WagU918SvTLgBhiJoJyZUHbnF2oshU7Gsn2bII8dBhlNYLo9uhdYsltRXuJrUXOHSjiGdvwx57OsNlCjDSGmZd%2BpbARQKYu7XYi3aByEo3oN9lX%2Fua8ousbqJ6wjXpsWEB8CaSpeS3hXyaOEOdoksw9XkgIwJTHiUJKPhoJHIR02x1EQ8m6%2FgywimYnGv3LkB2bMyO0NynCiXoB5eDo3eRXQGmbZZc%2FJetMyYdpGjrCQJt175b%2FeE%2FH32wzgZedwrXZzCLgN3JBjqkAef3mL5fQwNjvg5deDadCdKpZ6Lo4dwAk2O5dCxF1oIqTbtP3RyOXvqj09meHdKL5r6wRi2UCEcfYTmnsDpHmRFIQ5O1M817JHA9DYupnxPXmTqDDspaTBbKEeeX59YDmmij9FzeV5tnGmeRKn5sMJEXLEkMX8xz7GWykrSYpeCURpqi9VL%2FG202CrjgmENqpPpzVPDYZZspJsoPfTpVj8DSzJm3&X-Amz-Signature=ef31d57f83dc4e2f16ec508a69af3be19f32dc3b9a569bc38f4ef5f5005fb3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJWOF2ZG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbJllIv5zo9BBt%2B%2BhZCtcW0fytvgvwo92%2F3Xh4fBib6wIhAN2Pt0ar0L5I3snVHubkn750PgaJlcRU9j5Z07whradcKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoSKJibxtwsvDEyoYq3AOA0LoBGgYfQDSdwpoQ2Z4vXQjnwX7VaIW0jPBzMG0WsSK%2BIFVRXrc96HNN5jNVUE0NzZ6efxy21kAPybP5gjL1rh5hrr1AyfNMM%2FAz1YBh7karRZHeD32hC6cSmONbz%2Fz5ffrUReXC3UM72q%2FeuIMpSdLAN2IaO4pOleUaluZQOs3nZT4RmokKi350YAOlCdkRCZYiwHGJ%2B42VdnMRGazwvfupspnWvY70AxesSM673VeZyuQGROIV1s0TlyFEvC%2FpIJiE1X%2FJqsY5Ntog3Sfebeqo98ttcq%2FBRYeHU6sx8LXNi1dBThDRH0SwyX2jvZBpwDbbSywFuhbNswmlnTkq1juDQrXwWDSl8DDzCiBKvvW0YF8f1Ajm57WagU918SvTLgBhiJoJyZUHbnF2oshU7Gsn2bII8dBhlNYLo9uhdYsltRXuJrUXOHSjiGdvwx57OsNlCjDSGmZd%2BpbARQKYu7XYi3aByEo3oN9lX%2Fua8ousbqJ6wjXpsWEB8CaSpeS3hXyaOEOdoksw9XkgIwJTHiUJKPhoJHIR02x1EQ8m6%2FgywimYnGv3LkB2bMyO0NynCiXoB5eDo3eRXQGmbZZc%2FJetMyYdpGjrCQJt175b%2FeE%2FH32wzgZedwrXZzCLgN3JBjqkAef3mL5fQwNjvg5deDadCdKpZ6Lo4dwAk2O5dCxF1oIqTbtP3RyOXvqj09meHdKL5r6wRi2UCEcfYTmnsDpHmRFIQ5O1M817JHA9DYupnxPXmTqDDspaTBbKEeeX59YDmmij9FzeV5tnGmeRKn5sMJEXLEkMX8xz7GWykrSYpeCURpqi9VL%2FG202CrjgmENqpPpzVPDYZZspJsoPfTpVj8DSzJm3&X-Amz-Signature=d7eef37a41645613b5d758ddaa0856ddb2b7886325fb31f9fc81adbc6e2239a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

