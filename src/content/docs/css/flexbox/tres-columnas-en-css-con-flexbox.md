---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASQOUJF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjXHOXAyBEA1LP5vdIsl4QJQPNkymENK4GPRdN8GnIWAIhAL3uWJV1Tqa7r45kV%2FelZe5yW7kRLaALtBiFhvh2UEtKKv8DCHUQABoMNjM3NDIzMTgzODA1IgyBQiKSIORy8AhYd3sq3AOFnKfWEi5NinoLcQP2g1VjLPB3Ihdlb9RNuCG19Lm6%2Fi2UF45qufkT32RywQakDbG5Fi561JmIscWXZIBrKZNZV%2FHHphhtFHh8hEHRaAycVM5k%2BADKaqHeWmj53eQ7DWu9fNJby0vxi29%2FjPxx7imZPJu8F2O1ng%2Bn7dJ19pDfwJIDFnDHpush8YquQ%2B7e%2BVL6yLVAfLav190bthlVYQ2URpdOLab%2FdHP7gFuDMLKiEu3DdP5eTGUiuC%2BOGDTigk4F6kLxFfEh1SWqdmIKhrhQ8DWu6dJapudqCQDE2cdGTz1Bg5TlCr7jKWi12lLHRLjRBp%2FFroibj4p2JmnWYq0oGwy%2BYi1d6Hj7eLT27K8yKDNiFdvQGDPd6d6%2Ba2gIGLbqvXmzN5aiSnTzZzWpRK51vL5xTALs3chDtAG095krbIG8Qh%2BXOC5WoX4F8uqM5sEX%2BKiUXutC4lGUM7xVGKLoKGIkpOBrx%2FhDZsokEVhoY40ejUFglJaDlDwncJArL4CoQ4wCvDFEhit9WMTJEp2oBBDnwdappZjTQLu4h9L%2F63RZ%2B3JuqM%2F%2BeLUwpEPpQ06G9ONxD2HNRBQzseCryBiefEDiT0UMzZXqMbcBN91KhO%2B%2B230xvOJk2nmMxzCBp9DJBjqkAeWNLGCa68vfBbje5nBTohZ%2BuzZqFR60YGoZ9kUplboQTJkoE4uKe2bBWLxHs%2B2jKudyto2hx1SJ3tJhduMJoV2zxSFj4JJPry2inAEs%2FnLZIwiEA24sj%2FwbTemXkiN7e8ZUmLUmlgRFeM93Yjzy7phkrf9ynLHx9nk3Y4s6RByAAq5Sr2iY47hd4HFmHt2onJKIJZRJHAd9TDWbrK7TQCQZ0UXj&X-Amz-Signature=3e31a6678546b0a95a843ffa195d501dc18cc8a29506a74d90de3130f28b4b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ASQOUJF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjXHOXAyBEA1LP5vdIsl4QJQPNkymENK4GPRdN8GnIWAIhAL3uWJV1Tqa7r45kV%2FelZe5yW7kRLaALtBiFhvh2UEtKKv8DCHUQABoMNjM3NDIzMTgzODA1IgyBQiKSIORy8AhYd3sq3AOFnKfWEi5NinoLcQP2g1VjLPB3Ihdlb9RNuCG19Lm6%2Fi2UF45qufkT32RywQakDbG5Fi561JmIscWXZIBrKZNZV%2FHHphhtFHh8hEHRaAycVM5k%2BADKaqHeWmj53eQ7DWu9fNJby0vxi29%2FjPxx7imZPJu8F2O1ng%2Bn7dJ19pDfwJIDFnDHpush8YquQ%2B7e%2BVL6yLVAfLav190bthlVYQ2URpdOLab%2FdHP7gFuDMLKiEu3DdP5eTGUiuC%2BOGDTigk4F6kLxFfEh1SWqdmIKhrhQ8DWu6dJapudqCQDE2cdGTz1Bg5TlCr7jKWi12lLHRLjRBp%2FFroibj4p2JmnWYq0oGwy%2BYi1d6Hj7eLT27K8yKDNiFdvQGDPd6d6%2Ba2gIGLbqvXmzN5aiSnTzZzWpRK51vL5xTALs3chDtAG095krbIG8Qh%2BXOC5WoX4F8uqM5sEX%2BKiUXutC4lGUM7xVGKLoKGIkpOBrx%2FhDZsokEVhoY40ejUFglJaDlDwncJArL4CoQ4wCvDFEhit9WMTJEp2oBBDnwdappZjTQLu4h9L%2F63RZ%2B3JuqM%2F%2BeLUwpEPpQ06G9ONxD2HNRBQzseCryBiefEDiT0UMzZXqMbcBN91KhO%2B%2B230xvOJk2nmMxzCBp9DJBjqkAeWNLGCa68vfBbje5nBTohZ%2BuzZqFR60YGoZ9kUplboQTJkoE4uKe2bBWLxHs%2B2jKudyto2hx1SJ3tJhduMJoV2zxSFj4JJPry2inAEs%2FnLZIwiEA24sj%2FwbTemXkiN7e8ZUmLUmlgRFeM93Yjzy7phkrf9ynLHx9nk3Y4s6RByAAq5Sr2iY47hd4HFmHt2onJKIJZRJHAd9TDWbrK7TQCQZ0UXj&X-Amz-Signature=3b1a07b0e7e3d2c43739f7adb30f34b8fac978b60a11dd23714e60e4f5f77ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

