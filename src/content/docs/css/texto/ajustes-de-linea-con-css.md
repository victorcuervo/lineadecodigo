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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXM66Y5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAw9Mu5IkKDvoxoiwWudeWN6oCfPNNml4svBmSB7BGT0AiAv2LEh8yIDFY5pvAgyDpRj4Mp6e2YY9Qx9IS3RkwZnLyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMrdB39vCV5ciPa0l6KtwDETr2JJFU73BhYFuhGh0Pm%2FUxAhDg57kT%2Bab5fooIYTdfCjkIU1LXVHtS6HsWHVJjRRm7rCLzfn7hqSswOMwjE%2F3nuUJl%2B23i%2BIIn1xNlczqCKHibYhT%2F8%2Bb5OV%2FYy562P8jQFHOvc8o6ehUWTNYwrWrQRE81YZgtTkBdZ4nSJ2NiV45vpuxZoFIhRovDLQqZ279oVLkkXOCkJK9lSWH2PMboz0WXgVIu%2FILqWNKR8dvddSpwyacocV9r0eycsGdkjiiN8etQq2zrm4yXc2MVG%2BzXeEFnOWIO6lUrJJ4nzzSUzUNZKKZO1J93MyDy0fl%2BDs2icsrf8y5jK75uo3h3eCYZ3SqjAjTpwNMer71O4%2FYZtIc1Cvg5LQWdzkEUPDgAABOeiFSaR4%2BxeNaFcrUQGoULtSwqrTzvVd7ulT7YVgszzdqh6dz20%2BN5ixjAf6VRe8g4ZzEKEBNTpRhGQsoyaD%2FeBcNBvpvMixwxX0XKmB53VzheIa9KJ7MID2%2BaQiwclwZeQyZmvr6CIc7CdSMUxzu8sX7gXQt%2Fu1835b8cJqmTTclmti8Bwl4vR2h6vCEOMLd4Cubt2Tv7xyWoKAP%2FNIg%2Fsv0RZyVkSuw3sMSKYEy7Th44sYlGn%2F6snTswo7iJygY6pgEkWGsaWsaaZWfvX%2FPs%2FB4HWfBg8YJPsPp%2FGrGNLPSo2n61KdiKtRp0WfUuLY5OjgHo5TBIQBq%2F095T4%2BGBNFeNh4Kp95ryT3DI82m8xGoZHk0LEF6GmvmeHr8QzqzADN7c177s84XPNHyGwTQekRahCgXeDpfdrKPsAA0y0s1A7uX1x3KPeKmvwK0vE0X0KF70EjOeE2sjWCq18XScY%2BZyCadMUVId&X-Amz-Signature=519bd7cc21bec27f170cf2ba4754f160934d3019adea96e5580696472d38dea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXM66Y5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAw9Mu5IkKDvoxoiwWudeWN6oCfPNNml4svBmSB7BGT0AiAv2LEh8yIDFY5pvAgyDpRj4Mp6e2YY9Qx9IS3RkwZnLyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMrdB39vCV5ciPa0l6KtwDETr2JJFU73BhYFuhGh0Pm%2FUxAhDg57kT%2Bab5fooIYTdfCjkIU1LXVHtS6HsWHVJjRRm7rCLzfn7hqSswOMwjE%2F3nuUJl%2B23i%2BIIn1xNlczqCKHibYhT%2F8%2Bb5OV%2FYy562P8jQFHOvc8o6ehUWTNYwrWrQRE81YZgtTkBdZ4nSJ2NiV45vpuxZoFIhRovDLQqZ279oVLkkXOCkJK9lSWH2PMboz0WXgVIu%2FILqWNKR8dvddSpwyacocV9r0eycsGdkjiiN8etQq2zrm4yXc2MVG%2BzXeEFnOWIO6lUrJJ4nzzSUzUNZKKZO1J93MyDy0fl%2BDs2icsrf8y5jK75uo3h3eCYZ3SqjAjTpwNMer71O4%2FYZtIc1Cvg5LQWdzkEUPDgAABOeiFSaR4%2BxeNaFcrUQGoULtSwqrTzvVd7ulT7YVgszzdqh6dz20%2BN5ixjAf6VRe8g4ZzEKEBNTpRhGQsoyaD%2FeBcNBvpvMixwxX0XKmB53VzheIa9KJ7MID2%2BaQiwclwZeQyZmvr6CIc7CdSMUxzu8sX7gXQt%2Fu1835b8cJqmTTclmti8Bwl4vR2h6vCEOMLd4Cubt2Tv7xyWoKAP%2FNIg%2Fsv0RZyVkSuw3sMSKYEy7Th44sYlGn%2F6snTswo7iJygY6pgEkWGsaWsaaZWfvX%2FPs%2FB4HWfBg8YJPsPp%2FGrGNLPSo2n61KdiKtRp0WfUuLY5OjgHo5TBIQBq%2F095T4%2BGBNFeNh4Kp95ryT3DI82m8xGoZHk0LEF6GmvmeHr8QzqzADN7c177s84XPNHyGwTQekRahCgXeDpfdrKPsAA0y0s1A7uX1x3KPeKmvwK0vE0X0KF70EjOeE2sjWCq18XScY%2BZyCadMUVId&X-Amz-Signature=52a2cae780bc09d9438050ff9311e4608a2cd0b80c3e876d5347ca62ff78978b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

