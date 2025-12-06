---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3B72TO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAbzNR5KVnSwjc%2B3bYyuNFQ9A0rhmZ3FoLzZ7rIeNskgIhANEoibnwWweX3Wx96orza18KDX2104Q3GZbzfYl1fQacKv8DCHoQABoMNjM3NDIzMTgzODA1Igx%2BbRS84xhXbG0KuJsq3AMr0YSN6VyJShjaRptK2oRtLgQLhmb%2B1tI%2FJrospyXGidl0HMbhWtvaA%2F1pruliEsguuEK99JMS9j4XagZtO8rqZ7x3Oqa%2F05UfICw%2FcVmt1%2BoIPDLXv%2FyNX%2FNJwpgVRtItWmDyIgFokWf8mHKWUVarYX7qX2ekyN36XuuckPKtyrw5B7OAP%2B6im092U8UtgfTMis%2B41no1a4SywbnHbRbc%2BZFXfnvLjZUIhU87OEZ9gAjbLk6ae756hBSICBawYvhI8DRoCKhP%2F03Wo2otZSZE15fQlM0UaMHMd8YDRD%2B8A3avweHiCAL9wVbiFd7xcK38oT0ezoYI3tnc0S%2Fa5aeLWrF5xarB7FliIh%2FZTiKILBP4dfTM%2F0VikVDTKqi%2BeT0NdCXzIlASngBU%2BifQwRKmv9MwHeQXkInZ6fpjxd2estvymyEbM3aN1te7PZ8OYQ2v2N7EBrGkmVTlGaJ4M%2B0U9fPmBS%2BIKKmcaAvZaxWxce%2BfLU3RzEUX69ed65LSdytWNdb9xkI6i%2FYPxsO56M7pq3XS5YtJEj86o48L2JoGDe4TWUk9UCvsl1bhWGA4niZYaMJ%2FojFdIS0E7eBSx7GEefOkxVqd4tvRDwcqcY30wXU4bgTQaDSG%2BS%2B53TC%2Fy9HJBjqkAeQen%2BTiX5jWs06DSEl2QwNFho7OKkvboLzrmF%2FIWAk4LpYSI%2Be7ck8tmxFiZln9imFJJ3qUP4v%2FTBsPA1ARNpsJQ%2BMyufdE%2B%2FK15D%2Ba1UHxKKCepPjeyCVsQ7Dx0ZYA3iGbO6Gkaf%2Fz2JsASKkItQ%2FkNrcq5bnZMGBzL2pSlsxQXvbAYM9MMmgcQZeRGNYeyZNbxID6auTDczT%2FXl3EoDLC1%2FyJ&X-Amz-Signature=466eb1f486d5a3805ee8587b32076df67426802c6ceb230b5be411ca5e2dbffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B3B72TO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAbzNR5KVnSwjc%2B3bYyuNFQ9A0rhmZ3FoLzZ7rIeNskgIhANEoibnwWweX3Wx96orza18KDX2104Q3GZbzfYl1fQacKv8DCHoQABoMNjM3NDIzMTgzODA1Igx%2BbRS84xhXbG0KuJsq3AMr0YSN6VyJShjaRptK2oRtLgQLhmb%2B1tI%2FJrospyXGidl0HMbhWtvaA%2F1pruliEsguuEK99JMS9j4XagZtO8rqZ7x3Oqa%2F05UfICw%2FcVmt1%2BoIPDLXv%2FyNX%2FNJwpgVRtItWmDyIgFokWf8mHKWUVarYX7qX2ekyN36XuuckPKtyrw5B7OAP%2B6im092U8UtgfTMis%2B41no1a4SywbnHbRbc%2BZFXfnvLjZUIhU87OEZ9gAjbLk6ae756hBSICBawYvhI8DRoCKhP%2F03Wo2otZSZE15fQlM0UaMHMd8YDRD%2B8A3avweHiCAL9wVbiFd7xcK38oT0ezoYI3tnc0S%2Fa5aeLWrF5xarB7FliIh%2FZTiKILBP4dfTM%2F0VikVDTKqi%2BeT0NdCXzIlASngBU%2BifQwRKmv9MwHeQXkInZ6fpjxd2estvymyEbM3aN1te7PZ8OYQ2v2N7EBrGkmVTlGaJ4M%2B0U9fPmBS%2BIKKmcaAvZaxWxce%2BfLU3RzEUX69ed65LSdytWNdb9xkI6i%2FYPxsO56M7pq3XS5YtJEj86o48L2JoGDe4TWUk9UCvsl1bhWGA4niZYaMJ%2FojFdIS0E7eBSx7GEefOkxVqd4tvRDwcqcY30wXU4bgTQaDSG%2BS%2B53TC%2Fy9HJBjqkAeQen%2BTiX5jWs06DSEl2QwNFho7OKkvboLzrmF%2FIWAk4LpYSI%2Be7ck8tmxFiZln9imFJJ3qUP4v%2FTBsPA1ARNpsJQ%2BMyufdE%2B%2FK15D%2Ba1UHxKKCepPjeyCVsQ7Dx0ZYA3iGbO6Gkaf%2Fz2JsASKkItQ%2FkNrcq5bnZMGBzL2pSlsxQXvbAYM9MMmgcQZeRGNYeyZNbxID6auTDczT%2FXl3EoDLC1%2FyJ&X-Amz-Signature=0a68a7fce201defe1be37ce9b4147542b60ec3fcd8c592929906b09082fa09eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

