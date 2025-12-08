---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZKZUCL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfFxCk66AovkekAZEO3VFYRJFruiFYmj%2B3CjUulLlI2AiBST6qMqzu0qnAln8w2MNa5JP2rg4NafbE2ESTmmp6EsSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsFh4z3djAi%2BkGEL3KtwD9yTcVnSFyjhUpb6DltU0%2FWR9O4H22kqEJ4w3VqbbBKdTUCOS%2FFskzPYkrWKkb3WorisKMhh6blvydAvIqJax17rT1U9v3eEokWe%2FPPjhwwbBWjBC6Ft2BRnw3e4VUSSryrSegl7DIPS1SGcfL2NjbRVnoHMJFnixWPCxSKGfTuJ27HzTrLxcG1cr1DXaEb9X0qdGpHq%2BNm%2FRFzk4Z8Aj%2B2HZQKy2aYCIpIs45h2WW59mAB6Ia1khkUpjLwwOwLJXYMfBmNCRVQqAk71h3ADMoaHmLxhmDrZih7URE9DJ5LUU438uPz58DFDct6bFTaa0sTgnEDKXghnKZiYP43Df6GriGp6YtuhEtbP%2Fkv2gpoI5gLcQkUeTExB2Yi0kN7OYxYiQsPnm0XVqYc9nwaO275%2BeYC0Wz%2FT8RUoNLoqJHvwlZEhRiKO%2FKDoCkfh%2FAt0cHY0wL7b80dlgNhMnYASlPqp8AuS9apKYry84C%2FA%2Fck8bzclWOv7ZZtujNnfE%2FKV5JdWewVrb9oU7MIvHq1lALxxMH9lHPktkIOWxPvWcKG6vzqt0DWE0aq1%2F6rvnzZ41m%2FhyKR88DgShSYcqnvEeUdh%2BRAbdLi5O0QR%2BNCR1IvUIvNTNC%2BaebqR7m54wwu3ZyQY6pgHQsL0d48KeDFAemksMcPzcXxxzXBUSuSpORlkuBrthVhi0fnKcxFJFRNz9DFh6i36D%2B5BlQZV3GmpuqD9TwhQHLZx9EnsVA%2B4s8TRzKzvcpOq4tPaSLs7qOkxcrgHOmRO1PPKKHIIr%2BMKCKRHgVfMDnSYJxotMb8VFFa6FpWV%2BLO6y5Ab6c0q91pmoKT0r8cpL1ToGVgvt%2BTT8ElKKfKGZEEar9jzh&X-Amz-Signature=0f03dcaeeab6613edf753bd388a43d29d1d6a74ed01ec8f564e7eb0d4617b7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JZKZUCL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICfFxCk66AovkekAZEO3VFYRJFruiFYmj%2B3CjUulLlI2AiBST6qMqzu0qnAln8w2MNa5JP2rg4NafbE2ESTmmp6EsSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsFh4z3djAi%2BkGEL3KtwD9yTcVnSFyjhUpb6DltU0%2FWR9O4H22kqEJ4w3VqbbBKdTUCOS%2FFskzPYkrWKkb3WorisKMhh6blvydAvIqJax17rT1U9v3eEokWe%2FPPjhwwbBWjBC6Ft2BRnw3e4VUSSryrSegl7DIPS1SGcfL2NjbRVnoHMJFnixWPCxSKGfTuJ27HzTrLxcG1cr1DXaEb9X0qdGpHq%2BNm%2FRFzk4Z8Aj%2B2HZQKy2aYCIpIs45h2WW59mAB6Ia1khkUpjLwwOwLJXYMfBmNCRVQqAk71h3ADMoaHmLxhmDrZih7URE9DJ5LUU438uPz58DFDct6bFTaa0sTgnEDKXghnKZiYP43Df6GriGp6YtuhEtbP%2Fkv2gpoI5gLcQkUeTExB2Yi0kN7OYxYiQsPnm0XVqYc9nwaO275%2BeYC0Wz%2FT8RUoNLoqJHvwlZEhRiKO%2FKDoCkfh%2FAt0cHY0wL7b80dlgNhMnYASlPqp8AuS9apKYry84C%2FA%2Fck8bzclWOv7ZZtujNnfE%2FKV5JdWewVrb9oU7MIvHq1lALxxMH9lHPktkIOWxPvWcKG6vzqt0DWE0aq1%2F6rvnzZ41m%2FhyKR88DgShSYcqnvEeUdh%2BRAbdLi5O0QR%2BNCR1IvUIvNTNC%2BaebqR7m54wwu3ZyQY6pgHQsL0d48KeDFAemksMcPzcXxxzXBUSuSpORlkuBrthVhi0fnKcxFJFRNz9DFh6i36D%2B5BlQZV3GmpuqD9TwhQHLZx9EnsVA%2B4s8TRzKzvcpOq4tPaSLs7qOkxcrgHOmRO1PPKKHIIr%2BMKCKRHgVfMDnSYJxotMb8VFFa6FpWV%2BLO6y5Ab6c0q91pmoKT0r8cpL1ToGVgvt%2BTT8ElKKfKGZEEar9jzh&X-Amz-Signature=dc8fd7322d2dcb05ffaa66ba8c183a78067f037b141c0f49cca59f835f6a6353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

