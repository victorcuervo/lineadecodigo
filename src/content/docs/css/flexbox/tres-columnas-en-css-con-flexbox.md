---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXXZSP2C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICboBWu91l54%2BaHVuBm6X3e9vWW89Xtrn6u3H2deo8%2BUAiEA6j8wWO3g2JLq3lBX%2B1GAp3ZfxXEpiDhiH989sGjXmOwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGlqjVGHbVSFxeKKSrcAyfBLA8ZYhodti95ScbpKgB%2FXptzW5cfqlWGz17U1zwtg0JvnNEaS8Jll3nPpCkt%2Fx231iwbLW4Fl1dcPai%2FGYzO6xk%2BR82n%2Fc9tumgLlXdNzA72egFg0h2AW5rR7Hjte6DOisntqrx%2BI2trHANUO%2FZpcx4VZY0JYYHq22%2FQBK0IpFl7fdCIVmFhu1qj3DVImkRDperehrSlRVwCYTzvYAUOkZTkgyH0ruea0jaSIrDnHHn3m3n1FRGTIMd1ookkKjXvcC7vPUK0zL7a9u%2FQr2n3EprfGg732h40B4fTRstZygqNSdtIbP9kumKIb4kKLVZ8HUAbXTg%2Fvf0Vl1N33Lpqb2z%2F629UFcsuuXrG21ScCw%2Bq6D7r1Kc0zO3oGCM6vsyZh2VRUUnlg%2B2nEJe7VWfCtG0SrtD77GFrqVQNZmV0eWyPjVtptjqh8mVOC7xzXYDGcG16yvuQ22be8gNKZQWFHTlTlLvV1qvt3virWvQe8NxT3lu3lCnttKW1Kiw7Of4kAIUTqScbepjyrNAm3xdQpL0aJzTIZSaUwVu8b54uA4e9YJypFpP46m2Rv83hLi%2Fy3MMYR3IlHU%2F9CYUNJ%2FLkOGNL08XYuJtwZlPCe3C4cTR5j7CEP1TVjFSqMLru2ckGOqUBOh8EeswhUiw8Y9TBAcbk%2FxWSnhjb5DT%2FkUo%2BFipoIOIIfCNrJXtEMfHJokMjQpOoI%2FjZIDVsiEDB2G13rYNwsETkMzQrgF3NGJfbI5LWpfCU9R5WJxcAw4vWedBjCAv3SqeTYnS%2FFQrnxK4jlW12KhsgpMsaLKqRdWTLT8QP%2FuzUvXiLRyq7L1CbXHCW4mLjJHE6JIo%2BY%2Bh%2BDuvuP9%2F3uulUfL0B&X-Amz-Signature=880878ebdff718ff27076070cf21aa3943bfdabc690cfe883b91c86f57c3e202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXXZSP2C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICboBWu91l54%2BaHVuBm6X3e9vWW89Xtrn6u3H2deo8%2BUAiEA6j8wWO3g2JLq3lBX%2B1GAp3ZfxXEpiDhiH989sGjXmOwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGlqjVGHbVSFxeKKSrcAyfBLA8ZYhodti95ScbpKgB%2FXptzW5cfqlWGz17U1zwtg0JvnNEaS8Jll3nPpCkt%2Fx231iwbLW4Fl1dcPai%2FGYzO6xk%2BR82n%2Fc9tumgLlXdNzA72egFg0h2AW5rR7Hjte6DOisntqrx%2BI2trHANUO%2FZpcx4VZY0JYYHq22%2FQBK0IpFl7fdCIVmFhu1qj3DVImkRDperehrSlRVwCYTzvYAUOkZTkgyH0ruea0jaSIrDnHHn3m3n1FRGTIMd1ookkKjXvcC7vPUK0zL7a9u%2FQr2n3EprfGg732h40B4fTRstZygqNSdtIbP9kumKIb4kKLVZ8HUAbXTg%2Fvf0Vl1N33Lpqb2z%2F629UFcsuuXrG21ScCw%2Bq6D7r1Kc0zO3oGCM6vsyZh2VRUUnlg%2B2nEJe7VWfCtG0SrtD77GFrqVQNZmV0eWyPjVtptjqh8mVOC7xzXYDGcG16yvuQ22be8gNKZQWFHTlTlLvV1qvt3virWvQe8NxT3lu3lCnttKW1Kiw7Of4kAIUTqScbepjyrNAm3xdQpL0aJzTIZSaUwVu8b54uA4e9YJypFpP46m2Rv83hLi%2Fy3MMYR3IlHU%2F9CYUNJ%2FLkOGNL08XYuJtwZlPCe3C4cTR5j7CEP1TVjFSqMLru2ckGOqUBOh8EeswhUiw8Y9TBAcbk%2FxWSnhjb5DT%2FkUo%2BFipoIOIIfCNrJXtEMfHJokMjQpOoI%2FjZIDVsiEDB2G13rYNwsETkMzQrgF3NGJfbI5LWpfCU9R5WJxcAw4vWedBjCAv3SqeTYnS%2FFQrnxK4jlW12KhsgpMsaLKqRdWTLT8QP%2FuzUvXiLRyq7L1CbXHCW4mLjJHE6JIo%2BY%2Bh%2BDuvuP9%2F3uulUfL0B&X-Amz-Signature=8abaf9eb1220d2014c7140ad78dae00869c2f41c21ea7729869ac1bbc07ce7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

