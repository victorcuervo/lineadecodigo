---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT4L7YRN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDusI1h1mz6eLu94mC0dL06T69LidkEmnQG5f%2Bv9GEZpAIgWwxEWEswEA%2BUK2IVr0nXlB8%2FOML%2BfkxGI3c%2FWzbUWX0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDE8%2BiTlpADUgXajqxyrcA9FAkj0UKw2adwZIF1lysv%2BV6rzhhkCi%2FmgCvhX4pIxHfINj4wB3Iv0akFWXnXWPLsalAnJbgUvfxRzlENzpmU%2BbjKvKeqnZ23DFKHtvse3B%2BodmeOdDDhQNVBUNEIjIvhHyTUt7mT0mCquOrL8tdRF43dMausyuLzCsGH4BeXp%2F2rBlatS06tmSwfs%2F6CPSO5Vc7gkOhnZIa%2Buw5T%2B6s7Z%2BbXwlRgMWHllAB4udRyU3XJ41j7SDciCEh78lqketJelg3E9QF65EuoFY9GkyGlXxZJ3UyamoF8m1qPZ0%2Baeg%2BhbeqqYp71va2gaU%2FwBiN1NZ%2BBZ9bIuOT6Nk4hg4dCs0%2FoU1k1KsPnCoOPP25xdjOaTI91XdKoaU9WQ0aXDvRm0YmDuMob3r8Iu3Z1akT9PLC7Mp0UsavrCkUjP7nlFy2Iq5EKPxLw3tbCunHIj6pSbBBvesMO3WXK1JrPcbmT7yNWDfqAhsgOY5ow6JsJ%2BDJs33pHGBqde0oC%2FgPtloL7d4zUig8FQHE%2FPyoLYe4p3odqEP0uMiQS2txIQmF32oaII0YYftWcuTi8ol%2FasYEBdWRMkGp%2FmrnIATJhecVxAVXsjkqACF5ieR5%2B2eY%2FaqWu4nhL88fp9DcV0AMMS%2BxskGOqUB4YssQY5PVfuOpoZOAMFtEItj347gGcJqlJ7Bx7IyLaa5WZxMs1il7ascRkYqO5Y9Ns0PR7XmR8kLrKcQeJBWL7kdgRos5d50GCVRtiyMsd55ftF9PbdHbhA9ZBr8aIkJSUAXrGKzeJc7haUGGUZRu8dg29RQaej55zrMDYHHnF%2FC0JrFgxguRIUIoQlVCx7B0jbYAdxSsQXtmNhpWiJqpUTfF4P1&X-Amz-Signature=f0906677b4eb701e9cbae63b5c9e34ecdcff6d3df07ba6dac2b4744640d8d63a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT4L7YRN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDusI1h1mz6eLu94mC0dL06T69LidkEmnQG5f%2Bv9GEZpAIgWwxEWEswEA%2BUK2IVr0nXlB8%2FOML%2BfkxGI3c%2FWzbUWX0q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDE8%2BiTlpADUgXajqxyrcA9FAkj0UKw2adwZIF1lysv%2BV6rzhhkCi%2FmgCvhX4pIxHfINj4wB3Iv0akFWXnXWPLsalAnJbgUvfxRzlENzpmU%2BbjKvKeqnZ23DFKHtvse3B%2BodmeOdDDhQNVBUNEIjIvhHyTUt7mT0mCquOrL8tdRF43dMausyuLzCsGH4BeXp%2F2rBlatS06tmSwfs%2F6CPSO5Vc7gkOhnZIa%2Buw5T%2B6s7Z%2BbXwlRgMWHllAB4udRyU3XJ41j7SDciCEh78lqketJelg3E9QF65EuoFY9GkyGlXxZJ3UyamoF8m1qPZ0%2Baeg%2BhbeqqYp71va2gaU%2FwBiN1NZ%2BBZ9bIuOT6Nk4hg4dCs0%2FoU1k1KsPnCoOPP25xdjOaTI91XdKoaU9WQ0aXDvRm0YmDuMob3r8Iu3Z1akT9PLC7Mp0UsavrCkUjP7nlFy2Iq5EKPxLw3tbCunHIj6pSbBBvesMO3WXK1JrPcbmT7yNWDfqAhsgOY5ow6JsJ%2BDJs33pHGBqde0oC%2FgPtloL7d4zUig8FQHE%2FPyoLYe4p3odqEP0uMiQS2txIQmF32oaII0YYftWcuTi8ol%2FasYEBdWRMkGp%2FmrnIATJhecVxAVXsjkqACF5ieR5%2B2eY%2FaqWu4nhL88fp9DcV0AMMS%2BxskGOqUB4YssQY5PVfuOpoZOAMFtEItj347gGcJqlJ7Bx7IyLaa5WZxMs1il7ascRkYqO5Y9Ns0PR7XmR8kLrKcQeJBWL7kdgRos5d50GCVRtiyMsd55ftF9PbdHbhA9ZBr8aIkJSUAXrGKzeJc7haUGGUZRu8dg29RQaej55zrMDYHHnF%2FC0JrFgxguRIUIoQlVCx7B0jbYAdxSsQXtmNhpWiJqpUTfF4P1&X-Amz-Signature=3d80fe280635251063831c05fefb0872e8fe63f013f681cca2a179706b7c3ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

