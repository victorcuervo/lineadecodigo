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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V2V3FVB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbeMlvyDt6j6xgeZbSbg9f8ALPGpsWQ0Z6kZVLJnsGgIgH5CpPCivqHkNdUgw8tZj2vmkdd4ot48pGecRaqLnlLEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO65Zw3G2AAI1gfH9SrcA6IEQgVOoMIpJjEJvyPArsZ81HRvtXtVZUlAzZ6VFbz3NoZ0WnPlSsbJ42zlcVedLE016rU3SCxHUzaRZzPgGOwAPqTqBqEJ2PYPw5E7GBe%2Bn8DGp53ow9mdvLJzHWXGeY2qXsXSDEQ9Vd8PsctGDRxNxVMn7xq0dk7r5ey2BuVm51vcft5ljJ0kPA7vsEzFnkALoTQ8ls6BQMXEnV9LxneHUUpUz5JPTU8yhLqED2cROtTocSiTFfScxOj3WnDR0lSSD5n46Sw4bbNLWs2Xo3jnWu3BVdGKPN2VfWN9hpwk66gIFwq3S6%2FdVXJLnvMhB%2B2yLXSe5PLFcVP6ouH%2FzrlFPgZhn35imKiD8eBmlJZCum0HMY%2FvxYrwumWJXEl8Flb2ON3uEDnOgkPyrN31RBxGQrhgFKQNDP51LZKNmksVwkjlrMh4RvTdlZwida4Nmnh2arZPO8GPyyOmAXLt986etkhVk%2FuJf9hkr%2BmI5j%2BNc0PWBJuA7eam9SoOFwuS4E%2FZMQH%2BSG7hURO49MKk86AvFB612IkCs%2BtZb5YgEifsodN7H9CPU5rCRbdBfJydey76ABMmPa5k9%2FNrc%2Bizuflj5dnahFVof25fcaZQpr%2FYjfFPheVKNva6AMkwMNiei8oGOqUB3ohbFJGhrcVvIMXP6XjI1XxH%2F1xiAkPSnYw2vPK5H%2FQEJXE9q65YT3WrXijCbkhmGShHkhy4hgxq0E76zA4J7%2BAScH10tfPk53g7Zok9hLH8wF0cOD%2BZJRpGH9CfqqRMMarf5EfVhqda2S8M9oighjcOPBKzO%2FV8i3jlKNDo8g1%2FCqekfVrsosEheQWNQbHq%2BfFAPZbJHoYCGqLQt1enW5cedQHY&X-Amz-Signature=6d31110fc84895f3e868b8dbbeed933945761f49a3f40289d894b4fdeb803d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V2V3FVB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbeMlvyDt6j6xgeZbSbg9f8ALPGpsWQ0Z6kZVLJnsGgIgH5CpPCivqHkNdUgw8tZj2vmkdd4ot48pGecRaqLnlLEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO65Zw3G2AAI1gfH9SrcA6IEQgVOoMIpJjEJvyPArsZ81HRvtXtVZUlAzZ6VFbz3NoZ0WnPlSsbJ42zlcVedLE016rU3SCxHUzaRZzPgGOwAPqTqBqEJ2PYPw5E7GBe%2Bn8DGp53ow9mdvLJzHWXGeY2qXsXSDEQ9Vd8PsctGDRxNxVMn7xq0dk7r5ey2BuVm51vcft5ljJ0kPA7vsEzFnkALoTQ8ls6BQMXEnV9LxneHUUpUz5JPTU8yhLqED2cROtTocSiTFfScxOj3WnDR0lSSD5n46Sw4bbNLWs2Xo3jnWu3BVdGKPN2VfWN9hpwk66gIFwq3S6%2FdVXJLnvMhB%2B2yLXSe5PLFcVP6ouH%2FzrlFPgZhn35imKiD8eBmlJZCum0HMY%2FvxYrwumWJXEl8Flb2ON3uEDnOgkPyrN31RBxGQrhgFKQNDP51LZKNmksVwkjlrMh4RvTdlZwida4Nmnh2arZPO8GPyyOmAXLt986etkhVk%2FuJf9hkr%2BmI5j%2BNc0PWBJuA7eam9SoOFwuS4E%2FZMQH%2BSG7hURO49MKk86AvFB612IkCs%2BtZb5YgEifsodN7H9CPU5rCRbdBfJydey76ABMmPa5k9%2FNrc%2Bizuflj5dnahFVof25fcaZQpr%2FYjfFPheVKNva6AMkwMNiei8oGOqUB3ohbFJGhrcVvIMXP6XjI1XxH%2F1xiAkPSnYw2vPK5H%2FQEJXE9q65YT3WrXijCbkhmGShHkhy4hgxq0E76zA4J7%2BAScH10tfPk53g7Zok9hLH8wF0cOD%2BZJRpGH9CfqqRMMarf5EfVhqda2S8M9oighjcOPBKzO%2FV8i3jlKNDo8g1%2FCqekfVrsosEheQWNQbHq%2BfFAPZbJHoYCGqLQt1enW5cedQHY&X-Amz-Signature=cfbd80bc213b77be89c14daeeb3829cf9e65c206ccdced15ce00d8cbbb5ab755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

