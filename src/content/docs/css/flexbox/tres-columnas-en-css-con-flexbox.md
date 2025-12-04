---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWHE3NFT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHvvXv9IvXNEE1IerooZIaB%2F488GJVkB%2FZ6Hh06y%2B9JNAiAT1IfshzFBYRjwi%2BlCKt3bK9Vzxqv2HUFl09Bp7X2juir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM2wdf20LjSCweJk0XKtwD2R9kM7gCnuMxwyhJU2%2BDUL5IzTAxxpaGr6r5uHIqhPhbTyBjGu2Q2iApPyXt1uB%2FZdxVUEWA9%2BdgntZuhrGcLkX1W4EgAmiqanjsyPCgX3gdg%2FzUjmLbyI3fNLlh5OUVek8WYV84yk0G9%2FilXHGrvllEqjHv8n0k%2FnWIpomyUw75%2FoObLPx8bTvO3%2BXILB7CSYd%2BowVqVoXmZZId0ZpdNaHU2HBPeeU2IfpHdgsmgwajUWSz2ASS73TjW92RJ8eIRJ6LX%2Boer9wbAgsg7C2zmMPca2McOgVtbeRNei%2FwtcFf1nZLP2MJvBXFgGYGmwbpKl1mumWC9sGw2OJmy26v19YuE%2BLzp4Q66BwyzXr5MVED36R5C15jK9SWK4DA6Chr6MXbVZDDp3wf8IoZus6uHHg3CRwXJNjTNsQqP1QgCnVHUt1%2FImDNlQ5%2BOBxszSQs1YT%2BVSi7zy7YnOfuZcDEXRNTubL0Eobq%2B%2FJwbRSbfypivcbVKWetRn8XPkNPcMxqI40OyAZpsPDMOXMhYFzSMYcU2VummztEQ%2BtyZuHQHqY0euR01bXMgYCVk3CTPoXfCML4paEPdMHjF3mRSAnoNhh12aedDRhYPMX9MPDnVj%2FsJ1Q0cUrxh2G3ipkw2a7EyQY6pgGZn%2Fl%2BisZc%2F7o3KUhZ%2B7kql8MFuEjmTy7NzR2f9XONDJ7J%2FbpYWKDRGGPMKqJ7jHxu07y66u4ahvwU1EAvhn1ZTHakj9uu9tEGYuHqY8QsAgMWmN1VD7X6JqFna9dMmbnvPVvknLKpjj4Bicn%2FrH3HqiT8WOXJNKE838neYltrFEIerdP0CbfgE%2FI5s8lPvRa3%2FyVRYi%2FX0qqFAgWbzFxbwrDWx7YO&X-Amz-Signature=81d175f69b8a982b1ec362b64c31a51d48c3f0e6acfeac89cce8232af6793562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWHE3NFT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIHvvXv9IvXNEE1IerooZIaB%2F488GJVkB%2FZ6Hh06y%2B9JNAiAT1IfshzFBYRjwi%2BlCKt3bK9Vzxqv2HUFl09Bp7X2juir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIM2wdf20LjSCweJk0XKtwD2R9kM7gCnuMxwyhJU2%2BDUL5IzTAxxpaGr6r5uHIqhPhbTyBjGu2Q2iApPyXt1uB%2FZdxVUEWA9%2BdgntZuhrGcLkX1W4EgAmiqanjsyPCgX3gdg%2FzUjmLbyI3fNLlh5OUVek8WYV84yk0G9%2FilXHGrvllEqjHv8n0k%2FnWIpomyUw75%2FoObLPx8bTvO3%2BXILB7CSYd%2BowVqVoXmZZId0ZpdNaHU2HBPeeU2IfpHdgsmgwajUWSz2ASS73TjW92RJ8eIRJ6LX%2Boer9wbAgsg7C2zmMPca2McOgVtbeRNei%2FwtcFf1nZLP2MJvBXFgGYGmwbpKl1mumWC9sGw2OJmy26v19YuE%2BLzp4Q66BwyzXr5MVED36R5C15jK9SWK4DA6Chr6MXbVZDDp3wf8IoZus6uHHg3CRwXJNjTNsQqP1QgCnVHUt1%2FImDNlQ5%2BOBxszSQs1YT%2BVSi7zy7YnOfuZcDEXRNTubL0Eobq%2B%2FJwbRSbfypivcbVKWetRn8XPkNPcMxqI40OyAZpsPDMOXMhYFzSMYcU2VummztEQ%2BtyZuHQHqY0euR01bXMgYCVk3CTPoXfCML4paEPdMHjF3mRSAnoNhh12aedDRhYPMX9MPDnVj%2FsJ1Q0cUrxh2G3ipkw2a7EyQY6pgGZn%2Fl%2BisZc%2F7o3KUhZ%2B7kql8MFuEjmTy7NzR2f9XONDJ7J%2FbpYWKDRGGPMKqJ7jHxu07y66u4ahvwU1EAvhn1ZTHakj9uu9tEGYuHqY8QsAgMWmN1VD7X6JqFna9dMmbnvPVvknLKpjj4Bicn%2FrH3HqiT8WOXJNKE838neYltrFEIerdP0CbfgE%2FI5s8lPvRa3%2FyVRYi%2FX0qqFAgWbzFxbwrDWx7YO&X-Amz-Signature=62341b0519911dc566f475855bc3269b85c28f717d1a701e8b9d0a7dfa97d09e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

