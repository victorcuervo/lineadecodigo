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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYQ33JIB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCziCAXZ8oONQo%2BXZkQyq0tBjpYkzW8kVFwuu820pvYMwIgZS5w6pZgAxgwGp1WEEVn9o1mOJD3NvQ1ZsdM52d%2FCwMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDVLea0NXJropyK5iSrcA%2B8SV30jfuo9duqmjIiS2whIQoZYWprw0h64Deg7smJtWHPge49yKTkezmL1z0C2iiOalSBAdJhrXGsCrsEtHljBsqf3D%2Fr4AHK8T7Nmi6ui7%2BEvSr7Assd5Xo%2FmYH57FwM1JkLUpcprs460YeN03EIzFN1T4UxdsTYQf4YzUnKvN%2Bxo2Sk%2FSV%2BKkZhZ1FcpdUqTYpDI5gsF9zQTb37NAm904bDRALYXH%2BPPH%2FChBEnXkSDa9sW2qShlfI4H7DxDhPRj%2F4obXBkxQVkytONMSGQ%2BLYRNWj6ACzY6OcFfG898zhKx%2Fct%2FYL3wvL5yDuZca57eK6OB%2BJ%2B9F1QAnGh%2Bi5Lr1ZfrUVNVoqndCfbx%2FfjCPIfjgyhCCNWSn2WwOXZndzN9R4ThBNBxwrk0fNsVGNYRtjz0i6dEpgGgU1Kv827uFjfjKDoJkPi94bZbhRshiiLCv%2FRmenrju5uZrUQLZqmnAB%2FnA3D0T9r9Fs%2FqrRB8DDo3ikGNEAQ6M3id%2FtBOm6ME%2FSbrF8H5FQlBR%2BohYeHrzjIoPq%2FmhuNF73vIBDDz6fXeo3CxLtdJHDU4NKcdNoX0qH0rXKj2RDCqTndd4qBd9zYZeVQ4E3eYyXFpLJ5Waq3uyaORlXnjOI%2FGMNHOiMoGOqUBiFR5xtXGQox8H5hyojo7Nd0vvbxQ2c7fGo7hD%2BDwuv%2B5bLzhRzRzgzJ8I3VGFOy5SWzDIREjLoXN%2BlOe%2BLe7XCTPZkUhgJVIBo9d0a3XIIWiZLk5E8gxMcQiDIwJJShprI6gVw%2Fd3NtZE2g34xgx%2FT6q7l3y1ZiZRDXLajUcc0YbjTQ0PT%2Bg1Ps7WfU6cDxGa8iSV8kxUCVG%2F6uTv96sHZh6pRVT&X-Amz-Signature=8eaabfbbdb4d17d1e23d5fd8df12d31b9288e1c839c036f8dcc1998afc1ec469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYQ33JIB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCziCAXZ8oONQo%2BXZkQyq0tBjpYkzW8kVFwuu820pvYMwIgZS5w6pZgAxgwGp1WEEVn9o1mOJD3NvQ1ZsdM52d%2FCwMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDVLea0NXJropyK5iSrcA%2B8SV30jfuo9duqmjIiS2whIQoZYWprw0h64Deg7smJtWHPge49yKTkezmL1z0C2iiOalSBAdJhrXGsCrsEtHljBsqf3D%2Fr4AHK8T7Nmi6ui7%2BEvSr7Assd5Xo%2FmYH57FwM1JkLUpcprs460YeN03EIzFN1T4UxdsTYQf4YzUnKvN%2Bxo2Sk%2FSV%2BKkZhZ1FcpdUqTYpDI5gsF9zQTb37NAm904bDRALYXH%2BPPH%2FChBEnXkSDa9sW2qShlfI4H7DxDhPRj%2F4obXBkxQVkytONMSGQ%2BLYRNWj6ACzY6OcFfG898zhKx%2Fct%2FYL3wvL5yDuZca57eK6OB%2BJ%2B9F1QAnGh%2Bi5Lr1ZfrUVNVoqndCfbx%2FfjCPIfjgyhCCNWSn2WwOXZndzN9R4ThBNBxwrk0fNsVGNYRtjz0i6dEpgGgU1Kv827uFjfjKDoJkPi94bZbhRshiiLCv%2FRmenrju5uZrUQLZqmnAB%2FnA3D0T9r9Fs%2FqrRB8DDo3ikGNEAQ6M3id%2FtBOm6ME%2FSbrF8H5FQlBR%2BohYeHrzjIoPq%2FmhuNF73vIBDDz6fXeo3CxLtdJHDU4NKcdNoX0qH0rXKj2RDCqTndd4qBd9zYZeVQ4E3eYyXFpLJ5Waq3uyaORlXnjOI%2FGMNHOiMoGOqUBiFR5xtXGQox8H5hyojo7Nd0vvbxQ2c7fGo7hD%2BDwuv%2B5bLzhRzRzgzJ8I3VGFOy5SWzDIREjLoXN%2BlOe%2BLe7XCTPZkUhgJVIBo9d0a3XIIWiZLk5E8gxMcQiDIwJJShprI6gVw%2Fd3NtZE2g34xgx%2FT6q7l3y1ZiZRDXLajUcc0YbjTQ0PT%2Bg1Ps7WfU6cDxGa8iSV8kxUCVG%2F6uTv96sHZh6pRVT&X-Amz-Signature=d9f00c4e26aaa2f8e963964141e1d215d6f71b724855aab185108310beb3107e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

