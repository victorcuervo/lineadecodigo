---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H5V63CQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDP0VXl%2BDsC%2BHP8PtVwv8ikpnqQhT406S6ooEm87JGfGgIgER3w%2Fb4NxY10k%2Ff%2BhmigutG1X8PZRLWnj4QfPSemfEQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMFLWpomCSR1v5JnyCrcAwJ3FmMfWfZtr9pi4evWExhxPbX5h7Fapi%2B5Bfj0O5TOKVJcnmax3ygncRDzlN3HPzx8Y1bnEF9ZUYnUoECQEcb5%2BKxi9XYQANk2v%2FGVlCDsj0wryEmHHBNO0ddE4t1qIhZTfcSauxqAwpsA%2Bpu2PSJmxAa9DHyukELXosUfi%2Bg83TV%2FZLS1ap9%2B%2BJs6LiwuoZk5mIXuLC1zjESPi08%2FSsWzXjoV45qciOJ5C2DAlkYjpRzd1F8i0uSYXrm3DMYEo7GAc9kyyJwqaCxK61WPFNm%2Frd4VwBHm85QbDtNw21amqHZ2KHiffwISPbBJjTm4PYjbwxRahNaI88EcxsXb7WwAbVfm3SfW85spwFY7aOR6TIYdnOW4HVancLxndZoreYb%2B8xQDIeJ4d8qhe5Iayfd46ZiydtviJ0q10qbEHnGQ2vrcK4iEb07qRR6smqF%2B9nzugdgIF01hBjwSOXIz5HFQuEeb2gIcln%2F9K6GtKamECAZPR5on4l8J%2BzBwJy9fliCLYieSQ5LLP15En0I2N2GUY5gBZpxsgB4MSr9hi0zgtqOyi9WBr4%2BJkzcqIJZotDhuxZkM3cKOYBCgKgMdjM%2Ft9nn%2BwALhNa4RltXDTXhOe%2B9XtC8Ba7273beCMJG0w8kGOqUBdINuajbZHEPyrVOLSFdC2F%2BCQqtRyK0pGLnZVkBYfuwMF1QruzxiPxsvWwtiTKe1u%2ByJHAN7AXKExdXRcP0enNOAofZaaRo%2BZcXEMMc4W%2B0R8O7uuh5ICrxfohsOS9QTrKU5Ml2WEqfD6T6MpsEsGUUK8vTtYfkU5fm1uoFe97VQOrBh9cxemEy7M85FKj7Com3hWBw%2BEkQ8zTm2xLt9rj0G37aD&X-Amz-Signature=6776d4ac4fa46d7460b2fef55df3eb195aa11fddb6ecd4053c036d2ea69fb3ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667H5V63CQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDP0VXl%2BDsC%2BHP8PtVwv8ikpnqQhT406S6ooEm87JGfGgIgER3w%2Fb4NxY10k%2Ff%2BhmigutG1X8PZRLWnj4QfPSemfEQq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDMFLWpomCSR1v5JnyCrcAwJ3FmMfWfZtr9pi4evWExhxPbX5h7Fapi%2B5Bfj0O5TOKVJcnmax3ygncRDzlN3HPzx8Y1bnEF9ZUYnUoECQEcb5%2BKxi9XYQANk2v%2FGVlCDsj0wryEmHHBNO0ddE4t1qIhZTfcSauxqAwpsA%2Bpu2PSJmxAa9DHyukELXosUfi%2Bg83TV%2FZLS1ap9%2B%2BJs6LiwuoZk5mIXuLC1zjESPi08%2FSsWzXjoV45qciOJ5C2DAlkYjpRzd1F8i0uSYXrm3DMYEo7GAc9kyyJwqaCxK61WPFNm%2Frd4VwBHm85QbDtNw21amqHZ2KHiffwISPbBJjTm4PYjbwxRahNaI88EcxsXb7WwAbVfm3SfW85spwFY7aOR6TIYdnOW4HVancLxndZoreYb%2B8xQDIeJ4d8qhe5Iayfd46ZiydtviJ0q10qbEHnGQ2vrcK4iEb07qRR6smqF%2B9nzugdgIF01hBjwSOXIz5HFQuEeb2gIcln%2F9K6GtKamECAZPR5on4l8J%2BzBwJy9fliCLYieSQ5LLP15En0I2N2GUY5gBZpxsgB4MSr9hi0zgtqOyi9WBr4%2BJkzcqIJZotDhuxZkM3cKOYBCgKgMdjM%2Ft9nn%2BwALhNa4RltXDTXhOe%2B9XtC8Ba7273beCMJG0w8kGOqUBdINuajbZHEPyrVOLSFdC2F%2BCQqtRyK0pGLnZVkBYfuwMF1QruzxiPxsvWwtiTKe1u%2ByJHAN7AXKExdXRcP0enNOAofZaaRo%2BZcXEMMc4W%2B0R8O7uuh5ICrxfohsOS9QTrKU5Ml2WEqfD6T6MpsEsGUUK8vTtYfkU5fm1uoFe97VQOrBh9cxemEy7M85FKj7Com3hWBw%2BEkQ8zTm2xLt9rj0G37aD&X-Amz-Signature=c76dcd3ec172221fee6ce179e31863ed366c9db0dfb43ca518886f99efd1b5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

