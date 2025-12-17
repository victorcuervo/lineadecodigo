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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34HKXEI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBeXJJACCp%2FjBpO1ZthT6HcF6PsPdGbXBwTb9cnfJDwAiBKTO6ZFdQgWMRclKbYfQeAhEmp3zuW7FfjswX2e6dDEiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB2%2FmpmNw2LOPQfRCKtwD6iS8HgwQtHAdiH%2BjdwzkRExpUPb3jLLCXvjCGu6iYG3e%2FNM4eR4E%2Bh041TemHcAeV10ZPM3665vNuHd6siDV7jFULSwqPAoXlyI2WNx4dll2A1nHqEYSnDn4CdoZwrCt97xLmLKsqOWayemjYSIlsiPqbuXf4gQ%2BCwluPyv99%2BSSdkxoaFfGq9H446J9PvjvuPGWmOgX0X25FTcF462maojpq6HXIiTFAntdXCrAYdO1WmV6eQoAVXL83a9GeTNWl1WsdiaaxQVAF%2Bu6DE0j6hBvNJec1O5qsxQqde10GC%2BbrQUlNawaC2YaYU%2FC4aCia4wQllPar4JpobO3L3EGvjLU5gGF17YxRTowm48kgLPInxhJAy6m78osju8uA4igA6kIv5Pn35hMcykh9hzSa9ilGn7dJIHfSos6Qh9TLKEmJxl2q%2BmgfHch36GmAyuvLuX7RzgnyVii6lhMunuCqJyRyup5cS6ni%2FgDGUZmTLigUxot0HgjeSl7qu5FEL9SsUuNcZnX8k8a1w%2FT2xxWqeeq7lKs7vEgDXapYqmjifBPXTfuGEgI73LvowA9lhc5aBdnSnXuLfazl77oLUFQteX5uQ4TemEljkmEZ4nbrX99fnu1RZm%2BwkGwMygw7aCLygY6pgHkZxMOa5dNhWH2H6BP2kkW4E%2FqFt1VTliJsUO163XDsGpA5%2FIzz51cS5H0NpVYi2XxnM1dXz0rvY2TvI96FCQS0W53PCYe1dsbLqkDH4LJwuRYeMXn2lFRwnHnRH%2BUf6WT0p3jIMekOGeYJFrvPHfdAT4K4nxKqMnhdok0Km6bgzxN71uQ%2Br%2BknCoU29uo%2FVN3C7KhWdVGo1XjEV%2BWbQ7MCoaVXjs%2F&X-Amz-Signature=3e468cb61487a2a1a26e0c934a46b51db6ac88cf6f5096ca2d7a4b3263ce1d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z34HKXEI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBeXJJACCp%2FjBpO1ZthT6HcF6PsPdGbXBwTb9cnfJDwAiBKTO6ZFdQgWMRclKbYfQeAhEmp3zuW7FfjswX2e6dDEiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB2%2FmpmNw2LOPQfRCKtwD6iS8HgwQtHAdiH%2BjdwzkRExpUPb3jLLCXvjCGu6iYG3e%2FNM4eR4E%2Bh041TemHcAeV10ZPM3665vNuHd6siDV7jFULSwqPAoXlyI2WNx4dll2A1nHqEYSnDn4CdoZwrCt97xLmLKsqOWayemjYSIlsiPqbuXf4gQ%2BCwluPyv99%2BSSdkxoaFfGq9H446J9PvjvuPGWmOgX0X25FTcF462maojpq6HXIiTFAntdXCrAYdO1WmV6eQoAVXL83a9GeTNWl1WsdiaaxQVAF%2Bu6DE0j6hBvNJec1O5qsxQqde10GC%2BbrQUlNawaC2YaYU%2FC4aCia4wQllPar4JpobO3L3EGvjLU5gGF17YxRTowm48kgLPInxhJAy6m78osju8uA4igA6kIv5Pn35hMcykh9hzSa9ilGn7dJIHfSos6Qh9TLKEmJxl2q%2BmgfHch36GmAyuvLuX7RzgnyVii6lhMunuCqJyRyup5cS6ni%2FgDGUZmTLigUxot0HgjeSl7qu5FEL9SsUuNcZnX8k8a1w%2FT2xxWqeeq7lKs7vEgDXapYqmjifBPXTfuGEgI73LvowA9lhc5aBdnSnXuLfazl77oLUFQteX5uQ4TemEljkmEZ4nbrX99fnu1RZm%2BwkGwMygw7aCLygY6pgHkZxMOa5dNhWH2H6BP2kkW4E%2FqFt1VTliJsUO163XDsGpA5%2FIzz51cS5H0NpVYi2XxnM1dXz0rvY2TvI96FCQS0W53PCYe1dsbLqkDH4LJwuRYeMXn2lFRwnHnRH%2BUf6WT0p3jIMekOGeYJFrvPHfdAT4K4nxKqMnhdok0Km6bgzxN71uQ%2Br%2BknCoU29uo%2FVN3C7KhWdVGo1XjEV%2BWbQ7MCoaVXjs%2F&X-Amz-Signature=280590702e0cb2b28e3b54861f994e3a2bf885e81e815ecdc2d530c617d864c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

