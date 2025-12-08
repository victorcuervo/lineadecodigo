---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624W4F7BG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDatoTcTeF0QurYBam0%2BWrMATj%2FbX8qWNNs%2FAaDFsvnhgIgdFfVtDivk%2B60wAqtsan7P5mOMgjxlpUGb%2BSZOLn%2FdP4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH5hSAuqWhdFpR9iyrcA1MLgYaWMhbZat52qlsQmwTSNUNQ83Pke8nqSu%2FPm8J9gsmVwlw29DH3SD66rabBAMvXQzaRiPIETbrLmCcqLwh3mc1Q3tmYm7HYG80JFe8pHAwI%2BKlmTwkfcQ7DArGGAOuAi5vv2w7izAFkQTVd8jCOFvFHYiu2cP4tDa%2FQGDyorQ9R6vQBUOfxM9d8lgyF7DmraANaAW8Ti0bcbuYKcNnfbj587%2BMqVvY8ACgXiE1T0JQBXm8YFjN4hnOFjZh1kE8YnImDk6LzRbV7i6tQ%2FilLY7S40lo9M5xFrLErvPZhN%2B90UWN3ZieGvZZkbiLR%2FmlYnIBJbqyJp30G7TJ3O4b48nH3hTJferqZ%2FO1rOCz50ISoN%2FSyqYmQPSNflUlrfu%2B9OJlLsu5axqZ0qF3xR%2F6zPEJVZdmQ7NIwFvCppzGTttaAFkNAXNb5ExOwOHv%2F1%2B6zdZvVcwMwfITIPtoKaK5clQu0Q6z0DAXF4ZfXsFVgHOi%2FBYRNC9tsiPwLluk6Kugd7HTMunPIbcJkq0Jxq1B6x5M9Ag%2BneAVfAkL5vT39gorKfj8L7XK4M9ARSkHVO9XEibecQh%2BPQl6fehubZGSQLdsjIIXPdJeiB9sQo%2BwJ3xUN%2Bo6u5rtU8zY%2FMOTt2ckGOqUBKeuyyGM6DWq99bNPGmhpzNA0cJUU6E8pH7qzO5WZyYVlt%2FS%2FZEtror4wreeK8z5ZyHv%2F%2B5vK5UAZFi9A7a%2B1MzswTV6WySpxDmdmNW%2BbCTxIQq6ENVWJ13fhydxOsG2bthBNXdfcr5s2NjI9cpl6Ua5wb4k8CaxDxEYssxEU5W5kztw6pvf6Bb7Uy0UPNrlgvLiPr%2BROM7r4xTZqBL4Tx84r4wBB&X-Amz-Signature=4aedab944f4d00dd81d8f47ab47ad710d24482d85004fea18004e002717a2168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624W4F7BG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDatoTcTeF0QurYBam0%2BWrMATj%2FbX8qWNNs%2FAaDFsvnhgIgdFfVtDivk%2B60wAqtsan7P5mOMgjxlpUGb%2BSZOLn%2FdP4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFH5hSAuqWhdFpR9iyrcA1MLgYaWMhbZat52qlsQmwTSNUNQ83Pke8nqSu%2FPm8J9gsmVwlw29DH3SD66rabBAMvXQzaRiPIETbrLmCcqLwh3mc1Q3tmYm7HYG80JFe8pHAwI%2BKlmTwkfcQ7DArGGAOuAi5vv2w7izAFkQTVd8jCOFvFHYiu2cP4tDa%2FQGDyorQ9R6vQBUOfxM9d8lgyF7DmraANaAW8Ti0bcbuYKcNnfbj587%2BMqVvY8ACgXiE1T0JQBXm8YFjN4hnOFjZh1kE8YnImDk6LzRbV7i6tQ%2FilLY7S40lo9M5xFrLErvPZhN%2B90UWN3ZieGvZZkbiLR%2FmlYnIBJbqyJp30G7TJ3O4b48nH3hTJferqZ%2FO1rOCz50ISoN%2FSyqYmQPSNflUlrfu%2B9OJlLsu5axqZ0qF3xR%2F6zPEJVZdmQ7NIwFvCppzGTttaAFkNAXNb5ExOwOHv%2F1%2B6zdZvVcwMwfITIPtoKaK5clQu0Q6z0DAXF4ZfXsFVgHOi%2FBYRNC9tsiPwLluk6Kugd7HTMunPIbcJkq0Jxq1B6x5M9Ag%2BneAVfAkL5vT39gorKfj8L7XK4M9ARSkHVO9XEibecQh%2BPQl6fehubZGSQLdsjIIXPdJeiB9sQo%2BwJ3xUN%2Bo6u5rtU8zY%2FMOTt2ckGOqUBKeuyyGM6DWq99bNPGmhpzNA0cJUU6E8pH7qzO5WZyYVlt%2FS%2FZEtror4wreeK8z5ZyHv%2F%2B5vK5UAZFi9A7a%2B1MzswTV6WySpxDmdmNW%2BbCTxIQq6ENVWJ13fhydxOsG2bthBNXdfcr5s2NjI9cpl6Ua5wb4k8CaxDxEYssxEU5W5kztw6pvf6Bb7Uy0UPNrlgvLiPr%2BROM7r4xTZqBL4Tx84r4wBB&X-Amz-Signature=e35cd9924c560341de658e3bf410f929ac9d619cd627e6626c9f2912f1c51ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

