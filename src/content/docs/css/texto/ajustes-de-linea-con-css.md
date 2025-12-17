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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHI73JB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLWwsnRWER4Q6y%2FYn0zBprIfmkWqveGm3CW6jSGOg5YAiEA0hx77wSSB6K%2B%2BTQi4AZThLD8GizIaqE7U0Bv6JaNQpsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLl4y8RWQ6QFql3nkSrcA2OEBCu%2F%2FsDcNBCS8DHvmUYMSY0VPghFvVAvf%2Bm%2BLNTw08vicDINutLsT7SYqkY%2Bh0j8kKkFabFjBKGfvNMJU3cpSXRrKAKta8Mag7xNlsctEWcX93pVH1b0LmmPfN3LseQJHvPg1YVil7AY33Unq8zz2yfCcz5uMy8wx7q3vkN9rwL1bNoxNyY0QgMsRpR4puq2KJQcDT1zy%2Fy5oMwWnywV95wv%2FcjdZxxopwWHnLRQFvq1gctooGW9MPW3lIrWQ3UxAuVsOiGbKmZKkout2MMI5L%2BCYIHpZmXuWq7e5b9cGuHLbtyNioPD4oTWiAoo36icjoXHTAnxP77DTvOicXMGmY3HmbwU1cdUl5GaKpZCRdvB50tq%2F%2BxRM9sTg4t6XQSA1M%2FeZwGHx7AVK74H3bwsXXXh%2Buu8lGxi8YgfluMIzLLQSPzPfCCetuCtcwdkh4o5D2WxLqHj0m71LKtdCiElB%2B41ohwkRjl16Kwzmgegx5YJ2ELHceOqCKPvMQngZoZrhGVLwD76rdduB2cYYkQ0gUtGM5G4KRnfpUWisnZA%2BXCp94YUYstmUMWDYkv7SA1%2FuI%2Br%2Bg904Z7fzbi0LqrvKtym1Tr%2BvR1aMHs%2B6XR7ZuxSbYea90pNfDrGMLPvicoGOqUBmnpSsnI5FKMWYsyqzpxWrtZmYfT%2FEF4XuHUuq1JlpLIDyzfdIUnYXuuShPDVGpBNAlBihgDk2VqIttxUjtBeJpNWlW7277YkBltZ9eTMbtNC9vm2tjzI3u1t68%2FldEVTvJuLLLkLQJsM4mB4j1aeyH3E%2Bz0zkTMrROGBwOrx3W8cknymoYry%2Fy%2FvoSl3xtAOrILT7ajsh8Z2mLPt538rW8yQCPZw&X-Amz-Signature=86d5bb3465136cb6800abee12b216ab96a947cdc5098495d8f4f26c909667e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBHI73JB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLWwsnRWER4Q6y%2FYn0zBprIfmkWqveGm3CW6jSGOg5YAiEA0hx77wSSB6K%2B%2BTQi4AZThLD8GizIaqE7U0Bv6JaNQpsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLl4y8RWQ6QFql3nkSrcA2OEBCu%2F%2FsDcNBCS8DHvmUYMSY0VPghFvVAvf%2Bm%2BLNTw08vicDINutLsT7SYqkY%2Bh0j8kKkFabFjBKGfvNMJU3cpSXRrKAKta8Mag7xNlsctEWcX93pVH1b0LmmPfN3LseQJHvPg1YVil7AY33Unq8zz2yfCcz5uMy8wx7q3vkN9rwL1bNoxNyY0QgMsRpR4puq2KJQcDT1zy%2Fy5oMwWnywV95wv%2FcjdZxxopwWHnLRQFvq1gctooGW9MPW3lIrWQ3UxAuVsOiGbKmZKkout2MMI5L%2BCYIHpZmXuWq7e5b9cGuHLbtyNioPD4oTWiAoo36icjoXHTAnxP77DTvOicXMGmY3HmbwU1cdUl5GaKpZCRdvB50tq%2F%2BxRM9sTg4t6XQSA1M%2FeZwGHx7AVK74H3bwsXXXh%2Buu8lGxi8YgfluMIzLLQSPzPfCCetuCtcwdkh4o5D2WxLqHj0m71LKtdCiElB%2B41ohwkRjl16Kwzmgegx5YJ2ELHceOqCKPvMQngZoZrhGVLwD76rdduB2cYYkQ0gUtGM5G4KRnfpUWisnZA%2BXCp94YUYstmUMWDYkv7SA1%2FuI%2Br%2Bg904Z7fzbi0LqrvKtym1Tr%2BvR1aMHs%2B6XR7ZuxSbYea90pNfDrGMLPvicoGOqUBmnpSsnI5FKMWYsyqzpxWrtZmYfT%2FEF4XuHUuq1JlpLIDyzfdIUnYXuuShPDVGpBNAlBihgDk2VqIttxUjtBeJpNWlW7277YkBltZ9eTMbtNC9vm2tjzI3u1t68%2FldEVTvJuLLLkLQJsM4mB4j1aeyH3E%2Bz0zkTMrROGBwOrx3W8cknymoYry%2Fy%2FvoSl3xtAOrILT7ajsh8Z2mLPt538rW8yQCPZw&X-Amz-Signature=a1c090dce0645f359fd7d62057c559c842884fe2a735132aad2468073f588b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

