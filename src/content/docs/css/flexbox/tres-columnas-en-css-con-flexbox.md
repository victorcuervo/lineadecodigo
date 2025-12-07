---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOEFCJJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb0Hy9YiTaDeifOICNdT4s2%2FHLX4UtTysyikjargzP4AiEA9gPNVDh4kJLmuCRukK3R7FekjUazg%2FcEEt51%2Fs9uMvgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFQmjSZPCvImrUufyrcA%2BUporXLIYCsIXgOlp8eJLH%2B4Ac4ITyPsJHMsJt%2BOYqFrWukquJSOczHsW%2B1Wd04IKZ4vQQthPMFzqJPazwg4VX%2ByMbsZAHkuR5c5NCOssV1FRTTlffVlkNymdOiMmalJAUTVj5QxU6JcgfcrEMGO%2Fpe%2FQ%2BzBPu5uLdioO6jOllYDxRgCWWYhkl4VCTe%2Fir0A7PURHqIE2H1nX4ZMm2CnYgXzxRrv2EvbJfEjeLOd%2BQJl84DVB08fTTAG%2FTfqbQ6MPPxGAZEaD2sD3sjcS%2FdsbGSF%2BhedN9n9U8Fu49a%2BQ1EsTtVMeEte7QJOgVWA4%2BN8L%2BYeOeosJzggPqbJwM%2FZ4yQaKcRV2uVa1IRzrD%2FvrcruBiMnwbwIiiS7C700OL%2BajsJkwjaSUfG%2BD%2FdNmMfcCJKXjdhJCFtAzXU2xpwRErk9PVURT%2BiHqNVMPcczsZe0FfmGgcd6z1e3rluN4qTS94HX5A7QQzMz8wuX%2BpTa7ZJZ73Lp13PjE7S88KpSP94%2Bc2sdTaGUqAeINscHz3iJRzH2S2VkbAftFtEdNqngYOc9RBA2wbTOsBK%2FFvbNTww6cK3ObdHKQGup%2B61vV9zq8n2OP%2Fa7kFL0P%2Fl6V%2FXrJid5znRMv1Mly9gE%2BNQMMa91skGOqUBP2SPGc9qq1tE%2FO3Cr5JNho889fec87KKwnOKp%2F0zqPbvOaotrOtr%2FpQu0QPM%2BRqKV7tB6KD2UjbvGQgtfD2g%2FzdZELytIKT5ihdnqnjH06BIwnHDbM4dm2NOCzpWGyjq1%2FIYSmS4efBl3gVqcNMaIusy01tY5gjfLNaKrtZeYBNeMQ18Bhb3eTf8XkDpUmkW1H4BBi9ezZJldrfmVKw4QSlT6Jy0&X-Amz-Signature=a0e9df5a92fab9a3bd22f3d05bc9ce04a3e12ebdb47113448ebb8a2b4f31d004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBOEFCJJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICb0Hy9YiTaDeifOICNdT4s2%2FHLX4UtTysyikjargzP4AiEA9gPNVDh4kJLmuCRukK3R7FekjUazg%2FcEEt51%2Fs9uMvgqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFQmjSZPCvImrUufyrcA%2BUporXLIYCsIXgOlp8eJLH%2B4Ac4ITyPsJHMsJt%2BOYqFrWukquJSOczHsW%2B1Wd04IKZ4vQQthPMFzqJPazwg4VX%2ByMbsZAHkuR5c5NCOssV1FRTTlffVlkNymdOiMmalJAUTVj5QxU6JcgfcrEMGO%2Fpe%2FQ%2BzBPu5uLdioO6jOllYDxRgCWWYhkl4VCTe%2Fir0A7PURHqIE2H1nX4ZMm2CnYgXzxRrv2EvbJfEjeLOd%2BQJl84DVB08fTTAG%2FTfqbQ6MPPxGAZEaD2sD3sjcS%2FdsbGSF%2BhedN9n9U8Fu49a%2BQ1EsTtVMeEte7QJOgVWA4%2BN8L%2BYeOeosJzggPqbJwM%2FZ4yQaKcRV2uVa1IRzrD%2FvrcruBiMnwbwIiiS7C700OL%2BajsJkwjaSUfG%2BD%2FdNmMfcCJKXjdhJCFtAzXU2xpwRErk9PVURT%2BiHqNVMPcczsZe0FfmGgcd6z1e3rluN4qTS94HX5A7QQzMz8wuX%2BpTa7ZJZ73Lp13PjE7S88KpSP94%2Bc2sdTaGUqAeINscHz3iJRzH2S2VkbAftFtEdNqngYOc9RBA2wbTOsBK%2FFvbNTww6cK3ObdHKQGup%2B61vV9zq8n2OP%2Fa7kFL0P%2Fl6V%2FXrJid5znRMv1Mly9gE%2BNQMMa91skGOqUBP2SPGc9qq1tE%2FO3Cr5JNho889fec87KKwnOKp%2F0zqPbvOaotrOtr%2FpQu0QPM%2BRqKV7tB6KD2UjbvGQgtfD2g%2FzdZELytIKT5ihdnqnjH06BIwnHDbM4dm2NOCzpWGyjq1%2FIYSmS4efBl3gVqcNMaIusy01tY5gjfLNaKrtZeYBNeMQ18Bhb3eTf8XkDpUmkW1H4BBi9ezZJldrfmVKw4QSlT6Jy0&X-Amz-Signature=8f2d553ce3732d9edd7ed23a5efcd23c866a896b3b7a058c4324f7729fa90215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

