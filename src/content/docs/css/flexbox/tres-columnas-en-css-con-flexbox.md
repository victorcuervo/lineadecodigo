---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWA2OPDG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUsoj9YTN1kEv6jAzM%2F5YZo5rWXfJ8LkrO%2FdKz6DJtWAiBQBGDpwvHd4ewcCuj6%2FAkAIWXr1Q4yjAivbJm2Y0dQQir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMehRyeUy1XbajHDgXKtwDL9dOtC6UNRKkx70GhRGYFacx9dlVHaKkBO5S24CAZ5dXTIz9vh6GlD9H9JXdKVqaUNhwDP9bhFiOaqf9nh%2BiFGXarmns%2BMeOgzINJiw4H3Xzk5rWURu0b5W01V2qIHmzUlWxPcClW%2FX5GzOneiPCYRFn3nYJ0GS4hw05rVO1Lr2h0SIv7UV%2BM00zeXmypPGstu2I7Bh490lGTcA%2F19dolN4ib9iKEM%2F7wzVh99DdPM8B3C1qIlDr3N1xdgZBgG3EQCx3A6HkEsOnt6T8vOWraQYk78iExkYdBciBVNY4GGq2GulqiuDpJB8CxV0GhCr8SbIsZh44UeiXOjTBjyvE5icIr8UCuE4eat7DEsyC7T1D2K8F0gfi64Ti5gUbwi5TgtzEUlH7CuYeZbFbUZ4sL7pBk0LOPd%2FPxGPIxuylIyRJfjgIEskqBg5NHyBs6Zvww1AoPO6WOVTTrlGcZ6egxn1LETwBHo15Nf20XSg9WB%2FBWc0gEb2E0YW3TVS6hsVUUrUn7JMartTlpamjfB%2Bczh3CXvM7PXIH3XgR53TZRMNDpO8jdN6J%2BEzZp5mrXPKimi37bt83A%2B12v0rMOOcb9GjKgVxEyzxlOD2hqDk5XodHcNzdl3HWz9MVhQkwt6jJyQY6pgE%2BH9Qpzi83DxcVDNZy%2BW8CJeHS7osbiYrXD7WZFgW%2F8rIQqEdUTiUpNez5mj1lhp8h2MdcvUz7l4Eh%2BTkv5ASE6QzlfPUzwF0bzwIJmK53LjmqWsK2sDPDILPX12vXZDEkjUTX57DXX%2FWIDIJJFrAAuzoa%2FIxoTWk1Xa6CYyRKufZy2Dv2WvCMd%2FXgp3MW%2BYS9X%2F6LOkp%2FmcYkAZR%2BNc%2FDaN88KDNG&X-Amz-Signature=7fff8ae100fa56e30700c918a1512a5391e7fc0ecb9c496b26ac6481613004bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWA2OPDG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUsoj9YTN1kEv6jAzM%2F5YZo5rWXfJ8LkrO%2FdKz6DJtWAiBQBGDpwvHd4ewcCuj6%2FAkAIWXr1Q4yjAivbJm2Y0dQQir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMehRyeUy1XbajHDgXKtwDL9dOtC6UNRKkx70GhRGYFacx9dlVHaKkBO5S24CAZ5dXTIz9vh6GlD9H9JXdKVqaUNhwDP9bhFiOaqf9nh%2BiFGXarmns%2BMeOgzINJiw4H3Xzk5rWURu0b5W01V2qIHmzUlWxPcClW%2FX5GzOneiPCYRFn3nYJ0GS4hw05rVO1Lr2h0SIv7UV%2BM00zeXmypPGstu2I7Bh490lGTcA%2F19dolN4ib9iKEM%2F7wzVh99DdPM8B3C1qIlDr3N1xdgZBgG3EQCx3A6HkEsOnt6T8vOWraQYk78iExkYdBciBVNY4GGq2GulqiuDpJB8CxV0GhCr8SbIsZh44UeiXOjTBjyvE5icIr8UCuE4eat7DEsyC7T1D2K8F0gfi64Ti5gUbwi5TgtzEUlH7CuYeZbFbUZ4sL7pBk0LOPd%2FPxGPIxuylIyRJfjgIEskqBg5NHyBs6Zvww1AoPO6WOVTTrlGcZ6egxn1LETwBHo15Nf20XSg9WB%2FBWc0gEb2E0YW3TVS6hsVUUrUn7JMartTlpamjfB%2Bczh3CXvM7PXIH3XgR53TZRMNDpO8jdN6J%2BEzZp5mrXPKimi37bt83A%2B12v0rMOOcb9GjKgVxEyzxlOD2hqDk5XodHcNzdl3HWz9MVhQkwt6jJyQY6pgE%2BH9Qpzi83DxcVDNZy%2BW8CJeHS7osbiYrXD7WZFgW%2F8rIQqEdUTiUpNez5mj1lhp8h2MdcvUz7l4Eh%2BTkv5ASE6QzlfPUzwF0bzwIJmK53LjmqWsK2sDPDILPX12vXZDEkjUTX57DXX%2FWIDIJJFrAAuzoa%2FIxoTWk1Xa6CYyRKufZy2Dv2WvCMd%2FXgp3MW%2BYS9X%2F6LOkp%2FmcYkAZR%2BNc%2FDaN88KDNG&X-Amz-Signature=15c1d368b0fa43e5b6642e5a7a6121b007fc7894a19215180e6dc6940e9e7f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

