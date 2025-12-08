---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NGRZWLX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLgJf9me2nqsCvvChSDaOvriuVNua%2FhCn0iYdw7GeOdAiEA%2Fh4Fj6aPETX8BDNAWPwkJzeKAKT9Q3C6NiNR%2FQN2BkkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnAVTR8gVJAqCQgFircA9p3tT3SJ25H3Z1FEC%2B%2FI3P3A%2FprRroAQ82%2BtGgyDEsn4halpxFxrdXoezg7IPsG1ZzEVRqztS%2FxYVBniQBrIxiXWAFsQsWxtw4byy95%2FacITXtDdKyTp%2FkUvZ7JvqIM6wYgWOcHw7E8%2BVWMRSOVLqaWG5suBDIZ%2Fl3GDToRYfk%2B1kdu7i2RcRYjMbOIbQu%2B6FV3NUESThH0DM%2BBPnLzVopp4kA20VHqQ7Oa55fzDOlYrMvsLc8sy5YuDs451EDzhANzj9XjMZLxOlkG34lEmZapZPOYR0SOw%2BeJNuolHtBnLWuh%2B07qOz%2FveE7RVu2%2FeFKjhMzte8WZqAh6a%2BHVGK7pekQwApkChXio51RKjt0JZ46u0nndhtgRv8Fk%2FzNGnEGo9ggPCQ5P2zAMq8xspeubfC1Jctegect3bKnO8e6iVsOGMSuJZ9hjkyR1vbtB8lrNzPduAs%2BrZ1SFX5S%2Fj10tFetfFs7Ap%2BPMEERJ%2FcE7KXKOb8SJB92q0ueh2ZNYciwfAHpd4U6xLgqvTZlj2AyvACMxDw0UWk2%2FTFq7RBuckzYyCLmXmlOkVmdNm0ZYYpAk1r9A%2BJwq%2BT31z7eOTKmOu1bg3JBxl49jte30dxiA8VtCxGyE%2Bg%2BUg7OZMIDd3MkGOqUBdniq%2Bdguj3Qn0uck1phfd50GsFP0HqBWr1JCNNOEobBe5FwhRjPMYCKpghuV37wV9jveNKFi5SGGO9zFVuDuIkcplrR8mR%2FNCgY2gUKAIK1Jei%2FZV4Fyxy48%2Fdl84PCJhBXuwR%2F41vgM8gTuFHbUyKRGMi1unlHjjX%2FM%2BRVO6wHSNWCeYQXp%2BFLM7itiAvFtdfjZ7jR0zwyWM9%2BzRPD8P4rkWJtm&X-Amz-Signature=84f167306743d7dac1072e8943a1cac6c84e7411e379dec84eeb7eea8fcc88ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NGRZWLX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLgJf9me2nqsCvvChSDaOvriuVNua%2FhCn0iYdw7GeOdAiEA%2Fh4Fj6aPETX8BDNAWPwkJzeKAKT9Q3C6NiNR%2FQN2BkkqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMnAVTR8gVJAqCQgFircA9p3tT3SJ25H3Z1FEC%2B%2FI3P3A%2FprRroAQ82%2BtGgyDEsn4halpxFxrdXoezg7IPsG1ZzEVRqztS%2FxYVBniQBrIxiXWAFsQsWxtw4byy95%2FacITXtDdKyTp%2FkUvZ7JvqIM6wYgWOcHw7E8%2BVWMRSOVLqaWG5suBDIZ%2Fl3GDToRYfk%2B1kdu7i2RcRYjMbOIbQu%2B6FV3NUESThH0DM%2BBPnLzVopp4kA20VHqQ7Oa55fzDOlYrMvsLc8sy5YuDs451EDzhANzj9XjMZLxOlkG34lEmZapZPOYR0SOw%2BeJNuolHtBnLWuh%2B07qOz%2FveE7RVu2%2FeFKjhMzte8WZqAh6a%2BHVGK7pekQwApkChXio51RKjt0JZ46u0nndhtgRv8Fk%2FzNGnEGo9ggPCQ5P2zAMq8xspeubfC1Jctegect3bKnO8e6iVsOGMSuJZ9hjkyR1vbtB8lrNzPduAs%2BrZ1SFX5S%2Fj10tFetfFs7Ap%2BPMEERJ%2FcE7KXKOb8SJB92q0ueh2ZNYciwfAHpd4U6xLgqvTZlj2AyvACMxDw0UWk2%2FTFq7RBuckzYyCLmXmlOkVmdNm0ZYYpAk1r9A%2BJwq%2BT31z7eOTKmOu1bg3JBxl49jte30dxiA8VtCxGyE%2Bg%2BUg7OZMIDd3MkGOqUBdniq%2Bdguj3Qn0uck1phfd50GsFP0HqBWr1JCNNOEobBe5FwhRjPMYCKpghuV37wV9jveNKFi5SGGO9zFVuDuIkcplrR8mR%2FNCgY2gUKAIK1Jei%2FZV4Fyxy48%2Fdl84PCJhBXuwR%2F41vgM8gTuFHbUyKRGMi1unlHjjX%2FM%2BRVO6wHSNWCeYQXp%2BFLM7itiAvFtdfjZ7jR0zwyWM9%2BzRPD8P4rkWJtm&X-Amz-Signature=315d6b1fd6441fcbe1cae305c30a5be52e9ba757b374c3abaf783b43243f0afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

