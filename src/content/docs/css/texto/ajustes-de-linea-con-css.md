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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYHI5HQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJoim9LuuxzW%2FjHqhxbgvrTf2uqsK0XsI5WQI%2Boxoe%2FAiEA%2Fnj2DXxFyBSSxxi1PNmJedWNFe52lXOIHBIqpgNqpoYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFqmGguKZHLxxJ5n%2BircAyCPA83f%2FRUATt5fNuoqEFiZSCyEgi2TCjT6PCIXg0XQo0XYR7plhEk4p71qDDyJmmxs1fQjW%2F8tlnFwkAB9Wst0dpPaRmjvgpoNlHfPLDcRraHyhcZ1SmmNdLeFK46FKDg4r64PoV9iFDYcXZUIw4mzo%2F4euo8S4LXtLYBMGcgQ11Dpiy5ELU9mwQjqkiZxhpsFu9AtNTxbshZmpDgm802WElX4uLJTiLGytdvTeeVMioWCnxsXWqSqHJ84zZGVC4FDOi%2BQR%2BVnQKGaZ8TocbNyzLrBZkGT%2FYP9ptpESqyqI82t7d35sy3iSXyYhauSM1%2BA1vacY5%2BhiO2bOjlCINrF67BQkx%2B58IKPz%2FLGqvNWpJzPkPxZ7rKfdSmfYAN66nfvhwg2CalMXxGCKHlOEKQAg46Toh3ER4eQhLEFPjHcDLTHdMMoGn6r1dsKBL2xAN4jNxWCgA%2BjWqQ5jAO7tP1I4zR3KDr7pODwq7fJ1PEcvUsMDmIkBrXqRkSFh6pyoR2erk5gbBm9oTTonS5L%2BUdZyEd0GjYtvAYmUTI25x5NNQA3jtU6L%2FiQ8ThvT4Nw%2BqNfOlqJgBu7yyBqyIyyOkQmf74T%2B92jt7hLwih%2Fp5605WmlKmPASV0RmX1HMN%2BxiMoGOqUByXVnmrZ%2FnSjxnEUAEWoATh%2F5rJORDb0AEgfLcrNIyXWAVuyBsCcQa8mIBQRa4nD7s4X%2FhRkohCuUSboXazb1dKMPgu1dPKMn0yqXyXvAb8LgaJLK1uPSIc%2BEbuQ2I0IgHNXwGdujOfT12qtk4jOwu2kde3qz70%2BSO3GFxZacKSqAFPUGMC90ReYiwZEfIWHWZca0ZGiLp2kLZWfCepLMA0zy%2FhUK&X-Amz-Signature=218f21fdcf022ad378bf450d3cde1366c211177f217371ee12cc58b594d5865a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NYHI5HQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDJoim9LuuxzW%2FjHqhxbgvrTf2uqsK0XsI5WQI%2Boxoe%2FAiEA%2Fnj2DXxFyBSSxxi1PNmJedWNFe52lXOIHBIqpgNqpoYq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFqmGguKZHLxxJ5n%2BircAyCPA83f%2FRUATt5fNuoqEFiZSCyEgi2TCjT6PCIXg0XQo0XYR7plhEk4p71qDDyJmmxs1fQjW%2F8tlnFwkAB9Wst0dpPaRmjvgpoNlHfPLDcRraHyhcZ1SmmNdLeFK46FKDg4r64PoV9iFDYcXZUIw4mzo%2F4euo8S4LXtLYBMGcgQ11Dpiy5ELU9mwQjqkiZxhpsFu9AtNTxbshZmpDgm802WElX4uLJTiLGytdvTeeVMioWCnxsXWqSqHJ84zZGVC4FDOi%2BQR%2BVnQKGaZ8TocbNyzLrBZkGT%2FYP9ptpESqyqI82t7d35sy3iSXyYhauSM1%2BA1vacY5%2BhiO2bOjlCINrF67BQkx%2B58IKPz%2FLGqvNWpJzPkPxZ7rKfdSmfYAN66nfvhwg2CalMXxGCKHlOEKQAg46Toh3ER4eQhLEFPjHcDLTHdMMoGn6r1dsKBL2xAN4jNxWCgA%2BjWqQ5jAO7tP1I4zR3KDr7pODwq7fJ1PEcvUsMDmIkBrXqRkSFh6pyoR2erk5gbBm9oTTonS5L%2BUdZyEd0GjYtvAYmUTI25x5NNQA3jtU6L%2FiQ8ThvT4Nw%2BqNfOlqJgBu7yyBqyIyyOkQmf74T%2B92jt7hLwih%2Fp5605WmlKmPASV0RmX1HMN%2BxiMoGOqUByXVnmrZ%2FnSjxnEUAEWoATh%2F5rJORDb0AEgfLcrNIyXWAVuyBsCcQa8mIBQRa4nD7s4X%2FhRkohCuUSboXazb1dKMPgu1dPKMn0yqXyXvAb8LgaJLK1uPSIc%2BEbuQ2I0IgHNXwGdujOfT12qtk4jOwu2kde3qz70%2BSO3GFxZacKSqAFPUGMC90ReYiwZEfIWHWZca0ZGiLp2kLZWfCepLMA0zy%2FhUK&X-Amz-Signature=327bf0893b7951e59aa036b70472a02a27c9fc3b53d2fd3afbce055886473b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

