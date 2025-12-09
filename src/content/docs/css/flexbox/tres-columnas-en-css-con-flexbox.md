---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AHYQIJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANQDLmubMlg26xM%2Fe9DzkzQMuT86Nva2yx2Oh5sytn7AiAiSndGy6ei4K9neEPBp7X%2BnwACsNQAT3%2Fh9xZHpFaZuyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQrXPNct6bpuizCggKtwDJgmc0AE9S%2By7zWlYMmak12Mp4rL7CNjVHt%2Fnr9ktyAce2Ls6TfKZ7kc8pcJfxfIDlaMTklGEIGfw5%2F5wNXf7gp3TPREHhFImFqCaf3h70kDwcsbu9lyyitVzrbLT47n4PG%2Fb1a9g4g%2BndOdSzmpfFGbUPC5GdGIIywfJTlnI7uy2hhnBV1kQ001nzV7bNquQV%2FfjknUzljXe1rGyXJ5qVDeVz1MbILGglo2ERKMANXQvefarpqozLGD%2B%2B98o8Z1UhMM8U8VK5zgK2wieEpFx0OlDkI2Uun4dLY9FBtG%2F6PVf67lExXC9SJRQaAB0asB13fxvvmr2x%2BL%2FqHkGBXdmIuP6ZuslOjCEjx4EzGhVaM%2FEBp4n5vPUu8daECqASRjLraoP%2FDm0JiEzofhbvmvrp%2B2EujH6Lfqm0KZCFvzjdt5fEGeUBCkrvFoZ%2BEkSyY8%2F6rQ0h%2BMik5%2BeVPekXcR5DirOKC4Amyhm7lE5ZNtvheH%2Bzy5tft7n5LwhY1sxm2adDG6EkBX2R67GHO7qAG9lC3oqHDe3lg4h1CV7rd%2Bz7mCxYm%2FVXK5%2BFIwoFSYPXCSkAQT8QePgLw4vsGfzWwSoq2eU0QqVxxBZ7qBz9xxqGlj4KfzWiMFE2uU5jkkwjeXeyQY6pgGH3pWRI43zVjT0LSZZzI%2FY3tXWOQY%2Fx0SrOrh18utbMqt2yCe2zDIZDYtGk4K7RTbS0gDKLU0dzWXiR5m0Krpw7F5yRfe0lLXY8PE9pN33uLpgm6DJhrfnzBaeV0yHETH6vCci0hcR2zQrzp1VTMEssKfFU1Z9RZOAYTkmP6cDiBt7gw4LD41xNmG4CQFYrb4Xe68YxoSoqZwZjea5Z2diNPFXB9Yp&X-Amz-Signature=a5f31fc753fceb5ffa20ec69c1db13d96e18aa245bab9ce5ea3d6e31aaaae3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646AHYQIJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANQDLmubMlg26xM%2Fe9DzkzQMuT86Nva2yx2Oh5sytn7AiAiSndGy6ei4K9neEPBp7X%2BnwACsNQAT3%2Fh9xZHpFaZuyqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQrXPNct6bpuizCggKtwDJgmc0AE9S%2By7zWlYMmak12Mp4rL7CNjVHt%2Fnr9ktyAce2Ls6TfKZ7kc8pcJfxfIDlaMTklGEIGfw5%2F5wNXf7gp3TPREHhFImFqCaf3h70kDwcsbu9lyyitVzrbLT47n4PG%2Fb1a9g4g%2BndOdSzmpfFGbUPC5GdGIIywfJTlnI7uy2hhnBV1kQ001nzV7bNquQV%2FfjknUzljXe1rGyXJ5qVDeVz1MbILGglo2ERKMANXQvefarpqozLGD%2B%2B98o8Z1UhMM8U8VK5zgK2wieEpFx0OlDkI2Uun4dLY9FBtG%2F6PVf67lExXC9SJRQaAB0asB13fxvvmr2x%2BL%2FqHkGBXdmIuP6ZuslOjCEjx4EzGhVaM%2FEBp4n5vPUu8daECqASRjLraoP%2FDm0JiEzofhbvmvrp%2B2EujH6Lfqm0KZCFvzjdt5fEGeUBCkrvFoZ%2BEkSyY8%2F6rQ0h%2BMik5%2BeVPekXcR5DirOKC4Amyhm7lE5ZNtvheH%2Bzy5tft7n5LwhY1sxm2adDG6EkBX2R67GHO7qAG9lC3oqHDe3lg4h1CV7rd%2Bz7mCxYm%2FVXK5%2BFIwoFSYPXCSkAQT8QePgLw4vsGfzWwSoq2eU0QqVxxBZ7qBz9xxqGlj4KfzWiMFE2uU5jkkwjeXeyQY6pgGH3pWRI43zVjT0LSZZzI%2FY3tXWOQY%2Fx0SrOrh18utbMqt2yCe2zDIZDYtGk4K7RTbS0gDKLU0dzWXiR5m0Krpw7F5yRfe0lLXY8PE9pN33uLpgm6DJhrfnzBaeV0yHETH6vCci0hcR2zQrzp1VTMEssKfFU1Z9RZOAYTkmP6cDiBt7gw4LD41xNmG4CQFYrb4Xe68YxoSoqZwZjea5Z2diNPFXB9Yp&X-Amz-Signature=c71f1488100bed26a0e3c095ad5a9bbb86a02110881455af466a11e186c46076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

