---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFLBQUX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHe6fxQmvLnae1AkmmsNVsrAtMHSBzoGSgbSK5ypqiPCAiBXmRZK%2BFQ5UiFKYt%2BTdeUzxvRS9KiScvWRj0GqAwd%2FviqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM5tFQAUvgYqSqryDKtwDnjGpODbuR5kzHx14nWVJLttV022NEJrhwrdSn0lSQUbRY1L8xp2fNSqEmGpm6UB3jueT7s9wXVgYX3fln5S2ZhnS%2BKDR9uY7hHFmO1W8z2%2Fxl7MjV%2BkkIQ6igw1szDZ%2F1B%2FPHbAzSuxDzcsFHroYYZZPgLnHVxt4u2yXzvpiGcfkagOgAB8eUCcPMx9715sBHkObVJxN9Au7RWCck3H4hSqf9CYPR0pX8Gj2HEYeBdsjkypkHlw%2B4IcmkouuibZz2So1ECiVkxGHSYc9W238j8o1FFVIRkzasH9zqrs6Av%2FT5FYeGOamlGBGvQ9COWrY1kGgwq4T3gKrgJ%2Bd3yTIAvJhhteZJbWkshzPs%2BSony%2BSsHG0shCmMYVVFmluFwXs1L4rejrm6%2B3lCKsC4tjY85SFBVfewa18sjsPXXML08KwCvi8wYAoEVbQ0cUvxLsQgm9SsSaV9iQQlsls03kBOWZSnaTBEzpKdNGJvjwOV2Aj%2Bsq6bxvlPtPFTbun8qhWSBnNQ3SRtH%2BM7eb6OCmzyIxSymN5cnxC4O6sGqqeW0sXSoGAGaq95%2BghnR6LRrd4h%2Bw115ZNnCeWE36q083xbx3JVCs5p52%2F1wMNH78aPsXvJ1ldczKNUdnshMIwtaLdyQY6pgGnl%2FsmyZA93gg0CtJuyy9qnKV6pFGP1YGmXoOvACThgQjeg5M6bh4vmaosUdVXFXupkXIaG3NYZECsLaQL0i5wtZAwsqL7ESaDgxDV1nYa6joq6bKgvGoQwQq50tih2I8KTS%2B6xlvljuJD4nGSBc7XcEmoug01w%2BT%2FsWjigSnVOHokIq2DCBiAg5ai2fJm9ZS8pP7i2c5tGawTl0Z2JxOqcJctHxRo&X-Amz-Signature=524e37c7eb3173fe6323ea55af8e40cbc6343e540fb1d7f5f922fb5b8164e330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFLBQUX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHe6fxQmvLnae1AkmmsNVsrAtMHSBzoGSgbSK5ypqiPCAiBXmRZK%2BFQ5UiFKYt%2BTdeUzxvRS9KiScvWRj0GqAwd%2FviqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM5tFQAUvgYqSqryDKtwDnjGpODbuR5kzHx14nWVJLttV022NEJrhwrdSn0lSQUbRY1L8xp2fNSqEmGpm6UB3jueT7s9wXVgYX3fln5S2ZhnS%2BKDR9uY7hHFmO1W8z2%2Fxl7MjV%2BkkIQ6igw1szDZ%2F1B%2FPHbAzSuxDzcsFHroYYZZPgLnHVxt4u2yXzvpiGcfkagOgAB8eUCcPMx9715sBHkObVJxN9Au7RWCck3H4hSqf9CYPR0pX8Gj2HEYeBdsjkypkHlw%2B4IcmkouuibZz2So1ECiVkxGHSYc9W238j8o1FFVIRkzasH9zqrs6Av%2FT5FYeGOamlGBGvQ9COWrY1kGgwq4T3gKrgJ%2Bd3yTIAvJhhteZJbWkshzPs%2BSony%2BSsHG0shCmMYVVFmluFwXs1L4rejrm6%2B3lCKsC4tjY85SFBVfewa18sjsPXXML08KwCvi8wYAoEVbQ0cUvxLsQgm9SsSaV9iQQlsls03kBOWZSnaTBEzpKdNGJvjwOV2Aj%2Bsq6bxvlPtPFTbun8qhWSBnNQ3SRtH%2BM7eb6OCmzyIxSymN5cnxC4O6sGqqeW0sXSoGAGaq95%2BghnR6LRrd4h%2Bw115ZNnCeWE36q083xbx3JVCs5p52%2F1wMNH78aPsXvJ1ldczKNUdnshMIwtaLdyQY6pgGnl%2FsmyZA93gg0CtJuyy9qnKV6pFGP1YGmXoOvACThgQjeg5M6bh4vmaosUdVXFXupkXIaG3NYZECsLaQL0i5wtZAwsqL7ESaDgxDV1nYa6joq6bKgvGoQwQq50tih2I8KTS%2B6xlvljuJD4nGSBc7XcEmoug01w%2BT%2FsWjigSnVOHokIq2DCBiAg5ai2fJm9ZS8pP7i2c5tGawTl0Z2JxOqcJctHxRo&X-Amz-Signature=57014cdebd0c8cc85d008c9aa7e1b757a0d70db5c35fea47c0ab4b08d2c6b57a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

