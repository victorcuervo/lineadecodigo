---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUFY6GL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe%2FS%2FpLiZZZ8MEi4VAsPtKRhIYeRicLGSbuG%2Bi1%2BLlKgIhANHNsQTiTper7%2BUjqp%2BSUQQ1keynCANWj8jvjw4BR81YKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy%2BdVzcU4PHbtNo9Eq3AM0GKF5T90ZINjJ4zjLWUUKjC8%2FB0gSMynJgmm6Dg2s147PlShBWYUeTCa1Odwn88ozRumOaA75He6SEVEqTH%2Fb5bTWJCcCgajWVPb2OKCtCAKuXMbVyNVmgqqzKuS5TlpJng%2BKLf8tZQRWjFjw4TmtVzNNrn0tgd%2FBAyCdl0lBPa3057qN5cyEE0%2Bc%2FCK51957xWGZ%2FzaFvJM6gQugEe0z41EUB7rXPaLOFvehAyTLqvCiCFskxyVFmut3jWRG6bah42Mf1hcrtwPq10dmOPc74qxsJ9ytnNz%2FZPgbefO4ZmzDNmjSMF8TLmFX9XgI3OZ5a5up5XmUaud2Z7A89eSBe0smqcon6E8%2F5H%2Fo%2Fv5Gp447v9drnSg787L%2Fx4%2FZlgfJXJX4hH1vGvg4aSYFmu75c82zIx%2BuZg1FkPMjOLBSmzla64cMFAaPoLkFJ9twOm0IPzY2IXxfj1dsKKgYdkSUaQFtCzeDJTNLGJn1heP%2B1UHsYcWfZhfm8DjZ%2BKxEzFovB8nsZorCdR3GepH4EyFLN7XzvjxWeFgnJPkZOWyIMxYSzeibWGcULPLs6Ys7i%2BAgmtBHxfRJRI8%2BEgnA6I1ZPap6vU7ciw3iDhkLk8%2Fv3%2FOM2FZdzeAnSAzuaDDRx9fJBjqkAfMMUtSdSF38KXOKDbknEtLyFuqYyRsaW3UIZFLngq8FxGUhVO2Kg%2B%2BHO7a%2F2U5%2FJhZ1%2F1NDk42TdJ%2BEvLQqWnGL%2FM%2Bk2KenryY%2BozKe9F%2FJQnZOXBPcNlLkPP93KYq2jNGd4B9BGbGqbGRxGTNuMUvr%2FXQVlMZmKettJIykkizCcLi1MssYN4XBNnzt2wUWF1ob%2BhQQtHsC%2F2MpgbVym8i9ZFeA&X-Amz-Signature=cc93e52164e1ae7f4ef9e3a70596e318b557d462a1ece58a47671998730305b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCUFY6GL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCe%2FS%2FpLiZZZ8MEi4VAsPtKRhIYeRicLGSbuG%2Bi1%2BLlKgIhANHNsQTiTper7%2BUjqp%2BSUQQ1keynCANWj8jvjw4BR81YKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy%2BdVzcU4PHbtNo9Eq3AM0GKF5T90ZINjJ4zjLWUUKjC8%2FB0gSMynJgmm6Dg2s147PlShBWYUeTCa1Odwn88ozRumOaA75He6SEVEqTH%2Fb5bTWJCcCgajWVPb2OKCtCAKuXMbVyNVmgqqzKuS5TlpJng%2BKLf8tZQRWjFjw4TmtVzNNrn0tgd%2FBAyCdl0lBPa3057qN5cyEE0%2Bc%2FCK51957xWGZ%2FzaFvJM6gQugEe0z41EUB7rXPaLOFvehAyTLqvCiCFskxyVFmut3jWRG6bah42Mf1hcrtwPq10dmOPc74qxsJ9ytnNz%2FZPgbefO4ZmzDNmjSMF8TLmFX9XgI3OZ5a5up5XmUaud2Z7A89eSBe0smqcon6E8%2F5H%2Fo%2Fv5Gp447v9drnSg787L%2Fx4%2FZlgfJXJX4hH1vGvg4aSYFmu75c82zIx%2BuZg1FkPMjOLBSmzla64cMFAaPoLkFJ9twOm0IPzY2IXxfj1dsKKgYdkSUaQFtCzeDJTNLGJn1heP%2B1UHsYcWfZhfm8DjZ%2BKxEzFovB8nsZorCdR3GepH4EyFLN7XzvjxWeFgnJPkZOWyIMxYSzeibWGcULPLs6Ys7i%2BAgmtBHxfRJRI8%2BEgnA6I1ZPap6vU7ciw3iDhkLk8%2Fv3%2FOM2FZdzeAnSAzuaDDRx9fJBjqkAfMMUtSdSF38KXOKDbknEtLyFuqYyRsaW3UIZFLngq8FxGUhVO2Kg%2B%2BHO7a%2F2U5%2FJhZ1%2F1NDk42TdJ%2BEvLQqWnGL%2FM%2Bk2KenryY%2BozKe9F%2FJQnZOXBPcNlLkPP93KYq2jNGd4B9BGbGqbGRxGTNuMUvr%2FXQVlMZmKettJIykkizCcLi1MssYN4XBNnzt2wUWF1ob%2BhQQtHsC%2F2MpgbVym8i9ZFeA&X-Amz-Signature=d4c480e027d63d815324509af194641e21c4d42b46129ea8eb2155e6bb1362cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

