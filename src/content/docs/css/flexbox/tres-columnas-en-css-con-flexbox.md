---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6TFNN3K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCum6i1O5djoLQdGqVUQkdhZGmlEOL%2Bot6FX0UxqSKoywIhAJOvPzFPkwTzg2FTcHUsqrYCEn00G7MOn9a9dLkOH3TOKv8DCFsQABoMNjM3NDIzMTgzODA1Igz6CshQlTrSFtOndNkq3ANkB5EHiqLkD1usa53oI6w9HZD%2FG%2B4I1e8g0ZwcFF7zlk2XDxfB0TL0HI9b2E2YaWjLlBEvI6VACrjynrpxTmcq4UghkIzI9O%2FPsihfiDhND0lYqU9NNZHokyGE4pzELv7ly3F6K%2BGCcsugLKkeyV8A8jIlDB3k3wupbkVMbaJLkYzACfxe%2BFiWEuFLnLz4q7wT0%2FjbcqRTmG5rvBWSe1WrZ81ol2fk%2BToFrnpzND43A9qohD1FYnSqg0QXZjSnNNMrPC5wwLuG1W4UOH5kr75eEAI0Ui7ERfXSx9JoRgCa4L%2F4pNpeZEhFrCVpx704mXgWIgrFc76eGDuIvr306EMXVqyrUzKcwcJKnwjinFjg%2FQoq2MuPogsSnAH9a%2FHirExz3JnMPoRNtxIEqIMLzdH9w85mjpDy4H6l5Nkw5px9lOC92xF2ghhDSFVgF%2FX6FFKXEtw3XS1mkTtLg1KOfqHYEntcCSMH7jNZbcndYI%2FIJyb9EZbd03It01REtNjHmjxB5q597jwBD3%2BD9HQvfP%2B%2BtnTNd5faWNG4lCkA0h1jyXP9lG4%2FHHK2rEwHH5m9f4I2bf0Iv5YOecqIrl7CirqY7kbs9QDXF%2BWVlFK2vMT2vU4e3ywvgRy1EhacyTCEy8rJBjqkASAvEKElHSLEJvLn7vCVn8M8Mp2CebUbLf30wUrRjiPPbqK6PKPvMnOooVsVSsVBaNAHarsupVus6IqyOxQJvHkQYTQUrCeAhzgKsd9EeyBqqAht1Buq8DHEStYpHayOAqiEoH6KItz7s6MBowOf%2FIODprEtg0ycZR6OzLQ4Ckko8%2BnekWfO%2Fm8WJLiC4D0vfcMEouTXkVXDG5vfDj9yTw1sleUJ&X-Amz-Signature=9ddcdff5b06940c0d74e88793f05e5d3fbc3b37eb33565afa0413afcf9b3a2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6TFNN3K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCum6i1O5djoLQdGqVUQkdhZGmlEOL%2Bot6FX0UxqSKoywIhAJOvPzFPkwTzg2FTcHUsqrYCEn00G7MOn9a9dLkOH3TOKv8DCFsQABoMNjM3NDIzMTgzODA1Igz6CshQlTrSFtOndNkq3ANkB5EHiqLkD1usa53oI6w9HZD%2FG%2B4I1e8g0ZwcFF7zlk2XDxfB0TL0HI9b2E2YaWjLlBEvI6VACrjynrpxTmcq4UghkIzI9O%2FPsihfiDhND0lYqU9NNZHokyGE4pzELv7ly3F6K%2BGCcsugLKkeyV8A8jIlDB3k3wupbkVMbaJLkYzACfxe%2BFiWEuFLnLz4q7wT0%2FjbcqRTmG5rvBWSe1WrZ81ol2fk%2BToFrnpzND43A9qohD1FYnSqg0QXZjSnNNMrPC5wwLuG1W4UOH5kr75eEAI0Ui7ERfXSx9JoRgCa4L%2F4pNpeZEhFrCVpx704mXgWIgrFc76eGDuIvr306EMXVqyrUzKcwcJKnwjinFjg%2FQoq2MuPogsSnAH9a%2FHirExz3JnMPoRNtxIEqIMLzdH9w85mjpDy4H6l5Nkw5px9lOC92xF2ghhDSFVgF%2FX6FFKXEtw3XS1mkTtLg1KOfqHYEntcCSMH7jNZbcndYI%2FIJyb9EZbd03It01REtNjHmjxB5q597jwBD3%2BD9HQvfP%2B%2BtnTNd5faWNG4lCkA0h1jyXP9lG4%2FHHK2rEwHH5m9f4I2bf0Iv5YOecqIrl7CirqY7kbs9QDXF%2BWVlFK2vMT2vU4e3ywvgRy1EhacyTCEy8rJBjqkASAvEKElHSLEJvLn7vCVn8M8Mp2CebUbLf30wUrRjiPPbqK6PKPvMnOooVsVSsVBaNAHarsupVus6IqyOxQJvHkQYTQUrCeAhzgKsd9EeyBqqAht1Buq8DHEStYpHayOAqiEoH6KItz7s6MBowOf%2FIODprEtg0ycZR6OzLQ4Ckko8%2BnekWfO%2Fm8WJLiC4D0vfcMEouTXkVXDG5vfDj9yTw1sleUJ&X-Amz-Signature=6010223aaf267c7838914c17ba77828522637869ef82bfbc537eda4fb4c9df27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

