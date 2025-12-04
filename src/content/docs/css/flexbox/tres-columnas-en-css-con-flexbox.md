---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4Z634BQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC3nwmIaQzA4SCMYRRdM3l%2FwH%2Fv6NsTmAqdf8kzB1Lb4gIhAOe%2BGHN7IMYOEnzFW98ri7sNANWPDBw4RALaS9CDTT9vKv8DCEgQABoMNjM3NDIzMTgzODA1Igwnbz6OmsWdO7HxjDQq3ANhvME15mIQiWF1HodSblkHcePURQ4zDpTygZMKuqjaNEwrzMZ6dmC0q4rqk0mADQ4GkdPDdk04Abw%2BtCIjazL6sJF5r%2FYbuhWMB4%2FDzJov%2F3UXBeHHqxXyGufTy1kltu%2FoaTObxULiS3jq5qfuebVBYIhzf37h3MZeAiG0%2FJcRfWqOhgrmEYeto3JSURpPtN9V3FOV40lcEczQmsMhpqESOvwpOneB8QYok7q%2BSTZoOa0GXzHXYQ3j2TtYikNQtpgMWGkOSv%2Fa4Irj5NfLUikUVbXbTGW02Hk5ioxLpi8lLVbARmPH7aoCq2scanO91WG6SHsRw5OvoC9wiUpBC%2FyKYVOdIkQDOZtWvUIMWBy6OHEISjfpc29i2M%2FOlwGPb7I5iNGUWWgt9BSz1L%2BqhR3rIE585ElBVJRMsT1zBobVRzhqSgkOj7ysWQ4G2KLwDTm85Ornm1GHsuTmF8dPPdDQxmbsIakySZ%2BTAFivSldd3xOkha4Hko3%2BNisb3Bk4VjK40s48xI0GvaGBj%2FhB7CahG4A%2FMPQqe9%2BUv4GsLQxRA07onQB68uMLycxlnZlYLtDtSSfLgN%2F6Dc42b%2FG3pVGEPACrOxGjf5yqC0uPL1XJEa1zE2H60PDm7pESVDD%2FvsbJBjqkASWPHT9AydUkLKw6K%2F1CpG0GLEYGaWzZHB%2Fne75yQhmwkr16Mk8bWozcDEXSUrqUNkF1eqOg3uKiPeFP6M2Jgn3x4ywTy2yKOSU%2BcK1tUx2DAxKOo4S%2FNYDr0zx0Y6T8Eg%2B%2B9lwS95hjiFSI2IytUpIAEBGBxdHPHuNH3Cp9Qo39yfinUeQmY%2FwOR5zzYdPEVd1DRQrbUkUOOntsodR09fk6TgYZ&X-Amz-Signature=7f6b5e5b782ba1291ed9c0521ab0ccf179c86abff990e87a1ba0409a76b78bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4Z634BQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC3nwmIaQzA4SCMYRRdM3l%2FwH%2Fv6NsTmAqdf8kzB1Lb4gIhAOe%2BGHN7IMYOEnzFW98ri7sNANWPDBw4RALaS9CDTT9vKv8DCEgQABoMNjM3NDIzMTgzODA1Igwnbz6OmsWdO7HxjDQq3ANhvME15mIQiWF1HodSblkHcePURQ4zDpTygZMKuqjaNEwrzMZ6dmC0q4rqk0mADQ4GkdPDdk04Abw%2BtCIjazL6sJF5r%2FYbuhWMB4%2FDzJov%2F3UXBeHHqxXyGufTy1kltu%2FoaTObxULiS3jq5qfuebVBYIhzf37h3MZeAiG0%2FJcRfWqOhgrmEYeto3JSURpPtN9V3FOV40lcEczQmsMhpqESOvwpOneB8QYok7q%2BSTZoOa0GXzHXYQ3j2TtYikNQtpgMWGkOSv%2Fa4Irj5NfLUikUVbXbTGW02Hk5ioxLpi8lLVbARmPH7aoCq2scanO91WG6SHsRw5OvoC9wiUpBC%2FyKYVOdIkQDOZtWvUIMWBy6OHEISjfpc29i2M%2FOlwGPb7I5iNGUWWgt9BSz1L%2BqhR3rIE585ElBVJRMsT1zBobVRzhqSgkOj7ysWQ4G2KLwDTm85Ornm1GHsuTmF8dPPdDQxmbsIakySZ%2BTAFivSldd3xOkha4Hko3%2BNisb3Bk4VjK40s48xI0GvaGBj%2FhB7CahG4A%2FMPQqe9%2BUv4GsLQxRA07onQB68uMLycxlnZlYLtDtSSfLgN%2F6Dc42b%2FG3pVGEPACrOxGjf5yqC0uPL1XJEa1zE2H60PDm7pESVDD%2FvsbJBjqkASWPHT9AydUkLKw6K%2F1CpG0GLEYGaWzZHB%2Fne75yQhmwkr16Mk8bWozcDEXSUrqUNkF1eqOg3uKiPeFP6M2Jgn3x4ywTy2yKOSU%2BcK1tUx2DAxKOo4S%2FNYDr0zx0Y6T8Eg%2B%2B9lwS95hjiFSI2IytUpIAEBGBxdHPHuNH3Cp9Qo39yfinUeQmY%2FwOR5zzYdPEVd1DRQrbUkUOOntsodR09fk6TgYZ&X-Amz-Signature=b252e0c17fd562ec1c946fa091b980827af46d9823e4d3319147e28cd7648a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

