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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZWAUTV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFMwrb4leoAwWDYqLDVMNYWwWRZm2ogl%2FBLdpG1yWtM9AiAV53QTUbFxVryz%2FG6anhTMTkPmHoE5%2BBfanSYkfWIPyir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMJHuGiJrnM0o%2BBYgUKtwD2%2BIMWlit6KjgvBcKJsjEYjQ9i%2Bd9vK8SFS2gJSmDBzo%2BqHTK7utytC1g6w%2FMRRJy7LHRE157ULtX1bb08M5Vzau%2B%2BG47qCufbabo%2F1rzK9cVQsXCiT3drTo9IRXGFxZIunwJAE3jwvVd1aUz%2B3yuxNE8f8ahSPA7ZRr%2BhX%2FaL%2FVGF1nmtL7QxayiP2viEwF5yEXmJukg0d0eSzLCZ%2BqaHr62lHlIGhl3iz9gV8XPznfSZVU0OIzQQRoFtDkV5W2No6M%2FPSQGpZ6VPeBDeuBvjasasXbnS8oPevDuNXpQNmFzwNGWwdle5vdQa8zY%2BWjNZ9%2B%2Fhpzwb%2FtNsqRCAoFoBcViVC%2B1ondEs9O0zcKS1IHnmhERTqHtzbAdGGh0tqvHxqt%2F1owfMAY4t06fzUPzaaDuiA9uKD5R6G6N9ri0eiCiMgD%2B6HxnR9qyC6%2FTWQFPvGUc32QvTTLg6SpeYT9W0Hdk26DZpdCwt7ugXxWRPB110EBWeVp3Taasatw6HkVZmf7xOiBruIaNT%2BorvQio3%2FUNXdxeZ8hVOLnirhvRb3L1B3wUNUUzL4xXvH2U2%2BYg8Xav7aSJx7nKDrGxLTk2w%2B1mPXTjQLHv9DE4UPaUXeCyvxknlc8GohMIaaww6Ja%2ByQY6pgFtgyNSCpn1Mu8C%2B7UTc2Qfr1PsckvPoTmgB6v1yxxVue11PQqTFV87t%2FsJsVHEJl%2FXRDoCQ3YtyskdYVbxSD3w0HvLXS0rcG1t47J6KY8ifvSaIW8Eb2UXapSmzcD6l61oQ1QrYf%2BryOrm7oAGpnKFRKDB8VzkFrDA04PqR2RlntbILEWWpnZUmbobI87FStSQFpzFf2hz5bYRGbAd17GMwzW6oQVO&X-Amz-Signature=43380c4e7b5513ce49940568900717006f382bec4489975f3636e2efdba13819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZWAUTV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T042933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFMwrb4leoAwWDYqLDVMNYWwWRZm2ogl%2FBLdpG1yWtM9AiAV53QTUbFxVryz%2FG6anhTMTkPmHoE5%2BBfanSYkfWIPyir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMJHuGiJrnM0o%2BBYgUKtwD2%2BIMWlit6KjgvBcKJsjEYjQ9i%2Bd9vK8SFS2gJSmDBzo%2BqHTK7utytC1g6w%2FMRRJy7LHRE157ULtX1bb08M5Vzau%2B%2BG47qCufbabo%2F1rzK9cVQsXCiT3drTo9IRXGFxZIunwJAE3jwvVd1aUz%2B3yuxNE8f8ahSPA7ZRr%2BhX%2FaL%2FVGF1nmtL7QxayiP2viEwF5yEXmJukg0d0eSzLCZ%2BqaHr62lHlIGhl3iz9gV8XPznfSZVU0OIzQQRoFtDkV5W2No6M%2FPSQGpZ6VPeBDeuBvjasasXbnS8oPevDuNXpQNmFzwNGWwdle5vdQa8zY%2BWjNZ9%2B%2Fhpzwb%2FtNsqRCAoFoBcViVC%2B1ondEs9O0zcKS1IHnmhERTqHtzbAdGGh0tqvHxqt%2F1owfMAY4t06fzUPzaaDuiA9uKD5R6G6N9ri0eiCiMgD%2B6HxnR9qyC6%2FTWQFPvGUc32QvTTLg6SpeYT9W0Hdk26DZpdCwt7ugXxWRPB110EBWeVp3Taasatw6HkVZmf7xOiBruIaNT%2BorvQio3%2FUNXdxeZ8hVOLnirhvRb3L1B3wUNUUzL4xXvH2U2%2BYg8Xav7aSJx7nKDrGxLTk2w%2B1mPXTjQLHv9DE4UPaUXeCyvxknlc8GohMIaaww6Ja%2ByQY6pgFtgyNSCpn1Mu8C%2B7UTc2Qfr1PsckvPoTmgB6v1yxxVue11PQqTFV87t%2FsJsVHEJl%2FXRDoCQ3YtyskdYVbxSD3w0HvLXS0rcG1t47J6KY8ifvSaIW8Eb2UXapSmzcD6l61oQ1QrYf%2BryOrm7oAGpnKFRKDB8VzkFrDA04PqR2RlntbILEWWpnZUmbobI87FStSQFpzFf2hz5bYRGbAd17GMwzW6oQVO&X-Amz-Signature=ebc6c9f538983cae776bf863d0314e7aa898c21748289b9d025c518b96eff4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

