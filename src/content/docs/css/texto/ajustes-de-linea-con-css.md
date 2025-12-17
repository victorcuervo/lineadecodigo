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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTN3ZKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVbPblhMy4jccS3okIlYQfaOOxvacWDHHCS2884Oh49AiA%2FBVIZSjauMhXl18f9XvwkhioJtGWCulAvH852deGJ6Sr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMd%2BZpjEMRfztcyQGiKtwDMc3uob%2BTfK%2FKdjGlJjwEdC5l40y%2BEsTHevn%2BBudruyeu93o1ZC5tukIzPlhFLBPNGq3Tj0EEO2PSMIl8vq80OKLzYLBRe3QlTg1%2FuTZ9jwTmVJuXlsudSwgEoiap%2FYzPlzNgk3IBLe69UeWicnd%2BsrJAJqIw2XCAurRK1V33Php8TeN9f0ty5GaZaDinTxkrDZzuNe6kwUPsahV2dnw6t3fDkLXiX9mOz%2FSOhsfIrpQwzkIIulnO3mhBH9ZmlnVSTi%2FJUgwgAMGOAI%2FK1keNaI6ScRj%2BNvBzC2cguu%2BspZrWGFSDGOeH0Xf2jKt0qbRZ0yA1kPCSnvlTYTYzOq9KQxyEMsNv%2BAXzYJ1Ops64%2B2yiNTR72GofeI4DXwAjWT%2BfVhjA4vUaTGRcf0jD06zu%2B2gDtm5c1Cdg%2BLKByQkGRO%2BLb5ayBluHqYk34a0ENMb0Dh6brFzg%2Fl6xQblhFPD%2BVCfYbGT2buYmozCI5sW23DX5%2FMOUXiNuCBIvbuC8oEK%2FJEnJ23izarpUirnEYZuq64BqfoLSmO7doubqCl0ebr%2FE5CXUv15z1xznCmamGT93%2BxWl1e207gcWLLQifWTaRReM5im%2Fqq1zgr1niaFRYjjDZEzQJoUvb%2F%2FX1kEwrbCKygY6pgE0SgVkLxX3K0AlCAudZqZ3ZwUzelwRhAM61NOQdBoU0VGcUCg6CSfFQkMKBeWv9jHu%2FHgKKonfJwkUSe7igNViQd31uzgCRZnddlzUnlqqa4HffBMVQUi7wJnfN5Ur6wSsITa%2F7v3xhSuynmNhuNzZD%2FFGxM9YFJh6GCK6f4nBmx%2F9%2BZ%2FPN0QMyMQHjPKlgCzlDHJ5dkk0gAkv9nz%2F06%2FqIxn4YXTC&X-Amz-Signature=06d4227bcf730589ac44d026aab63fc4ca4d34de2432ce03e6490848ce70d302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRTN3ZKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAVbPblhMy4jccS3okIlYQfaOOxvacWDHHCS2884Oh49AiA%2FBVIZSjauMhXl18f9XvwkhioJtGWCulAvH852deGJ6Sr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMd%2BZpjEMRfztcyQGiKtwDMc3uob%2BTfK%2FKdjGlJjwEdC5l40y%2BEsTHevn%2BBudruyeu93o1ZC5tukIzPlhFLBPNGq3Tj0EEO2PSMIl8vq80OKLzYLBRe3QlTg1%2FuTZ9jwTmVJuXlsudSwgEoiap%2FYzPlzNgk3IBLe69UeWicnd%2BsrJAJqIw2XCAurRK1V33Php8TeN9f0ty5GaZaDinTxkrDZzuNe6kwUPsahV2dnw6t3fDkLXiX9mOz%2FSOhsfIrpQwzkIIulnO3mhBH9ZmlnVSTi%2FJUgwgAMGOAI%2FK1keNaI6ScRj%2BNvBzC2cguu%2BspZrWGFSDGOeH0Xf2jKt0qbRZ0yA1kPCSnvlTYTYzOq9KQxyEMsNv%2BAXzYJ1Ops64%2B2yiNTR72GofeI4DXwAjWT%2BfVhjA4vUaTGRcf0jD06zu%2B2gDtm5c1Cdg%2BLKByQkGRO%2BLb5ayBluHqYk34a0ENMb0Dh6brFzg%2Fl6xQblhFPD%2BVCfYbGT2buYmozCI5sW23DX5%2FMOUXiNuCBIvbuC8oEK%2FJEnJ23izarpUirnEYZuq64BqfoLSmO7doubqCl0ebr%2FE5CXUv15z1xznCmamGT93%2BxWl1e207gcWLLQifWTaRReM5im%2Fqq1zgr1niaFRYjjDZEzQJoUvb%2F%2FX1kEwrbCKygY6pgE0SgVkLxX3K0AlCAudZqZ3ZwUzelwRhAM61NOQdBoU0VGcUCg6CSfFQkMKBeWv9jHu%2FHgKKonfJwkUSe7igNViQd31uzgCRZnddlzUnlqqa4HffBMVQUi7wJnfN5Ur6wSsITa%2F7v3xhSuynmNhuNzZD%2FFGxM9YFJh6GCK6f4nBmx%2F9%2BZ%2FPN0QMyMQHjPKlgCzlDHJ5dkk0gAkv9nz%2F06%2FqIxn4YXTC&X-Amz-Signature=c392dc59a2e00cb4daab843ffed20dfefe5641723ab1fce15ed5e9ac59ff04c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

