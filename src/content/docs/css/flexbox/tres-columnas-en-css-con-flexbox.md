---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD47OIPV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhmwCpZZuUKz0uBnItlU9pOyDpSDBs%2BF8%2F9MX9KstuwIhAMG5%2B1%2BH1aJctpgcCZpvkxZtUD5ncGwLfPOiObmKbwZyKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOkRp6rxZBtMgVlVAq3AOTaFFmkGJuo0Hdas9XfQhjnb7m%2F8Gkx%2BmwaFOJIJhkXPgJCT6GvGiHRq0YttX7CaknS4Xb%2BF5nGi1cvJxLvI8vvQQtNYwsJz5iY3zRv8y0ekxaf%2BYLpCTz9buqynBEre35Ldb9pCk%2Bk66UqNkKn6ODhTr8tfGANsTTj0%2BnVWaZ4%2Bsmeari81OogbzFmP0xHTlfisttOF6d8xdQN3TiYMa9SzMaGSqHrtxcVq6RDtCWul6xkJRTYEeSEKp53yM2IRNTBdBsKHDXs1BwMZdrCuQBLKn%2FNP6f76KXOrmPzNCHahMhNNlwOEWxdCKBXUb%2BQUNie4zHs0%2B7DIenSATJ2I7waAmbiA3BSLiG8cVzRJtUQ18PanoTTIlCfl0%2B%2F8J2OmTsewv4%2F5uTcgVrZvdIb%2FM%2FlofV85JB3s3Pwgn0NY9%2Bytq4wOwyaFdFFxUvIMwTr9Fsyt2lDQD7EziHwMO%2BzIp4MnfuX%2FbtjIB%2FYHkWdyBYoOVOJ14kYlf2UkkLxCngf%2Fw56%2BfjuuAT5dJj%2BS5%2Fmv0qZaATI8oOuAByVFMTYxkGkRP%2FyhBZuHPS%2BaKbxLj%2FVy%2FdC212BDf0SBu84blGjqy3qm8BGbR6Gesm%2FJWPWx%2FUDTDH8a%2BEX05%2B%2BdoZSjCJh9%2FJBjqkAT53fFWDiFGGitBFALCCr2xFTKHcmYHc4fJd30JophAfLfJr7w5rxtKKqQhNjXSVbOK1VXR0D7Vr%2FvunOFeLZ1zRQwRePW2kAxmG9K2Ug88pV4IQ5vm8PWCsYDAQZNHAA9jp3VgjxDK9IhAEFW0poIiY326caakZAi5OOBhooVCGFaLA3Rj58IUA7%2F%2FTB%2FfPOEMd1ud6gLcsLOTwg1FQmziFaCRJ&X-Amz-Signature=1a19feee7e35ce579da825d94cff64f236b80acb31e2cea6384708b2b5e884cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD47OIPV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOhmwCpZZuUKz0uBnItlU9pOyDpSDBs%2BF8%2F9MX9KstuwIhAMG5%2B1%2BH1aJctpgcCZpvkxZtUD5ncGwLfPOiObmKbwZyKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOkRp6rxZBtMgVlVAq3AOTaFFmkGJuo0Hdas9XfQhjnb7m%2F8Gkx%2BmwaFOJIJhkXPgJCT6GvGiHRq0YttX7CaknS4Xb%2BF5nGi1cvJxLvI8vvQQtNYwsJz5iY3zRv8y0ekxaf%2BYLpCTz9buqynBEre35Ldb9pCk%2Bk66UqNkKn6ODhTr8tfGANsTTj0%2BnVWaZ4%2Bsmeari81OogbzFmP0xHTlfisttOF6d8xdQN3TiYMa9SzMaGSqHrtxcVq6RDtCWul6xkJRTYEeSEKp53yM2IRNTBdBsKHDXs1BwMZdrCuQBLKn%2FNP6f76KXOrmPzNCHahMhNNlwOEWxdCKBXUb%2BQUNie4zHs0%2B7DIenSATJ2I7waAmbiA3BSLiG8cVzRJtUQ18PanoTTIlCfl0%2B%2F8J2OmTsewv4%2F5uTcgVrZvdIb%2FM%2FlofV85JB3s3Pwgn0NY9%2Bytq4wOwyaFdFFxUvIMwTr9Fsyt2lDQD7EziHwMO%2BzIp4MnfuX%2FbtjIB%2FYHkWdyBYoOVOJ14kYlf2UkkLxCngf%2Fw56%2BfjuuAT5dJj%2BS5%2Fmv0qZaATI8oOuAByVFMTYxkGkRP%2FyhBZuHPS%2BaKbxLj%2FVy%2FdC212BDf0SBu84blGjqy3qm8BGbR6Gesm%2FJWPWx%2FUDTDH8a%2BEX05%2B%2BdoZSjCJh9%2FJBjqkAT53fFWDiFGGitBFALCCr2xFTKHcmYHc4fJd30JophAfLfJr7w5rxtKKqQhNjXSVbOK1VXR0D7Vr%2FvunOFeLZ1zRQwRePW2kAxmG9K2Ug88pV4IQ5vm8PWCsYDAQZNHAA9jp3VgjxDK9IhAEFW0poIiY326caakZAi5OOBhooVCGFaLA3Rj58IUA7%2F%2FTB%2FfPOEMd1ud6gLcsLOTwg1FQmziFaCRJ&X-Amz-Signature=6b7093c9628c74c853561195ce2597bebb622df3bd7e1c88090b70fbb650959f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

