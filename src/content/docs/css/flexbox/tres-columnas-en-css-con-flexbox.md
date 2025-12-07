---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQS6UPYA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR7cb4t03jAdQa%2FNATB35oFwDhP6aP%2Bofm7N6FuHXpgAiBYVx17WFBY00CQp7FJO95RxQIqcq%2BEE0D9BkrB6gIWUCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCet96SxXNGbPbOqgKtwD3Y9YLV%2FJQxMmx09LNUzb9%2FhtKZbvorYjfOaEfdjqWq4UknHx7PwANTqc%2FDfz%2Bn0i8ITWA20EH6Lxcuw%2Fe4ZwHcVhJHg9T4k4UJi5vaK4BSQ%2Fb7G%2FQ1aJarNpakgRdpyNb5fLZISt8%2BWcLwrI1cpqPtuf1LwFKGAheK%2BOpU%2BgowDM0Ks06%2BUSFC3iS2HrU2TMhVVx6H%2B98fmJ8NLK4KI6weSseVZ61IaaPQ7KjHlz8KwRIR0vOX%2FOKiMjLVuaQsCsTF6jEoa31wpQ0Ob75p8jywVgGRmemK4b0gYpETstgoQWCqQS%2BazbBpXkdB2jSib8cr5jclU6c0A0O8jVg7JM3y7sIJwyqCjVPPSSfcotmZcCGSZOIXLa4bti%2BHS6apAke5e%2FjK2KjTgVlv0umYg%2B27mup28oZrL2tP953EEsXgHKrXnYnMJV%2B4GBG23Bh4iZzzebSUJmlprcAFICeD0I%2FbYUlNOAwdMGDwUCg%2Bw5A4QrXUFa1mxT5K7QO%2BeHDIxPtV5xP4JwnMP0q3h7X1gdfw%2FkMUsnut8AePTttCHt8QJKYoq%2Fudlur6gIQtWAPAGbi5LOM7baqLJevmGVxu4ayZG5qICd32V7sFUVKiUde94RW2ZgHTnAYciyfPEwjf7SyQY6pgF7Ps99H309Kyr1Tix%2BmoC6d4N0ktWhsAX9%2BdJ7IWIcmehgx3EGuhmzotAR52HcGsWnDlsY5PSQgz5ZlWglPDuQtm%2BYZcVodn3BqQEw6TXzIhjWDBwdg5IZPC9O1tur760kbu7UCPitVoYv%2BsEInuvnmKZCePrMLakWB4hITMRjnwZFI8phRhacFZ40be%2B0p7oXt%2F3tjYR%2Frsxghf7vWPeVux%2F%2FywLM&X-Amz-Signature=655998b1e0c964f2e0ab9f279c50ee995c6dadb8e4906322adea22076529d57d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQS6UPYA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDR7cb4t03jAdQa%2FNATB35oFwDhP6aP%2Bofm7N6FuHXpgAiBYVx17WFBY00CQp7FJO95RxQIqcq%2BEE0D9BkrB6gIWUCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCet96SxXNGbPbOqgKtwD3Y9YLV%2FJQxMmx09LNUzb9%2FhtKZbvorYjfOaEfdjqWq4UknHx7PwANTqc%2FDfz%2Bn0i8ITWA20EH6Lxcuw%2Fe4ZwHcVhJHg9T4k4UJi5vaK4BSQ%2Fb7G%2FQ1aJarNpakgRdpyNb5fLZISt8%2BWcLwrI1cpqPtuf1LwFKGAheK%2BOpU%2BgowDM0Ks06%2BUSFC3iS2HrU2TMhVVx6H%2B98fmJ8NLK4KI6weSseVZ61IaaPQ7KjHlz8KwRIR0vOX%2FOKiMjLVuaQsCsTF6jEoa31wpQ0Ob75p8jywVgGRmemK4b0gYpETstgoQWCqQS%2BazbBpXkdB2jSib8cr5jclU6c0A0O8jVg7JM3y7sIJwyqCjVPPSSfcotmZcCGSZOIXLa4bti%2BHS6apAke5e%2FjK2KjTgVlv0umYg%2B27mup28oZrL2tP953EEsXgHKrXnYnMJV%2B4GBG23Bh4iZzzebSUJmlprcAFICeD0I%2FbYUlNOAwdMGDwUCg%2Bw5A4QrXUFa1mxT5K7QO%2BeHDIxPtV5xP4JwnMP0q3h7X1gdfw%2FkMUsnut8AePTttCHt8QJKYoq%2Fudlur6gIQtWAPAGbi5LOM7baqLJevmGVxu4ayZG5qICd32V7sFUVKiUde94RW2ZgHTnAYciyfPEwjf7SyQY6pgF7Ps99H309Kyr1Tix%2BmoC6d4N0ktWhsAX9%2BdJ7IWIcmehgx3EGuhmzotAR52HcGsWnDlsY5PSQgz5ZlWglPDuQtm%2BYZcVodn3BqQEw6TXzIhjWDBwdg5IZPC9O1tur760kbu7UCPitVoYv%2BsEInuvnmKZCePrMLakWB4hITMRjnwZFI8phRhacFZ40be%2B0p7oXt%2F3tjYR%2Frsxghf7vWPeVux%2F%2FywLM&X-Amz-Signature=b08569143f9ef9caeb0ca7cf31f3de053364b80f95ee3637fb47f591b8ec1716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

