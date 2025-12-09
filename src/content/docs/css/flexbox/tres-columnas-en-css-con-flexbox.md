---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4RC2CMN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENsfdycg%2BaE%2BfkirA0rn5XVtgZUzUdFWtlf2Xsi3D4gAiEAlizYjY6EiarlQ7KaIgJ6joAocQi6F%2Fa%2BWqtm7A55FVkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfV5l8tWxhXwWn%2FNircA%2B3r7RoTHw0sjk3RtvRc4egVaWR%2F5DN%2FcwZUium%2Fq1B463A2A4ZcbnhCBH4CY6Vdb9FqLpm9bYWWXcazYgSAlRWvGBAohEK19e%2FQNAnJt6ePieTCgl2k6qp1O%2BoKQRbj8iqoAh%2BYKoeBjMJK7KcXgoeq8YpHBmttuS1VN04ch%2FlhZ2fFuJL2TdwVBkArSTL537lG6aJThmIpDpVyrhSg8MAw99Dj44gLCYEJoJTx1qC73GQc2cZKNIZzKfKonxtARppnu2LFQTZk6hXJtpynt6jDUWD8x3Ji65xKZnqTMVIzyIj9LP3lECgz33uFQFQOrJKElPcudpOJqjun6hcGp47M9EoTyTL7%2F9RR6M13hH3mz9MOWTuaGSq%2BxWvul3kMq86Z3HAyqwJ9Gn4Jy7yUzbJtfimh7hwu%2FmZnL0A%2F%2BqOc98pfAMMpeoUjunMDft5YYdZ2jJf1brRw2QTcKy2lYSb%2F7Jg9IGn6AwbBbo9UIoE7YjWNkOBb7hc8McaYpt4k0fm5YsAaBzQmDA6Kxt8Ie%2FqUDijTdSq4dRqj9%2FcuRiA6evUmDUx4i1aoOvMRM21xAYIYq%2B0IDyw2iP07Tx8sCtiOfXJZm7bwSJeADNGodBju6k2AKE%2BoRAIu%2FbDxMJCO3skGOqUBy%2B9XQ4cwHXQs8Rw5xw0%2BKirJP4MvHdOlkN7IWIOxqxrWNLfBJf2AGwMcbVwnfylB5rUO0%2F%2FBgJCKnv6KOZFvJ4BWmH0qJtOrI8T3oKVt9sue%2B%2B1IqBRno8N3xqDSzosLHC2PdPnPLxf%2FDeh7npQQ1vPXHMUrmwMAvKMYasNU676DY3oWZKX3aalcA1kxyMxDNdvNehztWkV6Q0SGoB9MU%2For%2Fj2Y&X-Amz-Signature=265507a1368776f0acbe4b4caebf520e238c9c3b8d5ee1508081c70c6b26dea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4RC2CMN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T030922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENsfdycg%2BaE%2BfkirA0rn5XVtgZUzUdFWtlf2Xsi3D4gAiEAlizYjY6EiarlQ7KaIgJ6joAocQi6F%2Fa%2BWqtm7A55FVkqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfV5l8tWxhXwWn%2FNircA%2B3r7RoTHw0sjk3RtvRc4egVaWR%2F5DN%2FcwZUium%2Fq1B463A2A4ZcbnhCBH4CY6Vdb9FqLpm9bYWWXcazYgSAlRWvGBAohEK19e%2FQNAnJt6ePieTCgl2k6qp1O%2BoKQRbj8iqoAh%2BYKoeBjMJK7KcXgoeq8YpHBmttuS1VN04ch%2FlhZ2fFuJL2TdwVBkArSTL537lG6aJThmIpDpVyrhSg8MAw99Dj44gLCYEJoJTx1qC73GQc2cZKNIZzKfKonxtARppnu2LFQTZk6hXJtpynt6jDUWD8x3Ji65xKZnqTMVIzyIj9LP3lECgz33uFQFQOrJKElPcudpOJqjun6hcGp47M9EoTyTL7%2F9RR6M13hH3mz9MOWTuaGSq%2BxWvul3kMq86Z3HAyqwJ9Gn4Jy7yUzbJtfimh7hwu%2FmZnL0A%2F%2BqOc98pfAMMpeoUjunMDft5YYdZ2jJf1brRw2QTcKy2lYSb%2F7Jg9IGn6AwbBbo9UIoE7YjWNkOBb7hc8McaYpt4k0fm5YsAaBzQmDA6Kxt8Ie%2FqUDijTdSq4dRqj9%2FcuRiA6evUmDUx4i1aoOvMRM21xAYIYq%2B0IDyw2iP07Tx8sCtiOfXJZm7bwSJeADNGodBju6k2AKE%2BoRAIu%2FbDxMJCO3skGOqUBy%2B9XQ4cwHXQs8Rw5xw0%2BKirJP4MvHdOlkN7IWIOxqxrWNLfBJf2AGwMcbVwnfylB5rUO0%2F%2FBgJCKnv6KOZFvJ4BWmH0qJtOrI8T3oKVt9sue%2B%2B1IqBRno8N3xqDSzosLHC2PdPnPLxf%2FDeh7npQQ1vPXHMUrmwMAvKMYasNU676DY3oWZKX3aalcA1kxyMxDNdvNehztWkV6Q0SGoB9MU%2For%2Fj2Y&X-Amz-Signature=ac9ee0d6ce818c7692f2a2116162fc3729e7e37382dc1e5a00adc29adbaa08bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

