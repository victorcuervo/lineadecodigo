---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWXY5UY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC1Jh9v313IDCNcyJNy1lAtlEf2syuB6JjU87l4EXL7wAIhANzLlkSrYvd5%2BFTW0LH0a%2FI7t%2BoYLUStidoi3R%2B5P0P9Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwZDugS5lz9rbwdeXoq3APQLRBoYklJM24VDLQyn521GH2B7aRarM1MCphmk7dGAcgXk%2BIJGSiwzoLDxmNSB7MSYh1cW2BwS0spzkuBVldTTyMdTYEpV9nM8bXFI7y1TutJPQiKP3SwW1HgdNLQGYEwYt8aC8gbhTkFjdi8l%2B7S3YMf2EggszhRiK1yLiYxCme21zVYj3l7IVIPF9L6iuMxqHdj9idoYQt7fzHvKqOIRgYukVlAGhITAL3aaRhY9SgDaUXbJ0Hlv8gLtc1Su%2BISmjhTh%2BYFPPILZX9kFunNpNv9AeoiLQFUnwW9ZWQs%2FxPSeUCEPMqF2sF9Q%2FQL%2FwjTPtdyW2UCEdoqIuC6UbTwobWmhL5uIc0UyhPJL4ZSZEyOD46I1vOnhLmnavTYIn7FVOPxS347fvfd0mskuLI4Cypkq6RmeFold%2Fnvr7SPz6P3Wkxj0Np4aN2d5sK2FlBu6XCUvIGG%2BuUaDGNeGlj99u%2FcsoyMFerIm79VyecgjP2vlYLLyCegsUyMjnKyWUaSXmer1azC3EQLrbVCEapWubFpod69g79AcuSGqThDe9F37RMH0iPnrGeJdztOenxHVUQG7C9J9H509uChJZVKlvKp8pockb8L%2F1k4Lb9ru2biBQ21bi3z3FDrTzD31MPJBjqkAULmBOcHg5DpyRmrRHgvjhfVeiTkU1QP2Xro2%2B8BslCsa8%2BRP%2BdLuEdiPwd5Ser3SVmDVJV6g3ELiV938IPk6xKJ%2FfUhqSJ48g1ATs2vXzFodGP2X7HU6QBfER4MHHU%2ByEGOwLIUN%2BXO80e8aM79vt9RddxjqzzKuUhRJlx13jV6Qg0BaglGUcw2I83dqVwq8x%2FURk5RDMOQ31cZEpvz37U2LJI0&X-Amz-Signature=eff0366a24865fd73566594f389c6e107025c0791fff14a0655ae5d509a7e827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LWXY5UY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQC1Jh9v313IDCNcyJNy1lAtlEf2syuB6JjU87l4EXL7wAIhANzLlkSrYvd5%2BFTW0LH0a%2FI7t%2BoYLUStidoi3R%2B5P0P9Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwZDugS5lz9rbwdeXoq3APQLRBoYklJM24VDLQyn521GH2B7aRarM1MCphmk7dGAcgXk%2BIJGSiwzoLDxmNSB7MSYh1cW2BwS0spzkuBVldTTyMdTYEpV9nM8bXFI7y1TutJPQiKP3SwW1HgdNLQGYEwYt8aC8gbhTkFjdi8l%2B7S3YMf2EggszhRiK1yLiYxCme21zVYj3l7IVIPF9L6iuMxqHdj9idoYQt7fzHvKqOIRgYukVlAGhITAL3aaRhY9SgDaUXbJ0Hlv8gLtc1Su%2BISmjhTh%2BYFPPILZX9kFunNpNv9AeoiLQFUnwW9ZWQs%2FxPSeUCEPMqF2sF9Q%2FQL%2FwjTPtdyW2UCEdoqIuC6UbTwobWmhL5uIc0UyhPJL4ZSZEyOD46I1vOnhLmnavTYIn7FVOPxS347fvfd0mskuLI4Cypkq6RmeFold%2Fnvr7SPz6P3Wkxj0Np4aN2d5sK2FlBu6XCUvIGG%2BuUaDGNeGlj99u%2FcsoyMFerIm79VyecgjP2vlYLLyCegsUyMjnKyWUaSXmer1azC3EQLrbVCEapWubFpod69g79AcuSGqThDe9F37RMH0iPnrGeJdztOenxHVUQG7C9J9H509uChJZVKlvKp8pockb8L%2F1k4Lb9ru2biBQ21bi3z3FDrTzD31MPJBjqkAULmBOcHg5DpyRmrRHgvjhfVeiTkU1QP2Xro2%2B8BslCsa8%2BRP%2BdLuEdiPwd5Ser3SVmDVJV6g3ELiV938IPk6xKJ%2FfUhqSJ48g1ATs2vXzFodGP2X7HU6QBfER4MHHU%2ByEGOwLIUN%2BXO80e8aM79vt9RddxjqzzKuUhRJlx13jV6Qg0BaglGUcw2I83dqVwq8x%2FURk5RDMOQ31cZEpvz37U2LJI0&X-Amz-Signature=24a0e2c3191c005bd3750cf7a828c6296fc4566010482314ec1dc8f84dc0a1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

