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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAUWZPD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBxRh9PWCEdLG1eu3Y6rCRy44m9oi27FdNlNjzoSOauAiEAt64s6LYBcpWlODkp7vAZcNt0Rh0Xiqsii6tn92hOuboq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOGg2P8C2cVrNXOOOircA1sQTm5CTxREc%2BEETHTiBJzl5dAfhEebsprr2haMiTuDC0f%2F6FZ5WUiaYsG7%2BppAfKZsIXUeGTQM%2Fwvgcr9o7Cjkwcsw0yJgNgFJa324jB4iUMXlMyaQV1VGWqSmElM3u5EFDQhqx9doq04bWAbmuld60AqdCI0WtctjmbTCsPFIhqKHSSU0wlbre2CaUMPOnsz3l%2F7sw2v8rLi9VUVHj83epmAfKhkhCI7bR7lBBiflvrfG9qyUDo0SwhnVVJ346bwDGJPok6QWRswLpRQjCEhh8rOVsCWtyD%2FIBEQwbGh2FUwBBd%2BbiZXDqPQa0Uu%2ByqK6GzX%2B5tt0bkdcv%2BkbUVVoGlovV%2Bu6Fd4pAe8M%2Ba2Voqz1CzHp1%2B9GukPTo%2FkM80cxGG92JVfxex21WhafMLd2WKsWWHtnHqLGIH8k2GlhhFJcz%2BuM1AsWpK4o25fTjHXcHhsxYixVro7pplUeNKvADavEtX0zAuIOsnxNBHOBJlQwkFTbvPSKWM80Xu0icxOntBTPBV%2FCaLc1VDokNNTaBxqUmBHPEK45Z5FoP0w8CFCXG19lzxekrh2CfAD3LzoEHL8s12xYS6b0Udm7MF3s5QJCOJDYRnesk%2FCw%2ByXtAgpgmIde8BfsO5cxMOixiMoGOqUBxQmKp306IwDmp4CY3m%2BViKXkcGxefBvyiF3KGRsynLOAhqrBoNwQ%2FjkNlTH8DzlLNc231K1HcsCDm1BL%2FQaxXuLh%2BAzoXlh4rMkXXjhzGLZsWv63lERgsJT7lpVpCdWblQQjnba%2FH8kxPDJNGcDbHzn9Gj%2Bm9zNYxPyEDf7uIRD5SSiyCRe%2FX08pvEZIvw7STz4APP2im00L28sIjCFL0cemmOj2&X-Amz-Signature=a6ea0d00d7ce7bfb73a2ff4a9811ba055df95dbbb43a2890ebee257f5377588e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCAUWZPD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBBxRh9PWCEdLG1eu3Y6rCRy44m9oi27FdNlNjzoSOauAiEAt64s6LYBcpWlODkp7vAZcNt0Rh0Xiqsii6tn92hOuboq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDOGg2P8C2cVrNXOOOircA1sQTm5CTxREc%2BEETHTiBJzl5dAfhEebsprr2haMiTuDC0f%2F6FZ5WUiaYsG7%2BppAfKZsIXUeGTQM%2Fwvgcr9o7Cjkwcsw0yJgNgFJa324jB4iUMXlMyaQV1VGWqSmElM3u5EFDQhqx9doq04bWAbmuld60AqdCI0WtctjmbTCsPFIhqKHSSU0wlbre2CaUMPOnsz3l%2F7sw2v8rLi9VUVHj83epmAfKhkhCI7bR7lBBiflvrfG9qyUDo0SwhnVVJ346bwDGJPok6QWRswLpRQjCEhh8rOVsCWtyD%2FIBEQwbGh2FUwBBd%2BbiZXDqPQa0Uu%2ByqK6GzX%2B5tt0bkdcv%2BkbUVVoGlovV%2Bu6Fd4pAe8M%2Ba2Voqz1CzHp1%2B9GukPTo%2FkM80cxGG92JVfxex21WhafMLd2WKsWWHtnHqLGIH8k2GlhhFJcz%2BuM1AsWpK4o25fTjHXcHhsxYixVro7pplUeNKvADavEtX0zAuIOsnxNBHOBJlQwkFTbvPSKWM80Xu0icxOntBTPBV%2FCaLc1VDokNNTaBxqUmBHPEK45Z5FoP0w8CFCXG19lzxekrh2CfAD3LzoEHL8s12xYS6b0Udm7MF3s5QJCOJDYRnesk%2FCw%2ByXtAgpgmIde8BfsO5cxMOixiMoGOqUBxQmKp306IwDmp4CY3m%2BViKXkcGxefBvyiF3KGRsynLOAhqrBoNwQ%2FjkNlTH8DzlLNc231K1HcsCDm1BL%2FQaxXuLh%2BAzoXlh4rMkXXjhzGLZsWv63lERgsJT7lpVpCdWblQQjnba%2FH8kxPDJNGcDbHzn9Gj%2Bm9zNYxPyEDf7uIRD5SSiyCRe%2FX08pvEZIvw7STz4APP2im00L28sIjCFL0cemmOj2&X-Amz-Signature=f754a718cfbda1e5a86dec098865001850c4417af03d53d440ad0217175df4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

