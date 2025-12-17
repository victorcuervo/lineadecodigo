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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YET74CA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAesF6jz9YhIaV6%2F%2BHIN%2F0JSAdo50%2FdNxF8IYy6pONdvAiBg8tGAGyCNIwBFfQqv%2BQSZNuQBYmyzVLDfpJZ7i11NWiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtoAYJ8Xgrq7QBDKZKtwDIooQU6MI9%2FywdcDK8dZrkicmjskVchap5%2FoFvIsfI9QTYBeR0vve4cMCo3jbtwyIWFW3CxARY9X%2BtXZ7Kdb3edr1ECTagxZeg7J856PLeguqzx6pAlpZQHZMpkKrgwaMe8F4zIMQ1IaUP2hx2NyCXTU2ZmRBXmvYn25yQFiQovgetDfEhIYnTbh6x%2Bu%2FATeEUGBSImIqQv1yNgqM7ztC3yLoyObNviPJu8d1Vkif2ZHhl3%2FFCUXYove3%2Fw2nikycGe6WMCDqRSo8%2FqfRT%2F6gQAjq%2F2CKKmtWEsk8lYSi9dgd3BWchFAuV%2BwGjZyfR3Y14iJuANrI54uogH8nJ2%2BNoFeIKgndOq3tybzK2tGwE3YwEMVRflNqkwD5eeuy00wqzqgXR1o9xmfSkpgKcESFsrPjFSExhef9YxuFhtZd%2FEdg6yDigZpdkcocMi%2BdExtp5Eh1Kj54yd4zCzzb6Pu6J8MXzrwYP00KdHo46cZfj1yF7jBHeEzs%2B6lzNmFL9I3Am5VQ%2BZ%2Bk0sIOh6wMNYx0tWuRWl32heNkt25RlrV%2FewGQyJHd4c4CkPrRakAhtAhpGb%2BIr6X6EjnpmtzTScZysXGQB28RciwwO40hG9iz1ve0zO4HEgIqugF1jVQw8f%2BKygY6pgEUiS6JZ0ijtQkfKTEHJSOTr%2B3TVN4H6K4cO0L%2BGYYaE83JkGhIcrUFTOl%2B%2FahBa3XDz22taEocAycMOj9zxHsrLU8yPgIiUFcdTSMasVPp8Qfs%2Fs2TY%2BHlyethJylXLmoQrTeiyLQ%2Fue6qKPJQ1KOToEwhY0Zo%2BdTxNaUf6IiJcU1keYM60cx8vNAU4jQk5AHOdIXVo73CrMn97oSli3ZUI%2BKzPfrB&X-Amz-Signature=feb577f416774da3aa8a1c3009b91f5d85988eda8d82bc7c858516d32febc8f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YET74CA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAesF6jz9YhIaV6%2F%2BHIN%2F0JSAdo50%2FdNxF8IYy6pONdvAiBg8tGAGyCNIwBFfQqv%2BQSZNuQBYmyzVLDfpJZ7i11NWiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtoAYJ8Xgrq7QBDKZKtwDIooQU6MI9%2FywdcDK8dZrkicmjskVchap5%2FoFvIsfI9QTYBeR0vve4cMCo3jbtwyIWFW3CxARY9X%2BtXZ7Kdb3edr1ECTagxZeg7J856PLeguqzx6pAlpZQHZMpkKrgwaMe8F4zIMQ1IaUP2hx2NyCXTU2ZmRBXmvYn25yQFiQovgetDfEhIYnTbh6x%2Bu%2FATeEUGBSImIqQv1yNgqM7ztC3yLoyObNviPJu8d1Vkif2ZHhl3%2FFCUXYove3%2Fw2nikycGe6WMCDqRSo8%2FqfRT%2F6gQAjq%2F2CKKmtWEsk8lYSi9dgd3BWchFAuV%2BwGjZyfR3Y14iJuANrI54uogH8nJ2%2BNoFeIKgndOq3tybzK2tGwE3YwEMVRflNqkwD5eeuy00wqzqgXR1o9xmfSkpgKcESFsrPjFSExhef9YxuFhtZd%2FEdg6yDigZpdkcocMi%2BdExtp5Eh1Kj54yd4zCzzb6Pu6J8MXzrwYP00KdHo46cZfj1yF7jBHeEzs%2B6lzNmFL9I3Am5VQ%2BZ%2Bk0sIOh6wMNYx0tWuRWl32heNkt25RlrV%2FewGQyJHd4c4CkPrRakAhtAhpGb%2BIr6X6EjnpmtzTScZysXGQB28RciwwO40hG9iz1ve0zO4HEgIqugF1jVQw8f%2BKygY6pgEUiS6JZ0ijtQkfKTEHJSOTr%2B3TVN4H6K4cO0L%2BGYYaE83JkGhIcrUFTOl%2B%2FahBa3XDz22taEocAycMOj9zxHsrLU8yPgIiUFcdTSMasVPp8Qfs%2Fs2TY%2BHlyethJylXLmoQrTeiyLQ%2Fue6qKPJQ1KOToEwhY0Zo%2BdTxNaUf6IiJcU1keYM60cx8vNAU4jQk5AHOdIXVo73CrMn97oSli3ZUI%2BKzPfrB&X-Amz-Signature=d19d69af58d2f121c0082e67c7bed6883ed54600727ef3c6c75e2beb10f3c129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

