---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RSCJMS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHs%2F6D47%2B5kkcTWf0QWYcIhArp4vprV854jD1LPyuDgIgGs1pnHpz8G5bVT7PlSHOGdcdFTAXJbPKV5gfcFTbm4cqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILlVNnBWG0WQEkTWyrcA5tqkJzDANOx3x1R90hfGufGg5WZH2gZEQNaKywQ48GRiQ82M5nR4H033QZJeUzPU4KcnSBa1paMz8bvR2asVyIiLSPu3ykqn5tQYKFXJ%2Blvm32P9Lc4QYGjcjNiSwofbFlfTE9lqilgcciq6PEiwSQHS6fYW%2BnZLdnid5%2FXgPAAycB04Df1HJUqIeAZ8hKY6SAcfRBXdzdLn3DpvOUBs6TUITXuSSCIf1pHqDnRlmA%2BvfAkwrgQH0SNB72jF9jsFkxWrZA8r3ALFhSI3dM44LZOCvbmAXA0RR%2FZhzgjpo0UVqikRCjCgSlFOmpz%2FPUwzkeam6atFRngO2T1NTcR0zYef1%2BwwWCCf1zOx38Y%2FGPqTBggktrNlLgWWvQYgo%2BZW1GG%2FSFJFM7X22w%2FzdBh5CE2GpYO5rEBFT3fHSbvenNmchlBJla%2F5uSXGqTMZ1EffER%2Bk3dvL%2BaaSMF9TicgsorWw7zGBcten3%2Flh%2F8K3x%2BkCM2mWEMCtGhi8g497UtbH9GmAEViO%2BBnBO9w9ZnctZfeX55TBsGGOFzIcaHRSPCOjphJz1Z6mvHtBRKORJ2SaJeEC373H4d3cucYoZDpTuotMKxgMRogBVK9WU63ibRc6KnHVWQBHJ6VjVxDMLaZ1ckGOqUBCrX0%2FwJ%2FUnXeeBTQX0QBLFdD%2FTfN0GBJww0eXFj0nzx%2FsblqFBYvq%2BbAZ5nmPMWDpx%2BcZJx4TjYjZzPBid3lyvJjdpearK%2FnjIIaQ%2FlMTluN9E90cl997OCqu4IkoaN9HN%2BJf8e4ytX2heHEVuq0kbj2ikvkeEtBj6yHOj4yyEKLMHgahU9KEx7hXsARaXD%2FT816uOkIKKZM3zyqx9ur6w%2BoV6Nd&X-Amz-Signature=c873db66145af53d574679f766a583a7ac8b0a020f9cc8548956023982f59f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4RSCJMS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FHs%2F6D47%2B5kkcTWf0QWYcIhArp4vprV854jD1LPyuDgIgGs1pnHpz8G5bVT7PlSHOGdcdFTAXJbPKV5gfcFTbm4cqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDILlVNnBWG0WQEkTWyrcA5tqkJzDANOx3x1R90hfGufGg5WZH2gZEQNaKywQ48GRiQ82M5nR4H033QZJeUzPU4KcnSBa1paMz8bvR2asVyIiLSPu3ykqn5tQYKFXJ%2Blvm32P9Lc4QYGjcjNiSwofbFlfTE9lqilgcciq6PEiwSQHS6fYW%2BnZLdnid5%2FXgPAAycB04Df1HJUqIeAZ8hKY6SAcfRBXdzdLn3DpvOUBs6TUITXuSSCIf1pHqDnRlmA%2BvfAkwrgQH0SNB72jF9jsFkxWrZA8r3ALFhSI3dM44LZOCvbmAXA0RR%2FZhzgjpo0UVqikRCjCgSlFOmpz%2FPUwzkeam6atFRngO2T1NTcR0zYef1%2BwwWCCf1zOx38Y%2FGPqTBggktrNlLgWWvQYgo%2BZW1GG%2FSFJFM7X22w%2FzdBh5CE2GpYO5rEBFT3fHSbvenNmchlBJla%2F5uSXGqTMZ1EffER%2Bk3dvL%2BaaSMF9TicgsorWw7zGBcten3%2Flh%2F8K3x%2BkCM2mWEMCtGhi8g497UtbH9GmAEViO%2BBnBO9w9ZnctZfeX55TBsGGOFzIcaHRSPCOjphJz1Z6mvHtBRKORJ2SaJeEC373H4d3cucYoZDpTuotMKxgMRogBVK9WU63ibRc6KnHVWQBHJ6VjVxDMLaZ1ckGOqUBCrX0%2FwJ%2FUnXeeBTQX0QBLFdD%2FTfN0GBJww0eXFj0nzx%2FsblqFBYvq%2BbAZ5nmPMWDpx%2BcZJx4TjYjZzPBid3lyvJjdpearK%2FnjIIaQ%2FlMTluN9E90cl997OCqu4IkoaN9HN%2BJf8e4ytX2heHEVuq0kbj2ikvkeEtBj6yHOj4yyEKLMHgahU9KEx7hXsARaXD%2FT816uOkIKKZM3zyqx9ur6w%2BoV6Nd&X-Amz-Signature=9c2a0aeda6e8f36bc969b50aae3d668d8e5f524de2033f0aaa744623baeb6565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

