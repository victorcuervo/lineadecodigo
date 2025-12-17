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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QU6RGNS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUfXqfSytPHPaDwH9AlJiQe7h4IUJ6GpfVj4gyvI8B2AiBuY4N3Zx71e4PmkNN0LtKOlLV20ms%2F6FNjmqItm6gB9Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMx3UawWmmydEwaSzlKtwDpekBjtjAaZWEYhL1r52%2FA0DdFBcZFTe8tdNq%2FulRcEOO4LPouwmuXFSBt3nqdmSQp%2B1sAElaKs8kPVnp2OgAfJjrDVasiTAJX7%2Fv%2Br2jg1vDDSAmr98OTwAPCyPmn6t1l3ZTBvh9xaA1vxXymosU8DZSkBqPfutxl0DGTwZAfhxkdQ8mp1JSztMytd3dA7EdNzdV24mMDPWuHy42GsxQJsSCSI1CWUADXNfVYJad8h7e75q5K3rHw3Jo2ncZJvzZmyvLcy5v0yRrQMz5XUnBm3O3EbEM6YIGd4Iom1cd0DVvRpWXamxA3OPVG4%2Bs0NLyWFPEpGhRwSvv%2FEgN91vqmELXEow2bcTirlRDqisaz9HtNXt8BWeuC67Wm%2FmyjzGp4kgKKy9ygafD0ZJW0eM6HjBfSYt0iRzwjq4ajcsI4HpScaEjI%2FUeSvlw5j1dtyQ%2BoOhBlzNMOxxWxcvHGWQkI%2BT3HUnraEqAGwGhUkaVViHeHaz2kSEBSQZWmA32c11Ix7y3jwku0k7zjybmMHX%2BzYbCANVhQze5YQcxO4XPC2HIEMn2T3UTVqDb8EM0I2XBBL85uHi0zK3UdUGCiQk9zJBeP2i4eVaaKV3S9JM2hQmivJVSnrDjV1NKBacwkIKJygY6pgEmQW9mk2eXhOvYoqAjwO70DWZE827j9cLIVhKsBuua%2B6lKSJyUATLgd%2Bs02QWrfDPBLyRtnYZHy7aMGdG58ORv9k7oegNesWUvV577ZPA6QMUJjytYtSjyI6HM9qpO1MOz5rXJA6cC11%2BLS4cpcIebJxlHBMV%2F8KVcxYpbLGx875MgJ2No1P1gnzIcoXetmHjIxwjiLXo9A%2BY8yrq5pJr8bVQIerXQ&X-Amz-Signature=cdb771655aa495c083ddcd79ebcc8f291ff2c30ef2200862304e7d23699de772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QU6RGNS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUfXqfSytPHPaDwH9AlJiQe7h4IUJ6GpfVj4gyvI8B2AiBuY4N3Zx71e4PmkNN0LtKOlLV20ms%2F6FNjmqItm6gB9Sr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMx3UawWmmydEwaSzlKtwDpekBjtjAaZWEYhL1r52%2FA0DdFBcZFTe8tdNq%2FulRcEOO4LPouwmuXFSBt3nqdmSQp%2B1sAElaKs8kPVnp2OgAfJjrDVasiTAJX7%2Fv%2Br2jg1vDDSAmr98OTwAPCyPmn6t1l3ZTBvh9xaA1vxXymosU8DZSkBqPfutxl0DGTwZAfhxkdQ8mp1JSztMytd3dA7EdNzdV24mMDPWuHy42GsxQJsSCSI1CWUADXNfVYJad8h7e75q5K3rHw3Jo2ncZJvzZmyvLcy5v0yRrQMz5XUnBm3O3EbEM6YIGd4Iom1cd0DVvRpWXamxA3OPVG4%2Bs0NLyWFPEpGhRwSvv%2FEgN91vqmELXEow2bcTirlRDqisaz9HtNXt8BWeuC67Wm%2FmyjzGp4kgKKy9ygafD0ZJW0eM6HjBfSYt0iRzwjq4ajcsI4HpScaEjI%2FUeSvlw5j1dtyQ%2BoOhBlzNMOxxWxcvHGWQkI%2BT3HUnraEqAGwGhUkaVViHeHaz2kSEBSQZWmA32c11Ix7y3jwku0k7zjybmMHX%2BzYbCANVhQze5YQcxO4XPC2HIEMn2T3UTVqDb8EM0I2XBBL85uHi0zK3UdUGCiQk9zJBeP2i4eVaaKV3S9JM2hQmivJVSnrDjV1NKBacwkIKJygY6pgEmQW9mk2eXhOvYoqAjwO70DWZE827j9cLIVhKsBuua%2B6lKSJyUATLgd%2Bs02QWrfDPBLyRtnYZHy7aMGdG58ORv9k7oegNesWUvV577ZPA6QMUJjytYtSjyI6HM9qpO1MOz5rXJA6cC11%2BLS4cpcIebJxlHBMV%2F8KVcxYpbLGx875MgJ2No1P1gnzIcoXetmHjIxwjiLXo9A%2BY8yrq5pJr8bVQIerXQ&X-Amz-Signature=5cfa6cdef72f3e7755d4cdc25817b9f58c8cfd9e560c9ebb7f2f3bd2a16dba98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

