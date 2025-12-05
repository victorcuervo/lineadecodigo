---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIIM6LY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5uf8lBymsZv55%2BkKhMocCXEjY%2Fuau5i0Jk6u1ondHxAIgDbI%2BQZoCEy%2FzMRAoOaxsQrW58485P5%2BLCD6aAINYbX4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDO3efZWxlzK31MLNDSrcA9mHoYJJvA1wLptmVhNcE4sxhGeF8tXbuDtiqD1pEH%2FXFJ7EFEBUw5AiWy6G1Ih0L8EDwS0cKBBz957RHa3K0jQHENL7nDEOZgZkOgKJFWHzf92N15IJfg7ZVv%2FZU%2B9p96XSDU46WRNCdBAMNk4yQNbi97h03gzWalB4bNUhVZgS307kuL6%2BAVt1oeLDMOFj%2B86U9%2FVuNFO20FUyz57hPFvZ7Nv9F%2Bn4jNNk6aYpvFxYJ0ax%2B8N6vTunx7wU2FCNADeStkFRivNGNqHGJw%2FyneyUGLZjbEHtmX9MktUeX6VAA68754oJKWQluFz3YMVqDV3tTClpyTRZCLCEqy2QqpGmYAuFNfcS%2BrxmjmGBLzPlvE4gln0iJxYXflVWYuxE22wvxnmbdl6e71DcqjmFI%2B8tW7m7R6MK4B6tpPMRCccNg6lHBam5%2F42JdWmv0NaOscF8mS4LS6NqCPreH3Mo%2ByK7i2gNjLr64%2FjKonYZl3HZlwRPlCjLZDsxttLLLrBs1ulUour1tpb99gxkwYbs0wRDGPakq46kSJbUFLejsiGoMgAYB0I%2B8lJvnKxL5d9SC2GtH0N58BkHbLhVayXZwvp3rqVpS34ABawBdycu%2BtasjPuZj3vhXzG9J29jMPPMyskGOqUBa50DLLjtvZ69yzJBa%2BpUcHKkJPC4LCkcyMnLAV7hoby8V6I01th6ent1RupoG%2B4V1Q1LR8F7N%2BqH4v%2FSmcGdgJ%2F461G9gYfVxuSXCIR%2BJjiqHn0e6aJluQm96EYHZAEbpms7%2F91Aal9EYkPZYsPg5zZIF1Ajbq82eusaYCNa02wYiZLac%2BiKAL2U6weH3yP4SR9awfjbTrRCZo6lAJWPcYIv4JAQ&X-Amz-Signature=7541c21ad31edb49ac1504ada3055eebd032bff3acd5673b08de789f920f1f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REIIM6LY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5uf8lBymsZv55%2BkKhMocCXEjY%2Fuau5i0Jk6u1ondHxAIgDbI%2BQZoCEy%2FzMRAoOaxsQrW58485P5%2BLCD6aAINYbX4q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDO3efZWxlzK31MLNDSrcA9mHoYJJvA1wLptmVhNcE4sxhGeF8tXbuDtiqD1pEH%2FXFJ7EFEBUw5AiWy6G1Ih0L8EDwS0cKBBz957RHa3K0jQHENL7nDEOZgZkOgKJFWHzf92N15IJfg7ZVv%2FZU%2B9p96XSDU46WRNCdBAMNk4yQNbi97h03gzWalB4bNUhVZgS307kuL6%2BAVt1oeLDMOFj%2B86U9%2FVuNFO20FUyz57hPFvZ7Nv9F%2Bn4jNNk6aYpvFxYJ0ax%2B8N6vTunx7wU2FCNADeStkFRivNGNqHGJw%2FyneyUGLZjbEHtmX9MktUeX6VAA68754oJKWQluFz3YMVqDV3tTClpyTRZCLCEqy2QqpGmYAuFNfcS%2BrxmjmGBLzPlvE4gln0iJxYXflVWYuxE22wvxnmbdl6e71DcqjmFI%2B8tW7m7R6MK4B6tpPMRCccNg6lHBam5%2F42JdWmv0NaOscF8mS4LS6NqCPreH3Mo%2ByK7i2gNjLr64%2FjKonYZl3HZlwRPlCjLZDsxttLLLrBs1ulUour1tpb99gxkwYbs0wRDGPakq46kSJbUFLejsiGoMgAYB0I%2B8lJvnKxL5d9SC2GtH0N58BkHbLhVayXZwvp3rqVpS34ABawBdycu%2BtasjPuZj3vhXzG9J29jMPPMyskGOqUBa50DLLjtvZ69yzJBa%2BpUcHKkJPC4LCkcyMnLAV7hoby8V6I01th6ent1RupoG%2B4V1Q1LR8F7N%2BqH4v%2FSmcGdgJ%2F461G9gYfVxuSXCIR%2BJjiqHn0e6aJluQm96EYHZAEbpms7%2F91Aal9EYkPZYsPg5zZIF1Ajbq82eusaYCNa02wYiZLac%2BiKAL2U6weH3yP4SR9awfjbTrRCZo6lAJWPcYIv4JAQ&X-Amz-Signature=2b10879b2cb26849d2625a22db79140433f8716c8cacb75b52809d1480553520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

