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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7F7VG6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQnHbpHHbl1ceugvt45BPuYbF7tlL%2Bms5pKY5nTrYCwIhAIqtVSJLBHXRAWb%2FKUXW3xu3E%2Bp0F5jC8HtWrQ%2BtP6N%2BKv8DCH8QABoMNjM3NDIzMTgzODA1IgwM7qtpA5nc5GUZskoq3ANsyy9miP%2Ft9KglMGa3zUA9nMEfcJO9DevZEF3Ui4uADmbsz6QzGfvKmSFcAnagUcV8Rs7%2BYFlZBggg%2FXOxiJo6ldEFAdmJ4H8tr5ZlVmXV9zNY4xD90alg%2Fb%2FXWUNMk2P%2BdfVfJJL%2B5h%2Bl5RtM1acmMlfALHOLYrQmRa4Abk0jL%2F4g0PtUPN56hu%2BfIMgyyY2O%2Btqz726fNdnGbT%2FtMVNcR1uP6pdBxIm1JuhLP8iQIxxLSt3F9T693mlITzjN1%2BvRzik2qD5DGs5SOvY8UvWtWwO8y1Xs%2Bbe7OAsJNWwkuOvaltj9T0qfbFaVVklIKSwIsZfHa%2B9TVbrM5Ygsk4Ny7f1tYto7Cpub35F9lJAVeB7SbOJ9i9%2BIvO3s7QmotAczuHSimcGboCn%2FRpSe%2Bh2gIh%2FQh5iOX0lDnpdBBJWynsEOmkP%2B8Gg81Mn3yBb3vZClUyua4K1lQktiTxkCLrnKiiAIytlEOallAO7xDngAgdgt2HSjFuNhpgjhbnfNJF76R4wlCWdWebXsBKfxW6D9DuSDiyPYkdOAsy%2Fp4FN2guuP0l0Mc54k18bORRn%2BOK0RcqlK7Cyz4ySiKOMuk3jF9zz%2FWFdRwVXiixn44yU6EeM%2BiJHFxa1pRoBUcTDs4IrKBjqkAfKLEo7S5adgK%2BYTQ%2BE0c2u6v0O%2BW01SdyXRznZPD7yMNcKpyfSVtNjaaM7lgRYIhMENfSSdEfBUIqUxia8GY0Mn5%2F9ZZEXfVI00SIvAK9p8R8o9CW%2Btl4WDJmoozOQIXWUO955k%2FUn1vg650jrMTtvPXVoE94ZEPkwlweFFgk0Aw6fGQO9UwoULFg1eZZOnNv5MXPrHjsYayMCwDsAsCZnTsMgH&X-Amz-Signature=60f48bed7f8c77562dcb42e27cfad1c02665cba9a6a078aba16ac6e15d347d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7F7VG6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCQnHbpHHbl1ceugvt45BPuYbF7tlL%2Bms5pKY5nTrYCwIhAIqtVSJLBHXRAWb%2FKUXW3xu3E%2Bp0F5jC8HtWrQ%2BtP6N%2BKv8DCH8QABoMNjM3NDIzMTgzODA1IgwM7qtpA5nc5GUZskoq3ANsyy9miP%2Ft9KglMGa3zUA9nMEfcJO9DevZEF3Ui4uADmbsz6QzGfvKmSFcAnagUcV8Rs7%2BYFlZBggg%2FXOxiJo6ldEFAdmJ4H8tr5ZlVmXV9zNY4xD90alg%2Fb%2FXWUNMk2P%2BdfVfJJL%2B5h%2Bl5RtM1acmMlfALHOLYrQmRa4Abk0jL%2F4g0PtUPN56hu%2BfIMgyyY2O%2Btqz726fNdnGbT%2FtMVNcR1uP6pdBxIm1JuhLP8iQIxxLSt3F9T693mlITzjN1%2BvRzik2qD5DGs5SOvY8UvWtWwO8y1Xs%2Bbe7OAsJNWwkuOvaltj9T0qfbFaVVklIKSwIsZfHa%2B9TVbrM5Ygsk4Ny7f1tYto7Cpub35F9lJAVeB7SbOJ9i9%2BIvO3s7QmotAczuHSimcGboCn%2FRpSe%2Bh2gIh%2FQh5iOX0lDnpdBBJWynsEOmkP%2B8Gg81Mn3yBb3vZClUyua4K1lQktiTxkCLrnKiiAIytlEOallAO7xDngAgdgt2HSjFuNhpgjhbnfNJF76R4wlCWdWebXsBKfxW6D9DuSDiyPYkdOAsy%2Fp4FN2guuP0l0Mc54k18bORRn%2BOK0RcqlK7Cyz4ySiKOMuk3jF9zz%2FWFdRwVXiixn44yU6EeM%2BiJHFxa1pRoBUcTDs4IrKBjqkAfKLEo7S5adgK%2BYTQ%2BE0c2u6v0O%2BW01SdyXRznZPD7yMNcKpyfSVtNjaaM7lgRYIhMENfSSdEfBUIqUxia8GY0Mn5%2F9ZZEXfVI00SIvAK9p8R8o9CW%2Btl4WDJmoozOQIXWUO955k%2FUn1vg650jrMTtvPXVoE94ZEPkwlweFFgk0Aw6fGQO9UwoULFg1eZZOnNv5MXPrHjsYayMCwDsAsCZnTsMgH&X-Amz-Signature=1378303d45b4654df32dd0272a59d125671b395e5b3ed1d0ec62de42c4d1b749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

