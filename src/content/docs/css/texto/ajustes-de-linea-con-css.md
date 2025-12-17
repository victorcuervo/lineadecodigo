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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFS5YNK6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAz4Uu42lDlzB8NS6xxzLGYmHTB25aEKxRV6V4puNxtgIhAK7P8WtKRybxTaPf12FjG9O0xUinNG0vhhcS1uQ32TtVKv8DCHcQABoMNjM3NDIzMTgzODA1Igy2RmtEQ85ov1moE2Uq3ANPUiycNrA6YtDE3btjpNCRFG3FzbWp%2BWetRI9rrfciObc6fx%2BTrkULEosj8yAFIaJVlCsMshWQp9KpomwIxmayYCkYIKFXCsGuJfIZRWmDOKV2ttX2akKZGWYaY9S%2B18ObpsCRrUFQabSbjBzjaD7loSOBTIwAe0tQAU0o%2BK8OCeHtKLMOl1HKZFO8zs2q9k9TnNAP6z8ln4is%2BOxCB2EbzuqrQ5XDayMphFY3q8s1%2BrPs0gd4inSknpeQDqOYpSCSkSkHGGrmpTcNcaKcB4gMDPCdPh3s7E4pNFpkNMWpJNUoLZIkoeTdx30mXzOjo75D5ibZsAdD%2BMH4aXuBV3N2%2F7Okq2JEivll66hj40AkSrcAd8YZtbwvASbiQ7w%2FPPPbVa24Qq%2BlhMIRXnuS2gKQZ8LzHwzQIUi4QLVtUtkydvutoAhU%2FnWk485vYVClsCaXGRNKdec6TK3KnlP%2FSMQyuTp4DdzSDfYApw63yZsiAABUIqKqik4%2Fbm4paH9u2fgjjcARv6ZNPn2UQIYxH8n7mKqDB3%2Fe9uFuQihQ%2Bl%2F8QEWW%2F8FU7uaRblv6LGfddxnHK3TVwn%2BKnDTEDVU1wTQkx0TT6Km3HKqbaZFPcjB2oQ11fZeJH1zeWokJtTDRg4nKBjqkAUDg8i5zBP3wFqJ4HrXsuudRthObOq3EplEne%2B5gIxuGdkd0gy94Go5wi7miIiu%2BjUjEOzPRFm4PYAtxMTFttv%2FqetFJUQpTkOylVHSZPoWidNTu9F9v%2FNLBgundJpRVSKWhIHzCk7OsSUnBUG3h42pXspLS0BMJRVKJccU3bgFBxNCFS03BynaOe3%2BPj86mxQh2BFaAfvx37uX7YIEw388l9zej&X-Amz-Signature=9c3c76299673ddfe09300652075836f758f883ce1d29546640ab14f0dbf5bbe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFS5YNK6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAz4Uu42lDlzB8NS6xxzLGYmHTB25aEKxRV6V4puNxtgIhAK7P8WtKRybxTaPf12FjG9O0xUinNG0vhhcS1uQ32TtVKv8DCHcQABoMNjM3NDIzMTgzODA1Igy2RmtEQ85ov1moE2Uq3ANPUiycNrA6YtDE3btjpNCRFG3FzbWp%2BWetRI9rrfciObc6fx%2BTrkULEosj8yAFIaJVlCsMshWQp9KpomwIxmayYCkYIKFXCsGuJfIZRWmDOKV2ttX2akKZGWYaY9S%2B18ObpsCRrUFQabSbjBzjaD7loSOBTIwAe0tQAU0o%2BK8OCeHtKLMOl1HKZFO8zs2q9k9TnNAP6z8ln4is%2BOxCB2EbzuqrQ5XDayMphFY3q8s1%2BrPs0gd4inSknpeQDqOYpSCSkSkHGGrmpTcNcaKcB4gMDPCdPh3s7E4pNFpkNMWpJNUoLZIkoeTdx30mXzOjo75D5ibZsAdD%2BMH4aXuBV3N2%2F7Okq2JEivll66hj40AkSrcAd8YZtbwvASbiQ7w%2FPPPbVa24Qq%2BlhMIRXnuS2gKQZ8LzHwzQIUi4QLVtUtkydvutoAhU%2FnWk485vYVClsCaXGRNKdec6TK3KnlP%2FSMQyuTp4DdzSDfYApw63yZsiAABUIqKqik4%2Fbm4paH9u2fgjjcARv6ZNPn2UQIYxH8n7mKqDB3%2Fe9uFuQihQ%2Bl%2F8QEWW%2F8FU7uaRblv6LGfddxnHK3TVwn%2BKnDTEDVU1wTQkx0TT6Km3HKqbaZFPcjB2oQ11fZeJH1zeWokJtTDRg4nKBjqkAUDg8i5zBP3wFqJ4HrXsuudRthObOq3EplEne%2B5gIxuGdkd0gy94Go5wi7miIiu%2BjUjEOzPRFm4PYAtxMTFttv%2FqetFJUQpTkOylVHSZPoWidNTu9F9v%2FNLBgundJpRVSKWhIHzCk7OsSUnBUG3h42pXspLS0BMJRVKJccU3bgFBxNCFS03BynaOe3%2BPj86mxQh2BFaAfvx37uX7YIEw388l9zej&X-Amz-Signature=e75b501983166be395aa7526eca94ba76f62279d4bd7437e0f58804fc86bf383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

