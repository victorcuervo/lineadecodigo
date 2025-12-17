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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PRPPWAC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi76v6SRTPv15%2B8eEpv69QYhlUMnyXgAS0Cg6rlXrrVAiBGDsAKFF5LdHrUoawhcMGP4RpIZWRJNBkCZzJNt7jGrCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtXw19b8dUxVfQJB9KtwDBQo%2F%2FEpwxbDQ%2B1bkQhPH4qyYCW9SkQb2S16L%2F0dz8UjYY0ivPjMOOvJWHaMYRG%2FUOdGlxIllIe6PXHWK7dS3VHUMwmQb8fvSqBkdsK%2BHDZg0fqnWEwcfIqWRRmjqsKO47iZjDcd39v3QIUEG9UiOcNSRCcduznMbvSiHaSAjKsi7ZFfRZIvVQi4TmDRAhs1UVsfhzwwq7iI9BeTzsA%2FGotVZpk%2FLQMTJHHMO0Tn2Zs5h2T5%2BbOB8WvXIIbm4TO3LeBE6%2FvVrG8ge3jN%2B%2BCNazgXoTZGTn7C%2FNhVzy%2BRaCdOQPp8kg08Pk3fgAO2SeB8hkq3PPxuR9NlxoeKH3NSCiVzaPIqwL38etYDLCk8Txctf%2Bh692onMm6AjZfLBXwcWsq%2F345M8AXWNldDUp8E3AdGfNZH89LURWqvfVgLQDE3DmkKNZmKm%2FSYdqWWybSNVU6WspCg4ALTeAXui1JVQyDo%2FKewwUi33UZ9KMJsK2TUot4TZti%2Bd3ARyDykA5sYNDYFQmHn4RB13Uaq489B4yzUIBAmFWktnnWbT1u%2BgDQhKZrDp%2FOZuOXUPEO2iNXh%2BU09zz2uli3kvB1MKKkrbcvu3B9rKG6A6dcgUZA3fuKsR4qqXwS3bBhjItlswzZ6LygY6pgHqSi1Z0vAUM%2BeD%2BFz1hIMiRj5qHmb7OKAgGaRhnDNanvYQKljbv8o2Sknrl6Xe6mrkoKa27%2Fwhdck6I8CoBaLUPtRUBnMHKEdo5lTRDzvxVzK2SUavjXlPVREebQNTCO8lLDVBAA7ODDudY11S65qhLtC6fkJKlkWUVpd1TV%2F%2BzMxxP%2BTIk%2BxnVwvpeN91KHtgOWetlO3LPDVp7eiJmorh8AjIqUD%2F&X-Amz-Signature=2ab65a214cf3c3ecb5d07a3487b50da02604a46bc3d1ed2074bf6a604563e606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PRPPWAC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAi76v6SRTPv15%2B8eEpv69QYhlUMnyXgAS0Cg6rlXrrVAiBGDsAKFF5LdHrUoawhcMGP4RpIZWRJNBkCZzJNt7jGrCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtXw19b8dUxVfQJB9KtwDBQo%2F%2FEpwxbDQ%2B1bkQhPH4qyYCW9SkQb2S16L%2F0dz8UjYY0ivPjMOOvJWHaMYRG%2FUOdGlxIllIe6PXHWK7dS3VHUMwmQb8fvSqBkdsK%2BHDZg0fqnWEwcfIqWRRmjqsKO47iZjDcd39v3QIUEG9UiOcNSRCcduznMbvSiHaSAjKsi7ZFfRZIvVQi4TmDRAhs1UVsfhzwwq7iI9BeTzsA%2FGotVZpk%2FLQMTJHHMO0Tn2Zs5h2T5%2BbOB8WvXIIbm4TO3LeBE6%2FvVrG8ge3jN%2B%2BCNazgXoTZGTn7C%2FNhVzy%2BRaCdOQPp8kg08Pk3fgAO2SeB8hkq3PPxuR9NlxoeKH3NSCiVzaPIqwL38etYDLCk8Txctf%2Bh692onMm6AjZfLBXwcWsq%2F345M8AXWNldDUp8E3AdGfNZH89LURWqvfVgLQDE3DmkKNZmKm%2FSYdqWWybSNVU6WspCg4ALTeAXui1JVQyDo%2FKewwUi33UZ9KMJsK2TUot4TZti%2Bd3ARyDykA5sYNDYFQmHn4RB13Uaq489B4yzUIBAmFWktnnWbT1u%2BgDQhKZrDp%2FOZuOXUPEO2iNXh%2BU09zz2uli3kvB1MKKkrbcvu3B9rKG6A6dcgUZA3fuKsR4qqXwS3bBhjItlswzZ6LygY6pgHqSi1Z0vAUM%2BeD%2BFz1hIMiRj5qHmb7OKAgGaRhnDNanvYQKljbv8o2Sknrl6Xe6mrkoKa27%2Fwhdck6I8CoBaLUPtRUBnMHKEdo5lTRDzvxVzK2SUavjXlPVREebQNTCO8lLDVBAA7ODDudY11S65qhLtC6fkJKlkWUVpd1TV%2F%2BzMxxP%2BTIk%2BxnVwvpeN91KHtgOWetlO3LPDVp7eiJmorh8AjIqUD%2F&X-Amz-Signature=b8804a4156d906ece5ad55a9252108504f0901ee4c3f98dbe527df622265ab19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

