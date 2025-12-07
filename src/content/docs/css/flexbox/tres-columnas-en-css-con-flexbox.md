---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FAGUOD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqLA4uL%2FwdwuovAm7pRGfiEK5sLUsNIUDLg%2F2aHNeIfwIhAPNubYQ1jJlZF2JLmm4PWkCwcCZd9GgEK5%2B3SrfkWBzdKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEkOTmJ8vp%2ByItEIIq3ANb4bJYPe43k1N%2FOfGsjvKwg%2Fj8dQuIJ18Gix52RUqImAxyX8PZdf2y4BQxZT37yn0y0nsg6QOitD6ijxkE5N0dqu2gxpbzQlOVss2%2FU0ksjY7af%2FZDlHVGSimRJgf2EVgrJeLgDwjolnB3P5cfDR8fHhIkBC6sI3uH4fB0X2seB3u2ack4V8iHrWeNBNipb%2FI3lChI3INAb9P4w9J7tlltDslj088alK1TGcfdBjvtv3Q61mltAYjByguW15b7pIhZROvknKSFkHwJ2XXAJBpmbELgXK6%2Bx8FNTAE8jcPwy2673a1Us9yR5d6G%2BCCmfbbgPUyvLXignETA%2FaoHYBDK9pKwiSN44y1EBZy1xzcI7D4wedTHPjJosMLosyoRe6RupAQmzcXmEPWaVL7rhj1QsXCIlqWLgzeODZl3LBlu83qOZHLO9RmU4uJE69OuH9EtE%2F9%2Bg3pAUYzJi6XAb%2B2FWypz%2FYraRPpSjANbWJ4l5LOeQOgtFOE5BgKzlU4111nMAzF%2BzLuH%2BgSU4mODlWNH9U2%2BXDr%2FRd%2FMkjIQNE94cpQE05g77ldlPS%2FW7d5jqrUWMwJ0eWY%2F03%2FW4l6XXwPG5oalJ8EFpbCrjVoTpP3wjHjIsKVpsmn3QY16hTCw%2FtLJBjqkATj6x7LwYXpzo4ChPv2LIsZ6slRYSssVdsOv%2FMlEou7ntgFg4xMpNZME9F2vAaq%2B1rgPAGI2s2K8j4nSRQaJP%2BpzMS2p4p0UVdXGWgk5r%2Bq%2Br8FAROJRJ3HcvHOrHFWkx2tx3EE3c67547WAvYb5vl9k6UN1SG3nNQ4irP3Zs5TM8lbU4C6lQS2PhqJdZHBXzI%2BUGTTv%2FR99P6xdIHfXqXUjtiY0&X-Amz-Signature=71758e5cdf4f2e62909777535df552be822e53ebcbe384774691908615b4a0d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626FAGUOD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqLA4uL%2FwdwuovAm7pRGfiEK5sLUsNIUDLg%2F2aHNeIfwIhAPNubYQ1jJlZF2JLmm4PWkCwcCZd9GgEK5%2B3SrfkWBzdKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEkOTmJ8vp%2ByItEIIq3ANb4bJYPe43k1N%2FOfGsjvKwg%2Fj8dQuIJ18Gix52RUqImAxyX8PZdf2y4BQxZT37yn0y0nsg6QOitD6ijxkE5N0dqu2gxpbzQlOVss2%2FU0ksjY7af%2FZDlHVGSimRJgf2EVgrJeLgDwjolnB3P5cfDR8fHhIkBC6sI3uH4fB0X2seB3u2ack4V8iHrWeNBNipb%2FI3lChI3INAb9P4w9J7tlltDslj088alK1TGcfdBjvtv3Q61mltAYjByguW15b7pIhZROvknKSFkHwJ2XXAJBpmbELgXK6%2Bx8FNTAE8jcPwy2673a1Us9yR5d6G%2BCCmfbbgPUyvLXignETA%2FaoHYBDK9pKwiSN44y1EBZy1xzcI7D4wedTHPjJosMLosyoRe6RupAQmzcXmEPWaVL7rhj1QsXCIlqWLgzeODZl3LBlu83qOZHLO9RmU4uJE69OuH9EtE%2F9%2Bg3pAUYzJi6XAb%2B2FWypz%2FYraRPpSjANbWJ4l5LOeQOgtFOE5BgKzlU4111nMAzF%2BzLuH%2BgSU4mODlWNH9U2%2BXDr%2FRd%2FMkjIQNE94cpQE05g77ldlPS%2FW7d5jqrUWMwJ0eWY%2F03%2FW4l6XXwPG5oalJ8EFpbCrjVoTpP3wjHjIsKVpsmn3QY16hTCw%2FtLJBjqkATj6x7LwYXpzo4ChPv2LIsZ6slRYSssVdsOv%2FMlEou7ntgFg4xMpNZME9F2vAaq%2B1rgPAGI2s2K8j4nSRQaJP%2BpzMS2p4p0UVdXGWgk5r%2Bq%2Br8FAROJRJ3HcvHOrHFWkx2tx3EE3c67547WAvYb5vl9k6UN1SG3nNQ4irP3Zs5TM8lbU4C6lQS2PhqJdZHBXzI%2BUGTTv%2FR99P6xdIHfXqXUjtiY0&X-Amz-Signature=275eae1b585ca7530a5cc7e27cf39fb96878108a17ef1cd9fe5d0f4e60d75ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

