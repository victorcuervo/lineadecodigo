---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RVJZXP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEJ%2F4u5A6xPg6lFeElEptqSc30B7DhsTREgrXq%2BoKEGAIgfFoGZjNoG4mqrKoxsRLJMrbVyr95C%2ByBptkgR%2BTFh9cqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4Rqgexdi%2F%2BKfXLCyrcA%2Fj0EZhIwnp42fpW1sL0aYlsguKkdXNGETRIr%2FoNAM1dr88TrQZgBe1bcs9irX8GVTleIcvWkoD7VnQewYsKaYdyw9nlVKFXlyI1A1x8smYf02ui2AkT0NrOkqu%2BaemHaP%2BEhbxOphx8v6wyM2zsSsALYhks7FA0Xfrj0TF7mOOGoy4OzL74tfxVORR1Us%2FtsnPQExJcY1UEeVFLC8QTqXutJS50W4SG0haLDLUOZWiUVTcTAWapZuhsF%2BRaHdNRSLe7sMJurjD0QIgfV9jFF1kYhZnsJ6Wjr85XsEadjAwxV09iC3TS616o%2B%2FqfH9fCHoQTI%2BBEnrMofy1W8GSlGJbPURnMb5WJFEhXaADMaVYunIXaHWt5UbCFl7vd1mjYvskRIQUnpUE9zQPs2OYQXWn53p4XTo4JLGh4J94pUjXmmhBEZXVqv14RJtbJeRQ32LTy5e1%2B5YaRnjHdXiLBxgTXkKs%2BmUfoJg5BvAbbZcugkc5sgr%2FjrSwBH%2F2vgQs30iNES8IWvhHxLYyLzEUfMMcKgPDiWDR%2B5YlM%2BtDQJP8Dg%2Fef2ZzXiJ3FyiuP2aDLVBEba7GoAanIec7YxnDYIi1eL%2BZ6GddcPH8TqnTXBUa1CrYH014QfxKLNeFEMJ271skGOqUBqGVl%2FG9Xj2%2Bq%2BkAavQdba7ooOyn03pMuzjjk9BEdwoPPxUYHYQCiSY2ApxBLX8W83fPZYpOF8cXUB32JGcOVaHUyy6iwAm2ptflMfipi%2FWSKkJxDGSDgpDFM5QSyjBLcQtnGYSgAS8niKRa%2BozDtNsmG%2BvUu%2BuSkx26Au6%2Bl143UQViOYDOwQ7Btl0oLz%2BexU5aEhObz20i%2Fx%2BnYaJy6Z9I%2BURLI&X-Amz-Signature=7a1c2793a1b9c4dc4e9bb2b4732ee10b728fbddf65b3ac28cb83e0c1ba3aa0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RVJZXP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEJ%2F4u5A6xPg6lFeElEptqSc30B7DhsTREgrXq%2BoKEGAIgfFoGZjNoG4mqrKoxsRLJMrbVyr95C%2ByBptkgR%2BTFh9cqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4Rqgexdi%2F%2BKfXLCyrcA%2Fj0EZhIwnp42fpW1sL0aYlsguKkdXNGETRIr%2FoNAM1dr88TrQZgBe1bcs9irX8GVTleIcvWkoD7VnQewYsKaYdyw9nlVKFXlyI1A1x8smYf02ui2AkT0NrOkqu%2BaemHaP%2BEhbxOphx8v6wyM2zsSsALYhks7FA0Xfrj0TF7mOOGoy4OzL74tfxVORR1Us%2FtsnPQExJcY1UEeVFLC8QTqXutJS50W4SG0haLDLUOZWiUVTcTAWapZuhsF%2BRaHdNRSLe7sMJurjD0QIgfV9jFF1kYhZnsJ6Wjr85XsEadjAwxV09iC3TS616o%2B%2FqfH9fCHoQTI%2BBEnrMofy1W8GSlGJbPURnMb5WJFEhXaADMaVYunIXaHWt5UbCFl7vd1mjYvskRIQUnpUE9zQPs2OYQXWn53p4XTo4JLGh4J94pUjXmmhBEZXVqv14RJtbJeRQ32LTy5e1%2B5YaRnjHdXiLBxgTXkKs%2BmUfoJg5BvAbbZcugkc5sgr%2FjrSwBH%2F2vgQs30iNES8IWvhHxLYyLzEUfMMcKgPDiWDR%2B5YlM%2BtDQJP8Dg%2Fef2ZzXiJ3FyiuP2aDLVBEba7GoAanIec7YxnDYIi1eL%2BZ6GddcPH8TqnTXBUa1CrYH014QfxKLNeFEMJ271skGOqUBqGVl%2FG9Xj2%2Bq%2BkAavQdba7ooOyn03pMuzjjk9BEdwoPPxUYHYQCiSY2ApxBLX8W83fPZYpOF8cXUB32JGcOVaHUyy6iwAm2ptflMfipi%2FWSKkJxDGSDgpDFM5QSyjBLcQtnGYSgAS8niKRa%2BozDtNsmG%2BvUu%2BuSkx26Au6%2Bl143UQViOYDOwQ7Btl0oLz%2BexU5aEhObz20i%2Fx%2BnYaJy6Z9I%2BURLI&X-Amz-Signature=d6473781f421a572c2cfa48c89f0613f26842f2d6d752a23a4fb1938e1850bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

