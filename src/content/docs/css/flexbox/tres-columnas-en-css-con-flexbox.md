---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VAJX2S3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCRGgmfxqsYuSsYxZlJKK%2Fn5ZkuRefbBoRn8RvIkCW7XgIgPvKb5SNpRJ12DeEIa%2BeN6%2FFrGhhMyq%2F%2Blh%2B3352d65Mq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPeexYvUVXWuv%2Bw9cyrcA%2F%2BOQvnPADAl4pv3GfcWDp9CI1kOkW3h9DsbA5sHKrDyxqM%2B3Oc7Oa5hR%2Ba4Sb7QOt5lvy%2Bc9BGIguJyWLZp5ZGK9ZXADy8%2FI%2FgOq8vbSn7JQgar8MXdFDmZrudAtZ4rUainSILG8%2BPoNIfgNA82UZLCah%2FIhNnegtkUvkG1pM%2BNoIF2xsoGJp45wl1yMl1F09WriDkYfypDhbZ612ZtuXRw94OlNcfYE3sDWj2cgsHcsg6QhUfJMl0rqAxyzcPAwQGBhPnPqVQWd2LSGcrtqtEivLWinKEjrQipsODMzqgCzTxb3aIjNbm2rFZnl1tRKSczSDT0K%2FyjSWyWPUZ9Uy%2BSuv4LidCqOq66xHceoU9gIKdNg%2Bw%2BYrvO9PC3IqeRKufasvIfZINNcZhPqPVwrMePchtX1W2hbJNjAOTq%2BgJBI0WYCyqyG3Wv3rxFIcQa68ejthMMomyGj9q4z5cSDkOWjfeK0qDw5D%2F6aUJU7voBPoeuLkb%2BewVRT%2BXajDmVrMaFywR43Y6Pzj%2F9hcnBt0AFjoDPH%2F6I6pPxlJWjgRKIjl18KbhEulKN9khW4%2FB6%2Fiq53Aafp%2BPHukzJr%2Fva2JPIYMlxQXx197F35O9utxp42o1DuRTK%2Bj4J9u88MM73wskGOqUBkswI1HnrZtBRf7F65wgpCD2AKgKqByA%2BPhdrkOLvKaQRusp5fHnNdPclICf5N1UAmXsoOWzIi8xJYzw%2BzpwmP5cGE8FT0UxJxBDmpk1Qqh6VBFdaOCpJtm7o8BRtHiVZdrELyTiXWAzMlqwkXVR%2BSK8SnhI0zyBim9yUJvHuU7X9HUQSJDnHwrI8RvI1j186ZolFXymbyg4ncR%2BRdQu843ZKkumX&X-Amz-Signature=1218eab03487a2c37818e0aaaefca6c7a051dd1484c2d1bf0b87d0fbd4be4dfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VAJX2S3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCRGgmfxqsYuSsYxZlJKK%2Fn5ZkuRefbBoRn8RvIkCW7XgIgPvKb5SNpRJ12DeEIa%2BeN6%2FFrGhhMyq%2F%2Blh%2B3352d65Mq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDPeexYvUVXWuv%2Bw9cyrcA%2F%2BOQvnPADAl4pv3GfcWDp9CI1kOkW3h9DsbA5sHKrDyxqM%2B3Oc7Oa5hR%2Ba4Sb7QOt5lvy%2Bc9BGIguJyWLZp5ZGK9ZXADy8%2FI%2FgOq8vbSn7JQgar8MXdFDmZrudAtZ4rUainSILG8%2BPoNIfgNA82UZLCah%2FIhNnegtkUvkG1pM%2BNoIF2xsoGJp45wl1yMl1F09WriDkYfypDhbZ612ZtuXRw94OlNcfYE3sDWj2cgsHcsg6QhUfJMl0rqAxyzcPAwQGBhPnPqVQWd2LSGcrtqtEivLWinKEjrQipsODMzqgCzTxb3aIjNbm2rFZnl1tRKSczSDT0K%2FyjSWyWPUZ9Uy%2BSuv4LidCqOq66xHceoU9gIKdNg%2Bw%2BYrvO9PC3IqeRKufasvIfZINNcZhPqPVwrMePchtX1W2hbJNjAOTq%2BgJBI0WYCyqyG3Wv3rxFIcQa68ejthMMomyGj9q4z5cSDkOWjfeK0qDw5D%2F6aUJU7voBPoeuLkb%2BewVRT%2BXajDmVrMaFywR43Y6Pzj%2F9hcnBt0AFjoDPH%2F6I6pPxlJWjgRKIjl18KbhEulKN9khW4%2FB6%2Fiq53Aafp%2BPHukzJr%2Fva2JPIYMlxQXx197F35O9utxp42o1DuRTK%2Bj4J9u88MM73wskGOqUBkswI1HnrZtBRf7F65wgpCD2AKgKqByA%2BPhdrkOLvKaQRusp5fHnNdPclICf5N1UAmXsoOWzIi8xJYzw%2BzpwmP5cGE8FT0UxJxBDmpk1Qqh6VBFdaOCpJtm7o8BRtHiVZdrELyTiXWAzMlqwkXVR%2BSK8SnhI0zyBim9yUJvHuU7X9HUQSJDnHwrI8RvI1j186ZolFXymbyg4ncR%2BRdQu843ZKkumX&X-Amz-Signature=afa61836cd411f37c0e672b4bc385a1c9638bc48c5388671e0b8ba047d834f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

