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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQK5CVSP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsCnii86S492EgIwPaj9M76czSHHS8Ospf2N3T2R33rAiB6VS%2B9HEwlE%2B5MajOTHzn%2BTl47G2C8CjhSPgFAtk6CWiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoIvEM8Ao3cMhSPV5KtwDRqXbV5UsYK6KwI3bylUIh9eW8HQe0He9sUPyveAzV2TlsHNZv6BaDSsFDNqQcJryLYctoWdZVUXoYHP%2BoAPy72DDXEUmns%2FM2ogqztyIBKZdJw%2F7upOv4hCtjhhQ1zVtVYTSWFT3kwc30fYOzndq61LNiCGvXIBioEXu1paEydILhoNovTvARhTvpFGso2PTkIuTMzKTGOR9a0PPAHiYA5qcVkWc%2F7LmYXh3TgfCATTqW%2BkDyWonNItQyb6OSRjmbJp9D45XCbrL5lowahqyC1aQuMY3%2FN1xhpRNeeTmWdvk55h6O6BDyJPxBjbJ5D3NLwKMikcr%2BKO6Z0X5mR%2BTUkP3lu%2B4e%2Bs%2BYEMedK7bEmORFPPGYDNfZFyQk2KHKQXFGj7Oz8IEQ%2BbfYZSyxD0faz8e3rzQle6w7w044nsAbdfhrnPKyt%2BlJ0duufa%2FCzyVO4%2Fbsi9%2FwLmUJper1Gi5TbuJh9Qir0WprKVTC%2FMRt95MARrO4Vj%2B6DABkaZq7SZLOWMYURutDKK20ty0Yn%2F9z8xpqRJdTFhXNH89i7QJ55X4E6Bup2u0K5KWD4d1XiGe%2FxqvjZaoMsfXI7Twi70vAZwEz2YxTVU7T0P3wxGJxf5nZaXQgwEtvG0bhl0w7aCLygY6pgGc4AYN4FxFYqQE6BMHje37RaxiqJXn3yz4pjjecf50f7GvwQ2kwkZc%2ByJbFK4vFu%2F%2BPeCiNHn9sI%2F%2Fu0thXv2Waym6Ul%2BrBMSNN1iuVT0wmY3mCxR7ogqflSQmPHIX4%2BuNpr5R8JWv0Xc4gHqC6AVuook32Ng05wL0fFIQzsygZs%2BtKpnTwP99EIl2TsfKcM4Qd%2FtWrOSY7t86piGh5C3KoN8t%2B%2Fha&X-Amz-Signature=4f95619110b88931d18d45fb0d222a07a017a94161c6c7dabf2748273b756e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQK5CVSP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsCnii86S492EgIwPaj9M76czSHHS8Ospf2N3T2R33rAiB6VS%2B9HEwlE%2B5MajOTHzn%2BTl47G2C8CjhSPgFAtk6CWiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoIvEM8Ao3cMhSPV5KtwDRqXbV5UsYK6KwI3bylUIh9eW8HQe0He9sUPyveAzV2TlsHNZv6BaDSsFDNqQcJryLYctoWdZVUXoYHP%2BoAPy72DDXEUmns%2FM2ogqztyIBKZdJw%2F7upOv4hCtjhhQ1zVtVYTSWFT3kwc30fYOzndq61LNiCGvXIBioEXu1paEydILhoNovTvARhTvpFGso2PTkIuTMzKTGOR9a0PPAHiYA5qcVkWc%2F7LmYXh3TgfCATTqW%2BkDyWonNItQyb6OSRjmbJp9D45XCbrL5lowahqyC1aQuMY3%2FN1xhpRNeeTmWdvk55h6O6BDyJPxBjbJ5D3NLwKMikcr%2BKO6Z0X5mR%2BTUkP3lu%2B4e%2Bs%2BYEMedK7bEmORFPPGYDNfZFyQk2KHKQXFGj7Oz8IEQ%2BbfYZSyxD0faz8e3rzQle6w7w044nsAbdfhrnPKyt%2BlJ0duufa%2FCzyVO4%2Fbsi9%2FwLmUJper1Gi5TbuJh9Qir0WprKVTC%2FMRt95MARrO4Vj%2B6DABkaZq7SZLOWMYURutDKK20ty0Yn%2F9z8xpqRJdTFhXNH89i7QJ55X4E6Bup2u0K5KWD4d1XiGe%2FxqvjZaoMsfXI7Twi70vAZwEz2YxTVU7T0P3wxGJxf5nZaXQgwEtvG0bhl0w7aCLygY6pgGc4AYN4FxFYqQE6BMHje37RaxiqJXn3yz4pjjecf50f7GvwQ2kwkZc%2ByJbFK4vFu%2F%2BPeCiNHn9sI%2F%2Fu0thXv2Waym6Ul%2BrBMSNN1iuVT0wmY3mCxR7ogqflSQmPHIX4%2BuNpr5R8JWv0Xc4gHqC6AVuook32Ng05wL0fFIQzsygZs%2BtKpnTwP99EIl2TsfKcM4Qd%2FtWrOSY7t86piGh5C3KoN8t%2B%2Fha&X-Amz-Signature=162d386ec38b642e2897a364fd1e41fbc28b4a079ad7e4a80aee45610dc6c241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

