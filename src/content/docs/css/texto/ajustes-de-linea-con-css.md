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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKKH6KJX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1XUn770vvBCA7le7gAN9d%2FC2F0thI89Ueq0Vm%2FVeHAgIgBU08KG3ciM44LvY87xqZ6v9K69264tvPzjj1hRELKqAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIIShGprWCuUx8%2B2SrcA1ApmPD9pJw7b4HA%2FxZyRiMDkpQqpY5SDSRq46%2Bz1yN3xVfRTNmkc6ZbSh0m0KbZtzNb3izETaALcqPnPJiIoOcUxm7SLdr1yV5QxM%2F8ALZrbRgY4F6cLpSRt1iZ7nqZdh6MrYukChlB5X0eCQ3sTjt2sxspDp69TRaJXwF4PZfbZhotakbhfgv8xZ9PJPtdKy5JdxCxcr%2BMMZ51rriWorE0tMQ8qvHsXuiHCehDrIkbQd7dYqxb3icuHIKUjHX5pp%2BfGuF%2BMD8u1p8DPNrV6Ysf%2FCQBADRlcuDCg2dQpoVXDYrG04uUuqFQqk0ALL%2FQJmupfXjTFVVgk54qiT1ubg6gylfFgc2ejAhw6FZ96boL7BL6bnY%2Bm2giMHlPrAPBJ3YCnLs8RkZyQ0jpryErOyOzrktwHJTouAZRbTnozoekbmVlYzgV5bz25VuX7nOQSLBJinUARRuv8lELP9jckel6vtAHr%2Bs14KBtBlZMCu2%2B%2F9G076QYfO4cRDp2ELxne%2Bh%2FEhBB2IStCXQ0mg01EJK2FPe7TJCVdGMNtEG6qS7nSsq755BIZ%2BdWvlgME0caM3S73H%2BmCaUz9EBeN5GEDGvULKLXoyC4RFzgEmdNWRFcdUNm2A185Ur2MPuCMMuei8oGOqUBFAvavx24z3bbxday6wenHx%2FyBUh7bmbiKGDDEDXPGpaYmRvX4pBkC%2FFUs4Ukh%2BYpcIECuc9yEEdxYK5Rh7kx5MIfhCcDBE7kC3l95rKKrNSDiUUq3EWYZ7LSazEiLhzCKRqGCu6kO62xC5tvmSzfwWxTGMdDVPURd3MrlwstdVYad560MRXNN5wT11y6itqKlalfbZh%2FagsUw%2BDs1MblOXFUUcaV&X-Amz-Signature=80ca1395a2d5271ad24a0e809f32834f05417c3557ad0b0589d280505cf9f8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKKH6KJX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1XUn770vvBCA7le7gAN9d%2FC2F0thI89Ueq0Vm%2FVeHAgIgBU08KG3ciM44LvY87xqZ6v9K69264tvPzjj1hRELKqAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIIShGprWCuUx8%2B2SrcA1ApmPD9pJw7b4HA%2FxZyRiMDkpQqpY5SDSRq46%2Bz1yN3xVfRTNmkc6ZbSh0m0KbZtzNb3izETaALcqPnPJiIoOcUxm7SLdr1yV5QxM%2F8ALZrbRgY4F6cLpSRt1iZ7nqZdh6MrYukChlB5X0eCQ3sTjt2sxspDp69TRaJXwF4PZfbZhotakbhfgv8xZ9PJPtdKy5JdxCxcr%2BMMZ51rriWorE0tMQ8qvHsXuiHCehDrIkbQd7dYqxb3icuHIKUjHX5pp%2BfGuF%2BMD8u1p8DPNrV6Ysf%2FCQBADRlcuDCg2dQpoVXDYrG04uUuqFQqk0ALL%2FQJmupfXjTFVVgk54qiT1ubg6gylfFgc2ejAhw6FZ96boL7BL6bnY%2Bm2giMHlPrAPBJ3YCnLs8RkZyQ0jpryErOyOzrktwHJTouAZRbTnozoekbmVlYzgV5bz25VuX7nOQSLBJinUARRuv8lELP9jckel6vtAHr%2Bs14KBtBlZMCu2%2B%2F9G076QYfO4cRDp2ELxne%2Bh%2FEhBB2IStCXQ0mg01EJK2FPe7TJCVdGMNtEG6qS7nSsq755BIZ%2BdWvlgME0caM3S73H%2BmCaUz9EBeN5GEDGvULKLXoyC4RFzgEmdNWRFcdUNm2A185Ur2MPuCMMuei8oGOqUBFAvavx24z3bbxday6wenHx%2FyBUh7bmbiKGDDEDXPGpaYmRvX4pBkC%2FFUs4Ukh%2BYpcIECuc9yEEdxYK5Rh7kx5MIfhCcDBE7kC3l95rKKrNSDiUUq3EWYZ7LSazEiLhzCKRqGCu6kO62xC5tvmSzfwWxTGMdDVPURd3MrlwstdVYad560MRXNN5wT11y6itqKlalfbZh%2FagsUw%2BDs1MblOXFUUcaV&X-Amz-Signature=d6ece6cd8f51fc8d30f661e92f45d121dbcf5d7996296647f78e93f31a773666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

