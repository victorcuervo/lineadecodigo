---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RKITXU4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRLUUFEqsVPQ7Zo%2FgNHfXNSkurSa0P85fkAoeQ2sTlyQIhALI3XpDXmP%2Fe7XnCxgT6vvQkqR8icY9zigROsV1xi4pwKv8DCHIQABoMNjM3NDIzMTgzODA1IgwvBaw4WJHqsmxUTiUq3APiZLBkGNQz%2FdLvmooOxbIyZ0Qi5o%2BPHaZSVpJ681yxBlA3zju3HFvptfAUvspg3GV8wCijuikSRRqoaUqszbTEH66sr8GhXS%2B%2FJofCjCushlvMIB%2FkENxBFiR0i5qicUW6mbBdVdCyyNAiGf9dzMxXVW5HWAgIhSqjkHtPLI%2FUrjHo7jAH2IYU0MpMF7Cww14A1SmuOTeoBSkviBMeJLNBnYyfXhodxDBwE7Y9R19Px%2BB1wPNuPAqTB8V156qdspw4Rbk4fIj9BlTww9ebPW6HaA14wocSLP%2Fkic9QdpV3h6a8vFAOWJp0NnbW8VJLJzDNGE9mRXT3dN7KSz5E%2BHWFgOsoFDqE1HIRaJGsZEOx5DzqetjN4KrnwGBA7v7XI13bY%2Ff%2FZBjKymy0lYwVksYQ%2BrfHxq50BLhM5W8rEyC5Br1ldswWrtQfEk4KZuseQEdEdOIYw9rKhj4myp77%2FhRTglqafkzmOxxeH3EfEwAvDUKN1wuYlq81GW7AA0sq2MxIQk64FSG34n9ZHljL14jlo0p0p8%2B7k2ji99Xm51fgnuXrHGqA6nzkJ63B%2FX4%2BLj4IaIkD61IlOX%2FVZFWISK%2F8a%2BSCO%2B8PCOxHnbt4dhrlvJZe3ewmYn9eDP2JrTCJ%2FYfKBjqkAZ6IKySQaTXmx6bVrdpDXfhqzJO%2FOIQpumb7zwReJR1P0AtQWeI7bjAWTnzwNvlTsDMzZq447ywE0O3SrqZmkjQT3MT11vl0diMdQulPoSed9qxKxZwEBh2ARUster6pYfy%2B6wq16TlZSGhDS8mJaoO5%2FnckrQx930lm7tOA%2BN17wHJ2wC3ouU%2FBirzl2jYgyrL7jOg2KhCL4BacVlEOMhEYy4q1&X-Amz-Signature=f6e862f0c06619ab0aaec637d5f6e604b4a1221357095b7771f234ea8591c33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RKITXU4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRLUUFEqsVPQ7Zo%2FgNHfXNSkurSa0P85fkAoeQ2sTlyQIhALI3XpDXmP%2Fe7XnCxgT6vvQkqR8icY9zigROsV1xi4pwKv8DCHIQABoMNjM3NDIzMTgzODA1IgwvBaw4WJHqsmxUTiUq3APiZLBkGNQz%2FdLvmooOxbIyZ0Qi5o%2BPHaZSVpJ681yxBlA3zju3HFvptfAUvspg3GV8wCijuikSRRqoaUqszbTEH66sr8GhXS%2B%2FJofCjCushlvMIB%2FkENxBFiR0i5qicUW6mbBdVdCyyNAiGf9dzMxXVW5HWAgIhSqjkHtPLI%2FUrjHo7jAH2IYU0MpMF7Cww14A1SmuOTeoBSkviBMeJLNBnYyfXhodxDBwE7Y9R19Px%2BB1wPNuPAqTB8V156qdspw4Rbk4fIj9BlTww9ebPW6HaA14wocSLP%2Fkic9QdpV3h6a8vFAOWJp0NnbW8VJLJzDNGE9mRXT3dN7KSz5E%2BHWFgOsoFDqE1HIRaJGsZEOx5DzqetjN4KrnwGBA7v7XI13bY%2Ff%2FZBjKymy0lYwVksYQ%2BrfHxq50BLhM5W8rEyC5Br1ldswWrtQfEk4KZuseQEdEdOIYw9rKhj4myp77%2FhRTglqafkzmOxxeH3EfEwAvDUKN1wuYlq81GW7AA0sq2MxIQk64FSG34n9ZHljL14jlo0p0p8%2B7k2ji99Xm51fgnuXrHGqA6nzkJ63B%2FX4%2BLj4IaIkD61IlOX%2FVZFWISK%2F8a%2BSCO%2B8PCOxHnbt4dhrlvJZe3ewmYn9eDP2JrTCJ%2FYfKBjqkAZ6IKySQaTXmx6bVrdpDXfhqzJO%2FOIQpumb7zwReJR1P0AtQWeI7bjAWTnzwNvlTsDMzZq447ywE0O3SrqZmkjQT3MT11vl0diMdQulPoSed9qxKxZwEBh2ARUster6pYfy%2B6wq16TlZSGhDS8mJaoO5%2FnckrQx930lm7tOA%2BN17wHJ2wC3ouU%2FBirzl2jYgyrL7jOg2KhCL4BacVlEOMhEYy4q1&X-Amz-Signature=fb595f30f3f7a342706418e7dd613d4c0542b54949431dada97449eb0c43aab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

