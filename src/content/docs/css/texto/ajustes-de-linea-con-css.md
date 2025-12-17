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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSTFHZK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFsQ%2B3idnlqydAcXVZUqFHISGEbsq6dnTzUy%2F08n%2BP1QIgNy%2FWvD%2Fxeu34fIXPR3tibOKCOdaScKG7pFlQgw4otcgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI1FFODBSHBPrVJCWyrcA6%2B6DvZKbrunEwAC43jIFfmfBHIsbvAAt0eNsduNPoyBEHCCFnnaotZL%2FraFZFMJB8NpxLimJws6HmEqXtUAr0rBLlh%2BuTFMY%2B4D9DaCXG8qSkMkb9W7%2F9PiweDgoHjV%2FZ47b4jdHZ7IwwS51apGCjeq9KwypI8%2FLrbQ%2B4zkOeN%2BFA2i5JzVuedMrY%2F75wOnrN0hD5C7ey9HSts7VYhFkYzh3UC6gM1EnjNvyplTtgd5Zsy9Q8TQs30qGWDIVk10QJMGs7qPhcOyKFO9RmPDuc02frxpt%2FO2oOt7wQmdtPVH91YUwzE1wv2AXDzUGhD1EFjmKwwM2500%2F8hLvzU%2Fn05U2HxnkfUo2NK3uNF3vC3Sr23nWaK%2BCvxGd%2BwJyEt5D7xYHZ%2BcNN3r68JeSK2KHM2b26BQo%2FH6qc5QtLoke1UmsN0Wwqbzb47mAsBgoPDBAirNNA0gFFPAia7orvcqJ7HmwZUC5IGj%2FyPQvvLh3Ag7CjjQJ%2BVNUyMnlSIB6Ck3aQN2apzl70%2FgVD5Rzp8nXUd3uXzKZwAiXfHlo6osoAqJ0AdEQcT%2BbflA6u78b4nC2QuRIp0ohFQuxCLdWH%2BwT%2F4SLHhEAO2H7m9AnaeWYhBqKUon1AYolrH7r%2FNcMPrFisoGOqUBEj%2FvlPc0Da3PL7PUIyOgukDSoVz74bStZdWF%2F7cSb6fdwijPn4SwpsmIfRRn8a00JaOav%2BKn7FmTtNKF9qii2mCxCrqs%2FrYHClVUAnTfXWG98qCJ7134jU37ksZzPKmz9afCwjPewJIoQVC%2B3oAT0v%2B8HjGN0JF%2FvaZrDEjXypt74EtHCp0SXQtxHuxMCT1Gq3W61wKBoGPPtuQyv%2BcoWVy6CIJu&X-Amz-Signature=8906bcf7b4804b239ba8c77d21914835217687ea4943ecb8b9c0e5d5f37bed5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJSTFHZK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFsQ%2B3idnlqydAcXVZUqFHISGEbsq6dnTzUy%2F08n%2BP1QIgNy%2FWvD%2Fxeu34fIXPR3tibOKCOdaScKG7pFlQgw4otcgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDI1FFODBSHBPrVJCWyrcA6%2B6DvZKbrunEwAC43jIFfmfBHIsbvAAt0eNsduNPoyBEHCCFnnaotZL%2FraFZFMJB8NpxLimJws6HmEqXtUAr0rBLlh%2BuTFMY%2B4D9DaCXG8qSkMkb9W7%2F9PiweDgoHjV%2FZ47b4jdHZ7IwwS51apGCjeq9KwypI8%2FLrbQ%2B4zkOeN%2BFA2i5JzVuedMrY%2F75wOnrN0hD5C7ey9HSts7VYhFkYzh3UC6gM1EnjNvyplTtgd5Zsy9Q8TQs30qGWDIVk10QJMGs7qPhcOyKFO9RmPDuc02frxpt%2FO2oOt7wQmdtPVH91YUwzE1wv2AXDzUGhD1EFjmKwwM2500%2F8hLvzU%2Fn05U2HxnkfUo2NK3uNF3vC3Sr23nWaK%2BCvxGd%2BwJyEt5D7xYHZ%2BcNN3r68JeSK2KHM2b26BQo%2FH6qc5QtLoke1UmsN0Wwqbzb47mAsBgoPDBAirNNA0gFFPAia7orvcqJ7HmwZUC5IGj%2FyPQvvLh3Ag7CjjQJ%2BVNUyMnlSIB6Ck3aQN2apzl70%2FgVD5Rzp8nXUd3uXzKZwAiXfHlo6osoAqJ0AdEQcT%2BbflA6u78b4nC2QuRIp0ohFQuxCLdWH%2BwT%2F4SLHhEAO2H7m9AnaeWYhBqKUon1AYolrH7r%2FNcMPrFisoGOqUBEj%2FvlPc0Da3PL7PUIyOgukDSoVz74bStZdWF%2F7cSb6fdwijPn4SwpsmIfRRn8a00JaOav%2BKn7FmTtNKF9qii2mCxCrqs%2FrYHClVUAnTfXWG98qCJ7134jU37ksZzPKmz9afCwjPewJIoQVC%2B3oAT0v%2B8HjGN0JF%2FvaZrDEjXypt74EtHCp0SXQtxHuxMCT1Gq3W61wKBoGPPtuQyv%2BcoWVy6CIJu&X-Amz-Signature=29334df8b5b998653fb6e1c53d38cf851619490fd293cf679d7e01bdec2f87f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

