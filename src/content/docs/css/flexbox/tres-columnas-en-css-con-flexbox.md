---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WZEQVU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Gn87Wzl%2B6atemMH5zDHlfzwRYrP3OYy1pGOXabyDIAiEA6Iojdn%2BqOCAWV5QQk%2Bl3%2FDTOyxbZDfo%2F6ws2IlwZ44sqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQleHXYjkKp33iDUircA7qk0FZm%2F3JpLsHVTHu7wKNwOzv9F4iDZpcJsa3SlVOAaGJy%2B7kvpvArFPZ9qfYNChNKlop8YP9vYfcAFaZACGlxadUjBA9U2%2BB1J1R92DATP0PHA7HmgsW9JjLuntjmik69hlqoVhG77duYZZxLFTa51QxvVaGv0hr1l8OHdojlr2LeGoavUsId6pzf0IwVmsEBuPEHAB9xuHPd7ELImSmPb7Ci2ZzN%2BYzhhO%2BGkHKtWA055HxhDJl6WsQWjJ7F4BCpxVu8%2FqVhBe7hXgNE1%2B3UXzb2dchE7Wmtn0PiGp%2Fz6vJGLLEGnXmFAktiH0UqST2u%2FfAQBCgjdUsFOYe%2Bl0Hu%2Fl%2FUks6NwkBL0vYuZwnXNwWEdNq9mfywdSlow5nt6PjzdR65t4Vj8ApV8c6OwIaOS9IsS5w6mrZgQV7UJP8L9RgYjTUDXfuMaqBgZtMUftZu%2FyyeOwKvJfpUJI0%2BpKh00ERaLrVDDKZrHbeSDJ68N%2FhE6goFNcF3niD2jbv2Ftj2K2zyQeeef0QlDVoTqDIeaksSgS%2FuzBdAlybDUQG%2BSCyNgfEJe6LGgHhmwh%2B5at%2FuWI4koY6IOR5A9VJ5wH2GSWKyM4DiA%2FY9Nfff0%2FXya366EAWulXvWwA%2FPMPrp3ckGOqUBgoU6ydSWwjoUWVuyRBrnpxA970DtdwyRbCVTfbngELgSyLV9SHInC2X2u56KnC6rNJ8SiJdcb6xuIIw1sp%2BsLl3ksfSbgeTEJ0SEf1%2FbQHaisvf%2BVUhrHQcTrhCp5T1ucasS7pjnomUUo4d8WllOFUnyE1rf5r0TFG5R3%2FTNJxPeQZtw5un%2Ba3V5O1oSflEbdhev0AG9N1eBOO0ykgAEiVrqrrxd&X-Amz-Signature=6f71b0e27e3ce6c301168800990ebd976193df9c1efac0e2f6b60496a504ffc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2WZEQVU%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA9Gn87Wzl%2B6atemMH5zDHlfzwRYrP3OYy1pGOXabyDIAiEA6Iojdn%2BqOCAWV5QQk%2Bl3%2FDTOyxbZDfo%2F6ws2IlwZ44sqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQleHXYjkKp33iDUircA7qk0FZm%2F3JpLsHVTHu7wKNwOzv9F4iDZpcJsa3SlVOAaGJy%2B7kvpvArFPZ9qfYNChNKlop8YP9vYfcAFaZACGlxadUjBA9U2%2BB1J1R92DATP0PHA7HmgsW9JjLuntjmik69hlqoVhG77duYZZxLFTa51QxvVaGv0hr1l8OHdojlr2LeGoavUsId6pzf0IwVmsEBuPEHAB9xuHPd7ELImSmPb7Ci2ZzN%2BYzhhO%2BGkHKtWA055HxhDJl6WsQWjJ7F4BCpxVu8%2FqVhBe7hXgNE1%2B3UXzb2dchE7Wmtn0PiGp%2Fz6vJGLLEGnXmFAktiH0UqST2u%2FfAQBCgjdUsFOYe%2Bl0Hu%2Fl%2FUks6NwkBL0vYuZwnXNwWEdNq9mfywdSlow5nt6PjzdR65t4Vj8ApV8c6OwIaOS9IsS5w6mrZgQV7UJP8L9RgYjTUDXfuMaqBgZtMUftZu%2FyyeOwKvJfpUJI0%2BpKh00ERaLrVDDKZrHbeSDJ68N%2FhE6goFNcF3niD2jbv2Ftj2K2zyQeeef0QlDVoTqDIeaksSgS%2FuzBdAlybDUQG%2BSCyNgfEJe6LGgHhmwh%2B5at%2FuWI4koY6IOR5A9VJ5wH2GSWKyM4DiA%2FY9Nfff0%2FXya366EAWulXvWwA%2FPMPrp3ckGOqUBgoU6ydSWwjoUWVuyRBrnpxA970DtdwyRbCVTfbngELgSyLV9SHInC2X2u56KnC6rNJ8SiJdcb6xuIIw1sp%2BsLl3ksfSbgeTEJ0SEf1%2FbQHaisvf%2BVUhrHQcTrhCp5T1ucasS7pjnomUUo4d8WllOFUnyE1rf5r0TFG5R3%2FTNJxPeQZtw5un%2Ba3V5O1oSflEbdhev0AG9N1eBOO0ykgAEiVrqrrxd&X-Amz-Signature=d13123be5f1df0638e07cb0c1ef5dd381dcdbb67bf97484c853a26d83064abeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

