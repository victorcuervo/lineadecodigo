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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMAFOZR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSX7B%2Fc9K461I%2FFcSd8APTWjl5h%2BylYMcT4rlQMB6tZwIgD2sb4gxxZGXUvr%2BpZ4EKMH2oIuuFah1ZCJmmYxemYAgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDO%2BnzWglGkGUR1R5FyrcA4Hg1%2FHGCce81DisD4ipvNwkFpDLd5yhh%2FuX4LhJIq0NHS%2F9XXT7wfk7wyFaq36uLMFYkPXk6LdIf6Rs1d2b31OY4n6B52FdN%2F6z4lXJYhJzbVICuGvAKuM6f02wGV0T69PTGyafk0VFaBD9qf3QJLsK7R5kGrsBT57I5Ysrsp4vHmXatNBU7f8MuOSebWkWY4zDlCfWUGUY9K3dZEPgxDRDL1lg%2F7784NpMEJIq8SYs8hoEOBlkpYNIYLsbE2DnauPpncklRV%2B02g%2B%2Fj4rJiW%2BfDMiYB9sE5mn9K9S9pK%2FRw7mhlXOyBF14R6U%2BevNwWiJneQYTvIhLNgRhhrT%2FCIWHft8fM2Lv%2Fq5G5swz3zl2AY0XRVMNTlT0RGqDcXnYWtNQNpZW17M5nLf4ielUi5vDHi9OKinadxutUTctts2FMon%2BIvUJ3P7stCpa39tojV85wiwGgoPIdNnmEDxxwHhDKPk27zO4kyxZK%2FhBLhXn%2BK9Fw1SjUrfWzEr1azXx4fO0nNW5oxG5DxIWEoMs3dIIYa4Pqa1%2FTWVWg4UdySaOX501paGqxhsQBouQqTnSuIJh4ECBC91%2FFYgQt4rqlMFdCX6smES2leGXvRW0IMobBsvW7On0WCbx%2Bsa8MK%2B4icoGOqUBdjLBWnD6PG0XWszC9%2FGsIS%2FKgt3Wmr%2FyI5Ytz9seveNFmMicUKSLMA0VTBokOYAI3zn24w0NBnz8eZ6eAd2%2FZFkZAjNv2N2DoTjHQCX15K8JEjdkrq4VOkFdf6GK5A25VyL6BHZu6SNlqorjlxWJr2HiuyIrz8wHmVm2mKK32GbmzKYQAIX7AQtKWaHBQSmWGi25Wrx%2Fn9%2FCJLfTeleNUNlB5OKP&X-Amz-Signature=cddccc3bf91f94b8f26ca0224d62d4669884825cdafb1ee18fb69cb496ed5e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMAFOZR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSX7B%2Fc9K461I%2FFcSd8APTWjl5h%2BylYMcT4rlQMB6tZwIgD2sb4gxxZGXUvr%2BpZ4EKMH2oIuuFah1ZCJmmYxemYAgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDO%2BnzWglGkGUR1R5FyrcA4Hg1%2FHGCce81DisD4ipvNwkFpDLd5yhh%2FuX4LhJIq0NHS%2F9XXT7wfk7wyFaq36uLMFYkPXk6LdIf6Rs1d2b31OY4n6B52FdN%2F6z4lXJYhJzbVICuGvAKuM6f02wGV0T69PTGyafk0VFaBD9qf3QJLsK7R5kGrsBT57I5Ysrsp4vHmXatNBU7f8MuOSebWkWY4zDlCfWUGUY9K3dZEPgxDRDL1lg%2F7784NpMEJIq8SYs8hoEOBlkpYNIYLsbE2DnauPpncklRV%2B02g%2B%2Fj4rJiW%2BfDMiYB9sE5mn9K9S9pK%2FRw7mhlXOyBF14R6U%2BevNwWiJneQYTvIhLNgRhhrT%2FCIWHft8fM2Lv%2Fq5G5swz3zl2AY0XRVMNTlT0RGqDcXnYWtNQNpZW17M5nLf4ielUi5vDHi9OKinadxutUTctts2FMon%2BIvUJ3P7stCpa39tojV85wiwGgoPIdNnmEDxxwHhDKPk27zO4kyxZK%2FhBLhXn%2BK9Fw1SjUrfWzEr1azXx4fO0nNW5oxG5DxIWEoMs3dIIYa4Pqa1%2FTWVWg4UdySaOX501paGqxhsQBouQqTnSuIJh4ECBC91%2FFYgQt4rqlMFdCX6smES2leGXvRW0IMobBsvW7On0WCbx%2Bsa8MK%2B4icoGOqUBdjLBWnD6PG0XWszC9%2FGsIS%2FKgt3Wmr%2FyI5Ytz9seveNFmMicUKSLMA0VTBokOYAI3zn24w0NBnz8eZ6eAd2%2FZFkZAjNv2N2DoTjHQCX15K8JEjdkrq4VOkFdf6GK5A25VyL6BHZu6SNlqorjlxWJr2HiuyIrz8wHmVm2mKK32GbmzKYQAIX7AQtKWaHBQSmWGi25Wrx%2Fn9%2FCJLfTeleNUNlB5OKP&X-Amz-Signature=dc3c67dbfd0f478612780370726969ab7d0c9227e08f8a17809beaf7b93611d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

