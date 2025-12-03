---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5Z624SB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIByfwjrqPeDdmG6zWx0tSTFSYhyXXu6tsYAbYJ0hLu4XAiEA2IS4azZ7ZKsCwDeFzEIfT24awRlsSNNlKPhLDd%2F2PM0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDH%2BX1h7%2FFe98SesIhyrcA7RDbJUStpO81va%2Br0aT6rNw6Uyzhj31j09eBrU%2Fv5Zoy%2Bg8Pz33onDhzn9q%2FDAzx0EIKSRdnRRiDCuXjhxYrIIzzaaIqlaDQyqAZxGsyAzHUhmUo%2BWHWwWJBAiQTdgRAcefLWrLanCFFod0Ut%2FRb0fpFouKUYO7Jd%2FHMeLHUA6CEvAu9GG8gRH%2BrqYTSdUeZAbCtYp7JfhVYSCQVdAvrrTAV4G5LORjksV66O2weTZZFhiwTVb%2FAFI53EfnKUOPVDwuhgjGHqxTtMQtqLZThvO35hKNFJ1PvOz%2FC5EZ07StbAH9CFUAT4ZVBcGnTFVW%2B4Qj5kR8nLWXO0iXFmgvQN889pz3VWiCFgXKb8tXykgVX2g%2Fsx7o%2FGUDeN9M3uOvwYhnsxXDBFsYVjRsUzFexnN5im%2BTqnyf9xcL%2B0rhD96uEhNQRBIcA0xcc%2BZz%2F3Kojlv4Dw8X9iI1J0huqNxYlMEI5ip8KCXqMV1XkhSgyHFOzNoe3UuVoD3oNBfQiLTQpPiLrGai7VgAHXVGehABymCBJP59gamRlT884jzbBmJtfBl2G3QlcnFpctVMM5Be1qZcHqp4vDnsaka5gZd5Zmh%2F4GWE%2F8QKi7hB27depEiaDxiR5COVQqDxFKcCMOHBwckGOqUB%2FjdsvLfmaItiAPg0b8ECuVvQnUrjNx%2BPmRGBTBkHspNDvW65EpJ4RbHPg6NKAClfb2xyFFWCadaQWAmMMHvPcGorynhdQz4Uex4sWLD2p%2FfbVGF4JTmzK4XuBtKgMmCxACariSCRA8RV4SWwuv2ZrB9S16cxXRVlmoYoiWsj%2FphaeQhjnYEFTQ3v7LUCXxTawonGnhgRg39IaCH5e4mhuX%2BM3IEh&X-Amz-Signature=9309635fb5fd3470baaddd712823355b066c5abd8bdb7994591f10dad5cab889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5Z624SB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T165036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIByfwjrqPeDdmG6zWx0tSTFSYhyXXu6tsYAbYJ0hLu4XAiEA2IS4azZ7ZKsCwDeFzEIfT24awRlsSNNlKPhLDd%2F2PM0q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDH%2BX1h7%2FFe98SesIhyrcA7RDbJUStpO81va%2Br0aT6rNw6Uyzhj31j09eBrU%2Fv5Zoy%2Bg8Pz33onDhzn9q%2FDAzx0EIKSRdnRRiDCuXjhxYrIIzzaaIqlaDQyqAZxGsyAzHUhmUo%2BWHWwWJBAiQTdgRAcefLWrLanCFFod0Ut%2FRb0fpFouKUYO7Jd%2FHMeLHUA6CEvAu9GG8gRH%2BrqYTSdUeZAbCtYp7JfhVYSCQVdAvrrTAV4G5LORjksV66O2weTZZFhiwTVb%2FAFI53EfnKUOPVDwuhgjGHqxTtMQtqLZThvO35hKNFJ1PvOz%2FC5EZ07StbAH9CFUAT4ZVBcGnTFVW%2B4Qj5kR8nLWXO0iXFmgvQN889pz3VWiCFgXKb8tXykgVX2g%2Fsx7o%2FGUDeN9M3uOvwYhnsxXDBFsYVjRsUzFexnN5im%2BTqnyf9xcL%2B0rhD96uEhNQRBIcA0xcc%2BZz%2F3Kojlv4Dw8X9iI1J0huqNxYlMEI5ip8KCXqMV1XkhSgyHFOzNoe3UuVoD3oNBfQiLTQpPiLrGai7VgAHXVGehABymCBJP59gamRlT884jzbBmJtfBl2G3QlcnFpctVMM5Be1qZcHqp4vDnsaka5gZd5Zmh%2F4GWE%2F8QKi7hB27depEiaDxiR5COVQqDxFKcCMOHBwckGOqUB%2FjdsvLfmaItiAPg0b8ECuVvQnUrjNx%2BPmRGBTBkHspNDvW65EpJ4RbHPg6NKAClfb2xyFFWCadaQWAmMMHvPcGorynhdQz4Uex4sWLD2p%2FfbVGF4JTmzK4XuBtKgMmCxACariSCRA8RV4SWwuv2ZrB9S16cxXRVlmoYoiWsj%2FphaeQhjnYEFTQ3v7LUCXxTawonGnhgRg39IaCH5e4mhuX%2BM3IEh&X-Amz-Signature=ebafb9f244211df65c23ee4b6eee9e08fe1e5733f431c184087ee0310e4fc15f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

