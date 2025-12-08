---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHBFAXZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGPF6m8QGoesF%2FtabcD5iwWI5CHAOcO1hhwsoWbFfboAiBc9srpe7q%2FtBevTBKJwZgKOPFMi8Dimhvy6coiiPepqiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPmYFUc%2BE59qJyx9bKtwD9taxT3KGDVQ2d1pIxGcYmYPgYQp2J9IhEeg8cL5gHFiWl4RPO%2FHHGMFeNlQDCthMgaJu3Bp%2BMkICRsqXgephLTaYy999IrHoarYhpj6FLc1RYNdd6WlCZnAL74Wmu%2BAZz5MNyNzqddvAWW2MzMcksGci6ZgHFhFzjlr%2FwAqfZ7BJKAm2zznS2%2FBAk%2Fa6g2cyTfnQ%2Bli%2BYm%2FWjvLx%2Bsteh26wo9n5oxQVNys6oqS90MeD2iJbCmZB5paz1rBIyKKpp01YiRsWXowy5KIAL17pagsKAC%2Bxy3SBWn8WKTEHMoEa8lIwh3pQgm0SPqsr7Zx6DLVU4l%2BN%2FU9iVWt52vjHwWKHtVYHO6RuV3p0MGjcJVGs4ogRngJEN1C8hw%2FvrPzj5lIvfBW%2B9XLrTQ582H4zD4tNWnkYLjyuuRwK3P6hvauje%2BWhRglseq2LEq99mMwior1K3YXwHcgnqsYPP7zx4BxKvuLDP7Oh5Ukf4IbSQxbx3sK%2BH7jQZmOpzHkvniGnysmEMpKwODZ64jPl6Eb2cSFLTqzIQwJsRDAfQXIm%2FrmxeIhNH8ZqbAdmIBQV3YVRYMErhNHnMleTY6iWgeX%2BFMRnxvM2qDpiEQoO6hM%2FtXCAU6Zo2Tj%2FblJrNeAwppDbyQY6pgEyW77mDQpdVDYA%2FIz5bPz8%2By%2FCu5JYIaJV1f2qdqKctpB%2FsgNFx8N586d%2BRajtAedaBDa10JN%2FXPSMqPs5kW%2B9EOftEFwo5LxXtmif%2FEc%2BagpCpOpYcTFNlRk3%2FZfEfDPcAro7%2FtSaB6izvB9Z1Y4EKlvK6mTVycy0Fj9YKKm6%2BwEX9LSxKgBxpvdNsSe%2F0ojEkJCeMCrh44fqaBaDVTOVu4F3yl%2B8&X-Amz-Signature=48c4585e7b6372c7059e13b33627375af48ea5760d639e289bbb86f29be4350a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VHBFAXZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGPF6m8QGoesF%2FtabcD5iwWI5CHAOcO1hhwsoWbFfboAiBc9srpe7q%2FtBevTBKJwZgKOPFMi8Dimhvy6coiiPepqiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPmYFUc%2BE59qJyx9bKtwD9taxT3KGDVQ2d1pIxGcYmYPgYQp2J9IhEeg8cL5gHFiWl4RPO%2FHHGMFeNlQDCthMgaJu3Bp%2BMkICRsqXgephLTaYy999IrHoarYhpj6FLc1RYNdd6WlCZnAL74Wmu%2BAZz5MNyNzqddvAWW2MzMcksGci6ZgHFhFzjlr%2FwAqfZ7BJKAm2zznS2%2FBAk%2Fa6g2cyTfnQ%2Bli%2BYm%2FWjvLx%2Bsteh26wo9n5oxQVNys6oqS90MeD2iJbCmZB5paz1rBIyKKpp01YiRsWXowy5KIAL17pagsKAC%2Bxy3SBWn8WKTEHMoEa8lIwh3pQgm0SPqsr7Zx6DLVU4l%2BN%2FU9iVWt52vjHwWKHtVYHO6RuV3p0MGjcJVGs4ogRngJEN1C8hw%2FvrPzj5lIvfBW%2B9XLrTQ582H4zD4tNWnkYLjyuuRwK3P6hvauje%2BWhRglseq2LEq99mMwior1K3YXwHcgnqsYPP7zx4BxKvuLDP7Oh5Ukf4IbSQxbx3sK%2BH7jQZmOpzHkvniGnysmEMpKwODZ64jPl6Eb2cSFLTqzIQwJsRDAfQXIm%2FrmxeIhNH8ZqbAdmIBQV3YVRYMErhNHnMleTY6iWgeX%2BFMRnxvM2qDpiEQoO6hM%2FtXCAU6Zo2Tj%2FblJrNeAwppDbyQY6pgEyW77mDQpdVDYA%2FIz5bPz8%2By%2FCu5JYIaJV1f2qdqKctpB%2FsgNFx8N586d%2BRajtAedaBDa10JN%2FXPSMqPs5kW%2B9EOftEFwo5LxXtmif%2FEc%2BagpCpOpYcTFNlRk3%2FZfEfDPcAro7%2FtSaB6izvB9Z1Y4EKlvK6mTVycy0Fj9YKKm6%2BwEX9LSxKgBxpvdNsSe%2F0ojEkJCeMCrh44fqaBaDVTOVu4F3yl%2B8&X-Amz-Signature=f5091525f24957c34879091dd74246833120530f110cf671387b04a358ec618a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

