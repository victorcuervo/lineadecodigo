---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQKC36L%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FW7w4ygWXiTXt0R1%2FFzGzJ%2BXwmDE29osi5BvSlnyjZgIhAM9bdHK1xisZldgYVJNXbQ1GwqUfV5inOzZjTGUBi0JpKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1S3iYwvDHfqk34rMq3APXWAxDmLEM3pZfiSuP6KsFd3CeSVHiZKubiLKm0Xti4dsV4b28lJ3F17SQ40t1ima5IC317YLiC8pqoyw3BY3oqQoQZudogH76vSBy9ODrMvDWajMrdYMRhCEpiHpUQhBgIS64ch%2Bmos8F%2Bw1ziqaxIIIDDIKNb5rBC2sXkadc2sjPJVKdQvh92fERkE78FpM2OowRQe1BtDubkg4RnXKiEvRjihqD0t2orbNqyboB4SvvNEToAhL%2BP0kVTEbYR6vDiaMs6gjlCC2TvlaTIZcXz16n%2BUEmXsfjkeEIfJuoq%2BwI7wxr%2B4xZyjglPpAKJzHeta3vD6j7vhhyjyIwNXGLkwnIonJUn3DaaUZx9vxp%2B2HvxqIn%2BVzJv6pi3bIvWbG8VDJQVeOc3dvLV4YO3I9cep3Wpfx14%2BRY0VwvK7t4JrFAUijGulrNg8HzDaM8MZVa6i8G3EMzHx1MjJF3O3FkyPYDF3MzBdzSr%2FBHuIPH1uGYQ921QGdFylWaTbgv%2FDtXCIH6Z7PdN9zT%2BIORAgeno6aMOx6kEg7RkavaVn4vIaDdg6ZP4%2Fznp6xxUaWD2U216sKkfURwj1VLO7JlbNSFnepu5rUQjLI5Ie85b3mn%2FRe80gm1Fb7JWtNgBjDDpN%2FJBjqkAbNieLZGIPSubtg6cWYFEqB%2BxTwdwF35ScqPlsbxFbk7BPuWcYcss7AfpM%2B5O7nBOcMfVTTguVebxvzHFYAykZBFUJEykOdH9s4WTpCpn3U6IBzYzrJprnAx2Ma7jaljT%2Fe31sp5rpz%2FXt0JECTX0exXsbtRvzS5aPubossvDUL32o3Qs3wrZ0WWqIw71VQ%2FZI%2BFLcGM6OJgHPmM3d9FkPmrDtl8&X-Amz-Signature=46f7f5aed930ca2b5b34118980e4931aaefc7e17d2869a4bc54a8abe9962019f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UQKC36L%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FW7w4ygWXiTXt0R1%2FFzGzJ%2BXwmDE29osi5BvSlnyjZgIhAM9bdHK1xisZldgYVJNXbQ1GwqUfV5inOzZjTGUBi0JpKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1S3iYwvDHfqk34rMq3APXWAxDmLEM3pZfiSuP6KsFd3CeSVHiZKubiLKm0Xti4dsV4b28lJ3F17SQ40t1ima5IC317YLiC8pqoyw3BY3oqQoQZudogH76vSBy9ODrMvDWajMrdYMRhCEpiHpUQhBgIS64ch%2Bmos8F%2Bw1ziqaxIIIDDIKNb5rBC2sXkadc2sjPJVKdQvh92fERkE78FpM2OowRQe1BtDubkg4RnXKiEvRjihqD0t2orbNqyboB4SvvNEToAhL%2BP0kVTEbYR6vDiaMs6gjlCC2TvlaTIZcXz16n%2BUEmXsfjkeEIfJuoq%2BwI7wxr%2B4xZyjglPpAKJzHeta3vD6j7vhhyjyIwNXGLkwnIonJUn3DaaUZx9vxp%2B2HvxqIn%2BVzJv6pi3bIvWbG8VDJQVeOc3dvLV4YO3I9cep3Wpfx14%2BRY0VwvK7t4JrFAUijGulrNg8HzDaM8MZVa6i8G3EMzHx1MjJF3O3FkyPYDF3MzBdzSr%2FBHuIPH1uGYQ921QGdFylWaTbgv%2FDtXCIH6Z7PdN9zT%2BIORAgeno6aMOx6kEg7RkavaVn4vIaDdg6ZP4%2Fznp6xxUaWD2U216sKkfURwj1VLO7JlbNSFnepu5rUQjLI5Ie85b3mn%2FRe80gm1Fb7JWtNgBjDDpN%2FJBjqkAbNieLZGIPSubtg6cWYFEqB%2BxTwdwF35ScqPlsbxFbk7BPuWcYcss7AfpM%2B5O7nBOcMfVTTguVebxvzHFYAykZBFUJEykOdH9s4WTpCpn3U6IBzYzrJprnAx2Ma7jaljT%2Fe31sp5rpz%2FXt0JECTX0exXsbtRvzS5aPubossvDUL32o3Qs3wrZ0WWqIw71VQ%2FZI%2BFLcGM6OJgHPmM3d9FkPmrDtl8&X-Amz-Signature=943ca1afc05463c8ae62135f9dab2bebe6de7bc7e9ce29fa1da0ee54c584217d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

