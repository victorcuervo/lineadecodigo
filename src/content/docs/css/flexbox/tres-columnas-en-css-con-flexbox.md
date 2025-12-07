---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKTUMFC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuactuNm%2F7N46p%2Bv%2BzJovjnTk0UhnTCFGMRzh%2BOSqlIwIhAMmbEWQUzeAonOvSByxkb5uZrLe6LRKTcxYlNJmXLvc%2FKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5IVHoqVVSZvXAUm8q3AOU8uvZlj5287blqlovkT6P88vPkbc4prvCfx7o2CttcNH6kQyteSHsZU6xf8qHLAN0eCmFAT9YfZVLshPhUaN8BhnwYsti6vzcc9W19KV1a7TScl2lCs6Y6uOQMS96FWWYUwPWaIjuNiaxQ5S4UopShK6tbCfXy3Dx%2BQhbf0dGQJXnRuk0%2B%2FRGigIWFJ%2BEFzKgGigawHE3Hs9aJxQ61ONCYIQ7ZWSdGLW2AAMI3jE69zYqPvxZngTAJlFFcdfskYeTMHPdF1XAApkmN%2FaeCEQg%2F%2F3ynk8VSldcdEMNaKUd6AG3ZnawNOGTaZMsMklbeTdg0EDaatCazIxPbqmIr0vzQL5i77nmFDjojqOFB%2FutR4lQoXovv8AejukryRESZqSQZXqfIAHwPyRXWQwpD9IzqWY6jtZQqebTfJoL5S%2FmubL%2FWASjNirUmH%2BXLEEQ9boeiVY78dBcbZHp4x0DYdb3Y50rfpVukwt%2Bjzh2ROKCZXMlTgaPCy02F3yvYfZF8PjQLoefrGXNuYx%2F16r6n%2FokP1ZV6HU8lTpvXO0mUuBMPmHQYRAlBqnvNs2nyyKxnraB1qqLVPx3rr8JKle76NHhZrrNGHB2nfI7HyccpqbOhVb02Yz53WTythBrZzDLmdXJBjqkAYvSO2ZPBxuC5X0MCrjggtcq7MQ2u2kZaPpJo7HK%2B3jmNtGh%2B2PxS%2FrgbXdgs2V0ATxpo3%2FrCK8XNafXLIo8V%2F4x3DKagnS5Rcpb47zNick8WcJpwlqHAAsQCf1jWsa65LzblNTrgvk9%2FUnuV6MqggBg0uALA8D541fm%2BsI7bsiWkqtXbf0I%2FKEtTsbDbWBQWVVt5KeE5dPde2OpqqhNQTDlreuw&X-Amz-Signature=972d4ecefeac7d72e3dab77367ba8eb46ce58d1414f83216205f7e3d4c1986ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXKTUMFC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuactuNm%2F7N46p%2Bv%2BzJovjnTk0UhnTCFGMRzh%2BOSqlIwIhAMmbEWQUzeAonOvSByxkb5uZrLe6LRKTcxYlNJmXLvc%2FKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5IVHoqVVSZvXAUm8q3AOU8uvZlj5287blqlovkT6P88vPkbc4prvCfx7o2CttcNH6kQyteSHsZU6xf8qHLAN0eCmFAT9YfZVLshPhUaN8BhnwYsti6vzcc9W19KV1a7TScl2lCs6Y6uOQMS96FWWYUwPWaIjuNiaxQ5S4UopShK6tbCfXy3Dx%2BQhbf0dGQJXnRuk0%2B%2FRGigIWFJ%2BEFzKgGigawHE3Hs9aJxQ61ONCYIQ7ZWSdGLW2AAMI3jE69zYqPvxZngTAJlFFcdfskYeTMHPdF1XAApkmN%2FaeCEQg%2F%2F3ynk8VSldcdEMNaKUd6AG3ZnawNOGTaZMsMklbeTdg0EDaatCazIxPbqmIr0vzQL5i77nmFDjojqOFB%2FutR4lQoXovv8AejukryRESZqSQZXqfIAHwPyRXWQwpD9IzqWY6jtZQqebTfJoL5S%2FmubL%2FWASjNirUmH%2BXLEEQ9boeiVY78dBcbZHp4x0DYdb3Y50rfpVukwt%2Bjzh2ROKCZXMlTgaPCy02F3yvYfZF8PjQLoefrGXNuYx%2F16r6n%2FokP1ZV6HU8lTpvXO0mUuBMPmHQYRAlBqnvNs2nyyKxnraB1qqLVPx3rr8JKle76NHhZrrNGHB2nfI7HyccpqbOhVb02Yz53WTythBrZzDLmdXJBjqkAYvSO2ZPBxuC5X0MCrjggtcq7MQ2u2kZaPpJo7HK%2B3jmNtGh%2B2PxS%2FrgbXdgs2V0ATxpo3%2FrCK8XNafXLIo8V%2F4x3DKagnS5Rcpb47zNick8WcJpwlqHAAsQCf1jWsa65LzblNTrgvk9%2FUnuV6MqggBg0uALA8D541fm%2BsI7bsiWkqtXbf0I%2FKEtTsbDbWBQWVVt5KeE5dPde2OpqqhNQTDlreuw&X-Amz-Signature=fd21820659bf2d7efa1c615d2b02f6298fe2bb2a02af032177b6cbddf80c834c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

