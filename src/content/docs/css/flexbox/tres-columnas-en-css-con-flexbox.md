---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFS4KNOG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuq5Dx%2BWwnfEdRcKN3a0Krrmd3eI8NuoH9s463cDcMXAiAkWe%2B%2BtgmdvYO15FA%2F8nmoXu0OWQTaCeM2UVTAyoTX1SqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuLAq9gNY7ldJKhneKtwD5OreJpYl90AUh3ZL7S%2F6fyPYZCmMQNi6ye2EQlse3QXZv2shnGRTIilGhE15%2BolaikaQhat5kRoC%2FKOeNLAqbcJMtzhFGXdegIGbFJiEfstFrlbyvr9hZ1C7z2PU7t8Zd%2FLB%2BEjGfsFq4cSH1we0HEVOgDGZpTdNPQlUw4ZojA7NBCEQnygxnczgudnm7%2FXjcD4HFzNMd2LjgfYwt7ctWsBr0yEDXksXHHxViCdLdx2VBnOgpgwOmTsCzy%2BI8qcioafQrgQSRCWLmcjkleGfBMsylkvP6GKIKFdJYfUtlweQrYwlWyMKhiUE13pagmp6Hi9kimmHejSWlvgVmxQEMay84kTbctMDy0Ei40FC7Ldzv%2B3Z8Z1JTOl2w15mGJyrpdRQZW3dQZ4rdSi%2B1H5zP6ZhVJw0dhg%2B%2BWbeHQzHC5bxk4dH%2FwvRXLgyBMW78eUmBVScWNf9yM5CmZhRn0rXHJmNCrhZCfK56u5WbHf7uNosUJ%2FsqhJ98Gk0Egzk1JFYxh5%2Fajba04bDcPmoVuGmr1IQ87jGXysde2Qr5W7VRXTDCg04N61h6VWgC2tFYbpmAx0uJ7sJ4nuvQoKSiKFT2ACw2j441OtRiOOjQmwTHE3FLE3MMGmDDuiAOJkwganXyQY6pgFKeAvG0JFmuiMdNoUvTef9vLvTeCE4m5zAO51rqOyhBX7izkWWdBszCta4itTHJIFZ1nsFmIEMrL%2BqezQxHaXWki17hiKdF99SaLXUKOc1AaX7M909HQX170NEgbr3bujxNrWSHHPByI0Qtqb2aLFgw0oLDSDYTeICr9TmmR7UuNVLu3iwvtsl6hmlh1KHBLFnBLKvSZr3mB8uYXEZfNoYEkIS78hC&X-Amz-Signature=ccdd826d6339a5f12f31805365ae0c736e5fea89d502df9b877e4212a18b6f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFS4KNOG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T192904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEuq5Dx%2BWwnfEdRcKN3a0Krrmd3eI8NuoH9s463cDcMXAiAkWe%2B%2BtgmdvYO15FA%2F8nmoXu0OWQTaCeM2UVTAyoTX1SqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuLAq9gNY7ldJKhneKtwD5OreJpYl90AUh3ZL7S%2F6fyPYZCmMQNi6ye2EQlse3QXZv2shnGRTIilGhE15%2BolaikaQhat5kRoC%2FKOeNLAqbcJMtzhFGXdegIGbFJiEfstFrlbyvr9hZ1C7z2PU7t8Zd%2FLB%2BEjGfsFq4cSH1we0HEVOgDGZpTdNPQlUw4ZojA7NBCEQnygxnczgudnm7%2FXjcD4HFzNMd2LjgfYwt7ctWsBr0yEDXksXHHxViCdLdx2VBnOgpgwOmTsCzy%2BI8qcioafQrgQSRCWLmcjkleGfBMsylkvP6GKIKFdJYfUtlweQrYwlWyMKhiUE13pagmp6Hi9kimmHejSWlvgVmxQEMay84kTbctMDy0Ei40FC7Ldzv%2B3Z8Z1JTOl2w15mGJyrpdRQZW3dQZ4rdSi%2B1H5zP6ZhVJw0dhg%2B%2BWbeHQzHC5bxk4dH%2FwvRXLgyBMW78eUmBVScWNf9yM5CmZhRn0rXHJmNCrhZCfK56u5WbHf7uNosUJ%2FsqhJ98Gk0Egzk1JFYxh5%2Fajba04bDcPmoVuGmr1IQ87jGXysde2Qr5W7VRXTDCg04N61h6VWgC2tFYbpmAx0uJ7sJ4nuvQoKSiKFT2ACw2j441OtRiOOjQmwTHE3FLE3MMGmDDuiAOJkwganXyQY6pgFKeAvG0JFmuiMdNoUvTef9vLvTeCE4m5zAO51rqOyhBX7izkWWdBszCta4itTHJIFZ1nsFmIEMrL%2BqezQxHaXWki17hiKdF99SaLXUKOc1AaX7M909HQX170NEgbr3bujxNrWSHHPByI0Qtqb2aLFgw0oLDSDYTeICr9TmmR7UuNVLu3iwvtsl6hmlh1KHBLFnBLKvSZr3mB8uYXEZfNoYEkIS78hC&X-Amz-Signature=8116a290c7274433beb0572e9ac868881f0d4bdf13482e2d3f2592fd8e6bec4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

