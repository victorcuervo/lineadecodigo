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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNV52KVF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCITQbXdwZTgTvJ9t3v7CupMBDI4dcwAbUwMTGgUoRcHgIhAMfbHjtQar63MTuYAuh7F2uamva2m%2BKCPLYd0IaU1hJ%2BKv8DCHgQABoMNjM3NDIzMTgzODA1IgxhvmRkyJfOc2wOxhEq3ANcCiMoej%2FkcU0bI3E4dZuSImhoMtUAlvTcHw1UxT2xoe3WVwhl6m61ahrkM%2BfejhJcJLxBRmYilZdTNEMUX7XQYH0KFom9aBP5Y8YrIOJ0D7DzXd%2Fqk6xxy0WOy35UJd%2BuJb5OWf49eZz%2Fyw9Uo1uC8V6O0LuRfF9TudhMBI%2BkQTytQQfCtUFM9tk%2Fu9DSNjt5LYcFem5Lu00qrh1ouo87%2Bh8yWCDyi7Qy4cCGO%2FDHnn3eqUvDIIxiZOJjuR7aa%2BN5e6gYqcSRVz264aRUEv9za8MWix7QokIt%2FXcqNwBNf79QhBsbQ%2FEMdr877Od%2FSekIMlJDRbJmZCRELGKyxz64MHmTlp%2FvUrmWh2QQdJhr%2Fnw5Mi4JzGiQDrjlb%2FIKHETudpg0EUJT%2B65QcGpcED9z6RwFXq66Sv6XDvmGknvnrnLPBVo2gKvVIPsAuFFcu6XVt%2BMOmDsT6vco9K%2FTCbhPNNovI1aMzK9y0aqxmhTif%2FgRhyhdS%2BFApAsBhK51UUFBYtABeNHHp%2Fcw01%2BDha9auO%2Fy1bLtvIph%2B8wEvzQvaWyAHaiBRe9%2B44oWsFURgclI9J5ifqYNyCr9bN%2BPqVnBplO0huFUNhjKaJHwi9Qxe1KverlmudvRI4aYnTDUnYnKBjqkAe2wJf4AVsEtKZqkD9Ub4rbYM%2FcMPMpWMpcIRyS28qHeho5sqesJx7zHF1V4DGIQoesA3uswMAyZkbT87INT3b%2FLVeBYdiu3DbJHToarEopZH70mvlY%2BTjx03QGmrIYo1BuquwghoXzsxXdDhK1YOPXnKrPct7O81c3I%2BVxa7SFfkwlcrBnti1Q%2BH2mQ0X%2Fi1b8XjINctqpfdUEN2fSm2ONnOebY&X-Amz-Signature=a8be28cc244241208a4560a09bb5d8162ea85fbffb2b407a62d22baa9b838e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNV52KVF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCITQbXdwZTgTvJ9t3v7CupMBDI4dcwAbUwMTGgUoRcHgIhAMfbHjtQar63MTuYAuh7F2uamva2m%2BKCPLYd0IaU1hJ%2BKv8DCHgQABoMNjM3NDIzMTgzODA1IgxhvmRkyJfOc2wOxhEq3ANcCiMoej%2FkcU0bI3E4dZuSImhoMtUAlvTcHw1UxT2xoe3WVwhl6m61ahrkM%2BfejhJcJLxBRmYilZdTNEMUX7XQYH0KFom9aBP5Y8YrIOJ0D7DzXd%2Fqk6xxy0WOy35UJd%2BuJb5OWf49eZz%2Fyw9Uo1uC8V6O0LuRfF9TudhMBI%2BkQTytQQfCtUFM9tk%2Fu9DSNjt5LYcFem5Lu00qrh1ouo87%2Bh8yWCDyi7Qy4cCGO%2FDHnn3eqUvDIIxiZOJjuR7aa%2BN5e6gYqcSRVz264aRUEv9za8MWix7QokIt%2FXcqNwBNf79QhBsbQ%2FEMdr877Od%2FSekIMlJDRbJmZCRELGKyxz64MHmTlp%2FvUrmWh2QQdJhr%2Fnw5Mi4JzGiQDrjlb%2FIKHETudpg0EUJT%2B65QcGpcED9z6RwFXq66Sv6XDvmGknvnrnLPBVo2gKvVIPsAuFFcu6XVt%2BMOmDsT6vco9K%2FTCbhPNNovI1aMzK9y0aqxmhTif%2FgRhyhdS%2BFApAsBhK51UUFBYtABeNHHp%2Fcw01%2BDha9auO%2Fy1bLtvIph%2B8wEvzQvaWyAHaiBRe9%2B44oWsFURgclI9J5ifqYNyCr9bN%2BPqVnBplO0huFUNhjKaJHwi9Qxe1KverlmudvRI4aYnTDUnYnKBjqkAe2wJf4AVsEtKZqkD9Ub4rbYM%2FcMPMpWMpcIRyS28qHeho5sqesJx7zHF1V4DGIQoesA3uswMAyZkbT87INT3b%2FLVeBYdiu3DbJHToarEopZH70mvlY%2BTjx03QGmrIYo1BuquwghoXzsxXdDhK1YOPXnKrPct7O81c3I%2BVxa7SFfkwlcrBnti1Q%2BH2mQ0X%2Fi1b8XjINctqpfdUEN2fSm2ONnOebY&X-Amz-Signature=bf09b8cfc9492f35c81b8f3cfc2e3d858b73eaa549c28bbe6347e8f50f0eb4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

